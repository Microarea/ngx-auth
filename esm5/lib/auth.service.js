/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { of, Subject } from 'rxjs';
import { tap, map, catchError, timeout } from 'rxjs/operators';
import { StorageVars } from './models/storage-vars';
import { LogoffRequest } from './models/logoff-request';
import { IsValidTokenRequest } from './models/is-valid-token-request';
import { OperationResult } from './models/operation-result';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/** @type {?} */
var authServiceInstance;
/** @type {?} */
export var authService = (/**
 * @return {?}
 */
function () { return authServiceInstance; });
var TbAuthService = /** @class */ (function () {
    function TbAuthService(env, http, injector) {
        var _this = this;
        this.http = http;
        this.injector = injector;
        this.loggedOut$ = new Subject();
        this.errorMessage = '';
        /**
         * Ritorna la base url del backend,
         * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
         */
        this.getBaseUrl = (/**
         * @return {?}
         */
        function () { return _this.env.auth.url; });
        this.getLoginPageUrl = (/**
         * @return {?}
         */
        function () { return _this.getBaseUrl() + _this.env.auth.loginPageUrl; });
        this.getAuthServiceUrl = (/**
         * @return {?}
         */
        function () { return _this.env.auth.url; });
        this.getRedirectUrl = (/**
         * @return {?}
         */
        function () { return _this.env.auth.redirectUrl; });
        this.hasSubscriptionSelection = (/**
         * @return {?}
         */
        function () { return _this.env.auth.subscriptionSelection; });
        this.getAppId = (/**
         * @return {?}
         */
        function () { return _this.env.auth.appId; });
        this.isSessionStorage = (/**
         * @return {?}
         */
        function () { return _this.env.auth.sessionStorage; });
        this.getCustomLogo = (/**
         * @return {?}
         */
        function () { return _this.env.auth.logo; });
        authServiceInstance = this;
        this.env = _.defaultsDeep(env, TbAuthService.DEFAULT_ENV, env);
        console.log('TbAuthEnvironment', this.env);
    }
    Object.defineProperty(TbAuthService.prototype, "router", {
        get: /**
         * @return {?}
         */
        function () {
            return this.injector.get(Router);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TbAuthService.prototype.checkConnection = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http
                            .get(this.getBaseUrl())
                            .pipe(timeout(5000), map((/**
                         * @param {?} __
                         * @return {?}
                         */
                        function (__) { return true; })))
                            .toPromise()
                            .catch((/**
                         * @param {?} __
                         * @return {?}
                         */
                        function (__) { return false; }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /*
      {
        type: JWT,
        appid: M4,
        securityValue: jwtEncoded
      }
    */
    /*
          {
            type: JWT,
            appid: M4,
            securityValue: jwtEncoded
          }
        */
    /**
     * @return {?}
     */
    TbAuthService.prototype.getAuthorizationHeader = /*
          {
            type: JWT,
            appid: M4,
            securityValue: jwtEncoded
          }
        */
    /**
     * @return {?}
     */
    function () {
        return JSON.stringify({
            Type: 'JWT',
            AppId: 'M4',
            SecurityValue: this.getToken()
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
        if (authtoken === void 0) { authtoken = ''; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var opres;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (!authtoken) {
                    opres = new OperationResult();
                    opres.Message = 'No authtoken';
                    return [2 /*return*/, opres];
                }
                return [2 /*return*/, this.http
                        .post(this.getIsValidTokenUrl(), new IsValidTokenRequest(authtoken))
                        .pipe(tap((/**
                     * @param {?} jObj
                     * @return {?}
                     */
                    function (jObj) {
                        // console.log('isValidToken - response', jObj);
                        if (!jObj.Result) {
                            jObj.Message = jObj.Message ? jObj.Message : 'isValidToken error...';
                            _this.clearStorage();
                            _this.errorMessage = jObj.Message;
                        }
                    })), catchError((/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        console.error("Error Code: " + error.status + "\nMessage: " + error.message);
                        /** @type {?} */
                        var res = new OperationResult();
                        res.Message = 'Authentication services down...';
                        res.Code = 666;
                        return of(res);
                    })))
                        .toPromise()];
            });
        });
    };
    /**
     * @param {?} user
     * @return {?}
     */
    TbAuthService.prototype.getCompaniesForUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        return this.http.get(this.getSubsKeysForAccountUrl() + user).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (!res || !res.Result)
                return [];
            return res.Content && res.Content.subscriptions ? res.Content.subscriptions : [];
        })));
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
        var logoffRequest = new LogoffRequest(this.getToken());
        return this.http
            .post(this.getLogoutUrl(), logoffRequest)
            .pipe(map((/**
         * @param {?} logoffResponse
         * @return {?}
         */
        function (logoffResponse) {
            if (logoffResponse.Result) {
                _this.clearStorage();
                _this.loggedOut$.next();
            }
            return logoffResponse;
        })))
            .toPromise();
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.clearStorage = /**
     * @return {?}
     */
    function () {
        sessionStorage.removeItem(StorageVars.JWT);
        sessionStorage.removeItem(StorageVars.CULTURE);
        sessionStorage.removeItem(StorageVars.UI_CULTURE);
        sessionStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        localStorage.removeItem(StorageVars.JWT);
        localStorage.removeItem(StorageVars.CULTURE);
        localStorage.removeItem(StorageVars.UI_CULTURE);
        localStorage.removeItem(StorageVars.ACCOUNT_ROLES);
    };
    /**
     * @param {?} subscriptionKey
     * @param {?} subscriptionDescription
     * @return {?}
     */
    TbAuthService.prototype.storageSubscriptionData = /**
     * @param {?} subscriptionKey
     * @param {?} subscriptionDescription
     * @return {?}
     */
    function (subscriptionKey, subscriptionDescription) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
            sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
        }
        else {
            localStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
            localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
        }
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
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
            sessionStorage.setItem(StorageVars.CULTURE, respCulture);
            sessionStorage.setItem(StorageVars.UI_CULTURE, respUiCulture);
            sessionStorage.setItem(StorageVars.ACCOUNT_ROLES, JSON.stringify(loginResponse.Roles));
        }
        else {
            localStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
            localStorage.setItem(StorageVars.CULTURE, respCulture);
            localStorage.setItem(StorageVars.UI_CULTURE, respUiCulture);
            localStorage.setItem(StorageVars.ACCOUNT_ROLES, JSON.stringify(loginResponse.Roles));
        }
    };
    /**
     * @param {?} culture
     * @param {?} uiCulture
     * @return {?}
     */
    TbAuthService.prototype.saveCulture = /**
     * @param {?} culture
     * @param {?} uiCulture
     * @return {?}
     */
    function (culture, uiCulture) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.CULTURE, culture);
            sessionStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
        }
        else {
            localStorage.setItem(StorageVars.CULTURE, culture);
            localStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
        }
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.JWT);
        else
            return localStorage.getItem(StorageVars.JWT);
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getAccountName = /**
     * @return {?}
     */
    function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.ACCOUNT_NAME);
        else
            return localStorage.getItem(StorageVars.ACCOUNT_NAME);
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getSubscription = /**
     * @return {?}
     */
    function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION);
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getSubscriptionDescription = /**
     * @return {?}
     */
    function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getCulture = /**
     * @return {?}
     */
    function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.CULTURE);
        else
            return localStorage.getItem(StorageVars.CULTURE);
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getUICulture = /**
     * @return {?}
     */
    function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.UI_CULTURE);
        else
            return localStorage.getItem(StorageVars.UI_CULTURE);
    };
    TbAuthService.DEFAULT_ENV = {
        auth: {
            url: 'https://gwam.mago.cloud/gwam_login/api/',
            subscriptionSelection: false,
            appId: 'M4',
            redirectUrl: '/',
            loginPageUrl: 'login',
            sessionStorage: false,
            logo: 
            // tslint:disable-next-line: max-line-length
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABGCAYAAABL0p+yAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc4MURERERGRDlFQTExRTlBNUE4RjU5NDIzMzM0MTlGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc4MURERERFRDlFQTExRTlBNUE4RjU5NDIzMzM0MTlGIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMzBGMEZEMTZFRDcxMUU4ODNCMkZCMjREQ0JEN0Q0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMzBGMEZEMjZF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'
        }
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
        { type: Injector }
    ]; };
    /** @nocollapse */ TbAuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TbAuthService_Factory() { return new TbAuthService(i0.ɵɵinject("env"), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i0.INJECTOR)); }, token: TbAuthService, providedIn: "root" });
    return TbAuthService;
}());
export { TbAuthService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TbAuthService.DEFAULT_ENV;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.env;
    /** @type {?} */
    TbAuthService.prototype.loggedOut$;
    /** @type {?} */
    TbAuthService.prototype.errorMessage;
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     * @type {?}
     */
    TbAuthService.prototype.getBaseUrl;
    /** @type {?} */
    TbAuthService.prototype.getLoginPageUrl;
    /** @type {?} */
    TbAuthService.prototype.getAuthServiceUrl;
    /** @type {?} */
    TbAuthService.prototype.getRedirectUrl;
    /** @type {?} */
    TbAuthService.prototype.hasSubscriptionSelection;
    /** @type {?} */
    TbAuthService.prototype.getAppId;
    /** @type {?} */
    TbAuthService.prototype.isSessionStorage;
    /** @type {?} */
    TbAuthService.prototype.getCustomLogo;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7SUFHeEQsbUJBQWtDOztBQUN0QyxNQUFNLEtBQU8sV0FBVzs7O0FBQUcsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFBO0FBRXBEO0lBMEJJLHVCQUEyQixHQUFzQixFQUFVLElBQWdCLEVBQVUsUUFBa0I7UUFBdkcsaUJBSUM7UUFKMEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFQdkcsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBRyxFQUFFLENBQUM7Ozs7O1FBMkJsQixlQUFVOzs7UUFBRyxjQUFjLE9BQUEsS0FB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QUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsb0NBQVk7OztJQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7WUFDbkYsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBdFBjLHlCQUFXLEdBQXNCO1FBQzVDLElBQUksRUFBRTtZQUNGLEdBQUcsRUFBRSx5Q0FBeUM7WUFDOUMscUJBQXFCLEVBQUUsS0FBSztZQUM1QixLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxHQUFHO1lBQ2hCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLElBQUk7WUFDQSw0Q0FBNEM7WUFDNUMsNHlQQUE0eVA7U0FDbnpQO0tBQ0osQ0FBQzs7Z0JBaEJMLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7Z0RBd0JnQixNQUFNLFNBQUMsS0FBSztnQkEvQ3BCLFVBQVU7Z0JBRFUsUUFBUTs7O3dCQUFyQztDQXdSQyxBQWxRRCxJQWtRQztTQS9QWSxhQUFhOzs7Ozs7SUFDdEIsMEJBWUU7Ozs7O0lBQ0YsNEJBQStCOztJQUUvQixtQ0FBMkI7O0lBQzNCLHFDQUFrQjs7Ozs7O0lBMkJsQixtQ0FBNkM7O0lBRTdDLHdDQUErRTs7SUEyTS9FLDBDQUFvRDs7SUFDcEQsdUNBQXlEOztJQUN6RCxpREFBOEU7O0lBQzlFLGlDQUE2Qzs7SUFDN0MseUNBQStEOztJQUMvRCxzQ0FBaUQ7Ozs7O0lBdk9FLDZCQUF3Qjs7Ozs7SUFBRSxpQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIG1hcCwgY2F0Y2hFcnJvciwgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcclxuXHJcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBMb2dvZmZSZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9nb2ZmLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBMb2dvZmZSZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2xvZ29mZi1yZXNwb25zZSc7XHJcbmltcG9ydCB7IElzVmFsaWRUb2tlblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9pcy12YWxpZC10b2tlbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi9tb2RlbHMvb3BlcmF0aW9uLXJlc3VsdCc7XHJcbmltcG9ydCB7IFRiQXV0aEVudmlyb25tZW50IH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1lbnZpcm9ubWVudCc7XHJcblxyXG5sZXQgYXV0aFNlcnZpY2VJbnN0YW5jZTogVGJBdXRoU2VydmljZTtcclxuZXhwb3J0IGNvbnN0IGF1dGhTZXJ2aWNlID0gKCkgPT4gYXV0aFNlcnZpY2VJbnN0YW5jZTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBERUZBVUxUX0VOVjogVGJBdXRoRW52aXJvbm1lbnQgPSB7XHJcbiAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2d3YW0ubWFnby5jbG91ZC9nd2FtX2xvZ2luL2FwaS8nLFxyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25TZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBhcHBJZDogJ000JyxcclxuICAgICAgICAgICAgcmVkaXJlY3RVcmw6ICcvJyxcclxuICAgICAgICAgICAgbG9naW5QYWdlVXJsOiAnbG9naW4nLFxyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvZ286XHJcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAgICAgJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBS0FBQUFCR0NBWUFBQUJMMHAreUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBK2hwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRReUlEYzVMakUyTURreU5Dd2dNakF4Tnk4d055OHhNeTB3TVRvd05qb3pPU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGJHNXpPbVJqUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpXeGxiV1Z1ZEhNdk1TNHhMeUlnZUcxd1RVMDZUM0pwWjJsdVlXeEViMk4xYldWdWRFbEVQU0oxZFdsa09qVkVNakE0T1RJME9UTkNSa1JDTVRFNU1UUkJPRFU1TUVRek1UVXdPRU00SWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pjNE1VUkVSRVJHUkRsRlFURXhSVGxCTlVFNFJqVTVOREl6TXpNME1UbEdJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPamM0TVVSRVJFUkZSRGxGUVRFeFJUbEJOVUU0UmpVNU5ESXpNek0wTVRsR0lpQjRiWEE2UTNKbFlYUnZjbFJ2YjJ3OUlrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QW9WMmx1Wkc5M2N5a2lQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG96TXpCR01FWkVNVFpGUkRjeE1VVTRPRE5DTWtaQ01qUkVRMEpFTjBRMFF5SWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEb3pNekJHTUVaRU1qWkZSRGN4TVVVNE9ETkNNa1pDTWpSRVEwSkVOMFEwUXlJdlBpQThaR002ZEdsMGJHVStJRHh5WkdZNlFXeDBQaUE4Y21SbU9teHBJSGh0YkRwc1lXNW5QU0o0TFdSbFptRjFiSFFpUGt4dloyOGdUMHM4TDNKa1pqcHNhVDRnUEM5eVpHWTZRV3gwUGlBOEwyUmpPblJwZEd4bFBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BrdWpGQVlBQUJMOVNVUkJWSGphN0YxN2RCeG5kYi96Mk5YdTZtbEpsaVhIbG0zSlZ1UkFRbWhEbExRcGhCVHN4SUdRUUlnYlRFaDRuSjcwY05xZTBKU2VIazVLeUhHaGhVUGFFcHJUL2xGcUlCQXc1QW5CQmdjVGtpYUJrSkNHWUR0K1NKYjFzcTJIdFhyc2FyV3Y2YjJ6STJmMm0yOTJaMlpuWmtlbnV1ZGNyL1h0N2pjenU3KzU5Lzd1dmQrM1F0OHowd1BqaS9sTm9nQ2dBQUErR01SczNLblFmSW1jQW5kdWpINzUzdDdZMzUwOWMrYXVrZUhocjRxaUtBaGwzaWM0ZU01MFBrV0JjRGg4clBlaWkvb2tXWTViZU12YlVYL0xHWjlBM1lJNkEvN0xGMUQvZ1IzODRjREJyMzN4bFcvK2RWMG82bVRPaTFGVHFNZTlQbmx4Q1h5bFJIRDVvRFNmaU5xZnlGMUNmMmZTNmEySUJrRUE1K2RoZHVPVW16Q2J6WGJsY3JtV0NpOXBOZXJsVlFBZlhmWTJEK2E5RmJYQmp3c1E5ZUN6QWpURnBRUFRQSklBT2UzUG5GZmZqZ1hKdVhSWkg2NENBSHRRTDNONVRnTGVuNkV1K0FKQXV3QVRYQVNINGhEY0NnUlNya09OK256TWExRmxENjVqRStwaVZRQW8rUFRKS1JXQzE4NThpdTU1RDhHN0R2VWRQZ1B3SmcvbXZNUFBDeENEWkcyRUNvNXBOVDcwK0FiN2tJOGYxM29QQU4rTmVnMXEzbmNBS2o0UkVLZUVvdEtid2lmTDdvVkxOQk1pSHpFUHlFZllxNWk4SkFBRnhsVUZPUTRUQW5ZK09xRlV6Qi80ZEt3YlhKNHZoTHJMN3c5TVpMOVl3U2NRS0Q2QXNsUXM2T0c5Y1pNUDMxc3I2cnRjbnZOUFVIdXJDa0NmMGg2MlFlUG0rZm5naXE5eiszUGx5TldvalM3UCtjbHF1QXhQUGlpbGlxQU9nRnlzNlhKaXYydFFydzgwQUJVYlFCTXNBa3Z4Q2ZTSy81L3ArenljdjE1anFtN0tCejJ3cU80Q1VIQWg3cUxIRFA2emdDUi9QcWRBS2c5WmRWeFJzbFNYOVFwRVZiQ2lYbHFUUDBadGQ5bkpmTHhhN3NMemxJR2dnUzZGZ0tzUkJlaUlpTEFPdFU0V29LOVo3c1NudDRmQzRYVnlLQVM1WEk3UUNLSWtHVUFqQkE5a3BZVHljeGVpSGwwRzdKZFkrMldCQWFDYm5TOVpzbllJdkUweENhNWZFNFp0YldIb3JaZWdNWFQrQ05SZHNyKzlvd05hV2xzaG1VaEFmSG9hNHZFNFpETVprQkNJYnJwb0QwSDZPdzF3TmJyUGRic0hBS3pSU0k1ZStsSFhndk15NE8yY2owYnlnVWp4QWVqV2wwVHRWczBoRVQ3VEhZWGJPaU93S2xSNjVoQmF3TWFtSmxYYkZ4Zmg3T25UTURrNVdXQ3VRdVZuSlhnTHhPZnBmb1BpSE9DTnFGOXorVGhrcVRZeVk0K2kva1VGOGVUTm5IRnFLNHY3QVVCUFVENkhwdS95cGhBODF0Y0FmNFVBTEFjK3cyMWVVd09kR3pmQzVpMWJRSFhOK2J4cnJOc2pLemlPdW84WnV4SjFnOHZIK1FEbnVMOUFqVlFRcTNad3hwK0FRby9qOGdQZ0xJTHYvZWh1SDM1SFBmVFVWZVpDR3hvYm9hZTNGNkxSS0lJd1p5QTFMS08yQWtTUEdERmQ2SStZTVFMRm43cDhqR3Vac1JjMEYrdzBsamNqSC84Vk9CWnNSZVlSZk85ZEhZWUhMNjJIbU1TM05mMkpIUHhnZEJGMkgwM0N0NGNYRCtIUTUxTUxDMGZTNmJTcE5kemMwNE9QRWNncitaTEpaS3ZwSHcrRTRxL2ZvSTR4NHplN2VJeTNhc3BhcW96RCthaHNlRFZuL0hYVUY1Y2RDMTVFTDBsazQ5OHVyb013QjlhdnhMUHd3TUFDUEQrVlVhMGtwV0d1WDFOejRyYjFOZmROakkrM1RFNU1iRzFHSWtLRWhFQ25sM0E0REJ1N3V1RDQwVGRNWTdncXMyRDZIQ2xPT0lqNlVkMzRWYWh0bXF0MEk3V2p2MHk2WXcrQTg4N2xqMENoOFlDVlBWQ05ab1JLR1daT1VlRGVyYlhRV21PRXdnUDlDL0NobDJaaDM5bTBlbVgxc2dDTnFGR3BjQU1neVFoVENnYUJDRWNQSDRicDZYT0dPZXJxNnFCdFRUdGtzeG5WSFpQbU1UWWtwUnhpT1JmclF6OGd5U09jSU44dE44eW1YMTVHSGRVeGJ6dEN3THVOTTU1RTNWdlZOSXdUU2FJMXU2WTFETnZiUW9ibnZvU3U5cXNJUUFJZHFablZJcVpMYVpjc0F2SGtpWDVRdXBGRk54Y3YxVmpUM2c0THlTU0lvcWdxZ1MrVHljQWlzbVo2Vk84b1VmVFQ5Ykx5RE9vVWFndmpoaCt1Y043TldzcEtMeit1NE5MZURZWGVQMWFlUWgxWlZnQXN1RVFCUHQ1cEpHS1BqS1hoWDlEdE5pQUxGaTBTQWxvWFI3NXM2T1NnU2o2aTBUZGIzbVJaVnVOQlZnaDhpZmw1bUQ1M0RtYmljWlUxUzlVQklxVXVmZ21GMHRhU3ZCTUtaYTVLVnN4ZHg3akx2QVlXcDNLSHlmZzNUS3psZzFEb3dOSExoSmIreVZZRVFLdDVNZloxOUhjZS8wbXJzWjhJVjdVVVc3L3BqQUwvZEN5cFZqOUVXMkF1Z0pCYzh1andDQmR3ckZBT3NXblZLbFdUYUNGUGo0NUFmRHJPcmFqNElJOHdBS1F2am1xM2oxVXc1L3Vadnc5cjZrVGFnVjhxUEtHbGRGaEpheVRyQTV6bnZvWDZYRVV4b0ozK1B3SUkxWEVwejVmQng2aWt4bkZ3VlhNSUlrekc1ZEd4UlJoTTVoQ0F6bkowQko3WjJSbElKQksyTGlnV2kwSDNsaDVZMTltcHhvYjYrTkFub1M5eG5obTdzWUw1TG9CQy9WY3YreXF3UExkb3NTa3Izd2J6aFVoZkwwRmt2SFBCZXF1SFdBSUs0YTVva3VFOWJXRjRlNk1NYXlPaUNyQTYyUWpqbjQybklTU1dobHU1dHZ3OG1saHlxN1cxdGJZdmpPSkZzb3luVHA0RWFuTVEvTE9GcDFHZlJkMmhHeU1MU0JlUmNEQWZrWmdZSi8zaWxIUit6TVRLbFlwVGZ3MkZCZmxzdHpkWnhjK2l6bmtDUUVFTE5oSm84Y2pLM2JVNWFuQzFQS0UweTBBaWp3QXN2YzlCMlNXZytINks2ZGF0WDE5STlhUlNNSSt4WGdvZjgraWlKWXdKS1U2c2IyaFE0ME5XbWx0YVZGYytkR29RWTBMSlR5djRCQU5BV2pGSEhjZjdIY3pGOXY0TmFnellpVndHL0NVRFQwUHBYUkR5bXJ0bDMwdFZsUGRDb1J6b0hnQ1hMRjlPaS9IK2RuTk1CWjlrMFlqTVpBcDVQckdNZFMwZkg0aEFDZXBCdEdKcFpMb1UzK1d5V1VNOEdncUgxV2FHam82MTZMcUxqN3E2clEzbTUrYmczTlNVcTgwTlplUm5VTmphSXNMRWNYWUIyS0tSR0wzc0IrZHJkbTgzQ2ZuLzI4SjdmNEM2bXpKaXpQakhLZ0dnV01yeVVYTDVIN2ZXd3QxYnJJT1BoR0xFTkxyUFVqMEVkbUxQcWNsSkZVUVV6eEdJWkZSSnAxa0U1ZW5SVVRoMjlJaWFrakVFVVdoQjVaQnN3ZWE2Sm9PYTI5TEx0UTV5ZGdTK1pwUDBpMTBoSnM3YnZXSEU0bzB4QnNaNk44bDd0RGpWUFFDU1VGbnRMemRGNEk0Ti9NK01yQ09WMWFqQzhjWmNUblhUUzdLWVYxVEw2ZGJxTlVuTCt3bW1sbEpRWFhCaVBnSDl4NCtyZ0N6S0k2Q0ZiRzVwUmJmdDIzSlhIbEM2VVB0c3puRWpKL1hobEhXU0JWN05HZjh1aHpTWkNjOVMxcG93Wk9jdU9JWGYwMlZJTnU3ZVlseDJTdXgzejFBSzlvNFdXQzRCVFVZWXR5TWI2YTJUb0E5anhXUldNYTNaZWtrRnlCb21rd2tZSFI2R0RaczJGZnN5ZE5HVDQrTmU5d1hxaFpvVHZnaUY1WTVMc2tNaktGYWtWb3V2OUVLbHZsa1hjMzkwUno1a1k0NmZRNkg1b1p2RGhoOTB6UUxtMGRYZDFSMHpzTmlwdEFLN1hwNkZ2eitjZ0NQek9iV3NSdUNqTDNVRVVmc1RaTDczSEVuQS9mMEwzSHF3SDhzMkpVbFc0ejJLRi9WQ1pDVVNqZmlabHFGbTFOZVlzUnNZUUphU1B3SmpxOVNURHM5bEsvQ1hjWkkxZmQzR1BNU1d2OE1adndMMUlsY0FTSEhmVytwbGVQZnE0cytKTE4yblg1dUhnNU1aYUFvSkVCRUxiMTdhYW8xYS9tcWxRcm5OTFAxaXgvSTR0VktGOUUwZTR1ZUs2OGxVNnFPcWlwTDMxUTMvaUFPRVN5eStsNjM5em1vV3lJbnNNdkYyMzNBd0Y3bHN0Z09IMk4xT1Z3Qkk1T0ZkclNGZ1UzdmZHMW1FQXhOcEZYeHVnTWVwSGJMUzkwZGc0eVd3d3pVMTRMTTh5VGxkS3d1VzZFUzNNMlBVKzNmV3dUa1FFNytWTXo3QnVVR3NXblplR0hFTE9DanRpdXlYUzZtN1N4dGxBK0Y0ZUNRRkVSTXE3TlplTFZhV2ZwYnFCMVIwTDJLSnlGS002TFA4SHZVTlRsNnZYSDJJR2crMk1HT1BPenlIYXpRQ3hFdXJURHVjazlldzJxdUZEWlZad0RBaThJSkk4ZkFveG5jbmtYQ0VCZmZjcFdKeEhqZmQ5bEw4NTJOeGp1NEN0bXBCaTliTEZialoyaS9sbGc0NFBBZXpydWR2VlhCZFQ1bFk0NDlXYkFISjl0VXdsaTZPQVNBeFk5RWwrdWc1QUJSS1RodGpmZW9sOUpxSlc0Z0RKUTdBMlB1SVhkaitDdXFBemVNU2FLbFo5VHJPYzlTOS9WSUYxMFR4NkNNbWNXdURZd0NxMVE4Njgxd3hSR3FSNm9iRThzQ3hDaXl2QVVBc3ZyN2VXRzlQTGFRQUJOLzdZM2pnS2RXY1FHMzNieWtEWWl0Q1cremVyS1Z6V05uamdoMzRKbWVNdHZqWVZoRUFLWWxNTGxjdjY2SWlYRkFqcVRsQXQ0Qmw1N1cyMGpjSXZwQXN3NnBWeFFVRXFna3ZMQ3lBNkQ4QXlSS3hGUVNxcVc0eWVmME96VXFldjUvQVdmV0RMTkZ0TnF5WFhYbFp1N2txY3NPaTBYb0F2Qm92RHVDcDQrV0dqckRhK2V5aWw3UU1ORHVRSWFDMXRhOHhNTjY1MlZtMXJsd0ZDN2pFaGxsbWVyM0YrSStJekJIYnNaVWdVTmZ6Rlp5bkhuZklwZzFRTVlranFYdG5iVVVrNUpkVEdjZ3lhUGpraGdoYzBpRERuRXNnOUtKS1FzeDNWWE16dEhjWXIzOXlZc0t2N2RsNDhqOWdiSFhuYmJGQlZwSGRkbmNmT0Zna05EQXoralpCRUNJV1hhZFQyUXZHeWt3ZDJPaC81QUFRNFBCY0RuNCtYcHhycE8wMC91TnRkZEFka3lDZVVWU0FPb0dpb2xPM3dFQ0paN0o4cmF0WHc2YnVic05PQ2pNek16Q0xhclpleEFlaHNneWJSTDZTWXltb1lTRmN4bnFXbGJsMEFwNGIrMThra3lGZVd1aFpGNi9yRE9wUFROeXc0QWlBaFpaNGdIL3RYMUNySDNxNXNGNkN4L3NhNEJPZEViVUpsVnd5ZGI3TTI5Q0VwdlQvaGR6NTNiRXlCQ0RicWxVMTZ1cnJvR3Z6Wm5YcEpnc3lhdDhhR1JvS3d1NUZqM0VzQmJ2UW5DM3FEd0wvbDVsS3l2T25YNE9SNUNUSWdpSHYrUkJVdUliRGhOQ3cwc2NoVWx6aFpxNHBEZmpibVF4ODVYZ1NQbmRoY1VOQ0d3YUVYMzVyTFh3bUZZVkRhQ21uRWFVRVdMdmZMMW5RdFJHUkdpVDNOTGUyWGhtTnhVRGdkTHdvakswOHY2K2cxcG9WaVVRZ0VvMmFFaExxSlV3UitmQS9DYzBLTFZaaVY4eFJ1bVdwSEVaMVh6YVJTOVlsWmZkQSs0ZC94U05iWklXLzU4RjEwUklFV2sreW1URnNPeldMV3g2QVBIZElGdTdmVHk2bzI2bDlZb014bEdqSDhmWkl4UzZOK3NodXA1WjdKMjMzNWR3eXRlUFRibHRTOWNGSFFpdm1ub0hpbjNJZ29rQXRVbFFXbzRvRm16dXl6WDRIWjhmZzFjbGo2SDROYTg0cGxqemx3WFV0TlNoOG5obW4wdHg5VUdibkJyRVVJYUFWYmRUZDhwWGpDNUFMNk04VGNSTmd5U1FjUDNyVWFoZTBuODc1aDh6ZlRmRG05aGhzNEg1V0l5KzI1S2RvL2VZeWFQR05sN1hIdyt0NlNBT2lYbnJBUW1sT3BOYjVCS05MWTZsOGdXemNlelFCTzE2WWdmMW4wNjZtWWx3VmRMY0V2T0ZUcCtESTRVTXE2YUNVQzhXSk9XMEhCZjMvVmMycGoySHdyenBIRm5DZWsvY0xnM0dmRnVyOXM3WFlKNTFMdzhIUlYzamtnM3I0bnZid3VrNW8xOFpLMlo5OWtQOThZL1QrTTZsOHR5UzgrUzBJSExkTXdOczd0Z2dEeVR4c1d4MkM3anFwU1NpNDBHaVZvVGVkU2FmN1oyZG5ZVzV1VHQzWXNxbHBsYVU5QmRXZmE2MnBPUkVLaDhkOE90Y3pXaXlvendGUzJ6MDFkTFpXeW41L00zNEVCdWJHSUNvWnVuNis2eVNXdENuVUxiMk5rMnE2RzBvMDBjcjM5Y2IrcG9yZ2tUUUFMNEx6WFo3T0wwb2lYUWJ5QkFQQVRpMVdLc29jYVJiUWx1d2Jlb0hYY0VzVzkwRWZyb3NJenBlZ2VBTk5LczFSTGZyN3BnQzg1NTU3UGpzME5IU1IzUUtCdHFkNEhweDNZK1YyN3R6NTBJNGRPNTc5L2JtQlN4OGRlT1pPU1JEUmR3aktlYWFyMjBxZnQ4T3A3aW1KM1hXZi9kMDV2VlZmT2tCV3lRb2I2enNPN2VyWmZyOHNTRm1mQUhnQWlsZk1FUkZjejJaU3dPYU9XbWVUVS9EcnM0ZDQ1T09jUm55OFRvSVNGaWJCdUlQcnJwSUEzTDE3OXo5WHl4UU1EdzkzRWdDZk92WENwNzl6N0tlZnFndkZmRDErWHNsQlZJN0F0dlY5ZXp0aUxZTStIWmFPODZMR2dNM0VkdS9md1pHWFlXcHhEamkva0U0Vzl1dFZ0UGhVbXFOMTBkeE5qMlNoT3JWUjFWWElzcXlXbUVLaWxLTVByallVY2ZFQTVma3RiWGhaSTRiVGVDNSs1MmwrWEFLQWkzWUpBMTNIZ1pHWElDVEpFRUFocTBKTnVBK1lwbUdxSlFqKzRtMzdGQVpBZGdIbkhLcCtVL3VuU3NTODFLdDMwczVrcjArZGdDUHhRUWlMSVFpbzNHcG1Ec1JBbmFiZEgvWlZTcnhlc0FoVXdmRVpzbVRLanRDNml0K1pQR2UzOTAvWVAvUWlwUFBaSVArczJlVmdVcG9MbHMxV3lnQkhzUGorVXErdDdGc2lvc0piUitGa2N4N3FKT25pekc4TGdQSEZ1ZXh6WjE2YjVwQ1Bha29FaXROemttWUZQeGRZQUNvc09CU09SVlRLV0VrN1Z0TVpFR2xQUHQ1NmpnVUhjOTBQeG1XUmVZMjFXcGJ4MVBUaDZmUjhqeVFFeXBsZENzWTFMRlNhK3dJd0ZaUEFBRkR3Y3pMQmNleVkxVklOYm9ncmN3a2daRVVRSmlGWVFpU0tHaEgwdS9wVHN3SnQybjR3dURGZ09SRHBmeEJFQ1FMU1Y2Uk1pTUhLUjRKTlFxeVNEVXVMZzExbnl5dGlUNTdRUWdxOTBIS0R4dUNTRURPeVlZV1lLQ2JBZENOdURMQnNhVndQejkzNG40RTdyM2MrZmllNTRGZFIvMUEzVEwrWlFrMjQzdyt1QmJSajJleXc0aFhMNTdma2dWK0MyN1g4WExCZFlzRmF2aXF1UnZwL0xrK0NjUWtBYldqWkdVd0FLaTYrWndWd1FSQkt1UCtLR2FQODRFM0x6d0tXSWlVclJDUEl3blBENTB0enl4T0F3Z29vbDVGUTNadHQxNmUxenhjSEQ0QUNCeXhPTjV5cHJPYTdJdTRKTlZhdysxb1Q3bTRKcmdVVXlvRFNpbnRlQVZ5UWhMY2NsSnBrdzhFa0lVNVNMaXVXTHNoQ1MwS1R6Qmh0YUhtMVdJWGZVanN2dVZ4T1RZVG5sYnhjMUl4UXp1b3BMZ0Jhazd5aVNFcWhTWDlGWEJUYUlrK25vNmhQTTJPa241SmJXMXRIcDZhbUxxakdTWFoxZGFuYjE3WkdtMDZJSUJocklIWmFxcXhVUlpqWDBvZlFHSzRkaWNtUjZSWEl1Q3Y0dWZMY01QdXJUMWYrbndBREFNaDFkZEdNYmVPOUFBQUFBRWxGVGtTdVFtQ0MnXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgZW52OiBUYkF1dGhFbnZpcm9ubWVudDtcclxuXHJcbiAgICBsb2dnZWRPdXQkID0gbmV3IFN1YmplY3QoKTtcclxuICAgIGVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIGdldCByb3V0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdlbnYnKSBlbnY6IFRiQXV0aEVudmlyb25tZW50LCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lbnYgPSBfLmRlZmF1bHRzRGVlcChlbnYsIFRiQXV0aFNlcnZpY2UuREVGQVVMVF9FTlYsIGVudik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RiQXV0aEVudmlyb25tZW50JywgdGhpcy5lbnYpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQodGhpcy5nZXRCYXNlVXJsKCkpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGltZW91dCg1MDAwKSxcclxuICAgICAgICAgICAgICAgIG1hcChfXyA9PiB0cnVlKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAuY2F0Y2goX18gPT4gZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUml0b3JuYSBsYSBiYXNlIHVybCBkZWwgYmFja2VuZCxcclxuICAgICAqIGNhcmljYXRhIGRhIHVuIGZpbGUgZGkgY29uZmlndXJhemlvbmUgY2FyaWNhdG8gZGluYW1pY2FtZW50ZSAoYXNzZXRzL2Vudmlyb25tZW50Lmpzb24pXHJcbiAgICAgKi9cclxuICAgIGdldEJhc2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXJsO1xyXG5cclxuICAgIGdldExvZ2luUGFnZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5nZXRCYXNlVXJsKCkgKyB0aGlzLmVudi5hdXRoLmxvZ2luUGFnZVVybDtcclxuXHJcbiAgICAvKlxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogSldULFxyXG4gICAgICAgIGFwcGlkOiBNNCxcclxuICAgICAgICBzZWN1cml0eVZhbHVlOiBqd3RFbmNvZGVkXHJcbiAgICAgIH1cclxuICAgICovXHJcbiAgICBnZXRBdXRob3JpemF0aW9uSGVhZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgVHlwZTogJ0pXVCcsXHJcbiAgICAgICAgICAgIEFwcElkOiAnTTQnLFxyXG4gICAgICAgICAgICBTZWN1cml0eVZhbHVlOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRoU2VydmljZS5sb2dpbiAtIGxvZ2luUmVxdWVzdCcsIGxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxMb2dpblJlc3BvbnNlPih0aGlzLmdldExvZ2luVXJsKCksIGxvZ2luUmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZURhdGEobG9naW5SZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaXNWYWxpZFRva2VuKGF1dGh0b2tlbiA9ICcnKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIWF1dGh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCBvcHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgb3ByZXMuTWVzc2FnZSA9ICdObyBhdXRodG9rZW4nO1xyXG4gICAgICAgICAgICByZXR1cm4gb3ByZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRJc1ZhbGlkVG9rZW5VcmwoKSwgbmV3IElzVmFsaWRUb2tlblJlcXVlc3QoYXV0aHRva2VuKSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAoKGpPYmo6IE9wZXJhdGlvblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4gLSByZXNwb25zZScsIGpPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghak9iai5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgak9iai5NZXNzYWdlID0gak9iai5NZXNzYWdlID8gak9iai5NZXNzYWdlIDogJ2lzVmFsaWRUb2tlbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gak9iai5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuTWVzc2FnZSA9ICdBdXRoZW50aWNhdGlvbiBzZXJ2aWNlcyBkb3duLi4uJztcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2NjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb21wYW5pZXNGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRTdWJzS2V5c0ZvckFjY291bnRVcmwoKSArIHVzZXIpLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLkNvbnRlbnQgJiYgcmVzLkNvbnRlbnQuc3Vic2NyaXB0aW9ucyA/IHJlcy5Db250ZW50LnN1YnNjcmlwdGlvbnMgOiBbXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJc1ZhbGlkVG9rZW5VcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2lzdmFsaWR0b2tlbi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2dpblVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9nb3V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dvZmYvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2NoYW5nZXBhc3N3b3JkLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlc2V0UGFzc3dvcmRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3Jlc2V0cGFzc3dvcmQvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3Vic0tleXNGb3JBY2NvdW50VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdzdWJzY3JpcHRpb25za2V5c2ZvcmFjY291bnQvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb2ZmKCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ29mZlJlcXVlc3Q6IExvZ29mZlJlcXVlc3QgPSBuZXcgTG9nb2ZmUmVxdWVzdCh0aGlzLmdldFRva2VuKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PExvZ29mZlJlc3BvbnNlPih0aGlzLmdldExvZ291dFVybCgpLCBsb2dvZmZSZXF1ZXN0KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgobG9nb2ZmUmVzcG9uc2U6IExvZ29mZlJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ29mZlJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZE91dCQubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ29mZlJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyU3RvcmFnZSgpIHtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUyk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmFnZVN1YnNjcmlwdGlvbkRhdGEoc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcsIHN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCByZXNwQ3VsdHVyZTogc3RyaW5nID1cclxuICAgICAgICAgICAgbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncztcclxuICAgICAgICBjb25zdCByZXNwVWlDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLkxhbmd1YWdlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5MYW5ndWFnZS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxyXG4gICAgICAgICAgICAgICAgOiBsb2dpblJlc3BvbnNlLkxhbmd1YWdlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCwgbG9naW5SZXNwb25zZS5Kd3RUb2tlbik7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgcmVzcEN1bHR1cmUpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHJlc3BVaUN1bHR1cmUpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMsIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UuUm9sZXMpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5KV1QsIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4pO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHJlc3BVaUN1bHR1cmUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTLCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLlJvbGVzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVDdWx0dXJlKGN1bHR1cmU6IHN0cmluZywgdWlDdWx0dXJlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIGN1bHR1cmUpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNjb3VudE5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWJzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWJzY3JpcHRpb25EZXNjcmlwdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1bHR1cmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVJQ3VsdHVyZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXV0aFNlcnZpY2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXJsO1xyXG4gICAgZ2V0UmVkaXJlY3RVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgucmVkaXJlY3RVcmw7XHJcbiAgICBoYXNTdWJzY3JpcHRpb25TZWxlY3Rpb24gPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnN1YnNjcmlwdGlvblNlbGVjdGlvbjtcclxuICAgIGdldEFwcElkID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmFwcElkO1xyXG4gICAgaXNTZXNzaW9uU3RvcmFnZSA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2U7XHJcbiAgICBnZXRDdXN0b21Mb2dvID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmxvZ287XHJcbn1cclxuIl19