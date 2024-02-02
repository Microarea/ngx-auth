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
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_29_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.hidenewpwd = !ctx_r8.hidenewpwd); });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_30_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.hidenewpwd = !ctx_r10.hidenewpwd); });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_33_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.hidenewpwd2 = !ctx_r12.hidenewpwd2); });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_34_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.hidenewpwd2 = !ctx_r14.hidenewpwd2); });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "p", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.blocMaiusc);
} }
function ChangePasswordDialogComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "p", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.authService.errorMessage);
} }
function ChangePasswordDialogComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 22);
} }
function ChangePasswordDialogComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r7.changeButton);
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
    /** @nocollapse */ static { this.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ChangePasswordDialogComponent, selectors: [["app-change-password-dialog"]], decls: 47, vars: 33, consts: [[2, "max-width", "450px"], [1, "title"], [1, "description", 2, "margin-bottom", "10px"], [2, "margin-bottom", "30px"], [3, "text", "ngClass"], ["kendoTextBox", "", "name", "newpwd", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "keyup", "ngModelChange"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], ["kendoTextBox", "", "name", "newpwd2", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "keyup", "ngModelChange"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "disabled", "click"], ["class", "k-icon k-i-loading", 4, "ngIf"], [4, "ngIf"], [1, "login-footer"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"], [1, "material-icons", "icon", 3, "click"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5"], [1, "k-icon", "k-i-loading"]], template: function ChangePasswordDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵlistener("keyup", function ChangePasswordDialogComponent_Template_input_keyup_28_listener($event) { return ctx.keyUpFunction($event); })("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_28_listener($event) { return ctx.newpwd = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(29, ChangePasswordDialogComponent_span_29_Template, 2, 0, "span", 6)(30, ChangePasswordDialogComponent_span_30_Template, 2, 0, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "kendo-floatinglabel", 4)(32, "input", 7);
            i0.ɵɵlistener("keyup", function ChangePasswordDialogComponent_Template_input_keyup_32_listener($event) { return ctx.keyUpFunction($event); })("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_32_listener($event) { return ctx.newpwd2 = $event; });
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
            i0.ɵɵadvance(1);
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
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.message_10, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.message_11, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.pswRulesSymbol);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("text", ctx.placeHolder_1)("ngClass", ctx.authService.errorMessage ? "border-bottom-error " : "border-bottom");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.newpwd)("type", ctx.hidenewpwd ? "password" : "text")("ngClass", ctx.authService.errorMessage ? "error-status" : "normal-state");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hidenewpwd === true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hidenewpwd === false);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("text", ctx.placeHolder_2)("ngClass", ctx.authService.errorMessage ? "border-bottom-error " : "border-bottom");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.newpwd2)("type", ctx.hidenewpwd2 ? "password" : "text")("ngClass", ctx.authService.errorMessage ? "error-status" : "normal-state");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hidenewpwd2 === true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hidenewpwd2 === false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.capsLockOn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.authService.errorMessage);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.newpwd === ctx.newpwd2 && ctx.newpwd2 !== "" && ctx.newpwd2 !== undefined && ctx.loading === false ? false : true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance(1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7SUMyQnRFLGdDQUFpRztJQUEzRixvT0FBa0M7SUFBMEQsNEJBQVc7SUFBQSxpQkFBTzs7OztJQUNwSCxnQ0FBa0c7SUFBNUYsd09BQWtDO0lBQTJELGdDQUFlO0lBQUEsaUJBQU87Ozs7SUFhekgsZ0NBQW9HO0lBQTlGLDBPQUFvQztJQUEyRCw0QkFBVztJQUFBLGlCQUFPOzs7O0lBQ3ZILGdDQUFxRztJQUEvRiwwT0FBb0M7SUFBNEQsZ0NBQWU7SUFBQSxpQkFBTzs7O0lBSTVILCtCQUE0RSxZQUFBO0lBQ25ELFlBQWdCO0lBQUEsaUJBQUksRUFBQTs7O0lBQXBCLGVBQWdCO0lBQWhCLHVDQUFnQjs7O0lBRXpDLCtCQUE0RixZQUFBO0lBQ25FLFlBQThCO0lBQUEsaUJBQUksRUFBQTs7O0lBQWxDLGVBQThCO0lBQTlCLHFEQUE4Qjs7O0lBYy9DLDJCQUF3RDs7O0lBQ3hELDRCQUF1QjtJQUFBLFlBQWtCO0lBQUEsaUJBQU87OztJQUF6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QUE4QjtZQVdsRixlQUVDO1lBRkQsZ0pBRUM7WUFFaUMsZUFBYTtZQUFiLGtDQUFhO1lBQ3hDLGVBQWM7WUFBZCxtQ0FBYztZQUtmLGVBQWtCO1lBQWxCLHNDQUFrQjs7O2lGRC9EM0IsNkJBQTZCO2NBTHpDLFNBQVM7MkJBQ0ksNEJBQTRCOztzQkFtQ2pDLE1BQU07dUJBQUMsZUFBZTs7a0ZBL0JsQiw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkSW5mbywgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2VfMTogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2VfMjogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2VfMzogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2VfNDogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2VfNTogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2VfNjogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2VfNzogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2VfODogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2VfOTogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2VfMTA6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlXzExOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHN3UnVsZXNTeW1ib2w6IHN0cmluZztcclxuICAgIHB1YmxpYyBwbGFjZUhvbGRlcl8xOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxhY2VIb2xkZXJfMjogc3RyaW5nO1xyXG4gICAgcHVibGljIG5ld3B3ZDogc3RyaW5nO1xyXG4gICAgcHVibGljIG5ld3B3ZDI6IHN0cmluZztcclxuICAgIHB1YmxpYyBidXR0b25DYW5jZWw6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaGFuZ2VCdXR0b246IHN0cmluZztcclxuICAgIHB1YmxpYyBjdXJyZW50QnJvd3Nlckxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYmxvY01haXVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0O1xyXG4gICAgcHVibGljIHJlc2V0UGFzc3dvcmQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjYXBzTG9ja09uID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaGlkZW5ld3B3ZCA9IHRydWU7XHJcbiAgICBwdWJsaWMgaGlkZW5ld3B3ZDIgPSB0cnVlO1xyXG4gICAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudD4sXHJcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxyXG4gICAgICAgIHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEuVGl0bGU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXzEgPSBkYXRhLk1lc3NhZ2VfMTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VfMiA9IGRhdGEuTWVzc2FnZV8yO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZV8zID0gZGF0YS5NZXNzYWdlXzM7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXzQgPSBkYXRhLk1lc3NhZ2VfNDtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VfNSA9IGRhdGEuTWVzc2FnZV81O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZV82ID0gZGF0YS5NZXNzYWdlXzY7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXzcgPSBkYXRhLk1lc3NhZ2VfNztcclxuICAgICAgICB0aGlzLm1lc3NhZ2VfOCA9IGRhdGEuTWVzc2FnZV84O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZV85ID0gZGF0YS5NZXNzYWdlXzk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXzEwID0gZGF0YS5NZXNzYWdlXzEwO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZV8xMSA9IGRhdGEuTWVzc2FnZV8xMTtcclxuICAgICAgICB0aGlzLnBzd1J1bGVzU3ltYm9sID0gZGF0YS5NZXNzYWdlXzEyO1xyXG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXJfMSA9IGRhdGEuUGxhY2VIb2xkZXJfMTtcclxuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyXzIgPSBkYXRhLlBsYWNlSG9sZGVyXzI7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QgPSBkYXRhLkxvZ2luUmVxdWVzdDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2UgPSBkYXRhLkN1cnJlbnRCcm93c2VyTGFuZ3VhZ2U7XHJcbiAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkID0gdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5uZXdwd2QgPSB0aGlzLm5ld3B3ZDIgPSAnJztcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gJ0FOTlVMTEEnO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvbiA9ICdDQU1CSUEnO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NNYWl1c2MgPSAnQmxvY2NvIG1haXVzY29sZSBhdHRpdm8nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gJ0NBTkNFTCc7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uID0gJ0NIQU5HRSc7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY01haXVzYyA9ICdDYXBzIGxvY2sgb24nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHt9XHJcbiAgICBwdWJsaWMgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgPSAnJztcclxuICAgICAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNvbmZpcm0oKSB7XHJcbiAgICAgICAgY29uc3QgY3BpOiBDaGFuZ2VQYXNzd29yZEluZm8gPSBuZXcgQ2hhbmdlUGFzc3dvcmRJbmZvKCk7XHJcbiAgICAgICAgY3BpLkFjY291bnROYW1lID0gdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWU7XHJcbiAgICAgICAgY3BpLklnbm9yZU9sZFBhc3N3b3JkID0gZmFsc2U7XHJcbiAgICAgICAgY3BpLkpXVFRva2VuID0gdGhpcy5sb2dpblJlcXVlc3QudG9rZW47XHJcbiAgICAgICAgY3BpLk5ld1Bhc3N3b3JkID0gdGhpcy5uZXdwd2Q7XHJcbiAgICAgICAgY3BpLlBhc3N3b3JkID0gdGhpcy5yZXNldFBhc3N3b3JkO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9IHRoaXMubmV3cHdkO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5jaGFuZ2VQYXNzd29yZChjcGkpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnUGFzc3dvcmQgbW9kaWZpY2F0YSBjb24gc3VjY2Vzc28hJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ1Bhc3N3b3JkIGNoYW5nZWQgc3VjY2VzZnVsbHkhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGtleVVwRnVuY3Rpb24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld3B3ZCA9PT0gdGhpcy5uZXdwd2QyICYmIHRoaXMubmV3cHdkMiAhPT0gJycgJiYgdGhpcy5uZXdwd2QyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhcHNPbiA9IGV2ZW50LmdldE1vZGlmaWVyU3RhdGUgJiYgZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSgnQ2Fwc0xvY2snKTtcclxuICAgICAgICB0aGlzLmNhcHNMb2NrT24gPSBjYXBzT247XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBzdHlsZT1cIm1heC13aWR0aDogNDUwcHhcIj5cclxuICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2gxPlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweFwiPlxyXG4gICAgICAgIHt7IG1lc3NhZ2VfMSB9fTxzdHJvbmc+IHt7IG1lc3NhZ2VfMiB9fTwvc3Ryb25nXHJcbiAgICAgICAgPnt7IG1lc3NhZ2VfMyB9fTxiPiB7eyBtZXNzYWdlXzQgfX08L2I+XHJcbiAgICA8L3A+XHJcbiAgICA8dWwgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAzMHB4XCI+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICB7eyBtZXNzYWdlXzUgfX0gPGI+e3sgbWVzc2FnZV82IH19PC9iPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICB7eyBtZXNzYWdlXzcgfX0gPGI+e3sgbWVzc2FnZV84IH19PC9iPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8Yj57eyBtZXNzYWdlXzkgfX08L2I+IHt7IG1lc3NhZ2VfMTAgfX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAge3sgbWVzc2FnZV8xMSB9fSA8Yj57eyBwc3dSdWxlc1N5bWJvbCB9fTwvYj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsIFt0ZXh0XT1cInBsYWNlSG9sZGVyXzFcIiBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvciAnIDogJ2JvcmRlci1ib3R0b20nXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGtlbmRvVGV4dEJveFxyXG4gICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJuZXdwd2RcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmV3cHdkXCJcclxuICAgICAgICAgICAgW3R5cGVdPVwiaGlkZW5ld3B3ZCA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnZXJyb3Itc3RhdHVzJyA6ICdub3JtYWwtc3RhdGUnXCJcclxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZW5ld3B3ZCA9ICFoaWRlbmV3cHdkXCIgKm5nSWY9XCJoaWRlbmV3cHdkID09PSB0cnVlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHkgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlbmV3cHdkID0gIWhpZGVuZXdwd2RcIiAqbmdJZj1cImhpZGVuZXdwd2QgPT09IGZhbHNlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHlfb2ZmIDwvc3Bhbj5cclxuICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cclxuXHJcbiAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbCBbdGV4dF09XCJwbGFjZUhvbGRlcl8yXCIgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3IgJyA6ICdib3JkZXItYm90dG9tJ1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBrZW5kb1RleHRCb3hcclxuICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwibmV3cHdkMlwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuZXdwd2QyXCJcclxuICAgICAgICAgICAgW3R5cGVdPVwiaGlkZW5ld3B3ZDIgPyAncGFzc3dvcmQnIDogJ3RleHQnXCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2Vycm9yLXN0YXR1cycgOiAnbm9ybWFsLXN0YXRlJ1wiXHJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVuZXdwd2QyID0gIWhpZGVuZXdwd2QyXCIgKm5nSWY9XCJoaWRlbmV3cHdkMiA9PT0gdHJ1ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5IDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZW5ld3B3ZDIgPSAhaGlkZW5ld3B3ZDJcIiAqbmdJZj1cImhpZGVuZXdwd2QyID09PSBmYWxzZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5X29mZiA8L3NwYW4+XHJcbiAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImxvZ2luLWluZm9zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcHMtbG9jayBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIiAqbmdJZj1cImNhcHNMb2NrT25cIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyBibG9jTWFpdXNjIH19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1lcnJvciBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIiAqbmdJZj1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSB9fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgcGFkZGluZzogMCAxcHg7IG1hcmdpbi10b3A6IDMwcHhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGtlbmRvQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbnMgb2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjb25maXJtKClcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3cHdkID09PSB0aGlzLm5ld3B3ZDIgJiYgdGhpcy5uZXdwd2QyICE9PSAnJyAmJiB0aGlzLm5ld3B3ZDIgIT09IHVuZGVmaW5lZCAmJiBsb2FkaW5nID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrLWljb24gay1pLWxvYWRpbmdcIiAqbmdJZj1cImxvYWRpbmdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFsb2FkaW5nXCI+e3sgY2hhbmdlQnV0dG9uIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gY2xhc3M9XCJidXR0b25zIGJhY2stYnV0dG9uXCIgKGNsaWNrKT1cImNhbmNlbCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBidXR0b25DYW5jZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=