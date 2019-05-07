import { __awaiter, __decorate, __param, __metadata } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Inject, Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

class SessionStorageVars {
}
SessionStorageVars.JWT = 'M4_jwt_token';
SessionStorageVars.CULTURE = 'M4_culture';
SessionStorageVars.UI_CULTURE = 'M4_ui_culture';
SessionStorageVars.ACCOUNT_NAME = 'M4_account_name';

let TbAuthService = class TbAuthService {
    constructor(env, http, router) {
        this.env = env;
        this.http = http;
        this.router = router;
        this.redirectUrl = '/';
    }
    isValidToken(autologinToken = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
            console.log('isValidToken - authtoken', authtoken);
            if (!authtoken && !autologinToken) {
                return of(false);
            }
            return this.http
                .post(this.getIsValidTokenUrl(), autologinToken ? autologinToken : {})
                .pipe(tap((jObj) => {
                console.log('isValidToken - response', jObj);
                if (!jObj.Result) {
                    jObj.Message = jObj.Message ? jObj.Message : 'Login error...';
                    // sessionStorage.removeItem(SessionStorageVars.JWT);
                    // sessionStorage.removeItem(SessionStorageVars.CULTURE);
                    // sessionStorage.removeItem(SessionStorageVars.UI_CULTURE);
                    this.errorMessage = jObj.Message;
                }
            }))
                .toPromise();
        });
    }
    login(loginRequest) {
        return this.http.post(this.getLoginUrl(), loginRequest).pipe(map((loginResponse) => {
            const respCulture = loginResponse.Culture === undefined || loginResponse.Culture.length === 0
                ? window.navigator.language
                : loginResponse.Culture;
            const respUiCulture = loginResponse.UICulture === undefined || loginResponse.UICulture.length === 0
                ? window.navigator.language
                : loginResponse.UICulture;
            this.saveCulture(respCulture, respUiCulture);
            if (!loginResponse.Result) {
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                sessionStorage.removeItem(SessionStorageVars.JWT);
                this.errorMessage = loginResponse.Message;
                return loginResponse;
            }
            sessionStorage.setItem(SessionStorageVars.JWT, loginResponse.JwtToken);
            return loginResponse;
        }));
    }
    getIsValidTokenUrl() {
        return this.getBaseUrl() + 'token/';
    }
    getLoginUrl() {
        return this.getBaseUrl() + 'tokens/';
        return this.getBaseUrl() + 'login/';
    }
    getLogoutUrl() {
        return this.getBaseUrl() + 'logout/';
    }
    getRedirectUrl() {
        return this.redirectUrl;
    }
    setRedirectUrl(url) {
        this.redirectUrl = url;
    }
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     */
    getBaseUrl() {
        if (this.loginUrl)
            return this.loginUrl;
        this.loginUrl = this.env.auth.url;
        return this.loginUrl;
    }
    logoff() { }
    saveCulture(culture = '', uiCulture = '') {
        localStorage.setItem(SessionStorageVars.CULTURE, culture);
        localStorage.setItem(SessionStorageVars.UI_CULTURE, uiCulture);
    }
};
TbAuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TbAuthService_Factory() { return new TbAuthService(ɵɵinject("env"), ɵɵinject(HttpClient), ɵɵinject(Router)); }, token: TbAuthService, providedIn: "root" });
TbAuthService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject('env')),
    __metadata("design:paramtypes", [Object, HttpClient, Router])
], TbAuthService);

let TbAuthGuard = class TbAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ActivatedRouteSnapshot', next, state.url);
            let autologinToken;
            const jwt = next.queryParams.hasOwnProperty('jwt') ? next.queryParams.jwt : null;
            const subKey = next.queryParams.hasOwnProperty('subKey') ? next.queryParams.subKey : null;
            if (jwt && subKey) {
                autologinToken = {
                    JwtToken: jwt,
                    SubscriptionKey: subKey
                };
            }
            const authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
            if (authtoken || autologinToken) {
                // ho un token, ma ne verifico la validità
                const res = yield this.authService.isValidToken(autologinToken);
                console.log('isValidToken', res);
                if (res.Success) {
                    return true;
                }
                else {
                    this.router.navigate(['login']);
                    return false;
                }
            }
            else {
                // non sono loggato quindi vado alla login
                this.router.navigate(['login']);
                return true;
            }
        });
    }
};
TbAuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function TbAuthGuard_Factory() { return new TbAuthGuard(ɵɵinject(TbAuthService), ɵɵinject(Router)); }, token: TbAuthGuard, providedIn: "root" });
TbAuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [TbAuthService, Router])
], TbAuthGuard);

let TbAuthInterceptor = class TbAuthInterceptor {
    constructor() { }
    intercept(request, next) {
        /**
         * Aggiungo a ogni httprequest l'header 'Authorization' con il nostro token
         */
        let token = JSON.stringify({
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
    }
};
TbAuthInterceptor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], TbAuthInterceptor);

class LoginRequest {
    constructor() {
        this.accountName = '';
        this.password = '';
    }
}

let TbLoginComponent = class TbLoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.capsLockOn = false;
        this.loading = false;
        this.loginRequest = new LoginRequest();
    }
    ngOnInit() {
        this.loadAccountName();
    }
    // ---------------------------------------------------------------------------------------------
    keyUpFunction(event) {
        if (event.keyCode === 13) {
            if (this.loginRequest.accountName)
                this.login();
        }
        const capsOn = event.getModifierState && event.getModifierState('CapsLock');
        this.capsLockOn = capsOn;
    }
    // -------------------------------------------------------------------------------------
    disabledButton() {
        return !this.loginRequest.accountName || this.loading;
    }
    // -------------------------------------------------------------------------------------
    accountNameBlur() { }
    // ---------------------------------------------------------------------------------------------
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            this.authService.errorMessage = '';
            this.saveAccountName();
            this.loading = true;
            const result = yield this.authService
                .login(this.loginRequest)
                .toPromise()
                .catch(err => {
                this.loading = false;
                console.error('Login Error', err);
                this.authService.errorMessage = err.error && err.error.Message;
                return;
            });
            if (!result)
                return;
            // todo controlla come vengono mostrati errori sia login sia checkdb
            if (result.Result) {
                const url = this.authService.getRedirectUrl();
                console.log('Redirect Url', url);
                this.authService.errorMessage = '';
                this.router.navigate([url]);
            }
            else {
                console.error('authService.errorMessage:', this.authService.errorMessage);
                this.loading = false;
            }
        });
    }
    // -------------------------------------------------------------------------------------
    loadAccountName() {
        this.loginRequest.accountName = localStorage.getItem(SessionStorageVars.ACCOUNT_NAME);
    }
    // -------------------------------------------------------------------------------------
    saveAccountName() {
        localStorage.setItem(SessionStorageVars.ACCOUNT_NAME, this.loginRequest.accountName);
    }
};
TbLoginComponent = __decorate([
    Component({
        selector: 'tb-login',
        template: "<div class=\"login-container\">\n    <div class=\"container\">\n        <div class=\" login\">\n            <div class=\"login-header\">\n                <img class=\"d-lg-none\" src=\"assets/images/logoM4_w160.png\" />\n                <h3>Sign in</h3>\n            </div>\n\n            <div class=\"login-form\">\n                <div class=\"form-control\">\n                    <kendo-textbox-container floatingLabel=\"Account Name\">\n                        <input\n                            kendoTextBox\n                            autofocus\n                            [(ngModel)]=\"loginRequest.accountName\"\n                            (blur)=\"accountNameBlur()\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"accountName\"\n                            autocomplete=\"off\"\n                        />\n                    </kendo-textbox-container>\n                </div>\n\n                <div class=\"form-control\">\n                    <kendo-textbox-container floatingLabel=\"Password\">\n                        <input\n                            kendoTextBox\n                            [(ngModel)]=\"loginRequest.password\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"password\"\n                            type=\"password\"\n                            autocomplete=\"new-password\"\n                        />\n                    </kendo-textbox-container>\n                </div>\n            </div>\n\n            <div class=\"caps-lock\" *ngIf=\"capsLockOn\"><span class=\"k-icon k-i-warning\"></span> Caps lock on</div>\n            <div class=\"login-error\" *ngIf=\"authService.errorMessage\">\n                <span class=\"k-icon k-i-warning\"></span>{{ authService.errorMessage }}\n            </div>\n\n            <div class=\"login-footer\">\n                <div class=\"login-button-container\">\n                    <button kendoButton class=\"login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\n                        <span class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\n                        <span *ngIf=\"!loading\">Login</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"intro d-none d-lg-flex\">\n            <img src=\"assets/images/logoM4_w160.png\" />\n\n            <div class=\"welcome\">\n                <h2>Welcome to <strong>M4Cloud</strong></h2>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam.\n                </p>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam.\n                </p>\n            </div>\n\n            <p class=\"d-md-block\">&nbsp;</p>\n        </div>\n    </div>\n</div>\n<p class=\"copyright copyright-abs\">\u00A9 2017 - 2019 Zucchetti s.p.a.</p>\n",
        styles: [":host(tb-login){font-family:\"Fira Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"!important;background:#013b5e;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%}:host(tb-login) .login-container{display:flex;min-height:100%;justify-content:center;align-items:center}@media screen and (min-height:376px){:host(tb-login) .login-container{min-height:90%;margin:30px 0}}:host(tb-login) .login-container .container{display:flex;flex-direction:row-reverse;flex-wrap:nowrap;min-height:50vh}@media screen and (min-width:576px){:host(tb-login) .login-container .container{min-height:70vh}}@media screen and (min-width:1025px){:host(tb-login) .login-container .container{min-height:80vh}}:host(tb-login) .login-container .container .intro{background:#00578c;padding:30px 50px;display:flex;flex-direction:column;flex-wrap:nowrap;flex:1;justify-content:space-between}:host(tb-login) .login-container .container .intro img{align-self:flex-start}:host(tb-login) .login-container .container .intro .welcome h2{font-size:30px;font-weight:300;color:#fff;margin:-50px 0 30px}:host(tb-login) .login-container .container .intro .welcome h2 strong{font-weight:400;font-size:40px}:host(tb-login) .login-container .container .intro .welcome p{color:#fff;font-size:14px;font-weight:300;line-height:1.4em}:host(tb-login) .login-container .container .login{flex:1;display:flex;padding:10px 20px;flex-direction:column;justify-content:space-between;background:#0277bd}@media screen and (min-width:992px){:host(tb-login) .login-container .container .login{flex:40% 0}}:host(tb-login) .login-container .container .login .login-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center}:host(tb-login) .login-container .container .login .login-header img{width:150px}:host(tb-login) .login-container .container .login .login-header h3{color:#fff;font-size:30px;margin:0;font-weight:300}:host(tb-login) .login-container .container .login .login-form{display:flex;flex-direction:column;flex:1;justify-content:center;margin:10px 0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container{width:100%;margin:3px 0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container>.k-label{font-weight:300;color:#8ee2ff}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-input.k-textbox,:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-textarea,:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-textbox{border:none;border-bottom:1px solid #8ee2ff;border-radius:0;color:#fff;background:#0277bd;box-shadow:none;padding:10px 0;height:36px;caret-color:#fff}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container::after{background-color:#8ee2ff;height:1px}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown{border:none;background:0 0;border-bottom:1px solid #8ee2ff!important}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap>.k-input{background:#0277bd!important;height:36px;opacity:1;color:#fff;padding:0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff;-webkit-filter:none;filter:none;border-bottom:1px dashed #8ee2ff;background:#0277bd}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#0277bd;border-radius:0;border:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#8ee2ff}:host(tb-login) .login-container .container .login .caps-lock{margin:0 0 10px;background:#00578c;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em;display:flex;align-items:center}:host(tb-login) .login-container .container .login .caps-lock span{margin-right:5px}:host(tb-login) .login-container .container .login .login-error{margin:0 0 10px;background:#ff6358;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}:host(tb-login) .login-container .container .login .login-error span{margin-right:5px}:host(tb-login) .login-container .container .login .login-footer{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}:host(tb-login) .login-container .container .login .login-footer .login-button{padding:10px 70px;background:#3daf68;color:#fff}:host(tb-login) .login-container .container .login .login-footer .login-button.k-state-disabled{background-color:rgba(0,87,140,.5);border-color:#00598e;color:#54aee4;cursor:not-allowed}:host(tb-login) .login-container .container .login .login-footer .login-button .k-i-loading{font-size:20px}:host(tb-login) .login-container .container .login .login-footer .server-info{display:flex;flex-direction:row;align-items:center;margin-right:10px}:host(tb-login) .login-container .container .login .login-footer .server-info #server-info-label{font-size:11px;font-weight:300;color:#fff;margin:0 10px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon{color:#fff;font-size:20px;padding-top:3px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon .k-icon{margin-top:-8px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon m4-icon{cursor:pointer}:host(tb-login) .login-container .container .login .login-footer .server-info.server-down #server-info-label,:host(tb-login) .login-container .container .login .login-footer .server-info.server-down .icon{color:#ffc000}:host(tb-login) .login-container .container .login .login-footer .server-info.server-up #server-info-label,:host(tb-login) .login-container .container .login .login-footer .server-info.server-up .icon{color:#3daf68}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) .server-info-popup{padding:5px 7px;min-width:150px;background:#013b5e}:host(tb-login) .server-info-popup h3{font-size:20px;color:#fff;font-weight:300;margin:0 0 10px;text-align:center}:host(tb-login) .server-info-popup a.tb-btn{padding:7px 7px 5px;text-align:center;background:#0277bd;color:#fff;margin:10px 0;display:block;border-radius:4px;border:1px solid #00578c}:host(tb-login) .server-info-popup .dl-horizontal{margin:0;padding:0 20px 0 0;color:#fff}:host(tb-login) .server-info-popup .dl-horizontal dt{float:left;width:80px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:500}:host(tb-login) .server-info-popup .dl-horizontal dd{margin-left:90px;font-size:12px;font-weight:300}:host(tb-login) input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px #0277bd inset!important;-webkit-text-fill-color:#fff!important}:host(tb-login) :focus{outline:0}@media (min-width:576px){:host(tb-login) .container .login{padding:20px}:host(tb-login) .container .login .login-form ::ng-deep .k-textbox-container{margin:10px 0}}@media (min-width:992px){:host(tb-login) .container .login .login-header{justify-content:flex-end}}"]
    }),
    __metadata("design:paramtypes", [TbAuthService, Router])
], TbLoginComponent);

let TbLogoutComponent = class TbLogoutComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        // const authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
        // if (authtoken) authService.logoff();
        // router.navigate([authService.getLoginUrl()]);
    }
};
TbLogoutComponent = __decorate([
    Component({
        selector: 'tb-logout',
        template: ''
    }),
    __metadata("design:paramtypes", [TbAuthService, Router])
], TbLogoutComponent);

var TbAuthModule_1;
let TbAuthModule = TbAuthModule_1 = class TbAuthModule {
    static forRoot() {
        return {
            ngModule: TbAuthModule_1,
            providers: [TbAuthService]
        };
    }
};
TbAuthModule = TbAuthModule_1 = __decorate([
    NgModule({
        declarations: [TbLoginComponent, TbLogoutComponent],
        imports: [CommonModule, FormsModule, InputsModule, ButtonsModule],
        exports: [TbLoginComponent, TbLogoutComponent]
    })
], TbAuthModule);

/*
 * Public API Surface of login
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TbAuthGuard, TbAuthInterceptor, TbAuthModule, TbAuthService, TbLoginComponent, TbLogoutComponent };
//# sourceMappingURL=tb-auth.js.map
