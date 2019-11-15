/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
export class TbLogoffComponent {
    /**
     * @param {?} authService
     * @param {?} router
     */
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        /** @type {?} */
        const authtoken = authService.getToken();
        if (authtoken)
            authService.logoff();
        router.navigate([authService.getLoginPageUrl()]);
    }
}
TbLogoffComponent.decorators = [
    { type: Component, args: [{
                selector: 'tb-logoff',
                template: ''
            }] }
];
/** @nocollapse */
TbLogoffComponent.ctorParameters = () => [
    { type: TbAuthService },
    { type: Router }
];
if (false) {
    /** @type {?} */
    TbLogoffComponent.prototype.authService;
    /** @type {?} */
    TbLogoffComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ29mZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU0vQyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUMxQixZQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFROztjQUMxRCxTQUFTLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRTtRQUN4QyxJQUFJLFNBQVM7WUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBVEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsRUFBRTthQUNmOzs7O1lBTFEsYUFBYTtZQUZiLE1BQU07Ozs7SUFTQyx3Q0FBaUM7O0lBQUUsbUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RiLWxvZ29mZicsXHJcbiAgICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIFRiTG9nb2ZmQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgY29uc3QgYXV0aHRva2VuID0gYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcclxuICAgICAgICBpZiAoYXV0aHRva2VuKSBhdXRoU2VydmljZS5sb2dvZmYoKTtcclxuICAgICAgICByb3V0ZXIubmF2aWdhdGUoW2F1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICB9XHJcbn1cclxuIl19