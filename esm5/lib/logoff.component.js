/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        router.navigate(['/login']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ29mZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcvQztJQUtJLDJCQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFROztZQUMxRCxTQUFTLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRTtRQUN4QyxJQUFJLFNBQVM7WUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBVEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsRUFBRTtpQkFDZjs7OztnQkFOUSxhQUFhO2dCQURiLE1BQU07O0lBY2Ysd0JBQUM7Q0FBQSxBQVZELElBVUM7U0FOWSxpQkFBaUI7OztJQUNkLHdDQUFpQzs7SUFBRSxtQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuL21vZGVscy9zdG9yYWdlLXZhcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RiLWxvZ29mZicsXG4gICAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIFRiTG9nb2ZmQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICBjb25zdCBhdXRodG9rZW4gPSBhdXRoU2VydmljZS5nZXRUb2tlbigpO1xuICAgICAgICBpZiAoYXV0aHRva2VuKSBhdXRoU2VydmljZS5sb2dvZmYoKTtcbiAgICAgICAgcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgIH1cbn1cbiJdfQ==