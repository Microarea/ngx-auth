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
            const logoff = yield this.authService.logoff();
            if (logoff.Result) {
                document.location.href = this.authService.getRedirectUrl();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ29mZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU0vQyxNQUFNLE9BQU8saUJBQWlCO0lBQzFCLFlBQW1CLFdBQTBCLEVBQVMsTUFBYztRQUFqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFSyxNQUFNOztZQUNSLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM5RDtRQUNMLENBQUM7S0FBQTs7a0ZBVlEsaUJBQWlCO3NEQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUo3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxFQUFFO2FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGItbG9nb2ZmJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRiTG9nb2ZmQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2dPZmYoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBMb2dPZmYoKSB7XHJcbiAgICAgICAgY29uc3QgbG9nb2ZmID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dvZmYoKTtcclxuICAgICAgICBpZiAobG9nb2ZmLlJlc3VsdCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=