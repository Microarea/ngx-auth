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
                            this.authService.errorMessage = '';
                            this.router.navigate([this.authService.redirectUrl]);
                        }
                        _a.label = 2;
                    case 2:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQTRELE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5HLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7OztJQUM1QixNQUFNLEdBQUcsT0FBTztBQUV0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RDtJQUlJLHFCQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBRztRQUE5RSxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBeUIsUUFBRyxHQUFILEdBQUcsQ0FBQTtJQUFHLENBQUM7Ozs7OztJQUVoRyxpQ0FBVzs7Ozs7SUFBakIsVUFBa0IsSUFBNEIsRUFBRSxLQUEwQjs7Ozs7Ozs7d0JBUWhFLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7d0JBQzFFLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7NkJBQ3JGLENBQUEsR0FBRyxJQUFJLE1BQU0sQ0FBQSxFQUFiLHdCQUFhO3dCQUNQLFlBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUU7d0JBQ3JELFlBQVksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO3dCQUN6QixZQUFZLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQzt3QkFDdEMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBRW5CLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUs7Ozs7NEJBQUMsVUFBQSxHQUFHO2dDQUN0RSxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2dDQUMvRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0NBQ2hDLE9BQU87NEJBQ1gsQ0FBQyxFQUFDLEVBQUE7O3dCQUpJLGFBQWEsR0FBRyxTQUlwQjt3QkFFRixJQUFJLENBQUMsYUFBYSxFQUFFOzRCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ2hDLHNCQUFPLEtBQUssRUFBQzt5QkFDaEI7d0JBRUQsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFOzRCQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7NEJBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3lCQUN4RDs7O3dCQU1DLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7NkJBQ25ELFNBQVMsRUFBVCx3QkFBUzs7d0JBRUcscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFwRCxHQUFHLEdBQUcsU0FBOEM7d0JBRTFELElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTs0QkFDWixzQkFBTyxJQUFJLEVBQUM7eUJBQ2Y7NkJBQU07NEJBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUNoQyxzQkFBTyxLQUFLLEVBQUM7eUJBQ2hCOzs7d0JBRUQsMENBQTBDO3dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLHNCQUFPLElBQUksRUFBQzs7Ozs7S0FFbkI7O2dCQTNESixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7O2dCQU5RLGFBQWE7Z0JBTDZDLE1BQU07Z0RBYUksTUFBTSxTQUFDLEtBQUs7OztzQkFkekY7Q0FzRUMsQUE1REQsSUE0REM7U0F6RFksV0FBVzs7Ozs7O0lBQ1Isa0NBQWtDOzs7OztJQUFFLDZCQUFzQjs7Ozs7SUFBRSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XHJcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52KSB7fVxyXG5cclxuICAgIGFzeW5jIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0FjdGl2YXRlZFJvdXRlU25hcHNob3QnLCBuZXh0LCBzdGF0ZS51cmwpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZSByaWNldm8gand0IGUgc3ViS2V5IHNpZ25pZmljYSBjaGUgZGV2byBmYXJlIHVuYSBcImF1dG9sb2dpblwiXHJcbiAgICAgICAgICogQ3JlbyB1biBMb2dpblJlcXVlc3QgY29uIGkgdmFsb3JpIHJpY2V2dXRpLCBpbnRlZ3JvIGNvbiBhcHBpZCBsZXR0byBkYSBlbnZpcm9ubWVudCBlZCBlZmZldHR1byB1bmEgbG9naW4gc3BlY2lmaWNhXHJcbiAgICAgICAgICogSW4gY2FzbyBwb3NpdGl2byB2YWRvIGluIGhvbWVwYWdlIFwiL1wiXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgand0ID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnand0JykgPyBuZXh0LnF1ZXJ5UGFyYW1zLmp3dCA6IG51bGw7XHJcbiAgICAgICAgY29uc3Qgc3ViS2V5ID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnc3ViS2V5JykgPyBuZXh0LnF1ZXJ5UGFyYW1zLnN1YktleSA6IG51bGw7XHJcbiAgICAgICAgaWYgKGp3dCAmJiBzdWJLZXkpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QgPSBuZXcgTG9naW5SZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIGxvZ2luUmVxdWVzdC50b2tlbiA9IGp3dDtcclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHN1YktleTtcclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LmFwcElkID0gdGhpcy5lbnYuYXV0aC5hcHBpZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKGxvZ2luUmVxdWVzdCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UucmVkaXJlY3RVcmxdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2UgYXJyaXZvIHF1YSB2dW9sIGRpcmUgY2hlIGhvIGdpw6AgdW4gdG9rZW4gc2FsdmF0byBlIG5vbiBzY2FkdXRvIHF1aW5kaSBjaGllZG8gY29uZmVybWEgZGVsbGEgdmFsaWRpdMOgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgYXV0aHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgICAgICBpZiAoYXV0aHRva2VuKSB7XHJcbiAgICAgICAgICAgIC8vIGhvIHVuIHRva2VuLCBtYSBuZSB2ZXJpZmljbyBsYSB2YWxpZGl0w6BcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5pc1ZhbGlkVG9rZW4oYXV0aHRva2VuKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBub24gc29ubyBsb2dnYXRvIHF1aW5kaSB2YWRvIGFsbGEgbG9naW5cclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==