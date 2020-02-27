/**
 * @fileoverview added by tsickle
 * Generated from: lib/auth.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /*
             * Aggiungo a ogni httprequest l'header 'Authorization'
             * In caso di api "pubbliche" come /subscriptionskeysforaccount, uso un token "di applicazione"
             *dal 24022020 anche l'api per reperire le subscription è soggetta a jwt
             */
        // if (!request.url.includes('/subscriptionskeysforaccount')) {
        /** @type {?} */
        var jwt = this.authService.getToken();
        if (jwt)
            token = JSON.stringify({ type: 'jwt', appId: '', securityValue: jwt });
        //  }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQztJQUVFLDJCQUFvQixXQUEwQjtRQUExQixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtJQUFJLENBQUM7Ozs7OztJQUVuRCxxQ0FBUzs7Ozs7SUFBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7O1lBQ2hELEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQzs7Ozs7Ozs7WUFRbEYsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1FBQ3ZDLElBQUksR0FBRztZQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLEtBQUs7UUFFTCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN0QixVQUFVLEVBQUU7Z0JBQ1YsYUFBYSxFQUFFLEtBQUs7YUFDckI7U0FDRixDQUFDLENBQUM7UUFFSDs7V0FFRztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDOztnQkEzQkYsVUFBVTs7OztnQkFGRixhQUFhOztJQThCdEIsd0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQTNCWSxpQkFBaUI7Ozs7OztJQUNoQix3Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UpIHsgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICBsZXQgdG9rZW4gPSBKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdhcHAnLCBhcHBJZDogJ0xPR0lOQVBQJywgc2VjdXJpdHlWYWx1ZTogJzFsNHIxNG0nIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBBZ2dpdW5nbyBhIG9nbmkgaHR0cHJlcXVlc3QgbCdoZWFkZXIgJ0F1dGhvcml6YXRpb24nXHJcbiAgICAgKiBJbiBjYXNvIGRpIGFwaSBcInB1YmJsaWNoZVwiIGNvbWUgL3N1YnNjcmlwdGlvbnNrZXlzZm9yYWNjb3VudCwgdXNvIHVuIHRva2VuIFwiZGkgYXBwbGljYXppb25lXCJcclxuICAgICAqZGFsIDI0MDIyMDIwIGFuY2hlIGwnYXBpIHBlciByZXBlcmlyZSBsZSBzdWJzY3JpcHRpb24gw6ggc29nZ2V0dGEgYSBqd3RcclxuICAgICAqL1xyXG4gICAgLy8gaWYgKCFyZXF1ZXN0LnVybC5pbmNsdWRlcygnL3N1YnNjcmlwdGlvbnNrZXlzZm9yYWNjb3VudCcpKSB7XHJcbiAgICBjb25zdCBqd3QgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XHJcbiAgICBpZiAoand0KSB0b2tlbiA9IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2p3dCcsIGFwcElkOiAnJywgc2VjdXJpdHlWYWx1ZTogand0IH0pO1xyXG4gICAgLy8gIH1cclxuXHJcbiAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgIHNldEhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogRWxhYm9yYSBsYSByZXNwb25zZSBkaSBvZ25pIGNoaWFtYXRhIGh0dHBcclxuICAgICAqL1xyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoKTtcclxuICB9XHJcbn1cclxuIl19