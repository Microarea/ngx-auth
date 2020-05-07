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
                            this.router.navigateByUrl('/login');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ29mZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DO0lBS0UsMkJBQW1CLFdBQTBCLEVBQVMsTUFBYztRQUFqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDbEUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFSyxrQ0FBTTs7O0lBQVo7Ozs7OzRCQUNpQixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFBOzt3QkFBeEMsTUFBTSxHQUFHLFNBQStCO3dCQUM5QyxJQUFJLE1BQU0sQ0FBQyxNQUFNOzRCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OztLQUN4RDs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFMUSxhQUFhO2dCQUZiLE1BQU07O0lBa0JmLHdCQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksaUJBQWlCOzs7SUFDaEIsd0NBQWlDOztJQUFFLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGItbG9nb2ZmJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIFRiTG9nb2ZmQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5Mb2dPZmYoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIExvZ09mZigpIHtcclxuICAgIGNvbnN0IGxvZ29mZiA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9nb2ZmKCk7XHJcbiAgICBpZiAobG9nb2ZmLlJlc3VsdCkgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==