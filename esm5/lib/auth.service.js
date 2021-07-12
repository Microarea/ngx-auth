import { __awaiter, __generator } from "tslib";
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
import { AlertDialogComponent } from './pages/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/material/dialog";
var authServiceInstance;
export var authService = function () { return authServiceInstance; };
var TbAuthService = /** @class */ (function () {
    function TbAuthService(env, http, injector, dialog) {
        var _this = this;
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
        this.getBaseUrl = function () { return _this.env.auth.url; };
        this.getSnapshotServiceUrl = function () { return _this.env.auth.snapshotServiceUrl; };
        this.getLoginPageUrl = function () { return _this.env.auth.loginPageUrl; };
        this.getAuthServiceUrl = function () { return _this.env.auth.url; };
        this.getIupUrl = function () { return _this.env.auth.iupurl; };
        this.getRedirectUrl = function () { return _this.env.auth.redirectUrl; };
        this.getUserGatewayUrl = function () { return _this.env.auth.userGatewayUrl; };
        this.getCreateAccountUrl = function () { return _this.env.auth.createAccountUrl; };
        this.getChangePasswordUrl = function () { return _this.env.auth.changePasswordUrl; };
        this.hasSubscriptionSelection = function () { return _this.env.auth.subscriptionSelection; };
        this.showSignUp = function () { return _this.env.auth.showSignUp; };
        this.getAppId = function () { return _this.env.auth.appId; };
        this.isSessionStorage = function () { return _this.env.auth.sessionStorage; };
        this.getLogoURL = function () { return _this.env.auth.logoURL; };
        this.isRedirectExternal = function () { return _this.env.auth.isRedirectExternal; };
        authServiceInstance = this;
        this.env = _.defaultsDeep(env, TbAuthService.DEFAULT_ENV, env);
        console.log('TbAuthEnvironment', this.env);
    }
    Object.defineProperty(TbAuthService.prototype, "router", {
        get: function () {
            return this.injector.get(Router);
        },
        enumerable: true,
        configurable: true
    });
    TbAuthService.prototype.checkConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http
                            .get(this.getBaseUrl())
                            .pipe(timeout(5000), map(function (__) { return true; }))
                            .toPromise()
                            .catch(function (__) { return false; })];
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
    TbAuthService.prototype.getAuthorizationHeader = function () {
        return JSON.stringify({
            Type: 'JWT',
            AppId: 'M4',
            SecurityValue: this.getToken(),
        });
    };
    TbAuthService.prototype.prelogin = function (loginRequest) {
        // console.log('authService.login - loginRequest', loginRequest);
        var _this = this;
        return this.http
            .post(this.getPreLoginUrl(), loginRequest)
            .pipe(map(function (loginResponse) {
            if (!loginResponse.Result) {
                if (loginResponse.ResultCode === 19) {
                    // mi sposto su pagina per cambio password e nuovo tentativo di login
                    console.log('AuthService: Change Password Needed');
                    _this.openChangePasswordDialog(loginRequest);
                }
                else if (loginResponse.ResultCode === 4) {
                    console.log('AuthService: Account confirmation Needed');
                    // mi sposto su pagina per attivare l'account che non ha ancora effettuato la procedura?
                }
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                _this.errorMessage = loginResponse.Message;
                return loginResponse;
            }
            return loginResponse;
        }))
            .toPromise();
    };
    TbAuthService.prototype.login = function (loginRequest) {
        var _this = this;
        // console.log('authService.login - loginRequest', loginRequest);
        return this.http
            .post(this.getLoginUrl(), loginRequest)
            .pipe(map(function (loginResponse) {
            if (!loginResponse.Result) {
                if (loginResponse.ResultCode === 19) {
                    // mi sposto su pagina per cambio password e nuovo tentativo di login
                    console.log('AuthService: Change Password Needed');
                    _this.openChangePasswordDialog(loginRequest);
                }
                else if (loginResponse.ResultCode === 4) {
                    console.log('AuthService: Account confirmation Needed');
                    // mi sposto su pagina per attivare l'account che non ha ancora effettuato la procedura?
                }
                else {
                    _this.clearStorage();
                    console.log('AuthService: Clearing storage due to Login failure, result code ', loginResponse.ResultCode);
                    console.log('LoginRequest by account' + loginRequest.accountName + ' token:' + loginRequest.token);
                }
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                console.log(loginResponse.Message);
                _this.errorMessage = loginResponse.Message;
                return loginResponse;
            }
            _this.storageData(loginResponse);
            return loginResponse;
        }))
            .toPromise();
    };
    // ---------------------------------------------------------------------------
    TbAuthService.prototype.openAlertDialog = function (info, title, dontshow) {
        return __awaiter(this, void 0, void 0, function () {
            var dialogRef;
            return __generator(this, function (_a) {
                this.errorMessage = '';
                dialogRef = this.dialog.open(AlertDialogComponent, {
                    data: {
                        Title: title,
                        Message: info,
                        DontShow: dontshow
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    // ---------------------------------------------------------------------------
    TbAuthService.prototype.openChangePasswordDialog = function (loginRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var dialogRef;
            var _this = this;
            return __generator(this, function (_a) {
                this.errorMessage = '';
                dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
                    data: {
                        Title: 'Change Password',
                        Message: 'Please choose a new password: ',
                        PlaceHolder: 'Password',
                        PlaceHolder2: 'Confirm Password',
                        NewPwd: '',
                    },
                });
                dialogRef.afterClosed().subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var cpi, result;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (data === undefined)
                                    return [2 /*return*/];
                                if (data.NewPwd === undefined || data.NewPwd === '') {
                                    alert('Write a valid AccountName');
                                    return [2 /*return*/];
                                }
                                this.errorMessage = '';
                                cpi = new ChangePasswordInfo();
                                cpi.AccountName = loginRequest.accountName;
                                cpi.IgnoreOldPassword = false;
                                cpi.JWTToken = loginRequest.token;
                                cpi.NewPassword = data.NewPwd;
                                cpi.Password = loginRequest.password;
                                loginRequest.password = data.NewPwd;
                                return [4 /*yield*/, this.changePassword(cpi).catch(function (err) {
                                        _this.errorMessage = err.error && err.error.Message;
                                        return;
                                    })];
                            case 1:
                                result = _a.sent();
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
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    TbAuthService.prototype.isValidToken = function (authtoken) {
        if (authtoken === void 0) { authtoken = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var opres;
            var _this = this;
            return __generator(this, function (_a) {
                if (!authtoken) {
                    opres = new OperationResult();
                    opres.Message = 'No authtoken';
                    return [2 /*return*/, opres];
                }
                return [2 /*return*/, this.http
                        .post(this.getIsValidTokenUrl(), new IsValidTokenRequest(authtoken))
                        .pipe(tap(function (jObj) {
                        // console.log('isValidToken - response', jObj);
                        if (!jObj.Result) {
                            jObj.Message = jObj.Message ? jObj.Message : 'isValidToken error...';
                            console.log('AuthService: Clearing storage due to Token Validation failure');
                            console.log('token: ' + authtoken);
                            _this.clearStorage();
                            _this.errorMessage = jObj.Message;
                        }
                    }), catchError(function (error) {
                        console.error("Error Code: " + error.status + "\nMessage: " + error.message);
                        var res = new OperationResult();
                        res.Code = 666;
                        if (!_this.router.routerState.snapshot.url.includes(_this.getLoginPageUrl()))
                            _this.router.navigate([_this.getLoginPageUrl()]);
                        return of(res);
                    }))
                        .toPromise()];
            });
        });
    };
    TbAuthService.prototype.getCompaniesForUser = function (user) {
        return this.http.get(this.getSubsKeysForAccountUrl() + user).pipe(map(function (res) {
            if (!res || !res.Result)
                return [];
            return res.Content && res.Content.subscriptions ? res.Content.subscriptions : [];
        }));
    };
    TbAuthService.prototype.getIsValidTokenUrl = function () {
        return this.getBaseUrl() + 'isvalidtoken/';
    };
    TbAuthService.prototype.getLoginUrl = function () {
        return this.getBaseUrl() + 'login/';
    };
    TbAuthService.prototype.getPreLoginUrl = function () {
        return this.getBaseUrl() + 'login/';
    };
    TbAuthService.prototype.getLogoutUrl = function () {
        return this.getBaseUrl() + 'logoff/';
    };
    TbAuthService.prototype.getChangePasswordApiUrl = function () {
        return this.getChangePasswordUrl() + 'changepassword/';
    };
    TbAuthService.prototype.getResetPasswordUrl = function () {
        return this.getChangePasswordUrl() + 'resetpassword/';
    };
    TbAuthService.prototype.getSubsKeysForAccountUrl = function () {
        return this.getBaseUrl() + 'subscriptionskeysforaccount/';
    };
    TbAuthService.prototype.changePassword = function (cpi) {
        return __awaiter(this, void 0, void 0, function () {
            var bodyString, headers;
            var _this = this;
            return __generator(this, function (_a) {
                bodyString = JSON.stringify(cpi);
                headers = new HttpHeaders({ 'Content-Type': 'application/json' });
                // tslint:disable-next-line: align
                return [2 /*return*/, this.http
                        .post(this.getChangePasswordApiUrl(), bodyString, { headers: headers })
                        .pipe(map(function (res) {
                        if (!res || !res.Result) {
                            _this.errorMessage = res.Message + ' (Code:' + res.Code + ')';
                            return res;
                        }
                        return res;
                    }), catchError(function (error) {
                        console.error("Error Code: " + error.status + "\nMessage: " + error.message);
                        var res = new OperationResult();
                        res.Code = 662;
                        return of(res);
                    }))
                        .toPromise()];
            });
        });
    };
    TbAuthService.prototype.resetpassword = function (accname) {
        return __awaiter(this, void 0, void 0, function () {
            var headers;
            var _this = this;
            return __generator(this, function (_a) {
                headers = new HttpHeaders({ 'Content-Type': 'application/json' });
                // tslint:disable-next-line: align
                return [2 /*return*/, this.http
                        .post(this.getResetPasswordUrl() + accname, { headers: headers })
                        .pipe(map(function (res) {
                        if (!res) {
                            res = new OperationResult();
                            res.Code = 663;
                        }
                        return res;
                    }), catchError(function (error) {
                        console.error("Error Code: " + error.status + ".\nMessage: " + error.message);
                        var res = new OperationResult();
                        res.Message = "Error Code: " + error.status + ".\nMessage: " + error.message;
                        res.Code = 661;
                        if (!_this.router.routerState.snapshot.url.includes(_this.getLoginPageUrl()))
                            _this.router.navigate([_this.getLoginPageUrl()]);
                        return of(res);
                    }))
                        .toPromise()];
            });
        });
    };
    TbAuthService.prototype.logoff = function () {
        var _this = this;
        var logoffRequest = new LogoffRequest(this.getToken());
        return this.http
            .post(this.getLogoutUrl(), logoffRequest)
            .pipe(map(function (logoffResponse) {
            if (logoffResponse.Result) {
                console.log('AuthService: Clearing storage due to Logoff');
                _this.clearStorage();
                _this.loggedOut$.next();
            }
            return logoffResponse;
        }))
            .toPromise();
    };
    TbAuthService.prototype.navigateUserGateway = function () {
        console.log('entering navigateUserGateway..');
        var userGatewayUrl = this.getUserGatewayUrl();
        // if usergateway url exists, then redirect to it
        if (userGatewayUrl !== '') {
            console.log("Found getUserGatewayUrl " + userGatewayUrl);
            document.location.href = userGatewayUrl;
            return;
        }
        // otherwise, redirect to login
        this.router.navigate([this.getLoginPageUrl()]);
    };
    TbAuthService.prototype.getRedirectUrlForSubscription = function (accountName, subscriptionKey) {
        var _this = this;
        this.getInstancesMapForUser(accountName).subscribe(function (res) {
            var map = res;
            if (!map || map.length === 0) {
                throw 'instanceMap is invalid';
            }
            var currentInstanceKey = map.filter(function (k) { return k.SubscriptionKey === subscriptionKey; }).map(function (j) { return j.InstanceKey; })[0];
            _this.getSnapshot(currentInstanceKey, subscriptionKey).subscribe(function (res) {
                if (!res || res === [] || res.length === 0)
                    throw 'snapshot is empty';
                // we have now the snapshot
                var services = res['Services'];
                var redirectUrl = services
                    .filter(function (i) { return i.ServiceType === 'M4FRONTEND' || i.ServiceType === 'APP_FRONTEND'; })
                    .map(function (f) { return f.Url; })[0];
                console.log("Designated redirect is " + redirectUrl);
                var baseRedirectUrl = redirectUrl + "?jwt=" + _this.getToken() + "&subKey=" + subscriptionKey + "&instanceKey=" + currentInstanceKey;
                console.log("Designated final redirect is " + baseRedirectUrl);
                localStorage.setItem('lastLoggedRedirect', baseRedirectUrl);
                document.location.href = 'http://' + baseRedirectUrl;
            }, function (err) {
                console.log('snapshot cannot be obtained');
                throw 'snapshot cannot be obtained';
                //this.router.navigate([this.getRedirectUrl()]);
            });
        }, function (err) {
            console.log('getRedirectUrlForSubscription ia about to fail...');
            console.log(err);
            throw 'getInstancesMapForUser failed';
        });
    };
    TbAuthService.prototype.getInstancesMapForUser = function (user) {
        return this.http.get(this.getInstancesMapForAccountUrl() + user).pipe(map(function (res) {
            if (!res || !res.Result)
                return [];
            return res.Content;
        }));
    };
    TbAuthService.prototype.getCalendar = function (subscriptionKey) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.getCalendarUrl() + "?SubscriptionKey=" + subscriptionKey)
                            .pipe(map(function (res) {
                            if (!res || !res.Result) {
                                _this.errorMessage = res.Message + ' (Code:' + res.Code + ')';
                                return res;
                            }
                            return res;
                        }), catchError(function (error) {
                            console.error("Error Code: " + error.status + "\nMessage: " + error.message);
                            var res = new OperationResult();
                            res.Code = 662;
                            return of(res);
                        }))
                            .toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TbAuthService.prototype.getSnapshot = function (instanceKey, subscriptionKey) {
        return this.http.get(this.getSnapshotServiceUrl() + instanceKey + '?subscriptionKey=' + subscriptionKey).pipe(map(function (res) {
            if (!res || !res.Result)
                return [];
            return res.Content;
        }));
    };
    TbAuthService.prototype.getInstancesMapForAccountUrl = function () {
        return this.getBaseUrl() + 'instancesMap/';
    };
    TbAuthService.prototype.getCalendarUrl = function () {
        return this.getIupUrl() + 'calendarjobs/';
    };
    TbAuthService.prototype.clearStorage = function () {
        sessionStorage.removeItem(StorageVars.JWT);
        sessionStorage.removeItem(StorageVars.CULTURE);
        sessionStorage.removeItem(StorageVars.UI_CULTURE);
        sessionStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        localStorage.removeItem(StorageVars.JWT);
        localStorage.removeItem(StorageVars.CULTURE);
        localStorage.removeItem(StorageVars.UI_CULTURE);
        localStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        localStorage.removeItem(StorageVars.USER_GATEWAY_AUTOREDIRECT);
    };
    TbAuthService.prototype.storageSubscriptionData = function (subscriptionKey, subscriptionDescription) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
            sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
        }
        else {
            localStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
            localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
        }
    };
    TbAuthService.prototype.storageQueryParams = function (subscriptionKey, instanceKey) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
        }
        else {
            localStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
        }
        this.setInstanceKey(instanceKey);
    };
    TbAuthService.prototype.storageData = function (loginResponse) {
        var respCulture = loginResponse.RegionalSettings === undefined || loginResponse.RegionalSettings.length === 0
            ? window.navigator.language
            : loginResponse.RegionalSettings;
        var respUiCulture = loginResponse.Language === undefined || loginResponse.Language.length === 0
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
    };
    TbAuthService.prototype.saveCulture = function (culture, uiCulture) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.CULTURE, culture);
            sessionStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
        }
        else {
            localStorage.setItem(StorageVars.CULTURE, culture);
            localStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
        }
    };
    TbAuthService.prototype.getToken = function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.JWT);
        else
            return localStorage.getItem(StorageVars.JWT);
    };
    TbAuthService.prototype.getAccountName = function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.ACCOUNT_NAME);
        else
            return localStorage.getItem(StorageVars.ACCOUNT_NAME);
    };
    TbAuthService.prototype.getSubscription = function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION);
    };
    TbAuthService.prototype.getSubscriptionDescription = function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
    };
    TbAuthService.prototype.getCulture = function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.CULTURE);
        else
            return localStorage.getItem(StorageVars.CULTURE);
    };
    TbAuthService.prototype.getUICulture = function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.UI_CULTURE);
        else
            return localStorage.getItem(StorageVars.UI_CULTURE);
    };
    TbAuthService.prototype.getInstanceKey = function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.INSTANCEKEY);
        else
            return localStorage.getItem(StorageVars.INSTANCEKEY);
    };
    TbAuthService.prototype.setInstanceKey = function (instanceKey) {
        if (this.env.auth.sessionStorage)
            sessionStorage.setItem(StorageVars.INSTANCEKEY, instanceKey);
        else
            localStorage.getItem(StorageVars.INSTANCEKEY);
    };
    TbAuthService.DEFAULT_ENV = {
        auth: {
            url: 'http://localhost:10344/api/',
            iupurl: 'http://localhost:52172/api/',
            createAccountUrl: 'http://localhost:4200',
            changePasswordUrl: 'http://localhost:56392/api/',
            subscriptionSelection: false,
            showSignUp: false,
            appId: 'M4',
            redirectUrl: '/',
            userGatewayUrl: '',
            isRedirectExternal: false,
            loginPageUrl: 'login',
            sessionStorage: false,
            snapshotServiceUrl: '',
            logoURL: 'https://magocloud-store-pdf.s3.eu-west-1.amazonaws.com/login-logo.png',
        },
    };
    /** @nocollapse */ TbAuthService.ɵfac = function TbAuthService_Factory(t) { return new (t || TbAuthService)(i0.ɵɵinject('env'), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i2.MatDialog)); };
    /** @nocollapse */ TbAuthService.ɵprov = i0.ɵɵdefineInjectable({ token: TbAuthService, factory: TbAuthService.ɵfac, providedIn: 'root' });
    return TbAuthService;
}());
export { TbAuthService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TbAuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }, { type: i1.HttpClient }, { type: i0.Injector }, { type: i2.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQXFCLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxNQUFNLEVBQXVCLE1BQU0saUJBQWlCLENBQUM7QUFFOUQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRCxPQUFPLEVBQWdCLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFckQsSUFBSSxtQkFBa0MsQ0FBQztBQUN2QyxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDO0FBRXJEO0lBa0NJ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QztTQXZqQlksYUFBYTtrREFBYixhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7c0JBZ0NnQixNQUFNO3VCQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwLCBtYXAsIGNhdGNoRXJyb3IsIHRpbWVvdXQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XHJcblxyXG5pbXBvcnQgeyBMb2dpblJlcXVlc3QsIENoYW5nZVBhc3N3b3JkSW5mbyB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBMb2dvZmZSZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9nb2ZmLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBMb2dvZmZSZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2xvZ29mZi1yZXNwb25zZSc7XHJcbmltcG9ydCB7IElzVmFsaWRUb2tlblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9pcy12YWxpZC10b2tlbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi9tb2RlbHMvb3BlcmF0aW9uLXJlc3VsdCc7XHJcbmltcG9ydCB7IFRiQXV0aEVudmlyb25tZW50IH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbmxldCBhdXRoU2VydmljZUluc3RhbmNlOiBUYkF1dGhTZXJ2aWNlO1xyXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSAoKSA9PiBhdXRoU2VydmljZUluc3RhbmNlO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBERUZBVUxUX0VOVjogVGJBdXRoRW52aXJvbm1lbnQgPSB7XHJcbiAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjEwMzQ0L2FwaS8nLFxyXG4gICAgICAgICAgICBpdXB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjUyMTcyL2FwaS8nLFxyXG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VXJsOiAnaHR0cDovL2xvY2FsaG9zdDo0MjAwJyxcclxuICAgICAgICAgICAgY2hhbmdlUGFzc3dvcmRVcmw6ICdodHRwOi8vbG9jYWxob3N0OjU2MzkyL2FwaS8nLFxyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25TZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93U2lnblVwOiBmYWxzZSxcclxuICAgICAgICAgICAgYXBwSWQ6ICdNNCcsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsOiAnLycsXHJcbiAgICAgICAgICAgIHVzZXJHYXRld2F5VXJsOiAnJyxcclxuICAgICAgICAgICAgaXNSZWRpcmVjdEV4dGVybmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9naW5QYWdlVXJsOiAnbG9naW4nLFxyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNuYXBzaG90U2VydmljZVVybDogJycsXHJcbiAgICAgICAgICAgIGxvZ29VUkw6ICdodHRwczovL21hZ29jbG91ZC1zdG9yZS1wZGYuczMuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vbG9naW4tbG9nby5wbmcnLFxyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAvLydkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVRnQUFBQTJDQVlBQUFCVEFvV3VBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlWcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUTRJRGM1TGpFMk5EQXpOaXdnTWpBeE9TOHdPQzh4TXkwd01Ub3dOam8xTnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SURJeExqQWdLRTFoWTJsdWRHOXphQ2tpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UlRjME9FSkVNRGN3TkRsQk1URkZRVGxETnpWRE5EUkdOa016UTBFd1JEVWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZSVGMwT0VKRU1EZ3dORGxCTVRGRlFUbEROelZETkRSR05rTXpRMEV3UkRVaVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEZOelE0UWtRd05UQTBPVUV4TVVWQk9VTTNOVU0wTkVZMlF6TkRRVEJFTlNJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwRk56UTRRa1F3TmpBME9VRXhNVVZCT1VNM05VTTBORVkyUXpORFFUQkVOU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUGwzZTREd0FBQlVBU1VSQlZIamE3RjBKbEJiRkVlNWRkaEhsTXF3b0lnZ0tLaUxJNFlrZ1JxT2dJb28zbmlBZU1Rb3hLc1lvaDZJUmlSRVVqeGdKQ3BKbzhJcUFrYUFRTk1HWTRBRW9LSXF1QWdvUlJUbmtXQkRZMUplcGZRNjEzWFAyelAvdjd0UjdIK3owUDFQZDB6TmRVMTFWWFYxUVhsNnVNcXJ4ZEFEaENFSW5RZ2RDRTBKandtNkVBZ0pla3JXRS94SytKTHhQV0VCNGk3QTA2NzZNOHBVS01nRlhZK2t3d3JtRVV3aUh4dUR6TW1FSzRVWENpcXhiTThvRVhFYTVwSk1JMXhMT3NNejNlOExUaEVjSnIyZmRuRkVtNERKS2szNUNHRUk0UG9XNlhpQU1KS3pNdWoyalRNQmxsQ1RCbmphR2NJSFBlYVdFTnduekNCOFN2aVdzWTgxc0YwSUpZVy9sMk9zNjhoUjNYdzkrbXduRENmZG1qeUNqVE1CbGxBU2RTcGhNcUsvNWJTdGhQdUZ2aEduOGQxanFUcmlVMEpYUXhuRE9HNFRCaEg5bmp5T2pUTUJsWkl1ZTh0RGFIaWJjcFJ5dnFDMkNGL1o2anpwL3B4emJYMFlaWlFJdW84aUVxZVJNNVlSOFNQb3I0VmJDd2dUcjcwSzRoOUROVUgvdjdCRmxsQW00aktKUVU4SmNRak5SRG52WTFZUkpLYllGV3VJMW12SUpoQUVSK05VbXRDVzBWSTRkc0JHaEh2KzJnZkFkNFRQQ1lzSUhQQVhQS0JOd21ZQ3JKdFNZTmJPOVJEa2NCK2NSbHVXZ1RlZnpWTGxRbEU4a1hCYmcrbjBJNXhCTzVDbndYZ0hyWGNYM1BZdTEyY1haNjVFSnVJeXFObjFLMkUrVXdTTjZXSTdiMVphRlRGTlJEcy91allaclRtSXQ3MnhDc1lVMnpPUnA4NnpzTmFsWlZKaDFRYldnc1JyaDlvcHk3R0c1Smt3WE83S3dkZE1OaEYrNGptc1IraEQrd1czdmEwbTRWUWhNQ0xuWENLY3JaL2xaUnBrR2wxRVZvS0dFTzBYWjQ0VEw4N0N0cjdDd2NkUEp5b203ZTFVanBOMkVlTHgzQ0l1VUU3TzNYRG0yTndpcnVxd2hOaWNjUmVqc0l4eExXZEI5a0wwK21ZRExLSCtwazBZeitydHliRmI1U0JBNlc0UUd0WU93VFRsT0JCMzlTVG5lVjJoMlh3YXNCd0hKeHlrbkRoQTJ2RjAxNTREZmo3TlhxR1lJT0F3SVJMdy96Vi9LWEZORmU1NVI5cjFoeUpBQjI4N25QR1ZKbS9Za0hLbWNyQjM3RTFyd3dOL0JHc2xTd2tlRU9ZUjNmWGpoSHR3ZVV3aUFmWmhYRk5xRHA3WHRXVWpzd1lLbmpQQUZhMDBMV0todWpsZ0hGdmRQRDNBZXZMQVBjbC9FSWJ4SFZ4THVFT1hRR0UvSVJFQTFKeEp3QTh0L29FVVFlRG5HRmE3MkxDYlV0OGk3RnFIVXhmK0NGTy9yUXNLTGhNM2x3ZWxEd21oQ0J3Mi9ZWnJ6MjBkb1YxM0NBTUkwd3NhQTdmcWE4RFRobkloOU1jYUROL2kyVHFEL0QyVGV1TWVGaEFQeTRGM1BrRER3ejFMeGdsMlg0MFp0RSszcGJaRjNGOEY3WFFyM2N6Ymh6Zkw0TkpWd0dQUGNUZlA3SFNIYlZZOHdndkJWekhiOWgrOHhiTDhzRjN5K0k1eVh3dk5vbEEzOG1nTjRVVGNLcFE0RzZ6bzVVaWg3S2NlYjVxWmRMUElmTEk0YktDZFdLd21Dc1J1NTBwNVRUZ3hYWElKUi9HM0NKWVRSNGpjRXVRNFB3ZXMwd2lkOFRXTUw5NGw3UkFqR01TSGJVTXBUWGR6WHdXeVNTSnEremVadE5jc0d0NER0UWRMK01UQUg3Vm5PbmpBM0lYUmdxZ1hlaU1kNlgxUCtKZHViYk5JanlsazVvS050TEF4ZVp4c2I3R2pyQ1VVc2JQWmxvUUZiMVVFQjYvc3BZVnlBOC9EaGVwYUZpNDRnYkY1U08yY1UyY0xYdGVRKzdPb2p5TEJhb2wrSXZtcVVDWjJNMGhadzBPcnFwZHdXRElxSm1uSmJBdTdQeW9tdDB0Rlp5c2xoWm9ObUVIcHF5bUdrdjU4ZE9WOEU1SVVjYmxjcFp5V0NpYkJndm1sQVl6c2NGNjAxdjBIdy81NkYzNm9Bdk9BY09aYy9nczAwdjJjRy9Jenl4c213d0dCYk9TL2wrZklxUXp2T3NNRDdSejUycEZjdDNjTm9BLy9IQ2J2RXRCM09NZkMrTXNEMUpZU1ZtbXRoZzd3NlJydHdUK01NN1hvc3N3Rmx5RFZNR2x5Rnh0RThKVGw3cGNjVXk0WUdCN3ZpVU5jeHdpZ0sxQS94V0ppR0lWaDBlNHc2cnVhcHFadkE3d0xXakd6UTNZUmZpYkppbnZaNkVVSXREaFJsaU95L1ZBV1BMZk1pWkFoNVNxUDEvNW93elBLN3NydHl3bGphc0ZZS215MWluZFlvWjdIOXUyenFDRW93RGNnMXJvVThiZDZZQTUzamNQVkQrRkJkTHR2RU50TlArZjZpQnE4V2NwOFZ1bmdVc21saWRVU2VDQ1BhVTdTcGdQbVZ1Y3JxODdNTEU4SUVQdC96L1g5blc0TXI1OUNHTkNUdGFvODIyTkRnMWdtZVBRblRSVm4vR1B6YmFkcjlMZUdRQlBycWZsY2Rsd1U0L3hsTjIrWWswSzRXaEdXYXVrNjJ3THVFTmMyWENlc0RlSGJmSmd3bnRBckF1dzE3N3Jmei84QU9EcDlLUzlQb1FSZ3ZRcGhNQk8vekpNS1pFZXJaZzdCQmM2K3Z4R2o3MFlKZlJWLzJFT2ZkekhWdEN3SHcyY0xQZkFtUDJTR0VZOEtFaVhnSnVQK204SEFIK3p6UXVBTHVTc0h2TXk0L1I1U1hSdVJmb0JuWW1HN3ZuMkNmSWFhclpZRHpPbXI2ODNXT0IweWlYUkJFSDRuNkVQZlhNQWEvdXpVZnFEQUV3ZEhXbzQ1REROY05Udmk5eHpNNFAyWUlFY2J1YVNIcWJPd1I2aFAxUG80MThPd2x6cnU5M0M1OXhMR2dCL3VGaVVnUG56Uk0zNW1nT3Y0andtOFRWdmtsLzRvRjNnaHRXQ0VNNXhkRjREOU83YnczQVZaZWRPVHBSRkswUkFYYmoxUk9qWkZPcVZ2TXFiZ1hmY1BtamhYQ2N6c3RBcS8rM0llWWtqZUkwYWJMMllreXlQQzdxUysySlBqOGtNL3VZK1drazQ4VFFvUyt4bmFOQy9pZDg1MndpV2xqQlcySTBZWnRBY3ZMTFBjaFRDNVluZklCOTZOeFRxN0U0SlQycmlFdVc0QnRHaW1PTVdqZnNjZ2ZBcXVoZUpEdSsvdU5PUCsya1B6aFFieENsRjJpN0tZQ2owcm5henltcDZSUWJ4bmI5dHlFdlJ2Q3hNakIxamdocG1DVDlBQjdzZXZsK0xrY3Jad3duUDBzOG9TZ3c1NGFwOWRRWCtuNUxEZWE2QXlzYnNJNnpkdFowdmR4R2ZvZ0tXKzAzS2c5Vk9WWXNjZFlHN0tWdzJ5b09KNnQwYjZnNGUzaStySkN3d202citkTjRoaUM3Wms4ZWVnanhQRW9sZDdHekxQWjBMK3ZhTTlKQWE2OVI5T3ZrdkRWUm1ZU0JBcC94WTRHck1FOWhCMGVKWWJycmxOT21FNnVOc0RwRUtEdXhmeitJUTV4SlJ2bDkrWXgwYzFITUU3bGo5aU1LaVNjSnJPRHFFanpHKzU5VnhaY2JaVDNMbTZkV1pQdHRKT0NvYkhCbGJDTlIxSkR5emFJOFlKL0dhR1lNTVdTRGU0WXpUMTAxNXczVnB3ek15RC9Rc0phY2Uydjg4UTkza2xqQnl0T3VRMFhhdnAvYjU5cit2bllYVjRnSE9mREEydVhCN0g5V05KVkd2dGpHME5kZ3l6M1J6MGZCOG43aEw0QitKeEYrTGRQUDdYMmNETG8xa0xQc3JqODBlM0ljNS8zSzhONVllbzZndkFIbjN0ZjVuN0d1b1NYKzdHTlIybGMvcmFvV0ZYT1Z6YVNYY0l0TGRVaGx5N0I1dkZQZzhiZ0ptUXlDUkllYzd5WS9vTEc1c2xYVWU1czlZUktQMHNNd2tiV2lySnpQYzVIcU1aRXcyOWIrZG96bFpQbXlJc1FUdkFnVDgrZmRKWDNaWTE5ZTQ2ZUNRTEo2eHQrRzhQYTUrUUFmUDZpbkl3dnQvcjBmVldoTU9QOUxlV0VsR0dGejk4TTUrenI3c2RDdzRzR2todjJEdVJwZ0EzcXI3SGJqSFNwcFhFSmdrZXVKakM5RUppMlBTZktnamhXVGhYSHlNUDJkWjY4TkNlTDR6L2txQjEvRXNjOVBjNzlvOGZ6NmFCNVJuNkVHTGFMQ2VNSjkvSFVORmQwaGpMbjZCc1UwZnh6dDhiV1dVRndYQnhhUlFSY2xLemlTM2o4alRMOGpoeUFQVXpNQzEzMnBUWGl0NGN0M0ZCdGphYUQzWmNxdkM0Mk1uQmVvdEhldkFhSUZHajlmT2I3U2xYZUZ1L1pQSGxoWUs5cDd6cGVwdXc2YnNMUTgrSzR0ZUc4L1Qzc2N4M1pIaFdWOE1XL0ljZlA1QWxET1RiZWVTZ0czeit5b05QUkpGWDk2UmFQWi91a1NjRHRFQXpjMUZ0Vnp2WVJsb2FxblRPc3dwQTZ3ZktOLzFJYzMrVnovbnVhNmRUTkh1Y1hhWXk5Qy9Qa29jc2Q1dC9PWVZzV2lmZXBudUdkTXkzK3g1UjFkUlVmaEdkb1RCbWdPUjVUOGpDRW1jbm5tdklPUE8ydDdnVHQvRTFOT1p5WUovdXBoNCtLRnd6bkQ0N1JtRjAxUXRPMmR4YlRzK2JDSmhQa2EvYUE1c3RmeDJNS0xFTVlWdWFSQnVlbXozTFlsdFZxWjg5dFhhVlBIMzZtNGZyYnFzRUFOQ1ZLdU1saUhiZUZyTHU2a1drNTRBVkI1cjgzYXpxektHSkRob3RyOGVXWmJQbG1iOU1JcmlEVDN2dkZNUndoQXoybTJlNitRMURvK2p4NTJGTHdyc2x4ZTc1eC9WMUhJK0J3ZkpUbU9vUlRMSzhHZzYrcnBneWhMWE10MXZGbnBROU03bFpEQk53OFEzbTdJQUx1Y2FIRjZiU3dJRlJITTNXODN2S053cnR5dENnYkUvQmFDQUxwZmVydmNiN2NPR1ZIQ2c4U1V6ekVEbDdMd25lQXFyeDdsSHltMjNQODhtMFhmU2JiZDdCQnE1dFJEUVplaWRKNzVHMXIxV1ZLSDE5M2tLb1pCUG1rMjlpOFFWQVB4alhpZUtnS0h4RStScnpjTUJ3L2IvbEc1Y29JVEUzREpGT1VHNU1jb3ZUSk1MY0tnUWJoWFQrRkI0bXNEY2hZQXNNMFFpRWUwMHlqTi9sb2RHbFRRNkhweWlVN3BwQ2M2ckNsMys1S2IzUDhJb0c2ZEJzVU5lRjNwaWJRSWsxWi9hQUM3bG1oVW1PS0ZpYjBBRitTbjRteXZnbG9iMmVKc3JEMlBhUVZrdDVXM1ZyWnRVSndRalBaUDRXSEtHUFoxbXMwUnpsNFd1WHdwY05hNDVhdTR3MnE4cnJIaG9acnY2b0dnODZVYm45VkFuWHBRcFJxOFRPb0NhUzcvOXBoWWxBR2FRUlVpNERYeXJDUVpjcC9TN3l3SkpkbFBhZWllZUNrRGU4aXpVdUNhVmVwS091UTBvUGNZZmpiTGFUZGRGZ09YenBvd0VVK0F0azBoUzZ1Qm9QT1pMWW9TcUF1RTg5dENkOWp2bXlzckh0ZnlzTUlPRVFSeXlqeSt3Tys1RExBODc0RXBnSVhpN0tvS3k4d05aSnU1MTlvenBzdmpudmt5WU9HNDhadG5HOGQ0a05rbTdvSDBNcldHcTV0VWcwRW5HbFAzNzBUcUt1Sm9YNDUwN0F0cEFwQ2xpZEZlMm5LdG9TTklwYkxuL29vYy9DbVNYdGJvK3d2YWJwT0hIOFpVME1jNGNNZk5Fc2NRNGpYelpPQk5VY2NuNTJqZHNnbFl6cEQrRkxEdGUycWdZRDdSdW1YeURWTm9LN09tcktWYW1jdmVybEI4TVFSUmlaTk8wM25GdVJZZTAzNWhyQUNEbXM1TjRYUTRqQzErNGtvdXpXQkc1UWExcFNZL0thcm5WTjV3MDRrVjBlOExOUi9UQkd1eXBPQkpaMDMxK2FnRFlkcWhOUXpoaW0xTGgxMTcyb2c0TllaQkxodHV5Z2NTWWRyeXVVS2tES0Q0S2tUczI0ZGJVNnhuMHNNR3R5NktPdkFaS0J2TDhQWEF5U1hVU0NOeWU4dDM5d0FucUs2YVpRRnZ0SVdOMHp6c2t3VVpUL1BrNEUxalFkWEJjRUJjbUhLYlpBZlBxd2YxQzBaMjZiUmhpdE1HMGRYQXlFMzAyQlNPZGRpSFRjcXZiZFdodHBzTUpnSlNtTFVmWUNIcVNRdE1xMkVlU09LZ0h0RVZUWmtQMkt3TTBqRGZ4S0RUR1lEd2JLdlpSYjRqbE03SjY3RWc1U2JSTXNOWUZvcTgzNm9hUksrMGpMbWNKTG1RNUFVd2JGeHZDanoybWYzY1k5blVOWHBBVVA1ZUJWdG9ia2tKRjNWYmZwZGJ1alhoUWFOTW1xWVV4K0RjRnVXVXYvQ0xHUmF6enMyYWdkTG05U1J5bG43NVNZWlhvRm80OWNzMzF3N3pkZm5Eb3Y4NVQzY3JyR3hqTkVJKzFaNU1MQ2tnRWJJd0lzcDFmMmtPSDdQb01sVWtDa0ZFdXdxVlgyNUVaU0JmeG1tZGpiMjRwMXVLSC9NTVBWL1ExTldyREhCQkNGTUM3dHJ5ditUWXYvQ1ZMU2JwaHpaZlQ0dGpNRlU3aEkvVW54VkxncnhCWTlLL2NYeGJCVnNyNEtnSkdQaXNKQzlpeWk3V2ZNaS9VTWw0M0FJNisyU29UM2RWRERQZHh4Q3pLU01vTC9ZNXhyMG55bXU4bWsyZzBTbCtjby9oMXpTWkhyM2tXTDh3Umg4NzFKNjR6cG9pS0hjRkZ3UHhTQ3NzK0ZSUS9rTEtmUnB4UWU3cTJlZmF6TDY5Z3FZWGZNRVRUYk54b2F0NnNMczJ2Tk93SXkreFpyc3BOMFR5RXk3V05ReFEzUE9pWnErK0lBM25MYmRudTJ1T3RZUTZ2cWN2MExUdGlFSlpmRWRyNm5ydHlFMmtkN2trYWsxYkp1eG85aDgxL1VqUExZTjFOSFBMUGZOT0k5N20wWm9Hb0lYc210UDhNbDg3SFg5VzRiclpvZG9neWxEN3laRDltalQrYzBpOU9XcHZJMmdpZTd4Mmphd1Y0aUszaFhYM2tLb3JhbndpQVFFM0xXV3R2M3p3eVdhKzJtdU9XK2s1cnpQQ1lkYmJNdDFndjgyVG9YdGRVM2JGRkp5MStGQkpXbHVTRDdIK2FTalhzUnB4L2YwRVd3UEc2NkhrTms5b0lEcm44TEgwazBiQ1hjUTl2RzR2aFVMK3E4OStPQ2oxeURpVm4rZ2hUNWJFYUo5b3p5dXZ6R2tRR3hRSG14cnp2MElGL09ldmw3MFQ3K2Q3ZUdSZUNtZ210aEZ6T2xYc1hIeFNERVhQakdFNmdsUFcyZGh4SnhxTUdRMmN4MGo1bXB5UXVyd2FtSHJnNTN0R3MxNVNHeW95N0k2aktjaTZ5TFczNEVkR25KNUd6eGlUWlYvekJGeWtrMHhUQ2RoV2xnUW8yK3dQRzYwcXB4NmVqNVBIOEtHQzF6T0JuZ3ZBaytFTE1Feit5MVByWnF4VGZaSW4ydmhtWjByekE2TE5lZVZzcm1qZHNqMlYwenpmcTRxQjRPWHNCMjZuWStEYUM2YmdGYTZISFlZRTRmNzFJMWxla2djR2lSQktFd0NWM2o4WHNwajhVTTJqY0RHM3Bad3JES3Ztc0J5S2RQYVY3eS91dVNjYjdHSlFoZFB0NFA3SDg4MnlEWUNNSjJkcXR3clNHSnFjTUJ6UGhKMXI1RDhnbWh3VjZTa3ZaazBpKzg4enAxbzZBZnNkRCthY0dpSWFVZy8zcWhaUjV0RGFzYnRDVjhaZUwzR0c1NFVoMmpiQU1JOGp3Mko0MjZhczlUeVJzSFlqUHVvRUZQVXVIU0t4LzFOU3FDK3FZUmRRL2J6Qkl2MVkycDZVSVFwclMwYXFLdlh4cG80ZUZSTmtmTHpWRElMaTRkNU9EaUNFQUtRRVlqNmZVREQvVmIreWxTNDBwRkpCWWsxWnhnY0g2VWFieTdxdklFQnJ5SzJobHZFWHJZdC9GVnN5QWI2RG14WU40VjE0RG9raWZ3a3hEMHY1SHVlcXRGeWptT3NZTU10dnR3Zjh4ZTVqTyszS1dzZVI3RkdibXJiU3lyK3lnbG9QZ2V6Sm1janRBajhlcXAwOTh6dzBsd3ZaVzNyRmd2MWJHV0h3cjBScnIyTUl3SGlKcDM5aUIwbVMzTGd3SG1IdGNOWmVyZGNaVHZhYVJHK3VFOFlwR3FmQ0x6bStmQTRYYU5ORllhczQ4d0lYNGp2eGZFYlBuVWM3Mk56aVVwakxXaWtZeEpvRjV3Zk55V2dQZmZYekRLQ0VyYVErNlVQLzNZSmFSUTlBMnJWVDhhbzQzbENDd3Q5akRHMk1rTDlaV3lQcXhXZ2pyc3M5dTFXMWxqUDhhdTNTRlhPNnhabDJjWW9qZTFwaVlxMlpNcXZQVEwwNFNFVlB0bGtsQXdMUlJyNzQwR3FjdEJ6QmIzS1dnaStMdGVyK0htNW9JWGNhY2tGRHkxeURtdkNuU3p3UTBiWjRTRTF5cUEwa1hFaTIvdTZjcithMWtCK3duYmg2UnptNDJlZjNNVFhGQ2c3U1VzcmtucXVEYWhWSTV3S0FmRzlXV3Z2b3N4QnQydllYanFUeDlaaVMzMDhoV2NqMEpaUDRUNDJKUVRZd3UyZXpNODlhS3IrNVd5ZjN4cXlMM2V3N1JxMlZpVEN3SHJtZndXdEYwNEdETVFmQzRQMmV4RTZDUVpaZDlhS0hzbzd1Tk5FTTRWVG9yTXcxdUpsNytjNjNqUEMxQVBMWkd6c1FOOU1CZHN0dmk1UEEvcnk0QXhLbTNpZ1BwVmdiTkhaM0orOVZMakkrazA4TU83VkdOT1RwaWJjajVqUzc4YURiaDBQb2x4TWsyd1M3Z21yWmhvckp4Z1lnM3c5djJjZnE4cHJ3Wk9nSW01RGN6YXQxT0kyck9IKy9icXFkT2IvM2EvS0NkakRqV0Fic2djaThqcVErZUNoWUMza2lJaDhJQ1FSaGQrSUI3Wk1yZFNJUFVBdGVJQkZTWXQwckV2ekN4czhXNHNIMUQwcS9GNmRJR3lEMTQwL0pLMVlZeTNtZHNCdXM1RTlhSyt6cHpDdGx3a3ZNNVpYbmFDY0hjTWFzUFpjd0czYndFTGtQZmJ5emE1S0wzcEdOWlArSjhBQURBUFh3R0VydkFVQUFBQUFTVVZPUks1Q1lJST0nXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBwcml2YXRlIGVudjogVGJBdXRoRW52aXJvbm1lbnQ7XHJcblxyXG4gICAgbG9nZ2VkT3V0JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICBlcnJvck1lc3NhZ2UgPSAnJztcclxuICAgIG9rTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIGdldCByb3V0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdlbnYnKSBlbnY6IFRiQXV0aEVudmlyb25tZW50LCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lbnYgPSBfLmRlZmF1bHRzRGVlcChlbnYsIFRiQXV0aFNlcnZpY2UuREVGQVVMVF9FTlYsIGVudik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RiQXV0aEVudmlyb25tZW50JywgdGhpcy5lbnYpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQodGhpcy5nZXRCYXNlVXJsKCkpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGltZW91dCg1MDAwKSxcclxuICAgICAgICAgICAgICAgIG1hcCgoX18pID0+IHRydWUpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoX18pID0+IGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJpdG9ybmEgbGEgYmFzZSB1cmwgZGVsIGJhY2tlbmQsXHJcbiAgICAgKiBjYXJpY2F0YSBkYSB1biBmaWxlIGRpIGNvbmZpZ3VyYXppb25lIGNhcmljYXRvIGRpbmFtaWNhbWVudGUgKGFzc2V0cy9lbnZpcm9ubWVudC5qc29uKVxyXG4gICAgICovXHJcbiAgICBnZXRCYXNlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVybDtcclxuICAgIGdldFNuYXBzaG90U2VydmljZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5zbmFwc2hvdFNlcnZpY2VVcmw7XHJcbiAgICBnZXRMb2dpblBhZ2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgubG9naW5QYWdlVXJsO1xyXG5cclxuICAgIC8qXHJcbiAge1xyXG4gICAgdHlwZTogSldULFxyXG4gICAgYXBwaWQ6IE00LFxyXG4gICAgc2VjdXJpdHlWYWx1ZTogand0RW5jb2RlZFxyXG4gIH1cclxuKi9cclxuICAgIGdldEF1dGhvcml6YXRpb25IZWFkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBUeXBlOiAnSldUJyxcclxuICAgICAgICAgICAgQXBwSWQ6ICdNNCcsXHJcbiAgICAgICAgICAgIFNlY3VyaXR5VmFsdWU6IHRoaXMuZ2V0VG9rZW4oKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRoU2VydmljZS5sb2dpbiAtIGxvZ2luUmVxdWVzdCcsIGxvZ2luUmVxdWVzdCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8TG9naW5SZXNwb25zZT4odGhpcy5nZXRQcmVMb2dpblVybCgpLCBsb2dpblJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2dpblJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgY2FtYmlvIHBhc3N3b3JkIGUgbnVvdm8gdGVudGF0aXZvIGRpIGxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENoYW5nZSBQYXNzd29yZCBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IEFjY291bnQgY29uZmlybWF0aW9uIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgYXR0aXZhcmUgbCdhY2NvdW50IGNoZSBub24gaGEgYW5jb3JhIGVmZmV0dHVhdG8gbGEgcHJvY2VkdXJhP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRoU2VydmljZS5sb2dpbiAtIGxvZ2luUmVxdWVzdCcsIGxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxMb2dpblJlc3BvbnNlPih0aGlzLmdldExvZ2luVXJsKCksIGxvZ2luUmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBjYW1iaW8gcGFzc3dvcmQgZSBudW92byB0ZW50YXRpdm8gZGkgbG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2hhbmdlIFBhc3N3b3JkIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuQ2hhbmdlUGFzc3dvcmREaWFsb2cobG9naW5SZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQWNjb3VudCBjb25maXJtYXRpb24gTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBhdHRpdmFyZSBsJ2FjY291bnQgY2hlIG5vbiBoYSBhbmNvcmEgZWZmZXR0dWF0byBsYSBwcm9jZWR1cmE/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBMb2dpbiBmYWlsdXJlLCByZXN1bHQgY29kZSAnLCBsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luUmVxdWVzdCBieSBhY2NvdW50JyArIGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSArICcgdG9rZW46JyArIGxvZ2luUmVxdWVzdC50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlID8gbG9naW5SZXNwb25zZS5NZXNzYWdlIDogJ0xvZ2luIGVycm9yLi4uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9naW5SZXNwb25zZS5NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlRGF0YShsb2dpblJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBvcGVuQWxlcnREaWFsb2coaW5mbzogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBkb250c2hvdzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihBbGVydERpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBUaXRsZTogIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZTogaW5mbyxcclxuICAgICAgICAgICAgICAgIERvbnRTaG93OiBkb250c2hvd1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBvcGVuQ2hhbmdlUGFzc3dvcmREaWFsb2cobG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpIHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFRpdGxlOiAnQ2hhbmdlIFBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2U6ICdQbGVhc2UgY2hvb3NlIGEgbmV3IHBhc3N3b3JkOiAnLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VIb2xkZXI6ICdQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBQbGFjZUhvbGRlcjI6ICdDb25maXJtIFBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIE5ld1B3ZDogJycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShhc3luYyAoZGF0YTogeyBOZXdQd2Q6IHN0cmluZyB8IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGRhdGEuTmV3UHdkID09PSB1bmRlZmluZWQgfHwgZGF0YS5OZXdQd2QgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnV3JpdGUgYSB2YWxpZCBBY2NvdW50TmFtZScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGNwaTogQ2hhbmdlUGFzc3dvcmRJbmZvID0gbmV3IENoYW5nZVBhc3N3b3JkSW5mbygpO1xyXG4gICAgICAgICAgICBjcGkuQWNjb3VudE5hbWUgPSBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWU7XHJcbiAgICAgICAgICAgIGNwaS5JZ25vcmVPbGRQYXNzd29yZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjcGkuSldUVG9rZW4gPSBsb2dpblJlcXVlc3QudG9rZW47XHJcbiAgICAgICAgICAgIGNwaS5OZXdQYXNzd29yZCA9IGRhdGEuTmV3UHdkO1xyXG4gICAgICAgICAgICBjcGkuUGFzc3dvcmQgPSBsb2dpblJlcXVlc3QucGFzc3dvcmQ7XHJcblxyXG4gICAgICAgICAgICBsb2dpblJlcXVlc3QucGFzc3dvcmQgPSBkYXRhLk5ld1B3ZDtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jaGFuZ2VQYXNzd29yZChjcGkpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmlcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5va01lc3NhZ2UgPSAnUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNmdWxseSEnO1xyXG4gICAgICAgICAgICAgICAgLy9sYSBsb2dpbiBsYSBmYSAgYSBtYW5vIGFsdHJpbWVudGkgbWkgcGVyZG9cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vZXJyb3JlIGdpw6AgaW5kaWNhdG9cclxuICAgICAgICAgICAgICAgIGxvZ2luUmVxdWVzdC50b2tlbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsb2dpblJlcXVlc3QuYXBwSWQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGlzVmFsaWRUb2tlbihhdXRodG9rZW4gPSAnJyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgaWYgKCFhdXRodG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3Qgb3ByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgIG9wcmVzLk1lc3NhZ2UgPSAnTm8gYXV0aHRva2VuJztcclxuICAgICAgICAgICAgcmV0dXJuIG9wcmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0SXNWYWxpZFRva2VuVXJsKCksIG5ldyBJc1ZhbGlkVG9rZW5SZXF1ZXN0KGF1dGh0b2tlbikpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGFwKChqT2JqOiBPcGVyYXRpb25SZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXNWYWxpZFRva2VuIC0gcmVzcG9uc2UnLCBqT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWpPYmouUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpPYmouTWVzc2FnZSA9IGpPYmouTWVzc2FnZSA/IGpPYmouTWVzc2FnZSA6ICdpc1ZhbGlkVG9rZW4gZXJyb3IuLi4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENsZWFyaW5nIHN0b3JhZ2UgZHVlIHRvIFRva2VuIFZhbGlkYXRpb24gZmFpbHVyZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9rZW46ICcgKyBhdXRodG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGpPYmouTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsLmluY2x1ZGVzKHRoaXMuZ2V0TG9naW5QYWdlVXJsKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbXBhbmllc0ZvclVzZXIodXNlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpICsgdXNlcikucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuQ29udGVudCAmJiByZXMuQ29udGVudC5zdWJzY3JpcHRpb25zID8gcmVzLkNvbnRlbnQuc3Vic2NyaXB0aW9ucyA6IFtdO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldElzVmFsaWRUb2tlblVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnaXN2YWxpZHRva2VuLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvZ2luVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xyXG4gICAgfVxyXG4gICAgZ2V0UHJlTG9naW5VcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ2luLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvZ291dFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9nb2ZmLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENoYW5nZVBhc3N3b3JkQXBpVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENoYW5nZVBhc3N3b3JkVXJsKCkgKyAnY2hhbmdlcGFzc3dvcmQvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVzZXRQYXNzd29yZFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFuZ2VQYXNzd29yZFVybCgpICsgJ3Jlc2V0cGFzc3dvcmQvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3Vic0tleXNGb3JBY2NvdW50VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdzdWJzY3JpcHRpb25za2V5c2ZvcmFjY291bnQvJztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjaGFuZ2VQYXNzd29yZChjcGk6IENoYW5nZVBhc3N3b3JkSW5mbyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgY29uc3QgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNwaSk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldENoYW5nZVBhc3N3b3JkQXBpVXJsKCksIGJvZHlTdHJpbmcsIHsgaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlcy5NZXNzYWdlICsgJyAoQ29kZTonICsgcmVzLkNvZGUgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZXNldHBhc3N3b3JkKGFjY25hbWU6IHN0cmluZyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldFJlc2V0UGFzc3dvcmRVcmwoKSArIGFjY25hbWUsIHsgaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjYzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuTWVzc2FnZSA9IGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsLmluY2x1ZGVzKHRoaXMuZ2V0TG9naW5QYWdlVXJsKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ29mZigpIHtcclxuICAgICAgICBjb25zdCBsb2dvZmZSZXF1ZXN0OiBMb2dvZmZSZXF1ZXN0ID0gbmV3IExvZ29mZlJlcXVlc3QodGhpcy5nZXRUb2tlbigpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxMb2dvZmZSZXNwb25zZT4odGhpcy5nZXRMb2dvdXRVcmwoKSwgbG9nb2ZmUmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKGxvZ29mZlJlc3BvbnNlOiBMb2dvZmZSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2dvZmZSZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBMb2dvZmYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRPdXQkLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dvZmZSZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuYXZpZ2F0ZVVzZXJHYXRld2F5KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbnRlcmluZyBuYXZpZ2F0ZVVzZXJHYXRld2F5Li4nKTtcclxuICAgICAgICBsZXQgdXNlckdhdGV3YXlVcmwgPSB0aGlzLmdldFVzZXJHYXRld2F5VXJsKCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXJnYXRld2F5IHVybCBleGlzdHMsIHRoZW4gcmVkaXJlY3QgdG8gaXRcclxuICAgICAgICBpZiAodXNlckdhdGV3YXlVcmwgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBGb3VuZCBnZXRVc2VyR2F0ZXdheVVybCAke3VzZXJHYXRld2F5VXJsfWApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gdXNlckdhdGV3YXlVcmw7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG90aGVyd2lzZSwgcmVkaXJlY3QgdG8gbG9naW5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbihhY2NvdW50TmFtZTogc3RyaW5nLCBzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2VzTWFwRm9yVXNlcihhY2NvdW50TmFtZSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXA6IEFycmF5PHsgU3Vic2NyaXB0aW9uS2V5OiBzdHJpbmc7IERlc2NyaXB0aW9uOiBzdHJpbmc7IEluc3RhbmNlS2V5OiBzdHJpbmcgfT4gPSByZXMgYXMgQXJyYXk8e1xyXG4gICAgICAgICAgICAgICAgICAgIFN1YnNjcmlwdGlvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgSW5zdGFuY2VLZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIH0+O1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtYXAgfHwgbWFwLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93ICdpbnN0YW5jZU1hcCBpcyBpbnZhbGlkJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbnN0YW5jZUtleTogc3RyaW5nID0gbWFwLmZpbHRlcigoaykgPT4gay5TdWJzY3JpcHRpb25LZXkgPT09IHN1YnNjcmlwdGlvbktleSkubWFwKChqKSA9PiBqLkluc3RhbmNlS2V5KVswXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U25hcHNob3QoY3VycmVudEluc3RhbmNlS2V5LCBzdWJzY3JpcHRpb25LZXkpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzIHx8IHJlcyA9PT0gW10gfHwgcmVzLmxlbmd0aCA9PT0gMCkgdGhyb3cgJ3NuYXBzaG90IGlzIGVtcHR5JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBub3cgdGhlIHNuYXBzaG90XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzOiBBcnJheTx7IFNlcnZpY2VUeXBlOiBzdHJpbmc7IFVybDogc3RyaW5nOyBQcm9kdWN0VmVyc2lvbjogc3RyaW5nOyBQb3J0OiBudW1iZXIgfT4gPSByZXNbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2VydmljZXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gYXMgQXJyYXk8eyBTZXJ2aWNlVHlwZTogc3RyaW5nOyBVcmw6IHN0cmluZzsgUHJvZHVjdFZlcnNpb246IHN0cmluZzsgUG9ydDogbnVtYmVyIH0+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZGlyZWN0VXJsOiBzdHJpbmcgPSBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaSkgPT4gaS5TZXJ2aWNlVHlwZSA9PT0gJ000RlJPTlRFTkQnIHx8IGkuU2VydmljZVR5cGUgPT09ICdBUFBfRlJPTlRFTkQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZikgPT4gZi5VcmwpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzaWduYXRlZCByZWRpcmVjdCBpcyAke3JlZGlyZWN0VXJsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlUmVkaXJlY3RVcmwgPSBgJHtyZWRpcmVjdFVybH0/and0PSR7dGhpcy5nZXRUb2tlbigpfSZzdWJLZXk9JHtzdWJzY3JpcHRpb25LZXl9Jmluc3RhbmNlS2V5PSR7Y3VycmVudEluc3RhbmNlS2V5fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzaWduYXRlZCBmaW5hbCByZWRpcmVjdCBpcyAke2Jhc2VSZWRpcmVjdFVybH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RMb2dnZWRSZWRpcmVjdCcsIGJhc2VSZWRpcmVjdFVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnaHR0cDovLycgKyBiYXNlUmVkaXJlY3RVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzbmFwc2hvdCBjYW5ub3QgYmUgb2J0YWluZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ3NuYXBzaG90IGNhbm5vdCBiZSBvYnRhaW5lZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbiBpYSBhYm91dCB0byBmYWlsLi4uJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ2dldEluc3RhbmNlc01hcEZvclVzZXIgZmFpbGVkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0SW5zdGFuY2VzTWFwRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0SW5zdGFuY2VzTWFwRm9yQWNjb3VudFVybCgpICsgdXNlcikucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuQ29udGVudDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRDYWxlbmRhcihzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0PihgJHt0aGlzLmdldENhbGVuZGFyVXJsKCl9P1N1YnNjcmlwdGlvbktleT0ke3N1YnNjcmlwdGlvbktleX1gKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlcy5NZXNzYWdlICsgJyAoQ29kZTonICsgcmVzLkNvZGUgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRTbmFwc2hvdChpbnN0YW5jZUtleTogc3RyaW5nLCBzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRTbmFwc2hvdFNlcnZpY2VVcmwoKSArIGluc3RhbmNlS2V5ICsgJz9zdWJzY3JpcHRpb25LZXk9JyArIHN1YnNjcmlwdGlvbktleSkucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuQ29udGVudDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JBY2NvdW50VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdpbnN0YW5jZXNNYXAvJztcclxuICAgIH1cclxuXHJcbiAgICAgcHVibGljIGdldENhbGVuZGFyVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEl1cFVybCgpICsgJ2NhbGVuZGFyam9icy8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhclN0b3JhZ2UoKSB7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVTRVJfR0FURVdBWV9BVVRPUkVESVJFQ1QpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3JhZ2VTdWJzY3JpcHRpb25EYXRhKHN1YnNjcmlwdGlvbktleTogc3RyaW5nLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmFnZVF1ZXJ5UGFyYW1zKHN1YnNjcmlwdGlvbktleTogc3RyaW5nLCBpbnN0YW5jZUtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEluc3RhbmNlS2V5KGluc3RhbmNlS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCByZXNwQ3VsdHVyZTogc3RyaW5nID1cclxuICAgICAgICAgICAgbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncztcclxuICAgICAgICBjb25zdCByZXNwVWlDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLkxhbmd1YWdlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5MYW5ndWFnZS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxyXG4gICAgICAgICAgICAgICAgOiBsb2dpblJlc3BvbnNlLkxhbmd1YWdlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCwgbG9naW5SZXNwb25zZS5Kd3RUb2tlbik7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgcmVzcEN1bHR1cmUpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHJlc3BVaUN1bHR1cmUpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMsIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UuUm9sZXMpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgbG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYylcclxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCwgbG9naW5SZXNwb25zZS5Kd3RUb2tlbik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIHJlc3BDdWx0dXJlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgcmVzcFVpQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMsIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UuUm9sZXMpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUsIGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpO1xyXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25LZXkpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgbG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25EZXNjKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVDdWx0dXJlKGN1bHR1cmU6IHN0cmluZywgdWlDdWx0dXJlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIGN1bHR1cmUpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNjb3VudE5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWJzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWJzY3JpcHRpb25EZXNjcmlwdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1bHR1cmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVJQ3VsdHVyZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VLZXkoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5JTlNUQU5DRUtFWSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5zdGFuY2VLZXkoaW5zdGFuY2VLZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZLCBpbnN0YW5jZUtleSk7XHJcbiAgICAgICAgZWxzZSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5JTlNUQU5DRUtFWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXV0aFNlcnZpY2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXJsO1xyXG4gICAgZ2V0SXVwVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLml1cHVybDtcclxuICAgIGdldFJlZGlyZWN0VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnJlZGlyZWN0VXJsO1xyXG4gICAgZ2V0VXNlckdhdGV3YXlVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXNlckdhdGV3YXlVcmw7XHJcbiAgICBnZXRDcmVhdGVBY2NvdW50VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmNyZWF0ZUFjY291bnRVcmw7XHJcbiAgICBnZXRDaGFuZ2VQYXNzd29yZFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5jaGFuZ2VQYXNzd29yZFVybDtcclxuICAgIGhhc1N1YnNjcmlwdGlvblNlbGVjdGlvbiA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc3Vic2NyaXB0aW9uU2VsZWN0aW9uO1xyXG4gICAgc2hvd1NpZ25VcCA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc2hvd1NpZ25VcDtcclxuICAgIGdldEFwcElkID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmFwcElkO1xyXG4gICAgaXNTZXNzaW9uU3RvcmFnZSA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2U7XHJcbiAgICBnZXRMb2dvVVJMID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmxvZ29VUkw7XHJcbiAgICBpc1JlZGlyZWN0RXh0ZXJuYWwgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLmlzUmVkaXJlY3RFeHRlcm5hbDtcclxufVxyXG4iXX0=