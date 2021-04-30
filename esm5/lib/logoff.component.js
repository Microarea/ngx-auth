import { __awaiter, __generator } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
var TbLogoffComponent = /** @class */ (function () {
    function TbLogoffComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.LogOff();
    }
    TbLogoffComponent.prototype.LogOff = function () {
        return __awaiter(this, void 0, void 0, function () {
            var logoff;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.logoff()];
                    case 1:
                        logoff = _a.sent();
                        if (logoff.Result) {
                            // if usergateway url exists, then redirect to it
                            if (this.authService.getUserGatewayUrl() !== '') {
                                document.location.href = this.authService.getUserGatewayUrl();
                                return [2 /*return*/];
                            }
                            // otherwise, go to local login
                            this.router.navigateByUrl('/login');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** @nocollapse */ TbLogoffComponent.ɵfac = function TbLogoffComponent_Factory(t) { return new (t || TbLogoffComponent)(i0.ɵɵdirectiveInject(i1.TbAuthService), i0.ɵɵdirectiveInject(i2.Router)); };
    /** @nocollapse */ TbLogoffComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TbLogoffComponent, selectors: [["tb-logoff"]], decls: 0, vars: 0, template: function TbLogoffComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return TbLogoffComponent;
}());
export { TbLogoffComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TbLogoffComponent, [{
        type: Component,
        args: [{
                selector: 'tb-logoff',
                template: '',
            }]
    }], function () { return [{ type: i1.TbAuthService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ29mZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUvQztJQUtJLDJCQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUssa0NBQU0sR0FBWjs7Ozs7NEJBQ21CLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUF4QyxNQUFNLEdBQUcsU0FBK0I7d0JBQzlDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTs0QkFDZixpREFBaUQ7NEJBQ2pELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQ0FDN0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dDQUM5RCxzQkFBTzs2QkFDVjs0QkFFRCwrQkFBK0I7NEJBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUN2Qzs7Ozs7S0FDSjtzRkFqQlEsaUJBQWlCOzBEQUFqQixpQkFBaUI7NEJBVDlCO0NBMkJDLEFBdEJELElBc0JDO1NBbEJZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBSjdCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLEVBQUU7YUFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0Yi1sb2dvZmYnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJMb2dvZmZDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLkxvZ09mZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIExvZ09mZigpIHtcclxuICAgICAgICBjb25zdCBsb2dvZmYgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ29mZigpO1xyXG4gICAgICAgIGlmIChsb2dvZmYuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHVzZXJnYXRld2F5IHVybCBleGlzdHMsIHRoZW4gcmVkaXJlY3QgdG8gaXRcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlckdhdGV3YXlVcmwoKSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJHYXRld2F5VXJsKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgZ28gdG8gbG9jYWwgbG9naW5cclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==