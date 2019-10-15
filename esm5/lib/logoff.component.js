/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
var TbLogoffComponent = /** @class */ (function () {
    function TbLogoffComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        /** @type {?} */
        var authtoken = authService.getToken();
        if (authtoken)
            authService.logoff();
        router.navigate([authService.getLoginPageUrl()]);
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ29mZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQztJQUtJLDJCQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFROztZQUMxRCxTQUFTLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRTtRQUN4QyxJQUFJLFNBQVM7WUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBVEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsRUFBRTtpQkFDZjs7OztnQkFMUSxhQUFhO2dCQUZiLE1BQU07O0lBY2Ysd0JBQUM7Q0FBQSxBQVZELElBVUM7U0FOWSxpQkFBaUI7OztJQUNkLHdDQUFpQzs7SUFBRSxtQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGItbG9nb2ZmJyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgVGJMb2dvZmZDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIGNvbnN0IGF1dGh0b2tlbiA9IGF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgICAgIGlmIChhdXRodG9rZW4pIGF1dGhTZXJ2aWNlLmxvZ29mZigpO1xuICAgICAgICByb3V0ZXIubmF2aWdhdGUoW2F1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpXSk7XG4gICAgfVxufVxuIl19