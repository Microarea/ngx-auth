/**
 * @fileoverview added by tsickle
 * Generated from: lib/auth.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
/** @type {?} */
var authServiceInstance;
/** @type {?} */
export var authService = (/**
 * @return {?}
 */
function () { return authServiceInstance; });
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
        this.getBaseUrl = (/**
         * @return {?}
         */
        function () { return _this.env.auth.url; });
        this.getSnapshotServiceUrl = (/**
         * @return {?}
         */
        function () { return _this.env.auth.snapshotServiceUrl; });
        this.getLoginPageUrl = (/**
         * @return {?}
         */
        function () { return _this.env.auth.loginPageUrl; });
        this.getAuthServiceUrl = (/**
         * @return {?}
         */
        function () { return _this.env.auth.url; });
        this.getRedirectUrl = (/**
         * @return {?}
         */
        function () { return _this.env.auth.redirectUrl; });
        this.getCreateAccountUrl = (/**
         * @return {?}
         */
        function () { return _this.env.auth.createAccountUrl; });
        this.getChangePasswordUrl = (/**
         * @return {?}
         */
        function () { return _this.env.auth.changePasswordUrl; });
        this.hasSubscriptionSelection = (/**
         * @return {?}
         */
        function () { return _this.env.auth.subscriptionSelection; });
        this.showSignUp = (/**
         * @return {?}
         */
        function () { return _this.env.auth.showSignUp; });
        this.getAppId = (/**
         * @return {?}
         */
        function () { return _this.env.auth.appId; });
        this.isSessionStorage = (/**
         * @return {?}
         */
        function () { return _this.env.auth.sessionStorage; });
        this.getLogoURL = (/**
         * @return {?}
         */
        function () { return _this.env.auth.logoURL; });
        this.isRedirectExternal = (/**
         * @return {?}
         */
        function () { return _this.env.auth.isRedirectExternal; });
        authServiceInstance = this;
        this.env = _.defaultsDeep(env, TbAuthService.DEFAULT_ENV, env);
        console.log('TbAuthEnvironment', this.env);
    }
    Object.defineProperty(TbAuthService.prototype, "router", {
        get: /**
         * @return {?}
         */
        function () {
            return this.injector.get(Router);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TbAuthService.prototype.checkConnection = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http
                            .get(this.getBaseUrl())
                            .pipe(timeout(5000), map((/**
                         * @param {?} __
                         * @return {?}
                         */
                        function (__) { return true; })))
                            .toPromise()
                            .catch((/**
                         * @param {?} __
                         * @return {?}
                         */
                        function (__) { return false; }))];
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
    /*
      {
        type: JWT,
        appid: M4,
        securityValue: jwtEncoded
      }
    */
    /**
     * @return {?}
     */
    TbAuthService.prototype.getAuthorizationHeader = /*
      {
        type: JWT,
        appid: M4,
        securityValue: jwtEncoded
      }
    */
    /**
     * @return {?}
     */
    function () {
        return JSON.stringify({
            Type: 'JWT',
            AppId: 'M4',
            SecurityValue: this.getToken()
        });
    };
    /**
     * @param {?} loginRequest
     * @return {?}
     */
    TbAuthService.prototype.prelogin = /**
     * @param {?} loginRequest
     * @return {?}
     */
    function (loginRequest) {
        // console.log('authService.login - loginRequest', loginRequest);
        var _this = this;
        return this.http
            .post(this.getPreLoginUrl(), loginRequest)
            .pipe(map((/**
         * @param {?} loginResponse
         * @return {?}
         */
        function (loginResponse) {
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
        })))
            .toPromise();
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
        // console.log('authService.login - loginRequest', loginRequest);
        return this.http
            .post(this.getLoginUrl(), loginRequest)
            .pipe(map((/**
         * @param {?} loginResponse
         * @return {?}
         */
        function (loginResponse) {
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
        })))
            .toPromise();
    };
    // ---------------------------------------------------------------------------
    // ---------------------------------------------------------------------------
    /**
     * @param {?} loginRequest
     * @return {?}
     */
    TbAuthService.prototype.openChangePasswordDialog = 
    // ---------------------------------------------------------------------------
    /**
     * @param {?} loginRequest
     * @return {?}
     */
    function (loginRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dialogRef;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.errorMessage = '';
                dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
                    data: {
                        Title: 'Change Password',
                        Message: 'Please choose a new password: ',
                        PlaceHolder: 'Password',
                        PlaceHolder2: 'Confirm Password',
                        NewPwd: ''
                    }
                });
                dialogRef.afterClosed().subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var cpi, result;
                    var _this = this;
                    return tslib_1.__generator(this, function (_a) {
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
                                return [4 /*yield*/, this.changePassword(cpi).catch((/**
                                     * @param {?} err
                                     * @return {?}
                                     */
                                    function (err) {
                                        _this.errorMessage = err.error && err.error.Message;
                                        return;
                                    }))];
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
                }); }));
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?=} authtoken
     * @return {?}
     */
    TbAuthService.prototype.isValidToken = /**
     * @param {?=} authtoken
     * @return {?}
     */
    function (authtoken) {
        if (authtoken === void 0) { authtoken = ''; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var opres;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (!authtoken) {
                    opres = new OperationResult();
                    opres.Message = 'No authtoken';
                    return [2 /*return*/, opres];
                }
                return [2 /*return*/, this.http
                        .post(this.getIsValidTokenUrl(), new IsValidTokenRequest(authtoken))
                        .pipe(tap((/**
                     * @param {?} jObj
                     * @return {?}
                     */
                    function (jObj) {
                        // console.log('isValidToken - response', jObj);
                        if (!jObj.Result) {
                            jObj.Message = jObj.Message ? jObj.Message : 'isValidToken error...';
                            console.log('AuthService: Clearing storage due to Token Validation failure');
                            console.log('token: ' + authtoken);
                            _this.clearStorage();
                            _this.errorMessage = jObj.Message;
                        }
                    })), catchError((/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        console.error("Error Code: " + error.status + "\nMessage: " + error.message);
                        /** @type {?} */
                        var res = new OperationResult();
                        res.Code = 666;
                        if (!_this.router.routerState.snapshot.url.includes(_this.getLoginPageUrl()))
                            _this.router.navigate([_this.getLoginPageUrl()]);
                        return of(res);
                    })))
                        .toPromise()];
            });
        });
    };
    /**
     * @param {?} user
     * @return {?}
     */
    TbAuthService.prototype.getCompaniesForUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        return this.http.get(this.getSubsKeysForAccountUrl() + user).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (!res || !res.Result)
                return [];
            return res.Content && res.Content.subscriptions ? res.Content.subscriptions : [];
        })));
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getIsValidTokenUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'isvalidtoken/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getLoginUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'login/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getPreLoginUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'login/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getLogoutUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'logoff/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getChangePasswordApiUrl = /**
     * @return {?}
     */
    function () {
        return this.getChangePasswordUrl() + 'changepassword/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getResetPasswordUrl = /**
     * @return {?}
     */
    function () {
        return this.getChangePasswordUrl() + 'resetpassword/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getSubsKeysForAccountUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'subscriptionskeysforaccount/';
    };
    /**
     * @param {?} cpi
     * @return {?}
     */
    TbAuthService.prototype.changePassword = /**
     * @param {?} cpi
     * @return {?}
     */
    function (cpi) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var bodyString, headers;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                bodyString = JSON.stringify(cpi);
                headers = new HttpHeaders({ 'Content-Type': 'application/json' });
                // tslint:disable-next-line: align
                return [2 /*return*/, this.http
                        .post(this.getChangePasswordApiUrl(), bodyString, { headers: headers })
                        .pipe(map((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        if (!res || !res.Result) {
                            _this.errorMessage = res.Message + ' (Code:' + res.Code + ')';
                            return res;
                        }
                        return res;
                    })), catchError((/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        console.error("Error Code: " + error.status + "\nMessage: " + error.message);
                        /** @type {?} */
                        var res = new OperationResult();
                        res.Code = 662;
                        return of(res);
                    })))
                        .toPromise()];
            });
        });
    };
    /**
     * @param {?} accname
     * @return {?}
     */
    TbAuthService.prototype.resetpassword = /**
     * @param {?} accname
     * @return {?}
     */
    function (accname) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var headers;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                headers = new HttpHeaders({ 'Content-Type': 'application/json' });
                // tslint:disable-next-line: align
                return [2 /*return*/, this.http
                        .post(this.getResetPasswordUrl() + accname, { headers: headers })
                        .pipe(map((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        if (!res) {
                            res = new OperationResult();
                            res.Code = 663;
                        }
                        return res;
                    })), catchError((/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        console.error("Error Code: " + error.status + ".\nMessage: " + error.message);
                        /** @type {?} */
                        var res = new OperationResult();
                        res.Message = "Error Code: " + error.status + ".\nMessage: " + error.message;
                        res.Code = 661;
                        if (!_this.router.routerState.snapshot.url.includes(_this.getLoginPageUrl()))
                            _this.router.navigate([_this.getLoginPageUrl()]);
                        return of(res);
                    })))
                        .toPromise()];
            });
        });
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.logoff = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var logoffRequest = new LogoffRequest(this.getToken());
        return this.http
            .post(this.getLogoutUrl(), logoffRequest)
            .pipe(map((/**
         * @param {?} logoffResponse
         * @return {?}
         */
        function (logoffResponse) {
            if (logoffResponse.Result) {
                console.log('AuthService: Clearing storage due to Logoff');
                _this.clearStorage();
                _this.loggedOut$.next();
            }
            return logoffResponse;
        })))
            .toPromise();
    };
    /**
     * @param {?} accountName
     * @param {?} subscriptionKey
     * @return {?}
     */
    TbAuthService.prototype.getRedirectUrlForSubscription = /**
     * @param {?} accountName
     * @param {?} subscriptionKey
     * @return {?}
     */
    function (accountName, subscriptionKey) {
        var _this = this;
        this.getInstancesMapForUser(accountName).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var map = (/** @type {?} */ (res));
            if (!map || map.length === 0) {
                throw 'instanceMap is invalid';
            }
            /** @type {?} */
            var currentInstanceKey = map.filter((/**
             * @param {?} k
             * @return {?}
             */
            function (k) { return k.SubscriptionKey === subscriptionKey; })).map((/**
             * @param {?} j
             * @return {?}
             */
            function (j) { return j.InstanceKey; }))[0];
            _this.getSnapshot(currentInstanceKey, subscriptionKey).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (!res || res === [] || res.length === 0)
                    throw 'snapshot is empty';
                // we have now the snapshot
                /** @type {?} */
                var services = (/** @type {?} */ (res['Services']));
                /** @type {?} */
                var redirectUrl = services.filter((/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) { return i.ServiceType === 'M4FRONTEND' || i.ServiceType === 'APP_FRONTEND'; })).map((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) { return f.Url; }))[0];
                console.log("Designated redirect is " + redirectUrl);
                /** @type {?} */
                var baseRedirectUrl = redirectUrl + "?jwt=" + _this.getToken() + "&subKey=" + subscriptionKey;
                console.log("Designated final redirect is " + baseRedirectUrl);
                localStorage.setItem('lastLoggedRedirect', baseRedirectUrl);
                document.location.href = 'http://' + baseRedirectUrl;
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                console.log('snapshot cannot be obtained');
                throw 'snapshot cannot be obtained';
                //this.router.navigate([this.getRedirectUrl()]);
            }));
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('getRedirectUrlForSubscription ia about to fail...');
            console.log(err);
            throw 'getInstancesMapForUser failed';
        }));
    };
    /**
     * @param {?} user
     * @return {?}
     */
    TbAuthService.prototype.getInstancesMapForUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        return this.http.get(this.getInstancesMapForAccountUrl() + user).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (!res || !res.Result)
                return [];
            return res.Content;
        })));
    };
    /**
     * @param {?} instanceKey
     * @param {?} subscriptionKey
     * @return {?}
     */
    TbAuthService.prototype.getSnapshot = /**
     * @param {?} instanceKey
     * @param {?} subscriptionKey
     * @return {?}
     */
    function (instanceKey, subscriptionKey) {
        return this.http.get(this.getSnapshotServiceUrl() + instanceKey + '?subscriptionKey=' + subscriptionKey).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (!res || !res.Result)
                return [];
            return res.Content;
        })));
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getInstancesMapForAccountUrl = /**
     * @return {?}
     */
    function () {
        return this.getBaseUrl() + 'instancesMap/';
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.clearStorage = /**
     * @return {?}
     */
    function () {
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
    /**
     * @param {?} subscriptionKey
     * @param {?} subscriptionDescription
     * @return {?}
     */
    TbAuthService.prototype.storageSubscriptionData = /**
     * @param {?} subscriptionKey
     * @param {?} subscriptionDescription
     * @return {?}
     */
    function (subscriptionKey, subscriptionDescription) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
            sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
        }
        else {
            localStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
            localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
        }
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
        var respCulture = loginResponse.RegionalSettings === undefined || loginResponse.RegionalSettings.length === 0
            ? window.navigator.language
            : loginResponse.RegionalSettings;
        /** @type {?} */
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
    /**
     * @param {?} culture
     * @param {?} uiCulture
     * @return {?}
     */
    TbAuthService.prototype.saveCulture = /**
     * @param {?} culture
     * @param {?} uiCulture
     * @return {?}
     */
    function (culture, uiCulture) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.CULTURE, culture);
            sessionStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
        }
        else {
            localStorage.setItem(StorageVars.CULTURE, culture);
            localStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
        }
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.JWT);
        else
            return localStorage.getItem(StorageVars.JWT);
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getAccountName = /**
     * @return {?}
     */
    function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.ACCOUNT_NAME);
        else
            return localStorage.getItem(StorageVars.ACCOUNT_NAME);
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getSubscription = /**
     * @return {?}
     */
    function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION);
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getSubscriptionDescription = /**
     * @return {?}
     */
    function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getCulture = /**
     * @return {?}
     */
    function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.CULTURE);
        else
            return localStorage.getItem(StorageVars.CULTURE);
    };
    /**
     * @return {?}
     */
    TbAuthService.prototype.getUICulture = /**
     * @return {?}
     */
    function () {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.UI_CULTURE);
        else
            return localStorage.getItem(StorageVars.UI_CULTURE);
    };
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
    TbAuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TbAuthService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['env',] }] },
        { type: HttpClient },
        { type: Injector },
        { type: MatDialog }
    ]; };
    /** @nocollapse */ TbAuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TbAuthService_Factory() { return new TbAuthService(i0.ɵɵinject("env"), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i2.MatDialog)); }, token: TbAuthService, providedIn: "root" });
    return TbAuthService;
}());
export { TbAuthService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TbAuthService.DEFAULT_ENV;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.env;
    /** @type {?} */
    TbAuthService.prototype.loggedOut$;
    /** @type {?} */
    TbAuthService.prototype.errorMessage;
    /** @type {?} */
    TbAuthService.prototype.okMessage;
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     * @type {?}
     */
    TbAuthService.prototype.getBaseUrl;
    /** @type {?} */
    TbAuthService.prototype.getSnapshotServiceUrl;
    /** @type {?} */
    TbAuthService.prototype.getLoginPageUrl;
    /** @type {?} */
    TbAuthService.prototype.getAuthServiceUrl;
    /** @type {?} */
    TbAuthService.prototype.getRedirectUrl;
    /** @type {?} */
    TbAuthService.prototype.getCreateAccountUrl;
    /** @type {?} */
    TbAuthService.prototype.getChangePasswordUrl;
    /** @type {?} */
    TbAuthService.prototype.hasSubscriptionSelection;
    /** @type {?} */
    TbAuthService.prototype.showSignUp;
    /** @type {?} */
    TbAuthService.prototype.getAppId;
    /** @type {?} */
    TbAuthService.prototype.isSessionStorage;
    /** @type {?} */
    TbAuthService.prototype.getLogoURL;
    /** @type {?} */
    TbAuthService.prototype.isRedirectExternal;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    TbAuthService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBcUIsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEYsT0FBTyxFQUFFLE1BQU0sRUFBdUIsTUFBTSxpQkFBaUIsQ0FBQztBQUU5RCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBZ0Isa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7SUFFakQsbUJBQWtDOztBQUN0QyxNQUFNLEtBQU8sV0FBVzs7O0FBQUcsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFBO0FBRXBEO0lBZ0NFLHVCQUEyQixHQUFzQixFQUFVLElBQWdCLEVBQVUsUUFBa0IsRUFBVSxNQUFpQjtRQUFs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RDs7SUFDckQsaUNBQTZDOztJQUM3Qyx5Q0FBK0Q7O0lBQy9ELG1DQUFpRDs7SUFDakQsMkNBQXFFOzs7OztJQXhjbEIsNkJBQXdCOzs7OztJQUFFLGlDQUEwQjs7Ozs7SUFBRSwrQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwLCBtYXAsIGNhdGNoRXJyb3IsIHRpbWVvdXQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XHJcblxyXG5pbXBvcnQgeyBMb2dpblJlcXVlc3QsIENoYW5nZVBhc3N3b3JkSW5mbyB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBMb2dvZmZSZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9nb2ZmLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBMb2dvZmZSZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2xvZ29mZi1yZXNwb25zZSc7XHJcbmltcG9ydCB7IElzVmFsaWRUb2tlblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9pcy12YWxpZC10b2tlbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi9tb2RlbHMvb3BlcmF0aW9uLXJlc3VsdCc7XHJcbmltcG9ydCB7IFRiQXV0aEVudmlyb25tZW50IH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbmxldCBhdXRoU2VydmljZUluc3RhbmNlOiBUYkF1dGhTZXJ2aWNlO1xyXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSAoKSA9PiBhdXRoU2VydmljZUluc3RhbmNlO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9FTlY6IFRiQXV0aEVudmlyb25tZW50ID0ge1xyXG4gICAgYXV0aDoge1xyXG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjEwMzQ0L2FwaS8nLFxyXG4gICAgICBjcmVhdGVBY2NvdW50VXJsOiAnaHR0cDovL2xvY2FsaG9zdDo0MjAwJyxcclxuICAgICAgY2hhbmdlUGFzc3dvcmRVcmw6ICdodHRwOi8vbG9jYWxob3N0OjU2MzkyL2FwaS8nLFxyXG4gICAgICBzdWJzY3JpcHRpb25TZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICBzaG93U2lnblVwOiBmYWxzZSxcclxuICAgICAgYXBwSWQ6ICdNNCcsXHJcbiAgICAgIHJlZGlyZWN0VXJsOiAnLycsXHJcbiAgICAgIGlzUmVkaXJlY3RFeHRlcm5hbDogZmFsc2UsXHJcbiAgICAgIGxvZ2luUGFnZVVybDogJ2xvZ2luJyxcclxuICAgICAgc2Vzc2lvblN0b3JhZ2U6IGZhbHNlLFxyXG4gICAgICBzbmFwc2hvdFNlcnZpY2VVcmw6ICcnLFxyXG4gICAgICBsb2dvVVJMOiAnaHR0cHM6Ly9tYWdvY2xvdWQtc3RvcmUtcGRmLnMzLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2xvZ2luLWxvZ28ucG5nJ1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAvLydkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVRnQUFBQTJDQVlBQUFCVEFvV3VBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlWcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUTRJRGM1TGpFMk5EQXpOaXdnTWpBeE9TOHdPQzh4TXkwd01Ub3dOam8xTnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SURJeExqQWdLRTFoWTJsdWRHOXphQ2tpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UlRjME9FSkVNRGN3TkRsQk1URkZRVGxETnpWRE5EUkdOa016UTBFd1JEVWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZSVGMwT0VKRU1EZ3dORGxCTVRGRlFUbEROelZETkRSR05rTXpRMEV3UkRVaVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEZOelE0UWtRd05UQTBPVUV4TVVWQk9VTTNOVU0wTkVZMlF6TkRRVEJFTlNJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwRk56UTRRa1F3TmpBME9VRXhNVVZCT1VNM05VTTBORVkyUXpORFFUQkVOU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUGwzZTREd0FBQlVBU1VSQlZIamE3RjBKbEJiRkVlNWRkaEhsTXF3b0lnZ0tLaUxJNFlrZ1JxT2dJb28zbmlBZU1Rb3hLc1lvaDZJUmlSRVVqeGdKQ3BKbzhJcUFrYUFRTk1HWTRBRW9LSXF1QWdvUlJUbmtXQkRZMUplcGZRNjEzWFAyelAvdjd0UjdIK3owUDFQZDB6TmRVMTFWWFYxUVhsNnVNcXJ4ZEFEaENFSW5RZ2RDRTBKandtNkVBZ0pla3JXRS94SytKTHhQV0VCNGk3QTA2NzZNOHBVS01nRlhZK2t3d3JtRVV3aUh4dUR6TW1FSzRVWENpcXhiTThvRVhFYTVwSk1JMXhMT3NNejNlOExUaEVjSnIyZmRuRkVtNERKS2szNUNHRUk0UG9XNlhpQU1KS3pNdWoyalRNQmxsQ1RCbmphR2NJSFBlYVdFTnduekNCOFN2aVdzWTgxc0YwSUpZVy9sMk9zNjhoUjNYdzkrbXduRENmZG1qeUNqVE1CbGxBU2RTcGhNcUsvNWJTdGhQdUZ2aEduOGQxanFUcmlVMEpYUXhuRE9HNFRCaEg5bmp5T2pUTUJsWkl1ZTh0RGFIaWJjcFJ5dnFDMkNGL1o2anpwL3B4emJYMFlaWlFJdW84aUVxZVJNNVlSOFNQb3I0VmJDd2dUcjcwSzRoOUROVUgvdjdCRmxsQW00aktKUVU4SmNRak5SRG52WTFZUkpLYllGV3VJMW12SUpoQUVSK05VbXRDVzBWSTRkc0JHaEh2KzJnZkFkNFRQQ1lzSUhQQVhQS0JOd21ZQ3JKdFNZTmJPOVJEa2NCK2NSbHVXZ1RlZnpWTGxRbEU4a1hCYmcrbjBJNXhCTzVDbndYZ0hyWGNYM1BZdTEyY1haNjVFSnVJeXFObjFLMkUrVXdTTjZXSTdiMVphRlRGTlJEcy91allaclRtSXQ3MnhDc1lVMnpPUnA4NnpzTmFsWlZKaDFRYldnc1JyaDlvcHk3R0c1Smt3WE83S3dkZE1OaEYrNGptc1IraEQrd1czdmEwbTRWUWhNQ0xuWENLY3JaL2xaUnBrR2wxRVZvS0dFTzBYWjQ0VEw4N0N0cjdDd2NkUEp5b203ZTFVanBOMkVlTHgzQ0l1VUU3TzNYRG0yTndpcnVxd2hOaWNjUmVqc0l4eExXZEI5a0wwK21ZRExLSCtwazBZeitydHliRmI1U0JBNlc0UUd0WU93VFRsT0JCMzlTVG5lVjJoMlh3YXNCd0hKeHlrbkRoQTJ2RjAxNTREZmo3TlhxR1lJT0F3SVJMdy96Vi9LWEZORmU1NVI5cjFoeUpBQjI4N25QR1ZKbS9Za0hLbWNyQjM3RTFyd3dOL0JHc2xTd2tlRU9ZUjNmWGpoSHR3ZVV3aUFmWmhYRk5xRHA3WHRXVWpzd1lLbmpQQUZhMDBMV0todWpsZ0hGdmRQRDNBZXZMQVBjbC9FSWJ4SFZ4THVFT1hRR0UvSVJFQTFKeEp3QTh0L29FVVFlRG5HRmE3MkxDYlV0OGk3RnFIVXhmK0NGTy9yUXNLTGhNM2x3ZWxEd21oQ0J3Mi9ZWnJ6MjBkb1YxM0NBTUkwd3NhQTdmcWE4RFRobkloOU1jYUROL2kyVHFEL0QyVGV1TWVGaEFQeTRGM1BrRER3ejFMeGdsMlg0MFp0RSszcGJaRjNGOEY3WFFyM2N6Ymh6Zkw0TkpWd0dQUGNUZlA3SFNIYlZZOHdndkJWekhiOWgrOHhiTDhzRjN5K0k1eVh3dk5vbEEzOG1nTjRVVGNLcFE0RzZ6bzVVaWg3S2NlYjVxWmRMUElmTEk0YktDZFdLd21Dc1J1NTBwNVRUZ3hYWElKUi9HM0NKWVRSNGpjRXVRNFB3ZXMwd2lkOFRXTUw5NGw3UkFqR01TSGJVTXBUWGR6WHdXeVNTSnEremVadE5jc0d0NER0UWRMK01UQUg3Vm5PbmpBM0lYUmdxZ1hlaU1kNlgxUCtKZHViYk5JanlsazVvS050TEF4ZVp4c2I3R2pyQ1VVc2JQWmxvUUZiMVVFQjYvc3BZVnlBOC9EaGVwYUZpNDRnYkY1U08yY1UyY0xYdGVRKzdPb2p5TEJhb2wrSXZtcVVDWjJNMGhadzBPcnFwZHdXRElxSm1uSmJBdTdQeW9tdDB0Rlp5c2xoWm9ObUVIcHF5bUdrdjU4ZE9WOEU1SVVjYmxjcFp5V0NpYkJndm1sQVl6c2NGNjAxdjBIdy81NkYzNm9Bdk9BY09aYy9nczAwdjJjRy9Jenl4c213d0dCYk9TL2wrZklxUXp2T3NNRDdSejUycEZjdDNjTm9BLy9IQ2J2RXRCM09NZkMrTXNEMUpZU1ZtbXRoZzd3NlJydHdUK01NN1hvc3N3Rmx5RFZNR2x5Rnh0RThKVGw3cGNjVXk0WUdCN3ZpVU5jeHdpZ0sxQS94V0ppR0lWaDBlNHc2cnVhcHFadkE3d0xXakd6UTNZUmZpYkppbnZaNkVVSXREaFJsaU95L1ZBV1BMZk1pWkFoNVNxUDEvNW93elBLN3NydHl3bGphc0ZZS215MWluZFlvWjdIOXUyenFDRW93RGNnMXJvVThiZDZZQTUzamNQVkQrRkJkTHR2RU50TlArZjZpQnE4V2NwOFZ1bmdVc21saWRVU2VDQ1BhVTdTcGdQbVZ1Y3JxODdNTEU4SUVQdC96L1g5blc0TXI1OUNHTkNUdGFvODIyTkRnMWdtZVBRblRSVm4vR1B6YmFkcjlMZUdRQlBycWZsY2Rsd1U0L3hsTjIrWWswSzRXaEdXYXVrNjJ3THVFTmMyWENlc0RlSGJmSmd3bnRBckF1dzE3N3Jmei84QU9EcDlLUzlQb1FSZ3ZRcGhNQk8vekpNS1pFZXJaZzdCQmM2K3Z4R2o3MFlKZlJWLzJFT2ZkekhWdEN3SHcyY0xQZkFtUDJTR0VZOEtFaVhnSnVQK204SEFIK3p6UXVBTHVTc0h2TXk0L1I1U1hSdVJmb0JuWW1HN3ZuMkNmSWFhclpZRHpPbXI2ODNXT0IweWlYUkJFSDRuNkVQZlhNQWEvdXpVZnFEQUV3ZEhXbzQ1REROY05Udmk5eHpNNFAyWUlFY2J1YVNIcWJPd1I2aFAxUG80MThPd2x6cnU5M0M1OXhMR2dCL3VGaVVnUG56Uk0zNW1nT3Y0andtOFRWdmtsLzRvRjNnaHRXQ0VNNXhkRjREOU83YnczQVZaZWRPVHBSRkswUkFYYmoxUk9qWkZPcVZ2TXFiZ1hmY1BtamhYQ2N6c3RBcS8rM0llWWtqZUkwYWJMMllreXlQQzdxUysySlBqOGtNL3VZK1drazQ4VFFvUyt4bmFOQy9pZDg1MndpV2xqQlcySTBZWnRBY3ZMTFBjaFRDNVluZklCOTZOeFRxN0U0SlQycmlFdVc0QnRHaW1PTVdqZnNjZ2ZBcXVoZUpEdSsvdU5PUCsya1B6aFFieENsRjJpN0tZQ2owcm5henltcDZSUWJ4bmI5dHlFdlJ2Q3hNakIxamdocG1DVDlBQjdzZXZsK0xrY3Jad3duUDBzOG9TZ3c1NGFwOWRRWCtuNUxEZWE2QXlzYnNJNnpkdFowdmR4R2ZvZ0tXKzAzS2c5Vk9WWXNjZFlHN0tWdzJ5b09KNnQwYjZnNGUzaStySkN3d202citkTjRoaUM3Wms4ZWVnanhQRW9sZDdHekxQWjBMK3ZhTTlKQWE2OVI5T3ZrdkRWUm1ZU0JBcC94WTRHck1FOWhCMGVKWWJycmxOT21FNnVOc0RwRUtEdXhmeitJUTV4SlJ2bDkrWXgwYzFITUU3bGo5aU1LaVNjSnJPRHFFanpHKzU5VnhaY2JaVDNMbTZkV1pQdHRKT0NvYkhCbGJDTlIxSkR5emFJOFlKL0dhR1lNTVdTRGU0WXpUMTAxNXczVnB3ek15RC9Rc0phY2Uydjg4UTkza2xqQnl0T3VRMFhhdnAvYjU5cit2bllYVjRnSE9mREEydVhCN0g5V05KVkd2dGpHME5kZ3l6M1J6MGZCOG43aEw0QitKeEYrTGRQUDdYMmNETG8xa0xQc3JqODBlM0ljNS8zSzhONVllbzZndkFIbjN0ZjVuN0d1b1NYKzdHTlIybGMvcmFvV0ZYT1Z6YVNYY0l0TGRVaGx5N0I1dkZQZzhiZ0ptUXlDUkllYzd5WS9vTEc1c2xYVWU1czlZUktQMHNNd2tiV2lySnpQYzVIcU1aRXcyOWIrZG96bFpQbXlJc1FUdkFnVDgrZmRKWDNaWTE5ZTQ2ZUNRTEo2eHQrRzhQYTUrUUFmUDZpbkl3dnQvcjBmVldoTU9QOUxlV0VsR0dGejk4TTUrenI3c2RDdzRzR2todjJEdVJwZ0EzcXI3SGJqSFNwcFhFSmdrZXVKakM5RUppMlBTZktnamhXVGhYSHlNUDJkWjY4TkNlTDR6L2txQjEvRXNjOVBjNzlvOGZ6NmFCNVJuNkVHTGFMQ2VNSjkvSFVORmQwaGpMbjZCc1UwZnh6dDhiV1dVRndYQnhhUlFSY2xLemlTM2o4alRMOGpoeUFQVXpNQzEzMnBUWGl0NGN0M0ZCdGphYUQzWmNxdkM0Mk1uQmVvdEhldkFhSUZHajlmT2I3U2xYZUZ1L1pQSGxoWUs5cDd6cGVwdXc2YnNMUTgrSzR0ZUc4L1Qzc2N4M1pIaFdWOE1XL0ljZlA1QWxET1RiZWVTZ0czeit5b05QUkpGWDk2UmFQWi91a1NjRHRFQXpjMUZ0Vnp2WVJsb2FxblRPc3dwQTZ3ZktOLzFJYzMrVnovbnVhNmRUTkh1Y1hhWXk5Qy9Qa29jc2Q1dC9PWVZzV2lmZXBudUdkTXkzK3g1UjFkUlVmaEdkb1RCbWdPUjVUOGpDRW1jbm5tdklPUE8ydDdnVHQvRTFOT1p5WUovdXBoNCtLRnd6bkQ0N1JtRjAxUXRPMmR4YlRzK2JDSmhQa2EvYUE1c3RmeDJNS0xFTVlWdWFSQnVlbXozTFlsdFZxWjg5dFhhVlBIMzZtNGZyYnFzRUFOQ1ZLdU1saUhiZUZyTHU2a1drNTRBVkI1cjgzYXpxektHSkRob3RyOGVXWmJQbG1iOU1JcmlEVDN2dkZNUndoQXoybTJlNitRMURvK2p4NTJGTHdyc2x4ZTc1eC9WMUhJK0J3ZkpUbU9vUlRMSzhHZzYrcnBneWhMWE10MXZGbnBROU03bFpEQk53OFEzbTdJQUx1Y2FIRjZiU3dJRlJITTNXODN2S053cnR5dENnYkUvQmFDQUxwZmVydmNiN2NPR1ZIQ2c4U1V6ekVEbDdMd25lQXFyeDdsSHltMjNQODhtMFhmU2JiZDdCQnE1dFJEUVplaWRKNzVHMXIxV1ZLSDE5M2tLb1pCUG1rMjlpOFFWQVB4alhpZUtnS0h4RStScnpjTUJ3L2IvbEc1Y29JVEUzREpGT1VHNU1jb3ZUSk1MY0tnUWJoWFQrRkI0bXNEY2hZQXNNMFFpRWUwMHlqTi9sb2RHbFRRNkhweWlVN3BwQ2M2ckNsMys1S2IzUDhJb0c2ZEJzVU5lRjNwaWJRSWsxWi9hQUM3bG1oVW1PS0ZpYjBBRitTbjRteXZnbG9iMmVKc3JEMlBhUVZrdDVXM1ZyWnRVSndRalBaUDRXSEtHUFoxbXMwUnpsNFd1WHdwY05hNDVhdTR3MnE4cnJIaG9acnY2b0dnODZVYm45VkFuWHBRcFJxOFRPb0NhUzcvOXBoWWxBR2FRUlVpNERYeXJDUVpjcC9TN3l3SkpkbFBhZWllZUNrRGU4aXpVdUNhVmVwS091UTBvUGNZZmpiTGFUZGRGZ09YenBvd0VVK0F0azBoUzZ1Qm9QT1pMWW9TcUF1RTg5dENkOWp2bXlzckh0ZnlzTUlPRVFSeXlqeSt3Tys1RExBODc0RXBnSVhpN0tvS3k4d05aSnU1MTlvenBzdmpudmt5WU9HNDhadG5HOGQ0a05rbTdvSDBNcldHcTV0VWcwRW5HbFAzNzBUcUt1Sm9YNDUwN0F0cEFwQ2xpZEZlMm5LdG9TTklwYkxuL29vYy9DbVNYdGJvK3d2YWJwT0hIOFpVME1jNGNNZk5Fc2NRNGpYelpPQk5VY2NuNTJqZHNnbFl6cEQrRkxEdGUycWdZRDdSdW1YeURWTm9LN09tcktWYW1jdmVybEI4TVFSUmlaTk8wM25GdVJZZTAzNWhyQUNEbXM1TjRYUTRqQzErNGtvdXpXQkc1UWExcFNZL0thcm5WTjV3MDRrVjBlOExOUi9UQkd1eXBPQkpaMDMxK2FnRFlkcWhOUXpoaW0xTGgxMTcyb2c0TllaQkxodHV5Z2NTWWRyeXVVS2tES0Q0S2tUczI0ZGJVNnhuMHNNR3R5NktPdkFaS0J2TDhQWEF5U1hVU0NOeWU4dDM5d0FucUs2YVpRRnZ0SVdOMHp6c2t3VVpUL1BrNEUxalFkWEJjRUJjbUhLYlpBZlBxd2YxQzBaMjZiUmhpdE1HMGRYQXlFMzAyQlNPZGRpSFRjcXZiZFdodHBzTUpnSlNtTFVmWUNIcVNRdE1xMkVlU09LZ0h0RVZUWmtQMkt3TTBqRGZ4S0RUR1lEd2JLdlpSYjRqbE03SjY3RWc1U2JSTXNOWUZvcTgzNm9hUksrMGpMbWNKTG1RNUFVd2JGeHZDanoybWYzY1k5blVOWHBBVVA1ZUJWdG9ia2tKRjNWYmZwZGJ1alhoUWFOTW1xWVV4K0RjRnVXVXYvQ0xHUmF6enMyYWdkTG05U1J5bG43NVNZWlhvRm80OWNzMzF3N3pkZm5Eb3Y4NVQzY3JyR3hqTkVJKzFaNU1MQ2tnRWJJd0lzcDFmMmtPSDdQb01sVWtDa0ZFdXdxVlgyNUVaU0JmeG1tZGpiMjRwMXVLSC9NTVBWL1ExTldyREhCQkNGTUM3dHJ5ditUWXYvQ1ZMU2JwaHpaZlQ0dGpNRlU3aEkvVW54VkxncnhCWTlLL2NYeGJCVnNyNEtnSkdQaXNKQzlpeWk3V2ZNaS9VTWw0M0FJNisyU29UM2RWRERQZHh4Q3pLU01vTC9ZNXhyMG55bXU4bWsyZzBTbCtjby9oMXpTWkhyM2tXTDh3Umg4NzFKNjR6cG9pS0hjRkZ3UHhTQ3NzK0ZSUS9rTEtmUnB4UWU3cTJlZmF6TDY5Z3FZWGZNRVRUYk54b2F0NnNMczJ2Tk93SXkreFpyc3BOMFR5RXk3V05ReFEzUE9pWnErK0lBM25MYmRudTJ1T3RZUTZ2cWN2MExUdGlFSlpmRWRyNm5ydHlFMmtkN2trYWsxYkp1eG85aDgxL1VqUExZTjFOSFBMUGZOT0k5N20wWm9Hb0lYc210UDhNbDg3SFg5VzRiclpvZG9neWxEN3laRDltalQrYzBpOU9XcHZJMmdpZTd4Mmphd1Y0aUszaFhYM2tLb3JhbndpQVFFM0xXV3R2M3p3eVdhKzJtdU9XK2s1cnpQQ1lkYmJNdDFndjgyVG9YdGRVM2JGRkp5MStGQkpXbHVTRDdIK2FTalhzUnB4L2YwRVd3UEc2NkhrTms5b0lEcm44TEgwazBiQ1hjUTl2RzR2aFVMK3E4OStPQ2oxeURpVm4rZ2hUNWJFYUo5b3p5dXZ6R2tRR3hRSG14cnp2MElGL09ldmw3MFQ3K2Q3ZUdSZUNtZ210aEZ6T2xYc1hIeFNERVhQakdFNmdsUFcyZGh4SnhxTUdRMmN4MGo1bXB5UXVyd2FtSHJnNTN0R3MxNVNHeW95N0k2aktjaTZ5TFczNEVkR25KNUd6eGlUWlYvekJGeWtrMHhUQ2RoV2xnUW8yK3dQRzYwcXB4NmVqNVBIOEtHQzF6T0JuZ3ZBaytFTE1Feit5MVByWnF4VGZaSW4ydmhtWjByekE2TE5lZVZzcm1qZHNqMlYwenpmcTRxQjRPWHNCMjZuWStEYUM2YmdGYTZISFlZRTRmNzFJMWxla2djR2lSQktFd0NWM2o4WHNwajhVTTJqY0RHM3Bad3JES3Ztc0J5S2RQYVY3eS91dVNjYjdHSlFoZFB0NFA3SDg4MnlEWUNNSjJkcXR3clNHSnFjTUJ6UGhKMXI1RDhnbWh3VjZTa3ZaazBpKzg4enAxbzZBZnNkRCthY0dpSWFVZy8zcWhaUjV0RGFzYnRDVjhaZUwzR0c1NFVoMmpiQU1JOGp3Mko0MjZhczlUeVJzSFlqUHVvRUZQVXVIU0t4LzFOU3FDK3FZUmRRL2J6Qkl2MVkycDZVSVFwclMwYXFLdlh4cG80ZUZSTmtmTHpWRElMaTRkNU9EaUNFQUtRRVlqNmZVREQvVmIreWxTNDBwRkpCWWsxWnhnY0g2VWFieTdxdklFQnJ5SzJobHZFWHJZdC9GVnN5QWI2RG14WU40VjE0RG9raWZ3a3hEMHY1SHVlcXRGeWptT3NZTU10dnR3Zjh4ZTVqTyszS1dzZVI3RkdibXJiU3lyK3lnbG9QZ2V6Sm1janRBajhlcXAwOTh6dzBsd3ZaVzNyRmd2MWJHV0h3cjBScnIyTUl3SGlKcDM5aUIwbVMzTGd3SG1IdGNOWmVyZGNaVHZhYVJHK3VFOFlwR3FmQ0x6bStmQTRYYU5ORllhczQ4d0lYNGp2eGZFYlBuVWM3Mk56aVVwakxXaWtZeEpvRjV3Zk55V2dQZmZYekRLQ0VyYVErNlVQLzNZSmFSUTlBMnJWVDhhbzQzbENDd3Q5akRHMk1rTDlaV3lQcXhXZ2pyc3M5dTFXMWxqUDhhdTNTRlhPNnhabDJjWW9qZTFwaVlxMlpNcXZQVEwwNFNFVlB0bGtsQXdMUlJyNzQwR3FjdEJ6QmIzS1dnaStMdGVyK0htNW9JWGNhY2tGRHkxeURtdkNuU3p3UTBiWjRTRTF5cUEwa1hFaTIvdTZjcithMWtCK3duYmg2UnptNDJlZjNNVFhGQ2c3U1VzcmtucXVEYWhWSTV3S0FmRzlXV3Z2b3N4QnQydllYanFUeDlaaVMzMDhoV2NqMEpaUDRUNDJKUVRZd3UyZXpNODlhS3IrNVd5ZjN4cXlMM2V3N1JxMlZpVEN3SHJtZndXdEYwNEdETVFmQzRQMmV4RTZDUVpaZDlhS0hzbzd1Tk5FTTRWVG9yTXcxdUpsNytjNjNqUEMxQVBMWkd6c1FOOU1CZHN0dmk1UEEvcnk0QXhLbTNpZ1BwVmdiTkhaM0orOVZMakkrazA4TU83VkdOT1RwaWJjajVqUzc4YURiaDBQb2x4TWsyd1M3Z21yWmhvckp4Z1lnM3c5djJjZnE4cHJ3Wk9nSW01RGN6YXQxT0kyck9IKy9icXFkT2IvM2EvS0NkakRqV0Fic2djaThqcVErZUNoWUMza2lJaDhJQ1FSaGQrSUI3Wk1yZFNJUFVBdGVJQkZTWXQwckV2ekN4czhXNHNIMUQwcS9GNmRJR3lEMTQwL0pLMVlZeTNtZHNCdXM1RTlhSyt6cHpDdGx3a3ZNNVpYbmFDY0hjTWFzUFpjd0czYndFTGtQZmJ5emE1S0wzcEdOWlArSjhBQURBUFh3R0VydkFVQUFBQUFTVVZPUks1Q1lJST0nXHJcbiAgICB9XHJcbiAgfTtcclxuICBwcml2YXRlIGVudjogVGJBdXRoRW52aXJvbm1lbnQ7XHJcblxyXG4gIGxvZ2dlZE91dCQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIGVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIG9rTWVzc2FnZSA9ICcnO1xyXG5cclxuICBnZXQgcm91dGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2VudicpIGVudjogVGJBdXRoRW52aXJvbm1lbnQsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2cpIHtcclxuICAgIGF1dGhTZXJ2aWNlSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgdGhpcy5lbnYgPSBfLmRlZmF1bHRzRGVlcChlbnYsIFRiQXV0aFNlcnZpY2UuREVGQVVMVF9FTlYsIGVudik7XHJcbiAgICBjb25zb2xlLmxvZygnVGJBdXRoRW52aXJvbm1lbnQnLCB0aGlzLmVudik7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjaGVja0Nvbm5lY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgIC5nZXQodGhpcy5nZXRCYXNlVXJsKCkpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRpbWVvdXQoNTAwMCksXHJcbiAgICAgICAgbWFwKF9fID0+IHRydWUpXHJcbiAgICAgIClcclxuICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgIC5jYXRjaChfXyA9PiBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSaXRvcm5hIGxhIGJhc2UgdXJsIGRlbCBiYWNrZW5kLFxyXG4gICAqIGNhcmljYXRhIGRhIHVuIGZpbGUgZGkgY29uZmlndXJhemlvbmUgY2FyaWNhdG8gZGluYW1pY2FtZW50ZSAoYXNzZXRzL2Vudmlyb25tZW50Lmpzb24pXHJcbiAgICovXHJcbiAgZ2V0QmFzZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cmw7XHJcbiAgZ2V0U25hcHNob3RTZXJ2aWNlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnNuYXBzaG90U2VydmljZVVybDtcclxuICBnZXRMb2dpblBhZ2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgubG9naW5QYWdlVXJsO1xyXG5cclxuICAvKlxyXG4gIHtcclxuICAgIHR5cGU6IEpXVCxcclxuICAgIGFwcGlkOiBNNCxcclxuICAgIHNlY3VyaXR5VmFsdWU6IGp3dEVuY29kZWRcclxuICB9XHJcbiovXHJcbiAgZ2V0QXV0aG9yaXphdGlvbkhlYWRlcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgVHlwZTogJ0pXVCcsXHJcbiAgICAgIEFwcElkOiAnTTQnLFxyXG4gICAgICBTZWN1cml0eVZhbHVlOiB0aGlzLmdldFRva2VuKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJlbG9naW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPExvZ2luUmVzcG9uc2U+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRoU2VydmljZS5sb2dpbiAtIGxvZ2luUmVxdWVzdCcsIGxvZ2luUmVxdWVzdCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxMb2dpblJlc3BvbnNlPih0aGlzLmdldFByZUxvZ2luVXJsKCksIGxvZ2luUmVxdWVzdClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE5KSB7XHJcbiAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgY2FtYmlvIHBhc3N3b3JkIGUgbnVvdm8gdGVudGF0aXZvIGRpIGxvZ2luXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDaGFuZ2UgUGFzc3dvcmQgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vcGVuQ2hhbmdlUGFzc3dvcmREaWFsb2cobG9naW5SZXF1ZXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IEFjY291bnQgY29uZmlybWF0aW9uIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGF0dGl2YXJlIGwnYWNjb3VudCBjaGUgbm9uIGhhIGFuY29yYSBlZmZldHR1YXRvIGxhIHByb2NlZHVyYT9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgOiAnTG9naW4gZXJyb3IuLi4nO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZTtcclxuICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIGxvZ2luKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KTogUHJvbWlzZTxMb2dpblJlc3BvbnNlPiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnYXV0aFNlcnZpY2UubG9naW4gLSBsb2dpblJlcXVlc3QnLCBsb2dpblJlcXVlc3QpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxMb2dpblJlc3BvbnNlPih0aGlzLmdldExvZ2luVXJsKCksIGxvZ2luUmVxdWVzdClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE5KSB7XHJcbiAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgY2FtYmlvIHBhc3N3b3JkIGUgbnVvdm8gdGVudGF0aXZvIGRpIGxvZ2luXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDaGFuZ2UgUGFzc3dvcmQgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vcGVuQ2hhbmdlUGFzc3dvcmREaWFsb2cobG9naW5SZXF1ZXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IEFjY291bnQgY29uZmlybWF0aW9uIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGF0dGl2YXJlIGwnYWNjb3VudCBjaGUgbm9uIGhhIGFuY29yYSBlZmZldHR1YXRvIGxhIHByb2NlZHVyYT9cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gTG9naW4gZmFpbHVyZSwgcmVzdWx0IGNvZGUgJywgbG9naW5SZXNwb25zZS5SZXN1bHRDb2RlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW5SZXF1ZXN0IGJ5IGFjY291bnQnICsgbG9naW5SZXF1ZXN0LmFjY291bnROYW1lICsgJyB0b2tlbjonICsgbG9naW5SZXF1ZXN0LnRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgOiAnTG9naW4gZXJyb3IuLi4nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZTtcclxuICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlRGF0YShsb2dpblJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGFzeW5jIG9wZW5DaGFuZ2VQYXNzd29yZERpYWxvZyhsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCkge1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBUaXRsZTogJ0NoYW5nZSBQYXNzd29yZCcsXHJcbiAgICAgICAgTWVzc2FnZTogJ1BsZWFzZSBjaG9vc2UgYSBuZXcgcGFzc3dvcmQ6ICcsXHJcbiAgICAgICAgUGxhY2VIb2xkZXI6ICdQYXNzd29yZCcsXHJcbiAgICAgICAgUGxhY2VIb2xkZXIyOiAnQ29uZmlybSBQYXNzd29yZCcsXHJcbiAgICAgICAgTmV3UHdkOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoYXN5bmMgKGRhdGE6IHsgTmV3UHdkOiBzdHJpbmcgfCB1bmRlZmluZWQgfSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgIGlmIChkYXRhLk5ld1B3ZCA9PT0gdW5kZWZpbmVkIHx8IGRhdGEuTmV3UHdkID09PSAnJykge1xyXG4gICAgICAgIGFsZXJ0KCdXcml0ZSBhIHZhbGlkIEFjY291bnROYW1lJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgIGNvbnN0IGNwaTogQ2hhbmdlUGFzc3dvcmRJbmZvID0gbmV3IENoYW5nZVBhc3N3b3JkSW5mbygpO1xyXG4gICAgICBjcGkuQWNjb3VudE5hbWUgPSBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWU7XHJcbiAgICAgIGNwaS5JZ25vcmVPbGRQYXNzd29yZCA9IGZhbHNlO1xyXG4gICAgICBjcGkuSldUVG9rZW4gPSBsb2dpblJlcXVlc3QudG9rZW47XHJcbiAgICAgIGNwaS5OZXdQYXNzd29yZCA9IGRhdGEuTmV3UHdkO1xyXG4gICAgICBjcGkuUGFzc3dvcmQgPSBsb2dpblJlcXVlc3QucGFzc3dvcmQ7XHJcblxyXG4gICAgICBsb2dpblJlcXVlc3QucGFzc3dvcmQgPSBkYXRhLk5ld1B3ZDtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jaGFuZ2VQYXNzd29yZChjcGkpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmlcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLm9rTWVzc2FnZSA9ICdQYXNzd29yZCBjaGFuZ2VkIHN1Y2Nlc2Z1bGx5ISc7XHJcbiAgICAgICAgLy9sYSBsb2dpbiBsYSBmYSAgYSBtYW5vIGFsdHJpbWVudGkgbWkgcGVyZG9cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL2Vycm9yZSBnacOgIGluZGljYXRvXHJcbiAgICAgICAgbG9naW5SZXF1ZXN0LnRva2VuID0gJyc7XHJcbiAgICAgICAgbG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgbG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgIGxvZ2luUmVxdWVzdC5hcHBJZCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGlzVmFsaWRUb2tlbihhdXRodG9rZW4gPSAnJyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICBpZiAoIWF1dGh0b2tlbikge1xyXG4gICAgICBjb25zdCBvcHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgb3ByZXMuTWVzc2FnZSA9ICdObyBhdXRodG9rZW4nO1xyXG4gICAgICByZXR1cm4gb3ByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0SXNWYWxpZFRva2VuVXJsKCksIG5ldyBJc1ZhbGlkVG9rZW5SZXF1ZXN0KGF1dGh0b2tlbikpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcCgoak9iajogT3BlcmF0aW9uUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXNWYWxpZFRva2VuIC0gcmVzcG9uc2UnLCBqT2JqKTtcclxuICAgICAgICAgIGlmICghak9iai5SZXN1bHQpIHtcclxuICAgICAgICAgICAgak9iai5NZXNzYWdlID0gak9iai5NZXNzYWdlID8gak9iai5NZXNzYWdlIDogJ2lzVmFsaWRUb2tlbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gVG9rZW4gVmFsaWRhdGlvbiBmYWlsdXJlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbjogJyArIGF1dGh0b2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gak9iai5NZXNzYWdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgcmVzLkNvZGUgPSA2NjY7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwuaW5jbHVkZXModGhpcy5nZXRMb2dpblBhZ2VVcmwoKSkpXHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb21wYW5pZXNGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpICsgdXNlcikucGlwZShcclxuICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHJlcy5Db250ZW50ICYmIHJlcy5Db250ZW50LnN1YnNjcmlwdGlvbnMgPyByZXMuQ29udGVudC5zdWJzY3JpcHRpb25zIDogW107XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldElzVmFsaWRUb2tlblVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdpc3ZhbGlkdG9rZW4vJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMb2dpblVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xyXG4gIH1cclxuICBnZXRQcmVMb2dpblVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExvZ291dFVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dvZmYvJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDaGFuZ2VQYXNzd29yZEFwaVVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldENoYW5nZVBhc3N3b3JkVXJsKCkgKyAnY2hhbmdlcGFzc3dvcmQvJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRSZXNldFBhc3N3b3JkVXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKSArICdyZXNldHBhc3N3b3JkLyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U3Vic0tleXNGb3JBY2NvdW50VXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3N1YnNjcmlwdGlvbnNrZXlzZm9yYWNjb3VudC8nO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgY2hhbmdlUGFzc3dvcmQoY3BpOiBDaGFuZ2VQYXNzd29yZEluZm8pOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgY29uc3QgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNwaSk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYWxpZ25cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldENoYW5nZVBhc3N3b3JkQXBpVXJsKCksIGJvZHlTdHJpbmcsIHsgaGVhZGVycyB9KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlcy5NZXNzYWdlICsgJyAoQ29kZTonICsgcmVzLkNvZGUgKyAnKSc7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgcmVzLkNvZGUgPSA2NjI7XHJcbiAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJlc2V0cGFzc3dvcmQoYWNjbmFtZTogc3RyaW5nKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0UmVzZXRQYXNzd29yZFVybCgpICsgYWNjbmFtZSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICghcmVzKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9Llxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgIHJlcy5NZXNzYWdlID0gYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICAgICAgICAgIHJlcy5Db2RlID0gNjYxO1xyXG5cclxuICAgICAgICAgIGlmICghdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsLmluY2x1ZGVzKHRoaXMuZ2V0TG9naW5QYWdlVXJsKCkpKVxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9nb2ZmKCkge1xyXG4gICAgY29uc3QgbG9nb2ZmUmVxdWVzdDogTG9nb2ZmUmVxdWVzdCA9IG5ldyBMb2dvZmZSZXF1ZXN0KHRoaXMuZ2V0VG9rZW4oKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxMb2dvZmZSZXNwb25zZT4odGhpcy5nZXRMb2dvdXRVcmwoKSwgbG9nb2ZmUmVxdWVzdClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChsb2dvZmZSZXNwb25zZTogTG9nb2ZmUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChsb2dvZmZSZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBMb2dvZmYnKTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZWRPdXQkLm5leHQoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gbG9nb2ZmUmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24oYWNjb3VudE5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZ2V0SW5zdGFuY2VzTWFwRm9yVXNlcihhY2NvdW50TmFtZSkuc3Vic2NyaWJlKFxyXG4gICAgICByZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hcDogQXJyYXk8eyBTdWJzY3JpcHRpb25LZXk6IHN0cmluZzsgRGVzY3JpcHRpb246IHN0cmluZzsgSW5zdGFuY2VLZXk6IHN0cmluZyB9PiA9IHJlcyBhcyBBcnJheTx7XHJcbiAgICAgICAgICBTdWJzY3JpcHRpb25LZXk6IHN0cmluZztcclxuICAgICAgICAgIERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICBJbnN0YW5jZUtleTogc3RyaW5nO1xyXG4gICAgICAgIH0+O1xyXG4gICAgICAgIGlmICghbWFwIHx8IG1hcC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRocm93ICdpbnN0YW5jZU1hcCBpcyBpbnZhbGlkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluc3RhbmNlS2V5OiBzdHJpbmcgPSBtYXAuZmlsdGVyKGsgPT4gay5TdWJzY3JpcHRpb25LZXkgPT09IHN1YnNjcmlwdGlvbktleSkubWFwKGogPT4gai5JbnN0YW5jZUtleSlbMF07XHJcbiAgICAgICAgdGhpcy5nZXRTbmFwc2hvdChjdXJyZW50SW5zdGFuY2VLZXksIHN1YnNjcmlwdGlvbktleSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXMgfHwgcmVzID09PSBbXSB8fCByZXMubGVuZ3RoID09PSAwKSB0aHJvdyAnc25hcHNob3QgaXMgZW1wdHknO1xyXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIG5vdyB0aGUgc25hcHNob3RcclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZXM6IEFycmF5PHsgU2VydmljZVR5cGU6IHN0cmluZzsgVXJsOiBzdHJpbmc7IFByb2R1Y3RWZXJzaW9uOiBzdHJpbmc7IFBvcnQ6IG51bWJlciB9PiA9IHJlc1tcclxuICAgICAgICAgICAgICAnU2VydmljZXMnXHJcbiAgICAgICAgICAgIF0gYXMgQXJyYXk8eyBTZXJ2aWNlVHlwZTogc3RyaW5nOyBVcmw6IHN0cmluZzsgUHJvZHVjdFZlcnNpb246IHN0cmluZzsgUG9ydDogbnVtYmVyIH0+O1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlZGlyZWN0VXJsOiBzdHJpbmcgPSBzZXJ2aWNlcy5maWx0ZXIoaSA9PiBpLlNlcnZpY2VUeXBlID09PSAnTTRGUk9OVEVORCcgfHwgaS5TZXJ2aWNlVHlwZSA9PT0gJ0FQUF9GUk9OVEVORCcpLm1hcChmID0+IGYuVXJsKVswXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYERlc2lnbmF0ZWQgcmVkaXJlY3QgaXMgJHtyZWRpcmVjdFVybH1gKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VSZWRpcmVjdFVybCA9IGAke3JlZGlyZWN0VXJsfT9qd3Q9JHt0aGlzLmdldFRva2VuKCl9JnN1YktleT0ke3N1YnNjcmlwdGlvbktleX1gO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYERlc2lnbmF0ZWQgZmluYWwgcmVkaXJlY3QgaXMgJHtiYXNlUmVkaXJlY3RVcmx9YCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0TG9nZ2VkUmVkaXJlY3QnLCBiYXNlUmVkaXJlY3RVcmwpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly8nICsgYmFzZVJlZGlyZWN0VXJsO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzbmFwc2hvdCBjYW5ub3QgYmUgb2J0YWluZWQnKTtcclxuICAgICAgICAgICAgdGhyb3cgJ3NuYXBzaG90IGNhbm5vdCBiZSBvYnRhaW5lZCc7XHJcbiAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uIGlhIGFib3V0IHRvIGZhaWwuLi4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHRocm93ICdnZXRJbnN0YW5jZXNNYXBGb3JVc2VyIGZhaWxlZCc7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldEluc3RhbmNlc01hcEZvckFjY291bnRVcmwoKSArIHVzZXIpLnBpcGUoXHJcbiAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgIHJldHVybiByZXMuQ29udGVudDtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U25hcHNob3QoaW5zdGFuY2VLZXk6IHN0cmluZywgc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRTbmFwc2hvdFNlcnZpY2VVcmwoKSArIGluc3RhbmNlS2V5ICsgJz9zdWJzY3JpcHRpb25LZXk9JyArIHN1YnNjcmlwdGlvbktleSkucGlwZShcclxuICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHJlcy5Db250ZW50O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JBY2NvdW50VXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2luc3RhbmNlc01hcC8nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyU3RvcmFnZSgpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCk7XHJcbiAgfVxyXG5cclxuICBzdG9yYWdlU3Vic2NyaXB0aW9uRGF0YShzdWJzY3JpcHRpb25LZXk6IHN0cmluZywgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdG9yYWdlRGF0YShsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCByZXNwQ3VsdHVyZTogc3RyaW5nID1cclxuICAgICAgbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxyXG4gICAgICAgIDogbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzO1xyXG4gICAgY29uc3QgcmVzcFVpQ3VsdHVyZTogc3RyaW5nID1cclxuICAgICAgbG9naW5SZXNwb25zZS5MYW5ndWFnZSA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2UubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXHJcbiAgICAgICAgOiBsb2dpblJlc3BvbnNlLkxhbmd1YWdlO1xyXG5cclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgcmVzcFVpQ3VsdHVyZSk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xyXG5cclxuICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCBsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKTtcclxuICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgbG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25EZXNjKVxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgcmVzcEN1bHR1cmUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCByZXNwVWlDdWx0dXJlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xyXG5cclxuICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgbG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSk7XHJcbiAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgbG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25EZXNjKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVDdWx0dXJlKGN1bHR1cmU6IHN0cmluZywgdWlDdWx0dXJlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIGN1bHR1cmUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCB1aUN1bHR1cmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW4oKSB7XHJcbiAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgfVxyXG5cclxuICBnZXRBY2NvdW50TmFtZSgpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUpO1xyXG4gICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcclxuICB9XHJcblxyXG4gIGdldFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xyXG4gICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OKTtcclxuICB9XHJcblxyXG4gIGdldFN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XHJcbiAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VsdHVyZSgpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VUlDdWx0dXJlKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdXRoU2VydmljZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cmw7XHJcbiAgZ2V0UmVkaXJlY3RVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgucmVkaXJlY3RVcmw7XHJcbiAgZ2V0Q3JlYXRlQWNjb3VudFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5jcmVhdGVBY2NvdW50VXJsO1xyXG4gIGdldENoYW5nZVBhc3N3b3JkVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmNoYW5nZVBhc3N3b3JkVXJsO1xyXG4gIGhhc1N1YnNjcmlwdGlvblNlbGVjdGlvbiA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc3Vic2NyaXB0aW9uU2VsZWN0aW9uO1xyXG4gIHNob3dTaWduVXAgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnNob3dTaWduVXA7XHJcbiAgZ2V0QXBwSWQgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguYXBwSWQ7XHJcbiAgaXNTZXNzaW9uU3RvcmFnZSA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2U7XHJcbiAgZ2V0TG9nb1VSTCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5sb2dvVVJMO1xyXG4gIGlzUmVkaXJlY3RFeHRlcm5hbCA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguaXNSZWRpcmVjdEV4dGVybmFsO1xyXG59XHJcbiJdfQ==