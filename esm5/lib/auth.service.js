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
        this.getUpdateMessageIt = function () { return _this.env.auth.updatemessageIt; };
        this.getUpdateMessageEn = function () { return _this.env.auth.updatemessageEn; };
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
    TbAuthService.prototype.openAlertDialog = function (info, title, dontshow, accountName, subscriptionKey) {
        return __awaiter(this, void 0, void 0, function () {
            var dialogRef;
            var _this = this;
            return __generator(this, function (_a) {
                this.errorMessage = '';
                dialogRef = this.dialog.open(AlertDialogComponent, {
                    data: {
                        Title: title,
                        Message: info,
                        DontShow: dontshow,
                        SubKey: subscriptionKey
                    },
                });
                dialogRef.afterClosed().subscribe(function () {
                    console.log('afterClosedAlert');
                    _this.okMessage = '';
                    _this.errorMessage = '';
                    if (_this.isRedirectExternal()) {
                        console.log('go external.');
                        _this.getRedirectUrlForSubscription(accountName, subscriptionKey);
                        return;
                    }
                    console.log('go internal!');
                    _this.router.navigate([_this.getRedirectUrl()]);
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
    TbAuthService.prototype.getUpdateMessage = function () {
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH')
            return this.getUpdateMessageIt();
        else
            return this.getUpdateMessageEn();
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
            isRedirectExternal: true,
            loginPageUrl: 'login',
            sessionStorage: false,
            snapshotServiceUrl: '',
            updatemessageIt: 'La tua subscription @@sub sta per essere aggiornata, non sarà quindi utilizzabile nella data prevista: @@date',
            updatemessageEn: 'Your subscription @@sub is going to be updated, you are not going to be able to use it on: @@date',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQXFCLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxNQUFNLEVBQXVCLE1BQU0saUJBQWlCLENBQUM7QUFFOUQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRCxPQUFPLEVBQWdCLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFckQsSUFBSSxtQkFBa0MsQ0FBQztBQUN2QyxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDO0FBRXJEO0lBb0NJ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SUFvbEJDO1NBamxCWSxhQUFhO2tEQUFiLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkFrQ2dCLE1BQU07dUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIG1hcCwgY2F0Y2hFcnJvciwgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcclxuXHJcbmltcG9ydCB7IExvZ2luUmVxdWVzdCwgQ2hhbmdlUGFzc3dvcmRJbmZvIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XHJcbmltcG9ydCB7IExvZ29mZlJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dvZmYtcmVxdWVzdCc7XHJcbmltcG9ydCB7IExvZ29mZlJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9nb2ZmLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgSXNWYWxpZFRva2VuUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2lzLXZhbGlkLXRva2VuLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBPcGVyYXRpb25SZXN1bHQgfSBmcm9tICcuL21vZGVscy9vcGVyYXRpb24tcmVzdWx0JztcclxuaW1wb3J0IHsgVGJBdXRoRW52aXJvbm1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRoLWVudmlyb25tZW50JztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGVydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxubGV0IGF1dGhTZXJ2aWNlSW5zdGFuY2U6IFRiQXV0aFNlcnZpY2U7XHJcbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9ICgpID0+IGF1dGhTZXJ2aWNlSW5zdGFuY2U7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIERFRkFVTFRfRU5WOiBUYkF1dGhFbnZpcm9ubWVudCA9IHtcclxuICAgICAgICBhdXRoOiB7XHJcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MTAzNDQvYXBpLycsXHJcbiAgICAgICAgICAgIGl1cHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTIxNzIvYXBpLycsXHJcbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRVcmw6ICdodHRwOi8vbG9jYWxob3N0OjQyMDAnLFxyXG4gICAgICAgICAgICBjaGFuZ2VQYXNzd29yZFVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTYzOTIvYXBpLycsXHJcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dTaWduVXA6IGZhbHNlLFxyXG4gICAgICAgICAgICBhcHBJZDogJ000JyxcclxuICAgICAgICAgICAgcmVkaXJlY3RVcmw6ICcvJyxcclxuICAgICAgICAgICAgdXNlckdhdGV3YXlVcmw6ICcnLFxyXG4gICAgICAgICAgICBpc1JlZGlyZWN0RXh0ZXJuYWw6IHRydWUsXHJcbiAgICAgICAgICAgIGxvZ2luUGFnZVVybDogJ2xvZ2luJyxcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbmFwc2hvdFNlcnZpY2VVcmw6ICcnLFxyXG4gICAgICAgICAgICB1cGRhdGVtZXNzYWdlSXQ6ICdMYSB0dWEgc3Vic2NyaXB0aW9uIEBAc3ViIHN0YSBwZXIgZXNzZXJlIGFnZ2lvcm5hdGEsIG5vbiBzYXLDoCBxdWluZGkgdXRpbGl6emFiaWxlIG5lbGxhIGRhdGEgcHJldmlzdGE6IEBAZGF0ZScsXHJcbiAgICAgICAgICAgIHVwZGF0ZW1lc3NhZ2VFbjogJ1lvdXIgc3Vic2NyaXB0aW9uIEBAc3ViIGlzIGdvaW5nIHRvIGJlIHVwZGF0ZWQsIHlvdSBhcmUgbm90IGdvaW5nIHRvIGJlIGFibGUgdG8gdXNlIGl0IG9uOiBAQGRhdGUnLFxyXG4gICAgICAgICAgICBsb2dvVVJMOiAnaHR0cHM6Ly9tYWdvY2xvdWQtc3RvcmUtcGRmLnMzLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2xvZ2luLWxvZ28ucG5nJyxcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgLy8nZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFUZ0FBQUEyQ0FZQUFBQlRBb1d1QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5VnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFE0SURjNUxqRTJOREF6Tml3Z01qQXhPUzh3T0M4eE15MHdNVG93TmpvMU55QWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lESXhMakFnS0UxaFkybHVkRzl6YUNraUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlJUYzBPRUpFTURjd05EbEJNVEZGUVRsRE56VkRORFJHTmtNelEwRXdSRFVpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UlRjME9FSkVNRGd3TkRsQk1URkZRVGxETnpWRE5EUkdOa016UTBFd1JEVWlQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBGTnpRNFFrUXdOVEEwT1VFeE1VVkJPVU0zTlVNME5FWTJRek5EUVRCRU5TSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEZOelE0UWtRd05qQTBPVUV4TVVWQk9VTTNOVU0wTkVZMlF6TkRRVEJFTlNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BsM2U0RHdBQUJVQVNVUkJWSGphN0YwSmxCYkZFZTVkZGhIbE1xd29JZ2dLS2lMSTRZa2dScU9nSW9vM25pQWVNUW94S3NZb2g2SVJpUkVVanhnSkNwSm84SXFBa2FBUU5NR1k0QUVvS0lxdUFnb1JSVG5rV0JEWTFKZXBmUTYxM1hQMnpQL3Y3dFI3SCt6MFAxUGQwek5kVTExVlhWMVFYbDZ1TXFyeGRBRGhDRUluUWdkQ0UwSmp3bTZFQWdKZWtyV0UveEsrSkx4UFdFQjRpN0EwNjc2TThwVUtNZ0ZYWStrd3dybUVVd2lIeHVEek1tRUs0VVhDaXF4Yk04b0VYRWE1cEpNSTF4TE9zTXozZThMVGhFY0pyMmZkbkZFbTRESktrMzVDR0VJNFBvVzZYaUFNSkt6TXVqMmpUTUJsbENUQm5qYUdjSUhQZWFXRU53bnpDQjhTdmlXc1k4MXNGMElKWVcvbDJPczY4aFIzWHc5K213bkRDZmRtanlDalRNQmxsQVNkU3BoTXFLLzViU3RoUHVGdmhHbjhkMWpxVHJpVTBKWFF4bkRPRzRUQmhIOW5qeU9qVE1CbFpJdWU4dERhSGliY3BSeXZxQzJDRi9aNmp6cC9weHpiWDBZWlpRSXVvOGlFcWVSTTVZUjhTUG9yNFZiQ3dnVHI3MEs0aDlETlVIL3Y3QkZsbEFtNGpLSlFVOEpjUWpOUkRudlkxWVJKS2JZRld1STFtdklKaEFFUitOVW10Q1cwVkk0ZHNCR2hIdisyZ2ZBZDRUUENZc0lIUEFYUEtCTndtWUNySnRTWU5iTzlSRGtjQitjUmx1V2dUZWZ6VkxsUWxFOGtYQmJnK24wSTV4Qk81Q253WGdIclhjWDNQWXUxMmNYWjY1RUp1SXlxTm4xSzJFK1V3U042V0k3YjFaYUZURk5SRHMvdWpZWnJUbUl0NzJ4Q3NZVTJ6T1JwODZ6c05hbFpWSmgxUWJXZ3NScmg5b3B5N0dHNUprd1hPN0t3ZGRNTmhGKzRqbXNSK2hEK3dXM3ZhMG00VlFoTUNMblhDS2NyWi9sWlJwa0dsMUVWb0tHRU8wWFo0NFRMODdDdHI3Q3djZFBKeW9tN2UxVWpwTjJFZUx4M0NJdVVFN08zWERtMk53aXJ1cXdoTmljY1JlanNJeHhMV2RCOWtMMCttWURMS0grcGswWXorcnR5YkZiNVNCQTZXNFFHdFlPd1RUbE9CQjM5U1RuZVYyaDJYd2FzQndISnh5a25EaEEydkYwMTU0RGZqN05YcUdZSU9Bd0lSTHcvelYvS1hGTkZlNTVSOXIxaHlKQUIyODduUEdWSm0vWWtIS21jckIzN0Uxcnd3Ti9CR3NsU3drZUVPWVIzZlhqaEh0d2VVd2lBZlpoWEZOcURwN1h0V1Vqc3dZS25qUEFGYTAwTFdLaHVqbGdIRnZkUEQzQWV2TEFQY2wvRUlieEhWeEx1RU9YUUdFL0lSRUExSnhKd0E4dC9vRVVRZURuR0ZhNzJMQ2JVdDhpN0ZxSFV4ZitDRk8vclFzS0xoTTNsd2VsRHdtaENCdzIvWVpyejIwZG9WMTNDQU1JMHdzYUE3ZnFhOERUaG5JaDlNY2FETi9pMlRxRC9EMlRldU1lRmhBUHk0RjNQa0REd3oxTHhnbDJYNDBadEUrM3BiWkYzRjhGN1hRcjNjemJoemZMNE5KVndHUFBjVGZQN0hTSGJWWTh3Z3ZCVnpIYjloKzh4Ykw4c0YzeStJNXlYd3ZOb2xBMzhtZ040VVRjS3BRNEc2em81VWloN0tjZWI1cVpkTFBJZkxJNGJLQ2RXS3dtQ3NSdTUwcDVUVGd4WFhJSlIvRzNDSllUUjRqY0V1UTRQd2VzMHdpZDhUV01MOTRsN1JBakdNU0hiVU1wVFhkelh3V3lTU0pxK3plWnROY3NHdDREdFFkTCtNVEFIN1ZuT25qQTNJWFJncWdYZWlNZDZYMVArSmR1YmJOSWp5bGs1b0tOdExBeGVaeHNiN0dqckNVVXNiUFpsb1FGYjFVRUI2L3NwWVZ5QTgvRGhlcGFGaTQ0Z2JGNVNPMmNVMmNMWHRlUSs3T29qeUxCYW9sK0l2bXFVQ1oyTTBoWncwT3JxcGR3V0RJcUptbkpiQXU3UHlvbXQwdEZaeXNsaFpvTm1FSHBxeW1Ha3Y1OGRPVjhFNUlVY2JsY3BaeVdDaWJCZ3ZtbEFZenNjRjYwMXYwSHcvNTZGMzZvQXZPQWNPWmMvZ3MwMHYyY0cvSXp5eHNtd3dHQmJPUy9sK2ZJcVF6dk9zTUQ3Uno1MnBGY3QzY05vQS8vSENidkV0QjNPTWZDK01zRDFKWVNWbW10aGc3dzZScnR3VCtNTTdYb3Nzd0ZseURWTUdseUZ4dEU4SlRsN3BjY1V5NFlHQjd2aVVOY3h3aWdLMUEveFdKaUdJVmgwZTR3NnJ1YXBxWnZBN3dMV2pHelEzWVJmaWJKaW52WjZFVUl0RGhSbGlPeS9WQVdQTGZNaVpBaDVTcVAxLzVvd3pQSzdzcnR5d2xqYXNGWUtteTFpbmRZb1o3SDl1MnpxQ0Vvd0RjZzFyb1U4YmQ2WUE1M2pjUFZEK0ZCZEx0dkVOdE5QK2Y2aUJxOFdjcDhWdW5nVXNtbGlkVVNlQ0NQYVU3U3BnUG1WdWNycTg3TUxFOElFUHQvei9YOW5XNE1yNTlDR05DVHRhbzgyMk5EZzFnbWVQUW5UUlZuL0dQemJhZHI5TGVHUUJQcnFmbGNkbHdVNC94bE4yK1lrMEs0V2hHV2F1azYyd0x1RU5jMlhDZXNEZUhiZkpnd250QXJBdXcxNzdyZnovOEFPRHA5S1M5UG9RUmd2UXBoTUJPL3pKTUtaRWVyWmc3QkJjNit2eEdqNzBZSmZSVi8yRU9mZHpIVnRDd0h3MmNMUGZBbVAyU0dFWThLRWlYZ0p1UCttOEhBSCt6elF1QUx1U3NIdk15NC9SNVNYUnVSZm9CblltRzd2bjJDZklhYXJaWUR6T21yNjgzV09CMHlpWFJCRUg0bjZFUGZYTUFhL3V6VWZxREFFd2RIV280NURETmNOVHZpOXh6TTRQMllJRWNidWFTSHFiT3dSNmhQMVBvNDE4T3dsenJ1OTNDNTl4TEdnQi91RmlVZ1BuelJNMzVtZ092NGp3bThUVnZrbC80b0YzZ2h0V0NFTTV4ZEY0RDlPN2J3M0FWWmVkT1RwUkZLMFJBWGJqMVJPalpGT3FWdk1xYmdYZmNQbWpoWENjenN0QXEvKzNJZVlramVJMGFiTDJZa3l5UEM3cVMrMkpQajhrTS91WStXa2s0OFRRb1MreG5hTkMvaWQ4NTJ3aVdsakJXMkkwWVp0QWN2TExQY2hUQzVZbmZJQjk2TnhUcTdFNEpUMnJpRXVXNEJ0R2ltT01XamZzY2dmQXF1aGVKRHUrL3VOT1ArMmtQemhRYnhDbEYyaTdLWUNqMHJuYXp5bXA2UlFieG5iOXR5RXZSdkN4TWpCMWpnaHBtQ1Q5QUI3c2V2bCtMa2NyWnd3blAwczhvU2d3NTRhcDlkUVgrbjVMRGVhNkF5c2JzSTZ6ZHRaMHZkeEdmb2dLVyswM0tnOVZPVllzY2RZRzdLVncyeW9PSjZ0MGI2ZzRlM2krckpDd3dtNnIrZE40aGlDN1prOGVlZ2p4UEVvbGQ3R3pMUFowTCt2YU05SkFhNjlSOU92a3ZEVlJtWVNCQXAveFk0R3JNRTloQjBlSllicnJsTk9tRTZ1TnNEcEVLRHV4ZnorSVE1eEpSdmw5K1l4MGMxSE1FN2xqOWlNS2lTY0pyT0RxRWp6Rys1OVZ4WmNiWlQzTG02ZFdaUHR0Sk9Db2JIQmxiQ05SMUpEeXphSThZSi9HYUdZTU1XU0RlNFl6VDEwMTV3M1Zwd3pNeUQvUXNKYWNlMnY4OFE5M2tsakJ5dE91UTBYYXZwL2I1OXIrdm5ZWFY0Z0hPZkRBMnVYQjdIOVdOSlZHdnRqRzBOZGd5ejNSejBmQjhuN2hMNEIrSnhGK0xkUFA3WDJjRExvMWtMUHNyajgwZTNJYzUvM0s4TjVZZW82Z3ZBSG4zdGY1bjdHdW9TWCs3R05SMmxjL3Jhb1dGWE9WemFTWGNJdExkVWhseTdCNXZGUGc4YmdKbVF5Q1JJZWM3eVkvb0xHNXNsWFVlNXM5WVJLUDBzTXdrYldpckp6UGM1SHFNWkV3MjliK2RvemxaUG15SXNRVHZBZ1Q4K2ZkSlgzWlkxOWU0NmVDUUxKNnh0K0c4UGE1K1FBZlA2aW5Jd3Z0L3IwZlZXaE1PUDlMZVdFbEdHRno5OE01K3pyN3NkQ3c0c0draHYyRHVScGdBM3FyN0hiakhTcHBYRUpna2V1SmpDOUVKaTJQU2ZLZ2poV1RoWEh5TVAyZFo2OE5DZUw0ei9rcUIxL0VzYzlQYzc5bzhmejZhQjVSbjZFR0xhTENlTUo5L0hVTkZkMGhqTG42QnNVMGZ4enQ4YldXVUZ3WEJ4YVJRUmNsS3ppUzNqOGpUTDhqaHlBUFV6TUMxMzJwVFhpdDRjdDNGQnRqYWFEM1pjcXZDNDJNbkJlb3RIZXZBYUlGR2o5Zk9iN1NsWGVGdS9aUEhsaFlLOXA3enBlcHV3NmJzTFE4K0s0dGVHOC9UM3NjeDNaSGhXVjhNVy9JY2ZQNUFsRE9UYmVlU2dHM3oreW9OUFJKRlg5NlJhUFovdWtTY0R0RUF6YzFGdFZ6dllSbG9hcW5UT3N3cEE2d2ZLTi8xSWMzK1Z6L251YTZkVE5IdWNYYVl5OUMvUGtvY3NkNXQvT1lWc1dpZmVwbnVHZE15Myt4NVIxZFJVZmhHZG9UQm1nT1I1VDhqQ0VtY25ubXZJT1BPMnQ3Z1R0L0UxTk9aeVlKL3VwaDQrS0Z3em5ENDdSbUYwMVF0TzJkeGJUcytiQ0poUGthL2FBNXN0ZngyTUtMRU1ZVnVhUkJ1ZW16M0xZbHRWcVo4OXRYYVZQSDM2bTRmcmJxc0VBTkNWS3VNbGlIYmVGckx1NmtXazU0QVZCNXI4M2F6cXpLR0pEaG90cjhlV1piUGxtYjlNSXJpRFQzdnZGTVJ3aEF6Mm0yZTYrUTFEbytqeDUyRkx3cnNseGU3NXgvVjFISStCd2ZKVG1Pb1JUTEs4R2c2K3JwZ3loTFhNdDF2Rm5wUTlNN2xaREJOdzhRM203SUFMdWNhSEY2YlN3SUZSSE0zVzgzdktOd3J0eXRDZ2JFL0JhQ0FMcGZlcnZjYjdjT0dWSENnOFNVenpFRGw3THduZUFxcng3bEh5bTIzUDg4bTBYZlNiYmQ3QkJxNXRSRFFaZWlkSjc1RzFyMVdWS0gxOTNrS29aQlBtazI5aThRVkFQeGpYaWVLZ0tIeEUrUnJ6Y01Cdy9iL2xHNWNvSVRFM0RKRk9VRzVNY292VEpNTGNLZ1FiaFhUK0ZCNG1zRGNoWUFzTTBRaUVlMDB5ak4vbG9kR2xUUTZIcHlpVTdwcENjNnJDbDMrNUtiM1A4SW9HNmRCc1VOZUYzcGliUUlrMVovYUFDN2xtaFVtT0tGaWIwQUYrU240bXl2Z2xvYjJlSnNyRDJQYVFWa3Q1VzNWclp0VUp3UWpQWlA0V0hLR1BaMW1zMFJ6bDRXdVh3cGNOYTQ1YXU0dzJxOHJySGhvWnJ2Nm9HZzg2VWJuOVZBblhwUXBScThUT29DYVM3LzlwaFlsQUdhUVJVaTREWHlyQ1FaY3AvUzd5d0pKZGxQYWVpZWVDa0RlOGl6VXVDYVZlcEtPdVEwb1BjWWZqYkxhVGRkRmdPWHpwb3dFVStBdGswaFM2dUJvUE9aTFlvU3FBdUU4OXRDZDlqdm15c3JIdGZ5c01JT0VRUnl5ankrd08rNURMQTg3NEVwZ0lYaTdLb0t5OHdOWkp1NTE5b3pwc3ZqbnZreVlPRzQ4WnRuRzhkNGtOa203b0gwTXJXR3E1dFVnMEVuR2xQMzcwVHFLdUpvWDQ1MDdBdHBBcENsaWRGZTJuS3RvU05JcGJMbi9vb2MvQ21TWHRibyt3dmFicE9ISDhaVTBNYzRjTWZORXNjUTRqWHpaT0JOVWNjbjUyamRzZ2xZenBEK0ZMRHRlMnFnWUQ3UnVtWHlEVk5vSzdPbXJLVmFtY3ZlcmxCOE1RUlJpWk5PMDNuRnVSWWUwMzVockFDRG1zNU40WFE0akMxKzRrb3V6V0JHNVFhMXBTWS9LYXJuVk41dzA0a1YwZThMTlIvVEJHdXlwT0JKWjAzMSthZ0RZZHFoTlF6aGltMUxoMTE3Mm9nNE5ZWkJMaHR1eWdjU1lkcnl1VUtrREtENEtrVHMyNGRiVTZ4bjBzTUd0eTZLT3ZBWktCdkw4UFhBeVNYVVNDTnllOHQzOXdBbnFLNmFaUUZ2dElXTjB6enNrd1VaVC9QazRFMWpRZFhCY0VCY21IS2JaQWZQcXdmMUMwWjI2YlJoaXRNRzBkWEF5RTMwMkJTT2RkaUhUY3F2YmRXaHRwc01KZ0pTbUxVZllDSHFTUXRNcTJFZVNPS2dIdEVWVFprUDJLd00wakRmeEtEVEdZRHdiS3ZaUmI0amxNN0o2N0VnNVNiUk1zTllGb3E4MzZvYVJLKzBqTG1jSkxtUTVBVXdiRnh2Q2p6Mm1mM2NZOW5VTlhwQVVQNWVCVnRvYmtrSkYzVmJmcGRidWpYaFFhTk1tcVlVeCtEY0Z1V1V2L0NMR1JhenpzMmFnZExtOVNSeWxuNzVTWVpYb0ZvNDljczMxdzd6ZGZuRG92ODVUM2Nyckd4ak5FSSsxWjVNTENrZ0ViSXdJc3AxZjJrT0g3UG9NbFVrQ2tGRXV3cVZYMjVFWlNCZnhtbWRqYjI0cDF1S0gvTU1QVi9RMU5XckRIQkJDRk1DN3RyeXYrVFl2L0NWTFNicGh6WmZUNHRqTUZVN2hJL1VueFZMZ3J4Qlk5Sy9jWHhiQlZzcjRLZ0pHUGlzSkM5aXlpN1dmTWkvVU1sNDNBSTYrMlNvVDNkVkREUGR4eEN6S1NNb0wvWTV4cjBueW11OG1rMmcwU2wrY28vaDF6U1pIcjNrV0w4d1JoODcxSjY0enBvaUtIY0ZGd1B4U0NzcytGUlEva0xLZlJweFFlN3EyZWZhekw2OWdxWVhmTUVUVGJOeG9hdDZzTHMydk5Pd0l5K3hacnNwTjBUeUV5N1dOUXhRM1BPaVpxKytJQTNuTGJkbnUydU90WVE2dnFjdjBMVHRpRUpaZkVkcjZucnR5RTJrZDdra2FrMWJKdXhvOWg4MS9ValBMWU4xTkhQTFBmTk9JOTdtMFpvR29JWHNtdFA4TWw4N0hYOVc0YnJab2RvZ3lsRDd5WkQ5bWpUK2MwaTlPV3B2STJnaWU3eDJqYXdWNGlLM2hYWDNrS29yYW53aUFRRTNMV1d0djN6d3lXYSsybXVPVytrNXJ6UENZZGJiTXQxZ3Y4MlRvWHRkVTNiRkZKeTErRkJKV2x1U0Q3SCthU2pYc1JweC9mMEVXd1BHNjZIa05rOW9JRHJuOExIMGswYkNYY1E5dkc0dmhVTCtxODkrT0NqMXlEaVZuK2doVDViRWFKOW96eXV2ekdrUUd4UUhteHJ6djBJRi9PZXZsNzBUNytkN2VHUmVDbWdtdGhGek9sWHNYSHhTREVYUGpHRTZnbFBXMmRoeEp4cU1HUTJjeDBqNW1weVF1cndhbUhyZzUzdEdzMTVTR3lveTdJNmpLY2k2eUxXMzRFZEduSjVHenhpVFpWL3pCRnlrazB4VENkaFdsZ1FvMit3UEc2MHFweDZlajVQSDhLR0Mxek9Cbmd2QWsrRUxNRXoreTFQclpxeFRmWkluMnZobVowcnpBNkxOZWVWc3JtamRzajJWMHp6ZnE0cUI0T1hzQjI2blkrRGFDNmJnRmE2SEhZWUU0ZjcxSTFsZWtnY0dpUkJLRXdDVjNqOFhzcGo4VU0yamNERzNwWndyREt2bXNCeUtkUGFWN3kvdXVTY2I3R0pRaGRQdDRQN0g4ODJ5RFlDTUoyZHF0d3JTR0pxY01CelBoSjFyNUQ4Z21od1Y2U2t2WmswaSs4OHpwMW82QWZzZEQrYWNHaUlhVWcvM3FoWlI1dERhc2J0Q1Y4WmVMM0dHNTRVaDJqYkFNSThqdzJKNDI2YXM5VHlSc0hZalB1b0VGUFV1SFNLeC8xTlNxQytxWVJkUS9iekJJdjFZMnA2VUlRcHJTMGFxS3ZYeHBvNGVGUk5rZkx6VkRJTGk0ZDVPRGlDRUFLUUVZajZmVUREL1ZiK3lsUzQwcEZKQllrMVp4Z2NINlVhYnk3cXZJRUJyeUsyaGx2RVhyWXQvRlZzeUFiNkRteFlONFYxNERva2lmd2t4RDB2NUh1ZXF0RnlqbU9zWU1NdHZ0d2Y4eGU1ak8rM0tXc2VSN0ZHYm1yYlN5cit5Z2xvUGdlekptY2p0QWo4ZXFwMDk4encwbHd2WlczckZndjFiR1dId3IwUnJyMk1Jd0hpSnAzOWlCMG1TM0xnd0htSHRjTlplcmRjWlR2YWFSRyt1RThZcEdxZkNMem0rZkE0WGFOTkZZYXM0OHdJWDRqdnhmRWJQblVjNzJOemlVcGpMV2lrWXhKb0Y1d2ZOeVdnUGZmWHpES0NFcmFRKzZVUC8zWUphUlE5QTJyVlQ4YW80M2xDQ3d0OWpERzJNa0w5Wld5UHF4V2dqcnNzOXUxVzFsalA4YXUzU0ZYTzZ4WmwyY1lvamUxcGlZcTJaTXF2UFRMMDRTRVZQdGxrbEF3TFJScjc0MEdxY3RCekJiM0tXZ2krTHRlcitIbTVvSVhjYWNrRkR5MXlEbXZDblN6d1EwYlo0U0UxeXFBMGtYRWkyL3U2Y3IrYTFrQit3bmJoNlJ6bTQyZWYzTVRYRkNnN1NVc3JrbnF1RGFoVkk1d0tBZkc5V1d2dm9zeEJ0MnZZWGpxVHg5WmlTMzA4aFdjajBKWlA0VDQySlFUWXd1MmV6TTg5YUtyKzVXeWYzeHF5TDNldzdScTJWaVRDd0hybWZ3V3RGMDRHRE1RZkM0UDJleEU2Q1FaWmQ5YUtIc283dU5ORU00VlRvck13MXVKbDcrYzYzalBDMUFQTFpHenNRTjlNQmRzdHZpNVBBL3J5NEF4S20zaWdQcFZnYk5IWjNKKzlWTGpJK2swOE1PN1ZHTk9UcGliY2o1alM3OGFEYmgwUG9seE1rMndTN2dtclpob3JKeGdZZzN3OXYyY2ZxOHByd1pPZ0ltNURjemF0MU9JMnJPSCsvYnFxZE9iLzNhL0tDZGpEaldBYnNnY2k4anFRK2VDaFlDM2tpSWg4SUNRUmhkK0lCN1pNcmRTSVBVQXRlSUJGU1l0MHJFdnpDeHM4VzRzSDFEMHEvRjZkSUd5RDE0MC9KSzFZWXkzbWRzQnVzNUU5YUsrenB6Q3Rsd2t2TTVaWG5hQ2NIY01hc1BaY3dHM2J3RUxrUGZieXphNUtMM3BHTlpQK0o4QUFEQVBYd0dFcnZBVUFBQUFBU1VWT1JLNUNZSUk9J1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBlbnY6IFRiQXV0aEVudmlyb25tZW50O1xyXG5cclxuICAgIGxvZ2dlZE91dCQgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICBva01lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBnZXQgcm91dGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgnZW52JykgZW52OiBUYkF1dGhFbnZpcm9ubWVudCwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykge1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZW52ID0gXy5kZWZhdWx0c0RlZXAoZW52LCBUYkF1dGhTZXJ2aWNlLkRFRkFVTFRfRU5WLCBlbnYpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUYkF1dGhFbnZpcm9ubWVudCcsIHRoaXMuZW52KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjaGVja0Nvbm5lY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAuZ2V0KHRoaXMuZ2V0QmFzZVVybCgpKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQoNTAwMCksXHJcbiAgICAgICAgICAgICAgICBtYXAoKF9fKSA9PiB0cnVlKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAuY2F0Y2goKF9fKSA9PiBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSaXRvcm5hIGxhIGJhc2UgdXJsIGRlbCBiYWNrZW5kLFxyXG4gICAgICogY2FyaWNhdGEgZGEgdW4gZmlsZSBkaSBjb25maWd1cmF6aW9uZSBjYXJpY2F0byBkaW5hbWljYW1lbnRlIChhc3NldHMvZW52aXJvbm1lbnQuanNvbilcclxuICAgICAqL1xyXG4gICAgZ2V0QmFzZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cmw7XHJcbiAgICBnZXRTbmFwc2hvdFNlcnZpY2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguc25hcHNob3RTZXJ2aWNlVXJsO1xyXG4gICAgZ2V0TG9naW5QYWdlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmxvZ2luUGFnZVVybDtcclxuXHJcbiAgICAvKlxyXG4gIHtcclxuICAgIHR5cGU6IEpXVCxcclxuICAgIGFwcGlkOiBNNCxcclxuICAgIHNlY3VyaXR5VmFsdWU6IGp3dEVuY29kZWRcclxuICB9XHJcbiovXHJcbiAgICBnZXRBdXRob3JpemF0aW9uSGVhZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgVHlwZTogJ0pXVCcsXHJcbiAgICAgICAgICAgIEFwcElkOiAnTTQnLFxyXG4gICAgICAgICAgICBTZWN1cml0eVZhbHVlOiB0aGlzLmdldFRva2VuKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9naW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPExvZ2luUmVzcG9uc2U+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0aFNlcnZpY2UubG9naW4gLSBsb2dpblJlcXVlc3QnLCBsb2dpblJlcXVlc3QpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0UHJlTG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGNhbWJpbyBwYXNzd29yZCBlIG51b3ZvIHRlbnRhdGl2byBkaSBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDaGFuZ2UgUGFzc3dvcmQgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2VQYXNzd29yZERpYWxvZyhsb2dpblJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBBY2NvdW50IGNvbmZpcm1hdGlvbiBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGF0dGl2YXJlIGwnYWNjb3VudCBjaGUgbm9uIGhhIGFuY29yYSBlZmZldHR1YXRvIGxhIHByb2NlZHVyYT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgOiAnTG9naW4gZXJyb3IuLi4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPExvZ2luUmVzcG9uc2U+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0aFNlcnZpY2UubG9naW4gLSBsb2dpblJlcXVlc3QnLCBsb2dpblJlcXVlc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8TG9naW5SZXNwb25zZT4odGhpcy5nZXRMb2dpblVybCgpLCBsb2dpblJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2dpblJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgY2FtYmlvIHBhc3N3b3JkIGUgbnVvdm8gdGVudGF0aXZvIGRpIGxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENoYW5nZSBQYXNzd29yZCBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IEFjY291bnQgY29uZmlybWF0aW9uIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgYXR0aXZhcmUgbCdhY2NvdW50IGNoZSBub24gaGEgYW5jb3JhIGVmZmV0dHVhdG8gbGEgcHJvY2VkdXJhP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gTG9naW4gZmFpbHVyZSwgcmVzdWx0IGNvZGUgJywgbG9naW5SZXNwb25zZS5SZXN1bHRDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpblJlcXVlc3QgYnkgYWNjb3VudCcgKyBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgKyAnIHRva2VuOicgKyBsb2dpblJlcXVlc3QudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZURhdGEobG9naW5SZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgb3BlbkFsZXJ0RGlhbG9nKGluZm86IHN0cmluZywgdGl0bGU6IHN0cmluZywgZG9udHNob3c6IHN0cmluZywgYWNjb3VudE5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0RGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFRpdGxlOiAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlOiBpbmZvLFxyXG4gICAgICAgICAgICAgICAgRG9udFNob3c6IGRvbnRzaG93LFxyXG4gICAgICAgICAgICAgICAgU3ViS2V5OiBzdWJzY3JpcHRpb25LZXlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyQ2xvc2VkQWxlcnQnKTtcclxuICAgICAgICB0aGlzLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzUmVkaXJlY3RFeHRlcm5hbCgpKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZ28gZXh0ZXJuYWwuJyk7XHJcbiAgICAgICAgICB0aGlzLmdldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uKGFjY291bnROYW1lLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dvIGludGVybmFsIScpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldFJlZGlyZWN0VXJsKCldKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgb3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBUaXRsZTogJ0NoYW5nZSBQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlOiAnUGxlYXNlIGNob29zZSBhIG5ldyBwYXNzd29yZDogJyxcclxuICAgICAgICAgICAgICAgIFBsYWNlSG9sZGVyOiAnUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VIb2xkZXIyOiAnQ29uZmlybSBQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBOZXdQd2Q6ICcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoYXN5bmMgKGRhdGE6IHsgTmV3UHdkOiBzdHJpbmcgfCB1bmRlZmluZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk5ld1B3ZCA9PT0gdW5kZWZpbmVkIHx8IGRhdGEuTmV3UHdkID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1dyaXRlIGEgdmFsaWQgQWNjb3VudE5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBjcGk6IENoYW5nZVBhc3N3b3JkSW5mbyA9IG5ldyBDaGFuZ2VQYXNzd29yZEluZm8oKTtcclxuICAgICAgICAgICAgY3BpLkFjY291bnROYW1lID0gbG9naW5SZXF1ZXN0LmFjY291bnROYW1lO1xyXG4gICAgICAgICAgICBjcGkuSWdub3JlT2xkUGFzc3dvcmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY3BpLkpXVFRva2VuID0gbG9naW5SZXF1ZXN0LnRva2VuO1xyXG4gICAgICAgICAgICBjcGkuTmV3UGFzc3dvcmQgPSBkYXRhLk5ld1B3ZDtcclxuICAgICAgICAgICAgY3BpLlBhc3N3b3JkID0gbG9naW5SZXF1ZXN0LnBhc3N3b3JkO1xyXG5cclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gZGF0YS5OZXdQd2Q7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY2hhbmdlUGFzc3dvcmQoY3BpKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0b2RvIGNvbnRyb2xsYSBjb21lIHZlbmdvbm8gbW9zdHJhdGkgZXJyb3JpXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMub2tNZXNzYWdlID0gJ1Bhc3N3b3JkIGNoYW5nZWQgc3VjY2VzZnVsbHkhJztcclxuICAgICAgICAgICAgICAgIC8vbGEgbG9naW4gbGEgZmEgIGEgbWFubyBhbHRyaW1lbnRpIG1pIHBlcmRvXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL2Vycm9yZSBnacOgIGluZGljYXRvXHJcbiAgICAgICAgICAgICAgICBsb2dpblJlcXVlc3QudG9rZW4gPSAnJztcclxuICAgICAgICAgICAgICAgIGxvZ2luUmVxdWVzdC5wYXNzd29yZCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbG9naW5SZXF1ZXN0LmFwcElkID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpc1ZhbGlkVG9rZW4oYXV0aHRva2VuID0gJycpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIGlmICghYXV0aHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICBvcHJlcy5NZXNzYWdlID0gJ05vIGF1dGh0b2tlbic7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHJlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldElzVmFsaWRUb2tlblVybCgpLCBuZXcgSXNWYWxpZFRva2VuUmVxdWVzdChhdXRodG9rZW4pKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcCgoak9iajogT3BlcmF0aW9uUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzVmFsaWRUb2tlbiAtIHJlc3BvbnNlJywgak9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqT2JqLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqT2JqLk1lc3NhZ2UgPSBqT2JqLk1lc3NhZ2UgPyBqT2JqLk1lc3NhZ2UgOiAnaXNWYWxpZFRva2VuIGVycm9yLi4uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBUb2tlbiBWYWxpZGF0aW9uIGZhaWx1cmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuOiAnICsgYXV0aHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBqT2JqLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjY2O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnVybC5pbmNsdWRlcyh0aGlzLmdldExvZ2luUGFnZVVybCgpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZ2V0TG9naW5QYWdlVXJsKCldKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb21wYW5pZXNGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRTdWJzS2V5c0ZvckFjY291bnRVcmwoKSArIHVzZXIpLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLkNvbnRlbnQgJiYgcmVzLkNvbnRlbnQuc3Vic2NyaXB0aW9ucyA/IHJlcy5Db250ZW50LnN1YnNjcmlwdGlvbnMgOiBbXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJc1ZhbGlkVG9rZW5VcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2lzdmFsaWR0b2tlbi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2dpblVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcclxuICAgIH1cclxuICAgIGdldFByZUxvZ2luVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2dvdXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ29mZi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDaGFuZ2VQYXNzd29yZEFwaVVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFuZ2VQYXNzd29yZFVybCgpICsgJ2NoYW5nZXBhc3N3b3JkLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlc2V0UGFzc3dvcmRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKSArICdyZXNldHBhc3N3b3JkLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50Lyc7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2hhbmdlUGFzc3dvcmQoY3BpOiBDaGFuZ2VQYXNzd29yZEluZm8pOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjcGkpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYWxpZ25cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRDaGFuZ2VQYXNzd29yZEFwaVVybCgpLCBib2R5U3RyaW5nLCB7IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXMuTWVzc2FnZSArICcgKENvZGU6JyArIHJlcy5Db2RlICsgJyknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjYyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVzZXRwYXNzd29yZChhY2NuYW1lOiBzdHJpbmcpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYWxpZ25cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRSZXNldFBhc3N3b3JkVXJsKCkgKyBhY2NuYW1lLCB7IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9Llxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLk1lc3NhZ2UgPSBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9Llxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjYxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnVybC5pbmNsdWRlcyh0aGlzLmdldExvZ2luUGFnZVVybCgpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZ2V0TG9naW5QYWdlVXJsKCldKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dvZmYoKSB7XHJcbiAgICAgICAgY29uc3QgbG9nb2ZmUmVxdWVzdDogTG9nb2ZmUmVxdWVzdCA9IG5ldyBMb2dvZmZSZXF1ZXN0KHRoaXMuZ2V0VG9rZW4oKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8TG9nb2ZmUmVzcG9uc2U+KHRoaXMuZ2V0TG9nb3V0VXJsKCksIGxvZ29mZlJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChsb2dvZmZSZXNwb25zZTogTG9nb2ZmUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9nb2ZmUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gTG9nb2ZmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkT3V0JC5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9nb2ZmUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmF2aWdhdGVVc2VyR2F0ZXdheSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZW50ZXJpbmcgbmF2aWdhdGVVc2VyR2F0ZXdheS4uJyk7XHJcbiAgICAgICAgbGV0IHVzZXJHYXRld2F5VXJsID0gdGhpcy5nZXRVc2VyR2F0ZXdheVVybCgpO1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyZ2F0ZXdheSB1cmwgZXhpc3RzLCB0aGVuIHJlZGlyZWN0IHRvIGl0XHJcbiAgICAgICAgaWYgKHVzZXJHYXRld2F5VXJsICE9PSAnJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRm91bmQgZ2V0VXNlckdhdGV3YXlVcmwgJHt1c2VyR2F0ZXdheVVybH1gKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IHVzZXJHYXRld2F5VXJsO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvdGhlcndpc2UsIHJlZGlyZWN0IHRvIGxvZ2luXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZ2V0TG9naW5QYWdlVXJsKCldKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24oYWNjb3VudE5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmdldEluc3RhbmNlc01hcEZvclVzZXIoYWNjb3VudE5hbWUpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFwOiBBcnJheTx7IFN1YnNjcmlwdGlvbktleTogc3RyaW5nOyBEZXNjcmlwdGlvbjogc3RyaW5nOyBJbnN0YW5jZUtleTogc3RyaW5nIH0+ID0gcmVzIGFzIEFycmF5PHtcclxuICAgICAgICAgICAgICAgICAgICBTdWJzY3JpcHRpb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIEluc3RhbmNlS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB9PjtcclxuICAgICAgICAgICAgICAgIGlmICghbWFwIHx8IG1hcC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnaW5zdGFuY2VNYXAgaXMgaW52YWxpZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SW5zdGFuY2VLZXk6IHN0cmluZyA9IG1hcC5maWx0ZXIoKGspID0+IGsuU3Vic2NyaXB0aW9uS2V5ID09PSBzdWJzY3JpcHRpb25LZXkpLm1hcCgoaikgPT4gai5JbnN0YW5jZUtleSlbMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNuYXBzaG90KGN1cnJlbnRJbnN0YW5jZUtleSwgc3Vic2NyaXB0aW9uS2V5KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCByZXMgPT09IFtdIHx8IHJlcy5sZW5ndGggPT09IDApIHRocm93ICdzbmFwc2hvdCBpcyBlbXB0eSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgbm93IHRoZSBzbmFwc2hvdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlczogQXJyYXk8eyBTZXJ2aWNlVHlwZTogc3RyaW5nOyBVcmw6IHN0cmluZzsgUHJvZHVjdFZlcnNpb246IHN0cmluZzsgUG9ydDogbnVtYmVyIH0+ID0gcmVzW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NlcnZpY2VzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdIGFzIEFycmF5PHsgU2VydmljZVR5cGU6IHN0cmluZzsgVXJsOiBzdHJpbmc7IFByb2R1Y3RWZXJzaW9uOiBzdHJpbmc7IFBvcnQ6IG51bWJlciB9PjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWRpcmVjdFVybDogc3RyaW5nID0gc2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGkpID0+IGkuU2VydmljZVR5cGUgPT09ICdNNEZST05URU5EJyB8fCBpLlNlcnZpY2VUeXBlID09PSAnQVBQX0ZST05URU5EJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGYpID0+IGYuVXJsKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERlc2lnbmF0ZWQgcmVkaXJlY3QgaXMgJHtyZWRpcmVjdFVybH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZVJlZGlyZWN0VXJsID0gYCR7cmVkaXJlY3RVcmx9P2p3dD0ke3RoaXMuZ2V0VG9rZW4oKX0mc3ViS2V5PSR7c3Vic2NyaXB0aW9uS2V5fSZpbnN0YW5jZUtleT0ke2N1cnJlbnRJbnN0YW5jZUtleX1gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERlc2lnbmF0ZWQgZmluYWwgcmVkaXJlY3QgaXMgJHtiYXNlUmVkaXJlY3RVcmx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0TG9nZ2VkUmVkaXJlY3QnLCBiYXNlUmVkaXJlY3RVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly8nICsgYmFzZVJlZGlyZWN0VXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc25hcHNob3QgY2Fubm90IGJlIG9idGFpbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93ICdzbmFwc2hvdCBjYW5ub3QgYmUgb2J0YWluZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24gaWEgYWJvdXQgdG8gZmFpbC4uLicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHRocm93ICdnZXRJbnN0YW5jZXNNYXBGb3JVc2VyIGZhaWxlZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEluc3RhbmNlc01hcEZvclVzZXIodXNlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldEluc3RhbmNlc01hcEZvckFjY291bnRVcmwoKSArIHVzZXIpLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLkNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q2FsZW5kYXIoc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4oYCR7dGhpcy5nZXRDYWxlbmRhclVybCgpfT9TdWJzY3JpcHRpb25LZXk9JHtzdWJzY3JpcHRpb25LZXl9YClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXMuTWVzc2FnZSArICcgKENvZGU6JyArIHJlcy5Db2RlICsgJyknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjYyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0U25hcHNob3QoaW5zdGFuY2VLZXk6IHN0cmluZywgc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0U25hcHNob3RTZXJ2aWNlVXJsKCkgKyBpbnN0YW5jZUtleSArICc/c3Vic2NyaXB0aW9uS2V5PScgKyBzdWJzY3JpcHRpb25LZXkpLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLkNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5zdGFuY2VzTWFwRm9yQWNjb3VudFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnaW5zdGFuY2VzTWFwLyc7XHJcbiAgICB9XHJcblxyXG4gICAgIHB1YmxpYyBnZXRDYWxlbmRhclVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdXBVcmwoKSArICdjYWxlbmRhcmpvYnMvJztcclxuICAgIH1cclxuXHJcbiAgICAgcHVibGljIGdldFVwZGF0ZU1lc3NhZ2UoKSB7XHJcbiAgICAgIGlmIChuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdCcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQtSVQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUNIJylcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlSXQoKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgICByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlRW4oKTtcclxuICAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyU3RvcmFnZSgpIHtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUyk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmFnZVN1YnNjcmlwdGlvbkRhdGEoc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcsIHN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9yYWdlUXVlcnlQYXJhbXMoc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcsIGluc3RhbmNlS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0SW5zdGFuY2VLZXkoaW5zdGFuY2VLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcmFnZURhdGEobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgIDogbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzO1xyXG4gICAgICAgIGNvbnN0IHJlc3BVaUN1bHR1cmU6IHN0cmluZyA9XHJcbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2UgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLkxhbmd1YWdlLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgcmVzcFVpQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCBsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgbG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25EZXNjKVxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgcmVzcEN1bHR1cmUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCByZXNwVWlDdWx0dXJlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgbG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgbG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25EZXNjKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUN1bHR1cmUoY3VsdHVyZTogc3RyaW5nLCB1aUN1bHR1cmU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2NvdW50TmFtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN1YnNjcmlwdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VsdHVyZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VUlDdWx0dXJlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZUtleSgpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSU5TVEFOQ0VLRVkpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnN0YW5jZUtleShpbnN0YW5jZUtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSU5TVEFOQ0VLRVksIGluc3RhbmNlS2V5KTtcclxuICAgICAgICBlbHNlIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdXRoU2VydmljZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cmw7XHJcbiAgICBnZXRJdXBVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguaXVwdXJsO1xyXG4gICAgZ2V0UmVkaXJlY3RVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgucmVkaXJlY3RVcmw7XHJcbiAgICBnZXRVc2VyR2F0ZXdheVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51c2VyR2F0ZXdheVVybDtcclxuICAgIGdldENyZWF0ZUFjY291bnRVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguY3JlYXRlQWNjb3VudFVybDtcclxuICAgIGdldENoYW5nZVBhc3N3b3JkVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmNoYW5nZVBhc3N3b3JkVXJsO1xyXG4gICAgaGFzU3Vic2NyaXB0aW9uU2VsZWN0aW9uID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zdWJzY3JpcHRpb25TZWxlY3Rpb247XHJcbiAgICBzaG93U2lnblVwID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zaG93U2lnblVwO1xyXG4gICAgZ2V0QXBwSWQgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguYXBwSWQ7XHJcbiAgICBpc1Nlc3Npb25TdG9yYWdlID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZTtcclxuICAgIGdldExvZ29VUkwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgubG9nb1VSTDtcclxuICAgIGlzUmVkaXJlY3RFeHRlcm5hbCA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguaXNSZWRpcmVjdEV4dGVybmFsO1xyXG4gICAgZ2V0VXBkYXRlTWVzc2FnZUl0ID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVwZGF0ZW1lc3NhZ2VJdDtcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VFbiA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlRW47XHJcbn1cclxuIl19