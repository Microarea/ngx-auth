/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject, Injector, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { of, Subject, fromEvent, timer } from 'rxjs';
import { tap, map, switchMap, retryWhen, delay, debounceTime, startWith } from 'rxjs/operators';
import { StorageVars } from './models/storage-vars';
import { LogoffRequest } from './models/logoff-request';
import { IsValidTokenRequest } from './models/is-valid-token-request';
import { AuthConnectionOptions } from './models/auth-connection-options';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var TbAuthService = /** @class */ (function () {
    function TbAuthService(env, http, injector) {
        var _this = this;
        this.http = http;
        this.injector = injector;
        this.stateChangeEventEmitter = new EventEmitter();
        this.currentConnectionState = {
            hasBackendAccess: false,
            hasNetworkConnection: window.navigator.onLine
        };
        this.loggedOut$ = new Subject();
        this.errorMessage = '';
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
        this.env = _.defaults({}, env, TbAuthService.DEFAULT_ENV);
        console.log('this.env', this.env);
        this.serviceOptions = new AuthConnectionOptions(this.getBaseUrl());
        this.checkNetworkState();
        this.checkBackendState();
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
     * @private
     * @return {?}
     */
    TbAuthService.prototype.checkBackendState = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.httpSubscription) {
            this.httpSubscription.unsubscribe();
        }
        if (this.serviceOptions.enableHeartbeat) {
            this.httpSubscription = timer(0, this.serviceOptions.heartbeatInterval)
                .pipe(switchMap((/**
             * @return {?}
             */
            function () { return _this.http.get(_this.serviceOptions.heartbeatUrl, { responseType: 'text' }); })), retryWhen((/**
             * @param {?} errors
             * @return {?}
             */
            function (errors) {
                return errors.pipe(
                // log error message
                tap((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    console.error('Http error:', val);
                    _this.currentConnectionState.hasBackendAccess = false;
                    _this.emitEvent();
                })), 
                // restart after 5 seconds
                delay(_this.serviceOptions.heartbeatRetryInterval));
            })))
                .subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.currentConnectionState.hasBackendAccess = true;
                _this.emitEvent();
            }));
        }
        else {
            this.currentConnectionState.hasBackendAccess = false;
            this.emitEvent();
        }
    };
    /**
     * @private
     * @return {?}
     */
    TbAuthService.prototype.checkNetworkState = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.onlineSubscription = fromEvent(window, 'online').subscribe((/**
         * @return {?}
         */
        function () {
            _this.currentConnectionState.hasNetworkConnection = true;
            _this.checkBackendState();
            _this.emitEvent();
        }));
        this.offlineSubscription = fromEvent(window, 'offline').subscribe((/**
         * @return {?}
         */
        function () {
            _this.currentConnectionState.hasNetworkConnection = false;
            _this.checkBackendState();
            _this.emitEvent();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    TbAuthService.prototype.emitEvent = /**
     * @private
     * @return {?}
     */
    function () {
        this.stateChangeEventEmitter.emit(this.currentConnectionState);
    };
    /**
     * Monitor Network & Internet connection status by subscribing to this observer.
     * If you set "reportcurrentConnectionState" to "false" then
     * function will not report current status of the connections when initially subscribed.
     * @param reportcurrentConnectionState Report current state when initial subscription. Default is "true"
     */
    /**
     * Monitor Network & Internet connection status by subscribing to this observer.
     * If you set "reportcurrentConnectionState" to "false" then
     * function will not report current status of the connections when initially subscribed.
     * @param {?=} reportcurrentConnectionState Report current state when initial subscription. Default is "true"
     * @return {?}
     */
    TbAuthService.prototype.monitorConnectionStatus = /**
     * Monitor Network & Internet connection status by subscribing to this observer.
     * If you set "reportcurrentConnectionState" to "false" then
     * function will not report current status of the connections when initially subscribed.
     * @param {?=} reportcurrentConnectionState Report current state when initial subscription. Default is "true"
     * @return {?}
     */
    function (reportcurrentConnectionState) {
        if (reportcurrentConnectionState === void 0) { reportcurrentConnectionState = true; }
        return reportcurrentConnectionState
            ? this.stateChangeEventEmitter.pipe(debounceTime(300), startWith(this.currentConnectionState))
            : this.stateChangeEventEmitter.pipe(debounceTime(300));
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
        return this.env.auth.url;
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
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (!authtoken) {
                    return [2 /*return*/, of(false)];
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
    TbAuthService.prototype.stopCheckingConnection = /**
     * @return {?}
     */
    function () {
        try {
            this.offlineSubscription.unsubscribe();
            this.onlineSubscription.unsubscribe();
            this.httpSubscription.unsubscribe();
        }
        catch (e) {
            console.error('TbAuthService.ngOnDestroy()');
        }
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stopCheckingConnection();
    };
    TbAuthService.DEFAULT_ENV = {
        auth: {
            url: 'asdf',
            subscriptionSelection: false,
            appId: 'M4',
            redirectUrl: '/',
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
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.stateChangeEventEmitter;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.currentConnectionState;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.offlineSubscription;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.onlineSubscription;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.httpSubscription;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.serviceOptions;
    /** @type {?} */
    TbAuthService.prototype.loggedOut$;
    /** @type {?} */
    TbAuthService.prototype.errorMessage;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7QUFHekU7SUFtQ0ksdUJBQTJCLEdBQXNCLEVBQVUsSUFBZ0IsRUFBVSxRQUFrQjtRQUF2RyxpQkFPQztRQVAwRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWpCL0YsNEJBQXVCLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFDbEUsMkJBQXNCLEdBQXdCO1lBQ2xELGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLFNBQVMs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QTVUWSxhQUFhOzs7Ozs7SUFDdEIsMEJBV0U7Ozs7O0lBQ0YsNEJBQStCOzs7OztJQUUvQixnREFBMEU7Ozs7O0lBQzFFLCtDQUdFOzs7OztJQUNGLDRDQUEyQzs7Ozs7SUFDM0MsMkNBQTBDOzs7OztJQUMxQyx5Q0FBd0M7Ozs7O0lBQ3hDLHVDQUE4Qzs7SUFFOUMsbUNBQTJCOztJQUMzQixxQ0FBa0I7O0lBOFFsQiwwQ0FBb0Q7O0lBQ3BELHVDQUF5RDs7SUFDekQsaURBQThFOztJQUM5RSxpQ0FBNkM7O0lBQzdDLHlDQUErRDs7SUFDL0Qsc0NBQWlEOzs7OztJQTdRRSw2QkFBd0I7Ozs7O0lBQUUsaUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IG9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCwgdGltZXIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwLCBtYXAsIHN3aXRjaE1hcCwgcmV0cnlXaGVuLCBkZWxheSwgZGVib3VuY2VUaW1lLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XHJcblxyXG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9naW5SZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgTG9nb2ZmUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ29mZi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9nb2ZmUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dvZmYtcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBJc1ZhbGlkVG9rZW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvaXMtdmFsaWQtdG9rZW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IE9wZXJhdGlvblJlc3VsdCB9IGZyb20gJy4vbW9kZWxzL29wZXJhdGlvbi1yZXN1bHQnO1xyXG5pbXBvcnQgeyBUYkF1dGhFbnZpcm9ubWVudCB9IGZyb20gJy4vbW9kZWxzL2F1dGgtZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBBdXRoQ29ubmVjdGlvbk9wdGlvbnMgfSBmcm9tICcuL21vZGVscy9hdXRoLWNvbm5lY3Rpb24tb3B0aW9ucyc7XHJcbmltcG9ydCB7IEF1dGhDb25uZWN0aW9uU3RhdGUgfSBmcm9tICcuL21vZGVscy9hdXRoLWNvbm5lY3Rpb24tc3RhdGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgc3RhdGljIERFRkFVTFRfRU5WOiBUYkF1dGhFbnZpcm9ubWVudCA9IHtcclxuICAgICAgICBhdXRoOiB7XHJcbiAgICAgICAgICAgIHVybDogJ2FzZGYnLFxyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25TZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBhcHBJZDogJ000JyxcclxuICAgICAgICAgICAgcmVkaXJlY3RVcmw6ICcvJyxcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2dvOlxyXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgICAgICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUtBQUFBQkdDQVlBQUFCTDBwK3lBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQStocFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRiRzV6T21SalBTSm9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THlJZ2VHMXdUVTA2VDNKcFoybHVZV3hFYjJOMWJXVnVkRWxFUFNKMWRXbGtPalZFTWpBNE9USTBPVE5DUmtSQ01URTVNVFJCT0RVNU1FUXpNVFV3T0VNNElpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qYzRNVVJFUkVSR1JEbEZRVEV4UlRsQk5VRTRSalU1TkRJek16TTBNVGxHSWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pjNE1VUkVSRVJGUkRsRlFURXhSVGxCTlVFNFJqVTVOREl6TXpNME1UbEdJaUI0YlhBNlEzSmxZWFJ2Y2xSdmIydzlJa0ZrYjJKbElGQm9iM1J2YzJodmNDQkRReUFvVjJsdVpHOTNjeWtpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRvek16QkdNRVpFTVRaRlJEY3hNVVU0T0ROQ01rWkNNalJFUTBKRU4wUTBReUlnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG96TXpCR01FWkVNalpGUkRjeE1VVTRPRE5DTWtaQ01qUkVRMEpFTjBRMFF5SXZQaUE4WkdNNmRHbDBiR1UrSUR4eVpHWTZRV3gwUGlBOGNtUm1PbXhwSUhodGJEcHNZVzVuUFNKNExXUmxabUYxYkhRaVBreHZaMjhnVDBzOEwzSmtaanBzYVQ0Z1BDOXlaR1k2UVd4MFBpQThMMlJqT25ScGRHeGxQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9Qa3VqRkFZQUFCTDlTVVJCVkhqYTdGMTdkQnhuZGIvejJOWHU2bWxKbGlYSGxtM0pWdVJBUW1oRGxMUXBoQlRzeElHUVFJZ2JURWg0bko3MGNOcWUwSlNlSGs1S3lIR2hoVVBhRXByVC9sRnFJQkF3NUFuQkJnY1RraWFCa0pDR1lEdCtTSmIxc3EySHRYcnNhcld2NmIyekkyZjJtMjkyWjJablprZW51dWRjci9YdDdqY3p1Nys1OS83dXZkKzNRdDh6MHdQamkvbE5vZ0NnQUFBK0dNUnMzS25RZkltY0FuZHVqSDc1M3Q3WTM1MDljK2F1a2VIaHI0cWlLQWhsM2ljNGVNNTBQa1dCY0RoOHJQZWlpL29rV1k1YmVNdmJVWC9MR1o5QTNZSTZBLzdMRjFEL2dSMzg0Y0RCcjMzeGxXLytkVjBvNm1UT2kxRlRxTWU5UG5seENYeWxSSEQ1b0RTZmlOcWZ5RjFDZjJmUzZhMklCa0VBNStkaGR1T1VtekNielhibGNybVdDaTlwTmVybFZRQWZYZlkyRCthOUZiWEJqd3NROWVDekFqVEZwUVBUUEpJQU9lM1BuRmZmamdYSnVYUlpINjRDQUh0UUwzTjVUZ0xlbjZFdStBSkF1d0FUWEFTSDRoRGNDZ1JTcmtPTituek1hMUZsRDY1akUrcGlWUUFvK1BUSktSV0MxODU4aXU1NUQ4RzdEdlVkUGdQd0pnL212TVBQQ3hDRFpHMkVDbzVwTlQ3MCtBYjdrSThmMTNvUEFOK05lZzFxM25jQUtqNFJFS2VFb3RLYndpZkw3b1ZMTkJNaUh6RVB5RWZZcTVpOEpBQUZ4bFVGT1E0VEFuWStPcUZVekIvNGRLd2JYSjR2aExyTDd3OU1aTDlZd1NjUUtENkFzbFFzNk9HOWNaTVAzMXNyNnJ0Y252TlBVSHVyQ2tDZjBoNjJRZVBtK2ZuZ2lxOXorM1BseU5Xb2pTN1ArY2xxdUF4UFBpaWxpcUFPZ0Z5czZYSml2MnRRcnc4MEFCVWJRQk1zQWt2eENmU0svNS9wK3p5Y3YxNWpxbTdLQnoyd3FPNENVSEFoN3FMSERQNnpnQ1IvUHFkQUtnOVpkVnhSc2xTWDlRcEVWYkNpWGxxVFAwWnRkOW5KZkx4YTdzTHpsSUdnZ1M2RmdLc1JCZWlJaUxBT3RVNFdvSzlaN3NTbnQ0ZkM0WFZ5S0FTNVhJN1FDS0lrR1VBakJBOWtwWVR5Y3hlaUhsMEc3SmRZKzJXQkFhQ2JuUzlac25ZSXZFMHhDYTVmRTRadGJXSG9yWmVnTVhUK0NOUmRzcis5b3dOYVdsc2htVWhBZkhvYTR2RTRaRE1aa0JDSWJycG9EMEg2T3cxd05iclBkYnNIQUt6UlNJNWUrbEhYZ3ZNeTRPMmNqMGJ5Z1VqeEFlaldsMFR0VnMwaEVUN1RIWVhiT2lPd0tsUjY1aEJhd01hbUpsWGJGeGZoN09uVE1EazVXV0N1UXVWbkpYZ0x4T2ZwZm9QaUhPQ05xRjl6K1Roa3FUWXlZNCtpL2tVRjhlVE5uSEZxSzR2N0FVQlBVRDZIcHUveXBoQTgxdGNBZjRVQUxBYyt3MjFlVXdPZEd6ZkM1aTFiUUhYTitieHJyTnNqS3ppT3VvOFp1eEoxZzh2SCtRRG51TDlBalZRUXEzWnd4cCtBUW8vajhnUGdMSUx2L2VodUgzNUhQZlRVVmVaQ0d4b2JvYWUzRjZMUktJSXdaeUExTEtPMkFrU1BHREZkNkkrWU1RTEZuN3A4akd1WnNSYzBGK3cwbGpjakgvOFZPQlpzUmVZUmZPOWRIWVlITDYySG1NUzNOZjJKSFB4Z2RCRjJIMDNDdDRjWEQrSFE1MU1MQzBmUzZiU3BOZHpjMDRPUEVjZ3IrWkxKWkt2cEh3K0U0cS9mb0k0eDR6ZTdlSXkzYXNwYXFvekQrYWhzZURWbi9IWFVGNWNkQzE1RUwwbGs0OTh1cm9Nd0I5YXZ4TFB3d01BQ1BEK1ZVYTBrcFdHdVgxTno0cmIxTmZkTmpJKzNURTVNYkcxR0lrS0VoRUNubDNBNERCdTd1dUQ0MFRkTVk3Z3FzMkQ2SENsT09JajZVZDM0VmFodG1xdDBJN1dqdjB5Nll3K0E4ODdsajBDaDhZQ1ZQVkNOWm9SS0dXWk9VZURlcmJYUVdtT0V3Z1A5Qy9DaGwyWmgzOW0wZW1YMXNnQ05xRkdwY0FNZ3lRaFRDZ2FCQ0VjUEg0YnA2WE9HT2VycTZxQnRUVHRrc3huVkhaUG1NVFlrcFJ4aU9SZnJRejhneVNPY0lOOHROOHltWDE1R0hkVXhienRDd0x1Tk01NUUzVnZWTkl3VFNhSTF1NlkxRE52YlFvYm52b1N1OXFzSVFBSWRxWm5WSXFaTGFaY3NBdkhraVg1UXVwRkZOeGN2MVZqVDNnNEx5U1NJb3FncWdTK1R5Y0Fpc21aNlZPOG9VZlRUOWJMeURPb1VhZ3ZqaGgrdWNON05Xc3BLTHordTROTGVEWVhlUDFhZVFoMVpWZ0FzdUVRQlB0NXBKR0tQaktYaFg5RHROaUFMRmkwU0Fsb1hSNzVzNk9TZ1NqNmkwVGRiM21SWlZ1TkJWZ2g4aWZsNW1ENTNEbWJpY1pVMVM5VUJJcVV1ZmdtRjB0YVN2Qk1LWmE1S1ZzeGR4N2pMdkFZV3AzS0h5ZmczVEt6bGcxRG93TkhMaEpiK3lWWUVRS3Q1TWZaMTlIY2UvMG1yc1o4SVY3VVVXNy9wakFML2RDeXBWajlFVzJBdWdKQmM4dWp3Q0Jkd3JGQU9zV25WS2xXVGFDRlBqNDVBZkRyT3JhajRJSTh3QUtRdmptcTNqMVV3NS91WnZ3OXI2a1RhZ1Y4cVBLR2xkRmhKYXlUckE1em52b1g2WEVVeG9KMytQd0lJMVhFcHo1ZkJ4NmlreG5Gd1ZYTUlJa3pHNWRHeFJSaE01aENBem5KMEJKN1oyUmxJSkJLMkxpZ1dpMEgzbGg1WTE5bXB4b2I2K05Bbm9TOXhuaG03c1lMNUxvQkMvVmN2K3lxd1BMZG9zU2tyM3diemhVaGZMMEZrdkhQQmVxdUhXQUlLNGE1b2t1RTliV0Y0ZTZNTWF5T2lDckE2MlFqam40Mm5JU1NXaGx1NXR2dzhtbGh5cTdXMXRiWXZqT0pGc295blRwNEVhbk1RL0xPRnAxR2ZSZDJoR3lNTFNCZVJjREFma1pnWUovM2lsSFIrek1US2xZcFRmdzJGQmZsc3R6ZFp4Yytpem5rQ1FFRUxOaEpvOGNqSzNiVTVhbkMxUEtFMHkwQWlqd0FzdmM5QjJTV2crSDZLNmRhdFgxOUk5YVJTTUkreFhnb2Y4K2lpSll3SktVNnNiMmhRNDBOV21sdGFWRmMrZEdvUVkwTEpUeXY0QkFOQVdqRkhIY2Y3SGN6Rjl2NE5hZ3pZaVZ3Ry9DVURUMFBwWFJEeW1ydGwzMHRWbFBkQ29Sem9IZ0NYTEY5T2kvSCtkbk5NQlo5azBZak1aQXA1UHJHTWRTMGZINGhBQ2VwQnRHSnBaTG9VMytXeVdVTThHZ3FIMVdhR2pvNjE2THFMajdxNnJRM201K2JnM05TVXE4ME5aZVJuVU5qYUlzTEVjWFlCMktLUkdMM3NCK2RyZG04M0Nmbi8yOEo3ZjRDNm16Sml6UGpIS2dHZ1dNcnlVWEw1SDdmV3d0MWJySU9QaEdMRU5MclBVajBFZG1MUHFjbEpGVVFVenhHSVpGUkpwMWtFNWVuUlVUaDI5SWlha2pFRVVXaEI1WkJzd2VhNkpvT2EyOUxMdFE1eWRnUytacFAwaTEwaEpzN2J2V0hFNG8weEJzWjZOOGw3dERqVlBRQ1NVRm50THpkRjRJNE4vTStNckNPVjFhakM4Y1pjVG5YVFM3S1lWMVRMNmRicU5Vbkwrd21tbGxKUVhYQmlQZ0g5eDQrcmdDektJNkNGYkc1cFJiZnQyM0pYSGxDNlVQdHN6bkVqSi9YaGxIV1NCVjdOR2Y4dWh6U1pDYzlTMXBvd1pPY3VPSVhmMDJWSU51N2VZbHgyU3V4M3oxQUs5bzRXV0M0QlRVWVl0eU1iNmEyVG9BOWp4V1JXTWEzWmVra0Z5Qm9ta3drWUhSNkdEWnMyRmZzeWROR1Q0K05lOXdYcWhab1R2Z2lGNVk1THNrTWpLRmFrVm91djlFS2x2bGtYYzM5MFJ6NWtZNDZmUTZINW9adkRoaDkwelFMbTBkWGQxUjB6c05pcHRBSzdYcDZGdnorY2dDUHpPYldzUnVDakwzVUVVZnNUWkw3M0hFbkEvZjBMM0hxd0g4czJKVWxXNHoyS0YvVkNaQ1VTamZpWmxxRm0xTmVZc1JzWVFKYVNQd0pqcTlTVERzOWxLL0NYY1pJMWZkM0dQTVNXdjhNWnZ3TDFJbGNBU0hIZlcrcGxlUGZxNHMrSkxOMm5YNXVIZzVNWmFBb0pFQkVMYjE3YWFvMWEvbXFsUXJuTkxQMWl4L0k0dFZLRjlFMGU0dWVLNjhsVTZxT3FpcEwzMVEzL2lBT0VTeXkrbDYzOXptb1d5SW5zTXZGMjMzQXdGN2xzdGdPSDJOMU9Wd0JJNU9GZHJTRmdVM3ZmRzFtRUF4TnBGWHh1Z01lcEhiTFM5MGRnNHlXd3d6VTE0TE04eVRsZEt3dVc2RVMzTTJQVSszZld3VGtRRTcrVk16N0J1VUdzV25aZUdIRUxPQ2p0aXV5WFM2bTdTeHRsQStGNGVDUUZFUk1xN05aZUxWYVdmcGJxQjFSMEwyS0p5RktNNkxQOEh2VU5UbDZ2WEgySUdnKzJNR09QT3p5SGF6UUN4RXVyVER1Y2s5ZXcycXVGRFpWWndEQWk4SUpJOGZBb3huY25rWENFQmZmY3BXSnhIamZkOWxMODUyTnhqdTRDdG1wQmk5YkxGYmpaMmkvbGxnNDRQQWV6cnVkdlZYQmRUNWxZNDQ5V2JBSEo5dFV3bGk2T0FTQXhZOUVsK3VnNUFCUktUaHRqZmVvbDlKcUpXNGdESlE3QTJQdUlYZGorQ3VxQXplTVNhS2xaOVRyT2M5UzkvVklGMTBUeDZDTW1jV3VEWXdDcTFRODY4MXd4UkdxUjZvYkU4c0N4Q2l5dkFVQXN2cjdlV0c5UExhUUFCTi83WTNqZ0tkV2NRRzMzYnlrRFlpdENXK3plcktWeldObmpnaDM0Sm1lTXR2allWaEVBS1lsTUxsY3Y2NklpWEZBanFUbEF0NEJsNTdXMjBqY0l2cEFzdzZwVnhRVUVxZ2t2TEN5QTZEOEF5Ukt4RlFTcXFXNHllZjBPelVxZXY1L0FXZldETE5GdE5xeVhYWGxadTdrcWNzT2kwWG9BdkJvdkR1Q3A0K1dHanJEYStleWlsN1FNTkR1UUlhQzF0YTh4TU42NTJWbTFybHdGQzdqRWhsbG1lcjNGK0krSXpCSGJzWlVnVU5mekZaeW5IbmZJcGcxUU1Za2pxWHRuYlVVazVKZFRHY2d5YVBqa2hnaGMwaUREbkVzZzlLSktRc3gzVlhNenRIY1lyMzl5WXNLdjdkbDQ4ajlnYkhYbmJiRkJWcEhkZG5jZk9GZ2tOREF6K2paQkVDSVdYYWRUMlF2R3lrd2QyT2gvNUFBUTRQQmNEbjQrWHB4cnBPMDAvdU50ZGRBZGt5Q2VVVlNBT29HaW9sTzN3RUNKWjdKOHJhdFh3NmJ1YnNOT0NqTXpNekNMYXJaZXhBZWhzZ3liUkw2U1l5bW9ZU0ZjeG5xV2xibDBBcDRiKzE4a2t5RmVXdWhaRjYvckRPcFBUTnl3NEFpQWhaWjRnSC90WDFDckgzcTVzRjZDeC9zYTRCT2RFYlVKbFZ3eWRiN00yOUNFcHZUL2hkejUzYkV5QkNEYnFsVTE2dXJyb0d2elpuWHBKZ3N5YXQ4YUdSb0t3dTVGajNFc0JidlFuQzNxRHdML2w1bEt5dk9uWDRPUjVDVElnaUh2K1JCVXVJYkRoTkN3MHNjaFVsemhacTRwRGZqYm1ReDg1WGdTUG5kaGNVTkNHd2FFWDM1ckxYd21GWVZEYUNtbkVhVUVXTHZmTDFuUXRSR1JHaVQzTkxlMlhobU54VURnZEx3b2pLMDh2NitnMXBvVmlVUWdFbzJhRWhMcUpVd1IrZkEvQ2MwS0xWWmlWOHhSdW1XcEhFWjFYemFSUzlZbFpmZEErNGQveFNOYlpJVy81OEYxMFJJRVdrK3ltVEZzT3pXTFd4NkFQSGRJRnU3ZlR5Nm8yNmw5WW9NeGxHakg4ZlpJeFM2TitzaHVwNVo3SjIzMzVkd3l0ZVBUYmx0UzljRkhRaXZtbm9IaW4zSWdva0F0VWxRV280b0ZtenV5elg0SFo4ZmcxY2xqNkg0TmE4NHBsanpsd1hVdE5TaDhuaG1uMHR4OVVHYm5CckVVSWFBVmJkVGQ4cFhqQzVBTDZNOFRjUk5neVNRY1AzclVhaGUwbjg3NWg4emZUZkRtOWhoczRINVdJeSsyNUtkby9lWXlhUEdObDdYSHcrdDZTQU9pWG5yQVFtbE9wTmI1QktOTFk2bDhnV3pjZXpRQk8xNllnZjFuMDY2bVlsd1ZkTGNFdk9GVHArREk0VU1xNmFDVUM4V0pPVzBIQmYzL1ZjMnBqMkh3cnpwSEZuQ2VrL2NMZzNHZkZ1cjlzN1hZSjUxTHc4SFJWM2prZzNyNG52Ynd1azVvMThaSzJaOTlrUDk4WS9UK002bDh0eVM4K1MwSUhMZE13TnM3dGdnRHlUeHNXeDJDN2pxcFNTaTQwR2lWb1RlZFNhZjdaMmRuWVc1dVR0M1lzcWxwbGFVOUJkV2ZhNjJwT1JFS2g4ZDhPdGN6V2l5b3p3RlMyejAxZExaV3luNS9NMzRFQnViR0lDb1p1bjYrNnlTV3RDblVMYjJOazJxNkcwbzAwY3IzOWNiK3BvcmdrVFFBTDRMelhaN09MMG9pWFFieUJBUEFUaTFXS3NvY2FSYlFsdXdiZW9IWGNFc1c5MEVmcm9zSXpwZWdlQU5OS3MxUkxmcjdwZ0M4NTU1N1BqczBOSFNSM1FLQnRxZDRIcHgzWStWMjd0ejUwSTRkTzU3OS9ibUJTeDhkZU9aT1NSRFJkd2pLZWFhcjIwcWZ0OE9wN2ltSjNYV2YvZDA1dlZWZk9rQld5UW9iNnpzTzdlclpmcjhzU0ZtZkFIZ0FpbGZNRVJGY3oyWlN3T2FPV21lVFUvRHJzNGQ0NU9PY1JueThUb0lTRmliQnVJUHJycElBM0wxNzl6OVh5eFFNRHc5M0VnQ2ZPdlhDcDc5ejdLZWZxZ3ZGZkQxK1hzbEJWSTdBdHZWOWV6dGlMWU0rSFphTzg2TEdnTTNFZHUvZndaR1hZV3B4RGppL2tFNFc5dXRWdFBoVW1xTjEwZHhOajJTaE9yVlIxVlhJc3F5V21FS2lsS01QcmpZVWNmRUE1Zmt0YlhoWkk0YlRlQzUrNTJsK1hBS0FpM1lKQTEzSGdaR1hJQ1RKRUVBaHEwSk51QStZcG1HcUpRais0bTM3RkFaQWRnSG5IS3ArVS91blNzUzgxS3QzMHM1a3IwK2RnQ1B4UVFpTElRaW8zR3BtRHNSQW5hYmRIL1pWU3J4ZXNBaFV3ZkVac21US2p0QzZpdCtaUEdlMzkwL1lQL1FpcFBQWklQK3MyZVZnVXBvTGxzMVd5Z0JIc1BqK1VxK3Q3RnNpb3NKYlIrRmtjeDdxSk9uaXpHOExnUEhGdWV4eloxNmI1cENQYWtvRWl0TnprbVlGUHhkWUFDb3NPQlNPUlZUS1dFazdWdE1aRUdsUFB0NTZqZ1VIYzkwUHhtV1JlWTIxV3BieDFQVGg2ZlI4anlRRXlwbGRDc1kxTEZTYSt3SXdGWlBBQUZEd2N6TEJjZXlZMVZJTmJvZ3Jjd2tnWkVVUUppRllRaVNLR2hIMHUvcFRzd0p0Mm40d3VERmdPUkRwZnhCRUNRTFNWNlJNaU1IS1I0Sk5RcXlTRFV1TGcxMW55eXRpVDU3UVFncTkwSEtEeHVDU0VET3lZWVdZS0NiQWRDTnVETEJzYVZ3UHo5MzRuNEU3cjNjK2ZpZTU0RmRSLzFBM1RMK1pRazI0M3crdUJiUmoyZXl3NGhYTDU3ZmtnVitDMjdYOFhMQmRZc0ZhdmlxdVJ2cC9MaytDY1FrQWJXalpHVXdBS2k2K1p3VndRUkJLdVArS0dhUDg0RTNMendLV0lpVXJSQ1BJd25QRDUwdHp5eE9Bd2dvb2w1RlEzWnR0MTZlMXp4Y0hENEFDQnl4T041eXByT2E3SXU0Sk5WYXcrMW9UN200SnJnVVV5b0RTaW50ZUFWeVFoTGNjbEpwa3c4RWtJVTVTTGl1V0xzaENTMEtUekJodGFIbTFXSVhmVWpzdnVWeE9UWVRubGJ4YzFJeFF6dW9wTGdCYWs3eWlTRXFoU1g5RlhCVGFJaytubzZoUE0yT2tuNUpiVzF0SHA2YW1McWpHU1haMWRhbmIxN1pHbTA2SUlCaHJJSFphcXF4VVJaalgwb2ZRR0s0ZGljbVI2UlhJdUN2NHVmTGNNUHVyVDFmK253QURBTWgxZGRHTWJlTzlBQUFBQUVsRlRrU3VRbUNDJ1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBwcml2YXRlIGVudjogVGJBdXRoRW52aXJvbm1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZUNoYW5nZUV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8QXV0aENvbm5lY3Rpb25TdGF0ZT4oKTtcclxuICAgIHByaXZhdGUgY3VycmVudENvbm5lY3Rpb25TdGF0ZTogQXV0aENvbm5lY3Rpb25TdGF0ZSA9IHtcclxuICAgICAgICBoYXNCYWNrZW5kQWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBoYXNOZXR3b3JrQ29ubmVjdGlvbjogd2luZG93Lm5hdmlnYXRvci5vbkxpbmVcclxuICAgIH07XHJcbiAgICBwcml2YXRlIG9mZmxpbmVTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIG9ubGluZVN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgaHR0cFN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgc2VydmljZU9wdGlvbnM6IEF1dGhDb25uZWN0aW9uT3B0aW9ucztcclxuXHJcbiAgICBsb2dnZWRPdXQkID0gbmV3IFN1YmplY3QoKTtcclxuICAgIGVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIGdldCByb3V0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdlbnYnKSBlbnY6IFRiQXV0aEVudmlyb25tZW50LCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5lbnYgPSBfLmRlZmF1bHRzKHt9LCBlbnYsIFRiQXV0aFNlcnZpY2UuREVGQVVMVF9FTlYpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmVudicsIHRoaXMuZW52KTtcclxuICAgICAgICB0aGlzLnNlcnZpY2VPcHRpb25zID0gbmV3IEF1dGhDb25uZWN0aW9uT3B0aW9ucyh0aGlzLmdldEJhc2VVcmwoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tOZXR3b3JrU3RhdGUoKTtcclxuICAgICAgICB0aGlzLmNoZWNrQmFja2VuZFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0JhY2tlbmRTdGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5odHRwU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZU9wdGlvbnMuZW5hYmxlSGVhcnRiZWF0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFN1YnNjcmlwdGlvbiA9IHRpbWVyKDAsIHRoaXMuc2VydmljZU9wdGlvbnMuaGVhcnRiZWF0SW50ZXJ2YWwpXHJcbiAgICAgICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZpY2VPcHRpb25zLmhlYXJ0YmVhdFVybCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0cnlXaGVuKGVycm9ycyA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucGlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvZyBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXAodmFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdIdHRwIGVycm9yOicsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29ubmVjdGlvblN0YXRlLmhhc0JhY2tlbmRBY2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXN0YXJ0IGFmdGVyIDUgc2Vjb25kc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXkodGhpcy5zZXJ2aWNlT3B0aW9ucy5oZWFydGJlYXRSZXRyeUludGVydmFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbm5lY3Rpb25TdGF0ZS5oYXNCYWNrZW5kQWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29ubmVjdGlvblN0YXRlLmhhc0JhY2tlbmRBY2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja05ldHdvcmtTdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm9ubGluZVN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3csICdvbmxpbmUnKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDb25uZWN0aW9uU3RhdGUuaGFzTmV0d29ya0Nvbm5lY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQmFja2VuZFN0YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMub2ZmbGluZVN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3csICdvZmZsaW5lJykuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29ubmVjdGlvblN0YXRlLmhhc05ldHdvcmtDb25uZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tCYWNrZW5kU3RhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVtaXRFdmVudCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlRXZlbnRFbWl0dGVyLmVtaXQodGhpcy5jdXJyZW50Q29ubmVjdGlvblN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1vbml0b3IgTmV0d29yayAmIEludGVybmV0IGNvbm5lY3Rpb24gc3RhdHVzIGJ5IHN1YnNjcmliaW5nIHRvIHRoaXMgb2JzZXJ2ZXIuXHJcbiAgICAgKiBJZiB5b3Ugc2V0IFwicmVwb3J0Y3VycmVudENvbm5lY3Rpb25TdGF0ZVwiIHRvIFwiZmFsc2VcIiB0aGVuXHJcbiAgICAgKiBmdW5jdGlvbiB3aWxsIG5vdCByZXBvcnQgY3VycmVudCBzdGF0dXMgb2YgdGhlIGNvbm5lY3Rpb25zIHdoZW4gaW5pdGlhbGx5IHN1YnNjcmliZWQuXHJcbiAgICAgKiBAcGFyYW0gcmVwb3J0Y3VycmVudENvbm5lY3Rpb25TdGF0ZSBSZXBvcnQgY3VycmVudCBzdGF0ZSB3aGVuIGluaXRpYWwgc3Vic2NyaXB0aW9uLiBEZWZhdWx0IGlzIFwidHJ1ZVwiXHJcbiAgICAgKi9cclxuICAgIG1vbml0b3JDb25uZWN0aW9uU3RhdHVzKHJlcG9ydGN1cnJlbnRDb25uZWN0aW9uU3RhdGUgPSB0cnVlKTogT2JzZXJ2YWJsZTxBdXRoQ29ubmVjdGlvblN0YXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9ydGN1cnJlbnRDb25uZWN0aW9uU3RhdGVcclxuICAgICAgICAgICAgPyB0aGlzLnN0YXRlQ2hhbmdlRXZlbnRFbWl0dGVyLnBpcGUoXHJcbiAgICAgICAgICAgICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxyXG4gICAgICAgICAgICAgICAgICBzdGFydFdpdGgodGhpcy5jdXJyZW50Q29ubmVjdGlvblN0YXRlKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlQ2hhbmdlRXZlbnRFbWl0dGVyLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUml0b3JuYSBsYSBiYXNlIHVybCBkZWwgYmFja2VuZCxcclxuICAgICAqIGNhcmljYXRhIGRhIHVuIGZpbGUgZGkgY29uZmlndXJhemlvbmUgY2FyaWNhdG8gZGluYW1pY2FtZW50ZSAoYXNzZXRzL2Vudmlyb25tZW50Lmpzb24pXHJcbiAgICAgKi9cclxuICAgIGdldEJhc2VVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW52LmF1dGgudXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBKV1QsXHJcbiAgICAgICAgYXBwaWQ6IE00LFxyXG4gICAgICAgIHNlY3VyaXR5VmFsdWU6IGp3dEVuY29kZWRcclxuICAgICAgfVxyXG4gICAgKi9cclxuICAgIGdldEF1dGhvcml6YXRpb25IZWFkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBUeXBlOiAnSldUJyxcclxuICAgICAgICAgICAgQXBwSWQ6ICdNNCcsXHJcbiAgICAgICAgICAgIFNlY3VyaXR5VmFsdWU6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KTogUHJvbWlzZTxMb2dpblJlc3BvbnNlPiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2F1dGhTZXJ2aWNlLmxvZ2luIC0gbG9naW5SZXF1ZXN0JywgbG9naW5SZXF1ZXN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0TG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlID8gbG9naW5SZXNwb25zZS5NZXNzYWdlIDogJ0xvZ2luIGVycm9yLi4uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlRGF0YShsb2dpblJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpc1ZhbGlkVG9rZW4oYXV0aHRva2VuID0gJycpIHtcclxuICAgICAgICBpZiAoIWF1dGh0b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0SXNWYWxpZFRva2VuVXJsKCksIG5ldyBJc1ZhbGlkVG9rZW5SZXF1ZXN0KGF1dGh0b2tlbikpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGFwKChqT2JqOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXNWYWxpZFRva2VuIC0gcmVzcG9uc2UnLCBqT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWpPYmouUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpPYmouTWVzc2FnZSA9IGpPYmouTWVzc2FnZSA/IGpPYmouTWVzc2FnZSA6ICdpc1ZhbGlkVG9rZW4gZXJyb3IuLi4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGpPYmouTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0U3Vic0tleXNGb3JBY2NvdW50VXJsKCkgKyB1c2VyKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5Db250ZW50ICYmIHJlcy5Db250ZW50LnN1YnNjcmlwdGlvbnMgPyByZXMuQ29udGVudC5zdWJzY3JpcHRpb25zIDogW107XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXNWYWxpZFRva2VuVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdpc3ZhbGlkdG9rZW4vJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9naW5VcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ2luLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvZ291dFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9nb2ZmLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENoYW5nZVBhc3N3b3JkVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdjaGFuZ2VwYXNzd29yZC8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXNldFBhc3N3b3JkVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdyZXNldHBhc3N3b3JkLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50Lyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ29mZigpIHtcclxuICAgICAgICBjb25zdCBsb2dvZmZSZXF1ZXN0OiBMb2dvZmZSZXF1ZXN0ID0gbmV3IExvZ29mZlJlcXVlc3QodGhpcy5nZXRUb2tlbigpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxMb2dvZmZSZXNwb25zZT4odGhpcy5nZXRMb2dvdXRVcmwoKSwgbG9nb2ZmUmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKGxvZ29mZlJlc3BvbnNlOiBMb2dvZmZSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2dvZmZSZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRPdXQkLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dvZmZSZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhclN0b3JhZ2UoKSB7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3JhZ2VTdWJzY3JpcHRpb25EYXRhKHN1YnNjcmlwdGlvbktleTogc3RyaW5nLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9yYWdlRGF0YShsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcEN1bHR1cmU6IHN0cmluZyA9XHJcbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncyA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncy5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxyXG4gICAgICAgICAgICAgICAgOiBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3M7XHJcbiAgICAgICAgY29uc3QgcmVzcFVpQ3VsdHVyZTogc3RyaW5nID1cclxuICAgICAgICAgICAgbG9naW5SZXNwb25zZS5MYW5ndWFnZSA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2UubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgIDogbG9naW5SZXNwb25zZS5MYW5ndWFnZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5KV1QsIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4pO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIHJlc3BDdWx0dXJlKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCByZXNwVWlDdWx0dXJlKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTLCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLlJvbGVzKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgcmVzcEN1bHR1cmUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCByZXNwVWlDdWx0dXJlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUN1bHR1cmUoY3VsdHVyZTogc3RyaW5nLCB1aUN1bHR1cmU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2NvdW50TmFtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN1YnNjcmlwdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXV0aFNlcnZpY2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXJsO1xyXG4gICAgZ2V0UmVkaXJlY3RVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgucmVkaXJlY3RVcmw7XHJcbiAgICBoYXNTdWJzY3JpcHRpb25TZWxlY3Rpb24gPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnN1YnNjcmlwdGlvblNlbGVjdGlvbjtcclxuICAgIGdldEFwcElkID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmFwcElkO1xyXG4gICAgaXNTZXNzaW9uU3RvcmFnZSA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2U7XHJcbiAgICBnZXRDdXN0b21Mb2dvID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmxvZ287XHJcblxyXG4gICAgc3RvcENoZWNraW5nQ29ubmVjdGlvbigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZmxpbmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgdGhpcy5vbmxpbmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgdGhpcy5odHRwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUYkF1dGhTZXJ2aWNlLm5nT25EZXN0cm95KCknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wQ2hlY2tpbmdDb25uZWN0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuIl19