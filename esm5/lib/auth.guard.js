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
var moment = moment_;
import { TbAuthService } from './auth.service';
import { StorageVars } from './models/storage-vars';
import { LoginRequest } from './models/login-request';
var TbAuthGuard = /** @class */ (function () {
    function TbAuthGuard(authService, router, env) {
        this.authService = authService;
        this.router = router;
        this.env = env;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    TbAuthGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var jwt, subKey, loginRequest, loginResponse, url, authtoken, res;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log('ActivatedRouteSnapshot', next, state.url);
                        jwt = next.queryParams.hasOwnProperty('jwt') ? next.queryParams.jwt : null;
                        subKey = next.queryParams.hasOwnProperty('subKey') ? next.queryParams.subKey : null;
                        if (!(jwt && subKey)) return [3 /*break*/, 2];
                        loginRequest = new LoginRequest();
                        loginRequest.token = jwt;
                        loginRequest.subscriptionKey = subKey;
                        loginRequest.appId = this.env.auth.appid;
                        return [4 /*yield*/, this.authService.login(loginRequest).catch((/**
                             * @param {?} err
                             * @return {?}
                             */
                            function (err) {
                                _this.authService.errorMessage = err.error && err.error.Message;
                                _this.router.navigate(['login']);
                                return;
                            }))];
                    case 1:
                        loginResponse = _a.sent();
                        if (!loginResponse) {
                            this.router.navigate(['login']);
                            return [2 /*return*/, false];
                        }
                        if (loginResponse.Result) {
                            url = this.authService.getRedirectUrl();
                            this.authService.errorMessage = '';
                            this.router.navigate([url]);
                        }
                        _a.label = 2;
                    case 2:
                        /**
                         * Se il token salvato in localStorage risulta scaduto, svuoto localStorage e rimando alla login
                         */
                        if (this.authService.isExpired()) {
                            // this.authService.errorMessage = 'Token expired';
                            this.authService.clearStorage();
                            this.router.navigate(['login']);
                            return [2 /*return*/, true];
                        }
                        authtoken = localStorage.getItem(StorageVars.JWT);
                        if (!authtoken) return [3 /*break*/, 4];
                        // ho un token, ma ne verifico la validità
                        return [4 /*yield*/, this.authService.isValidToken(authtoken)];
                    case 3:
                        res = _a.sent();
                        if (res.Result) {
                            return [2 /*return*/, true];
                        }
                        else {
                            this.router.navigate(['login']);
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        // non sono loggato quindi vado alla login
                        this.router.navigate(['login']);
                        return [2 /*return*/, true];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TbAuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TbAuthGuard.ctorParameters = function () { return [
        { type: TbAuthService },
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
    ]; };
    /** @nocollapse */ TbAuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function TbAuthGuard_Factory() { return new TbAuthGuard(i0.inject(i1.TbAuthService), i0.inject(i2.Router), i0.inject("env")); }, token: TbAuthGuard, providedIn: "root" });
    return TbAuthGuard;
}());
export { TbAuthGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQTRELE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5HLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7OztJQUM1QixNQUFNLEdBQUcsT0FBTztBQUV0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RDtJQUlJLHFCQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBRztRQUE5RSxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBeUIsUUFBRyxHQUFILEdBQUcsQ0FBQTtJQUFHLENBQUM7Ozs7OztJQUVoRyxpQ0FBVzs7Ozs7SUFBakIsVUFBa0IsSUFBNEIsRUFBRSxLQUEwQjs7Ozs7Ozs7d0JBUWhFLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7d0JBQzFFLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7NkJBQ3JGLENBQUEsR0FBRyxJQUFJLE1BQU0sQ0FBQSxFQUFiLHdCQUFhO3dCQUNQLFlBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUU7d0JBQ3JELFlBQVksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO3dCQUN6QixZQUFZLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQzt3QkFDdEMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBRW5CLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUs7Ozs7NEJBQUMsVUFBQSxHQUFHO2dDQUN0RSxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2dDQUMvRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0NBQ2hDLE9BQU87NEJBQ1gsQ0FBQyxFQUFDLEVBQUE7O3dCQUpJLGFBQWEsR0FBRyxTQUlwQjt3QkFFRixJQUFJLENBQUMsYUFBYSxFQUFFOzRCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ2hDLHNCQUFPLEtBQUssRUFBQzt5QkFDaEI7d0JBRUQsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFOzRCQUNoQixHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7NEJBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzs0QkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUMvQjs7O3dCQUdMOzsyQkFFRzt3QkFDSCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEVBQUU7NEJBQzlCLG1EQUFtRDs0QkFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs0QkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUNoQyxzQkFBTyxJQUFJLEVBQUM7eUJBQ2Y7d0JBS0ssU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzs2QkFDbkQsU0FBUyxFQUFULHdCQUFTOzt3QkFFRyxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQXBELEdBQUcsR0FBRyxTQUE4Qzt3QkFFMUQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFOzRCQUNaLHNCQUFPLElBQUksRUFBQzt5QkFDZjs2QkFBTTs0QkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ2hDLHNCQUFPLEtBQUssRUFBQzt5QkFDaEI7Ozt3QkFFRCwwQ0FBMEM7d0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsc0JBQU8sSUFBSSxFQUFDOzs7OztLQUVuQjs7Z0JBckVKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7Z0JBTlEsYUFBYTtnQkFMNkMsTUFBTTtnREFhSSxNQUFNLFNBQUMsS0FBSzs7O3NCQWR6RjtDQWdGQyxBQXRFRCxJQXNFQztTQW5FWSxXQUFXOzs7Ozs7SUFDUixrQ0FBa0M7Ozs7O0lBQUUsNkJBQXNCOzs7OztJQUFFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcclxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRiQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnYpIHt9XHJcblxyXG4gICAgYXN5bmMgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQWN0aXZhdGVkUm91dGVTbmFwc2hvdCcsIG5leHQsIHN0YXRlLnVybCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlIHJpY2V2byBqd3QgZSBzdWJLZXkgc2lnbmlmaWNhIGNoZSBkZXZvIGZhcmUgdW5hIFwiYXV0b2xvZ2luXCJcclxuICAgICAgICAgKiBDcmVvIHVuIExvZ2luUmVxdWVzdCBjb24gaSB2YWxvcmkgcmljZXZ1dGksIGludGVncm8gY29uIGFwcGlkIGxldHRvIGRhIGVudmlyb25tZW50IGVkIGVmZmV0dHVvIHVuYSBsb2dpbiBzcGVjaWZpY2FcclxuICAgICAgICAgKiBJbiBjYXNvIHBvc2l0aXZvIHZhZG8gaW4gaG9tZXBhZ2UgXCIvXCJcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBqd3QgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdqd3QnKSA/IG5leHQucXVlcnlQYXJhbXMuand0IDogbnVsbDtcclxuICAgICAgICBjb25zdCBzdWJLZXkgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdzdWJLZXknKSA/IG5leHQucXVlcnlQYXJhbXMuc3ViS2V5IDogbnVsbDtcclxuICAgICAgICBpZiAoand0ICYmIHN1YktleSkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCA9IG5ldyBMb2dpblJlcXVlc3QoKTtcclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnRva2VuID0gand0O1xyXG4gICAgICAgICAgICBsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gc3ViS2V5O1xyXG4gICAgICAgICAgICBsb2dpblJlcXVlc3QuYXBwSWQgPSB0aGlzLmVudi5hdXRoLmFwcGlkO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9naW5SZXNwb25zZSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4obG9naW5SZXF1ZXN0KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3VybF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZSBpbCB0b2tlbiBzYWx2YXRvIGluIGxvY2FsU3RvcmFnZSByaXN1bHRhIHNjYWR1dG8sIHN2dW90byBsb2NhbFN0b3JhZ2UgZSByaW1hbmRvIGFsbGEgbG9naW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0V4cGlyZWQoKSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdUb2tlbiBleHBpcmVkJztcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZSBhcnJpdm8gcXVhIHZ1b2wgZGlyZSBjaGUgaG8gZ2nDoCB1biB0b2tlbiBzYWx2YXRvIGUgbm9uIHNjYWR1dG8gcXVpbmRpIGNoaWVkbyBjb25mZXJtYSBkZWxsYSB2YWxpZGl0w6BcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBhdXRodG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgICAgIGlmIChhdXRodG9rZW4pIHtcclxuICAgICAgICAgICAgLy8gaG8gdW4gdG9rZW4sIG1hIG5lIHZlcmlmaWNvIGxhIHZhbGlkaXTDoFxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmlzVmFsaWRUb2tlbihhdXRodG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19