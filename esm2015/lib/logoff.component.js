import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
export class TbLogoffComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.LogOff();
    }
    LogOff() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entering LogOff..');
            const logoff = yield this.authService.logoff();
            if (logoff.Result) {
                // if usergateway url exists, then redirect to it
                if (this.authService.getUserGatewayUrl() !== '') {
                    console.log(`Found getUserGatewayUrl ${this.authService.getUserGatewayUrl()}`);
                    document.location.href = this.authService.getUserGatewayUrl();
                    return;
                }
                // otherwise, go to local login
                console.log(`Empty getUserGatewayUrl, local redirection.`);
                this.router.navigateByUrl('/login');
            }
        });
    }
}
/** @nocollapse */ TbLogoffComponent.ɵfac = function TbLogoffComponent_Factory(t) { return new (t || TbLogoffComponent)(i0.ɵɵdirectiveInject(i1.TbAuthService), i0.ɵɵdirectiveInject(i2.Router)); };
/** @nocollapse */ TbLogoffComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TbLogoffComponent, selectors: [["tb-logoff"]], decls: 0, vars: 0, template: function TbLogoffComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TbLogoffComponent, [{
        type: Component,
        args: [{
                selector: 'tb-logoff',
                template: '',
            }]
    }], function () { return [{ type: i1.TbAuthService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ29mZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU0vQyxNQUFNLE9BQU8saUJBQWlCO0lBQzFCLFlBQW1CLFdBQTBCLEVBQVMsTUFBYztRQUFqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFSyxNQUFNOztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFL0MsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNmLGlEQUFpRDtnQkFDakQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEtBQUssRUFBRSxFQUFFO29CQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUMvRSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQzlELE9BQU87aUJBQ1Y7Z0JBRUQsK0JBQStCO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0wsQ0FBQztLQUFBOztrRkFyQlEsaUJBQWlCO3NEQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUo3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxFQUFFO2FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGItbG9nb2ZmJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRiTG9nb2ZmQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2dPZmYoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBMb2dPZmYoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VudGVyaW5nIExvZ09mZi4uJyk7XHJcbiAgICAgICAgY29uc3QgbG9nb2ZmID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dvZmYoKTtcclxuXHJcbiAgICAgICAgaWYgKGxvZ29mZi5SZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gaWYgdXNlcmdhdGV3YXkgdXJsIGV4aXN0cywgdGhlbiByZWRpcmVjdCB0byBpdFxyXG4gICAgICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5nZXRVc2VyR2F0ZXdheVVybCgpICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEZvdW5kIGdldFVzZXJHYXRld2F5VXJsICR7dGhpcy5hdXRoU2VydmljZS5nZXRVc2VyR2F0ZXdheVVybCgpfWApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlckdhdGV3YXlVcmwoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCBnbyB0byBsb2NhbCBsb2dpblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRW1wdHkgZ2V0VXNlckdhdGV3YXlVcmwsIGxvY2FsIHJlZGlyZWN0aW9uLmApO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19