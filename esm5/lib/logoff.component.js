/**
 * @fileoverview added by tsickle
 * Generated from: lib/logoff.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
var TbLogoffComponent = /** @class */ (function () {
    function TbLogoffComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.LogOff();
    }
    /**
     * @return {?}
     */
    TbLogoffComponent.prototype.LogOff = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var logoff;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.logoff()];
                    case 1:
                        logoff = _a.sent();
                        if (logoff.Result)
                            document.location.href = this.authService.getRedirectUrl();
                        return [2 /*return*/];
                }
            });
        });
    };
    TbLogoffComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tb-logoff',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    TbLogoffComponent.ctorParameters = function () { return [
        { type: TbAuthService },
        { type: Router }
    ]; };
    return TbLogoffComponent;
}());
export { TbLogoffComponent };
if (false) {
    /** @type {?} */
    TbLogoffComponent.prototype.authService;
    /** @type {?} */
    TbLogoffComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ29mZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DO0lBS0UsMkJBQW1CLFdBQTBCLEVBQVMsTUFBYztRQUFqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDbEUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFSyxrQ0FBTTs7O0lBQVo7Ozs7OzRCQUNpQixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFBOzt3QkFBeEMsTUFBTSxHQUFHLFNBQStCO3dCQUM5QyxJQUFJLE1BQU0sQ0FBQyxNQUFNOzRCQUNmLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7Ozs7O0tBQzlEOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQUxRLGFBQWE7Z0JBRmIsTUFBTTs7SUFtQmYsd0JBQUM7Q0FBQSxBQWZELElBZUM7U0FYWSxpQkFBaUI7OztJQUNoQix3Q0FBaUM7O0lBQUUsbUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0Yi1sb2dvZmYnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJMb2dvZmZDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLkxvZ09mZigpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgTG9nT2ZmKCkge1xyXG4gICAgY29uc3QgbG9nb2ZmID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dvZmYoKTtcclxuICAgIGlmIChsb2dvZmYuUmVzdWx0KVxyXG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=