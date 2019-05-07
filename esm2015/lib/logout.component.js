import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
let TbLogoutComponent = class TbLogoutComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        // const authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
        // if (authtoken) authService.logoff();
        // router.navigate([authService.getLoginUrl()]);
    }
};
TbLogoutComponent = tslib_1.__decorate([
    Component({
        selector: 'tb-logout',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [TbAuthService, Router])
], TbLogoutComponent);
export { TbLogoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ291dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8vQyxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUMxQixZQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hFLG9FQUFvRTtRQUNwRSx1Q0FBdUM7UUFDdkMsZ0RBQWdEO0lBQ3BELENBQUM7Q0FDSixDQUFBO0FBTlksaUJBQWlCO0lBSjdCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxFQUFFO0tBQ2YsQ0FBQzs2Q0FFa0MsYUFBYSxFQUFpQixNQUFNO0dBRDNELGlCQUFpQixDQU03QjtTQU5ZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBTZXNzaW9uU3RvcmFnZVZhcnMgfSBmcm9tICcuL3Nlc3Npb24tc3RvcmFnZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGItbG9nb3V0JyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgVGJMb2dvdXRDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIC8vIGNvbnN0IGF1dGh0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU2Vzc2lvblN0b3JhZ2VWYXJzLkpXVCk7XG4gICAgICAgIC8vIGlmIChhdXRodG9rZW4pIGF1dGhTZXJ2aWNlLmxvZ29mZigpO1xuICAgICAgICAvLyByb3V0ZXIubmF2aWdhdGUoW2F1dGhTZXJ2aWNlLmdldExvZ2luVXJsKCldKTtcbiAgICB9XG59XG4iXX0=