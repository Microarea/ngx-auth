/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        let token;
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
            const jwt = this.authService.getToken();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDMUIsWUFBb0IsV0FBMEI7UUFBMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7SUFBRyxDQUFDOzs7Ozs7SUFFbEQsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7O1lBQzlDLEtBQUs7UUFFVDs7V0FFRztRQUNILElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsOEJBQThCLENBQUMsRUFBRTtZQUN0RCx5RUFBeUU7WUFDekUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDeEY7YUFBTTs7O2tCQUVHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUN2QyxJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLEVBQUU7Z0JBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7O2dCQUNySCxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUMvRTtRQUNELElBQUksS0FBSyxFQUFFO1lBQ1AsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCLFVBQVUsRUFBRTtvQkFDUixhQUFhLEVBQUUsS0FBSztpQkFDdkI7YUFDSixDQUFDLENBQUM7U0FDTjtRQUVEOztXQUVHO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7OztZQS9CSixVQUFVOzs7O1lBRkYsYUFBYTs7Ozs7OztJQUlOLHdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQsIEh0dHBJbnRlcmNlcHRvciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlKSB7fVxyXG5cclxuICAgIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgICAgICBsZXQgdG9rZW47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFnZ2l1bmdvIGEgb2duaSBodHRwcmVxdWVzdCBsJ2hlYWRlciAnQXV0aG9yaXphdGlvbidcclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAocmVxdWVzdC51cmwuaW5jbHVkZXMoJy9zdWJzY3JpcHRpb25za2V5c2ZvcmFjY291bnQnKSkge1xyXG4gICAgICAgICAgICAvLyBJbiBjYXNvIGRpIGFwaSBcInB1YmJsaWNoZVwiIGNvbWUgcXVlc3RhLCB1c28gdW4gdG9rZW4gXCJkaSBhcHBsaWNhemlvbmVcIlxyXG4gICAgICAgICAgICB0b2tlbiA9IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2FwcCcsIGFwcElkOiAnTE9HSU5BUFAnLCBzZWN1cml0eVZhbHVlOiAnMWw0cjE0bScgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gTmVnbGkgYWx0cmkgY2FzaSwgZXNzZW5kbyBhdXRlbnRpY2F0bywgdXRpbGl6em8gaWwgSldUIHNlIGMnw6hcclxuICAgICAgICAgICAgY29uc3Qgand0ID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoand0ID09PSB1bmRlZmluZWQgfHwgand0ID09PSAnJykgdG9rZW4gPSBKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdhcHAnLCBhcHBJZDogJ0xPR0lOQVBQJywgc2VjdXJpdHlWYWx1ZTogJzFsNHIxNG0nIH0pO1xyXG4gICAgICAgICAgICBlbHNlIHRva2VuID0gSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnand0JywgYXBwSWQ6ICcnLCBzZWN1cml0eVZhbHVlOiBqd3QgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgICAgICAgICAgICBzZXRIZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIEVsYWJvcmEgbGEgcmVzcG9uc2UgZGkgb2duaSBjaGlhbWF0YSBodHRwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=