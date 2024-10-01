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
    /** @nocollapse */ static { this.ɵfac = function TbLogoffComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TbLogoffComponent)(i0.ɵɵdirectiveInject(i1.TbAuthService), i0.ɵɵdirectiveInject(i2.Router)); }; }
    /** @nocollapse */ static { this.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: TbLogoffComponent, selectors: [["tb-logoff"]], decls: 0, vars: 0, template: function TbLogoffComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLogoffComponent, [{
        type: Component,
        args: [{
                selector: 'tb-logoff',
                template: '',
            }]
    }], () => [{ type: i1.TbAuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TbLogoffComponent, { className: "TbLogoffComponent", filePath: "lib\\logoff.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9sb2dvZmYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTMUMsTUFBTSxPQUFPLGlCQUFpQjtJQUMxQixZQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU07UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRS9DLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0MsQ0FBQztJQUNMLENBQUM7cUlBYlEsaUJBQWlCO21HQUFqQixpQkFBaUI7O2lGQUFqQixpQkFBaUI7Y0FKN0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsRUFBRTthQUNmOztrRkFDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGItbG9nb2ZmJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRiTG9nb2ZmQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5Mb2dPZmYoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBMb2dPZmYoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VudGVyaW5nIExvZ09mZi4uJyk7XHJcbiAgICAgICAgY29uc3QgbG9nb2ZmID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dvZmYoKTtcclxuXHJcbiAgICAgICAgaWYgKGxvZ29mZi5SZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gaWYgdXNlcmdhdGV3YXkgdXJsIGV4aXN0cywgdGhlbiByZWRpcmVjdCB0byBpdFxyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm5hdmlnYXRlVXNlckdhdGV3YXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19