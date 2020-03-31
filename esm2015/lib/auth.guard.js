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
            // console.log('ActivatedRouteSnapshot', next, state.url);
            const connection = yield this.authService.checkConnection();
            if (!connection) {
                console.log('CONNECTIONDOWN');
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
            if (jwt && subKey) {
                const loginRequest = new LoginRequest();
                loginRequest.token = jwt;
                loginRequest.subscriptionKey = subKey;
                loginRequest.appId = this.authService.getAppId();
                const loginResponse = (yield this.authService.login(loginRequest).catch(err => {
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
                    this.router.navigate([this.authService.getRedirectUrl()]);
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
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.TbAuthService }, { type: i2.Router }, { type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBNEQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVF0RCxNQUFNLE9BQU8sV0FBVztJQUN0QixZQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBc0I7UUFBakcsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXlCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQUksQ0FBQztJQUVwSCxXQUFXLENBQUMsSUFBNEIsRUFBRSxLQUEwQjs7WUFDeEUsMERBQTBEO1lBRTFELE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUU1RCxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDOUIsMENBQTBDO2dCQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDakM7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFO2dCQUMxRCxJQUFJLENBQUMs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QUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEgsT0FBTyxJQUFJLENBQUM7YUFDYjtRQUNILENBQUM7S0FBQTs7c0VBMUVVLFdBQVcscUVBQzBELEtBQUs7bURBRDFFLFdBQVcsV0FBWCxXQUFXLG1CQUZWLE1BQU07a0RBRVAsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQUUwRSxNQUFNO3VCQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgVGJBdXRoRW52aXJvbm1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRoLWVudmlyb25tZW50JztcclxuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi9tb2RlbHMvb3BlcmF0aW9uLXJlc3VsdCc7XHJcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBASW5qZWN0KCdlbnYnKSBwcml2YXRlIGVudjogVGJBdXRoRW52aXJvbm1lbnQpIHsgfVxyXG5cclxuICBhc3luYyBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0FjdGl2YXRlZFJvdXRlU25hcHNob3QnLCBuZXh0LCBzdGF0ZS51cmwpO1xyXG5cclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNoZWNrQ29ubmVjdGlvbigpO1xyXG5cclxuICAgIGlmICghY29ubmVjdGlvbikge1xyXG4gICAgICBjb25zb2xlLmxvZygnQ09OTkVDVElPTkRPV04nKTtcclxuICAgICAgLy8gbm9uIHNvbm8gbG9nZ2F0byBxdWluZGkgdmFkbyBhbGxhIGxvZ2luXHJcbiAgICAgIGlmICghc3RhdGUudXJsLmluY2x1ZGVzKCcvbG9naW4nKSkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXRlLnVybC5pbmNsdWRlcyh0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpKSkge1xyXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlIHJpY2V2byBqd3QgZSBzdWJLZXkgc2lnbmlmaWNhIGNoZSBkZXZvIGZhcmUgdW5hIFwiYXV0b2xvZ2luXCJcclxuICAgICAqIENyZW8gdW4gTG9naW5SZXF1ZXN0IGNvbiBpIHZhbG9yaSByaWNldnV0aSwgaW50ZWdybyBjb24gYXBwaWQgbGV0dG8gZGEgZW52aXJvbm1lbnQgZWQgZWZmZXR0dW8gdW5hIGxvZ2luIHNwZWNpZmljYVxyXG4gICAgICogSW4gY2FzbyBwb3NpdGl2byB2YWRvIGluIGhvbWVwYWdlIFwiL1wiXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGp3dCA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ2p3dCcpID8gbmV4dC5xdWVyeVBhcmFtcy5qd3QgOiBudWxsO1xyXG4gICAgY29uc3Qgc3ViS2V5ID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnc3ViS2V5JykgPyBuZXh0LnF1ZXJ5UGFyYW1zLnN1YktleSA6IG51bGw7XHJcbiAgICBpZiAoand0ICYmIHN1YktleSkge1xyXG4gICAgICBjb25zdCBsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCA9IG5ldyBMb2dpblJlcXVlc3QoKTtcclxuICAgICAgbG9naW5SZXF1ZXN0LnRva2VuID0gand0O1xyXG4gICAgICBsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gc3ViS2V5O1xyXG4gICAgICBsb2dpblJlcXVlc3QuYXBwSWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFwcElkKCk7XHJcblxyXG4gICAgICBjb25zdCBsb2dpblJlc3BvbnNlID0gKGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4obG9naW5SZXF1ZXN0KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9KSkgYXMgTG9naW5SZXNwb25zZTtcclxuXHJcbiAgICAgIGlmICghbG9naW5SZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2UgYXJyaXZvIHF1YSB2dW9sIGRpcmUgY2hlIGhvIGdpw6AgdW4gdG9rZW4gc2FsdmF0byBlIG5vbiBzY2FkdXRvIHF1aW5kaSBjaGllZG8gY29uZmVybWEgZGVsbGEgdmFsaWRpdMOgXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGF1dGh0b2tlbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKSB8fCAnJztcclxuICAgIGlmIChhdXRodG9rZW4pIHtcclxuICAgICAgLy8gaG8gdW4gdG9rZW4sIG1hIG5lIHZlcmlmaWNvIGxhIHZhbGlkaXTDoFxyXG4gICAgICBjb25zdCByZXM6IE9wZXJhdGlvblJlc3VsdCA9IChhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmlzVmFsaWRUb2tlbihhdXRodG9rZW4pKSBhcyBPcGVyYXRpb25SZXN1bHQ7XHJcblxyXG4gICAgICBpZiAocmVzLlJlc3VsdCkge1xyXG4gICAgICAgIGlmIChzdGF0ZS51cmwuaW5jbHVkZXModGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKSkpIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxyXG4gICAgICBpZiAoIXN0YXRlLnVybC5pbmNsdWRlcyh0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpKSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCldKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==