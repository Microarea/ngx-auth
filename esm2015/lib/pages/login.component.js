/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from '../auth.service';
import { LoginRequest } from '../models/login-request';
import { StorageVars } from '../models/storage-vars';
export class TbLoginComponent {
    /**
     * @param {?} authService
     * @param {?} router
     * @param {?} env
     */
    constructor(authService, router, env) {
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
    ngOnInit() {
        this.loadAccountName();
    }
    // ---------------------------------------------------------------------------------------------
    /**
     * @param {?} event
     * @return {?}
     */
    keyUpFunction(event) {
        if (event.keyCode === 13) {
            if (this.loginRequest.AccountName)
                this.login();
        }
        /** @type {?} */
        const capsOn = event.getModifierState && event.getModifierState('CapsLock');
        this.capsLockOn = capsOn;
    }
    // -------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    disabledButton() {
        return !this.loginRequest.AccountName || this.loading;
    }
    // -------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    accountNameBlur() { }
    // ---------------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.authService.errorMessage = '';
            this.saveAccountName();
            this.loading = true;
            /** @type {?} */
            const result = yield this.authService.login(this.loginRequest).catch((/**
             * @param {?} err
             * @return {?}
             */
            err => {
                this.loading = false;
                this.authService.errorMessage = err.error && err.error.Message;
                return;
            }));
            this.loading = false;
            if (!result)
                return;
            // todo controlla come vengono mostrati errori sia login sia checkdb
            if (result.Result) {
                /** @type {?} */
                const url = this.authService.getRedirectUrl();
                this.authService.errorMessage = '';
                this.router.navigate([url]);
            }
            else {
                this.loading = false;
            }
        });
    }
    // -------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    loadAccountName() {
        this.loginRequest.AccountName = localStorage.getItem(StorageVars.ACCOUNT_NAME);
    }
    // -------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    saveAccountName() {
        localStorage.setItem(StorageVars.ACCOUNT_NAME, this.loginRequest.AccountName);
    }
}
TbLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'tb-login',
                template: "<div class=\"login-container\">\n    <div class=\"container\">\n        <div class=\" login\">\n            <div class=\"login-header\">\n                <img class=\"d-lg-none\" src=\"assets/images/logoM4_w160.png\" />\n                <h3>Sign in</h3>\n            </div>\n\n            <div class=\"login-form\">\n                <div class=\"form-control\">\n                    <kendo-textbox-container floatingLabel=\"Account Name\">\n                        <input\n                            kendoTextBox\n                            autofocus\n                            [(ngModel)]=\"loginRequest.AccountName\"\n                            (blur)=\"accountNameBlur()\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"accountName\"\n                            autocomplete=\"off\"\n                        />\n                    </kendo-textbox-container>\n                </div>\n\n                <div class=\"form-control\">\n                    <kendo-textbox-container floatingLabel=\"Password\">\n                        <input\n                            kendoTextBox\n                            [(ngModel)]=\"loginRequest.Password\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"password\"\n                            type=\"password\"\n                            autocomplete=\"new-password\"\n                        />\n                    </kendo-textbox-container>\n                </div>\n                <div class=\"login-infos\">\n                    <div class=\"caps-lock\" *ngIf=\"capsLockOn\"><span class=\"k-icon k-i-warning\"></span> Caps lock on</div>\n                    <div class=\"login-error\" *ngIf=\"authService.errorMessage\">\n                        <span class=\"k-icon k-i-warning\"></span>{{ authService.errorMessage }}\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"login-footer\">\n                <div class=\"login-button-container\">\n                    <button kendoButton class=\"login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\n                        <span class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\n                        <span *ngIf=\"!loading\">Login</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"intro d-none d-lg-flex\">\n            <img src=\"assets/images/logoM4_w160.png\" />\n\n            <div class=\"welcome\">\n                <h2>Welcome to <strong>M4Cloud</strong></h2>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam.\n                </p>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam.\n                </p>\n            </div>\n\n            <p class=\"d-md-block\">&nbsp;</p>\n        </div>\n    </div>\n</div>\n<p class=\"copyright copyright-abs\">\u00A9 2017 - 2019 Zucchetti s.p.a.</p>\n",
                styles: [":host(tb-login){font-family:\"Fira Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"!important;background:#013b5e;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%}:host(tb-login) .login-container{display:flex;min-height:100%;justify-content:center;align-items:center}@media screen and (min-height:376px){:host(tb-login) .login-container{min-height:100%;padding:30px 0}}:host(tb-login) .login-container .container{display:flex;flex-direction:row-reverse;flex-wrap:nowrap;min-height:50vh}@media screen and (min-width:576px){:host(tb-login) .login-container .container{min-height:70vh}}:host(tb-login) .login-container .container .intro{background:#00578c;padding:30px 50px;display:flex;flex-direction:column;flex-wrap:nowrap;flex:1;justify-content:space-between}:host(tb-login) .login-container .container .intro img{align-self:flex-start}:host(tb-login) .login-container .container .intro .welcome h2{font-size:30px;font-weight:300;color:#fff;margin:-50px 0 30px}:host(tb-login) .login-container .container .intro .welcome h2 strong{font-weight:400;font-size:40px}:host(tb-login) .login-container .container .intro .welcome p{color:#fff;font-size:14px;font-weight:300;line-height:1.4em}:host(tb-login) .login-container .container .login{flex:1;display:flex;padding:10px 20px;flex-direction:column;justify-content:center;background:#0277bd}@media screen and (min-width:992px){:host(tb-login) .login-container .container .login{flex:40% 0}}:host(tb-login) .login-container .container .login .login-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center}:host(tb-login) .login-container .container .login .login-header img{width:150px}:host(tb-login) .login-container .container .login .login-header h3{color:#fff;font-size:30px;margin:0;font-weight:300}:host(tb-login) .login-container .container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:40px 0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container{width:100%;margin:3px 0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container>.k-label{font-weight:300;color:#8ee2ff}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-input.k-textbox,:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-textarea,:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-textbox{border:none;border-bottom:1px solid #8ee2ff;border-radius:0;color:#fff;background:#0277bd;box-shadow:none;padding:10px 0;height:36px;caret-color:#fff}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container::after{background-color:#8ee2ff;height:1px}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown{border:none;background:0 0;border-bottom:1px solid #8ee2ff!important}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap>.k-input{background:#0277bd!important;height:36px;opacity:1;color:#fff;padding:0}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff;-webkit-filter:none;filter:none;border-bottom:1px dashed #8ee2ff;background:#0277bd}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#0277bd;border-radius:0;border:none}:host(tb-login) .login-container .container .login .login-form ::ng-deep .k-textbox-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#8ee2ff}:host(tb-login) .login-container .container .login .login-infos{margin:20px 0}:host(tb-login) .login-container .container .login .login-infos .caps-lock{margin:0 0 10px;background:#00578c;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em;display:flex;align-items:center}:host(tb-login) .login-container .container .login .login-infos .caps-lock span{margin-right:5px}:host(tb-login) .login-container .container .login .login-infos .login-error{margin:0 0 10px;background:#ff6358;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}:host(tb-login) .login-container .container .login .login-infos .login-error span{margin-right:5px}:host(tb-login) .login-container .container .login .login-footer{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}:host(tb-login) .login-container .container .login .login-footer .login-button{padding:10px 70px;background:#3daf68;color:#fff}:host(tb-login) .login-container .container .login .login-footer .login-button.k-state-disabled{background-color:rgba(0,87,140,.5);border-color:#00598e;color:#54aee4;cursor:not-allowed}:host(tb-login) .login-container .container .login .login-footer .login-button .k-i-loading{font-size:20px}:host(tb-login) .login-container .container .login .login-footer .server-info{display:flex;flex-direction:row;align-items:center;margin-right:10px}:host(tb-login) .login-container .container .login .login-footer .server-info #server-info-label{font-size:11px;font-weight:300;color:#fff;margin:0 10px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon{color:#fff;font-size:20px;padding-top:3px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon .k-icon{margin-top:-8px}:host(tb-login) .login-container .container .login .login-footer .server-info .icon m4-icon{cursor:pointer}:host(tb-login) .login-container .container .login .login-footer .server-info.server-down #server-info-label,:host(tb-login) .login-container .container .login .login-footer .server-info.server-down .icon{color:#ffc000}:host(tb-login) .login-container .container .login .login-footer .server-info.server-up #server-info-label,:host(tb-login) .login-container .container .login .login-footer .server-info.server-up .icon{color:#3daf68}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) .server-info-popup{padding:5px 7px;min-width:150px;background:#013b5e}:host(tb-login) .server-info-popup h3{font-size:20px;color:#fff;font-weight:300;margin:0 0 10px;text-align:center}:host(tb-login) .server-info-popup a.tb-btn{padding:7px 7px 5px;text-align:center;background:#0277bd;color:#fff;margin:10px 0;display:block;border-radius:4px;border:1px solid #00578c}:host(tb-login) .server-info-popup .dl-horizontal{margin:0;padding:0 20px 0 0;color:#fff}:host(tb-login) .server-info-popup .dl-horizontal dt{float:left;width:80px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:500}:host(tb-login) .server-info-popup .dl-horizontal dd{margin-left:90px;font-size:12px;font-weight:300}:host(tb-login) input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px #0277bd inset!important;-webkit-text-fill-color:#fff!important}:host(tb-login) :focus{outline:0}@media (min-width:576px){:host(tb-login) .container .login{padding:20px}:host(tb-login) .container .login .login-form ::ng-deep .k-textbox-container{margin:10px 0}}@media (min-width:992px){:host(tb-login) .container .login .login-header{justify-content:flex-end}}"]
            }] }
];
/** @nocollapse */
TbLoginComponent.ctorParameters = () => [
    { type: TbAuthService },
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
];
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
    /**
     * @type {?}
     * @private
     */
    TbLoginComponent.prototype.env;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBT3JELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQUt6QixZQUFtQixXQUEwQixFQUFTLE1BQWMsRUFBeUIsR0FBRztRQUE3RSxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBeUIsUUFBRyxHQUFILEdBQUcsQ0FBQTtRQUp6RixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFJbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUdELGFBQWEsQ0FBQyxLQUFLO1FBQ2YsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVztnQkFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbkQ7O2NBQ0ssTUFBTSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1FBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBR0QsY0FBYztRQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBR0QsZUFBZSxLQUFJLENBQUM7Ozs7O0lBR2QsS0FBSzs7WUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztrQkFFZCxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN2RSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDL0QsT0FBTztZQUNYLENBQUMsRUFBQztZQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBRXJCLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFFcEIsb0VBQW9FO1lBQ3BFLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTs7c0JBQ1QsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO2dCQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtRQUNMLENBQUM7S0FBQTs7Ozs7SUFHTSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7O0lBR00sZUFBZTtRQUNsQixZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7WUF0RUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixxdEdBQXFDOzthQUV4Qzs7OztZQVRRLGFBQWE7WUFGYixNQUFNOzRDQWlCNEQsTUFBTSxTQUFDLEtBQUs7Ozs7SUFKbkYsc0NBQTBCOztJQUMxQixtQ0FBdUI7O0lBQ3ZCLHdDQUFrQzs7SUFFdEIsdUNBQWlDOztJQUFFLGtDQUFxQjs7Ozs7SUFBRSwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0Yi1sb2dpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRiTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBjYXBzTG9ja09uID0gZmFsc2U7XG4gICAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcbiAgICBwdWJsaWMgbG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnYpIHtcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QgPSBuZXcgTG9naW5SZXF1ZXN0KCk7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LkFwcElkID0gZW52LmF1dGguYXBwaWQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9hZEFjY291bnROYW1lKCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAga2V5VXBGdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ2luUmVxdWVzdC5BY2NvdW50TmFtZSkgdGhpcy5sb2dpbigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhcHNPbiA9IGV2ZW50LmdldE1vZGlmaWVyU3RhdGUgJiYgZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSgnQ2Fwc0xvY2snKTtcbiAgICAgICAgdGhpcy5jYXBzTG9ja09uID0gY2Fwc09uO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkaXNhYmxlZEJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmxvZ2luUmVxdWVzdC5BY2NvdW50TmFtZSB8fCB0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFjY291bnROYW1lQmx1cigpIHt9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhc3luYyBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5zYXZlQWNjb3VudE5hbWUoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMubG9naW5SZXF1ZXN0KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybjtcblxuICAgICAgICAvLyB0b2RvIGNvbnRyb2xsYSBjb21lIHZlbmdvbm8gbW9zdHJhdGkgZXJyb3JpIHNpYSBsb2dpbiBzaWEgY2hlY2tkYlxuICAgICAgICBpZiAocmVzdWx0LlJlc3VsdCkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpO1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmxdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHB1YmxpYyBsb2FkQWNjb3VudE5hbWUoKSB7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LkFjY291bnROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHVibGljIHNhdmVBY2NvdW50TmFtZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCB0aGlzLmxvZ2luUmVxdWVzdC5BY2NvdW50TmFtZSk7XG4gICAgfVxufVxuIl19