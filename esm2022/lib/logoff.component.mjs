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
    /** @nocollapse */ static { this.ɵfac = function TbLogoffComponent_Factory(t) { return new (t || TbLogoffComponent)(i0.ɵɵdirectiveInject(i1.TbAuthService), i0.ɵɵdirectiveInject(i2.Router)); }; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9sb2dvZmYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTMUMsTUFBTSxPQUFPLGlCQUFpQjtJQUMxQixZQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU07UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRS9DLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNmLGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDMUM7SUFDTCxDQUFDO3FHQWJRLGlCQUFpQjttR0FBakIsaUJBQWlCOztpRkFBakIsaUJBQWlCO2NBSjdCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLEVBQUU7YUFDZjs7a0ZBQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RiLWxvZ29mZicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkxvZ29mZkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuTG9nT2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgTG9nT2ZmKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbnRlcmluZyBMb2dPZmYuLicpO1xyXG4gICAgICAgIGNvbnN0IGxvZ29mZiA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9nb2ZmKCk7XHJcblxyXG4gICAgICAgIGlmIChsb2dvZmYuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHVzZXJnYXRld2F5IHVybCBleGlzdHMsIHRoZW4gcmVkaXJlY3QgdG8gaXRcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5uYXZpZ2F0ZVVzZXJHYXRld2F5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==