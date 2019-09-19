/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TbAuthService } from './auth.service';
export class TbAuthInterceptor {
    /**
     * @param {?} authService
     */
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        /** @type {?} */
        let token = JSON.stringify({ type: 'app', appId: 'LOGINAPP', securityValue: '1l4r14m' });
        /**
         * Aggiungo a ogni httprequest l'header 'Authorization'
         * In caso di api "pubbliche" come /subscriptionskeysforaccount, uso un token "di applicazione"
         */
        if (!request.url.includes('/subscriptionskeysforaccount')) {
            /** @type {?} */
            const jwt = this.authService.getToken();
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
    }
}
TbAuthInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TbAuthInterceptor.ctorParameters = () => [
    { type: TbAuthService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TbAuthInterceptor.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDMUIsWUFBb0IsV0FBMEI7UUFBMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7SUFBRyxDQUFDOzs7Ozs7SUFFbEQsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7O1lBQzlDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUV4Rjs7O1dBR0c7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsOEJBQThCLENBQUMsRUFBRTs7a0JBQ2pELEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUN2QyxJQUFJLEdBQUc7Z0JBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDbkY7UUFFRCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNwQixVQUFVLEVBQUU7Z0JBQ1IsYUFBYSxFQUFFLEtBQUs7YUFDdkI7U0FDSixDQUFDLENBQUM7UUFFSDs7V0FFRztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7WUExQkosVUFBVTs7OztZQUZGLGFBQWE7Ozs7Ozs7SUFJTix3Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSkge31cclxuXHJcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnYXBwJywgYXBwSWQ6ICdMT0dJTkFQUCcsIHNlY3VyaXR5VmFsdWU6ICcxbDRyMTRtJyB9KTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWdnaXVuZ28gYSBvZ25pIGh0dHByZXF1ZXN0IGwnaGVhZGVyICdBdXRob3JpemF0aW9uJ1xyXG4gICAgICAgICAqIEluIGNhc28gZGkgYXBpIFwicHViYmxpY2hlXCIgY29tZSAvc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50LCB1c28gdW4gdG9rZW4gXCJkaSBhcHBsaWNhemlvbmVcIlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmICghcmVxdWVzdC51cmwuaW5jbHVkZXMoJy9zdWJzY3JpcHRpb25za2V5c2ZvcmFjY291bnQnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBqd3QgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmIChqd3QpIHRva2VuID0gSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnand0JywgYXBwSWQ6ICcnLCBzZWN1cml0eVZhbHVlOiBqd3QgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgICAgICAgIHNldEhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBFbGFib3JhIGxhIHJlc3BvbnNlIGRpIG9nbmkgY2hpYW1hdGEgaHR0cFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19