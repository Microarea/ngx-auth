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
var TbAuthService = /** @class */ (function () {
    function TbAuthService(env, http, router) {
        this.env = env;
        this.http = http;
        this.router = router;
        this.redirectUrl = '/';
    }
    TbAuthService.prototype.isValidToken = function (autologinToken) {
        if (autologinToken === void 0) { autologinToken = null; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var authtoken;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
                console.log('isValidToken - authtoken', authtoken);
                if (!authtoken && !autologinToken) {
                    return [2 /*return*/, of(false)];
                }
                return [2 /*return*/, this.http
                        .post(this.getIsValidTokenUrl(), autologinToken ? autologinToken : {})
                        .pipe(tap(function (jObj) {
                        console.log('isValidToken - response', jObj);
                        if (!jObj.Result) {
                            jObj.Message = jObj.Message ? jObj.Message : 'Login error...';
                            // sessionStorage.removeItem(SessionStorageVars.JWT);
                            // sessionStorage.removeItem(SessionStorageVars.CULTURE);
                            // sessionStorage.removeItem(SessionStorageVars.UI_CULTURE);
                            _this.errorMessage = jObj.Message;
                        }
                    }))
                        .toPromise()];
            });
        });
    };
    TbAuthService.prototype.login = function (loginRequest) {
        var _this = this;
        return this.http.post(this.getLoginUrl(), loginRequest).pipe(map(function (loginResponse) {
            var respCulture = loginResponse.Culture === undefined || loginResponse.Culture.length === 0
                ? window.navigator.language
                : loginResponse.Culture;
            var respUiCulture = loginResponse.UICulture === undefined || loginResponse.UICulture.length === 0
                ? window.navigator.language
                : loginResponse.UICulture;
            _this.saveCulture(respCulture, respUiCulture);
            if (!loginResponse.Result) {
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                sessionStorage.removeItem(SessionStorageVars.JWT);
                _this.errorMessage = loginResponse.Message;
                return loginResponse;
            }
            sessionStorage.setItem(SessionStorageVars.JWT, loginResponse.JwtToken);
            return loginResponse;
        }));
    };
    TbAuthService.prototype.getIsValidTokenUrl = function () {
        return this.getBaseUrl() + 'token/';
    };
    TbAuthService.prototype.getLoginUrl = function () {
        return this.getBaseUrl() + 'tokens/';
        return this.getBaseUrl() + 'login/';
    };
    TbAuthService.prototype.getLogoutUrl = function () {
        return this.getBaseUrl() + 'logout/';
    };
    TbAuthService.prototype.getRedirectUrl = function () {
        return this.redirectUrl;
    };
    TbAuthService.prototype.setRedirectUrl = function (url) {
        this.redirectUrl = url;
    };
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     */
    TbAuthService.prototype.getBaseUrl = function () {
        if (this.loginUrl)
            return this.loginUrl;
        this.loginUrl = this.env.auth.url;
        return this.loginUrl;
    };
    TbAuthService.prototype.logoff = function () { };
    TbAuthService.prototype.saveCulture = function (culture, uiCulture) {
        if (culture === void 0) { culture = ''; }
        if (uiCulture === void 0) { uiCulture = ''; }
        localStorage.setItem(SessionStorageVars.CULTURE, culture);
        localStorage.setItem(SessionStorageVars.UI_CULTURE, uiCulture);
    };
    TbAuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TbAuthService_Factory() { return new TbAuthService(i0.ɵɵinject("env"), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Router)); }, token: TbAuthService, providedIn: "root" });
    TbAuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(0, Inject('env')),
        tslib_1.__metadata("design:paramtypes", [Object, HttpClient, Router])
    ], TbAuthService);
    return TbAuthService;
}());
export { TbAuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQVN2RDtJQUtJLHVCQUFtQyxHQUFHLEVBQVUsSUFBZ0IsRUFBUyxNQUFjO1FBQXBELFFBQUcsR0FBSCxHQUFHLENBQUE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZoRixnQkFBVyxHQUFHLEdBQUcsQ0FBQztJQUVpRSxDQUFDO0lBRXJGLG9DQUFZLEdBQWxCLFVBQW1CLGNBQXFDO1FBQXJDLCtCQUFBLEVBQUEscUJBQXFDOzs7OztnQkFDOUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQy9CLHNCQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBQztpQkFDcEI7Z0JBRUQsc0JBQU8sSUFBSSxDQUFDLElBQUk7eUJBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLGNBQWMs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QU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUV4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUVsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLDhCQUFNLEdBQWIsY0FBaUIsQ0FBQztJQUVYLG1DQUFXLEdBQWxCLFVBQW1CLE9BQVksRUFBRSxTQUFjO1FBQTVCLHdCQUFBLEVBQUEsWUFBWTtRQUFFLDBCQUFBLEVBQUEsY0FBYztRQUMzQyxZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNuRSxDQUFDOztJQWpHUSxhQUFhO1FBSHpCLFVBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7UUFNZSxtQkFBQSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7eURBQTRCLFVBQVUsRUFBaUIsTUFBTTtPQUw5RSxhQUFhLENBa0d6Qjt3QkFsSEQ7Q0FrSEMsQUFsR0QsSUFrR0M7U0FsR1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2Vzc2lvblN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9zZXNzaW9uLXN0b3JhZ2UnO1xuXG5pbXBvcnQgeyBBdXRvbG9naW5Ub2tlbiB9IGZyb20gJy4vbW9kZWxzL2F1dG9sb2dpbi10b2tlbi5tb2RlbCc7XG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGJBdXRoU2VydmljZSB7XG4gICAgcHVibGljIGxvZ2luVXJsOiBzdHJpbmc7XG4gICAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIHB1YmxpYyByZWRpcmVjdFVybCA9ICcvJztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52LCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge31cblxuICAgIGFzeW5jIGlzVmFsaWRUb2tlbihhdXRvbG9naW5Ub2tlbjogQXV0b2xvZ2luVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGF1dGh0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU2Vzc2lvblN0b3JhZ2VWYXJzLkpXVCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4gLSBhdXRodG9rZW4nLCBhdXRodG9rZW4pO1xuICAgICAgICBpZiAoIWF1dGh0b2tlbiAmJiAhYXV0b2xvZ2luVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAucG9zdCh0aGlzLmdldElzVmFsaWRUb2tlblVybCgpLCBhdXRvbG9naW5Ub2tlbiA/IGF1dG9sb2dpblRva2VuIDoge30pXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoKGpPYmo6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXNWYWxpZFRva2VuIC0gcmVzcG9uc2UnLCBqT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqT2JqLlJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgak9iai5NZXNzYWdlID0gak9iai5NZXNzYWdlID8gak9iai5NZXNzYWdlIDogJ0xvZ2luIGVycm9yLi4uJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTZXNzaW9uU3RvcmFnZVZhcnMuSldUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU2Vzc2lvblN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTZXNzaW9uU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gak9iai5NZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IE9ic2VydmFibGU8TG9naW5SZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5nZXRMb2dpblVybCgpLCBsb2dpblJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwQ3VsdHVyZTogc3RyaW5nID1cbiAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5DdWx0dXJlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5DdWx0dXJlLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuQ3VsdHVyZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwVWlDdWx0dXJlOiBzdHJpbmcgPVxuICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLlVJQ3VsdHVyZSA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuVUlDdWx0dXJlLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuVUlDdWx0dXJlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUN1bHR1cmUocmVzcEN1bHR1cmUsIHJlc3BVaUN1bHR1cmUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFsb2dpblJlc3BvbnNlLlJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgOiAnTG9naW4gZXJyb3IuLi4nO1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFNlc3Npb25TdG9yYWdlVmFycy5KV1QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTZXNzaW9uU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldElzVmFsaWRUb2tlblVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3Rva2VuLyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvZ2luVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAndG9rZW5zLyc7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2dvdXRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dvdXQvJztcbiAgICB9XG5cbiAgICBnZXRSZWRpcmVjdFVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRpcmVjdFVybDtcbiAgICB9XG5cbiAgICBzZXRSZWRpcmVjdFVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJpdG9ybmEgbGEgYmFzZSB1cmwgZGVsIGJhY2tlbmQsXG4gICAgICogY2FyaWNhdGEgZGEgdW4gZmlsZSBkaSBjb25maWd1cmF6aW9uZSBjYXJpY2F0byBkaW5hbWljYW1lbnRlIChhc3NldHMvZW52aXJvbm1lbnQuanNvbilcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QmFzZVVybCgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9naW5VcmwpIHJldHVybiB0aGlzLmxvZ2luVXJsO1xuXG4gICAgICAgIHRoaXMubG9naW5VcmwgPSB0aGlzLmVudi5hdXRoLnVybDtcblxuICAgICAgICByZXR1cm4gdGhpcy5sb2dpblVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb2ZmKCkge31cblxuICAgIHB1YmxpYyBzYXZlQ3VsdHVyZShjdWx0dXJlID0gJycsIHVpQ3VsdHVyZSA9ICcnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNlc3Npb25TdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU2Vzc2lvblN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XG4gICAgfVxufVxuIl19