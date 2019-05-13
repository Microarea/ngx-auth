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
const moment = moment_;
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { StorageVars } from './models/storage-vars';
export class TbAuthService {
    /**
     * @param {?} env
     * @param {?} http
     * @param {?} router
     */
    constructor(env, http, router) {
        this.env = env;
        this.http = http;
        this.router = router;
        this.redirectUrl = '/';
    }
    /**
     * @param {?=} autologinToken
     * @return {?}
     */
    isValidToken(autologinToken = null) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const authtoken = localStorage.getItem(StorageVars.JWT);
            console.log('isValidToken - authtoken', authtoken);
            if (!authtoken && !autologinToken) {
                return of(false);
            }
            return this.http
                .post(this.getIsValidTokenUrl(), autologinToken ? autologinToken : {})
                .pipe(tap((/**
             * @param {?} jObj
             * @return {?}
             */
            (jObj) => {
                console.log('isValidToken - response', jObj);
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
     * @param {?} loginRequest
     * @return {?}
     */
    login(loginRequest) {
        return this.http.post(this.getLoginUrl(), loginRequest).pipe(map((/**
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
        })));
    }
    /**
     * @private
     * @param {?} loginResponse
     * @return {?}
     */
    storageData(loginResponse) {
        /** @type {?} */
        const respCulture = loginResponse.Culture === undefined || loginResponse.Culture.length === 0 ? window.navigator.language : loginResponse.Culture;
        /** @type {?} */
        const respUiCulture = loginResponse.UICulture === undefined || loginResponse.UICulture.length === 0
            ? window.navigator.language
            : loginResponse.UICulture;
        this.saveCulture(respCulture, respUiCulture);
        localStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
        /** @type {?} */
        const exp = loginResponse.Exp ? moment(loginResponse.Exp) : moment().add(1, 'day');
        localStorage.setItem(StorageVars.EXP, JSON.stringify(exp.valueOf()));
    }
    /**
     * @return {?}
     */
    getIsValidTokenUrl() {
        return this.getBaseUrl() + 'token/';
    }
    /**
     * @return {?}
     */
    getLoginUrl() {
        return this.getBaseUrl() + 'tokens/';
        return this.getBaseUrl() + 'login/';
    }
    /**
     * @return {?}
     */
    getLogoutUrl() {
        return this.getBaseUrl() + 'logout/';
    }
    /**
     * @return {?}
     */
    getRedirectUrl() {
        return this.redirectUrl;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    setRedirectUrl(url) {
        this.redirectUrl = url;
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
    logoff() { }
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
        localStorage.removeItem(StorageVars.EXP);
        localStorage.removeItem(StorageVars.CULTURE);
        localStorage.removeItem(StorageVars.UI_CULTURE);
    }
    /**
     * @return {?}
     */
    getExpiration() {
        /** @type {?} */
        const expiration = localStorage.getItem(StorageVars.EXP);
        /** @type {?} */
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
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
    { type: Router }
];
/** @nocollapse */ TbAuthService.ngInjectableDef = i0.defineInjectable({ factory: function TbAuthService_Factory() { return new TbAuthService(i0.inject("env"), i0.inject(i1.HttpClient), i0.inject(i2.Router)); }, token: TbAuthService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7Ozs7TUFDNUIsTUFBTSxHQUFHLE9BQU87QUFFdEIsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVNwRCxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBS3RCLFlBQW1DLEdBQUcsRUFBVSxJQUFnQixFQUFTLE1BQWM7UUFBcEQsUUFBRyxHQUFILEdBQUcsQ0FBQTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRmhGLGdCQUFXLEdBQUcsR0FBRyxDQUFDO0lBRWlFLENBQUM7Ozs7O0lBRXJGLFlBQVksQ0FBQyxpQkFBaUMsSUFBSTs7O2tCQUM5QyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDL0IsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEI7WUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJO2lCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUNyRSxJQUFJLENBQ0QsR0FBRzs7OztZQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztvQkFFckUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUVwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ3BDO1lBQ0wsQ0FBQyxFQUFDLENBQ0w7aUJBQ0EsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQztLQUFBOzs7OztJQUVELEtBQUssQ0FBQyxZQUEwQjtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQ3hELEdBQUc7Ozs7UUFBQyxDQUFDLGFBQTRCLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixhQUFhLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO2dCQUN6RixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7Z0JBQzFDLE9BQU8sYUFBYSxDQUFDO2FBQ3hCO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUVoQyxPQUFPLGFBQWEsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLGFBQTRCOztjQUN0QyxXQUFXLEdBQ2IsYUFBYSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU87O2NBQzNILGFBQWEsR0FDZixhQUFhLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ3pFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDM0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRTdDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7O2NBRXhELEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztRQUNsRixZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFTSxrQkFBa0I7UUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLFFBQVEsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxHQUFXO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQU1NLFVBQVU7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXhDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRWxDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7O0lBRU0sTUFBTSxLQUFJLENBQUM7Ozs7OztJQUVYLFdBQVcsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFO1FBQzNDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuRCxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVNLFlBQVk7UUFDZixZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsYUFBYTs7Y0FDSCxVQUFVLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDOztjQUNsRCxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDeEMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBckhKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7Ozs0Q0FNZ0IsTUFBTSxTQUFDLEtBQUs7WUF2QnBCLFVBQVU7WUFDVixNQUFNOzs7OztJQWtCWCxpQ0FBd0I7O0lBQ3hCLHFDQUE0Qjs7SUFDNUIsb0NBQXlCOzs7OztJQUViLDRCQUEwQjs7Ozs7SUFBRSw2QkFBd0I7O0lBQUUsK0JBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuY29uc3QgbW9tZW50ID0gbW9tZW50XztcblxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XG5cbmltcG9ydCB7IEF1dG9sb2dpblRva2VuIH0gZnJvbSAnLi9tb2RlbHMvYXV0b2xvZ2luLXRva2VuLm1vZGVsJztcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xuaW1wb3J0IHsgTG9naW5SZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUYkF1dGhTZXJ2aWNlIHtcbiAgICBwdWJsaWMgbG9naW5Vcmw6IHN0cmluZztcbiAgICBwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgcHVibGljIHJlZGlyZWN0VXJsID0gJy8nO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnYsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gICAgYXN5bmMgaXNWYWxpZFRva2VuKGF1dG9sb2dpblRva2VuOiBBdXRvbG9naW5Ub2tlbiA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgYXV0aHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2lzVmFsaWRUb2tlbiAtIGF1dGh0b2tlbicsIGF1dGh0b2tlbik7XG4gICAgICAgIGlmICghYXV0aHRva2VuICYmICFhdXRvbG9naW5Ub2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5wb3N0KHRoaXMuZ2V0SXNWYWxpZFRva2VuVXJsKCksIGF1dG9sb2dpblRva2VuID8gYXV0b2xvZ2luVG9rZW4gOiB7fSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCgoak9iajogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4gLSByZXNwb25zZScsIGpPYmopO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWpPYmouUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqT2JqLk1lc3NhZ2UgPSBqT2JqLk1lc3NhZ2UgPyBqT2JqLk1lc3NhZ2UgOiAnaXNWYWxpZFRva2VuIGVycm9yLi4uJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBqT2JqLk1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGxvZ2luKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxMb2dpblJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmdldExvZ2luVXJsKCksIGxvZ2luUmVxdWVzdCkucGlwZShcbiAgICAgICAgICAgIG1hcCgobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlID8gbG9naW5SZXNwb25zZS5NZXNzYWdlIDogJ0xvZ2luIGVycm9yLi4uJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZURhdGEobG9naW5SZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9yYWdlRGF0YShsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHJlc3BDdWx0dXJlOiBzdHJpbmcgPVxuICAgICAgICAgICAgbG9naW5SZXNwb25zZS5DdWx0dXJlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5DdWx0dXJlLmxlbmd0aCA9PT0gMCA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgOiBsb2dpblJlc3BvbnNlLkN1bHR1cmU7XG4gICAgICAgIGNvbnN0IHJlc3BVaUN1bHR1cmU6IHN0cmluZyA9XG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLlVJQ3VsdHVyZSA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuVUlDdWx0dXJlLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxuICAgICAgICAgICAgICAgIDogbG9naW5SZXNwb25zZS5VSUN1bHR1cmU7XG4gICAgICAgIHRoaXMuc2F2ZUN1bHR1cmUocmVzcEN1bHR1cmUsIHJlc3BVaUN1bHR1cmUpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCwgbG9naW5SZXNwb25zZS5Kd3RUb2tlbik7XG5cbiAgICAgICAgY29uc3QgZXhwID0gbG9naW5SZXNwb25zZS5FeHAgPyBtb21lbnQobG9naW5SZXNwb25zZS5FeHApIDogbW9tZW50KCkuYWRkKDEsICdkYXknKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuRVhQLCBKU09OLnN0cmluZ2lmeShleHAudmFsdWVPZigpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldElzVmFsaWRUb2tlblVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3Rva2VuLyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvZ2luVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAndG9rZW5zLyc7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2dvdXRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dvdXQvJztcbiAgICB9XG5cbiAgICBnZXRSZWRpcmVjdFVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRpcmVjdFVybDtcbiAgICB9XG5cbiAgICBzZXRSZWRpcmVjdFVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJpdG9ybmEgbGEgYmFzZSB1cmwgZGVsIGJhY2tlbmQsXG4gICAgICogY2FyaWNhdGEgZGEgdW4gZmlsZSBkaSBjb25maWd1cmF6aW9uZSBjYXJpY2F0byBkaW5hbWljYW1lbnRlIChhc3NldHMvZW52aXJvbm1lbnQuanNvbilcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QmFzZVVybCgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9naW5VcmwpIHJldHVybiB0aGlzLmxvZ2luVXJsO1xuXG4gICAgICAgIHRoaXMubG9naW5VcmwgPSB0aGlzLmVudi5hdXRoLnVybDtcblxuICAgICAgICByZXR1cm4gdGhpcy5sb2dpblVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb2ZmKCkge31cblxuICAgIHB1YmxpYyBzYXZlQ3VsdHVyZShjdWx0dXJlID0gJycsIHVpQ3VsdHVyZSA9ICcnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIGN1bHR1cmUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCB1aUN1bHR1cmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclN0b3JhZ2UoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkVYUCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcbiAgICB9XG5cbiAgICBnZXRFeHBpcmF0aW9uKCkge1xuICAgICAgICBjb25zdCBleHBpcmF0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuRVhQKTtcbiAgICAgICAgY29uc3QgZXhwaXJlc0F0ID0gSlNPTi5wYXJzZShleHBpcmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIG1vbWVudChleHBpcmVzQXQpO1xuICAgIH1cbn1cbiJdfQ==