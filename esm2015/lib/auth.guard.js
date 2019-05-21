/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import * as moment_ from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
/** @type {?} */
const moment = moment_;
import { TbAuthService } from './auth.service';
import { StorageVars } from './models/storage-vars';
import { LoginRequest } from './models/login-request';
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
            console.log('ActivatedRouteSnapshot', next, state.url);
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
                loginRequest.JwtToken = jwt;
                loginRequest.SubscriptionKey = subKey;
                loginRequest.AppId = this.env.auth.appid;
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
                    /** @type {?} */
                    const url = this.authService.getRedirectUrl();
                    this.authService.errorMessage = '';
                    this.router.navigate([url]);
                }
            }
            /**
             * Se il token salvato in localStorage risulta scaduto, svuoto localStorage e rimando alla login
             */
            if (this.authService.isExpired()) {
                this.authService.errorMessage = 'Token expired';
                this.authService.clearStorage();
                this.router.navigate(['login']);
                return true;
            }
            /**
             * Se arrivo qua vuol dire che ho già un token salvato e non scaduto quindi chiedo conferma della validità
             * @type {?}
             */
            const authtoken = localStorage.getItem(StorageVars.JWT);
            if (authtoken) {
                // ho un token, ma ne verifico la validità
                /** @type {?} */
                const res = yield this.authService.isValidToken(authtoken);
                if (res.Result) {
                    return true;
                }
                else {
                    this.router.navigate(['login']);
                    return false;
                }
            }
            else {
                // non sono loggato quindi vado alla login
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQTRELE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5HLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7OztNQUM1QixNQUFNLEdBQUcsT0FBTztBQUV0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUt0RCxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBQ3BCLFlBQW9CLFdBQTBCLEVBQVUsTUFBYyxFQUF5QixHQUFHO1FBQTlFLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUF5QixRQUFHLEdBQUgsR0FBRyxDQUFBO0lBQUcsQ0FBQzs7Ozs7O0lBRWhHLFdBQVcsQ0FBQyxJQUE0QixFQUFFLEtBQTBCOztZQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7a0JBT2pELEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7O2tCQUMxRSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3pGLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTs7c0JBQ1QsWUFBWSxHQUFpQixJQUFJLFlBQVksRUFBRTtnQkFDckQsWUFBWSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQzVCLFlBQVksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO2dCQUN0QyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7c0JBRW5DLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUs7Ozs7Z0JBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3pFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsT0FBTztnQkFDWCxDQUFDLEVBQUM7Z0JBRUYsSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxPQUFPLEtBQUssQ0FBQztpQkFDaEI7Z0JBRUQsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFOzswQkFDaEIsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO29CQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDL0I7YUFDSjtZQUVEOztlQUVHO1lBQ0gsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxJQUFJLENBQUM7YUFDZjs7Ozs7a0JBS0ssU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUN2RCxJQUFJLFNBQVMsRUFBRTs7O3NCQUVMLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFFMUQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO29CQUNaLE9BQU8sSUFBSSxDQUFDO2lCQUNmO3FCQUFNO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0o7aUJBQU07Z0JBQ0gsMENBQTBDO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDO0tBQUE7OztZQXJFSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7WUFOUSxhQUFhO1lBTDZDLE1BQU07NENBYUksTUFBTSxTQUFDLEtBQUs7Ozs7Ozs7O0lBQXpFLGtDQUFrQzs7Ozs7SUFBRSw2QkFBc0I7Ozs7O0lBQUUsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuY29uc3QgbW9tZW50ID0gbW9tZW50XztcblxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRiQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52KSB7fVxuXG4gICAgYXN5bmMgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FjdGl2YXRlZFJvdXRlU25hcHNob3QnLCBuZXh0LCBzdGF0ZS51cmwpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZSByaWNldm8gand0IGUgc3ViS2V5IHNpZ25pZmljYSBjaGUgZGV2byBmYXJlIHVuYSBcImF1dG9sb2dpblwiXG4gICAgICAgICAqIENyZW8gdW4gTG9naW5SZXF1ZXN0IGNvbiBpIHZhbG9yaSByaWNldnV0aSwgaW50ZWdybyBjb24gYXBwaWQgbGV0dG8gZGEgZW52aXJvbm1lbnQgZWQgZWZmZXR0dW8gdW5hIGxvZ2luIHNwZWNpZmljYVxuICAgICAgICAgKiBJbiBjYXNvIHBvc2l0aXZvIHZhZG8gaW4gaG9tZXBhZ2UgXCIvXCJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGp3dCA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ2p3dCcpID8gbmV4dC5xdWVyeVBhcmFtcy5qd3QgOiBudWxsO1xuICAgICAgICBjb25zdCBzdWJLZXkgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdzdWJLZXknKSA/IG5leHQucXVlcnlQYXJhbXMuc3ViS2V5IDogbnVsbDtcbiAgICAgICAgaWYgKGp3dCAmJiBzdWJLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0ID0gbmV3IExvZ2luUmVxdWVzdCgpO1xuICAgICAgICAgICAgbG9naW5SZXF1ZXN0Lkp3dFRva2VuID0gand0O1xuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LlN1YnNjcmlwdGlvbktleSA9IHN1YktleTtcbiAgICAgICAgICAgIGxvZ2luUmVxdWVzdC5BcHBJZCA9IHRoaXMuZW52LmF1dGguYXBwaWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKGxvZ2luUmVxdWVzdCkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3VybF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlIGlsIHRva2VuIHNhbHZhdG8gaW4gbG9jYWxTdG9yYWdlIHJpc3VsdGEgc2NhZHV0bywgc3Z1b3RvIGxvY2FsU3RvcmFnZSBlIHJpbWFuZG8gYWxsYSBsb2dpblxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNFeHBpcmVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ1Rva2VuIGV4cGlyZWQnO1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5jbGVhclN0b3JhZ2UoKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZSBhcnJpdm8gcXVhIHZ1b2wgZGlyZSBjaGUgaG8gZ2nDoCB1biB0b2tlbiBzYWx2YXRvIGUgbm9uIHNjYWR1dG8gcXVpbmRpIGNoaWVkbyBjb25mZXJtYSBkZWxsYSB2YWxpZGl0w6BcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGF1dGh0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XG4gICAgICAgIGlmIChhdXRodG9rZW4pIHtcbiAgICAgICAgICAgIC8vIGhvIHVuIHRva2VuLCBtYSBuZSB2ZXJpZmljbyBsYSB2YWxpZGl0w6BcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuaXNWYWxpZFRva2VuKGF1dGh0b2tlbik7XG5cbiAgICAgICAgICAgIGlmIChyZXMuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm9uIHNvbm8gbG9nZ2F0byBxdWluZGkgdmFkbyBhbGxhIGxvZ2luXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=