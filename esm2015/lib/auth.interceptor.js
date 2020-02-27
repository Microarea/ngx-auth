/**
 * @fileoverview added by tsickle
 * Generated from: lib/auth.interceptor.ts
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
        /*
             * Aggiungo a ogni httprequest l'header 'Authorization'
             * In caso di api "pubbliche" come /subscriptionskeysforaccount, uso un token "di applicazione"
             *dal 24022020 anche l'api per reperire le subscription è soggetta a jwt
             */
        // if (!request.url.includes('/subscriptionskeysforaccount')) {
        /** @type {?} */
        const jwt = this.authService.getToken();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8saUJBQWlCOzs7O0lBQzVCLFlBQW9CLFdBQTBCO1FBQTFCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO0lBQUksQ0FBQzs7Ozs7O0lBRW5ELFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCOztZQUNoRCxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLENBQUM7Ozs7Ozs7O2NBUWxGLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtRQUN2QyxJQUFJLEdBQUc7WUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNoRixLQUFLO1FBRUwsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdEIsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxLQUFLO2FBQ3JCO1NBQ0YsQ0FBQyxDQUFDO1FBRUg7O1dBRUc7UUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7O1lBM0JGLFVBQVU7Ozs7WUFGRixhQUFhOzs7Ozs7O0lBSVIsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRiQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlKSB7IH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgbGV0IHRva2VuID0gSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnYXBwJywgYXBwSWQ6ICdMT0dJTkFQUCcsIHNlY3VyaXR5VmFsdWU6ICcxbDRyMTRtJyB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogQWdnaXVuZ28gYSBvZ25pIGh0dHByZXF1ZXN0IGwnaGVhZGVyICdBdXRob3JpemF0aW9uJ1xyXG4gICAgICogSW4gY2FzbyBkaSBhcGkgXCJwdWJibGljaGVcIiBjb21lIC9zdWJzY3JpcHRpb25za2V5c2ZvcmFjY291bnQsIHVzbyB1biB0b2tlbiBcImRpIGFwcGxpY2F6aW9uZVwiXHJcbiAgICAgKmRhbCAyNDAyMjAyMCBhbmNoZSBsJ2FwaSBwZXIgcmVwZXJpcmUgbGUgc3Vic2NyaXB0aW9uIMOoIHNvZ2dldHRhIGEgand0XHJcbiAgICAgKi9cclxuICAgIC8vIGlmICghcmVxdWVzdC51cmwuaW5jbHVkZXMoJy9zdWJzY3JpcHRpb25za2V5c2ZvcmFjY291bnQnKSkge1xyXG4gICAgY29uc3Qgand0ID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpO1xyXG4gICAgaWYgKGp3dCkgdG9rZW4gPSBKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdqd3QnLCBhcHBJZDogJycsIHNlY3VyaXR5VmFsdWU6IGp3dCB9KTtcclxuICAgIC8vICB9XHJcblxyXG4gICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICBzZXRIZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLypcclxuICAgICAqIEVsYWJvcmEgbGEgcmVzcG9uc2UgZGkgb2duaSBjaGlhbWF0YSBodHRwXHJcbiAgICAgKi9cclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==