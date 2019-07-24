/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment_ from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
/** @type {?} */
const moment = moment_;
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { StorageVars } from './models/storage-vars';
import { LogoffRequest } from './models/logoff-request';
import { IsValidTokenRequest } from './models/is-valid-token-request';
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
    }
    // ---------------------------------------------------------------------------------------------
    /**
     * @param {?} loginRequest
     * @return {?}
     */
    login(loginRequest) {
        // console.log('authService.login - loginRequest', loginRequest);
        this.redirectUrl = this.env.auth.redirectUrl ? this.env.auth.redirectUrl : '/';
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
    // ---------------------------------------------------------------------------------------------
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
    // ---------------------------------------------------------------------------------------------
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
    //getRedirectUrl(): string {
    //    return this.redirectUrl;
    //}
    //setRedirectUrl(url: string): void {
    //    this.redirectUrl = url;
    //}
    /**
     * @return {?}
     */
    getAccountName() {
        localStorage.getItem(StorageVars.ACCOUNT_NAME);
    }
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     * @return {?}
     */
    getBaseUrl() {
        if (this.loginUrl)
            return this.loginUrl;
        this.loginUrl = this.env.auth.url;
        return this.loginUrl;
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
        logoffRequest.token = localStorage.getItem(StorageVars.JWT);
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
     * @param {?=} culture
     * @param {?=} uiCulture
     * @return {?}
     */
    saveCulture(culture = '', uiCulture = '') {
        localStorage.setItem(StorageVars.CULTURE, culture);
        localStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
    }
    /**
     * @return {?}
     */
    clearStorage() {
        localStorage.removeItem(StorageVars.JWT);
        localStorage.removeItem(StorageVars.CULTURE);
        localStorage.removeItem(StorageVars.UI_CULTURE);
        localStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        localStorage.removeItem(StorageVars.ACCOUNT_NAME); // ?
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
        this.saveCulture(respCulture, respUiCulture);
        localStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
        /** @type {?} */
        let roles = JSON.stringify(loginResponse.Roles);
        localStorage.setItem(StorageVars.ACCOUNT_ROLES, roles);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7Ozs7O01BQzVCLE1BQU0sR0FBRyxPQUFPO0FBRXRCLE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBTXRFLE1BQU0sT0FBTyxhQUFhOzs7Ozs7O0lBS3RCLFlBQW1DLEdBQUcsRUFBVSxJQUFnQixFQUFVLE9BQW9CLEVBQVMsTUFBYztRQUFsRixRQUFHLEdBQUgsR0FBRyxDQUFBO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQzs7Ozs7O0lBR2xILEtBQUssQ0FBQyxZQUEwQjtRQUNuQyxpRUFBaUU7UUFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcs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LEVBQUUsTUFBTTthQUNyQjs7Ozs0Q0FNZ0IsTUFBTSxTQUFDLEtBQUs7WUExQnBCLFVBQVU7WUFBRSxXQUFXO1lBQ3ZCLE1BQU07Ozs7O0lBcUJYLGlDQUF3Qjs7SUFDeEIscUNBQTRCOztJQUM1QixvQ0FBMkI7Ozs7O0lBRWYsNEJBQTBCOzs7OztJQUFFLDZCQUF3Qjs7Ozs7SUFBRSxnQ0FBNEI7O0lBQUUsK0JBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XHJcblxyXG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9naW5SZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgTG9nb2ZmUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ29mZi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9nb2ZmUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dvZmYtcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBJc1ZhbGlkVG9rZW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvaXMtdmFsaWQtdG9rZW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IE9wZXJhdGlvblJlc3VsdCB9IGZyb20gJy4vbW9kZWxzL29wZXJhdGlvbi1yZXN1bHQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBsb2dpblVybDogc3RyaW5nO1xyXG4gICAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlZGlyZWN0VXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnYsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBoYW5kbGVyOiBIdHRwQmFja2VuZCwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHVibGljIGxvZ2luKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KTogUHJvbWlzZTxMb2dpblJlc3BvbnNlPiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2F1dGhTZXJ2aWNlLmxvZ2luIC0gbG9naW5SZXF1ZXN0JywgbG9naW5SZXF1ZXN0KTtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gdGhpcy5lbnYuYXV0aC5yZWRpcmVjdFVybCA/IHRoaXMuZW52LmF1dGgucmVkaXJlY3RVcmwgOiAnLyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxMb2dpblJlc3BvbnNlPih0aGlzLmdldExvZ2luVXJsKCksIGxvZ2luUmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZURhdGEobG9naW5SZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBpc1ZhbGlkVG9rZW4oYXV0aHRva2VuID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghYXV0aHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRJc1ZhbGlkVG9rZW5VcmwoKSwgbmV3IElzVmFsaWRUb2tlblJlcXVlc3QoYXV0aHRva2VuKSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAoKGpPYmo6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4gLSByZXNwb25zZScsIGpPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghak9iai5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgak9iai5NZXNzYWdlID0gak9iai5NZXNzYWdlID8gak9iai5NZXNzYWdlIDogJ2lzVmFsaWRUb2tlbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gak9iai5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0U3Vic0tleXNGb3JBY2NvdW50VXJsKCkgKyB1c2VyKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5Db250ZW50ICYmIHJlcy5Db250ZW50LnN1YnNjcmlwdGlvbnMgPyByZXMuQ29udGVudC5zdWJzY3JpcHRpb25zIDogW107XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldFJlZGlyZWN0VXJsKCk6IHN0cmluZyB7XHJcbiAgICAvLyAgICByZXR1cm4gdGhpcy5yZWRpcmVjdFVybDtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vc2V0UmVkaXJlY3RVcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vICAgIHRoaXMucmVkaXJlY3RVcmwgPSB1cmw7XHJcbiAgICAvL31cclxuXHJcbiAgICBnZXRBY2NvdW50TmFtZSgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUml0b3JuYSBsYSBiYXNlIHVybCBkZWwgYmFja2VuZCxcclxuICAgICAqIGNhcmljYXRhIGRhIHVuIGZpbGUgZGkgY29uZmlndXJhemlvbmUgY2FyaWNhdG8gZGluYW1pY2FtZW50ZSAoYXNzZXRzL2Vudmlyb25tZW50Lmpzb24pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCYXNlVXJsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvZ2luVXJsKSByZXR1cm4gdGhpcy5sb2dpblVybDtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpblVybCA9IHRoaXMuZW52LmF1dGgudXJsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2dpblVybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXNWYWxpZFRva2VuVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdpc3ZhbGlkdG9rZW4vJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9naW5VcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ2luLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvZ291dFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9nb2ZmLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENoYW5nZVBhc3N3b3JkVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdjaGFuZ2VwYXNzd29yZC8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXNldFBhc3N3b3JkVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdyZXNldHBhc3N3b3JkLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50Lyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ29mZigpIHtcclxuICAgICAgICBjb25zdCBsb2dvZmZSZXF1ZXN0OiBMb2dvZmZSZXF1ZXN0ID0gbmV3IExvZ29mZlJlcXVlc3QoKTtcclxuICAgICAgICBsb2dvZmZSZXF1ZXN0LnRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxMb2dvZmZSZXNwb25zZT4odGhpcy5nZXRMb2dvdXRVcmwoKSwgbG9nb2ZmUmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKGxvZ29mZlJlc3BvbnNlOiBMb2dvZmZSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2dvZmZSZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dvZmZSZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlQ3VsdHVyZShjdWx0dXJlID0gJycsIHVpQ3VsdHVyZSA9ICcnKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTsgLy8gP1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBwcml2YXRlIHN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCByZXNwQ3VsdHVyZTogc3RyaW5nID1cclxuICAgICAgICAgICAgbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncztcclxuICAgICAgICBjb25zdCByZXNwVWlDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLkxhbmd1YWdlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5MYW5ndWFnZS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxyXG4gICAgICAgICAgICAgICAgOiBsb2dpblJlc3BvbnNlLkxhbmd1YWdlO1xyXG4gICAgICAgIHRoaXMuc2F2ZUN1bHR1cmUocmVzcEN1bHR1cmUsIHJlc3BVaUN1bHR1cmUpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5KV1QsIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4pO1xyXG4gICAgICAgIGxldCByb2xlcyA9IEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UuUm9sZXMpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMsIHJvbGVzKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==