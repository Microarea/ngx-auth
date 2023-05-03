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
function ChangePasswordDialogComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_7_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.hidenewpwd = !ctx_r6.hidenewpwd; });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_8_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.hidenewpwd = !ctx_r8.hidenewpwd; });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_11_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.hidenewpwd2 = !ctx_r10.hidenewpwd2; });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵlistener("click", function ChangePasswordDialogComponent_span_12_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.hidenewpwd2 = !ctx_r12.hidenewpwd2; });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordDialogComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "p", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.blocMaiusc);
} }
function ChangePasswordDialogComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "p", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.authService.errorMessage);
} }
export class ChangePasswordDialogComponent {
    constructor(mdDialogRef, data, authService) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.authService = authService;
        this.capsLockOn = false;
        this.hidenewpwd = true;
        this.hidenewpwd2 = true;
        this.title = data.Title;
        this.message = data.Message;
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
        const result = await this.authService.changePassword(cpi).catch((err) => {
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
/** @nocollapse */ /** @nocollapse */ ChangePasswordDialogComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ChangePasswordDialogComponent, selectors: [["app-change-password-dialog"]], decls: 25, vars: 21, consts: [[2, "max-width", "450px"], [1, "title"], [1, "description"], [3, "text", "ngClass"], ["kendoTextBox", "", "name", "newpwd", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "keyup", "ngModelChange"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], ["kendoTextBox", "", "name", "newpwd2", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "keyup", "ngModelChange"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "disabled", "click"], [1, "login-footer"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"], [1, "material-icons", "icon", 3, "click"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5"]], template: function ChangePasswordDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", 2);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "kendo-floatinglabel", 3)(6, "input", 4);
        i0.ɵɵlistener("keyup", function ChangePasswordDialogComponent_Template_input_keyup_6_listener($event) { return ctx.keyUpFunction($event); })("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.newpwd = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, ChangePasswordDialogComponent_span_7_Template, 2, 0, "span", 5);
        i0.ɵɵtemplate(8, ChangePasswordDialogComponent_span_8_Template, 2, 0, "span", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "kendo-floatinglabel", 3)(10, "input", 6);
        i0.ɵɵlistener("keyup", function ChangePasswordDialogComponent_Template_input_keyup_10_listener($event) { return ctx.keyUpFunction($event); })("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_10_listener($event) { return ctx.newpwd2 = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, ChangePasswordDialogComponent_span_11_Template, 2, 0, "span", 5);
        i0.ɵɵtemplate(12, ChangePasswordDialogComponent_span_12_Template, 2, 0, "span", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 7);
        i0.ɵɵtemplate(14, ChangePasswordDialogComponent_div_14_Template, 3, 1, "div", 8);
        i0.ɵɵtemplate(15, ChangePasswordDialogComponent_div_15_Template, 3, 1, "div", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 10)(17, "div", 11)(18, "button", 12);
        i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_18_listener() { return ctx.confirm(); });
        i0.ɵɵelementStart(19, "span");
        i0.ɵɵtext(20);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(21, "div", 13)(22, "button", 14);
        i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_22_listener() { return ctx.cancel(); });
        i0.ɵɵelementStart(23, "span");
        i0.ɵɵtext(24);
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.message);
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
        i0.ɵɵproperty("disabled", ctx.newpwd === ctx.newpwd2 && ctx.newpwd2 !== "" && ctx.newpwd2 !== undefined ? false : true);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.changeButton);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.buttonCancel);
    } }, directives: [i3.FloatingLabelComponent, i4.NgClass, i5.TextBoxDirective, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i4.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-change-password-dialog', template: "<div style=\"max-width: 450px\">\r\n    <h1 class=\"title\">{{ title }}</h1>\r\n    <p class=\"description\">{{ message }}</p>\r\n\r\n    <kendo-floatinglabel [text]=\"placeHolder_1\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error ' : 'border-bottom'\">\r\n        <input\r\n            kendoTextBox\r\n            (keyup)=\"keyUpFunction($event)\"\r\n            [(ngModel)]=\"newpwd\"\r\n            name=\"newpwd\"\r\n            [type]=\"hidenewpwd ? 'password' : 'text'\"\r\n            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n            autocomplete=\"current-password\"\r\n        />\r\n        <span (click)=\"hidenewpwd = !hidenewpwd\" *ngIf=\"hidenewpwd === true\" class=\"material-icons icon\"> visibility </span>\r\n        <span (click)=\"hidenewpwd = !hidenewpwd\" *ngIf=\"hidenewpwd === false\" class=\"material-icons icon\"> visibility_off </span>\r\n    </kendo-floatinglabel>\r\n\r\n    <kendo-floatinglabel [text]=\"placeHolder_2\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error ' : 'border-bottom'\">\r\n        <input\r\n            kendoTextBox\r\n            (keyup)=\"keyUpFunction($event)\"\r\n            [(ngModel)]=\"newpwd2\"\r\n            name=\"newpwd2\"\r\n            [type]=\"hidenewpwd2 ? 'password' : 'text'\"\r\n            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n            autocomplete=\"current-password\"\r\n        />\r\n        <span (click)=\"hidenewpwd2 = !hidenewpwd2\" *ngIf=\"hidenewpwd2 === true\" class=\"material-icons icon\"> visibility </span>\r\n        <span (click)=\"hidenewpwd2 = !hidenewpwd2\" *ngIf=\"hidenewpwd2 === false\" class=\"material-icons icon\"> visibility_off </span>\r\n    </kendo-floatinglabel>\r\n\r\n    <div class=\"login-infos\">\r\n        <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\r\n            <p class=\"no-margin\">{{ blocMaiusc }}</p>\r\n        </div>\r\n        <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"authService.errorMessage\">\r\n            <p class=\"no-margin\">{{ authService.errorMessage }}</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 30px\">\r\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n            <button\r\n                kendoButton\r\n                class=\"buttons ok-button\"\r\n                (click)=\"confirm()\"\r\n                [disabled]=\"this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined ? false : true\"\r\n            >\r\n                <span>{{ changeButton }}</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\r\n                <span>{{ buttonCancel }}</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [""] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i2.TbAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7SUNXdEUsZ0NBQWlHO0lBQTNGLG1OQUFrQztJQUEwRCw0QkFBVztJQUFBLGlCQUFPOzs7O0lBQ3BILGdDQUFrRztJQUE1RixtTkFBa0M7SUFBMkQsZ0NBQWU7SUFBQSxpQkFBTzs7OztJQWF6SCxnQ0FBb0c7SUFBOUYsME5BQW9DO0lBQTJELDRCQUFXO0lBQUEsaUJBQU87Ozs7SUFDdkgsZ0NBQXFHO0lBQS9GLDBOQUFvQztJQUE0RCxnQ0FBZTtJQUFBLGlCQUFPOzs7SUFJNUgsK0JBQTRFLFlBQUE7SUFDbkQsWUFBZ0I7SUFBQSxpQkFBSSxFQUFBOzs7SUFBcEIsZUFBZ0I7SUFBaEIsdUNBQWdCOzs7SUFFekMsK0JBQTRGLFlBQUE7SUFDbkUsWUFBOEI7SUFBQSxpQkFBSSxFQUFBOzs7SUFBbEMsZUFBOEI7SUFBOUIscURBQThCOztBRDNCL0QsTUFBTSxPQUFPLDZCQUE2QjtJQWlCdEMsWUFDVyxXQUF3RCxFQUM5QixJQUFTLEVBQ25D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a0I7UUFBQSxpQkFBTyxFQUFBLEVBQUE7UUFHdkMsZ0NBQTBCLGtCQUFBO1FBQzBCLDJHQUFTLFlBQVEsSUFBQztRQUM5RCw2QkFBTTtRQUFBLGFBQWtCO1FBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUFyRHpCLGVBQVc7UUFBWCwrQkFBVztRQUNOLGVBQWE7UUFBYixpQ0FBYTtRQUVmLGVBQXNCO1FBQXRCLHdDQUFzQixvRkFBQTtRQUluQyxlQUFvQjtRQUFwQixvQ0FBb0IsOENBQUEsMkVBQUE7UUFNa0IsZUFBeUI7UUFBekIsOENBQXlCO1FBQ3pCLGVBQTBCO1FBQTFCLCtDQUEwQjtRQUduRCxlQUFzQjtRQUF0Qix3Q0FBc0Isb0ZBQUE7UUFJbkMsZUFBcUI7UUFBckIscUNBQXFCLCtDQUFBLDJFQUFBO1FBTW1CLGVBQTBCO1FBQTFCLCtDQUEwQjtRQUMxQixlQUEyQjtRQUEzQixnREFBMkI7UUFJYixlQUFnQjtRQUFoQixxQ0FBZ0I7UUFHZCxlQUE4QjtRQUE5QixtREFBOEI7UUFXbEYsZUFBNkc7UUFBN0csdUhBQTZHO1FBRXZHLGVBQWtCO1FBQWxCLHNDQUFrQjtRQUtsQixlQUFrQjtRQUFsQixzQ0FBa0I7O3VGRDVDM0IsNkJBQTZCO2NBTHpDLFNBQVM7MkJBQ0ksNEJBQTRCOztzQkF1QmpDLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRJbmZvLCBMb2dpblJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNoYW5nZS1wYXNzd29yZC1kaWFsb2cnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBsYWNlSG9sZGVyXzE6IHN0cmluZztcclxuICAgIHB1YmxpYyBwbGFjZUhvbGRlcl8yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmV3cHdkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmV3cHdkMjogc3RyaW5nO1xyXG4gICAgcHVibGljIGJ1dHRvbkNhbmNlbDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNoYW5nZUJ1dHRvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBibG9jTWFpdXNjOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3Q7XHJcbiAgICBwdWJsaWMgcmVzZXRQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNhcHNMb2NrT24gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBoaWRlbmV3cHdkID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBoaWRlbmV3cHdkMiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQ+LFxyXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcclxuICAgICAgICBwdWJsaWMgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBkYXRhLlRpdGxlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyXzEgPSBkYXRhLlBsYWNlSG9sZGVyXzE7XHJcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlcl8yID0gZGF0YS5QbGFjZUhvbGRlcl8yO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0ID0gZGF0YS5Mb2dpblJlcXVlc3Q7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gZGF0YS5DdXJyZW50QnJvd3Nlckxhbmd1YWdlO1xyXG4gICAgICAgIHRoaXMucmVzZXRQYXNzd29yZCA9IHRoaXMubG9naW5SZXF1ZXN0LnBhc3N3b3JkO1xyXG4gICAgICAgIHRoaXMubmV3cHdkID0gdGhpcy5uZXdwd2QyID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICBjb25zdCBjdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdBTk5VTExBJztcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VCdXR0b24gPSAnQ0FNQklBJztcclxuICAgICAgICAgICAgdGhpcy5ibG9jTWFpdXNjID0gJ0Jsb2NjbyBtYWl1c2NvbGUgYXR0aXZvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdDQU5DRUwnO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvbiA9ICdDSEFOR0UnO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NNYWl1c2MgPSAnQ2FwcyBsb2NrIG9uJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7fVxyXG4gICAgcHVibGljIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNvbmZpcm0oKSB7XHJcbiAgICAgICAgY29uc3QgY3BpOiBDaGFuZ2VQYXNzd29yZEluZm8gPSBuZXcgQ2hhbmdlUGFzc3dvcmRJbmZvKCk7XHJcbiAgICAgICAgY3BpLkFjY291bnROYW1lID0gdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWU7XHJcbiAgICAgICAgY3BpLklnbm9yZU9sZFBhc3N3b3JkID0gZmFsc2U7XHJcbiAgICAgICAgY3BpLkpXVFRva2VuID0gdGhpcy5sb2dpblJlcXVlc3QudG9rZW47XHJcbiAgICAgICAgY3BpLk5ld1Bhc3N3b3JkID0gdGhpcy5uZXdwd2Q7XHJcbiAgICAgICAgY3BpLlBhc3N3b3JkID0gdGhpcy5yZXNldFBhc3N3b3JkO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9IHRoaXMubmV3cHdkO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuY2hhbmdlUGFzc3dvcmQoY3BpKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnUGFzc3dvcmQgbW9kaWZpY2F0YSBjb24gc3VjY2Vzc28hJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ1Bhc3N3b3JkIGNoYW5nZWQgc3VjY2VzZnVsbHkhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleVVwRnVuY3Rpb24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld3B3ZCA9PT0gdGhpcy5uZXdwd2QyICYmIHRoaXMubmV3cHdkMiAhPT0gJycgJiYgdGhpcy5uZXdwd2QyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhcHNPbiA9IGV2ZW50LmdldE1vZGlmaWVyU3RhdGUgJiYgZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSgnQ2Fwc0xvY2snKTtcclxuICAgICAgICB0aGlzLmNhcHNMb2NrT24gPSBjYXBzT247XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBzdHlsZT1cIm1heC13aWR0aDogNDUwcHhcIj5cclxuICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2gxPlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IG1lc3NhZ2UgfX08L3A+XHJcblxyXG4gICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgW3RleHRdPVwicGxhY2VIb2xkZXJfMVwiIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yICcgOiAnYm9yZGVyLWJvdHRvbSdcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAga2VuZG9UZXh0Qm94XHJcbiAgICAgICAgICAgIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIlxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm5ld3B3ZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuZXdwd2RcIlxyXG4gICAgICAgICAgICBbdHlwZV09XCJoaWRlbmV3cHdkID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiXHJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIlxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlbmV3cHdkID0gIWhpZGVuZXdwd2RcIiAqbmdJZj1cImhpZGVuZXdwd2QgPT09IHRydWVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eSA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVuZXdwd2QgPSAhaGlkZW5ld3B3ZFwiICpuZ0lmPVwiaGlkZW5ld3B3ZCA9PT0gZmFsc2VcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eV9vZmYgPC9zcGFuPlxyXG4gICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsIFt0ZXh0XT1cInBsYWNlSG9sZGVyXzJcIiBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvciAnIDogJ2JvcmRlci1ib3R0b20nXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGtlbmRvVGV4dEJveFxyXG4gICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJuZXdwd2QyXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5ld3B3ZDJcIlxyXG4gICAgICAgICAgICBbdHlwZV09XCJoaWRlbmV3cHdkMiA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnZXJyb3Itc3RhdHVzJyA6ICdub3JtYWwtc3RhdGUnXCJcclxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZW5ld3B3ZDIgPSAhaGlkZW5ld3B3ZDJcIiAqbmdJZj1cImhpZGVuZXdwd2QyID09PSB0cnVlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHkgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlbmV3cHdkMiA9ICFoaWRlbmV3cHdkMlwiICpuZ0lmPVwiaGlkZW5ld3B3ZDIgPT09IGZhbHNlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHlfb2ZmIDwvc3Bhbj5cclxuICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mb3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fwcy1sb2NrIHBhbmVsIGZsZXgtY2VudGVyIG1hcmdpbi1ib3R0b20tNVwiICpuZ0lmPVwiY2Fwc0xvY2tPblwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGJsb2NNYWl1c2MgfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWVycm9yIHBhbmVsIGZsZXgtY2VudGVyIG1hcmdpbi1ib3R0b20tNVwiICpuZ0lmPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwYWRkaW5nOiAwIDFweDsgbWFyZ2luLXRvcDogMzBweFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2VuZG9CdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9ucyBvay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNvbmZpcm0oKVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwidGhpcy5uZXdwd2QgPT09IHRoaXMubmV3cHdkMiAmJiB0aGlzLm5ld3B3ZDIgIT09ICcnICYmIHRoaXMubmV3cHdkMiAhPT0gdW5kZWZpbmVkID8gZmFsc2UgOiB0cnVlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgY2hhbmdlQnV0dG9uIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gY2xhc3M9XCJidXR0b25zIGJhY2stYnV0dG9uXCIgKGNsaWNrKT1cImNhbmNlbCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBidXR0b25DYW5jZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=