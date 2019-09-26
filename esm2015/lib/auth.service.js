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
export class TbAuthService {
    /**
     * @param {?} env
     * @param {?} http
     * @param {?} injector
     */
    constructor(env, http, injector) {
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
        () => this.env.auth.url);
        this.getRedirectUrl = (/**
         * @return {?}
         */
        () => this.env.auth.redirectUrl);
        this.hasSubscriptionSelection = (/**
         * @return {?}
         */
        () => this.env.auth.subscriptionSelection);
        this.getAppId = (/**
         * @return {?}
         */
        () => this.env.auth.appId);
        this.isSessionStorage = (/**
         * @return {?}
         */
        () => this.env.auth.sessionStorage);
        this.getCustomLogo = (/**
         * @return {?}
         */
        () => this.env.auth.logo);
        this.env = _.defaults({}, env, TbAuthService.DEFAULT_ENV);
        console.log('this.env', this.env);
        this.serviceOptions = new AuthConnectionOptions(this.getBaseUrl());
        this.checkNetworkState();
        this.checkBackendState();
    }
    /**
     * @return {?}
     */
    get router() {
        return this.injector.get(Router);
    }
    /**
     * @private
     * @return {?}
     */
    checkBackendState() {
        if (this.httpSubscription) {
            this.httpSubscription.unsubscribe();
        }
        if (this.serviceOptions.enableHeartbeat) {
            this.httpSubscription = timer(0, this.serviceOptions.heartbeatInterval)
                .pipe(switchMap((/**
             * @return {?}
             */
            () => this.http.get(this.serviceOptions.heartbeatUrl, { responseType: 'text' }))), retryWhen((/**
             * @param {?} errors
             * @return {?}
             */
            errors => errors.pipe(
            // log error message
            tap((/**
             * @param {?} val
             * @return {?}
             */
            val => {
                console.error('Http error:', val);
                this.currentConnectionState.hasBackendAccess = false;
                this.emitEvent();
            })), 
            // restart after 5 seconds
            delay(this.serviceOptions.heartbeatRetryInterval)))))
                .subscribe((/**
             * @param {?} result
             * @return {?}
             */
            result => {
                this.currentConnectionState.hasBackendAccess = true;
                this.emitEvent();
            }));
        }
        else {
            this.currentConnectionState.hasBackendAccess = false;
            this.emitEvent();
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkNetworkState() {
        this.onlineSubscription = fromEvent(window, 'online').subscribe((/**
         * @return {?}
         */
        () => {
            this.currentConnectionState.hasNetworkConnection = true;
            this.checkBackendState();
            this.emitEvent();
        }));
        this.offlineSubscription = fromEvent(window, 'offline').subscribe((/**
         * @return {?}
         */
        () => {
            this.currentConnectionState.hasNetworkConnection = false;
            this.checkBackendState();
            this.emitEvent();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    emitEvent() {
        this.stateChangeEventEmitter.emit(this.currentConnectionState);
    }
    /**
     * Monitor Network & Internet connection status by subscribing to this observer.
     * If you set "reportcurrentConnectionState" to "false" then
     * function will not report current status of the connections when initially subscribed.
     * @param {?=} reportcurrentConnectionState Report current state when initial subscription. Default is "true"
     * @return {?}
     */
    monitorConnectionStatus(reportcurrentConnectionState = true) {
        return reportcurrentConnectionState
            ? this.stateChangeEventEmitter.pipe(debounceTime(300), startWith(this.currentConnectionState))
            : this.stateChangeEventEmitter.pipe(debounceTime(300));
    }
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     * @return {?}
     */
    getBaseUrl() {
        return this.env.auth.url;
    }
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
    getAuthorizationHeader() {
        return JSON.stringify({
            Type: 'JWT',
            AppId: 'M4',
            SecurityValue: this.getToken()
        });
    }
    /**
     * @param {?} loginRequest
     * @return {?}
     */
    login(loginRequest) {
        // console.log('authService.login - loginRequest', loginRequest);
        return this.http
            .post(this.getLoginUrl(), loginRequest)
            .pipe(map((/**
         * @param {?} loginResponse
         * @return {?}
         */
        (loginResponse) => {
            if (!loginResponse.Result) {
                this.clearStorage();
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                this.errorMessage = loginResponse.Message;
                return loginResponse;
            }
            this.storageData(loginResponse);
            return loginResponse;
        })))
            .toPromise();
    }
    /**
     * @param {?=} authtoken
     * @return {?}
     */
    isValidToken(authtoken = '') {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!TbAuthService} */ function* () {
            if (!authtoken) {
                return of(false);
            }
            return this.http
                .post(this.getIsValidTokenUrl(), new IsValidTokenRequest(authtoken))
                .pipe(tap((/**
             * @param {?} jObj
             * @return {?}
             */
            (jObj) => {
                // console.log('isValidToken - response', jObj);
                if (!jObj.Result) {
                    jObj.Message = jObj.Message ? jObj.Message : 'isValidToken error...';
                    this.clearStorage();
                    this.errorMessage = jObj.Message;
                }
            })))
                .toPromise();
        });
    }
    /**
     * @param {?} user
     * @return {?}
     */
    getCompaniesForUser(user) {
        return this.http.get(this.getSubsKeysForAccountUrl() + user).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (!res || !res.Result)
                return [];
            return res.Content && res.Content.subscriptions ? res.Content.subscriptions : [];
        })));
    }
    /**
     * @return {?}
     */
    getIsValidTokenUrl() {
        return this.getBaseUrl() + 'isvalidtoken/';
    }
    /**
     * @return {?}
     */
    getLoginUrl() {
        return this.getBaseUrl() + 'login/';
    }
    /**
     * @return {?}
     */
    getLogoutUrl() {
        return this.getBaseUrl() + 'logoff/';
    }
    /**
     * @return {?}
     */
    getChangePasswordUrl() {
        return this.getBaseUrl() + 'changepassword/';
    }
    /**
     * @return {?}
     */
    getResetPasswordUrl() {
        return this.getBaseUrl() + 'resetpassword/';
    }
    /**
     * @return {?}
     */
    getSubsKeysForAccountUrl() {
        return this.getBaseUrl() + 'subscriptionskeysforaccount/';
    }
    /**
     * @return {?}
     */
    logoff() {
        /** @type {?} */
        const logoffRequest = new LogoffRequest(this.getToken());
        return this.http
            .post(this.getLogoutUrl(), logoffRequest)
            .pipe(map((/**
         * @param {?} logoffResponse
         * @return {?}
         */
        (logoffResponse) => {
            if (logoffResponse.Result) {
                this.clearStorage();
                this.loggedOut$.next();
            }
            return logoffResponse;
        })))
            .toPromise();
    }
    /**
     * @return {?}
     */
    clearStorage() {
        sessionStorage.removeItem(StorageVars.JWT);
        sessionStorage.removeItem(StorageVars.CULTURE);
        sessionStorage.removeItem(StorageVars.UI_CULTURE);
        sessionStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        localStorage.removeItem(StorageVars.JWT);
        localStorage.removeItem(StorageVars.CULTURE);
        localStorage.removeItem(StorageVars.UI_CULTURE);
        localStorage.removeItem(StorageVars.ACCOUNT_ROLES);
    }
    /**
     * @param {?} subscriptionKey
     * @param {?} subscriptionDescription
     * @return {?}
     */
    storageSubscriptionData(subscriptionKey, subscriptionDescription) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
            sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
        }
        else {
            localStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
            localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
        }
    }
    /**
     * @private
     * @param {?} loginResponse
     * @return {?}
     */
    storageData(loginResponse) {
        /** @type {?} */
        const respCulture = loginResponse.RegionalSettings === undefined || loginResponse.RegionalSettings.length === 0
            ? window.navigator.language
            : loginResponse.RegionalSettings;
        /** @type {?} */
        const respUiCulture = loginResponse.Language === undefined || loginResponse.Language.length === 0
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
    }
    /**
     * @param {?} culture
     * @param {?} uiCulture
     * @return {?}
     */
    saveCulture(culture, uiCulture) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.CULTURE, culture);
            sessionStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
        }
        else {
            localStorage.setItem(StorageVars.CULTURE, culture);
            localStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
        }
    }
    /**
     * @return {?}
     */
    getToken() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.JWT);
        else
            return localStorage.getItem(StorageVars.JWT);
    }
    /**
     * @return {?}
     */
    getAccountName() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.ACCOUNT_NAME);
        else
            return localStorage.getItem(StorageVars.ACCOUNT_NAME);
    }
    /**
     * @return {?}
     */
    getSubscription() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION);
    }
    /**
     * @return {?}
     */
    getSubscriptionDescription() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
    }
    /**
     * @return {?}
     */
    stopCheckingConnection() {
        try {
            this.offlineSubscription.unsubscribe();
            this.onlineSubscription.unsubscribe();
            this.httpSubscription.unsubscribe();
        }
        catch (e) {
            console.error('TbAuthService.ngOnDestroy()');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stopCheckingConnection();
    }
}
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
TbAuthService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] },
    { type: HttpClient },
    { type: Injector }
];
/** @nocollapse */ TbAuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TbAuthService_Factory() { return new TbAuthService(i0.ɵɵinject("env"), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i0.INJECTOR)); }, token: TbAuthService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7QUFNekUsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQWdDdEIsWUFBMkIsR0FBc0IsRUFBVSxJQUFnQixFQUFVLFFBQWtCO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBakIvRiw0QkFBdUIsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQUNsRSwyQkFBc0IsR0FBd0I7WUFDbEQsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixvQkFBb0IsRUFBRSxNQUFNLENB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QUFDO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkM7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7QUExVGMseUJBQVcsR0FBc0I7SUFDNUMsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLE1BQU07UUFDWCxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLEtBQUssRUFBRSxJQUFJO1FBQ1gsV0FBVyxFQUFFLEdBQUc7UUFDaEIsY0FBYyxFQUFFLEtBQUs7UUFDckIsSUFBSTtRQUNBLDRDQUE0QztRQUM1Qyw0eVBBQTR5UDtLQUNuelA7Q0FDSixDQUFDOztZQWZMLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7Ozs0Q0FpQ2dCLE1BQU0sU0FBQyxLQUFLO1lBdkRwQixVQUFVO1lBRFUsUUFBUTs7Ozs7Ozs7SUF5QmpDLDBCQVdFOzs7OztJQUNGLDRCQUErQjs7Ozs7SUFFL0IsZ0RBQTBFOzs7OztJQUMxRSwrQ0FHRTs7Ozs7SUFDRiw0Q0FBMkM7Ozs7O0lBQzNDLDJDQUEwQzs7Ozs7SUFDMUMseUNBQXdDOzs7OztJQUN4Qyx1Q0FBOEM7O0lBRTlDLG1DQUEyQjs7SUFDM0IscUNBQWtCOztJQThRbEIsMENBQW9EOztJQUNwRCx1Q0FBeUQ7O0lBQ3pELGlEQUE4RTs7SUFDOUUsaUNBQTZDOztJQUM3Qyx5Q0FBK0Q7O0lBQy9ELHNDQUFpRDs7Ozs7SUE3UUUsNkJBQXdCOzs7OztJQUFFLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBvZiwgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQsIHRpbWVyLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgbWFwLCBzd2l0Y2hNYXAsIHJldHJ5V2hlbiwgZGVsYXksIGRlYm91bmNlVGltZSwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuL21vZGVscy9zdG9yYWdlLXZhcnMnO1xyXG5cclxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XHJcbmltcG9ydCB7IExvZ29mZlJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dvZmYtcmVxdWVzdCc7XHJcbmltcG9ydCB7IExvZ29mZlJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9nb2ZmLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgSXNWYWxpZFRva2VuUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2lzLXZhbGlkLXRva2VuLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBPcGVyYXRpb25SZXN1bHQgfSBmcm9tICcuL21vZGVscy9vcGVyYXRpb24tcmVzdWx0JztcclxuaW1wb3J0IHsgVGJBdXRoRW52aXJvbm1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRoLWVudmlyb25tZW50JztcclxuaW1wb3J0IHsgQXV0aENvbm5lY3Rpb25PcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1jb25uZWN0aW9uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBBdXRoQ29ubmVjdGlvblN0YXRlIH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1jb25uZWN0aW9uLXN0YXRlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBERUZBVUxUX0VOVjogVGJBdXRoRW52aXJvbm1lbnQgPSB7XHJcbiAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgICB1cmw6ICdhc2RmJyxcclxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgYXBwSWQ6ICdNNCcsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsOiAnLycsXHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9nbzpcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFLQUFBQUJHQ0FZQUFBQkwwcCt5QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUEraHBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFF5SURjNUxqRTJNRGt5TkN3Z01qQXhOeTh3Tnk4eE15MHdNVG93Tmpvek9TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Ykc1ek9tUmpQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012Wld4bGJXVnVkSE12TVM0eEx5SWdlRzF3VFUwNlQzSnBaMmx1WVd4RWIyTjFiV1Z1ZEVsRVBTSjFkV2xrT2pWRU1qQTRPVEkwT1ROQ1JrUkNNVEU1TVRSQk9EVTVNRVF6TVRVd09FTTRJaUI0YlhCTlRUcEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPamM0TVVSRVJFUkdSRGxGUVRFeFJUbEJOVUU0UmpVNU5ESXpNek0wTVRsR0lpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qYzRNVVJFUkVSRlJEbEZRVEV4UlRsQk5VRTRSalU1TkRJek16TTBNVGxHSWlCNGJYQTZRM0psWVhSdmNsUnZiMnc5SWtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEUXlBb1YybHVaRzkzY3lraVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEb3pNekJHTUVaRU1UWkZSRGN4TVVVNE9ETkNNa1pDTWpSRVEwSkVOMFEwUXlJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvek16QkdNRVpFTWpaRlJEY3hNVVU0T0ROQ01rWkNNalJFUTBKRU4wUTBReUl2UGlBOFpHTTZkR2wwYkdVK0lEeHlaR1k2UVd4MFBpQThjbVJtT214cElIaHRiRHBzWVc1blBTSjRMV1JsWm1GMWJIUWlQa3h2WjI4Z1QwczhMM0prWmpwc2FUNGdQQzl5WkdZNlFXeDBQaUE4TDJSak9uUnBkR3hsUGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUGt1akZBWUFBQkw5U1VSQlZIamE3RjE3ZEJ4bmRiL3oyTlh1Nm1sSmxpWEhsbTNKVnVSQVFtaERsTFFwaEJUc3hJR1FRSWdiVEVoNG5KNzBjTnFlMEpTZUhrNUt5SEdoaFVQYUVwclQvbEZxSUJBdzVBbkJCZ2NUa2lhQmtKQ0dZRHQrU0piMXNxMkh0WHJzYXJXdjZiMnpJMmYybTI5MloyWm5aa2VudXVkY3IvWHQ3amN6dTcrNTkvN3V2ZCszUXQ4ejB3UGppL2xOb2dDZ0FBQStHTVJzM0tuUWZJbWNBbmR1akg3NTN0N1kzNTA5YythdWtlSGhyNHFpS0FobDNpYzRlTTUwUGtXQmNEaDhyUGVpaS9va1dZNWJlTXZiVVgvTEdaOUEzWUk2QS83TEYxRC9nUjM4NGNEQnIzM3hsVy8rZFYwbzZtVE9pMUZUcU1lOVBubHhDWHlsUkhENW9EU2ZpTnFmeUYxQ2YyZlM2YTJJQmtFQTUrZGhkdU9VbXpDYnpYYmxjcm1XQ2k5cE5lcmxWUUFmWGZZMkQrYTlGYlhCandzUTllQ3pBalRGcFFQVFBKSUFPZTNQbkZmZmpnWEp1WFJaSDY0Q0FIdFFMM041VGdMZW42RXUrQUpBdXdBVFhBU0g0aERjQ2dSU3JrT04rbnpNYTFGbEQ2NWpFK3BpVlFBbytQVEpLUldDMTg1OGl1NTVEOEc3RHZVZFBnUHdKZy9tdk1QUEN4Q0RaRzJFQ281cE5UNzArQWI3a0k4ZjEzb1BBTitOZWcxcTNuY0FLajRSRUtlRW90S2J3aWZMN29WTE5CTWlIekVQeUVmWXE1aThKQUFGeGxVRk9RNFRBblkrT3FGVXpCLzRkS3diWEo0dmhMckw3dzlNWkw5WXdTY1FLRDZBc2xRczZPRzljWk1QMzFzcjZydGNudk5QVUh1ckNrQ2YwaDYyUWVQbStmbmdpcTl6KzNQbHlOV29qUzdQK2NscXVBeFBQaWlsaXFBT2dGeXM2WEppdjJ0UXJ3ODBBQlViUUJNc0FrdnhDZlNLLzUvcCt6eWN2MTVqcW03S0J6MndxTzRDVUhBaDdxTEhEUDZ6Z0NSL1BxZEFLZzlaZFZ4UnNsU1g5UXBFVmJDaVhscVRQMFp0ZDluSmZMeGE3c0x6bElHZ2dTNkZnS3NSQmVpSWlMQU90VTRXb0s5WjdzU250NGZDNFhWeUtBUzVYSTdRQ0tJa0dVQWpCQTlrcFlUeWN4ZWlIbDBHN0pkWSsyV0JBYUNiblM5WnNuWUl2RTB4Q2E1ZkU0WnRiV0hvclplZ01YVCtDTlJkc3IrOW93TmFXbHNobVVoQWZIb2E0dkU0WkRNWmtCQ0licnBvRDBINk93MXdOYnJQZGJzSEFLelJTSTVlK2xIWGd2TXk0TzJjajBieWdVanhBZWpXbDBUdFZzMGhFVDdUSFlYYk9pT3dLbFI2NWhCYXdNYW1KbFhiRnhmaDdPblRNRGs1V1dDdVF1Vm5KWGdMeE9mcGZvUGlIT0NOcUY5eitUaGtxVFl5WTQraS9rVUY4ZVRObkhGcUs0djdBVUJQVUQ2SHB1L3lwaEE4MXRjQWY0VUFMQWMrdzIxZVV3T2RHemZDNWkxYlFIWE4rYnhyck5zakt6aU91bzhadXhKMWc4dkgrUURudUw5QWpWUVFxM1p3eHArQVFvL2o4Z1BnTElMdi9laHVIMzVIUGZUVVZlWkNHeG9ib2FlM0Y2TFJLSUl3WnlBMUxLTzJBa1NQR0RGZDZJK1lNUUxGbjdwOGpHdVpzUmMwRit3MGxqY2pILzhWT0Jac1JlWVJmTzlkSFlZSEw2MkhtTVMzTmYySkhQeGdkQkYySDAzQ3Q0Y1hEK0hRNTFNTEMwZlM2YlNwTmR6YzA0T1BFY2dyK1pMSlpLdnBIdytFNHEvZm9JNHg0emU3ZUl5M2FzcGFxb3pEK2Foc2VEVm4vSFhVRjVjZEMxNUVMMGxrNDk4dXJvTXdCOWF2eExQd3dNQUNQRCtWVWEwa3BXR3VYMU56NHJiMU5mZE5qSSszVEU1TWJHMUdJa0tFaEVDbmwzQTREQnU3dXVENDBUZE1ZN2dxczJENkhDbE9PSWo2VWQzNFZhaHRtcXQwSTdXanYweTZZdytBODg3bGowQ2g4WUNWUFZDTlpvUktHV1pPVWVEZXJiWFFXbU9Fd2dQOUMvQ2hsMlpoMzltMGVtWDFzZ0NOcUZHcGNBTWd5UWhUQ2dhQkNFY1BINGJwNlhPR09lcnE2cUJ0VFR0a3N4blZIWlBtTVRZa3BSeGlPUmZyUXo4Z3lTT2NJTjh0Tjh5bVgxNUdIZFV4Ynp0Q3dMdU5NNTVFM1Z2Vk5Jd1RTYUkxdTZZMUROdmJRb2Judm9TdTlxc0lRQUlkcVpuVklxWkxhWmNzQXZIa2lYNVF1cEZGTnhjdjFWalQzZzRMeVNTSW9xZ3FnUytUeWNBaXNtWjZWTzhvVWZUVDliTHlET29VYWd2amhoK3VjTjdOV3NwS0x6K3U0TkxlRFlYZVAxYWVRaDFaVmdBc3VFUUJQdDVwSkdLUGpLWGhYOUR0TmlBTEZpMFNBbG9YUjc1czZPU2dTajZpMFRkYjNtUlpWdU5CVmdoOGlmbDVtRDUzRG1iaWNaVTFTOVVCSXFVdWZnbUYwdGFTdkJNS1phNUtWc3hkeDdqTHZBWVdwM0tIeWZnM1RLemxnMURvd05ITGhKYit5VllFUUt0NU1mWjE5SGNlLzBtcnNaOElWN1VVVzcvcGpBTC9kQ3lwVmo5RVcyQXVnSkJjOHVqd0NCZHdyRkFPc1duVktsV1RhQ0ZQajQ1QWZEck9yYWo0SUk4d0FLUXZqbXEzajFVdzUvdVp2dzlyNmtUYWdWOHFQS0dsZEZoSmF5VHJBNXpudm9YNlhFVXhvSjMrUHdJSTFYRXB6NWZCeDZpa3huRndWWE1JSWt6RzVkR3hSUmhNNWhDQXpuSjBCSjdaMlJsSUpCSzJMaWdXaTBIM2xoNVkxOW1weG9iNitOQW5vUzl4bmhtN3NZTDVMb0JDL1Zjdit5cXdQTGRvc1NrcjN3YnpoVWhmTDBGa3ZIUEJlcXVIV0FJSzRhNW9rdUU5YldGNGU2TU1heU9pQ3JBNjJRampuNDJuSVNTV2hsdTV0dnc4bWxoeXE3VzF0Yll2ak9KRnNveW5UcDRFYW5NUS9MT0ZwMUdmUmQyaEd5TUxTQmVSY0RBZmtaZ1lKLzNpbEhSK3pNVEtsWXBUZncyRkJmbHN0emRaeGMraXpua0NRRUVMTmhKbzhjakszYlU1YW5DMVBLRTB5MEFpandBc3ZjOUIyU1dnK0g2SzZkYXRYMTlJOWFSU01JK3hYZ29mOCtpaUpZd0pLVTZzYjJoUTQwTldtbHRhVkZjK2RHb1FZMExKVHl2NEJBTkFXakZISGNmN0hjekY5djROYWd6WWlWd0cvQ1VEVDBQcFhSRHltcnRsMzB0VmxQZENvUnpvSGdDWExGOU9pL0grZG5OTUJaOWswWWpNWkFwNVByR01kUzBmSDRoQUNlcEJ0R0pwWkxvVTMrV3lXVU04R2dxSDFXYUdqbzYxNkxxTGo3cTZyUTNtNStiZzNOU1VxODBOWmVSblVOamFJc0xFY1hZQjJLS1JHTDNzQitkcmRtODNDZm4vMjhKN2Y0QzZtekppelBqSEtnR2dXTXJ5VVhMNUg3Zld3dDFicklPUGhHTEVOTHJQVWowRWRtTFBxY2xKRlVRVXp4R0laRlJKcDFrRTVlblJVVGgyOUlpYWtqRUVVV2hCNVpCc3dlYTZKb09hMjlMTHRRNXlkZ1MrWnBQMGkxMGhKczdidldIRTRvMHhCc1o2TjhsN3REalZQUUNTVUZudEx6ZEY0STROL00rTXJDT1YxYWpDOGNaY1RuWFRTN0tZVjFUTDZkYnFOVW5MK3dtbWxsSlFYWEJpUGdIOXg0K3JnQ3pLSTZDRmJHNXBSYmZ0MjNKWEhsQzZVUHRzem5FakovWGhsSFdTQlY3TkdmOHVoelNaQ2M5UzFwb3daT2N1T0lYZjAyVklOdTdlWWx4MlN1eDN6MUFLOW80V1dDNEJUVVlZdHlNYjZhMlRvQTlqeFdSV01hM1pla2tGeUJvbWt3a1lIUjZHRFpzMkZmc3lkTkdUNCtOZTl3WHFoWm9UdmdpRjVZNUxza01qS0Zha1ZvdXY5RUtsdmxrWGMzOTBSejVrWTQ2ZlE2SDVvWnZEaGg5MHpRTG0wZFhkMVIwenNOaXB0QUs3WHA2RnZ6K2NnQ1B6T2JXc1J1Q2pMM1VFVWZzVFpMNzNIRW5BL2YwTDNIcXdIOHMySlVsVzR6MktGL1ZDWkNVU2pmaVpscUZtMU5lWXNSc1lRSmFTUHdKanE5U1REczlsSy9DWGNaSTFmZDNHUE1TV3Y4TVp2d0wxSWxjQVNISGZXK3BsZVBmcTRzK0pMTjJuWDV1SGc1TVphQW9KRUJFTGIxN2FhbzFhL21xbFFybk5MUDFpeC9JNHRWS0Y5RTBlNHVlSzY4bFU2cU9xaXBMMzFRMy9pQU9FU3l5K2w2Mzl6bW9XeUluc012RjIzM0F3Rjdsc3RnT0gyTjFPVndCSTVPRmRyU0ZnVTN2ZkcxbUVBeE5wRlh4dWdNZXBIYkxTOTBkZzR5V3d3elUxNExNOHlUbGRLd3VXNkVTM00yUFUrM2ZXd1RrUUU3K1ZNejdCdVVHc1duWmVHSEVMT0NqdGl1eVhTNm03U3h0bEErRjRlQ1FGRVJNcTdOWmVMVmFXZnBicUIxUjBMMktKeUZLTTZMUDhIdlVOVGw2dlhIMklHZysyTUdPUE96eUhhelFDeEV1clREdWNrOWV3MnF1RkRaVlp3REFpOElKSThmQW94bmNua1hDRUJmZmNwV0p4SGpmZDlsTDg1Mk54anU0Q3RtcEJpOWJMRmJqWjJpL2xsZzQ0UEFlenJ1ZHZWWEJkVDVsWTQ0OVdiQUhKOXRVd2xpNk9BU0F4WTlFbCt1ZzVBQlJLVGh0amZlb2w5SnFKVzRnREpRN0EyUHVJWGRqK0N1cUF6ZU1TYUtsWjlUck9jOVM5L1ZJRjEwVHg2Q01tY1d1RFl3Q3ExUTg2ODF3eFJHcVI2b2JFOHNDeENpeXZBVUFzdnI3ZVdHOVBMYVFBQk4vN1kzamdLZFdjUUczM2J5a0RZaXRDVyt6ZXJLVnpXTm5qZ2gzNEptZU10dmpZVmhFQUtZbE1MbGN2NjZJaVhGQWpxVGxBdDRCbDU3VzIwamNJdnBBc3c2cFZ4UVVFcWdrdkxDeUE2RDhBeVJLeEZRU3FxVzR5ZWYwT3pVcWV2NS9BV2ZXRExORnROcXlYWFhsWnU3a3Fjc09pMFhvQXZCb3ZEdUNwNCtXR2pyRGErZXlpbDdRTU5EdVFJYUMxdGE4eE1ONjUyVm0xcmx3RkM3akVobGxtZXIzRitJK0l6Qkhic1pVZ1VOZnpGWnluSG5mSXBnMVFNWWtqcVh0bmJVVWs1SmRUR2NneWFQamtoZ2hjMGlERG5Fc2c5S0pLUXN4M1ZYTXp0SGNZcjM5eVlzS3Y3ZGw0OGo5Z2JIWG5iYkZCVnBIZGRuY2ZPRmdrTkRBeitqWkJFQ0lXWGFkVDJRdkd5a3dkMk9oLzVBQVE0UEJjRG40K1hweHJwTzAwL3VOdGRkQWRreUNlVVZTQU9vR2lvbE8zd0VDSlo3SjhyYXRYdzZidWJzTk9Dak16TXpDTGFyWmV4QWVoc2d5YlJMNlNZeW1vWVNGY3hucVdsYmwwQXA0YisxOGtreUZlV3VoWkY2L3JET3BQVE55dzRBaUFoWlo0Z0gvdFgxQ3JIM3E1c0Y2Q3gvc2E0Qk9kRWJVSmxWd3lkYjdNMjlDRXB2VC9oZHo1M2JFeUJDRGJxbFUxNnVycm9HdnpablhwSmdzeWF0OGFHUm9Ld3U1RmozRXNCYnZRbkMzcUR3TC9sNWxLeXZPblg0T1I1Q1RJZ2lIditSQlV1SWJEaE5DdzBzY2hVbHpoWnE0cERmamJtUXg4NVhnU1BuZGhjVU5DR3dhRVgzNXJMWHdtRllWRGFDbW5FYVVFV0x2ZkwxblF0UkdSR2lUM05MZTJYaG1OeFVEZ2RMd29qSzA4djYrZzFwb1ZpVVFnRW8yYUVoTHFKVXdSK2ZBL0NjMEtMVlppVjh4UnVtV3BIRVoxWHphUlM5WWxaZmRBKzRkL3hTTmJaSVcvNThGMTBSSUVXayt5bVRGc096V0xXeDZBUEhkSUZ1N2ZUeTZvMjZsOVlvTXhsR2pIOGZaSXhTNk4rc2h1cDVaN0oyMzM1ZHd5dGVQVGJsdFM5Y0ZIUWl2bW5vSGluM0lnb2tBdFVsUVdvNG9GbXp1eXpYNEhaOGZnMWNsajZINE5hODRwbGp6bHdYVXROU2g4bmhtbjB0eDlVR2JuQnJFVUlhQVZiZFRkOHBYakM1QUw2TThUY1JOZ3lTUWNQM3JVYWhlMG44NzVoOHpmVGZEbTloaHM0SDVXSXkrMjVLZG8vZVl5YVBHTmw3WEh3K3Q2U0FPaVhuckFRbWxPcE5iNUJLTkxZNmw4Z1d6Y2V6UUJPMTZZZ2YxbjA2Nm1ZbHdWZExjRXZPRlRwK0RJNFVNcTZhQ1VDOFdKT1cwSEJmMy9WYzJwajJId3J6cEhGbkNlay9jTGczR2ZGdXI5czdYWUo1MUx3OEhSVjNqa2czcjRudmJ3dWs1bzE4WksyWjk5a1A5OFkvVCtNNmw4dHlTOCtTMElITGRNd05zN3RnZ0R5VHhzV3gyQzdqcXBTU2k0MEdpVm9UZWRTYWY3WjJkbllXNXVUdDNZc3FscGxhVTlCZFdmYTYycE9SRUtoOGQ4T3RjeldpeW96d0ZTMnowMWRMWld5bjUvTTM0RUJ1YkdJQ29adW42KzZ5U1d0Q25VTGIyTmsycTZHMG8wMGNyMzljYitwb3Jna1RRQUw0THpYWjdPTDBvaVhRYnlCQVBBVGkxV0tzb2NhUmJRbHV3YmVvSFhjRXNXOTBFZnJvc0l6cGVnZUFOTktzMVJMZnI3cGdDODU1NTdQanMwTkhTUjNRS0J0cWQ0SHB4M1krVjI3dHo1MEk0ZE81NzkvYm1CU3g4ZGVPWk9TUkRSZHdqS2VhYXIyMHFmdDhPcDdpbUozWFdmL2QwNXZWVmZPa0JXeVFvYjZ6c083ZXJaZnI4c1NGbWZBSGdBaWxmTUVSRmN6MlpTd09hT1dtZVRVL0RyczRkNDVPT2NSbnk4VG9JU0ZpYkJ1SVBycnBJQTNMMTc5ejlYeXhRTUR3OTNFZ0NmT3ZYQ3A3OXo3S2VmcWd2RmZEMStYc2xCVkk3QXR2VjllenRpTFlNK0haYU84NkxHZ00zRWR1L2Z3WkdYWVdweERqaS9rRTRXOXV0VnRQaFVtcU4xMGR4TmoyU2hPclZSMVZYSXNxeVdtRUtpbEtNUHJqWVVjZkVBNWZrdGJYaFpJNGJUZUM1KzUybCtYQUtBaTNZSkExM0hnWkdYSUNUSkVFQWhxMEpOdUErWXBtR3FKUWorNG0zN0ZBWkFkZ0huSEtwK1UvdW5Tc1M4MUt0MzBzNWtyMCtkZ0NQeFFRaUxJUWlvM0dwbURzUkFuYWJkSC9aVlNyeGVzQWhVd2ZFWnNtVEtqdEM2aXQrWlBHZTM5MC9ZUC9RaXBQUFpJUCtzMmVWZ1Vwb0xsczFXeWdCSHNQaitVcSt0N0ZzaW9zSmJSK0ZrY3g3cUpPbml6RzhMZ1BIRnVleHpaMTZiNXBDUGFrb0VpdE56a21ZRlB4ZFlBQ29zT0JTT1JWVEtXRWs3VnRNWkVHbFBQdDU2amdVSGM5MFB4bVdSZVkyMVdwYngxUFRoNmZSOGp5UUV5cGxkQ3NZMUxGU2Erd0l3RlpQQUFGRHdjekxCY2V5WTFWSU5ib2dyY3drZ1pFVVFKaUZZUWlTS0doSDB1L3BUc3dKdDJuNHd1REZnT1JEcGZ4QkVDUUxTVjZSTWlNSEtSNEpOUXF5U0RVdUxnMTFueXl0aVQ1N1FRZ3E5MEhLRHh1Q1NFRE95WVlXWUtDYkFkQ051RExCc2FWd1B6OTM0bjRFN3IzYytmaWU1NEZkUi8xQTNUTCtaUWsyNDN3K3VCYlJqMmV5dzRoWEw1N2ZrZ1YrQzI3WDhYTEJkWXNGYXZpcXVSdnAvTGsrQ2NRa0FiV2paR1V3QUtpNitad1Z3UVJCS3VQK0tHYVA4NEUzTHp3S1dJaVVyUkNQSXduUEQ1MHR6eXhPQXdnb29sNUZRM1p0dDE2ZTF6eGNIRDRBQ0J5eE9ONXlwck9hN0l1NEpOVmF3KzFvVDdtNEpyZ1VVeW9EU2ludGVBVnlRaExjY2xKcGt3OEVrSVU1U0xpdVdMc2hDUzBLVHpCaHRhSG0xV0lYZlVqc3Z1VnhPVFlUbmxieGMxSXhRenVvcExnQmFrN3lpU0VxaFNYOUZYQlRhSWsrbm82aFBNMk9rbjVKYlcxdEhwNmFtTHFqR1NYWjFkYW5iMTdaR20wNklJQmhySUhaYXFxeFVSWmpYMG9mUUdLNGRpY21SNlJYSXVDdjR1ZkxjTVB1clQxZitud0FEQU1oMWRkR01iZU85QUFBQUFFbEZUa1N1UW1DQydcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBlbnY6IFRiQXV0aEVudmlyb25tZW50O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGVDaGFuZ2VFdmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEF1dGhDb25uZWN0aW9uU3RhdGU+KCk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRDb25uZWN0aW9uU3RhdGU6IEF1dGhDb25uZWN0aW9uU3RhdGUgPSB7XHJcbiAgICAgICAgaGFzQmFja2VuZEFjY2VzczogZmFsc2UsXHJcbiAgICAgICAgaGFzTmV0d29ya0Nvbm5lY3Rpb246IHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBvZmZsaW5lU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBvbmxpbmVTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIGh0dHBTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIHNlcnZpY2VPcHRpb25zOiBBdXRoQ29ubmVjdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgbG9nZ2VkT3V0JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICBlcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBnZXQgcm91dGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgnZW52JykgZW52OiBUYkF1dGhFbnZpcm9ubWVudCwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgICAgIHRoaXMuZW52ID0gXy5kZWZhdWx0cyh7fSwgZW52LCBUYkF1dGhTZXJ2aWNlLkRFRkFVTFRfRU5WKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5lbnYnLCB0aGlzLmVudik7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlT3B0aW9ucyA9IG5ldyBBdXRoQ29ubmVjdGlvbk9wdGlvbnModGhpcy5nZXRCYXNlVXJsKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrTmV0d29ya1N0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0JhY2tlbmRTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tCYWNrZW5kU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaHR0cFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmh0dHBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2VPcHRpb25zLmVuYWJsZUhlYXJ0YmVhdCkge1xyXG4gICAgICAgICAgICB0aGlzLmh0dHBTdWJzY3JpcHRpb24gPSB0aW1lcigwLCB0aGlzLnNlcnZpY2VPcHRpb25zLmhlYXJ0YmVhdEludGVydmFsKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2aWNlT3B0aW9ucy5oZWFydGJlYXRVcmwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHJ5V2hlbihlcnJvcnMgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnBpcGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2cgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwKHZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSHR0cCBlcnJvcjonLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbm5lY3Rpb25TdGF0ZS5oYXNCYWNrZW5kQWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzdGFydCBhZnRlciA1IHNlY29uZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5KHRoaXMuc2VydmljZU9wdGlvbnMuaGVhcnRiZWF0UmV0cnlJbnRlcnZhbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDb25uZWN0aW9uU3RhdGUuaGFzQmFja2VuZEFjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvbm5lY3Rpb25TdGF0ZS5oYXNCYWNrZW5kQWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tOZXR3b3JrU3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbmxpbmVTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LCAnb25saW5lJykuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29ubmVjdGlvblN0YXRlLmhhc05ldHdvcmtDb25uZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0JhY2tlbmRTdGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm9mZmxpbmVTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LCAnb2ZmbGluZScpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvbm5lY3Rpb25TdGF0ZS5oYXNOZXR3b3JrQ29ubmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQmFja2VuZFN0YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbWl0RXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZUV2ZW50RW1pdHRlci5lbWl0KHRoaXMuY3VycmVudENvbm5lY3Rpb25TdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNb25pdG9yIE5ldHdvcmsgJiBJbnRlcm5ldCBjb25uZWN0aW9uIHN0YXR1cyBieSBzdWJzY3JpYmluZyB0byB0aGlzIG9ic2VydmVyLlxyXG4gICAgICogSWYgeW91IHNldCBcInJlcG9ydGN1cnJlbnRDb25uZWN0aW9uU3RhdGVcIiB0byBcImZhbHNlXCIgdGhlblxyXG4gICAgICogZnVuY3Rpb24gd2lsbCBub3QgcmVwb3J0IGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBjb25uZWN0aW9ucyB3aGVuIGluaXRpYWxseSBzdWJzY3JpYmVkLlxyXG4gICAgICogQHBhcmFtIHJlcG9ydGN1cnJlbnRDb25uZWN0aW9uU3RhdGUgUmVwb3J0IGN1cnJlbnQgc3RhdGUgd2hlbiBpbml0aWFsIHN1YnNjcmlwdGlvbi4gRGVmYXVsdCBpcyBcInRydWVcIlxyXG4gICAgICovXHJcbiAgICBtb25pdG9yQ29ubmVjdGlvblN0YXR1cyhyZXBvcnRjdXJyZW50Q29ubmVjdGlvblN0YXRlID0gdHJ1ZSk6IE9ic2VydmFibGU8QXV0aENvbm5lY3Rpb25TdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiByZXBvcnRjdXJyZW50Q29ubmVjdGlvblN0YXRlXHJcbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZUNoYW5nZUV2ZW50RW1pdHRlci5waXBlKFxyXG4gICAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcclxuICAgICAgICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMuY3VycmVudENvbm5lY3Rpb25TdGF0ZSlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZUNoYW5nZUV2ZW50RW1pdHRlci5waXBlKGRlYm91bmNlVGltZSgzMDApKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJpdG9ybmEgbGEgYmFzZSB1cmwgZGVsIGJhY2tlbmQsXHJcbiAgICAgKiBjYXJpY2F0YSBkYSB1biBmaWxlIGRpIGNvbmZpZ3VyYXppb25lIGNhcmljYXRvIGRpbmFtaWNhbWVudGUgKGFzc2V0cy9lbnZpcm9ubWVudC5qc29uKVxyXG4gICAgICovXHJcbiAgICBnZXRCYXNlVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudi5hdXRoLnVybDtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogSldULFxyXG4gICAgICAgIGFwcGlkOiBNNCxcclxuICAgICAgICBzZWN1cml0eVZhbHVlOiBqd3RFbmNvZGVkXHJcbiAgICAgIH1cclxuICAgICovXHJcbiAgICBnZXRBdXRob3JpemF0aW9uSGVhZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgVHlwZTogJ0pXVCcsXHJcbiAgICAgICAgICAgIEFwcElkOiAnTTQnLFxyXG4gICAgICAgICAgICBTZWN1cml0eVZhbHVlOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRoU2VydmljZS5sb2dpbiAtIGxvZ2luUmVxdWVzdCcsIGxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxMb2dpblJlc3BvbnNlPih0aGlzLmdldExvZ2luVXJsKCksIGxvZ2luUmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZURhdGEobG9naW5SZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaXNWYWxpZFRva2VuKGF1dGh0b2tlbiA9ICcnKSB7XHJcbiAgICAgICAgaWYgKCFhdXRodG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldElzVmFsaWRUb2tlblVybCgpLCBuZXcgSXNWYWxpZFRva2VuUmVxdWVzdChhdXRodG9rZW4pKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcCgoak9iajogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzVmFsaWRUb2tlbiAtIHJlc3BvbnNlJywgak9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqT2JqLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqT2JqLk1lc3NhZ2UgPSBqT2JqLk1lc3NhZ2UgPyBqT2JqLk1lc3NhZ2UgOiAnaXNWYWxpZFRva2VuIGVycm9yLi4uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBqT2JqLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbXBhbmllc0ZvclVzZXIodXNlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpICsgdXNlcikucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuQ29udGVudCAmJiByZXMuQ29udGVudC5zdWJzY3JpcHRpb25zID8gcmVzLkNvbnRlbnQuc3Vic2NyaXB0aW9ucyA6IFtdO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldElzVmFsaWRUb2tlblVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnaXN2YWxpZHRva2VuLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvZ2luVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2dvdXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ29mZi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDaGFuZ2VQYXNzd29yZFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnY2hhbmdlcGFzc3dvcmQvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVzZXRQYXNzd29yZFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAncmVzZXRwYXNzd29yZC8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdWJzS2V5c0ZvckFjY291bnRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3N1YnNjcmlwdGlvbnNrZXlzZm9yYWNjb3VudC8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dvZmYoKSB7XHJcbiAgICAgICAgY29uc3QgbG9nb2ZmUmVxdWVzdDogTG9nb2ZmUmVxdWVzdCA9IG5ldyBMb2dvZmZSZXF1ZXN0KHRoaXMuZ2V0VG9rZW4oKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8TG9nb2ZmUmVzcG9uc2U+KHRoaXMuZ2V0TG9nb3V0VXJsKCksIGxvZ29mZlJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChsb2dvZmZSZXNwb25zZTogTG9nb2ZmUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9nb2ZmUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkT3V0JC5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9nb2ZmUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9yYWdlU3Vic2NyaXB0aW9uRGF0YShzdWJzY3JpcHRpb25LZXk6IHN0cmluZywgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcmFnZURhdGEobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgIDogbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzO1xyXG4gICAgICAgIGNvbnN0IHJlc3BVaUN1bHR1cmU6IHN0cmluZyA9XHJcbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2UgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLkxhbmd1YWdlLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgcmVzcFVpQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCwgbG9naW5SZXNwb25zZS5Kd3RUb2tlbik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIHJlc3BDdWx0dXJlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgcmVzcFVpQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMsIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UuUm9sZXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVDdWx0dXJlKGN1bHR1cmU6IHN0cmluZywgdWlDdWx0dXJlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIGN1bHR1cmUpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNjb3VudE5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWJzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWJzY3JpcHRpb25EZXNjcmlwdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF1dGhTZXJ2aWNlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVybDtcclxuICAgIGdldFJlZGlyZWN0VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnJlZGlyZWN0VXJsO1xyXG4gICAgaGFzU3Vic2NyaXB0aW9uU2VsZWN0aW9uID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zdWJzY3JpcHRpb25TZWxlY3Rpb247XHJcbiAgICBnZXRBcHBJZCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5hcHBJZDtcclxuICAgIGlzU2Vzc2lvblN0b3JhZ2UgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlO1xyXG4gICAgZ2V0Q3VzdG9tTG9nbyA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5sb2dvO1xyXG5cclxuICAgIHN0b3BDaGVja2luZ0Nvbm5lY3Rpb24oKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5vZmZsaW5lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25saW5lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGJBdXRoU2VydmljZS5uZ09uRGVzdHJveSgpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RvcENoZWNraW5nQ29ubmVjdGlvbigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==