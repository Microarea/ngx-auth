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
            const authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
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
                    jObj.Message = jObj.Message ? jObj.Message : 'Login error...';
                    // sessionStorage.removeItem(SessionStorageVars.JWT);
                    // sessionStorage.removeItem(SessionStorageVars.CULTURE);
                    // sessionStorage.removeItem(SessionStorageVars.UI_CULTURE);
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
            /** @type {?} */
            const respCulture = loginResponse.Culture === undefined || loginResponse.Culture.length === 0
                ? window.navigator.language
                : loginResponse.Culture;
            /** @type {?} */
            const respUiCulture = loginResponse.UICulture === undefined || loginResponse.UICulture.length === 0
                ? window.navigator.language
                : loginResponse.UICulture;
            this.saveCulture(respCulture, respUiCulture);
            if (!loginResponse.Result) {
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                sessionStorage.removeItem(SessionStorageVars.JWT);
                this.errorMessage = loginResponse.Message;
                return loginResponse;
            }
            sessionStorage.setItem(SessionStorageVars.JWT, loginResponse.JwtToken);
            return loginResponse;
        })));
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
        localStorage.setItem(SessionStorageVars.CULTURE, culture);
        localStorage.setItem(SessionStorageVars.UI_CULTURE, uiCulture);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsRUFBRSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFTdkQsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUt0QixZQUFtQyxHQUFHLEVBQVUsSUFBZ0IsRUFBUyxNQUFjO1FBQXBELFFBQUcsR0FBSCxHQUFHLENBQUE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZoRixnQkFBVyxHQUFHLEdBQUcsQ0FBQztJQUVpRSxDQUFDOzs7OztJQUVyRixZQUFZLENBQUMsaUJBQWlDLElBQUk7OztrQkFDOUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDO1lBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDL0IsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEI7WUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJO2lCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUNyRSxJQUFJLENBQ0QsR0FBRzs7OztZQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFFOUQscURBQXFEO29CQUNyRCx5REFBeUQ7b0JBQ3pELDREQUE0RDtvQkFFNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNwQztZQUNMLENBQUMsRUFBQyxDQUNMO2lCQUNBLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7S0FBQTs7Ozs7SUFFRCxLQUFLLENBQUMsWUFBMEI7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUN4RCxHQUFHOzs7O1FBQUMsQ0FBQyxhQUE0QixFQUFFLEVBQUU7O2tCQUMzQixXQUFXLEdBQ2IsYUFBYSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDckUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUTtnQkFDM0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPOztrQkFDekIsYUFBYSxHQUNmLGFBQWEsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ3pFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVE7Z0JBQzNCLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUztZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUU3QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsYUFBYSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDekYsY0FBYyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO2dCQUMxQyxPQUFPLGFBQWEsQ0FBQzthQUN4QjtZQUVELGNBQWMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RSxPQUFPLGFBQWEsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQzs7OztJQUVNLGtCQUFrQjtRQUNyQixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxRQUFRLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVNLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEdBQVc7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBTU0sVUFBVTtRQUNiLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFbEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSxNQUFNLEtBQUksQ0FBQzs7Ozs7O0lBRVgsV0FBVyxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUUsU0FBUyxHQUFHLEVBQUU7UUFDM0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBcEdKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7Ozs0Q0FNZ0IsTUFBTSxTQUFDLEtBQUs7WUFwQnBCLFVBQVU7WUFDVixNQUFNOzs7OztJQWVYLGlDQUF3Qjs7SUFDeEIscUNBQTRCOztJQUM1QixvQ0FBeUI7Ozs7O0lBRWIsNEJBQTBCOzs7OztJQUFFLDZCQUF3Qjs7SUFBRSwrQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNlc3Npb25TdG9yYWdlVmFycyB9IGZyb20gJy4vc2Vzc2lvbi1zdG9yYWdlJztcblxuaW1wb3J0IHsgQXV0b2xvZ2luVG9rZW4gfSBmcm9tICcuL21vZGVscy9hdXRvbG9naW4tdG9rZW4ubW9kZWwnO1xuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRiQXV0aFNlcnZpY2Uge1xuICAgIHB1YmxpYyBsb2dpblVybDogc3RyaW5nO1xuICAgIHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBwdWJsaWMgcmVkaXJlY3RVcmwgPSAnLyc7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdlbnYnKSBwcml2YXRlIGVudiwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgICBhc3luYyBpc1ZhbGlkVG9rZW4oYXV0b2xvZ2luVG9rZW46IEF1dG9sb2dpblRva2VuID0gbnVsbCkge1xuICAgICAgICBjb25zdCBhdXRodG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNlc3Npb25TdG9yYWdlVmFycy5KV1QpO1xuICAgICAgICBjb25zb2xlLmxvZygnaXNWYWxpZFRva2VuIC0gYXV0aHRva2VuJywgYXV0aHRva2VuKTtcbiAgICAgICAgaWYgKCFhdXRodG9rZW4gJiYgIWF1dG9sb2dpblRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLnBvc3QodGhpcy5nZXRJc1ZhbGlkVG9rZW5VcmwoKSwgYXV0b2xvZ2luVG9rZW4gPyBhdXRvbG9naW5Ub2tlbiA6IHt9KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKChqT2JqOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lzVmFsaWRUb2tlbiAtIHJlc3BvbnNlJywgak9iaik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghak9iai5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpPYmouTWVzc2FnZSA9IGpPYmouTWVzc2FnZSA/IGpPYmouTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU2Vzc2lvblN0b3JhZ2VWYXJzLkpXVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFNlc3Npb25TdG9yYWdlVmFycy5DVUxUVVJFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU2Vzc2lvblN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGpPYmouTWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgbG9naW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBPYnNlcnZhYmxlPExvZ2luUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuZ2V0TG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KS5waXBlKFxuICAgICAgICAgICAgbWFwKChsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcEN1bHR1cmU6IHN0cmluZyA9XG4gICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuQ3VsdHVyZSA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuQ3VsdHVyZS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2dpblJlc3BvbnNlLkN1bHR1cmU7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcFVpQ3VsdHVyZTogc3RyaW5nID1cbiAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5VSUN1bHR1cmUgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLlVJQ3VsdHVyZS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2dpblJlc3BvbnNlLlVJQ3VsdHVyZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVDdWx0dXJlKHJlc3BDdWx0dXJlLCByZXNwVWlDdWx0dXJlKTtcblxuICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlID8gbG9naW5SZXNwb25zZS5NZXNzYWdlIDogJ0xvZ2luIGVycm9yLi4uJztcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTZXNzaW9uU3RvcmFnZVZhcnMuSldUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU2Vzc2lvblN0b3JhZ2VWYXJzLkpXVCwgbG9naW5SZXNwb25zZS5Kd3RUb2tlbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJc1ZhbGlkVG9rZW5VcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICd0b2tlbi8nO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2dpblVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3Rva2Vucy8nO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9nb3V0VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9nb3V0Lyc7XG4gICAgfVxuXG4gICAgZ2V0UmVkaXJlY3RVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkaXJlY3RVcmw7XG4gICAgfVxuXG4gICAgc2V0UmVkaXJlY3RVcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFVybCA9IHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSaXRvcm5hIGxhIGJhc2UgdXJsIGRlbCBiYWNrZW5kLFxuICAgICAqIGNhcmljYXRhIGRhIHVuIGZpbGUgZGkgY29uZmlndXJhemlvbmUgY2FyaWNhdG8gZGluYW1pY2FtZW50ZSAoYXNzZXRzL2Vudmlyb25tZW50Lmpzb24pXG4gICAgICovXG4gICAgcHVibGljIGdldEJhc2VVcmwoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ2luVXJsKSByZXR1cm4gdGhpcy5sb2dpblVybDtcblxuICAgICAgICB0aGlzLmxvZ2luVXJsID0gdGhpcy5lbnYuYXV0aC51cmw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW5Vcmw7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ29mZigpIHt9XG5cbiAgICBwdWJsaWMgc2F2ZUN1bHR1cmUoY3VsdHVyZSA9ICcnLCB1aUN1bHR1cmUgPSAnJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTZXNzaW9uU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNlc3Npb25TdG9yYWdlVmFycy5VSV9DVUxUVVJFLCB1aUN1bHR1cmUpO1xuICAgIH1cbn1cbiJdfQ==