/**
 * @fileoverview added by tsickle
 * Generated from: lib/auth.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { TbAuthService } from './auth.service';
export class TbAuthInterceptor {
    /**
     * @param {?} env
     * @param {?} authService
     */
    constructor(env, authService) {
        this.authService = authService;
        this.env = env;
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
            token = JSON.stringify({ type: 'jwt', appId: this.env.auth.appId, securityValue: jwt });
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
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] },
    { type: TbAuthService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TbAuthInterceptor.prototype.env;
    /**
     * @type {?}
     * @private
     */
    TbAuthInterceptor.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHL0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFLNUIsWUFBMkIsR0FBc0IsRUFBVSxXQUEwQjtRQUExQixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUNuRixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBeUIsRUFBRSxJQUFpQjs7WUFDaEQsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxDQUFDOzs7Ozs7OztjQVFsRixHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7UUFDdkMsSUFBSSxHQUFHO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDakcsS0FBSztRQUVMLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFVBQVUsRUFBRTtnQkFDVixhQUFhLEVBQUUsS0FBSzthQUNyQjtTQUNGLENBQUMsQ0FBQztRQUVIOztXQUVHO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7OztZQWpDRixVQUFVOzs7OzRDQU1JLE1BQU0sU0FBQyxLQUFLO1lBUmxCLGFBQWE7Ozs7Ozs7SUFLcEIsZ0NBQStCOzs7OztJQUdvQix3Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQsIEh0dHBJbnRlcmNlcHRvciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVGJBdXRoRW52aXJvbm1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRoLWVudmlyb25tZW50JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRiQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgcHJpdmF0ZSBlbnY6IFRiQXV0aEVudmlyb25tZW50O1xyXG5cclxuICAgXHJcbiAgY29uc3RydWN0b3IoQEluamVjdCgnZW52JykgZW52OiBUYkF1dGhFbnZpcm9ubWVudCwgcHJpdmF0ZSBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSkgeyBcclxuICAgIHRoaXMuZW52ID0gZW52O1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgbGV0IHRva2VuID0gSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnYXBwJywgYXBwSWQ6ICdMT0dJTkFQUCcsIHNlY3VyaXR5VmFsdWU6ICcxbDRyMTRtJyB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogQWdnaXVuZ28gYSBvZ25pIGh0dHByZXF1ZXN0IGwnaGVhZGVyICdBdXRob3JpemF0aW9uJ1xyXG4gICAgICogSW4gY2FzbyBkaSBhcGkgXCJwdWJibGljaGVcIiBjb21lIC9zdWJzY3JpcHRpb25za2V5c2ZvcmFjY291bnQsIHVzbyB1biB0b2tlbiBcImRpIGFwcGxpY2F6aW9uZVwiXHJcbiAgICAgKmRhbCAyNDAyMjAyMCBhbmNoZSBsJ2FwaSBwZXIgcmVwZXJpcmUgbGUgc3Vic2NyaXB0aW9uIMOoIHNvZ2dldHRhIGEgand0XHJcbiAgICAgKi9cclxuICAgIC8vIGlmICghcmVxdWVzdC51cmwuaW5jbHVkZXMoJy9zdWJzY3JpcHRpb25za2V5c2ZvcmFjY291bnQnKSkge1xyXG4gICAgY29uc3Qgand0ID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpO1xyXG4gICAgaWYgKGp3dCkgdG9rZW4gPSBKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdqd3QnLCBhcHBJZDogdGhpcy5lbnYuYXV0aC5hcHBJZCwgc2VjdXJpdHlWYWx1ZTogand0IH0pO1xyXG4gICAgLy8gIH1cclxuXHJcbiAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgIHNldEhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogRWxhYm9yYSBsYSByZXNwb25zZSBkaSBvZ25pIGNoaWFtYXRhIGh0dHBcclxuICAgICAqL1xyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoKTtcclxuICB9XHJcbn1cclxuIl19