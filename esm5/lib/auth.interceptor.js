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
        var token;
        /**
         * Aggiungo a ogni httprequest l'header 'Authorization'
         */
        if (request.url.includes('/subscriptionskeysforaccount')) {
            // In caso di api "pubbliche" come questa, uso un token "di applicazione"
            token = JSON.stringify({ type: 'app', appId: 'LOGINAPP', securityValue: '1l4r14m' });
        }
        else {
            // Negli altri casi, essendo autenticato, utilizzo il JWT se c'è
            /** @type {?} */
            var jwt = this.authService.getToken();
            if (jwt === undefined || jwt === '')
                token = JSON.stringify({ type: 'app', appId: 'LOGINAPP', securityValue: '1l4r14m' });
            else
                token = JSON.stringify({ type: 'jwt', appId: '', securityValue: jwt });
        }
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DO0lBRUksMkJBQW9CLFdBQTBCO1FBQTFCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO0lBQUcsQ0FBQzs7Ozs7O0lBRWxELHFDQUFTOzs7OztJQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjs7WUFDOUMsS0FBSztRQUVUOztXQUVHO1FBQ0gsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFO1lBQ3RELHlFQUF5RTtZQUN6RSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUN4RjthQUFNOzs7Z0JBRUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLElBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssRUFBRTtnQkFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQzs7Z0JBQ3JILEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQy9FO1FBQ0QsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDcEIsVUFBVSxFQUFFO29CQUNSLGFBQWEsRUFBRSxLQUFLO2lCQUN2QjthQUNKLENBQUMsQ0FBQztTQUNOO1FBRUQ7O1dBRUc7UUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Z0JBL0JKLFVBQVU7Ozs7Z0JBRkYsYUFBYTs7SUFrQ3RCLHdCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EvQlksaUJBQWlCOzs7Ozs7SUFDZCx3Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSkge31cclxuXHJcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICAgICAgbGV0IHRva2VuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZ2dpdW5nbyBhIG9nbmkgaHR0cHJlcXVlc3QgbCdoZWFkZXIgJ0F1dGhvcml6YXRpb24nXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKHJlcXVlc3QudXJsLmluY2x1ZGVzKCcvc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50JykpIHtcclxuICAgICAgICAgICAgLy8gSW4gY2FzbyBkaSBhcGkgXCJwdWJibGljaGVcIiBjb21lIHF1ZXN0YSwgdXNvIHVuIHRva2VuIFwiZGkgYXBwbGljYXppb25lXCJcclxuICAgICAgICAgICAgdG9rZW4gPSBKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdhcHAnLCBhcHBJZDogJ0xPR0lOQVBQJywgc2VjdXJpdHlWYWx1ZTogJzFsNHIxNG0nIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE5lZ2xpIGFsdHJpIGNhc2ksIGVzc2VuZG8gYXV0ZW50aWNhdG8sIHV0aWxpenpvIGlsIEpXVCBzZSBjJ8OoXHJcbiAgICAgICAgICAgIGNvbnN0IGp3dCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKGp3dCA9PT0gdW5kZWZpbmVkIHx8IGp3dCA9PT0gJycpIHRva2VuID0gSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnYXBwJywgYXBwSWQ6ICdMT0dJTkFQUCcsIHNlY3VyaXR5VmFsdWU6ICcxbDRyMTRtJyB9KTtcclxuICAgICAgICAgICAgZWxzZSB0b2tlbiA9IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2p3dCcsIGFwcElkOiAnJywgc2VjdXJpdHlWYWx1ZTogand0IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICAgICAgICAgICAgc2V0SGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBFbGFib3JhIGxhIHJlc3BvbnNlIGRpIG9nbmkgY2hpYW1hdGEgaHR0cFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19