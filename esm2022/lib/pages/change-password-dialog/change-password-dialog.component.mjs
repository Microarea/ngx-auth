import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChangePasswordInfo } from '../../models/login-request';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../auth.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@progress/kendo-angular-label";
import * as i6 from "@progress/kendo-angular-inputs";
function ChangePasswordDialogComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_29_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.hidenewpwd = !ctx_r1.hidenewpwd); });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_30_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.hidenewpwd = !ctx_r1.hidenewpwd); });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_33_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.hidenewpwd2 = !ctx_r1.hidenewpwd2); });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_34_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.hidenewpwd2 = !ctx_r1.hidenewpwd2); });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "p", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.blocMaiusc);
} }
function ChangePasswordDialogComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "p", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.authService.errorMessage);
} }
function ChangePasswordDialogComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 22);
} }
function ChangePasswordDialogComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.changeButton);
} }
export class ChangePasswordDialogComponent {
    constructor(mdDialogRef, data, authService) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.authService = authService;
        this.capsLockOn = false;
        this.hidenewpwd = true;
        this.hidenewpwd2 = true;
        this.loading = false;
        this.title = data.Title;
        this.message_1 = data.Message_1;
        this.message_2 = data.Message_2;
        this.message_3 = data.Message_3;
        this.message_4 = data.Message_4;
        this.message_5 = data.Message_5;
        this.message_6 = data.Message_6;
        this.message_7 = data.Message_7;
        this.message_8 = data.Message_8;
        this.message_9 = data.Message_9;
        this.message_10 = data.Message_10;
        this.message_11 = data.Message_11;
        this.pswRulesSymbol = data.Message_12;
        this.placeHolder_1 = data.PlaceHolder_1;
        this.placeHolder_2 = data.PlaceHolder_2;
        this.loginRequest = data.LoginRequest;
        this.currentBrowserLanguage = data.CurrentBrowserLanguage;
        this.resetPassword = this.loginRequest.password;
        this.newpwd = this.newpwd2 = '';
        this.authService.errorMessage = '';
        const currentBrowserLanguage = navigator.language.toLocaleLowerCase();
        if (currentBrowserLanguage.startsWith('it')) {
            this.buttonCancel = 'ANNULLA';
            this.changeButton = 'CAMBIA';
            this.blocMaiusc = 'Blocco maiuscole attivo';
        }
        else {
            this.buttonCancel = 'CANCEL';
            this.changeButton = 'CHANGE';
            this.blocMaiusc = 'Caps lock on';
        }
    }
    ngOnInit() { }
    cancel() {
        this.authService.errorMessage = '';
        this.loginRequest.password = '';
        this.mdDialogRef.close();
    }
    async confirm() {
        const cpi = new ChangePasswordInfo();
        cpi.AccountName = this.loginRequest.accountName;
        cpi.IgnoreOldPassword = false;
        cpi.JWTToken = this.loginRequest.token;
        cpi.NewPassword = this.newpwd;
        cpi.Password = this.resetPassword;
        this.loginRequest.password = this.newpwd;
        this.loading = true;
        const result = await this.authService.changePassword(cpi).catch((err) => {
            this.loading = false;
            this.authService.errorMessage = err.error && err.error.Message;
            return;
        });
        if (result && result.Result) {
            this.authService.errorMessage = '';
            if (this.currentBrowserLanguage.startsWith('it')) {
                this.authService.okMessage = 'Password modificata con successo!';
            }
            else {
                this.authService.okMessage = 'Password changed succesfully!';
            }
            this.mdDialogRef.close();
        }
        this.loading = false;
    }
    keyUpFunction(event) {
        if (event.key === 'Enter') {
            if (this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined) {
                this.confirm();
            }
        }
        const capsOn = event.getModifierState && event.getModifierState('CapsLock');
        this.capsLockOn = capsOn;
    }
    /** @nocollapse */ static { this.ɵfac = function ChangePasswordDialogComponent_Factory(t) { return new (t || ChangePasswordDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i2.TbAuthService)); }; }
    /** @nocollapse */ static { this.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ChangePasswordDialogComponent, selectors: [["app-change-password-dialog"]], decls: 47, vars: 33, consts: [[2, "max-width", "450px"], [1, "title"], [1, "description", 2, "margin-bottom", "10px"], [2, "margin-bottom", "30px"], [3, "text", "ngClass"], ["kendoTextBox", "", "name", "newpwd", "autocomplete", "current-password", 3, "keyup", "ngModelChange", "ngModel", "type", "ngClass"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], ["kendoTextBox", "", "name", "newpwd2", "autocomplete", "current-password", 3, "keyup", "ngModelChange", "ngModel", "type", "ngClass"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "click", "disabled"], ["class", "k-icon k-i-loading", 4, "ngIf"], [4, "ngIf"], [1, "login-footer"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"], [1, "material-icons", "icon", 3, "click"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5"], [1, "k-icon", "k-i-loading"]], template: function ChangePasswordDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementStart(5, "strong");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7);
            i0.ɵɵelementStart(8, "b");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "ul", 3)(11, "li");
            i0.ɵɵtext(12);
            i0.ɵɵelementStart(13, "b");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "li");
            i0.ɵɵtext(16);
            i0.ɵɵelementStart(17, "b");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "li")(20, "b");
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "li");
            i0.ɵɵtext(24);
            i0.ɵɵelementStart(25, "b");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(27, "kendo-floatinglabel", 4)(28, "input", 5);
            i0.ɵɵlistener("keyup", function ChangePasswordDialogComponent_Template_input_keyup_28_listener($event) { return ctx.keyUpFunction($event); });
            i0.ɵɵtwoWayListener("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_28_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.newpwd, $event) || (ctx.newpwd = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(29, ChangePasswordDialogComponent_span_29_Template, 2, 0, "span", 6)(30, ChangePasswordDialogComponent_span_30_Template, 2, 0, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "kendo-floatinglabel", 4)(32, "input", 7);
            i0.ɵɵlistener("keyup", function ChangePasswordDialogComponent_Template_input_keyup_32_listener($event) { return ctx.keyUpFunction($event); });
            i0.ɵɵtwoWayListener("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_32_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.newpwd2, $event) || (ctx.newpwd2 = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(33, ChangePasswordDialogComponent_span_33_Template, 2, 0, "span", 6)(34, ChangePasswordDialogComponent_span_34_Template, 2, 0, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 8);
            i0.ɵɵtemplate(36, ChangePasswordDialogComponent_div_36_Template, 3, 1, "div", 9)(37, ChangePasswordDialogComponent_div_37_Template, 3, 1, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div", 11)(39, "div", 12)(40, "button", 13);
            i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_40_listener() { return ctx.confirm(); });
            i0.ɵɵtemplate(41, ChangePasswordDialogComponent_span_41_Template, 1, 0, "span", 14)(42, ChangePasswordDialogComponent_span_42_Template, 2, 1, "span", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(43, "div", 16)(44, "button", 17);
            i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_44_listener() { return ctx.cancel(); });
            i0.ɵɵelementStart(45, "span");
            i0.ɵɵtext(46);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.message_1, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.message_2, "");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.message_3);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.message_4, "");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.message_5, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.message_6);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.message_7, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.message_8);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.message_9);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.message_10, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.message_11, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.pswRulesSymbol);
            i0.ɵɵadvance();
            i0.ɵɵproperty("text", ctx.placeHolder_1)("ngClass", ctx.authService.errorMessage ? "border-bottom-error " : "border-bottom");
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.newpwd);
            i0.ɵɵproperty("type", ctx.hidenewpwd ? "password" : "text")("ngClass", ctx.authService.errorMessage ? "error-status" : "normal-state");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hidenewpwd === true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hidenewpwd === false);
            i0.ɵɵadvance();
            i0.ɵɵproperty("text", ctx.placeHolder_2)("ngClass", ctx.authService.errorMessage ? "border-bottom-error " : "border-bottom");
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.newpwd2);
            i0.ɵɵproperty("type", ctx.hidenewpwd2 ? "password" : "text")("ngClass", ctx.authService.errorMessage ? "error-status" : "normal-state");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hidenewpwd2 === true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hidenewpwd2 === false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.capsLockOn);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.authService.errorMessage);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.newpwd === ctx.newpwd2 && ctx.newpwd2 !== "" && ctx.newpwd2 !== undefined && ctx.loading === false ? false : true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.buttonCancel);
        } }, dependencies: [i3.NgClass, i3.NgIf, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.FloatingLabelComponent, i6.TextBoxDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-change-password-dialog', template: "<div style=\"max-width: 450px\">\r\n    <h1 class=\"title\">{{ title }}</h1>\r\n    <p class=\"description\" style=\"margin-bottom: 10px\">\r\n        {{ message_1 }}<strong> {{ message_2 }}</strong\r\n        >{{ message_3 }}<b> {{ message_4 }}</b>\r\n    </p>\r\n    <ul style=\"margin-bottom: 30px\">\r\n        <li>\r\n            {{ message_5 }} <b>{{ message_6 }}</b>\r\n        </li>\r\n        <li>\r\n            {{ message_7 }} <b>{{ message_8 }}</b>\r\n        </li>\r\n        <li>\r\n            <b>{{ message_9 }}</b> {{ message_10 }}\r\n        </li>\r\n        <li>\r\n            {{ message_11 }} <b>{{ pswRulesSymbol }}</b>\r\n        </li>\r\n    </ul>\r\n    <kendo-floatinglabel [text]=\"placeHolder_1\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error ' : 'border-bottom'\">\r\n        <input\r\n            kendoTextBox\r\n            (keyup)=\"keyUpFunction($event)\"\r\n            [(ngModel)]=\"newpwd\"\r\n            name=\"newpwd\"\r\n            [type]=\"hidenewpwd ? 'password' : 'text'\"\r\n            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n            autocomplete=\"current-password\"\r\n        />\r\n        <span (click)=\"hidenewpwd = !hidenewpwd\" *ngIf=\"hidenewpwd === true\" class=\"material-icons icon\"> visibility </span>\r\n        <span (click)=\"hidenewpwd = !hidenewpwd\" *ngIf=\"hidenewpwd === false\" class=\"material-icons icon\"> visibility_off </span>\r\n    </kendo-floatinglabel>\r\n\r\n    <kendo-floatinglabel [text]=\"placeHolder_2\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error ' : 'border-bottom'\">\r\n        <input\r\n            kendoTextBox\r\n            (keyup)=\"keyUpFunction($event)\"\r\n            [(ngModel)]=\"newpwd2\"\r\n            name=\"newpwd2\"\r\n            [type]=\"hidenewpwd2 ? 'password' : 'text'\"\r\n            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n            autocomplete=\"current-password\"\r\n        />\r\n        <span (click)=\"hidenewpwd2 = !hidenewpwd2\" *ngIf=\"hidenewpwd2 === true\" class=\"material-icons icon\"> visibility </span>\r\n        <span (click)=\"hidenewpwd2 = !hidenewpwd2\" *ngIf=\"hidenewpwd2 === false\" class=\"material-icons icon\"> visibility_off </span>\r\n    </kendo-floatinglabel>\r\n\r\n    <div class=\"login-infos\">\r\n        <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\r\n            <p class=\"no-margin\">{{ blocMaiusc }}</p>\r\n        </div>\r\n        <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"authService.errorMessage\">\r\n            <p class=\"no-margin\">{{ authService.errorMessage }}</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 30px\">\r\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n            <button\r\n                kendoButton\r\n                class=\"buttons ok-button\"\r\n                (click)=\"confirm()\"\r\n                [disabled]=\"\r\n                    this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined && loading === false ? false : true\r\n                \"\r\n            >\r\n                <span class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\r\n                <span *ngIf=\"!loading\">{{ changeButton }}</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\r\n                <span>{{ buttonCancel }}</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n" }]
    }], () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i2.TbAuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ChangePasswordDialogComponent, { className: "ChangePasswordDialogComponent", filePath: "lib\\pages\\change-password-dialog\\change-password-dialog.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7SUMyQnRFLGdDQUFpRztJQUEzRixvT0FBa0M7SUFBMEQsNEJBQVc7SUFBQSxpQkFBTzs7OztJQUNwSCxnQ0FBa0c7SUFBNUYsb09BQWtDO0lBQTJELGdDQUFlO0lBQUEsaUJBQU87Ozs7SUFhekgsZ0NBQW9HO0lBQTlGLHNPQUFvQztJQUEyRCw0QkFBVztJQUFBLGlCQUFPOzs7O0lBQ3ZILGdDQUFxRztJQUEvRixzT0FBb0M7SUFBNEQsZ0NBQWU7SUFBQSxpQkFBTzs7O0lBS3hILEFBREosK0JBQTRFLFlBQ25EO0lBQUEsWUFBZ0I7SUFDekMsQUFEeUMsaUJBQUksRUFDdkM7OztJQURtQixlQUFnQjtJQUFoQix1Q0FBZ0I7OztJQUdyQyxBQURKLCtCQUE0RixZQUNuRTtJQUFBLFlBQThCO0lBQ3ZELEFBRHVELGlCQUFJLEVBQ3JEOzs7SUFEbUIsZUFBOEI7SUFBOUIscURBQThCOzs7SUFjL0MsMkJBQXdEOzs7SUFDeEQsNEJBQXVCO0lB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WUFDekIsY0FBMEI7WUFBMUIsK0NBQTBCO1lBR25ELGNBQXNCO1lBQUMsQUFBdkIsd0NBQXNCLG9GQUFnRjtZQUluSCxjQUFxQjtZQUFyQiwyQ0FBcUI7WUFHckIsQUFEQSw0REFBMEMsMkVBQzRCO1lBRzlCLGNBQTBCO1lBQTFCLCtDQUEwQjtZQUMxQixjQUEyQjtZQUEzQixnREFBMkI7WUFJYixlQUFnQjtZQUFoQixxQ0FBZ0I7WUFHZCxjQUE4QjtZQUE5QixtREFBOEI7WUFXbEYsZUFFQztZQUZELGdKQUVDO1lBRWlDLGNBQWE7WUFBYixrQ0FBYTtZQUN4QyxjQUFjO1lBQWQsbUNBQWM7WUFLZixlQUFrQjtZQUFsQixzQ0FBa0I7OztpRkQvRDNCLDZCQUE2QjtjQUx6QyxTQUFTOzJCQUNJLDRCQUE0Qjs7c0JBbUNqQyxNQUFNO3VCQUFDLGVBQWU7O2tGQS9CbEIsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZEluZm8sIExvZ2luUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2hhbmdlLXBhc3N3b3JkLWRpYWxvZycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlXzE6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlXzI6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlXzM6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlXzQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlXzU6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlXzY6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlXzc6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlXzg6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlXzk6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlXzEwOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZV8xMTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBzd1J1bGVzU3ltYm9sOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxhY2VIb2xkZXJfMTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBsYWNlSG9sZGVyXzI6IHN0cmluZztcclxuICAgIHB1YmxpYyBuZXdwd2Q6IHN0cmluZztcclxuICAgIHB1YmxpYyBuZXdwd2QyOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYnV0dG9uQ2FuY2VsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2hhbmdlQnV0dG9uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY3VycmVudEJyb3dzZXJMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGJsb2NNYWl1c2M6IHN0cmluZztcclxuICAgIHB1YmxpYyBsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdDtcclxuICAgIHB1YmxpYyByZXNldFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2Fwc0xvY2tPbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGhpZGVuZXdwd2QgPSB0cnVlO1xyXG4gICAgcHVibGljIGhpZGVuZXdwd2QyID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQ+LFxyXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcclxuICAgICAgICBwdWJsaWMgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBkYXRhLlRpdGxlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZV8xID0gZGF0YS5NZXNzYWdlXzE7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXzIgPSBkYXRhLk1lc3NhZ2VfMjtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VfMyA9IGRhdGEuTWVzc2FnZV8zO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZV80ID0gZGF0YS5NZXNzYWdlXzQ7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXzUgPSBkYXRhLk1lc3NhZ2VfNTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VfNiA9IGRhdGEuTWVzc2FnZV82O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZV83ID0gZGF0YS5NZXNzYWdlXzc7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXzggPSBkYXRhLk1lc3NhZ2VfODtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VfOSA9IGRhdGEuTWVzc2FnZV85O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZV8xMCA9IGRhdGEuTWVzc2FnZV8xMDtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VfMTEgPSBkYXRhLk1lc3NhZ2VfMTE7XHJcbiAgICAgICAgdGhpcy5wc3dSdWxlc1N5bWJvbCA9IGRhdGEuTWVzc2FnZV8xMjtcclxuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyXzEgPSBkYXRhLlBsYWNlSG9sZGVyXzE7XHJcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlcl8yID0gZGF0YS5QbGFjZUhvbGRlcl8yO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0ID0gZGF0YS5Mb2dpblJlcXVlc3Q7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gZGF0YS5DdXJyZW50QnJvd3Nlckxhbmd1YWdlO1xyXG4gICAgICAgIHRoaXMucmVzZXRQYXNzd29yZCA9IHRoaXMubG9naW5SZXF1ZXN0LnBhc3N3b3JkO1xyXG4gICAgICAgIHRoaXMubmV3cHdkID0gdGhpcy5uZXdwd2QyID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICBjb25zdCBjdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdBTk5VTExBJztcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VCdXR0b24gPSAnQ0FNQklBJztcclxuICAgICAgICAgICAgdGhpcy5ibG9jTWFpdXNjID0gJ0Jsb2NjbyBtYWl1c2NvbGUgYXR0aXZvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdDQU5DRUwnO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvbiA9ICdDSEFOR0UnO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NNYWl1c2MgPSAnQ2FwcyBsb2NrIG9uJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7fVxyXG4gICAgcHVibGljIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjb25maXJtKCkge1xyXG4gICAgICAgIGNvbnN0IGNwaTogQ2hhbmdlUGFzc3dvcmRJbmZvID0gbmV3IENoYW5nZVBhc3N3b3JkSW5mbygpO1xyXG4gICAgICAgIGNwaS5BY2NvdW50TmFtZSA9IHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lO1xyXG4gICAgICAgIGNwaS5JZ25vcmVPbGRQYXNzd29yZCA9IGZhbHNlO1xyXG4gICAgICAgIGNwaS5KV1RUb2tlbiA9IHRoaXMubG9naW5SZXF1ZXN0LnRva2VuO1xyXG4gICAgICAgIGNwaS5OZXdQYXNzd29yZCA9IHRoaXMubmV3cHdkO1xyXG4gICAgICAgIGNwaS5QYXNzd29yZCA9IHRoaXMucmVzZXRQYXNzd29yZDtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgPSB0aGlzLm5ld3B3ZDtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuY2hhbmdlUGFzc3dvcmQoY3BpKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LlJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ1Bhc3N3b3JkIG1vZGlmaWNhdGEgY29uIHN1Y2Nlc3NvISc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICdQYXNzd29yZCBjaGFuZ2VkIHN1Y2Nlc2Z1bGx5ISc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBrZXlVcEZ1bmN0aW9uKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5uZXdwd2QgPT09IHRoaXMubmV3cHdkMiAmJiB0aGlzLm5ld3B3ZDIgIT09ICcnICYmIHRoaXMubmV3cHdkMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYXBzT24gPSBldmVudC5nZXRNb2RpZmllclN0YXRlICYmIGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoJ0NhcHNMb2NrJyk7XHJcbiAgICAgICAgdGhpcy5jYXBzTG9ja09uID0gY2Fwc09uO1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDQ1MHB4XCI+XHJcbiAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9oMT5cclxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHhcIj5cclxuICAgICAgICB7eyBtZXNzYWdlXzEgfX08c3Ryb25nPiB7eyBtZXNzYWdlXzIgfX08L3N0cm9uZ1xyXG4gICAgICAgID57eyBtZXNzYWdlXzMgfX08Yj4ge3sgbWVzc2FnZV80IH19PC9iPlxyXG4gICAgPC9wPlxyXG4gICAgPHVsIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMzBweFwiPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAge3sgbWVzc2FnZV81IH19IDxiPnt7IG1lc3NhZ2VfNiB9fTwvYj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAge3sgbWVzc2FnZV83IH19IDxiPnt7IG1lc3NhZ2VfOCB9fTwvYj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGI+e3sgbWVzc2FnZV85IH19PC9iPiB7eyBtZXNzYWdlXzEwIH19XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIHt7IG1lc3NhZ2VfMTEgfX0gPGI+e3sgcHN3UnVsZXNTeW1ib2wgfX08L2I+XHJcbiAgICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbCBbdGV4dF09XCJwbGFjZUhvbGRlcl8xXCIgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3IgJyA6ICdib3JkZXItYm90dG9tJ1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBrZW5kb1RleHRCb3hcclxuICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwibmV3cHdkXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5ld3B3ZFwiXHJcbiAgICAgICAgICAgIFt0eXBlXT1cImhpZGVuZXdwd2QgPyAncGFzc3dvcmQnIDogJ3RleHQnXCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2Vycm9yLXN0YXR1cycgOiAnbm9ybWFsLXN0YXRlJ1wiXHJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVuZXdwd2QgPSAhaGlkZW5ld3B3ZFwiICpuZ0lmPVwiaGlkZW5ld3B3ZCA9PT0gdHJ1ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5IDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZW5ld3B3ZCA9ICFoaWRlbmV3cHdkXCIgKm5nSWY9XCJoaWRlbmV3cHdkID09PSBmYWxzZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5X29mZiA8L3NwYW4+XHJcbiAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcblxyXG4gICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgW3RleHRdPVwicGxhY2VIb2xkZXJfMlwiIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yICcgOiAnYm9yZGVyLWJvdHRvbSdcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAga2VuZG9UZXh0Qm94XHJcbiAgICAgICAgICAgIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIlxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm5ld3B3ZDJcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmV3cHdkMlwiXHJcbiAgICAgICAgICAgIFt0eXBlXT1cImhpZGVuZXdwd2QyID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiXHJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIlxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlbmV3cHdkMiA9ICFoaWRlbmV3cHdkMlwiICpuZ0lmPVwiaGlkZW5ld3B3ZDIgPT09IHRydWVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eSA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVuZXdwd2QyID0gIWhpZGVuZXdwd2QyXCIgKm5nSWY9XCJoaWRlbmV3cHdkMiA9PT0gZmFsc2VcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eV9vZmYgPC9zcGFuPlxyXG4gICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1pbmZvc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXBzLWxvY2sgcGFuZWwgZmxleC1jZW50ZXIgbWFyZ2luLWJvdHRvbS01XCIgKm5nSWY9XCJjYXBzTG9ja09uXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYmxvY01haXVzYyB9fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZXJyb3IgcGFuZWwgZmxleC1jZW50ZXIgbWFyZ2luLWJvdHRvbS01XCIgKm5nSWY9XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyBhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDAgMXB4OyBtYXJnaW4tdG9wOiAzMHB4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZW5kb0J1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b25zIG9rLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY29uZmlybSgpXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld3B3ZCA9PT0gdGhpcy5uZXdwd2QyICYmIHRoaXMubmV3cHdkMiAhPT0gJycgJiYgdGhpcy5uZXdwd2QyICE9PSB1bmRlZmluZWQgJiYgbG9hZGluZyA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiay1pY29uIGstaS1sb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhbG9hZGluZ1wiPnt7IGNoYW5nZUJ1dHRvbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBiYWNrLWJ1dHRvblwiIChjbGljayk9XCJjYW5jZWwoKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgYnV0dG9uQ2FuY2VsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19