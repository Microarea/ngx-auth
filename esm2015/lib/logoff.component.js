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
                this.authService.navigateUserGateway();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ29mZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU0vQyxNQUFNLE9BQU8saUJBQWlCO0lBQzFCLFlBQW1CLFdBQTBCLEVBQVMsTUFBYztRQUFqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFSyxNQUFNOztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFL0MsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNmLGlEQUFpRDtnQkFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUV2QywrQkFBK0I7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkM7UUFDTCxDQUFDO0tBQUE7O2tGQWpCUSxpQkFBaUI7c0RBQWpCLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBSjdCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLEVBQUU7YUFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0Yi1sb2dvZmYnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJMb2dvZmZDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLkxvZ09mZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIExvZ09mZigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZW50ZXJpbmcgTG9nT2ZmLi4nKTtcclxuICAgICAgICBjb25zdCBsb2dvZmYgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ29mZigpO1xyXG5cclxuICAgICAgICBpZiAobG9nb2ZmLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyBpZiB1c2VyZ2F0ZXdheSB1cmwgZXhpc3RzLCB0aGVuIHJlZGlyZWN0IHRvIGl0XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubmF2aWdhdGVVc2VyR2F0ZXdheSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCBnbyB0byBsb2NhbCBsb2dpblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRW1wdHkgZ2V0VXNlckdhdGV3YXlVcmwsIGxvY2FsIHJlZGlyZWN0aW9uLmApO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19