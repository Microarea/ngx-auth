/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SessionStorageVars } from './session-storage';
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
        let token = JSON.stringify({
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
    }
}
TbAuthInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TbAuthInterceptor.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHdkQsTUFBTSxPQUFPLGlCQUFpQjtJQUMxQixnQkFBZSxDQUFDOzs7Ozs7SUFFaEIsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7Ozs7O1lBSTlDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQztTQUN4RCxDQUFDO1FBRUYsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDcEIsVUFBVSxFQUFFO29CQUNSLGFBQWEsRUFBRSxLQUFLO2lCQUN2QjthQUNKLENBQUMsQ0FBQztTQUNOO1FBRUQ7O1dBRUc7UUFDSCxPQUFPLElBQUk7YUFDTixNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ2YsSUFBSSxFQWdCSCxDQUFDO0lBQ1gsQ0FBQzs7O1lBMUNKLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9zZXNzaW9uLXN0b3JhZ2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZ2dpdW5nbyBhIG9nbmkgaHR0cHJlcXVlc3QgbCdoZWFkZXIgJ0F1dGhvcml6YXRpb24nIGNvbiBpbCBub3N0cm8gdG9rZW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgdG9rZW4gPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHRva2VuOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNlc3Npb25TdG9yYWdlVmFycy5KV1QpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgICAgICAgICAgICBzZXRIZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIEVsYWJvcmEgbGEgcmVzcG9uc2UgZGkgb2duaSBjaGlhbWF0YSBodHRwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIG5leHRcclxuICAgICAgICAgICAgLmhhbmRsZShyZXF1ZXN0KVxyXG4gICAgICAgICAgICAucGlwZVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogTmVsIGNhc28gZGkgY2hpYW1hdGUgYSB0Yi1sb2FkZXIsIHJpY2V2byBsZSBUYkxvYWRlckluZm8gY2hlIHZlbmdvbm8gbWVzc2UgaW4gY2FjaGUgbG9jYWxlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAvLyB0YXAoKGV2OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKGV2IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGF1dGggPSBldi5oZWFkZXJzLmdldChcIlRiLWxvYWRlci1pbmZvXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmIChhdXRoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldCByZXNwSnNvbiA9IEpTT04ucGFyc2UoYXV0aCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmIChyZXNwSnNvbikge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pbmZvU2VydmljZS5zZXRUYkxvYWRlckluZm8obmV3IFRCTG9hZGVySW5mbyhyZXNwSnNvbi50YkxvYWRlck5hbWUsIHJlc3BKc29uLnRiTG9hZGVySWQpKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiVGJMb2FkZXJJbmZvIC0+IFwiLCByZXNwSnNvbik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==