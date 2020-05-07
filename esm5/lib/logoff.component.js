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
                        if (logoff.Result)
                            this.router.navigateByUrl('/login');
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
                template: ''
            }]
    }], function () { return [{ type: i1.TbAuthService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ29mZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUvQztJQUtFLDJCQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2xFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUssa0NBQU0sR0FBWjs7Ozs7NEJBQ2lCLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUF4QyxNQUFNLEdBQUcsU0FBK0I7d0JBQzlDLElBQUksTUFBTSxDQUFDLE1BQU07NEJBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7O0tBQ3hEO3NGQVJVLGlCQUFpQjswREFBakIsaUJBQWlCOzRCQVQ5QjtDQW1CQyxBQWRELElBY0M7U0FWWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUo3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxFQUFFO2FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RiLWxvZ29mZicsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkxvZ29mZkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMuTG9nT2ZmKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBMb2dPZmYoKSB7XHJcbiAgICBjb25zdCBsb2dvZmYgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ29mZigpO1xyXG4gICAgaWYgKGxvZ29mZi5SZXN1bHQpIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=