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
    /** @nocollapse */ static { this.ɵfac = function ChangePasswordDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ChangePasswordDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i2.TbAuthService)); }; }
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
        args: [{ selector: 'app-change-password-dialog', template: "<div style=\"max-width: 450px\">\n    <h1 class=\"title\">{{ title }}</h1>\n    <p class=\"description\" style=\"margin-bottom: 10px\">\n        {{ message_1 }}<strong> {{ message_2 }}</strong\n        >{{ message_3 }}<b> {{ message_4 }}</b>\n    </p>\n    <ul style=\"margin-bottom: 30px\">\n        <li>\n            {{ message_5 }} <b>{{ message_6 }}</b>\n        </li>\n        <li>\n            {{ message_7 }} <b>{{ message_8 }}</b>\n        </li>\n        <li>\n            <b>{{ message_9 }}</b> {{ message_10 }}\n        </li>\n        <li>\n            {{ message_11 }} <b>{{ pswRulesSymbol }}</b>\n        </li>\n    </ul>\n    <kendo-floatinglabel [text]=\"placeHolder_1\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error ' : 'border-bottom'\">\n        <input\n            kendoTextBox\n            (keyup)=\"keyUpFunction($event)\"\n            [(ngModel)]=\"newpwd\"\n            name=\"newpwd\"\n            [type]=\"hidenewpwd ? 'password' : 'text'\"\n            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n            autocomplete=\"current-password\"\n        />\n        <span (click)=\"hidenewpwd = !hidenewpwd\" *ngIf=\"hidenewpwd === true\" class=\"material-icons icon\"> visibility </span>\n        <span (click)=\"hidenewpwd = !hidenewpwd\" *ngIf=\"hidenewpwd === false\" class=\"material-icons icon\"> visibility_off </span>\n    </kendo-floatinglabel>\n\n    <kendo-floatinglabel [text]=\"placeHolder_2\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error ' : 'border-bottom'\">\n        <input\n            kendoTextBox\n            (keyup)=\"keyUpFunction($event)\"\n            [(ngModel)]=\"newpwd2\"\n            name=\"newpwd2\"\n            [type]=\"hidenewpwd2 ? 'password' : 'text'\"\n            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n            autocomplete=\"current-password\"\n        />\n        <span (click)=\"hidenewpwd2 = !hidenewpwd2\" *ngIf=\"hidenewpwd2 === true\" class=\"material-icons icon\"> visibility </span>\n        <span (click)=\"hidenewpwd2 = !hidenewpwd2\" *ngIf=\"hidenewpwd2 === false\" class=\"material-icons icon\"> visibility_off </span>\n    </kendo-floatinglabel>\n\n    <div class=\"login-infos\">\n        <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\n            <p class=\"no-margin\">{{ blocMaiusc }}</p>\n        </div>\n        <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"authService.errorMessage\">\n            <p class=\"no-margin\">{{ authService.errorMessage }}</p>\n        </div>\n    </div>\n\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 30px\">\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n            <button\n                kendoButton\n                class=\"buttons ok-button\"\n                (click)=\"confirm()\"\n                [disabled]=\"\n                    this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined && loading === false ? false : true\n                \"\n            >\n                <span class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\n                <span *ngIf=\"!loading\">{{ changeButton }}</span>\n            </button>\n        </div>\n        <div class=\"login-footer\">\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\n                <span>{{ buttonCancel }}</span>\n            </button>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i2.TbAuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ChangePasswordDialogComponent, { className: "ChangePasswordDialogComponent", filePath: "lib\\pages\\change-password-dialog\\change-password-dialog.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7SUMyQnRFLGdDQUFpRztJQUEzRixvT0FBa0M7SUFBMEQsNEJBQVc7SUFBQSxpQkFBTzs7OztJQUNwSCxnQ0FBa0c7SUFBNUYsb09BQWtDO0lBQTJELGdDQUFlO0lBQUEsaUJBQU87Ozs7SUFhekgsZ0NBQW9HO0lBQTlGLHNPQUFvQztJQUEyRCw0QkFBVztJQUFBLGlCQUFPOzs7O0lBQ3ZILGdDQUFxRztJQUEvRixzT0FBb0M7SUFBNEQsZ0NBQWU7SUFBQSxpQkFBTzs7O0lBS3hILEFBREosK0JBQTRFLFlBQ25EO0lBQUEsWUFBZ0I7SUFDekMsQUFEeUMsaUJBQUksRUFDdkM7OztJQURtQixlQUFnQjtJQUFoQix1Q0FBZ0I7OztJQUdyQyxBQURKLCtCQUE0RixZQUNuRTtJQUFBLFlBQThCO0lBQ3ZELEFBRHVELGlCQUFJLEVBQ3JEOzs7SUFEbUIsZUFBOEI7SUFBOUIscURBQThCOzs7SUFjL0MsMkJBQXdEOzs7SUFDeEQsNEJBQXVCO0lB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LGNBQW9CO1lBQXBCLDBDQUFvQjtZQUdwQixBQURBLDJEQUF5QywyRUFDNkI7WUFHaEMsY0FBeUI7WUFBekIsOENBQXlCO1lBQ3pCLGNBQTBCO1lBQTFCLCtDQUEwQjtZQUduRCxjQUFzQjtZQUFDLEFBQXZCLHdDQUFzQixvRkFBZ0Y7WUFJbkgsY0FBcUI7WUFBckIsMkNBQXFCO1lBR3JCLEFBREEsNERBQTBDLDJFQUM0QjtZQUc5QixjQUEwQjtZQUExQiwrQ0FBMEI7WUFDMUIsY0FBMkI7WUFBM0IsZ0RBQTJCO1lBSWIsZUFBZ0I7WUFBaEIscUNBQWdCO1lBR2QsY0FBOEI7WUFBOUIsbURBQThCO1lBV2xGLGVBRUM7WUFGRCxnSkFFQztZQUVpQyxjQUFhO1lBQWIsa0NBQWE7WUFDeEMsY0FBYztZQUFkLG1DQUFjO1lBS2YsZUFBa0I7WUFBbEIsc0NBQWtCOzs7aUZEL0QzQiw2QkFBNkI7Y0FMekMsU0FBUzsyQkFDSSw0QkFBNEI7O3NCQW1DakMsTUFBTTt1QkFBQyxlQUFlOztrRkEvQmxCLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRJbmZvLCBMb2dpblJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWNoYW5nZS1wYXNzd29yZC1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgICBwdWJsaWMgbWVzc2FnZV8xOiBzdHJpbmc7XG4gICAgcHVibGljIG1lc3NhZ2VfMjogc3RyaW5nO1xuICAgIHB1YmxpYyBtZXNzYWdlXzM6IHN0cmluZztcbiAgICBwdWJsaWMgbWVzc2FnZV80OiBzdHJpbmc7XG4gICAgcHVibGljIG1lc3NhZ2VfNTogc3RyaW5nO1xuICAgIHB1YmxpYyBtZXNzYWdlXzY6IHN0cmluZztcbiAgICBwdWJsaWMgbWVzc2FnZV83OiBzdHJpbmc7XG4gICAgcHVibGljIG1lc3NhZ2VfODogc3RyaW5nO1xuICAgIHB1YmxpYyBtZXNzYWdlXzk6IHN0cmluZztcbiAgICBwdWJsaWMgbWVzc2FnZV8xMDogc3RyaW5nO1xuICAgIHB1YmxpYyBtZXNzYWdlXzExOiBzdHJpbmc7XG4gICAgcHVibGljIHBzd1J1bGVzU3ltYm9sOiBzdHJpbmc7XG4gICAgcHVibGljIHBsYWNlSG9sZGVyXzE6IHN0cmluZztcbiAgICBwdWJsaWMgcGxhY2VIb2xkZXJfMjogc3RyaW5nO1xuICAgIHB1YmxpYyBuZXdwd2Q6IHN0cmluZztcbiAgICBwdWJsaWMgbmV3cHdkMjogc3RyaW5nO1xuICAgIHB1YmxpYyBidXR0b25DYW5jZWw6IHN0cmluZztcbiAgICBwdWJsaWMgY2hhbmdlQnV0dG9uOiBzdHJpbmc7XG4gICAgcHVibGljIGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2U6IHN0cmluZztcbiAgICBwdWJsaWMgYmxvY01haXVzYzogc3RyaW5nO1xuICAgIHB1YmxpYyBsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdDtcbiAgICBwdWJsaWMgcmVzZXRQYXNzd29yZDogc3RyaW5nO1xuICAgIHB1YmxpYyBjYXBzTG9ja09uID0gZmFsc2U7XG4gICAgcHVibGljIGhpZGVuZXdwd2QgPSB0cnVlO1xuICAgIHB1YmxpYyBoaWRlbmV3cHdkMiA9IHRydWU7XG4gICAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudD4sXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcbiAgICAgICAgcHVibGljIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBkYXRhLlRpdGxlO1xuICAgICAgICB0aGlzLm1lc3NhZ2VfMSA9IGRhdGEuTWVzc2FnZV8xO1xuICAgICAgICB0aGlzLm1lc3NhZ2VfMiA9IGRhdGEuTWVzc2FnZV8yO1xuICAgICAgICB0aGlzLm1lc3NhZ2VfMyA9IGRhdGEuTWVzc2FnZV8zO1xuICAgICAgICB0aGlzLm1lc3NhZ2VfNCA9IGRhdGEuTWVzc2FnZV80O1xuICAgICAgICB0aGlzLm1lc3NhZ2VfNSA9IGRhdGEuTWVzc2FnZV81O1xuICAgICAgICB0aGlzLm1lc3NhZ2VfNiA9IGRhdGEuTWVzc2FnZV82O1xuICAgICAgICB0aGlzLm1lc3NhZ2VfNyA9IGRhdGEuTWVzc2FnZV83O1xuICAgICAgICB0aGlzLm1lc3NhZ2VfOCA9IGRhdGEuTWVzc2FnZV84O1xuICAgICAgICB0aGlzLm1lc3NhZ2VfOSA9IGRhdGEuTWVzc2FnZV85O1xuICAgICAgICB0aGlzLm1lc3NhZ2VfMTAgPSBkYXRhLk1lc3NhZ2VfMTA7XG4gICAgICAgIHRoaXMubWVzc2FnZV8xMSA9IGRhdGEuTWVzc2FnZV8xMTtcbiAgICAgICAgdGhpcy5wc3dSdWxlc1N5bWJvbCA9IGRhdGEuTWVzc2FnZV8xMjtcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlcl8xID0gZGF0YS5QbGFjZUhvbGRlcl8xO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyXzIgPSBkYXRhLlBsYWNlSG9sZGVyXzI7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0ID0gZGF0YS5Mb2dpblJlcXVlc3Q7XG4gICAgICAgIHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IGRhdGEuQ3VycmVudEJyb3dzZXJMYW5ndWFnZTtcbiAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkID0gdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQ7XG4gICAgICAgIHRoaXMubmV3cHdkID0gdGhpcy5uZXdwd2QyID0gJyc7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQU5OVUxMQSc7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvbiA9ICdDQU1CSUEnO1xuICAgICAgICAgICAgdGhpcy5ibG9jTWFpdXNjID0gJ0Jsb2NjbyBtYWl1c2NvbGUgYXR0aXZvJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gJ0NBTkNFTCc7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvbiA9ICdDSEFOR0UnO1xuICAgICAgICAgICAgdGhpcy5ibG9jTWFpdXNjID0gJ0NhcHMgbG9jayBvbic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHt9XG4gICAgcHVibGljIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgPSAnJztcbiAgICAgICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb25maXJtKCkge1xuICAgICAgICBjb25zdCBjcGk6IENoYW5nZVBhc3N3b3JkSW5mbyA9IG5ldyBDaGFuZ2VQYXNzd29yZEluZm8oKTtcbiAgICAgICAgY3BpLkFjY291bnROYW1lID0gdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWU7XG4gICAgICAgIGNwaS5JZ25vcmVPbGRQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICBjcGkuSldUVG9rZW4gPSB0aGlzLmxvZ2luUmVxdWVzdC50b2tlbjtcbiAgICAgICAgY3BpLk5ld1Bhc3N3b3JkID0gdGhpcy5uZXdwd2Q7XG4gICAgICAgIGNwaS5QYXNzd29yZCA9IHRoaXMucmVzZXRQYXNzd29yZDtcblxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9IHRoaXMubmV3cHdkO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNoYW5nZVBhc3N3b3JkKGNwaSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LlJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ1Bhc3N3b3JkIG1vZGlmaWNhdGEgY29uIHN1Y2Nlc3NvISc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ1Bhc3N3b3JkIGNoYW5nZWQgc3VjY2VzZnVsbHkhJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBrZXlVcEZ1bmN0aW9uKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld3B3ZCA9PT0gdGhpcy5uZXdwd2QyICYmIHRoaXMubmV3cHdkMiAhPT0gJycgJiYgdGhpcy5uZXdwd2QyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYXBzT24gPSBldmVudC5nZXRNb2RpZmllclN0YXRlICYmIGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoJ0NhcHNMb2NrJyk7XG4gICAgICAgIHRoaXMuY2Fwc0xvY2tPbiA9IGNhcHNPbjtcbiAgICB9XG59XG4iLCI8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA0NTBweFwiPlxuICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2gxPlxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHhcIj5cbiAgICAgICAge3sgbWVzc2FnZV8xIH19PHN0cm9uZz4ge3sgbWVzc2FnZV8yIH19PC9zdHJvbmdcbiAgICAgICAgPnt7IG1lc3NhZ2VfMyB9fTxiPiB7eyBtZXNzYWdlXzQgfX08L2I+XG4gICAgPC9wPlxuICAgIDx1bCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDMwcHhcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAge3sgbWVzc2FnZV81IH19IDxiPnt7IG1lc3NhZ2VfNiB9fTwvYj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAge3sgbWVzc2FnZV83IH19IDxiPnt7IG1lc3NhZ2VfOCB9fTwvYj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGI+e3sgbWVzc2FnZV85IH19PC9iPiB7eyBtZXNzYWdlXzEwIH19XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIHt7IG1lc3NhZ2VfMTEgfX0gPGI+e3sgcHN3UnVsZXNTeW1ib2wgfX08L2I+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbCBbdGV4dF09XCJwbGFjZUhvbGRlcl8xXCIgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3IgJyA6ICdib3JkZXItYm90dG9tJ1wiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGtlbmRvVGV4dEJveFxuICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm5ld3B3ZFwiXG4gICAgICAgICAgICBuYW1lPVwibmV3cHdkXCJcbiAgICAgICAgICAgIFt0eXBlXT1cImhpZGVuZXdwd2QgPyAncGFzc3dvcmQnIDogJ3RleHQnXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlbmV3cHdkID0gIWhpZGVuZXdwd2RcIiAqbmdJZj1cImhpZGVuZXdwd2QgPT09IHRydWVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eSA8L3NwYW4+XG4gICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlbmV3cHdkID0gIWhpZGVuZXdwd2RcIiAqbmdJZj1cImhpZGVuZXdwd2QgPT09IGZhbHNlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHlfb2ZmIDwvc3Bhbj5cbiAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XG5cbiAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbCBbdGV4dF09XCJwbGFjZUhvbGRlcl8yXCIgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3IgJyA6ICdib3JkZXItYm90dG9tJ1wiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGtlbmRvVGV4dEJveFxuICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm5ld3B3ZDJcIlxuICAgICAgICAgICAgbmFtZT1cIm5ld3B3ZDJcIlxuICAgICAgICAgICAgW3R5cGVdPVwiaGlkZW5ld3B3ZDIgPyAncGFzc3dvcmQnIDogJ3RleHQnXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlbmV3cHdkMiA9ICFoaWRlbmV3cHdkMlwiICpuZ0lmPVwiaGlkZW5ld3B3ZDIgPT09IHRydWVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eSA8L3NwYW4+XG4gICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlbmV3cHdkMiA9ICFoaWRlbmV3cHdkMlwiICpuZ0lmPVwiaGlkZW5ld3B3ZDIgPT09IGZhbHNlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHlfb2ZmIDwvc3Bhbj5cbiAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XG5cbiAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mb3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcHMtbG9jayBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIiAqbmdJZj1cImNhcHNMb2NrT25cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYmxvY01haXVzYyB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1lcnJvciBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIiAqbmdJZj1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyBhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwYWRkaW5nOiAwIDFweDsgbWFyZ2luLXRvcDogMzBweFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2VuZG9CdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbnMgb2stYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY29uZmlybSgpXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3cHdkID09PSB0aGlzLm5ld3B3ZDIgJiYgdGhpcy5uZXdwd2QyICE9PSAnJyAmJiB0aGlzLm5ld3B3ZDIgIT09IHVuZGVmaW5lZCAmJiBsb2FkaW5nID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrLWljb24gay1pLWxvYWRpbmdcIiAqbmdJZj1cImxvYWRpbmdcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhbG9hZGluZ1wiPnt7IGNoYW5nZUJ1dHRvbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBjbGFzcz1cImJ1dHRvbnMgYmFjay1idXR0b25cIiAoY2xpY2spPVwiY2FuY2VsKClcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBidXR0b25DYW5jZWwgfX08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==