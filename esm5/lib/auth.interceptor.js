import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SessionStorageVars } from './session-storage';
var TbAuthInterceptor = /** @class */ (function () {
    function TbAuthInterceptor() {
    }
    TbAuthInterceptor.prototype.intercept = function (request, next) {
        /**
         * Aggiungo a ogni httprequest l'header 'Authorization' con il nostro token
         */
        var token = JSON.stringify({
            token: sessionStorage.getItem(SessionStorageVars.JWT)
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
    TbAuthInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], TbAuthInterceptor);
    return TbAuthInterceptor;
}());
export { TbAuthInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHdkQ7SUFDSTtJQUFlLENBQUM7SUFFaEIscUNBQVMsR0FBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7UUFDbEQ7O1dBRUc7UUFDSCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQztTQUN4RCxDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNwQixVQUFVLEVBQUU7b0JBQ1IsYUFBYSxFQUFFLEtBQUs7aUJBQ3ZCO2FBQ0osQ0FBQyxDQUFDO1NBQ047UUFFRDs7V0FFRztRQUNILE9BQU8sSUFBSTthQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixJQUFJLEVBZ0JILENBQUM7SUFDWCxDQUFDO0lBekNRLGlCQUFpQjtRQUQ3QixVQUFVLEVBQUU7O09BQ0EsaUJBQWlCLENBMEM3QjtJQUFELHdCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0ExQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNlc3Npb25TdG9yYWdlVmFycyB9IGZyb20gJy4vc2Vzc2lvbi1zdG9yYWdlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRiQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWdnaXVuZ28gYSBvZ25pIGh0dHByZXF1ZXN0IGwnaGVhZGVyICdBdXRob3JpemF0aW9uJyBjb24gaWwgbm9zdHJvIHRva2VuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IHRva2VuID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0b2tlbjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTZXNzaW9uU3RvcmFnZVZhcnMuSldUKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICAgICAgICAgICAgc2V0SGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBFbGFib3JhIGxhIHJlc3BvbnNlIGRpIG9nbmkgY2hpYW1hdGEgaHR0cFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBuZXh0XHJcbiAgICAgICAgICAgIC5oYW5kbGUocmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGVcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE5lbCBjYXNvIGRpIGNoaWFtYXRlIGEgdGItbG9hZGVyLCByaWNldm8gbGUgVGJMb2FkZXJJbmZvIGNoZSB2ZW5nb25vIG1lc3NlIGluIGNhY2hlIGxvY2FsZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgLy8gdGFwKChldjogSHR0cEV2ZW50PGFueT4pID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChldiBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCBhdXRoID0gZXYuaGVhZGVycy5nZXQoXCJUYi1sb2FkZXItaW5mb1wiKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoYXV0aCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgcmVzcEpzb24gPSBKU09OLnBhcnNlKGF1dGgpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAocmVzcEpzb24pIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaW5mb1NlcnZpY2Uuc2V0VGJMb2FkZXJJbmZvKG5ldyBUQkxvYWRlckluZm8ocmVzcEpzb24udGJMb2FkZXJOYW1lLCByZXNwSnNvbi50YkxvYWRlcklkKSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIlRiTG9hZGVySW5mbyAtPiBcIiwgcmVzcEpzb24pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAoKTtcclxuICAgIH1cclxufVxyXG4iXX0=