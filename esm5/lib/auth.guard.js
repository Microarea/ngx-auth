/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment_ from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
/** @type {?} */
var moment = moment_;
import { TbAuthService } from './auth.service';
import { StorageVars } from './models/storage-vars';
var TbAuthGuard = /** @class */ (function () {
    function TbAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
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
            var autologinToken, jwt, subKey, authtoken, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ActivatedRouteSnapshot', next, state.url);
                        jwt = next.queryParams.hasOwnProperty('jwt') ? next.queryParams.jwt : null;
                        subKey = next.queryParams.hasOwnProperty('subKey') ? next.queryParams.subKey : null;
                        if (jwt && subKey) {
                            autologinToken = {
                                JwtToken: jwt,
                                SubscriptionKey: subKey
                            };
                        }
                        if (!autologinToken && this.authService.isExpired()) {
                            this.authService.errorMessage = 'Token expired';
                            this.authService.clearStorage();
                            this.router.navigate(['login']);
                            return [2 /*return*/, true];
                        }
                        authtoken = localStorage.getItem(StorageVars.JWT);
                        if (!(authtoken || autologinToken)) return [3 /*break*/, 2];
                        // ho un token, ma ne verifico la validità
                        return [4 /*yield*/, this.authService.isValidToken(autologinToken)];
                    case 1:
                        res = _a.sent();
                        // TODO test isValidToken
                        console.log('isValidToken', res);
                        if (res.Result) {
                            return [2 /*return*/, true];
                        }
                        else {
                            this.router.navigate(['login']);
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        // non sono loggato quindi vado alla login
                        this.router.navigate(['login']);
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/];
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
        { type: Router }
    ]; };
    /** @nocollapse */ TbAuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function TbAuthGuard_Factory() { return new TbAuthGuard(i0.inject(i1.TbAuthService), i0.inject(i2.Router)); }, token: TbAuthGuard, providedIn: "root" });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBNEQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkcsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7Ozs7O0lBQzVCLE1BQU0sR0FBRyxPQUFPO0FBRXRCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEQ7SUFJSSxxQkFBb0IsV0FBMEIsRUFBVSxNQUFjO1FBQWxELGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7Ozs7OztJQUVwRSxpQ0FBVzs7Ozs7SUFBakIsVUFBa0IsSUFBNEIsRUFBRSxLQUEwQjs7Ozs7O3dCQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBR2pELEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7d0JBQzFFLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7d0JBQ3pGLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTs0QkFDZixjQUFjLEdBQUc7Z0NBQ2IsUUFBUSxFQUFFLEdBQUc7Z0NBQ2IsZUFBZSxFQUFFLE1BQU07NkJBQzFCLENBQUM7eUJBQ0w7d0JBRUQsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUFFOzRCQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUM7NEJBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDaEMsc0JBQU8sSUFBSSxFQUFDO3lCQUNmO3dCQUVLLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7NkJBRW5ELENBQUEsU0FBUyxJQUFJLGNBQWMsQ0FBQSxFQUEzQix3QkFBMkI7O3dCQUVmLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFBOzt3QkFBekQsR0FBRyxHQUFHLFNBQW1EO3dCQUUvRCx5QkFBeUI7d0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUVqQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7NEJBQ1osc0JBQU8sSUFBSSxFQUFDO3lCQUNmOzZCQUFNOzRCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDaEMsc0JBQU8sS0FBSyxFQUFDO3lCQUNoQjs7O3dCQUVELDBDQUEwQzt3QkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxzQkFBTyxJQUFJLEVBQUM7Ozs7O0tBRW5COztnQkE5Q0osVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OztnQkFOUSxhQUFhO2dCQUw2QyxNQUFNOzs7c0JBRHpFO0NBeURDLEFBL0NELElBK0NDO1NBNUNZLFdBQVc7Ozs7OztJQUNSLGtDQUFrQzs7Ozs7SUFBRSw2QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuY29uc3QgbW9tZW50ID0gbW9tZW50XztcblxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dG9sb2dpblRva2VuIH0gZnJvbSAnLi9tb2RlbHMvYXV0b2xvZ2luLXRva2VuLm1vZGVsJztcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUYkF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gICAgYXN5bmMgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FjdGl2YXRlZFJvdXRlU25hcHNob3QnLCBuZXh0LCBzdGF0ZS51cmwpO1xuXG4gICAgICAgIGxldCBhdXRvbG9naW5Ub2tlbjogQXV0b2xvZ2luVG9rZW47XG4gICAgICAgIGNvbnN0IGp3dCA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ2p3dCcpID8gbmV4dC5xdWVyeVBhcmFtcy5qd3QgOiBudWxsO1xuICAgICAgICBjb25zdCBzdWJLZXkgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdzdWJLZXknKSA/IG5leHQucXVlcnlQYXJhbXMuc3ViS2V5IDogbnVsbDtcbiAgICAgICAgaWYgKGp3dCAmJiBzdWJLZXkpIHtcbiAgICAgICAgICAgIGF1dG9sb2dpblRva2VuID0ge1xuICAgICAgICAgICAgICAgIEp3dFRva2VuOiBqd3QsXG4gICAgICAgICAgICAgICAgU3Vic2NyaXB0aW9uS2V5OiBzdWJLZXlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWF1dG9sb2dpblRva2VuICYmIHRoaXMuYXV0aFNlcnZpY2UuaXNFeHBpcmVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ1Rva2VuIGV4cGlyZWQnO1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5jbGVhclN0b3JhZ2UoKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGF1dGh0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XG5cbiAgICAgICAgaWYgKGF1dGh0b2tlbiB8fCBhdXRvbG9naW5Ub2tlbikge1xuICAgICAgICAgICAgLy8gaG8gdW4gdG9rZW4sIG1hIG5lIHZlcmlmaWNvIGxhIHZhbGlkaXTDoFxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5pc1ZhbGlkVG9rZW4oYXV0b2xvZ2luVG9rZW4pO1xuXG4gICAgICAgICAgICAvLyBUT0RPIHRlc3QgaXNWYWxpZFRva2VuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXNWYWxpZFRva2VuJywgcmVzKTtcblxuICAgICAgICAgICAgaWYgKHJlcy5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub24gc29ubyBsb2dnYXRvIHF1aW5kaSB2YWRvIGFsbGEgbG9naW5cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==