import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChangePasswordInfo } from '../../models/login-request';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../auth.service";
import * as i3 from "@progress/kendo-angular-label";
import * as i4 from "@angular/common";
import * as i5 from "@progress/kendo-angular-inputs";
import * as i6 from "@angular/forms";
function ChangePasswordDialogComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_29_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.hidenewpwd = !ctx_r8.hidenewpwd; });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_30_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.hidenewpwd = !ctx_r10.hidenewpwd; });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_33_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.hidenewpwd2 = !ctx_r12.hidenewpwd2; });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_34_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.hidenewpwd2 = !ctx_r14.hidenewpwd2; });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelementStart(1, "p", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.blocMaiusc);
} }
function ChangePasswordDialogComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "p", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
}
/** @nocollapse */ /** @nocollapse */ ChangePasswordDialogComponent.ɵfac = function ChangePasswordDialogComponent_Factory(t) { return new (t || ChangePasswordDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i2.TbAuthService)); };
/** @nocollapse */ /** @nocollapse */ ChangePasswordDialogComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ChangePasswordDialogComponent, selectors: [["app-change-password-dialog"]], decls: 47, vars: 33, consts: [[2, "max-width", "450px"], [1, "title"], [1, "description", 2, "margin-bottom", "10px"], [2, "margin-bottom", "30px"], [3, "text", "ngClass"], ["kendoTextBox", "", "name", "newpwd", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "keyup", "ngModelChange"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], ["kendoTextBox", "", "name", "newpwd2", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "keyup", "ngModelChange"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "disabled", "click"], ["class", "k-icon k-i-loading", 4, "ngIf"], [4, "ngIf"], [1, "login-footer"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"], [1, "material-icons", "icon", 3, "click"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5"], [1, "k-icon", "k-i-loading"]], template: function ChangePasswordDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h1", 1);
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
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "ul", 3);
        i0.ɵɵelementStart(11, "li");
        i0.ɵɵtext(12);
        i0.ɵɵelementStart(13, "b");
        i0.ɵɵtext(14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "li");
        i0.ɵɵtext(16);
        i0.ɵɵelementStart(17, "b");
        i0.ɵɵtext(18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "li");
        i0.ɵɵelementStart(20, "b");
        i0.ɵɵtext(21);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "li");
        i0.ɵɵtext(24);
        i0.ɵɵelementStart(25, "b");
        i0.ɵɵtext(26);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "kendo-floatinglabel", 4);
        i0.ɵɵelementStart(28, "input", 5);
        i0.ɵɵlistener("keyup", function ChangePasswordDialogComponent_Template_input_keyup_28_listener($event) { return ctx.keyUpFunction($event); })("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_28_listener($event) { return ctx.newpwd = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(29, ChangePasswordDialogComponent_span_29_Template, 2, 0, "span", 6);
        i0.ɵɵtemplate(30, ChangePasswordDialogComponent_span_30_Template, 2, 0, "span", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "kendo-floatinglabel", 4);
        i0.ɵɵelementStart(32, "input", 7);
        i0.ɵɵlistener("keyup", function ChangePasswordDialogComponent_Template_input_keyup_32_listener($event) { return ctx.keyUpFunction($event); })("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_32_listener($event) { return ctx.newpwd2 = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(33, ChangePasswordDialogComponent_span_33_Template, 2, 0, "span", 6);
        i0.ɵɵtemplate(34, ChangePasswordDialogComponent_span_34_Template, 2, 0, "span", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "div", 8);
        i0.ɵɵtemplate(36, ChangePasswordDialogComponent_div_36_Template, 3, 1, "div", 9);
        i0.ɵɵtemplate(37, ChangePasswordDialogComponent_div_37_Template, 3, 1, "div", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "div", 11);
        i0.ɵɵelementStart(39, "div", 12);
        i0.ɵɵelementStart(40, "button", 13);
        i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_40_listener() { return ctx.confirm(); });
        i0.ɵɵtemplate(41, ChangePasswordDialogComponent_span_41_Template, 1, 0, "span", 14);
        i0.ɵɵtemplate(42, ChangePasswordDialogComponent_span_42_Template, 2, 1, "span", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "div", 16);
        i0.ɵɵelementStart(44, "button", 17);
        i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_44_listener() { return ctx.cancel(); });
        i0.ɵɵelementStart(45, "span");
        i0.ɵɵtext(46);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
    } }, directives: [i3.FloatingLabelComponent, i4.NgClass, i5.TextBoxDirective, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i4.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-change-password-dialog', template: "<div style=\"max-width: 450px\">\r\n    <h1 class=\"title\">{{ title }}</h1>\r\n    <p class=\"description\" style=\"margin-bottom: 10px\">\r\n        {{ message_1 }}<strong> {{ message_2 }}</strong\r\n        >{{ message_3 }}<b> {{ message_4 }}</b>\r\n    </p>\r\n    <ul style=\"margin-bottom: 30px\">\r\n        <li>\r\n            {{ message_5 }} <b>{{ message_6 }}</b>\r\n        </li>\r\n        <li>\r\n            {{ message_7 }} <b>{{ message_8 }}</b>\r\n        </li>\r\n        <li>\r\n            <b>{{ message_9 }}</b> {{ message_10 }}\r\n        </li>\r\n        <li>\r\n            {{ message_11 }} <b>{{ pswRulesSymbol }}</b>\r\n        </li>\r\n    </ul>\r\n    <kendo-floatinglabel [text]=\"placeHolder_1\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error ' : 'border-bottom'\">\r\n        <input\r\n            kendoTextBox\r\n            (keyup)=\"keyUpFunction($event)\"\r\n            [(ngModel)]=\"newpwd\"\r\n            name=\"newpwd\"\r\n            [type]=\"hidenewpwd ? 'password' : 'text'\"\r\n            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n            autocomplete=\"current-password\"\r\n        />\r\n        <span (click)=\"hidenewpwd = !hidenewpwd\" *ngIf=\"hidenewpwd === true\" class=\"material-icons icon\"> visibility </span>\r\n        <span (click)=\"hidenewpwd = !hidenewpwd\" *ngIf=\"hidenewpwd === false\" class=\"material-icons icon\"> visibility_off </span>\r\n    </kendo-floatinglabel>\r\n\r\n    <kendo-floatinglabel [text]=\"placeHolder_2\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error ' : 'border-bottom'\">\r\n        <input\r\n            kendoTextBox\r\n            (keyup)=\"keyUpFunction($event)\"\r\n            [(ngModel)]=\"newpwd2\"\r\n            name=\"newpwd2\"\r\n            [type]=\"hidenewpwd2 ? 'password' : 'text'\"\r\n            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n            autocomplete=\"current-password\"\r\n        />\r\n        <span (click)=\"hidenewpwd2 = !hidenewpwd2\" *ngIf=\"hidenewpwd2 === true\" class=\"material-icons icon\"> visibility </span>\r\n        <span (click)=\"hidenewpwd2 = !hidenewpwd2\" *ngIf=\"hidenewpwd2 === false\" class=\"material-icons icon\"> visibility_off </span>\r\n    </kendo-floatinglabel>\r\n\r\n    <div class=\"login-infos\">\r\n        <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\r\n            <p class=\"no-margin\">{{ blocMaiusc }}</p>\r\n        </div>\r\n        <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"authService.errorMessage\">\r\n            <p class=\"no-margin\">{{ authService.errorMessage }}</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 30px\">\r\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n            <button\r\n                kendoButton\r\n                class=\"buttons ok-button\"\r\n                (click)=\"confirm()\"\r\n                [disabled]=\"\r\n                    this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined && loading === false ? false : true\r\n                \"\r\n            >\r\n                <span class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\r\n                <span *ngIf=\"!loading\">{{ changeButton }}</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\r\n                <span>{{ buttonCancel }}</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [""] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i2.TbAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7SUMyQnRFLGdDQUFpRztJQUEzRixvTkFBa0M7SUFBMEQsNEJBQVc7SUFBQSxpQkFBTzs7OztJQUNwSCxnQ0FBa0c7SUFBNUYsd05BQWtDO0lBQTJELGdDQUFlO0lBQUEsaUJBQU87Ozs7SUFhekgsZ0NBQW9HO0lBQTlGLDBOQUFvQztJQUEyRCw0QkFBVztJQUFBLGlCQUFPOzs7O0lBQ3ZILGdDQUFxRztJQUEvRiwwTkFBb0M7SUFBNEQsZ0NBQWU7SUFBQSxpQkFBTzs7O0lBSTVILCtCQUE0RTtJQUN4RSw2QkFBcUI7SUFBQSxZQUFnQjtJQUFBLGlCQUFJO0lBQzdDLGlCQUFNOzs7SUFEbUIsZUFBZ0I7SUFBaEIsdUNBQWdCOzs7SUFFekMsK0JBQTRGO0lBQ3hGLDZCQUFxQjtJQUFBLFlBQThCO0lBQUEsaUJBQUk7SUFDM0QsaUJBQU07OztJQURtQixlQUE4QjtJQUE5QixxREFBOEI7OztJQWMvQywyQkFBd0Q7OztJQUN4RCw0QkFBdUI7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QUEwQjtRQUduRCxlQUFzQjtRQUF0Qix3Q0FBc0Isb0ZBQUE7UUFJbkMsZUFBcUI7UUFBckIscUNBQXFCLCtDQUFBLDJFQUFBO1FBTW1CLGVBQTBCO1FBQTFCLCtDQUEwQjtRQUMxQixlQUEyQjtRQUEzQixnREFBMkI7UUFJYixlQUFnQjtRQUFoQixxQ0FBZ0I7UUFHZCxlQUE4QjtRQUE5QixtREFBOEI7UUFXbEYsZUFFQztRQUZELGdKQUVDO1FBRWlDLGVBQWE7UUFBYixrQ0FBYTtRQUN4QyxlQUFjO1FBQWQsbUNBQWM7UUFLZixlQUFrQjtRQUFsQixzQ0FBa0I7O3VGRC9EM0IsNkJBQTZCO2NBTHpDLFNBQVM7MkJBQ0ksNEJBQTRCOztzQkFtQ2pDLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRJbmZvLCBMb2dpblJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNoYW5nZS1wYXNzd29yZC1kaWFsb2cnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZV8xOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZV8yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZV8zOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZV80OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZV81OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZV82OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZV83OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZV84OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZV85OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZV8xMDogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2VfMTE6IHN0cmluZztcclxuICAgIHB1YmxpYyBwc3dSdWxlc1N5bWJvbDogc3RyaW5nO1xyXG4gICAgcHVibGljIHBsYWNlSG9sZGVyXzE6IHN0cmluZztcclxuICAgIHB1YmxpYyBwbGFjZUhvbGRlcl8yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmV3cHdkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmV3cHdkMjogc3RyaW5nO1xyXG4gICAgcHVibGljIGJ1dHRvbkNhbmNlbDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNoYW5nZUJ1dHRvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBibG9jTWFpdXNjOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3Q7XHJcbiAgICBwdWJsaWMgcmVzZXRQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNhcHNMb2NrT24gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBoaWRlbmV3cHdkID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBoaWRlbmV3cHdkMiA9IHRydWU7XHJcbiAgICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50PixcclxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnksXHJcbiAgICAgICAgcHVibGljIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gZGF0YS5UaXRsZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VfMSA9IGRhdGEuTWVzc2FnZV8xO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZV8yID0gZGF0YS5NZXNzYWdlXzI7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXzMgPSBkYXRhLk1lc3NhZ2VfMztcclxuICAgICAgICB0aGlzLm1lc3NhZ2VfNCA9IGRhdGEuTWVzc2FnZV80O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZV81ID0gZGF0YS5NZXNzYWdlXzU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXzYgPSBkYXRhLk1lc3NhZ2VfNjtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VfNyA9IGRhdGEuTWVzc2FnZV83O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZV84ID0gZGF0YS5NZXNzYWdlXzg7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXzkgPSBkYXRhLk1lc3NhZ2VfOTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VfMTAgPSBkYXRhLk1lc3NhZ2VfMTA7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXzExID0gZGF0YS5NZXNzYWdlXzExO1xyXG4gICAgICAgIHRoaXMucHN3UnVsZXNTeW1ib2wgPSBkYXRhLk1lc3NhZ2VfMTI7XHJcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlcl8xID0gZGF0YS5QbGFjZUhvbGRlcl8xO1xyXG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXJfMiA9IGRhdGEuUGxhY2VIb2xkZXJfMjtcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdCA9IGRhdGEuTG9naW5SZXF1ZXN0O1xyXG4gICAgICAgIHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IGRhdGEuQ3VycmVudEJyb3dzZXJMYW5ndWFnZTtcclxuICAgICAgICB0aGlzLnJlc2V0UGFzc3dvcmQgPSB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZDtcclxuICAgICAgICB0aGlzLm5ld3B3ZCA9IHRoaXMubmV3cHdkMiA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQU5OVUxMQSc7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uID0gJ0NBTUJJQSc7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY01haXVzYyA9ICdCbG9jY28gbWFpdXNjb2xlIGF0dGl2byc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQ0FOQ0VMJztcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VCdXR0b24gPSAnQ0hBTkdFJztcclxuICAgICAgICAgICAgdGhpcy5ibG9jTWFpdXNjID0gJ0NhcHMgbG9jayBvbic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge31cclxuICAgIHB1YmxpYyBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9ICcnO1xyXG4gICAgICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY29uZmlybSgpIHtcclxuICAgICAgICBjb25zdCBjcGk6IENoYW5nZVBhc3N3b3JkSW5mbyA9IG5ldyBDaGFuZ2VQYXNzd29yZEluZm8oKTtcclxuICAgICAgICBjcGkuQWNjb3VudE5hbWUgPSB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZTtcclxuICAgICAgICBjcGkuSWdub3JlT2xkUGFzc3dvcmQgPSBmYWxzZTtcclxuICAgICAgICBjcGkuSldUVG9rZW4gPSB0aGlzLmxvZ2luUmVxdWVzdC50b2tlbjtcclxuICAgICAgICBjcGkuTmV3UGFzc3dvcmQgPSB0aGlzLm5ld3B3ZDtcclxuICAgICAgICBjcGkuUGFzc3dvcmQgPSB0aGlzLnJlc2V0UGFzc3dvcmQ7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gdGhpcy5uZXdwd2Q7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNoYW5nZVBhc3N3b3JkKGNwaSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5SZXN1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICdQYXNzd29yZCBtb2RpZmljYXRhIGNvbiBzdWNjZXNzbyEnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNmdWxseSEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAga2V5VXBGdW5jdGlvbihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmV3cHdkID09PSB0aGlzLm5ld3B3ZDIgJiYgdGhpcy5uZXdwd2QyICE9PSAnJyAmJiB0aGlzLm5ld3B3ZDIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2Fwc09uID0gZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSAmJiBldmVudC5nZXRNb2RpZmllclN0YXRlKCdDYXBzTG9jaycpO1xyXG4gICAgICAgIHRoaXMuY2Fwc0xvY2tPbiA9IGNhcHNPbjtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA0NTBweFwiPlxyXG4gICAgPGgxIGNsYXNzPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvaDE+XHJcbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4XCI+XHJcbiAgICAgICAge3sgbWVzc2FnZV8xIH19PHN0cm9uZz4ge3sgbWVzc2FnZV8yIH19PC9zdHJvbmdcclxuICAgICAgICA+e3sgbWVzc2FnZV8zIH19PGI+IHt7IG1lc3NhZ2VfNCB9fTwvYj5cclxuICAgIDwvcD5cclxuICAgIDx1bCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDMwcHhcIj5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIHt7IG1lc3NhZ2VfNSB9fSA8Yj57eyBtZXNzYWdlXzYgfX08L2I+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIHt7IG1lc3NhZ2VfNyB9fSA8Yj57eyBtZXNzYWdlXzggfX08L2I+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxiPnt7IG1lc3NhZ2VfOSB9fTwvYj4ge3sgbWVzc2FnZV8xMCB9fVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICB7eyBtZXNzYWdlXzExIH19IDxiPnt7IHBzd1J1bGVzU3ltYm9sIH19PC9iPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgW3RleHRdPVwicGxhY2VIb2xkZXJfMVwiIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yICcgOiAnYm9yZGVyLWJvdHRvbSdcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAga2VuZG9UZXh0Qm94XHJcbiAgICAgICAgICAgIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIlxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm5ld3B3ZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuZXdwd2RcIlxyXG4gICAgICAgICAgICBbdHlwZV09XCJoaWRlbmV3cHdkID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiXHJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIlxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlbmV3cHdkID0gIWhpZGVuZXdwd2RcIiAqbmdJZj1cImhpZGVuZXdwd2QgPT09IHRydWVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eSA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVuZXdwd2QgPSAhaGlkZW5ld3B3ZFwiICpuZ0lmPVwiaGlkZW5ld3B3ZCA9PT0gZmFsc2VcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eV9vZmYgPC9zcGFuPlxyXG4gICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsIFt0ZXh0XT1cInBsYWNlSG9sZGVyXzJcIiBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvciAnIDogJ2JvcmRlci1ib3R0b20nXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGtlbmRvVGV4dEJveFxyXG4gICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJuZXdwd2QyXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5ld3B3ZDJcIlxyXG4gICAgICAgICAgICBbdHlwZV09XCJoaWRlbmV3cHdkMiA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnZXJyb3Itc3RhdHVzJyA6ICdub3JtYWwtc3RhdGUnXCJcclxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZW5ld3B3ZDIgPSAhaGlkZW5ld3B3ZDJcIiAqbmdJZj1cImhpZGVuZXdwd2QyID09PSB0cnVlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHkgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlbmV3cHdkMiA9ICFoaWRlbmV3cHdkMlwiICpuZ0lmPVwiaGlkZW5ld3B3ZDIgPT09IGZhbHNlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHlfb2ZmIDwvc3Bhbj5cclxuICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mb3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fwcy1sb2NrIHBhbmVsIGZsZXgtY2VudGVyIG1hcmdpbi1ib3R0b20tNVwiICpuZ0lmPVwiY2Fwc0xvY2tPblwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGJsb2NNYWl1c2MgfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWVycm9yIHBhbmVsIGZsZXgtY2VudGVyIG1hcmdpbi1ib3R0b20tNVwiICpuZ0lmPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwYWRkaW5nOiAwIDFweDsgbWFyZ2luLXRvcDogMzBweFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2VuZG9CdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9ucyBvay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNvbmZpcm0oKVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdwd2QgPT09IHRoaXMubmV3cHdkMiAmJiB0aGlzLm5ld3B3ZDIgIT09ICcnICYmIHRoaXMubmV3cHdkMiAhPT0gdW5kZWZpbmVkICYmIGxvYWRpbmcgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImstaWNvbiBrLWktbG9hZGluZ1wiICpuZ0lmPVwibG9hZGluZ1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWxvYWRpbmdcIj57eyBjaGFuZ2VCdXR0b24gfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBjbGFzcz1cImJ1dHRvbnMgYmFjay1idXR0b25cIiAoY2xpY2spPVwiY2FuY2VsKClcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGJ1dHRvbkNhbmNlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==