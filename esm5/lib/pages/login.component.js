/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from '../auth.service';
import { LoginRequest } from '../models/login-request';
import { StorageVars } from '../models/storage-vars';
var TbLoginComponent = /** @class */ (function () {
    function TbLoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.capsLockOn = false;
        this.loading = false;
        this.loginRequest = new LoginRequest();
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
            if (this.loginRequest.accountName)
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
        return !this.loginRequest.accountName || this.loading;
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, url;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.authService.errorMessage = '';
                        this.saveAccountName();
                        this.loading = true;
                        return [4 /*yield*/, this.authService
                                .login(this.loginRequest)
                                .toPromise()
                                .catch((/**
                             * @param {?} err
                             * @return {?}
                             */
                            function (err) {
                                _this.loading = false;
                                console.error('Login Error', err);
                                _this.authService.errorMessage = err.error && err.error.Message;
                                return;
                            }))];
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
        this.loginRequest.accountName = localStorage.getItem(StorageVars.ACCOUNT_NAME);
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
        localStorage.setItem(StorageVars.ACCOUNT_NAME, this.loginRequest.accountName);
    };
    TbLoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tb-login',
                    template: "<div class=\"login-container\">\n    <div class=\"container\">\n        <div class=\" login\">\n            <div class=\"login-header\">\n                <img class=\"d-lg-none\" src=\"assets/images/logoM4_w160.png\" />\n                <h3>Sign in</h3>\n            </div>\n\n            <div class=\"login-form\">\n                <div class=\"form-control\">\n                    <kendo-textbox-container floatingLabel=\"Account Name\">\n                        <input\n                            kendoTextBox\n                            autofocus\n                            [(ngModel)]=\"loginRequest.accountName\"\n                            (blur)=\"accountNameBlur()\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"accountName\"\n                            autocomplete=\"off\"\n                        />\n                    </kendo-textbox-container>\n                </div>\n\n                <div class=\"form-control\">\n                    <kendo-textbox-container floatingLabel=\"Password\">\n                        <input\n                            kendoTextBox\n                            [(ngModel)]=\"loginRequest.password\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"password\"\n                            type=\"password\"\n                            autocomplete=\"new-password\"\n                        />\n                    </kendo-textbox-container>\n                </div>\n            </div>\n\n            <div class=\"caps-lock\" *ngIf=\"capsLockOn\"><span class=\"k-icon k-i-warning\"></span> Caps lock on</div>\n            <div class=\"login-error\" *ngIf=\"authService.errorMessage\">\n                <span class=\"k-icon k-i-warning\"></span>{{ authService.errorMessage }}\n            </div>\n\n            <div class=\"login-footer\">\n                <div class=\"login-button-container\">\n                    <button kendoButton class=\"login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\n                        <span class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\n                        <span *ngIf=\"!loading\">Login</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"intro d-none d-lg-flex\">\n            <img src=\"assets/images/logoM4_w160.png\" />\n\n            <div class=\"welcome\">\n                <h2>Welcome to <strong>M4Cloud</strong></h2>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam.\n                </p>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam.\n                </p>\n            </div>\n\n            <p class=\"d-md-block\">&nbsp;</p>\n        </div>\n    </div>\n</div>\n<p class=\"copyright copyright-abs\">\u00A9 2017 - 2019 Zucchetti s.p.a.</p>\n",
                    styles: [":host(tb-login){font-family:\"Fira Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"!important;background:#013b5e;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%}:host(tb-login) .login-container{display:flex;min-height:100%;justify-content:center;align-items:center}@media screen and (min-height:376px){:host(tb-login) .login-container{min-height:90%;margin:30px 0}}:host(tb-login) .login-container .container{display:flex;flex-direction:row-reverse;flex-wrap:nowrap;min-height:50vh}@media screen and (min-width:576px){:host(tb-login) .login-container .container{min-height:70vh}}@media screen and (min-width:1025px){:host(tb-login) .login-container .container{min-height:80vh}}:host(tb-login) .login-container .container .intro{background:#00578c;padding:30px 50px;display:flex;flex-direction:column;flex-wrap:nowrap;flex:1;justify-content:space-between}:host(tb-login) .login-container .container .intro img{align-self:flex-start}:host(tb-login) .login-container .container .intro .welcome h2{font-size:30px;font-weight:300;color:#fff;margin:-50px 0 30px}:host(tb-login) .login-container .container .intro .welcome h2 strong{font-weight:400;font-size:40px}:host(tb-login) .login-container .container .intro .welcome p{color:#fff;font-size:14px;font-weight:300;line-height:1.4em}:host(tb-login) .login-container .container .login{flex:1;display:flex;padding:10px 20px;flex-direction:column;justify-content:space-between;background:#0277bd}@media screen and (min-width:992px){:host(tb-login) .login-container .container .login{flex:40% 0}}:host(tb-login) .login-container .container .login .login-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center}:host(tb-login) .login-container .container .login .login-header img{width:150px}:host(tb-login) .login-container .container .login .login-header h3{color:#fff;font-size:30px;margin:0;font-weight:300}:host(tb-login) .login-container .container .login .login-form{display:flex;flex-direction:column;flex:1;justify-content:center;margin:10px 0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container{width:100%;margin:3px 0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container>.k-label{font-weight:300;color:#8ee2ff}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-input.k-textbox,:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-textarea,:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-textbox{border:none;border-bottom:1px solid #8ee2ff;border-radius:0;color:#fff;background:#0277bd;box-shadow:none;padding:10px 0;height:36px;caret-color:#fff}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container::after{background-color:#8ee2ff;height:1px}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown{border:none;background:0 0;border-bottom:1px solid #8ee2ff!important}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap>.k-input{background:#0277bd!important;height:36px;opacity:1;color:#fff;padding:0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff;-webkit-filter:none;filter:none;border-bottom:1px dashed #8ee2ff;background:#0277bd}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#0277bd;border-radius:0;border:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#8ee2ff}:host(tb-login) .login-container .container .login .caps-lock{margin:0 0 10px;background:#00578c;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em;display:flex;align-items:center}:host(tb-login) .login-container .container .login .caps-lock span{margin-right:5px}:host(tb-login) .login-container .container .login .login-error{margin:0 0 10px;background:#ff6358;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}:host(tb-login) .login-container .container .login .login-error span{margin-right:5px}:host(tb-login) .login-container .container .login .login-footer{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}:host(tb-login) .login-container .container .login .login-footer .login-button{padding:10px 70px;background:#3daf68;color:#fff}:host(tb-login) .login-container .container .login .login-footer .login-button.k-state-disabled{background-color:rgba(0,87,140,.5);border-color:#00598e;color:#54aee4;cursor:not-allowed}:host(tb-login) .login-container .container .login .login-footer .login-button .k-i-loading{font-size:20px}:host(tb-login) .login-container .container .login .login-footer .server-info{display:flex;flex-direction:row;align-items:center;margin-right:10px}:host(tb-login) .login-container .container .login .login-footer .server-info #server-info-label{font-size:11px;font-weight:300;color:#fff;margin:0 10px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon{color:#fff;font-size:20px;padding-top:3px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon .k-icon{margin-top:-8px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon m4-icon{cursor:pointer}:host(tb-login) .login-container .container .login .login-footer .server-info.server-down #server-info-label,:host(tb-login) .login-container .container .login .login-footer .server-info.server-down .icon{color:#ffc000}:host(tb-login) .login-container .container .login .login-footer .server-info.server-up #server-info-label,:host(tb-login) .login-container .container .login .login-footer .server-info.server-up .icon{color:#3daf68}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) .server-info-popup{padding:5px 7px;min-width:150px;background:#013b5e}:host(tb-login) .server-info-popup h3{font-size:20px;color:#fff;font-weight:300;margin:0 0 10px;text-align:center}:host(tb-login) .server-info-popup a.tb-btn{padding:7px 7px 5px;text-align:center;background:#0277bd;color:#fff;margin:10px 0;display:block;border-radius:4px;border:1px solid #00578c}:host(tb-login) .server-info-popup .dl-horizontal{margin:0;padding:0 20px 0 0;color:#fff}:host(tb-login) .server-info-popup .dl-horizontal dt{float:left;width:80px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:500}:host(tb-login) .server-info-popup .dl-horizontal dd{margin-left:90px;font-size:12px;font-weight:300}:host(tb-login) input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px #0277bd inset!important;-webkit-text-fill-color:#fff!important}:host(tb-login) :focus{outline:0}@media (min-width:576px){:host(tb-login) .container .login{padding:20px}:host(tb-login) .container .login .login-form ::ng-deep .k-textbox-container{margin:10px 0}}@media (min-width:992px){:host(tb-login) .container .login .login-header{justify-content:flex-end}}"]
                }] }
    ];
    /** @nocollapse */
    TbLoginComponent.ctorParameters = function () { return [
        { type: TbAuthService },
        { type: Router }
    ]; };
    return TbLoginComponent;
}());
export { TbLoginComponent };
if (false) {
    /** @type {?} */
    TbLoginComponent.prototype.capsLockOn;
    /** @type {?} */
    TbLoginComponent.prototype.loading;
    /** @type {?} */
    TbLoginComponent.prototype.loginRequest;
    /** @type {?} */
    TbLoginComponent.prototype.authService;
    /** @type {?} */
    TbLoginComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQ7SUFVSSwwQkFBbUIsV0FBMEIsRUFBUyxNQUFjO1FBQWpELGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUo3RCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsaUJBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVnQixDQUFDOzs7O0lBRXhFLG1DQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0dBQWdHOzs7Ozs7SUFDaEcsd0NBQWE7Ozs7OztJQUFiLFVBQWMsS0FBSztRQUNmLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVc7Z0JBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ25EOztZQUNLLE1BQU0sR0FBRyxLQUFLLENBQUMsZ0JBQWdCLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztRQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQsd0ZBQXdGOzs7OztJQUN4Rix5Q0FBYzs7Ozs7SUFBZDtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzFELENBQUM7SUFFRCx3RkFBd0Y7Ozs7O0lBQ3hGLDBDQUFlOzs7OztJQUFmLGNBQW1CLENBQUM7SUFFcEIsZ0dBQWdHOzs7OztJQUMxRixnQ0FBSzs7Ozs7SUFBWDs7Ozs7Ozt3QkFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7d0JBQ25DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBRUwscUJBQU0sSUFBSSxDQUFDLFdBQVc7aUNBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2lDQUN4QixTQUFTLEVBQUU7aUNBQ1gsS0FBSzs7Ozs0QkFBQyxVQUFBLEdBQUc7Z0NBQ04sS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dDQUNsQyxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2dDQUMvRCxPQUFPOzRCQUNYLENBQUMsRUFBQyxFQUFBOzt3QkFSQSxNQUFNLEdBQUcsU0FRVDt3QkFFTixJQUFJLENBQUMsTUFBTTs0QkFBRSxzQkFBTzt3QkFFcEIsb0VBQW9FO3dCQUNwRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7NEJBQ1QsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFOzRCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDOzRCQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQy9COzZCQUFNOzRCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7eUJBQ3hCOzs7OztLQUNKO0lBRUQsd0ZBQXdGOzs7OztJQUNqRiwwQ0FBZTs7Ozs7SUFBdEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsd0ZBQXdGOzs7OztJQUNqRiwwQ0FBZTs7Ozs7SUFBdEI7UUFDSSxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRixDQUFDOztnQkF2RUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixrbkdBQXFDOztpQkFFeEM7Ozs7Z0JBVFEsYUFBYTtnQkFGYixNQUFNOztJQStFZix1QkFBQztDQUFBLEFBeEVELElBd0VDO1NBbkVZLGdCQUFnQjs7O0lBQ3pCLHNDQUEwQjs7SUFDMUIsbUNBQXVCOztJQUN2Qix3Q0FBdUQ7O0lBRTNDLHVDQUFpQzs7SUFBRSxrQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5cbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGItbG9naW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYkxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgY2Fwc0xvY2tPbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gICAgcHVibGljIGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0ID0gbmV3IExvZ2luUmVxdWVzdCgpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2FkQWNjb3VudE5hbWUoKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBrZXlVcEZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKSB0aGlzLmxvZ2luKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2Fwc09uID0gZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSAmJiBldmVudC5nZXRNb2RpZmllclN0YXRlKCdDYXBzTG9jaycpO1xuICAgICAgICB0aGlzLmNhcHNMb2NrT24gPSBjYXBzT247XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRpc2FibGVkQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lIHx8IHRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYWNjb3VudE5hbWVCbHVyKCkge31cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGxvZ2luKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLnNhdmVBY2NvdW50TmFtZSgpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgICAgIC5sb2dpbih0aGlzLmxvZ2luUmVxdWVzdClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTG9naW4gRXJyb3InLCBlcnIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm47XG5cbiAgICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaSBzaWEgbG9naW4gc2lhIGNoZWNrZGJcbiAgICAgICAgaWYgKHJlc3VsdC5SZXN1bHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWRpcmVjdCBVcmwnLCB1cmwpO1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmxdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2F1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZTonLCB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwdWJsaWMgbG9hZEFjY291bnROYW1lKCkge1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHB1YmxpYyBzYXZlQWNjb3VudE5hbWUoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xuICAgIH1cbn1cbiJdfQ==