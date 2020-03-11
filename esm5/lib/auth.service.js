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
import { MatDialog } from '@angular/material';
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
                    console.log('AuthService: Clearing storage due to Login failure');
                }
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
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
                                if (data.NewPwd === undefined || data.NewPwd === '') {
                                    alert('Write a valid AccountName');
                                    return [2 /*return*/];
                                }
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
                return [2 /*return*/, this.http.post(this.getChangePasswordApiUrl(), bodyString, { headers: headers })
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
                    }))).toPromise()];
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
                return [2 /*return*/, this.http.post(this.getResetPasswordUrl() + accname, { headers: headers })
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
                    }))).toPromise()];
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
                document.location.href = 'http://' + baseRedirectUrl;
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                throw 'snapshot cannot be obtained';
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
        }
        else {
            localStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
            localStorage.setItem(StorageVars.CULTURE, respCulture);
            localStorage.setItem(StorageVars.UI_CULTURE, respUiCulture);
            localStorage.setItem(StorageVars.ACCOUNT_ROLES, JSON.stringify(loginResponse.Roles));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBcUIsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEYsT0FBTyxFQUFFLE1BQU0sRUFBdUIsTUFBTSxpQkFBaUIsQ0FBQztBQUU5RCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBZ0Isa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7SUFFMUMsbUJBQWtDOztBQUN0QyxNQUFNLEtBQU8sV0FBVzs7O0FBQUcsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFBO0FBRXBEO0lBZ0NFLHVCQUEyQixHQUFzQixFQUFVLElBQWdCLEVBQVUsUUFBa0IsRUFBVSxNQUFpQjtRQUFs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SUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLDZCQUE2QjtZQUNsQyxnQkFBZ0IsRUFBRSx1QkFBdUI7WUFDekMsaUJBQWlCLEVBQUUsNkJBQTZCO1lBQ2hELHFCQUFxQixFQUFFLEtBQUs7WUFDNUIsVUFBVSxFQUFFLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsR0FBRztZQUNoQixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsSUFBSTtZQUNGLDRDQUE0QztZQUM1Qyx3dFFBQXd0UTtTQUMzdFE7S0FDRixDQUFDOztnQkFyQkgsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREE4QmMsTUFBTSxTQUFDLEtBQUs7Z0JBdkRsQixVQUFVO2dCQURVLFFBQVE7Z0JBbUI1QixTQUFTOzs7d0JBbkJsQjtDQWtmQyxBQTFkRCxJQTBkQztTQXZkWSxhQUFhOzs7Ozs7SUFDeEIsMEJBaUJFOzs7OztJQUNGLDRCQUErQjs7SUFFL0IsbUNBQTJCOztJQUMzQixxQ0FBa0I7O0lBQ2xCLGtDQUFlOzs7Ozs7SUEyQmYsbUNBQTZDOztJQUM3Qyw4Q0FBdUU7O0lBQ3ZFLHdDQUEyRDs7SUF5WjNELDBDQUFvRDs7SUFDcEQsdUNBQXlEOztJQUN6RCw0Q0FBbUU7O0lBQ25FLDZDQUFxRTs7SUFDckUsaURBQThFOztJQUM5RSxtQ0FBcUQ7O0lBQ3JELGlDQUE2Qzs7SUFDN0MseUNBQStEOztJQUMvRCxzQ0FBaUQ7O0lBQ2pELDJDQUFxRTs7Ozs7SUF6YmxCLDZCQUF3Qjs7Ozs7SUFBRSxpQ0FBMEI7Ozs7O0lBQUUsK0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgbWFwLCBjYXRjaEVycm9yLCB0aW1lb3V0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuL21vZGVscy9zdG9yYWdlLXZhcnMnO1xyXG5cclxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0LCBDaGFuZ2VQYXNzd29yZEluZm8gfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9naW5SZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgTG9nb2ZmUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ29mZi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9nb2ZmUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dvZmYtcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBJc1ZhbGlkVG9rZW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvaXMtdmFsaWQtdG9rZW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IE9wZXJhdGlvblJlc3VsdCB9IGZyb20gJy4vbW9kZWxzL29wZXJhdGlvbi1yZXN1bHQnO1xyXG5pbXBvcnQgeyBUYkF1dGhFbnZpcm9ubWVudCB9IGZyb20gJy4vbW9kZWxzL2F1dGgtZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmxldCBhdXRoU2VydmljZUluc3RhbmNlOiBUYkF1dGhTZXJ2aWNlO1xyXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSAoKSA9PiBhdXRoU2VydmljZUluc3RhbmNlO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9FTlY6IFRiQXV0aEVudmlyb25tZW50ID0ge1xyXG4gICAgYXV0aDoge1xyXG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjEwMzQ0L2FwaS8nLFxyXG4gICAgICBjcmVhdGVBY2NvdW50VXJsOiAnaHR0cDovL2xvY2FsaG9zdDo0MjAwJyxcclxuICAgICAgY2hhbmdlUGFzc3dvcmRVcmw6ICdodHRwOi8vbG9jYWxob3N0OjU2MzkyL2FwaS8nLFxyXG4gICAgICBzdWJzY3JpcHRpb25TZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICBzaG93U2lnblVwOiBmYWxzZSxcclxuICAgICAgYXBwSWQ6ICdNNCcsXHJcbiAgICAgIHJlZGlyZWN0VXJsOiAnLycsXHJcbiAgICAgIGlzUmVkaXJlY3RFeHRlcm5hbDogZmFsc2UsXHJcbiAgICAgIGxvZ2luUGFnZVVybDogJ2xvZ2luJyxcclxuICAgICAgc2Vzc2lvblN0b3JhZ2U6IGZhbHNlLFxyXG4gICAgICBzbmFwc2hvdFNlcnZpY2VVcmw6ICcnLFxyXG4gICAgICBsb2dvOlxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBVGdBQUFBMkNBWUFBQUJUQW9XdUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeVZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRRNElEYzVMakUyTkRBek5pd2dNakF4T1M4d09DOHhNeTB3TVRvd05qbzFOeUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREl4TGpBZ0tFMWhZMmx1ZEc5emFDa2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZSVGMwT0VKRU1EY3dORGxCTVRGRlFUbEROelZETkRSR05rTXpRMEV3UkRVaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJUYzBPRUpFTURnd05EbEJNVEZGUVRsRE56VkRORFJHTmtNelEwRXdSRFVpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRk56UTRRa1F3TlRBME9VRXhNVVZCT1VNM05VTTBORVkyUXpORFFUQkVOU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBGTnpRNFFrUXdOakEwT1VFeE1VVkJPVU0zTlVNME5FWTJRek5EUVRCRU5TSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QbDNlNER3QUFCVUFTVVJCVkhqYTdGMEpsQmJGRWU1ZGRoSGxNcXdvSWdnS0tpTEk0WWtnUnFPZ0lvbzNuaUFlTVFveEtzWW9oNklSaVJFVWp4Z0pDcEpvOElxQWthQVFOTUdZNEFFb0tJcXVBZ29SUlRua1dCRFkxSmVwZlE2MTNYUDJ6UC92N3RSN0grejBQMVBkMHpOZFUxMVZYVjFRWGw2dU1xcnhkQURoQ0VJblFnZENFMEpqd202RUFnSmVrcldFL3hLK0pMeFBXRUI0aTdBMDY3Nk04cFVLTWdGWFkra3d3cm1FVXdpSHh1RHpNbUVLNFVYQ2lxeGJNOG9FWEVhNXBKTUkxeExPc016M2U4TFRoRWNKcjJmZG5GRW00REpLazM1Q0dFSTRQb1c2WGlBTUpLek11ajJqVE1CbGxDVEJuamFHY0lIUGVhV0VOd256Q0I4U3ZpV3NZODFzRjBJSllXL2wyT3M2OGhSM1h3OSttd25EQ2ZkbWp5Q2pUTUJsbEFTZFNwaE1xSy81YlN0aFB1RnZoR244ZDFqcVRyaVUwSlhReG5ET0c0VEJoSDluanlPalRNQmxaSXVlOHREYUhpYmNwUnl2cUMyQ0YvWjZqenAvcHh6YlgwWVpaUUl1bzhpRXFlUk01WVI4U1BvcjRWYkN3Z1RyNzBLNGg5RE5VSC92N0JGbGxBbTRqS0pRVThKY1FqTlJEbnZZMVlSSktiWUZXdUkxbXZJSmhBRVIrTlVtdENXMFZJNGRzQkdoSHYrMmdmQWQ0VFBDWXNJSFBBWFBLQk53bVlDckp0U1lOYk85UkRrY0IrY1JsdVdnVGVmelZMbFFsRThrWEJiZytuMEk1eEJPNUNud1hnSHJYY1gzUFl1MTJjWFo2NUVKdUl5cU5uMUsyRStVd1NONldJN2IxWmFGVEZOUkRzL3VqWVpyVG1JdDcyeENzWVUyek9ScDg2enNOYWxaVkpoMVFiV2dzUnJoOW9weTdHRzVKa3dYTzdLd2RkTU5oRis0am1zUitoRCt3VzN2YTBtNFZRaE1DTG5YQ0tjclovbFpScGtHbDFFVm9LR0VPMFhaNDRUTDg3Q3RyN0N3Y2RQSnlvbTdlMVVqcE4yRWVMeDNDSXVVRTdPM1hEbTJOd2lydXF3aE5pY2NSZWpzSXh4TFdkQjlrTDArbVlETEtIK3BrMFl6K3J0eWJGYjVTQkE2VzRRR3RZT3dUVGxPQkIzOVNUbmVWMmgyWHdhc0J3SEp4eWtuRGhBMnZGMDE1NERmajdOWHFHWUlPQXdJUkx3L3pWL0tYRk5GZTU1UjlyMWh5SkFCMjg3blBHVkptL1lrSEttY3JCMzdFMXJ3d04vQkdzbFN3a2VFT1lSM2ZYamhIdHdlVXdpQWZaaFhGTnFEcDdYdFdVanN3WUtualBBRmEwMExXS2h1amxnSEZ2ZFBEM0FldkxBUGNsL0VJYnhIVnhMdUVPWFFHRS9JUkVBMUp4SndBOHQvb0VVUWVEbkdGYTcyTENiVXQ4aTdGcUhVeGYrQ0ZPL3JRc0tMaE0zbHdlbER3bWhDQncyL1lacnoyMGRvVjEzQ0FNSTB3c2FBN2ZxYThEVGhuSWg5TWNhRE4vaTJUcUQvRDJUZXVNZUZoQVB5NEYzUGtERHd6MUx4Z2wyWDQwWnRFKzNwYlpGM0Y4RjdYUXIzY3piaHpmTDROSlZ3R1BQY1RmUDdIU0hiVlk4d2d2QlZ6SGI5aCs4eGJMOHNGM3krSTV5WHd2Tm9sQTM4bWdONFVUY0twUTRHNnpvNVVpaDdLY2ViNXFaZExQSWZMSTRiS0NkV0t3bUNzUnU1MHA1VFRneFhYSUpSL0czQ0pZVFI0amNFdVE0UHdlczB3aWQ4VFdNTDk0bDdSQWpHTVNIYlVNcFRYZHpYd1d5U1NKcSt6ZVp0TmNzR3Q0RHRRZEwrTVRBSDdWbk9uakEzSVhSZ3FnWGVpTWQ2WDFQK0pkdWJiTklqeWxrNW9LTnRMQXhlWnhzYjdHanJDVVVzYlBabG9RRmIxVUVCNi9zcFlWeUE4L0RoZXBhRmk0NGdiRjVTTzJjVTJjTFh0ZVErN09vanlMQmFvbCtJdm1xVUNaMk0waFp3ME9ycXBkd1dESXFKbW5KYkF1N1B5b210MHRGWnlzbGhab05tRUhwcXltR2t2NThkT1Y4RTVJVWNibGNwWnlXQ2liQmd2bWxBWXpzY0Y2MDF2MEh3LzU2RjM2b0F2T0FjT1pjL2dzMDB2MmNHL0l6eXhzbXd3R0JiT1MvbCtmSXFRenZPc01EN1J6NTJwRmN0M2NOb0EvL0hDYnZFdEIzT01mQytNc0QxSllTVm1tdGhnN3c2UnJ0d1QrTU03WG9zc3dGbHlEVk1HbHlGeHRFOEpUbDdwY2NVeTRZR0I3dmlVTmN4d2lnSzFBL3hXSmlHSVZoMGU0dzZydWFwcVp2QTd3TFdqR3pRM1lSZmliSmludlo2RVVJdERoUmxpT3kvVkFXUExmTWlaQWg1U3FQMS81b3d6UEs3c3J0eXdsamFzRllLbXkxaW5kWW9aN0g5dTJ6cUNFb3dEY2cxcm9VOGJkNllBNTNqY1BWRCtGQmRMdHZFTnROUCtmNmlCcThXY3A4VnVuZ1VzbWxpZFVTZUNDUGFVN1NwZ1BtVnVjcnE4N01MRThJRVB0L3ovWDluVzRNcjU5Q0dOQ1R0YW84MjJORGcxZ21lUFFuVFJWbi9HUHpiYWRyOUxlR1FCUHJxZmxjZGx3VTQveGxOMitZazBLNFdoR1dhdWs2MndMdUVOYzJYQ2VzRGVIYmZKZ3dudEFyQXV3MTc3cmZ6LzhBT0RwOUtTOVBvUVJndlFwaE1CTy96Sk1LWkVlclpnN0JCYzYrdnhHajcwWUpmUlYvMkVPZmR6SFZ0Q3dIdzJjTFBmQW1QMlNHRVk4S0VpWGdKdVArbThIQUgrenpRdUFMdVNzSHZNeTQvUjVTWFJ1UmZvQm5ZbUc3dm4yQ2ZJYWFyWllEek9tcjY4M1dPQjB5aVhSQkVING42RVBmWE1BYS91elVmcURBRXdkSFdvNDVERE5jTlR2aTl4ek00UDJZSUVjYnVhU0hxYk93UjZoUDFQbzQxOE93bHpydTkzQzU5eExHZ0IvdUZpVWdQbnpSTTM1bWdPdjRqd204VFZ2a2wvNG9GM2dodFdDRU01eGRGNEQ5TzdidzNBVlplZE9UcFJGSzBSQVhiajFST2paRk9xVnZNcWJnWGZjUG1qaFhDY3pzdEFxLyszSWVZa2plSTBhYkwyWWt5eVBDN3FTKzJKUGo4a00vdVkrV2trNDhUUW9TK3huYU5DL2lkODUyd2lXbGpCVzJJMFladEFjdkxMUGNoVEM1WW5mSUI5Nk54VHE3RTRKVDJyaUV1VzRCdEdpbU9NV2pmc2NnZkFxdWhlSkR1Ky91Tk9QKzJrUHpoUWJ4Q2xGMmk3S1lDajBybmF6eW1wNlJRYnhuYjl0eUV2UnZDeE1qQjFqZ2hwbUNUOUFCN3NldmwrTGtjclp3d25QMHM4b1NndzU0YXA5ZFFYK241TERlYTZBeXNic0k2emR0WjB2ZHhHZm9nS1crMDNLZzlWT1ZZc2NkWUc3S1Z3MnlvT0o2dDBiNmc0ZTNpK3JKQ3d3bTZyK2RONGhpQzdaazhlZWdqeFBFb2xkN0d6TFBaMEwrdmFNOUpBYTY5UjlPdmt2RFZSbVlTQkFwL3hZNEdyTUU5aEIwZUpZYnJybE5PbUU2dU5zRHBFS0R1eGZ6K0lRNXhKUnZsOStZeDBjMUhNRTdsajlpTUtpU2NKck9EcUVqekcrNTlWeFpjYlpUM0xtNmRXWlB0dEpPQ29iSEJsYkNOUjFKRHl6YUk4WUovR2FHWU1NV1NEZTRZelQxMDE1dzNWcHd6TXlEL1FzSmFjZTJ2ODhROTNrbGpCeXRPdVEwWGF2cC9iNTlyK3ZuWVhWNGdIT2ZEQTJ1WEI3SDlXTkpWR3Z0akcwTmRneXozUnowZkI4bjdoTDRCK0p4RitMZFBQN1gyY0RMbzFrTFBzcmo4MGUzSWM1LzNLOE41WWVvNmd2QUhuM3RmNW43R3VvU1grN0dOUjJsYy9yYW9XRlhPVnphU1hjSXRMZFVobHk3QjV2RlBnOGJnSm1ReUNSSWVjN3lZL29MRzVzbFhVZTVzOVlSS1Awc013a2JXaXJKelBjNUhxTVpFdzI5Yitkb3psWlBteUlzUVR2QWdUOCtmZEpYM1pZMTllNDZlQ1FMSjZ4dCtHOFBhNStRQWZQNmluSXd2dC9yMGZWV2hNT1A5TGVXRWxHR0Z6OThNNSt6cjdzZEN3NHNHa2h2MkR1UnBnQTNxcjdIYmpIU3BwWEVKZ2tldUpqQzlFSmkyUFNmS2dqaFdUaFhIeU1QMmRaNjhOQ2VMNHova3FCMS9Fc2M5UGM3OW84Zno2YUI1Um42RUdMYUxDZU1KOS9IVU5GZDBoakxuNkJzVTBmeHp0OGJXV1VGd1hCeGFSUVJjbEt6aVMzajhqVEw4amh5QVBVek1DMTMycFRYaXQ0Y3QzRkJ0amFhRDNaY3F2QzQyTW5CZW90SGV2QWFJRkdqOWZPYjdTbFhlRnUvWlBIbGhZSzlwN3pwZXB1dzZic0xROCtLNHRlRzgvVDNzY3gzWkhoV1Y4TVcvSWNmUDVBbERPVGJlZVNnRzN6K3lvTlBSSkZYOTZSYVBaL3VrU2NEdEVBemMxRnRWenZZUmxvYXFuVE9zd3BBNndmS04vMUljMytWei9udWE2ZFROSHVjWGFZeTlDL1Brb2NzZDV0L09ZVnNXaWZlcG51R2RNeTMreDVSMWRSVWZoR2RvVEJtZ09SNVQ4akNFbWNubm12SU9QTzJ0N2dUdC9FMU5PWnlZSi91cGg0K0tGd3puRDQ3Um1GMDFRdE8yZHhiVHMrYkNKaFBrYS9hQTVzdGZ4Mk1LTEVNWVZ1YVJCdWVtejNMWWx0VnFaODl0WGFWUEgzNm00ZnJicXNFQU5DVkt1TWxpSGJlRnJMdTZrV2s1NEFWQjVyODNhenF6S0dKRGhvdHI4ZVdaYlBsbWI5TUlyaURUM3Z2Rk1Sd2hBejJtMmU2K1ExRG8rang1MkZMd3JzbHhlNzV4L1YxSEkrQndmSlRtT29SVExLOEdnNitycGd5aExYTXQxdkZucFE5TTdsWkRCTnc4UTNtN0lBTHVjYUhGNmJTd0lGUkhNM1c4M3ZLTndydHl0Q2diRS9CYUNBTHBmZXJ2Y2I3Y09HVkhDZzhTVXp6RURsN0x3bmVBcXJ4N2xIeW0yM1A4OG0wWGZTYmJkN0JCcTV0UkRRWmVpZEo3NUcxcjFXVktIMTkza0tvWkJQbWsyOWk4UVZBUHhqWGllS2dLSHhFK1JyemNNQncvYi9sRzVjb0lURTNESkZPVUc1TWNvdlRKTUxjS2dRYmhYVCtGQjRtc0RjaFlBc00wUWlFZTAweWpOL2xvZEdsVFE2SHB5aVU3cHBDYzZyQ2wzKzVLYjNQOElvRzZkQnNVTmVGM3BpYlFJazFaL2FBQzdsbWhVbU9LRmliMEFGK1NuNG15dmdsb2IyZUpzckQyUGFRVmt0NVczVnJadFVKd1FqUFpQNFdIS0dQWjFtczBSemw0V3VYd3BjTmE0NWF1NHcycThyckhob1pydjZvR2c4NlVibjlWQW5YcFFwUnE4VE9vQ2FTNy85cGhZbEFHYVFSVWk0RFh5ckNRWmNwL1M3eXdKSmRsUGFlaWVlQ2tEZThpelV1Q2FWZXBLT3VRMG9QY1lmamJMYVRkZEZnT1h6cG93RVUrQXRrMGhTNnVCb1BPWkxZb1NxQXVFODl0Q2Q5anZteXNySHRmeXNNSU9FUVJ5eWp5K3dPKzVETEE4NzRFcGdJWGk3S29LeTh3TlpKdTUxOW96cHN2am52a3lZT0c0OFp0bkc4ZDRrTmttN29IME1yV0dxNXRVZzBFbkdsUDM3MFRxS3VKb1g0NTA3QXRwQXBDbGlkRmUybkt0b1NOSXBiTG4vb29jL0NtU1h0Ym8rd3ZhYnBPSEg4WlUwTWM0Y01mTkVzY1E0alh6Wk9CTlVjY241Mmpkc2dsWXpwRCtGTER0ZTJxZ1lEN1J1bVh5RFZOb0s3T21yS1ZhbWN2ZXJsQjhNUVJSaVpOTzAzbkZ1UlllMDM1aHJBQ0RtczVONFhRNGpDMSs0a291eldCRzVRYTFwU1kvS2FyblZONXcwNGtWMGU4TE5SL1RCR3V5cE9CSlowMzErYWdEWWRxaE5RemhpbTFMaDExNzJvZzROWVpCTGh0dXlnY1NZZHJ5dVVLa0RLRDRLa1RzMjRkYlU2eG4wc01HdHk2S092QVpLQnZMOFBYQXlTWFVTQ055ZTh0Mzl3QW5xSzZhWlFGdnRJV04wenpza3dVWlQvUGs0RTFqUWRYQmNFQmNtSEtiWkFmUHF3ZjFDMFoyNmJSaGl0TUcwZFhBeUUzMDJCU09kZGlIVGNxdmJkV2h0cHNNSmdKU21MVWZZQ0hxU1F0TXEyRWVTT0tnSHRFVlRaa1AyS3dNMGpEZnhLRFRHWUR3Ykt2WlJiNGpsTTdKNjdFZzVTYlJNc05ZRm9xODM2b2FSSyswakxtY0pMbVE1QVV3YkZ4dkNqejJtZjNjWTluVU5YcEFVUDVlQlZ0b2Jra0pGM1ZiZnBkYnVqWGhRYU5NbXFZVXgrRGNGdVdVdi9DTEdSYXp6czJhZ2RMbTlTUnlsbjc1U1laWG9GbzQ5Y3MzMXc3emRmbkRvdjg1VDNjcnJHeGpORUkrMVo1TUxDa2dFYkl3SXNwMWYya09IN1BvTWxVa0NrRkV1d3FWWDI1RVpTQmZ4bW1kamIyNHAxdUtIL01NUFYvUTFOV3JESEJCQ0ZNQzd0cnl2K1RZdi9DVkxTYnBoelpmVDR0ak1GVTdoSS9VbnhWTGdyeEJZOUsvY1h4YkJWc3I0S2dKR1Bpc0pDOWl5aTdXZk1pL1VNbDQzQUk2KzJTb1QzZFZERFBkeHhDektTTW9ML1k1eHIwbnltdThtazJnMFNsK2NvL2gxelNaSHIza1dMOHdSaDg3MUo2NHpwb2lLSGNGRndQeFNDc3MrRlJRL2tMS2ZScHhRZTdxMmVmYXpMNjlncVlYZk1FVFRiTnhvYXQ2c0xzMnZOT3dJeSt4WnJzcE4wVHlFeTdXTlF4UTNQT2lacSsrSUEzbkxiZG51MnVPdFlRNnZxY3YwTFR0aUVKWmZFZHI2bnJ0eUUya2Q3a2thazFiSnV4bzloODEvVWpQTFlOMU5IUExQZk5PSTk3bTBab0dvSVhzbXRQOE1sODdIWDlXNGJyWm9kb2d5bEQ3eVpEOW1qVCtjMGk5T1dwdkkyZ2llN3gyamF3VjRpSzNoWFgza0tvcmFud2lBUUUzTFdXdHYzend5V2ErMm11T1crazVyelBDWWRiYk10MWd2ODJUb1h0ZFUzYkZGSnkxK0ZCSldsdVNEN0grYVNqWHNScHgvZjBFV3dQRzY2SGtOazlvSURybjhMSDBrMGJDWGNROXZHNHZoVUwrcTg5K09DajF5RGlWbitnaFQ1YkVhSjlvenl1dnpHa1FHeFFIbXhyenYwSUYvT2V2bDcwVDcrZDdlR1JlQ21nbXRoRnpPbFhzWEh4U0RFWFBqR0U2Z2xQVzJkaHhKeHFNR1EyY3gwajVtcHlRdXJ3YW1Icmc1M3RHczE1U0d5b3k3STZqS2NpNnlMVzM0RWRHbko1R3p4aVRaVi96QkZ5a2sweFRDZGhXbGdRbzIrd1BHNjBxcHg2ZWo1UEg4S0dDMXpPQm5ndkFrK0VMTUV6K3kxUHJacXhUZlpJbjJ2aG1aMHJ6QTZMTmVlVnNybWpkc2oyVjB6emZxNHFCNE9Yc0IyNm5ZK0RhQzZiZ0ZhNkhIWVlFNGY3MUkxbGVrZ2NHaVJCS0V3Q1YzajhYc3BqOFVNMmpjREczcFp3ckRLdm1zQnlLZFBhVjd5L3V1U2NiN0dKUWhkUHQ0UDdIODgyeURZQ01KMmRxdHdyU0dKcWNNQnpQaEoxcjVEOGdtaHdWNlNrdlprMGkrODh6cDFvNkFmc2REK2FjR2lJYVVnLzNxaFpSNXREYXNidENWOFplTDNHRzU0VWgyamJBTUk4ancySjQyNmFzOVR5UnNIWWpQdW9FRlBVdUhTS3gvMU5TcUMrcVlSZFEvYnpCSXYxWTJwNlVJUXByUzBhcUt2WHhwbzRlRlJOa2ZMelZESUxpNGQ1T0RpQ0VBS1FFWWo2ZlVERC9WYit5bFM0MHBGSkJZazFaeGdjSDZVYWJ5N3F2SUVCcnlLMmhsdkVYcll0L0ZWc3lBYjZEbXhZTjRWMTREb2tpZndreEQwdjVIdWVxdEZ5am1Pc1lNTXR2dHdmOHhlNWpPKzNLV3NlUjdGR2JtcmJTeXIreWdsb1BnZXpKbWNqdEFqOGVxcDA5OHp3MGx3dlpXM3JGZ3YxYkdXSHdyMFJycjJNSXdIaUpwMzlpQjBtUzNMZ3dIbUh0Y05aZXJkY1pUdmFhUkcrdUU4WXBHcWZDTHptK2ZBNFhhTk5GWWFzNDh3SVg0anZ4ZkViUG5VYzcyTnppVXBqTFdpa1l4Sm9GNXdmTnlXZ1BmZlh6REtDRXJhUSs2VVAvM1lKYVJROUEyclZUOGFvNDNsQ0N3dDlqREcyTWtMOVpXeVBxeFdnanJzczl1MVcxbGpQOGF1M1NGWE82eFpsMmNZb2plMXBpWXEyWk1xdlBUTDA0U0VWUHRsa2xBd0xSUnI3NDBHcWN0QnpCYjNLV2dpK0x0ZXIrSG01b0lYY2Fja0ZEeTF5RG12Q25TendRMGJaNFNFMXlxQTBrWEVpMi91NmNyK2Exa0Ird25iaDZSem00MmVmM01UWEZDZzdTVXNya25xdURhaFZJNXdLQWZHOVdXdnZvc3hCdDJ2WVhqcVR4OVppUzMwOGhXY2owSlpQNFQ0MkpRVFl3dTJlek04OWFLcis1V3lmM3hxeUwzZXc3UnEyVmlUQ3dIcm1md1d0RjA0R0RNUWZDNFAyZXhFNkNRWlpkOWFLSHNvN3VOTkVNNFZUb3JNdzF1Smw3K2M2M2pQQzFBUExaR3pzUU45TUJkc3R2aTVQQS9yeTRBeEttM2lnUHBWZ2JOSFozSis5VkxqSStrMDhNTzdWR05PVHBpYmNqNWpTNzhhRGJoMFBvbHhNazJ3UzdnbXJaaG9ySnhnWWczdzl2MmNmcThwcndaT2dJbTVEY3phdDFPSTJyT0grL2JxcWRPYi8zYS9LQ2RqRGpXQWJzZ2NpOGpxUStlQ2hZQzNraUloOElDUVJoZCtJQjdaTXJkU0lQVUF0ZUlCRlNZdDByRXZ6Q3hzOFc0c0gxRDBxL0Y2ZElHeUQxNDAvSksxWVl5M21kc0J1czVFOWFLK3pwekN0bHdrdk01WlhuYUNjSGNNYXNQWmN3RzNid0VMa1BmYnl6YTVLTDNwR05aUCtKOEFBREFQWHdHRXJ2QVVBQUFBQVNVVk9SSzVDWUlJPSdcclxuICAgIH1cclxuICB9O1xyXG4gIHByaXZhdGUgZW52OiBUYkF1dGhFbnZpcm9ubWVudDtcclxuXHJcbiAgbG9nZ2VkT3V0JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgb2tNZXNzYWdlID0gJyc7XHJcblxyXG4gIGdldCByb3V0ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8Um91dGVyPihSb3V0ZXIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdCgnZW52JykgZW52OiBUYkF1dGhFbnZpcm9ubWVudCwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykge1xyXG4gICAgYXV0aFNlcnZpY2VJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB0aGlzLmVudiA9IF8uZGVmYXVsdHNEZWVwKGVudiwgVGJBdXRoU2VydmljZS5ERUZBVUxUX0VOViwgZW52KTtcclxuICAgIGNvbnNvbGUubG9nKCdUYkF1dGhFbnZpcm9ubWVudCcsIHRoaXMuZW52KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgLmdldCh0aGlzLmdldEJhc2VVcmwoKSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGltZW91dCg1MDAwKSxcclxuICAgICAgICBtYXAoX18gPT4gdHJ1ZSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKClcclxuICAgICAgLmNhdGNoKF9fID0+IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJpdG9ybmEgbGEgYmFzZSB1cmwgZGVsIGJhY2tlbmQsXHJcbiAgICogY2FyaWNhdGEgZGEgdW4gZmlsZSBkaSBjb25maWd1cmF6aW9uZSBjYXJpY2F0byBkaW5hbWljYW1lbnRlIChhc3NldHMvZW52aXJvbm1lbnQuanNvbilcclxuICAgKi9cclxuICBnZXRCYXNlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVybDtcclxuICBnZXRTbmFwc2hvdFNlcnZpY2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguc25hcHNob3RTZXJ2aWNlVXJsO1xyXG4gIGdldExvZ2luUGFnZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5sb2dpblBhZ2VVcmw7XHJcblxyXG4gIC8qXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IEpXVCxcclxuICAgICAgYXBwaWQ6IE00LFxyXG4gICAgICBzZWN1cml0eVZhbHVlOiBqd3RFbmNvZGVkXHJcbiAgICB9XHJcbiAgKi9cclxuICBnZXRBdXRob3JpemF0aW9uSGVhZGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBUeXBlOiAnSldUJyxcclxuICAgICAgQXBwSWQ6ICdNNCcsXHJcbiAgICAgIFNlY3VyaXR5VmFsdWU6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJlbG9naW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPExvZ2luUmVzcG9uc2U+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRoU2VydmljZS5sb2dpbiAtIGxvZ2luUmVxdWVzdCcsIGxvZ2luUmVxdWVzdCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxMb2dpblJlc3BvbnNlPih0aGlzLmdldFByZUxvZ2luVXJsKCksIGxvZ2luUmVxdWVzdClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE5KSB7XHJcbiAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgY2FtYmlvIHBhc3N3b3JkIGUgbnVvdm8gdGVudGF0aXZvIGRpIGxvZ2luXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDaGFuZ2UgUGFzc3dvcmQgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vcGVuQ2hhbmdlUGFzc3dvcmREaWFsb2cobG9naW5SZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBBY2NvdW50IGNvbmZpcm1hdGlvbiBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBhdHRpdmFyZSBsJ2FjY291bnQgY2hlIG5vbiBoYSBhbmNvcmEgZWZmZXR0dWF0byBsYSBwcm9jZWR1cmE/XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlID8gbG9naW5SZXNwb25zZS5NZXNzYWdlIDogJ0xvZ2luIGVycm9yLi4uJztcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRoU2VydmljZS5sb2dpbiAtIGxvZ2luUmVxdWVzdCcsIGxvZ2luUmVxdWVzdCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0TG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTkpIHtcclxuICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBjYW1iaW8gcGFzc3dvcmQgZSBudW92byB0ZW50YXRpdm8gZGkgbG9naW5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENoYW5nZSBQYXNzd29yZCBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2VQYXNzd29yZERpYWxvZyhsb2dpblJlcXVlc3QpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IEFjY291bnQgY29uZmlybWF0aW9uIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGF0dGl2YXJlIGwnYWNjb3VudCBjaGUgbm9uIGhhIGFuY29yYSBlZmZldHR1YXRvIGxhIHByb2NlZHVyYT9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gTG9naW4gZmFpbHVyZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYXN5bmMgb3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBUaXRsZTogJ0NoYW5nZSBQYXNzd29yZCcsXHJcbiAgICAgICAgTWVzc2FnZTogJ1BsZWFzZSBjaG9vc2UgYSBuZXcgcGFzc3dvcmQ6ICcsXHJcbiAgICAgICAgUGxhY2VIb2xkZXI6ICdQYXNzd29yZCcsXHJcbiAgICAgICAgUGxhY2VIb2xkZXIyOiAnQ29uZmlybSBQYXNzd29yZCcsXHJcbiAgICAgICAgTmV3UHdkOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoYXN5bmMgKGRhdGE6IHsgTmV3UHdkOiBzdHJpbmcgfCB1bmRlZmluZWQ7IH0pID0+IHtcclxuICAgICAgaWYgKGRhdGEuTmV3UHdkID09PSB1bmRlZmluZWQgfHwgZGF0YS5OZXdQd2QgPT09ICcnKSB7XHJcbiAgICAgICAgYWxlcnQoJ1dyaXRlIGEgdmFsaWQgQWNjb3VudE5hbWUnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNwaTogQ2hhbmdlUGFzc3dvcmRJbmZvID0gbmV3IENoYW5nZVBhc3N3b3JkSW5mbygpO1xyXG4gICAgICBjcGkuQWNjb3VudE5hbWUgPSBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWU7XHJcbiAgICAgIGNwaS5JZ25vcmVPbGRQYXNzd29yZCA9IGZhbHNlO1xyXG4gICAgICBjcGkuSldUVG9rZW4gPSBsb2dpblJlcXVlc3QudG9rZW47XHJcbiAgICAgIGNwaS5OZXdQYXNzd29yZCA9IGRhdGEuTmV3UHdkO1xyXG4gICAgICBjcGkuUGFzc3dvcmQgPSBsb2dpblJlcXVlc3QucGFzc3dvcmQ7XHJcblxyXG4gICAgICBsb2dpblJlcXVlc3QucGFzc3dvcmQgPSBkYXRhLk5ld1B3ZDtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jaGFuZ2VQYXNzd29yZChjcGkpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmlcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLm9rTWVzc2FnZSA9ICdQYXNzd29yZCBjaGFuZ2VkIHN1Y2Nlc2Z1bGx5ISc7XHJcbiAgICAgICAgLy9sYSBsb2dpbiBsYSBmYSAgYSBtYW5vIGFsdHJpbWVudGkgbWkgcGVyZG8gXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy9lcnJvcmUgZ2nDoCBpbmRpY2F0b1xyXG4gICAgICAgIGxvZ2luUmVxdWVzdC50b2tlbiA9ICcnO1xyXG4gICAgICAgIGxvZ2luUmVxdWVzdC5wYXNzd29yZCA9ICcnO1xyXG4gICAgICAgIGxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICBsb2dpblJlcXVlc3QuYXBwSWQgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBpc1ZhbGlkVG9rZW4oYXV0aHRva2VuID0gJycpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgaWYgKCFhdXRodG9rZW4pIHtcclxuICAgICAgY29uc3Qgb3ByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgIG9wcmVzLk1lc3NhZ2UgPSAnTm8gYXV0aHRva2VuJztcclxuICAgICAgcmV0dXJuIG9wcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldElzVmFsaWRUb2tlblVybCgpLCBuZXcgSXNWYWxpZFRva2VuUmVxdWVzdChhdXRodG9rZW4pKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoKGpPYmo6IE9wZXJhdGlvblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzVmFsaWRUb2tlbiAtIHJlc3BvbnNlJywgak9iaik7XHJcbiAgICAgICAgICBpZiAoIWpPYmouUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGpPYmouTWVzc2FnZSA9IGpPYmouTWVzc2FnZSA/IGpPYmouTWVzc2FnZSA6ICdpc1ZhbGlkVG9rZW4gZXJyb3IuLi4nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENsZWFyaW5nIHN0b3JhZ2UgZHVlIHRvIFRva2VuIFZhbGlkYXRpb24gZmFpbHVyZScpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGpPYmouTWVzc2FnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgIHJlcy5Db2RlID0gNjY2O1xyXG5cclxuICAgICAgICAgIGlmICghdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsLmluY2x1ZGVzKHRoaXMuZ2V0TG9naW5QYWdlVXJsKCkpKVxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRTdWJzS2V5c0ZvckFjY291bnRVcmwoKSArIHVzZXIpLnBpcGUoXHJcbiAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgIHJldHVybiByZXMuQ29udGVudCAmJiByZXMuQ29udGVudC5zdWJzY3JpcHRpb25zID8gcmVzLkNvbnRlbnQuc3Vic2NyaXB0aW9ucyA6IFtdO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJc1ZhbGlkVG9rZW5VcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnaXN2YWxpZHRva2VuLyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TG9naW5VcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcclxuICB9XHJcbiAgZ2V0UHJlTG9naW5VcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMb2dvdXRVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9nb2ZmLyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2hhbmdlUGFzc3dvcmRBcGlVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDaGFuZ2VQYXNzd29yZFVybCgpICsgJ2NoYW5nZXBhc3N3b3JkLyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UmVzZXRQYXNzd29yZFVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldENoYW5nZVBhc3N3b3JkVXJsKCkgKyAncmVzZXRwYXNzd29yZC8nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdzdWJzY3JpcHRpb25za2V5c2ZvcmFjY291bnQvJztcclxuICB9XHJcblxyXG5cclxuICBhc3luYyBjaGFuZ2VQYXNzd29yZChjcGk6IENoYW5nZVBhc3N3b3JkSW5mbyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcblxyXG4gICAgY29uc3QgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNwaSk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYWxpZ25cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRBcGlVcmwoKSwgYm9keVN0cmluZywgeyBoZWFkZXJzIH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzLk1lc3NhZ2UgKyAnIChDb2RlOicgKyByZXMuQ29kZSArICcpJztcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICByZXMuQ29kZSA9IDY2MjtcclxuICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICkudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZXNldHBhc3N3b3JkKGFjY25hbWU6IHN0cmluZyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYWxpZ25cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0UmVzZXRQYXNzd29yZFVybCgpICsgYWNjbmFtZSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICghcmVzKSB7IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTsgcmVzLkNvZGUgPSA2NjM7IH1cclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgcmVzLk1lc3NhZ2UgPSBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9Llxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICAgICAgcmVzLkNvZGUgPSA2NjE7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwuaW5jbHVkZXModGhpcy5nZXRMb2dpblBhZ2VVcmwoKSkpXHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICApLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvZ29mZigpIHtcclxuICAgIGNvbnN0IGxvZ29mZlJlcXVlc3Q6IExvZ29mZlJlcXVlc3QgPSBuZXcgTG9nb2ZmUmVxdWVzdCh0aGlzLmdldFRva2VuKCkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBvc3Q8TG9nb2ZmUmVzcG9uc2U+KHRoaXMuZ2V0TG9nb3V0VXJsKCksIGxvZ29mZlJlcXVlc3QpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgobG9nb2ZmUmVzcG9uc2U6IExvZ29mZlJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAobG9nb2ZmUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gTG9nb2ZmJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VkT3V0JC5uZXh0KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGxvZ29mZlJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uKGFjY291bnROYW1lOiBzdHJpbmcsIHN1YnNjcmlwdGlvbktleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmdldEluc3RhbmNlc01hcEZvclVzZXIoYWNjb3VudE5hbWUpLnN1YnNjcmliZShcclxuICAgICAgcmVzID0+IHtcclxuICAgICAgICBjb25zdCBtYXA6IEFycmF5PHsgU3Vic2NyaXB0aW9uS2V5OiBzdHJpbmc7IERlc2NyaXB0aW9uOiBzdHJpbmc7IEluc3RhbmNlS2V5OiBzdHJpbmcgfT4gPSByZXMgYXMgQXJyYXk8e1xyXG4gICAgICAgICAgU3Vic2NyaXB0aW9uS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgSW5zdGFuY2VLZXk6IHN0cmluZztcclxuICAgICAgICB9PjtcclxuICAgICAgICBpZiAoIW1hcCB8fCBtYXAubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aHJvdyAnaW5zdGFuY2VNYXAgaXMgaW52YWxpZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbnN0YW5jZUtleTogc3RyaW5nID0gbWFwLmZpbHRlcihrID0+IGsuU3Vic2NyaXB0aW9uS2V5ID09PSBzdWJzY3JpcHRpb25LZXkpLm1hcChqID0+IGouSW5zdGFuY2VLZXkpWzBdO1xyXG4gICAgICAgIHRoaXMuZ2V0U25hcHNob3QoY3VycmVudEluc3RhbmNlS2V5LCBzdWJzY3JpcHRpb25LZXkpLnN1YnNjcmliZShcclxuICAgICAgICAgIHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlcyB8fCByZXMgPT09IFtdIHx8IHJlcy5sZW5ndGggPT09IDApIHRocm93ICdzbmFwc2hvdCBpcyBlbXB0eSdcclxuICAgICAgICAgICAgLy8gd2UgaGF2ZSBub3cgdGhlIHNuYXBzaG90XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzOiBBcnJheTx7IFNlcnZpY2VUeXBlOiBzdHJpbmc7IFVybDogc3RyaW5nOyBQcm9kdWN0VmVyc2lvbjogc3RyaW5nOyBQb3J0OiBudW1iZXIgfT4gPSByZXNbXHJcbiAgICAgICAgICAgICAgJ1NlcnZpY2VzJ1xyXG4gICAgICAgICAgICBdIGFzIEFycmF5PHsgU2VydmljZVR5cGU6IHN0cmluZzsgVXJsOiBzdHJpbmc7IFByb2R1Y3RWZXJzaW9uOiBzdHJpbmc7IFBvcnQ6IG51bWJlciB9PjtcclxuXHJcbiAgICAgICAgICAgIGxldCByZWRpcmVjdFVybDogc3RyaW5nID0gc2VydmljZXMuZmlsdGVyKGkgPT4gaS5TZXJ2aWNlVHlwZSA9PT0gJ000RlJPTlRFTkQnKS5tYXAoZiA9PiBmLlVybClbMF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXNpZ25hdGVkIHJlZGlyZWN0IGlzICR7cmVkaXJlY3RVcmx9YCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYXNlUmVkaXJlY3RVcmwgPSBgJHtyZWRpcmVjdFVybH0/and0PSR7dGhpcy5nZXRUb2tlbigpfSZzdWJLZXk9JHtzdWJzY3JpcHRpb25LZXl9YDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXNpZ25hdGVkIGZpbmFsIHJlZGlyZWN0IGlzICR7YmFzZVJlZGlyZWN0VXJsfWApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly8nICsgYmFzZVJlZGlyZWN0VXJsO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgIHRocm93ICdzbmFwc2hvdCBjYW5ub3QgYmUgb2J0YWluZWQnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uIGlhIGFib3V0IHRvIGZhaWwuLi4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHRocm93ICdnZXRJbnN0YW5jZXNNYXBGb3JVc2VyIGZhaWxlZCc7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldEluc3RhbmNlc01hcEZvckFjY291bnRVcmwoKSArIHVzZXIpLnBpcGUoXHJcbiAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgIHJldHVybiByZXMuQ29udGVudDtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U25hcHNob3QoaW5zdGFuY2VLZXk6IHN0cmluZywgc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRTbmFwc2hvdFNlcnZpY2VVcmwoKSArIGluc3RhbmNlS2V5ICsgJz9zdWJzY3JpcHRpb25LZXk9JyArIHN1YnNjcmlwdGlvbktleSkucGlwZShcclxuICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHJlcy5Db250ZW50O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JBY2NvdW50VXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2luc3RhbmNlc01hcC8nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyU3RvcmFnZSgpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMpO1xyXG4gIH1cclxuXHJcbiAgc3RvcmFnZVN1YnNjcmlwdGlvbkRhdGEoc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcsIHN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcmFnZURhdGEobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkge1xyXG4gICAgY29uc3QgcmVzcEN1bHR1cmU6IHN0cmluZyA9XHJcbiAgICAgIGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncyA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncy5sZW5ndGggPT09IDBcclxuICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcclxuICAgICAgICA6IGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncztcclxuICAgIGNvbnN0IHJlc3BVaUN1bHR1cmU6IHN0cmluZyA9XHJcbiAgICAgIGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2UgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLkxhbmd1YWdlLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxyXG4gICAgICAgIDogbG9naW5SZXNwb25zZS5MYW5ndWFnZTtcclxuXHJcbiAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCwgbG9naW5SZXNwb25zZS5Kd3RUb2tlbik7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgcmVzcEN1bHR1cmUpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHJlc3BVaUN1bHR1cmUpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMsIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UuUm9sZXMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCwgbG9naW5SZXNwb25zZS5Kd3RUb2tlbik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIHJlc3BDdWx0dXJlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgcmVzcFVpQ3VsdHVyZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMsIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UuUm9sZXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVDdWx0dXJlKGN1bHR1cmU6IHN0cmluZywgdWlDdWx0dXJlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIGN1bHR1cmUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCB1aUN1bHR1cmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW4oKSB7XHJcbiAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgfVxyXG5cclxuICBnZXRBY2NvdW50TmFtZSgpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUpO1xyXG4gICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcclxuICB9XHJcblxyXG4gIGdldFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xyXG4gICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OKTtcclxuICB9XHJcblxyXG4gIGdldFN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XHJcbiAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VsdHVyZSgpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VUlDdWx0dXJlKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdXRoU2VydmljZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cmw7XHJcbiAgZ2V0UmVkaXJlY3RVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgucmVkaXJlY3RVcmw7XHJcbiAgZ2V0Q3JlYXRlQWNjb3VudFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5jcmVhdGVBY2NvdW50VXJsO1xyXG4gIGdldENoYW5nZVBhc3N3b3JkVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmNoYW5nZVBhc3N3b3JkVXJsO1xyXG4gIGhhc1N1YnNjcmlwdGlvblNlbGVjdGlvbiA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc3Vic2NyaXB0aW9uU2VsZWN0aW9uO1xyXG4gIHNob3dTaWduVXAgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnNob3dTaWduVXA7XHJcbiAgZ2V0QXBwSWQgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguYXBwSWQ7XHJcbiAgaXNTZXNzaW9uU3RvcmFnZSA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2U7XHJcbiAgZ2V0Q3VzdG9tTG9nbyA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5sb2dvO1xyXG4gIGlzUmVkaXJlY3RFeHRlcm5hbCA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguaXNSZWRpcmVjdEV4dGVybmFsO1xyXG59XHJcbiJdfQ==