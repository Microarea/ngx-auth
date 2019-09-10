/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { StorageVars } from './models/storage-vars';
import { LogoffRequest } from './models/logoff-request';
import { IsValidTokenRequest } from './models/is-valid-token-request';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
export class TbAuthService {
    /**
     * @param {?} env
     * @param {?} http
     * @param {?} handler
     * @param {?} router
     */
    constructor(env, http, handler, router) {
        this.env = env;
        this.http = http;
        this.handler = handler;
        this.router = router;
        this.loginUrl = this.env.auth.url;
        this.redirectUrl = this.env.auth.redirectUrl ? this.env.auth.redirectUrl : '/';
    }
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     * @return {?}
     */
    getBaseUrl() {
        return this.loginUrl;
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
    isValidToken(authtoken = null) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        const logoffRequest = new LogoffRequest();
        logoffRequest.token = this.getToken();
        return this.http
            .post(this.getLogoutUrl(), logoffRequest)
            .pipe(map((/**
         * @param {?} logoffResponse
         * @return {?}
         */
        (logoffResponse) => {
            if (logoffResponse.Result) {
                this.clearStorage();
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
        if (this.env.auth.session) {
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
     * @return {?}
     */
    getToken() {
        if (this.env.auth.session)
            return sessionStorage.getItem(StorageVars.JWT);
        else
            return localStorage.getItem(StorageVars.JWT);
    }
    /**
     * @return {?}
     */
    getAccountName() {
        if (this.env.auth.session)
            return sessionStorage.getItem(StorageVars.ACCOUNT_NAME);
        else
            return localStorage.getItem(StorageVars.ACCOUNT_NAME);
    }
}
TbAuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TbAuthService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] },
    { type: HttpClient },
    { type: HttpBackend },
    { type: Router }
];
/** @nocollapse */ TbAuthService.ngInjectableDef = i0.defineInjectable({ factory: function TbAuthService_Factory() { return new TbAuthService(i0.inject("env"), i0.inject(i1.HttpClient), i0.inject(i1.HttpBackend), i0.inject(i2.Router)); }, token: TbAuthService, providedIn: "root" });
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
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.handler;
    /** @type {?} */
    TbAuthService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUlwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFNdEUsTUFBTSxPQUFPLGFBQWE7Ozs7Ozs7SUFLdEIsWUFBbUMsR0FBRyxFQUFVLElBQWdCLEVBQVUsT0FBb0IsRUFBUyxNQUFjO1FBQWxGLFFBQUcsR0FBSCxHQUFHLENBQUE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ25GLENBQUM7Ozs7OztJ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QztZQUM1RCxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN4RjtJQUNMLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ1gsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDckUsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRU0sY0FBYztRQUNqQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDOztZQUM5RSxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9ELENBQUM7OztZQTVKSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7NENBTWdCLE1BQU0sU0FBQyxLQUFLO1lBdkJwQixVQUFVO1lBQUUsV0FBVztZQUN2QixNQUFNOzs7OztJQWtCWCxpQ0FBd0I7O0lBQ3hCLHFDQUE0Qjs7SUFDNUIsb0NBQTJCOzs7OztJQUVmLDRCQUEwQjs7Ozs7SUFBRSw2QkFBd0I7Ozs7O0lBQUUsZ0NBQTRCOztJQUFFLCtCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuL21vZGVscy9zdG9yYWdlLXZhcnMnO1xyXG5cclxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XHJcbmltcG9ydCB7IExvZ29mZlJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dvZmYtcmVxdWVzdCc7XHJcbmltcG9ydCB7IExvZ29mZlJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9nb2ZmLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgSXNWYWxpZFRva2VuUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2lzLXZhbGlkLXRva2VuLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBPcGVyYXRpb25SZXN1bHQgfSBmcm9tICcuL21vZGVscy9vcGVyYXRpb24tcmVzdWx0JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoU2VydmljZSB7XHJcbiAgICBwdWJsaWMgbG9naW5Vcmw6IHN0cmluZztcclxuICAgIHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWRpcmVjdFVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52LCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgaGFuZGxlcjogSHR0cEJhY2tlbmQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMubG9naW5VcmwgPSB0aGlzLmVudi5hdXRoLnVybDtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gdGhpcy5lbnYuYXV0aC5yZWRpcmVjdFVybCA/IHRoaXMuZW52LmF1dGgucmVkaXJlY3RVcmwgOiAnLyc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSaXRvcm5hIGxhIGJhc2UgdXJsIGRlbCBiYWNrZW5kLFxyXG4gICAgICogY2FyaWNhdGEgZGEgdW4gZmlsZSBkaSBjb25maWd1cmF6aW9uZSBjYXJpY2F0byBkaW5hbWljYW1lbnRlIChhc3NldHMvZW52aXJvbm1lbnQuanNvbilcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEJhc2VVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW5Vcmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KTogUHJvbWlzZTxMb2dpblJlc3BvbnNlPiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2F1dGhTZXJ2aWNlLmxvZ2luIC0gbG9naW5SZXF1ZXN0JywgbG9naW5SZXF1ZXN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0TG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlID8gbG9naW5SZXNwb25zZS5NZXNzYWdlIDogJ0xvZ2luIGVycm9yLi4uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlRGF0YShsb2dpblJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpc1ZhbGlkVG9rZW4oYXV0aHRva2VuID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghYXV0aHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRJc1ZhbGlkVG9rZW5VcmwoKSwgbmV3IElzVmFsaWRUb2tlblJlcXVlc3QoYXV0aHRva2VuKSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAoKGpPYmo6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4gLSByZXNwb25zZScsIGpPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghak9iai5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgak9iai5NZXNzYWdlID0gak9iai5NZXNzYWdlID8gak9iai5NZXNzYWdlIDogJ2lzVmFsaWRUb2tlbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gak9iai5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb21wYW5pZXNGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRTdWJzS2V5c0ZvckFjY291bnRVcmwoKSArIHVzZXIpLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLkNvbnRlbnQgJiYgcmVzLkNvbnRlbnQuc3Vic2NyaXB0aW9ucyA/IHJlcy5Db250ZW50LnN1YnNjcmlwdGlvbnMgOiBbXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJc1ZhbGlkVG9rZW5VcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2lzdmFsaWR0b2tlbi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2dpblVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9nb3V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dvZmYvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2NoYW5nZXBhc3N3b3JkLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlc2V0UGFzc3dvcmRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3Jlc2V0cGFzc3dvcmQvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3Vic0tleXNGb3JBY2NvdW50VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdzdWJzY3JpcHRpb25za2V5c2ZvcmFjY291bnQvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb2ZmKCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ29mZlJlcXVlc3Q6IExvZ29mZlJlcXVlc3QgPSBuZXcgTG9nb2ZmUmVxdWVzdCgpO1xyXG4gICAgICAgIGxvZ29mZlJlcXVlc3QudG9rZW4gPSB0aGlzLmdldFRva2VuKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8TG9nb2ZmUmVzcG9uc2U+KHRoaXMuZ2V0TG9nb3V0VXJsKCksIGxvZ29mZlJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChsb2dvZmZSZXNwb25zZTogTG9nb2ZmUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9nb2ZmUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9nb2ZmUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCByZXNwQ3VsdHVyZTogc3RyaW5nID1cclxuICAgICAgICAgICAgbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncztcclxuICAgICAgICBjb25zdCByZXNwVWlDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLkxhbmd1YWdlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5MYW5ndWFnZS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxyXG4gICAgICAgICAgICAgICAgOiBsb2dpblJlc3BvbnNlLkxhbmd1YWdlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgcmVzcFVpQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCwgbG9naW5SZXNwb25zZS5Kd3RUb2tlbik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIHJlc3BDdWx0dXJlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgcmVzcFVpQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMsIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UuUm9sZXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRva2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb24pIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWNjb3VudE5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvbikgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==