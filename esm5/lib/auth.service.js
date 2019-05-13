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
                authtoken = localStorage.getItem(StorageVars.JWT);
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
            if (!loginResponse.Result) {
                _this.clearStorage();
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                _this.errorMessage = loginResponse.Message;
                return loginResponse;
            }
            _this.storageData(loginResponse);
            return loginResponse;
        })));
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
        var respCulture = loginResponse.Culture === undefined || loginResponse.Culture.length === 0 ? window.navigator.language : loginResponse.Culture;
        /** @type {?} */
        var respUiCulture = loginResponse.UICulture === undefined || loginResponse.UICulture.length === 0
            ? window.navigator.language
            : loginResponse.UICulture;
        this.saveCulture(respCulture, respUiCulture);
        localStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
        /** @type {?} */
        var exp = loginResponse.Exp ? moment(loginResponse.Exp) : moment().add(1, 'day');
        localStorage.setItem(StorageVars.EXP, JSON.stringify(exp.valueOf()));
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
    TbAuthService.prototype.getExpiration = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var expiration = localStorage.getItem(StorageVars.EXP);
        /** @type {?} */
        var expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7Ozs7SUFDNUIsTUFBTSxHQUFHLE9BQU87QUFFdEIsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU1wRDtJQVFJLHVCQUFtQyxHQUFHLEVBQVUsSUFBZ0IsRUFBUyxNQUFjO1FBQXBELFFBQUcsR0FBSCxHQUFHLENBQUE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZoRixnQkFBVyxHQUFHLEdBQUcsQ0FBQztJQUVpRSxDQUFDOzs7OztJQUVyRixvQ0FBWTs7OztJQUFsQixVQUFtQixjQUFxQztRQUFyQywrQkFBQSxFQUFBLHFCQUFxQzs7Ozs7Z0JBQzlDLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQy9CLHNCQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBQztpQkFDcEI7Z0JBRUQsc0JBQU8sSUFBSSxDQUFDLElBQUk7eUJBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7eUJBQ3JFLElBQUksQ0FDRCxHQUFHOzs7O29CQUFDLFVBQUMsSUFBUzt3QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTs0QkFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDOzRCQUVyRSxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7NEJBRXBCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDcEM7b0JBQ0wsQ0FBQyxFQUFDLENBQ0w7eUJBQ0EsU0FBUyxFQUFFLEVBQUM7OztLQUNwQjs7Ozs7SUFFRCw2QkFBSzs7OztJQUFMLFVBQU0sWUFBMEI7UUFBaEMsaUJBZUM7UUFkRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQ3hELEdBQUc7Ozs7UUFBQyxVQUFDLGFBQTRCO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO2dCQUN2QixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLGFBQWEsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3pGLEtBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztnQkFDMUMsT0FBTyxhQUFhLENBQUM7YUFDeEI7WUFFRCxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRWhDLE9BQU8sYUFBYSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUNMLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFFTyxtQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsYUFBNEI7O1lBQ3RDLFdBQVcsR0FDYixhQUFhLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTzs7WUFDM0gsYUFBYSxHQUNmLGFBQWEsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDekUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUMzQixDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFN0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFFeEQsR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1FBQ2xGLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7OztJQUVNLDBDQUFrQjs7O0lBQXpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFTSxtQ0FBVzs7O0lBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLFFBQVEsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRU0sb0NBQVk7OztJQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsc0NBQWM7OztJQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsc0NBQWM7Ozs7SUFBZCxVQUFlLEdBQVc7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0ksa0NBQVU7Ozs7O0lBQWpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUV4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUVsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7OztJQUVNLDhCQUFNOzs7SUFBYixjQUFpQixDQUFDOzs7Ozs7SUFFWCxtQ0FBVzs7Ozs7SUFBbEIsVUFBbUIsT0FBWSxFQUFFLFNBQWM7UUFBNUIsd0JBQUEsRUFBQSxZQUFZO1FBQUUsMEJBQUEsRUFBQSxjQUFjO1FBQzNDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuRCxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVNLG9DQUFZOzs7SUFBbkI7UUFDSSxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQscUNBQWE7OztJQUFiOztZQUNVLFVBQVUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7O1lBQ2xELFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUN4QyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFySEosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OztnREFNZ0IsTUFBTSxTQUFDLEtBQUs7Z0JBdkJwQixVQUFVO2dCQUNWLE1BQU07Ozt3QkFGZjtDQXNJQyxBQXRIRCxJQXNIQztTQW5IWSxhQUFhOzs7SUFDdEIsaUNBQXdCOztJQUN4QixxQ0FBNEI7O0lBQzVCLG9DQUF5Qjs7Ozs7SUFFYiw0QkFBMEI7Ozs7O0lBQUUsNkJBQXdCOztJQUFFLCtCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuL21vZGVscy9zdG9yYWdlLXZhcnMnO1xuXG5pbXBvcnQgeyBBdXRvbG9naW5Ub2tlbiB9IGZyb20gJy4vbW9kZWxzL2F1dG9sb2dpbi10b2tlbi5tb2RlbCc7XG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGJBdXRoU2VydmljZSB7XG4gICAgcHVibGljIGxvZ2luVXJsOiBzdHJpbmc7XG4gICAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIHB1YmxpYyByZWRpcmVjdFVybCA9ICcvJztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52LCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge31cblxuICAgIGFzeW5jIGlzVmFsaWRUb2tlbihhdXRvbG9naW5Ub2tlbjogQXV0b2xvZ2luVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGF1dGh0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4gLSBhdXRodG9rZW4nLCBhdXRodG9rZW4pO1xuICAgICAgICBpZiAoIWF1dGh0b2tlbiAmJiAhYXV0b2xvZ2luVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAucG9zdCh0aGlzLmdldElzVmFsaWRUb2tlblVybCgpLCBhdXRvbG9naW5Ub2tlbiA/IGF1dG9sb2dpblRva2VuIDoge30pXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoKGpPYmo6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXNWYWxpZFRva2VuIC0gcmVzcG9uc2UnLCBqT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqT2JqLlJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgak9iai5NZXNzYWdlID0gak9iai5NZXNzYWdlID8gak9iai5NZXNzYWdlIDogJ2lzVmFsaWRUb2tlbiBlcnJvci4uLic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gak9iai5NZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IE9ic2VydmFibGU8TG9naW5SZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5nZXRMb2dpblVybCgpLCBsb2dpblJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcmFnZURhdGEobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkge1xuICAgICAgICBjb25zdCByZXNwQ3VsdHVyZTogc3RyaW5nID1cbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuQ3VsdHVyZSA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuQ3VsdHVyZS5sZW5ndGggPT09IDAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlIDogbG9naW5SZXNwb25zZS5DdWx0dXJlO1xuICAgICAgICBjb25zdCByZXNwVWlDdWx0dXJlOiBzdHJpbmcgPVxuICAgICAgICAgICAgbG9naW5SZXNwb25zZS5VSUN1bHR1cmUgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLlVJQ3VsdHVyZS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuVUlDdWx0dXJlO1xuICAgICAgICB0aGlzLnNhdmVDdWx0dXJlKHJlc3BDdWx0dXJlLCByZXNwVWlDdWx0dXJlKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5KV1QsIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4pO1xuXG4gICAgICAgIGNvbnN0IGV4cCA9IGxvZ2luUmVzcG9uc2UuRXhwID8gbW9tZW50KGxvZ2luUmVzcG9uc2UuRXhwKSA6IG1vbWVudCgpLmFkZCgxLCAnZGF5Jyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkVYUCwgSlNPTi5zdHJpbmdpZnkoZXhwLnZhbHVlT2YoKSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJc1ZhbGlkVG9rZW5VcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICd0b2tlbi8nO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2dpblVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3Rva2Vucy8nO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9nb3V0VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9nb3V0Lyc7XG4gICAgfVxuXG4gICAgZ2V0UmVkaXJlY3RVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkaXJlY3RVcmw7XG4gICAgfVxuXG4gICAgc2V0UmVkaXJlY3RVcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFVybCA9IHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSaXRvcm5hIGxhIGJhc2UgdXJsIGRlbCBiYWNrZW5kLFxuICAgICAqIGNhcmljYXRhIGRhIHVuIGZpbGUgZGkgY29uZmlndXJhemlvbmUgY2FyaWNhdG8gZGluYW1pY2FtZW50ZSAoYXNzZXRzL2Vudmlyb25tZW50Lmpzb24pXG4gICAgICovXG4gICAgcHVibGljIGdldEJhc2VVcmwoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ2luVXJsKSByZXR1cm4gdGhpcy5sb2dpblVybDtcblxuICAgICAgICB0aGlzLmxvZ2luVXJsID0gdGhpcy5lbnYuYXV0aC51cmw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW5Vcmw7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ29mZigpIHt9XG5cbiAgICBwdWJsaWMgc2F2ZUN1bHR1cmUoY3VsdHVyZSA9ICcnLCB1aUN1bHR1cmUgPSAnJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJTdG9yYWdlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5FWFApO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XG4gICAgfVxuXG4gICAgZ2V0RXhwaXJhdGlvbigpIHtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkVYUCk7XG4gICAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IEpTT04ucGFyc2UoZXhwaXJhdGlvbik7XG4gICAgICAgIHJldHVybiBtb21lbnQoZXhwaXJlc0F0KTtcbiAgICB9XG59XG4iXX0=