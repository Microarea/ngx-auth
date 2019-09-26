/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
import { LoginRequest } from './models/login-request';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
export class TbAuthGuard {
    /**
     * @param {?} authService
     * @param {?} router
     * @param {?} env
     */
    constructor(authService, router, env) {
        this.authService = authService;
        this.router = router;
        this.env = env;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!TbAuthGuard} */ function* () {
            // console.log('ActivatedRouteSnapshot', next, state.url);
            // console.log('ActivatedRouteSnapshot', next, state.url);
            /**
             * Se ricevo jwt e subKey significa che devo fare una "autologin"
             * Creo un LoginRequest con i valori ricevuti, integro con appid letto da environment ed effettuo una login specifica
             * In caso positivo vado in homepage "/"
             * @type {?}
             */
            const jwt = next.queryParams.hasOwnProperty('jwt') ? next.queryParams.jwt : null;
            /** @type {?} */
            const subKey = next.queryParams.hasOwnProperty('subKey') ? next.queryParams.subKey : null;
            if (jwt && subKey) {
                /** @type {?} */
                const loginRequest = new LoginRequest();
                loginRequest.token = jwt;
                loginRequest.subscriptionKey = subKey;
                loginRequest.appId = this.authService.getAppId();
                /** @type {?} */
                const loginResponse = yield this.authService.login(loginRequest).catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                err => {
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
                }
            }
            /**
             * Se arrivo qua vuol dire che ho già un token salvato e non scaduto quindi chiedo conferma della validità
             * @type {?}
             */
            const authtoken = this.authService.getToken();
            if (authtoken) {
                // ho un token, ma ne verifico la validità
                /** @type {?} */
                const res = yield this.authService.isValidToken(authtoken);
                if (res.Result) {
                    if (state.url.includes('/login'))
                        this.router.navigate([this.authService.getRedirectUrl()]);
                    return true;
                }
                else {
                    this.router.navigate(['login']);
                    return false;
                }
            }
            else {
                // non sono loggato quindi vado alla login
                if (!state.url.includes('/login'))
                    this.router.navigate(['login']);
                return true;
            }
        });
    }
}
TbAuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TbAuthGuard.ctorParameters = () => [
    { type: TbAuthService },
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
];
/** @nocollapse */ TbAuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TbAuthGuard_Factory() { return new TbAuthGuard(i0.ɵɵinject(i1.TbAuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject("env")); }, token: TbAuthGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TbAuthGuard.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    TbAuthGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    TbAuthGuard.prototype.env;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQTRELE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5HLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFNdEQsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQUNwQixZQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBc0I7UUFBakcsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXlCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQUcsQ0FBQzs7Ozs7O0lBRW5ILFdBQVcsQ0FBQyxJQUE0QixFQUFFLEtBQTBCOztZQUN0RSwwREFBMEQ7Ozs7Ozs7O2tCQU9wRCxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJOztrQkFDMUUsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN6RixJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7O3NCQUNULFlBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUU7Z0JBQ3JELFlBQVksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUN6QixZQUFZLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztnQkFDdEMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDOztzQkFFM0MsYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSzs7OztnQkFBQyxHQUFHLENBQUMsRUFBRTtvQkFDekUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxPQUFPO2dCQUNYLENBQUMsRUFBQztnQkFFRixJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtnQkFFRCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDN0Q7YUFDSjs7Ozs7a0JBS0ssU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQzdDLElBQUksU0FBUyxFQUFFOzs7c0JBRUwsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUMxRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7b0JBQ1osSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7d0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDNUYsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxPQUFPLEtBQUssQ0FBQztpQkFDaEI7YUFDSjtpQkFBTTtnQkFDSCwwQ0FBMEM7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7b0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxPQUFPLElBQUksQ0FBQzthQUNmO1FBQ0wsQ0FBQztLQUFBOzs7WUExREosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7O1lBTlEsYUFBYTtZQUY2QyxNQUFNOzRDQVVJLE1BQU0sU0FBQyxLQUFLOzs7Ozs7OztJQUF6RSxrQ0FBa0M7Ozs7O0lBQUUsNkJBQXNCOzs7OztJQUFFLDBCQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBUYkF1dGhFbnZpcm9ubWVudCB9IGZyb20gJy4vbW9kZWxzL2F1dGgtZW52aXJvbm1lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52OiBUYkF1dGhFbnZpcm9ubWVudCkge31cclxuXHJcbiAgICBhc3luYyBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90JywgbmV4dCwgc3RhdGUudXJsKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2UgcmljZXZvIGp3dCBlIHN1YktleSBzaWduaWZpY2EgY2hlIGRldm8gZmFyZSB1bmEgXCJhdXRvbG9naW5cIlxyXG4gICAgICAgICAqIENyZW8gdW4gTG9naW5SZXF1ZXN0IGNvbiBpIHZhbG9yaSByaWNldnV0aSwgaW50ZWdybyBjb24gYXBwaWQgbGV0dG8gZGEgZW52aXJvbm1lbnQgZWQgZWZmZXR0dW8gdW5hIGxvZ2luIHNwZWNpZmljYVxyXG4gICAgICAgICAqIEluIGNhc28gcG9zaXRpdm8gdmFkbyBpbiBob21lcGFnZSBcIi9cIlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGp3dCA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ2p3dCcpID8gbmV4dC5xdWVyeVBhcmFtcy5qd3QgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHN1YktleSA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ3N1YktleScpID8gbmV4dC5xdWVyeVBhcmFtcy5zdWJLZXkgOiBudWxsO1xyXG4gICAgICAgIGlmIChqd3QgJiYgc3ViS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0ID0gbmV3IExvZ2luUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBsb2dpblJlcXVlc3QudG9rZW4gPSBqd3Q7XHJcbiAgICAgICAgICAgIGxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSBzdWJLZXk7XHJcbiAgICAgICAgICAgIGxvZ2luUmVxdWVzdC5hcHBJZCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXBwSWQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKGxvZ2luUmVxdWVzdCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2UgYXJyaXZvIHF1YSB2dW9sIGRpcmUgY2hlIGhvIGdpw6AgdW4gdG9rZW4gc2FsdmF0byBlIG5vbiBzY2FkdXRvIHF1aW5kaSBjaGllZG8gY29uZmVybWEgZGVsbGEgdmFsaWRpdMOgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgYXV0aHRva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpO1xyXG4gICAgICAgIGlmIChhdXRodG9rZW4pIHtcclxuICAgICAgICAgICAgLy8gaG8gdW4gdG9rZW4sIG1hIG5lIHZlcmlmaWNvIGxhIHZhbGlkaXTDoFxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmlzVmFsaWRUb2tlbihhdXRodG9rZW4pO1xyXG4gICAgICAgICAgICBpZiAocmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnVybC5pbmNsdWRlcygnL2xvZ2luJykpIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnVybC5pbmNsdWRlcygnL2xvZ2luJykpIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=