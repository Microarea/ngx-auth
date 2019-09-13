/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
var TbLogoffComponent = /** @class */ (function () {
    function TbLogoffComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        /** @type {?} */
        var authtoken = authService.getToken();
        if (authtoken)
            authService.logoff();
        router.navigate(['/login']);
    }
    TbLogoffComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tb-logoff',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    TbLogoffComponent.ctorParameters = function () { return [
        { type: TbAuthService },
        { type: Router }
    ]; };
    return TbLogoffComponent;
}());
export { TbLogoffComponent };
if (false) {
    /** @type {?} */
    TbLogoffComponent.prototype.authService;
    /** @type {?} */
    TbLogoffComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb2ZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ29mZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcvQztJQUtJLDJCQUFtQixXQUEwQixFQUFTLE1BQWM7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFROztZQUMxRCxTQUFTLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRTtRQUN4QyxJQUFJLFNBQVM7WUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBVEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsRUFBRTtpQkFDZjs7OztnQkFOUSxhQUFhO2dCQURiLE1BQU07O0lBY2Ysd0JBQUM7Q0FBQSxBQVZELElBVUM7U0FOWSxpQkFBaUI7OztJQUNkLHdDQUFpQzs7SUFBRSxtQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuL21vZGVscy9zdG9yYWdlLXZhcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RiLWxvZ29mZicsXHJcbiAgICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIFRiTG9nb2ZmQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgY29uc3QgYXV0aHRva2VuID0gYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcclxuICAgICAgICBpZiAoYXV0aHRva2VuKSBhdXRoU2VydmljZS5sb2dvZmYoKTtcclxuICAgICAgICByb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICB9XHJcbn1cclxuIl19