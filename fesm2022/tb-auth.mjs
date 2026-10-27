import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, DOCUMENT, Inject, Injectable, NgModule, ViewChild, ViewEncapsulation } from "@angular/core";
import * as i1 from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import * as i2 from "@angular/router";
import { Router, RouterModule } from "@angular/router";
import * as _ from "lodash-es";
import { Subject, of } from "rxjs";
import { catchError, map, tap, timeout } from "rxjs/operators";
import * as i1$1 from "@angular/material/dialog";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import * as i3$1 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i4 from "@angular/forms";
import { FormsModule } from "@angular/forms";
import * as i5 from "@progress/kendo-angular-label";
import { FloatingLabelModule, LabelModule } from "@progress/kendo-angular-label";
import * as i6$1 from "@progress/kendo-angular-inputs";
import { InputsModule } from "@progress/kendo-angular-inputs";
import * as i3 from "@angular/material/snack-bar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import * as i6 from "@progress/kendo-angular-dropdowns";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { BrowserModule } from "@angular/platform-browser";
var LoginRequest = class {
	constructor() {
		this.token = "";
		this.appId = "M4";
		this.accountName = "";
		this.password = "";
		this.processID = "";
		this.otPassword = "";
		this.overwriteLogin = false;
		this.version = 3;
	}
};
var ChangePasswordInfo = class {
	constructor() {
		this.AccountName = "";
		this.Password = "";
		this.NewPassword = "";
		this.IgnoreOldPassword = false;
		this.JWTToken = "";
	}
};
var ExtraInfo = class {
	constructor() {
		this.AccountName = "";
		this.Email = "";
		this.ExtraInfo = "";
		this.MobilePhoneNr = "";
		this.MobilePhonePrefix = "";
		this.TOTPConfigured = null;
		this.TwoFactorType = null;
	}
};
var LogoffRequest = class {
	constructor(token) {
		this.token = token;
	}
};
var StorageVars = class {
	static {
		this.JWT = "M4_jwt_token";
	}
	static {
		this.LK = "M4_lk_token";
	}
	static {
		this.CULTURE = "M4_culture";
	}
	static {
		this.UI_CULTURE = "M4_ui_culture";
	}
	static {
		this.ACCOUNT_NAME = "M4_account_name";
	}
	static {
		this.ACCOUNT_ROLES = "M4_account_roles";
	}
	static {
		this.SUBSCRIPTION = "M4_subscription";
	}
	static {
		this.SUBSCRIPTION_DESCRIPTION = "M4_subscription_desc";
	}
	static {
		this.USER_GATEWAY_AUTOREDIRECT = "lastLoggedRedirect";
	}
	static {
		this.INSTANCEKEY = "M4_InstanceKey";
	}
	static {
		this.DONTSHOWUPDATEWARN = "DontShowUpdateWarn";
	}
};
var EntityStatus;
(function(EntityStatus) {
	EntityStatus[EntityStatus["None"] = 0] = "None";
	EntityStatus[EntityStatus["DBUnderMaintenance"] = 1] = "DBUnderMaintenance";
	EntityStatus[EntityStatus["Disabled"] = 2] = "Disabled";
	EntityStatus[EntityStatus["PrivacyMode"] = 4] = "PrivacyMode";
	EntityStatus[EntityStatus["Canary"] = 8] = "Canary";
	EntityStatus[EntityStatus["UpdateScheduled"] = 16] = "UpdateScheduled";
})(EntityStatus || (EntityStatus = {}));
var IsValidTokenRequest = class {
	constructor(token = "") {
		this.token = token;
	}
};
var OperationResult = class {
	constructor() {
		this.Result = false;
		this.Message = "";
		this.Code = 0;
	}
};
function ChangePasswordDialogComponent_Conditional_29_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "span", 17);
		i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Conditional_29_Template_span_click_0_listener() {
			i0.ɵɵrestoreView(_r1);
			const ctx_r1 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r1.hidenewpwd = !ctx_r1.hidenewpwd);
		});
		i0.ɵɵtext(1, " visibility ");
		i0.ɵɵelementEnd();
	}
}
function ChangePasswordDialogComponent_Conditional_30_Template(rf, ctx) {
	if (rf & 1) {
		const _r3 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "span", 17);
		i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Conditional_30_Template_span_click_0_listener() {
			i0.ɵɵrestoreView(_r3);
			const ctx_r1 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r1.hidenewpwd = !ctx_r1.hidenewpwd);
		});
		i0.ɵɵtext(1, " visibility_off ");
		i0.ɵɵelementEnd();
	}
}
function ChangePasswordDialogComponent_Conditional_33_Template(rf, ctx) {
	if (rf & 1) {
		const _r4 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "span", 17);
		i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Conditional_33_Template_span_click_0_listener() {
			i0.ɵɵrestoreView(_r4);
			const ctx_r1 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r1.hidenewpwd2 = !ctx_r1.hidenewpwd2);
		});
		i0.ɵɵtext(1, " visibility ");
		i0.ɵɵelementEnd();
	}
}
function ChangePasswordDialogComponent_Conditional_34_Template(rf, ctx) {
	if (rf & 1) {
		const _r5 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "span", 17);
		i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Conditional_34_Template_span_click_0_listener() {
			i0.ɵɵrestoreView(_r5);
			const ctx_r1 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r1.hidenewpwd2 = !ctx_r1.hidenewpwd2);
		});
		i0.ɵɵtext(1, " visibility_off ");
		i0.ɵɵelementEnd();
	}
}
function ChangePasswordDialogComponent_Conditional_36_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div", 9)(1, "p", 18);
		i0.ɵɵtext(2);
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r1 = i0.ɵɵnextContext();
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate(ctx_r1.blocMaiusc);
	}
}
function ChangePasswordDialogComponent_Conditional_37_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div", 10)(1, "p", 18);
		i0.ɵɵtext(2);
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r1 = i0.ɵɵnextContext();
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate(ctx_r1.authService.errorMessage);
	}
}
function ChangePasswordDialogComponent_Conditional_41_Template(rf, ctx) {
	if (rf & 1) i0.ɵɵelement(0, "span", 14);
}
function ChangePasswordDialogComponent_Conditional_42_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "span");
		i0.ɵɵtext(1);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = i0.ɵɵnextContext();
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate(ctx_r1.changeButton);
	}
}
var ChangePasswordDialogComponent = class ChangePasswordDialogComponent {
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
		this.newpwd = this.newpwd2 = "";
		this.authService.errorMessage = "";
		if (navigator.language.toLocaleLowerCase().startsWith("it")) {
			this.buttonCancel = "ANNULLA";
			this.changeButton = "CAMBIA";
			this.blocMaiusc = "Blocco maiuscole attivo";
		} else {
			this.buttonCancel = "CANCEL";
			this.changeButton = "CHANGE";
			this.blocMaiusc = "Caps lock on";
		}
	}
	ngOnInit() {}
	cancel() {
		this.authService.errorMessage = "";
		this.loginRequest.password = "";
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
		});
		if (result && result.Result) {
			this.authService.errorMessage = "";
			if (this.currentBrowserLanguage.startsWith("it")) this.authService.okMessage = "Password modificata con successo!";
			else this.authService.okMessage = "Password changed succesfully!";
			this.mdDialogRef.close();
		}
		this.loading = false;
	}
	keyUpFunction(event) {
		if (event.key === "Enter") {
			if (this.newpwd === this.newpwd2 && this.newpwd2 !== "" && this.newpwd2 !== void 0) this.confirm();
		}
		const capsOn = event.getModifierState && event.getModifierState("CapsLock");
		this.capsLockOn = capsOn;
	}
	static {
		this.ɵfac = function ChangePasswordDialogComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || ChangePasswordDialogComponent)(i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(TbAuthService));
		};
	}
	static {
		this.ɵcmp = i0.ɵɵdefineComponent({
			type: ChangePasswordDialogComponent,
			selectors: [["app-change-password-dialog"]],
			standalone: false,
			decls: 47,
			vars: 33,
			consts: [
				[
					2,
					"max-width",
					"450px"
				],
				[1, "title"],
				[
					1,
					"description",
					2,
					"margin-bottom",
					"10px"
				],
				[
					2,
					"margin-bottom",
					"30px"
				],
				[
					3,
					"text",
					"ngClass"
				],
				[
					"kendoTextBox",
					"",
					"name",
					"newpwd",
					"autocomplete",
					"current-password",
					3,
					"keyup",
					"ngModelChange",
					"ngModel",
					"type",
					"ngClass"
				],
				[
					1,
					"material-icons",
					"icon"
				],
				[
					"kendoTextBox",
					"",
					"name",
					"newpwd2",
					"autocomplete",
					"current-password",
					3,
					"keyup",
					"ngModelChange",
					"ngModel",
					"type",
					"ngClass"
				],
				[1, "login-infos"],
				[
					1,
					"caps-lock",
					"panel",
					"flex-center",
					"margin-bottom-5"
				],
				[
					1,
					"login-error",
					"panel",
					"flex-center",
					"margin-bottom-5"
				],
				[
					2,
					"display",
					"flex",
					"flex-direction",
					"row-reverse",
					"justify-content",
					"space-between",
					"padding",
					"0 1px",
					"margin-top",
					"30px"
				],
				[
					1,
					"login-footer",
					2,
					"display",
					"flex",
					"justify-content",
					"flex-end"
				],
				[
					"kendoButton",
					"",
					1,
					"buttons",
					"ok-button",
					3,
					"click",
					"disabled"
				],
				[
					1,
					"k-icon",
					"k-i-loading"
				],
				[1, "login-footer"],
				[
					"kendoButton",
					"",
					1,
					"buttons",
					"back-button",
					3,
					"click"
				],
				[
					1,
					"material-icons",
					"icon",
					3,
					"click"
				],
				[1, "no-margin"]
			],
			template: function ChangePasswordDialogComponent_Template(rf, ctx) {
				if (rf & 1) {
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
					i0.ɵɵcontrolCreate();
					i0.ɵɵlistener("keyup", function ChangePasswordDialogComponent_Template_input_keyup_28_listener($event) {
						return ctx.keyUpFunction($event);
					});
					i0.ɵɵtwoWayListener("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_28_listener($event) {
						i0.ɵɵtwoWayBindingSet(ctx.newpwd, $event) || (ctx.newpwd = $event);
						return $event;
					});
					i0.ɵɵelementEnd();
					i0.ɵɵconditionalCreate(29, ChangePasswordDialogComponent_Conditional_29_Template, 2, 0, "span", 6);
					i0.ɵɵconditionalCreate(30, ChangePasswordDialogComponent_Conditional_30_Template, 2, 0, "span", 6);
					i0.ɵɵelementEnd();
					i0.ɵɵelementStart(31, "kendo-floatinglabel", 4)(32, "input", 7);
					i0.ɵɵcontrolCreate();
					i0.ɵɵlistener("keyup", function ChangePasswordDialogComponent_Template_input_keyup_32_listener($event) {
						return ctx.keyUpFunction($event);
					});
					i0.ɵɵtwoWayListener("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_32_listener($event) {
						i0.ɵɵtwoWayBindingSet(ctx.newpwd2, $event) || (ctx.newpwd2 = $event);
						return $event;
					});
					i0.ɵɵelementEnd();
					i0.ɵɵconditionalCreate(33, ChangePasswordDialogComponent_Conditional_33_Template, 2, 0, "span", 6);
					i0.ɵɵconditionalCreate(34, ChangePasswordDialogComponent_Conditional_34_Template, 2, 0, "span", 6);
					i0.ɵɵelementEnd();
					i0.ɵɵelementStart(35, "div", 8);
					i0.ɵɵconditionalCreate(36, ChangePasswordDialogComponent_Conditional_36_Template, 3, 1, "div", 9);
					i0.ɵɵconditionalCreate(37, ChangePasswordDialogComponent_Conditional_37_Template, 3, 1, "div", 10);
					i0.ɵɵelementEnd();
					i0.ɵɵelementStart(38, "div", 11)(39, "div", 12)(40, "button", 13);
					i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_40_listener() {
						return ctx.confirm();
					});
					i0.ɵɵconditionalCreate(41, ChangePasswordDialogComponent_Conditional_41_Template, 1, 0, "span", 14);
					i0.ɵɵconditionalCreate(42, ChangePasswordDialogComponent_Conditional_42_Template, 2, 1, "span");
					i0.ɵɵelementEnd()();
					i0.ɵɵelementStart(43, "div", 15)(44, "button", 16);
					i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_44_listener() {
						return ctx.cancel();
					});
					i0.ɵɵelementStart(45, "span");
					i0.ɵɵtext(46);
					i0.ɵɵelementEnd()()()()();
				}
				if (rf & 2) {
					i0.ɵɵadvance(2);
					i0.ɵɵtextInterpolate(ctx.title);
					i0.ɵɵadvance(2);
					i0.ɵɵtextInterpolate1(" ", ctx.message_1);
					i0.ɵɵadvance(2);
					i0.ɵɵtextInterpolate1(" ", ctx.message_2);
					i0.ɵɵadvance();
					i0.ɵɵtextInterpolate(ctx.message_3);
					i0.ɵɵadvance(2);
					i0.ɵɵtextInterpolate1(" ", ctx.message_4);
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
					i0.ɵɵcontrol();
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.hidenewpwd === true ? 29 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.hidenewpwd === false ? 30 : -1);
					i0.ɵɵadvance();
					i0.ɵɵproperty("text", ctx.placeHolder_2)("ngClass", ctx.authService.errorMessage ? "border-bottom-error " : "border-bottom");
					i0.ɵɵadvance();
					i0.ɵɵtwoWayProperty("ngModel", ctx.newpwd2);
					i0.ɵɵproperty("type", ctx.hidenewpwd2 ? "password" : "text")("ngClass", ctx.authService.errorMessage ? "error-status" : "normal-state");
					i0.ɵɵcontrol();
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.hidenewpwd2 === true ? 33 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.hidenewpwd2 === false ? 34 : -1);
					i0.ɵɵadvance(2);
					i0.ɵɵconditional(ctx.capsLockOn ? 36 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.authService.errorMessage ? 37 : -1);
					i0.ɵɵadvance(3);
					i0.ɵɵproperty("disabled", ctx.newpwd === ctx.newpwd2 && ctx.newpwd2 !== "" && ctx.newpwd2 !== void 0 && ctx.loading === false ? false : true);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.loading ? 41 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(!ctx.loading ? 42 : -1);
					i0.ɵɵadvance(4);
					i0.ɵɵtextInterpolate(ctx.buttonCancel);
				}
			},
			dependencies: [
				i3$1.NgClass,
				i4.DefaultValueAccessor,
				i4.NgControlStatus,
				i4.NgModel,
				i5.FloatingLabelComponent,
				i6$1.TextBoxDirective
			],
			styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}  .k-list ::-webkit-scrollbar{background:#bfcdd5}  .k-list ::-webkit-scrollbar:hover{background:#d9d9d9}  .k-list ::-webkit-scrollbar-thumb{background:#6cafd1}  .k-list ::-webkit-scrollbar-thumb:hover{background:#005890}  .k-list{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}  .k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}  .k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width:768px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}  .kendo-dropdown{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width:490px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}  .kendo-dropdown{width:323px!important}}@media screen and (max-width:425px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}  .kendo-dropdown{width:273px!important}}@media screen and (max-width:375px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}  .kendo-dropdown{width:217px!important}}  .k-list-md .k-list-item, .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}  .k-list .k-item:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}  .k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;line-height:20px;margin-bottom:30px}.link[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE!important}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:#00000052}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:3px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#e7481c;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#e7481c}.login-infos[_ngcontent-%COMP%]   .login-warning[_ngcontent-%COMP%]{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4ab679}.login-infos[_ngcontent-%COMP%]   .login-info-reset-password[_ngcontent-%COMP%]{background:#005890}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:silver}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#e77b2d}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#ff9e18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:gray}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9f9f9f}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4ab679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68b388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#d03c13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#e7481c}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action{background-color:#4ab679!important;color:#fff!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:hover{background-color:#68b388!important;color:#fff!important}  .mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:#005890!important;background-color:#fff!important}  .k-input-inner{padding-inline:0!important}.no-border-width[_ngcontent-%COMP%]{border-width:0!important}.w-100[_ngcontent-%COMP%]{width:100%!important}.no-padding-inline[_ngcontent-%COMP%]{padding-inline:0!important}.no-box-shadow[_ngcontent-%COMP%]{box-shadow:none!important}.k-floating-label-container.k-empty[_ngcontent-%COMP%] > .k-floating-label[_ngcontent-%COMP%]{left:0}.k-floating-label-container[_ngcontent-%COMP%] > .k-floating-label[_ngcontent-%COMP%]{font-weight:600;color:#005890!important;font-size:14px;line-height:17px;left:0!important}[_ngcontent-%COMP%]::-moz-selection{background:gray!important;color:#fff!important}[_ngcontent-%COMP%]::selection{background:gray!important;color:#fff!important}  .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}  .mat-dialog-container .login-footer .back-button{background:gray}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:silver}  .mat-dialog-container .login-footer .ok-button{background:#4ab679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}.k-floating-label-container[_ngcontent-%COMP%] > .k-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textarea[_ngcontent-%COMP%]{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textarea[_ngcontent-%COMP%]:focus{background-color:#fff!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]::selection, .k-floating-label-container[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%]::selection, .k-floating-label-container[_ngcontent-%COMP%]   .k-textarea[_ngcontent-%COMP%]::selection{color:#fff;background-color:#909090}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker-md[_ngcontent-%COMP%]   .k-input-inner[_ngcontent-%COMP%]{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]{border-width:0px;border-style:unset}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]:focus-within{box-shadow:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]:focus{box-shadow:none}.k-floating-label-container[_ngcontent-%COMP%]:after{background-color:#8ee2ff;height:1px}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]   .k-input-button[_ngcontent-%COMP%]{border-color:transparent;display:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]{border:none;background:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]{border:none;border-radius:0;padding:0;box-shadow:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%] > .k-input[_ngcontent-%COMP%]{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-disabled[_ngcontent-%COMP%]{opacity:1;color:#fff}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-disabled[_ngcontent-%COMP%]   .k-select[_ngcontent-%COMP%]{display:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-disabled[_ngcontent-%COMP%]{filter:none;background:#0b85ce}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]   .k-select[_ngcontent-%COMP%]{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]   .k-select[_ngcontent-%COMP%]   .k-icon[_ngcontent-%COMP%]{color:#005890;display:none}  .k-floating-label-container>.k-floating-label, .k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}  .mat-mdc-dialog-container .mdc-dialog__surface{padding:24px!important;color:#005890!important;border-radius:0!important}  .mat-mdc-dialog-container .mdc-dialog__surface .div.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-mdc-dialog-container .mdc-dialog__surface .div.p.description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-mdc-dialog-container .mdc-dialog__surface ul{color:#005890!important}.k-floating-label-container[_ngcontent-%COMP%]{width:100%;margin:8px 0}.k-floating-label-container[_ngcontent-%COMP%]   .normal-state[_ngcontent-%COMP%]{color:#005890!important}.k-floating-label-container[_ngcontent-%COMP%]{padding-top:20.0000000004px;box-sizing:border-box;display:inline-flex;vertical-align:middle;position:relative;flex-direction:column;justify-content:stretch}p.no-margin[_ngcontent-%COMP%]{color:#fff!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}"],
			changeDetection: 1
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordDialogComponent, [{
		type: Component,
		args: [{
			selector: "app-change-password-dialog",
			changeDetection: ChangeDetectionStrategy.Eager,
			standalone: false,
			template: "<div style=\"max-width: 450px\">\n  <h1 class=\"title\">{{ title }}</h1>\n  <p class=\"description\" style=\"margin-bottom: 10px\">\n    {{ message_1 }}<strong> {{ message_2 }}</strong\n    >{{ message_3 }}<b> {{ message_4 }}</b>\n  </p>\n  <ul style=\"margin-bottom: 30px\">\n    <li>\n      {{ message_5 }} <b>{{ message_6 }}</b>\n    </li>\n    <li>\n      {{ message_7 }} <b>{{ message_8 }}</b>\n    </li>\n    <li>\n      <b>{{ message_9 }}</b> {{ message_10 }}\n    </li>\n    <li>\n      {{ message_11 }} <b>{{ pswRulesSymbol }}</b>\n    </li>\n  </ul>\n  <kendo-floatinglabel [text]=\"placeHolder_1\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error ' : 'border-bottom'\">\n    <input\n      kendoTextBox\n      (keyup)=\"keyUpFunction($event)\"\n      [(ngModel)]=\"newpwd\"\n      name=\"newpwd\"\n      [type]=\"hidenewpwd ? 'password' : 'text'\"\n      [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n      autocomplete=\"current-password\"\n      />\n    @if (hidenewpwd === true) {\n      <span (click)=\"hidenewpwd = !hidenewpwd\" class=\"material-icons icon\"> visibility </span>\n    }\n    @if (hidenewpwd === false) {\n      <span (click)=\"hidenewpwd = !hidenewpwd\" class=\"material-icons icon\"> visibility_off </span>\n    }\n  </kendo-floatinglabel>\n\n  <kendo-floatinglabel [text]=\"placeHolder_2\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error ' : 'border-bottom'\">\n    <input\n      kendoTextBox\n      (keyup)=\"keyUpFunction($event)\"\n      [(ngModel)]=\"newpwd2\"\n      name=\"newpwd2\"\n      [type]=\"hidenewpwd2 ? 'password' : 'text'\"\n      [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n      autocomplete=\"current-password\"\n      />\n    @if (hidenewpwd2 === true) {\n      <span (click)=\"hidenewpwd2 = !hidenewpwd2\" class=\"material-icons icon\"> visibility </span>\n    }\n    @if (hidenewpwd2 === false) {\n      <span (click)=\"hidenewpwd2 = !hidenewpwd2\" class=\"material-icons icon\"> visibility_off </span>\n    }\n  </kendo-floatinglabel>\n\n  <div class=\"login-infos\">\n    @if (capsLockOn) {\n      <div class=\"caps-lock panel flex-center margin-bottom-5\">\n        <p class=\"no-margin\">{{ blocMaiusc }}</p>\n      </div>\n    }\n    @if (authService.errorMessage) {\n      <div class=\"login-error panel flex-center margin-bottom-5\">\n        <p class=\"no-margin\">{{ authService.errorMessage }}</p>\n      </div>\n    }\n  </div>\n\n  <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 30px\">\n    <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n      <button\n        kendoButton\n        class=\"buttons ok-button\"\n        (click)=\"confirm()\"\n                [disabled]=\"\n                    this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined && loading === false ? false : true\n                \"\n        >\n        @if (loading) {\n          <span class=\"k-icon k-i-loading\"></span>\n        }\n        @if (!loading) {\n          <span>{{ changeButton }}</span>\n        }\n      </button>\n    </div>\n    <div class=\"login-footer\">\n      <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\n        <span>{{ buttonCancel }}</span>\n      </button>\n    </div>\n  </div>\n</div>\n",
			styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}::ng-deep .k-list ::-webkit-scrollbar{background:#bfcdd5}::ng-deep .k-list ::-webkit-scrollbar:hover{background:#d9d9d9}::ng-deep .k-list ::-webkit-scrollbar-thumb{background:#6cafd1}::ng-deep .k-list ::-webkit-scrollbar-thumb:hover{background:#005890}::ng-deep .k-list{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}::ng-deep .k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}::ng-deep .k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width:768px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}::ng-deep .kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width:490px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}::ng-deep .kendo-dropdown{width:323px!important}}@media screen and (max-width:425px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}::ng-deep .kendo-dropdown{width:273px!important}}@media screen and (max-width:375px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}::ng-deep .kendo-dropdown{width:217px!important}}::ng-deep .k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}::ng-deep .k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}::ng-deep .k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;line-height:20px;margin-bottom:30px}.link{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom{border-bottom:1px solid #0B85CE!important}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:#00000052}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:3px 0}.login-infos .caps-lock{background:#e7481c;display:flex;align-items:center}.login-infos .login-error{background:#e7481c}.login-infos .login-warning{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos .login-info{background:#4ab679}.login-infos .login-info-reset-password{background:#005890}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:silver}.login-footer .login-button{background:#e77b2d}.login-footer .login-button:hover:enabled{background:#ff9e18}.login-footer .back-button{background:gray}.login-footer .back-button:hover:enabled{background:#9f9f9f}.login-footer .ok-button{background:#4ab679}.login-footer .ok-button:hover:enabled{background:#68b388}.login-footer .error-button{background:#d03c13}.login-footer .error-button:hover:enabled{background:#e7481c}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}::ng-deep .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action{background-color:#4ab679!important;color:#fff!important}::ng-deep .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:hover{background-color:#68b388!important;color:#fff!important}::ng-deep .mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:#005890!important;background-color:#fff!important}::ng-deep .k-input-inner{padding-inline:0!important}.no-border-width{border-width:0!important}.w-100{width:100%!important}.no-padding-inline{padding-inline:0!important}.no-box-shadow{box-shadow:none!important}.k-floating-label-container.k-empty>.k-floating-label{left:0}.k-floating-label-container>.k-floating-label{font-weight:600;color:#005890!important;font-size:14px;line-height:17px;left:0!important}::-moz-selection{background:gray!important;color:#fff!important}::selection{background:gray!important;color:#fff!important}::ng-deep .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}::ng-deep .mat-dialog-container .login-footer .back-button{background:gray}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:silver}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4ab679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}.k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}.k-floating-label-container .k-textbox,.k-floating-label-container .k-textbox .k-input,.k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}.k-floating-label-container .k-textbox,.k-floating-label-container .k-textbox .k-input,.k-floating-label-container .k-textarea:focus{background-color:#fff!important}.k-floating-label-container .k-textbox::selection,.k-floating-label-container .k-input::selection,.k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}.k-floating-label-container .k-picker-md .k-input-inner{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}.k-floating-label-container .k-picker{border-width:0px;border-style:unset}.k-floating-label-container .k-picker:focus-within{box-shadow:none}.k-floating-label-container .k-picker:focus{box-shadow:none}.k-floating-label-container:after{background-color:#8ee2ff;height:1px}.k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}.k-floating-label-container .k-dropdown{border:none;background:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}.k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}.k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{filter:none;background:#0b85ce}.k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}::ng-deep .k-floating-label-container>.k-floating-label,.k-floating-label-container .k-textbox{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface{padding:24px!important;color:#005890!important;border-radius:0!important}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface .div.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface .div.p.description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface ul{color:#005890!important}.k-floating-label-container{width:100%;margin:8px 0}.k-floating-label-container .normal-state{color:#005890!important}.k-floating-label-container{padding-top:20.0000000004px;box-sizing:border-box;display:inline-flex;vertical-align:middle;position:relative;flex-direction:column;justify-content:stretch}p.no-margin{color:#fff!important}.k-floating-label-container .k-textbox{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}\n"]
		}]
	}], () => [
		{ type: i1$1.MatDialogRef },
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [MAT_DIALOG_DATA]
			}]
		},
		{ type: TbAuthService }
	], null);
})();
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ChangePasswordDialogComponent, {
		className: "ChangePasswordDialogComponent",
		filePath: "lib/pages/change-password-dialog/change-password-dialog.component.ts",
		lineNumber: 13
	});
})();
var AlertDialogComponent = class AlertDialogComponent {
	constructor(data, mdDialogRef) {
		this.data = data;
		this.mdDialogRef = mdDialogRef;
		this.title = "";
		this.message = "";
		this.dontshow = "";
		this.subkey = "";
		this.dontshowanymore = false;
	}
	ngOnInit() {
		this.title = this.data.Title;
		this.message = this.data.Message;
		this.dontshow = this.data.DontShow;
		this.subkey = this.data.SubKey;
	}
	showOptions(event) {
		if (this.dontshowanymore) localStorage.setItem("DONTSHOWUPDATEWARN", this.message);
		else localStorage.removeItem("DONTSHOWUPDATEWARN");
	}
	closeDialog() {
		this.mdDialogRef.close();
	}
	static {
		this.ɵfac = function AlertDialogComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || AlertDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1$1.MatDialogRef));
		};
	}
	static {
		this.ɵcmp = i0.ɵɵdefineComponent({
			type: AlertDialogComponent,
			selectors: [["app-alert-dialog"]],
			standalone: false,
			decls: 13,
			vars: 4,
			consts: [
				[
					2,
					"max-width",
					"450px"
				],
				[1, "title"],
				[
					1,
					"description",
					2,
					"width",
					"350px",
					3,
					"innerHTML"
				],
				[1, "wrap"],
				[
					"type",
					"checkbox",
					"id",
					"binding",
					"data-test",
					"loginDontShowAnymoreButton",
					"kendoCheckBox",
					"",
					3,
					"ngModelChange",
					"change",
					"ngModel"
				],
				[
					"for",
					"binding",
					1,
					"k-checkbox-label"
				],
				[
					2,
					"display",
					"flex",
					"flex-direction",
					"row-reverse",
					"justify-content",
					"space-between",
					"padding",
					"0 1px",
					"margin-top",
					"30px"
				],
				[
					1,
					"login-footer",
					2,
					"display",
					"flex",
					"justify-content",
					"flex-end"
				],
				[
					"kendoButton",
					"",
					"data-test",
					"loginUpdateButton",
					1,
					"buttons",
					"ok-button",
					3,
					"click"
				]
			],
			template: function AlertDialogComponent_Template(rf, ctx) {
				if (rf & 1) {
					i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
					i0.ɵɵtext(2);
					i0.ɵɵelementEnd();
					i0.ɵɵelement(3, "p", 2);
					i0.ɵɵelementStart(4, "div", 3)(5, "input", 4);
					i0.ɵɵcontrolCreate();
					i0.ɵɵtwoWayListener("ngModelChange", function AlertDialogComponent_Template_input_ngModelChange_5_listener($event) {
						i0.ɵɵtwoWayBindingSet(ctx.dontshowanymore, $event) || (ctx.dontshowanymore = $event);
						return $event;
					});
					i0.ɵɵlistener("change", function AlertDialogComponent_Template_input_change_5_listener($event) {
						return ctx.showOptions($event);
					});
					i0.ɵɵelementEnd();
					i0.ɵɵelementStart(6, "label", 5);
					i0.ɵɵtext(7);
					i0.ɵɵelementEnd()();
					i0.ɵɵelementStart(8, "div", 6)(9, "div", 7)(10, "button", 8);
					i0.ɵɵlistener("click", function AlertDialogComponent_Template_button_click_10_listener() {
						return ctx.closeDialog();
					});
					i0.ɵɵelementStart(11, "span");
					i0.ɵɵtext(12, " OK ");
					i0.ɵɵelementEnd()()()()();
				}
				if (rf & 2) {
					i0.ɵɵadvance(2);
					i0.ɵɵtextInterpolate(ctx.title);
					i0.ɵɵadvance();
					i0.ɵɵproperty("innerHTML", ctx.message, i0.ɵɵsanitizeHtml);
					i0.ɵɵadvance(2);
					i0.ɵɵtwoWayProperty("ngModel", ctx.dontshowanymore);
					i0.ɵɵcontrol();
					i0.ɵɵadvance(2);
					i0.ɵɵtextInterpolate1(" ", ctx.dontshow);
				}
			},
			dependencies: [
				i4.CheckboxControlValueAccessor,
				i4.NgControlStatus,
				i4.NgModel,
				i5.LabelDirective,
				i6$1.CheckBoxDirective
			],
			styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}  .k-list ::-webkit-scrollbar{background:#bfcdd5}  .k-list ::-webkit-scrollbar:hover{background:#d9d9d9}  .k-list ::-webkit-scrollbar-thumb{background:#6cafd1}  .k-list ::-webkit-scrollbar-thumb:hover{background:#005890}  .k-list{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}  .k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}  .k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width:768px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}  .kendo-dropdown{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width:490px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}  .kendo-dropdown{width:323px!important}}@media screen and (max-width:425px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}  .kendo-dropdown{width:273px!important}}@media screen and (max-width:375px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}  .kendo-dropdown{width:217px!important}}  .k-list-md .k-list-item, .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}  .k-list .k-item:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}  .k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;line-height:20px;margin-bottom:30px}.link[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE!important}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:#00000052}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:3px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#e7481c;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#e7481c}.login-infos[_ngcontent-%COMP%]   .login-warning[_ngcontent-%COMP%]{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4ab679}.login-infos[_ngcontent-%COMP%]   .login-info-reset-password[_ngcontent-%COMP%]{background:#005890}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:silver}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#e77b2d}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#ff9e18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:gray}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9f9f9f}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4ab679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68b388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#d03c13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#e7481c}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action{background-color:#4ab679!important;color:#fff!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:hover{background-color:#68b388!important;color:#fff!important}  .mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:#005890!important;background-color:#fff!important}  .k-input-inner{padding-inline:0!important}.no-border-width[_ngcontent-%COMP%]{border-width:0!important}.w-100[_ngcontent-%COMP%]{width:100%!important}.no-padding-inline[_ngcontent-%COMP%]{padding-inline:0!important}.no-box-shadow[_ngcontent-%COMP%]{box-shadow:none!important}.k-floating-label-container.k-empty[_ngcontent-%COMP%] > .k-floating-label[_ngcontent-%COMP%]{left:0}.k-floating-label-container[_ngcontent-%COMP%] > .k-floating-label[_ngcontent-%COMP%]{font-weight:600;color:#005890!important;font-size:14px;line-height:17px;left:0!important}[_ngcontent-%COMP%]::-moz-selection{background:gray!important;color:#fff!important}[_ngcontent-%COMP%]::selection{background:gray!important;color:#fff!important}  .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}  .mat-dialog-container .login-footer .back-button{background:gray}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:silver}  .mat-dialog-container .login-footer .ok-button{background:#4ab679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}.k-floating-label-container[_ngcontent-%COMP%] > .k-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textarea[_ngcontent-%COMP%]{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textarea[_ngcontent-%COMP%]:focus{background-color:#fff!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]::selection, .k-floating-label-container[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%]::selection, .k-floating-label-container[_ngcontent-%COMP%]   .k-textarea[_ngcontent-%COMP%]::selection{color:#fff;background-color:#909090}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker-md[_ngcontent-%COMP%]   .k-input-inner[_ngcontent-%COMP%]{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]{border-width:0px;border-style:unset}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]:focus-within{box-shadow:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]:focus{box-shadow:none}.k-floating-label-container[_ngcontent-%COMP%]:after{background-color:#8ee2ff;height:1px}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]   .k-input-button[_ngcontent-%COMP%]{border-color:transparent;display:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]{border:none;background:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]{border:none;border-radius:0;padding:0;box-shadow:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%] > .k-input[_ngcontent-%COMP%]{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-disabled[_ngcontent-%COMP%]{opacity:1;color:#fff}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-disabled[_ngcontent-%COMP%]   .k-select[_ngcontent-%COMP%]{display:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-disabled[_ngcontent-%COMP%]{filter:none;background:#0b85ce}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]   .k-select[_ngcontent-%COMP%]{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]   .k-select[_ngcontent-%COMP%]   .k-icon[_ngcontent-%COMP%]{color:#005890;display:none}  .k-floating-label-container>.k-floating-label, .k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}  .mat-mdc-dialog-container .mdc-dialog__surface{padding:24px!important;color:#005890!important;border-radius:0!important}  .mat-mdc-dialog-container .mdc-dialog__surface .div.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-mdc-dialog-container .mdc-dialog__surface .div.p.description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-mdc-dialog-container .mdc-dialog__surface ul{color:#005890!important}.k-floating-label-container[_ngcontent-%COMP%]{width:100%;margin:8px 0}.k-floating-label-container[_ngcontent-%COMP%]   .normal-state[_ngcontent-%COMP%]{color:#005890!important}.k-floating-label-container[_ngcontent-%COMP%]{padding-top:20.0000000004px;box-sizing:border-box;display:inline-flex;vertical-align:middle;position:relative;flex-direction:column;justify-content:stretch}p.no-margin[_ngcontent-%COMP%]{color:#fff!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}"],
			changeDetection: 1
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertDialogComponent, [{
		type: Component,
		args: [{
			selector: "app-alert-dialog",
			changeDetection: ChangeDetectionStrategy.Eager,
			standalone: false,
			template: "<div style=\"max-width: 450px\">\n    <h1 class=\"title\">{{ title }}</h1>\n    <p [innerHTML]=\"message\" class=\"description\" style=\"width: 350px\"></p>\n\n    <div class=\"wrap\">\n        <input type=\"checkbox\" id=\"binding\" data-test=\"loginDontShowAnymoreButton\" [(ngModel)]=\"dontshowanymore\" (change)=\"showOptions($event)\" kendoCheckBox />\n        <label class=\"k-checkbox-label\" for=\"binding\"> {{ dontshow }}</label>\n    </div>\n\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 30px\">\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n            <button kendoButton data-test=\"loginUpdateButton\" class=\"buttons ok-button\" (click)=\"closeDialog()\">\n                <span > OK </span>\n            </button>\n        </div>\n    </div>\n</div>\n",
			styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}::ng-deep .k-list ::-webkit-scrollbar{background:#bfcdd5}::ng-deep .k-list ::-webkit-scrollbar:hover{background:#d9d9d9}::ng-deep .k-list ::-webkit-scrollbar-thumb{background:#6cafd1}::ng-deep .k-list ::-webkit-scrollbar-thumb:hover{background:#005890}::ng-deep .k-list{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}::ng-deep .k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}::ng-deep .k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width:768px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}::ng-deep .kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width:490px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}::ng-deep .kendo-dropdown{width:323px!important}}@media screen and (max-width:425px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}::ng-deep .kendo-dropdown{width:273px!important}}@media screen and (max-width:375px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}::ng-deep .kendo-dropdown{width:217px!important}}::ng-deep .k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}::ng-deep .k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}::ng-deep .k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;line-height:20px;margin-bottom:30px}.link{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom{border-bottom:1px solid #0B85CE!important}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:#00000052}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:3px 0}.login-infos .caps-lock{background:#e7481c;display:flex;align-items:center}.login-infos .login-error{background:#e7481c}.login-infos .login-warning{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos .login-info{background:#4ab679}.login-infos .login-info-reset-password{background:#005890}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:silver}.login-footer .login-button{background:#e77b2d}.login-footer .login-button:hover:enabled{background:#ff9e18}.login-footer .back-button{background:gray}.login-footer .back-button:hover:enabled{background:#9f9f9f}.login-footer .ok-button{background:#4ab679}.login-footer .ok-button:hover:enabled{background:#68b388}.login-footer .error-button{background:#d03c13}.login-footer .error-button:hover:enabled{background:#e7481c}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}::ng-deep .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action{background-color:#4ab679!important;color:#fff!important}::ng-deep .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:hover{background-color:#68b388!important;color:#fff!important}::ng-deep .mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:#005890!important;background-color:#fff!important}::ng-deep .k-input-inner{padding-inline:0!important}.no-border-width{border-width:0!important}.w-100{width:100%!important}.no-padding-inline{padding-inline:0!important}.no-box-shadow{box-shadow:none!important}.k-floating-label-container.k-empty>.k-floating-label{left:0}.k-floating-label-container>.k-floating-label{font-weight:600;color:#005890!important;font-size:14px;line-height:17px;left:0!important}::-moz-selection{background:gray!important;color:#fff!important}::selection{background:gray!important;color:#fff!important}::ng-deep .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}::ng-deep .mat-dialog-container .login-footer .back-button{background:gray}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:silver}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4ab679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}.k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}.k-floating-label-container .k-textbox,.k-floating-label-container .k-textbox .k-input,.k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}.k-floating-label-container .k-textbox,.k-floating-label-container .k-textbox .k-input,.k-floating-label-container .k-textarea:focus{background-color:#fff!important}.k-floating-label-container .k-textbox::selection,.k-floating-label-container .k-input::selection,.k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}.k-floating-label-container .k-picker-md .k-input-inner{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}.k-floating-label-container .k-picker{border-width:0px;border-style:unset}.k-floating-label-container .k-picker:focus-within{box-shadow:none}.k-floating-label-container .k-picker:focus{box-shadow:none}.k-floating-label-container:after{background-color:#8ee2ff;height:1px}.k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}.k-floating-label-container .k-dropdown{border:none;background:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}.k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}.k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{filter:none;background:#0b85ce}.k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}::ng-deep .k-floating-label-container>.k-floating-label,.k-floating-label-container .k-textbox{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface{padding:24px!important;color:#005890!important;border-radius:0!important}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface .div.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface .div.p.description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface ul{color:#005890!important}.k-floating-label-container{width:100%;margin:8px 0}.k-floating-label-container .normal-state{color:#005890!important}.k-floating-label-container{padding-top:20.0000000004px;box-sizing:border-box;display:inline-flex;vertical-align:middle;position:relative;flex-direction:column;justify-content:stretch}p.no-margin{color:#fff!important}.k-floating-label-container .k-textbox{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}\n"]
		}]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [MAT_DIALOG_DATA]
		}]
	}, { type: i1$1.MatDialogRef }], null);
})();
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertDialogComponent, {
		className: "AlertDialogComponent",
		filePath: "lib/pages/alert-dialog/alert-dialog.component.ts",
		lineNumber: 12
	});
})();
let authServiceInstance;
const authService = () => authServiceInstance;
var TbAuthService = class TbAuthService {
	static {
		this.DEFAULT_ENV = {
			auth: {
				url: "http://localhost:10344/api/",
				storeUrl: "https://test-store.mago.cloud",
				iupurl: "",
				createAccountUrl: "http://localhost:4200",
				changePasswordUrl: "http://localhost:56392/api/",
				subscriptionSelection: false,
				showSignUp: false,
				appId: "M4",
				preLoginAppId: "MCloudPreLogin",
				redirectUrl: "/",
				isMagoWeb: false,
				redirectIfNotAuthenticated: false,
				userGatewayUrl: "",
				isRedirectExternal: true,
				loginPageUrl: "login",
				sessionStorage: false,
				snapshotServiceUrl: "",
				updatemessage_IT: "Sono previste attività di manutenzione ed aggiornamento, per questo sulla tua subscription @@sub potrebbero verificarsi brevi disservizi il <b> @@date</b>, dalle ore <b> @@starth</b> alle ore <b> @@endh</b>.</br>Attenzione, per consentire il corretto svolgimento dell'aggiornamento le procedure che durante lo stesso risulteranno ancora in esecuzione saranno interrotte.",
				updatemessage_EN: "Due to system maintenance and updates there might be disturbance in your subscription @@sub on the <b> @@date, between <b> @@starth and <b> @@endh</b>.</br> ",
				updatemessage_DE: "",
				updatemessage_BR: "",
				updatemessage_ES: "",
				updatemessage_BG: "",
				updatemessage_RO: "",
				updatemessage_PL: "",
				logoURL: "assets/images/magocloud-color.png",
				backgroundURL: "assets/images/login-bg-magocloud.png"
			},
			brand: {
				applicationName: "MagoCloud",
				bannerUrl: "assets/images/logomagocloud-white-312.png"
			}
		};
	}
	get router() {
		return this.injector.get(Router);
	}
	constructor(env, http, injector, dialog, snackBar) {
		this.http = http;
		this.injector = injector;
		this.dialog = dialog;
		this.snackBar = snackBar;
		this.loggedOut$ = new Subject();
		this.errorMessage = "";
		this.okMessage = "";
		this.useDCS = false;
		this.getBaseUrl = () => this.env.auth.url;
		this.getSnapshotServiceUrl = () => this.env.auth.snapshotServiceUrl;
		this.getLoginPageUrl = () => this.env.auth.loginPageUrl;
		this.getStoreUrl = () => this.env.auth.storeUrl;
		this.getAuthServiceUrl = () => this.env.auth.url;
		this.getIupUrl = () => this.env.auth.iupurl;
		this.getRedirectUrl = () => this.env.auth.redirectUrl;
		this.getIfIsMagoWeb = () => this.env.auth.isMagoWeb;
		this.getRedirectIfNotAuthenticated = () => this.env.auth.redirectIfNotAuthenticated;
		this.getUserGatewayUrl = () => this.env.auth.userGatewayUrl;
		this.getCreateAccountUrl = () => this.env.auth.createAccountUrl;
		this.getChangePasswordUrl = () => this.env.auth.changePasswordUrl;
		this.hasSubscriptionSelection = () => this.env.auth.subscriptionSelection;
		this.showSignUp = () => this.env.auth.showSignUp;
		this.getAppId = () => {
			return this.useDCS ? "DCS" : this.env.auth.appId;
		};
		this.getPreLoginAppId = () => this.env.auth.preLoginAppId;
		this.isSessionStorage = () => this.env.auth.sessionStorage;
		this.getLogoURL = () => this.env.auth.logoURL;
		this.getBackgroundURL = () => this.env.auth.backgroundURL;
		this.getBrandName = () => this.env.brand.applicationName;
		this.isRedirectExternal = () => this.env.auth.isRedirectExternal;
		this.getUpdateMessage_IT = () => this.env.auth.updatemessage_IT;
		this.getUpdateMessage_EN = () => this.env.auth.updatemessage_EN;
		this.getUpdateMessage_BR = () => this.env.auth.updatemessage_BR;
		this.getUpdateMessage_BG = () => this.env.auth.updatemessage_BG;
		this.getUpdateMessage_RO = () => this.env.auth.updatemessage_RO;
		this.getUpdateMessage_DE = () => this.env.auth.updatemessage_DE;
		this.getUpdateMessage_ES = () => this.env.auth.updatemessage_ES;
		this.getUpdateMessage_PL = () => this.env.auth.updatemessage_PL;
		authServiceInstance = this;
		this.env = _.defaultsDeep(env, TbAuthService.DEFAULT_ENV, env);
		console.log("TbAuthEnvironment", this.env);
		this.langIt = void 0;
	}
	async checkConnection() {
		return await this.http.get(this.getBaseUrl()).pipe(timeout(5e3), map((__) => true)).toPromise().catch((err) => {
			this.errorMessage = err.message;
			return false;
		}).catch((err) => false);
	}
	getAuthorizationHeader() {
		return JSON.stringify({
			type: "JWT",
			appId: "M4",
			securityValue: this.getToken()
		});
	}
	async prelogin(loginRequest) {
		console.log("prelogin...");
		return await this.http.post(this.getPreLoginUrl(), loginRequest).pipe(map((loginResponse) => {
			if (!loginResponse.Result) {
				if (loginResponse.ResultCode === 19) {
					console.log("AuthService(cod.19): Change Password Needed");
					this.openChangePasswordDialog(loginRequest);
				} else if (loginResponse.ResultCode === 4) console.log("AuthService (cod.4): Account confirmation Needed");
				else if (loginResponse.ResultCode === 46) {
					console.log("AuthService (cod.46): " + loginResponse.Message);
					loginResponse.Message = this.LangIT() ? "Codice non valido." : "Invalid code.";
				} else if (loginResponse.ResultCode === 58) {
					console.log("AuthService (cod.58): Account Locked");
					loginResponse.Message = this.getLockedUserMessage(loginResponse.Message);
				} else if (loginResponse.ResultCode === 143) console.log("PreLogin(cod.143): otp code needed");
				else if (loginResponse.ResultCode === 116) console.log("AuthService (cod.116): user already logged");
				if (loginResponse.ResultCode !== 143 && loginResponse.ResultCode !== 116) this.errorMessage = loginResponse.Message;
				this.okMessage = "";
				return loginResponse;
			}
			return loginResponse;
		})).toPromise();
	}
	async login(loginRequest) {
		let issue = false;
		console.log("login...");
		const loginresponse = await this.http.post(this.getLoginUrl(), loginRequest).pipe(map((loginResponse) => {
			if (!loginResponse.Result) {
				if (loginResponse.ResultCode === 19) {
					console.log("AuthService: Change Password Needed");
					this.openChangePasswordDialog(loginRequest);
					issue = true;
				} else if (loginResponse.ResultCode === 143) console.log("Login(cod.143): otp code needed");
				else if (loginResponse.ResultCode === 116) console.log("AuthService: user already logged");
				else if (loginResponse.ResultCode === 4) console.log("AuthService: Account confirmation Needed");
				else if (loginResponse.ResultCode === 58) {
					console.log("AuthService: Account Locked" + loginResponse.Message);
					loginResponse.Message = this.getLockedUserMessage(loginResponse.Message);
				} else if (loginResponse.ResultCode === 149) {
					console.log("AuthService: Subscription requires 2FA" + loginResponse.Message);
					loginResponse.Message = this.get2FARequiredMessage(loginRequest.subscriptionKey);
				} else {
					this.clearStorage();
					console.log("AuthService: Clearing storage due to Login failure for " + loginRequest.accountName + ", result code ", loginResponse.ResultCode);
				}
				loginResponse.Message = loginResponse.Message ? loginResponse.Message : "Login error...";
				console.log(loginResponse.Message);
				if (loginResponse.ResultCode === 143 || loginResponse.ResultCode === 116) this.errorMessage = "";
				else {
					this.okMessage = "";
					this.errorMessage = loginResponse.Message;
				}
				return loginResponse;
			}
			if (this.getName(loginResponse)) {
				this.storageData(loginResponse);
				return loginResponse;
			} else {
				console.log("AuthService: LogOff due to Account not allowed.");
				this.logoff();
				this.clearStorage();
				loginResponse.Message = "Account not allowed.";
				loginResponse.JwtToken = "";
				loginResponse.ResultCode = 999;
				loginResponse.Result = false;
				return loginResponse;
			}
		})).toPromise();
		if (issue) this.fixIssue(loginresponse);
		return loginresponse;
	}
	fixIssue(loginResponse) {
		console.log("Result to manage: " + loginResponse.ResultCode);
	}
	getLockedUserMessage(messageFromLogin) {
		if (!messageFromLogin) return messageFromLogin;
		const seconds = +messageFromLogin;
		let msg = messageFromLogin;
		if (isNaN(seconds)) return msg;
		if (seconds < 60 && seconds > -1) msg = `Login Locked. Please try again in ${seconds} seconds...`;
		else if (seconds >= 60) {
			const minVal = Math.round(seconds / 60);
			msg = minVal === 1 ? `Login Locked. Please try again in one minute...` : `Login Locked. Please try again in ${minVal} minutes...`;
		}
		return msg;
	}
	get2FARequiredMessage(description) {
		if (navigator.language.startsWith("it")) return `Questa subscription ${description} richiede l'autenticazione a due fattori! Leggi la mail per ulteriori dettagli`;
		return `This Subscription ${description} requires two factor autentication! Please read the Emails for further details.`;
	}
	async openUpdateAlertDialog(info, title, dontshow, accountName, subscriptionKey, processid) {
		this.errorMessage = "";
		this.dialog.open(AlertDialogComponent, { data: {
			Title: title,
			Message: info,
			DontShow: dontshow,
			SubKey: subscriptionKey
		} }).afterClosed().subscribe(() => {
			this.okMessage = "";
			this.errorMessage = "";
			if (this.isRedirectExternal()) {
				console.log("go external.");
				this.getRedirectUrlForSubscription(accountName, subscriptionKey, processid);
				return;
			}
			console.log("go internal!");
			this.router.navigate([this.getRedirectUrl()]);
		});
	}
	async openChangePasswordDialog(loginRequest) {
		this.errorMessage = "";
		let title;
		const pswRulesSymbol = (await this.getSymbolsToPromise()).Content;
		let message_1;
		let message_2;
		let message_3;
		let message_4;
		let message_5;
		let message_6;
		let message_7;
		let message_8;
		let message_9;
		let message_10;
		let message_11;
		let placeHolder_1;
		let placeHolder_2;
		const currentBrowserLanguage = navigator.language.toLocaleLowerCase();
		if (currentBrowserLanguage.startsWith("it")) {
			title = "Modifica password";
			message_1 = "La nuova password deve essere composta da almeno ";
			message_2 = "8 caratteri ";
			message_3 = "e contenere tassativamente ";
			message_4 = "3 di queste 4 condizioni:";
			message_5 = "avere almeno ";
			message_6 = "una maiuscola";
			message_7 = "avere ";
			message_8 = "caratteri minuscoli";
			message_9 = "almeno un numero ";
			message_10 = "(tra 0 e 9)";
			message_11 = "un simbolo tra questi a seguire ";
			placeHolder_1 = "Password";
			placeHolder_2 = "Conferma password";
		} else {
			title = "Change password";
			message_1 = "The new password must be at least ";
			message_2 = "8 characters ";
			message_3 = "and contain ";
			message_4 = "3 of these 4 conditions:";
			message_5 = "have at least ";
			message_6 = "one uppercase";
			message_7 = "have ";
			message_8 = "lowercase characters";
			message_9 = "at least one number ";
			message_10 = "(between 0 and 9)";
			message_11 = "one symbol among these to follow ";
			placeHolder_1 = "Password";
			placeHolder_2 = "Confirm password";
		}
		this.dialog.open(ChangePasswordDialogComponent, { data: {
			Title: title,
			Message_1: message_1,
			Message_2: message_2,
			Message_3: message_3,
			Message_4: message_4,
			Message_5: message_5,
			Message_6: message_6,
			Message_7: message_7,
			Message_8: message_8,
			Message_9: message_9,
			Message_10: message_10,
			Message_11: message_11,
			Message_12: pswRulesSymbol,
			PlaceHolder_1: placeHolder_1,
			PlaceHolder_2: placeHolder_2,
			LoginRequest: loginRequest,
			CurrentBrowserLanguage: currentBrowserLanguage
		} });
	}
	async isValidToken(authtoken = "") {
		if (!authtoken) {
			const opres = new OperationResult();
			opres.Message = "No authtoken";
			return opres;
		}
		return await this.http.post(this.getIsValidTokenUrl(), new IsValidTokenRequest(authtoken)).pipe(tap((jObj) => {
			if (!jObj.Result) {
				jObj.Message = jObj.Message ? jObj.Message : "isValidToken error...";
				console.log("AuthService: Clearing storage due to Token Validation failure");
				console.log("token: " + authtoken);
				this.clearStorage();
				this.errorMessage = jObj.Message;
			}
		}), catchError((error) => {
			console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
			const res = new OperationResult();
			res.Code = 666;
			if (!this.router.routerState.snapshot.url.includes(this.getLoginPageUrl())) this.router.navigate([this.getLoginPageUrl()]);
			return of(res);
		})).toPromise();
	}
	getCompaniesForUser(user) {
		return this.http.get(this.getSubsKeysForAccountUrl() + user).pipe(map((res) => {
			if (!res || !res.Result) return [];
			return res.Content && res.Content.subscriptions ? res.Content.subscriptions : [];
		}));
	}
	getIsValidTokenUrl() {
		return this.getBaseUrl() + "isvalidtoken/";
	}
	getLoginUrl() {
		return this.getBaseUrl() + "login/";
	}
	getPreLoginUrl() {
		return this.getBaseUrl() + "login/";
	}
	getLogoutUrl() {
		return this.getBaseUrl() + "logoff/";
	}
	getChangePasswordApiUrl() {
		return this.getChangePasswordUrl() + "changepassword/";
	}
	resendOTPUrl() {
		return this.getBaseUrl() + "resendotp_v3/";
	}
	OLDresendOTPUrl() {
		return this.getBaseUrl() + "resendotp/";
	}
	getResetPasswordUrl() {
		return this.getChangePasswordUrl() + "resetpassword/";
	}
	getSubsKeysForAccountUrl() {
		return this.getBaseUrl() + "subscriptionskeysforaccount/";
	}
	async changePassword(cpi) {
		const bodyString = JSON.stringify(cpi);
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return await this.http.post(this.getChangePasswordApiUrl(), bodyString, { headers }).pipe(map((res) => {
			if (!res || !res.Result) {
				this.errorMessage = res.Message + " (Code:" + res.Code + ")";
				return res;
			}
			return res;
		}), catchError((error) => {
			console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
			const res = new OperationResult();
			res.Code = 662;
			return of(res);
		})).toPromise();
	}
	LangIT() {
		if (this.langIt != null) this.langIt = navigator.language.startsWith("it");
		return this.langIt;
	}
	OLDresendOTP(accname, alternative) {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		let warning = this.LangIT() ? "Attenzione" : "Warning";
		let successMessage = this.LangIT() ? "Otp inviato" : "Otp sent";
		this.LangIT();
		return this.http.post(this.OLDresendOTPUrl() + accname + "/" + alternative, { headers }).pipe(map((res) => {
			if (!res) {
				res = new OperationResult();
				res.Code = 663;
				this.openSnackBar(`${warning}: ${res.Message}`, "OK");
			}
			this.openSnackBar(successMessage, "OK");
			return res;
		}), catchError((error) => {
			console.error(`Error Code: ${error.status}.\nMessage: ${error.message}`);
			const res = new OperationResult();
			res.Message = `Error Code: ${error.status}.\nMessage: ${error.message}`;
			res.Code = 669;
			this.openSnackBar(`${warning}: ${error.message}`, "OK");
			return of(res);
		}));
	}
	resendOTP2(accname, processID, alternative) {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		let warning = this.LangIT() ? "Attenzione" : "Warning";
		let successMessage;
		switch (alternative) {
			case 1:
				successMessage = this.LangIT() ? "Sms inviato" : "Sms sent";
				this.LangIT();
				break;
			case 2:
				successMessage = this.LangIT() ? "E-mail inviata" : "E-mail sent";
				this.LangIT();
				break;
			default:
				successMessage = this.LangIT() ? "Otp inviato" : "Otp sent";
				this.LangIT();
		}
		return this.http.post(this.resendOTPUrl() + accname + "/" + processID + "/" + alternative, { headers }).pipe(map((res) => {
			if (!res) {
				res = new OperationResult();
				res.Code = 663;
				this.openSnackBar(`${warning}: ${res.Message}`, "OK");
			}
			if (alternative !== 4) this.openSnackBar(successMessage, "OK");
			return res;
		}), catchError((error) => {
			console.error(`Error Code: ${error.status}.\nMessage: ${error.message}`);
			const res = new OperationResult();
			res.Message = `Error Code: ${error.status}.\nMessage: ${error.message}`;
			res.Code = 669;
			this.openSnackBar(`${warning}: ${error.message}`, "OK");
			return of(res);
		}));
	}
	async resetpassword(accname) {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return await this.http.post(this.getResetPasswordUrl() + accname, { headers }).pipe(map((res) => {
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
			if (!this.router.routerState.snapshot.url.includes(this.getLoginPageUrl())) this.router.navigate([this.getLoginPageUrl()]);
			return of(res);
		})).toPromise();
	}
	async logoff() {
		const logoffRequest = new LogoffRequest(this.getToken());
		return await this.http.post(this.getLogoutUrl(), logoffRequest).pipe(map((logoffResponse) => {
			if (logoffResponse.Result) {
				console.log("AuthService: Clearing storage due to Logoff");
				this.clearStorage();
				this.loggedOut$.next();
			}
			return logoffResponse;
		})).toPromise();
	}
	logoffWithFetch() {
		const logoffRequest = new LogoffRequest(this.getToken());
		let request = JSON.stringify(logoffRequest);
		fetch(this.getLogoutUrl(), {
			method: "POST",
			body: request,
			keepalive: true,
			headers: {
				"Content-Type": "application/json",
				Authorization: this.getAuthorizationHeader()
			}
		}).then((res) => {
			console.log(res);
		});
	}
	navigateUserGateway() {
		console.log("entering navigateUserGateway..");
		const userGatewayUrl = this.getUserGatewayUrl();
		if (userGatewayUrl !== "") {
			console.log(`Found getUserGatewayUrl ${userGatewayUrl}`);
			console.log(this.errorMessage);
			document.location.href = this.errorMessage ? `${userGatewayUrl}login?error="${this.errorMessage}"` : userGatewayUrl;
			return;
		}
		console.log("Redirecting to login page..");
		this.router.navigate([this.getLoginPageUrl()], { queryParams: { error: this.errorMessage } });
	}
	getRedirectUrlForSubscription(accountName, subscriptionKey, processid) {
		this.getInstancesMapForUser(accountName).subscribe((res) => {
			const map = res;
			if (!map || map.length === 0) throw new Error("instanceMap is invalid");
			const currentInstanceKey = map.filter((k) => k.SubscriptionKey === subscriptionKey).map((j) => j.InstanceKey)[0];
			this.getSnapshot(currentInstanceKey, subscriptionKey).subscribe((res) => {
				if (!res || res.length === 0) throw new Error("snapshot is empty");
				const services = res.Services;
				let redirectUrl = "";
				if (!this.useDCS) redirectUrl = services.filter((i) => i.ServiceType === "M4FRONTEND" || i.ServiceType === "APP_FRONTEND").map((f) => f.Url)[0];
				else redirectUrl = services.filter((i) => i.ServiceType === "DCS_FRONTEND").map((f) => f.Url)[0];
				console.log(`Designated redirect is ${redirectUrl}`);
				const baseRedirectUrl = `${redirectUrl}?jwt=${processid}&subKey=${subscriptionKey}&instanceKey=${currentInstanceKey}`;
				console.log(`Designated final redirect is ${baseRedirectUrl}`);
				if (this.env.auth.sessionStorage) sessionStorage.setItem(StorageVars.USER_GATEWAY_AUTOREDIRECT, baseRedirectUrl);
				else localStorage.setItem(StorageVars.USER_GATEWAY_AUTOREDIRECT, baseRedirectUrl);
				document.location.href = baseRedirectUrl;
			}, (err) => {
				console.log("snapshot cannot be obtained");
				throw new Error("snapshot cannot be obtained");
			});
		}, (err) => {
			console.log("getRedirectUrlForSubscription ia about to fail...");
			console.log(err);
			throw new Error("getInstancesMapForUser failed");
		});
	}
	getInstancesMapForUser(user) {
		return this.http.get(this.getInstancesMapForAccountUrl() + user).pipe(map((res) => {
			if (!res || !res.Result) return [];
			return res.Content;
		}));
	}
	async getCalendar(subscriptionKey) {
		var url = this.getCalendarUrl();
		if (!url || url.length === 0) {
			console.log("iupurl is not used.");
			return;
		}
		return await this.http.get(`${this.getCalendarUrl()}?SubscriptionKey=${subscriptionKey}`).pipe(map((res) => {
			if (!res || !res.Result) {
				this.errorMessage = res.Message + " (Code:" + res.Code + ")";
				return res;
			}
			return res;
		}), catchError((error) => {
			console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
			const res = new OperationResult();
			res.Code = 662;
			return of(res);
		})).toPromise();
	}
	getSnapshot(instanceKey, subscriptionKey) {
		return this.http.get(this.getSnapshotServiceUrl() + instanceKey + "?subscriptionKey=" + subscriptionKey).pipe(map((res) => {
			if (!res || !res.Result) return [];
			return res.Content;
		}));
	}
	getInstancesMapForAccountUrl() {
		return this.getBaseUrl() + "instancesMap/";
	}
	getCalendarUrl() {
		var iupurl = this.getIupUrl();
		if (!iupurl || iupurl.length === 0) return null;
		return iupurl + "calendarjobs/";
	}
	getUpdateMessage() {
		var currentBrowserLanguage = navigator.language.toLocaleLowerCase();
		if (currentBrowserLanguage.startsWith("it")) return this.getUpdateMessage_IT() ?? this.getUpdateMessage_EN();
		if (currentBrowserLanguage.startsWith("de")) return this.getUpdateMessage_DE() ?? this.getUpdateMessage_EN();
		if (currentBrowserLanguage.startsWith("pt")) return this.getUpdateMessage_BR() ?? this.getUpdateMessage_EN();
		if (currentBrowserLanguage.startsWith("bg")) return this.getUpdateMessage_BG() ?? this.getUpdateMessage_EN();
		if (currentBrowserLanguage.startsWith("es")) return this.getUpdateMessage_ES() ?? this.getUpdateMessage_EN();
		if (currentBrowserLanguage.startsWith("pl")) return this.getUpdateMessage_PL() ?? this.getUpdateMessage_EN();
		if (currentBrowserLanguage.startsWith("ro")) return this.getUpdateMessage_RO() ?? this.getUpdateMessage_EN();
		else return this.getUpdateMessage_EN();
	}
	clearStorage() {
		sessionStorage.removeItem(StorageVars.JWT);
		sessionStorage.removeItem(StorageVars.CULTURE);
		sessionStorage.removeItem(StorageVars.UI_CULTURE);
		sessionStorage.removeItem(StorageVars.ACCOUNT_ROLES);
		sessionStorage.removeItem(StorageVars.LK);
		localStorage.removeItem(StorageVars.JWT);
		localStorage.removeItem(StorageVars.CULTURE);
		localStorage.removeItem(StorageVars.UI_CULTURE);
		localStorage.removeItem(StorageVars.ACCOUNT_ROLES);
		localStorage.removeItem(StorageVars.USER_GATEWAY_AUTOREDIRECT);
		localStorage.removeItem(StorageVars.LK);
	}
	storageSubscriptionData(subscriptionKey, subscriptionDescription) {
		if (this.env.auth.sessionStorage) {
			sessionStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
			sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
		} else {
			localStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
			localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
		}
	}
	storageQueryParams(subscriptionKey, instanceKey) {
		if (this.env.auth.sessionStorage) sessionStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
		else localStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
		this.setInstanceKey(instanceKey);
	}
	getName(loginResponse) {
		return loginResponse.AskingProcess === this.getAppId();
	}
	storageData(loginResponse) {
		const respCulture = loginResponse.RegionalSettings === void 0 || loginResponse.RegionalSettings.length === 0 ? window.navigator.language : loginResponse.RegionalSettings;
		const respUiCulture = loginResponse.Language === void 0 || loginResponse.Language.length === 0 ? window.navigator.language : loginResponse.Language;
		if (this.env.auth.sessionStorage) {
			sessionStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
			sessionStorage.setItem(StorageVars.LK, loginResponse.LoginKey);
			sessionStorage.setItem(StorageVars.CULTURE, respCulture);
			sessionStorage.setItem(StorageVars.UI_CULTURE, respUiCulture);
			sessionStorage.setItem(StorageVars.ACCOUNT_ROLES, JSON.stringify(loginResponse.Roles));
			if (loginResponse.AccountName) sessionStorage.setItem(StorageVars.ACCOUNT_NAME, loginResponse.AccountName);
			if (loginResponse.SubscriptionKey) sessionStorage.setItem(StorageVars.SUBSCRIPTION, loginResponse.SubscriptionKey);
			if (loginResponse.SubscriptionDesc) sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, loginResponse.SubscriptionDesc);
		} else {
			localStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
			localStorage.setItem(StorageVars.LK, loginResponse.LoginKey);
			localStorage.setItem(StorageVars.CULTURE, respCulture);
			localStorage.setItem(StorageVars.UI_CULTURE, respUiCulture);
			localStorage.setItem(StorageVars.ACCOUNT_ROLES, JSON.stringify(loginResponse.Roles));
			if (loginResponse.AccountName) localStorage.setItem(StorageVars.ACCOUNT_NAME, loginResponse.AccountName);
			if (loginResponse.SubscriptionKey) localStorage.setItem(StorageVars.SUBSCRIPTION, loginResponse.SubscriptionKey);
			if (loginResponse.SubscriptionDesc) localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, loginResponse.SubscriptionDesc);
		}
	}
	async getSymbolsToPromise() {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return await this.http.get(this.getSymbolsUrl(), { headers }).toPromise();
	}
	getSymbolsUrl() {
		return this.getChangePasswordUrl() + "getsymbols/";
	}
	saveCulture(culture, uiCulture) {
		if (this.env.auth.sessionStorage) {
			sessionStorage.setItem(StorageVars.CULTURE, culture);
			sessionStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
		} else {
			localStorage.setItem(StorageVars.CULTURE, culture);
			localStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
		}
	}
	openSnackBar(message, action) {
		this.snackBar.open(message, action, { duration: 5e3 });
	}
	getToken() {
		if (this.env.auth.sessionStorage) return sessionStorage.getItem(StorageVars.JWT);
		else return localStorage.getItem(StorageVars.JWT);
	}
	getLoginKey() {
		if (this.env.auth.sessionStorage) return sessionStorage.getItem(StorageVars.LK);
		else return localStorage.getItem(StorageVars.LK);
	}
	getRedirect() {
		if (this.env.auth.sessionStorage) return sessionStorage.getItem(StorageVars.USER_GATEWAY_AUTOREDIRECT);
		else return localStorage.getItem(StorageVars.USER_GATEWAY_AUTOREDIRECT);
	}
	getAccountName() {
		if (this.env.auth.sessionStorage) return sessionStorage.getItem(StorageVars.ACCOUNT_NAME);
		else return localStorage.getItem(StorageVars.ACCOUNT_NAME);
	}
	getSubscription() {
		if (this.env.auth.sessionStorage) return sessionStorage.getItem(StorageVars.SUBSCRIPTION);
		else return localStorage.getItem(StorageVars.SUBSCRIPTION);
	}
	getSubscriptionDescription() {
		if (this.env.auth.sessionStorage) return sessionStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
		else return localStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
	}
	getCulture() {
		if (this.env.auth.sessionStorage) return sessionStorage.getItem(StorageVars.CULTURE);
		else return localStorage.getItem(StorageVars.CULTURE);
	}
	getUICulture() {
		if (this.env.auth.sessionStorage) return sessionStorage.getItem(StorageVars.UI_CULTURE);
		else return localStorage.getItem(StorageVars.UI_CULTURE);
	}
	getInstanceKey() {
		if (this.env.auth.sessionStorage) return sessionStorage.getItem(StorageVars.INSTANCEKEY);
		else return localStorage.getItem(StorageVars.INSTANCEKEY);
	}
	setInstanceKey(instanceKey) {
		if (this.env.auth.sessionStorage) sessionStorage.setItem(StorageVars.INSTANCEKEY, instanceKey);
		else localStorage.getItem(StorageVars.INSTANCEKEY);
	}
	static {
		this.ɵfac = function TbAuthService_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TbAuthService)(i0.ɵɵinject("env"), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1$1.MatDialog), i0.ɵɵinject(i3.MatSnackBar));
		};
	}
	static {
		this.ɵprov = i0.ɵɵdefineInjectable({
			token: TbAuthService,
			factory: TbAuthService.ɵfac,
			providedIn: "root"
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: ["env"]
			}]
		},
		{ type: i1.HttpClient },
		{ type: i0.Injector },
		{ type: i1$1.MatDialog },
		{ type: i3.MatSnackBar }
	], null);
})();
var TbAuthGuard = class TbAuthGuard {
	constructor(authService, router, env) {
		this.authService = authService;
		this.router = router;
		this.env = env;
	}
	async canActivate(next, state) {
		const jwt = next.queryParams.hasOwnProperty("jwt") ? next.queryParams.jwt : null;
		const subKey = next.queryParams.hasOwnProperty("subKey") ? next.queryParams.subKey : null;
		const instanceKey = next.queryParams.hasOwnProperty("instanceKey") ? next.queryParams.instanceKey : null;
		const ns = next.queryParams.hasOwnProperty("ns") ? next.queryParams.ns : null;
		const args = next.queryParams.hasOwnProperty("args") ? next.queryParams.args : null;
		const tempToken = this.authService.getToken() || "";
		if (!jwt && this.env.auth.redirectIfNotAuthenticated && this.authService.getUserGatewayUrl() && !tempToken) {
			this.authService.navigateUserGateway();
			return true;
		}
		if (!await this.authService.checkConnection()) {
			console.log(`CONNECTIONDOWN on: ${this.authService.getBaseUrl()}`);
			if (!state.url.includes("/login")) this.router.navigate(["login"]);
			return true;
		}
		if (state.url.includes(this.authService.getLoginPageUrl())) {
			this.authService.clearStorage();
			if (state.url.endsWith("error=")) location.replace(state.url.split("?")[0]);
			return true;
		}
		if (subKey && instanceKey) this.authService.storageQueryParams(subKey, instanceKey);
		if (jwt && subKey && instanceKey) {
			const loginRequest = new LoginRequest();
			loginRequest.token = jwt;
			loginRequest.subscriptionKey = subKey;
			loginRequest.appId = this.authService.getAppId();
			console.log("login by token...");
			const loginResponse = await this.authService.login(loginRequest).catch((err) => {
				this.authService.errorMessage = err.error && err.error.Message;
				this.router.navigate(["login"], { queryParams: { error: this.authService.errorMessage } });
			});
			if (!loginResponse) {
				this.router.navigate(["login"], { queryParams: { error: this.authService.errorMessage } });
				return false;
			}
			if (loginResponse.Result) {
				this.authService.errorMessage = "";
				const url = ns ? "document" : this.authService.getRedirectUrl();
				this.router.navigate([url], {
					replaceUrl: true,
					queryParams: {
						jwt: null,
						subKey: null,
						ns,
						args
					},
					queryParamsHandling: "merge"
				});
				return true;
			}
		}
		const authtoken = this.authService.getToken() || "";
		if (authtoken) {
			if ((await this.authService.isValidToken(authtoken)).Result) {
				if (state.url.includes(this.authService.getLoginPageUrl())) this.router.navigate([this.authService.getRedirectUrl()]);
				return true;
			} else {
				this.router.navigate([this.authService.getLoginPageUrl()]);
				return false;
			}
		} else {
			if (!state.url.includes(this.authService.getLoginPageUrl())) this.router.navigate([this.authService.getLoginPageUrl()]);
			return true;
		}
	}
	static {
		this.ɵfac = function TbAuthGuard_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TbAuthGuard)(i0.ɵɵinject(TbAuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject("env"));
		};
	}
	static {
		this.ɵprov = i0.ɵɵdefineInjectable({
			token: TbAuthGuard,
			factory: TbAuthGuard.ɵfac,
			providedIn: "root"
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthGuard, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [
		{ type: TbAuthService },
		{ type: i2.Router },
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: ["env"]
			}]
		}
	], null);
})();
var TbAuthInterceptor = class TbAuthInterceptor {
	constructor(env, authService) {
		this.authService = authService;
		this.env = env;
	}
	intercept(request, next) {
		let token = JSON.stringify({
			type: "app",
			appId: "LOGINAPP",
			securityValue: "1l4r14m"
		});
		const jwt = this.authService.getToken();
		if (jwt) token = JSON.stringify({
			type: "jwt",
			appId: this.env.auth.appId,
			securityValue: jwt
		});
		request = request.clone({ setHeaders: { Authorization: token } });
		return next.handle(request).pipe();
	}
	static {
		this.ɵfac = function TbAuthInterceptor_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TbAuthInterceptor)(i0.ɵɵinject("env"), i0.ɵɵinject(TbAuthService));
		};
	}
	static {
		this.ɵprov = i0.ɵɵdefineInjectable({
			token: TbAuthInterceptor,
			factory: TbAuthInterceptor.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthInterceptor, [{ type: Injectable }], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: ["env"]
		}]
	}, { type: TbAuthService }], null);
})();
var AppMaterialModule = class AppMaterialModule {
	static {
		this.ɵfac = function AppMaterialModule_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || AppMaterialModule)();
		};
	}
	static {
		this.ɵmod = i0.ɵɵdefineNgModule({ type: AppMaterialModule });
	}
	static {
		this.ɵinj = i0.ɵɵdefineInjector({ imports: [
			MatDialogModule,
			MatFormFieldModule,
			MatInputModule,
			MatFormFieldModule,
			MatCheckboxModule,
			MatSnackBarModule,
			MatDialogModule,
			MatFormFieldModule,
			MatCheckboxModule,
			MatSnackBarModule
		] });
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppMaterialModule, [{
		type: NgModule,
		args: [{
			imports: [
				MatDialogModule,
				MatFormFieldModule,
				MatInputModule,
				MatFormFieldModule,
				MatCheckboxModule,
				MatSnackBarModule
			],
			exports: [
				MatDialogModule,
				MatFormFieldModule,
				MatCheckboxModule,
				MatSnackBarModule
			],
			declarations: []
		}]
	}], null, null);
})();
(function() {
	(typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppMaterialModule, {
		imports: [
			MatDialogModule,
			MatFormFieldModule,
			MatInputModule,
			MatFormFieldModule,
			MatCheckboxModule,
			MatSnackBarModule
		],
		exports: [
			MatDialogModule,
			MatFormFieldModule,
			MatCheckboxModule,
			MatSnackBarModule
		]
	});
})();
var ForgotPasswordComponent = class ForgotPasswordComponent {
	constructor(mdDialogRef, data) {
		this.mdDialogRef = mdDialogRef;
		this.data = data;
		this.title = data.Title;
		this.message = data.Message;
		this.message = data.Message;
		this.placeHolder = data.PlaceHolder;
		this.inputValue = data.TextValue;
		if (navigator.language.toLocaleLowerCase().startsWith("it")) {
			this.cancelButton = "ANNULLA";
			this.sendButton = "INVIA";
		} else {
			this.cancelButton = "CANCEL";
			this.sendButton = "SEND";
		}
	}
	ngOnInit() {}
	cancel() {
		this.data = void 0;
		this.mdDialogRef.close(this.data);
	}
	confirm() {
		this.data.TextValue = this.inputValue;
		this.mdDialogRef.close(this.data);
	}
	static {
		this.ɵfac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || ForgotPasswordComponent)(i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA));
		};
	}
	static {
		this.ɵcmp = i0.ɵɵdefineComponent({
			type: ForgotPasswordComponent,
			selectors: [["forgot-password-dialog"]],
			standalone: false,
			decls: 16,
			vars: 7,
			consts: [
				[1, "title"],
				[
					1,
					"description",
					2,
					"width",
					"350px"
				],
				[
					1,
					"border-bottom",
					"w-100",
					3,
					"text"
				],
				[
					"kendoTextBox",
					"",
					"name",
					"accountName",
					"type",
					"text",
					1,
					"normal-state",
					"no-border-width",
					"no-padding-inline",
					"no-box-shadow",
					3,
					"ngModelChange",
					"ngModel"
				],
				[
					2,
					"display",
					"flex",
					"flex-direction",
					"row-reverse",
					"justify-content",
					"space-between",
					"padding",
					"0 1px",
					"margin-top",
					"30px"
				],
				[
					1,
					"login-footer",
					2,
					"display",
					"flex",
					"justify-content",
					"flex-end"
				],
				[
					"kendoButton",
					"",
					1,
					"buttons",
					"ok-button",
					3,
					"click",
					"disabled"
				],
				[1, "login-footer"],
				[
					"kendoButton",
					"",
					1,
					"buttons",
					"back-button",
					3,
					"click"
				]
			],
			template: function ForgotPasswordComponent_Template(rf, ctx) {
				if (rf & 1) {
					i0.ɵɵelementStart(0, "div")(1, "h1", 0);
					i0.ɵɵtext(2);
					i0.ɵɵelementEnd();
					i0.ɵɵelementStart(3, "p", 1);
					i0.ɵɵtext(4);
					i0.ɵɵelementEnd();
					i0.ɵɵelementStart(5, "kendo-floatinglabel", 2)(6, "input", 3);
					i0.ɵɵcontrolCreate();
					i0.ɵɵtwoWayListener("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_6_listener($event) {
						i0.ɵɵtwoWayBindingSet(ctx.inputValue, $event) || (ctx.inputValue = $event);
						return $event;
					});
					i0.ɵɵelementEnd()();
					i0.ɵɵelementStart(7, "div", 4)(8, "div", 5)(9, "button", 6);
					i0.ɵɵlistener("click", function ForgotPasswordComponent_Template_button_click_9_listener() {
						return ctx.confirm();
					});
					i0.ɵɵelementStart(10, "span");
					i0.ɵɵtext(11);
					i0.ɵɵelementEnd()()();
					i0.ɵɵelementStart(12, "div", 7)(13, "button", 8);
					i0.ɵɵlistener("click", function ForgotPasswordComponent_Template_button_click_13_listener() {
						return ctx.cancel();
					});
					i0.ɵɵelementStart(14, "span");
					i0.ɵɵtext(15);
					i0.ɵɵelementEnd()()()()();
				}
				if (rf & 2) {
					i0.ɵɵadvance(2);
					i0.ɵɵtextInterpolate(ctx.title);
					i0.ɵɵadvance(2);
					i0.ɵɵtextInterpolate(ctx.message);
					i0.ɵɵadvance();
					i0.ɵɵproperty("text", ctx.placeHolder);
					i0.ɵɵadvance();
					i0.ɵɵtwoWayProperty("ngModel", ctx.inputValue);
					i0.ɵɵcontrol();
					i0.ɵɵadvance(3);
					i0.ɵɵproperty("disabled", ctx.inputValue ? false : true);
					i0.ɵɵadvance(2);
					i0.ɵɵtextInterpolate(ctx.sendButton);
					i0.ɵɵadvance(4);
					i0.ɵɵtextInterpolate(ctx.cancelButton);
				}
			},
			dependencies: [
				i4.DefaultValueAccessor,
				i4.NgControlStatus,
				i4.NgModel,
				i5.FloatingLabelComponent,
				i6$1.TextBoxDirective
			],
			styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}  .k-list ::-webkit-scrollbar{background:#bfcdd5}  .k-list ::-webkit-scrollbar:hover{background:#d9d9d9}  .k-list ::-webkit-scrollbar-thumb{background:#6cafd1}  .k-list ::-webkit-scrollbar-thumb:hover{background:#005890}  .k-list{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}  .k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}  .k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width:768px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}  .kendo-dropdown{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width:490px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}  .kendo-dropdown{width:323px!important}}@media screen and (max-width:425px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}  .kendo-dropdown{width:273px!important}}@media screen and (max-width:375px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}  .kendo-dropdown{width:217px!important}}  .k-list-md .k-list-item, .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}  .k-list .k-item:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}  .k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;line-height:20px;margin-bottom:30px}.link[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE!important}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:#00000052}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:3px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#e7481c;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#e7481c}.login-infos[_ngcontent-%COMP%]   .login-warning[_ngcontent-%COMP%]{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4ab679}.login-infos[_ngcontent-%COMP%]   .login-info-reset-password[_ngcontent-%COMP%]{background:#005890}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:silver}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#e77b2d}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#ff9e18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:gray}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9f9f9f}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4ab679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68b388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#d03c13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#e7481c}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action{background-color:#4ab679!important;color:#fff!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:hover{background-color:#68b388!important;color:#fff!important}  .mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:#005890!important;background-color:#fff!important}  .k-input-inner{padding-inline:0!important}.no-border-width[_ngcontent-%COMP%]{border-width:0!important}.w-100[_ngcontent-%COMP%]{width:100%!important}.no-padding-inline[_ngcontent-%COMP%]{padding-inline:0!important}.no-box-shadow[_ngcontent-%COMP%]{box-shadow:none!important}.k-floating-label-container.k-empty[_ngcontent-%COMP%] > .k-floating-label[_ngcontent-%COMP%]{left:0}.k-floating-label-container[_ngcontent-%COMP%] > .k-floating-label[_ngcontent-%COMP%]{font-weight:600;color:#005890!important;font-size:14px;line-height:17px;left:0!important}[_ngcontent-%COMP%]::-moz-selection{background:gray!important;color:#fff!important}[_ngcontent-%COMP%]::selection{background:gray!important;color:#fff!important}  .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}  .mat-dialog-container .login-footer .back-button{background:gray}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:silver}  .mat-dialog-container .login-footer .ok-button{background:#4ab679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}.k-floating-label-container[_ngcontent-%COMP%] > .k-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textarea[_ngcontent-%COMP%]{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textarea[_ngcontent-%COMP%]:focus{background-color:#fff!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]::selection, .k-floating-label-container[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%]::selection, .k-floating-label-container[_ngcontent-%COMP%]   .k-textarea[_ngcontent-%COMP%]::selection{color:#fff;background-color:#909090}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker-md[_ngcontent-%COMP%]   .k-input-inner[_ngcontent-%COMP%]{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]{border-width:0px;border-style:unset}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]:focus-within{box-shadow:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]:focus{box-shadow:none}.k-floating-label-container[_ngcontent-%COMP%]:after{background-color:#8ee2ff;height:1px}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]   .k-input-button[_ngcontent-%COMP%]{border-color:transparent;display:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]{border:none;background:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]{border:none;border-radius:0;padding:0;box-shadow:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%] > .k-input[_ngcontent-%COMP%]{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-disabled[_ngcontent-%COMP%]{opacity:1;color:#fff}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-disabled[_ngcontent-%COMP%]   .k-select[_ngcontent-%COMP%]{display:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-disabled[_ngcontent-%COMP%]{filter:none;background:#0b85ce}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]   .k-select[_ngcontent-%COMP%]{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]   .k-select[_ngcontent-%COMP%]   .k-icon[_ngcontent-%COMP%]{color:#005890;display:none}  .k-floating-label-container>.k-floating-label, .k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}  .mat-mdc-dialog-container .mdc-dialog__surface{padding:24px!important;color:#005890!important;border-radius:0!important}  .mat-mdc-dialog-container .mdc-dialog__surface .div.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-mdc-dialog-container .mdc-dialog__surface .div.p.description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-mdc-dialog-container .mdc-dialog__surface ul{color:#005890!important}.k-floating-label-container[_ngcontent-%COMP%]{width:100%;margin:8px 0}.k-floating-label-container[_ngcontent-%COMP%]   .normal-state[_ngcontent-%COMP%]{color:#005890!important}.k-floating-label-container[_ngcontent-%COMP%]{padding-top:20.0000000004px;box-sizing:border-box;display:inline-flex;vertical-align:middle;position:relative;flex-direction:column;justify-content:stretch}p.no-margin[_ngcontent-%COMP%]{color:#fff!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}"],
			changeDetection: 1
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotPasswordComponent, [{
		type: Component,
		args: [{
			selector: "forgot-password-dialog",
			changeDetection: ChangeDetectionStrategy.Eager,
			standalone: false,
			template: "<div>\n    <h1 class=\"title\">{{ title }}</h1>\n    <p class=\"description\" style=\"width: 350px;\">{{ message }}</p>\n\n    <kendo-floatinglabel [text]=\"placeHolder\" class=\"border-bottom w-100 \">\n        <input kendoTextBox [(ngModel)]=\"inputValue\" name=\"accountName\" type=\"text\"\n            class=\"normal-state no-border-width no-padding-inline no-box-shadow\" />\n    </kendo-floatinglabel>\n\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 0 1px;\nmargin-top: 30px;\">\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n            <button kendoButton class=\"buttons ok-button\" (click)=\"confirm()\" [disabled]=\"inputValue ? false : true\">\n                <span>{{ sendButton }}</span>\n            </button>\n        </div>\n        <div class=\"login-footer\">\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\n                <span>{{ cancelButton }}</span>\n            </button>\n        </div>\n    </div>\n\n</div>",
			styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}::ng-deep .k-list ::-webkit-scrollbar{background:#bfcdd5}::ng-deep .k-list ::-webkit-scrollbar:hover{background:#d9d9d9}::ng-deep .k-list ::-webkit-scrollbar-thumb{background:#6cafd1}::ng-deep .k-list ::-webkit-scrollbar-thumb:hover{background:#005890}::ng-deep .k-list{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}::ng-deep .k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}::ng-deep .k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width:768px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}::ng-deep .kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width:490px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}::ng-deep .kendo-dropdown{width:323px!important}}@media screen and (max-width:425px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}::ng-deep .kendo-dropdown{width:273px!important}}@media screen and (max-width:375px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}::ng-deep .kendo-dropdown{width:217px!important}}::ng-deep .k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}::ng-deep .k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}::ng-deep .k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;line-height:20px;margin-bottom:30px}.link{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom{border-bottom:1px solid #0B85CE!important}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:#00000052}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:3px 0}.login-infos .caps-lock{background:#e7481c;display:flex;align-items:center}.login-infos .login-error{background:#e7481c}.login-infos .login-warning{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos .login-info{background:#4ab679}.login-infos .login-info-reset-password{background:#005890}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:silver}.login-footer .login-button{background:#e77b2d}.login-footer .login-button:hover:enabled{background:#ff9e18}.login-footer .back-button{background:gray}.login-footer .back-button:hover:enabled{background:#9f9f9f}.login-footer .ok-button{background:#4ab679}.login-footer .ok-button:hover:enabled{background:#68b388}.login-footer .error-button{background:#d03c13}.login-footer .error-button:hover:enabled{background:#e7481c}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}::ng-deep .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action{background-color:#4ab679!important;color:#fff!important}::ng-deep .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:hover{background-color:#68b388!important;color:#fff!important}::ng-deep .mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:#005890!important;background-color:#fff!important}::ng-deep .k-input-inner{padding-inline:0!important}.no-border-width{border-width:0!important}.w-100{width:100%!important}.no-padding-inline{padding-inline:0!important}.no-box-shadow{box-shadow:none!important}.k-floating-label-container.k-empty>.k-floating-label{left:0}.k-floating-label-container>.k-floating-label{font-weight:600;color:#005890!important;font-size:14px;line-height:17px;left:0!important}::-moz-selection{background:gray!important;color:#fff!important}::selection{background:gray!important;color:#fff!important}::ng-deep .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}::ng-deep .mat-dialog-container .login-footer .back-button{background:gray}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:silver}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4ab679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}.k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}.k-floating-label-container .k-textbox,.k-floating-label-container .k-textbox .k-input,.k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}.k-floating-label-container .k-textbox,.k-floating-label-container .k-textbox .k-input,.k-floating-label-container .k-textarea:focus{background-color:#fff!important}.k-floating-label-container .k-textbox::selection,.k-floating-label-container .k-input::selection,.k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}.k-floating-label-container .k-picker-md .k-input-inner{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}.k-floating-label-container .k-picker{border-width:0px;border-style:unset}.k-floating-label-container .k-picker:focus-within{box-shadow:none}.k-floating-label-container .k-picker:focus{box-shadow:none}.k-floating-label-container:after{background-color:#8ee2ff;height:1px}.k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}.k-floating-label-container .k-dropdown{border:none;background:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}.k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}.k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{filter:none;background:#0b85ce}.k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}::ng-deep .k-floating-label-container>.k-floating-label,.k-floating-label-container .k-textbox{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface{padding:24px!important;color:#005890!important;border-radius:0!important}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface .div.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface .div.p.description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface ul{color:#005890!important}.k-floating-label-container{width:100%;margin:8px 0}.k-floating-label-container .normal-state{color:#005890!important}.k-floating-label-container{padding-top:20.0000000004px;box-sizing:border-box;display:inline-flex;vertical-align:middle;position:relative;flex-direction:column;justify-content:stretch}p.no-margin{color:#fff!important}.k-floating-label-container .k-textbox{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}\n"]
		}]
	}], () => [{ type: i1$1.MatDialogRef }, {
		type: void 0,
		decorators: [{
			type: Inject,
			args: [MAT_DIALOG_DATA]
		}]
	}], null);
})();
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ForgotPasswordComponent, {
		className: "ForgotPasswordComponent",
		filePath: "lib/pages/forgot-password-dialog/forgot-password.component.ts",
		lineNumber: 11
	});
})();
var Strings = class {
	constructor() {
		this.currentBrowserLanguage = "en";
		this.UpdateTitle_IT = "Aggiornamento  in vista";
		this.UpdateTitle_EN = "Update planned";
		this.UpdateTitle_DE = "Aktualisierung geplant";
		this.UpdateTitle_BR = "Atualização planejada";
		this.UpdateTitle_BG = "Планирана актуализация";
		this.UpdateTitle_ES = "Actualización planificada";
		this.UpdateTitle_RO = "";
		this.UpdateTitle_PL = "";
		this.UpdateDontShow_IT = "Non mostrare più questo messaggio";
		this.UpdateDontShow_EN = "Do not show me this message again";
		this.UpdateDontShow_DE = "Diesen Hinweis nicht mehr zeigen";
		this.UpdateDontShow_BR = "Não mostrar essa mensagem novamente";
		this.UpdateDontShow_BG = "Моля, не ми показвайте това съобщение отново";
		this.UpdateDontShow_ES = "No vuelva a mostrar este mensaje";
		this.UpdateDontShow_RO = "";
		this.UpdateDontShow_PL = "";
		this.currentBrowserLanguage = navigator.language.toLocaleLowerCase();
	}
	getUpdateTitle() {
		if (this.currentBrowserLanguage.startsWith("it")) return this.UpdateTitle_IT ?? this.UpdateTitle_EN;
		if (this.currentBrowserLanguage.startsWith("de")) return this.UpdateTitle_DE ?? this.UpdateTitle_EN;
		if (this.currentBrowserLanguage.startsWith("pt")) return this.UpdateTitle_BR ?? this.UpdateTitle_EN;
		if (this.currentBrowserLanguage.startsWith("bg")) return this.UpdateTitle_BG ?? this.UpdateTitle_EN;
		if (this.currentBrowserLanguage.startsWith("es")) return this.UpdateTitle_ES ?? this.UpdateTitle_EN;
		if (this.currentBrowserLanguage.startsWith("pl")) return this.UpdateTitle_PL ?? this.UpdateTitle_EN;
		if (this.currentBrowserLanguage.startsWith("ro")) return this.UpdateTitle_RO ?? this.UpdateTitle_EN;
		else return this.UpdateTitle_EN;
	}
	getUpdateDontShowMessage() {
		if (this.currentBrowserLanguage.startsWith("it")) return this.UpdateDontShow_IT ?? this.UpdateDontShow_EN;
		if (this.currentBrowserLanguage.startsWith("de")) return this.UpdateDontShow_DE ?? this.UpdateDontShow_EN;
		if (this.currentBrowserLanguage.startsWith("pt")) return this.UpdateDontShow_BR ?? this.UpdateDontShow_EN;
		if (this.currentBrowserLanguage.startsWith("bg")) return this.UpdateDontShow_BG ?? this.UpdateDontShow_EN;
		if (this.currentBrowserLanguage.startsWith("es")) return this.UpdateDontShow_ES ?? this.UpdateDontShow_EN;
		if (this.currentBrowserLanguage.startsWith("pl")) return this.UpdateDontShow_PL ?? this.UpdateDontShow_EN;
		if (this.currentBrowserLanguage.startsWith("ro")) return this.UpdateDontShow_RO ?? this.UpdateDontShow_EN;
		else return this.UpdateDontShow_EN;
	}
	getUpdateMessage(authService) {
		if (this.currentBrowserLanguage.startsWith("it")) return authService.getUpdateMessage_IT() ?? authService.getUpdateMessage_EN();
		if (this.currentBrowserLanguage.startsWith("de")) return authService.getUpdateMessage_DE() ?? authService.getUpdateMessage_EN();
		if (this.currentBrowserLanguage.startsWith("pt")) return authService.getUpdateMessage_BR() ?? authService.getUpdateMessage_EN();
		if (this.currentBrowserLanguage.startsWith("bg")) return authService.getUpdateMessage_BG() ?? authService.getUpdateMessage_EN();
		if (this.currentBrowserLanguage.startsWith("es")) return authService.getUpdateMessage_ES() ?? authService.getUpdateMessage_EN();
		if (this.currentBrowserLanguage.startsWith("pl")) return authService.getUpdateMessage_PL() ?? authService.getUpdateMessage_EN();
		if (this.currentBrowserLanguage.startsWith("ro")) return authService.getUpdateMessage_RO() ?? authService.getUpdateMessage_EN();
		else return authService.getUpdateMessage_EN();
	}
};
const LIB_VERSION = " v6.2.0+7 ";
const _c0 = ["dropdown"];
const _c1 = (a0) => ({ "background-image": a0 });
const _c2 = () => ({ standalone: true });
const _c3 = (a0, a1) => [a0, a1];
function TbLoginComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "p", 22);
		i0.ɵɵtext(1);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext(2);
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate(ctx_r0.idleTimeoutMessage);
	}
}
function TbLoginComponent_Conditional_5_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div")(1, "h1", 21);
		i0.ɵɵtext(2);
		i0.ɵɵelementEnd();
		i0.ɵɵconditionalCreate(3, TbLoginComponent_Conditional_5_Conditional_3_Template, 2, 1, "p", 22);
		i0.ɵɵelementStart(4, "p", 23);
		i0.ɵɵtext(5);
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate(ctx_r0.welcome);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.isExpiredSession ? 3 : -1);
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate(ctx_r0.enterCredentials);
	}
}
function TbLoginComponent_Conditional_6_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div")(1, "h1", 21);
		i0.ɵɵtext(2);
		i0.ɵɵelementEnd();
		i0.ɵɵelementStart(3, "p", 23);
		i0.ɵɵtext(4);
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate(ctx_r0.chooseSubscription);
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate2("", ctx_r0.accountName, ": ", ctx_r0.loginRequest.accountName);
	}
}
function TbLoginComponent_Conditional_7_Conditional_5_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "span");
		i0.ɵɵtext(1, "sms");
		i0.ɵɵelementEnd();
	}
}
function TbLoginComponent_Conditional_7_Conditional_6_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "span");
		i0.ɵɵtext(1, "e-mail");
		i0.ɵɵelementEnd();
	}
}
function TbLoginComponent_Conditional_7_Conditional_7_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "span");
		i0.ɵɵtext(1);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext(2);
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate(ctx_r0.authAppText);
	}
}
function TbLoginComponent_Conditional_7_Conditional_8_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "span");
		i0.ɵɵtext(1, "sms/e-mail");
		i0.ɵɵelementEnd();
	}
}
function TbLoginComponent_Conditional_7_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div")(1, "h1", 21);
		i0.ɵɵtext(2);
		i0.ɵɵelementEnd();
		i0.ɵɵelementStart(3, "p", 24);
		i0.ɵɵtext(4);
		i0.ɵɵconditionalCreate(5, TbLoginComponent_Conditional_7_Conditional_5_Template, 2, 0, "span");
		i0.ɵɵconditionalCreate(6, TbLoginComponent_Conditional_7_Conditional_6_Template, 2, 0, "span");
		i0.ɵɵconditionalCreate(7, TbLoginComponent_Conditional_7_Conditional_7_Template, 2, 1, "span");
		i0.ɵɵconditionalCreate(8, TbLoginComponent_Conditional_7_Conditional_8_Template, 2, 0, "span");
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate(ctx_r0.otpTitle);
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate1(" ", ctx_r0.otpMessage, " ");
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TwoFactorType === 1 ? 5 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TwoFactorType === 2 ? 6 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TwoFactorType === 4 ? 7 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TwoFactorType === null ? 8 : -1);
	}
}
function TbLoginComponent_Conditional_10_Template(rf, ctx) {
	if (rf & 1) {
		const _r2 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "kendo-floatinglabel", 6)(1, "kendo-textbox", 25);
		i0.ɵɵcontrolCreate();
		i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_Conditional_10_Template_kendo_textbox_ngModelChange_1_listener($event) {
			i0.ɵɵrestoreView(_r2);
			const ctx_r0 = i0.ɵɵnextContext();
			i0.ɵɵtwoWayBindingSet(ctx_r0.loginRequest.accountName, $event) || (ctx_r0.loginRequest.accountName = $event);
			return i0.ɵɵresetView($event);
		});
		i0.ɵɵlistener("keyup", function TbLoginComponent_Conditional_10_Template_kendo_textbox_keyup_1_listener($event) {
			i0.ɵɵrestoreView(_r2);
			const ctx_r0 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r0.keyUpFunction($event));
		});
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵproperty("text", ctx_r0.accountName)("ngClass", ctx_r0.authService.errorMessage ? "border-bottom-error" : "border-bottom");
		i0.ɵɵadvance();
		i0.ɵɵtwoWayProperty("ngModel", ctx_r0.loginRequest.accountName);
		i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(5, _c2))("ngClass", ctx_r0.authService.errorMessage ? "error-status" : "normal-state");
		i0.ɵɵcontrol();
	}
}
function TbLoginComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
	if (rf & 1) {
		const _r4 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "span", 28);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_11_Conditional_2_Template_span_click_0_listener() {
			i0.ɵɵrestoreView(_r4);
			const ctx_r0 = i0.ɵɵnextContext(2);
			return i0.ɵɵresetView(ctx_r0.hide = !ctx_r0.hide);
		});
		i0.ɵɵtext(1, " visibility ");
		i0.ɵɵelementEnd();
	}
}
function TbLoginComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		const _r5 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "span", 28);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_11_Conditional_3_Template_span_click_0_listener() {
			i0.ɵɵrestoreView(_r5);
			const ctx_r0 = i0.ɵɵnextContext(2);
			return i0.ɵɵresetView(ctx_r0.hide = !ctx_r0.hide);
		});
		i0.ɵɵtext(1, " visibility_off ");
		i0.ɵɵelementEnd();
	}
}
function TbLoginComponent_Conditional_11_Template(rf, ctx) {
	if (rf & 1) {
		const _r3 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "kendo-floatinglabel", 7)(1, "input", 26);
		i0.ɵɵcontrolCreate();
		i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_Conditional_11_Template_input_ngModelChange_1_listener($event) {
			i0.ɵɵrestoreView(_r3);
			const ctx_r0 = i0.ɵɵnextContext();
			i0.ɵɵtwoWayBindingSet(ctx_r0.loginRequest.password, $event) || (ctx_r0.loginRequest.password = $event);
			return i0.ɵɵresetView($event);
		});
		i0.ɵɵlistener("keyup", function TbLoginComponent_Conditional_11_Template_input_keyup_1_listener($event) {
			i0.ɵɵrestoreView(_r3);
			const ctx_r0 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r0.keyUpFunction($event));
		});
		i0.ɵɵelementEnd();
		i0.ɵɵconditionalCreate(2, TbLoginComponent_Conditional_11_Conditional_2_Template, 2, 0, "span", 27);
		i0.ɵɵconditionalCreate(3, TbLoginComponent_Conditional_11_Conditional_3_Template, 2, 0, "span", 27);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵproperty("ngClass", ctx_r0.authService.errorMessage ? "border-bottom-error" : "border-bottom");
		i0.ɵɵadvance();
		i0.ɵɵtwoWayProperty("ngModel", ctx_r0.loginRequest.password);
		i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(7, _c2))("type", ctx_r0.hide ? "password" : "text")("ngClass", ctx_r0.authService.errorMessage ? "error-status" : "normal-state");
		i0.ɵɵcontrol();
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.hide === true ? 2 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.hide === false ? 3 : -1);
	}
}
function TbLoginComponent_Conditional_12_ng_template_4_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div");
		i0.ɵɵtext(1);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const dataItem_r7 = ctx.$implicit;
		i0.ɵɵattribute("data-sub", dataItem_r7.subscriptionkey)("data-description", dataItem_r7.description)("data-instance", dataItem_r7.instancekey);
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate1(" ", dataItem_r7.description, " ");
	}
}
function TbLoginComponent_Conditional_12_Conditional_5_Template(rf, ctx) {
	if (rf & 1) {
		const _r8 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "span", 34);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_12_Conditional_5_Template_span_click_0_listener() {
			i0.ɵɵrestoreView(_r8);
			i0.ɵɵnextContext();
			const dropdown_r9 = i0.ɵɵreference(3);
			const ctx_r0 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r0.toggle(dropdown_r9));
		});
		i0.ɵɵtext(1, " arrow_circle_up ");
		i0.ɵɵelementEnd();
	}
}
function TbLoginComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
	if (rf & 1) {
		const _r10 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "span", 35);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_12_Conditional_6_Template_span_click_0_listener() {
			i0.ɵɵrestoreView(_r10);
			i0.ɵɵnextContext();
			const dropdown_r9 = i0.ɵɵreference(3);
			const ctx_r0 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r0.toggle(dropdown_r9));
		});
		i0.ɵɵtext(1, " arrow_circle_down ");
		i0.ɵɵelementEnd();
	}
}
function TbLoginComponent_Conditional_12_Conditional_8_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "p", 33);
		i0.ɵɵtext(1);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext(2);
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate2(" Subscription key: ", ctx_r0.loginRequest.subscriptionKey, " ", ctx_r0.instancekey, " ");
	}
}
function TbLoginComponent_Conditional_12_Template(rf, ctx) {
	if (rf & 1) {
		const _r6 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "div")(1, "kendo-floatinglabel", 6)(2, "kendo-dropdownlist", 29, 0);
		i0.ɵɵcontrolCreate();
		i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_Conditional_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) {
			i0.ɵɵrestoreView(_r6);
			const ctx_r0 = i0.ɵɵnextContext();
			i0.ɵɵtwoWayBindingSet(ctx_r0.loginRequest.subscriptionKey, $event) || (ctx_r0.loginRequest.subscriptionKey = $event);
			return i0.ɵɵresetView($event);
		});
		i0.ɵɵlistener("ngModelChange", function TbLoginComponent_Conditional_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) {
			i0.ɵɵrestoreView(_r6);
			const ctx_r0 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r0.onSubChange($event));
		})("click", function TbLoginComponent_Conditional_12_Template_kendo_dropdownlist_click_2_listener() {
			i0.ɵɵrestoreView(_r6);
			const ctx_r0 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r0.isDropDownClicked());
		});
		i0.ɵɵtemplate(4, TbLoginComponent_Conditional_12_ng_template_4_Template, 2, 4, "ng-template", 30);
		i0.ɵɵelementEnd();
		i0.ɵɵconditionalCreate(5, TbLoginComponent_Conditional_12_Conditional_5_Template, 2, 0, "span", 31);
		i0.ɵɵconditionalCreate(6, TbLoginComponent_Conditional_12_Conditional_6_Template, 2, 0, "span", 32);
		i0.ɵɵelementEnd();
		i0.ɵɵelementStart(7, "div");
		i0.ɵɵconditionalCreate(8, TbLoginComponent_Conditional_12_Conditional_8_Template, 2, 2, "p", 33);
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance();
		i0.ɵɵproperty("text", i0.ɵɵinterpolate(ctx_r0.subscription))("ngClass", i0.ɵɵpureFunction2(11, _c3, ctx_r0.authService.errorMessage ? "border-bottom-error" : "", ctx_r0.dropDownIsClicked ? "" : "border-bottom"));
		i0.ɵɵadvance();
		i0.ɵɵproperty("disabled", (ctx_r0.loginSubscriptions == null ? null : ctx_r0.loginSubscriptions.length) <= 1)("data", ctx_r0.loginSubscriptions)("valuePrimitive", true);
		i0.ɵɵtwoWayProperty("ngModel", ctx_r0.loginRequest.subscriptionKey);
		i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(14, _c2));
		i0.ɵɵcontrol();
		i0.ɵɵadvance(3);
		i0.ɵɵconditional(ctx_r0.dropDownIsClicked ? 5 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(!ctx_r0.dropDownIsClicked ? 6 : -1);
		i0.ɵɵadvance(2);
		i0.ɵɵconditional(ctx_r0.loginSubscriptions.length > 3 ? 8 : -1);
	}
}
function TbLoginComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
	if (rf & 1) {
		const _r12 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "span", 28);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_13_Conditional_2_Template_span_click_0_listener() {
			i0.ɵɵrestoreView(_r12);
			const ctx_r0 = i0.ɵɵnextContext(2);
			return i0.ɵɵresetView(ctx_r0.hideOtp = !ctx_r0.hideOtp);
		});
		i0.ɵɵtext(1, " visibility ");
		i0.ɵɵelementEnd();
	}
}
function TbLoginComponent_Conditional_13_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		const _r13 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "span", 28);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_13_Conditional_3_Template_span_click_0_listener() {
			i0.ɵɵrestoreView(_r13);
			const ctx_r0 = i0.ɵɵnextContext(2);
			return i0.ɵɵresetView(ctx_r0.hideOtp = !ctx_r0.hideOtp);
		});
		i0.ɵɵtext(1, " visibility_off ");
		i0.ɵɵelementEnd();
	}
}
function TbLoginComponent_Conditional_13_Template(rf, ctx) {
	if (rf & 1) {
		const _r11 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "kendo-floatinglabel", 6)(1, "input", 36);
		i0.ɵɵcontrolCreate();
		i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_Conditional_13_Template_input_ngModelChange_1_listener($event) {
			i0.ɵɵrestoreView(_r11);
			const ctx_r0 = i0.ɵɵnextContext();
			i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event);
			return i0.ɵɵresetView($event);
		});
		i0.ɵɵlistener("keyup", function TbLoginComponent_Conditional_13_Template_input_keyup_1_listener($event) {
			i0.ɵɵrestoreView(_r11);
			const ctx_r0 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r0.keyUpFunction($event));
		});
		i0.ɵɵelementEnd();
		i0.ɵɵconditionalCreate(2, TbLoginComponent_Conditional_13_Conditional_2_Template, 2, 0, "span", 27);
		i0.ɵɵconditionalCreate(3, TbLoginComponent_Conditional_13_Conditional_3_Template, 2, 0, "span", 27);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵproperty("text", ctx_r0.code)("ngClass", ctx_r0.authService.errorMessage ? "border-bottom-error" : "border-bottom");
		i0.ɵɵadvance();
		i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
		i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(8, _c2))("type", ctx_r0.hideOtp ? "password" : "text")("ngClass", ctx_r0.authService.errorMessage ? "error-status" : "normal-state");
		i0.ɵɵcontrol();
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.hideOtp === true ? 2 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.hideOtp === false ? 3 : -1);
	}
}
function TbLoginComponent_Conditional_14_Template(rf, ctx) {
	if (rf & 1) {
		const _r14 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "div", 8)(1, "div", 37)(2, "p");
		i0.ɵɵtext(3);
		i0.ɵɵelementEnd()();
		i0.ɵɵelementStart(4, "div", 38)(5, "input", 39);
		i0.ɵɵcontrolCreate();
		i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_Conditional_14_Template_input_ngModelChange_5_listener($event) {
			i0.ɵɵrestoreView(_r14);
			const ctx_r0 = i0.ɵɵnextContext();
			i0.ɵɵtwoWayBindingSet(ctx_r0.loginRequest.overwriteLogin, $event) || (ctx_r0.loginRequest.overwriteLogin = $event);
			return i0.ɵɵresetView($event);
		});
		i0.ɵɵelementEnd();
		i0.ɵɵelementStart(6, "label", 40);
		i0.ɵɵtext(7);
		i0.ɵɵelementEnd()()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(3);
		i0.ɵɵtextInterpolate3("", ctx_r0.loginRequest.accountName, " ", ctx_r0.useralreadyloggedTitle, " ", ctx_r0.useralreadyloggedMessage);
		i0.ɵɵadvance(2);
		i0.ɵɵtwoWayProperty("ngModel", ctx_r0.loginRequest.overwriteLogin);
		i0.ɵɵcontrol();
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate1(" ", ctx_r0.useralreadyloggedOK);
	}
}
function TbLoginComponent_Conditional_16_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div", 9)(1, "p", 41);
		i0.ɵɵtext(2);
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate(ctx_r0.blocMaiusc);
	}
}
function TbLoginComponent_Conditional_17_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div", 10)(1, "p", 41);
		i0.ɵɵtext(2);
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate(ctx_r0.authService.errorMessage);
	}
}
function TbLoginComponent_Conditional_18_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div", 11)(1, "p", 41);
		i0.ɵɵtext(2);
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate(ctx_r0.authService.okMessage);
	}
}
function TbLoginComponent_Conditional_19_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div", 12)(1, "p", 41);
		i0.ɵɵtext(2);
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate(ctx_r0.resetPasswordMessage);
	}
}
function TbLoginComponent_Conditional_20_Conditional_2_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "p", 43);
		i0.ɵɵtext(1);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext(2);
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate1(" ", ctx_r0.TOTPDescription, " ");
	}
}
function TbLoginComponent_Conditional_20_Conditional_3_Conditional_2_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "span");
		i0.ɵɵtext(1, "sms");
		i0.ɵɵelementEnd();
	}
}
function TbLoginComponent_Conditional_20_Conditional_3_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "span");
		i0.ɵɵtext(1, "e-mail");
		i0.ɵɵelementEnd();
	}
}
function TbLoginComponent_Conditional_20_Conditional_3_Conditional_4_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "span");
		i0.ɵɵtext(1);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext(3);
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate(ctx_r0.chosenAuthApp);
	}
}
function TbLoginComponent_Conditional_20_Conditional_3_Conditional_5_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "span");
		i0.ɵɵtext(1, "sms/e-mail");
		i0.ɵɵelementEnd();
	}
}
function TbLoginComponent_Conditional_20_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		const _r15 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "a", 46);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_20_Conditional_3_Template_a_click_0_listener() {
			i0.ɵɵrestoreView(_r15);
			const ctx_r0 = i0.ɵɵnextContext(2);
			return i0.ɵɵresetView(ctx_r0.alternativeMethods(ctx_r0.otpInfo.TwoFactorType));
		});
		i0.ɵɵtext(1);
		i0.ɵɵconditionalCreate(2, TbLoginComponent_Conditional_20_Conditional_3_Conditional_2_Template, 2, 0, "span");
		i0.ɵɵconditionalCreate(3, TbLoginComponent_Conditional_20_Conditional_3_Conditional_3_Template, 2, 0, "span");
		i0.ɵɵconditionalCreate(4, TbLoginComponent_Conditional_20_Conditional_3_Conditional_4_Template, 2, 1, "span");
		i0.ɵɵconditionalCreate(5, TbLoginComponent_Conditional_20_Conditional_3_Conditional_5_Template, 2, 0, "span");
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext(2);
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate1("", ctx_r0.resendOTPLabel, " ");
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TwoFactorType === 1 ? 2 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TwoFactorType === 2 ? 3 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TwoFactorType === 4 ? 4 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TwoFactorType === null ? 5 : -1);
	}
}
function TbLoginComponent_Conditional_20_Conditional_4_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "p", 47);
		i0.ɵɵtext(1);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext(3);
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate1(" ", ctx_r0.otpText, " ");
	}
}
function TbLoginComponent_Conditional_20_Conditional_4_Conditional_2_Template(rf, ctx) {
	if (rf & 1) {
		const _r16 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "a", 50);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_20_Conditional_4_Conditional_2_Template_a_click_0_listener() {
			i0.ɵɵrestoreView(_r16);
			const ctx_r0 = i0.ɵɵnextContext(3);
			return i0.ɵɵresetView(ctx_r0.alternativeMethods(1));
		});
		i0.ɵɵtext(1);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext(3);
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate1("", ctx_r0.otpRequestCode, " SMS");
	}
}
function TbLoginComponent_Conditional_20_Conditional_4_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		const _r17 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "a", 50);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_20_Conditional_4_Conditional_3_Template_a_click_0_listener() {
			i0.ɵɵrestoreView(_r17);
			const ctx_r0 = i0.ɵɵnextContext(3);
			return i0.ɵɵresetView(ctx_r0.alternativeMethods(2));
		});
		i0.ɵɵtext(1);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext(3);
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate1("", ctx_r0.otpRequestCode, " E-mail");
	}
}
function TbLoginComponent_Conditional_20_Conditional_4_Conditional_4_Template(rf, ctx) {
	if (rf & 1) {
		const _r18 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "a", 51);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_20_Conditional_4_Conditional_4_Template_a_click_0_listener() {
			i0.ɵɵrestoreView(_r18);
			const ctx_r0 = i0.ɵɵnextContext(3);
			return i0.ɵɵresetView(ctx_r0.alternativeMethods(4));
		});
		i0.ɵɵtext(1);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext(3);
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate(ctx_r0.useAuthApp);
	}
}
function TbLoginComponent_Conditional_20_Conditional_4_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div", 3);
		i0.ɵɵconditionalCreate(1, TbLoginComponent_Conditional_20_Conditional_4_Conditional_1_Template, 2, 1, "p", 47);
		i0.ɵɵconditionalCreate(2, TbLoginComponent_Conditional_20_Conditional_4_Conditional_2_Template, 2, 1, "a", 48);
		i0.ɵɵconditionalCreate(3, TbLoginComponent_Conditional_20_Conditional_4_Conditional_3_Template, 2, 1, "a", 48);
		i0.ɵɵconditionalCreate(4, TbLoginComponent_Conditional_20_Conditional_4_Conditional_4_Template, 2, 1, "a", 49);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext(2);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.Email && ctx_r0.otpInfo.TOTPConfigured || ctx_r0.otpInfo.MobilePhoneNr ? 1 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TwoFactorType !== 1 && ctx_r0.otpInfo.MobilePhoneNr ? 2 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TwoFactorType !== 2 ? 3 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TOTPConfigured && ctx_r0.otpInfo.TwoFactorType !== 4 ? 4 : -1);
	}
}
function TbLoginComponent_Conditional_20_Conditional_5_Template(rf, ctx) {
	if (rf & 1) {
		const _r19 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "p", 45);
		i0.ɵɵtext(1);
		i0.ɵɵelementStart(2, "a", 52);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_20_Conditional_5_Template_a_click_2_listener() {
			i0.ɵɵrestoreView(_r19);
			const ctx_r0 = i0.ɵɵnextContext(2);
			return i0.ɵɵresetView(ctx_r0.goToStore());
		});
		i0.ɵɵtext(3);
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext(2);
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate1(" ", ctx_r0.oneMethodOnly, " ");
		i0.ɵɵadvance(2);
		i0.ɵɵtextInterpolate1(" ", ctx_r0.alternativeMethod, " ");
	}
}
function TbLoginComponent_Conditional_20_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div")(1, "div", 42);
		i0.ɵɵconditionalCreate(2, TbLoginComponent_Conditional_20_Conditional_2_Template, 2, 1, "p", 43);
		i0.ɵɵconditionalCreate(3, TbLoginComponent_Conditional_20_Conditional_3_Template, 6, 5, "a", 44);
		i0.ɵɵconditionalCreate(4, TbLoginComponent_Conditional_20_Conditional_4_Template, 5, 4, "div", 3)(5, TbLoginComponent_Conditional_20_Conditional_5_Template, 4, 2, "p", 45);
		i0.ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(2);
		i0.ɵɵconditional(ctx_r0.otpInfo.TwoFactorType === 4 ? 2 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TwoFactorType !== 4 ? 3 : -1);
		i0.ɵɵadvance();
		i0.ɵɵconditional(ctx_r0.otpInfo.TOTPConfigured || ctx_r0.otpInfo.MobilePhoneNr ? 4 : 5);
	}
}
function TbLoginComponent_Conditional_21_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "div", 8)(1, "div", 12)(2, "p", 41);
		i0.ɵɵtext(3);
		i0.ɵɵelementEnd()()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(3);
		i0.ɵɵtextInterpolate(ctx_r0.otpResetTextMagoWeb);
	}
}
function TbLoginComponent_Conditional_25_Template(rf, ctx) {
	if (rf & 1) i0.ɵɵelement(0, "span", 16);
}
function TbLoginComponent_Conditional_26_Template(rf, ctx) {
	if (rf & 1) {
		i0.ɵɵelementStart(0, "span");
		i0.ɵɵtext(1);
		i0.ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance();
		i0.ɵɵtextInterpolate(ctx_r0.buttonText);
	}
}
function TbLoginComponent_Conditional_27_Template(rf, ctx) {
	if (rf & 1) {
		const _r20 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "div", 17)(1, "button", 53);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_27_Template_button_click_1_listener() {
			i0.ɵɵrestoreView(_r20);
			const ctx_r0 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r0.back());
		});
		i0.ɵɵelementStart(2, "span");
		i0.ɵɵtext(3);
		i0.ɵɵelementEnd()()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(3);
		i0.ɵɵtextInterpolate1(" ", ctx_r0.buttonBack);
	}
}
function TbLoginComponent_Conditional_29_Template(rf, ctx) {
	if (rf & 1) {
		const _r21 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "div")(1, "p", 54);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_29_Template_p_click_1_listener() {
			i0.ɵɵrestoreView(_r21);
			const ctx_r0 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r0.newUser());
		});
		i0.ɵɵtext(2, "SignUp here!");
		i0.ɵɵelementEnd()();
	}
}
function TbLoginComponent_Conditional_30_Template(rf, ctx) {
	if (rf & 1) {
		const _r22 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "div", 18)(1, "p", 55);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_30_Template_p_click_1_listener() {
			i0.ɵɵrestoreView(_r22);
			const ctx_r0 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r0.goToResetPassword());
		});
		i0.ɵɵelementStart(2, "a");
		i0.ɵɵtext(3);
		i0.ɵɵelementEnd()()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(3);
		i0.ɵɵtextInterpolate(ctx_r0.forgetPassword);
	}
}
function TbLoginComponent_Conditional_31_Template(rf, ctx) {
	if (rf & 1) {
		const _r23 = i0.ɵɵgetCurrentView();
		i0.ɵɵelementStart(0, "div", 18)(1, "p", 56)(2, "a", 52);
		i0.ɵɵlistener("click", function TbLoginComponent_Conditional_31_Template_a_click_2_listener() {
			i0.ɵɵrestoreView(_r23);
			const ctx_r0 = i0.ɵɵnextContext();
			return i0.ɵɵresetView(ctx_r0.goToStore());
		});
		i0.ɵɵtext(3);
		i0.ɵɵelementEnd()()();
	}
	if (rf & 2) {
		const ctx_r0 = i0.ɵɵnextContext();
		i0.ɵɵadvance(3);
		i0.ɵɵtextInterpolate(ctx_r0.manageMethods);
	}
}
var TbLoginComponent = class TbLoginComponent {
	constructor(authService, router, dialog, renderer, route, doc) {
		this.authService = authService;
		this.router = router;
		this.dialog = dialog;
		this.renderer = renderer;
		this.route = route;
		this.doc = doc;
		this.cachedCompanies = [];
		this.capsLockOn = false;
		this.validate = false;
		this.otp = false;
		this.useralreadylogged = false;
		this.OLD = false;
		this.loading = false;
		this.loginRequest = new LoginRequest();
		this.isMagoWeb = false;
		this.loginSubscriptions = [];
		this.hide = true;
		this.hideOtp = true;
		this.isConnected = true;
		this.lib_version = LIB_VERSION;
		this.inputValue = "";
		this.dropDownIsClicked = false;
		this.comboBoxIsClicked = false;
		this.iconIsClicked = false;
		this.currentBrowserLanguage = navigator.language.toLocaleLowerCase();
		this.languageIT = this.currentBrowserLanguage.startsWith("it");
		this.otpInfo = new ExtraInfo();
		this.isErrorComingFromMago = false;
		this.showResetPasswordMessage = false;
		this.otpSendingErrorMessage = "LGN-123 Error sending OTP. Please contact the support. If possible use an alternative OTP.";
		this.FormatDateString = (date) => {
			return new Date(Date.parse(date)).toLocaleDateString(navigator.language, {
				year: "numeric",
				month: "long",
				day: "numeric"
			});
		};
		this.FormatStartDateString = (date) => {
			var scheduledDateTime = new Date(Date.parse(date));
			if (this.languageIT) return scheduledDateTime.toLocaleString("it-IT", {
				hour: "numeric",
				minute: "numeric",
				hour12: false
			});
			else return scheduledDateTime.toLocaleString(navigator.language, {
				hour: "numeric",
				minute: "numeric",
				hour12: true
			});
		};
		this.FormatEndDateString = (date, durationMins) => {
			var scheduledDateTime = new Date(Date.parse(date));
			var finalDate = new Date(scheduledDateTime.getTime() + durationMins * 6e4);
			if (this.languageIT) return finalDate.toLocaleString("it-IT", {
				hour: "numeric",
				minute: "numeric",
				hour12: false
			});
			else return finalDate.toLocaleString(navigator.language, {
				hour: "numeric",
				minute: "numeric",
				hour12: true
			});
		};
		this.renderer.listen("window", "click", (e) => {
			if (this.comboBoxIsClicked) this.comboBoxIsClicked = false;
			else if (this.iconIsClicked) this.iconIsClicked = false;
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
		this.isMagoWeb = authService.getIfIsMagoWeb();
		this.createAccountUrl = authService.getCreateAccountUrl();
		this.changePasswordUrl = authService.getChangePasswordUrl();
		this.logoURL = authService.getLogoURL();
		this.backgroundURL = authService.getBackgroundURL();
		this.instancekey = "";
		if (this.languageIT) {
			this.nextText = "avanti";
			this.loginText = "accedi";
		} else {
			this.nextText = "next";
			this.loginText = "login";
		}
		this.buttonText = this.validate || !this.subscriptionSelection ? this.loginText : this.nextText;
		this.currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
		if (this.languageIT) {
			this.chooseSubscription = "Scegli la tua sottoscrizione";
			this.goodJob = "Buon lavoro!";
			this.subscription = "Sottoscrizione";
			this.instance = "Istanza";
			this.buttonBack = "< INDIETRO";
			this.accountName = "Nome utente";
			this.resetPasswordMessage = "Per poter reimpostare una nuova password è necessario contattare l’amministratore di MagoWeb";
			this.enterAccounName = "Inserisci il tuo nome utente e ti invieremo una nuova password";
			this.welcome = "Benvenuto su " + authService.getBrandName();
			this.enterCredentials = "Autenticati inserendo nome utente e password.";
			this.forgetPassword = "Hai dimenticato la password ?";
			this.blocMaiusc = "Blocco maiuscole attivo";
			this.idleTimeoutMessage = "La tua sessione è terminata per inattività, puoi riprendere da qui.";
			this.otpMessage = "Inserisci il codice OTP che hai ricevuto tramite ";
			this.authAppText = "app di autenticazione";
			this.otpTitle = "Autenticazione a due fattori";
			this.resendOTPLabel = "Richiedi un nuovo codice OTP via ";
			this.useralreadyloggedMessage = "Vuoi continuare con la login? La login precedente verrà disabilitata.";
			this.useralreadyloggedTitle = " è già connesso a questa subscription.";
			this.useralreadyloggedOK = "Sì, continua con la login";
			this.code = "Codice OTP";
			this.chosenAuthApp = "app di autenticazione scelta";
			this.otpText = "Oppure";
			this.otpRequestCode = "Richiedi codice via ";
			this.useAuthApp = "Utilizza la tua app di autenticazione";
			this.oneMethodOnly = "Hai un solo metodo di autenticazione configurato, per non rischiare di rimanere bloccato ti consigliamo di";
			this.alternativeMethod = "attivare un metodo alternativo.";
			this.manageMethods = "Gestisci i tuoi metodi di accesso";
			this.TOTPDescription = "Apri l'app o l'estensione del browser dell'autenticatore a due fattori (TOTP) per visualizzare il tuo codice di autenticazione";
			this.otpResetTextMagoWeb = "Non puoi accedere via OTP? Contatta l'amministratore di MagoWeb per reimpostare il tipo di autenticazione.";
		} else {
			this.chooseSubscription = "Choose your subscription";
			this.goodJob = "Good job!";
			this.subscription = "Subscription";
			this.instance = "Instance";
			this.buttonBack = "< BACK";
			this.accountName = "Account name";
			this.resetPasswordMessage = "Please, contact MagoWeb administrator to reset your password";
			this.enterAccounName = "Enter your account name and we will send you a new password";
			this.welcome = "Welcome to " + authService.getBrandName();
			this.enterCredentials = "Authenticate yourself by entering your account name and password.";
			this.forgetPassword = "Forgot your password ?";
			this.blocMaiusc = "Caps lock on";
			this.idleTimeoutMessage = "Your session has expired due to inactivity, you can resume from here.";
			this.otpMessage = "Enter the otp code you received via ";
			this.authAppText = "authentication app";
			this.otpTitle = "Two-Factor Authentication";
			this.resendOTPLabel = "Request a new OTP code via ";
			this.useralreadyloggedMessage = "Do you want to continue with the login? The previous login will be disabled.";
			this.useralreadyloggedTitle = " is already logged in to this subscription.";
			this.useralreadyloggedOK = "Yes, continue to login";
			this.code = "OTP Code";
			this.chosenAuthApp = "chosen authenticator app";
			this.otpText = "Or";
			this.otpRequestCode = "Request code via ";
			this.useAuthApp = "Use your authenticator app";
			this.oneMethodOnly = "You have only one authentication method configured, to avoid the risk of being blocked we recommend you";
			this.alternativeMethod = "activate an alternative method.";
			this.manageMethods = "Manage your login methods";
			this.TOTPDescription = "Open your two-factor authenticator (TOTP) app or browser extension to view your authentication code";
			this.otpResetTextMagoWeb = "Can't log in via OTP? Contact the MagoWeb administrator to reset the authentication type.";
		}
		this.route.queryParams.subscribe((params) => {
			const appRedirect = params["appRedirect"];
			const error = params["error"];
			this.authService.useDCS = appRedirect && appRedirect === "DCS_APP";
			this.authService.errorMessage = error ? error : "";
			this.isErrorComingFromMago = error ? true : false;
		});
	}
	ngAfterContentInit() {
		this.loadLoginData();
		webkitAutofillWorkaround();
	}
	async checkConnection() {
		this.isConnected = await this.authService.checkConnection();
		if (!this.isConnected) {
			let error = this.authService.errorMessage;
			if (error.length === 0) error = this.authService.getBaseUrl();
			this.authService.errorMessage = this.languageIT ? "Servizio temporaneamente non raggiungibile.\nDettagli: " + error : "Service temporarily not available.\nDetails: " + error;
		} else {
			this.authService.errorMessage = this.isErrorComingFromMago ? this.authService.errorMessage : "";
			this.authService.okMessage = "";
		}
	}
	onSubChange(newValue) {
		const sd = this.loginSubscriptions.find((s) => s.subscriptionkey === newValue);
		if (sd && sd.instancekey) this.instancekey = `${this.instance}: ${sd.instancekey}`;
	}
	keyUpFunction(event) {
		if (event.key === "Enter") {
			if (!this.disabledButton()) {
				console.log("login by enter...");
				this.login();
			}
		}
		const capsOn = event.getModifierState && event.getModifierState("CapsLock");
		this.capsLockOn = capsOn;
	}
	disabledButton() {
		return hasAutofill() && (!this.isConnected || this.subscriptionSelection && this.loginSubscriptions.length === 0 && this.validate || this.otp && this.inputValue.length !== 6 || this.loading || this.useralreadylogged && !this.loginRequest.overwriteLogin) || !hasAutofill() && (!this.isConnected || !this.loginRequest.accountName || !this.loginRequest.password || this.subscriptionSelection && this.loginSubscriptions.length === 0 && this.validate || this.otp && this.inputValue.length !== 6 || this.loading || this.useralreadylogged && !this.loginRequest.overwriteLogin);
	}
	get isExpiredSession() {
		return sessionStorage.getItem("expiredSession") === "true";
	}
	newUser() {
		this.router.navigate([this.createAccountUrl]);
	}
	async back(keepMessages = false) {
		this.validate = false;
		this.loginRequest.token = "";
		this.loginRequest.password = "";
		this.loginRequest.otPassword = "";
		this.loginRequest.processID = "";
		this.loginRequest.subscriptionKey = "";
		this.loginRequest.overwriteLogin = false;
		this.useralreadylogged = false;
		this.loginRequest.appId = "";
		this.buttonText = this.nextText;
		this.loginSubscriptions = [];
		this.otp = false;
		this.inputValue = "";
		if (!keepMessages) {
			this.authService.okMessage = "";
			this.authService.errorMessage = "";
		}
	}
	async login() {
		console.log("login requested..." + this.loginRequest.accountName);
		this.authService.okMessage = "";
		this.authService.errorMessage = "";
		this.showResetPasswordMessage = false;
		this.saveLoginData();
		this.loading = true;
		sessionStorage.removeItem("expiredSession");
		if (!this.loginRequest.processID) {
			this.loginRequest.processID = Math.floor(Math.random() * 9e5 + 1e5).toString();
			this.loginRequest.otPassword = "";
		}
		if (this.otp) {
			if (this.OLD) this.loginRequest.password = this.inputValue;
			else this.loginRequest.otPassword = this.inputValue;
		}
		if (!this.validate && this.subscriptionSelection) {
			this.loginRequest.appId = "MCloudPreLogin";
			this.loginRequest.subscriptionKey = "";
			console.log("calling prelogin... ");
			const result1 = await this.authService.prelogin(this.loginRequest).catch((err1) => {
				this.loading = false;
				this.authService.errorMessage = err1.error && err1.error.Message;
			});
			this.loading = false;
			this.buttonText = this.validate ? this.loginText : this.nextText;
			if (result1 && result1.Result) {
				this.otp = false;
				this.validate = true;
				this.buttonText = this.validate ? this.loginText : this.nextText;
				this.getCompaniesForUser(this.loginRequest.accountName);
				console.log("collecting subscriptions...");
				this.authService.errorMessage = "";
				this.authService.okMessage = "";
			} else if (!this.otp && result1 && (result1.ResultCode === 143 || result1.Message === this.otpSendingErrorMessage)) {
				this.otpInfo = result1.ExtraInfo;
				if (this.otpInfo == null) {
					this.OLD = true;
					this.otpInfo = new ExtraInfo();
				} else this.OLD = false;
				this.otp = true;
				this.authService.errorMessage = result1.Message === this.otpSendingErrorMessage ? result1.Message : "";
			} else if (this.otp && result1 && !result1.Result && result1.ResultCode === 143) this.authService.errorMessage = this.languageIT ? "OTP non valido." : "Invalid OTP.";
			else this.loading = false;
		} else {
			this.loginRequest.appId = this.authService.getAppId();
			console.log("calling login... ");
			const result = await this.authService.login(this.loginRequest).catch((err) => {
				this.loading = false;
				this.authService.errorMessage = err.error && err.error.Message;
			});
			if (!this.otp && result && result.ResultCode === 143) {
				this.otpInfo = result.ExtraInfo;
				if (this.otpInfo == null) {
					this.OLD = true;
					this.otpInfo = new ExtraInfo();
				} else this.OLD = false;
				this.otp = true;
			} else if (this.otp && result && !result.Result && result.ResultCode === 143) this.authService.errorMessage = this.languageIT ? "OTP non valido." : "Invalid OTP.";
			else this.loading = false;
			this.loading = false;
			this.buttonText = this.validate ? this.loginText : this.nextText;
			if (result && result.ResultCode === 116) this.useralreadylogged = true;
			if (result && result.Result) {
				if (this.loginSubscriptions.find((s) => s.subscriptionkey === this.loginRequest.subscriptionKey)) {
					const result1 = await this.authService.getCalendar(this.loginRequest.subscriptionKey);
					if (result1 && result1.result && result1.content) {
						const scheduledUpdate = result1.content;
						if (scheduledUpdate) {
							console.log("scheduledUpdate: " + scheduledUpdate.scheduledtime.toString());
							const val = localStorage.getItem("DONTSHOWUPDATEWARN");
							var s_translation = new Strings();
							let message = s_translation.getUpdateMessage(this.authService);
							message = message.replace("@@sub", this.authService.getSubscriptionDescription());
							message = message.replace("@@date", this.FormatDateString(scheduledUpdate.scheduledtime));
							message = message.replace("@@starth", this.FormatStartDateString(scheduledUpdate.scheduledtime));
							message = message.replace("@@endh", this.FormatEndDateString(scheduledUpdate.scheduledtime, scheduledUpdate.estimatedupgradetime));
							console.log(message);
							if (val !== message) {
								this.authService.openUpdateAlertDialog(message, s_translation.getUpdateTitle(), s_translation.getUpdateDontShowMessage(), this.loginRequest.accountName, this.loginRequest.subscriptionKey, this.loginRequest.processID);
								return;
							}
						}
					}
				}
				console.log("ready to redirect.");
				this.authService.okMessage = "";
				this.authService.errorMessage = "";
				if (this.authService.isRedirectExternal()) {
					console.log("go external");
					this.authService.getRedirectUrlForSubscription(this.loginRequest.accountName, this.loginRequest.subscriptionKey, this.loginRequest.processID);
					return;
				}
				console.log("go internal");
				this.router.navigate([this.authService.getRedirectUrl()]);
			} else {
				if (!this.otp && result && result.ResultCode === 143) {
					this.otpInfo = result.ExtraInfo;
					if (this.otpInfo == null) {
						this.OLD = true;
						this.otpInfo = new ExtraInfo();
					} else this.OLD = false;
					this.otp = true;
				} else if (this.otp && result && !result.Result && result.ResultCode === 143) this.authService.errorMessage = this.languageIT ? "OTP non valido." : "Invalid OTP.";
				console.log("...");
				this.loading = false;
				if (result) console.log("Error " + result.ResultCode);
			}
		}
	}
	loadLoginData() {
		this.loginRequest.accountName = this.authService.getAccountName() || "";
		this.loginRequest.subscriptionKey = this.authService.getSubscription() || "";
		if (!this.loginRequest.accountName) this.loginRequest.subscriptionKey = "";
	}
	saveLoginData() {
		if (this.authService.isSessionStorage()) {
			sessionStorage.setItem(StorageVars.ACCOUNT_NAME, this.loginRequest.accountName);
			sessionStorage.setItem(StorageVars.SUBSCRIPTION, this.loginRequest.subscriptionKey);
		} else {
			localStorage.setItem(StorageVars.ACCOUNT_NAME, this.loginRequest.accountName);
			localStorage.setItem(StorageVars.SUBSCRIPTION, this.loginRequest.subscriptionKey);
		}
		if (this.loginSubscriptions.length > 0) {
			const sd = this.loginSubscriptions.find((s) => s.subscriptionkey === this.loginRequest.subscriptionKey);
			if (sd) {
				if (this.authService.isSessionStorage()) sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, sd.description);
				else localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, sd.description);
			}
		}
	}
	async getCompaniesForUser(user) {
		if (!this.isConnected) return;
		if (!user || !this.subscriptionSelection) {
			this.loginRequest.subscriptionKey = "";
			return;
		}
		this.loginSubscriptions = [];
		this.authService.errorMessage = "";
		this.authService.okMessage = "";
		const temp = await this.requestAndSortSubscriptions(user);
		if (JSON.stringify(temp) !== JSON.stringify(this.loginSubscriptions)) this.loginSubscriptions = temp;
		if (this.loginSubscriptions.length === 0) {
			this.loginRequest.subscriptionKey = "";
			localStorage.removeItem(StorageVars.SUBSCRIPTION);
			localStorage.removeItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
			if (this.languageIT) this.authService.errorMessage = "Non trovo nessuna subscription associata a questo account.";
			else this.authService.errorMessage = "I cannot find any Subscriptions associated to you";
		}
		if (this.loginSubscriptions.length > 0) {
			if (!this.loginRequest.subscriptionKey) this.loginRequest.subscriptionKey = this.loginSubscriptions[0].subscriptionkey;
			else if (this.loginSubscriptions.map((s) => s.subscriptionkey).indexOf(this.loginRequest.subscriptionKey) === -1) this.loginRequest.subscriptionKey = this.loginSubscriptions[0].subscriptionkey;
			this.onSubChange(this.loginRequest.subscriptionKey);
		}
	}
	async requestAndSortSubscriptions(user) {
		if (this.cachedCompanies.hasOwnProperty(user) && this.cachedCompanies[user]) return this.cachedCompanies[user];
		const temp = [];
		(await this.authService.getCompaniesForUser(user).toPromise()).sort(this.compareCompanies).forEach((c) => {
			temp.push({
				subscriptionkey: c.subscriptionkey,
				description: c.description,
				status: c.status,
				instancekey: c.instancekey
			});
		});
		if (temp.length > 0) this.cachedCompanies[user] = temp;
		return temp;
	}
	compareCompanies(a, b) {
		const nameA = a.description.toLowerCase();
		const nameB = b.description.toLowerCase();
		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	}
	goToResetPassword() {
		this.authService.errorMessage = "";
		this.authService.okMessage = "";
		if (this.isMagoWeb) this.showResetPasswordMessage = true;
		else {
			this.showResetPasswordMessage = false;
			this.openDialog(this.forgetPassword, this.enterAccounName, this.accountName);
		}
	}
	async openDialog(Title, Message, PlaceHolder) {
		this.dialog.open(ForgotPasswordComponent, { data: {
			Title,
			Message,
			PlaceHolder,
			TextValue: this.loginRequest.accountName
		} }).afterClosed().subscribe(async (data) => {
			this.authService.errorMessage = "";
			if (data === void 0) return;
			if (data.TextValue === void 0 || data.TextValue === "") {
				if (this.languageIT) {
					this.authService.errorMessage = "Inserisci un nome utente valido";
					return;
				} else {
					this.authService.errorMessage = "Write a valid account name";
					return;
				}
			}
			const accname = data.TextValue;
			const result = await this.authService.resetpassword(accname).catch((err) => {
				this.authService.errorMessage = err.error && err.error.Message;
			});
			if (result && result.Result) {
				this.authService.errorMessage = "";
				if (this.languageIT) this.authService.okMessage = "Controlla la tua e-mail e segui le istruzioni per reimpostare la password.";
				else this.authService.okMessage = "Check your email and follow the instructions to reset your password.";
				this.router.navigate([this.authService.getRedirectUrl()]);
			}
			if (result && !result.Result) {
				this.authService.errorMessage = result.Message + " (Code: " + result.Code + ").";
				this.authService.okMessage = "";
			}
		});
	}
	isDropDownClicked() {
		this.dropDownIsClicked = !this.dropDownIsClicked;
		this.comboBoxIsClicked = this.dropDownIsClicked;
		if (this.dropDownIsClicked && this.comboBoxIsClicked) this.iconIsClicked = false;
	}
	toggle(dropdown) {
		this.dropDownIsClicked = !this.dropDownIsClicked;
		this.iconIsClicked = this.dropDownIsClicked;
		this.dropdown = dropdown;
		if (this.dropDownIsClicked) dropdown.toggle(true);
		else dropdown.toggle(false);
	}
	alternativeMethods(twoFactorType) {
		if (this.OLD) {
			this.authService.OLDresendOTP(this.loginRequest.accountName, twoFactorType != null).subscribe((opRes) => {
				if (opRes.Result) this.otpInfo.TwoFactorType = twoFactorType;
			}, (errOLD) => {});
			return;
		}
		this.authService.resendOTP2(this.loginRequest.accountName, this.loginRequest.processID, twoFactorType).subscribe((opRes) => {
			if (opRes.Result) this.otpInfo.TwoFactorType = twoFactorType;
		}, (err) => {});
	}
	goToStore() {
		window.open(this.authService.getStoreUrl());
	}
	static {
		this.ɵfac = function TbLoginComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TbLoginComponent)(i0.ɵɵdirectiveInject(TbAuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i1$1.MatDialog), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(DOCUMENT));
		};
	}
	static {
		this.ɵcmp = i0.ɵɵdefineComponent({
			type: TbLoginComponent,
			selectors: [["tb-login"]],
			viewQuery: function TbLoginComponent_Query(rf, ctx) {
				if (rf & 1) i0.ɵɵviewQuery(_c0, 5);
				if (rf & 2) {
					let _t;
					i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
				}
			},
			standalone: false,
			decls: 35,
			vars: 29,
			consts: [
				["dropdown", ""],
				[
					1,
					"login-container",
					3,
					"ngStyle"
				],
				[
					1,
					"login",
					2,
					"z-index",
					"1"
				],
				[1, "login-header"],
				[
					"mat-card-image",
					"",
					3,
					"ngClass",
					"src"
				],
				[1, "login-form"],
				[
					3,
					"text",
					"ngClass"
				],
				[
					"text",
					"Password",
					3,
					"ngClass"
				],
				[1, "login-infos"],
				[
					1,
					"caps-lock",
					"panel",
					"flex-center",
					"margin-bottom-5"
				],
				[
					1,
					"login-error",
					"panel",
					"flex-center",
					"margin-bottom-5",
					2,
					"white-space",
					"pre-wrap"
				],
				[
					1,
					"login-info",
					"panel",
					"flex-center"
				],
				[
					1,
					"login-info-reset-password",
					"panel",
					"flex-center"
				],
				[
					2,
					"display",
					"flex",
					"flex-direction",
					"row-reverse",
					"justify-content",
					"space-between",
					"padding",
					"0 1px",
					"margin-top",
					"60px"
				],
				[
					1,
					"login-footer",
					2,
					"display",
					"flex",
					"justify-content",
					"flex-end"
				],
				[
					"kendoButton",
					"",
					"data-test",
					"loginButton",
					1,
					"buttons",
					"login-button",
					3,
					"click",
					"disabled"
				],
				[
					"data-test",
					"loginLoadingButton",
					1,
					"k-icon",
					"k-i-loading"
				],
				[1, "login-footer"],
				[
					2,
					"display",
					"flex",
					"margin-top",
					"10px",
					"justify-content",
					"flex-end"
				],
				[
					2,
					"position",
					"absolute",
					"bottom",
					"0",
					"width",
					"100%",
					"z-index",
					"0"
				],
				[
					1,
					"copyright",
					"copyright-abs"
				],
				[
					1,
					"margin-h1",
					"title"
				],
				[
					1,
					"login-expired-subtitle",
					"description"
				],
				[1, "description"],
				[
					1,
					"description",
					2,
					"width",
					"350px"
				],
				[
					"data-test",
					"loginAccountName",
					"name",
					"accountName",
					"type",
					"text",
					3,
					"ngModelChange",
					"keyup",
					"ngModel",
					"ngModelOptions",
					"ngClass"
				],
				[
					"kendoTextBox",
					"",
					"data-test",
					"loginPassword",
					"name",
					"password",
					"type",
					"password",
					"autocomplete",
					"current-password",
					3,
					"ngModelChange",
					"keyup",
					"ngModel",
					"ngModelOptions",
					"type",
					"ngClass"
				],
				[
					1,
					"material-icons",
					"icon"
				],
				[
					1,
					"material-icons",
					"icon",
					3,
					"click"
				],
				[
					"data-test",
					"loginDropDownSubscription",
					"name",
					"subscription",
					"textField",
					"description",
					"valueField",
					"subscriptionkey",
					1,
					"kendo-dropdown",
					3,
					"ngModelChange",
					"click",
					"disabled",
					"data",
					"valuePrimitive",
					"ngModel",
					"ngModelOptions"
				],
				["kendoDropDownListItemTemplate", ""],
				[
					"data-test",
					"loginDropDownSubscriptionArrowUp",
					1,
					"material-symbols-rounded",
					"icon"
				],
				[
					"data-test",
					"loginDropDownSubscriptionArrowDown",
					1,
					"material-symbols-rounded",
					"icon"
				],
				[
					"data-test",
					"loginParagraphInstanceKey",
					1,
					"instancekey"
				],
				[
					"data-test",
					"loginDropDownSubscriptionArrowUp",
					1,
					"material-symbols-rounded",
					"icon",
					3,
					"click"
				],
				[
					"data-test",
					"loginDropDownSubscriptionArrowDown",
					1,
					"material-symbols-rounded",
					"icon",
					3,
					"click"
				],
				[
					"kendoTextBox",
					"",
					"data-test",
					"loginAccountNameOtp",
					"name",
					"accountNameOtp",
					"type",
					"password",
					3,
					"ngModelChange",
					"keyup",
					"ngModel",
					"ngModelOptions",
					"type",
					"ngClass"
				],
				[
					1,
					"login-warning",
					"flex-center",
					2,
					"display",
					"flex",
					"justify-content",
					"flex-end",
					"flex-direction",
					"column",
					"white-space",
					"pre-wrap"
				],
				[1, "wrap"],
				[
					"type",
					"checkbox",
					"id",
					"binding",
					"name",
					"useralreadyloggedAccepted",
					"kendoCheckBox",
					"",
					3,
					"ngModelChange",
					"ngModel"
				],
				[
					"for",
					"binding",
					1,
					"k-checkbox-label"
				],
				[1, "no-margin"],
				[
					2,
					"display",
					"flex",
					"justify-content",
					"flex-end",
					"flex-direction",
					"column"
				],
				[
					1,
					"description",
					2,
					"margin-bottom",
					"0px !important"
				],
				[
					"data-test",
					"loginResendOtp",
					"data-test",
					"loginAlternativeOtp",
					1,
					"link"
				],
				[
					1,
					"link",
					2,
					"margin-top",
					"10px",
					"font-weight",
					"600",
					"color",
					"#005890"
				],
				[
					"data-test",
					"loginResendOtp",
					"data-test",
					"loginAlternativeOtp",
					1,
					"link",
					3,
					"click"
				],
				[
					2,
					"margin",
					"10px 0",
					"font-weight",
					"600",
					"color",
					"#005890"
				],
				[
					"data-test",
					"loginAlternativeSms",
					1,
					"link"
				],
				[
					"data-test",
					"loginAlternativeApp",
					1,
					"link"
				],
				[
					"data-test",
					"loginAlternativeSms",
					1,
					"link",
					3,
					"click"
				],
				[
					"data-test",
					"loginAlternativeApp",
					1,
					"link",
					3,
					"click"
				],
				[3, "click"],
				[
					"kendoButton",
					"",
					"data-test",
					"loginBackButton",
					1,
					"buttons",
					"back-button",
					3,
					"click"
				],
				[
					"data-test",
					"loginSignUp",
					1,
					"signup",
					3,
					"click"
				],
				[
					"data-test",
					"loginForgotPassword",
					1,
					"forgotpwd",
					3,
					"click"
				],
				[
					"data-test",
					"loginManageMethods",
					1,
					"forgotpwd"
				]
			],
			template: function TbLoginComponent_Template(rf, ctx) {
				if (rf & 1) {
					i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div");
					i0.ɵɵelement(4, "img", 4);
					i0.ɵɵelementEnd();
					i0.ɵɵconditionalCreate(5, TbLoginComponent_Conditional_5_Template, 6, 3, "div");
					i0.ɵɵconditionalCreate(6, TbLoginComponent_Conditional_6_Template, 5, 3, "div");
					i0.ɵɵconditionalCreate(7, TbLoginComponent_Conditional_7_Template, 9, 6, "div");
					i0.ɵɵelementEnd();
					i0.ɵɵelementStart(8, "form")(9, "div", 5);
					i0.ɵɵconditionalCreate(10, TbLoginComponent_Conditional_10_Template, 2, 6, "kendo-floatinglabel", 6);
					i0.ɵɵconditionalCreate(11, TbLoginComponent_Conditional_11_Template, 4, 8, "kendo-floatinglabel", 7);
					i0.ɵɵconditionalCreate(12, TbLoginComponent_Conditional_12_Template, 9, 15, "div");
					i0.ɵɵconditionalCreate(13, TbLoginComponent_Conditional_13_Template, 4, 9, "kendo-floatinglabel", 6);
					i0.ɵɵconditionalCreate(14, TbLoginComponent_Conditional_14_Template, 8, 5, "div", 8);
					i0.ɵɵelementStart(15, "div", 8);
					i0.ɵɵconditionalCreate(16, TbLoginComponent_Conditional_16_Template, 3, 1, "div", 9);
					i0.ɵɵconditionalCreate(17, TbLoginComponent_Conditional_17_Template, 3, 1, "div", 10);
					i0.ɵɵconditionalCreate(18, TbLoginComponent_Conditional_18_Template, 3, 1, "div", 11);
					i0.ɵɵconditionalCreate(19, TbLoginComponent_Conditional_19_Template, 3, 1, "div", 12);
					i0.ɵɵelementEnd();
					i0.ɵɵconditionalCreate(20, TbLoginComponent_Conditional_20_Template, 6, 3, "div");
					i0.ɵɵconditionalCreate(21, TbLoginComponent_Conditional_21_Template, 4, 1, "div", 8);
					i0.ɵɵelementEnd()();
					i0.ɵɵelementStart(22, "div", 13)(23, "div", 14)(24, "button", 15);
					i0.ɵɵlistener("click", function TbLoginComponent_Template_button_click_24_listener() {
						return ctx.login();
					});
					i0.ɵɵconditionalCreate(25, TbLoginComponent_Conditional_25_Template, 1, 0, "span", 16);
					i0.ɵɵconditionalCreate(26, TbLoginComponent_Conditional_26_Template, 2, 1, "span");
					i0.ɵɵelementEnd()();
					i0.ɵɵconditionalCreate(27, TbLoginComponent_Conditional_27_Template, 4, 1, "div", 17);
					i0.ɵɵelementEnd();
					i0.ɵɵelementStart(28, "div", 17);
					i0.ɵɵconditionalCreate(29, TbLoginComponent_Conditional_29_Template, 3, 0, "div");
					i0.ɵɵelementEnd();
					i0.ɵɵconditionalCreate(30, TbLoginComponent_Conditional_30_Template, 4, 1, "div", 18);
					i0.ɵɵconditionalCreate(31, TbLoginComponent_Conditional_31_Template, 4, 1, "div", 18);
					i0.ɵɵelementEnd();
					i0.ɵɵelementStart(32, "div", 19)(33, "p", 20);
					i0.ɵɵtext(34);
					i0.ɵɵelementEnd()()();
				}
				if (rf & 2) {
					i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(27, _c1, "url(" + ctx.backgroundURL + ")"));
					i0.ɵɵadvance(4);
					i0.ɵɵproperty("src", i0.ɵɵinterpolate(ctx.logoURL))("ngClass", ctx.isMagoWeb ? "logo-magoweb" : "logo-magocloud");
					i0.ɵɵadvance();
					i0.ɵɵconditional(!ctx.validate && !ctx.otp ? 5 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.validate && !ctx.otp ? 6 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.otp ? 7 : -1);
					i0.ɵɵadvance(3);
					i0.ɵɵconditional(!ctx.validate && !ctx.otp ? 10 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(!ctx.validate && !ctx.otp ? 11 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.subscriptionSelection && ctx.validate && !ctx.otp ? 12 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.otp ? 13 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.useralreadylogged ? 14 : -1);
					i0.ɵɵadvance(2);
					i0.ɵɵconditional(ctx.capsLockOn ? 16 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.authService.errorMessage ? 17 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.authService.okMessage ? 18 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.showResetPasswordMessage ? 19 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.otp && !ctx.isMagoWeb ? 20 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.otp && ctx.isMagoWeb ? 21 : -1);
					i0.ɵɵadvance(3);
					i0.ɵɵproperty("disabled", ctx.disabledButton());
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.loading ? 25 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(!ctx.loading ? 26 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(!ctx.loading && ctx.validate || ctx.otp ? 27 : -1);
					i0.ɵɵadvance(2);
					i0.ɵɵconditional(ctx.showSignUp ? 29 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(!ctx.validate && !ctx.otp ? 30 : -1);
					i0.ɵɵadvance();
					i0.ɵɵconditional(ctx.otp && !ctx.isMagoWeb ? 31 : -1);
					i0.ɵɵadvance(3);
					i0.ɵɵtextInterpolate2("Login ", ctx.lib_version, " 2017 - ", ctx.currentYear, ", Zucchetti s.p.a.");
				}
			},
			dependencies: [
				i3$1.NgClass,
				i3$1.NgStyle,
				i4.ɵNgNoValidate,
				i4.DefaultValueAccessor,
				i4.CheckboxControlValueAccessor,
				i4.NgControlStatus,
				i4.NgControlStatusGroup,
				i4.NgModel,
				i4.NgForm,
				i6.ItemTemplateDirective,
				i6.DropDownListComponent,
				i5.LabelDirective,
				i5.FloatingLabelComponent,
				i6$1.TextBoxDirective,
				i6$1.TextBoxComponent,
				i6$1.CheckBoxDirective
			],
			styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}  .k-list ::-webkit-scrollbar{background:#bfcdd5}  .k-list ::-webkit-scrollbar:hover{background:#d9d9d9}  .k-list ::-webkit-scrollbar-thumb{background:#6cafd1}  .k-list ::-webkit-scrollbar-thumb:hover{background:#005890}  .k-list{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}  .k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}  .k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width:768px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}  .kendo-dropdown{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width:490px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}  .kendo-dropdown{width:323px!important}}@media screen and (max-width:425px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}  .kendo-dropdown{width:273px!important}}@media screen and (max-width:375px){  .k-list, .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}  .kendo-dropdown{width:217px!important}}  .k-list-md .k-list-item, .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}  .k-list .k-item:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}  .k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;line-height:20px;margin-bottom:30px}.link[_ngcontent-%COMP%], tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE!important}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:#00000052}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:3px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#e7481c;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#e7481c}.login-infos[_ngcontent-%COMP%]   .login-warning[_ngcontent-%COMP%]{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4ab679}.login-infos[_ngcontent-%COMP%]   .login-info-reset-password[_ngcontent-%COMP%]{background:#005890}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:silver}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#e77b2d}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#ff9e18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:gray}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9f9f9f}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4ab679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68b388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#d03c13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#e7481c}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action{background-color:#4ab679!important;color:#fff!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:hover{background-color:#68b388!important;color:#fff!important}  .mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:#005890!important;background-color:#fff!important}  .k-input-inner{padding-inline:0!important}.no-border-width[_ngcontent-%COMP%]{border-width:0!important}.w-100[_ngcontent-%COMP%]{width:100%!important}.no-padding-inline[_ngcontent-%COMP%]{padding-inline:0!important}.no-box-shadow[_ngcontent-%COMP%]{box-shadow:none!important}.k-floating-label-container.k-empty[_ngcontent-%COMP%] > .k-floating-label[_ngcontent-%COMP%]{left:0}.k-floating-label-container[_ngcontent-%COMP%] > .k-floating-label[_ngcontent-%COMP%]{font-weight:600;color:#005890!important;font-size:14px;line-height:17px;left:0!important}[_ngcontent-%COMP%]::-moz-selection{background:gray!important;color:#fff!important}[_ngcontent-%COMP%]::selection{background:gray!important;color:#fff!important}  .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}  .mat-dialog-container .login-footer .back-button{background:gray}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:silver}  .mat-dialog-container .login-footer .ok-button{background:#4ab679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}.k-floating-label-container[_ngcontent-%COMP%] > .k-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textarea[_ngcontent-%COMP%]{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%], .k-floating-label-container[_ngcontent-%COMP%]   .k-textarea[_ngcontent-%COMP%]:focus{background-color:#fff!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]::selection, .k-floating-label-container[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%]::selection, .k-floating-label-container[_ngcontent-%COMP%]   .k-textarea[_ngcontent-%COMP%]::selection{color:#fff;background-color:#909090}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker-md[_ngcontent-%COMP%]   .k-input-inner[_ngcontent-%COMP%]{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]{border-width:0px;border-style:unset}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]:focus-within{box-shadow:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]:focus{box-shadow:none}.k-floating-label-container[_ngcontent-%COMP%]:after{background-color:#8ee2ff;height:1px}.k-floating-label-container[_ngcontent-%COMP%]   .k-picker[_ngcontent-%COMP%]   .k-input-button[_ngcontent-%COMP%]{border-color:transparent;display:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]{border:none;background:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]{border:none;border-radius:0;padding:0;box-shadow:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%] > .k-input[_ngcontent-%COMP%]{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-disabled[_ngcontent-%COMP%]{opacity:1;color:#fff}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-disabled[_ngcontent-%COMP%]   .k-select[_ngcontent-%COMP%]{display:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-disabled[_ngcontent-%COMP%]{filter:none;background:#0b85ce}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]   .k-select[_ngcontent-%COMP%]{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}.k-floating-label-container[_ngcontent-%COMP%]   .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]   .k-select[_ngcontent-%COMP%]   .k-icon[_ngcontent-%COMP%]{color:#005890;display:none}  .k-floating-label-container>.k-floating-label, .k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}  .mat-mdc-dialog-container .mdc-dialog__surface{padding:24px!important;color:#005890!important;border-radius:0!important}  .mat-mdc-dialog-container .mdc-dialog__surface .div.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-mdc-dialog-container .mdc-dialog__surface .div.p.description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-mdc-dialog-container .mdc-dialog__surface ul{color:#005890!important}.k-floating-label-container[_ngcontent-%COMP%]{width:100%;margin:8px 0}.k-floating-label-container[_ngcontent-%COMP%]   .normal-state[_ngcontent-%COMP%]{color:#005890!important}.k-floating-label-container[_ngcontent-%COMP%]{padding-top:20.0000000004px;box-sizing:border-box;display:inline-flex;vertical-align:middle;position:relative;flex-direction:column;justify-content:stretch}p.no-margin[_ngcontent-%COMP%]{color:#fff!important}.k-floating-label-container[_ngcontent-%COMP%]   .k-textbox[_ngcontent-%COMP%]{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}  html,   body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}tb-login[_nghost-%COMP%]{font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background-color:#e5ebee;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038;min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:#fff}@media screen and (max-width:768px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}}@media screen and (min-width:576px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:450px}}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   .logo-magocloud[_ngcontent-%COMP%]{width:222px;height:39px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   .logo-magoweb[_ngcontent-%COMP%]{width:220px;height:58px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .k-i-loading[_ngcontent-%COMP%]{font-size:20px}tb-login[_nghost-%COMP%]   p.instancekey[_ngcontent-%COMP%]{font-size:9px;font-weight:300;text-indent:1px;color:#005890}tb-login[_nghost-%COMP%]   p.copyright[_ngcontent-%COMP%]{font-size:10px;font-weight:300;margin:0;color:#fff}tb-login[_nghost-%COMP%]   p.copyright-abs[_ngcontent-%COMP%]{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{text-align:right}tb-login[_nghost-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}tb-login[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}tb-login[_nghost-%COMP%]   p.signup[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}tb-login[_nghost-%COMP%]   .margin-h1[_ngcontent-%COMP%]{margin-top:20px}tb-login[_nghost-%COMP%]   .margin-p[_ngcontent-%COMP%]{margin-left:-1.5px;margin-top:-10px}tb-login[_nghost-%COMP%]   .login-expired-subtitle[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}tb-login[_nghost-%COMP%]   .login-chooseSubscription[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media(min-width:576px){tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label{margin:1px 0}}@media screen and (max-width:768px){tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-size:x-large}}tb-login[_nghost-%COMP%]     .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, tb-login[_nghost-%COMP%]   .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#005890}tb-login[_nghost-%COMP%]     .k-floating-label-container>.k-floating-label, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textbox{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}tb-login[_nghost-%COMP%]     .k-floating-label-container{width:100%;margin:8px 0}tb-login[_nghost-%COMP%]     .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-picker .k-input-inner, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-picker.k-picker-md .k-input-inner{color:#005890;border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textbox, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textbox .k-input, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textbox, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textbox .k-input, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textarea:focus{background-color:#fff!important}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textbox::selection, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-input::selection, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-picker-md .k-input-inner{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-picker{border-width:0px;border-style:unset}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-picker:focus-within{box-shadow:none}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-picker:focus{box-shadow:none}tb-login[_nghost-%COMP%]     .k-floating-label-container:after{background-color:#8ee2ff;height:1px}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown{border:none;background:none}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{filter:none;background:#0b85ce}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}"],
			changeDetection: 1
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLoginComponent, [{
		type: Component,
		args: [{
			selector: "tb-login",
			standalone: false,
			changeDetection: ChangeDetectionStrategy.Eager,
			encapsulation: ViewEncapsulation.Emulated,
			template: "<div class=\"login-container\" [ngStyle]=\"{ 'background-image': 'url(' + backgroundURL + ')' }\">\n    <div class=\"login\" style=\"z-index: 1\">\n        <div class=\"login-header\">\n            <div>\n                <img mat-card-image [ngClass]=\"isMagoWeb ? 'logo-magoweb' : 'logo-magocloud'\" src=\"{{ logoURL }}\" />\n            </div>\n            @if (!validate && !otp) {\n                <div>\n                    <h1 class=\"margin-h1 title\">{{ welcome }}</h1>\n                    @if (isExpiredSession) {\n                        <p class=\"login-expired-subtitle description\">{{ idleTimeoutMessage }}</p>\n                    }\n                    <p class=\"description\">{{ enterCredentials }}</p>\n                </div>\n            }\n            @if (validate && !otp) {\n                <div>\n                    <h1 class=\"margin-h1 title\">{{ chooseSubscription }}</h1>\n                    <p class=\"description\">{{ accountName }}: {{ loginRequest.accountName }}</p>\n                </div>\n            }\n            @if (otp) {\n                <div>\n                    <h1 class=\"margin-h1 title\">{{ otpTitle }}</h1>\n                    <p class=\"description\" style=\"width: 350px\">\n                        {{ otpMessage }}\n                        @if (otpInfo.TwoFactorType === 1) {\n                            <span>sms</span>\n                        }\n                        @if (otpInfo.TwoFactorType === 2) {\n                            <span>e-mail</span>\n                        }\n                        @if (otpInfo.TwoFactorType === 4) {\n                            <span>{{ authAppText }}</span>\n                        }\n                        @if (otpInfo.TwoFactorType === null) {\n                            <span>sms/e-mail</span>\n                        }\n                    </p>\n                </div>\n            }\n        </div>\n\n        <form>\n            <div class=\"login-form\">\n                @if (!validate && !otp) {\n                    <kendo-floatinglabel\n                        [text]=\"accountName\"\n                        [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\n                    >\n                        <kendo-textbox\n                            data-test=\"loginAccountName\"\n                            [(ngModel)]=\"loginRequest.accountName\"\n                            [ngModelOptions]=\"{ standalone: true }\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"accountName\"\n                            type=\"text\"\n                            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n                        />\n                    </kendo-floatinglabel>\n                }\n\n                @if (!validate && !otp) {\n                    <kendo-floatinglabel text=\"Password\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\">\n                        <input\n                            kendoTextBox\n                            data-test=\"loginPassword\"\n                            [(ngModel)]=\"loginRequest.password\"\n                            [ngModelOptions]=\"{ standalone: true }\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"password\"\n                            [type]=\"hide ? 'password' : 'text'\"\n                            type=\"password\"\n                            autocomplete=\"current-password\"\n                            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n                        />\n                        @if (hide === true) {\n                            <span (click)=\"hide = !hide\" class=\"material-icons icon\"> visibility </span>\n                        }\n                        @if (hide === false) {\n                            <span (click)=\"hide = !hide\" class=\"material-icons icon\"> visibility_off </span>\n                        }\n                    </kendo-floatinglabel>\n                }\n\n                @if (subscriptionSelection && validate && !otp) {\n                    <div>\n                        <kendo-floatinglabel\n                            text=\"{{ subscription }}\"\n                            [ngClass]=\"[authService.errorMessage ? 'border-bottom-error' : '', dropDownIsClicked ? '' : 'border-bottom']\"\n                        >\n                            <kendo-dropdownlist\n                                #dropdown\n                                data-test=\"loginDropDownSubscription\"\n                                [disabled]=\"$safeNavigationMigration(loginSubscriptions?.length) <= 1\"\n                                [data]=\"loginSubscriptions\"\n                                name=\"subscription\"\n                                textField=\"description\"\n                                valueField=\"subscriptionkey\"\n                                [valuePrimitive]=\"true\"\n                                [(ngModel)]=\"loginRequest.subscriptionKey\"\n                                [ngModelOptions]=\"{ standalone: true }\"\n                                class=\"kendo-dropdown\"\n                                (ngModelChange)=\"onSubChange($event)\"\n                                (click)=\"isDropDownClicked()\"\n                            >\n                                <ng-template kendoDropDownListItemTemplate let-dataItem>\n                                    <div\n                                        attr.data-sub=\"{{ dataItem.subscriptionkey }}\"\n                                        attr.data-description=\"{{ dataItem.description }}\"\n                                        attr.data-instance=\"{{ dataItem.instancekey }}\"\n                                    >\n                                        {{ dataItem.description }}\n                                    </div>\n                                </ng-template>\n                            </kendo-dropdownlist>\n                            @if (dropDownIsClicked) {\n                                <span\n                                    data-test=\"loginDropDownSubscriptionArrowUp\"\n                                    (click)=\"toggle(dropdown)\"\n                                    class=\"material-symbols-rounded icon\"\n                                >\n                                    arrow_circle_up\n                                </span>\n                            }\n                            @if (!dropDownIsClicked) {\n                                <span\n                                    data-test=\"loginDropDownSubscriptionArrowDown\"\n                                    (click)=\"toggle(dropdown)\"\n                                    class=\"material-symbols-rounded icon\"\n                                >\n                                    arrow_circle_down\n                                </span>\n                            }\n                        </kendo-floatinglabel>\n                        <div>\n                            @if (loginSubscriptions.length > 3) {\n                                <p class=\"instancekey\" data-test=\"loginParagraphInstanceKey\">\n                                    Subscription key: {{ loginRequest.subscriptionKey }} {{ instancekey }}\n                                </p>\n                            }\n                        </div>\n                    </div>\n                }\n\n                @if (otp) {\n                    <kendo-floatinglabel [text]=\"code\" [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\">\n                        <input\n                            kendoTextBox\n                            data-test=\"loginAccountNameOtp\"\n                            [(ngModel)]=\"inputValue\"\n                            [ngModelOptions]=\"{ standalone: true }\"\n                            (keyup)=\"keyUpFunction($event)\"\n                            name=\"accountNameOtp\"\n                            [type]=\"hideOtp ? 'password' : 'text'\"\n                            type=\"password\"\n                            [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n                        />\n                        @if (hideOtp === true) {\n                            <span (click)=\"hideOtp = !hideOtp\" class=\"material-icons icon\"> visibility </span>\n                        }\n                        @if (hideOtp === false) {\n                            <span (click)=\"hideOtp = !hideOtp\" class=\"material-icons icon\"> visibility_off </span>\n                        }\n                    </kendo-floatinglabel>\n                }\n\n                <!-- AlredyLogged -->\n                @if (useralreadylogged) {\n                    <div class=\"login-infos\">\n                        <div\n                            style=\"display: flex; justify-content: flex-end; flex-direction: column; white-space: pre-wrap\"\n                            class=\"login-warning flex-center\"\n                        >\n                            <p>{{ loginRequest.accountName }} {{ useralreadyloggedTitle }} {{ useralreadyloggedMessage }}</p>\n                        </div>\n                        <div class=\"wrap\">\n                            <input\n                                type=\"checkbox\"\n                                id=\"binding\"\n                                [(ngModel)]=\"loginRequest.overwriteLogin\"\n                                name=\"useralreadyloggedAccepted\"\n                                kendoCheckBox\n                            />\n                            <label class=\"k-checkbox-label\" for=\"binding\"> {{ useralreadyloggedOK }}</label>\n                        </div>\n                    </div>\n                }\n                <!--END AlredyLogged ---------------- -->\n\n                <div class=\"login-infos\">\n                    @if (capsLockOn) {\n                        <div class=\"caps-lock panel flex-center margin-bottom-5\">\n                            <p class=\"no-margin\">{{ blocMaiusc }}</p>\n                        </div>\n                    }\n                    @if (authService.errorMessage) {\n                        <div class=\"login-error panel flex-center margin-bottom-5\" style=\"white-space: pre-wrap\">\n                            <p class=\"no-margin\">{{ authService.errorMessage }}</p>\n                        </div>\n                    }\n                    @if (authService.okMessage) {\n                        <div class=\"login-info panel flex-center\">\n                            <p class=\"no-margin\">{{ authService.okMessage }}</p>\n                        </div>\n                    }\n                    @if (showResetPasswordMessage) {\n                        <div class=\"login-info-reset-password panel flex-center\">\n                            <p class=\"no-margin\">{{ resetPasswordMessage }}</p>\n                        </div>\n                    }\n                </div>\n\n                @if (otp && !isMagoWeb) {\n                    <div>\n                        <div style=\"display: flex; justify-content: flex-end; flex-direction: column\">\n                            @if (otpInfo.TwoFactorType === 4) {\n                                <p class=\"description\" style=\"margin-bottom: 0px !important\">\n                                    {{ TOTPDescription }}\n                                </p>\n                            }\n                            @if (otpInfo.TwoFactorType !== 4) {\n                                <a\n                                    class=\"link\"\n                                    data-test=\"loginResendOtp\"\n                                    (click)=\"alternativeMethods(otpInfo.TwoFactorType)\"\n                                    data-test=\"loginAlternativeOtp\"\n                                    >{{ resendOTPLabel }}\n                                    @if (otpInfo.TwoFactorType === 1) {\n                                        <span>sms</span>\n                                    }\n                                    @if (otpInfo.TwoFactorType === 2) {\n                                        <span>e-mail</span>\n                                    }\n                                    @if (otpInfo.TwoFactorType === 4) {\n                                        <span>{{ chosenAuthApp }}</span>\n                                    }\n                                    @if (otpInfo.TwoFactorType === null) {\n                                        <span>sms/e-mail</span>\n                                    }\n                                </a>\n                            }\n                            @if (otpInfo.TOTPConfigured || otpInfo.MobilePhoneNr) {\n                                <div class=\"login-header\">\n                                    @if ((otpInfo.Email && otpInfo.TOTPConfigured) || otpInfo.MobilePhoneNr) {\n                                        <p style=\"margin: 10px 0; font-weight: 600; color: #005890\">\n                                            {{ otpText }}\n                                        </p>\n                                    }\n                                    @if (otpInfo.TwoFactorType !== 1 && otpInfo.MobilePhoneNr) {\n                                        <a class=\"link\" (click)=\"alternativeMethods(1)\" data-test=\"loginAlternativeSms\"\n                                            >{{ otpRequestCode }} SMS</a\n                                        >\n                                    }\n                                    @if (otpInfo.TwoFactorType !== 2) {\n                                        <a class=\"link\" (click)=\"alternativeMethods(2)\" data-test=\"loginAlternativeSms\"\n                                            >{{ otpRequestCode }} E-mail</a\n                                        >\n                                    }\n                                    @if (otpInfo.TOTPConfigured && otpInfo.TwoFactorType !== 4) {\n                                        <a class=\"link\" (click)=\"alternativeMethods(4)\" data-test=\"loginAlternativeApp\">{{ useAuthApp }}</a>\n                                    }\n                                </div>\n                            } @else {\n                                <p class=\"link\" style=\"margin-top: 10px; font-weight: 600; color: #005890\">\n                                    {{ oneMethodOnly }}\n                                    <a (click)=\"goToStore()\"> {{ alternativeMethod }} </a>\n                                </p>\n                            }\n                        </div>\n                    </div>\n                }\n                @if (otp && isMagoWeb) {\n                    <div class=\"login-infos\">\n                        <div class=\"login-info-reset-password panel flex-center\">\n                            <p class=\"no-margin\">{{ otpResetTextMagoWeb }}</p>\n                        </div>\n                    </div>\n                }\n            </div>\n        </form>\n\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 60px\">\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n                <button kendoButton data-test=\"loginButton\" class=\"buttons login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\n                    @if (loading) {\n                        <span data-test=\"loginLoadingButton\" class=\"k-icon k-i-loading\"></span>\n                    }\n                    @if (!loading) {\n                        <span>{{ buttonText }}</span>\n                    }\n                </button>\n            </div>\n\n            @if ((!loading && validate) || otp) {\n                <div class=\"login-footer\">\n                    <button kendoButton data-test=\"loginBackButton\" class=\"buttons back-button\" (click)=\"back()\">\n                        <span> {{ buttonBack }}</span>\n                    </button>\n                </div>\n            }\n        </div>\n        <div class=\"login-footer\">\n            @if (showSignUp) {\n                <div>\n                    <p class=\"signup\" data-test=\"loginSignUp\" (click)=\"newUser()\">SignUp here!</p>\n                </div>\n            }\n        </div>\n        @if (!validate && !otp) {\n            <div style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\n                <p class=\"forgotpwd\" data-test=\"loginForgotPassword\" (click)=\"goToResetPassword()\">\n                    <a>{{ forgetPassword }}</a>\n                </p>\n            </div>\n        }\n        @if (otp && !isMagoWeb) {\n            <div style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\n                <p class=\"forgotpwd\" data-test=\"loginManageMethods\">\n                    <a (click)=\"goToStore()\">{{ manageMethods }}</a>\n                </p>\n            </div>\n        }\n    </div>\n    <div style=\"position: absolute; bottom: 0; width: 100%; z-index: 0\">\n        <p class=\"copyright copyright-abs\">Login {{ lib_version }} 2017 - {{ currentYear }}, Zucchetti s.p.a.</p>\n    </div>\n</div>\n",
			styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}::ng-deep .k-list ::-webkit-scrollbar{background:#bfcdd5}::ng-deep .k-list ::-webkit-scrollbar:hover{background:#d9d9d9}::ng-deep .k-list ::-webkit-scrollbar-thumb{background:#6cafd1}::ng-deep .k-list ::-webkit-scrollbar-thumb:hover{background:#005890}::ng-deep .k-list{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}::ng-deep .k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}::ng-deep .k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width:768px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}::ng-deep .kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width:490px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}::ng-deep .kendo-dropdown{width:323px!important}}@media screen and (max-width:425px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}::ng-deep .kendo-dropdown{width:273px!important}}@media screen and (max-width:375px){::ng-deep .k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}::ng-deep .kendo-dropdown{width:217px!important}}::ng-deep .k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}::ng-deep .k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}::ng-deep .k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;line-height:20px;margin-bottom:30px}.link,:host(tb-login) p.forgotpwd{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom{border-bottom:1px solid #0B85CE!important}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:#00000052}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:3px 0}.login-infos .caps-lock{background:#e7481c;display:flex;align-items:center}.login-infos .login-error{background:#e7481c}.login-infos .login-warning{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos .login-info{background:#4ab679}.login-infos .login-info-reset-password{background:#005890}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:silver}.login-footer .login-button{background:#e77b2d}.login-footer .login-button:hover:enabled{background:#ff9e18}.login-footer .back-button{background:gray}.login-footer .back-button:hover:enabled{background:#9f9f9f}.login-footer .ok-button{background:#4ab679}.login-footer .ok-button:hover:enabled{background:#68b388}.login-footer .error-button{background:#d03c13}.login-footer .error-button:hover:enabled{background:#e7481c}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}::ng-deep .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action{background-color:#4ab679!important;color:#fff!important}::ng-deep .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:hover{background-color:#68b388!important;color:#fff!important}::ng-deep .mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:#005890!important;background-color:#fff!important}::ng-deep .k-input-inner{padding-inline:0!important}.no-border-width{border-width:0!important}.w-100{width:100%!important}.no-padding-inline{padding-inline:0!important}.no-box-shadow{box-shadow:none!important}.k-floating-label-container.k-empty>.k-floating-label{left:0}.k-floating-label-container>.k-floating-label{font-weight:600;color:#005890!important;font-size:14px;line-height:17px;left:0!important}::-moz-selection{background:gray!important;color:#fff!important}::selection{background:gray!important;color:#fff!important}::ng-deep .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}::ng-deep .mat-dialog-container .login-footer .back-button{background:gray}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:#0000;letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:silver}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4ab679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}.k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}.k-floating-label-container .k-textbox,.k-floating-label-container .k-textbox .k-input,.k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}.k-floating-label-container .k-textbox,.k-floating-label-container .k-textbox .k-input,.k-floating-label-container .k-textarea:focus{background-color:#fff!important}.k-floating-label-container .k-textbox::selection,.k-floating-label-container .k-input::selection,.k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}.k-floating-label-container .k-picker-md .k-input-inner{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}.k-floating-label-container .k-picker{border-width:0px;border-style:unset}.k-floating-label-container .k-picker:focus-within{box-shadow:none}.k-floating-label-container .k-picker:focus{box-shadow:none}.k-floating-label-container:after{background-color:#8ee2ff;height:1px}.k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}.k-floating-label-container .k-dropdown{border:none;background:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}.k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}.k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{filter:none;background:#0b85ce}.k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}.k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}::ng-deep .k-floating-label-container>.k-floating-label,.k-floating-label-container .k-textbox{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface{padding:24px!important;color:#005890!important;border-radius:0!important}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface .div.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface .div.p.description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface ul{color:#005890!important}.k-floating-label-container{width:100%;margin:8px 0}.k-floating-label-container .normal-state{color:#005890!important}.k-floating-label-container{padding-top:20.0000000004px;box-sizing:border-box;display:inline-flex;vertical-align:middle;position:relative;flex-direction:column;justify-content:stretch}p.no-margin{color:#fff!important}.k-floating-label-container .k-textbox{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}::ng-deep html,::ng-deep body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}:host(tb-login){font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}:host(tb-login) .login-container{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}:host(tb-login) .login-container .login{background-color:#e5ebee;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038;min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:#fff}@media screen and (max-width:768px){:host(tb-login) .login-container .login{padding:20px}}@media screen and (min-width:576px){:host(tb-login) .login-container .login{max-width:450px}}:host(tb-login) .login-container .login .login-header{display:flex;flex-direction:column}:host(tb-login) .login-container .login .login-header .logo-magocloud{width:222px;height:39px}:host(tb-login) .login-container .login .login-header .logo-magoweb{width:220px;height:58px}:host(tb-login) .login-container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:0}:host(tb-login) .login-container .login .k-i-loading{font-size:20px}:host(tb-login) p.instancekey{font-size:9px;font-weight:300;text-indent:1px;color:#005890}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) p.forgotpwd{text-align:right}:host(tb-login) a{text-decoration:underline;cursor:pointer}:host(tb-login) a:hover{text-decoration:none}:host(tb-login) p.signup{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}:host(tb-login) .margin-h1{margin-top:20px}:host(tb-login) .margin-p{margin-left:-1.5px;margin-top:-10px}:host(tb-login) .login-expired-subtitle{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}:host(tb-login) .login-chooseSubscription{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}:host(tb-login) .login-sign-in{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media(min-width:576px){:host(tb-login) .login{padding:20px}:host(tb-login) .login .login-form ::ng-deep .k-floating-label{margin:1px 0}}@media screen and (max-width:768px){:host(tb-login) .login-sign-in{font-size:x-large}}:host(tb-login) ::ng-deep .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host(tb-login) .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#005890}:host(tb-login) ::ng-deep .k-floating-label-container>.k-floating-label,:host(tb-login) ::ng-deep .k-floating-label-container .k-textbox{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}:host(tb-login) ::ng-deep .k-floating-label-container{width:100%;margin:8px 0}:host(tb-login) ::ng-deep .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}:host(tb-login) ::ng-deep .k-floating-label-container .k-picker .k-input-inner,:host(tb-login) ::ng-deep .k-floating-label-container .k-picker.k-picker-md .k-input-inner{color:#005890;border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}:host(tb-login) ::ng-deep .k-floating-label-container .k-textbox,:host(tb-login) ::ng-deep .k-floating-label-container .k-textbox .k-input,:host(tb-login) ::ng-deep .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}:host(tb-login) ::ng-deep .k-floating-label-container .k-textbox,:host(tb-login) ::ng-deep .k-floating-label-container .k-textbox .k-input,:host(tb-login) ::ng-deep .k-floating-label-container .k-textarea:focus{background-color:#fff!important}:host(tb-login) ::ng-deep .k-floating-label-container .k-textbox::selection,:host(tb-login) ::ng-deep .k-floating-label-container .k-input::selection,:host(tb-login) ::ng-deep .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}:host(tb-login) ::ng-deep .k-floating-label-container .k-picker-md .k-input-inner{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}:host(tb-login) ::ng-deep .k-floating-label-container .k-picker{border-width:0px;border-style:unset}:host(tb-login) ::ng-deep .k-floating-label-container .k-picker:focus-within{box-shadow:none}:host(tb-login) ::ng-deep .k-floating-label-container .k-picker:focus{box-shadow:none}:host(tb-login) ::ng-deep .k-floating-label-container:after{background-color:#8ee2ff;height:1px}:host(tb-login) ::ng-deep .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown{border:none;background:none}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{filter:none;background:#0b85ce}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}\n"]
		}]
	}], () => [
		{ type: TbAuthService },
		{ type: i2.Router },
		{ type: i1$1.MatDialog },
		{ type: i0.Renderer2 },
		{ type: i2.ActivatedRoute },
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [DOCUMENT]
			}]
		}
	], { dropdown: [{
		type: ViewChild,
		args: ["dropdown"]
	}] });
})();
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TbLoginComponent, {
		className: "TbLoginComponent",
		filePath: "lib/pages/login.component.ts",
		lineNumber: 33
	});
})();
function webkitAutofillWorkaround() {
	setTimeout(() => {
		try {
			document.querySelectorAll("input:-webkit-autofill").forEach((el) => el.parentElement.className = "k-floating-label-container");
		} catch {}
	}, 1e3);
}
function hasAutofill() {
	try {
		return !!document.querySelector("input:-webkit-autofill");
	} catch {
		return false;
	}
}
var TbLogoffComponent = class TbLogoffComponent {
	constructor(authService, router) {
		this.authService = authService;
		this.router = router;
		this.LogOff();
	}
	async LogOff() {
		console.log("entering LogOff..");
		if ((await this.authService.logoff()).Result) this.authService.navigateUserGateway();
	}
	static {
		this.ɵfac = function TbLogoffComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TbLogoffComponent)(i0.ɵɵdirectiveInject(TbAuthService), i0.ɵɵdirectiveInject(i2.Router));
		};
	}
	static {
		this.ɵcmp = i0.ɵɵdefineComponent({
			type: TbLogoffComponent,
			selectors: [["tb-logoff"]],
			standalone: false,
			decls: 0,
			vars: 0,
			template: function TbLogoffComponent_Template(rf, ctx) {},
			encapsulation: 2,
			changeDetection: 1
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLogoffComponent, [{
		type: Component,
		args: [{
			selector: "tb-logoff",
			template: "",
			changeDetection: ChangeDetectionStrategy.Eager,
			standalone: false
		}]
	}], () => [{ type: TbAuthService }, { type: i2.Router }], null);
})();
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TbLogoffComponent, {
		className: "TbLogoffComponent",
		filePath: "lib/logoff.component.ts",
		lineNumber: 12
	});
})();
const routes = [{
	path: "logoff",
	component: TbLogoffComponent,
	canActivate: [TbAuthGuard],
	pathMatch: "full"
}];
var TbAuthModule = class TbAuthModule {
	static forRoot() {
		return {
			ngModule: TbAuthModule,
			providers: [TbAuthService]
		};
	}
	static {
		this.ɵfac = function TbAuthModule_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TbAuthModule)();
		};
	}
	static {
		this.ɵmod = i0.ɵɵdefineNgModule({ type: TbAuthModule });
	}
	static {
		this.ɵinj = i0.ɵɵdefineInjector({ imports: [
			CommonModule,
			FormsModule,
			DropDownsModule,
			LabelModule,
			InputsModule,
			FloatingLabelModule,
			BrowserModule,
			AppMaterialModule,
			MatDialogModule,
			MatInputModule,
			MatFormFieldModule,
			RouterModule.forRoot(routes),
			RouterModule,
			AppMaterialModule
		] });
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthModule, [{
		type: NgModule,
		args: [{
			declarations: [
				TbLoginComponent,
				TbLogoffComponent,
				ForgotPasswordComponent,
				ChangePasswordDialogComponent,
				AlertDialogComponent
			],
			imports: [
				CommonModule,
				FormsModule,
				DropDownsModule,
				LabelModule,
				InputsModule,
				FloatingLabelModule,
				BrowserModule,
				AppMaterialModule,
				MatDialogModule,
				MatInputModule,
				MatFormFieldModule,
				RouterModule.forRoot(routes)
			],
			exports: [
				TbLoginComponent,
				TbLogoffComponent,
				RouterModule,
				AppMaterialModule
			]
		}]
	}], null, null);
})();
(function() {
	(typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TbAuthModule, {
		declarations: [
			TbLoginComponent,
			TbLogoffComponent,
			ForgotPasswordComponent,
			ChangePasswordDialogComponent,
			AlertDialogComponent
		],
		imports: [
			CommonModule,
			FormsModule,
			DropDownsModule,
			LabelModule,
			InputsModule,
			FloatingLabelModule,
			BrowserModule,
			AppMaterialModule,
			MatDialogModule,
			MatInputModule,
			MatFormFieldModule,
			i2.RouterModule
		],
		exports: [
			TbLoginComponent,
			TbLogoffComponent,
			RouterModule,
			AppMaterialModule
		]
	});
})();
export { AppMaterialModule, ChangePasswordInfo, EntityStatus, ExtraInfo, IsValidTokenRequest, LoginRequest, LogoffRequest, OperationResult, StorageVars, TbAuthGuard, TbAuthInterceptor, TbAuthModule, TbAuthService, TbLoginComponent, TbLogoffComponent, authService };

//# sourceMappingURL=tb-auth.mjs.map