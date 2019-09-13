/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                loginRequest.appId = this.env.auth.appid;
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
                    this.router.navigate([this.authService.redirectUrl]);
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
                        this.router.navigate([this.authService.redirectUrl]);
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
/** @nocollapse */ TbAuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function TbAuthGuard_Factory() { return new TbAuthGuard(i0.inject(i1.TbAuthService), i0.inject(i2.Router), i0.inject("env")); }, token: TbAuthGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQTRELE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5HLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLdEQsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQUNwQixZQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBRztRQUE5RSxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBeUIsUUFBRyxHQUFILEdBQUcsQ0FBQTtJQUFHLENBQUM7Ozs7OztJQUVoRyxXQUFXLENBQUMsSUFBNEIsRUFBRSxLQUEwQjs7WUFDdEUsMERBQTBEOzs7Ozs7OztrQkFPcEQsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSTs7a0JBQzFFLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDekYsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFOztzQkFDVCxZQUFZLEdBQWlCLElBQUksWUFBWSxFQUFFO2dCQUNyRCxZQUFZLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsWUFBWSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOztzQkFFbkMsYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSzs7OztnQkFBQyxHQUFHLENBQUMsRUFBRTtvQkFDekUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxPQUFPO2dCQUNYLENBQUMsRUFBQztnQkFFRixJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtnQkFFRCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7aUJBQ3hEO2FBQ0o7Ozs7O2tCQUtLLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUM3QyxJQUFJLFNBQVMsRUFBRTs7O3NCQUVMLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDMUQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO29CQUNaLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO3dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUN2RixPQUFPLElBQUksQ0FBQztpQkFDZjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjthQUNKO2lCQUFNO2dCQUNILDBDQUEwQztnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztvQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDO0tBQUE7OztZQTFESixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7WUFMUSxhQUFhO1lBRjZDLE1BQU07NENBU0ksTUFBTSxTQUFDLEtBQUs7Ozs7Ozs7O0lBQXpFLGtDQUFrQzs7Ozs7SUFBRSw2QkFBc0I7Ozs7O0lBQUUsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRiQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnYpIHt9XHJcblxyXG4gICAgYXN5bmMgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQWN0aXZhdGVkUm91dGVTbmFwc2hvdCcsIG5leHQsIHN0YXRlLnVybCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlIHJpY2V2byBqd3QgZSBzdWJLZXkgc2lnbmlmaWNhIGNoZSBkZXZvIGZhcmUgdW5hIFwiYXV0b2xvZ2luXCJcclxuICAgICAgICAgKiBDcmVvIHVuIExvZ2luUmVxdWVzdCBjb24gaSB2YWxvcmkgcmljZXZ1dGksIGludGVncm8gY29uIGFwcGlkIGxldHRvIGRhIGVudmlyb25tZW50IGVkIGVmZmV0dHVvIHVuYSBsb2dpbiBzcGVjaWZpY2FcclxuICAgICAgICAgKiBJbiBjYXNvIHBvc2l0aXZvIHZhZG8gaW4gaG9tZXBhZ2UgXCIvXCJcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBqd3QgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdqd3QnKSA/IG5leHQucXVlcnlQYXJhbXMuand0IDogbnVsbDtcclxuICAgICAgICBjb25zdCBzdWJLZXkgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdzdWJLZXknKSA/IG5leHQucXVlcnlQYXJhbXMuc3ViS2V5IDogbnVsbDtcclxuICAgICAgICBpZiAoand0ICYmIHN1YktleSkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCA9IG5ldyBMb2dpblJlcXVlc3QoKTtcclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnRva2VuID0gand0O1xyXG4gICAgICAgICAgICBsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gc3ViS2V5O1xyXG4gICAgICAgICAgICBsb2dpblJlcXVlc3QuYXBwSWQgPSB0aGlzLmVudi5hdXRoLmFwcGlkO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9naW5SZXNwb25zZSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4obG9naW5SZXF1ZXN0KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UucmVkaXJlY3RVcmxdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2UgYXJyaXZvIHF1YSB2dW9sIGRpcmUgY2hlIGhvIGdpw6AgdW4gdG9rZW4gc2FsdmF0byBlIG5vbiBzY2FkdXRvIHF1aW5kaSBjaGllZG8gY29uZmVybWEgZGVsbGEgdmFsaWRpdMOgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgYXV0aHRva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpO1xyXG4gICAgICAgIGlmIChhdXRodG9rZW4pIHtcclxuICAgICAgICAgICAgLy8gaG8gdW4gdG9rZW4sIG1hIG5lIHZlcmlmaWNvIGxhIHZhbGlkaXTDoFxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmlzVmFsaWRUb2tlbihhdXRodG9rZW4pO1xyXG4gICAgICAgICAgICBpZiAocmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnVybC5pbmNsdWRlcygnL2xvZ2luJykpIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLnJlZGlyZWN0VXJsXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBub24gc29ubyBsb2dnYXRvIHF1aW5kaSB2YWRvIGFsbGEgbG9naW5cclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS51cmwuaW5jbHVkZXMoJy9sb2dpbicpKSB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19