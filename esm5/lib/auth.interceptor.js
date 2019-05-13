/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StorageVars } from './models/storage-vars';
var TbAuthInterceptor = /** @class */ (function () {
    function TbAuthInterceptor() {
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
        /**
         * Aggiungo a ogni httprequest l'header 'Authorization' con il nostro token
         * @type {?}
         */
        var token = JSON.stringify({
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
    };
    TbAuthInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TbAuthInterceptor.ctorParameters = function () { return []; };
    return TbAuthInterceptor;
}());
export { TbAuthInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBEO0lBRUk7SUFBZSxDQUFDOzs7Ozs7SUFFaEIscUNBQVM7Ozs7O0lBQVQsVUFBVSxPQUF5QixFQUFFLElBQWlCOzs7OztZQUk5QyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN2QixLQUFLLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1NBQy9DLENBQUM7UUFFRixJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNwQixVQUFVLEVBQUU7b0JBQ1IsYUFBYSxFQUFFLEtBQUs7aUJBQ3ZCO2FBQ0osQ0FBQyxDQUFDO1NBQ047UUFFRDs7V0FFRztRQUNILE9BQU8sSUFBSTthQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixJQUFJLEVBZ0JILENBQUM7SUFDWCxDQUFDOztnQkExQ0osVUFBVTs7OztJQTJDWCx3QkFBQztDQUFBLEFBM0NELElBMkNDO1NBMUNZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFnZ2l1bmdvIGEgb2duaSBodHRwcmVxdWVzdCBsJ2hlYWRlciAnQXV0aG9yaXphdGlvbicgY29uIGlsIG5vc3RybyB0b2tlblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCB0b2tlbiA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcclxuICAgICAgICAgICAgICAgIHNldEhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogRWxhYm9yYSBsYSByZXNwb25zZSBkaSBvZ25pIGNoaWFtYXRhIGh0dHBcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXR1cm4gbmV4dFxyXG4gICAgICAgICAgICAuaGFuZGxlKHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5waXBlXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBOZWwgY2FzbyBkaSBjaGlhbWF0ZSBhIHRiLWxvYWRlciwgcmljZXZvIGxlIFRiTG9hZGVySW5mbyBjaGUgdmVuZ29ubyBtZXNzZSBpbiBjYWNoZSBsb2NhbGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIC8vIHRhcCgoZXY6IEh0dHBFdmVudDxhbnk+KSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZXYgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgYXV0aCA9IGV2LmhlYWRlcnMuZ2V0KFwiVGItbG9hZGVyLWluZm9cIik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGF1dGgpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHJlc3BKc29uID0gSlNPTi5wYXJzZShhdXRoKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHJlc3BKc29uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmluZm9TZXJ2aWNlLnNldFRiTG9hZGVySW5mbyhuZXcgVEJMb2FkZXJJbmZvKHJlc3BKc29uLnRiTG9hZGVyTmFtZSwgcmVzcEpzb24udGJMb2FkZXJJZCkpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXCJUYkxvYWRlckluZm8gLT4gXCIsIHJlc3BKc29uKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgKCk7XHJcbiAgICB9XHJcbn1cclxuIl19