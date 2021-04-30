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
                    case 0:
                        console.log('entering LogOff..');
                        return [4 /*yield*/, this.authService.logoff()];
                    case 1:
                        logoff = _a.sent();
                        if (logoff.Result) {
                            // if usergateway url exists, then redirect to it
                            this.authService.navigateUserGateway();
                            // otherwise, go to local login
                            console.log("Empty getUserGatewayUrl, local redirection.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ29mZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUvQztJQUtJLDJCQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUssa0NBQU0sR0FBWjs7Ozs7O3dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt3QkFDbEIscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBQTs7d0JBQXhDLE1BQU0sR0FBRyxTQUErQjt3QkFFOUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFOzRCQUNmLGlEQUFpRDs0QkFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOzRCQUV2QywrQkFBK0I7NEJBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQzs0QkFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ3ZDOzs7OztLQUNKO3NGQWpCUSxpQkFBaUI7MERBQWpCLGlCQUFpQjs0QkFUOUI7Q0EyQkMsQUF0QkQsSUFzQkM7U0FsQlksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FKN0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsRUFBRTthQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RiLWxvZ29mZicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkxvZ29mZkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuTG9nT2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgTG9nT2ZmKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbnRlcmluZyBMb2dPZmYuLicpO1xyXG4gICAgICAgIGNvbnN0IGxvZ29mZiA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9nb2ZmKCk7XHJcblxyXG4gICAgICAgIGlmIChsb2dvZmYuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHVzZXJnYXRld2F5IHVybCBleGlzdHMsIHRoZW4gcmVkaXJlY3QgdG8gaXRcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5uYXZpZ2F0ZVVzZXJHYXRld2F5KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UsIGdvIHRvIGxvY2FsIGxvZ2luXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFbXB0eSBnZXRVc2VyR2F0ZXdheVVybCwgbG9jYWwgcmVkaXJlY3Rpb24uYCk7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=