(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('moment'), require('@angular/router'), require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@progress/kendo-angular-inputs'), require('@progress/kendo-angular-buttons')) :
    typeof define === 'function' && define.amd ? define('@tb/auth', ['exports', '@angular/common/http', 'rxjs', 'rxjs/operators', 'moment', '@angular/router', '@angular/core', '@angular/common', '@angular/forms', '@progress/kendo-angular-inputs', '@progress/kendo-angular-buttons'], factory) :
    (factory((global.tb = global.tb || {}, global.tb.auth = {}),global.ng.common.http,global.rxjs,global.rxjs.operators,global.moment_,global.ng.router,global.ng.core,global.ng.common,global.ng.forms,global.kendoAngularInputs,global.kendoAngularButtons));
}(this, (function (exports,i1,rxjs,operators,moment_,i2,i0,common,forms,kendoAngularInputs,kendoAngularButtons) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Instance = /** @class */ (function () {
        function Instance() {
        }
        return Instance;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginRequest = /** @class */ (function () {
        function LoginRequest() {
            this.AccountName = '';
            this.Password = '';
            this.AppId = 'M4'; // identificativo dell'applicazione che sta effettuando la login (da tabellare)
            // identificativo dell'applicazione che sta effettuando la login (da tabellare)
            this.JwtToken = ''; // se presente, sto facendo una autologin
            // se presente, sto facendo una autologin
            this.SubscriptionKey = null; // login su una specifica Subscription
        }
        return LoginRequest;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginResponse = /** @class */ (function () {
        function LoginResponse() {
            this.Result = false;
        }
        return LoginResponse;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StorageVars = /** @class */ (function () {
        function StorageVars() {
        }
        StorageVars.JWT = 'M4_jwt_token';
        StorageVars.EXP = 'M4_jwt_token_expiration_date';
        StorageVars.CULTURE = 'M4_culture';
        StorageVars.UI_CULTURE = 'M4_ui_culture';
        StorageVars.ACCOUNT_NAME = 'M4_account_name';
        return StorageVars;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Subscription = /** @class */ (function () {
        function Subscription() {
        }
        return Subscription;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Token = /** @class */ (function () {
        function Token() {
            this.JwtToken = '';
        }
        return Token;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment = moment_;
    var TbAuthService = /** @class */ (function () {
        function TbAuthService(env, http, router) {
            this.env = env;
            this.http = http;
            this.router = router;
            this.redirectUrl = '/';
        }
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
                    .pipe(operators.map(( /**
             * @param {?} loginResponse
             * @return {?}
             */function (loginResponse) {
                    if (!loginResponse.Result) {
                        _this.clearStorage();
                        loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                        _this.errorMessage = loginResponse.Message;
                        return loginResponse;
                    }
                    _this.storageData(loginResponse);
                    return loginResponse;
                })))
                    .toPromise();
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
                if (authtoken === void 0) {
                    authtoken = null;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        if (!authtoken) {
                            return [2 /*return*/, rxjs.of(false)];
                        }
                        return [2 /*return*/, this.http
                                .get(this.getIsValidTokenUrl() + authtoken)
                                .pipe(operators.tap(( /**
                         * @param {?} jObj
                         * @return {?}
                         */function (jObj) {
                                console.log('isValidToken - response', jObj);
                                if (!jObj.Result) {
                                    jObj.Message = jObj.Message ? jObj.Message : 'isValidToken error...';
                                    // this.clearStorage();
                                    _this.errorMessage = jObj.Message;
                                }
                            })))
                                .toPromise()];
                    });
                });
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
        TbAuthService.prototype.getLogoutUrl = /**
         * @return {?}
         */
            function () {
                return this.getBaseUrl() + 'logout/';
            };
        /**
         * @return {?}
         */
        TbAuthService.prototype.getChangePasswordUrl = /**
         * @return {?}
         */
            function () {
                return this.getBaseUrl() + 'changepassword/';
            };
        /**
         * @return {?}
         */
        TbAuthService.prototype.getResetPasswordUrl = /**
         * @return {?}
         */
            function () {
                return this.getBaseUrl() + 'resetpassword/';
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
                if (culture === void 0) {
                    culture = '';
                }
                if (uiCulture === void 0) {
                    uiCulture = '';
                }
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
        TbAuthService.prototype.isExpired = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var expiration = localStorage.getItem(StorageVars.EXP);
                if (!expiration)
                    return false;
                /** @type {?} */
                var expiresAt = JSON.parse(expiration);
                return moment().isAfter(moment(expiresAt));
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
                this.saveCulture(respCulture, respUiCulture);
                localStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
                /** @type {?} */
                var exp = loginResponse.ExpirationDate ? moment(loginResponse.ExpirationDate) : moment().add(1, 'day');
                localStorage.setItem(StorageVars.EXP, JSON.stringify(exp.valueOf()));
            };
        TbAuthService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TbAuthService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['env',] }] },
                { type: i1.HttpClient },
                { type: i2.Router }
            ];
        };
        /** @nocollapse */ TbAuthService.ngInjectableDef = i0.defineInjectable({ factory: function TbAuthService_Factory() { return new TbAuthService(i0.inject("env"), i0.inject(i1.HttpClient), i0.inject(i2.Router)); }, token: TbAuthService, providedIn: "root" });
        return TbAuthService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TbAuthGuard = /** @class */ (function () {
        function TbAuthGuard(authService, router, env) {
            this.authService = authService;
            this.router = router;
            this.env = env;
        }
        /**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
        TbAuthGuard.prototype.canActivate = /**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
            function (next, state) {
                return __awaiter(this, void 0, void 0, function () {
                    var jwt, subKey, loginRequest, loginResponse, url, authtoken, res;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('ActivatedRouteSnapshot', next, state.url);
                                jwt = next.queryParams.hasOwnProperty('jwt') ? next.queryParams.jwt : null;
                                subKey = next.queryParams.hasOwnProperty('subKey') ? next.queryParams.subKey : null;
                                if (!(jwt && subKey))
                                    return [3 /*break*/, 2];
                                loginRequest = new LoginRequest();
                                loginRequest.JwtToken = jwt;
                                loginRequest.SubscriptionKey = subKey;
                                loginRequest.AppId = this.env.auth.appid;
                                return [4 /*yield*/, this.authService.login(loginRequest).catch(( /**
                                         * @param {?} err
                                         * @return {?}
                                         */function (err) {
                                        _this.authService.errorMessage = err.error && err.error.Message;
                                        _this.router.navigate(['login']);
                                        return;
                                    }))];
                            case 1:
                                loginResponse = _a.sent();
                                if (!loginResponse) {
                                    this.router.navigate(['login']);
                                    return [2 /*return*/, false];
                                }
                                if (loginResponse.Result) {
                                    url = this.authService.getRedirectUrl();
                                    this.authService.errorMessage = '';
                                    this.router.navigate([url]);
                                }
                                _a.label = 2;
                            case 2:
                                /**
                                 * Se il token salvato in localStorage risulta scaduto, svuoto localStorage e rimando alla login
                                 */
                                if (this.authService.isExpired()) {
                                    this.authService.errorMessage = 'Token expired';
                                    this.authService.clearStorage();
                                    this.router.navigate(['login']);
                                    return [2 /*return*/, true];
                                }
                                authtoken = localStorage.getItem(StorageVars.JWT);
                                if (!authtoken)
                                    return [3 /*break*/, 4];
                                // ho un token, ma ne verifico la validità
                                return [4 /*yield*/, this.authService.isValidToken(authtoken)];
                            case 3:
                                res = _a.sent();
                                if (res.Result) {
                                    return [2 /*return*/, true];
                                }
                                else {
                                    this.router.navigate(['login']);
                                    return [2 /*return*/, false];
                                }
                                return [3 /*break*/, 5];
                            case 4:
                                // non sono loggato quindi vado alla login
                                this.router.navigate(['login']);
                                return [2 /*return*/, true];
                            case 5: return [2 /*return*/];
                        }
                    });
                });
            };
        TbAuthGuard.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TbAuthGuard.ctorParameters = function () {
            return [
                { type: TbAuthService },
                { type: i2.Router },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['env',] }] }
            ];
        };
        /** @nocollapse */ TbAuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function TbAuthGuard_Factory() { return new TbAuthGuard(i0.inject(TbAuthService), i0.inject(i2.Router), i0.inject("env")); }, token: TbAuthGuard, providedIn: "root" });
        return TbAuthGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TbAuthInterceptor = /** @class */ (function () {
        function TbAuthInterceptor() {
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        TbAuthInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                /**
                 * Aggiungo a ogni httprequest l'header 'Authorization' con il nostro token
                 * @type {?}
                 */
                var token = JSON.stringify({
                    token: localStorage.getItem(StorageVars.JWT)
                });
                if (token) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: token
                        }
                    });
                }
                /*
                 * Elabora la response di ogni chiamata http
                 */
                return next
                    .handle(request)
                    .pipe();
            };
        TbAuthInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        TbAuthInterceptor.ctorParameters = function () { return []; };
        return TbAuthInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TbLoginComponent = /** @class */ (function () {
        function TbLoginComponent(authService, router, env) {
            this.authService = authService;
            this.router = router;
            this.env = env;
            this.capsLockOn = false;
            this.loading = false;
            this.loginRequest = new LoginRequest();
            this.loginRequest.AppId = env.auth.appid;
        }
        /**
         * @return {?}
         */
        TbLoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.loadAccountName();
            };
        // ---------------------------------------------------------------------------------------------
        // ---------------------------------------------------------------------------------------------
        /**
         * @param {?} event
         * @return {?}
         */
        TbLoginComponent.prototype.keyUpFunction =
            // ---------------------------------------------------------------------------------------------
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event.keyCode === 13) {
                    if (this.loginRequest.AccountName)
                        this.login();
                }
                /** @type {?} */
                var capsOn = event.getModifierState && event.getModifierState('CapsLock');
                this.capsLockOn = capsOn;
            };
        // -------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------
        /**
         * @return {?}
         */
        TbLoginComponent.prototype.disabledButton =
            // -------------------------------------------------------------------------------------
            /**
             * @return {?}
             */
            function () {
                return !this.loginRequest.AccountName || this.loading;
            };
        // -------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------
        /**
         * @return {?}
         */
        TbLoginComponent.prototype.accountNameBlur =
            // -------------------------------------------------------------------------------------
            /**
             * @return {?}
             */
            function () { };
        // ---------------------------------------------------------------------------------------------
        // ---------------------------------------------------------------------------------------------
        /**
         * @return {?}
         */
        TbLoginComponent.prototype.login =
            // ---------------------------------------------------------------------------------------------
            /**
             * @return {?}
             */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var result, url;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.authService.errorMessage = '';
                                this.saveAccountName();
                                this.loading = true;
                                return [4 /*yield*/, this.authService.login(this.loginRequest).catch(( /**
                                         * @param {?} err
                                         * @return {?}
                                         */function (err) {
                                        _this.loading = false;
                                        _this.authService.errorMessage = err.error && err.error.Message;
                                        return;
                                    }))];
                            case 1:
                                result = _a.sent();
                                this.loading = false;
                                if (!result)
                                    return [2 /*return*/];
                                // todo controlla come vengono mostrati errori sia login sia checkdb
                                if (result.Result) {
                                    url = this.authService.getRedirectUrl();
                                    this.authService.errorMessage = '';
                                    this.router.navigate([url]);
                                }
                                else {
                                    this.loading = false;
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            };
        // -------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------
        /**
         * @return {?}
         */
        TbLoginComponent.prototype.loadAccountName =
            // -------------------------------------------------------------------------------------
            /**
             * @return {?}
             */
            function () {
                this.loginRequest.AccountName = localStorage.getItem(StorageVars.ACCOUNT_NAME);
            };
        // -------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------
        /**
         * @return {?}
         */
        TbLoginComponent.prototype.saveAccountName =
            // -------------------------------------------------------------------------------------
            /**
             * @return {?}
             */
            function () {
                localStorage.setItem(StorageVars.ACCOUNT_NAME, this.loginRequest.AccountName);
            };
        TbLoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tb-login',
                        template: "<div class=\"login-container\">\n    <div class=\"container\">\n        <div class=\" login\">\n            <div class=\"login-header\">\n                <img class=\"d-lg-none\" src=\"assets/images/logoM4_w160.png\" />\n                <h3>Sign in</h3>\n            </div>\n\n            <div class=\"login-form\">\n                <div class=\"form-control\">\n                    <kendo-textbox-container floatingLabel=\"Account Name\">\n                        <input\n                            kendoTextBox\n                            autofocus\n                            [(ngModel)]=\"loginRequest.AccountName\"\n                            (blur)=\"accountNameBlur()\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"accountName\"\n                            autocomplete=\"off\"\n                        />\n                    </kendo-textbox-container>\n                </div>\n\n                <div class=\"form-control\">\n                    <kendo-textbox-container floatingLabel=\"Password\">\n                        <input\n                            kendoTextBox\n                            [(ngModel)]=\"loginRequest.Password\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"password\"\n                            type=\"password\"\n                            autocomplete=\"new-password\"\n                        />\n                    </kendo-textbox-container>\n                </div>\n                <div class=\"login-infos\">\n                    <div class=\"caps-lock\" *ngIf=\"capsLockOn\"><span class=\"k-icon k-i-warning\"></span> Caps lock on</div>\n                    <div class=\"login-error\" *ngIf=\"authService.errorMessage\">\n                        <span class=\"k-icon k-i-warning\"></span>{{ authService.errorMessage }}\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"login-footer\">\n                <div class=\"login-button-container\">\n                    <button kendoButton class=\"login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\n                        <span class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\n                        <span *ngIf=\"!loading\">Login</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"intro d-none d-lg-flex\">\n            <img src=\"assets/images/logoM4_w160.png\" />\n\n            <div class=\"welcome\">\n                <h2>Welcome to <strong>M4Cloud</strong></h2>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam.\n                </p>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam.\n                </p>\n            </div>\n\n            <p class=\"d-md-block\">&nbsp;</p>\n        </div>\n    </div>\n</div>\n<p class=\"copyright copyright-abs\">\u00A9 2017 - 2019 Zucchetti s.p.a.</p>\n",
                        styles: [":host(tb-login){font-family:\"Fira Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"!important;background:#013b5e;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%}:host(tb-login) .login-container{display:flex;min-height:100%;justify-content:center;align-items:center}@media screen and (min-height:376px){:host(tb-login) .login-container{min-height:100%;padding:30px 0}}:host(tb-login) .login-container .container{display:flex;flex-direction:row-reverse;flex-wrap:nowrap;min-height:50vh}@media screen and (min-width:576px){:host(tb-login) .login-container .container{min-height:70vh}}:host(tb-login) .login-container .container .intro{background:#00578c;padding:30px 50px;display:flex;flex-direction:column;flex-wrap:nowrap;flex:1;justify-content:space-between}:host(tb-login) .login-container .container .intro img{align-self:flex-start}:host(tb-login) .login-container .container .intro .welcome h2{font-size:30px;font-weight:300;color:#fff;margin:-50px 0 30px}:host(tb-login) .login-container .container .intro .welcome h2 strong{font-weight:400;font-size:40px}:host(tb-login) .login-container .container .intro .welcome p{color:#fff;font-size:14px;font-weight:300;line-height:1.4em}:host(tb-login) .login-container .container .login{flex:1;display:flex;padding:10px 20px;flex-direction:column;justify-content:center;background:#0277bd}@media screen and (min-width:992px){:host(tb-login) .login-container .container .login{flex:40% 0}}:host(tb-login) .login-container .container .login .login-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center}:host(tb-login) .login-container .container .login .login-header img{width:150px}:host(tb-login) .login-container .container .login .login-header h3{color:#fff;font-size:30px;margin:0;font-weight:300}:host(tb-login) .login-container .container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:40px 0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container{width:100%;margin:3px 0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container>.k-label{font-weight:300;color:#8ee2ff}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-input.k-textbox,:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-textarea,:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-textbox{border:none;border-bottom:1px solid #8ee2ff;border-radius:0;color:#fff;background:#0277bd;box-shadow:none;padding:10px 0;height:36px;caret-color:#fff}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container::after{background-color:#8ee2ff;height:1px}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown{border:none;background:0 0;border-bottom:1px solid #8ee2ff!important}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap>.k-input{background:#0277bd!important;height:36px;opacity:1;color:#fff;padding:0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff;-webkit-filter:none;filter:none;border-bottom:1px dashed #8ee2ff;background:#0277bd}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#0277bd;border-radius:0;border:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#8ee2ff}:host(tb-login) .login-container .container .login .login-infos{margin:20px 0}:host(tb-login) .login-container .container .login .login-infos .caps-lock{margin:0 0 10px;background:#00578c;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em;display:flex;align-items:center}:host(tb-login) .login-container .container .login .login-infos .caps-lock span{margin-right:5px}:host(tb-login) .login-container .container .login .login-infos .login-error{margin:0 0 10px;background:#ff6358;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}:host(tb-login) .login-container .container .login .login-infos .login-error span{margin-right:5px}:host(tb-login) .login-container .container .login .login-footer{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}:host(tb-login) .login-container .container .login .login-footer .login-button{padding:10px 70px;background:#3daf68;color:#fff}:host(tb-login) .login-container .container .login .login-footer .login-button.k-state-disabled{background-color:rgba(0,87,140,.5);border-color:#00598e;color:#54aee4;cursor:not-allowed}:host(tb-login) .login-container .container .login .login-footer .login-button .k-i-loading{font-size:20px}:host(tb-login) .login-container .container .login .login-footer .server-info{display:flex;flex-direction:row;align-items:center;margin-right:10px}:host(tb-login) .login-container .container .login .login-footer .server-info #server-info-label{font-size:11px;font-weight:300;color:#fff;margin:0 10px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon{color:#fff;font-size:20px;padding-top:3px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon .k-icon{margin-top:-8px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon m4-icon{cursor:pointer}:host(tb-login) .login-container .container .login .login-footer .server-info.server-down #server-info-label,:host(tb-login) .login-container .container .login .login-footer .server-info.server-down .icon{color:#ffc000}:host(tb-login) .login-container .container .login .login-footer .server-info.server-up #server-info-label,:host(tb-login) .login-container .container .login .login-footer .server-info.server-up .icon{color:#3daf68}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) .server-info-popup{padding:5px 7px;min-width:150px;background:#013b5e}:host(tb-login) .server-info-popup h3{font-size:20px;color:#fff;font-weight:300;margin:0 0 10px;text-align:center}:host(tb-login) .server-info-popup a.tb-btn{padding:7px 7px 5px;text-align:center;background:#0277bd;color:#fff;margin:10px 0;display:block;border-radius:4px;border:1px solid #00578c}:host(tb-login) .server-info-popup .dl-horizontal{margin:0;padding:0 20px 0 0;color:#fff}:host(tb-login) .server-info-popup .dl-horizontal dt{float:left;width:80px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:500}:host(tb-login) .server-info-popup .dl-horizontal dd{margin-left:90px;font-size:12px;font-weight:300}:host(tb-login) input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px #0277bd inset!important;-webkit-text-fill-color:#fff!important}:host(tb-login) :focus{outline:0}@media (min-width:576px){:host(tb-login) .container .login{padding:20px}:host(tb-login) .container .login .login-form ::ng-deep .k-textbox-container{margin:10px 0}}@media (min-width:992px){:host(tb-login) .container .login .login-header{justify-content:flex-end}}"]
                    }] }
        ];
        /** @nocollapse */
        TbLoginComponent.ctorParameters = function () {
            return [
                { type: TbAuthService },
                { type: i2.Router },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['env',] }] }
            ];
        };
        return TbLoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TbLogoutComponent = /** @class */ (function () {
        function TbLogoutComponent(authService, router) {
            this.authService = authService;
            this.router = router;
            // const authtoken = localStorage.getItem(StorageVars.JWT);
            // if (authtoken) authService.logoff();
            // router.navigate([authService.getLoginUrl()]);
        }
        TbLogoutComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tb-logout',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        TbLogoutComponent.ctorParameters = function () {
            return [
                { type: TbAuthService },
                { type: i2.Router }
            ];
        };
        return TbLogoutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TbAuthModule = /** @class */ (function () {
        function TbAuthModule() {
        }
        /**
         * @return {?}
         */
        TbAuthModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TbAuthModule,
                    providers: [TbAuthService]
                };
            };
        TbAuthModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [TbLoginComponent, TbLogoutComponent],
                        imports: [common.CommonModule, forms.FormsModule, kendoAngularInputs.InputsModule, kendoAngularButtons.ButtonsModule],
                        exports: [TbLoginComponent, TbLogoutComponent]
                    },] }
        ];
        return TbAuthModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Instance = Instance;
    exports.LoginRequest = LoginRequest;
    exports.LoginResponse = LoginResponse;
    exports.StorageVars = StorageVars;
    exports.Subscription = Subscription;
    exports.Token = Token;
    exports.TbAuthService = TbAuthService;
    exports.TbAuthGuard = TbAuthGuard;
    exports.TbAuthInterceptor = TbAuthInterceptor;
    exports.TbLoginComponent = TbLoginComponent;
    exports.TbLogoutComponent = TbLogoutComponent;
    exports.TbAuthModule = TbAuthModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=tb-auth.umd.js.map