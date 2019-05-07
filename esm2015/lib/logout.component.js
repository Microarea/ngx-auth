/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
export class TbLogoutComponent {
    /**
     * @param {?} authService
     * @param {?} router
     */
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        // const authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
        // if (authtoken) authService.logoff();
        // router.navigate([authService.getLoginUrl()]);
    }
}
TbLogoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'tb-logout',
                template: ''
            }] }
];
/** @nocollapse */
TbLogoutComponent.ctorParameters = () => [
    { type: TbAuthService },
    { type: Router }
];
if (false) {
    /** @type {?} */
    TbLogoutComponent.prototype.authService;
    /** @type {?} */
    TbLogoutComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ291dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8vQyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUMxQixZQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hFLG9FQUFvRTtRQUNwRSx1Q0FBdUM7UUFDdkMsZ0RBQWdEO0lBQ3BELENBQUM7OztZQVRKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLEVBQUU7YUFDZjs7OztZQU5RLGFBQWE7WUFEYixNQUFNOzs7O0lBU0Msd0NBQWlDOztJQUFFLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBTZXNzaW9uU3RvcmFnZVZhcnMgfSBmcm9tICcuL3Nlc3Npb24tc3RvcmFnZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGItbG9nb3V0JyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgVGJMb2dvdXRDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIC8vIGNvbnN0IGF1dGh0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU2Vzc2lvblN0b3JhZ2VWYXJzLkpXVCk7XG4gICAgICAgIC8vIGlmIChhdXRodG9rZW4pIGF1dGhTZXJ2aWNlLmxvZ29mZigpO1xuICAgICAgICAvLyByb3V0ZXIubmF2aWdhdGUoW2F1dGhTZXJ2aWNlLmdldExvZ2luVXJsKCldKTtcbiAgICB9XG59XG4iXX0=