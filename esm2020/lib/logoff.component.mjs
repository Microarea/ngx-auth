import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
export class TbLogoffComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.LogOff();
    }
    async LogOff() {
        console.log('entering LogOff..');
        const logoff = await this.authService.logoff();
        if (logoff.Result) {
            // if usergateway url exists, then redirect to it
            this.authService.navigateUserGateway();
        }
    }
}
/** @nocollapse */ /** @nocollapse */ TbLogoffComponent.ɵfac = function TbLogoffComponent_Factory(t) { return new (t || TbLogoffComponent)(i0.ɵɵdirectiveInject(i1.TbAuthService), i0.ɵɵdirectiveInject(i2.Router)); };
/** @nocollapse */ /** @nocollapse */ TbLogoffComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: TbLogoffComponent, selectors: [["tb-logoff"]], decls: 0, vars: 0, template: function TbLogoffComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLogoffComponent, [{
        type: Component,
        args: [{
                selector: 'tb-logoff',
                template: '',
            }]
    }], function () { return [{ type: i1.TbAuthService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9sb2dvZmYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTMUMsTUFBTSxPQUFPLGlCQUFpQjtJQUMxQixZQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU07UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRS9DLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNmLGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDMUM7SUFDTCxDQUFDOzt3SEFiUSxpQkFBaUI7c0hBQWpCLGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBSjdCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLEVBQUU7YUFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0Yi1sb2dvZmYnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJMb2dvZmZDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLkxvZ09mZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIExvZ09mZigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZW50ZXJpbmcgTG9nT2ZmLi4nKTtcclxuICAgICAgICBjb25zdCBsb2dvZmYgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ29mZigpO1xyXG5cclxuICAgICAgICBpZiAobG9nb2ZmLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyBpZiB1c2VyZ2F0ZXdheSB1cmwgZXhpc3RzLCB0aGVuIHJlZGlyZWN0IHRvIGl0XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubmF2aWdhdGVVc2VyR2F0ZXdheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=