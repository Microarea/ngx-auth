/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StorageVars } from './models/storage-vars';
export class TbAuthInterceptor {
    constructor() { }
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
        else { // Negli altri casi, essendo autenticato, utilizzo il JWT se c'è
            // Negli altri casi, essendo autenticato, utilizzo il JWT se c'è
            /** @type {?} */
            const jwt = localStorage.getItem(StorageVars.JWT);
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
TbAuthInterceptor.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR3BELE1BQU0sT0FBTyxpQkFBaUI7SUFDMUIsZ0JBQWUsQ0FBQzs7Ozs7O0lBRWhCLFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCOztZQUM5QyxLQUFLO1FBRVQ7O1dBRUc7UUFDSCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLEVBQUU7WUFDdEQseUVBQXlFO1lBQ3pFLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3hGO2FBQU0sRUFBSSxnRUFBZ0U7OztrQkFDM0QsR0FBRyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUNqRCxJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLEVBQUU7Z0JBQ2pDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDOztnQkFFckYsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDbEY7UUFDRCxJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNwQixVQUFVLEVBQUU7b0JBQ1IsYUFBYSxFQUFFLEtBQUs7aUJBQ3ZCO2FBQ0osQ0FBQyxDQUFDO1NBQ047UUFFRDs7V0FFRztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7WUFoQ0osVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgICAgIGxldCB0b2tlbjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWdnaXVuZ28gYSBvZ25pIGh0dHByZXF1ZXN0IGwnaGVhZGVyICdBdXRob3JpemF0aW9uJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LnVybC5pbmNsdWRlcygnL3N1YnNjcmlwdGlvbnNrZXlzZm9yYWNjb3VudCcpKSB7XHJcbiAgICAgICAgICAgIC8vIEluIGNhc28gZGkgYXBpIFwicHViYmxpY2hlXCIgY29tZSBxdWVzdGEsIHVzbyB1biB0b2tlbiBcImRpIGFwcGxpY2F6aW9uZVwiXHJcbiAgICAgICAgICAgIHRva2VuID0gSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnYXBwJywgYXBwSWQ6ICdMT0dJTkFQUCcsIHNlY3VyaXR5VmFsdWU6ICcxbDRyMTRtJyB9KTtcclxuICAgICAgICB9IGVsc2UgeyAgIC8vIE5lZ2xpIGFsdHJpIGNhc2ksIGVzc2VuZG8gYXV0ZW50aWNhdG8sIHV0aWxpenpvIGlsIEpXVCBzZSBjJ8OoXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChqd3QgPT09IHVuZGVmaW5lZCB8fCBqd3QgPT09ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnYXBwJywgYXBwSWQ6ICdMT0dJTkFQUCcsIHNlY3VyaXR5VmFsdWU6ICcxbDRyMTRtJyB9KTtcclxuICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnand0JywgYXBwSWQ6ICcnLCBzZWN1cml0eVZhbHVlOiBqd3QgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgICAgICAgICAgICBzZXRIZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIEVsYWJvcmEgbGEgcmVzcG9uc2UgZGkgb2duaSBjaGlhbWF0YSBodHRwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=