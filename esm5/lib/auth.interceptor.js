/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TbAuthService } from './auth.service';
var TbAuthInterceptor = /** @class */ (function () {
    function TbAuthInterceptor(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    TbAuthInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        /** @type {?} */
        var token = JSON.stringify({ type: 'app', appId: 'LOGINAPP', securityValue: '1l4r14m' });
        /**
         * Aggiungo a ogni httprequest l'header 'Authorization'
         * In caso di api "pubbliche" come /subscriptionskeysforaccount, uso un token "di applicazione"
         */
        if (!request.url.includes('/subscriptionskeysforaccount')) {
            /** @type {?} */
            var jwt = this.authService.getToken();
            if (jwt)
                token = JSON.stringify({ type: 'jwt', appId: '', securityValue: jwt });
        }
        request = request.clone({
            setHeaders: {
                Authorization: token
            }
        });
        /*
         * Elabora la response di ogni chiamata http
         */
        return next.handle(request).pipe();
    };
    TbAuthInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TbAuthInterceptor.ctorParameters = function () { return [
        { type: TbAuthService }
    ]; };
    return TbAuthInterceptor;
}());
export { TbAuthInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TbAuthInterceptor.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DO0lBRUksMkJBQW9CLFdBQTBCO1FBQTFCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO0lBQUcsQ0FBQzs7Ozs7O0lBRWxELHFDQUFTOzs7OztJQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjs7WUFDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBRXhGOzs7V0FHRztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFOztnQkFDakQsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLElBQUksR0FBRztnQkFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUNuRjtRQUVELE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3BCLFVBQVUsRUFBRTtnQkFDUixhQUFhLEVBQUUsS0FBSzthQUN2QjtTQUNKLENBQUMsQ0FBQztRQUVIOztXQUVHO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7O2dCQTFCSixVQUFVOzs7O2dCQUZGLGFBQWE7O0lBNkJ0Qix3QkFBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLGlCQUFpQjs7Ozs7O0lBQ2Qsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRiQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UpIHt9XHJcblxyXG4gICAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgICAgIGxldCB0b2tlbiA9IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2FwcCcsIGFwcElkOiAnTE9HSU5BUFAnLCBzZWN1cml0eVZhbHVlOiAnMWw0cjE0bScgfSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFnZ2l1bmdvIGEgb2duaSBodHRwcmVxdWVzdCBsJ2hlYWRlciAnQXV0aG9yaXphdGlvbidcclxuICAgICAgICAgKiBJbiBjYXNvIGRpIGFwaSBcInB1YmJsaWNoZVwiIGNvbWUgL3N1YnNjcmlwdGlvbnNrZXlzZm9yYWNjb3VudCwgdXNvIHVuIHRva2VuIFwiZGkgYXBwbGljYXppb25lXCJcclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAoIXJlcXVlc3QudXJsLmluY2x1ZGVzKCcvc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50JykpIHtcclxuICAgICAgICAgICAgY29uc3Qgand0ID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoand0KSB0b2tlbiA9IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2p3dCcsIGFwcElkOiAnJywgc2VjdXJpdHlWYWx1ZTogand0IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICAgICAgICBzZXRIZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogRWxhYm9yYSBsYSByZXNwb25zZSBkaSBvZ25pIGNoaWFtYXRhIGh0dHBcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==