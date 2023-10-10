import { Injectable, Inject } from '@angular/core';
import { LoginRequest } from './models/login-request';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
export class TbAuthGuard {
    constructor(authService, router, env) {
        this.authService = authService;
        this.router = router;
        this.env = env;
    }
    async canActivate(next, state) {
        /**
         * Se ricevo jwt e subKey significa che devo fare una "autologin"
         * Creo un LoginRequest con i valori ricevuti, integro con appid letto da environment ed effettuo una login specifica
         * In caso positivo vado in homepage "/"
         */
        const jwt = next.queryParams.hasOwnProperty('jwt') ? next.queryParams.jwt : null;
        const subKey = next.queryParams.hasOwnProperty('subKey') ? next.queryParams.subKey : null;
        const instanceKey = next.queryParams.hasOwnProperty('instanceKey') ? next.queryParams.instanceKey : null;
        const ns = next.queryParams.hasOwnProperty('ns') ? next.queryParams.ns : null;
        const args = next.queryParams.hasOwnProperty('args') ? next.queryParams.args : null;
        //potrei passare di qua quando ho già un token valido, quindi il meccanismo "no jwt->redirect verso il gateway" non deve partire
        const tempToken = this.authService.getToken() || '';
        //mago non deve più far vedere la sua pagina di login, a meno che non si tratti di magoweb o ambiente di sviluppo
        //viene effettuato direttamente un redirect all'indirizzo specificato (tipicamente lo usergateway)
        //se non arrivi da un redirect con token o se non sei già autenticato, rimando al gateway
        if (!jwt && this.env.auth.redirectIfNotAuthenticated && this.authService.getUserGatewayUrl() && !tempToken) {
            this.authService.navigateUserGateway();
            return true;
        }
        const connection = await this.authService.checkConnection();
        if (!connection) {
            console.log(`CONNECTIONDOWN on: ${this.authService.getBaseUrl()}`);
            // non sono loggato quindi vado alla login
            if (!state.url.includes('/login')) {
                this.router.navigate(['login']);
            }
            return true;
        }
        if (state.url.includes(this.authService.getLoginPageUrl())) {
            this.authService.clearStorage();
            return true;
        }
        //store nel local/sessions storage delle info necessarie allo snapshot
        //in questo caso la libreria sta "vivendo" dentro mago, riceve la redirect dello user gateway e popola queste info
        if (subKey && instanceKey)
            this.authService.storageQueryParams(subKey, instanceKey);
        if (jwt && subKey && instanceKey) {
            const loginRequest = new LoginRequest();
            loginRequest.token = jwt;
            loginRequest.subscriptionKey = subKey;
            loginRequest.appId = this.authService.getAppId();
            console.log('login by token...');
            const loginResponse = (await this.authService.login(loginRequest).catch((err) => {
                this.authService.errorMessage = err.error && err.error.Message;
                this.router.navigate(['login']);
                return;
            }));
            if (!loginResponse) {
                this.router.navigate(['login']);
                return false;
            }
            if (loginResponse.Result) {
                this.authService.errorMessage = '';
                //questa parte è da refactorizzare,  per apertura documenti da infinity urgentissima
                //in futuro ci sarà l'url originale della richiesta
                const url = ns ? 'document' : this.authService.getRedirectUrl();
                this.router.navigate([url], {
                    replaceUrl: true,
                    queryParams: { jwt: null, subKey: null, ns: ns, args: args },
                    queryParamsHandling: 'merge',
                });
                //this.router.navigate([this.authService.getRedirectUrl()]);
                return true;
            }
        }
        /**
         * Se arrivo qua vuol dire che ho già un token salvato e non scaduto quindi chiedo conferma della validità
         */
        const authtoken = this.authService.getToken() || '';
        if (authtoken) {
            // ho un token, ma ne verifico la validità
            const res = (await this.authService.isValidToken(authtoken));
            if (res.Result) {
                if (state.url.includes(this.authService.getLoginPageUrl()))
                    this.router.navigate([this.authService.getRedirectUrl()]);
                return true;
            }
            else {
                this.router.navigate([this.authService.getLoginPageUrl()]);
                return false;
            }
        }
        else {
            // non sono loggato quindi vado alla login
            if (!state.url.includes(this.authService.getLoginPageUrl()))
                this.router.navigate([this.authService.getLoginPageUrl()]);
            return true;
        }
    }
}
/** @nocollapse */ /** @nocollapse */ TbAuthGuard.ɵfac = function TbAuthGuard_Factory(t) { return new (t || TbAuthGuard)(i0.ɵɵinject(i1.TbAuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject('env')); };
/** @nocollapse */ /** @nocollapse */ TbAuthGuard.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: TbAuthGuard, factory: TbAuthGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.TbAuthService }, { type: i2.Router }, { type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVF0RCxNQUFNLE9BQU8sV0FBVztJQUNwQixZQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBc0I7UUFBakcsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXlCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQUcsQ0FBQztJQUV6SCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQTRCLEVBQUUsS0FBMEI7UUFDdEU7Ozs7V0FJRztRQUNILE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFGLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pHLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJ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QUMsQ0FBQyxDQUFDO2dCQUMzRCxPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO2FBQU07WUFDSCwwQ0FBMEM7WUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4SCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7NEdBcEdRLFdBQVcscUVBQzRELEtBQUs7bUhBRDVFLFdBQVcsV0FBWCxXQUFXLG1CQUZSLE1BQU07dUZBRVQsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7O3NCQUU0RSxNQUFNO3VCQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgVGJBdXRoRW52aXJvbm1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRoLWVudmlyb25tZW50JztcclxuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi9tb2RlbHMvb3BlcmF0aW9uLXJlc3VsdCc7XHJcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52OiBUYkF1dGhFbnZpcm9ubWVudCkge31cclxuXHJcbiAgICBhc3luYyBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlIHJpY2V2byBqd3QgZSBzdWJLZXkgc2lnbmlmaWNhIGNoZSBkZXZvIGZhcmUgdW5hIFwiYXV0b2xvZ2luXCJcclxuICAgICAgICAgKiBDcmVvIHVuIExvZ2luUmVxdWVzdCBjb24gaSB2YWxvcmkgcmljZXZ1dGksIGludGVncm8gY29uIGFwcGlkIGxldHRvIGRhIGVudmlyb25tZW50IGVkIGVmZmV0dHVvIHVuYSBsb2dpbiBzcGVjaWZpY2FcclxuICAgICAgICAgKiBJbiBjYXNvIHBvc2l0aXZvIHZhZG8gaW4gaG9tZXBhZ2UgXCIvXCJcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBqd3QgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdqd3QnKSA/IG5leHQucXVlcnlQYXJhbXMuand0IDogbnVsbDtcclxuICAgICAgICBjb25zdCBzdWJLZXkgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdzdWJLZXknKSA/IG5leHQucXVlcnlQYXJhbXMuc3ViS2V5IDogbnVsbDtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ2luc3RhbmNlS2V5JykgPyBuZXh0LnF1ZXJ5UGFyYW1zLmluc3RhbmNlS2V5IDogbnVsbDtcclxuICAgICAgICBjb25zdCBucyA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ25zJykgPyBuZXh0LnF1ZXJ5UGFyYW1zLm5zIDogbnVsbDtcclxuICAgICAgICBjb25zdCBhcmdzID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnYXJncycpID8gbmV4dC5xdWVyeVBhcmFtcy5hcmdzIDogbnVsbDtcclxuXHJcbiAgICAgICAgLy9wb3RyZWkgcGFzc2FyZSBkaSBxdWEgcXVhbmRvIGhvIGdpw6AgdW4gdG9rZW4gdmFsaWRvLCBxdWluZGkgaWwgbWVjY2FuaXNtbyBcIm5vIGp3dC0+cmVkaXJlY3QgdmVyc28gaWwgZ2F0ZXdheVwiIG5vbiBkZXZlIHBhcnRpcmVcclxuICAgICAgICBjb25zdCB0ZW1wVG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCkgfHwgJyc7XHJcblxyXG4gICAgICAgIC8vbWFnbyBub24gZGV2ZSBwacO5IGZhciB2ZWRlcmUgbGEgc3VhIHBhZ2luYSBkaSBsb2dpbiwgYSBtZW5vIGNoZSBub24gc2kgdHJhdHRpIGRpIG1hZ293ZWIgbyBhbWJpZW50ZSBkaSBzdmlsdXBwb1xyXG4gICAgICAgIC8vdmllbmUgZWZmZXR0dWF0byBkaXJldHRhbWVudGUgdW4gcmVkaXJlY3QgYWxsJ2luZGlyaXp6byBzcGVjaWZpY2F0byAodGlwaWNhbWVudGUgbG8gdXNlcmdhdGV3YXkpXHJcbiAgICAgICAgLy9zZSBub24gYXJyaXZpIGRhIHVuIHJlZGlyZWN0IGNvbiB0b2tlbiBvIHNlIG5vbiBzZWkgZ2nDoCBhdXRlbnRpY2F0bywgcmltYW5kbyBhbCBnYXRld2F5XHJcbiAgICAgICAgaWYgKCFqd3QgJiYgdGhpcy5lbnYuYXV0aC5yZWRpcmVjdElmTm90QXV0aGVudGljYXRlZCAmJiB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJHYXRld2F5VXJsKCkgJiYgIXRlbXBUb2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm5hdmlnYXRlVXNlckdhdGV3YXkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5jaGVja0Nvbm5lY3Rpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDT05ORUNUSU9ORE9XTiBvbjogJHt0aGlzLmF1dGhTZXJ2aWNlLmdldEJhc2VVcmwoKX1gKTtcclxuICAgICAgICAgICAgLy8gbm9uIHNvbm8gbG9nZ2F0byBxdWluZGkgdmFkbyBhbGxhIGxvZ2luXHJcbiAgICAgICAgICAgIGlmICghc3RhdGUudXJsLmluY2x1ZGVzKCcvbG9naW4nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS51cmwuaW5jbHVkZXModGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3N0b3JlIG5lbCBsb2NhbC9zZXNzaW9ucyBzdG9yYWdlIGRlbGxlIGluZm8gbmVjZXNzYXJpZSBhbGxvIHNuYXBzaG90XHJcbiAgICAgICAgLy9pbiBxdWVzdG8gY2FzbyBsYSBsaWJyZXJpYSBzdGEgXCJ2aXZlbmRvXCIgZGVudHJvIG1hZ28sIHJpY2V2ZSBsYSByZWRpcmVjdCBkZWxsbyB1c2VyIGdhdGV3YXkgZSBwb3BvbGEgcXVlc3RlIGluZm9cclxuICAgICAgICBpZiAoc3ViS2V5ICYmIGluc3RhbmNlS2V5KSB0aGlzLmF1dGhTZXJ2aWNlLnN0b3JhZ2VRdWVyeVBhcmFtcyhzdWJLZXksIGluc3RhbmNlS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKGp3dCAmJiBzdWJLZXkgJiYgaW5zdGFuY2VLZXkpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QgPSBuZXcgTG9naW5SZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIGxvZ2luUmVxdWVzdC50b2tlbiA9IGp3dDtcclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHN1YktleTtcclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LmFwcElkID0gdGhpcy5hdXRoU2VydmljZS5nZXRBcHBJZCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gYnkgdG9rZW4uLi4nKTtcclxuICAgICAgICAgICAgY29uc3QgbG9naW5SZXNwb25zZSA9IChhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKGxvZ2luUmVxdWVzdCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KSkgYXMgTG9naW5SZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcXVlc3RhIHBhcnRlIMOoIGRhIHJlZmFjdG9yaXp6YXJlLCAgcGVyIGFwZXJ0dXJhIGRvY3VtZW50aSBkYSBpbmZpbml0eSB1cmdlbnRpc3NpbWFcclxuICAgICAgICAgICAgICAgIC8vaW4gZnV0dXJvIGNpIHNhcsOgIGwndXJsIG9yaWdpbmFsZSBkZWxsYSByaWNoaWVzdGFcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IG5zID8gJ2RvY3VtZW50JyA6IHRoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmxdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZVVybDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyBqd3Q6IG51bGwsIHN1YktleTogbnVsbCwgbnM6IG5zLCBhcmdzOiBhcmdzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlIGFycml2byBxdWEgdnVvbCBkaXJlIGNoZSBobyBnacOgIHVuIHRva2VuIHNhbHZhdG8gZSBub24gc2NhZHV0byBxdWluZGkgY2hpZWRvIGNvbmZlcm1hIGRlbGxhIHZhbGlkaXTDoFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGF1dGh0b2tlbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKSB8fCAnJztcclxuICAgICAgICBpZiAoYXV0aHRva2VuKSB7XHJcbiAgICAgICAgICAgIC8vIGhvIHVuIHRva2VuLCBtYSBuZSB2ZXJpZmljbyBsYSB2YWxpZGl0w6BcclxuICAgICAgICAgICAgY29uc3QgcmVzOiBPcGVyYXRpb25SZXN1bHQgPSAoYXdhaXQgdGhpcy5hdXRoU2VydmljZS5pc1ZhbGlkVG9rZW4oYXV0aHRva2VuKSkgYXMgT3BlcmF0aW9uUmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS51cmwuaW5jbHVkZXModGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKSkpIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCldKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnVybC5pbmNsdWRlcyh0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpKSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==