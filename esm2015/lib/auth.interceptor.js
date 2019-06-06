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
        /**
         * Aggiungo a ogni httprequest l'header 'Authorization' con il nostro token
         * @type {?}
         */
        const token = JSON.stringify({
            token: localStorage.getItem(StorageVars.JWT)
        });
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
        return next
            .handle(request)
            .pipe();
    }
}
TbAuthInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TbAuthInterceptor.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR3BELE1BQU0sT0FBTyxpQkFBaUI7SUFDMUIsZ0JBQWUsQ0FBQzs7Ozs7O0lBRWhCLFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCOzs7OztjQUk1QyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN6QixLQUFLLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1NBQy9DLENBQUM7UUFFRixJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNwQixVQUFVLEVBQUU7b0JBQ1IsYUFBYSxFQUFFLEtBQUs7aUJBQ3ZCO2FBQ0osQ0FBQyxDQUFDO1NBQ047UUFFRDs7V0FFRztRQUNILE9BQU8sSUFBSTthQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixJQUFJLEVBZ0JILENBQUM7SUFDWCxDQUFDOzs7WUExQ0osVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFnZ2l1bmdvIGEgb2duaSBodHRwcmVxdWVzdCBsJ2hlYWRlciAnQXV0aG9yaXphdGlvbicgY29uIGlsIG5vc3RybyB0b2tlblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICAgICAgICAgICAgc2V0SGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBFbGFib3JhIGxhIHJlc3BvbnNlIGRpIG9nbmkgY2hpYW1hdGEgaHR0cFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBuZXh0XHJcbiAgICAgICAgICAgIC5oYW5kbGUocmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGVcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE5lbCBjYXNvIGRpIGNoaWFtYXRlIGEgdGItbG9hZGVyLCByaWNldm8gbGUgVGJMb2FkZXJJbmZvIGNoZSB2ZW5nb25vIG1lc3NlIGluIGNhY2hlIGxvY2FsZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgLy8gdGFwKChldjogSHR0cEV2ZW50PGFueT4pID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChldiBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCBhdXRoID0gZXYuaGVhZGVycy5nZXQoXCJUYi1sb2FkZXItaW5mb1wiKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoYXV0aCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgcmVzcEpzb24gPSBKU09OLnBhcnNlKGF1dGgpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAocmVzcEpzb24pIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaW5mb1NlcnZpY2Uuc2V0VGJMb2FkZXJJbmZvKG5ldyBUQkxvYWRlckluZm8ocmVzcEpzb24udGJMb2FkZXJOYW1lLCByZXNwSnNvbi50YkxvYWRlcklkKSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIlRiTG9hZGVySW5mbyAtPiBcIiwgcmVzcEpzb24pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAoKTtcclxuICAgIH1cclxufVxyXG4iXX0=