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
}
/** @nocollapse */ ChangePasswordDialogComponent.ɵfac = function ChangePasswordDialogComponent_Factory(t) { return new (t || ChangePasswordDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i2.TbAuthService)); };
/** @nocollapse */ ChangePasswordDialogComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ChangePasswordDialogComponent, selectors: [["app-change-password-dialog"]], decls: 47, vars: 33, consts: [[2, "max-width", "450px"], [1, "title"], [1, "description", 2, "margin-bottom", "10px"], [2, "margin-bottom", "30px"], [3, "text", "ngClass"], ["kendoTextBox", "", "name", "newpwd", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "keyup", "ngModelChange"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], ["kendoTextBox", "", "name", "newpwd2", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "keyup", "ngModelChange"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "disabled", "click"], ["class", "k-icon k-i-loading", 4, "ngIf"], [4, "ngIf"], [1, "login-footer"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"], [1, "material-icons", "icon", 3, "click"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5"], [1, "k-icon", "k-i-loading"]], template: function ChangePasswordDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(29, ChangePasswordDialogComponent_span_29_Template, 2, 0, "span", 6);
        i0.ɵɵtemplate(30, ChangePasswordDialogComponent_span_30_Template, 2, 0, "span", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "kendo-floatinglabel", 4)(32, "input", 7);
        i0.ɵɵlistener("keyup", function ChangePasswordDialogComponent_Template_input_keyup_32_listener($event) { return ctx.keyUpFunction($event); })("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_32_listener($event) { return ctx.newpwd2 = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(33, ChangePasswordDialogComponent_span_33_Template, 2, 0, "span", 6);
        i0.ɵɵtemplate(34, ChangePasswordDialogComponent_span_34_Template, 2, 0, "span", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "div", 8);
        i0.ɵɵtemplate(36, ChangePasswordDialogComponent_div_36_Template, 3, 1, "div", 9);
        i0.ɵɵtemplate(37, ChangePasswordDialogComponent_div_37_Template, 3, 1, "div", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "div", 11)(39, "div", 12)(40, "button", 13);
        i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_40_listener() { return ctx.confirm(); });
        i0.ɵɵtemplate(41, ChangePasswordDialogComponent_span_41_Template, 1, 0, "span", 14);
        i0.ɵɵtemplate(42, ChangePasswordDialogComponent_span_42_Template, 2, 1, "span", 15);
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
    } }, directives: [i3.FloatingLabelComponent, i4.NgClass, i5.TextBoxDirective, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i4.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-change-password-dialog', template: "<div style=\"max-width: 450px\">\n    <h1 class=\"title\">{{ title }}</h1>\n    <p class=\"description\" style=\"margin-bottom: 10px\">\n        {{ message_1 }}<strong> {{ message_2 }}</strong\n        >{{ message_3 }}<b> {{ message_4 }}</b>\n    </p>\n    <ul style=\"margin-bottom: 30px\">\n        <li>\n            {{ message_5 }} <b>{{ message_6 }}</b>\n        </li>\n        <li>\n            {{ message_7 }} <b>{{ message_8 }}</b>\n        </li>\n        <li>\n            <b>{{ message_9 }}</b> {{ message_10 }}\n        </li>\n        <li>\n            {{ message_11 }} <b>{{ pswRulesSymbol }}</b>\n        </li>\n    </ul>\n    <kendo-floatinglabel [text]=\"placeHolder_1\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error ' : 'border-bottom'\">\n        <input\n            kendoTextBox\n            (keyup)=\"keyUpFunction($event)\"\n            [(ngModel)]=\"newpwd\"\n            name=\"newpwd\"\n            [type]=\"hidenewpwd ? 'password' : 'text'\"\n            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n            autocomplete=\"current-password\"\n        />\n        <span (click)=\"hidenewpwd = !hidenewpwd\" *ngIf=\"hidenewpwd === true\" class=\"material-icons icon\"> visibility </span>\n        <span (click)=\"hidenewpwd = !hidenewpwd\" *ngIf=\"hidenewpwd === false\" class=\"material-icons icon\"> visibility_off </span>\n    </kendo-floatinglabel>\n\n    <kendo-floatinglabel [text]=\"placeHolder_2\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error ' : 'border-bottom'\">\n        <input\n            kendoTextBox\n            (keyup)=\"keyUpFunction($event)\"\n            [(ngModel)]=\"newpwd2\"\n            name=\"newpwd2\"\n            [type]=\"hidenewpwd2 ? 'password' : 'text'\"\n            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n            autocomplete=\"current-password\"\n        />\n        <span (click)=\"hidenewpwd2 = !hidenewpwd2\" *ngIf=\"hidenewpwd2 === true\" class=\"material-icons icon\"> visibility </span>\n        <span (click)=\"hidenewpwd2 = !hidenewpwd2\" *ngIf=\"hidenewpwd2 === false\" class=\"material-icons icon\"> visibility_off </span>\n    </kendo-floatinglabel>\n\n    <div class=\"login-infos\">\n        <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\n            <p class=\"no-margin\">{{ blocMaiusc }}</p>\n        </div>\n        <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"authService.errorMessage\">\n            <p class=\"no-margin\">{{ authService.errorMessage }}</p>\n        </div>\n    </div>\n\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 30px\">\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n            <button\n                kendoButton\n                class=\"buttons ok-button\"\n                (click)=\"confirm()\"\n                [disabled]=\"\n                    this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined && loading === false ? false : true\n                \"\n            >\n                <span class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\n                <span *ngIf=\"!loading\">{{ changeButton }}</span>\n            </button>\n        </div>\n        <div class=\"login-footer\">\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\n                <span>{{ buttonCancel }}</span>\n            </button>\n        </div>\n    </div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i2.TbAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7SUMyQnRFLGdDQUFpRztJQUEzRixvTkFBa0M7SUFBMEQsNEJBQVc7SUFBQSxpQkFBTzs7OztJQUNwSCxnQ0FBa0c7SUFBNUYsd05BQWtDO0lBQTJELGdDQUFlO0lBQUEsaUJBQU87Ozs7SUFhekgsZ0NBQW9HO0lBQTlGLDBOQUFvQztJQUEyRCw0QkFBVztJQUFBLGlCQUFPOzs7O0lBQ3ZILGdDQUFxRztJQUEvRiwwTkFBb0M7SUFBNEQsZ0NBQWU7SUFBQSxpQkFBTzs7O0lBSTVILCtCQUE0RSxZQUFBO0lBQ25ELFlBQWdCO0lBQUEsaUJBQUksRUFBQTs7O0lBQXBCLGVBQWdCO0lBQWhCLHVDQUFnQjs7O0lBRXpDLCtCQUE0RixZQUFBO0lBQ25FLFlBQThCO0lBQUEsaUJBQUksRUFBQTs7O0lBQWxDLGVBQThCO0lBQTlCLHFEQUE4Qjs7O0lBYy9DLDJCQUF3RDs7O0lBQ3hELDRCQUF1QjtJQUFBLFlBQWtCO0lBQUEsaUJBQU87OztJQUF6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LHFDQUFnQjtRQUdkLGVBQThCO1FBQTlCLG1EQUE4QjtRQVdsRixlQUVDO1FBRkQsZ0pBRUM7UUFFaUMsZUFBYTtRQUFiLGtDQUFhO1FBQ3hDLGVBQWM7UUFBZCxtQ0FBYztRQUtmLGVBQWtCO1FBQWxCLHNDQUFrQjs7dUZEL0QzQiw2QkFBNkI7Y0FMekMsU0FBUzsyQkFDSSw0QkFBNEI7O3NCQW1DakMsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZEluZm8sIExvZ2luUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY2hhbmdlLXBhc3N3b3JkLWRpYWxvZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBtZXNzYWdlXzE6IHN0cmluZztcbiAgICBwdWJsaWMgbWVzc2FnZV8yOiBzdHJpbmc7XG4gICAgcHVibGljIG1lc3NhZ2VfMzogc3RyaW5nO1xuICAgIHB1YmxpYyBtZXNzYWdlXzQ6IHN0cmluZztcbiAgICBwdWJsaWMgbWVzc2FnZV81OiBzdHJpbmc7XG4gICAgcHVibGljIG1lc3NhZ2VfNjogc3RyaW5nO1xuICAgIHB1YmxpYyBtZXNzYWdlXzc6IHN0cmluZztcbiAgICBwdWJsaWMgbWVzc2FnZV84OiBzdHJpbmc7XG4gICAgcHVibGljIG1lc3NhZ2VfOTogc3RyaW5nO1xuICAgIHB1YmxpYyBtZXNzYWdlXzEwOiBzdHJpbmc7XG4gICAgcHVibGljIG1lc3NhZ2VfMTE6IHN0cmluZztcbiAgICBwdWJsaWMgcHN3UnVsZXNTeW1ib2w6IHN0cmluZztcbiAgICBwdWJsaWMgcGxhY2VIb2xkZXJfMTogc3RyaW5nO1xuICAgIHB1YmxpYyBwbGFjZUhvbGRlcl8yOiBzdHJpbmc7XG4gICAgcHVibGljIG5ld3B3ZDogc3RyaW5nO1xuICAgIHB1YmxpYyBuZXdwd2QyOiBzdHJpbmc7XG4gICAgcHVibGljIGJ1dHRvbkNhbmNlbDogc3RyaW5nO1xuICAgIHB1YmxpYyBjaGFuZ2VCdXR0b246IHN0cmluZztcbiAgICBwdWJsaWMgY3VycmVudEJyb3dzZXJMYW5ndWFnZTogc3RyaW5nO1xuICAgIHB1YmxpYyBibG9jTWFpdXNjOiBzdHJpbmc7XG4gICAgcHVibGljIGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0O1xuICAgIHB1YmxpYyByZXNldFBhc3N3b3JkOiBzdHJpbmc7XG4gICAgcHVibGljIGNhcHNMb2NrT24gPSBmYWxzZTtcbiAgICBwdWJsaWMgaGlkZW5ld3B3ZCA9IHRydWU7XG4gICAgcHVibGljIGhpZGVuZXdwd2QyID0gdHJ1ZTtcbiAgICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50PixcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxuICAgICAgICBwdWJsaWMgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEuVGl0bGU7XG4gICAgICAgIHRoaXMubWVzc2FnZV8xID0gZGF0YS5NZXNzYWdlXzE7XG4gICAgICAgIHRoaXMubWVzc2FnZV8yID0gZGF0YS5NZXNzYWdlXzI7XG4gICAgICAgIHRoaXMubWVzc2FnZV8zID0gZGF0YS5NZXNzYWdlXzM7XG4gICAgICAgIHRoaXMubWVzc2FnZV80ID0gZGF0YS5NZXNzYWdlXzQ7XG4gICAgICAgIHRoaXMubWVzc2FnZV81ID0gZGF0YS5NZXNzYWdlXzU7XG4gICAgICAgIHRoaXMubWVzc2FnZV82ID0gZGF0YS5NZXNzYWdlXzY7XG4gICAgICAgIHRoaXMubWVzc2FnZV83ID0gZGF0YS5NZXNzYWdlXzc7XG4gICAgICAgIHRoaXMubWVzc2FnZV84ID0gZGF0YS5NZXNzYWdlXzg7XG4gICAgICAgIHRoaXMubWVzc2FnZV85ID0gZGF0YS5NZXNzYWdlXzk7XG4gICAgICAgIHRoaXMubWVzc2FnZV8xMCA9IGRhdGEuTWVzc2FnZV8xMDtcbiAgICAgICAgdGhpcy5tZXNzYWdlXzExID0gZGF0YS5NZXNzYWdlXzExO1xuICAgICAgICB0aGlzLnBzd1J1bGVzU3ltYm9sID0gZGF0YS5NZXNzYWdlXzEyO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyXzEgPSBkYXRhLlBsYWNlSG9sZGVyXzE7XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXJfMiA9IGRhdGEuUGxhY2VIb2xkZXJfMjtcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QgPSBkYXRhLkxvZ2luUmVxdWVzdDtcbiAgICAgICAgdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gZGF0YS5DdXJyZW50QnJvd3Nlckxhbmd1YWdlO1xuICAgICAgICB0aGlzLnJlc2V0UGFzc3dvcmQgPSB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZDtcbiAgICAgICAgdGhpcy5uZXdwd2QgPSB0aGlzLm5ld3B3ZDIgPSAnJztcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgY29uc3QgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdBTk5VTExBJztcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uID0gJ0NBTUJJQSc7XG4gICAgICAgICAgICB0aGlzLmJsb2NNYWl1c2MgPSAnQmxvY2NvIG1haXVzY29sZSBhdHRpdm8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQ0FOQ0VMJztcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uID0gJ0NIQU5HRSc7XG4gICAgICAgICAgICB0aGlzLmJsb2NNYWl1c2MgPSAnQ2FwcyBsb2NrIG9uJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge31cbiAgICBwdWJsaWMgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9ICcnO1xuICAgICAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbmZpcm0oKSB7XG4gICAgICAgIGNvbnN0IGNwaTogQ2hhbmdlUGFzc3dvcmRJbmZvID0gbmV3IENoYW5nZVBhc3N3b3JkSW5mbygpO1xuICAgICAgICBjcGkuQWNjb3VudE5hbWUgPSB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZTtcbiAgICAgICAgY3BpLklnbm9yZU9sZFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgIGNwaS5KV1RUb2tlbiA9IHRoaXMubG9naW5SZXF1ZXN0LnRva2VuO1xuICAgICAgICBjcGkuTmV3UGFzc3dvcmQgPSB0aGlzLm5ld3B3ZDtcbiAgICAgICAgY3BpLlBhc3N3b3JkID0gdGhpcy5yZXNldFBhc3N3b3JkO1xuXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gdGhpcy5uZXdwd2Q7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuY2hhbmdlUGFzc3dvcmQoY3BpKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnUGFzc3dvcmQgbW9kaWZpY2F0YSBjb24gc3VjY2Vzc28hJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNmdWxseSEnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGtleVVwRnVuY3Rpb24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgaWYgKHRoaXMubmV3cHdkID09PSB0aGlzLm5ld3B3ZDIgJiYgdGhpcy5uZXdwd2QyICE9PSAnJyAmJiB0aGlzLm5ld3B3ZDIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhcHNPbiA9IGV2ZW50LmdldE1vZGlmaWVyU3RhdGUgJiYgZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSgnQ2Fwc0xvY2snKTtcbiAgICAgICAgdGhpcy5jYXBzTG9ja09uID0gY2Fwc09uO1xuICAgIH1cbn1cbiIsIjxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDQ1MHB4XCI+XG4gICAgPGgxIGNsYXNzPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvaDE+XG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweFwiPlxuICAgICAgICB7eyBtZXNzYWdlXzEgfX08c3Ryb25nPiB7eyBtZXNzYWdlXzIgfX08L3N0cm9uZ1xuICAgICAgICA+e3sgbWVzc2FnZV8zIH19PGI+IHt7IG1lc3NhZ2VfNCB9fTwvYj5cbiAgICA8L3A+XG4gICAgPHVsIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMzBweFwiPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICB7eyBtZXNzYWdlXzUgfX0gPGI+e3sgbWVzc2FnZV82IH19PC9iPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICB7eyBtZXNzYWdlXzcgfX0gPGI+e3sgbWVzc2FnZV84IH19PC9iPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8Yj57eyBtZXNzYWdlXzkgfX08L2I+IHt7IG1lc3NhZ2VfMTAgfX1cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAge3sgbWVzc2FnZV8xMSB9fSA8Yj57eyBwc3dSdWxlc1N5bWJvbCB9fTwvYj5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsIFt0ZXh0XT1cInBsYWNlSG9sZGVyXzFcIiBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvciAnIDogJ2JvcmRlci1ib3R0b20nXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAga2VuZG9UZXh0Qm94XG4gICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwibmV3cHdkXCJcbiAgICAgICAgICAgIG5hbWU9XCJuZXdwd2RcIlxuICAgICAgICAgICAgW3R5cGVdPVwiaGlkZW5ld3B3ZCA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2Vycm9yLXN0YXR1cycgOiAnbm9ybWFsLXN0YXRlJ1wiXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVuZXdwd2QgPSAhaGlkZW5ld3B3ZFwiICpuZ0lmPVwiaGlkZW5ld3B3ZCA9PT0gdHJ1ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5IDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVuZXdwd2QgPSAhaGlkZW5ld3B3ZFwiICpuZ0lmPVwiaGlkZW5ld3B3ZCA9PT0gZmFsc2VcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eV9vZmYgPC9zcGFuPlxuICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cblxuICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsIFt0ZXh0XT1cInBsYWNlSG9sZGVyXzJcIiBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvciAnIDogJ2JvcmRlci1ib3R0b20nXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAga2VuZG9UZXh0Qm94XG4gICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwibmV3cHdkMlwiXG4gICAgICAgICAgICBuYW1lPVwibmV3cHdkMlwiXG4gICAgICAgICAgICBbdHlwZV09XCJoaWRlbmV3cHdkMiA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2Vycm9yLXN0YXR1cycgOiAnbm9ybWFsLXN0YXRlJ1wiXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVuZXdwd2QyID0gIWhpZGVuZXdwd2QyXCIgKm5nSWY9XCJoaWRlbmV3cHdkMiA9PT0gdHJ1ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5IDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVuZXdwd2QyID0gIWhpZGVuZXdwd2QyXCIgKm5nSWY9XCJoaWRlbmV3cHdkMiA9PT0gZmFsc2VcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eV9vZmYgPC9zcGFuPlxuICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cblxuICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1pbmZvc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fwcy1sb2NrIHBhbmVsIGZsZXgtY2VudGVyIG1hcmdpbi1ib3R0b20tNVwiICpuZ0lmPVwiY2Fwc0xvY2tPblwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyBibG9jTWFpdXNjIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWVycm9yIHBhbmVsIGZsZXgtY2VudGVyIG1hcmdpbi1ib3R0b20tNVwiICpuZ0lmPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDAgMXB4OyBtYXJnaW4tdG9wOiAzMHB4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZW5kb0J1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9ucyBvay1idXR0b25cIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjb25maXJtKClcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdwd2QgPT09IHRoaXMubmV3cHdkMiAmJiB0aGlzLm5ld3B3ZDIgIT09ICcnICYmIHRoaXMubmV3cHdkMiAhPT0gdW5kZWZpbmVkICYmIGxvYWRpbmcgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImstaWNvbiBrLWktbG9hZGluZ1wiICpuZ0lmPVwibG9hZGluZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFsb2FkaW5nXCI+e3sgY2hhbmdlQnV0dG9uIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBiYWNrLWJ1dHRvblwiIChjbGljayk9XCJjYW5jZWwoKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGJ1dHRvbkNhbmNlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19