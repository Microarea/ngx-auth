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
import { OtpComponent } from './pages/otp-dialog/otp.component';
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
    // modifica per uniformare l header,o che arriva un po capitalizzato un po no. //rif: Ilaria e Luca
    TbAuthService.prototype.getAuthorizationHeader = function () {
        return JSON.stringify({
            type: 'JWT',
            appId: 'M4',
            securityValue: this.getToken(),
        });
    };
    TbAuthService.prototype.prelogin = function (loginRequest) {
        var _this = this;
        // console.log('authService.login - loginRequest', loginRequest);
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
                else if (loginResponse.ResultCode === 58) {
                    console.log('AuthService: Account Locked');
                    loginResponse.Message = _this.getLockedUserMessage(loginResponse.Message);
                }
                else if (loginResponse.ResultCode === 143) {
                    console.log('AuthService: otp code needed');
                    _this.openOTPDialog(loginRequest);
                }
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : "Login error code: " + loginResponse.ResultCode;
                _this.errorMessage = loginResponse.Message;
                return loginResponse;
            }
            return loginResponse;
        }))
            .toPromise();
    };
    TbAuthService.prototype.login = function (loginRequest) {
        var _this = this;
        var redologin = false;
        // console.log('authService.login - loginRequest', loginRequest);
        var loginresponse = this.http
            .post(this.getLoginUrl(), loginRequest)
            .pipe(map(function (loginResponse) {
            if (!loginResponse.Result) {
                if (loginResponse.ResultCode === 19) {
                    // mi sposto su pagina per cambio password e nuovo tentativo di login
                    console.log('AuthService: Change Password Needed');
                    _this.openChangePasswordDialog(loginRequest);
                    redologin = true;
                }
                else if (loginResponse.ResultCode === 143) {
                    // mi sposto su pagina per richiesta otp
                    console.log('AuthService: otp code Needed');
                    _this.openOTPDialog(loginRequest);
                    redologin = true;
                    // todo cose tipo mostrare una maschera che accetti il codice e lo rimandi indietro per il check
                }
                else if (loginResponse.ResultCode === 4) {
                    console.log('AuthService: Account confirmation Needed');
                    // mi sposto su pagina per attivare l'account che non ha ancora effettuato la procedura?
                    // o ammetto che la password sia  il codice? ma in relatà ogni sito lo fa in due step
                    // col click sull mail
                }
                else if (loginResponse.ResultCode === 58) {
                    console.log('AuthService: Account Locked' + loginResponse.Message);
                    loginResponse.Message = _this.getLockedUserMessage(loginResponse.Message);
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
        if (redologin)
            return this.login(loginRequest);
        else
            return loginresponse;
    };
    // ---------------------------------------------------------------------------
    TbAuthService.prototype.getLockedUserMessage = function (messageFromLogin) {
        if (!messageFromLogin)
            return messageFromLogin;
        var seconds = +messageFromLogin;
        var msg = messageFromLogin;
        if (isNaN(seconds))
            return msg;
        if (seconds < 60 && seconds > -1)
            msg = "Login Locked. Please try again in " + seconds + " seconds...";
        else if (seconds >= 60) {
            var minVal = Math.round(seconds / 60);
            msg = (minVal === 1) ?
                "Login Locked. Please try again in one minute..." :
                "Login Locked. Please try again in " + minVal + " minutes...";
        }
        return msg;
    };
    // ---------------------------------------------------------------------------
    TbAuthService.prototype.openUpdateAlertDialog = function (info, title, dontshow, accountName, subscriptionKey) {
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
                        SubKey: subscriptionKey,
                        ImagePath: this.getLogoURL()
                    },
                });
                dialogRef.afterClosed().subscribe(function () {
                    //  console.log('afterClosedAlert');
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
                        PlaceHolder2: 'Confirm Password',
                        NewPwd: ''
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
                                    // la login la fa  a mano altrimenti mi perdo
                                }
                                else {
                                    // errore già indicato
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
    // ---------------------------------------------------------------------------
    TbAuthService.prototype.openOTPDialog = function (loginRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var dialogRef, sub;
            var _this = this;
            return __generator(this, function (_a) {
                this.errorMessage = '';
                dialogRef = this.dialog.open(OtpComponent, {
                    data: {
                        Title: 'Login',
                        AccountName: loginRequest.accountName,
                        Message: 'Please insert the code: ',
                        PlaceHolder: 'Code',
                        TextValue: '',
                    },
                });
                sub = dialogRef.componentInstance.resendRequested.subscribe(function () {
                    _this.resendOTP(loginRequest.accountName);
                });
                dialogRef.afterClosed().subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (data === undefined)
                            return [2 /*return*/];
                        if (data.TextValue === undefined || data.TextValue === '') {
                            alert('Write a valid Code');
                            return [2 /*return*/];
                        }
                        this.errorMessage = '';
                        /*const cpi: OTPInfo = new OTPInfo();
                        cpi.AccountName = loginRequest.accountName;
                        cpi.Code = data.Code;
                        cpi.Password = loginRequest.password;*/
                        loginRequest.password = data.TextValue;
                        this.prelogin(loginRequest);
                        return [2 /*return*/];
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
    TbAuthService.prototype.resendOTPUrl = function () {
        return this.getChangePasswordUrl() + 'resendotp/';
    };
    TbAuthService.prototype.getResetPasswordUrl = function () {
        return this.getChangePasswordUrl() + 'resetpassword/';
    };
    TbAuthService.prototype.getSubsKeysForAccountUrl = function () {
        return this.getBaseUrl() + 'subscriptionskeysforaccount/';
    };
    /*async sendOTP(cpi: OTPInfo): Promise<OperationResult> {
       const bodyString = JSON.stringify(cpi);
       const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
       // tslint:disable-next-line: align
       return this.http
           .post<OperationResult>(this.login(), bodyString, { headers })
           .pipe(
               map((res: any) => {
                   if (!res || !res.Result) {
                       this.errorMessage = res.Message + ' (Code:' + res.Code + ')';
                       return res;
                   }
                   return res;
               }),
               catchError((error: HttpErrorResponse) => {
                   console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
                   const res = new OperationResult();
                   res.Code = 666;
                   return of(res);
               })
           )
           .toPromise();
   }*/
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
    TbAuthService.prototype.resendOTP = function (accname) {
        return __awaiter(this, void 0, void 0, function () {
            var headers;
            return __generator(this, function (_a) {
                headers = new HttpHeaders({ 'Content-Type': 'application/json' });
                return [2 /*return*/, this.http
                        .post(this.resendOTPUrl() + accname, { headers: headers })
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
                        res.Code = 669;
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
                    case 0: return [4 /*yield*/, this.http.get(this.getCalendarUrl() + "?SubscriptionKey=" + subscriptionKey /*, { headers }*/)
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
            updatemessageIt: 'Sono previste attività di manutenzione ed aggiornamento, per questo sulla tua subscription @@sub potrebbero verificarsi brevi disservizi il @@date, dalle ore @@starth alle ore @@endh',
            updatemessageEn: 'Due to system maintenance and updates there might be disturbance in your subscription @@sub on the @@date, between @@starth and @@endh',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQXFCLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxNQUFNLEVBQXVCLE1BQU0saUJBQWlCLENBQUM7QUFFOUQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRCxPQUFPLEVBQWdCLGtCQUFrQixFQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFFbkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7O0FBRWhFLElBQUksbUJBQWtDLENBQUM7QUFDdkMsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHLGNB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NkJBQTZCO1lBQ3JDLGdCQUFnQixFQUFFLHVCQUF1QjtZQUN6QyxpQkFBaUIsRUFBRSw2QkFBNkI7WUFDaEQscUJBQXFCLEVBQUUsS0FBSztZQUM1QixVQUFVLEVBQUUsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxHQUFHO1lBQ2hCLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsWUFBWSxFQUFFLE9BQU87WUFDckIsY0FBYyxFQUFFLEtBQUs7WUFDckIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixlQUFlLEVBQUcsd0xBQXdMO1lBQzFNLGVBQWUsRUFBRyx3SUFBd0k7WUFDMUosT0FBTyxFQUFFLHVFQUF1RTtTQUdqRjtLQUNGLENBQUM7OEVBdEJTLGFBQWEsY0FpQ0osS0FBSzt5REFqQ2QsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTt3QkEzQnBCO0NBZ3ZCQyxBQXR0QkQsSUFzdEJDO1NBbnRCWSxhQUFhO2tEQUFiLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFrQ2MsTUFBTTt1QkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgbWFwLCBjYXRjaEVycm9yLCB0aW1lb3V0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuL21vZGVscy9zdG9yYWdlLXZhcnMnO1xyXG5cclxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0LCBDaGFuZ2VQYXNzd29yZEluZm8sIE9UUEluZm8gfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9naW5SZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgTG9nb2ZmUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ29mZi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9nb2ZmUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dvZmYtcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBJc1ZhbGlkVG9rZW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvaXMtdmFsaWQtdG9rZW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IE9wZXJhdGlvblJlc3VsdCB9IGZyb20gJy4vbW9kZWxzL29wZXJhdGlvbi1yZXN1bHQnO1xyXG5pbXBvcnQgeyBUYkF1dGhFbnZpcm9ubWVudCB9IGZyb20gJy4vbW9kZWxzL2F1dGgtZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE90cENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvb3RwLWRpYWxvZy9vdHAuY29tcG9uZW50JztcclxuXHJcbmxldCBhdXRoU2VydmljZUluc3RhbmNlOiBUYkF1dGhTZXJ2aWNlO1xyXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSAoKSA9PiBhdXRoU2VydmljZUluc3RhbmNlO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRiQXV0aFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3RhdGljIERFRkFVTFRfRU5WOiBUYkF1dGhFbnZpcm9ubWVudCA9IHtcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDoxMDM0NC9hcGkvJyxcclxuICAgICAgaXVwdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MjE3Mi9hcGkvJyxcclxuICAgICAgY3JlYXRlQWNjb3VudFVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMCcsXHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkVXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1NjM5Mi9hcGkvJyxcclxuICAgICAgc3Vic2NyaXB0aW9uU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgc2hvd1NpZ25VcDogZmFsc2UsXHJcbiAgICAgIGFwcElkOiAnTTQnLFxyXG4gICAgICByZWRpcmVjdFVybDogJy8nLFxyXG4gICAgICB1c2VyR2F0ZXdheVVybDogJycsXHJcbiAgICAgIGlzUmVkaXJlY3RFeHRlcm5hbDogdHJ1ZSxcclxuICAgICAgbG9naW5QYWdlVXJsOiAnbG9naW4nLFxyXG4gICAgICBzZXNzaW9uU3RvcmFnZTogZmFsc2UsXHJcbiAgICAgIHNuYXBzaG90U2VydmljZVVybDogJycsXHJcbiAgICAgIHVwZGF0ZW1lc3NhZ2VJdCA6ICdTb25vIHByZXZpc3RlIGF0dGl2aXTDoCBkaSBtYW51dGVuemlvbmUgZWQgYWdnaW9ybmFtZW50bywgcGVyIHF1ZXN0byBzdWxsYSB0dWEgc3Vic2NyaXB0aW9uIEBAc3ViIHBvdHJlYmJlcm8gdmVyaWZpY2Fyc2kgYnJldmkgZGlzc2Vydml6aSBpbCBAQGRhdGUsIGRhbGxlIG9yZSBAQHN0YXJ0aCBhbGxlIG9yZSBAQGVuZGgnICxcclxuICAgICAgdXBkYXRlbWVzc2FnZUVuIDogJ0R1ZSB0byBzeXN0ZW0gbWFpbnRlbmFuY2UgYW5kIHVwZGF0ZXMgdGhlcmUgbWlnaHQgYmUgZGlzdHVyYmFuY2UgaW4geW91ciBzdWJzY3JpcHRpb24gQEBzdWIgb24gdGhlIEBAZGF0ZSwgYmV0d2VlbiBAQHN0YXJ0aCBhbmQgQEBlbmRoJyxcclxuICAgICAgbG9nb1VSTDogJ2h0dHBzOi8vbWFnb2Nsb3VkLXN0b3JlLXBkZi5zMy5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9sb2dpbi1sb2dvLnBuZycsXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIC8vJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBVGdBQUFBMkNBWUFBQUJUQW9XdUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeVZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRRNElEYzVMakUyTkRBek5pd2dNakF4T1M4d09DOHhNeTB3TVRvd05qbzFOeUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREl4TGpBZ0tFMWhZMmx1ZEc5emFDa2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZSVGMwT0VKRU1EY3dORGxCTVRGRlFUbEROelZETkRSR05rTXpRMEV3UkRVaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJUYzBPRUpFTURnd05EbEJNVEZGUVRsRE56VkRORFJHTmtNelEwRXdSRFVpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRk56UTRRa1F3TlRBME9VRXhNVVZCT1VNM05VTTBORVkyUXpORFFUQkVOU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBGTnpRNFFrUXdOakEwT1VFeE1VVkJPVU0zTlVNME5FWTJRek5EUVRCRU5TSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QbDNlNER3QUFCVUFTVVJCVkhqYTdGMEpsQmJGRWU1ZGRoSGxNcXdvSWdnS0tpTEk0WWtnUnFPZ0lvbzNuaUFlTVFveEtzWW9oNklSaVJFVWp4Z0pDcEpvOElxQWthQVFOTUdZNEFFb0tJcXVBZ29SUlRua1dCRFkxSmVwZlE2MTNYUDJ6UC92N3RSN0grejBQMVBkMHpOZFUxMVZYVjFRWGw2dU1xcnhkQURoQ0VJblFnZENFMEpqd202RUFnSmVrcldFL3hLK0pMeFBXRUI0aTdBMDY3Nk04cFVLTWdGWFkra3d3cm1FVXdpSHh1RHpNbUVLNFVYQ2lxeGJNOG9FWEVhNXBKTUkxeExPc016M2U4TFRoRWNKcjJmZG5GRW00REpLazM1Q0dFSTRQb1c2WGlBTUpLek11ajJqVE1CbGxDVEJuamFHY0lIUGVhV0VOd256Q0I4U3ZpV3NZODFzRjBJSllXL2wyT3M2OGhSM1h3OSttd25EQ2ZkbWp5Q2pUTUJsbEFTZFNwaE1xSy81YlN0aFB1RnZoR244ZDFqcVRyaVUwSlhReG5ET0c0VEJoSDluanlPalRNQmxaSXVlOHREYUhpYmNwUnl2cUMyQ0YvWjZqenAvcHh6YlgwWVpaUUl1bzhpRXFlUk01WVI4U1BvcjRWYkN3Z1RyNzBLNGg5RE5VSC92N0JGbGxBbTRqS0pRVThKY1FqTlJEbnZZMVlSSktiWUZXdUkxbXZJSmhBRVIrTlVtdENXMFZJNGRzQkdoSHYrMmdmQWQ0VFBDWXNJSFBBWFBLQk53bVlDckp0U1lOYk85UkRrY0IrY1JsdVdnVGVmelZMbFFsRThrWEJiZytuMEk1eEJPNUNud1hnSHJYY1gzUFl1MTJjWFo2NUVKdUl5cU5uMUsyRStVd1NONldJN2IxWmFGVEZOUkRzL3VqWVpyVG1JdDcyeENzWVUyek9ScDg2enNOYWxaVkpoMVFiV2dzUnJoOW9weTdHRzVKa3dYTzdLd2RkTU5oRis0am1zUitoRCt3VzN2YTBtNFZRaE1DTG5YQ0tjclovbFpScGtHbDFFVm9LR0VPMFhaNDRUTDg3Q3RyN0N3Y2RQSnlvbTdlMVVqcE4yRWVMeDNDSXVVRTdPM1hEbTJOd2lydXF3aE5pY2NSZWpzSXh4TFdkQjlrTDArbVlETEtIK3BrMFl6K3J0eWJGYjVTQkE2VzRRR3RZT3dUVGxPQkIzOVNUbmVWMmgyWHdhc0J3SEp4eWtuRGhBMnZGMDE1NERmajdOWHFHWUlPQXdJUkx3L3pWL0tYRk5GZTU1UjlyMWh5SkFCMjg3blBHVkptL1lrSEttY3JCMzdFMXJ3d04vQkdzbFN3a2VFT1lSM2ZYamhIdHdlVXdpQWZaaFhGTnFEcDdYdFdVanN3WUtualBBRmEwMExXS2h1amxnSEZ2ZFBEM0FldkxBUGNsL0VJYnhIVnhMdUVPWFFHRS9JUkVBMUp4SndBOHQvb0VVUWVEbkdGYTcyTENiVXQ4aTdGcUhVeGYrQ0ZPL3JRc0tMaE0zbHdlbER3bWhDQncyL1lacnoyMGRvVjEzQ0FNSTB3c2FBN2ZxYThEVGhuSWg5TWNhRE4vaTJUcUQvRDJUZXVNZUZoQVB5NEYzUGtERHd6MUx4Z2wyWDQwWnRFKzNwYlpGM0Y4RjdYUXIzY3piaHpmTDROSlZ3R1BQY1RmUDdIU0hiVlk4d2d2QlZ6SGI5aCs4eGJMOHNGM3krSTV5WHd2Tm9sQTM4bWdONFVUY0twUTRHNnpvNVVpaDdLY2ViNXFaZExQSWZMSTRiS0NkV0t3bUNzUnU1MHA1VFRneFhYSUpSL0czQ0pZVFI0amNFdVE0UHdlczB3aWQ4VFdNTDk0bDdSQWpHTVNIYlVNcFRYZHpYd1d5U1NKcSt6ZVp0TmNzR3Q0RHRRZEwrTVRBSDdWbk9uakEzSVhSZ3FnWGVpTWQ2WDFQK0pkdWJiTklqeWxrNW9LTnRMQXhlWnhzYjdHanJDVVVzYlBabG9RRmIxVUVCNi9zcFlWeUE4L0RoZXBhRmk0NGdiRjVTTzJjVTJjTFh0ZVErN09vanlMQmFvbCtJdm1xVUNaMk0waFp3ME9ycXBkd1dESXFKbW5KYkF1N1B5b210MHRGWnlzbGhab05tRUhwcXltR2t2NThkT1Y4RTVJVWNibGNwWnlXQ2liQmd2bWxBWXpzY0Y2MDF2MEh3LzU2RjM2b0F2T0FjT1pjL2dzMDB2MmNHL0l6eXhzbXd3R0JiT1MvbCtmSXFRenZPc01EN1J6NTJwRmN0M2NOb0EvL0hDYnZFdEIzT01mQytNc0QxSllTVm1tdGhnN3c2UnJ0d1QrTU03WG9zc3dGbHlEVk1HbHlGeHRFOEpUbDdwY2NVeTRZR0I3dmlVTmN4d2lnSzFBL3hXSmlHSVZoMGU0dzZydWFwcVp2QTd3TFdqR3pRM1lSZmliSmludlo2RVVJdERoUmxpT3kvVkFXUExmTWlaQWg1U3FQMS81b3d6UEs3c3J0eXdsamFzRllLbXkxaW5kWW9aN0g5dTJ6cUNFb3dEY2cxcm9VOGJkNllBNTNqY1BWRCtGQmRMdHZFTnROUCtmNmlCcThXY3A4VnVuZ1VzbWxpZFVTZUNDUGFVN1NwZ1BtVnVjcnE4N01MRThJRVB0L3ovWDluVzRNcjU5Q0dOQ1R0YW84MjJORGcxZ21lUFFuVFJWbi9HUHpiYWRyOUxlR1FCUHJxZmxjZGx3VTQveGxOMitZazBLNFdoR1dhdWs2MndMdUVOYzJYQ2VzRGVIYmZKZ3dudEFyQXV3MTc3cmZ6LzhBT0RwOUtTOVBvUVJndlFwaE1CTy96Sk1LWkVlclpnN0JCYzYrdnhHajcwWUpmUlYvMkVPZmR6SFZ0Q3dIdzJjTFBmQW1QMlNHRVk4S0VpWGdKdVArbThIQUgrenpRdUFMdVNzSHZNeTQvUjVTWFJ1UmZvQm5ZbUc3dm4yQ2ZJYWFyWllEek9tcjY4M1dPQjB5aVhSQkVING42RVBmWE1BYS91elVmcURBRXdkSFdvNDVERE5jTlR2aTl4ek00UDJZSUVjYnVhU0hxYk93UjZoUDFQbzQxOE93bHpydTkzQzU5eExHZ0IvdUZpVWdQbnpSTTM1bWdPdjRqd204VFZ2a2wvNG9GM2dodFdDRU01eGRGNEQ5TzdidzNBVlplZE9UcFJGSzBSQVhiajFST2paRk9xVnZNcWJnWGZjUG1qaFhDY3pzdEFxLyszSWVZa2plSTBhYkwyWWt5eVBDN3FTKzJKUGo4a00vdVkrV2trNDhUUW9TK3huYU5DL2lkODUyd2lXbGpCVzJJMFladEFjdkxMUGNoVEM1WW5mSUI5Nk54VHE3RTRKVDJyaUV1VzRCdEdpbU9NV2pmc2NnZkFxdWhlSkR1Ky91Tk9QKzJrUHpoUWJ4Q2xGMmk3S1lDajBybmF6eW1wNlJRYnhuYjl0eUV2UnZDeE1qQjFqZ2hwbUNUOUFCN3NldmwrTGtjclp3d25QMHM4b1NndzU0YXA5ZFFYK241TERlYTZBeXNic0k2emR0WjB2ZHhHZm9nS1crMDNLZzlWT1ZZc2NkWUc3S1Z3MnlvT0o2dDBiNmc0ZTNpK3JKQ3d3bTZyK2RONGhpQzdaazhlZWdqeFBFb2xkN0d6TFBaMEwrdmFNOUpBYTY5UjlPdmt2RFZSbVlTQkFwL3hZNEdyTUU5aEIwZUpZYnJybE5PbUU2dU5zRHBFS0R1eGZ6K0lRNXhKUnZsOStZeDBjMUhNRTdsajlpTUtpU2NKck9EcUVqekcrNTlWeFpjYlpUM0xtNmRXWlB0dEpPQ29iSEJsYkNOUjFKRHl6YUk4WUovR2FHWU1NV1NEZTRZelQxMDE1dzNWcHd6TXlEL1FzSmFjZTJ2ODhROTNrbGpCeXRPdVEwWGF2cC9iNTlyK3ZuWVhWNGdIT2ZEQTJ1WEI3SDlXTkpWR3Z0akcwTmRneXozUnowZkI4bjdoTDRCK0p4RitMZFBQN1gyY0RMbzFrTFBzcmo4MGUzSWM1LzNLOE41WWVvNmd2QUhuM3RmNW43R3VvU1grN0dOUjJsYy9yYW9XRlhPVnphU1hjSXRMZFVobHk3QjV2RlBnOGJnSm1ReUNSSWVjN3lZL29MRzVzbFhVZTVzOVlSS1Awc013a2JXaXJKelBjNUhxTVpFdzI5Yitkb3psWlBteUlzUVR2QWdUOCtmZEpYM1pZMTllNDZlQ1FMSjZ4dCtHOFBhNStRQWZQNmluSXd2dC9yMGZWV2hNT1A5TGVXRWxHR0Z6OThNNSt6cjdzZEN3NHNHa2h2MkR1UnBnQTNxcjdIYmpIU3BwWEVKZ2tldUpqQzlFSmkyUFNmS2dqaFdUaFhIeU1QMmRaNjhOQ2VMNHova3FCMS9Fc2M5UGM3OW84Zno2YUI1Um42RUdMYUxDZU1KOS9IVU5GZDBoakxuNkJzVTBmeHp0OGJXV1VGd1hCeGFSUVJjbEt6aVMzajhqVEw4amh5QVBVek1DMTMycFRYaXQ0Y3QzRkJ0amFhRDNaY3F2QzQyTW5CZW90SGV2QWFJRkdqOWZPYjdTbFhlRnUvWlBIbGhZSzlwN3pwZXB1dzZic0xROCtLNHRlRzgvVDNzY3gzWkhoV1Y4TVcvSWNmUDVBbERPVGJlZVNnRzN6K3lvTlBSSkZYOTZSYVBaL3VrU2NEdEVBemMxRnRWenZZUmxvYXFuVE9zd3BBNndmS04vMUljMytWei9udWE2ZFROSHVjWGFZeTlDL1Brb2NzZDV0L09ZVnNXaWZlcG51R2RNeTMreDVSMWRSVWZoR2RvVEJtZ09SNVQ4akNFbWNubm12SU9QTzJ0N2dUdC9FMU5PWnlZSi91cGg0K0tGd3puRDQ3Um1GMDFRdE8yZHhiVHMrYkNKaFBrYS9hQTVzdGZ4Mk1LTEVNWVZ1YVJCdWVtejNMWWx0VnFaODl0WGFWUEgzNm00ZnJicXNFQU5DVkt1TWxpSGJlRnJMdTZrV2s1NEFWQjVyODNhenF6S0dKRGhvdHI4ZVdaYlBsbWI5TUlyaURUM3Z2Rk1Sd2hBejJtMmU2K1ExRG8rang1MkZMd3JzbHhlNzV4L1YxSEkrQndmSlRtT29SVExLOEdnNitycGd5aExYTXQxdkZucFE5TTdsWkRCTnc4UTNtN0lBTHVjYUhGNmJTd0lGUkhNM1c4M3ZLTndydHl0Q2diRS9CYUNBTHBmZXJ2Y2I3Y09HVkhDZzhTVXp6RURsN0x3bmVBcXJ4N2xIeW0yM1A4OG0wWGZTYmJkN0JCcTV0UkRRWmVpZEo3NUcxcjFXVktIMTkza0tvWkJQbWsyOWk4UVZBUHhqWGllS2dLSHhFK1JyemNNQncvYi9sRzVjb0lURTNESkZPVUc1TWNvdlRKTUxjS2dRYmhYVCtGQjRtc0RjaFlBc00wUWlFZTAweWpOL2xvZEdsVFE2SHB5aVU3cHBDYzZyQ2wzKzVLYjNQOElvRzZkQnNVTmVGM3BpYlFJazFaL2FBQzdsbWhVbU9LRmliMEFGK1NuNG15dmdsb2IyZUpzckQyUGFRVmt0NVczVnJadFVKd1FqUFpQNFdIS0dQWjFtczBSemw0V3VYd3BjTmE0NWF1NHcycThyckhob1pydjZvR2c4NlVibjlWQW5YcFFwUnE4VE9vQ2FTNy85cGhZbEFHYVFSVWk0RFh5ckNRWmNwL1M3eXdKSmRsUGFlaWVlQ2tEZThpelV1Q2FWZXBLT3VRMG9QY1lmamJMYVRkZEZnT1h6cG93RVUrQXRrMGhTNnVCb1BPWkxZb1NxQXVFODl0Q2Q5anZteXNySHRmeXNNSU9FUVJ5eWp5K3dPKzVETEE4NzRFcGdJWGk3S29LeTh3TlpKdTUxOW96cHN2am52a3lZT0c0OFp0bkc4ZDRrTmttN29IME1yV0dxNXRVZzBFbkdsUDM3MFRxS3VKb1g0NTA3QXRwQXBDbGlkRmUybkt0b1NOSXBiTG4vb29jL0NtU1h0Ym8rd3ZhYnBPSEg4WlUwTWM0Y01mTkVzY1E0alh6Wk9CTlVjY241Mmpkc2dsWXpwRCtGTER0ZTJxZ1lEN1J1bVh5RFZOb0s3T21yS1ZhbWN2ZXJsQjhNUVJSaVpOTzAzbkZ1UlllMDM1aHJBQ0RtczVONFhRNGpDMSs0a291eldCRzVRYTFwU1kvS2FyblZONXcwNGtWMGU4TE5SL1RCR3V5cE9CSlowMzErYWdEWWRxaE5RemhpbTFMaDExNzJvZzROWVpCTGh0dXlnY1NZZHJ5dVVLa0RLRDRLa1RzMjRkYlU2eG4wc01HdHk2S092QVpLQnZMOFBYQXlTWFVTQ055ZTh0Mzl3QW5xSzZhWlFGdnRJV04wenpza3dVWlQvUGs0RTFqUWRYQmNFQmNtSEtiWkFmUHF3ZjFDMFoyNmJSaGl0TUcwZFhBeUUzMDJCU09kZGlIVGNxdmJkV2h0cHNNSmdKU21MVWZZQ0hxU1F0TXEyRWVTT0tnSHRFVlRaa1AyS3dNMGpEZnhLRFRHWUR3Ykt2WlJiNGpsTTdKNjdFZzVTYlJNc05ZRm9xODM2b2FSSyswakxtY0pMbVE1QVV3YkZ4dkNqejJtZjNjWTluVU5YcEFVUDVlQlZ0b2Jra0pGM1ZiZnBkYnVqWGhRYU5NbXFZVXgrRGNGdVdVdi9DTEdSYXp6czJhZ2RMbTlTUnlsbjc1U1laWG9GbzQ5Y3MzMXc3emRmbkRvdjg1VDNjcnJHeGpORUkrMVo1TUxDa2dFYkl3SXNwMWYya09IN1BvTWxVa0NrRkV1d3FWWDI1RVpTQmZ4bW1kamIyNHAxdUtIL01NUFYvUTFOV3JESEJCQ0ZNQzd0cnl2K1RZdi9DVkxTYnBoelpmVDR0ak1GVTdoSS9VbnhWTGdyeEJZOUsvY1h4YkJWc3I0S2dKR1Bpc0pDOWl5aTdXZk1pL1VNbDQzQUk2KzJTb1QzZFZERFBkeHhDektTTW9ML1k1eHIwbnltdThtazJnMFNsK2NvL2gxelNaSHIza1dMOHdSaDg3MUo2NHpwb2lLSGNGRndQeFNDc3MrRlJRL2tMS2ZScHhRZTdxMmVmYXpMNjlncVlYZk1FVFRiTnhvYXQ2c0xzMnZOT3dJeSt4WnJzcE4wVHlFeTdXTlF4UTNQT2lacSsrSUEzbkxiZG51MnVPdFlRNnZxY3YwTFR0aUVKWmZFZHI2bnJ0eUUya2Q3a2thazFiSnV4bzloODEvVWpQTFlOMU5IUExQZk5PSTk3bTBab0dvSVhzbXRQOE1sODdIWDlXNGJyWm9kb2d5bEQ3eVpEOW1qVCtjMGk5T1dwdkkyZ2llN3gyamF3VjRpSzNoWFgza0tvcmFud2lBUUUzTFdXdHYzend5V2ErMm11T1crazVyelBDWWRiYk10MWd2ODJUb1h0ZFUzYkZGSnkxK0ZCSldsdVNEN0grYVNqWHNScHgvZjBFV3dQRzY2SGtOazlvSURybjhMSDBrMGJDWGNROXZHNHZoVUwrcTg5K09DajF5RGlWbitnaFQ1YkVhSjlvenl1dnpHa1FHeFFIbXhyenYwSUYvT2V2bDcwVDcrZDdlR1JlQ21nbXRoRnpPbFhzWEh4U0RFWFBqR0U2Z2xQVzJkaHhKeHFNR1EyY3gwajVtcHlRdXJ3YW1Icmc1M3RHczE1U0d5b3k3STZqS2NpNnlMVzM0RWRHbko1R3p4aVRaVi96QkZ5a2sweFRDZGhXbGdRbzIrd1BHNjBxcHg2ZWo1UEg4S0dDMXpPQm5ndkFrK0VMTUV6K3kxUHJacXhUZlpJbjJ2aG1aMHJ6QTZMTmVlVnNybWpkc2oyVjB6emZxNHFCNE9Yc0IyNm5ZK0RhQzZiZ0ZhNkhIWVlFNGY3MUkxbGVrZ2NHaVJCS0V3Q1YzajhYc3BqOFVNMmpjREczcFp3ckRLdm1zQnlLZFBhVjd5L3V1U2NiN0dKUWhkUHQ0UDdIODgyeURZQ01KMmRxdHdyU0dKcWNNQnpQaEoxcjVEOGdtaHdWNlNrdlprMGkrODh6cDFvNkFmc2REK2FjR2lJYVVnLzNxaFpSNXREYXNidENWOFplTDNHRzU0VWgyamJBTUk4ancySjQyNmFzOVR5UnNIWWpQdW9FRlBVdUhTS3gvMU5TcUMrcVlSZFEvYnpCSXYxWTJwNlVJUXByUzBhcUt2WHhwbzRlRlJOa2ZMelZESUxpNGQ1T0RpQ0VBS1FFWWo2ZlVERC9WYit5bFM0MHBGSkJZazFaeGdjSDZVYWJ5N3F2SUVCcnlLMmhsdkVYcll0L0ZWc3lBYjZEbXhZTjRWMTREb2tpZndreEQwdjVIdWVxdEZ5am1Pc1lNTXR2dHdmOHhlNWpPKzNLV3NlUjdGR2JtcmJTeXIreWdsb1BnZXpKbWNqdEFqOGVxcDA5OHp3MGx3dlpXM3JGZ3YxYkdXSHdyMFJycjJNSXdIaUpwMzlpQjBtUzNMZ3dIbUh0Y05aZXJkY1pUdmFhUkcrdUU4WXBHcWZDTHptK2ZBNFhhTk5GWWFzNDh3SVg0anZ4ZkViUG5VYzcyTnppVXBqTFdpa1l4Sm9GNXdmTnlXZ1BmZlh6REtDRXJhUSs2VVAvM1lKYVJROUEyclZUOGFvNDNsQ0N3dDlqREcyTWtMOVpXeVBxeFdnanJzczl1MVcxbGpQOGF1M1NGWE82eFpsMmNZb2plMXBpWXEyWk1xdlBUTDA0U0VWUHRsa2xBd0xSUnI3NDBHcWN0QnpCYjNLV2dpK0x0ZXIrSG01b0lYY2Fja0ZEeTF5RG12Q25TendRMGJaNFNFMXlxQTBrWEVpMi91NmNyK2Exa0Ird25iaDZSem00MmVmM01UWEZDZzdTVXNya25xdURhaFZJNXdLQWZHOVdXdnZvc3hCdDJ2WVhqcVR4OVppUzMwOGhXY2owSlpQNFQ0MkpRVFl3dTJlek04OWFLcis1V3lmM3hxeUwzZXc3UnEyVmlUQ3dIcm1md1d0RjA0R0RNUWZDNFAyZXhFNkNRWlpkOWFLSHNvN3VOTkVNNFZUb3JNdzF1Smw3K2M2M2pQQzFBUExaR3pzUU45TUJkc3R2aTVQQS9yeTRBeEttM2lnUHBWZ2JOSFozSis5VkxqSStrMDhNTzdWR05PVHBpYmNqNWpTNzhhRGJoMFBvbHhNazJ3UzdnbXJaaG9ySnhnWWczdzl2MmNmcThwcndaT2dJbTVEY3phdDFPSTJyT0grL2JxcWRPYi8zYS9LQ2RqRGpXQWJzZ2NpOGpxUStlQ2hZQzNraUloOElDUVJoZCtJQjdaTXJkU0lQVUF0ZUlCRlNZdDByRXZ6Q3hzOFc0c0gxRDBxL0Y2ZElHeUQxNDAvSksxWVl5M21kc0J1czVFOWFLK3pwekN0bHdrdk01WlhuYUNjSGNNYXNQWmN3RzNid0VMa1BmYnl6YTVLTDNwR05aUCtKOEFBREFQWHdHRXJ2QVVBQUFBQVNVVk9SSzVDWUlJPSdcclxuICAgIH0sXHJcbiAgfTtcclxuICBwcml2YXRlIGVudjogVGJBdXRoRW52aXJvbm1lbnQ7XHJcblxyXG4gIGxvZ2dlZE91dCQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIGVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIG9rTWVzc2FnZSA9ICcnO1xyXG5cclxuICBnZXQgcm91dGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2VudicpIGVudjogVGJBdXRoRW52aXJvbm1lbnQsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2cpIHtcclxuICAgIGF1dGhTZXJ2aWNlSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgdGhpcy5lbnYgPSBfLmRlZmF1bHRzRGVlcChlbnYsIFRiQXV0aFNlcnZpY2UuREVGQVVMVF9FTlYsIGVudik7XHJcbiAgICBjb25zb2xlLmxvZygnVGJBdXRoRW52aXJvbm1lbnQnLCB0aGlzLmVudik7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjaGVja0Nvbm5lY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgIC5nZXQodGhpcy5nZXRCYXNlVXJsKCkpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRpbWVvdXQoNTAwMCksXHJcbiAgICAgICAgbWFwKChfXykgPT4gdHJ1ZSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKClcclxuICAgICAgLmNhdGNoKChfXykgPT4gZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUml0b3JuYSBsYSBiYXNlIHVybCBkZWwgYmFja2VuZCxcclxuICAgKiBjYXJpY2F0YSBkYSB1biBmaWxlIGRpIGNvbmZpZ3VyYXppb25lIGNhcmljYXRvIGRpbmFtaWNhbWVudGUgKGFzc2V0cy9lbnZpcm9ubWVudC5qc29uKVxyXG4gICAqL1xyXG4gIGdldEJhc2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXJsO1xyXG4gIGdldFNuYXBzaG90U2VydmljZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5zbmFwc2hvdFNlcnZpY2VVcmw7XHJcbiAgZ2V0TG9naW5QYWdlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmxvZ2luUGFnZVVybDtcclxuXHJcbiAgLypcclxue1xyXG4gIHR5cGU6IEpXVCxcclxuICBhcHBpZDogTTQsXHJcbiAgc2VjdXJpdHlWYWx1ZTogand0RW5jb2RlZFxyXG59XHJcbiovXHJcbi8vIG1vZGlmaWNhIHBlciB1bmlmb3JtYXJlIGwgaGVhZGVyLG8gY2hlIGFycml2YSB1biBwbyBjYXBpdGFsaXp6YXRvIHVuIHBvIG5vLiAvL3JpZjogSWxhcmlhIGUgTHVjYVxyXG4gIGdldEF1dGhvcml6YXRpb25IZWFkZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIHR5cGU6ICdKV1QnLFxyXG4gICAgICBhcHBJZDogJ000JyxcclxuICAgICAgc2VjdXJpdHlWYWx1ZTogdGhpcy5nZXRUb2tlbigpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcmVsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2F1dGhTZXJ2aWNlLmxvZ2luIC0gbG9naW5SZXF1ZXN0JywgbG9naW5SZXF1ZXN0KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBvc3Q8TG9naW5SZXNwb25zZT4odGhpcy5nZXRQcmVMb2dpblVybCgpLCBsb2dpblJlcXVlc3QpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFsb2dpblJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxOSkge1xyXG4gICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGNhbWJpbyBwYXNzd29yZCBlIG51b3ZvIHRlbnRhdGl2byBkaSBsb2dpblxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2hhbmdlIFBhc3N3b3JkIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgIHRoaXMub3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBBY2NvdW50IGNvbmZpcm1hdGlvbiBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBhdHRpdmFyZSBsJ2FjY291bnQgY2hlIG5vbiBoYSBhbmNvcmEgZWZmZXR0dWF0byBsYSBwcm9jZWR1cmE/XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA1OCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQWNjb3VudCBMb2NrZWQnKTtcclxuICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSB0aGlzLmdldExvY2tlZFVzZXJNZXNzYWdlKGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IG90cCBjb2RlIG5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgIHRoaXMub3Blbk9UUERpYWxvZyhsb2dpblJlcXVlc3QpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlID8gbG9naW5SZXNwb25zZS5NZXNzYWdlIDogYExvZ2luIGVycm9yIGNvZGU6ICR7bG9naW5SZXNwb25zZS5SZXN1bHRDb2RlfWA7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIGxvZ2luKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KTogUHJvbWlzZTxMb2dpblJlc3BvbnNlPiB7XHJcbiAgICBsZXQgcmVkb2xvZ2luID0gZmFsc2U7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnYXV0aFNlcnZpY2UubG9naW4gLSBsb2dpblJlcXVlc3QnLCBsb2dpblJlcXVlc3QpO1xyXG4gICAgY29uc3QgbG9naW5yZXNwb25zZSA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxMb2dpblJlc3BvbnNlPih0aGlzLmdldExvZ2luVXJsKCksIGxvZ2luUmVxdWVzdClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE5KSB7XHJcbiAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgY2FtYmlvIHBhc3N3b3JkIGUgbnVvdm8gdGVudGF0aXZvIGRpIGxvZ2luXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDaGFuZ2UgUGFzc3dvcmQgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vcGVuQ2hhbmdlUGFzc3dvcmREaWFsb2cobG9naW5SZXF1ZXN0KTtcclxuICAgICAgICAgICAgICByZWRvbG9naW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XHJcbiAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgcmljaGllc3RhIG90cFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogb3RwIGNvZGUgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vcGVuT1RQRGlhbG9nKGxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgcmVkb2xvZ2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAvLyB0b2RvIGNvc2UgdGlwbyBtb3N0cmFyZSB1bmEgbWFzY2hlcmEgY2hlIGFjY2V0dGkgaWwgY29kaWNlIGUgbG8gcmltYW5kaSBpbmRpZXRybyBwZXIgaWwgY2hlY2tcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IEFjY291bnQgY29uZmlybWF0aW9uIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGF0dGl2YXJlIGwnYWNjb3VudCBjaGUgbm9uIGhhIGFuY29yYSBlZmZldHR1YXRvIGxhIHByb2NlZHVyYT9cclxuICAgICAgICAgICAgICAvLyBvIGFtbWV0dG8gY2hlIGxhIHBhc3N3b3JkIHNpYSAgaWwgY29kaWNlPyBtYSBpbiByZWxhdMOgIG9nbmkgc2l0byBsbyBmYSBpbiBkdWUgc3RlcFxyXG4gICAgICAgICAgICAgIC8vIGNvbCBjbGljayBzdWxsIG1haWxcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDU4KSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBBY2NvdW50IExvY2tlZCcgKyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IHRoaXMuZ2V0TG9ja2VkVXNlck1lc3NhZ2UobG9naW5SZXNwb25zZS5NZXNzYWdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gTG9naW4gZmFpbHVyZSwgcmVzdWx0IGNvZGUgJywgbG9naW5SZXNwb25zZS5SZXN1bHRDb2RlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW5SZXF1ZXN0IGJ5IGFjY291bnQnICsgbG9naW5SZXF1ZXN0LmFjY291bnROYW1lICsgJyB0b2tlbjonICsgbG9naW5SZXF1ZXN0LnRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgOiAnTG9naW4gZXJyb3IuLi4nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZTtcclxuICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlRGF0YShsb2dpblJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuXHJcbiAgICBpZiAocmVkb2xvZ2luKVxyXG4gICAgICByZXR1cm4gdGhpcy5sb2dpbihsb2dpblJlcXVlc3QpO1xyXG4gICAgZWxzZSByZXR1cm4gbG9naW5yZXNwb25zZTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGdldExvY2tlZFVzZXJNZXNzYWdlKG1lc3NhZ2VGcm9tTG9naW46IHN0cmluZykge1xyXG4gICAgaWYgKCFtZXNzYWdlRnJvbUxvZ2luKVxyXG4gICAgICByZXR1cm4gbWVzc2FnZUZyb21Mb2dpbjtcclxuICAgIGNvbnN0IHNlY29uZHM6IG51bWJlciA9ICttZXNzYWdlRnJvbUxvZ2luO1xyXG4gICAgbGV0IG1zZyA9IG1lc3NhZ2VGcm9tTG9naW47XHJcbiAgICBpZiAoaXNOYU4oc2Vjb25kcykpXHJcbiAgICAgIHJldHVybiBtc2c7XHJcbiAgICBpZiAoc2Vjb25kcyA8IDYwICYmIHNlY29uZHMgPiAtMSlcclxuICAgICAgbXNnID0gYExvZ2luIExvY2tlZC4gUGxlYXNlIHRyeSBhZ2FpbiBpbiAke3NlY29uZHN9IHNlY29uZHMuLi5gO1xyXG4gICAgZWxzZSBpZiAoc2Vjb25kcyA+PSA2MCkge1xyXG4gICAgICBjb25zdCBtaW5WYWwgPSBNYXRoLnJvdW5kKHNlY29uZHMgLyA2MCk7XHJcbiAgICAgIG1zZyA9IChtaW5WYWwgPT09IDEpID9cclxuICAgICAgICBgTG9naW4gTG9ja2VkLiBQbGVhc2UgdHJ5IGFnYWluIGluIG9uZSBtaW51dGUuLi5gIDpcclxuICAgICAgICBgTG9naW4gTG9ja2VkLiBQbGVhc2UgdHJ5IGFnYWluIGluICR7bWluVmFsfSBtaW51dGVzLi4uYDtcclxuICAgIH1cclxuICAgIHJldHVybiBtc2c7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBhc3luYyBvcGVuVXBkYXRlQWxlcnREaWFsb2coaW5mbzogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBkb250c2hvdzogc3RyaW5nLCBhY2NvdW50TmFtZTogc3RyaW5nLCBzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0RGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBUaXRsZTogdGl0bGUsXHJcbiAgICAgICAgTWVzc2FnZTogaW5mbyxcclxuICAgICAgICBEb250U2hvdzogZG9udHNob3csXHJcbiAgICAgICAgU3ViS2V5OiBzdWJzY3JpcHRpb25LZXksXHJcbiAgICAgICAgSW1hZ2VQYXRoOiB0aGlzLmdldExvZ29VUkwoKVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAvLyAgY29uc29sZS5sb2coJ2FmdGVyQ2xvc2VkQWxlcnQnKTtcclxuICAgICAgdGhpcy5va01lc3NhZ2UgPSAnJztcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzUmVkaXJlY3RFeHRlcm5hbCgpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dvIGV4dGVybmFsLicpO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24oYWNjb3VudE5hbWUsIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnZ28gaW50ZXJuYWwhJyk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldFJlZGlyZWN0VXJsKCldKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBhc3luYyBvcGVuQ2hhbmdlUGFzc3dvcmREaWFsb2cobG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpIHtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgVGl0bGU6ICdDaGFuZ2UgUGFzc3dvcmQnLFxyXG4gICAgICAgIE1lc3NhZ2U6ICdQbGVhc2UgY2hvb3NlIGEgbmV3IHBhc3N3b3JkOiAnLFxyXG4gICAgICAgIFBsYWNlSG9sZGVyMjogJ0NvbmZpcm0gUGFzc3dvcmQnLFxyXG4gICAgICAgIE5ld1B3ZDogJydcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShhc3luYyAoZGF0YTogeyBOZXdQd2Q6IHN0cmluZyB8IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgaWYgKGRhdGEuTmV3UHdkID09PSB1bmRlZmluZWQgfHwgZGF0YS5OZXdQd2QgPT09ICcnKSB7XHJcbiAgICAgICAgYWxlcnQoJ1dyaXRlIGEgdmFsaWQgQWNjb3VudE5hbWUnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgY29uc3QgY3BpOiBDaGFuZ2VQYXNzd29yZEluZm8gPSBuZXcgQ2hhbmdlUGFzc3dvcmRJbmZvKCk7XHJcbiAgICAgIGNwaS5BY2NvdW50TmFtZSA9IGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZTtcclxuICAgICAgY3BpLklnbm9yZU9sZFBhc3N3b3JkID0gZmFsc2U7XHJcbiAgICAgIGNwaS5KV1RUb2tlbiA9IGxvZ2luUmVxdWVzdC50b2tlbjtcclxuICAgICAgY3BpLk5ld1Bhc3N3b3JkID0gZGF0YS5OZXdQd2Q7XHJcbiAgICAgIGNwaS5QYXNzd29yZCA9IGxvZ2luUmVxdWVzdC5wYXNzd29yZDtcclxuXHJcbiAgICAgIGxvZ2luUmVxdWVzdC5wYXNzd29yZCA9IGRhdGEuTmV3UHdkO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNoYW5nZVBhc3N3b3JkKGNwaSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyB0b2RvIGNvbnRyb2xsYSBjb21lIHZlbmdvbm8gbW9zdHJhdGkgZXJyb3JpXHJcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LlJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5va01lc3NhZ2UgPSAnUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNmdWxseSEnO1xyXG4gICAgICAgIC8vIGxhIGxvZ2luIGxhIGZhICBhIG1hbm8gYWx0cmltZW50aSBtaSBwZXJkb1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGVycm9yZSBnacOgIGluZGljYXRvXHJcbiAgICAgICAgbG9naW5SZXF1ZXN0LnRva2VuID0gJyc7XHJcbiAgICAgICAgbG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgbG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgIGxvZ2luUmVxdWVzdC5hcHBJZCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBhc3luYyBvcGVuT1RQRGlhbG9nKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KSB7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oT3RwQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBUaXRsZTogJ0xvZ2luJyxcclxuICAgICAgICBBY2NvdW50TmFtZTogbG9naW5SZXF1ZXN0LmFjY291bnROYW1lLFxyXG4gICAgICAgIE1lc3NhZ2U6ICdQbGVhc2UgaW5zZXJ0IHRoZSBjb2RlOiAnLFxyXG4gICAgICAgIFBsYWNlSG9sZGVyOiAnQ29kZScsXHJcbiAgICAgICAgVGV4dFZhbHVlOiAnJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3ViID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLnJlc2VuZFJlcXVlc3RlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gdGhpcy5yZXNlbmRPVFAobG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxufSk7XHJcblxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKGFzeW5jIChkYXRhOiB7IFRleHRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkIH0pID0+IHtcclxuICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBpZiAoZGF0YS5UZXh0VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBkYXRhLlRleHRWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICBhbGVydCgnV3JpdGUgYSB2YWxpZCBDb2RlJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgIC8qY29uc3QgY3BpOiBPVFBJbmZvID0gbmV3IE9UUEluZm8oKTtcclxuICAgICAgY3BpLkFjY291bnROYW1lID0gbG9naW5SZXF1ZXN0LmFjY291bnROYW1lO1xyXG4gICAgICBjcGkuQ29kZSA9IGRhdGEuQ29kZTtcclxuICAgICAgY3BpLlBhc3N3b3JkID0gbG9naW5SZXF1ZXN0LnBhc3N3b3JkOyovXHJcblxyXG4gICAgICBsb2dpblJlcXVlc3QucGFzc3dvcmQgPSBkYXRhLlRleHRWYWx1ZTtcclxuICAgICAgdGhpcy5wcmVsb2dpbihsb2dpblJlcXVlc3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBpc1ZhbGlkVG9rZW4oYXV0aHRva2VuID0gJycpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgaWYgKCFhdXRodG9rZW4pIHtcclxuICAgICAgY29uc3Qgb3ByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgIG9wcmVzLk1lc3NhZ2UgPSAnTm8gYXV0aHRva2VuJztcclxuICAgICAgcmV0dXJuIG9wcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldElzVmFsaWRUb2tlblVybCgpLCBuZXcgSXNWYWxpZFRva2VuUmVxdWVzdChhdXRodG9rZW4pKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoKGpPYmo6IE9wZXJhdGlvblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzVmFsaWRUb2tlbiAtIHJlc3BvbnNlJywgak9iaik7XHJcbiAgICAgICAgICBpZiAoIWpPYmouUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGpPYmouTWVzc2FnZSA9IGpPYmouTWVzc2FnZSA/IGpPYmouTWVzc2FnZSA6ICdpc1ZhbGlkVG9rZW4gZXJyb3IuLi4nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENsZWFyaW5nIHN0b3JhZ2UgZHVlIHRvIFRva2VuIFZhbGlkYXRpb24gZmFpbHVyZScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndG9rZW46ICcgKyBhdXRodG9rZW4pO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGpPYmouTWVzc2FnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgIHJlcy5Db2RlID0gNjY2O1xyXG5cclxuICAgICAgICAgIGlmICghdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsLmluY2x1ZGVzKHRoaXMuZ2V0TG9naW5QYWdlVXJsKCkpKVxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRTdWJzS2V5c0ZvckFjY291bnRVcmwoKSArIHVzZXIpLnBpcGUoXHJcbiAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgIHJldHVybiByZXMuQ29udGVudCAmJiByZXMuQ29udGVudC5zdWJzY3JpcHRpb25zID8gcmVzLkNvbnRlbnQuc3Vic2NyaXB0aW9ucyA6IFtdO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJc1ZhbGlkVG9rZW5VcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnaXN2YWxpZHRva2VuLyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TG9naW5VcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcclxuICB9XHJcbiAgZ2V0UHJlTG9naW5VcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMb2dvdXRVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9nb2ZmLyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2hhbmdlUGFzc3dvcmRBcGlVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDaGFuZ2VQYXNzd29yZFVybCgpICsgJ2NoYW5nZXBhc3N3b3JkLyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZW5kT1RQVXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKSArICdyZXNlbmRvdHAvJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRSZXNldFBhc3N3b3JkVXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKSArICdyZXNldHBhc3N3b3JkLyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U3Vic0tleXNGb3JBY2NvdW50VXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3N1YnNjcmlwdGlvbnNrZXlzZm9yYWNjb3VudC8nO1xyXG4gIH1cclxuXHJcbiAgLyphc3luYyBzZW5kT1RQKGNwaTogT1RQSW5mbyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICAgY29uc3QgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNwaSk7XHJcbiAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxyXG4gICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmxvZ2luKCksIGJvZHlTdHJpbmcsIHsgaGVhZGVycyB9KVxyXG4gICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlcy5NZXNzYWdlICsgJyAoQ29kZTonICsgcmVzLkNvZGUgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjY7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICApXHJcbiAgICAgICAgIC50b1Byb21pc2UoKTtcclxuIH0qL1xyXG5cclxuICBhc3luYyBjaGFuZ2VQYXNzd29yZChjcGk6IENoYW5nZVBhc3N3b3JkSW5mbyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICBjb25zdCBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY3BpKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRBcGlVcmwoKSwgYm9keVN0cmluZywgeyBoZWFkZXJzIH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzLk1lc3NhZ2UgKyAnIChDb2RlOicgKyByZXMuQ29kZSArICcpJztcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICByZXMuQ29kZSA9IDY2MjtcclxuICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgIGFzeW5jIHJlc2VuZE9UUChhY2NuYW1lOiBzdHJpbmcpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5yZXNlbmRPVFBVcmwoKSArIGFjY25hbWUsIHsgaGVhZGVycyB9KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgICByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgIHJlcy5Db2RlID0gNjYzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KSxcclxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICByZXMuTWVzc2FnZSA9IGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgICAgICByZXMuQ29kZSA9IDY2OTtcclxuICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVzZXRwYXNzd29yZChhY2NuYW1lOiBzdHJpbmcpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGFsaWduXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRSZXNldFBhc3N3b3JkVXJsKCkgKyBhY2NuYW1lLCB7IGhlYWRlcnMgfSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICByZXMuQ29kZSA9IDY2MztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgcmVzLk1lc3NhZ2UgPSBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9Llxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICAgICAgcmVzLkNvZGUgPSA2NjE7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwuaW5jbHVkZXModGhpcy5nZXRMb2dpblBhZ2VVcmwoKSkpXHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dvZmYoKSB7XHJcbiAgICBjb25zdCBsb2dvZmZSZXF1ZXN0OiBMb2dvZmZSZXF1ZXN0ID0gbmV3IExvZ29mZlJlcXVlc3QodGhpcy5nZXRUb2tlbigpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PExvZ29mZlJlc3BvbnNlPih0aGlzLmdldExvZ291dFVybCgpLCBsb2dvZmZSZXF1ZXN0KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKGxvZ29mZlJlc3BvbnNlOiBMb2dvZmZSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGxvZ29mZlJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENsZWFyaW5nIHN0b3JhZ2UgZHVlIHRvIExvZ29mZicpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlZE91dCQubmV4dCgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBsb2dvZmZSZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuYXZpZ2F0ZVVzZXJHYXRld2F5KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2VudGVyaW5nIG5hdmlnYXRlVXNlckdhdGV3YXkuLicpO1xyXG4gICAgbGV0IHVzZXJHYXRld2F5VXJsID0gdGhpcy5nZXRVc2VyR2F0ZXdheVVybCgpO1xyXG5cclxuICAgIC8vIGlmIHVzZXJnYXRld2F5IHVybCBleGlzdHMsIHRoZW4gcmVkaXJlY3QgdG8gaXRcclxuICAgIGlmICh1c2VyR2F0ZXdheVVybCAhPT0gJycpIHtcclxuICAgICAgY29uc29sZS5sb2coYEZvdW5kIGdldFVzZXJHYXRld2F5VXJsICR7dXNlckdhdGV3YXlVcmx9YCk7XHJcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSB1c2VyR2F0ZXdheVVybDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG90aGVyd2lzZSwgcmVkaXJlY3QgdG8gbG9naW5cclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24oYWNjb3VudE5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZ2V0SW5zdGFuY2VzTWFwRm9yVXNlcihhY2NvdW50TmFtZSkuc3Vic2NyaWJlKFxyXG4gICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFwOiBBcnJheTx7IFN1YnNjcmlwdGlvbktleTogc3RyaW5nOyBEZXNjcmlwdGlvbjogc3RyaW5nOyBJbnN0YW5jZUtleTogc3RyaW5nIH0+ID0gcmVzIGFzIEFycmF5PHtcclxuICAgICAgICAgIFN1YnNjcmlwdGlvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgIEluc3RhbmNlS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgfT47XHJcbiAgICAgICAgaWYgKCFtYXAgfHwgbWFwLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhyb3cgJ2luc3RhbmNlTWFwIGlzIGludmFsaWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjdXJyZW50SW5zdGFuY2VLZXk6IHN0cmluZyA9IG1hcC5maWx0ZXIoKGspID0+IGsuU3Vic2NyaXB0aW9uS2V5ID09PSBzdWJzY3JpcHRpb25LZXkpLm1hcCgoaikgPT4gai5JbnN0YW5jZUtleSlbMF07XHJcbiAgICAgICAgdGhpcy5nZXRTbmFwc2hvdChjdXJyZW50SW5zdGFuY2VLZXksIHN1YnNjcmlwdGlvbktleSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlcyB8fCByZXMgPT09IFtdIHx8IHJlcy5sZW5ndGggPT09IDApIHRocm93ICdzbmFwc2hvdCBpcyBlbXB0eSc7XHJcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgbm93IHRoZSBzbmFwc2hvdFxyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlczogQXJyYXk8eyBTZXJ2aWNlVHlwZTogc3RyaW5nOyBVcmw6IHN0cmluZzsgUHJvZHVjdFZlcnNpb246IHN0cmluZzsgUG9ydDogbnVtYmVyIH0+ID0gcmVzW1xyXG4gICAgICAgICAgICAgICdTZXJ2aWNlcydcclxuICAgICAgICAgICAgXSBhcyBBcnJheTx7IFNlcnZpY2VUeXBlOiBzdHJpbmc7IFVybDogc3RyaW5nOyBQcm9kdWN0VmVyc2lvbjogc3RyaW5nOyBQb3J0OiBudW1iZXIgfT47XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVkaXJlY3RVcmw6IHN0cmluZyA9IHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgLmZpbHRlcigoaSkgPT4gaS5TZXJ2aWNlVHlwZSA9PT0gJ000RlJPTlRFTkQnIHx8IGkuU2VydmljZVR5cGUgPT09ICdBUFBfRlJPTlRFTkQnKVxyXG4gICAgICAgICAgICAgIC5tYXAoKGYpID0+IGYuVXJsKVswXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYERlc2lnbmF0ZWQgcmVkaXJlY3QgaXMgJHtyZWRpcmVjdFVybH1gKTtcclxuICAgICAgICAgICAgY29uc3QgYmFzZVJlZGlyZWN0VXJsID0gYCR7cmVkaXJlY3RVcmx9P2p3dD0ke3RoaXMuZ2V0VG9rZW4oKX0mc3ViS2V5PSR7c3Vic2NyaXB0aW9uS2V5fSZpbnN0YW5jZUtleT0ke2N1cnJlbnRJbnN0YW5jZUtleX1gO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYERlc2lnbmF0ZWQgZmluYWwgcmVkaXJlY3QgaXMgJHtiYXNlUmVkaXJlY3RVcmx9YCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0TG9nZ2VkUmVkaXJlY3QnLCBiYXNlUmVkaXJlY3RVcmwpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly8nICsgYmFzZVJlZGlyZWN0VXJsO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NuYXBzaG90IGNhbm5vdCBiZSBvYnRhaW5lZCcpO1xyXG4gICAgICAgICAgICB0aHJvdyAnc25hcHNob3QgY2Fubm90IGJlIG9idGFpbmVkJztcclxuICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRSZWRpcmVjdFVybCgpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbiBpYSBhYm91dCB0byBmYWlsLi4uJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB0aHJvdyAnZ2V0SW5zdGFuY2VzTWFwRm9yVXNlciBmYWlsZWQnO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0SW5zdGFuY2VzTWFwRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRJbnN0YW5jZXNNYXBGb3JBY2NvdW50VXJsKCkgKyB1c2VyKS5waXBlKFxyXG4gICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICByZXR1cm4gcmVzLkNvbnRlbnQ7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldENhbGVuZGFyKHN1YnNjcmlwdGlvbktleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KGAke3RoaXMuZ2V0Q2FsZW5kYXJVcmwoKX0/U3Vic2NyaXB0aW9uS2V5PSR7c3Vic2NyaXB0aW9uS2V5fWAvKiwgeyBoZWFkZXJzIH0qLylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXMuTWVzc2FnZSArICcgKENvZGU6JyArIHJlcy5Db2RlICsgJyknO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KSxcclxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgIHJlcy5Db2RlID0gNjYyO1xyXG4gICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRTbmFwc2hvdChpbnN0YW5jZUtleTogc3RyaW5nLCBzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldFNuYXBzaG90U2VydmljZVVybCgpICsgaW5zdGFuY2VLZXkgKyAnP3N1YnNjcmlwdGlvbktleT0nICsgc3Vic2NyaXB0aW9uS2V5KS5waXBlKFxyXG4gICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICByZXR1cm4gcmVzLkNvbnRlbnQ7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEluc3RhbmNlc01hcEZvckFjY291bnRVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnaW5zdGFuY2VzTWFwLyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2FsZW5kYXJVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRJdXBVcmwoKSArICdjYWxlbmRhcmpvYnMvJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVcGRhdGVNZXNzYWdlKCkge1xyXG4gICAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0JyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1JVCcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQtQ0gnKVxyXG4gICAgICByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlSXQoKTtcclxuICAgIGVsc2VcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlTWVzc2FnZUVuKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VU0VSX0dBVEVXQVlfQVVUT1JFRElSRUNUKTtcclxuICB9XHJcblxyXG4gIHN0b3JhZ2VTdWJzY3JpcHRpb25EYXRhKHN1YnNjcmlwdGlvbktleTogc3RyaW5nLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9yYWdlUXVlcnlQYXJhbXMoc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcsIGluc3RhbmNlS2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRJbnN0YW5jZUtleShpbnN0YW5jZUtleSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHJlc3BDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXHJcbiAgICAgICAgOiBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3M7XHJcbiAgICBjb25zdCByZXNwVWlDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICBsb2dpblJlc3BvbnNlLkxhbmd1YWdlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5MYW5ndWFnZS5sZW5ndGggPT09IDBcclxuICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcclxuICAgICAgICA6IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2U7XHJcblxyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5KV1QsIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4pO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIHJlc3BDdWx0dXJlKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCByZXNwVWlDdWx0dXJlKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTLCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLlJvbGVzKSk7XHJcblxyXG4gICAgICBpZiAobG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUsIGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpO1xyXG4gICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25LZXkpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5KV1QsIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHJlc3BVaUN1bHR1cmUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTLCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLlJvbGVzKSk7XHJcblxyXG4gICAgICBpZiAobG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCBsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKTtcclxuICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZUN1bHR1cmUoY3VsdHVyZTogc3RyaW5nLCB1aUN1bHR1cmU6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCB1aUN1bHR1cmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbigpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICB9XHJcblxyXG4gIGdldEFjY291bnROYW1lKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSk7XHJcbiAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3Vic2NyaXB0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XHJcbiAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3Vic2NyaXB0aW9uRGVzY3JpcHRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcclxuICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XHJcbiAgfVxyXG5cclxuICBnZXRDdWx0dXJlKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgfVxyXG5cclxuICBnZXRVSUN1bHR1cmUoKSB7XHJcbiAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICB9XHJcblxyXG4gIGdldEluc3RhbmNlS2V5KCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZKTtcclxuICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZKTtcclxuICB9XHJcblxyXG4gIHNldEluc3RhbmNlS2V5KGluc3RhbmNlS2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZLCBpbnN0YW5jZUtleSk7XHJcbiAgICBlbHNlIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZKTtcclxuICB9XHJcblxyXG4gIGdldEF1dGhTZXJ2aWNlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVybDtcclxuICBnZXRJdXBVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguaXVwdXJsO1xyXG4gIGdldFJlZGlyZWN0VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnJlZGlyZWN0VXJsO1xyXG4gIGdldFVzZXJHYXRld2F5VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVzZXJHYXRld2F5VXJsO1xyXG4gIGdldENyZWF0ZUFjY291bnRVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguY3JlYXRlQWNjb3VudFVybDtcclxuICBnZXRDaGFuZ2VQYXNzd29yZFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5jaGFuZ2VQYXNzd29yZFVybDtcclxuICBoYXNTdWJzY3JpcHRpb25TZWxlY3Rpb24gPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnN1YnNjcmlwdGlvblNlbGVjdGlvbjtcclxuICBzaG93U2lnblVwID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zaG93U2lnblVwO1xyXG4gIGdldEFwcElkID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmFwcElkO1xyXG4gIGlzU2Vzc2lvblN0b3JhZ2UgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlO1xyXG4gIGdldExvZ29VUkwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgubG9nb1VSTDtcclxuICBpc1JlZGlyZWN0RXh0ZXJuYWwgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLmlzUmVkaXJlY3RFeHRlcm5hbDtcclxuICBnZXRVcGRhdGVNZXNzYWdlSXQgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZUl0O1xyXG4gIGdldFVwZGF0ZU1lc3NhZ2VFbiA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlRW47XHJcbn1cclxuIl19