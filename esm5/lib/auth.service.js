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
import { LogoffRequest } from './models/logoff-request';
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
                            _this.clearStorage();
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
     * @return {?}
     */
    TbAuthService.prototype.getAccountName = /**
     * @return {?}
     */
    function () {
        localStorage.getItem(StorageVars.ACCOUNT_NAME);
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
        return this.getBaseUrl() + 'logoff/';
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
    function () {
        var _this = this;
        /** @type {?} */
        var logoffRequest = new LogoffRequest();
        logoffRequest.token = localStorage.getItem(StorageVars.JWT);
        return this.http
            .post(this.getLogoutUrl(), logoffRequest)
            .pipe(map((/**
         * @param {?} logoffResponse
         * @return {?}
         */
        function (logoffResponse) {
            if (logoffResponse.Result) {
                _this.clearStorage();
            }
            return logoffResponse;
        })))
            .toPromise();
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7Ozs7SUFDNUIsTUFBTSxHQUFHLE9BQU87QUFFdEIsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUlwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHeEQ7SUFRSSx1QkFBbUMsR0FBRyxFQUFVLElBQWdCLEVBQVMsTUFBYztRQUFwRCxRQUFHLEdBQUgsR0FBRyxDQUFBO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGaEYsZ0JBQVcsR0FBRyxHQUFHLENBQUM7SUFFaUUsQ0FBQzs7Ozs7SUFFcEYsNkJBQUs7Ozs7SUFBWixVQUFhLFlBQTBCO1FBQXZDLGlCQW1CQztRQWxCRyxpRUFBaUU7UUFDakUsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBZ0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLFlBQVksQ0FBQzthQUNyRCxJQUFJLENBQ0QsR0FBRzs7OztRQUFDLFVBQUMsYUFBNEI7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxZQUFZ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Z0JBeEpKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7Z0RBTWdCLE1BQU0sU0FBQyxLQUFLO2dCQXhCcEIsVUFBVTtnQkFDVixNQUFNOzs7d0JBRmY7Q0EwS0MsQUF6SkQsSUF5SkM7U0F0SlksYUFBYTs7O0lBQ3RCLGlDQUF3Qjs7SUFDeEIscUNBQTRCOztJQUM1QixvQ0FBeUI7Ozs7O0lBRWIsNEJBQTBCOzs7OztJQUFFLDZCQUF3Qjs7SUFBRSwrQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xuXG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcblxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xuaW1wb3J0IHsgTG9nb2ZmUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ29mZi1yZXF1ZXN0JztcbmltcG9ydCB7IExvZ29mZlJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9nb2ZmLXJlc3BvbnNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUYkF1dGhTZXJ2aWNlIHtcbiAgICBwdWJsaWMgbG9naW5Vcmw6IHN0cmluZztcbiAgICBwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgcHVibGljIHJlZGlyZWN0VXJsID0gJy8nO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnYsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gICAgcHVibGljIGxvZ2luKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KTogUHJvbWlzZTxMb2dpblJlc3BvbnNlPiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRoU2VydmljZS5sb2dpbiAtIGxvZ2luUmVxdWVzdCcsIGxvZ2luUmVxdWVzdCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0TG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgOiAnTG9naW4gZXJyb3IuLi4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZURhdGEobG9naW5SZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBhc3luYyBpc1ZhbGlkVG9rZW4oYXV0aHRva2VuID0gbnVsbCkge1xuICAgICAgICBpZiAoIWF1dGh0b2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5nZXQodGhpcy5nZXRJc1ZhbGlkVG9rZW5VcmwoKSArIGF1dGh0b2tlbilcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCgoak9iajogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4gLSByZXNwb25zZScsIGpPYmopO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWpPYmouUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqT2JqLk1lc3NhZ2UgPSBqT2JqLk1lc3NhZ2UgPyBqT2JqLk1lc3NhZ2UgOiAnaXNWYWxpZFRva2VuIGVycm9yLi4uJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGpPYmouTWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgZ2V0UmVkaXJlY3RVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkaXJlY3RVcmw7XG4gICAgfVxuXG4gICAgc2V0UmVkaXJlY3RVcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFVybCA9IHVybDtcbiAgICB9XG5cbiAgICBnZXRBY2NvdW50TmFtZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSaXRvcm5hIGxhIGJhc2UgdXJsIGRlbCBiYWNrZW5kLFxuICAgICAqIGNhcmljYXRhIGRhIHVuIGZpbGUgZGkgY29uZmlndXJhemlvbmUgY2FyaWNhdG8gZGluYW1pY2FtZW50ZSAoYXNzZXRzL2Vudmlyb25tZW50Lmpzb24pXG4gICAgICovXG4gICAgcHVibGljIGdldEJhc2VVcmwoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ2luVXJsKSByZXR1cm4gdGhpcy5sb2dpblVybDtcblxuICAgICAgICB0aGlzLmxvZ2luVXJsID0gdGhpcy5lbnYuYXV0aC51cmw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW5Vcmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldElzVmFsaWRUb2tlblVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2lzdmFsaWR0b2tlbi8nO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2dpblVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ2luLyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvZ291dFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ29mZi8nO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDaGFuZ2VQYXNzd29yZFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2NoYW5nZXBhc3N3b3JkLyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlc2V0UGFzc3dvcmRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdyZXNldHBhc3N3b3JkLyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3N1YnNjcmlwdGlvbnNrZXlzZm9yYWNjb3VudC8nO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvZmYoKSB7XG4gICAgICAgIGNvbnN0IGxvZ29mZlJlcXVlc3Q6IExvZ29mZlJlcXVlc3QgPSBuZXcgTG9nb2ZmUmVxdWVzdCgpO1xuICAgICAgICBsb2dvZmZSZXF1ZXN0LnRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAucG9zdDxMb2dvZmZSZXNwb25zZT4odGhpcy5nZXRMb2dvdXRVcmwoKSwgbG9nb2ZmUmVxdWVzdClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgobG9nb2ZmUmVzcG9uc2U6IExvZ29mZlJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2dvZmZSZXNwb25zZS5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9nb2ZmUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZUN1bHR1cmUoY3VsdHVyZSA9ICcnLCB1aUN1bHR1cmUgPSAnJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJTdG9yYWdlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5FWFApO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRXhwaXJlZCgpIHtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkVYUCk7XG4gICAgICAgIGlmICghZXhwaXJhdGlvbikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IEpTT04ucGFyc2UoZXhwaXJhdGlvbik7XG4gICAgICAgIHJldHVybiBtb21lbnQoKS5pc0FmdGVyKG1vbWVudChleHBpcmVzQXQpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgcmVzcEN1bHR1cmU6IHN0cmluZyA9XG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgOiBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3M7XG4gICAgICAgIGNvbnN0IHJlc3BVaUN1bHR1cmU6IHN0cmluZyA9XG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLkxhbmd1YWdlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5MYW5ndWFnZS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMuc2F2ZUN1bHR1cmUocmVzcEN1bHR1cmUsIHJlc3BVaUN1bHR1cmUpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCwgbG9naW5SZXNwb25zZS5Kd3RUb2tlbik7XG5cbiAgICAgICAgY29uc3QgZXhwID0gbG9naW5SZXNwb25zZS5FeHBpcmF0aW9uRGF0ZSA/IG1vbWVudChsb2dpblJlc3BvbnNlLkV4cGlyYXRpb25EYXRlKSA6IG1vbWVudCgpLmFkZCgxLCAnZGF5Jyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkVYUCwgSlNPTi5zdHJpbmdpZnkoZXhwLnZhbHVlT2YoKSkpO1xuICAgIH1cbn1cbiJdfQ==