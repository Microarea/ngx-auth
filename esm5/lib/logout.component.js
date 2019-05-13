/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
var TbLogoutComponent = /** @class */ (function () {
    function TbLogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        // const authtoken = localStorage.getItem(StorageVars.JWT);
        // if (authtoken) authService.logoff();
        // router.navigate([authService.getLoginUrl()]);
    }
    TbLogoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tb-logout',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    TbLogoutComponent.ctorParameters = function () { return [
        { type: TbAuthService },
        { type: Router }
    ]; };
    return TbLogoutComponent;
}());
export { TbLogoutComponent };
if (false) {
    /** @type {?} */
    TbLogoutComponent.prototype.authService;
    /** @type {?} */
    TbLogoutComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ291dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcvQztJQUtJLDJCQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hFLDJEQUEyRDtRQUMzRCx1Q0FBdUM7UUFDdkMsZ0RBQWdEO0lBQ3BELENBQUM7O2dCQVRKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLEVBQUU7aUJBQ2Y7Ozs7Z0JBTlEsYUFBYTtnQkFEYixNQUFNOztJQWNmLHdCQUFDO0NBQUEsQUFWRCxJQVVDO1NBTlksaUJBQWlCOzs7SUFDZCx3Q0FBaUM7O0lBQUUsbUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0Yi1sb2dvdXQnLFxuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBUYkxvZ291dENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy8gY29uc3QgYXV0aHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcbiAgICAgICAgLy8gaWYgKGF1dGh0b2tlbikgYXV0aFNlcnZpY2UubG9nb2ZmKCk7XG4gICAgICAgIC8vIHJvdXRlci5uYXZpZ2F0ZShbYXV0aFNlcnZpY2UuZ2V0TG9naW5VcmwoKV0pO1xuICAgIH1cbn1cbiJdfQ==