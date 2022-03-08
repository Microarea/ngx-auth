import { __awaiter } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
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
    canActivate(next, state) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.authService.checkConnection();
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
            //store nel local/sessions storage delle info necessarie allo snapshot
            //in questo caso la libreria sta "vivendo" dentro mago, riceve la redirect dello user gateway e popola queste info
            if (subKey && instanceKey)
                this.authService.storageQueryParams(subKey, instanceKey);
            if (jwt && subKey && instanceKey) {
                const loginRequest = new LoginRequest();
                loginRequest.token = jwt;
                loginRequest.subscriptionKey = subKey;
                loginRequest.appId = this.authService.getAppId();
                const loginResponse = (yield this.authService.login(loginRequest).catch((err) => {
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
                const res = (yield this.authService.isValidToken(authtoken));
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
        });
    }
}
/** @nocollapse */ TbAuthGuard.ɵfac = function TbAuthGuard_Factory(t) { return new (t || TbAuthGuard)(i0.ɵɵinject(i1.TbAuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject('env')); };
/** @nocollapse */ TbAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ token: TbAuthGuard, factory: TbAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TbAuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.TbAuthService }, { type: i2.Router }, { type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBNEQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVF0RCxNQUFNLE9BQU8sV0FBVztJQUNwQixZQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBc0I7UUFBakcsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXlCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQUcsQ0FBQztJQUVuSCxXQUFXLENBQUMsSUFBNEIsRUFBRSxLQUEwQjs7WUFDdEUsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRTVELElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ25FLDBDQUEwQztnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ25DO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFFRCxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRTtnQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDaEMsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUVEOzs7O2VBSUc7WUFDSCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqRixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6RyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM5RSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUVwRixzRUFBc0U7WUFDdEUsa0hBQWtIO1lBQ2xILElBQUksTUFBTSxJQUFJLFdBQVc7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRTdELElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxXQUFXLEVBQUU7Z0JBQzlCLE1BQU0sWUFBWSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO2dCQUN0RCxZQUFZLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsWUFBWSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFakQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUM1RSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLE9BQU87Z0JBQ1gsQ0FBQyxDQUFDLENBQWtCLENBQUM7Z0JBRXJCLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2dCQUVELElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTtvQkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO29CQUVuQyxvRkFBb0Y7b0JBQ3BGLG1EQUFtRDtvQkFDbkQsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ3hCLFVBQVUsRUFBRSxJQUFJO3dCQUNoQixXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO3dCQUM1RCxtQkFBbUIsRUFBRSxPQUFPO3FCQUMvQixDQUFDLENBQUM7b0JBRUgsNERBQTREO29CQUM1RCxPQUFPLElBQUksQ0FBQztpQkFDZjthQUNKO1lBRUQ7O2VBRUc7WUFDSCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNwRCxJQUFJLFNBQVMsRUFBRTtnQkFDWCwwQ0FBMEM7Z0JBQzFDLE1BQU0sR0FBRyxHQUFvQixDQUFDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQW9CLENBQUM7Z0JBRWpHLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtvQkFDWixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7d0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdEgsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDM0QsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0o7aUJBQU07Z0JBQ0gsMENBQTBDO2dCQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4SCxPQUFPLElBQUksQ0FBQzthQUNmO1FBQ0wsQ0FBQztLQUFBOztzRUExRlEsV0FBVyxxRUFDNEQsS0FBSzttREFENUUsV0FBVyxXQUFYLFdBQVcsbUJBRlIsTUFBTTtrREFFVCxXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7c0JBRTRFLE1BQU07dUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBUYkF1dGhFbnZpcm9ubWVudCB9IGZyb20gJy4vbW9kZWxzL2F1dGgtZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBPcGVyYXRpb25SZXN1bHQgfSBmcm9tICcuL21vZGVscy9vcGVyYXRpb24tcmVzdWx0JztcclxuaW1wb3J0IHsgTG9naW5SZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRiQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnY6IFRiQXV0aEVudmlyb25tZW50KSB7fVxyXG5cclxuICAgIGFzeW5jIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tDb25uZWN0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmICghY29ubmVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ09OTkVDVElPTkRPV04gb246ICR7dGhpcy5hdXRoU2VydmljZS5nZXRCYXNlVXJsKCl9YCk7XHJcbiAgICAgICAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnVybC5pbmNsdWRlcygnL2xvZ2luJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUudXJsLmluY2x1ZGVzKHRoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2UgcmljZXZvIGp3dCBlIHN1YktleSBzaWduaWZpY2EgY2hlIGRldm8gZmFyZSB1bmEgXCJhdXRvbG9naW5cIlxyXG4gICAgICAgICAqIENyZW8gdW4gTG9naW5SZXF1ZXN0IGNvbiBpIHZhbG9yaSByaWNldnV0aSwgaW50ZWdybyBjb24gYXBwaWQgbGV0dG8gZGEgZW52aXJvbm1lbnQgZWQgZWZmZXR0dW8gdW5hIGxvZ2luIHNwZWNpZmljYVxyXG4gICAgICAgICAqIEluIGNhc28gcG9zaXRpdm8gdmFkbyBpbiBob21lcGFnZSBcIi9cIlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGp3dCA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ2p3dCcpID8gbmV4dC5xdWVyeVBhcmFtcy5qd3QgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHN1YktleSA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ3N1YktleScpID8gbmV4dC5xdWVyeVBhcmFtcy5zdWJLZXkgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlS2V5ID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnaW5zdGFuY2VLZXknKSA/IG5leHQucXVlcnlQYXJhbXMuaW5zdGFuY2VLZXkgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IG5zID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnbnMnKSA/IG5leHQucXVlcnlQYXJhbXMubnMgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdhcmdzJykgPyBuZXh0LnF1ZXJ5UGFyYW1zLmFyZ3MgOiBudWxsO1xyXG5cclxuICAgICAgICAvL3N0b3JlIG5lbCBsb2NhbC9zZXNzaW9ucyBzdG9yYWdlIGRlbGxlIGluZm8gbmVjZXNzYXJpZSBhbGxvIHNuYXBzaG90XHJcbiAgICAgICAgLy9pbiBxdWVzdG8gY2FzbyBsYSBsaWJyZXJpYSBzdGEgXCJ2aXZlbmRvXCIgZGVudHJvIG1hZ28sIHJpY2V2ZSBsYSByZWRpcmVjdCBkZWxsbyB1c2VyIGdhdGV3YXkgZSBwb3BvbGEgcXVlc3RlIGluZm9cclxuICAgICAgICBpZiAoc3ViS2V5ICYmIGluc3RhbmNlS2V5KVxyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnN0b3JhZ2VRdWVyeVBhcmFtcyhzdWJLZXksIGluc3RhbmNlS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKGp3dCAmJiBzdWJLZXkgJiYgaW5zdGFuY2VLZXkpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QgPSBuZXcgTG9naW5SZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIGxvZ2luUmVxdWVzdC50b2tlbiA9IGp3dDtcclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHN1YktleTtcclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LmFwcElkID0gdGhpcy5hdXRoU2VydmljZS5nZXRBcHBJZCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9naW5SZXNwb25zZSA9IChhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKGxvZ2luUmVxdWVzdCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KSkgYXMgTG9naW5SZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcXVlc3RhIHBhcnRlIMOoIGRhIHJlZmFjdG9yaXp6YXJlLCAgcGVyIGFwZXJ0dXJhIGRvY3VtZW50aSBkYSBpbmZpbml0eSB1cmdlbnRpc3NpbWFcclxuICAgICAgICAgICAgICAgIC8vaW4gZnV0dXJvIGNpIHNhcsOgIGwndXJsIG9yaWdpbmFsZSBkZWxsYSByaWNoaWVzdGFcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IG5zID8gJ2RvY3VtZW50JyA6IHRoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmxdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZVVybDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyBqd3Q6IG51bGwsIHN1YktleTogbnVsbCwgbnM6IG5zLCBhcmdzOiBhcmdzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlIGFycml2byBxdWEgdnVvbCBkaXJlIGNoZSBobyBnacOgIHVuIHRva2VuIHNhbHZhdG8gZSBub24gc2NhZHV0byBxdWluZGkgY2hpZWRvIGNvbmZlcm1hIGRlbGxhIHZhbGlkaXTDoFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGF1dGh0b2tlbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKSB8fCAnJztcclxuICAgICAgICBpZiAoYXV0aHRva2VuKSB7XHJcbiAgICAgICAgICAgIC8vIGhvIHVuIHRva2VuLCBtYSBuZSB2ZXJpZmljbyBsYSB2YWxpZGl0w6BcclxuICAgICAgICAgICAgY29uc3QgcmVzOiBPcGVyYXRpb25SZXN1bHQgPSAoYXdhaXQgdGhpcy5hdXRoU2VydmljZS5pc1ZhbGlkVG9rZW4oYXV0aHRva2VuKSkgYXMgT3BlcmF0aW9uUmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS51cmwuaW5jbHVkZXModGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKSkpIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCldKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnVybC5pbmNsdWRlcyh0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpKSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==