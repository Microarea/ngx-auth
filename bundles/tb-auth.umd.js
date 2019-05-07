(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/forms'), require('@progress/kendo-angular-inputs'), require('@progress/kendo-angular-buttons')) :
    typeof define === 'function' && define.amd ? define('@tb/auth', ['exports', '@angular/core', '@angular/common/http', '@angular/router', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/forms', '@progress/kendo-angular-inputs', '@progress/kendo-angular-buttons'], factory) :
    (global = global || self, factory((global.tb = global.tb || {}, global.tb.auth = {}), global.ng.core, global.ng.common.http, global.ng.router, global.rxjs, global.rxjs.operators, global.ng.common, global.ng.forms, global.kendoAngularInputs, global.kendoAngularButtons));
}(this, function (exports, core, http, router, rxjs, operators, common, forms, kendoAngularInputs, kendoAngularButtons) { 'use strict';

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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var SessionStorageVars = /** @class */ (function () {
        function SessionStorageVars() {
        }
        SessionStorageVars.JWT = 'M4_jwt_token';
        SessionStorageVars.CULTURE = 'M4_culture';
        SessionStorageVars.UI_CULTURE = 'M4_ui_culture';
        SessionStorageVars.ACCOUNT_NAME = 'M4_account_name';
        return SessionStorageVars;
    }());

    var TbAuthService = /** @class */ (function () {
        function TbAuthService(env, http, router) {
            this.env = env;
            this.http = http;
            this.router = router;
            this.redirectUrl = '/';
        }
        TbAuthService.prototype.isValidToken = function (autologinToken) {
            if (autologinToken === void 0) { autologinToken = null; }
            return __awaiter(this, void 0, void 0, function () {
                var authtoken;
                var _this = this;
                return __generator(this, function (_a) {
                    authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
                    console.log('isValidToken - authtoken', authtoken);
                    if (!authtoken && !autologinToken) {
                        return [2 /*return*/, rxjs.of(false)];
                    }
                    return [2 /*return*/, this.http
                            .post(this.getIsValidTokenUrl(), autologinToken ? autologinToken : {})
                            .pipe(operators.tap(function (jObj) {
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
            return this.http.post(this.getLoginUrl(), loginRequest).pipe(operators.map(function (loginResponse) {
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
        TbAuthService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TbAuthService_Factory() { return new TbAuthService(core.ɵɵinject("env"), core.ɵɵinject(http.HttpClient), core.ɵɵinject(router.Router)); }, token: TbAuthService, providedIn: "root" });
        TbAuthService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(0, core.Inject('env')),
            __metadata("design:paramtypes", [Object, http.HttpClient, router.Router])
        ], TbAuthService);
        return TbAuthService;
    }());

    var TbAuthGuard = /** @class */ (function () {
        function TbAuthGuard(authService, router) {
            this.authService = authService;
            this.router = router;
        }
        TbAuthGuard.prototype.canActivate = function (next, state) {
            return __awaiter(this, void 0, void 0, function () {
                var autologinToken, jwt, subKey, authtoken, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('ActivatedRouteSnapshot', next, state.url);
                            jwt = next.queryParams.hasOwnProperty('jwt') ? next.queryParams.jwt : null;
                            subKey = next.queryParams.hasOwnProperty('subKey') ? next.queryParams.subKey : null;
                            if (jwt && subKey) {
                                autologinToken = {
                                    JwtToken: jwt,
                                    SubscriptionKey: subKey
                                };
                            }
                            authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
                            if (!(authtoken || autologinToken)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.authService.isValidToken(autologinToken)];
                        case 1:
                            res = _a.sent();
                            console.log('isValidToken', res);
                            if (res.Success) {
                                return [2 /*return*/, true];
                            }
                            else {
                                this.router.navigate(['login']);
                                return [2 /*return*/, false];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            // non sono loggato quindi vado alla login
                            this.router.navigate(['login']);
                            return [2 /*return*/, true];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        TbAuthGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TbAuthGuard_Factory() { return new TbAuthGuard(core.ɵɵinject(TbAuthService), core.ɵɵinject(router.Router)); }, token: TbAuthGuard, providedIn: "root" });
        TbAuthGuard = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [TbAuthService, router.Router])
        ], TbAuthGuard);
        return TbAuthGuard;
    }());

    var TbAuthInterceptor = /** @class */ (function () {
        function TbAuthInterceptor() {
        }
        TbAuthInterceptor.prototype.intercept = function (request, next) {
            /**
             * Aggiungo a ogni httprequest l'header 'Authorization' con il nostro token
             */
            var token = JSON.stringify({
                token: sessionStorage.getItem(SessionStorageVars.JWT)
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
        TbAuthInterceptor = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [])
        ], TbAuthInterceptor);
        return TbAuthInterceptor;
    }());

    var LoginRequest = /** @class */ (function () {
        function LoginRequest() {
            this.accountName = '';
            this.password = '';
        }
        return LoginRequest;
    }());

    var TbLoginComponent = /** @class */ (function () {
        function TbLoginComponent(authService, router) {
            this.authService = authService;
            this.router = router;
            this.capsLockOn = false;
            this.loading = false;
            this.loginRequest = new LoginRequest();
        }
        TbLoginComponent.prototype.ngOnInit = function () {
            this.loadAccountName();
        };
        // ---------------------------------------------------------------------------------------------
        TbLoginComponent.prototype.keyUpFunction = function (event) {
            if (event.keyCode === 13) {
                if (this.loginRequest.accountName)
                    this.login();
            }
            var capsOn = event.getModifierState && event.getModifierState('CapsLock');
            this.capsLockOn = capsOn;
        };
        // -------------------------------------------------------------------------------------
        TbLoginComponent.prototype.disabledButton = function () {
            return !this.loginRequest.accountName || this.loading;
        };
        // -------------------------------------------------------------------------------------
        TbLoginComponent.prototype.accountNameBlur = function () { };
        // ---------------------------------------------------------------------------------------------
        TbLoginComponent.prototype.login = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, url;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.authService.errorMessage = '';
                            this.saveAccountName();
                            this.loading = true;
                            return [4 /*yield*/, this.authService
                                    .login(this.loginRequest)
                                    .toPromise()
                                    .catch(function (err) {
                                    _this.loading = false;
                                    console.error('Login Error', err);
                                    _this.authService.errorMessage = err.error && err.error.Message;
                                    return;
                                })];
                        case 1:
                            result = _a.sent();
                            if (!result)
                                return [2 /*return*/];
                            // todo controlla come vengono mostrati errori sia login sia checkdb
                            if (result.Result) {
                                url = this.authService.getRedirectUrl();
                                console.log('Redirect Url', url);
                                this.authService.errorMessage = '';
                                this.router.navigate([url]);
                            }
                            else {
                                console.error('authService.errorMessage:', this.authService.errorMessage);
                                this.loading = false;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        // -------------------------------------------------------------------------------------
        TbLoginComponent.prototype.loadAccountName = function () {
            this.loginRequest.accountName = localStorage.getItem(SessionStorageVars.ACCOUNT_NAME);
        };
        // -------------------------------------------------------------------------------------
        TbLoginComponent.prototype.saveAccountName = function () {
            localStorage.setItem(SessionStorageVars.ACCOUNT_NAME, this.loginRequest.accountName);
        };
        TbLoginComponent = __decorate([
            core.Component({
                selector: 'tb-login',
                template: "<div class=\"login-container\">\n    <div class=\"container\">\n        <div class=\" login\">\n            <div class=\"login-header\">\n                <img class=\"d-lg-none\" src=\"assets/images/logoM4_w160.png\" />\n                <h3>Sign in</h3>\n            </div>\n\n            <div class=\"login-form\">\n                <div class=\"form-control\">\n                    <kendo-textbox-container floatingLabel=\"Account Name\">\n                        <input\n                            kendoTextBox\n                            autofocus\n                            [(ngModel)]=\"loginRequest.accountName\"\n                            (blur)=\"accountNameBlur()\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"accountName\"\n                            autocomplete=\"off\"\n                        />\n                    </kendo-textbox-container>\n                </div>\n\n                <div class=\"form-control\">\n                    <kendo-textbox-container floatingLabel=\"Password\">\n                        <input\n                            kendoTextBox\n                            [(ngModel)]=\"loginRequest.password\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"password\"\n                            type=\"password\"\n                            autocomplete=\"new-password\"\n                        />\n                    </kendo-textbox-container>\n                </div>\n            </div>\n\n            <div class=\"caps-lock\" *ngIf=\"capsLockOn\"><span class=\"k-icon k-i-warning\"></span> Caps lock on</div>\n            <div class=\"login-error\" *ngIf=\"authService.errorMessage\">\n                <span class=\"k-icon k-i-warning\"></span>{{ authService.errorMessage }}\n            </div>\n\n            <div class=\"login-footer\">\n                <div class=\"login-button-container\">\n                    <button kendoButton class=\"login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\n                        <span class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\n                        <span *ngIf=\"!loading\">Login</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"intro d-none d-lg-flex\">\n            <img src=\"assets/images/logoM4_w160.png\" />\n\n            <div class=\"welcome\">\n                <h2>Welcome to <strong>M4Cloud</strong></h2>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam.\n                </p>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam.\n                </p>\n            </div>\n\n            <p class=\"d-md-block\">&nbsp;</p>\n        </div>\n    </div>\n</div>\n<p class=\"copyright copyright-abs\">\u00A9 2017 - 2019 Zucchetti s.p.a.</p>\n",
                styles: [":host(tb-login){font-family:\"Fira Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"!important;background:#013b5e;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%}:host(tb-login) .login-container{display:flex;min-height:100%;justify-content:center;align-items:center}@media screen and (min-height:376px){:host(tb-login) .login-container{min-height:90%;margin:30px 0}}:host(tb-login) .login-container .container{display:flex;flex-direction:row-reverse;flex-wrap:nowrap;min-height:50vh}@media screen and (min-width:576px){:host(tb-login) .login-container .container{min-height:70vh}}@media screen and (min-width:1025px){:host(tb-login) .login-container .container{min-height:80vh}}:host(tb-login) .login-container .container .intro{background:#00578c;padding:30px 50px;display:flex;flex-direction:column;flex-wrap:nowrap;flex:1;justify-content:space-between}:host(tb-login) .login-container .container .intro img{align-self:flex-start}:host(tb-login) .login-container .container .intro .welcome h2{font-size:30px;font-weight:300;color:#fff;margin:-50px 0 30px}:host(tb-login) .login-container .container .intro .welcome h2 strong{font-weight:400;font-size:40px}:host(tb-login) .login-container .container .intro .welcome p{color:#fff;font-size:14px;font-weight:300;line-height:1.4em}:host(tb-login) .login-container .container .login{flex:1;display:flex;padding:10px 20px;flex-direction:column;justify-content:space-between;background:#0277bd}@media screen and (min-width:992px){:host(tb-login) .login-container .container .login{flex:40% 0}}:host(tb-login) .login-container .container .login .login-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center}:host(tb-login) .login-container .container .login .login-header img{width:150px}:host(tb-login) .login-container .container .login .login-header h3{color:#fff;font-size:30px;margin:0;font-weight:300}:host(tb-login) .login-container .container .login .login-form{display:flex;flex-direction:column;flex:1;justify-content:center;margin:10px 0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container{width:100%;margin:3px 0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container>.k-label{font-weight:300;color:#8ee2ff}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-input.k-textbox,:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-textarea,:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-textbox{border:none;border-bottom:1px solid #8ee2ff;border-radius:0;color:#fff;background:#0277bd;box-shadow:none;padding:10px 0;height:36px;caret-color:#fff}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container::after{background-color:#8ee2ff;height:1px}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown{border:none;background:0 0;border-bottom:1px solid #8ee2ff!important}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap>.k-input{background:#0277bd!important;height:36px;opacity:1;color:#fff;padding:0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff;-webkit-filter:none;filter:none;border-bottom:1px dashed #8ee2ff;background:#0277bd}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#0277bd;border-radius:0;border:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#8ee2ff}:host(tb-login) .login-container .container .login .caps-lock{margin:0 0 10px;background:#00578c;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em;display:flex;align-items:center}:host(tb-login) .login-container .container .login .caps-lock span{margin-right:5px}:host(tb-login) .login-container .container .login .login-error{margin:0 0 10px;background:#ff6358;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}:host(tb-login) .login-container .container .login .login-error span{margin-right:5px}:host(tb-login) .login-container .container .login .login-footer{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}:host(tb-login) .login-container .container .login .login-footer .login-button{padding:10px 70px;background:#3daf68;color:#fff}:host(tb-login) .login-container .container .login .login-footer .login-button.k-state-disabled{background-color:rgba(0,87,140,.5);border-color:#00598e;color:#54aee4;cursor:not-allowed}:host(tb-login) .login-container .container .login .login-footer .login-button .k-i-loading{font-size:20px}:host(tb-login) .login-container .container .login .login-footer .server-info{display:flex;flex-direction:row;align-items:center;margin-right:10px}:host(tb-login) .login-container .container .login .login-footer .server-info #server-info-label{font-size:11px;font-weight:300;color:#fff;margin:0 10px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon{color:#fff;font-size:20px;padding-top:3px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon .k-icon{margin-top:-8px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon m4-icon{cursor:pointer}:host(tb-login) .login-container .container .login .login-footer .server-info.server-down #server-info-label,:host(tb-login) .login-container .container .login .login-footer .server-info.server-down .icon{color:#ffc000}:host(tb-login) .login-container .container .login .login-footer .server-info.server-up #server-info-label,:host(tb-login) .login-container .container .login .login-footer .server-info.server-up .icon{color:#3daf68}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) .server-info-popup{padding:5px 7px;min-width:150px;background:#013b5e}:host(tb-login) .server-info-popup h3{font-size:20px;color:#fff;font-weight:300;margin:0 0 10px;text-align:center}:host(tb-login) .server-info-popup a.tb-btn{padding:7px 7px 5px;text-align:center;background:#0277bd;color:#fff;margin:10px 0;display:block;border-radius:4px;border:1px solid #00578c}:host(tb-login) .server-info-popup .dl-horizontal{margin:0;padding:0 20px 0 0;color:#fff}:host(tb-login) .server-info-popup .dl-horizontal dt{float:left;width:80px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:500}:host(tb-login) .server-info-popup .dl-horizontal dd{margin-left:90px;font-size:12px;font-weight:300}:host(tb-login) input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px #0277bd inset!important;-webkit-text-fill-color:#fff!important}:host(tb-login) :focus{outline:0}@media (min-width:576px){:host(tb-login) .container .login{padding:20px}:host(tb-login) .container .login .login-form ::ng-deep .k-textbox-container{margin:10px 0}}@media (min-width:992px){:host(tb-login) .container .login .login-header{justify-content:flex-end}}"]
            }),
            __metadata("design:paramtypes", [TbAuthService, router.Router])
        ], TbLoginComponent);
        return TbLoginComponent;
    }());

    var TbLogoutComponent = /** @class */ (function () {
        function TbLogoutComponent(authService, router) {
            this.authService = authService;
            this.router = router;
            // const authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
            // if (authtoken) authService.logoff();
            // router.navigate([authService.getLoginUrl()]);
        }
        TbLogoutComponent = __decorate([
            core.Component({
                selector: 'tb-logout',
                template: ''
            }),
            __metadata("design:paramtypes", [TbAuthService, router.Router])
        ], TbLogoutComponent);
        return TbLogoutComponent;
    }());

    var TbAuthModule = /** @class */ (function () {
        function TbAuthModule() {
        }
        TbAuthModule_1 = TbAuthModule;
        TbAuthModule.forRoot = function () {
            return {
                ngModule: TbAuthModule_1,
                providers: [TbAuthService]
            };
        };
        var TbAuthModule_1;
        TbAuthModule = TbAuthModule_1 = __decorate([
            core.NgModule({
                declarations: [TbLoginComponent, TbLogoutComponent],
                imports: [common.CommonModule, forms.FormsModule, kendoAngularInputs.InputsModule, kendoAngularButtons.ButtonsModule],
                exports: [TbLoginComponent, TbLogoutComponent]
            })
        ], TbAuthModule);
        return TbAuthModule;
    }());

    exports.TbAuthGuard = TbAuthGuard;
    exports.TbAuthInterceptor = TbAuthInterceptor;
    exports.TbAuthModule = TbAuthModule;
    exports.TbAuthService = TbAuthService;
    exports.TbLoginComponent = TbLoginComponent;
    exports.TbLogoutComponent = TbLogoutComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=tb-auth.umd.js.map
