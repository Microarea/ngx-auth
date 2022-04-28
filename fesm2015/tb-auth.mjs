import { __awaiter } from 'tslib';
import * as i0 from '@angular/core';
import { Component, Inject, EventEmitter, Injectable, ViewChild, NgModule } from '@angular/core';
import * as i1$1 from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as i2$1 from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import * as _ from 'lodash';
import { Subject, of } from 'rxjs';
import { timeout, map, tap, catchError } from 'rxjs/operators';
import * as i1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i4 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i4$1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i3$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateTime } from 'luxon';
import * as i6 from '@progress/kendo-angular-label';
import { LabelModule, FloatingLabelModule } from '@progress/kendo-angular-label';
import * as i7 from '@progress/kendo-angular-inputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import * as i8 from '@tb/icons';
import { TbIconsModule } from '@tb/icons';
import * as i9 from '@progress/kendo-angular-dropdowns';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class LoginRequest {
    constructor() {
        this.token = ''; // se presente, sto facendo una autologin
        this.appId = 'M4'; // identificativo dell'applicazione che sta effettuando la login (da tabellare)
        this.accountName = '';
        this.password = '';
    }
}
class ChangePasswordInfo {
    constructor() {
        this.AccountName = '';
        this.Password = '';
        this.NewPassword = '';
        this.IgnoreOldPassword = false;
        this.JWTToken = '';
    }
}
class OTPInfo {
    constructor() {
        this.AccountName = '';
        this.Password = '';
        this.Code = '';
    }
}

class LogoffRequest {
    constructor(token) {
        this.token = token;
    }
}

class StorageVars {
}
StorageVars.JWT = 'M4_jwt_token';
StorageVars.CULTURE = 'M4_culture';
StorageVars.UI_CULTURE = 'M4_ui_culture';
StorageVars.ACCOUNT_NAME = 'M4_account_name';
StorageVars.ACCOUNT_ROLES = 'M4_account_roles';
StorageVars.SUBSCRIPTION = 'M4_subscription';
StorageVars.SUBSCRIPTION_DESCRIPTION = 'M4_subscription_desc';
StorageVars.USER_GATEWAY_AUTOREDIRECT = 'lastLoggedRedirect';
StorageVars.INSTANCEKEY = 'M4_InstanceKey';
StorageVars.DONTSHOWUPDATEWARN = 'DontShowUpdateWarn';

// enum as [Flags] to set multiple status in MP_Subscriptions and MP_Instances
// --------------------------------------------------------------------------------------------------------
var EntityStatus;
(function (EntityStatus) {
    EntityStatus[EntityStatus["None"] = 0] = "None";
    // tslint:disable-next-line: no-bitwise
    EntityStatus[EntityStatus["DBUnderMaintenance"] = 1] = "DBUnderMaintenance";
    // tslint:disable-next-line: no-bitwise
    EntityStatus[EntityStatus["Disabled"] = 2] = "Disabled";
    // tslint:disable-next-line: no-bitwise
    EntityStatus[EntityStatus["PrivacyMode"] = 4] = "PrivacyMode";
    // tslint:disable-next-line: no-bitwise
    EntityStatus[EntityStatus["Canary"] = 8] = "Canary";
    // tslint:disable-next-line: no-bitwise
    EntityStatus[EntityStatus["UpdateScheduled"] = 16] = "UpdateScheduled"; // 16
})(EntityStatus || (EntityStatus = {}));
//[Flag] public enum EntityStatus //in provmodel
//	None = 0,
//	DBUnderMaintenance = 1,	// per propagare il valore di UnderMaintenance della SubDb sulla Subscription (quando operiamo dallo Store)
//	Disabled = 2,
//	PrivacyMode = 4,        // gestione NickName obbligatorio
//	Canary = 8,             //canary update in corso
//	UpdateScheduled = 32    //nel calendario è presente una data per questa sub

class IsValidTokenRequest {
    constructor(token = '') {
        this.token = token;
    }
}

class OperationResult {
    constructor() {
        this.Result = false;
        this.Message = '';
        this.Code = 0;
    }
}

function ChangePasswordDialogComponent_div_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 7);
        i0.ɵɵelement(1, "span", 8);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx_r0.error, " ");
    }
}
class ChangePasswordDialogComponent {
    constructor(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.error = '';
        this.title = data.Title;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.placeHolder2 = data.PlaceHolder2;
        this.newpwd = this.newpwd2 = '';
    }
    ngOnInit() { }
    cancel() {
        this.error = '';
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    }
    confirm() {
        this.error = '';
        if (this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined) {
            this.data.NewPwd = this.newpwd;
            this.mdDialogRef.close(this.data);
        }
        else {
            this.error = 'Passwords must be equal';
        }
    }
}
/** @nocollapse */ /** @nocollapse */ ChangePasswordDialogComponent.ɵfac = function ChangePasswordDialogComponent_Factory(t) { return new (t || ChangePasswordDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ /** @nocollapse */ ChangePasswordDialogComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ChangePasswordDialogComponent, selectors: [["app-change-password-dialog"]], decls: 15, vars: 7, consts: [[1, "app-dialog"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", "type", "password", 3, "placeholder", "ngModel", "ngModelChange"], ["class", "login-error", 4, "ngIf"], [1, "mt20"], ["mat-raised-button", "", 1, "left", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "right", 3, "click"], [1, "login-error"], [1, "k-icon", "k-i-warning"]], template: function ChangePasswordDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field", 1);
            i0.ɵɵelementStart(6, "input", 2);
            i0.ɵɵlistener("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.newpwd = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-form-field", 1);
            i0.ɵɵelementStart(8, "input", 2);
            i0.ɵɵlistener("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_8_listener($event) { return ctx.newpwd2 = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, ChangePasswordDialogComponent_div_9_Template, 3, 1, "div", 3);
            i0.ɵɵelementStart(10, "div", 4);
            i0.ɵɵelementStart(11, "button", 5);
            i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_11_listener() { return ctx.cancel(); });
            i0.ɵɵtext(12, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 6);
            i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_13_listener() { return ctx.confirm(); });
            i0.ɵɵtext(14, "OK");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("placeholder", ctx.placeHolder)("ngModel", ctx.newpwd);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("placeholder", ctx.placeHolder2)("ngModel", ctx.newpwd2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.error);
        }
    }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i4$1.NgIf], styles: [".right[_ngcontent-%COMP%]{float:right}.mt40[_ngcontent-%COMP%]{margin-top:40px}.mt20[_ngcontent-%COMP%]{margin-top:20px}.ml40[_ngcontent-%COMP%]{margin-left:40px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordDialogComponent, [{
            type: Component,
            args: [{ selector: 'app-change-password-dialog', template: "<div class=\"app-dialog\">\r\n    <h2>{{ title }}</h2>\r\n    <label>{{ message }}</label>\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder\" adminAutoFocus value=\"\" [(ngModel)]=\"newpwd\" type=\"password\" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder2\" adminAutoFocus value=\"\" [(ngModel)]=\"newpwd2\" type=\"password\" />\r\n    </mat-form-field>\r\n    <div class=\"login-error\" *ngIf=\"error\">\r\n        <span class=\"k-icon k-i-warning\"></span>{{ error }}\r\n    </div>\r\n    <div class=\"mt20\">\r\n        <button (click)=\"cancel()\" class=\"left\" mat-raised-button>Cancel</button>\r\n\r\n        <button (click)=\"confirm()\" class=\"right\" mat-raised-button color=\"primary\">OK</button>\r\n    </div>\r\n</div>", styles: [".right{float:right}.mt40{margin-top:40px}.mt20{margin-top:20px}.ml40{margin-left:40px}\n"] }]
        }], function () {
        return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }];
    }, null);
})();

function AlertDialogComponent_img_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "img", 10);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵpropertyInterpolate("src", ctx_r0.imagePath, i0.ɵɵsanitizeUrl);
    }
}
class AlertDialogComponent {
    constructor(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
        this.title = '';
        this.message = '';
        this.dontshow = '';
        this.subkey = '';
        this.imagePath = '';
        this.imageAlt = '';
        this.dontshowanymore = false;
    }
    ngOnInit() {
        this.title = this.data.Title;
        this.message = this.data.Message;
        this.dontshow = this.data.DontShow;
        this.subkey = this.data.SubKey;
        this.imagePath = this.data.ImagePath;
        this.imageAlt = this.data.ImageAlt;
    }
    showOptions(event) {
        if (this.dontshowanymore)
            // document.cookie =
            localStorage.setItem('DONTSHOWUPDATEWARN', this.message);
        else
            localStorage.removeItem('DONTSHOWUPDATEWARN');
    }
    closeDialog() {
        this.mdDialogRef.close();
    }
}
/** @nocollapse */ /** @nocollapse */ AlertDialogComponent.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
/** @nocollapse */ /** @nocollapse */ AlertDialogComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: AlertDialogComponent, selectors: [["app-alert-dialog"]], decls: 17, vars: 5, consts: [[2, "max-width", "400px"], [2, "padding", "20px 0px"], ["mat-card-image", "", "style", "width:50%", 3, "src", 4, "ngIf"], [2, "padding", "15px 0px"], [2, "padding", "10px 0px"], ["name", "dontshow", 3, "ngModel", "ngModelChange", "change"], ["translate", ""], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "10px 0px 0px 30px"], ["kendoButton", "", 2, "background", "#e77b2d", "padding", "4px 12px 4px 12px", "background", "#e77b2d", "color", "#fff", "font-size", "14px", "border-radius", "0px", "border-color", "rgba(0, 0, 0, 0)", 3, "click"], [2, "letter-spacing", "3px", "text-transform", "uppercase"], ["mat-card-image", "", 2, "width", "50%", 3, "src"]], template: function AlertDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, AlertDialogComponent_img_2_Template, 1, 1, "img", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "h2");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 3);
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 4);
            i0.ɵɵelementStart(10, "mat-checkbox", 5);
            i0.ɵɵlistener("ngModelChange", function AlertDialogComponent_Template_mat_checkbox_ngModelChange_10_listener($event) { return ctx.dontshowanymore = $event; })("change", function AlertDialogComponent_Template_mat_checkbox_change_10_listener($event) { return ctx.showOptions($event); });
            i0.ɵɵelementStart(11, "span", 6);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 7);
            i0.ɵɵelementStart(14, "button", 8);
            i0.ɵɵlistener("click", function AlertDialogComponent_Template_button_click_14_listener() { return ctx.closeDialog(); });
            i0.ɵɵelementStart(15, "span", 9);
            i0.ɵɵtext(16, "OK");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.imagePath !== "" && ctx.imagePath !== undefined);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.dontshowanymore);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.dontshow);
        }
    }, directives: [i4$1.NgIf, i3$1.MatCheckbox, i4.NgControlStatus, i4.NgModel], styles: [""] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertDialogComponent, [{
            type: Component,
            args: [{ selector: 'app-alert-dialog', template: "<div style=\"z-index: 1\" style=\" max-width:400px;\">\r\n\r\n    <div style=\"padding:20px 0px ;\">\r\n        <img *ngIf=\"imagePath !== '' && imagePath !== undefined\" mat-card-image style=\"width:50%\" src=\"{{ imagePath }}\" />\r\n    </div>\r\n    <div style=\"padding:20px 0px ;\">\r\n        <h2>{{ title }}</h2>\r\n        <div style=\"padding:15px 0px ;\">\r\n            <p>{{ message }}</p>\r\n        </div>\r\n    </div>\r\n    <div style=\"padding:10px 0px ;\">\r\n        <mat-checkbox [(ngModel)]=\"dontshowanymore\" name=\"dontshow\" (change)=\"showOptions($event)\">\r\n            <span translate>{{ dontshow }}</span>\r\n        </mat-checkbox>\r\n    </div>\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 10px 0px 0px 30px;\">\r\n        <button kendoButton (click)=\"closeDialog()\" style=\" background: #e77b2d;\r\n                    padding: 4px 12px 4px 12px;\r\n                    background: #e77b2d;\r\n                    color: #fff;\r\n                    font-size: 14px;\r\n                    border-radius: 0px;\r\n                    border-color: rgba(0, 0, 0, 0);\">\r\n            <span style=\"letter-spacing: 3px; text-transform: uppercase\">OK</span>\r\n        </button>\r\n\r\n\r\n    </div>\r\n</div>\r\n", styles: [""] }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1.MatDialogRef }];
    }, null);
})();

class OtpComponent {
    constructor(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.resendRequested = new EventEmitter();
        this.title = data.Title;
        this.accname = data.AccountName;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.inputValue = data.TextValue;
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
            this.buttonCancel = 'Annulla';
            this.resendOTPpLabel = 'Inviami un nuovo codice';
        }
        else {
            this.buttonCancel = 'Cancel';
            this.resendOTPpLabel = 'Send me a new code';
        }
    }
    ngOnInit() { }
    cancel() {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    }
    resendOTP() {
        return __awaiter(this, void 0, void 0, function* () {
            this.resendRequested.emit();
        });
    }
    closeDialog() {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    }
}
/** @nocollapse */ /** @nocollapse */ OtpComponent.ɵfac = function OtpComponent_Factory(t) { return new (t || OtpComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ /** @nocollapse */ OtpComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: OtpComponent, selectors: [["otp-dialog"]], decls: 19, vars: 6, consts: [[1, "app-dialog"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", "type", "password", 3, "placeholder", "ngModel", "ngModelChange"], [1, "mt20"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "10px 0px 0px 30px"], ["kendoButton", "", 2, "background", "#e77b2d", "padding", "4px 12px 4px 12px", "background", "#e77b2d", "color", "#fff", "font-size", "14px", "border-radius", "0px", "border-color", "rgba(0, 0, 0, 0)", 3, "click"], [2, "letter-spacing", "3px"], [2, "letter-spacing", "3px", "text-transform", "uppercase"], [2, "display", "flex", "margin-top", "40px", "justify-content", "flex-end"], [1, "link", 3, "click"]], template: function OtpComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field", 1);
            i0.ɵɵelementStart(6, "input", 2);
            i0.ɵɵlistener("ngModelChange", function OtpComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputValue = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵelementStart(9, "button", 5);
            i0.ɵɵlistener("click", function OtpComponent_Template_button_click_9_listener() { return ctx.cancel(); });
            i0.ɵɵelementStart(10, "span", 6);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 5);
            i0.ɵɵlistener("click", function OtpComponent_Template_button_click_12_listener() { return ctx.closeDialog(); });
            i0.ɵɵelementStart(13, "span", 7);
            i0.ɵɵtext(14, " OK ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 8);
            i0.ɵɵelementStart(16, "p", 9);
            i0.ɵɵlistener("click", function OtpComponent_Template_p_click_16_listener() { return ctx.resendOTP(); });
            i0.ɵɵelementStart(17, "u");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("placeholder", ctx.placeHolder)("ngModel", ctx.inputValue);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.buttonCancel);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.resendOTPpLabel);
        }
    }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [".right[_ngcontent-%COMP%]{float:right}.mt40[_ngcontent-%COMP%]{margin-top:40px}.mt20[_ngcontent-%COMP%]{margin-top:20px}.ml40[_ngcontent-%COMP%]{margin-left:40px}.link[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OtpComponent, [{
            type: Component,
            args: [{ selector: 'otp-dialog', template: "<div class=\"app-dialog\">\r\n    <h2>{{ title }}</h2>\r\n    <label>{{ message }}</label>\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder\" adminAutoFocus value=\"\" [(ngModel)]=\"inputValue\" type=\"password\" />\r\n    </mat-form-field>\r\n\r\n    <div class=\"mt20\">\r\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 10px 0px 0px 30px;\">\r\n            <button kendoButton (click)=\"cancel()\" style=\" background: #e77b2d;\r\n                    padding: 4px 12px 4px 12px;\r\n                    background: #e77b2d;\r\n                    color: #fff;\r\n                    font-size: 14px;\r\n                    border-radius: 0px;\r\n                    border-color: rgba(0, 0, 0, 0);\">\r\n            <span style=\"letter-spacing: 3px; \">{{ buttonCancel }}</span>\r\n            </button>\r\n            <button kendoButton (click)=\"closeDialog()\" style=\" background: #e77b2d;\r\n                    padding: 4px 12px 4px 12px;\r\n                    background: #e77b2d;\r\n                    color: #fff;\r\n                    font-size: 14px;\r\n                    border-radius: 0px;\r\n                    border-color: rgba(0, 0, 0, 0);\">\r\n            <span style=\"letter-spacing: 3px; text-transform: uppercase\"> OK </span>\r\n        </button>\r\n        </div>\r\n    </div>\r\n    <div style=\"display: flex; margin-top: 40px; justify-content: flex-end\">\r\n        <p class=\"link\" (click)=\"resendOTP()\">\r\n            <u>{{ resendOTPpLabel }}</u>\r\n        </p>\r\n    </div>\r\n</div>", styles: [".right{float:right}.mt40{margin-top:40px}.mt20{margin-top:20px}.ml40{margin-left:40px}.link{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}\n"] }]
        }], function () {
        return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }];
    }, null);
})();

let authServiceInstance;
const authService = () => authServiceInstance;
// ---------------------------------------------------------------------------
class TbAuthService {
    // ---------------------------------------------------------------------------
    constructor(env, http, injector, dialog) {
        this.http = http;
        this.injector = injector;
        this.dialog = dialog;
        this.loggedOut$ = new Subject();
        this.errorMessage = '';
        this.okMessage = '';
        this.callLoginAfterOTPRequest = false;
        this.reLoginAfterOTP = new EventEmitter();
        /**
         * Ritorna la base url del backend,
         * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
         */
        this.getBaseUrl = () => this.env.auth.url;
        this.getSnapshotServiceUrl = () => this.env.auth.snapshotServiceUrl;
        this.getLoginPageUrl = () => this.env.auth.loginPageUrl;
        this.getAuthServiceUrl = () => this.env.auth.url;
        this.getIupUrl = () => this.env.auth.iupurl;
        this.getRedirectUrl = () => this.env.auth.redirectUrl;
        this.getUserGatewayUrl = () => this.env.auth.userGatewayUrl;
        this.getCreateAccountUrl = () => this.env.auth.createAccountUrl;
        this.getChangePasswordUrl = () => this.env.auth.changePasswordUrl;
        this.hasSubscriptionSelection = () => this.env.auth.subscriptionSelection;
        this.showSignUp = () => this.env.auth.showSignUp;
        this.getAppId = () => this.env.auth.appId;
        this.isSessionStorage = () => this.env.auth.sessionStorage;
        this.getLogoURL = () => this.env.auth.logoURL;
        this.isRedirectExternal = () => this.env.auth.isRedirectExternal;
        this.getUpdateMessageIt = () => this.env.auth.updatemessageIt;
        this.getUpdateMessageEn = () => this.env.auth.updatemessageEn;
        authServiceInstance = this;
        this.env = _.defaultsDeep(env, TbAuthService.DEFAULT_ENV, env);
        console.log('TbAuthEnvironment', this.env);
        this.callLoginAfterOTPRequest = false;
    }
    get router() { return this.injector.get(Router); }
    // ---------------------------------------------------------------------------
    checkConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http
                .get(this.getBaseUrl())
                .pipe(timeout(5000), map((__) => true))
                .toPromise()
                .catch((__) => false);
        });
    }
    /*
  {
    type: JWT,
    appid: M4,
    securityValue: jwtEncoded
  }
  */
    // modifica per uniformare l header,o che arriva un po capitalizzato un po no. //rif: Ilaria e Luca
    // ---------------------------------------------------------------------------
    getAuthorizationHeader() {
        return JSON.stringify({
            type: 'JWT',
            appId: 'M4',
            securityValue: this.getToken(),
        });
    }
    // ---------------------------------------------------------------------------
    prelogin(loginRequest) {
        // console.log('authService.login - loginRequest', loginRequest);
        return this.http
            .post(this.getPreLoginUrl(), loginRequest)
            .pipe(map((loginResponse) => {
            if (!loginResponse.Result) {
                if (loginResponse.ResultCode === 19) {
                    // mi sposto su pagina per cambio password e nuovo tentativo di login
                    console.log('AuthService: Change Password Needed');
                    this.openChangePasswordDialog(loginRequest);
                }
                else if (loginResponse.ResultCode === 4) {
                    console.log('AuthService: Account confirmation Needed');
                    // mi sposto su pagina per attivare l'account che non ha ancora effettuato la procedura?
                }
                else if (loginResponse.ResultCode === 58) {
                    console.log('AuthService: Account Locked');
                    loginResponse.Message = this.getLockedUserMessage(loginResponse.Message);
                }
                else if (loginResponse.ResultCode === 143) {
                    console.log('AuthService: otp code needed');
                    this.openOTPDialog(loginRequest);
                }
                if (loginResponse.ResultCode === 143) {
                    this.errorMessage = ''; // non mostro errore rosso che sembra grave
                    //this.okMessage = loginResponse.Message;
                }
                else {
                    this.okMessage = '';
                    this.errorMessage = loginResponse.Message;
                }
                return loginResponse;
            }
            if (this.callLoginAfterOTPRequest)
                this.reLoginAfterOTP.emit();
            return loginResponse;
        }))
            .toPromise();
    }
    // ---------------------------------------------------------------------------
    login(loginRequest) {
        let redologin = false;
        // console.log('authService.login - loginRequest', loginRequest);
        const loginresponse = this.http
            .post(this.getLoginUrl(), loginRequest)
            .pipe(map((loginResponse) => {
            if (!loginResponse.Result) {
                if (loginResponse.ResultCode === 19) {
                    // mi sposto su pagina per cambio password e nuovo tentativo di login
                    console.log('AuthService: Change Password Needed');
                    this.openChangePasswordDialog(loginRequest);
                    redologin = true;
                }
                else if (loginResponse.ResultCode === 143) {
                    // mi sposto su pagina per richiesta otp
                    console.log('AuthService: otp code Needed');
                    this.openOTPDialog(loginRequest);
                    redologin = true;
                    // todo cose tipo mostrare una maschera che accetti il codice e lo rimandi indietro per il check
                }
                else if (loginResponse.ResultCode === 4) {
                    console.log('AuthService: Account confirmation Needed');
                    // mi sposto su pagina per attivare l'account che non ha ancora effettuato la procedura?
                    // o ammetto che la password sia  il codice? ma in relatà ogni sito lo fa in due step
                    // col click sull mail
                }
                else if (loginResponse.ResultCode === 58) {
                    console.log('AuthService: Account Locked' + loginResponse.Message);
                    loginResponse.Message = this.getLockedUserMessage(loginResponse.Message);
                }
                else {
                    this.clearStorage();
                    console.log('AuthService: Clearing storage due to Login failure, result code ', loginResponse.ResultCode);
                    console.log('LoginRequest by account' + loginRequest.accountName + ' token:' + loginRequest.token);
                }
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                console.log(loginResponse.Message);
                if (loginResponse.ResultCode === 143) {
                    this.errorMessage = ''; // non mostro errore rosso che sembra grave
                    // this.okMessage = loginResponse.Message;
                }
                else {
                    this.okMessage = '';
                    this.errorMessage = loginResponse.Message;
                }
                return loginResponse;
            }
            if (this.getName(loginResponse)) {
                this.storageData(loginResponse);
                return loginResponse;
            }
            else {
                console.log('AuthService: LogOff due to Account not allowed.');
                this.logoff();
                this.clearStorage();
                loginResponse.Message = 'Account not allowed.';
                loginResponse.JwtToken = '';
                loginResponse.ResultCode = 999;
                loginResponse.Result = false;
                return loginResponse;
            }
        }))
            .toPromise();
        if (redologin)
            return this.login(loginRequest);
        else
            return loginresponse;
    }
    // ---------------------------------------------------------------------------
    getLockedUserMessage(messageFromLogin) {
        if (!messageFromLogin)
            return messageFromLogin;
        const seconds = +messageFromLogin;
        let msg = messageFromLogin;
        if (isNaN(seconds))
            return msg;
        if (seconds < 60 && seconds > -1)
            msg = `Login Locked. Please try again in ${seconds} seconds...`;
        else if (seconds >= 60) {
            const minVal = Math.round(seconds / 60);
            msg = (minVal === 1) ?
                `Login Locked. Please try again in one minute...` :
                `Login Locked. Please try again in ${minVal} minutes...`;
        }
        return msg;
    }
    // ---------------------------------------------------------------------------
    openUpdateAlertDialog(info, title, dontshow, accountName, subscriptionKey) {
        return __awaiter(this, void 0, void 0, function* () {
            this.errorMessage = '';
            const dialogRef = this.dialog.open(AlertDialogComponent, {
                data: {
                    Title: title,
                    Message: info,
                    DontShow: dontshow,
                    SubKey: subscriptionKey,
                    ImagePath: this.getLogoURL()
                },
            });
            dialogRef.afterClosed().subscribe(() => {
                //  console.log('afterClosedAlert');
                this.okMessage = '';
                this.errorMessage = '';
                if (this.isRedirectExternal()) {
                    console.log('go external.');
                    this.getRedirectUrlForSubscription(accountName, subscriptionKey);
                    return;
                }
                console.log('go internal!');
                this.router.navigate([this.getRedirectUrl()]);
            });
        });
    }
    // ---------------------------------------------------------------------------
    openChangePasswordDialog(loginRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            this.errorMessage = '';
            const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
                data: {
                    Title: 'Change Password',
                    Message: 'Please choose a new password: ',
                    PlaceHolder2: 'Confirm Password',
                    NewPwd: ''
                },
            });
            dialogRef.afterClosed().subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                if (data === undefined)
                    return;
                if (data.NewPwd === undefined || data.NewPwd === '') {
                    alert('Write a valid AccountName');
                    return;
                }
                this.errorMessage = '';
                const cpi = new ChangePasswordInfo();
                cpi.AccountName = loginRequest.accountName;
                cpi.IgnoreOldPassword = false;
                cpi.JWTToken = loginRequest.token;
                cpi.NewPassword = data.NewPwd;
                cpi.Password = loginRequest.password;
                loginRequest.password = data.NewPwd;
                const result = yield this.changePassword(cpi).catch((err) => {
                    this.errorMessage = err.error && err.error.Message;
                    return;
                });
                // todo controlla come vengono mostrati errori
                if (result && result.Result) {
                    this.errorMessage = '';
                    this.okMessage = 'Password changed succesfully!';
                    // la login la fa  a mano altrimenti mi perdo
                }
                else {
                    // errore già indicato
                    loginRequest.token = '';
                    loginRequest.password = '';
                    loginRequest.subscriptionKey = '';
                    loginRequest.appId = '';
                }
            }));
        });
    }
    // ---------------------------------------------------------------------------
    openOTPDialog(loginRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            this.errorMessage = '';
            const dialogRef = this.dialog.open(OtpComponent, {
                data: {
                    Title: 'Login',
                    AccountName: loginRequest.accountName,
                    Message: 'Please insert the code: ',
                    PlaceHolder: 'Code',
                    TextValue: '',
                },
            });
            const sub = dialogRef.componentInstance.resendRequested.subscribe(() => {
                this.resendOTP(loginRequest.accountName);
            });
            dialogRef.afterClosed().subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                if (data === undefined)
                    return;
                if (data.TextValue === undefined || data.TextValue === '') {
                    alert('Write a valid Code');
                    return;
                }
                this.errorMessage = '';
                /*const cpi: OTPInfo = new OTPInfo();
                cpi.AccountName = loginRequest.accountName;
                cpi.Code = data.Code;
                cpi.Password = loginRequest.password;*/
                loginRequest.password = data.TextValue;
                this.callLoginAfterOTPRequest = true;
                this.prelogin(loginRequest);
            }));
        });
    }
    isValidToken(authtoken = '') {
        return __awaiter(this, void 0, void 0, function* () {
            if (!authtoken) {
                const opres = new OperationResult();
                opres.Message = 'No authtoken';
                return opres;
            }
            return this.http
                .post(this.getIsValidTokenUrl(), new IsValidTokenRequest(authtoken))
                .pipe(tap((jObj) => {
                // console.log('isValidToken - response', jObj);
                if (!jObj.Result) {
                    jObj.Message = jObj.Message ? jObj.Message : 'isValidToken error...';
                    console.log('AuthService: Clearing storage due to Token Validation failure');
                    console.log('token: ' + authtoken);
                    this.clearStorage();
                    this.errorMessage = jObj.Message;
                }
            }), catchError((error) => {
                console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
                const res = new OperationResult();
                res.Code = 666;
                if (!this.router.routerState.snapshot.url.includes(this.getLoginPageUrl()))
                    this.router.navigate([this.getLoginPageUrl()]);
                return of(res);
            }))
                .toPromise();
        });
    }
    getCompaniesForUser(user) {
        return this.http.get(this.getSubsKeysForAccountUrl() + user).pipe(map((res) => {
            if (!res || !res.Result)
                return [];
            return res.Content && res.Content.subscriptions ? res.Content.subscriptions : [];
        }));
    }
    getIsValidTokenUrl() {
        return this.getBaseUrl() + 'isvalidtoken/';
    }
    getLoginUrl() {
        return this.getBaseUrl() + 'login/';
    }
    getPreLoginUrl() {
        return this.getBaseUrl() + 'login/';
    }
    getLogoutUrl() {
        return this.getBaseUrl() + 'logoff/';
    }
    getChangePasswordApiUrl() {
        return this.getChangePasswordUrl() + 'changepassword/';
    }
    resendOTPUrl() {
        return this.getChangePasswordUrl() + 'resendotp/';
    }
    getResetPasswordUrl() {
        return this.getChangePasswordUrl() + 'resetpassword/';
    }
    getSubsKeysForAccountUrl() {
        return this.getBaseUrl() + 'subscriptionskeysforaccount/';
    }
    /*async sendOTP(cpi: OTPInfo): Promise<OperationResult> {
       const bodyString = JSON.stringify(cpi);
       const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
       // tslint:disable-next-line: align
       return this.http
           .post<OperationResult>(this.login(), bodyString, { headers })
           .pipe(
               map((res: any) => {
                   if (!res || !res.Result) {
                       this.errorMessage = res.Message + ' (Code:' + res.Code + ')';
                       return res;
                   }
                   return res;
               }),
               catchError((error: HttpErrorResponse) => {
                   console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
                   const res = new OperationResult();
                   res.Code = 666;
                   return of(res);
               })
           )
           .toPromise();
   }*/
    changePassword(cpi) {
        return __awaiter(this, void 0, void 0, function* () {
            const bodyString = JSON.stringify(cpi);
            const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            // tslint:disable-next-line: align
            return this.http
                .post(this.getChangePasswordApiUrl(), bodyString, { headers })
                .pipe(map((res) => {
                if (!res || !res.Result) {
                    this.errorMessage = res.Message + ' (Code:' + res.Code + ')';
                    return res;
                }
                return res;
            }), catchError((error) => {
                console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
                const res = new OperationResult();
                res.Code = 662;
                return of(res);
            }))
                .toPromise();
        });
    }
    resendOTP(accname) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            return this.http
                .post(this.resendOTPUrl() + accname, { headers })
                .pipe(map((res) => {
                if (!res) {
                    res = new OperationResult();
                    res.Code = 663;
                }
                return res;
            }), catchError((error) => {
                console.error(`Error Code: ${error.status}.\nMessage: ${error.message}`);
                const res = new OperationResult();
                res.Message = `Error Code: ${error.status}.\nMessage: ${error.message}`;
                res.Code = 669;
                return of(res);
            }))
                .toPromise();
        });
    }
    resetpassword(accname) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            // tslint:disable-next-line: align
            return this.http
                .post(this.getResetPasswordUrl() + accname, { headers })
                .pipe(map((res) => {
                if (!res) {
                    res = new OperationResult();
                    res.Code = 663;
                }
                return res;
            }), catchError((error) => {
                console.error(`Error Code: ${error.status}.\nMessage: ${error.message}`);
                const res = new OperationResult();
                res.Message = `Error Code: ${error.status}.\nMessage: ${error.message}`;
                res.Code = 661;
                if (!this.router.routerState.snapshot.url.includes(this.getLoginPageUrl()))
                    this.router.navigate([this.getLoginPageUrl()]);
                return of(res);
            }))
                .toPromise();
        });
    }
    logoff() {
        const logoffRequest = new LogoffRequest(this.getToken());
        return this.http
            .post(this.getLogoutUrl(), logoffRequest)
            .pipe(map((logoffResponse) => {
            if (logoffResponse.Result) {
                console.log('AuthService: Clearing storage due to Logoff');
                this.clearStorage();
                this.loggedOut$.next();
            }
            return logoffResponse;
        }))
            .toPromise();
    }
    navigateUserGateway() {
        console.log('entering navigateUserGateway..');
        let userGatewayUrl = this.getUserGatewayUrl();
        // if usergateway url exists, then redirect to it
        if (userGatewayUrl !== '') {
            console.log(`Found getUserGatewayUrl ${userGatewayUrl}`);
            document.location.href = userGatewayUrl;
            return;
        }
        // otherwise, redirect to login
        this.router.navigate([this.getLoginPageUrl()]);
    }
    getRedirectUrlForSubscription(accountName, subscriptionKey) {
        this.getInstancesMapForUser(accountName).subscribe((res) => {
            const map = res;
            if (!map || map.length === 0) {
                throw 'instanceMap is invalid';
            }
            const currentInstanceKey = map.filter((k) => k.SubscriptionKey === subscriptionKey).map((j) => j.InstanceKey)[0];
            this.getSnapshot(currentInstanceKey, subscriptionKey).subscribe((res) => {
                if (!res || res === [] || res.length === 0)
                    throw 'snapshot is empty';
                // we have now the snapshot
                const services = res['Services'];
                let redirectUrl = services
                    .filter((i) => i.ServiceType === 'M4FRONTEND' || i.ServiceType === 'APP_FRONTEND')
                    .map((f) => f.Url)[0];
                console.log(`Designated redirect is ${redirectUrl}`);
                const baseRedirectUrl = `${redirectUrl}?jwt=${this.getToken()}&subKey=${subscriptionKey}&instanceKey=${currentInstanceKey}`;
                console.log(`Designated final redirect is ${baseRedirectUrl}`);
                localStorage.setItem('lastLoggedRedirect', baseRedirectUrl);
                document.location.href = 'http://' + baseRedirectUrl;
            }, (err) => {
                console.log('snapshot cannot be obtained');
                throw 'snapshot cannot be obtained';
                //this.router.navigate([this.getRedirectUrl()]);
            });
        }, (err) => {
            console.log('getRedirectUrlForSubscription ia about to fail...');
            console.log(err);
            throw 'getInstancesMapForUser failed';
        });
    }
    getInstancesMapForUser(user) {
        return this.http.get(this.getInstancesMapForAccountUrl() + user).pipe(map((res) => {
            if (!res || !res.Result)
                return [];
            return res.Content;
        }));
    }
    getCalendar(subscriptionKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(`${this.getCalendarUrl()}?SubscriptionKey=${subscriptionKey}` /*, { headers }*/)
                .pipe(map((res) => {
                if (!res || !res.Result) {
                    this.errorMessage = res.Message + ' (Code:' + res.Code + ')';
                    return res;
                }
                return res;
            }), catchError((error) => {
                console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
                const res = new OperationResult();
                res.Code = 662;
                return of(res);
            }))
                .toPromise();
        });
    }
    getSnapshot(instanceKey, subscriptionKey) {
        return this.http.get(this.getSnapshotServiceUrl() + instanceKey + '?subscriptionKey=' + subscriptionKey).pipe(map((res) => {
            if (!res || !res.Result)
                return [];
            return res.Content;
        }));
    }
    getInstancesMapForAccountUrl() {
        return this.getBaseUrl() + 'instancesMap/';
    }
    getCalendarUrl() {
        return this.getIupUrl() + 'calendarjobs/';
    }
    getUpdateMessage() {
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH')
            return this.getUpdateMessageIt();
        else
            return this.getUpdateMessageEn();
    }
    clearStorage() {
        sessionStorage.removeItem(StorageVars.JWT);
        sessionStorage.removeItem(StorageVars.CULTURE);
        sessionStorage.removeItem(StorageVars.UI_CULTURE);
        sessionStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        localStorage.removeItem(StorageVars.JWT);
        localStorage.removeItem(StorageVars.CULTURE);
        localStorage.removeItem(StorageVars.UI_CULTURE);
        localStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        localStorage.removeItem(StorageVars.USER_GATEWAY_AUTOREDIRECT);
    }
    storageSubscriptionData(subscriptionKey, subscriptionDescription) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
            sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
        }
        else {
            localStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
            localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
        }
    }
    storageQueryParams(subscriptionKey, instanceKey) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
        }
        else {
            localStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
        }
        this.setInstanceKey(instanceKey);
    }
    getName(loginResponse) {
        return loginResponse.AskingProcess === this.getAppId();
    }
    storageData(loginResponse) {
        const respCulture = loginResponse.RegionalSettings === undefined || loginResponse.RegionalSettings.length === 0
            ? window.navigator.language
            : loginResponse.RegionalSettings;
        const respUiCulture = loginResponse.Language === undefined || loginResponse.Language.length === 0
            ? window.navigator.language
            : loginResponse.Language;
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
            sessionStorage.setItem(StorageVars.CULTURE, respCulture);
            sessionStorage.setItem(StorageVars.UI_CULTURE, respUiCulture);
            sessionStorage.setItem(StorageVars.ACCOUNT_ROLES, JSON.stringify(loginResponse.Roles));
            if (loginResponse.AccountName)
                sessionStorage.setItem(StorageVars.ACCOUNT_NAME, loginResponse.AccountName);
            if (loginResponse.SubscriptionKey)
                sessionStorage.setItem(StorageVars.SUBSCRIPTION, loginResponse.SubscriptionKey);
            if (loginResponse.SubscriptionDesc)
                sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, loginResponse.SubscriptionDesc);
        }
        else {
            localStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
            localStorage.setItem(StorageVars.CULTURE, respCulture);
            localStorage.setItem(StorageVars.UI_CULTURE, respUiCulture);
            localStorage.setItem(StorageVars.ACCOUNT_ROLES, JSON.stringify(loginResponse.Roles));
            if (loginResponse.AccountName)
                localStorage.setItem(StorageVars.ACCOUNT_NAME, loginResponse.AccountName);
            if (loginResponse.SubscriptionKey)
                localStorage.setItem(StorageVars.SUBSCRIPTION, loginResponse.SubscriptionKey);
            if (loginResponse.SubscriptionDesc)
                localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, loginResponse.SubscriptionDesc);
        }
    }
    saveCulture(culture, uiCulture) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.CULTURE, culture);
            sessionStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
        }
        else {
            localStorage.setItem(StorageVars.CULTURE, culture);
            localStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
        }
    }
    getToken() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.JWT);
        else
            return localStorage.getItem(StorageVars.JWT);
    }
    getAccountName() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.ACCOUNT_NAME);
        else
            return localStorage.getItem(StorageVars.ACCOUNT_NAME);
    }
    getSubscription() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION);
    }
    getSubscriptionDescription() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
    }
    getCulture() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.CULTURE);
        else
            return localStorage.getItem(StorageVars.CULTURE);
    }
    getUICulture() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.UI_CULTURE);
        else
            return localStorage.getItem(StorageVars.UI_CULTURE);
    }
    getInstanceKey() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.INSTANCEKEY);
        else
            return localStorage.getItem(StorageVars.INSTANCEKEY);
    }
    setInstanceKey(instanceKey) {
        if (this.env.auth.sessionStorage)
            sessionStorage.setItem(StorageVars.INSTANCEKEY, instanceKey);
        else
            localStorage.getItem(StorageVars.INSTANCEKEY);
    }
}
TbAuthService.DEFAULT_ENV = {
    auth: {
        url: 'http://localhost:10344/api/',
        iupurl: 'http://localhost:52172/api/',
        createAccountUrl: 'http://localhost:4200',
        changePasswordUrl: 'http://localhost:56392/api/',
        subscriptionSelection: false,
        showSignUp: false,
        appId: 'M4',
        redirectUrl: '/',
        userGatewayUrl: '',
        isRedirectExternal: true,
        loginPageUrl: 'login',
        sessionStorage: false,
        snapshotServiceUrl: '',
        // tslint:disable-next-line: max-line-length
        updatemessageIt: 'Sono previste attività di manutenzione ed aggiornamento, per questo sulla tua subscription @@sub potrebbero verificarsi brevi disservizi il @@date, dalle ore @@starth alle ore @@endh',
        // tslint:disable-next-line: max-line-length
        updatemessageEn: 'Due to system maintenance and updates there might be disturbance in your subscription @@sub on the @@date, between @@starth and @@endh',
        logoURL: 'https://magocloud-store-pdf.s3.eu-west-1.amazonaws.com/login-logo.png',
        // tslint:disable-next-line: max-line-length
        // 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAA2CAYAAABTAoWuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc0OEJEMDcwNDlBMTFFQTlDNzVDNDRGNkMzQ0EwRDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc0OEJEMDgwNDlBMTFFQTlDNzVDNDRGNkMzQ0EwRDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzQ4QkQwNTA0OUExMUVBOUM3NUM0NEY2QzNDQTBENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzQ4QkQwNjA0OUExMUVBOUM3NUM0NEY2QzNDQTBENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl3e4DwAABUASURBVHja7F0J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'
    },
};
/** @nocollapse */ /** @nocollapse */ TbAuthService.ɵfac = function TbAuthService_Factory(t) { return new (t || TbAuthService)(i0.ɵɵinject('env'), i0.ɵɵinject(i1$1.HttpClient), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.MatDialog)); };
/** @nocollapse */ /** @nocollapse */ TbAuthService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: TbAuthService, factory: TbAuthService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: ['env']
                    }] }, { type: i1$1.HttpClient }, { type: i0.Injector }, { type: i1.MatDialog }];
    }, null);
})();

class TbAuthGuard {
    constructor(authService, router, env) {
        this.authService = authService;
        this.router = router;
        this.env = env;
    }
    canActivate(next, state) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.authService.checkConnection();
            if (!connection) {
                console.log(`CONNECTIONDOWN on: ${this.authService.getBaseUrl()}`);
                // non sono loggato quindi vado alla login
                if (!state.url.includes('/login')) {
                    this.router.navigate(['login']);
                }
                return true;
            }
            if (state.url.includes(this.authService.getLoginPageUrl())) {
                this.authService.clearStorage();
                return true;
            }
            /**
             * Se ricevo jwt e subKey significa che devo fare una "autologin"
             * Creo un LoginRequest con i valori ricevuti, integro con appid letto da environment ed effettuo una login specifica
             * In caso positivo vado in homepage "/"
             */
            const jwt = next.queryParams.hasOwnProperty('jwt') ? next.queryParams.jwt : null;
            const subKey = next.queryParams.hasOwnProperty('subKey') ? next.queryParams.subKey : null;
            const instanceKey = next.queryParams.hasOwnProperty('instanceKey') ? next.queryParams.instanceKey : null;
            const ns = next.queryParams.hasOwnProperty('ns') ? next.queryParams.ns : null;
            const args = next.queryParams.hasOwnProperty('args') ? next.queryParams.args : null;
            //store nel local/sessions storage delle info necessarie allo snapshot
            //in questo caso la libreria sta "vivendo" dentro mago, riceve la redirect dello user gateway e popola queste info
            if (subKey && instanceKey)
                this.authService.storageQueryParams(subKey, instanceKey);
            if (jwt && subKey && instanceKey) {
                const loginRequest = new LoginRequest();
                loginRequest.token = jwt;
                loginRequest.subscriptionKey = subKey;
                loginRequest.appId = this.authService.getAppId();
                const loginResponse = (yield this.authService.login(loginRequest).catch((err) => {
                    this.authService.errorMessage = err.error && err.error.Message;
                    this.router.navigate(['login']);
                    return;
                }));
                if (!loginResponse) {
                    this.router.navigate(['login']);
                    return false;
                }
                if (loginResponse.Result) {
                    this.authService.errorMessage = '';
                    //questa parte è da refactorizzare,  per apertura documenti da infinity urgentissima
                    //in futuro ci sarà l'url originale della richiesta
                    const url = ns ? 'document' : this.authService.getRedirectUrl();
                    this.router.navigate([url], {
                        replaceUrl: true,
                        queryParams: { jwt: null, subKey: null, ns: ns, args: args },
                        queryParamsHandling: 'merge',
                    });
                    //this.router.navigate([this.authService.getRedirectUrl()]);
                    return true;
                }
            }
            /**
             * Se arrivo qua vuol dire che ho già un token salvato e non scaduto quindi chiedo conferma della validità
             */
            const authtoken = this.authService.getToken() || '';
            if (authtoken) {
                // ho un token, ma ne verifico la validità
                const res = (yield this.authService.isValidToken(authtoken));
                if (res.Result) {
                    if (state.url.includes(this.authService.getLoginPageUrl()))
                        this.router.navigate([this.authService.getRedirectUrl()]);
                    return true;
                }
                else {
                    this.router.navigate([this.authService.getLoginPageUrl()]);
                    return false;
                }
            }
            else {
                // non sono loggato quindi vado alla login
                if (!state.url.includes(this.authService.getLoginPageUrl()))
                    this.router.navigate([this.authService.getLoginPageUrl()]);
                return true;
            }
        });
    }
}
/** @nocollapse */ /** @nocollapse */ TbAuthGuard.ɵfac = function TbAuthGuard_Factory(t) { return new (t || TbAuthGuard)(i0.ɵɵinject(TbAuthService), i0.ɵɵinject(i2$1.Router), i0.ɵɵinject('env')); };
/** @nocollapse */ /** @nocollapse */ TbAuthGuard.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: TbAuthGuard, factory: TbAuthGuard.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthGuard, [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], function () {
        return [{ type: TbAuthService }, { type: i2$1.Router }, { type: undefined, decorators: [{
                        type: Inject,
                        args: ['env']
                    }] }];
    }, null);
})();

class TbAuthInterceptor {
    constructor(env, authService) {
        this.authService = authService;
        this.env = env;
    }
    intercept(request, next) {
        let token = JSON.stringify({ type: 'app', appId: 'LOGINAPP', securityValue: '1l4r14m' });
        /*
         * Aggiungo a ogni httprequest l'header 'Authorization'
         * In caso di api "pubbliche" come /subscriptionskeysforaccount, uso un token "di applicazione"
         *dal 24022020 anche l'api per reperire le subscription è soggetta a jwt
         */
        // if (!request.url.includes('/subscriptionskeysforaccount')) {
        const jwt = this.authService.getToken();
        if (jwt)
            token = JSON.stringify({ type: 'jwt', appId: this.env.auth.appId, securityValue: jwt });
        //  }
        request = request.clone({
            setHeaders: {
                Authorization: token
            }
        });
        /*
         * Elabora la response di ogni chiamata http
         */
        return next.handle(request).pipe();
    }
}
/** @nocollapse */ /** @nocollapse */ TbAuthInterceptor.ɵfac = function TbAuthInterceptor_Factory(t) { return new (t || TbAuthInterceptor)(i0.ɵɵinject('env'), i0.ɵɵinject(TbAuthService)); };
/** @nocollapse */ /** @nocollapse */ TbAuthInterceptor.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: TbAuthInterceptor, factory: TbAuthInterceptor.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthInterceptor, [{
            type: Injectable
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: ['env']
                    }] }, { type: TbAuthService }];
    }, null);
})();

class ForgotPasswordComponent {
    constructor(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.title = data.Title;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.inputValue = data.TextValue;
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
            this.buttonCancel = 'Annulla';
        }
        else {
            this.buttonCancel = 'Cancel';
        }
    }
    ngOnInit() { }
    cancel() {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    }
    confirm() {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    }
}
/** @nocollapse */ /** @nocollapse */ ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ /** @nocollapse */ ForgotPasswordComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ForgotPasswordComponent, selectors: [["forgot-password-dialog"]], decls: 12, vars: 5, consts: [[1, "app-dialog"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", 3, "placeholder", "ngModel", "ngModelChange"], [1, "mt20"], ["mat-raised-button", "", 1, "left", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "right", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field", 1);
            i0.ɵɵelementStart(6, "input", 2);
            i0.ɵɵlistener("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputValue = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵlistener("click", function ForgotPasswordComponent_Template_button_click_8_listener() { return ctx.cancel(); });
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 5);
            i0.ɵɵlistener("click", function ForgotPasswordComponent_Template_button_click_10_listener() { return ctx.confirm(); });
            i0.ɵɵtext(11, "OK");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("placeholder", ctx.placeHolder)("ngModel", ctx.inputValue);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.buttonCancel);
        }
    }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [".right[_ngcontent-%COMP%]{float:right}.mt40[_ngcontent-%COMP%]{margin-top:40px}.mt20[_ngcontent-%COMP%]{margin-top:20px}.ml40[_ngcontent-%COMP%]{margin-left:40px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotPasswordComponent, [{
            type: Component,
            args: [{ selector: 'forgot-password-dialog', template: "<div class=\"app-dialog\">\r\n    <h2>{{ title }}</h2>\r\n    <label>{{ message }}</label>\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder\" adminAutoFocus value=\"\" [(ngModel)]=\"inputValue\" />\r\n    </mat-form-field>\r\n\r\n    <div class=\"mt20\">\r\n        <button (click)=\"cancel()\" class=\"left\" mat-raised-button>{{ buttonCancel }}</button>\r\n\r\n        <button (click)=\"confirm()\" class=\"right\" mat-raised-button color=\"primary\">OK</button>\r\n    </div>\r\n\r\n</div>", styles: [".right{float:right}.mt40{margin-top:40px}.mt20{margin-top:20px}.ml40{margin-left:40px}\n"] }]
        }], function () {
        return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }];
    }, null);
})();

const _c0 = ["dropdown"];
function TbLoginComponent_div_5_p_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "p", 26);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r13 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r13.idleTimeoutMessage);
    }
}
function TbLoginComponent_div_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "h2", 23);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, TbLoginComponent_div_5_p_3_Template, 2, 1, "p", 24);
        i0.ɵɵelementStart(4, "p", 25);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r0.welcome);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r0.isExpiredSession);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r0.enterCredentials);
    }
}
function TbLoginComponent_div_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "h2", 27);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", 25);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r1.chooseSubscription);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate2("", ctx_r1.accountName, ": ", ctx_r1.loginRequest.accountName, " ");
    }
}
function TbLoginComponent_kendo_floatinglabel_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "kendo-floatinglabel", 28);
        i0.ɵɵelementStart(1, "input", 29);
        i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_9_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.loginRequest.accountName = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_9_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.keyUpFunction($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("text", ctx_r2.accountName);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r2.loginRequest.accountName);
    }
}
function TbLoginComponent_kendo_floatinglabel_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "kendo-floatinglabel", 30);
        i0.ɵɵelementStart(1, "input", 31);
        i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_10_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.loginRequest.password = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_10_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.keyUpFunction($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "m4-icon", 32);
        i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_10_Template_m4_icon_click_2_listener() { i0.ɵɵrestoreView(_r18); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.hide = !ctx_r20.hide; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r3.loginRequest.password)("type", ctx_r3.hide ? "password" : "text");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r3.hide ? "tb-eyefilled" : "tb-hide");
    }
}
function TbLoginComponent_div_11_p_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "p", 39);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r22 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate2(" Subscription key: ", ctx_r22.loginRequest.subscriptionKey, " ", ctx_r22.instancekey, "");
    }
}
function TbLoginComponent_div_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 33);
        i0.ɵɵelementStart(1, "kendo-floatinglabel", 34);
        i0.ɵɵelementStart(2, "kendo-dropdownlist", 35, 36);
        i0.ɵɵlistener("ngModelChange", function TbLoginComponent_div_11_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.loginRequest.subscriptionKey = $event; })("ngModelChange", function TbLoginComponent_div_11_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onSubChange($event); })("click", function TbLoginComponent_div_11_Template_kendo_dropdownlist_click_2_listener() { i0.ɵɵrestoreView(_r24); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.isDropDownClicked(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "m4-icon", 37);
        i0.ɵɵlistener("click", function TbLoginComponent_div_11_Template_m4_icon_click_4_listener() { i0.ɵɵrestoreView(_r24); const _r21 = i0.ɵɵreference(3); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.toggle(_r21); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵtemplate(6, TbLoginComponent_div_11_p_6_Template, 2, 2, "p", 38);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("text", ctx_r4.subscription);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", (ctx_r4.loginSubscriptions == null ? null : ctx_r4.loginSubscriptions.length) <= 1)("data", ctx_r4.loginSubscriptions)("ngModel", ctx_r4.loginRequest.subscriptionKey);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", ctx_r4.dropDownIsClicked ? "upicon" : "downicon");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx_r4.loginSubscriptions.length > 3);
    }
}
function TbLoginComponent_div_13_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 40);
        i0.ɵɵelement(1, "span", 41);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r5 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx_r5.blocMaiusc, " ");
    }
}
function TbLoginComponent_div_14_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 42);
        i0.ɵɵelement(1, "span", 41);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r6 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx_r6.authService.errorMessage, " ");
    }
}
function TbLoginComponent_div_15_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 43);
        i0.ɵɵelement(1, "span", 41);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r7 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx_r7.authService.okMessage, " ");
    }
}
function TbLoginComponent_span_19_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "span", 44);
    }
}
function TbLoginComponent_span_20_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 45);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r9 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r9.buttonText);
    }
}
function TbLoginComponent_button_22_span_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 48);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r28 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r28.buttonBack, "");
    }
}
function TbLoginComponent_button_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r30 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 46);
        i0.ɵɵlistener("click", function TbLoginComponent_button_22_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.back(); });
        i0.ɵɵtemplate(1, TbLoginComponent_button_22_span_1_Template, 2, 1, "span", 47);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r10 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx_r10.loading && ctx_r10.validate);
    }
}
function TbLoginComponent_div_24_Template(rf, ctx) {
    if (rf & 1) {
        const _r32 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "p", 49);
        i0.ɵɵlistener("click", function TbLoginComponent_div_24_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.newUser(); });
        i0.ɵɵtext(2, "SignUp here!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
}
function TbLoginComponent_div_25_Template(rf, ctx) {
    if (rf & 1) {
        const _r34 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 50);
        i0.ɵɵelementStart(1, "p", 51);
        i0.ɵɵlistener("click", function TbLoginComponent_div_25_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.goToForgotPassword(); });
        i0.ɵɵelementStart(2, "u");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r12 = i0.ɵɵnextContext();
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx_r12.forgetPassword);
    }
}
// ---------------------------------------------------------------------------
class TbLoginComponent {
    // ---------------------------------------------------------------------------
    constructor(authService, router, dialog, renderer, doc) {
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.renderer = renderer;
        this.doc = doc;
        this.cachedCompanies = [];
        this.capsLockOn = false;
        this.validate = false;
        this.loading = false;
        this.loginRequest = new LoginRequest();
        this.loginSubscriptions = [];
        this.hide = true;
        this.isConnected = true;
        this.dropDownIsClicked = false;
        this.comboBoxIsClicked = false;
        this.iconIsClicked = false;
        // ---------------------------------------------------------------------------
        this.FormatDateString = (date) => {
            const tempDate = this.convertUTCDateToLocalDate(date);
            return `${tempDate.getDate()}-${tempDate.getMonth() + 1}-${tempDate.getFullYear()}`;
        };
        // ---------------------------------------------------------------------------
        this.FormatStartDateString = (date) => {
            const tempDate = this.convertUTCDateToLocalDate(date);
            // imposto l ora senza minuti, arrotonadando per sicurezza.
            return `${this.NumberPad(tempDate.getHours(), 2)}:00`;
        };
        // ---------------------------------------------------------------------------
        this.FormatEndDateString = (date) => {
            const tempDate = this.convertUTCDateToLocalDate(date);
            let h = tempDate.getHours();
            h += 2; // cablato due ore perche non abbiamo ancora stime sensate e cerchiamo di stare aderenti alla mail inviata
            return `${this.NumberPad(h, 2)}:00`;
        };
        // ---------------------------------------------------------------------------
        this.NumberPad = (value, padding) => {
            const zeroes = new Array(padding + 1).join('0');
            return (zeroes + value).slice(-padding);
        };
        this.renderer.listen('window', 'click', (e) => {
            if (this.comboBoxIsClicked) {
                this.comboBoxIsClicked = false;
            }
            else if (this.iconIsClicked) {
                this.iconIsClicked = false;
            }
            else if (this.dropdown) {
                this.dropdown.toggle(false);
                this.dropDownIsClicked = false;
            }
        });
        this.document = doc;
        this.checkConnection();
        this.loginRequest.appId = this.authService.getAppId();
        this.subscriptionSelection = authService.hasSubscriptionSelection();
        this.showSignUp = authService.showSignUp();
        this.redirectUrl = authService.getRedirectUrl();
        this.createAccountUrl = authService.getCreateAccountUrl();
        this.changePasswordUrl = authService.getChangePasswordUrl();
        this.logoURL = authService.getLogoURL();
        this.instancekey = '';
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
            this.buttonText = this.validate || !this.subscriptionSelection ? 'Accedi' : 'Avanti';
        }
        else {
            this.buttonText = this.validate || !this.subscriptionSelection ? 'Login' : 'Next';
        }
        this.currentYear = new Date().getFullYear().toString();
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
            this.chooseSubscription = 'Scegli la tua sottoscrizione.';
            this.goodJob = 'Buon lavoro!';
            this.subscription = 'Sottoscrizione';
            this.instance = 'Istanza';
            this.buttonBack = '< INDIETRO';
            this.accountName = 'Nome utente';
            this.welcome = 'Benvenuto su MagoCloud';
            this.enterCredentials = "Inserisci nome utente e password per l'autenticazione.";
            this.dontshow = 'Non mostrare più questo messaggio';
            this.forgetPassword = 'Hai dimenticato la password';
            this.blocMaiusc = 'Blocco maiuscole attivo';
            this.idleTimeoutMessage = 'La tua sessione è terminata per inattività, puoi riprendere da qui.';
            this.upgradeWarningTitle = 'Aggiornamento  in vista!';
        }
        else {
            this.chooseSubscription = 'Choose your subscription.';
            this.goodJob = 'Good job!';
            this.subscription = 'Subscription';
            this.instance = 'Instance';
            this.buttonBack = '< BACK';
            this.accountName = 'Account name';
            this.welcome = 'Welcome to MagoCloud';
            this.enterCredentials = 'Enter account name and password for authentication.';
            this.dontshow = 'Do not show me this message again';
            this.forgetPassword = 'Did you forget your password ?';
            this.blocMaiusc = 'Caps lock on';
            this.idleTimeoutMessage = 'Your session has expired due to inactivity, you can resume from here.';
            this.upgradeWarningTitle = 'Update planned!';
        }
        authService.reLoginAfterOTP.subscribe(() => {
            this.login();
        });
    }
    // ---------------------------------------------------------------------------
    ngAfterContentInit() {
        this.loadLoginData();
        webkitAutofillWorkaround();
    }
    // ---------------------------------------------------------------------------
    checkConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isConnected = yield this.authService.checkConnection();
            if (!this.isConnected) {
                if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
                    this.authService.errorMessage = 'Servizio di autenticazione temporaneamente inattivo';
                }
                else {
                    this.authService.errorMessage = 'Authentication service temporarily down';
                }
            }
            else {
                this.authService.errorMessage = '';
                this.authService.okMessage = '';
            }
        });
    }
    // ---------------------------------------------------------------------------
    onSubChange(newValue) {
        const sd = this.loginSubscriptions.find((s) => s.subscriptionkey === newValue);
        if (sd && sd.instancekey)
            this.instancekey = `${this.instance}: ${sd.instancekey}`;
    }
    // ---------------------------------------------------------------------------
    keyUpFunction(event) {
        if (event.key === 'Enter') {
            if (!this.disabledButton())
                this.login();
        }
        const capsOn = event.getModifierState && event.getModifierState('CapsLock');
        this.capsLockOn = capsOn;
    }
    // ---------------------------------------------------------------------------
    disabledButton() {
        return ((hasAutofill() &&
            (!this.isConnected ||
                (this.subscriptionSelection && this.loginSubscriptions.length === 0 && this.validate) ||
                this.loading)) ||
            (!hasAutofill() &&
                (!this.isConnected ||
                    !this.loginRequest.accountName ||
                    !this.loginRequest.password ||
                    (this.subscriptionSelection && this.loginSubscriptions.length === 0 && this.validate) ||
                    this.loading)));
    }
    get isExpiredSession() {
        return sessionStorage.getItem('expiredSession') === 'true';
    }
    // ---------------------------------------------------------------------------
    newUser() {
        // rimanda alla pagina (presumibilmente dello store) dove  sarà possibile creare un nuovo account.
        this.router.navigate([this.createAccountUrl]);
    }
    // ---------------------------------------------------------------------------
    back() {
        return __awaiter(this, void 0, void 0, function* () {
            // ripulisco tutto...
            this.validate = false;
            this.loginRequest.token = '';
            this.loginRequest.password = '';
            this.loginRequest.subscriptionKey = '';
            this.loginRequest.appId = '';
            this.buttonText = 'Next';
            this.loginSubscriptions = [];
            this.authService.okMessage = '';
            this.authService.errorMessage = '';
        });
    }
    // ---------------------------------------------------------------------------
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            this.authService.okMessage = '';
            this.authService.errorMessage = '';
            this.saveLoginData();
            this.loading = true;
            sessionStorage.removeItem('expiredSession');
            if (!this.validate && this.subscriptionSelection) {
                this.loginRequest.appId = 'MCloudPreLogin';
                this.loginRequest.subscriptionKey = '';
                const result1 = yield this.authService.prelogin(this.loginRequest).catch((err1) => {
                    this.loading = false;
                    this.authService.errorMessage = err1.error && err1.error.Message;
                    return;
                });
                this.loading = false;
                this.buttonText = this.validate ? 'Login' : 'Next';
                // todo controlla come vengono mostrati errori sia login sia checkdb
                if (result1 && result1.Result) {
                    this.validate = true;
                    this.buttonText = this.validate ? 'Login' : 'Next';
                    this.getCompaniesForUser(this.loginRequest.accountName);
                    this.authService.errorMessage = '';
                    this.authService.okMessage = '';
                }
                else {
                    this.loading = false;
                }
            }
            else {
                this.loginRequest.appId = this.authService.getAppId();
                const result = yield this.authService.login(this.loginRequest).catch((err) => {
                    this.loading = false;
                    this.authService.errorMessage = err.error && err.error.Message;
                    return;
                });
                this.loading = false;
                this.buttonText = this.validate ? 'Login' : 'Next';
                // todo controlla come vengono mostrati errori sia login sia checkdb
                if (result && result.Result) {
                    const sd = this.loginSubscriptions.find((s) => s.subscriptionkey === this.loginRequest.subscriptionKey);
                    if (sd && sd.status) {
                        // tslint:disable-next-line:no-bitwise
                        const scheduled = (sd.status & EntityStatus.UpdateScheduled) === EntityStatus.UpdateScheduled;
                        if (scheduled) {
                            // se la sub non ha lo stato impostato  non cerco nemmeno risparmiandomi una chiamata
                            const result1 = yield this.authService.getCalendar(this.loginRequest.subscriptionKey);
                            if (result1.result && result1.content) {
                                const scheduledUpdate = result1.content;
                                if (scheduledUpdate) {
                                    console.log('scheduledUpdate: ' + scheduledUpdate.scheduledtime.toString());
                                    const val = localStorage.getItem('DONTSHOWUPDATEWARN');
                                    let message = this.authService.getUpdateMessage();
                                    message = message.replace('@@sub', this.authService.getSubscriptionDescription());
                                    message = message.replace('@@date', this.FormatDateString(scheduledUpdate.scheduledtime));
                                    message = message.replace('@@starth', this.FormatStartDateString(scheduledUpdate.scheduledtime));
                                    message = message.replace('@@endh', this.FormatEndDateString(scheduledUpdate.scheduledtime));
                                    // tslint:disable-next-line:max-line-length
                                    const diffInDays = DateTime.fromISO(scheduledUpdate.scheduledtime.toString())
                                        .diff(DateTime.fromISO(DateTime.local().toString()), 'days')
                                        .toObject().days;
                                    // non mostro se mi torna una data precedente ad oggi.
                                    if (val !== message &&
                                        DateTime.local() < DateTime.fromISO(scheduledUpdate.scheduledtime.toString()) &&
                                        // mostro solo se previsti entro 15 giorni per decisione mia di me medesima ilaria
                                        diffInDays &&
                                        diffInDays < 15) {
                                        this.authService.openUpdateAlertDialog(message, this.upgradeWarningTitle, this.dontshow, this.loginRequest.accountName, this.loginRequest.subscriptionKey);
                                        return;
                                    }
                                }
                            }
                        }
                    }
                    this.authService.okMessage = '';
                    this.authService.errorMessage = '';
                    if (this.authService.isRedirectExternal()) {
                        console.log('go external');
                        this.authService.getRedirectUrlForSubscription(this.loginRequest.accountName, this.loginRequest.subscriptionKey);
                        return;
                    }
                    console.log('go internal');
                    this.router.navigate([this.authService.getRedirectUrl()]);
                }
                else {
                    this.loading = false;
                }
            }
        });
    }
    // ---------------------------------------------------------------------------
    convertUTCDateToLocalDate(date) {
        // devo fare questo rigiro perchè l ora che mi arriva  è intesa come utc e devo mostrarla come locale
        const dt = new Date(date);
        return new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds(), dt.getMilliseconds()));
    }
    // ---------------------------------------------------------------------------
    loadLoginData() {
        this.loginRequest.accountName = this.authService.getAccountName() || '';
        this.loginRequest.subscriptionKey = this.authService.getSubscription() || '';
        if (!this.loginRequest.accountName) {
            this.loginRequest.subscriptionKey = '';
        }
        else {
            this.getCompaniesForUser(this.loginRequest.accountName);
        }
    }
    // ---------------------------------------------------------------------------
    saveLoginData() {
        if (this.authService.isSessionStorage()) {
            sessionStorage.setItem(StorageVars.ACCOUNT_NAME, this.loginRequest.accountName);
            sessionStorage.setItem(StorageVars.SUBSCRIPTION, this.loginRequest.subscriptionKey);
        }
        else {
            localStorage.setItem(StorageVars.ACCOUNT_NAME, this.loginRequest.accountName);
            localStorage.setItem(StorageVars.SUBSCRIPTION, this.loginRequest.subscriptionKey);
        }
        if (this.loginSubscriptions.length > 0) {
            const sd = this.loginSubscriptions.find((s) => s.subscriptionkey === this.loginRequest.subscriptionKey);
            if (sd) {
                if (this.authService.isSessionStorage()) {
                    sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, sd.description);
                }
                else {
                    localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, sd.description);
                }
            }
        }
    }
    // ---------------------------------------------------------------------------
    getCompaniesForUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isConnected) {
                return;
            }
            if (!user || !this.subscriptionSelection) {
                this.loginRequest.subscriptionKey = '';
                return;
            }
            this.loginSubscriptions = [];
            // this.loginRequest.subscriptionKey = '';
            this.authService.errorMessage = '';
            this.authService.okMessage = '';
            const temp = yield this.requestAndSortSubscriptions(user);
            // Premio Eleganza Codice 2019 (@LucaBruni)
            if (JSON.stringify(temp) !== JSON.stringify(this.loginSubscriptions))
                this.loginSubscriptions = temp;
            if (this.loginSubscriptions.length === 0) {
                this.loginRequest.subscriptionKey = '';
                localStorage.removeItem(StorageVars.SUBSCRIPTION);
                localStorage.removeItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
                this.authService.errorMessage = 'No Subscriptions associated to this user';
            }
            if (this.loginSubscriptions.length > 0) {
                if (!this.loginRequest.subscriptionKey) {
                    this.loginRequest.subscriptionKey = this.loginSubscriptions[0].subscriptionkey;
                }
                else {
                    if (this.loginSubscriptions.map((s) => s.subscriptionkey).indexOf(this.loginRequest.subscriptionKey) === -1) {
                        this.loginRequest.subscriptionKey = this.loginSubscriptions[0].subscriptionkey;
                    }
                }
                this.onSubChange(this.loginRequest.subscriptionKey);
            }
        });
    }
    // ---------------------------------------------------------------------------
    requestAndSortSubscriptions(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.cachedCompanies.hasOwnProperty(user) && this.cachedCompanies[user]) {
                return this.cachedCompanies[user];
            }
            const temp = [];
            const result = yield this.authService.getCompaniesForUser(user).toPromise();
            result.sort(this.compareCompanies).forEach((c) => {
                temp.push({ subscriptionkey: c.subscriptionkey, description: c.description, status: c.status, instancekey: c.instancekey });
            });
            if (temp.length > 0)
                this.cachedCompanies[user] = temp;
            return temp;
        });
    }
    // ---------------------------------------------------------------------------
    compareCompanies(a, b) {
        const nameA = a.description.toLowerCase();
        const nameB = b.description.toLowerCase();
        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    }
    // ---------------------------------------------------------------------------
    goToForgotPassword() {
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
            this.forgotpassword('Hai dimenticato la password ?', 'Inserisci il tuo nome utente: ', 'Nome utente');
        }
        else {
            this.forgotpassword('Forgot Password ?', 'Please write your account name: ', 'Account name');
        }
    }
    // ---------------------------------------------------------------------------
    forgotpassword(Title, Message, PlaceHolder) {
        return __awaiter(this, void 0, void 0, function* () {
            this.authService.errorMessage = '';
            this.authService.okMessage = '';
            const dialogRef = this.dialog.open(ForgotPasswordComponent, {
                data: {
                    Title,
                    Message,
                    PlaceHolder,
                    TextValue: this.loginRequest.accountName,
                },
            });
            dialogRef.afterClosed().subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                this.authService.errorMessage = '';
                if (data === undefined)
                    return;
                if (data.TextValue === undefined || data.TextValue === '') {
                    if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
                        this.authService.errorMessage = 'Inserisci un nome utente valido';
                        return;
                    }
                    else {
                        this.authService.errorMessage = 'Write a valid account name';
                        return;
                    }
                }
                const accname = data.TextValue;
                const result = yield this.authService.resetpassword(accname).catch((err) => {
                    this.authService.errorMessage = err.error && err.error.Message;
                    return;
                });
                // todo controlla come vengono mostrati errori
                if (result && result.Result) {
                    this.authService.errorMessage = '';
                    if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
                        this.authService.okMessage = 'Controlla la tua e-mail e segui le istruzioni per reimpostare la password.';
                    }
                    else {
                        this.authService.okMessage = 'Check your email and follow the instructions to reset your password.';
                    }
                    this.router.navigate([this.authService.getRedirectUrl()]);
                }
                if (result && !result.Result) {
                    this.authService.errorMessage = result.Message + ' (Code: ' + result.Code + ').';
                    this.authService.okMessage = '';
                }
            }));
        });
    }
    // ---------------------------------------------------------------------------
    isDropDownClicked() {
        this.dropDownIsClicked = !this.dropDownIsClicked;
        this.comboBoxIsClicked = this.dropDownIsClicked;
        if (this.dropDownIsClicked && this.comboBoxIsClicked) {
            this.iconIsClicked = false;
        }
    }
    // ---------------------------------------------------------------------------
    toggle(dropdown) {
        this.dropDownIsClicked = !this.dropDownIsClicked;
        this.iconIsClicked = this.dropDownIsClicked;
        this.dropdown = dropdown;
        if (this.dropDownIsClicked) {
            dropdown.toggle(true);
        }
        else {
            dropdown.toggle(false);
        }
    }
}
/** @nocollapse */ /** @nocollapse */ TbLoginComponent.ɵfac = function TbLoginComponent_Factory(t) { return new (t || TbLoginComponent)(i0.ɵɵdirectiveInject(TbAuthService), i0.ɵɵdirectiveInject(i2$1.Router), i0.ɵɵdirectiveInject(i1.MatDialog), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ /** @nocollapse */ TbLoginComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: TbLoginComponent, selectors: [["tb-login"]], viewQuery: function TbLoginComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
        }
    }, decls: 29, vars: 16, consts: [[1, "login-container"], [1, "login", 2, "z-index", "1"], [1, "login-header"], ["mat-card-image", "", 2, "width", "60%", 3, "src"], [4, "ngIf"], [1, "login-form"], [3, "text", 4, "ngIf"], ["text", "Password", 4, "ngIf"], ["class", "form-control", 4, "ngIf"], [1, "login-infos"], ["class", "caps-lock", 4, "ngIf"], ["class", "login-error", 4, "ngIf"], ["class", "login-info", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "login-button", 3, "disabled", "click"], ["class", "k-icon k-i-loading", 4, "ngIf"], ["style", "letter-spacing: 3px; text-transform: uppercase", 4, "ngIf"], [1, "login-footer"], ["kendoButton", "", "class", "login-button", "style", "background: grey", 3, "click", 4, "ngIf"], ["style", "display: flex; margin-top: 40px; justify-content: flex-end", 4, "ngIf"], [2, "position", "absolute", "bottom", "0", "width", "100%", "z-index", "0"], [1, "copyright", "copyright-abs"], [1, "login-title"], ["class", "login-expired-subtitle", 4, "ngIf"], [1, "login-subtitle"], [1, "login-expired-subtitle"], [1, "login-chooseSubscription"], [3, "text"], ["kendoTextBox", "", "name", "accountName", "type", "text", 3, "ngModel", "ngModelChange", "keyup"], ["text", "Password"], ["kendoTextBox", "", "name", "password", "autocomplete", "current-password", 3, "ngModel", "type", "ngModelChange", "keyup"], [1, "icon", 3, "icon", "click"], [1, "form-control"], [2, "border-bottom", "1px solid #005890", 3, "text"], ["name", "subscription", "textField", "description", "valueField", "subscriptionkey", "valuePrimitive", "true", 2, "position", "relative", 3, "disabled", "data", "ngModel", "ngModelChange", "click"], ["dropdown", ""], ["icon", "tb-circledrightfilled", 1, "icon", 3, "ngClass", "click"], ["class", "instancekey", 4, "ngIf"], [1, "instancekey"], [1, "caps-lock"], [1, "k-icon", "k-i-warning"], [1, "login-error"], [1, "login-info"], [1, "k-icon", "k-i-loading"], [2, "letter-spacing", "3px", "text-transform", "uppercase"], ["kendoButton", "", 1, "login-button", 2, "background", "grey", 3, "click"], ["style", "letter-spacing: 3px", 4, "ngIf"], [2, "letter-spacing", "3px"], [1, "signup", 3, "click"], [2, "display", "flex", "margin-top", "40px", "justify-content", "flex-end"], [1, "forgotpwd", 3, "click"]], template: function TbLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div");
            i0.ɵɵelement(4, "img", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, TbLoginComponent_div_5_Template, 6, 3, "div", 4);
            i0.ɵɵtemplate(6, TbLoginComponent_div_6_Template, 5, 3, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "form");
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵtemplate(9, TbLoginComponent_kendo_floatinglabel_9_Template, 2, 2, "kendo-floatinglabel", 6);
            i0.ɵɵtemplate(10, TbLoginComponent_kendo_floatinglabel_10_Template, 3, 3, "kendo-floatinglabel", 7);
            i0.ɵɵtemplate(11, TbLoginComponent_div_11_Template, 7, 6, "div", 8);
            i0.ɵɵelementStart(12, "div", 9);
            i0.ɵɵtemplate(13, TbLoginComponent_div_13_Template, 3, 1, "div", 10);
            i0.ɵɵtemplate(14, TbLoginComponent_div_14_Template, 3, 1, "div", 11);
            i0.ɵɵtemplate(15, TbLoginComponent_div_15_Template, 3, 1, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 13);
            i0.ɵɵelementStart(17, "div", 14);
            i0.ɵɵelementStart(18, "button", 15);
            i0.ɵɵlistener("click", function TbLoginComponent_Template_button_click_18_listener() { return ctx.login(); });
            i0.ɵɵtemplate(19, TbLoginComponent_span_19_Template, 1, 0, "span", 16);
            i0.ɵɵtemplate(20, TbLoginComponent_span_20_Template, 2, 1, "span", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 18);
            i0.ɵɵtemplate(22, TbLoginComponent_button_22_Template, 2, 1, "button", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 18);
            i0.ɵɵtemplate(24, TbLoginComponent_div_24_Template, 3, 0, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(25, TbLoginComponent_div_25_Template, 4, 1, "div", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 21);
            i0.ɵɵelementStart(27, "p", 22);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵpropertyInterpolate("src", ctx.logoURL, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.validate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.validate);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.validate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.validate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.subscriptionSelection && ctx.validate);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.capsLockOn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.authService.errorMessage);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.authService.okMessage);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.disabledButton());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.loading);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.validate);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showSignUp);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.validate);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Login v2.3.0+6 \u00A9 2017 - ", ctx.currentYear, ", Zucchetti s.p.a. ");
        }
    }, directives: [i4$1.NgIf, i4.ɵNgNoValidate, i4.NgControlStatusGroup, i4.NgForm, i6.FloatingLabelComponent, i7.TextBoxDirective, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i8.IconsComponent, i9.DropDownListComponent, i4$1.NgClass], styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;background:#d0e4ff}.k-list[_ngcontent-%COMP%]{background:#fff;color:#005890}.k-list[_ngcontent-%COMP%]   .k-item.k-state-selected[_ngcontent-%COMP%], .k-list[_ngcontent-%COMP%]   .k-list-optionlabel.k-state-selected[_ngcontent-%COMP%], .k-list[_ngcontent-%COMP%]   .k-item.k-state-selected[_ngcontent-%COMP%]:hover, .k-list[_ngcontent-%COMP%]   .k-list-optionlabel.k-state-selected[_ngcontent-%COMP%]:hover, .k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:hover, .k-list[_ngcontent-%COMP%]   .k-item.k-state-hover[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:hover, .k-list-optionlabel.k-state-hover[_ngcontent-%COMP%], .k-list-item.k-selected[_ngcontent-%COMP%]:hover{color:#005890;background-color:#d0e4ff!important}.k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-list-item.k-selected[_ngcontent-%COMP%], .k-selected.k-list-optionlabel[_ngcontent-%COMP%], .k-list-item[_ngcontent-%COMP%]:hover, .k-list-optionlabel[_ngcontent-%COMP%]:hover, .k-list-item.k-hover[_ngcontent-%COMP%], .k-hover.k-list-optionlabel[_ngcontent-%COMP%]{color:#005890!important;background-color:#d0e4ff!important}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.mat-dialog-container[_ngcontent-%COMP%]{background:white!important}  html,   body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}tb-login[_nghost-%COMP%]{font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-image:url(https://magocloud-store-pdf.s3.eu-west-1.amazonaws.com/login-bg.png);background-size:cover;background-repeat:no-repeat}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}}@media screen and (min-width: 576px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:450px}}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .upicon[_ngcontent-%COMP%]{transform:rotate(90deg);padding:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .downicon[_ngcontent-%COMP%]{transform:rotate(270deg)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container{width:100%;margin:8px 0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container>.k-label{font-weight:600;color:#005890}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-textbox, tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-textbox .k-input, tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-textarea{border:none;border-bottom:2px solid #0078c3;border-radius:0;box-shadow:none;padding:5px 0;height:33px;color:#005890!important;font-size:16px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-picker-md .k-input-inner{border-bottom:1px solid #0078c3;background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0;font-weight:600}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-picker{border-width:0px;border-style:unset}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container:after{background-color:#8ee2ff;height:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-list .k-item.k-state-selected:hover, tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-list .k-list-optionlabel.k-state-selected:hover{color:#005890;background-color:#d0e4ff}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown{border:none;background:none}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0078c3}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]{margin:20px 0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{margin:0 0 10px;background:#005890;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em;display:flex;align-items:center}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{margin:0 0 10px;background:#ee2411;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{margin:0 0 10px;background:green;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{padding:4px 12px;background:#e77b2d;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-footer[_ngcontent-%COMP%]   .login-button.k-state-disabled[_ngcontent-%COMP%]{background:#c0c6c9;cursor:not-allowed}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]   .k-i-loading[_ngcontent-%COMP%]{font-size:20px}tb-login[_nghost-%COMP%]   p.instancekey[_ngcontent-%COMP%]{font-size:9px;font-weight:300;text-indent:1px;color:#005890}tb-login[_nghost-%COMP%]   p.copyright[_ngcontent-%COMP%]{font-size:10px;font-weight:300;margin:0;color:#fff}tb-login[_nghost-%COMP%]   p.copyright-abs[_ngcontent-%COMP%]{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}tb-login[_nghost-%COMP%]   p.signup[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}tb-login[_nghost-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important}tb-login[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus{outline:none}tb-login[_nghost-%COMP%]   .login-title[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:600;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-subtitle[_ngcontent-%COMP%]{margin-top:-10px;margin-left:-1.5px;color:#005890}tb-login[_nghost-%COMP%]   .login-expired-subtitle[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:700}tb-login[_nghost-%COMP%]   .login-chooseSubscription[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}tb-login[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{position:absolute;bottom:6px;right:0;cursor:pointer;color:#005890;font-size:14px;padding-bottom:2px;z-index:333}@media (min-width: 576px){tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-title[_ngcontent-%COMP%]{font-size:19px}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-size:x-large}}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLoginComponent, [{
            type: Component,
            args: [{ selector: 'tb-login', template: "<div class=\"login-container\">\r\n    <div class=\"login\" style=\"z-index: 1\">\r\n        <div class=\"login-header\">\r\n            <div>\r\n                <img mat-card-image style=\"width: 60%\" src=\"{{ logoURL }}\" />\r\n            </div>\r\n            <div *ngIf=\"!validate\">\r\n                <h2 class=\"login-title\">{{ welcome }}</h2>\r\n                <p *ngIf=\"isExpiredSession\" class=\"login-expired-subtitle\">{{ idleTimeoutMessage }}</p>\r\n                <p class=\"login-subtitle\">{{ enterCredentials }}</p>\r\n            </div>\r\n            <div *ngIf=\"validate\">\r\n                <h2 class=\"login-chooseSubscription\">{{ chooseSubscription }}</h2>\r\n                <p class=\"login-subtitle\">{{ accountName }}: {{ loginRequest.accountName }} </p>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <form>\r\n            <div class=\"login-form\">\r\n\r\n                <kendo-floatinglabel [text]=\"accountName\" *ngIf=\"!validate\">\r\n                    <input kendoTextBox [(ngModel)]=\"loginRequest.accountName\" (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"accountName\" type=\"text\" />\r\n                </kendo-floatinglabel>\r\n\r\n                <kendo-floatinglabel text=\"Password\" *ngIf=\"!validate\">\r\n                    <input kendoTextBox [(ngModel)]=\"loginRequest.password\" (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"password\" [type]=\"hide ? 'password' : 'text'\" autocomplete=\"current-password\" />\r\n                    <m4-icon (click)=\"hide = !hide\" class=\"icon\" [icon]=\"hide ? 'tb-eyefilled':'tb-hide'\"></m4-icon>\r\n                </kendo-floatinglabel>\r\n\r\n                <div class=\"form-control\" *ngIf=\"subscriptionSelection && validate\">\r\n                    <kendo-floatinglabel text=\"{{ subscription }}\" style=\"border-bottom: 1px solid #005890\">\r\n\r\n                        <kendo-dropdownlist #dropdown [disabled]=\"loginSubscriptions?.length <= 1\"\r\n                            [data]=\"loginSubscriptions\" name=\"subscription\" textField=\"description\"\r\n                            valueField=\"subscriptionkey\" valuePrimitive=\"true\"\r\n                            [(ngModel)]=\"loginRequest.subscriptionKey\" style=\"position: relative;\"\r\n                            (ngModelChange)=\"onSubChange($event)\" (click)=\"isDropDownClicked()\">\r\n                        </kendo-dropdownlist>\r\n                        <m4-icon (click)=\"toggle(dropdown)\" class=\"icon\" \r\n                            [ngClass]=\" dropDownIsClicked ?  'upicon': 'downicon' \"\r\n                            icon=\"tb-circledrightfilled\"></m4-icon>\r\n                    </kendo-floatinglabel>\r\n                    <div>\r\n                        <p class=\"instancekey\" *ngIf=\"loginSubscriptions.length > 3\"> Subscription key:\r\n                            {{loginRequest.subscriptionKey}} {{instancekey}}</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"login-infos\">\r\n                    <div class=\"caps-lock\" *ngIf=\"capsLockOn\"><span class=\"k-icon k-i-warning\"></span> {{ blocMaiusc }}\r\n                    </div>\r\n                    <div class=\"login-error\" *ngIf=\"authService.errorMessage\">\r\n                        <span class=\"k-icon k-i-warning\"></span>{{ authService.errorMessage }}\r\n                    </div>\r\n                    <div class=\"login-info\" *ngIf=\"authService.okMessage\">\r\n                        <span class=\"k-icon k-i-warning\"></span>{{ authService.okMessage }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 0 1px;\">\r\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n                <button kendoButton class=\"login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\r\n                    <span class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\r\n                    <span *ngIf=\"!loading\" style=\"letter-spacing: 3px; text-transform: uppercase\">{{ buttonText\r\n                        }}</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"login-footer\">\r\n                <button kendoButton class=\"login-button\" style=\"background: grey\" (click)=\"back()\"\r\n                    *ngIf=\"!loading && validate\">\r\n                    <span *ngIf=\"!loading && validate\" style=\"letter-spacing: 3px\"> {{ buttonBack }}</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <div *ngIf=\"showSignUp\">\r\n                <p class=\"signup\" (click)=\"newUser()\">SignUp here!</p>\r\n            </div>\r\n            <!-- <div class=\"login-button-container\">\r\n                <button kendoButton class=\" login-button \" (click)=\"back()\" *ngIf=\"!loading && validate \">\r\n                    <span *ngIf=\"!loading && validate \" style=\"letter-spacing: 3px;\">\r\n                        < BACK</span>\r\n                </button>\r\n            </div> -->\r\n            <!-- <div class=\"login-button-container\">\r\n                <button kendoButton class=\" login-button \" (click)=\"login() \" [disabled]=\"disabledButton() \">\r\n                    <span class=\"k-icon k-i-loading \" *ngIf=\"loading \"></span>\r\n                    <span *ngIf=\"!loading \">{{ buttonText}}</span>\r\n                </button>\r\n            </div> -->\r\n        </div>\r\n        <div *ngIf=\"!validate\" style=\"display: flex; margin-top: 40px; justify-content: flex-end\">\r\n            <p class=\"forgotpwd\" (click)=\"goToForgotPassword()\">\r\n                <u>{{ forgetPassword }}</u>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div style=\"position: absolute; bottom: 0; width: 100%; z-index: 0\">\r\n        <p class=\"copyright copyright-abs\">Login v2.3.0+6 \u00A9 2017 - {{ currentYear }}, Zucchetti s.p.a. </p>\r\n    </div>\r\n</div>", styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;background:#d0e4ff}.k-list{background:#fff;color:#005890}.k-list .k-item.k-state-selected,.k-list .k-list-optionlabel.k-state-selected,.k-list .k-item.k-state-selected:hover,.k-list .k-list-optionlabel.k-state-selected:hover,.k-list .k-item:hover,.k-list .k-item.k-state-hover,.k-list-optionlabel:hover,.k-list-optionlabel.k-state-hover,.k-list-item.k-selected:hover{color:#005890;background-color:#d0e4ff!important}.k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-list-item.k-selected,.k-selected.k-list-optionlabel,.k-list-item:hover,.k-list-optionlabel:hover,.k-list-item.k-hover,.k-hover.k-list-optionlabel{color:#005890!important;background-color:#d0e4ff!important}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.mat-dialog-container{background:white!important}::ng-deep html,::ng-deep body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}:host(tb-login){font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}:host(tb-login) .login-container{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-image:url(https://magocloud-store-pdf.s3.eu-west-1.amazonaws.com/login-bg.png);background-size:cover;background-repeat:no-repeat}:host(tb-login) .login-container .login{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){:host(tb-login) .login-container .login{padding:20px}}@media screen and (min-width: 576px){:host(tb-login) .login-container .login{max-width:450px}}:host(tb-login) .login-container .login .upicon{transform:rotate(90deg);padding:1px}:host(tb-login) .login-container .login .downicon{transform:rotate(270deg)}:host(tb-login) .login-container .login .login-header{display:flex;flex-direction:column}:host(tb-login) .login-container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:0}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container{width:100%;margin:8px 0}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container>.k-label{font-weight:600;color:#005890}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-textbox,:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-textbox .k-input,:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-textarea{border:none;border-bottom:2px solid #0078c3;border-radius:0;box-shadow:none;padding:5px 0;height:33px;color:#005890!important;font-size:16px}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-picker-md .k-input-inner{border-bottom:1px solid #0078c3;background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0;font-weight:600}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-picker{border-width:0px;border-style:unset}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container:after{background-color:#8ee2ff;height:1px}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-list .k-item.k-state-selected:hover,:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-list .k-list-optionlabel.k-state-selected:hover{color:#005890;background-color:#d0e4ff}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown{border:none;background:none}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0078c3}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}:host(tb-login) .login-container .login .login-infos{margin:20px 0}:host(tb-login) .login-container .login .login-infos .caps-lock{margin:0 0 10px;background:#005890;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em;display:flex;align-items:center}:host(tb-login) .login-container .login .login-infos .caps-lock span{margin-right:5px}:host(tb-login) .login-container .login .login-infos .login-error{margin:0 0 10px;background:#ee2411;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}:host(tb-login) .login-container .login .login-infos .login-error span{margin-right:5px}:host(tb-login) .login-container .login .login-infos .login-info{margin:0 0 10px;background:green;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}:host(tb-login) .login-container .login .login-infos .login-info span{margin-right:5px}:host(tb-login) .login-container .login .login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}:host(tb-login) .login-container .login .login-footer .login-button{padding:4px 12px;background:#e77b2d;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0)}:host(tb-login) .login-container .login .login-footer .login-button.k-state-disabled{background:#c0c6c9;cursor:not-allowed}:host(tb-login) .login-container .login .login-footer .login-button .k-i-loading{font-size:20px}:host(tb-login) p.instancekey{font-size:9px;font-weight:300;text-indent:1px;color:#005890}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) p.forgotpwd{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}:host(tb-login) p.signup{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}:host(tb-login) input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important}:host(tb-login) :focus{outline:none}:host(tb-login) .login-title{margin-top:20px;margin-left:-2px;color:#005890;font-weight:600;font-size:1.5rem}:host(tb-login) .login-subtitle{margin-top:-10px;margin-left:-1.5px;color:#005890}:host(tb-login) .login-expired-subtitle{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:700}:host(tb-login) .login-chooseSubscription{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}:host(tb-login) .login-sign-in{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}:host(tb-login) .icon{position:absolute;bottom:6px;right:0;cursor:pointer;color:#005890;font-size:14px;padding-bottom:2px;z-index:333}@media (min-width: 576px){:host(tb-login) .login{padding:20px}:host(tb-login) .login .login-form ::ng-deep .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){:host(tb-login) .login-title{font-size:19px}:host(tb-login) .login-sign-in{font-size:x-large}}\n"] }]
        }], function () {
        return [{ type: TbAuthService }, { type: i2$1.Router }, { type: i1.MatDialog }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }];
    }, { dropdown: [{
                type: ViewChild,
                args: ['dropdown']
            }] });
})();
// workaround for chromium bug https://bugs.chromium.org/p/chromium/issues/detail?id=352527
function webkitAutofillWorkaround() {
    setTimeout(() => {
        try {
            document
                .querySelectorAll('input:-webkit-autofill')
                .forEach((el) => (el.parentElement.className = 'k-floating-label-container'));
        }
        catch (_a) {
            // no webkit browser
        }
    }, 1000);
}
// ---------------------------------------------------------------------------
function hasAutofill() {
    try {
        return !!document.querySelector('input:-webkit-autofill');
    }
    catch (_a) {
        return false;
    }
}

class TbLogoffComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.LogOff();
    }
    LogOff() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entering LogOff..');
            const logoff = yield this.authService.logoff();
            if (logoff.Result) {
                // if usergateway url exists, then redirect to it
                this.authService.navigateUserGateway();
            }
        });
    }
}
/** @nocollapse */ /** @nocollapse */ TbLogoffComponent.ɵfac = function TbLogoffComponent_Factory(t) { return new (t || TbLogoffComponent)(i0.ɵɵdirectiveInject(TbAuthService), i0.ɵɵdirectiveInject(i2$1.Router)); };
/** @nocollapse */ /** @nocollapse */ TbLogoffComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: TbLogoffComponent, selectors: [["tb-logoff"]], decls: 0, vars: 0, template: function TbLogoffComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLogoffComponent, [{
            type: Component,
            args: [{
                    selector: 'tb-logoff',
                    template: '',
                }]
        }], function () { return [{ type: TbAuthService }, { type: i2$1.Router }]; }, null);
})();

class AppMaterialModule {
}
/** @nocollapse */ /** @nocollapse */ AppMaterialModule.ɵfac = function AppMaterialModule_Factory(t) { return new (t || AppMaterialModule)(); };
/** @nocollapse */ /** @nocollapse */ AppMaterialModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: AppMaterialModule });
/** @nocollapse */ /** @nocollapse */ AppMaterialModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [[
            MatDialogModule,
            MatFormFieldModule, MatInputModule, MatFormFieldModule,
            // MatDividerModule,
            // MatAutocompleteModule,
            // MatButtonModule,
            // MatButtonToggleModule,
            // MatCardModule,
            MatCheckboxModule,
            // MatChipsModule,
            // MatDatepickerModule,
            // MatExpansionModule,
            // MatGridListModule,
            // MatIconModule,
            // MatInputModule,
            // MatListModule,
            // MatMenuModule,
            // MatNativeDateModule,
            // MatPaginatorModule,
            // MatProgressBarModule,
            // MatProgressSpinnerModule,
            // MatRadioModule,
            // MatRippleModule,
            // MatSelectModule,
            // MatSidenavModule,
            // MatSliderModule,
            // MatSlideToggleModule,
            // MatSnackBarModule,
            // MatSortModule,
            // MatStepperModule,
            // MatTableModule,
            // MatTabsModule,
            // MatToolbarModule,
            // MatBadgeModule,
            // MatTooltipModule
        ], MatDialogModule,
        MatFormFieldModule,
        // MatDividerModule,
        // MatAutocompleteModule,
        // MatButtonModule,
        // MatButtonToggleModule,
        // MatCardModule,
        MatCheckboxModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppMaterialModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        MatDialogModule,
                        MatFormFieldModule, MatInputModule, MatFormFieldModule,
                        // MatDividerModule,
                        // MatAutocompleteModule,
                        // MatButtonModule,
                        // MatButtonToggleModule,
                        // MatCardModule,
                        MatCheckboxModule,
                        // MatChipsModule,
                        // MatDatepickerModule,
                        // MatExpansionModule,
                        // MatGridListModule,
                        // MatIconModule,
                        // MatInputModule,
                        // MatListModule,
                        // MatMenuModule,
                        // MatNativeDateModule,
                        // MatPaginatorModule,
                        // MatProgressBarModule,
                        // MatProgressSpinnerModule,
                        // MatRadioModule,
                        // MatRippleModule,
                        // MatSelectModule,
                        // MatSidenavModule,
                        // MatSliderModule,
                        // MatSlideToggleModule,
                        // MatSnackBarModule,
                        // MatSortModule,
                        // MatStepperModule,
                        // MatTableModule,
                        // MatTabsModule,
                        // MatToolbarModule,
                        // MatBadgeModule,
                        // MatTooltipModule
                    ],
                    exports: [
                        MatDialogModule,
                        MatFormFieldModule,
                        // MatDividerModule,
                        // MatAutocompleteModule,
                        // MatButtonModule,
                        // MatButtonToggleModule,
                        // MatCardModule,
                        MatCheckboxModule,
                        // MatChipsModule,
                        // MatStepperModule,
                        // MatDatepickerModule,
                        // MatExpansionModule,
                        // MatGridListModule,
                        // MatIconModule,
                        // MatInputModule,
                        // MatListModule,
                        // MatMenuModule,
                        // MatNativeDateModule,
                        // MatPaginatorModule,
                        // MatProgressBarModule,
                        // MatProgressSpinnerModule,
                        // MatRadioModule,
                        // MatRippleModule,
                        // MatSelectModule,
                        // MatSidenavModule,
                        // MatSliderModule,
                        // MatSlideToggleModule,
                        // MatSnackBarModule,
                        // MatSortModule,
                        // MatTableModule,
                        // MatTabsModule,
                        // MatToolbarModule,
                        // MatTooltipModule,
                        // MatBadgeModule,
                    ],
                    declarations: []
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppMaterialModule, { imports: [MatDialogModule,
            MatFormFieldModule, MatInputModule, MatFormFieldModule,
            // MatDividerModule,
            // MatAutocompleteModule,
            // MatButtonModule,
            // MatButtonToggleModule,
            // MatCardModule,
            MatCheckboxModule], exports: [MatDialogModule,
            MatFormFieldModule,
            // MatDividerModule,
            // MatAutocompleteModule,
            // MatButtonModule,
            // MatButtonToggleModule,
            // MatCardModule,
            MatCheckboxModule] });
})();

const routes = [{ path: 'logoff', component: TbLogoffComponent, canActivate: [TbAuthGuard], pathMatch: 'full' }];
class TbAuthModule {
    static forRoot() {
        return {
            ngModule: TbAuthModule,
            providers: [
                TbAuthService
            ]
        };
    }
}
/** @nocollapse */ /** @nocollapse */ TbAuthModule.ɵfac = function TbAuthModule_Factory(t) { return new (t || TbAuthModule)(); };
/** @nocollapse */ /** @nocollapse */ TbAuthModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: TbAuthModule });
/** @nocollapse */ /** @nocollapse */ TbAuthModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            DropDownsModule,
            LabelModule,
            InputsModule,
            FloatingLabelModule,
            BrowserModule,
            BrowserAnimationsModule,
            AppMaterialModule,
            MatDialogModule,
            MatInputModule,
            MatFormFieldModule,
            TbIconsModule,
            RouterModule.forRoot(routes)
        ], RouterModule, AppMaterialModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthModule, [{
            type: NgModule,
            args: [{
                    declarations: [
                        TbLoginComponent,
                        TbLogoffComponent,
                        ForgotPasswordComponent,
                        ChangePasswordDialogComponent,
                        AlertDialogComponent,
                        OtpComponent
                    ],
                    entryComponents: [
                        ForgotPasswordComponent,
                        ChangePasswordDialogComponent,
                        AlertDialogComponent,
                        OtpComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        DropDownsModule,
                        LabelModule,
                        InputsModule,
                        FloatingLabelModule,
                        BrowserModule,
                        BrowserAnimationsModule,
                        AppMaterialModule,
                        MatDialogModule,
                        MatInputModule,
                        MatFormFieldModule,
                        TbIconsModule,
                        RouterModule.forRoot(routes)
                    ],
                    exports: [TbLoginComponent, TbLogoffComponent, RouterModule, AppMaterialModule]
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TbAuthModule, { declarations: [TbLoginComponent,
            TbLogoffComponent,
            ForgotPasswordComponent,
            ChangePasswordDialogComponent,
            AlertDialogComponent,
            OtpComponent], imports: [CommonModule,
            FormsModule,
            DropDownsModule,
            LabelModule,
            InputsModule,
            FloatingLabelModule,
            BrowserModule,
            BrowserAnimationsModule,
            AppMaterialModule,
            MatDialogModule,
            MatInputModule,
            MatFormFieldModule,
            TbIconsModule, i2$1.RouterModule], exports: [TbLoginComponent, TbLogoffComponent, RouterModule, AppMaterialModule] });
})();

/*
 * Public API Surface of login
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AppMaterialModule, ChangePasswordInfo, EntityStatus, IsValidTokenRequest, LoginRequest, LogoffRequest, OTPInfo, OperationResult, StorageVars, TbAuthGuard, TbAuthInterceptor, TbAuthModule, TbAuthService, TbLoginComponent, TbLogoffComponent, authService };
//# sourceMappingURL=tb-auth.mjs.map