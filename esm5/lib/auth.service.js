/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment_ from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
/** @type {?} */
var moment = moment_;
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { StorageVars } from './models/storage-vars';
var TbAuthService = /** @class */ (function () {
    function TbAuthService(env, http, router) {
        this.env = env;
        this.http = http;
        this.router = router;
        this.redirectUrl = '/';
    }
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
        // console.log('authService.login - loginRequest', loginRequest);
        return this.http
            .post(this.getLoginUrl(), loginRequest)
            .pipe(map((/**
         * @param {?} loginResponse
         * @return {?}
         */
        function (loginResponse) {
            if (!loginResponse.Result) {
                _this.clearStorage();
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                _this.errorMessage = loginResponse.Message;
                return loginResponse;
            }
            _this.storageData(loginResponse);
            return loginResponse;
        })))
            .toPromise();
    };
    /**
     * @param {?=} authtoken
     * @return {?}
     */
    TbAuthService.prototype.isValidToken = /**
     * @param {?=} authtoken
     * @return {?}
     */
    function (authtoken) {
        if (authtoken === void 0) { authtoken = null; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (!authtoken) {
                    return [2 /*return*/, of(false)];
                }
                return [2 /*return*/, this.http
                        .get(this.getIsValidTokenUrl() + authtoken)
                        .pipe(tap((/**
                     * @param {?} jObj
                     * @return {?}
                     */
                    function (jObj) {
                        console.log('isValidToken - response', jObj);
                        if (!jObj.Result) {
                            jObj.Message = jObj.Message ? jObj.Message : 'isValidToken error...';
                            // this.clearStorage();
                            _this.errorMessage = jObj.Message;
                        }
                    })))
                        .toPromise()];
            });
        });
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
    TbAuthService.prototype.getIsValidTokenUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'isvalidtoken/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getLoginUrl = /**
     * @return {?}
     */
    function () {
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
    TbAuthService.prototype.getChangePasswordUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'changepassword/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getResetPasswordUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'resetpassword/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getSubsKeysForAccountUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'subscriptionskeysforaccount/';
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
        localStorage.setItem(StorageVars.CULTURE, culture);
        localStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.clearStorage = /**
     * @return {?}
     */
    function () {
        localStorage.removeItem(StorageVars.JWT);
        localStorage.removeItem(StorageVars.EXP);
        localStorage.removeItem(StorageVars.CULTURE);
        localStorage.removeItem(StorageVars.UI_CULTURE);
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.isExpired = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var expiration = localStorage.getItem(StorageVars.EXP);
        if (!expiration)
            return false;
        /** @type {?} */
        var expiresAt = JSON.parse(expiration);
        return moment().isAfter(moment(expiresAt));
    };
    /**
     * @private
     * @param {?} loginResponse
     * @return {?}
     */
    TbAuthService.prototype.storageData = /**
     * @private
     * @param {?} loginResponse
     * @return {?}
     */
    function (loginResponse) {
        /** @type {?} */
        var respCulture = loginResponse.RegionalSettings === undefined || loginResponse.RegionalSettings.length === 0
            ? window.navigator.language
            : loginResponse.RegionalSettings;
        /** @type {?} */
        var respUiCulture = loginResponse.Language === undefined || loginResponse.Language.length === 0
            ? window.navigator.language
            : loginResponse.Language;
        this.saveCulture(respCulture, respUiCulture);
        localStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
        /** @type {?} */
        var exp = loginResponse.ExpirationDate ? moment(loginResponse.ExpirationDate) : moment().add(1, 'day');
        localStorage.setItem(StorageVars.EXP, JSON.stringify(exp.valueOf()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7Ozs7SUFDNUIsTUFBTSxHQUFHLE9BQU87QUFFdEIsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUtwRDtJQVFJLHVCQUFtQyxHQUFHLEVBQVUsSUFBZ0IsRUFBUyxNQUFjO1FBQXBELFFBQUcsR0FBSCxHQUFHLENBQUE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZoRixnQkFBVyxHQUFHLEdBQUcsQ0FBQztJQUVpRSxDQUFDOzs7OztJQUVwRiw2QkFBSzs7OztJQUFaLFVBQWEsWUFBMEI7UUFBdkMsaUJBbUJDO1FBbEJHLGlFQUFpRTtRQUNqRSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFnQixJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsWUFBWSxDQUFDO2FBQ3JELElBQUksQ0FDRCxHQUFHOzs7O1FBQUMsVUFBQyxhQUE0QjtZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixhQUFhLENBQUMsT0FBTyxHQUFHLGFBQWEs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QUMsQ0FBQyxhQUFhLENBQUMsUUFBUTtRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUU3QyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUV4RCxHQUFHLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7UUFDeEcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOztnQkF0SUosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OztnREFNZ0IsTUFBTSxTQUFDLEtBQUs7Z0JBdEJwQixVQUFVO2dCQUNWLE1BQU07Ozt3QkFGZjtDQXNKQyxBQXZJRCxJQXVJQztTQXBJWSxhQUFhOzs7SUFDdEIsaUNBQXdCOztJQUN4QixxQ0FBNEI7O0lBQzVCLG9DQUF5Qjs7Ozs7SUFFYiw0QkFBMEI7Ozs7O0lBQUUsNkJBQXdCOztJQUFFLCtCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuL21vZGVscy9zdG9yYWdlLXZhcnMnO1xuXG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGJBdXRoU2VydmljZSB7XG4gICAgcHVibGljIGxvZ2luVXJsOiBzdHJpbmc7XG4gICAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIHB1YmxpYyByZWRpcmVjdFVybCA9ICcvJztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52LCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge31cblxuICAgIHB1YmxpYyBsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0aFNlcnZpY2UubG9naW4gLSBsb2dpblJlcXVlc3QnLCBsb2dpblJlcXVlc3QpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAucG9zdDxMb2dpblJlc3BvbnNlPih0aGlzLmdldExvZ2luVXJsKCksIGxvZ2luUmVxdWVzdClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlID8gbG9naW5SZXNwb25zZS5NZXNzYWdlIDogJ0xvZ2luIGVycm9yLi4uJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaXNWYWxpZFRva2VuKGF1dGh0b2tlbiA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFhdXRodG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAuZ2V0KHRoaXMuZ2V0SXNWYWxpZFRva2VuVXJsKCkgKyBhdXRodG9rZW4pXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoKGpPYmo6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXNWYWxpZFRva2VuIC0gcmVzcG9uc2UnLCBqT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqT2JqLlJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgak9iai5NZXNzYWdlID0gak9iai5NZXNzYWdlID8gak9iai5NZXNzYWdlIDogJ2lzVmFsaWRUb2tlbiBlcnJvci4uLic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2xlYXJTdG9yYWdlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gak9iai5NZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBnZXRSZWRpcmVjdFVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRpcmVjdFVybDtcbiAgICB9XG5cbiAgICBzZXRSZWRpcmVjdFVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJpdG9ybmEgbGEgYmFzZSB1cmwgZGVsIGJhY2tlbmQsXG4gICAgICogY2FyaWNhdGEgZGEgdW4gZmlsZSBkaSBjb25maWd1cmF6aW9uZSBjYXJpY2F0byBkaW5hbWljYW1lbnRlIChhc3NldHMvZW52aXJvbm1lbnQuanNvbilcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QmFzZVVybCgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9naW5VcmwpIHJldHVybiB0aGlzLmxvZ2luVXJsO1xuXG4gICAgICAgIHRoaXMubG9naW5VcmwgPSB0aGlzLmVudi5hdXRoLnVybDtcblxuICAgICAgICByZXR1cm4gdGhpcy5sb2dpblVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXNWYWxpZFRva2VuVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnaXN2YWxpZHRva2VuLyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvZ2luVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9nb3V0VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9nb3V0Lyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENoYW5nZVBhc3N3b3JkVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnY2hhbmdlcGFzc3dvcmQvJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmVzZXRQYXNzd29yZFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3Jlc2V0cGFzc3dvcmQvJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U3Vic0tleXNGb3JBY2NvdW50VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50Lyc7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ29mZigpIHt9XG5cbiAgICBwdWJsaWMgc2F2ZUN1bHR1cmUoY3VsdHVyZSA9ICcnLCB1aUN1bHR1cmUgPSAnJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJTdG9yYWdlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5FWFApO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRXhwaXJlZCgpIHtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkVYUCk7XG4gICAgICAgIGlmICghZXhwaXJhdGlvbikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IEpTT04ucGFyc2UoZXhwaXJhdGlvbik7XG4gICAgICAgIHJldHVybiBtb21lbnQoKS5pc0FmdGVyKG1vbWVudChleHBpcmVzQXQpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgcmVzcEN1bHR1cmU6IHN0cmluZyA9XG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgOiBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3M7XG4gICAgICAgIGNvbnN0IHJlc3BVaUN1bHR1cmU6IHN0cmluZyA9XG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLkxhbmd1YWdlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5MYW5ndWFnZS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMuc2F2ZUN1bHR1cmUocmVzcEN1bHR1cmUsIHJlc3BVaUN1bHR1cmUpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCwgbG9naW5SZXNwb25zZS5Kd3RUb2tlbik7XG5cbiAgICAgICAgY29uc3QgZXhwID0gbG9naW5SZXNwb25zZS5FeHBpcmF0aW9uRGF0ZSA/IG1vbWVudChsb2dpblJlc3BvbnNlLkV4cGlyYXRpb25EYXRlKSA6IG1vbWVudCgpLmFkZCgxLCAnZGF5Jyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkVYUCwgSlNPTi5zdHJpbmdpZnkoZXhwLnZhbHVlT2YoKSkpO1xuICAgIH1cbn1cbiJdfQ==