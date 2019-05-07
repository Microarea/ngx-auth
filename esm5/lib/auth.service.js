/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { SessionStorageVars } from './session-storage';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
var TbAuthService = /** @class */ (function () {
    function TbAuthService(env, http, router) {
        this.env = env;
        this.http = http;
        this.router = router;
        this.redirectUrl = '/';
    }
    /**
     * @param {?=} autologinToken
     * @return {?}
     */
    TbAuthService.prototype.isValidToken = /**
     * @param {?=} autologinToken
     * @return {?}
     */
    function (autologinToken) {
        if (autologinToken === void 0) { autologinToken = null; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var authtoken;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
                console.log('isValidToken - authtoken', authtoken);
                if (!authtoken && !autologinToken) {
                    return [2 /*return*/, of(false)];
                }
                return [2 /*return*/, this.http
                        .post(this.getIsValidTokenUrl(), autologinToken ? autologinToken : {})
                        .pipe(tap((/**
                     * @param {?} jObj
                     * @return {?}
                     */
                    function (jObj) {
                        console.log('isValidToken - response', jObj);
                        if (!jObj.Result) {
                            jObj.Message = jObj.Message ? jObj.Message : 'Login error...';
                            // sessionStorage.removeItem(SessionStorageVars.JWT);
                            // sessionStorage.removeItem(SessionStorageVars.CULTURE);
                            // sessionStorage.removeItem(SessionStorageVars.UI_CULTURE);
                            _this.errorMessage = jObj.Message;
                        }
                    })))
                        .toPromise()];
            });
        });
    };
    /**
     * @param {?} loginRequest
     * @return {?}
     */
    TbAuthService.prototype.login = /**
     * @param {?} loginRequest
     * @return {?}
     */
    function (loginRequest) {
        var _this = this;
        return this.http.post(this.getLoginUrl(), loginRequest).pipe(map((/**
         * @param {?} loginResponse
         * @return {?}
         */
        function (loginResponse) {
            /** @type {?} */
            var respCulture = loginResponse.Culture === undefined || loginResponse.Culture.length === 0
                ? window.navigator.language
                : loginResponse.Culture;
            /** @type {?} */
            var respUiCulture = loginResponse.UICulture === undefined || loginResponse.UICulture.length === 0
                ? window.navigator.language
                : loginResponse.UICulture;
            _this.saveCulture(respCulture, respUiCulture);
            if (!loginResponse.Result) {
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                sessionStorage.removeItem(SessionStorageVars.JWT);
                _this.errorMessage = loginResponse.Message;
                return loginResponse;
            }
            sessionStorage.setItem(SessionStorageVars.JWT, loginResponse.JwtToken);
            return loginResponse;
        })));
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getIsValidTokenUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'token/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getLoginUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'tokens/';
        return this.getBaseUrl() + 'login/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getLogoutUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'logout/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getRedirectUrl = /**
     * @return {?}
     */
    function () {
        return this.redirectUrl;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    TbAuthService.prototype.setRedirectUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.redirectUrl = url;
    };
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     */
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     * @return {?}
     */
    TbAuthService.prototype.getBaseUrl = /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     * @return {?}
     */
    function () {
        if (this.loginUrl)
            return this.loginUrl;
        this.loginUrl = this.env.auth.url;
        return this.loginUrl;
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.logoff = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?=} culture
     * @param {?=} uiCulture
     * @return {?}
     */
    TbAuthService.prototype.saveCulture = /**
     * @param {?=} culture
     * @param {?=} uiCulture
     * @return {?}
     */
    function (culture, uiCulture) {
        if (culture === void 0) { culture = ''; }
        if (uiCulture === void 0) { uiCulture = ''; }
        localStorage.setItem(SessionStorageVars.CULTURE, culture);
        localStorage.setItem(SessionStorageVars.UI_CULTURE, uiCulture);
    };
    TbAuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TbAuthService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['env',] }] },
        { type: HttpClient },
        { type: Router }
    ]; };
    /** @nocollapse */ TbAuthService.ngInjectableDef = i0.defineInjectable({ factory: function TbAuthService_Factory() { return new TbAuthService(i0.inject("env"), i0.inject(i1.HttpClient), i0.inject(i2.Router)); }, token: TbAuthService, providedIn: "root" });
    return TbAuthService;
}());
export { TbAuthService };
if (false) {
    /** @type {?} */
    TbAuthService.prototype.loginUrl;
    /** @type {?} */
    TbAuthService.prototype.errorMessage;
    /** @type {?} */
    TbAuthService.prototype.redirectUrl;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.env;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.http;
    /** @type {?} */
    TbAuthService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsRUFBRSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFNdkQ7SUFRSSx1QkFBbUMsR0FBRyxFQUFVLElBQWdCLEVBQVMsTUFBYztRQUFwRCxRQUFHLEdBQUgsR0FBRyxDQUFBO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGaEYsZ0JBQVcsR0FBRyxHQUFHLENBQUM7SUFFaUUsQ0FBQzs7Ozs7SUFFckYsb0NBQVk7Ozs7SUFBbEIsVUFBbUIsY0FBcUM7UUFBckMsK0JBQUEsRUFBQSxxQkFBcUM7Ozs7O2dCQUM5QyxTQUFTLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQy9CLHNCQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBQztpQkFDcEI7Z0JBRUQsc0JBQU8sSUFBSSxDQUFDLElBQUk7eUJBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFF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OztJQUFqQjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFbEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSw4QkFBTTs7O0lBQWIsY0FBaUIsQ0FBQzs7Ozs7O0lBRVgsbUNBQVc7Ozs7O0lBQWxCLFVBQW1CLE9BQVksRUFBRSxTQUFjO1FBQTVCLHdCQUFBLEVBQUEsWUFBWTtRQUFFLDBCQUFBLEVBQUEsY0FBYztRQUMzQyxZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNuRSxDQUFDOztnQkFwR0osVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OztnREFNZ0IsTUFBTSxTQUFDLEtBQUs7Z0JBcEJwQixVQUFVO2dCQUNWLE1BQU07Ozt3QkFGZjtDQWtIQyxBQXJHRCxJQXFHQztTQWxHWSxhQUFhOzs7SUFDdEIsaUNBQXdCOztJQUN4QixxQ0FBNEI7O0lBQzVCLG9DQUF5Qjs7Ozs7SUFFYiw0QkFBMEI7Ozs7O0lBQUUsNkJBQXdCOztJQUFFLCtCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2Vzc2lvblN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9zZXNzaW9uLXN0b3JhZ2UnO1xuXG5pbXBvcnQgeyBBdXRvbG9naW5Ub2tlbiB9IGZyb20gJy4vbW9kZWxzL2F1dG9sb2dpbi10b2tlbi5tb2RlbCc7XG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGJBdXRoU2VydmljZSB7XG4gICAgcHVibGljIGxvZ2luVXJsOiBzdHJpbmc7XG4gICAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIHB1YmxpYyByZWRpcmVjdFVybCA9ICcvJztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52LCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge31cblxuICAgIGFzeW5jIGlzVmFsaWRUb2tlbihhdXRvbG9naW5Ub2tlbjogQXV0b2xvZ2luVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGF1dGh0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU2Vzc2lvblN0b3JhZ2VWYXJzLkpXVCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4gLSBhdXRodG9rZW4nLCBhdXRodG9rZW4pO1xuICAgICAgICBpZiAoIWF1dGh0b2tlbiAmJiAhYXV0b2xvZ2luVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAucG9zdCh0aGlzLmdldElzVmFsaWRUb2tlblVybCgpLCBhdXRvbG9naW5Ub2tlbiA/IGF1dG9sb2dpblRva2VuIDoge30pXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoKGpPYmo6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXNWYWxpZFRva2VuIC0gcmVzcG9uc2UnLCBqT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqT2JqLlJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgak9iai5NZXNzYWdlID0gak9iai5NZXNzYWdlID8gak9iai5NZXNzYWdlIDogJ0xvZ2luIGVycm9yLi4uJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTZXNzaW9uU3RvcmFnZVZhcnMuSldUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU2Vzc2lvblN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTZXNzaW9uU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gak9iai5NZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IE9ic2VydmFibGU8TG9naW5SZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5nZXRMb2dpblVybCgpLCBsb2dpblJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwQ3VsdHVyZTogc3RyaW5nID1cbiAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5DdWx0dXJlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5DdWx0dXJlLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuQ3VsdHVyZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwVWlDdWx0dXJlOiBzdHJpbmcgPVxuICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLlVJQ3VsdHVyZSA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuVUlDdWx0dXJlLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuVUlDdWx0dXJlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUN1bHR1cmUocmVzcEN1bHR1cmUsIHJlc3BVaUN1bHR1cmUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFsb2dpblJlc3BvbnNlLlJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgOiAnTG9naW4gZXJyb3IuLi4nO1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFNlc3Npb25TdG9yYWdlVmFycy5KV1QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTZXNzaW9uU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldElzVmFsaWRUb2tlblVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3Rva2VuLyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvZ2luVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAndG9rZW5zLyc7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2dvdXRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dvdXQvJztcbiAgICB9XG5cbiAgICBnZXRSZWRpcmVjdFVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRpcmVjdFVybDtcbiAgICB9XG5cbiAgICBzZXRSZWRpcmVjdFVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJpdG9ybmEgbGEgYmFzZSB1cmwgZGVsIGJhY2tlbmQsXG4gICAgICogY2FyaWNhdGEgZGEgdW4gZmlsZSBkaSBjb25maWd1cmF6aW9uZSBjYXJpY2F0byBkaW5hbWljYW1lbnRlIChhc3NldHMvZW52aXJvbm1lbnQuanNvbilcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QmFzZVVybCgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9naW5VcmwpIHJldHVybiB0aGlzLmxvZ2luVXJsO1xuXG4gICAgICAgIHRoaXMubG9naW5VcmwgPSB0aGlzLmVudi5hdXRoLnVybDtcblxuICAgICAgICByZXR1cm4gdGhpcy5sb2dpblVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb2ZmKCkge31cblxuICAgIHB1YmxpYyBzYXZlQ3VsdHVyZShjdWx0dXJlID0gJycsIHVpQ3VsdHVyZSA9ICcnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNlc3Npb25TdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU2Vzc2lvblN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XG4gICAgfVxufVxuIl19