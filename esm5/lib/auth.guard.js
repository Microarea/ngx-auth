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
            var jwt, subKey, loginRequest, loginResponse, authtoken, res;
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
                        loginRequest.appId = this.authService.getAppId();
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
                            this.authService.errorMessage = '';
                            this.router.navigate([this.authService.getRedirectUrl()]);
                        }
                        _a.label = 2;
                    case 2:
                        authtoken = this.authService.getToken();
                        if (!authtoken) return [3 /*break*/, 4];
                        // ho un token, ma ne verifico la validità
                        return [4 /*yield*/, this.authService.isValidToken(authtoken)];
                    case 3:
                        res = _a.sent();
                        if (res.Result) {
                            if (state.url.includes('/login'))
                                this.router.navigate([this.authService.getRedirectUrl()]);
                            return [2 /*return*/, true];
                        }
                        else {
                            this.router.navigate(['login']);
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        // non sono loggato quindi vado alla login
                        if (!state.url.includes('/login'))
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
    /** @nocollapse */ TbAuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TbAuthGuard_Factory() { return new TbAuthGuard(i0.ɵɵinject(i1.TbAuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject("env")); }, token: TbAuthGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQTRELE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5HLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFHdEQ7SUFJSSxxQkFBb0IsV0FBMEIsRUFBVSxNQUFjLEVBQXlCLEdBQXNCO1FBQWpHLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUF5QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUFHLENBQUM7Ozs7OztJQUVuSCxpQ0FBVzs7Ozs7SUFBakIsVUFBa0IsSUFBNEIsRUFBRSxLQUEwQjs7Ozs7Ozs7d0JBUWhFLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7d0JBQzFFLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7NkJBQ3JGLENBQUEsR0FBRyxJQUFJLE1BQU0sQ0FBQSxFQUFiLHdCQUFhO3dCQUNQLFlBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUU7d0JBQ3JELFlBQVksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO3dCQUN6QixZQUFZLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQzt3QkFDdEMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUUzQixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLOzs7OzRCQUFDLFVBQUEsR0FBRztnQ0FDdEUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQ0FDL0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dDQUNoQyxPQUFPOzRCQUNYLENBQUMsRUFBQyxFQUFBOzt3QkFKSSxhQUFhLEdBQUcsU0FJcEI7d0JBRUYsSUFBSSxDQUFDLGFBQWEsRUFBRTs0QkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUNoQyxzQkFBTyxLQUFLLEVBQUM7eUJBQ2hCO3dCQUVELElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTs0QkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDOzRCQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUM3RDs7O3dCQU1DLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTs2QkFDekMsU0FBUyxFQUFULHdCQUFTOzt3QkFFRyxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQXBELEdBQUcsR0FBRyxTQUE4Qzt3QkFDMUQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFOzRCQUNaLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQzVGLHNCQUFPLElBQUksRUFBQzt5QkFDZjs2QkFBTTs0QkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ2hDLHNCQUFPLEtBQUssRUFBQzt5QkFDaEI7Ozt3QkFFRCwwQ0FBMEM7d0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7NEJBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNuRSxzQkFBTyxJQUFJLEVBQUM7Ozs7O0tBRW5COztnQkExREosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OztnQkFOUSxhQUFhO2dCQUY2QyxNQUFNO2dEQVVJLE1BQU0sU0FBQyxLQUFLOzs7c0JBWHpGO0NBa0VDLEFBM0RELElBMkRDO1NBeERZLFdBQVc7Ozs7OztJQUNSLGtDQUFrQzs7Ozs7SUFBRSw2QkFBc0I7Ozs7O0lBQUUsMEJBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IFRiQXV0aEVudmlyb25tZW50IH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1lbnZpcm9ubWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRiQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnY6IFRiQXV0aEVudmlyb25tZW50KSB7fVxyXG5cclxuICAgIGFzeW5jIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0FjdGl2YXRlZFJvdXRlU25hcHNob3QnLCBuZXh0LCBzdGF0ZS51cmwpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZSByaWNldm8gand0IGUgc3ViS2V5IHNpZ25pZmljYSBjaGUgZGV2byBmYXJlIHVuYSBcImF1dG9sb2dpblwiXHJcbiAgICAgICAgICogQ3JlbyB1biBMb2dpblJlcXVlc3QgY29uIGkgdmFsb3JpIHJpY2V2dXRpLCBpbnRlZ3JvIGNvbiBhcHBpZCBsZXR0byBkYSBlbnZpcm9ubWVudCBlZCBlZmZldHR1byB1bmEgbG9naW4gc3BlY2lmaWNhXHJcbiAgICAgICAgICogSW4gY2FzbyBwb3NpdGl2byB2YWRvIGluIGhvbWVwYWdlIFwiL1wiXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgand0ID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnand0JykgPyBuZXh0LnF1ZXJ5UGFyYW1zLmp3dCA6IG51bGw7XHJcbiAgICAgICAgY29uc3Qgc3ViS2V5ID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnc3ViS2V5JykgPyBuZXh0LnF1ZXJ5UGFyYW1zLnN1YktleSA6IG51bGw7XHJcbiAgICAgICAgaWYgKGp3dCAmJiBzdWJLZXkpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QgPSBuZXcgTG9naW5SZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIGxvZ2luUmVxdWVzdC50b2tlbiA9IGp3dDtcclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHN1YktleTtcclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LmFwcElkID0gdGhpcy5hdXRoU2VydmljZS5nZXRBcHBJZCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9naW5SZXNwb25zZSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4obG9naW5SZXF1ZXN0KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZSBhcnJpdm8gcXVhIHZ1b2wgZGlyZSBjaGUgaG8gZ2nDoCB1biB0b2tlbiBzYWx2YXRvIGUgbm9uIHNjYWR1dG8gcXVpbmRpIGNoaWVkbyBjb25mZXJtYSBkZWxsYSB2YWxpZGl0w6BcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBhdXRodG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XHJcbiAgICAgICAgaWYgKGF1dGh0b2tlbikge1xyXG4gICAgICAgICAgICAvLyBobyB1biB0b2tlbiwgbWEgbmUgdmVyaWZpY28gbGEgdmFsaWRpdMOgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuaXNWYWxpZFRva2VuKGF1dGh0b2tlbik7XHJcbiAgICAgICAgICAgIGlmIChyZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudXJsLmluY2x1ZGVzKCcvbG9naW4nKSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbm9uIHNvbm8gbG9nZ2F0byBxdWluZGkgdmFkbyBhbGxhIGxvZ2luXHJcbiAgICAgICAgICAgIGlmICghc3RhdGUudXJsLmluY2x1ZGVzKCcvbG9naW4nKSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==