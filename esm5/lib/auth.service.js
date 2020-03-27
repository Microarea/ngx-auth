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
        this.getCustomLogo = (/**
         * @return {?}
         */
        function () { return _this.env.auth.logo; });
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
                function (i) { return i.ServiceType === 'M4FRONTEND'; })).map((/**
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
            logo: 
            // tslint:disable-next-line: max-line-length
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAA2CAYAAABTAoWuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc0OEJEMDcwNDlBMTFFQTlDNzVDNDRGNkMzQ0EwRDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc0OEJEMDgwNDlBMTFFQTlDNzVDNDRGNkMzQ0EwRDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzQ4QkQwNTA0OUExMUVBOUM3NUM0NEY2QzNDQTBENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzQ4QkQwNjA0OUExMUVBOUM3NUM0NEY2QzNDQTBENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl3e4DwAABUASURBVHja7F0J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'
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
    TbAuthService.prototype.getCustomLogo;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBcUIsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEYsT0FBTyxFQUFFLE1BQU0sRUFBdUIsTUFBTSxpQkFBaUIsQ0FBQztBQUU5RCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBZ0Isa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7SUFFakQsbUJBQWtDOztBQUN0QyxNQUFNLEtBQU8sV0FBVzs7O0FBQUcsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFBO0FBRXBEO0lBZ0NJLHVCQUEyQixHQUFzQixFQUFVLElBQWdCLEVBQVUsUUFBa0IsRUFBVSxNQUFpQjtRQUFs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OztJQUFFLCtCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIG1hcCwgY2F0Y2hFcnJvciwgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcclxuXHJcbmltcG9ydCB7IExvZ2luUmVxdWVzdCwgQ2hhbmdlUGFzc3dvcmRJbmZvIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XHJcbmltcG9ydCB7IExvZ29mZlJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dvZmYtcmVxdWVzdCc7XHJcbmltcG9ydCB7IExvZ29mZlJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9nb2ZmLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgSXNWYWxpZFRva2VuUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2lzLXZhbGlkLXRva2VuLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBPcGVyYXRpb25SZXN1bHQgfSBmcm9tICcuL21vZGVscy9vcGVyYXRpb24tcmVzdWx0JztcclxuaW1wb3J0IHsgVGJBdXRoRW52aXJvbm1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRoLWVudmlyb25tZW50JztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxubGV0IGF1dGhTZXJ2aWNlSW5zdGFuY2U6IFRiQXV0aFNlcnZpY2U7XHJcbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9ICgpID0+IGF1dGhTZXJ2aWNlSW5zdGFuY2U7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRiQXV0aFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9FTlY6IFRiQXV0aEVudmlyb25tZW50ID0ge1xyXG4gICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDoxMDM0NC9hcGkvJyxcclxuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMCcsXHJcbiAgICAgICAgICAgIGNoYW5nZVBhc3N3b3JkVXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1NjM5Mi9hcGkvJyxcclxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1NpZ25VcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFwcElkOiAnTTQnLFxyXG4gICAgICAgICAgICByZWRpcmVjdFVybDogJy8nLFxyXG4gICAgICAgICAgICBpc1JlZGlyZWN0RXh0ZXJuYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2dpblBhZ2VVcmw6ICdsb2dpbicsXHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlOiBmYWxzZSxcclxuICAgICAgICAgICAgc25hcHNob3RTZXJ2aWNlVXJsOiAnJyxcclxuICAgICAgICAgICAgbG9nbzpcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFUZ0FBQUEyQ0FZQUFBQlRBb1d1QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5VnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFE0SURjNUxqRTJOREF6Tml3Z01qQXhPUzh3T0M4eE15MHdNVG93TmpvMU55QWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lESXhMakFnS0UxaFkybHVkRzl6YUNraUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlJUYzBPRUpFTURjd05EbEJNVEZGUVRsRE56VkRORFJHTmtNelEwRXdSRFVpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UlRjME9FSkVNRGd3TkRsQk1URkZRVGxETnpWRE5EUkdOa016UTBFd1JEVWlQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBGTnpRNFFrUXdOVEEwT1VFeE1VVkJPVU0zTlVNME5FWTJRek5EUVRCRU5TSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEZOelE0UWtRd05qQTBPVUV4TVVWQk9VTTNOVU0wTkVZMlF6TkRRVEJFTlNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BsM2U0RHdBQUJVQVNVUkJWSGphN0YwSmxCYkZFZTVkZGhIbE1xd29JZ2dLS2lMSTRZa2dScU9nSW9vM25pQWVNUW94S3NZb2g2SVJpUkVVanhnSkNwSm84SXFBa2FBUU5NR1k0QUVvS0lxdUFnb1JSVG5rV0JEWTFKZXBmUTYxM1hQMnpQL3Y3dFI3SCt6MFAxUGQwek5kVTExVlhWMVFYbDZ1TXFyeGRBRGhDRUluUWdkQ0UwSmp3bTZFQWdKZWtyV0UveEsrSkx4UFdFQjRpN0EwNjc2TThwVUtNZ0ZYWStrd3dybUVVd2lIeHVEek1tRUs0VVhDaXF4Yk04b0VYRWE1cEpNSTF4TE9zTXozZThMVGhFY0pyMmZkbkZFbTRESktrMzVDR0VJNFBvVzZYaUFNSkt6TXVqMmpUTUJsbENUQm5qYUdjSUhQZWFXRU53bnpDQjhTdmlXc1k4MXNGMElKWVcvbDJPczY4aFIzWHc5K213bkRDZmRtanlDalRNQmxsQVNkU3BoTXFLLzViU3RoUHVGdmhHbjhkMWpxVHJpVTBKWFF4bkRPRzRUQmhIOW5qeU9qVE1CbFpJdWU4dERhSGliY3BSeXZxQzJDRi9aNmp6cC9weHpiWDBZWlpRSXVvOGlFcWVSTTVZUjhTUG9yNFZiQ3dnVHI3MEs0aDlETlVIL3Y3QkZsbEFtNGpLSlFVOEpjUWpOUkRudlkxWVJKS2JZRld1STFtdklKaEFFUitOVW10Q1cwVkk0ZHNCR2hIdisyZ2ZBZDRUUENZc0lIUEFYUEtCTndtWUNySnRTWU5iTzlSRGtjQitjUmx1V2dUZWZ6VkxsUWxFOGtYQmJnK24wSTV4Qk81Q253WGdIclhjWDNQWXUxMmNYWjY1RUp1SXlxTm4xSzJFK1V3U042V0k3YjFaYUZURk5SRHMvdWpZWnJUbUl0NzJ4Q3NZVTJ6T1JwODZ6c05hbFpWSmgxUWJXZ3NScmg5b3B5N0dHNUprd1hPN0t3ZGRNTmhGKzRqbXNSK2hEK3dXM3ZhMG00VlFoTUNMblhDS2NyWi9sWlJwa0dsMUVWb0tHRU8wWFo0NFRMODdDdHI3Q3djZFBKeW9tN2UxVWpwTjJFZUx4M0NJdVVFN08zWERtMk53aXJ1cXdoTmljY1JlanNJeHhMV2RCOWtMMCttWURMS0grcGswWXorcnR5YkZiNVNCQTZXNFFHdFlPd1RUbE9CQjM5U1RuZVYyaDJYd2FzQndISnh5a25EaEEydkYwMTU0RGZqN05YcUdZSU9Bd0lSTHcvelYvS1hGTkZlNTVSOXIxaHlKQUIyODduUEdWSm0vWWtIS21jckIzN0Uxcnd3Ti9CR3NsU3drZUVPWVIzZlhqaEh0d2VVd2lBZlpoWEZOcURwN1h0V1Vqc3dZS25qUEFGYTAwTFdLaHVqbGdIRnZkUEQzQWV2TEFQY2wvRUlieEhWeEx1RU9YUUdFL0lSRUExSnhKd0E4dC9vRVVRZURuR0ZhNzJMQ2JVdDhpN0ZxSFV4ZitDRk8vclFzS0xoTTNsd2VsRHdtaENCdzIvWVpyejIwZG9WMTNDQU1JMHdzYUE3ZnFhOERUaG5JaDlNY2FETi9pMlRxRC9EMlRldU1lRmhBUHk0RjNQa0REd3oxTHhnbDJYNDBadEUrM3BiWkYzRjhGN1hRcjNjemJoemZMNE5KVndHUFBjVGZQN0hTSGJWWTh3Z3ZCVnpIYjloKzh4Ykw4c0YzeStJNXlYd3ZOb2xBMzhtZ040VVRjS3BRNEc2em81VWloN0tjZWI1cVpkTFBJZkxJNGJLQ2RXS3dtQ3NSdTUwcDVUVGd4WFhJSlIvRzNDSllUUjRqY0V1UTRQd2VzMHdpZDhUV01MOTRsN1JBakdNU0hiVU1wVFhkelh3V3lTU0pxK3plWnROY3NHdDREdFFkTCtNVEFIN1ZuT25qQTNJWFJncWdYZWlNZDZYMVArSmR1YmJOSWp5bGs1b0tOdExBeGVaeHNiN0dqckNVVXNiUFpsb1FGYjFVRUI2L3NwWVZ5QTgvRGhlcGFGaTQ0Z2JGNVNPMmNVMmNMWHRlUSs3T29qeUxCYW9sK0l2bXFVQ1oyTTBoWncwT3JxcGR3V0RJcUptbkpiQXU3UHlvbXQwdEZaeXNsaFpvTm1FSHBxeW1Ha3Y1OGRPVjhFNUlVY2JsY3BaeVdDaWJCZ3ZtbEFZenNjRjYwMXYwSHcvNTZGMzZvQXZPQWNPWmMvZ3MwMHYyY0cvSXp5eHNtd3dHQmJPUy9sK2ZJcVF6dk9zTUQ3Uno1MnBGY3QzY05vQS8vSENidkV0QjNPTWZDK01zRDFKWVNWbW10aGc3dzZScnR3VCtNTTdYb3Nzd0ZseURWTUdseUZ4dEU4SlRsN3BjY1V5NFlHQjd2aVVOY3h3aWdLMUEveFdKaUdJVmgwZTR3NnJ1YXBxWnZBN3dMV2pHelEzWVJmaWJKaW52WjZFVUl0RGhSbGlPeS9WQVdQTGZNaVpBaDVTcVAxLzVvd3pQSzdzcnR5d2xqYXNGWUtteTFpbmRZb1o3SDl1MnpxQ0Vvd0RjZzFyb1U4YmQ2WUE1M2pjUFZEK0ZCZEx0dkVOdE5QK2Y2aUJxOFdjcDhWdW5nVXNtbGlkVVNlQ0NQYVU3U3BnUG1WdWNycTg3TUxFOElFUHQvei9YOW5XNE1yNTlDR05DVHRhbzgyMk5EZzFnbWVQUW5UUlZuL0dQemJhZHI5TGVHUUJQcnFmbGNkbHdVNC94bE4yK1lrMEs0V2hHV2F1azYyd0x1RU5jMlhDZXNEZUhiZkpnd250QXJBdXcxNzdyZnovOEFPRHA5S1M5UG9RUmd2UXBoTUJPL3pKTUtaRWVyWmc3QkJjNit2eEdqNzBZSmZSVi8yRU9mZHpIVnRDd0h3MmNMUGZBbVAyU0dFWThLRWlYZ0p1UCttOEhBSCt6elF1QUx1U3NIdk15NC9SNVNYUnVSZm9CblltRzd2bjJDZklhYXJaWUR6T21yNjgzV09CMHlpWFJCRUg0bjZFUGZYTUFhL3V6VWZxREFFd2RIV280NURETmNOVHZpOXh6TTRQMllJRWNidWFTSHFiT3dSNmhQMVBvNDE4T3dsenJ1OTNDNTl4TEdnQi91RmlVZ1BuelJNMzVtZ092NGp3bThUVnZrbC80b0YzZ2h0V0NFTTV4ZEY0RDlPN2J3M0FWWmVkT1RwUkZLMFJBWGJqMVJPalpGT3FWdk1xYmdYZmNQbWpoWENjenN0QXEvKzNJZVlramVJMGFiTDJZa3l5UEM3cVMrMkpQajhrTS91WStXa2s0OFRRb1MreG5hTkMvaWQ4NTJ3aVdsakJXMkkwWVp0QWN2TExQY2hUQzVZbmZJQjk2TnhUcTdFNEpUMnJpRXVXNEJ0R2ltT01XamZzY2dmQXF1aGVKRHUrL3VOT1ArMmtQemhRYnhDbEYyaTdLWUNqMHJuYXp5bXA2UlFieG5iOXR5RXZSdkN4TWpCMWpnaHBtQ1Q5QUI3c2V2bCtMa2NyWnd3blAwczhvU2d3NTRhcDlkUVgrbjVMRGVhNkF5c2JzSTZ6ZHRaMHZkeEdmb2dLVyswM0tnOVZPVllzY2RZRzdLVncyeW9PSjZ0MGI2ZzRlM2krckpDd3dtNnIrZE40aGlDN1prOGVlZ2p4UEVvbGQ3R3pMUFowTCt2YU05SkFhNjlSOU92a3ZEVlJtWVNCQXAveFk0R3JNRTloQjBlSllicnJsTk9tRTZ1TnNEcEVLRHV4ZnorSVE1eEpSdmw5K1l4MGMxSE1FN2xqOWlNS2lTY0pyT0RxRWp6Rys1OVZ4WmNiWlQzTG02ZFdaUHR0Sk9Db2JIQmxiQ05SMUpEeXphSThZSi9HYUdZTU1XU0RlNFl6VDEwMTV3M1Zwd3pNeUQvUXNKYWNlMnY4OFE5M2tsakJ5dE91UTBYYXZwL2I1OXIrdm5ZWFY0Z0hPZkRBMnVYQjdIOVdOSlZHdnRqRzBOZGd5ejNSejBmQjhuN2hMNEIrSnhGK0xkUFA3WDJjRExvMWtMUHNyajgwZTNJYzUvM0s4TjVZZW82Z3ZBSG4zdGY1bjdHdW9TWCs3R05SMmxjL3Jhb1dGWE9WemFTWGNJdExkVWhseTdCNXZGUGc4YmdKbVF5Q1JJZWM3eVkvb0xHNXNsWFVlNXM5WVJLUDBzTXdrYldpckp6UGM1SHFNWkV3MjliK2RvemxaUG15SXNRVHZBZ1Q4K2ZkSlgzWlkxOWU0NmVDUUxKNnh0K0c4UGE1K1FBZlA2aW5Jd3Z0L3IwZlZXaE1PUDlMZVdFbEdHRno5OE01K3pyN3NkQ3c0c0draHYyRHVScGdBM3FyN0hiakhTcHBYRUpna2V1SmpDOUVKaTJQU2ZLZ2poV1RoWEh5TVAyZFo2OE5DZUw0ei9rcUIxL0VzYzlQYzc5bzhmejZhQjVSbjZFR0xhTENlTUo5L0hVTkZkMGhqTG42QnNVMGZ4enQ4YldXVUZ3WEJ4YVJRUmNsS3ppUzNqOGpUTDhqaHlBUFV6TUMxMzJwVFhpdDRjdDNGQnRqYWFEM1pjcXZDNDJNbkJlb3RIZXZBYUlGR2o5Zk9iN1NsWGVGdS9aUEhsaFlLOXA3enBlcHV3NmJzTFE4K0s0dGVHOC9UM3NjeDNaSGhXVjhNVy9JY2ZQNUFsRE9UYmVlU2dHM3oreW9OUFJKRlg5NlJhUFovdWtTY0R0RUF6YzFGdFZ6dllSbG9hcW5UT3N3cEE2d2ZLTi8xSWMzK1Z6L251YTZkVE5IdWNYYVl5OUMvUGtvY3NkNXQvT1lWc1dpZmVwbnVHZE15Myt4NVIxZFJVZmhHZG9UQm1nT1I1VDhqQ0VtY25ubXZJT1BPMnQ3Z1R0L0UxTk9aeVlKL3VwaDQrS0Z3em5ENDdSbUYwMVF0TzJkeGJUcytiQ0poUGthL2FBNXN0ZngyTUtMRU1ZVnVhUkJ1ZW16M0xZbHRWcVo4OXRYYVZQSDM2bTRmcmJxc0VBTkNWS3VNbGlIYmVGckx1NmtXazU0QVZCNXI4M2F6cXpLR0pEaG90cjhlV1piUGxtYjlNSXJpRFQzdnZGTVJ3aEF6Mm0yZTYrUTFEbytqeDUyRkx3cnNseGU3NXgvVjFISStCd2ZKVG1Pb1JUTEs4R2c2K3JwZ3loTFhNdDF2Rm5wUTlNN2xaREJOdzhRM203SUFMdWNhSEY2YlN3SUZSSE0zVzgzdktOd3J0eXRDZ2JFL0JhQ0FMcGZlcnZjYjdjT0dWSENnOFNVenpFRGw3THduZUFxcng3bEh5bTIzUDg4bTBYZlNiYmQ3QkJxNXRSRFFaZWlkSjc1RzFyMVdWS0gxOTNrS29aQlBtazI5aThRVkFQeGpYaWVLZ0tIeEUrUnJ6Y01Cdy9iL2xHNWNvSVRFM0RKRk9VRzVNY292VEpNTGNLZ1FiaFhUK0ZCNG1zRGNoWUFzTTBRaUVlMDB5ak4vbG9kR2xUUTZIcHlpVTdwcENjNnJDbDMrNUtiM1A4SW9HNmRCc1VOZUYzcGliUUlrMVovYUFDN2xtaFVtT0tGaWIwQUYrU240bXl2Z2xvYjJlSnNyRDJQYVFWa3Q1VzNWclp0VUp3UWpQWlA0V0hLR1BaMW1zMFJ6bDRXdVh3cGNOYTQ1YXU0dzJxOHJySGhvWnJ2Nm9HZzg2VWJuOVZBblhwUXBScThUT29DYVM3LzlwaFlsQUdhUVJVaTREWHlyQ1FaY3AvUzd5d0pKZGxQYWVpZWVDa0RlOGl6VXVDYVZlcEtPdVEwb1BjWWZqYkxhVGRkRmdPWHpwb3dFVStBdGswaFM2dUJvUE9aTFlvU3FBdUU4OXRDZDlqdm15c3JIdGZ5c01JT0VRUnl5ankrd08rNURMQTg3NEVwZ0lYaTdLb0t5OHdOWkp1NTE5b3pwc3ZqbnZreVlPRzQ4WnRuRzhkNGtOa203b0gwTXJXR3E1dFVnMEVuR2xQMzcwVHFLdUpvWDQ1MDdBdHBBcENsaWRGZTJuS3RvU05JcGJMbi9vb2MvQ21TWHRibyt3dmFicE9ISDhaVTBNYzRjTWZORXNjUTRqWHpaT0JOVWNjbjUyamRzZ2xZenBEK0ZMRHRlMnFnWUQ3UnVtWHlEVk5vSzdPbXJLVmFtY3ZlcmxCOE1RUlJpWk5PMDNuRnVSWWUwMzVockFDRG1zNU40WFE0akMxKzRrb3V6V0JHNVFhMXBTWS9LYXJuVk41dzA0a1YwZThMTlIvVEJHdXlwT0JKWjAzMSthZ0RZZHFoTlF6aGltMUxoMTE3Mm9nNE5ZWkJMaHR1eWdjU1lkcnl1VUtrREtENEtrVHMyNGRiVTZ4bjBzTUd0eTZLT3ZBWktCdkw4UFhBeVNYVVNDTnllOHQzOXdBbnFLNmFaUUZ2dElXTjB6enNrd1VaVC9QazRFMWpRZFhCY0VCY21IS2JaQWZQcXdmMUMwWjI2YlJoaXRNRzBkWEF5RTMwMkJTT2RkaUhUY3F2YmRXaHRwc01KZ0pTbUxVZllDSHFTUXRNcTJFZVNPS2dIdEVWVFprUDJLd00wakRmeEtEVEdZRHdiS3ZaUmI0amxNN0o2N0VnNVNiUk1zTllGb3E4MzZvYVJLKzBqTG1jSkxtUTVBVXdiRnh2Q2p6Mm1mM2NZOW5VTlhwQVVQNWVCVnRvYmtrSkYzVmJmcGRidWpYaFFhTk1tcVlVeCtEY0Z1V1V2L0NMR1JhenpzMmFnZExtOVNSeWxuNzVTWVpYb0ZvNDljczMxdzd6ZGZuRG92ODVUM2Nyckd4ak5FSSsxWjVNTENrZ0ViSXdJc3AxZjJrT0g3UG9NbFVrQ2tGRXV3cVZYMjVFWlNCZnhtbWRqYjI0cDF1S0gvTU1QVi9RMU5XckRIQkJDRk1DN3RyeXYrVFl2L0NWTFNicGh6WmZUNHRqTUZVN2hJL1VueFZMZ3J4Qlk5Sy9jWHhiQlZzcjRLZ0pHUGlzSkM5aXlpN1dmTWkvVU1sNDNBSTYrMlNvVDNkVkREUGR4eEN6S1NNb0wvWTV4cjBueW11OG1rMmcwU2wrY28vaDF6U1pIcjNrV0w4d1JoODcxSjY0enBvaUtIY0ZGd1B4U0NzcytGUlEva0xLZlJweFFlN3EyZWZhekw2OWdxWVhmTUVUVGJOeG9hdDZzTHMydk5Pd0l5K3hacnNwTjBUeUV5N1dOUXhRM1BPaVpxKytJQTNuTGJkbnUydU90WVE2dnFjdjBMVHRpRUpaZkVkcjZucnR5RTJrZDdra2FrMWJKdXhvOWg4MS9ValBMWU4xTkhQTFBmTk9JOTdtMFpvR29JWHNtdFA4TWw4N0hYOVc0YnJab2RvZ3lsRDd5WkQ5bWpUK2MwaTlPV3B2STJnaWU3eDJqYXdWNGlLM2hYWDNrS29yYW53aUFRRTNMV1d0djN6d3lXYSsybXVPVytrNXJ6UENZZGJiTXQxZ3Y4MlRvWHRkVTNiRkZKeTErRkJKV2x1U0Q3SCthU2pYc1JweC9mMEVXd1BHNjZIa05rOW9JRHJuOExIMGswYkNYY1E5dkc0dmhVTCtxODkrT0NqMXlEaVZuK2doVDViRWFKOW96eXV2ekdrUUd4UUhteHJ6djBJRi9PZXZsNzBUNytkN2VHUmVDbWdtdGhGek9sWHNYSHhTREVYUGpHRTZnbFBXMmRoeEp4cU1HUTJjeDBqNW1weVF1cndhbUhyZzUzdEdzMTVTR3lveTdJNmpLY2k2eUxXMzRFZEduSjVHenhpVFpWL3pCRnlrazB4VENkaFdsZ1FvMit3UEc2MHFweDZlajVQSDhLR0Mxek9Cbmd2QWsrRUxNRXoreTFQclpxeFRmWkluMnZobVowcnpBNkxOZWVWc3JtamRzajJWMHp6ZnE0cUI0T1hzQjI2blkrRGFDNmJnRmE2SEhZWUU0ZjcxSTFsZWtnY0dpUkJLRXdDVjNqOFhzcGo4VU0yamNERzNwWndyREt2bXNCeUtkUGFWN3kvdXVTY2I3R0pRaGRQdDRQN0g4ODJ5RFlDTUoyZHF0d3JTR0pxY01CelBoSjFyNUQ4Z21od1Y2U2t2WmswaSs4OHpwMW82QWZzZEQrYWNHaUlhVWcvM3FoWlI1dERhc2J0Q1Y4WmVMM0dHNTRVaDJqYkFNSThqdzJKNDI2YXM5VHlSc0hZalB1b0VGUFV1SFNLeC8xTlNxQytxWVJkUS9iekJJdjFZMnA2VUlRcHJTMGFxS3ZYeHBvNGVGUk5rZkx6VkRJTGk0ZDVPRGlDRUFLUUVZajZmVUREL1ZiK3lsUzQwcEZKQllrMVp4Z2NINlVhYnk3cXZJRUJyeUsyaGx2RVhyWXQvRlZzeUFiNkRteFlONFYxNERva2lmd2t4RDB2NUh1ZXF0RnlqbU9zWU1NdHZ0d2Y4eGU1ak8rM0tXc2VSN0ZHYm1yYlN5cit5Z2xvUGdlekptY2p0QWo4ZXFwMDk4encwbHd2WlczckZndjFiR1dId3IwUnJyMk1Jd0hpSnAzOWlCMG1TM0xnd0htSHRjTlplcmRjWlR2YWFSRyt1RThZcEdxZkNMem0rZkE0WGFOTkZZYXM0OHdJWDRqdnhmRWJQblVjNzJOemlVcGpMV2lrWXhKb0Y1d2ZOeVdnUGZmWHpES0NFcmFRKzZVUC8zWUphUlE5QTJyVlQ4YW80M2xDQ3d0OWpERzJNa0w5Wld5UHF4V2dqcnNzOXUxVzFsalA4YXUzU0ZYTzZ4WmwyY1lvamUxcGlZcTJaTXF2UFRMMDRTRVZQdGxrbEF3TFJScjc0MEdxY3RCekJiM0tXZ2krTHRlcitIbTVvSVhjYWNrRkR5MXlEbXZDblN6d1EwYlo0U0UxeXFBMGtYRWkyL3U2Y3IrYTFrQit3bmJoNlJ6bTQyZWYzTVRYRkNnN1NVc3JrbnF1RGFoVkk1d0tBZkc5V1d2dm9zeEJ0MnZZWGpxVHg5WmlTMzA4aFdjajBKWlA0VDQySlFUWXd1MmV6TTg5YUtyKzVXeWYzeHF5TDNldzdScTJWaVRDd0hybWZ3V3RGMDRHRE1RZkM0UDJleEU2Q1FaWmQ5YUtIc283dU5ORU00VlRvck13MXVKbDcrYzYzalBDMUFQTFpHenNRTjlNQmRzdHZpNVBBL3J5NEF4S20zaWdQcFZnYk5IWjNKKzlWTGpJK2swOE1PN1ZHTk9UcGliY2o1alM3OGFEYmgwUG9seE1rMndTN2dtclpob3JKeGdZZzN3OXYyY2ZxOHByd1pPZ0ltNURjemF0MU9JMnJPSCsvYnFxZE9iLzNhL0tDZGpEaldBYnNnY2k4anFRK2VDaFlDM2tpSWg4SUNRUmhkK0lCN1pNcmRTSVBVQXRlSUJGU1l0MHJFdnpDeHM4VzRzSDFEMHEvRjZkSUd5RDE0MC9KSzFZWXkzbWRzQnVzNUU5YUsrenB6Q3Rsd2t2TTVaWG5hQ2NIY01hc1BaY3dHM2J3RUxrUGZieXphNUtMM3BHTlpQK0o4QUFEQVBYd0dFcnZBVUFBQUFBU1VWT1JLNUNZSUk9J1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBwcml2YXRlIGVudjogVGJBdXRoRW52aXJvbm1lbnQ7XHJcblxyXG4gICAgbG9nZ2VkT3V0JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICBlcnJvck1lc3NhZ2UgPSAnJztcclxuICAgIG9rTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIGdldCByb3V0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdlbnYnKSBlbnY6IFRiQXV0aEVudmlyb25tZW50LCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lbnYgPSBfLmRlZmF1bHRzRGVlcChlbnYsIFRiQXV0aFNlcnZpY2UuREVGQVVMVF9FTlYsIGVudik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RiQXV0aEVudmlyb25tZW50JywgdGhpcy5lbnYpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQodGhpcy5nZXRCYXNlVXJsKCkpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGltZW91dCg1MDAwKSxcclxuICAgICAgICAgICAgICAgIG1hcChfXyA9PiB0cnVlKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAuY2F0Y2goX18gPT4gZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUml0b3JuYSBsYSBiYXNlIHVybCBkZWwgYmFja2VuZCxcclxuICAgICAqIGNhcmljYXRhIGRhIHVuIGZpbGUgZGkgY29uZmlndXJhemlvbmUgY2FyaWNhdG8gZGluYW1pY2FtZW50ZSAoYXNzZXRzL2Vudmlyb25tZW50Lmpzb24pXHJcbiAgICAgKi9cclxuICAgIGdldEJhc2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXJsO1xyXG4gICAgZ2V0U25hcHNob3RTZXJ2aWNlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnNuYXBzaG90U2VydmljZVVybDtcclxuICAgIGdldExvZ2luUGFnZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5sb2dpblBhZ2VVcmw7XHJcblxyXG4gICAgLypcclxuICAgIHtcclxuICAgICAgdHlwZTogSldULFxyXG4gICAgICBhcHBpZDogTTQsXHJcbiAgICAgIHNlY3VyaXR5VmFsdWU6IGp3dEVuY29kZWRcclxuICAgIH1cclxuICAqL1xyXG4gICAgZ2V0QXV0aG9yaXphdGlvbkhlYWRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIFR5cGU6ICdKV1QnLFxyXG4gICAgICAgICAgICBBcHBJZDogJ000JyxcclxuICAgICAgICAgICAgU2VjdXJpdHlWYWx1ZTogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9naW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPExvZ2luUmVzcG9uc2U+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0aFNlcnZpY2UubG9naW4gLSBsb2dpblJlcXVlc3QnLCBsb2dpblJlcXVlc3QpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0UHJlTG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGNhbWJpbyBwYXNzd29yZCBlIG51b3ZvIHRlbnRhdGl2byBkaSBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDaGFuZ2UgUGFzc3dvcmQgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2VQYXNzd29yZERpYWxvZyhsb2dpblJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBBY2NvdW50IGNvbmZpcm1hdGlvbiBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGF0dGl2YXJlIGwnYWNjb3VudCBjaGUgbm9uIGhhIGFuY29yYSBlZmZldHR1YXRvIGxhIHByb2NlZHVyYT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgOiAnTG9naW4gZXJyb3IuLi4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPExvZ2luUmVzcG9uc2U+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0aFNlcnZpY2UubG9naW4gLSBsb2dpblJlcXVlc3QnLCBsb2dpblJlcXVlc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8TG9naW5SZXNwb25zZT4odGhpcy5nZXRMb2dpblVybCgpLCBsb2dpblJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2dpblJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgY2FtYmlvIHBhc3N3b3JkIGUgbnVvdm8gdGVudGF0aXZvIGRpIGxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENoYW5nZSBQYXNzd29yZCBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IEFjY291bnQgY29uZmlybWF0aW9uIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgYXR0aXZhcmUgbCdhY2NvdW50IGNoZSBub24gaGEgYW5jb3JhIGVmZmV0dHVhdG8gbGEgcHJvY2VkdXJhP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gTG9naW4gZmFpbHVyZSwgcmVzdWx0IGNvZGUgJywgbG9naW5SZXNwb25zZS5SZXN1bHRDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpblJlcXVlc3QgYnkgYWNjb3VudCcgKyBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgKyAnIHRva2VuOicgKyBsb2dpblJlcXVlc3QudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZURhdGEobG9naW5SZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBvcGVuQ2hhbmdlUGFzc3dvcmREaWFsb2cobG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpIHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFRpdGxlOiAnQ2hhbmdlIFBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2U6ICdQbGVhc2UgY2hvb3NlIGEgbmV3IHBhc3N3b3JkOiAnLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VIb2xkZXI6ICdQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBQbGFjZUhvbGRlcjI6ICdDb25maXJtIFBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIE5ld1B3ZDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoYXN5bmMgKGRhdGE6IHsgTmV3UHdkOiBzdHJpbmcgfCB1bmRlZmluZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChkYXRhLk5ld1B3ZCA9PT0gdW5kZWZpbmVkIHx8IGRhdGEuTmV3UHdkID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1dyaXRlIGEgdmFsaWQgQWNjb3VudE5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBjcGk6IENoYW5nZVBhc3N3b3JkSW5mbyA9IG5ldyBDaGFuZ2VQYXNzd29yZEluZm8oKTtcclxuICAgICAgICAgICAgY3BpLkFjY291bnROYW1lID0gbG9naW5SZXF1ZXN0LmFjY291bnROYW1lO1xyXG4gICAgICAgICAgICBjcGkuSWdub3JlT2xkUGFzc3dvcmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY3BpLkpXVFRva2VuID0gbG9naW5SZXF1ZXN0LnRva2VuO1xyXG4gICAgICAgICAgICBjcGkuTmV3UGFzc3dvcmQgPSBkYXRhLk5ld1B3ZDtcclxuICAgICAgICAgICAgY3BpLlBhc3N3b3JkID0gbG9naW5SZXF1ZXN0LnBhc3N3b3JkO1xyXG5cclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gZGF0YS5OZXdQd2Q7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY2hhbmdlUGFzc3dvcmQoY3BpKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9rTWVzc2FnZSA9ICdQYXNzd29yZCBjaGFuZ2VkIHN1Y2Nlc2Z1bGx5ISc7XHJcbiAgICAgICAgICAgICAgICAvL2xhIGxvZ2luIGxhIGZhICBhIG1hbm8gYWx0cmltZW50aSBtaSBwZXJkb1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9lcnJvcmUgZ2nDoCBpbmRpY2F0b1xyXG4gICAgICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnRva2VuID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsb2dpblJlcXVlc3QucGFzc3dvcmQgPSAnJztcclxuICAgICAgICAgICAgICAgIGxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICAgICAgICAgIGxvZ2luUmVxdWVzdC5hcHBJZCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaXNWYWxpZFRva2VuKGF1dGh0b2tlbiA9ICcnKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIWF1dGh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCBvcHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgb3ByZXMuTWVzc2FnZSA9ICdObyBhdXRodG9rZW4nO1xyXG4gICAgICAgICAgICByZXR1cm4gb3ByZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRJc1ZhbGlkVG9rZW5VcmwoKSwgbmV3IElzVmFsaWRUb2tlblJlcXVlc3QoYXV0aHRva2VuKSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAoKGpPYmo6IE9wZXJhdGlvblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4gLSByZXNwb25zZScsIGpPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghak9iai5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgak9iai5NZXNzYWdlID0gak9iai5NZXNzYWdlID8gak9iai5NZXNzYWdlIDogJ2lzVmFsaWRUb2tlbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gVG9rZW4gVmFsaWRhdGlvbiBmYWlsdXJlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbjogJyArIGF1dGh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gak9iai5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2NjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwuaW5jbHVkZXModGhpcy5nZXRMb2dpblBhZ2VVcmwoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0U3Vic0tleXNGb3JBY2NvdW50VXJsKCkgKyB1c2VyKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5Db250ZW50ICYmIHJlcy5Db250ZW50LnN1YnNjcmlwdGlvbnMgPyByZXMuQ29udGVudC5zdWJzY3JpcHRpb25zIDogW107XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXNWYWxpZFRva2VuVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdpc3ZhbGlkdG9rZW4vJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9naW5VcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ2luLyc7XHJcbiAgICB9XHJcbiAgICBnZXRQcmVMb2dpblVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9nb3V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dvZmYvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2hhbmdlUGFzc3dvcmRBcGlVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKSArICdjaGFuZ2VwYXNzd29yZC8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXNldFBhc3N3b3JkVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENoYW5nZVBhc3N3b3JkVXJsKCkgKyAncmVzZXRwYXNzd29yZC8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdWJzS2V5c0ZvckFjY291bnRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3N1YnNjcmlwdGlvbnNrZXlzZm9yYWNjb3VudC8nO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoYW5nZVBhc3N3b3JkKGNwaTogQ2hhbmdlUGFzc3dvcmRJbmZvKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBjb25zdCBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY3BpKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGFsaWduXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRBcGlVcmwoKSwgYm9keVN0cmluZywgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzLk1lc3NhZ2UgKyAnIChDb2RlOicgKyByZXMuQ29kZSArICcpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlc2V0cGFzc3dvcmQoYWNjbmFtZTogc3RyaW5nKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGFsaWduXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0UmVzZXRQYXNzd29yZFVybCgpICsgYWNjbmFtZSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5NZXNzYWdlID0gYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwuaW5jbHVkZXModGhpcy5nZXRMb2dpblBhZ2VVcmwoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb2ZmKCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ29mZlJlcXVlc3Q6IExvZ29mZlJlcXVlc3QgPSBuZXcgTG9nb2ZmUmVxdWVzdCh0aGlzLmdldFRva2VuKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PExvZ29mZlJlc3BvbnNlPih0aGlzLmdldExvZ291dFVybCgpLCBsb2dvZmZSZXF1ZXN0KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgobG9nb2ZmUmVzcG9uc2U6IExvZ29mZlJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ29mZlJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENsZWFyaW5nIHN0b3JhZ2UgZHVlIHRvIExvZ29mZicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZE91dCQubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ29mZlJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uKGFjY291bnROYW1lOiBzdHJpbmcsIHN1YnNjcmlwdGlvbktleTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZXNNYXBGb3JVc2VyKGFjY291bnROYW1lKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXA6IEFycmF5PHsgU3Vic2NyaXB0aW9uS2V5OiBzdHJpbmc7IERlc2NyaXB0aW9uOiBzdHJpbmc7IEluc3RhbmNlS2V5OiBzdHJpbmcgfT4gPSByZXMgYXMgQXJyYXk8e1xyXG4gICAgICAgICAgICAgICAgICAgIFN1YnNjcmlwdGlvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgSW5zdGFuY2VLZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIH0+O1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtYXAgfHwgbWFwLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93ICdpbnN0YW5jZU1hcCBpcyBpbnZhbGlkJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbnN0YW5jZUtleTogc3RyaW5nID0gbWFwLmZpbHRlcihrID0+IGsuU3Vic2NyaXB0aW9uS2V5ID09PSBzdWJzY3JpcHRpb25LZXkpLm1hcChqID0+IGouSW5zdGFuY2VLZXkpWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTbmFwc2hvdChjdXJyZW50SW5zdGFuY2VLZXksIHN1YnNjcmlwdGlvbktleSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzIHx8IHJlcyA9PT0gW10gfHwgcmVzLmxlbmd0aCA9PT0gMCkgdGhyb3cgJ3NuYXBzaG90IGlzIGVtcHR5JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBub3cgdGhlIHNuYXBzaG90XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzOiBBcnJheTx7IFNlcnZpY2VUeXBlOiBzdHJpbmc7IFVybDogc3RyaW5nOyBQcm9kdWN0VmVyc2lvbjogc3RyaW5nOyBQb3J0OiBudW1iZXIgfT4gPSByZXNbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2VydmljZXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gYXMgQXJyYXk8eyBTZXJ2aWNlVHlwZTogc3RyaW5nOyBVcmw6IHN0cmluZzsgUHJvZHVjdFZlcnNpb246IHN0cmluZzsgUG9ydDogbnVtYmVyIH0+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZGlyZWN0VXJsOiBzdHJpbmcgPSBzZXJ2aWNlcy5maWx0ZXIoaSA9PiBpLlNlcnZpY2VUeXBlID09PSAnTTRGUk9OVEVORCcpLm1hcChmID0+IGYuVXJsKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERlc2lnbmF0ZWQgcmVkaXJlY3QgaXMgJHtyZWRpcmVjdFVybH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VSZWRpcmVjdFVybCA9IGAke3JlZGlyZWN0VXJsfT9qd3Q9JHt0aGlzLmdldFRva2VuKCl9JnN1YktleT0ke3N1YnNjcmlwdGlvbktleX1gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERlc2lnbmF0ZWQgZmluYWwgcmVkaXJlY3QgaXMgJHtiYXNlUmVkaXJlY3RVcmx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0TG9nZ2VkUmVkaXJlY3QnLCBiYXNlUmVkaXJlY3RVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly8nICsgYmFzZVJlZGlyZWN0VXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NuYXBzaG90IGNhbm5vdCBiZSBvYnRhaW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAnc25hcHNob3QgY2Fubm90IGJlIG9idGFpbmVkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRSZWRpcmVjdFVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbiBpYSBhYm91dCB0byBmYWlsLi4uJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ2dldEluc3RhbmNlc01hcEZvclVzZXIgZmFpbGVkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0SW5zdGFuY2VzTWFwRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0SW5zdGFuY2VzTWFwRm9yQWNjb3VudFVybCgpICsgdXNlcikucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuQ29udGVudDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTbmFwc2hvdChpbnN0YW5jZUtleTogc3RyaW5nLCBzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRTbmFwc2hvdFNlcnZpY2VVcmwoKSArIGluc3RhbmNlS2V5ICsgJz9zdWJzY3JpcHRpb25LZXk9JyArIHN1YnNjcmlwdGlvbktleSkucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuQ29udGVudDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JBY2NvdW50VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdpbnN0YW5jZXNNYXAvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9yYWdlU3Vic2NyaXB0aW9uRGF0YShzdWJzY3JpcHRpb25LZXk6IHN0cmluZywgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcmFnZURhdGEobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgIDogbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzO1xyXG4gICAgICAgIGNvbnN0IHJlc3BVaUN1bHR1cmU6IHN0cmluZyA9XHJcbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2UgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLkxhbmd1YWdlLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgcmVzcFVpQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCBsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgbG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25EZXNjKVxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgcmVzcEN1bHR1cmUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCByZXNwVWlDdWx0dXJlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgbG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgbG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25EZXNjKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUN1bHR1cmUoY3VsdHVyZTogc3RyaW5nLCB1aUN1bHR1cmU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2NvdW50TmFtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN1YnNjcmlwdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VsdHVyZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VUlDdWx0dXJlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdXRoU2VydmljZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cmw7XHJcbiAgICBnZXRSZWRpcmVjdFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5yZWRpcmVjdFVybDtcclxuICAgIGdldENyZWF0ZUFjY291bnRVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguY3JlYXRlQWNjb3VudFVybDtcclxuICAgIGdldENoYW5nZVBhc3N3b3JkVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmNoYW5nZVBhc3N3b3JkVXJsO1xyXG4gICAgaGFzU3Vic2NyaXB0aW9uU2VsZWN0aW9uID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zdWJzY3JpcHRpb25TZWxlY3Rpb247XHJcbiAgICBzaG93U2lnblVwID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zaG93U2lnblVwO1xyXG4gICAgZ2V0QXBwSWQgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguYXBwSWQ7XHJcbiAgICBpc1Nlc3Npb25TdG9yYWdlID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZTtcclxuICAgIGdldEN1c3RvbUxvZ28gPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgubG9nbztcclxuICAgIGlzUmVkaXJlY3RFeHRlcm5hbCA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguaXNSZWRpcmVjdEV4dGVybmFsO1xyXG59XHJcbiJdfQ==