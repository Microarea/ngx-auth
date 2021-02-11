import { __awaiter } from "tslib";
import { Injectable, Inject, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { of, Subject } from 'rxjs';
import { tap, map, catchError, timeout } from 'rxjs/operators';
import { StorageVars } from './models/storage-vars';
import { ChangePasswordInfo } from './models/login-request';
import { LogoffRequest } from './models/logoff-request';
import { IsValidTokenRequest } from './models/is-valid-token-request';
import { OperationResult } from './models/operation-result';
import { ChangePasswordDialogComponent } from './pages/change-password-dialog/change-password-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/material/dialog";
let authServiceInstance;
export const authService = () => authServiceInstance;
export class TbAuthService {
    constructor(env, http, injector, dialog) {
        this.http = http;
        this.injector = injector;
        this.dialog = dialog;
        this.loggedOut$ = new Subject();
        this.errorMessage = '';
        this.okMessage = '';
        /**
         * Ritorna la base url del backend,
         * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
         */
        this.getBaseUrl = () => this.env.auth.url;
        this.getSnapshotServiceUrl = () => this.env.auth.snapshotServiceUrl;
        this.getLoginPageUrl = () => this.env.auth.loginPageUrl;
        this.getAuthServiceUrl = () => this.env.auth.url;
        this.getRedirectUrl = () => this.env.auth.redirectUrl;
        this.getCreateAccountUrl = () => this.env.auth.createAccountUrl;
        this.getChangePasswordUrl = () => this.env.auth.changePasswordUrl;
        this.hasSubscriptionSelection = () => this.env.auth.subscriptionSelection;
        this.showSignUp = () => this.env.auth.showSignUp;
        this.getAppId = () => this.env.auth.appId;
        this.isSessionStorage = () => this.env.auth.sessionStorage;
        this.getLogoURL = () => this.env.auth.logoURL;
        this.isRedirectExternal = () => this.env.auth.isRedirectExternal;
        authServiceInstance = this;
        this.env = _.defaultsDeep(env, TbAuthService.DEFAULT_ENV, env);
        console.log('TbAuthEnvironment', this.env);
    }
    get router() {
        return this.injector.get(Router);
    }
    checkConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http
                .get(this.getBaseUrl())
                .pipe(timeout(5000), map(__ => true))
                .toPromise()
                .catch(__ => false);
        });
    }
    /*
    {
      type: JWT,
      appid: M4,
      securityValue: jwtEncoded
    }
  */
    getAuthorizationHeader() {
        return JSON.stringify({
            Type: 'JWT',
            AppId: 'M4',
            SecurityValue: this.getToken()
        });
    }
    prelogin(loginRequest) {
        // console.log('authService.login - loginRequest', loginRequest);
        return this.http
            .post(this.getPreLoginUrl(), loginRequest)
            .pipe(map((loginResponse) => {
            if (!loginResponse.Result) {
                if (loginResponse.ResultCode === 19) {
                    // mi sposto su pagina per cambio password e nuovo tentativo di login
                    console.log('AuthService: Change Password Needed');
                    this.openChangePasswordDialog(loginRequest);
                }
                else if (loginResponse.ResultCode === 4) {
                    console.log('AuthService: Account confirmation Needed');
                    // mi sposto su pagina per attivare l'account che non ha ancora effettuato la procedura?
                }
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                this.errorMessage = loginResponse.Message;
                return loginResponse;
            }
            return loginResponse;
        }))
            .toPromise();
    }
    login(loginRequest) {
        // console.log('authService.login - loginRequest', loginRequest);
        return this.http
            .post(this.getLoginUrl(), loginRequest)
            .pipe(map((loginResponse) => {
            if (!loginResponse.Result) {
                if (loginResponse.ResultCode === 19) {
                    // mi sposto su pagina per cambio password e nuovo tentativo di login
                    console.log('AuthService: Change Password Needed');
                    this.openChangePasswordDialog(loginRequest);
                }
                else if (loginResponse.ResultCode === 4) {
                    console.log('AuthService: Account confirmation Needed');
                    // mi sposto su pagina per attivare l'account che non ha ancora effettuato la procedura?
                }
                else {
                    this.clearStorage();
                    console.log('AuthService: Clearing storage due to Login failure, result code ', loginResponse.ResultCode);
                    console.log('LoginRequest by account' + loginRequest.accountName + ' token:' + loginRequest.token);
                }
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                console.log(loginResponse.Message);
                this.errorMessage = loginResponse.Message;
                return loginResponse;
            }
            this.storageData(loginResponse);
            return loginResponse;
        }))
            .toPromise();
    }
    // ---------------------------------------------------------------------------
    openChangePasswordDialog(loginRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            this.errorMessage = '';
            const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
                data: {
                    Title: 'Change Password',
                    Message: 'Please choose a new password: ',
                    PlaceHolder: 'Password',
                    PlaceHolder2: 'Confirm Password',
                    NewPwd: ''
                }
            });
            dialogRef.afterClosed().subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                if (data === undefined)
                    return;
                if (data.NewPwd === undefined || data.NewPwd === '') {
                    alert('Write a valid AccountName');
                    return;
                }
                this.errorMessage = '';
                const cpi = new ChangePasswordInfo();
                cpi.AccountName = loginRequest.accountName;
                cpi.IgnoreOldPassword = false;
                cpi.JWTToken = loginRequest.token;
                cpi.NewPassword = data.NewPwd;
                cpi.Password = loginRequest.password;
                loginRequest.password = data.NewPwd;
                const result = yield this.changePassword(cpi).catch(err => {
                    this.errorMessage = err.error && err.error.Message;
                    return;
                });
                // todo controlla come vengono mostrati errori
                if (result && result.Result) {
                    this.errorMessage = '';
                    this.okMessage = 'Password changed succesfully!';
                    //la login la fa  a mano altrimenti mi perdo
                }
                else {
                    //errore già indicato
                    loginRequest.token = '';
                    loginRequest.password = '';
                    loginRequest.subscriptionKey = '';
                    loginRequest.appId = '';
                }
            }));
        });
    }
    isValidToken(authtoken = '') {
        return __awaiter(this, void 0, void 0, function* () {
            if (!authtoken) {
                const opres = new OperationResult();
                opres.Message = 'No authtoken';
                return opres;
            }
            return this.http
                .post(this.getIsValidTokenUrl(), new IsValidTokenRequest(authtoken))
                .pipe(tap((jObj) => {
                // console.log('isValidToken - response', jObj);
                if (!jObj.Result) {
                    jObj.Message = jObj.Message ? jObj.Message : 'isValidToken error...';
                    console.log('AuthService: Clearing storage due to Token Validation failure');
                    console.log('token: ' + authtoken);
                    this.clearStorage();
                    this.errorMessage = jObj.Message;
                }
            }), catchError((error) => {
                console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
                const res = new OperationResult();
                res.Code = 666;
                if (!this.router.routerState.snapshot.url.includes(this.getLoginPageUrl()))
                    this.router.navigate([this.getLoginPageUrl()]);
                return of(res);
            }))
                .toPromise();
        });
    }
    getCompaniesForUser(user) {
        return this.http.get(this.getSubsKeysForAccountUrl() + user).pipe(map((res) => {
            if (!res || !res.Result)
                return [];
            return res.Content && res.Content.subscriptions ? res.Content.subscriptions : [];
        }));
    }
    getIsValidTokenUrl() {
        return this.getBaseUrl() + 'isvalidtoken/';
    }
    getLoginUrl() {
        return this.getBaseUrl() + 'login/';
    }
    getPreLoginUrl() {
        return this.getBaseUrl() + 'login/';
    }
    getLogoutUrl() {
        return this.getBaseUrl() + 'logoff/';
    }
    getChangePasswordApiUrl() {
        return this.getChangePasswordUrl() + 'changepassword/';
    }
    getResetPasswordUrl() {
        return this.getChangePasswordUrl() + 'resetpassword/';
    }
    getSubsKeysForAccountUrl() {
        return this.getBaseUrl() + 'subscriptionskeysforaccount/';
    }
    changePassword(cpi) {
        return __awaiter(this, void 0, void 0, function* () {
            const bodyString = JSON.stringify(cpi);
            const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            // tslint:disable-next-line: align
            return this.http
                .post(this.getChangePasswordApiUrl(), bodyString, { headers })
                .pipe(map((res) => {
                if (!res || !res.Result) {
                    this.errorMessage = res.Message + ' (Code:' + res.Code + ')';
                    return res;
                }
                return res;
            }), catchError((error) => {
                console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
                const res = new OperationResult();
                res.Code = 662;
                return of(res);
            }))
                .toPromise();
        });
    }
    resetpassword(accname) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            // tslint:disable-next-line: align
            return this.http
                .post(this.getResetPasswordUrl() + accname, { headers })
                .pipe(map((res) => {
                if (!res) {
                    res = new OperationResult();
                    res.Code = 663;
                }
                return res;
            }), catchError((error) => {
                console.error(`Error Code: ${error.status}.\nMessage: ${error.message}`);
                const res = new OperationResult();
                res.Message = `Error Code: ${error.status}.\nMessage: ${error.message}`;
                res.Code = 661;
                if (!this.router.routerState.snapshot.url.includes(this.getLoginPageUrl()))
                    this.router.navigate([this.getLoginPageUrl()]);
                return of(res);
            }))
                .toPromise();
        });
    }
    logoff() {
        const logoffRequest = new LogoffRequest(this.getToken());
        return this.http
            .post(this.getLogoutUrl(), logoffRequest)
            .pipe(map((logoffResponse) => {
            if (logoffResponse.Result) {
                console.log('AuthService: Clearing storage due to Logoff');
                this.clearStorage();
                this.loggedOut$.next();
            }
            return logoffResponse;
        }))
            .toPromise();
    }
    getRedirectUrlForSubscription(accountName, subscriptionKey) {
        this.getInstancesMapForUser(accountName).subscribe(res => {
            const map = res;
            if (!map || map.length === 0) {
                throw 'instanceMap is invalid';
            }
            const currentInstanceKey = map.filter(k => k.SubscriptionKey === subscriptionKey).map(j => j.InstanceKey)[0];
            this.getSnapshot(currentInstanceKey, subscriptionKey).subscribe(res => {
                if (!res || res === [] || res.length === 0)
                    throw 'snapshot is empty';
                // we have now the snapshot
                const services = res['Services'];
                let redirectUrl = services.filter(i => i.ServiceType === 'M4FRONTEND' || i.ServiceType === 'APP_FRONTEND').map(f => f.Url)[0];
                console.log(`Designated redirect is ${redirectUrl}`);
                const baseRedirectUrl = `${redirectUrl}?jwt=${this.getToken()}&subKey=${subscriptionKey}`;
                console.log(`Designated final redirect is ${baseRedirectUrl}`);
                localStorage.setItem('lastLoggedRedirect', baseRedirectUrl);
                document.location.href = 'http://' + baseRedirectUrl;
            }, err => {
                console.log('snapshot cannot be obtained');
                throw 'snapshot cannot be obtained';
                //this.router.navigate([this.getRedirectUrl()]);
            });
        }, err => {
            console.log('getRedirectUrlForSubscription ia about to fail...');
            console.log(err);
            throw 'getInstancesMapForUser failed';
        });
    }
    getInstancesMapForUser(user) {
        return this.http.get(this.getInstancesMapForAccountUrl() + user).pipe(map((res) => {
            if (!res || !res.Result)
                return [];
            return res.Content;
        }));
    }
    getSnapshot(instanceKey, subscriptionKey) {
        return this.http.get(this.getSnapshotServiceUrl() + instanceKey + '?subscriptionKey=' + subscriptionKey).pipe(map((res) => {
            if (!res || !res.Result)
                return [];
            return res.Content;
        }));
    }
    getInstancesMapForAccountUrl() {
        return this.getBaseUrl() + 'instancesMap/';
    }
    clearStorage() {
        sessionStorage.removeItem(StorageVars.JWT);
        sessionStorage.removeItem(StorageVars.CULTURE);
        sessionStorage.removeItem(StorageVars.UI_CULTURE);
        sessionStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        localStorage.removeItem(StorageVars.JWT);
        localStorage.removeItem(StorageVars.CULTURE);
        localStorage.removeItem(StorageVars.UI_CULTURE);
        localStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        localStorage.removeItem(StorageVars.USER_GATEWAY_AUTOREDIRECT);
    }
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
    storageData(loginResponse) {
        const respCulture = loginResponse.RegionalSettings === undefined || loginResponse.RegionalSettings.length === 0
            ? window.navigator.language
            : loginResponse.RegionalSettings;
        const respUiCulture = loginResponse.Language === undefined || loginResponse.Language.length === 0
            ? window.navigator.language
            : loginResponse.Language;
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
            sessionStorage.setItem(StorageVars.CULTURE, respCulture);
            sessionStorage.setItem(StorageVars.UI_CULTURE, respUiCulture);
            sessionStorage.setItem(StorageVars.ACCOUNT_ROLES, JSON.stringify(loginResponse.Roles));
            if (loginResponse.AccountName)
                sessionStorage.setItem(StorageVars.ACCOUNT_NAME, loginResponse.AccountName);
            if (loginResponse.SubscriptionKey)
                sessionStorage.setItem(StorageVars.SUBSCRIPTION, loginResponse.SubscriptionKey);
            if (loginResponse.SubscriptionDesc)
                sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, loginResponse.SubscriptionDesc);
        }
        else {
            localStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
            localStorage.setItem(StorageVars.CULTURE, respCulture);
            localStorage.setItem(StorageVars.UI_CULTURE, respUiCulture);
            localStorage.setItem(StorageVars.ACCOUNT_ROLES, JSON.stringify(loginResponse.Roles));
            if (loginResponse.AccountName)
                localStorage.setItem(StorageVars.ACCOUNT_NAME, loginResponse.AccountName);
            if (loginResponse.SubscriptionKey)
                localStorage.setItem(StorageVars.SUBSCRIPTION, loginResponse.SubscriptionKey);
            if (loginResponse.SubscriptionDesc)
                localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, loginResponse.SubscriptionDesc);
        }
    }
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
    getToken() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.JWT);
        else
            return localStorage.getItem(StorageVars.JWT);
    }
    getAccountName() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.ACCOUNT_NAME);
        else
            return localStorage.getItem(StorageVars.ACCOUNT_NAME);
    }
    getSubscription() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION);
    }
    getSubscriptionDescription() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
    }
    getCulture() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.CULTURE);
        else
            return localStorage.getItem(StorageVars.CULTURE);
    }
    getUICulture() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.UI_CULTURE);
        else
            return localStorage.getItem(StorageVars.UI_CULTURE);
    }
}
TbAuthService.DEFAULT_ENV = {
    auth: {
        url: 'http://localhost:10344/api/',
        createAccountUrl: 'http://localhost:4200',
        changePasswordUrl: 'http://localhost:56392/api/',
        subscriptionSelection: false,
        showSignUp: false,
        appId: 'M4',
        redirectUrl: '/',
        isRedirectExternal: false,
        loginPageUrl: 'login',
        sessionStorage: false,
        snapshotServiceUrl: '',
        logoURL: 'https://magocloud-store-pdf.s3.eu-west-1.amazonaws.com/login-logo.png'
        // tslint:disable-next-line: max-line-length
        //'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAA2CAYAAABTAoWuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc0OEJEMDcwNDlBMTFFQTlDNzVDNDRGNkMzQ0EwRDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc0OEJEMDgwNDlBMTFFQTlDNzVDNDRGNkMzQ0EwRDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzQ4QkQwNTA0OUExMUVBOUM3NUM0NEY2QzNDQTBENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzQ4QkQwNjA0OUExMUVBOUM3NUM0NEY2QzNDQTBENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl3e4DwAABUASURBVHja7F0J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'
    }
};
/** @nocollapse */ TbAuthService.ɵfac = function TbAuthService_Factory(t) { return new (t || TbAuthService)(i0.ɵɵinject('env'), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i2.MatDialog)); };
/** @nocollapse */ TbAuthService.ɵprov = i0.ɵɵdefineInjectable({ token: TbAuthService, factory: TbAuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TbAuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }, { type: i1.HttpClient }, { type: i0.Injector }, { type: i2.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQXFCLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxNQUFNLEVBQXVCLE1BQU0saUJBQWlCLENBQUM7QUFFOUQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRCxPQUFPLEVBQWdCLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFckQsSUFBSSxtQkFBa0MsQ0FBQztBQUN2QyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7QUFLckQsTUFBTSxPQUFPLGFBQWE7SUE2QnhCLFlBQTJCLEdBQXNCLEVBQVUsSUFBZ0IsRUFBVSxRQUFrQixF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QUFjLEVBQUUsS0FBSztRQUNyQixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLE9BQU8sRUFBRSx1RUFBdUU7UUFDaEYsNENBQTRDO1FBQzVDLDB0UUFBMHRRO0tBQzN0UTtDQUNGLENBQUM7MEVBbEJTLGFBQWEsY0E2QkosS0FBSztxREE3QmQsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTtrREFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBOEJjLE1BQU07dUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIG1hcCwgY2F0Y2hFcnJvciwgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcclxuXHJcbmltcG9ydCB7IExvZ2luUmVxdWVzdCwgQ2hhbmdlUGFzc3dvcmRJbmZvIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XHJcbmltcG9ydCB7IExvZ29mZlJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dvZmYtcmVxdWVzdCc7XHJcbmltcG9ydCB7IExvZ29mZlJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9nb2ZmLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgSXNWYWxpZFRva2VuUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2lzLXZhbGlkLXRva2VuLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBPcGVyYXRpb25SZXN1bHQgfSBmcm9tICcuL21vZGVscy9vcGVyYXRpb24tcmVzdWx0JztcclxuaW1wb3J0IHsgVGJBdXRoRW52aXJvbm1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRoLWVudmlyb25tZW50JztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxubGV0IGF1dGhTZXJ2aWNlSW5zdGFuY2U6IFRiQXV0aFNlcnZpY2U7XHJcbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9ICgpID0+IGF1dGhTZXJ2aWNlSW5zdGFuY2U7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhTZXJ2aWNlIHtcclxuICBwcml2YXRlIHN0YXRpYyBERUZBVUxUX0VOVjogVGJBdXRoRW52aXJvbm1lbnQgPSB7XHJcbiAgICBhdXRoOiB7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MTAzNDQvYXBpLycsXHJcbiAgICAgIGNyZWF0ZUFjY291bnRVcmw6ICdodHRwOi8vbG9jYWxob3N0OjQyMDAnLFxyXG4gICAgICBjaGFuZ2VQYXNzd29yZFVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTYzOTIvYXBpLycsXHJcbiAgICAgIHN1YnNjcmlwdGlvblNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgIHNob3dTaWduVXA6IGZhbHNlLFxyXG4gICAgICBhcHBJZDogJ000JyxcclxuICAgICAgcmVkaXJlY3RVcmw6ICcvJyxcclxuICAgICAgaXNSZWRpcmVjdEV4dGVybmFsOiBmYWxzZSxcclxuICAgICAgbG9naW5QYWdlVXJsOiAnbG9naW4nLFxyXG4gICAgICBzZXNzaW9uU3RvcmFnZTogZmFsc2UsXHJcbiAgICAgIHNuYXBzaG90U2VydmljZVVybDogJycsXHJcbiAgICAgIGxvZ29VUkw6ICdodHRwczovL21hZ29jbG91ZC1zdG9yZS1wZGYuczMuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vbG9naW4tbG9nby5wbmcnXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIC8vJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBVGdBQUFBMkNBWUFBQUJUQW9XdUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeVZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRRNElEYzVMakUyTkRBek5pd2dNakF4T1M4d09DOHhNeTB3TVRvd05qbzFOeUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREl4TGpBZ0tFMWhZMmx1ZEc5emFDa2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZSVGMwT0VKRU1EY3dORGxCTVRGRlFUbEROelZETkRSR05rTXpRMEV3UkRVaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJUYzBPRUpFTURnd05EbEJNVEZGUVRsRE56VkRORFJHTmtNelEwRXdSRFVpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRk56UTRRa1F3TlRBME9VRXhNVVZCT1VNM05VTTBORVkyUXpORFFUQkVOU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBGTnpRNFFrUXdOakEwT1VFeE1VVkJPVU0zTlVNME5FWTJRek5EUVRCRU5TSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QbDNlNER3QUFCVUFTVVJCVkhqYTdGMEpsQmJGRWU1ZGRoSGxNcXdvSWdnS0tpTEk0WWtnUnFPZ0lvbzNuaUFlTVFveEtzWW9oNklSaVJFVWp4Z0pDcEpvOElxQWthQVFOTUdZNEFFb0tJcXVBZ29SUlRua1dCRFkxSmVwZlE2MTNYUDJ6UC92N3RSN0grejBQMVBkMHpOZFUxMVZYVjFRWGw2dU1xcnhkQURoQ0VJblFnZENFMEpqd202RUFnSmVrcldFL3hLK0pMeFBXRUI0aTdBMDY3Nk04cFVLTWdGWFkra3d3cm1FVXdpSHh1RHpNbUVLNFVYQ2lxeGJNOG9FWEVhNXBKTUkxeExPc016M2U4TFRoRWNKcjJmZG5GRW00REpLazM1Q0dFSTRQb1c2WGlBTUpLek11ajJqVE1CbGxDVEJuamFHY0lIUGVhV0VOd256Q0I4U3ZpV3NZODFzRjBJSllXL2wyT3M2OGhSM1h3OSttd25EQ2ZkbWp5Q2pUTUJsbEFTZFNwaE1xSy81YlN0aFB1RnZoR244ZDFqcVRyaVUwSlhReG5ET0c0VEJoSDluanlPalRNQmxaSXVlOHREYUhpYmNwUnl2cUMyQ0YvWjZqenAvcHh6YlgwWVpaUUl1bzhpRXFlUk01WVI4U1BvcjRWYkN3Z1RyNzBLNGg5RE5VSC92N0JGbGxBbTRqS0pRVThKY1FqTlJEbnZZMVlSSktiWUZXdUkxbXZJSmhBRVIrTlVtdENXMFZJNGRzQkdoSHYrMmdmQWQ0VFBDWXNJSFBBWFBLQk53bVlDckp0U1lOYk85UkRrY0IrY1JsdVdnVGVmelZMbFFsRThrWEJiZytuMEk1eEJPNUNud1hnSHJYY1gzUFl1MTJjWFo2NUVKdUl5cU5uMUsyRStVd1NONldJN2IxWmFGVEZOUkRzL3VqWVpyVG1JdDcyeENzWVUyek9ScDg2enNOYWxaVkpoMVFiV2dzUnJoOW9weTdHRzVKa3dYTzdLd2RkTU5oRis0am1zUitoRCt3VzN2YTBtNFZRaE1DTG5YQ0tjclovbFpScGtHbDFFVm9LR0VPMFhaNDRUTDg3Q3RyN0N3Y2RQSnlvbTdlMVVqcE4yRWVMeDNDSXVVRTdPM1hEbTJOd2lydXF3aE5pY2NSZWpzSXh4TFdkQjlrTDArbVlETEtIK3BrMFl6K3J0eWJGYjVTQkE2VzRRR3RZT3dUVGxPQkIzOVNUbmVWMmgyWHdhc0J3SEp4eWtuRGhBMnZGMDE1NERmajdOWHFHWUlPQXdJUkx3L3pWL0tYRk5GZTU1UjlyMWh5SkFCMjg3blBHVkptL1lrSEttY3JCMzdFMXJ3d04vQkdzbFN3a2VFT1lSM2ZYamhIdHdlVXdpQWZaaFhGTnFEcDdYdFdVanN3WUtualBBRmEwMExXS2h1amxnSEZ2ZFBEM0FldkxBUGNsL0VJYnhIVnhMdUVPWFFHRS9JUkVBMUp4SndBOHQvb0VVUWVEbkdGYTcyTENiVXQ4aTdGcUhVeGYrQ0ZPL3JRc0tMaE0zbHdlbER3bWhDQncyL1lacnoyMGRvVjEzQ0FNSTB3c2FBN2ZxYThEVGhuSWg5TWNhRE4vaTJUcUQvRDJUZXVNZUZoQVB5NEYzUGtERHd6MUx4Z2wyWDQwWnRFKzNwYlpGM0Y4RjdYUXIzY3piaHpmTDROSlZ3R1BQY1RmUDdIU0hiVlk4d2d2QlZ6SGI5aCs4eGJMOHNGM3krSTV5WHd2Tm9sQTM4bWdONFVUY0twUTRHNnpvNVVpaDdLY2ViNXFaZExQSWZMSTRiS0NkV0t3bUNzUnU1MHA1VFRneFhYSUpSL0czQ0pZVFI0amNFdVE0UHdlczB3aWQ4VFdNTDk0bDdSQWpHTVNIYlVNcFRYZHpYd1d5U1NKcSt6ZVp0TmNzR3Q0RHRRZEwrTVRBSDdWbk9uakEzSVhSZ3FnWGVpTWQ2WDFQK0pkdWJiTklqeWxrNW9LTnRMQXhlWnhzYjdHanJDVVVzYlBabG9RRmIxVUVCNi9zcFlWeUE4L0RoZXBhRmk0NGdiRjVTTzJjVTJjTFh0ZVErN09vanlMQmFvbCtJdm1xVUNaMk0waFp3ME9ycXBkd1dESXFKbW5KYkF1N1B5b210MHRGWnlzbGhab05tRUhwcXltR2t2NThkT1Y4RTVJVWNibGNwWnlXQ2liQmd2bWxBWXpzY0Y2MDF2MEh3LzU2RjM2b0F2T0FjT1pjL2dzMDB2MmNHL0l6eXhzbXd3R0JiT1MvbCtmSXFRenZPc01EN1J6NTJwRmN0M2NOb0EvL0hDYnZFdEIzT01mQytNc0QxSllTVm1tdGhnN3c2UnJ0d1QrTU03WG9zc3dGbHlEVk1HbHlGeHRFOEpUbDdwY2NVeTRZR0I3dmlVTmN4d2lnSzFBL3hXSmlHSVZoMGU0dzZydWFwcVp2QTd3TFdqR3pRM1lSZmliSmludlo2RVVJdERoUmxpT3kvVkFXUExmTWlaQWg1U3FQMS81b3d6UEs3c3J0eXdsamFzRllLbXkxaW5kWW9aN0g5dTJ6cUNFb3dEY2cxcm9VOGJkNllBNTNqY1BWRCtGQmRMdHZFTnROUCtmNmlCcThXY3A4VnVuZ1VzbWxpZFVTZUNDUGFVN1NwZ1BtVnVjcnE4N01MRThJRVB0L3ovWDluVzRNcjU5Q0dOQ1R0YW84MjJORGcxZ21lUFFuVFJWbi9HUHpiYWRyOUxlR1FCUHJxZmxjZGx3VTQveGxOMitZazBLNFdoR1dhdWs2MndMdUVOYzJYQ2VzRGVIYmZKZ3dudEFyQXV3MTc3cmZ6LzhBT0RwOUtTOVBvUVJndlFwaE1CTy96Sk1LWkVlclpnN0JCYzYrdnhHajcwWUpmUlYvMkVPZmR6SFZ0Q3dIdzJjTFBmQW1QMlNHRVk4S0VpWGdKdVArbThIQUgrenpRdUFMdVNzSHZNeTQvUjVTWFJ1UmZvQm5ZbUc3dm4yQ2ZJYWFyWllEek9tcjY4M1dPQjB5aVhSQkVING42RVBmWE1BYS91elVmcURBRXdkSFdvNDVERE5jTlR2aTl4ek00UDJZSUVjYnVhU0hxYk93UjZoUDFQbzQxOE93bHpydTkzQzU5eExHZ0IvdUZpVWdQbnpSTTM1bWdPdjRqd204VFZ2a2wvNG9GM2dodFdDRU01eGRGNEQ5TzdidzNBVlplZE9UcFJGSzBSQVhiajFST2paRk9xVnZNcWJnWGZjUG1qaFhDY3pzdEFxLyszSWVZa2plSTBhYkwyWWt5eVBDN3FTKzJKUGo4a00vdVkrV2trNDhUUW9TK3huYU5DL2lkODUyd2lXbGpCVzJJMFladEFjdkxMUGNoVEM1WW5mSUI5Nk54VHE3RTRKVDJyaUV1VzRCdEdpbU9NV2pmc2NnZkFxdWhlSkR1Ky91Tk9QKzJrUHpoUWJ4Q2xGMmk3S1lDajBybmF6eW1wNlJRYnhuYjl0eUV2UnZDeE1qQjFqZ2hwbUNUOUFCN3NldmwrTGtjclp3d25QMHM4b1NndzU0YXA5ZFFYK241TERlYTZBeXNic0k2emR0WjB2ZHhHZm9nS1crMDNLZzlWT1ZZc2NkWUc3S1Z3MnlvT0o2dDBiNmc0ZTNpK3JKQ3d3bTZyK2RONGhpQzdaazhlZWdqeFBFb2xkN0d6TFBaMEwrdmFNOUpBYTY5UjlPdmt2RFZSbVlTQkFwL3hZNEdyTUU5aEIwZUpZYnJybE5PbUU2dU5zRHBFS0R1eGZ6K0lRNXhKUnZsOStZeDBjMUhNRTdsajlpTUtpU2NKck9EcUVqekcrNTlWeFpjYlpUM0xtNmRXWlB0dEpPQ29iSEJsYkNOUjFKRHl6YUk4WUovR2FHWU1NV1NEZTRZelQxMDE1dzNWcHd6TXlEL1FzSmFjZTJ2ODhROTNrbGpCeXRPdVEwWGF2cC9iNTlyK3ZuWVhWNGdIT2ZEQTJ1WEI3SDlXTkpWR3Z0akcwTmRneXozUnowZkI4bjdoTDRCK0p4RitMZFBQN1gyY0RMbzFrTFBzcmo4MGUzSWM1LzNLOE41WWVvNmd2QUhuM3RmNW43R3VvU1grN0dOUjJsYy9yYW9XRlhPVnphU1hjSXRMZFVobHk3QjV2RlBnOGJnSm1ReUNSSWVjN3lZL29MRzVzbFhVZTVzOVlSS1Awc013a2JXaXJKelBjNUhxTVpFdzI5Yitkb3psWlBteUlzUVR2QWdUOCtmZEpYM1pZMTllNDZlQ1FMSjZ4dCtHOFBhNStRQWZQNmluSXd2dC9yMGZWV2hNT1A5TGVXRWxHR0Z6OThNNSt6cjdzZEN3NHNHa2h2MkR1UnBnQTNxcjdIYmpIU3BwWEVKZ2tldUpqQzlFSmkyUFNmS2dqaFdUaFhIeU1QMmRaNjhOQ2VMNHova3FCMS9Fc2M5UGM3OW84Zno2YUI1Um42RUdMYUxDZU1KOS9IVU5GZDBoakxuNkJzVTBmeHp0OGJXV1VGd1hCeGFSUVJjbEt6aVMzajhqVEw4amh5QVBVek1DMTMycFRYaXQ0Y3QzRkJ0amFhRDNaY3F2QzQyTW5CZW90SGV2QWFJRkdqOWZPYjdTbFhlRnUvWlBIbGhZSzlwN3pwZXB1dzZic0xROCtLNHRlRzgvVDNzY3gzWkhoV1Y4TVcvSWNmUDVBbERPVGJlZVNnRzN6K3lvTlBSSkZYOTZSYVBaL3VrU2NEdEVBemMxRnRWenZZUmxvYXFuVE9zd3BBNndmS04vMUljMytWei9udWE2ZFROSHVjWGFZeTlDL1Brb2NzZDV0L09ZVnNXaWZlcG51R2RNeTMreDVSMWRSVWZoR2RvVEJtZ09SNVQ4akNFbWNubm12SU9QTzJ0N2dUdC9FMU5PWnlZSi91cGg0K0tGd3puRDQ3Um1GMDFRdE8yZHhiVHMrYkNKaFBrYS9hQTVzdGZ4Mk1LTEVNWVZ1YVJCdWVtejNMWWx0VnFaODl0WGFWUEgzNm00ZnJicXNFQU5DVkt1TWxpSGJlRnJMdTZrV2s1NEFWQjVyODNhenF6S0dKRGhvdHI4ZVdaYlBsbWI5TUlyaURUM3Z2Rk1Sd2hBejJtMmU2K1ExRG8rang1MkZMd3JzbHhlNzV4L1YxSEkrQndmSlRtT29SVExLOEdnNitycGd5aExYTXQxdkZucFE5TTdsWkRCTnc4UTNtN0lBTHVjYUhGNmJTd0lGUkhNM1c4M3ZLTndydHl0Q2diRS9CYUNBTHBmZXJ2Y2I3Y09HVkhDZzhTVXp6RURsN0x3bmVBcXJ4N2xIeW0yM1A4OG0wWGZTYmJkN0JCcTV0UkRRWmVpZEo3NUcxcjFXVktIMTkza0tvWkJQbWsyOWk4UVZBUHhqWGllS2dLSHhFK1JyemNNQncvYi9sRzVjb0lURTNESkZPVUc1TWNvdlRKTUxjS2dRYmhYVCtGQjRtc0RjaFlBc00wUWlFZTAweWpOL2xvZEdsVFE2SHB5aVU3cHBDYzZyQ2wzKzVLYjNQOElvRzZkQnNVTmVGM3BpYlFJazFaL2FBQzdsbWhVbU9LRmliMEFGK1NuNG15dmdsb2IyZUpzckQyUGFRVmt0NVczVnJadFVKd1FqUFpQNFdIS0dQWjFtczBSemw0V3VYd3BjTmE0NWF1NHcycThyckhob1pydjZvR2c4NlVibjlWQW5YcFFwUnE4VE9vQ2FTNy85cGhZbEFHYVFSVWk0RFh5ckNRWmNwL1M3eXdKSmRsUGFlaWVlQ2tEZThpelV1Q2FWZXBLT3VRMG9QY1lmamJMYVRkZEZnT1h6cG93RVUrQXRrMGhTNnVCb1BPWkxZb1NxQXVFODl0Q2Q5anZteXNySHRmeXNNSU9FUVJ5eWp5K3dPKzVETEE4NzRFcGdJWGk3S29LeTh3TlpKdTUxOW96cHN2am52a3lZT0c0OFp0bkc4ZDRrTmttN29IME1yV0dxNXRVZzBFbkdsUDM3MFRxS3VKb1g0NTA3QXRwQXBDbGlkRmUybkt0b1NOSXBiTG4vb29jL0NtU1h0Ym8rd3ZhYnBPSEg4WlUwTWM0Y01mTkVzY1E0alh6Wk9CTlVjY241Mmpkc2dsWXpwRCtGTER0ZTJxZ1lEN1J1bVh5RFZOb0s3T21yS1ZhbWN2ZXJsQjhNUVJSaVpOTzAzbkZ1UlllMDM1aHJBQ0RtczVONFhRNGpDMSs0a291eldCRzVRYTFwU1kvS2FyblZONXcwNGtWMGU4TE5SL1RCR3V5cE9CSlowMzErYWdEWWRxaE5RemhpbTFMaDExNzJvZzROWVpCTGh0dXlnY1NZZHJ5dVVLa0RLRDRLa1RzMjRkYlU2eG4wc01HdHk2S092QVpLQnZMOFBYQXlTWFVTQ055ZTh0Mzl3QW5xSzZhWlFGdnRJV04wenpza3dVWlQvUGs0RTFqUWRYQmNFQmNtSEtiWkFmUHF3ZjFDMFoyNmJSaGl0TUcwZFhBeUUzMDJCU09kZGlIVGNxdmJkV2h0cHNNSmdKU21MVWZZQ0hxU1F0TXEyRWVTT0tnSHRFVlRaa1AyS3dNMGpEZnhLRFRHWUR3Ykt2WlJiNGpsTTdKNjdFZzVTYlJNc05ZRm9xODM2b2FSSyswakxtY0pMbVE1QVV3YkZ4dkNqejJtZjNjWTluVU5YcEFVUDVlQlZ0b2Jra0pGM1ZiZnBkYnVqWGhRYU5NbXFZVXgrRGNGdVdVdi9DTEdSYXp6czJhZ2RMbTlTUnlsbjc1U1laWG9GbzQ5Y3MzMXc3emRmbkRvdjg1VDNjcnJHeGpORUkrMVo1TUxDa2dFYkl3SXNwMWYya09IN1BvTWxVa0NrRkV1d3FWWDI1RVpTQmZ4bW1kamIyNHAxdUtIL01NUFYvUTFOV3JESEJCQ0ZNQzd0cnl2K1RZdi9DVkxTYnBoelpmVDR0ak1GVTdoSS9VbnhWTGdyeEJZOUsvY1h4YkJWc3I0S2dKR1Bpc0pDOWl5aTdXZk1pL1VNbDQzQUk2KzJTb1QzZFZERFBkeHhDektTTW9ML1k1eHIwbnltdThtazJnMFNsK2NvL2gxelNaSHIza1dMOHdSaDg3MUo2NHpwb2lLSGNGRndQeFNDc3MrRlJRL2tMS2ZScHhRZTdxMmVmYXpMNjlncVlYZk1FVFRiTnhvYXQ2c0xzMnZOT3dJeSt4WnJzcE4wVHlFeTdXTlF4UTNQT2lacSsrSUEzbkxiZG51MnVPdFlRNnZxY3YwTFR0aUVKWmZFZHI2bnJ0eUUya2Q3a2thazFiSnV4bzloODEvVWpQTFlOMU5IUExQZk5PSTk3bTBab0dvSVhzbXRQOE1sODdIWDlXNGJyWm9kb2d5bEQ3eVpEOW1qVCtjMGk5T1dwdkkyZ2llN3gyamF3VjRpSzNoWFgza0tvcmFud2lBUUUzTFdXdHYzend5V2ErMm11T1crazVyelBDWWRiYk10MWd2ODJUb1h0ZFUzYkZGSnkxK0ZCSldsdVNEN0grYVNqWHNScHgvZjBFV3dQRzY2SGtOazlvSURybjhMSDBrMGJDWGNROXZHNHZoVUwrcTg5K09DajF5RGlWbitnaFQ1YkVhSjlvenl1dnpHa1FHeFFIbXhyenYwSUYvT2V2bDcwVDcrZDdlR1JlQ21nbXRoRnpPbFhzWEh4U0RFWFBqR0U2Z2xQVzJkaHhKeHFNR1EyY3gwajVtcHlRdXJ3YW1Icmc1M3RHczE1U0d5b3k3STZqS2NpNnlMVzM0RWRHbko1R3p4aVRaVi96QkZ5a2sweFRDZGhXbGdRbzIrd1BHNjBxcHg2ZWo1UEg4S0dDMXpPQm5ndkFrK0VMTUV6K3kxUHJacXhUZlpJbjJ2aG1aMHJ6QTZMTmVlVnNybWpkc2oyVjB6emZxNHFCNE9Yc0IyNm5ZK0RhQzZiZ0ZhNkhIWVlFNGY3MUkxbGVrZ2NHaVJCS0V3Q1YzajhYc3BqOFVNMmpjREczcFp3ckRLdm1zQnlLZFBhVjd5L3V1U2NiN0dKUWhkUHQ0UDdIODgyeURZQ01KMmRxdHdyU0dKcWNNQnpQaEoxcjVEOGdtaHdWNlNrdlprMGkrODh6cDFvNkFmc2REK2FjR2lJYVVnLzNxaFpSNXREYXNidENWOFplTDNHRzU0VWgyamJBTUk4ancySjQyNmFzOVR5UnNIWWpQdW9FRlBVdUhTS3gvMU5TcUMrcVlSZFEvYnpCSXYxWTJwNlVJUXByUzBhcUt2WHhwbzRlRlJOa2ZMelZESUxpNGQ1T0RpQ0VBS1FFWWo2ZlVERC9WYit5bFM0MHBGSkJZazFaeGdjSDZVYWJ5N3F2SUVCcnlLMmhsdkVYcll0L0ZWc3lBYjZEbXhZTjRWMTREb2tpZndreEQwdjVIdWVxdEZ5am1Pc1lNTXR2dHdmOHhlNWpPKzNLV3NlUjdGR2JtcmJTeXIreWdsb1BnZXpKbWNqdEFqOGVxcDA5OHp3MGx3dlpXM3JGZ3YxYkdXSHdyMFJycjJNSXdIaUpwMzlpQjBtUzNMZ3dIbUh0Y05aZXJkY1pUdmFhUkcrdUU4WXBHcWZDTHptK2ZBNFhhTk5GWWFzNDh3SVg0anZ4ZkViUG5VYzcyTnppVXBqTFdpa1l4Sm9GNXdmTnlXZ1BmZlh6REtDRXJhUSs2VVAvM1lKYVJROUEyclZUOGFvNDNsQ0N3dDlqREcyTWtMOVpXeVBxeFdnanJzczl1MVcxbGpQOGF1M1NGWE82eFpsMmNZb2plMXBpWXEyWk1xdlBUTDA0U0VWUHRsa2xBd0xSUnI3NDBHcWN0QnpCYjNLV2dpK0x0ZXIrSG01b0lYY2Fja0ZEeTF5RG12Q25TendRMGJaNFNFMXlxQTBrWEVpMi91NmNyK2Exa0Ird25iaDZSem00MmVmM01UWEZDZzdTVXNya25xdURhaFZJNXdLQWZHOVdXdnZvc3hCdDJ2WVhqcVR4OVppUzMwOGhXY2owSlpQNFQ0MkpRVFl3dTJlek04OWFLcis1V3lmM3hxeUwzZXc3UnEyVmlUQ3dIcm1md1d0RjA0R0RNUWZDNFAyZXhFNkNRWlpkOWFLSHNvN3VOTkVNNFZUb3JNdzF1Smw3K2M2M2pQQzFBUExaR3pzUU45TUJkc3R2aTVQQS9yeTRBeEttM2lnUHBWZ2JOSFozSis5VkxqSStrMDhNTzdWR05PVHBpYmNqNWpTNzhhRGJoMFBvbHhNazJ3UzdnbXJaaG9ySnhnWWczdzl2MmNmcThwcndaT2dJbTVEY3phdDFPSTJyT0grL2JxcWRPYi8zYS9LQ2RqRGpXQWJzZ2NpOGpxUStlQ2hZQzNraUloOElDUVJoZCtJQjdaTXJkU0lQVUF0ZUlCRlNZdDByRXZ6Q3hzOFc0c0gxRDBxL0Y2ZElHeUQxNDAvSksxWVl5M21kc0J1czVFOWFLK3pwekN0bHdrdk01WlhuYUNjSGNNYXNQWmN3RzNid0VMa1BmYnl6YTVLTDNwR05aUCtKOEFBREFQWHdHRXJ2QVVBQUFBQVNVVk9SSzVDWUlJPSdcclxuICAgIH1cclxuICB9O1xyXG4gIHByaXZhdGUgZW52OiBUYkF1dGhFbnZpcm9ubWVudDtcclxuXHJcbiAgbG9nZ2VkT3V0JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgb2tNZXNzYWdlID0gJyc7XHJcblxyXG4gIGdldCByb3V0ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8Um91dGVyPihSb3V0ZXIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdCgnZW52JykgZW52OiBUYkF1dGhFbnZpcm9ubWVudCwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykge1xyXG4gICAgYXV0aFNlcnZpY2VJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB0aGlzLmVudiA9IF8uZGVmYXVsdHNEZWVwKGVudiwgVGJBdXRoU2VydmljZS5ERUZBVUxUX0VOViwgZW52KTtcclxuICAgIGNvbnNvbGUubG9nKCdUYkF1dGhFbnZpcm9ubWVudCcsIHRoaXMuZW52KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgLmdldCh0aGlzLmdldEJhc2VVcmwoKSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGltZW91dCg1MDAwKSxcclxuICAgICAgICBtYXAoX18gPT4gdHJ1ZSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKClcclxuICAgICAgLmNhdGNoKF9fID0+IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJpdG9ybmEgbGEgYmFzZSB1cmwgZGVsIGJhY2tlbmQsXHJcbiAgICogY2FyaWNhdGEgZGEgdW4gZmlsZSBkaSBjb25maWd1cmF6aW9uZSBjYXJpY2F0byBkaW5hbWljYW1lbnRlIChhc3NldHMvZW52aXJvbm1lbnQuanNvbilcclxuICAgKi9cclxuICBnZXRCYXNlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVybDtcclxuICBnZXRTbmFwc2hvdFNlcnZpY2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguc25hcHNob3RTZXJ2aWNlVXJsO1xyXG4gIGdldExvZ2luUGFnZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5sb2dpblBhZ2VVcmw7XHJcblxyXG4gIC8qXHJcbiAge1xyXG4gICAgdHlwZTogSldULFxyXG4gICAgYXBwaWQ6IE00LFxyXG4gICAgc2VjdXJpdHlWYWx1ZTogand0RW5jb2RlZFxyXG4gIH1cclxuKi9cclxuICBnZXRBdXRob3JpemF0aW9uSGVhZGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBUeXBlOiAnSldUJyxcclxuICAgICAgQXBwSWQ6ICdNNCcsXHJcbiAgICAgIFNlY3VyaXR5VmFsdWU6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcmVsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2F1dGhTZXJ2aWNlLmxvZ2luIC0gbG9naW5SZXF1ZXN0JywgbG9naW5SZXF1ZXN0KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0UHJlTG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTkpIHtcclxuICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBjYW1iaW8gcGFzc3dvcmQgZSBudW92byB0ZW50YXRpdm8gZGkgbG9naW5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENoYW5nZSBQYXNzd29yZCBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2VQYXNzd29yZERpYWxvZyhsb2dpblJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQWNjb3VudCBjb25maXJtYXRpb24gTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgYXR0aXZhcmUgbCdhY2NvdW50IGNoZSBub24gaGEgYW5jb3JhIGVmZmV0dHVhdG8gbGEgcHJvY2VkdXJhP1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgbG9naW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPExvZ2luUmVzcG9uc2U+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRoU2VydmljZS5sb2dpbiAtIGxvZ2luUmVxdWVzdCcsIGxvZ2luUmVxdWVzdCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0TG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTkpIHtcclxuICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBjYW1iaW8gcGFzc3dvcmQgZSBudW92byB0ZW50YXRpdm8gZGkgbG9naW5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENoYW5nZSBQYXNzd29yZCBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2VQYXNzd29yZERpYWxvZyhsb2dpblJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQWNjb3VudCBjb25maXJtYXRpb24gTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgYXR0aXZhcmUgbCdhY2NvdW50IGNoZSBub24gaGEgYW5jb3JhIGVmZmV0dHVhdG8gbGEgcHJvY2VkdXJhP1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBMb2dpbiBmYWlsdXJlLCByZXN1bHQgY29kZSAnLCBsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpblJlcXVlc3QgYnkgYWNjb3VudCcgKyBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgKyAnIHRva2VuOicgKyBsb2dpblJlcXVlc3QudG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYXN5bmMgb3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KSB7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIFRpdGxlOiAnQ2hhbmdlIFBhc3N3b3JkJyxcclxuICAgICAgICBNZXNzYWdlOiAnUGxlYXNlIGNob29zZSBhIG5ldyBwYXNzd29yZDogJyxcclxuICAgICAgICBQbGFjZUhvbGRlcjogJ1Bhc3N3b3JkJyxcclxuICAgICAgICBQbGFjZUhvbGRlcjI6ICdDb25maXJtIFBhc3N3b3JkJyxcclxuICAgICAgICBOZXdQd2Q6ICcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShhc3luYyAoZGF0YTogeyBOZXdQd2Q6IHN0cmluZyB8IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgaWYgKGRhdGEuTmV3UHdkID09PSB1bmRlZmluZWQgfHwgZGF0YS5OZXdQd2QgPT09ICcnKSB7XHJcbiAgICAgICAgYWxlcnQoJ1dyaXRlIGEgdmFsaWQgQWNjb3VudE5hbWUnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgY29uc3QgY3BpOiBDaGFuZ2VQYXNzd29yZEluZm8gPSBuZXcgQ2hhbmdlUGFzc3dvcmRJbmZvKCk7XHJcbiAgICAgIGNwaS5BY2NvdW50TmFtZSA9IGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZTtcclxuICAgICAgY3BpLklnbm9yZU9sZFBhc3N3b3JkID0gZmFsc2U7XHJcbiAgICAgIGNwaS5KV1RUb2tlbiA9IGxvZ2luUmVxdWVzdC50b2tlbjtcclxuICAgICAgY3BpLk5ld1Bhc3N3b3JkID0gZGF0YS5OZXdQd2Q7XHJcbiAgICAgIGNwaS5QYXNzd29yZCA9IGxvZ2luUmVxdWVzdC5wYXNzd29yZDtcclxuXHJcbiAgICAgIGxvZ2luUmVxdWVzdC5wYXNzd29yZCA9IGRhdGEuTmV3UHdkO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNoYW5nZVBhc3N3b3JkKGNwaSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaVxyXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5SZXN1bHQpIHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMub2tNZXNzYWdlID0gJ1Bhc3N3b3JkIGNoYW5nZWQgc3VjY2VzZnVsbHkhJztcclxuICAgICAgICAvL2xhIGxvZ2luIGxhIGZhICBhIG1hbm8gYWx0cmltZW50aSBtaSBwZXJkb1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vZXJyb3JlIGdpw6AgaW5kaWNhdG9cclxuICAgICAgICBsb2dpblJlcXVlc3QudG9rZW4gPSAnJztcclxuICAgICAgICBsb2dpblJlcXVlc3QucGFzc3dvcmQgPSAnJztcclxuICAgICAgICBsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgbG9naW5SZXF1ZXN0LmFwcElkID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaXNWYWxpZFRva2VuKGF1dGh0b2tlbiA9ICcnKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgIGlmICghYXV0aHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IG9wcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICBvcHJlcy5NZXNzYWdlID0gJ05vIGF1dGh0b2tlbic7XHJcbiAgICAgIHJldHVybiBvcHJlcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRJc1ZhbGlkVG9rZW5VcmwoKSwgbmV3IElzVmFsaWRUb2tlblJlcXVlc3QoYXV0aHRva2VuKSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKChqT2JqOiBPcGVyYXRpb25SZXN1bHQpID0+IHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4gLSByZXNwb25zZScsIGpPYmopO1xyXG4gICAgICAgICAgaWYgKCFqT2JqLlJlc3VsdCkge1xyXG4gICAgICAgICAgICBqT2JqLk1lc3NhZ2UgPSBqT2JqLk1lc3NhZ2UgPyBqT2JqLk1lc3NhZ2UgOiAnaXNWYWxpZFRva2VuIGVycm9yLi4uJztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBUb2tlbiBWYWxpZGF0aW9uIGZhaWx1cmUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuOiAnICsgYXV0aHRva2VuKTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBqT2JqLk1lc3NhZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICByZXMuQ29kZSA9IDY2NjtcclxuXHJcbiAgICAgICAgICBpZiAoIXRoaXMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnVybC5pbmNsdWRlcyh0aGlzLmdldExvZ2luUGFnZVVybCgpKSlcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZ2V0TG9naW5QYWdlVXJsKCldKTtcclxuICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbXBhbmllc0ZvclVzZXIodXNlcjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0U3Vic0tleXNGb3JBY2NvdW50VXJsKCkgKyB1c2VyKS5waXBlKFxyXG4gICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICByZXR1cm4gcmVzLkNvbnRlbnQgJiYgcmVzLkNvbnRlbnQuc3Vic2NyaXB0aW9ucyA/IHJlcy5Db250ZW50LnN1YnNjcmlwdGlvbnMgOiBbXTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SXNWYWxpZFRva2VuVXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2lzdmFsaWR0b2tlbi8nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExvZ2luVXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ2luLyc7XHJcbiAgfVxyXG4gIGdldFByZUxvZ2luVXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ2luLyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TG9nb3V0VXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ29mZi8nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENoYW5nZVBhc3N3b3JkQXBpVXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKSArICdjaGFuZ2VwYXNzd29yZC8nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJlc2V0UGFzc3dvcmRVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDaGFuZ2VQYXNzd29yZFVybCgpICsgJ3Jlc2V0cGFzc3dvcmQvJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdWJzS2V5c0ZvckFjY291bnRVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50Lyc7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjaGFuZ2VQYXNzd29yZChjcGk6IENoYW5nZVBhc3N3b3JkSW5mbyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICBjb25zdCBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY3BpKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRBcGlVcmwoKSwgYm9keVN0cmluZywgeyBoZWFkZXJzIH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzLk1lc3NhZ2UgKyAnIChDb2RlOicgKyByZXMuQ29kZSArICcpJztcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICByZXMuQ29kZSA9IDY2MjtcclxuICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVzZXRwYXNzd29yZChhY2NuYW1lOiBzdHJpbmcpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGFsaWduXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRSZXNldFBhc3N3b3JkVXJsKCkgKyBhY2NuYW1lLCB7IGhlYWRlcnMgfSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICByZXMuQ29kZSA9IDY2MztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgcmVzLk1lc3NhZ2UgPSBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9Llxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICAgICAgcmVzLkNvZGUgPSA2NjE7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwuaW5jbHVkZXModGhpcy5nZXRMb2dpblBhZ2VVcmwoKSkpXHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dvZmYoKSB7XHJcbiAgICBjb25zdCBsb2dvZmZSZXF1ZXN0OiBMb2dvZmZSZXF1ZXN0ID0gbmV3IExvZ29mZlJlcXVlc3QodGhpcy5nZXRUb2tlbigpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PExvZ29mZlJlc3BvbnNlPih0aGlzLmdldExvZ291dFVybCgpLCBsb2dvZmZSZXF1ZXN0KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKGxvZ29mZlJlc3BvbnNlOiBMb2dvZmZSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGxvZ29mZlJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENsZWFyaW5nIHN0b3JhZ2UgZHVlIHRvIExvZ29mZicpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlZE91dCQubmV4dCgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBsb2dvZmZSZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbihhY2NvdW50TmFtZTogc3RyaW5nLCBzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5nZXRJbnN0YW5jZXNNYXBGb3JVc2VyKGFjY291bnROYW1lKS5zdWJzY3JpYmUoXHJcbiAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFwOiBBcnJheTx7IFN1YnNjcmlwdGlvbktleTogc3RyaW5nOyBEZXNjcmlwdGlvbjogc3RyaW5nOyBJbnN0YW5jZUtleTogc3RyaW5nIH0+ID0gcmVzIGFzIEFycmF5PHtcclxuICAgICAgICAgIFN1YnNjcmlwdGlvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgIEluc3RhbmNlS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgfT47XHJcbiAgICAgICAgaWYgKCFtYXAgfHwgbWFwLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhyb3cgJ2luc3RhbmNlTWFwIGlzIGludmFsaWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjdXJyZW50SW5zdGFuY2VLZXk6IHN0cmluZyA9IG1hcC5maWx0ZXIoayA9PiBrLlN1YnNjcmlwdGlvbktleSA9PT0gc3Vic2NyaXB0aW9uS2V5KS5tYXAoaiA9PiBqLkluc3RhbmNlS2V5KVswXTtcclxuICAgICAgICB0aGlzLmdldFNuYXBzaG90KGN1cnJlbnRJbnN0YW5jZUtleSwgc3Vic2NyaXB0aW9uS2V5KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlcyB8fCByZXMgPT09IFtdIHx8IHJlcy5sZW5ndGggPT09IDApIHRocm93ICdzbmFwc2hvdCBpcyBlbXB0eSc7XHJcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgbm93IHRoZSBzbmFwc2hvdFxyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlczogQXJyYXk8eyBTZXJ2aWNlVHlwZTogc3RyaW5nOyBVcmw6IHN0cmluZzsgUHJvZHVjdFZlcnNpb246IHN0cmluZzsgUG9ydDogbnVtYmVyIH0+ID0gcmVzW1xyXG4gICAgICAgICAgICAgICdTZXJ2aWNlcydcclxuICAgICAgICAgICAgXSBhcyBBcnJheTx7IFNlcnZpY2VUeXBlOiBzdHJpbmc7IFVybDogc3RyaW5nOyBQcm9kdWN0VmVyc2lvbjogc3RyaW5nOyBQb3J0OiBudW1iZXIgfT47XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVkaXJlY3RVcmw6IHN0cmluZyA9IHNlcnZpY2VzLmZpbHRlcihpID0+IGkuU2VydmljZVR5cGUgPT09ICdNNEZST05URU5EJyB8fCBpLlNlcnZpY2VUeXBlID09PSAnQVBQX0ZST05URU5EJykubWFwKGYgPT4gZi5VcmwpWzBdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzaWduYXRlZCByZWRpcmVjdCBpcyAke3JlZGlyZWN0VXJsfWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFzZVJlZGlyZWN0VXJsID0gYCR7cmVkaXJlY3RVcmx9P2p3dD0ke3RoaXMuZ2V0VG9rZW4oKX0mc3ViS2V5PSR7c3Vic2NyaXB0aW9uS2V5fWA7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzaWduYXRlZCBmaW5hbCByZWRpcmVjdCBpcyAke2Jhc2VSZWRpcmVjdFVybH1gKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RMb2dnZWRSZWRpcmVjdCcsIGJhc2VSZWRpcmVjdFVybCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnaHR0cDovLycgKyBiYXNlUmVkaXJlY3RVcmw7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NuYXBzaG90IGNhbm5vdCBiZSBvYnRhaW5lZCcpO1xyXG4gICAgICAgICAgICB0aHJvdyAnc25hcHNob3QgY2Fubm90IGJlIG9idGFpbmVkJztcclxuICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRSZWRpcmVjdFVybCgpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24gaWEgYWJvdXQgdG8gZmFpbC4uLicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgdGhyb3cgJ2dldEluc3RhbmNlc01hcEZvclVzZXIgZmFpbGVkJztcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldEluc3RhbmNlc01hcEZvclVzZXIodXNlcjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0SW5zdGFuY2VzTWFwRm9yQWNjb3VudFVybCgpICsgdXNlcikucGlwZShcclxuICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHJlcy5Db250ZW50O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTbmFwc2hvdChpbnN0YW5jZUtleTogc3RyaW5nLCBzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldFNuYXBzaG90U2VydmljZVVybCgpICsgaW5zdGFuY2VLZXkgKyAnP3N1YnNjcmlwdGlvbktleT0nICsgc3Vic2NyaXB0aW9uS2V5KS5waXBlKFxyXG4gICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICByZXR1cm4gcmVzLkNvbnRlbnQ7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEluc3RhbmNlc01hcEZvckFjY291bnRVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnaW5zdGFuY2VzTWFwLyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VU0VSX0dBVEVXQVlfQVVUT1JFRElSRUNUKTtcclxuICB9XHJcblxyXG4gIHN0b3JhZ2VTdWJzY3JpcHRpb25EYXRhKHN1YnNjcmlwdGlvbktleTogc3RyaW5nLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHJlc3BDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXHJcbiAgICAgICAgOiBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3M7XHJcbiAgICBjb25zdCByZXNwVWlDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICBsb2dpblJlc3BvbnNlLkxhbmd1YWdlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5MYW5ndWFnZS5sZW5ndGggPT09IDBcclxuICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcclxuICAgICAgICA6IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2U7XHJcblxyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5KV1QsIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4pO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIHJlc3BDdWx0dXJlKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCByZXNwVWlDdWx0dXJlKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTLCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLlJvbGVzKSk7XHJcblxyXG4gICAgICBpZiAobG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUsIGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpO1xyXG4gICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25LZXkpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5KV1QsIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHJlc3BVaUN1bHR1cmUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTLCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLlJvbGVzKSk7XHJcblxyXG4gICAgICBpZiAobG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCBsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKTtcclxuICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZUN1bHR1cmUoY3VsdHVyZTogc3RyaW5nLCB1aUN1bHR1cmU6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCB1aUN1bHR1cmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbigpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICB9XHJcblxyXG4gIGdldEFjY291bnROYW1lKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSk7XHJcbiAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3Vic2NyaXB0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XHJcbiAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3Vic2NyaXB0aW9uRGVzY3JpcHRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcclxuICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XHJcbiAgfVxyXG5cclxuICBnZXRDdWx0dXJlKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgfVxyXG5cclxuICBnZXRVSUN1bHR1cmUoKSB7XHJcbiAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICB9XHJcblxyXG4gIGdldEF1dGhTZXJ2aWNlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVybDtcclxuICBnZXRSZWRpcmVjdFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5yZWRpcmVjdFVybDtcclxuICBnZXRDcmVhdGVBY2NvdW50VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmNyZWF0ZUFjY291bnRVcmw7XHJcbiAgZ2V0Q2hhbmdlUGFzc3dvcmRVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguY2hhbmdlUGFzc3dvcmRVcmw7XHJcbiAgaGFzU3Vic2NyaXB0aW9uU2VsZWN0aW9uID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zdWJzY3JpcHRpb25TZWxlY3Rpb247XHJcbiAgc2hvd1NpZ25VcCA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc2hvd1NpZ25VcDtcclxuICBnZXRBcHBJZCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5hcHBJZDtcclxuICBpc1Nlc3Npb25TdG9yYWdlID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZTtcclxuICBnZXRMb2dvVVJMID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmxvZ29VUkw7XHJcbiAgaXNSZWRpcmVjdEV4dGVybmFsID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5pc1JlZGlyZWN0RXh0ZXJuYWw7XHJcbn1cclxuIl19