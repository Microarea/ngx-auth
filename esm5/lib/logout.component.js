import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
var TbLogoutComponent = /** @class */ (function () {
    function TbLogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        // const authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
        // if (authtoken) authService.logoff();
        // router.navigate([authService.getLoginUrl()]);
    }
    TbLogoutComponent = tslib_1.__decorate([
        Component({
            selector: 'tb-logout',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [TbAuthService, Router])
    ], TbLogoutComponent);
    return TbLogoutComponent;
}());
export { TbLogoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ291dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8vQztJQUNJLDJCQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hFLG9FQUFvRTtRQUNwRSx1Q0FBdUM7UUFDdkMsZ0RBQWdEO0lBQ3BELENBQUM7SUFMUSxpQkFBaUI7UUFKN0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDO2lEQUVrQyxhQUFhLEVBQWlCLE1BQU07T0FEM0QsaUJBQWlCLENBTTdCO0lBQUQsd0JBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Vzc2lvblN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9zZXNzaW9uLXN0b3JhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RiLWxvZ291dCcsXG4gICAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIFRiTG9nb3V0Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICAvLyBjb25zdCBhdXRodG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNlc3Npb25TdG9yYWdlVmFycy5KV1QpO1xuICAgICAgICAvLyBpZiAoYXV0aHRva2VuKSBhdXRoU2VydmljZS5sb2dvZmYoKTtcbiAgICAgICAgLy8gcm91dGVyLm5hdmlnYXRlKFthdXRoU2VydmljZS5nZXRMb2dpblVybCgpXSk7XG4gICAgfVxufVxuIl19