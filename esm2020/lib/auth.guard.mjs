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
                this.router.navigate(['login'], {
                    queryParams: { error: this.authService.errorMessage },
                });
                return;
            }));
            if (!loginResponse) {
                this.router.navigate(['login'], {
                    queryParams: { error: this.authService.errorMessage },
                });
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
/** @nocollapse */ TbAuthGuard.ɵfac = function TbAuthGuard_Factory(t) { return new (t || TbAuthGuard)(i0.ɵɵinject(i1.TbAuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject('env')); };
/** @nocollapse */ TbAuthGuard.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: TbAuthGuard, factory: TbAuthGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.TbAuthService }, { type: i2.Router }, { type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVF0RCxNQUFNLE9BQU8sV0FBVztJQUNwQixZQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBc0I7UUFBakcsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXlCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQUcsQ0FBQztJQUV6SCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQTRCLEVBQUUsS0FBMEI7UUFDdEU7Ozs7V0FJRztRQUNILE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFGLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pHLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJ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Q0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0SCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0o7YUFBTTtZQUNILDBDQUEwQztZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzt5RkF4R1EsV0FBVyxxRUFDNEQsS0FBSztnR0FENUUsV0FBVyxXQUFYLFdBQVcsbUJBRlIsTUFBTTt1RkFFVCxXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7c0JBRTRFLE1BQU07dUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcbmltcG9ydCB7IFRiQXV0aEVudmlyb25tZW50IH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBPcGVyYXRpb25SZXN1bHQgfSBmcm9tICcuL21vZGVscy9vcGVyYXRpb24tcmVzdWx0JztcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRiQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52OiBUYkF1dGhFbnZpcm9ubWVudCkge31cblxuICAgIGFzeW5jIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZSByaWNldm8gand0IGUgc3ViS2V5IHNpZ25pZmljYSBjaGUgZGV2byBmYXJlIHVuYSBcImF1dG9sb2dpblwiXG4gICAgICAgICAqIENyZW8gdW4gTG9naW5SZXF1ZXN0IGNvbiBpIHZhbG9yaSByaWNldnV0aSwgaW50ZWdybyBjb24gYXBwaWQgbGV0dG8gZGEgZW52aXJvbm1lbnQgZWQgZWZmZXR0dW8gdW5hIGxvZ2luIHNwZWNpZmljYVxuICAgICAgICAgKiBJbiBjYXNvIHBvc2l0aXZvIHZhZG8gaW4gaG9tZXBhZ2UgXCIvXCJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGp3dCA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ2p3dCcpID8gbmV4dC5xdWVyeVBhcmFtcy5qd3QgOiBudWxsO1xuICAgICAgICBjb25zdCBzdWJLZXkgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdzdWJLZXknKSA/IG5leHQucXVlcnlQYXJhbXMuc3ViS2V5IDogbnVsbDtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdpbnN0YW5jZUtleScpID8gbmV4dC5xdWVyeVBhcmFtcy5pbnN0YW5jZUtleSA6IG51bGw7XG4gICAgICAgIGNvbnN0IG5zID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnbnMnKSA/IG5leHQucXVlcnlQYXJhbXMubnMgOiBudWxsO1xuICAgICAgICBjb25zdCBhcmdzID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnYXJncycpID8gbmV4dC5xdWVyeVBhcmFtcy5hcmdzIDogbnVsbDtcblxuICAgICAgICAvL3BvdHJlaSBwYXNzYXJlIGRpIHF1YSBxdWFuZG8gaG8gZ2nDoCB1biB0b2tlbiB2YWxpZG8sIHF1aW5kaSBpbCBtZWNjYW5pc21vIFwibm8gand0LT5yZWRpcmVjdCB2ZXJzbyBpbCBnYXRld2F5XCIgbm9uIGRldmUgcGFydGlyZVxuICAgICAgICBjb25zdCB0ZW1wVG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCkgfHwgJyc7XG5cbiAgICAgICAgLy9tYWdvIG5vbiBkZXZlIHBpw7kgZmFyIHZlZGVyZSBsYSBzdWEgcGFnaW5hIGRpIGxvZ2luLCBhIG1lbm8gY2hlIG5vbiBzaSB0cmF0dGkgZGkgbWFnb3dlYiBvIGFtYmllbnRlIGRpIHN2aWx1cHBvXG4gICAgICAgIC8vdmllbmUgZWZmZXR0dWF0byBkaXJldHRhbWVudGUgdW4gcmVkaXJlY3QgYWxsJ2luZGlyaXp6byBzcGVjaWZpY2F0byAodGlwaWNhbWVudGUgbG8gdXNlcmdhdGV3YXkpXG4gICAgICAgIC8vc2Ugbm9uIGFycml2aSBkYSB1biByZWRpcmVjdCBjb24gdG9rZW4gbyBzZSBub24gc2VpIGdpw6AgYXV0ZW50aWNhdG8sIHJpbWFuZG8gYWwgZ2F0ZXdheVxuICAgICAgICBpZiAoIWp3dCAmJiB0aGlzLmVudi5hdXRoLnJlZGlyZWN0SWZOb3RBdXRoZW50aWNhdGVkICYmIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlckdhdGV3YXlVcmwoKSAmJiAhdGVtcFRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm5hdmlnYXRlVXNlckdhdGV3YXkoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tDb25uZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKCFjb25uZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ09OTkVDVElPTkRPV04gb246ICR7dGhpcy5hdXRoU2VydmljZS5nZXRCYXNlVXJsKCl9YCk7XG4gICAgICAgICAgICAvLyBub24gc29ubyBsb2dnYXRvIHF1aW5kaSB2YWRvIGFsbGEgbG9naW5cbiAgICAgICAgICAgIGlmICghc3RhdGUudXJsLmluY2x1ZGVzKCcvbG9naW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS51cmwuaW5jbHVkZXModGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKSkpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuY2xlYXJTdG9yYWdlKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vc3RvcmUgbmVsIGxvY2FsL3Nlc3Npb25zIHN0b3JhZ2UgZGVsbGUgaW5mbyBuZWNlc3NhcmllIGFsbG8gc25hcHNob3RcbiAgICAgICAgLy9pbiBxdWVzdG8gY2FzbyBsYSBsaWJyZXJpYSBzdGEgXCJ2aXZlbmRvXCIgZGVudHJvIG1hZ28sIHJpY2V2ZSBsYSByZWRpcmVjdCBkZWxsbyB1c2VyIGdhdGV3YXkgZSBwb3BvbGEgcXVlc3RlIGluZm9cbiAgICAgICAgaWYgKHN1YktleSAmJiBpbnN0YW5jZUtleSkgdGhpcy5hdXRoU2VydmljZS5zdG9yYWdlUXVlcnlQYXJhbXMoc3ViS2V5LCBpbnN0YW5jZUtleSk7XG5cbiAgICAgICAgaWYgKGp3dCAmJiBzdWJLZXkgJiYgaW5zdGFuY2VLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0ID0gbmV3IExvZ2luUmVxdWVzdCgpO1xuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnRva2VuID0gand0O1xuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHN1YktleTtcbiAgICAgICAgICAgIGxvZ2luUmVxdWVzdC5hcHBJZCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXBwSWQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBieSB0b2tlbi4uLicpO1xuICAgICAgICAgICAgY29uc3QgbG9naW5SZXNwb25zZSA9IChhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKGxvZ2luUmVxdWVzdCkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSwge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyBlcnJvcjogdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KSkgYXMgTG9naW5SZXNwb25zZTtcblxuICAgICAgICAgICAgaWYgKCFsb2dpblJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddLCB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IGVycm9yOiB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcblxuICAgICAgICAgICAgICAgIC8vcXVlc3RhIHBhcnRlIMOoIGRhIHJlZmFjdG9yaXp6YXJlLCAgcGVyIGFwZXJ0dXJhIGRvY3VtZW50aSBkYSBpbmZpbml0eSB1cmdlbnRpc3NpbWFcbiAgICAgICAgICAgICAgICAvL2luIGZ1dHVybyBjaSBzYXLDoCBsJ3VybCBvcmlnaW5hbGUgZGVsbGEgcmljaGllc3RhXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbnMgPyAnZG9jdW1lbnQnIDogdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmxdLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VVcmw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IGp3dDogbnVsbCwgc3ViS2V5OiBudWxsLCBuczogbnMsIGFyZ3M6IGFyZ3MgfSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlIGFycml2byBxdWEgdnVvbCBkaXJlIGNoZSBobyBnacOgIHVuIHRva2VuIHNhbHZhdG8gZSBub24gc2NhZHV0byBxdWluZGkgY2hpZWRvIGNvbmZlcm1hIGRlbGxhIHZhbGlkaXTDoFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgYXV0aHRva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpIHx8ICcnO1xuICAgICAgICBpZiAoYXV0aHRva2VuKSB7XG4gICAgICAgICAgICAvLyBobyB1biB0b2tlbiwgbWEgbmUgdmVyaWZpY28gbGEgdmFsaWRpdMOgXG4gICAgICAgICAgICBjb25zdCByZXM6IE9wZXJhdGlvblJlc3VsdCA9IChhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmlzVmFsaWRUb2tlbihhdXRodG9rZW4pKSBhcyBPcGVyYXRpb25SZXN1bHQ7XG5cbiAgICAgICAgICAgIGlmIChyZXMuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnVybC5pbmNsdWRlcyh0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpKSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxuICAgICAgICAgICAgaWYgKCFzdGF0ZS51cmwuaW5jbHVkZXModGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKSkpIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpXSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==