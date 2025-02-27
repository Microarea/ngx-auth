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
    /** @nocollapse */ static { this.ɵfac = function TbAuthGuard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TbAuthGuard)(i0.ɵɵinject(i1.TbAuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject('env')); }; }
    /** @nocollapse */ static { this.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: TbAuthGuard, factory: TbAuthGuard.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.TbAuthService }, { type: i2.Router }, { type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVF0RCxNQUFNLE9BQU8sV0FBVztJQUNwQixZQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBc0I7UUFBakcsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXlCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQUcsQ0FBQztJQUV6SCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQTRCLEVBQUUsS0FBMEI7UUFDdEU7Ozs7V0FJRztRQUNILE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFGLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pHLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJ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QUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0SCxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO2lCQUFNLENBQUM7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsT0FBTyxLQUFLLENBQUM7WUFDakIsQ0FBQztRQUNMLENBQUM7YUFBTSxDQUFDO1lBQ0osMENBQTBDO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEgsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7K0hBeEdRLFdBQVcscUVBQzRELEtBQUs7c0dBRDVFLFdBQVcsV0FBWCxXQUFXLG1CQUZSLE1BQU07O2lGQUVULFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkFFNEUsTUFBTTt1QkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XG5pbXBvcnQgeyBUYkF1dGhFbnZpcm9ubWVudCB9IGZyb20gJy4vbW9kZWxzL2F1dGgtZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi9tb2RlbHMvb3BlcmF0aW9uLXJlc3VsdCc7XG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUYkF1dGhHdWFyZCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnY6IFRiQXV0aEVudmlyb25tZW50KSB7fVxuXG4gICAgYXN5bmMgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlIHJpY2V2byBqd3QgZSBzdWJLZXkgc2lnbmlmaWNhIGNoZSBkZXZvIGZhcmUgdW5hIFwiYXV0b2xvZ2luXCJcbiAgICAgICAgICogQ3JlbyB1biBMb2dpblJlcXVlc3QgY29uIGkgdmFsb3JpIHJpY2V2dXRpLCBpbnRlZ3JvIGNvbiBhcHBpZCBsZXR0byBkYSBlbnZpcm9ubWVudCBlZCBlZmZldHR1byB1bmEgbG9naW4gc3BlY2lmaWNhXG4gICAgICAgICAqIEluIGNhc28gcG9zaXRpdm8gdmFkbyBpbiBob21lcGFnZSBcIi9cIlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgand0ID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnand0JykgPyBuZXh0LnF1ZXJ5UGFyYW1zLmp3dCA6IG51bGw7XG4gICAgICAgIGNvbnN0IHN1YktleSA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ3N1YktleScpID8gbmV4dC5xdWVyeVBhcmFtcy5zdWJLZXkgOiBudWxsO1xuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ2luc3RhbmNlS2V5JykgPyBuZXh0LnF1ZXJ5UGFyYW1zLmluc3RhbmNlS2V5IDogbnVsbDtcbiAgICAgICAgY29uc3QgbnMgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCducycpID8gbmV4dC5xdWVyeVBhcmFtcy5ucyA6IG51bGw7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdhcmdzJykgPyBuZXh0LnF1ZXJ5UGFyYW1zLmFyZ3MgOiBudWxsO1xuXG4gICAgICAgIC8vcG90cmVpIHBhc3NhcmUgZGkgcXVhIHF1YW5kbyBobyBnacOgIHVuIHRva2VuIHZhbGlkbywgcXVpbmRpIGlsIG1lY2NhbmlzbW8gXCJubyBqd3QtPnJlZGlyZWN0IHZlcnNvIGlsIGdhdGV3YXlcIiBub24gZGV2ZSBwYXJ0aXJlXG4gICAgICAgIGNvbnN0IHRlbXBUb2tlbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKSB8fCAnJztcblxuICAgICAgICAvL21hZ28gbm9uIGRldmUgcGnDuSBmYXIgdmVkZXJlIGxhIHN1YSBwYWdpbmEgZGkgbG9naW4sIGEgbWVubyBjaGUgbm9uIHNpIHRyYXR0aSBkaSBtYWdvd2ViIG8gYW1iaWVudGUgZGkgc3ZpbHVwcG9cbiAgICAgICAgLy92aWVuZSBlZmZldHR1YXRvIGRpcmV0dGFtZW50ZSB1biByZWRpcmVjdCBhbGwnaW5kaXJpenpvIHNwZWNpZmljYXRvICh0aXBpY2FtZW50ZSBsbyB1c2VyZ2F0ZXdheSlcbiAgICAgICAgLy9zZSBub24gYXJyaXZpIGRhIHVuIHJlZGlyZWN0IGNvbiB0b2tlbiBvIHNlIG5vbiBzZWkgZ2nDoCBhdXRlbnRpY2F0bywgcmltYW5kbyBhbCBnYXRld2F5XG4gICAgICAgIGlmICghand0ICYmIHRoaXMuZW52LmF1dGgucmVkaXJlY3RJZk5vdEF1dGhlbnRpY2F0ZWQgJiYgdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyR2F0ZXdheVVybCgpICYmICF0ZW1wVG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubmF2aWdhdGVVc2VyR2F0ZXdheSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5jaGVja0Nvbm5lY3Rpb24oKTtcblxuICAgICAgICBpZiAoIWNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDT05ORUNUSU9ORE9XTiBvbjogJHt0aGlzLmF1dGhTZXJ2aWNlLmdldEJhc2VVcmwoKX1gKTtcbiAgICAgICAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxuICAgICAgICAgICAgaWYgKCFzdGF0ZS51cmwuaW5jbHVkZXMoJy9sb2dpbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlLnVybC5pbmNsdWRlcyh0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpKSkge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5jbGVhclN0b3JhZ2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zdG9yZSBuZWwgbG9jYWwvc2Vzc2lvbnMgc3RvcmFnZSBkZWxsZSBpbmZvIG5lY2Vzc2FyaWUgYWxsbyBzbmFwc2hvdFxuICAgICAgICAvL2luIHF1ZXN0byBjYXNvIGxhIGxpYnJlcmlhIHN0YSBcInZpdmVuZG9cIiBkZW50cm8gbWFnbywgcmljZXZlIGxhIHJlZGlyZWN0IGRlbGxvIHVzZXIgZ2F0ZXdheSBlIHBvcG9sYSBxdWVzdGUgaW5mb1xuICAgICAgICBpZiAoc3ViS2V5ICYmIGluc3RhbmNlS2V5KSB0aGlzLmF1dGhTZXJ2aWNlLnN0b3JhZ2VRdWVyeVBhcmFtcyhzdWJLZXksIGluc3RhbmNlS2V5KTtcblxuICAgICAgICBpZiAoand0ICYmIHN1YktleSAmJiBpbnN0YW5jZUtleSkge1xuICAgICAgICAgICAgY29uc3QgbG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QgPSBuZXcgTG9naW5SZXF1ZXN0KCk7XG4gICAgICAgICAgICBsb2dpblJlcXVlc3QudG9rZW4gPSBqd3Q7XG4gICAgICAgICAgICBsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gc3ViS2V5O1xuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LmFwcElkID0gdGhpcy5hdXRoU2VydmljZS5nZXRBcHBJZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGJ5IHRva2VuLi4uJyk7XG4gICAgICAgICAgICBjb25zdCBsb2dpblJlc3BvbnNlID0gKGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4obG9naW5SZXF1ZXN0KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddLCB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IGVycm9yOiB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pKSBhcyBMb2dpblJlc3BvbnNlO1xuXG4gICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10sIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgZXJyb3I6IHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgLy9xdWVzdGEgcGFydGUgw6ggZGEgcmVmYWN0b3JpenphcmUsICBwZXIgYXBlcnR1cmEgZG9jdW1lbnRpIGRhIGluZmluaXR5IHVyZ2VudGlzc2ltYVxuICAgICAgICAgICAgICAgIC8vaW4gZnV0dXJvIGNpIHNhcsOgIGwndXJsIG9yaWdpbmFsZSBkZWxsYSByaWNoaWVzdGFcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBucyA/ICdkb2N1bWVudCcgOiB0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3VybF0sIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZVVybDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgand0OiBudWxsLCBzdWJLZXk6IG51bGwsIG5zOiBucywgYXJnczogYXJncyB9LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2UgYXJyaXZvIHF1YSB2dW9sIGRpcmUgY2hlIGhvIGdpw6AgdW4gdG9rZW4gc2FsdmF0byBlIG5vbiBzY2FkdXRvIHF1aW5kaSBjaGllZG8gY29uZmVybWEgZGVsbGEgdmFsaWRpdMOgXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBhdXRodG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCkgfHwgJyc7XG4gICAgICAgIGlmIChhdXRodG9rZW4pIHtcbiAgICAgICAgICAgIC8vIGhvIHVuIHRva2VuLCBtYSBuZSB2ZXJpZmljbyBsYSB2YWxpZGl0w6BcbiAgICAgICAgICAgIGNvbnN0IHJlczogT3BlcmF0aW9uUmVzdWx0ID0gKGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuaXNWYWxpZFRva2VuKGF1dGh0b2tlbikpIGFzIE9wZXJhdGlvblJlc3VsdDtcblxuICAgICAgICAgICAgaWYgKHJlcy5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudXJsLmluY2x1ZGVzKHRoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCkpKSB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm9uIHNvbm8gbG9nZ2F0byBxdWluZGkgdmFkbyBhbGxhIGxvZ2luXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnVybC5pbmNsdWRlcyh0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpKSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCldKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19