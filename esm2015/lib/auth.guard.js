/**
 * @fileoverview added by tsickle
 * Generated from: lib/auth.guard.ts
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // console.log('ActivatedRouteSnapshot', next, state.url);
            // console.log('ActivatedRouteSnapshot', next, state.url);
            /** @type {?} */
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
                const loginResponse = (/** @type {?} */ ((yield this.authService.login(loginRequest).catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                err => {
                    this.authService.errorMessage = err.error && err.error.Message;
                    this.router.navigate(['login']);
                    return;
                })))));
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
             * @type {?}
             */
            const authtoken = this.authService.getToken() || '';
            if (authtoken) {
                // ho un token, ma ne verifico la validità
                /** @type {?} */
                const res = (/** @type {?} */ ((yield this.authService.isValidToken(authtoken))));
                if (res.Result) {
                    if (state.url.includes(this.authService.getLoginPageUrl()))
                        this.router.navigate([this.authService.getRedirectUrl()]);
                    return true;
                }
                else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUE0RCxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBUXRELE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFDdEIsWUFBb0IsV0FBMEIsRUFBVSxNQUFjLEVBQXlCLEdBQXNCO1FBQWpHLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUF5QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUFJLENBQUM7Ozs7OztJQUVwSCxXQUFXLENBQUMsSUFBNEIsRUFBRSxLQUEwQjs7WUFDeEUsMERBQTBEOzs7a0JBRXBELFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFO1lBRTNELElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5QiwwQ0FBMEM7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUNqQztnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUU7Z0JBQzFELElB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LE1BQU07YUFDbkI7Ozs7WUFSUSxhQUFhO1lBRjZDLE1BQU07NENBWUUsTUFBTSxTQUFDLEtBQUs7Ozs7Ozs7O0lBQXpFLGtDQUFrQzs7Ozs7SUFBRSw2QkFBc0I7Ozs7O0lBQUUsMEJBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IFRiQXV0aEVudmlyb25tZW50IH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IE9wZXJhdGlvblJlc3VsdCB9IGZyb20gJy4vbW9kZWxzL29wZXJhdGlvbi1yZXN1bHQnO1xyXG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnY6IFRiQXV0aEVudmlyb25tZW50KSB7IH1cclxuXHJcbiAgYXN5bmMgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90JywgbmV4dCwgc3RhdGUudXJsKTtcclxuXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5jaGVja0Nvbm5lY3Rpb24oKTtcclxuXHJcbiAgICBpZiAoIWNvbm5lY3Rpb24pIHtcclxuICAgICAgY29uc29sZS5sb2coJ0NPTk5FQ1RJT05ET1dOJyk7XHJcbiAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxyXG4gICAgICBpZiAoIXN0YXRlLnVybC5pbmNsdWRlcygnL2xvZ2luJykpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGF0ZS51cmwuaW5jbHVkZXModGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKSkpIHtcclxuICAgICAgdGhpcy5hdXRoU2VydmljZS5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZSByaWNldm8gand0IGUgc3ViS2V5IHNpZ25pZmljYSBjaGUgZGV2byBmYXJlIHVuYSBcImF1dG9sb2dpblwiXHJcbiAgICAgKiBDcmVvIHVuIExvZ2luUmVxdWVzdCBjb24gaSB2YWxvcmkgcmljZXZ1dGksIGludGVncm8gY29uIGFwcGlkIGxldHRvIGRhIGVudmlyb25tZW50IGVkIGVmZmV0dHVvIHVuYSBsb2dpbiBzcGVjaWZpY2FcclxuICAgICAqIEluIGNhc28gcG9zaXRpdm8gdmFkbyBpbiBob21lcGFnZSBcIi9cIlxyXG4gICAgICovXHJcbiAgICBjb25zdCBqd3QgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdqd3QnKSA/IG5leHQucXVlcnlQYXJhbXMuand0IDogbnVsbDtcclxuICAgIGNvbnN0IHN1YktleSA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ3N1YktleScpID8gbmV4dC5xdWVyeVBhcmFtcy5zdWJLZXkgOiBudWxsO1xyXG4gICAgaWYgKGp3dCAmJiBzdWJLZXkpIHtcclxuICAgICAgY29uc3QgbG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QgPSBuZXcgTG9naW5SZXF1ZXN0KCk7XHJcbiAgICAgIGxvZ2luUmVxdWVzdC50b2tlbiA9IGp3dDtcclxuICAgICAgbG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHN1YktleTtcclxuICAgICAgbG9naW5SZXF1ZXN0LmFwcElkID0gdGhpcy5hdXRoU2VydmljZS5nZXRBcHBJZCgpO1xyXG5cclxuICAgICAgY29uc3QgbG9naW5SZXNwb25zZSA9IChhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKGxvZ2luUmVxdWVzdCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSkpIGFzIExvZ2luUmVzcG9uc2U7XHJcblxyXG4gICAgICBpZiAoIWxvZ2luUmVzcG9uc2UpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpXSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlIGFycml2byBxdWEgdnVvbCBkaXJlIGNoZSBobyBnacOgIHVuIHRva2VuIHNhbHZhdG8gZSBub24gc2NhZHV0byBxdWluZGkgY2hpZWRvIGNvbmZlcm1hIGRlbGxhIHZhbGlkaXTDoFxyXG4gICAgICovXHJcbiAgICBjb25zdCBhdXRodG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCkgfHwgJyc7XHJcbiAgICBpZiAoYXV0aHRva2VuKSB7XHJcbiAgICAgIC8vIGhvIHVuIHRva2VuLCBtYSBuZSB2ZXJpZmljbyBsYSB2YWxpZGl0w6BcclxuICAgICAgY29uc3QgcmVzOiBPcGVyYXRpb25SZXN1bHQgPSAoYXdhaXQgdGhpcy5hdXRoU2VydmljZS5pc1ZhbGlkVG9rZW4oYXV0aHRva2VuKSkgYXMgT3BlcmF0aW9uUmVzdWx0O1xyXG5cclxuICAgICAgaWYgKHJlcy5SZXN1bHQpIHtcclxuICAgICAgICBpZiAoc3RhdGUudXJsLmluY2x1ZGVzKHRoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCkpKSB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpXSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxyXG4gICAgICBpZiAoIXN0YXRlLnVybC5pbmNsdWRlcyh0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpKSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCldKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==