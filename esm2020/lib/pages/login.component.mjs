import { LoginRequest } from '../models/login-request';
import { StorageVars } from '../models/storage-vars';
import { ForgotPasswordComponent } from './forgot-password-dialog/forgot-password.component';
import { Component, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ExtraInfo } from '../models/login-response';
import { Strings } from '../models/Strings';
import { LIB_VERSION } from '../../version';
import * as i0 from "@angular/core";
import * as i1 from "../auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@progress/kendo-angular-label";
import * as i7 from "@progress/kendo-angular-inputs";
import * as i8 from "@progress/kendo-angular-dropdowns";
const _c0 = ["dropdown"];
function TbLoginComponent_div_5_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r18.idleTimeoutMessage);
} }
function TbLoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h1", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, TbLoginComponent_div_5_p_3_Template, 2, 1, "p", 24);
    i0.ɵɵelementStart(4, "p", 25);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.welcome);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isExpiredSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.enterCredentials);
} }
function TbLoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h1", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.chooseSubscription);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.accountName, ": ", ctx_r1.loginRequest.accountName, "");
} }
function TbLoginComponent_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "sms");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_7_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "e-mail");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_7_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r21.authAppText);
} }
function TbLoginComponent_div_7_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "sms/e-mail");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h1", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 27);
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, TbLoginComponent_div_7_span_5_Template, 2, 0, "span", 4);
    i0.ɵɵtemplate(6, TbLoginComponent_div_7_span_6_Template, 2, 0, "span", 4);
    i0.ɵɵtemplate(7, TbLoginComponent_div_7_span_7_Template, 2, 1, "span", 4);
    i0.ɵɵtemplate(8, TbLoginComponent_div_7_span_8_Template, 2, 0, "span", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.otpTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.otpMessage, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.otpInfo.TwoFactorType === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.otpInfo.TwoFactorType === 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.otpInfo.TwoFactorType === 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.otpInfo.TwoFactorType === null);
} }
function TbLoginComponent_kendo_floatinglabel_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 28)(1, "input", 29);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_10_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.loginRequest.accountName = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_10_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.keyUpFunction($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r3.accountName)("ngClass", ctx_r3.authService.errorMessage ? "border-bottom-error" : "border-bottom");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.loginRequest.accountName)("ngClass", ctx_r3.authService.errorMessage ? "error-status" : "normal-state");
} }
function TbLoginComponent_kendo_floatinglabel_11_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_11_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28.hide = !ctx_r28.hide; });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_11_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_11_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.hide = !ctx_r30.hide; });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_11_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 30)(1, "input", 31);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_11_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.loginRequest.password = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_11_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.keyUpFunction($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, TbLoginComponent_kendo_floatinglabel_11_span_2_Template, 2, 0, "span", 32);
    i0.ɵɵtemplate(3, TbLoginComponent_kendo_floatinglabel_11_span_3_Template, 2, 0, "span", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r4.authService.errorMessage ? "border-bottom-error" : "border-bottom");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r4.loginRequest.password)("type", ctx_r4.hide ? "password" : "text")("ngClass", ctx_r4.authService.errorMessage ? "error-status" : "normal-state");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.hide === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.hide === false);
} }
function TbLoginComponent_div_12_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dataItem_r40 = ctx.$implicit;
    i0.ɵɵattribute("data-sub", dataItem_r40.subscriptionkey)("data-description", dataItem_r40.description)("data-instance", dataItem_r40.instancekey);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", dataItem_r40.description, " ");
} }
function TbLoginComponent_div_12_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r42); i0.ɵɵnextContext(); const _r35 = i0.ɵɵreference(3); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.toggle(_r35); });
    i0.ɵɵtext(1, " arrow_circle_up ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 42);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r44); i0.ɵɵnextContext(); const _r35 = i0.ɵɵreference(3); const ctx_r43 = i0.ɵɵnextContext(); return ctx_r43.toggle(_r35); });
    i0.ɵɵtext(1, " arrow_circle_down ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" Subscription key: ", ctx_r39.loginRequest.subscriptionKey, " ", ctx_r39.instancekey, " ");
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
function TbLoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "kendo-floatinglabel", 28)(2, "kendo-dropdownlist", 35, 36);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.loginRequest.subscriptionKey = $event; })("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r47 = i0.ɵɵnextContext(); return ctx_r47.onSubChange($event); })("click", function TbLoginComponent_div_12_Template_kendo_dropdownlist_click_2_listener() { i0.ɵɵrestoreView(_r46); const ctx_r48 = i0.ɵɵnextContext(); return ctx_r48.isDropDownClicked(); });
    i0.ɵɵtemplate(4, TbLoginComponent_div_12_ng_template_4_Template, 2, 4, "ng-template", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TbLoginComponent_div_12_span_5_Template, 2, 0, "span", 38);
    i0.ɵɵtemplate(6, TbLoginComponent_div_12_span_6_Template, 2, 0, "span", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtemplate(8, TbLoginComponent_div_12_p_8_Template, 2, 2, "p", 40);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("text", ctx_r5.subscription);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c1, ctx_r5.authService.errorMessage ? "border-bottom-error" : "", ctx_r5.dropDownIsClicked ? "" : "border-bottom"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", (ctx_r5.loginSubscriptions == null ? null : ctx_r5.loginSubscriptions.length) <= 1)("data", ctx_r5.loginSubscriptions)("ngModel", ctx_r5.loginRequest.subscriptionKey);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r5.dropDownIsClicked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.dropDownIsClicked);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.loginSubscriptions.length > 3);
} }
function TbLoginComponent_kendo_floatinglabel_13_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r52); const ctx_r51 = i0.ɵɵnextContext(2); return ctx_r51.hideOtp = !ctx_r51.hideOtp; });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r54); const ctx_r53 = i0.ɵɵnextContext(2); return ctx_r53.hideOtp = !ctx_r53.hideOtp; });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 28)(1, "input", 44);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_13_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(); return ctx_r55.inputValue = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_13_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r57 = i0.ɵɵnextContext(); return ctx_r57.keyUpFunction($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, TbLoginComponent_kendo_floatinglabel_13_span_2_Template, 2, 0, "span", 32);
    i0.ɵɵtemplate(3, TbLoginComponent_kendo_floatinglabel_13_span_3_Template, 2, 0, "span", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r6.code)("ngClass", ctx_r6.authService.errorMessage ? "border-bottom-error" : "border-bottom");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r6.inputValue)("type", ctx_r6.hideOtp ? "password" : "text");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.hideOtp === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.hideOtp === false);
} }
function TbLoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 45)(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 46)(5, "input", 47);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_div_14_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(); return ctx_r58.loginRequest.overwriteLogin = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label", 48);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3("", ctx_r7.loginRequest.accountName, " ", ctx_r7.useralreadyloggedTitle, " ", ctx_r7.useralreadyloggedMessage, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r7.loginRequest.overwriteLogin);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.useralreadyloggedOK, "");
} }
function TbLoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49)(1, "p", 50);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.blocMaiusc);
} }
function TbLoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51)(1, "p", 50);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.authService.errorMessage);
} }
function TbLoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52)(1, "p", 50);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r10.authService.okMessage);
} }
function TbLoginComponent_div_19_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r60 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r60.TOTPDescription, " ");
} }
function TbLoginComponent_div_19_u_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "sms");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_19_u_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "e-mail");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_19_u_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r67.chosenAuthApp);
} }
function TbLoginComponent_div_19_u_3_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "sms/e-mail");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_19_u_3_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 59);
    i0.ɵɵlistener("click", function TbLoginComponent_div_19_u_3_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r70); const ctx_r69 = i0.ɵɵnextContext(2); return ctx_r69.alternativeMethods(ctx_r69.otpInfo.TwoFactorType); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TbLoginComponent_div_19_u_3_span_2_Template, 2, 0, "span", 4);
    i0.ɵɵtemplate(3, TbLoginComponent_div_19_u_3_span_3_Template, 2, 0, "span", 4);
    i0.ɵɵtemplate(4, TbLoginComponent_div_19_u_3_span_4_Template, 2, 1, "span", 4);
    i0.ɵɵtemplate(5, TbLoginComponent_div_19_u_3_span_5_Template, 2, 0, "span", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r61 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r61.resendOTPLabel, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r61.otpInfo.TwoFactorType === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r61.otpInfo.TwoFactorType === 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r61.otpInfo.TwoFactorType === 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r61.otpInfo.TwoFactorType === null);
} }
function TbLoginComponent_div_19_div_4_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 63);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r71.otpText, " ");
} }
function TbLoginComponent_div_19_div_4_u_2_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 64);
    i0.ɵɵlistener("click", function TbLoginComponent_div_19_div_4_u_2_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r76); const ctx_r75 = i0.ɵɵnextContext(3); return ctx_r75.alternativeMethods(1); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r72 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r72.otpRequestCode, " SMS");
} }
function TbLoginComponent_div_19_div_4_u_3_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 64);
    i0.ɵɵlistener("click", function TbLoginComponent_div_19_div_4_u_3_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r78); const ctx_r77 = i0.ɵɵnextContext(3); return ctx_r77.alternativeMethods(2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r73 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r73.otpRequestCode, " E-mail");
} }
function TbLoginComponent_div_19_div_4_u_4_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 65);
    i0.ɵɵlistener("click", function TbLoginComponent_div_19_div_4_u_4_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r80); const ctx_r79 = i0.ɵɵnextContext(3); return ctx_r79.alternativeMethods(4); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r74 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r74.useAuthApp);
} }
function TbLoginComponent_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, TbLoginComponent_div_19_div_4_p_1_Template, 2, 1, "p", 60);
    i0.ɵɵtemplate(2, TbLoginComponent_div_19_div_4_u_2_Template, 2, 1, "u", 61);
    i0.ɵɵtemplate(3, TbLoginComponent_div_19_div_4_u_3_Template, 2, 1, "u", 61);
    i0.ɵɵtemplate(4, TbLoginComponent_div_19_div_4_u_4_Template, 2, 1, "u", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r62.otpInfo.Email && ctx_r62.otpInfo.TOTPConfigured || ctx_r62.otpInfo.MobilePhoneNr);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r62.otpInfo.TwoFactorType !== 1 && ctx_r62.otpInfo.MobilePhoneNr);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r62.otpInfo.TwoFactorType !== 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r62.otpInfo.TOTPConfigured && ctx_r62.otpInfo.TwoFactorType !== 4);
} }
function TbLoginComponent_div_19_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "u", 67);
    i0.ɵɵlistener("click", function TbLoginComponent_div_19_ng_template_5_Template_u_click_2_listener() { i0.ɵɵrestoreView(_r82); const ctx_r81 = i0.ɵɵnextContext(2); return ctx_r81.goToStore(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r64 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r64.oneMethodOnly, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r64.alternativeMethod, " ");
} }
function TbLoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 53);
    i0.ɵɵtemplate(2, TbLoginComponent_div_19_p_2_Template, 2, 1, "p", 54);
    i0.ɵɵtemplate(3, TbLoginComponent_div_19_u_3_Template, 6, 5, "u", 55);
    i0.ɵɵtemplate(4, TbLoginComponent_div_19_div_4_Template, 5, 4, "div", 56);
    i0.ɵɵtemplate(5, TbLoginComponent_div_19_ng_template_5_Template, 4, 2, "ng-template", null, 57, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r63 = i0.ɵɵreference(6);
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r11.otpInfo.TwoFactorType === 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.otpInfo.TwoFactorType !== 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.otpInfo.TOTPConfigured || ctx_r11.otpInfo.MobilePhoneNr)("ngIfElse", _r63);
} }
function TbLoginComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 68);
} }
function TbLoginComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r13.buttonText);
} }
function TbLoginComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "button", 69);
    i0.ɵɵlistener("click", function TbLoginComponent_div_25_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r84); const ctx_r83 = i0.ɵɵnextContext(); return ctx_r83.back(); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r14.buttonBack, "");
} }
function TbLoginComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "p", 70);
    i0.ɵɵlistener("click", function TbLoginComponent_div_27_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r86); const ctx_r85 = i0.ɵɵnextContext(); return ctx_r85.newUser(); });
    i0.ɵɵtext(2, "SignUp here!");
    i0.ɵɵelementEnd()();
} }
function TbLoginComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71)(1, "p", 72);
    i0.ɵɵlistener("click", function TbLoginComponent_div_28_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r88); const ctx_r87 = i0.ɵɵnextContext(); return ctx_r87.goToForgotPassword(); });
    i0.ɵɵelementStart(2, "u");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r16.forgetPassword);
} }
function TbLoginComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71)(1, "p", 73)(2, "u", 67);
    i0.ɵɵlistener("click", function TbLoginComponent_div_29_Template_u_click_2_listener() { i0.ɵɵrestoreView(_r90); const ctx_r89 = i0.ɵɵnextContext(); return ctx_r89.goToStore(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r17.manageMethods);
} }
const _c2 = function (a0) { return { "background-image": a0 }; };
// ---------------------------------------------------------------------------
export class TbLoginComponent {
    // ---------------------------------------------------------------------------
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
        this.loginSubscriptions = [];
        this.hide = true;
        this.hideOtp = true;
        this.isConnected = true;
        this.lib_version = LIB_VERSION;
        this.inputValue = '';
        this.dropDownIsClicked = false;
        this.comboBoxIsClicked = false;
        this.iconIsClicked = false;
        this.currentBrowserLanguage = navigator.language.toLocaleLowerCase();
        this.languageIT = this.currentBrowserLanguage.startsWith('it');
        this.otpInfo = new ExtraInfo();
        this.isErrorComingFromMago = false;
        // ---------------------------------------------------------------------------
        this.FormatDateString = (date) => {
            var scheduledDateTime = new Date(Date.parse(date));
            return scheduledDateTime.toLocaleDateString(navigator.language, { year: 'numeric', month: 'long', day: 'numeric' });
        };
        // ---------------------------------------------------------------------------
        this.FormatStartDateString = (date) => {
            var scheduledDateTime = new Date(Date.parse(date));
            if (this.languageIT)
                return scheduledDateTime.toLocaleString('it-IT', { hour: 'numeric', minute: 'numeric', hour12: false });
            else
                return scheduledDateTime.toLocaleString(navigator.language, { hour: 'numeric', minute: 'numeric', hour12: true });
        };
        // ---------------------------------------------------------------------------
        this.FormatEndDateString = (date, durationMins) => {
            var scheduledDateTime = new Date(Date.parse(date));
            var finalDate = new Date(scheduledDateTime.getTime() + durationMins * 60000);
            if (this.languageIT)
                return finalDate.toLocaleString('it-IT', { hour: 'numeric', minute: 'numeric', hour12: false });
            else
                return finalDate.toLocaleString(navigator.language, { hour: 'numeric', minute: 'numeric', hour12: true });
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
        this.backgroundURL = authService.getBackgroundURL();
        this.instancekey = '';
        if (this.languageIT) {
            this.nextText = 'avanti';
            this.loginText = 'accedi';
        }
        else {
            this.nextText = 'next';
            this.loginText = 'login';
        }
        this.buttonText = this.validate || !this.subscriptionSelection ? this.loginText : this.nextText;
        this.currentYear = new Date().getFullYear().toString();
        if (this.languageIT) {
            this.chooseSubscription = 'Scegli la tua sottoscrizione';
            this.goodJob = 'Buon lavoro!';
            this.subscription = 'Sottoscrizione';
            this.instance = 'Istanza';
            this.buttonBack = '< INDIETRO';
            this.accountName = 'Nome utente';
            this.enterAccounName = 'Inserisci il tuo nome utente e ti invieremo una nuova password';
            this.welcome = 'Benvenuto su ' + authService.getBrandName();
            this.enterCredentials = 'Autenticati inserendo nome utente e password.';
            this.forgetPassword = 'Hai dimenticato la password ?';
            this.blocMaiusc = 'Blocco maiuscole attivo';
            this.idleTimeoutMessage = 'La tua sessione è terminata per inattività, puoi riprendere da qui.';
            this.otpMessage = 'Inserisci il codice OTP che hai ricevuto tramite ';
            this.authAppText = 'app di autenticazione';
            this.otpTitle = 'Autenticazione a due fattori';
            this.resendOTPLabel = 'Richiedi un nuovo codice OTP via ';
            this.useralreadyloggedMessage = 'Vuoi continuare con la login? La login precedente verrà disabilitata.';
            this.useralreadyloggedTitle = ' è già connesso a questa subscription.';
            this.useralreadyloggedOK = 'Sì, continua con la login';
            this.code = 'Codice OTP';
            this.chosenAuthApp = 'app di autenticazione scelta';
            this.otpText = 'Oppure';
            this.otpRequestCode = 'Richiedi codice via ';
            this.useAuthApp = 'Utilizza la tua app di autenticazione';
            this.oneMethodOnly =
                'Hai un solo metodo di autenticazione configurato, per non rischiare di rimanere bloccato ti consigliamo di';
            this.alternativeMethod = 'attivare un metodo alternativo.';
            this.manageMethods = 'Gestisci i tuoi metodi di accesso';
            this.TOTPDescription =
                "Apri l'app o l'estensione del browser dell'autenticatore a due fattori (TOTP) per visualizzare il tuo codice di autenticazione";
        }
        else {
            this.chooseSubscription = 'Choose your subscription';
            this.goodJob = 'Good job!';
            this.subscription = 'Subscription';
            this.instance = 'Instance';
            this.buttonBack = '< BACK';
            this.accountName = 'Account name';
            this.enterAccounName = 'Enter your account name and we will send you a new password';
            this.welcome = 'Welcome to ' + authService.getBrandName();
            this.enterCredentials = 'Authenticate yourself by entering your account name and password.';
            this.forgetPassword = 'Forgot your password ?';
            this.blocMaiusc = 'Caps lock on';
            this.idleTimeoutMessage = 'Your session has expired due to inactivity, you can resume from here.';
            this.otpMessage = 'Enter the otp code you received via ';
            this.authAppText = 'authentication app';
            this.otpTitle = 'Two-Factor Authentication';
            this.resendOTPLabel = 'Request a new OTP code via ';
            this.useralreadyloggedMessage = 'Do you want to continue with the login? The previous login will be disabled.';
            this.useralreadyloggedTitle = ' is already logged in to this subscription.';
            this.useralreadyloggedOK = 'Yes, continue to login';
            this.code = 'OTP Code';
            this.chosenAuthApp = 'chosen authenticator app';
            this.otpText = 'Or';
            this.otpRequestCode = 'Request code via ';
            this.useAuthApp = 'Use your authenticator app';
            this.oneMethodOnly = 'You have only one authentication method configured, to avoid the risk of being blocked we recommend you';
            this.alternativeMethod = 'activate an alternative method.';
            this.manageMethods = 'Manage your login methods';
            this.TOTPDescription = 'Open your two-factor authenticator (TOTP) app or browser extension to view your authentication code';
        }
        this.route.queryParams.subscribe((params) => {
            const appRedirect = params['appRedirect'];
            const error = params['error'];
            this.authService.useDCS = appRedirect && appRedirect === 'DCS_APP';
            this.authService.errorMessage = error ? error : '';
            this.isErrorComingFromMago = error ? true : false;
        });
    }
    // PROVA PER APERTURA DIALOG DI NOTIFICA AGGIORNAMENTO
    //  async openDialog() {
    //   const val = localStorage.getItem('DONTSHOWUPDATEWARN');
    //                             var s_translation = new  Strings();
    //                             let message = s_translation.getUpdateMessage(this.authService);
    //                             message = message.replace('@@sub', "sub x");
    //                             message = message.replace('@@date', "this date");
    //                             message = message.replace('@@starth',"start hour");
    //                             message = message.replace('@@endh',"end hour" );
    //                             // non mostro se mi hanno detto di non mostrare piu.
    //                             if (val !== message) {
    //                                 this.authService.openUpdateAlertDialog(
    //                                     message,
    //                                     s_translation.getUpdateTitle(),
    //                                     s_translation.getUpdateDontShowMessage(),
    //                                     this.loginRequest.accountName,
    //                                     this.loginRequest.subscriptionKey
    //                                 );}
    //  }
    // PROVA PER APERTURA DIALOG DI NOTIFICA AGGIORNAMENTO
    // ---------------------------------------------------------------------------
    ngAfterContentInit() {
        this.loadLoginData();
        webkitAutofillWorkaround();
        //test: this.openDialog();
    }
    // ---------------------------------------------------------------------------
    async checkConnection() {
        this.isConnected = await this.authService.checkConnection();
        if (!this.isConnected) {
            // se mi arriva un errore mostro quello altrimenti solo l url che lo ha dato
            let error = this.authService.errorMessage;
            if (error.length === 0)
                error = this.authService.getBaseUrl();
            this.authService.errorMessage = this.languageIT
                ? 'Servizio temporaneamente non raggiungibile.\nDettagli: ' + error
                : 'Service temporarily not available.\nDetails: ' + error;
        }
        else {
            this.authService.errorMessage = this.isErrorComingFromMago ? this.authService.errorMessage : '';
            this.authService.okMessage = '';
        }
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
            if (!this.disabledButton()) {
                console.log('login by enter...');
                this.login();
            }
        }
        const capsOn = event.getModifierState && event.getModifierState('CapsLock');
        this.capsLockOn = capsOn;
    }
    // ---------------------------------------------------------------------------
    disabledButton() {
        return ((hasAutofill() &&
            (!this.isConnected ||
                (this.subscriptionSelection && this.loginSubscriptions.length === 0 && this.validate) ||
                (this.otp && this.inputValue.length !== 6) ||
                this.loading ||
                (this.useralreadylogged && !this.loginRequest.overwriteLogin))) ||
            (!hasAutofill() &&
                (!this.isConnected ||
                    !this.loginRequest.accountName ||
                    !this.loginRequest.password ||
                    (this.subscriptionSelection && this.loginSubscriptions.length === 0 && this.validate) ||
                    (this.otp && this.inputValue.length !== 6) ||
                    this.loading ||
                    (this.useralreadylogged && !this.loginRequest.overwriteLogin))));
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
    async back(keepMessages = false) {
        // ripulisco tutto...
        this.validate = false;
        this.loginRequest.token = '';
        this.loginRequest.password = '';
        this.loginRequest.otPassword = '';
        this.loginRequest.processID = '';
        this.loginRequest.subscriptionKey = '';
        this.loginRequest.overwriteLogin = false;
        this.useralreadylogged = false;
        this.loginRequest.appId = '';
        this.buttonText = this.nextText;
        this.loginSubscriptions = [];
        this.otp = false;
        this.inputValue = '';
        if (!keepMessages) {
            this.authService.okMessage = '';
            this.authService.errorMessage = '';
        }
    }
    // ---------------------------------------------------------------------------
    async login() {
        console.log('login requested...' + this.loginRequest.accountName);
        this.authService.okMessage = '';
        this.authService.errorMessage = '';
        this.saveLoginData();
        this.loading = true;
        sessionStorage.removeItem('expiredSession');
        //assegno un id alla login e solo questa potrá usare il codice  otp   assegnato
        if (!this.loginRequest.processID) {
            this.loginRequest.processID = Math.floor(Math.random() * 900000 + 100000).toString();
            this.loginRequest.otPassword = '';
        }
        if (this.otp) {
            if (this.OLD)
                this.loginRequest.password = this.inputValue;
            else
                this.loginRequest.otPassword = this.inputValue;
        }
        if (!this.validate && this.subscriptionSelection) {
            this.loginRequest.appId = 'MCloudPreLogin';
            this.loginRequest.subscriptionKey = '';
            console.log('calling prelogin... ');
            const result1 = await this.authService.prelogin(this.loginRequest).catch((err1) => {
                this.loading = false;
                this.authService.errorMessage = err1.error && err1.error.Message;
                return;
            });
            this.loading = false;
            this.buttonText = this.validate ? this.loginText : this.nextText;
            // todo controlla come vengono mostrati errori sia login sia checkdb
            if (result1 && result1.Result) {
                this.otp = false;
                this.validate = true;
                this.buttonText = this.validate ? this.loginText : this.nextText;
                this.getCompaniesForUser(this.loginRequest.accountName);
                console.log('collecting subscriptions...');
                this.authService.errorMessage = '';
                this.authService.okMessage = '';
            }
            else if (!this.otp && result1 && result1.ResultCode === 143) {
                this.otpInfo = result1.ExtraInfo;
                if (this.otpInfo == null) {
                    this.OLD = true;
                    this.otpInfo = new ExtraInfo();
                }
                else
                    this.OLD = false;
                this.otp = true;
            }
            else if (this.otp && result1 && !result1.Result && result1.ResultCode === 143) {
                this.authService.errorMessage = this.languageIT ? 'OTP non valido.' : 'Invalid OTP.';
            }
            else {
                this.loading = false;
            }
        }
        else {
            this.loginRequest.appId = this.authService.getAppId();
            console.log('calling login... ');
            const result = await this.authService.login(this.loginRequest).catch((err) => {
                this.loading = false;
                this.authService.errorMessage = err.error && err.error.Message;
                return;
            });
            this.loading = false;
            this.buttonText = this.validate ? this.loginText : this.nextText;
            // todo controlla come vengono mostrati errori sia login sia checkdb
            if (result && result.ResultCode === 116) {
                //fai cose 116 (mostra avviso)
                this.useralreadylogged = true;
            }
            //la login é andata, proseguo con altre verifiche
            if (result && result.Result) {
                const sd = this.loginSubscriptions.find((s) => s.subscriptionkey === this.loginRequest.subscriptionKey);
                if (sd) {
                    //chiamo sempre l' api che fa tutti i controlli del caso in modo da sganciare la library da logiche canary che potrebbero cambiare.
                    const result1 = await this.authService.getCalendar(this.loginRequest.subscriptionKey);
                    //solo se il result é ok faccio lo show dell´avviso di eventuali aggiornamenti schedulati
                    if (result1 && result1.result && result1.content) {
                        const scheduledUpdate = result1.content;
                        if (scheduledUpdate) {
                            console.log('scheduledUpdate: ' + scheduledUpdate.scheduledtime.toString());
                            const val = localStorage.getItem('DONTSHOWUPDATEWARN');
                            var s_translation = new Strings();
                            let message = s_translation.getUpdateMessage(this.authService);
                            message = message.replace('@@sub', this.authService.getSubscriptionDescription());
                            message = message.replace('@@date', this.FormatDateString(scheduledUpdate.scheduledtime));
                            message = message.replace('@@starth', this.FormatStartDateString(scheduledUpdate.scheduledtime));
                            message = message.replace('@@endh', this.FormatEndDateString(scheduledUpdate.scheduledtime, scheduledUpdate.estimatedupgradetime));
                            // non mostro se mi hanno detto di non mostrare piu.
                            if (val !== message) {
                                this.authService.openUpdateAlertDialog(message, s_translation.getUpdateTitle(), s_translation.getUpdateDontShowMessage(), this.loginRequest.accountName, this.loginRequest.subscriptionKey, this.loginRequest.processID);
                                return;
                            }
                        }
                    }
                }
                console.log('ready to redirect.');
                this.authService.okMessage = '';
                this.authService.errorMessage = '';
                if (this.authService.isRedirectExternal()) {
                    console.log('go external');
                    this.authService.getRedirectUrlForSubscription(this.loginRequest.accountName, this.loginRequest.subscriptionKey, this.loginRequest.processID);
                    return;
                }
                console.log('go internal');
                this.router.navigate([this.authService.getRedirectUrl()]);
            }
            else {
                /////7
                if (!this.otp && result && result.ResultCode === 143) {
                    this.otpInfo = result.ExtraInfo;
                    if (this.otpInfo == null) {
                        this.OLD = true;
                        this.otpInfo = new ExtraInfo();
                    }
                    else
                        this.OLD = false;
                    this.otp = true;
                }
                else if (this.otp && result && !result.Result && result.ResultCode === 143) {
                    this.authService.errorMessage = this.languageIT ? 'OTP non valido.' : 'Invalid OTP.';
                }
                /////7
                //caso di login fallita per qualche errore
                console.log('...');
                this.loading = false;
            }
        }
    }
    // ---------------------------------------------------------------------------
    loadLoginData() {
        this.loginRequest.accountName = this.authService.getAccountName() || '';
        this.loginRequest.subscriptionKey = this.authService.getSubscription() || '';
        if (!this.loginRequest.accountName) {
            this.loginRequest.subscriptionKey = '';
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
    async getCompaniesForUser(user) {
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
        const temp = await this.requestAndSortSubscriptions(user);
        // Premio Eleganza Codice 2019 (@LucaBruni)
        if (JSON.stringify(temp) !== JSON.stringify(this.loginSubscriptions))
            this.loginSubscriptions = temp;
        if (this.loginSubscriptions.length === 0) {
            this.loginRequest.subscriptionKey = '';
            localStorage.removeItem(StorageVars.SUBSCRIPTION);
            localStorage.removeItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
            if (this.languageIT)
                this.authService.errorMessage = 'Non trovo nessuna subscription associata a questo account.';
            else
                this.authService.errorMessage = 'I cannot find any Subscriptions associated to you';
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
    }
    // ---------------------------------------------------------------------------
    async requestAndSortSubscriptions(user) {
        if (this.cachedCompanies.hasOwnProperty(user) && this.cachedCompanies[user]) {
            return this.cachedCompanies[user];
        }
        const temp = [];
        const result = await this.authService.getCompaniesForUser(user).toPromise();
        result.sort(this.compareCompanies).forEach((c) => {
            temp.push({ subscriptionkey: c.subscriptionkey, description: c.description, status: c.status, instancekey: c.instancekey });
        });
        if (temp.length > 0)
            this.cachedCompanies[user] = temp;
        return temp;
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
        this.forgotpassword(this.forgetPassword, this.enterAccounName, this.accountName);
    }
    // ---------------------------------------------------------------------------
    async forgotpassword(Title, Message, PlaceHolder) {
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
        dialogRef.afterClosed().subscribe(async (data) => {
            this.authService.errorMessage = '';
            if (data === undefined)
                return;
            if (data.TextValue === undefined || data.TextValue === '') {
                if (this.languageIT) {
                    this.authService.errorMessage = 'Inserisci un nome utente valido';
                    return;
                }
                else {
                    this.authService.errorMessage = 'Write a valid account name';
                    return;
                }
            }
            const accname = data.TextValue;
            const result = await this.authService.resetpassword(accname).catch((err) => {
                this.authService.errorMessage = err.error && err.error.Message;
                return;
            });
            // todo controlla come vengono mostrati errori
            if (result && result.Result) {
                this.authService.errorMessage = '';
                if (this.languageIT) {
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
    // ---------------------------------------------------------------------------
    alternativeMethods(twoFactorType) {
        if (this.OLD) {
            this.authService.OLDresendOTP(this.loginRequest.accountName, twoFactorType != null).subscribe((opRes) => {
                if (opRes.Result) {
                    this.otpInfo.TwoFactorType = twoFactorType;
                }
            }, (errOLD) => { });
            return;
        }
        this.authService.resendOTP2(this.loginRequest.accountName, this.loginRequest.processID, twoFactorType).subscribe((opRes) => {
            if (opRes.Result) {
                this.otpInfo.TwoFactorType = twoFactorType;
            }
        }, (err) => { });
    }
    // ---------------------------------------------------------------------------
    goToStore() {
        window.open(this.authService.getStoreUrl());
    }
}
/** @nocollapse */ TbLoginComponent.ɵfac = function TbLoginComponent_Factory(t) { return new (t || TbLoginComponent)(i0.ɵɵdirectiveInject(i1.TbAuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.MatDialog), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ TbLoginComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: TbLoginComponent, selectors: [["tb-login"]], viewQuery: function TbLoginComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
    } }, decls: 33, vars: 25, consts: [[1, "login-container", 3, "ngStyle"], [1, "login", 2, "z-index", "1"], [1, "login-header"], ["mat-card-image", "", 2, "width", "60%", 3, "src"], [4, "ngIf"], [1, "login-form"], [3, "text", "ngClass", 4, "ngIf"], ["text", "Password", 3, "ngClass", 4, "ngIf"], ["class", "form-control", 4, "ngIf"], ["class", "login-infos", 4, "ngIf"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", "style", "white-space: pre-wrap", 4, "ngIf"], ["class", "login-info panel flex-center", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "60px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", "data-test", "loginButton", 1, "buttons", "login-button", 3, "disabled", "click"], ["data-test", "loginLoadingButton", "class", "k-icon k-i-loading", 4, "ngIf"], ["class", "login-footer", 4, "ngIf"], [1, "login-footer"], ["style", "display: flex; margin-top: 10px; justify-content: flex-end", 4, "ngIf"], [2, "position", "absolute", "bottom", "0", "width", "100%", "z-index", "0"], [1, "copyright", "copyright-abs"], [1, "margin-h1", "title"], ["class", "login-expired-subtitle description", 4, "ngIf"], [1, "description"], [1, "login-expired-subtitle", "description"], [1, "description", 2, "width", "350px"], [3, "text", "ngClass"], ["kendoTextBox", "", "data-test", "loginAccountName", "name", "accountName", "type", "text", 3, "ngModel", "ngClass", "ngModelChange", "keyup"], ["text", "Password", 3, "ngClass"], ["kendoTextBox", "", "data-test", "loginPassword", "name", "password", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "ngModelChange", "keyup"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], [1, "material-icons", "icon", 3, "click"], [1, "form-control"], ["data-test", "loginDropDownSubscription", "name", "subscription", "textField", "description", "valueField", "subscriptionkey", "valuePrimitive", "true", 1, "kendo-dropdown", 3, "disabled", "data", "ngModel", "ngModelChange", "click"], ["dropdown", ""], ["kendoDropDownListItemTemplate", ""], ["data-test", "loginDropDownSubscriptionArrowUp", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowDown", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["class", "instancekey", "data-test", "loginParagraphInstanceKey", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowUp", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginDropDownSubscriptionArrowDown", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginParagraphInstanceKey", 1, "instancekey"], ["kendoTextBox", "", "data-test", "loginAccountNameOtp", "name", "accountNameOtp", "type", "password", 1, "normal-state", 3, "ngModel", "type", "ngModelChange", "keyup"], [1, "login-warning", "flex-center", 2, "display", "flex", "justify-content", "flex-end", "flex-direction", "column", "white-space", "pre-wrap"], [1, "wrap"], ["type", "checkbox", "id", "binding", "name", "useralreadyloggedAccepted", "kendoCheckBox", "", 3, "ngModel", "ngModelChange"], ["for", "binding", 1, "k-checkbox-label"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5", 2, "white-space", "pre-wrap"], [1, "login-info", "panel", "flex-center"], [2, "display", "flex", "justify-content", "flex-end", "flex-direction", "column"], ["class", "description", "style", "margin-bottom: 0px !important", 4, "ngIf"], ["class", "link pointer", "data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 3, "click", 4, "ngIf"], ["class", "login-header", 4, "ngIf", "ngIfElse"], ["onlyOneMethodConfigured", ""], [1, "description", 2, "margin-bottom", "0px !important"], ["data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 1, "link", "pointer", 3, "click"], ["style", "margin: 10px 0; font-weight: 600; color: #005890", 4, "ngIf"], ["class", "link pointer", "data-test", "loginAlternativeSms", 3, "click", 4, "ngIf"], ["class", "link pointer", "data-test", "loginAlternativeApp", 3, "click", 4, "ngIf"], [2, "margin", "10px 0", "font-weight", "600", "color", "#005890"], ["data-test", "loginAlternativeSms", 1, "link", "pointer", 3, "click"], ["data-test", "loginAlternativeApp", 1, "link", "pointer", 3, "click"], [1, "link", 2, "margin-top", "10px", "font-weight", "600", "color", "#005890"], [1, "pointer", 3, "click"], ["data-test", "loginLoadingButton", 1, "k-icon", "k-i-loading"], ["kendoButton", "", "data-test", "loginBackButton", 1, "buttons", "back-button", 3, "click"], ["data-test", "loginSignUp", 1, "signup", 3, "click"], [2, "display", "flex", "margin-top", "10px", "justify-content", "flex-end"], ["data-test", "loginForgotPassword", 1, "forgotpwd", 3, "click"], ["data-test", "loginManageMethods", 1, "forgotpwd"]], template: function TbLoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
        i0.ɵɵelement(4, "img", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, TbLoginComponent_div_5_Template, 6, 3, "div", 4);
        i0.ɵɵtemplate(6, TbLoginComponent_div_6_Template, 5, 3, "div", 4);
        i0.ɵɵtemplate(7, TbLoginComponent_div_7_Template, 9, 6, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "form")(9, "div", 5);
        i0.ɵɵtemplate(10, TbLoginComponent_kendo_floatinglabel_10_Template, 2, 4, "kendo-floatinglabel", 6);
        i0.ɵɵtemplate(11, TbLoginComponent_kendo_floatinglabel_11_Template, 4, 6, "kendo-floatinglabel", 7);
        i0.ɵɵtemplate(12, TbLoginComponent_div_12_Template, 9, 11, "div", 8);
        i0.ɵɵtemplate(13, TbLoginComponent_kendo_floatinglabel_13_Template, 4, 6, "kendo-floatinglabel", 6);
        i0.ɵɵtemplate(14, TbLoginComponent_div_14_Template, 8, 5, "div", 9);
        i0.ɵɵelementStart(15, "div", 10);
        i0.ɵɵtemplate(16, TbLoginComponent_div_16_Template, 3, 1, "div", 11);
        i0.ɵɵtemplate(17, TbLoginComponent_div_17_Template, 3, 1, "div", 12);
        i0.ɵɵtemplate(18, TbLoginComponent_div_18_Template, 3, 1, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(19, TbLoginComponent_div_19_Template, 7, 4, "div", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(20, "div", 14)(21, "div", 15)(22, "button", 16);
        i0.ɵɵlistener("click", function TbLoginComponent_Template_button_click_22_listener() { return ctx.login(); });
        i0.ɵɵtemplate(23, TbLoginComponent_span_23_Template, 1, 0, "span", 17);
        i0.ɵɵtemplate(24, TbLoginComponent_span_24_Template, 2, 1, "span", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(25, TbLoginComponent_div_25_Template, 4, 1, "div", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 19);
        i0.ɵɵtemplate(27, TbLoginComponent_div_27_Template, 3, 0, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(28, TbLoginComponent_div_28_Template, 4, 1, "div", 20);
        i0.ɵɵtemplate(29, TbLoginComponent_div_29_Template, 4, 1, "div", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div", 21)(31, "p", 22);
        i0.ɵɵtext(32);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(23, _c2, "url(" + ctx.backgroundURL + ")"));
        i0.ɵɵadvance(4);
        i0.ɵɵpropertyInterpolate("src", ctx.logoURL, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.validate && !ctx.otp);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.validate && !ctx.otp);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.otp);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.validate && !ctx.otp);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.validate && !ctx.otp);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.subscriptionSelection && ctx.validate && !ctx.otp);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.otp);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.useralreadylogged);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.capsLockOn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.authService.errorMessage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.authService.okMessage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.otp);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx.disabledButton());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.validate || ctx.otp);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showSignUp);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.validate && !ctx.otp);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.otp);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("Login ", ctx.lib_version, " 2017 - ", ctx.currentYear, ", Zucchetti s.p.a.");
    } }, directives: [i4.NgStyle, i4.NgIf, i5.ɵNgNoValidate, i5.NgControlStatusGroup, i5.NgForm, i6.FloatingLabelComponent, i4.NgClass, i7.TextBoxDirective, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i8.DropDownListComponent, i8.ItemTemplateDirective, i5.CheckboxControlValueAccessor, i7.CheckBoxDirective, i6.LabelDirective], styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list[_ngcontent-%COMP%]{background:#F4F4F4;color:#005890;max-height:100px;width:370px!important}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{background:#bfcdd5}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar:hover{background:#d9d9d9}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#6cafd1}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#005890}.k-list[_ngcontent-%COMP%]   .k-list-item.k-selected[_ngcontent-%COMP%]{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%]:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width: 490px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:323px!important}}@media screen and (max-width: 425px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:273px!important}}@media screen and (max-width: 375px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:217px!important}}.k-list-md[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%], .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}.k-list-item-text[_ngcontent-%COMP%]{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;line-height:20px;margin-bottom:30px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.link[_ngcontent-%COMP%], tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:3px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#E7481C;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#E7481C}.login-infos[_ngcontent-%COMP%]   .login-warning[_ngcontent-%COMP%]{background:#E79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4AB679}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:#C0C0C0}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#E77B2D}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#FF9E18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:#808080}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9F9F9F}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4AB679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68B388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#D03C13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#E7481C}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}  .mat-dialog-container{color:#005890!important;background:white!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9F9F9F}  .mat-dialog-container .login-footer .back-button{background:#808080}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:#C0C0C0}  .mat-dialog-container .login-footer .ok-button{background:#4AB679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68B388}  .k-floating-label-container{width:100%;margin:8px 0}  .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea:focus{background-color:#fff!important}  .k-floating-label-container .k-textbox::-moz-selection,   .k-floating-label-container .k-input::-moz-selection,   .k-floating-label-container .k-textarea::-moz-selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-textbox::selection,   .k-floating-label-container .k-input::selection,   .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-picker-md .k-input-inner{background:white!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}  .k-floating-label-container .k-picker{border-width:0px;border-style:unset}  .k-floating-label-container .k-picker:focus-within{box-shadow:none}  .k-floating-label-container .k-picker:focus{box-shadow:none}  .k-floating-label-container:after{background-color:#8ee2ff;height:1px}  .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}  .k-floating-label-container .k-dropdown{border:none;background:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0B85CE}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}  html,   body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}tb-login[_nghost-%COMP%]{font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}}@media screen and (min-width: 576px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:450px}}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .upicon[_ngcontent-%COMP%]{transform:rotate(90deg);padding:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .downicon[_ngcontent-%COMP%]{transform:rotate(270deg)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .k-i-loading[_ngcontent-%COMP%]{font-size:20px}tb-login[_nghost-%COMP%]   p.instancekey[_ngcontent-%COMP%]{font-size:9px;font-weight:300;text-indent:1px;color:#005890}tb-login[_nghost-%COMP%]   p.copyright[_ngcontent-%COMP%]{font-size:10px;font-weight:300;margin:0;color:#fff}tb-login[_nghost-%COMP%]   p.copyright-abs[_ngcontent-%COMP%]{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{cursor:pointer;text-align:right}tb-login[_nghost-%COMP%]   p.signup[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}tb-login[_nghost-%COMP%]   .margin-h1[_ngcontent-%COMP%]{margin-left:-2px;margin-top:20px}tb-login[_nghost-%COMP%]   .margin-p[_ngcontent-%COMP%]{margin-left:-1.5px;margin-top:-10px}tb-login[_nghost-%COMP%]   .login-expired-subtitle[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}tb-login[_nghost-%COMP%]   .login-chooseSubscription[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-size:x-large}}tb-login[_nghost-%COMP%]     .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, tb-login[_nghost-%COMP%]   .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#005890}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLoginComponent, [{
        type: Component,
        args: [{ selector: 'tb-login', template: "<div class=\"login-container\" [ngStyle]=\"{ 'background-image': 'url(' + backgroundURL + ')' }\">\r\n    <div class=\"login\" style=\"z-index: 1\">\r\n        <div class=\"login-header\">\r\n            <div>\r\n                <img mat-card-image style=\"width: 60%\" src=\"{{ logoURL }}\" />\r\n            </div>\r\n            <div *ngIf=\"!validate && !otp\">\r\n                <h1 class=\"margin-h1 title\">{{ welcome }}</h1>\r\n                <p *ngIf=\"isExpiredSession\" class=\"login-expired-subtitle description\">{{ idleTimeoutMessage }}</p>\r\n                <p class=\"description\">{{ enterCredentials }}</p>\r\n            </div>\r\n            <div *ngIf=\"validate && !otp\">\r\n                <h1 class=\"margin-h1 title\">{{ chooseSubscription }}</h1>\r\n                <p class=\"description\">{{ accountName }}: {{ loginRequest.accountName }}</p>\r\n            </div>\r\n            <div *ngIf=\"otp\">\r\n                <h1 class=\"margin-h1 title\">{{ otpTitle }}</h1>\r\n                <p class=\"description\" style=\"width: 350px\">\r\n                    {{ otpMessage }}\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ authAppText }}</span>\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <form>\r\n            <div class=\"login-form\">\r\n                <kendo-floatinglabel\r\n                    [text]=\"accountName\"\r\n                    *ngIf=\"!validate && !otp\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        data-test=\"loginAccountName\"\r\n                        [(ngModel)]=\"loginRequest.accountName\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"accountName\"\r\n                        type=\"text\"\r\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n                    />\r\n                </kendo-floatinglabel>\r\n\r\n                <kendo-floatinglabel\r\n                    text=\"Password\"\r\n                    *ngIf=\"!validate && !otp\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        data-test=\"loginPassword\"\r\n                        [(ngModel)]=\"loginRequest.password\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"password\"\r\n                        [type]=\"hide ? 'password' : 'text'\"\r\n                        autocomplete=\"current-password\"\r\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n                    />\r\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === true\" class=\"material-icons icon\"> visibility </span>\r\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === false\" class=\"material-icons icon\"> visibility_off </span>\r\n                </kendo-floatinglabel>\r\n\r\n                <div class=\"form-control\" *ngIf=\"subscriptionSelection && validate && !otp\">\r\n                    <kendo-floatinglabel\r\n                        text=\"{{ subscription }}\"\r\n                        [ngClass]=\"[authService.errorMessage ? 'border-bottom-error' : '', dropDownIsClicked ? '' : 'border-bottom']\"\r\n                    >\r\n                        <kendo-dropdownlist\r\n                            #dropdown\r\n                            data-test=\"loginDropDownSubscription\"\r\n                            [disabled]=\"loginSubscriptions?.length <= 1\"\r\n                            [data]=\"loginSubscriptions\"\r\n                            name=\"subscription\"\r\n                            textField=\"description\"\r\n                            valueField=\"subscriptionkey\"\r\n                            valuePrimitive=\"true\"\r\n                            [(ngModel)]=\"loginRequest.subscriptionKey\"\r\n                            class=\"kendo-dropdown\"\r\n                            (ngModelChange)=\"onSubChange($event)\"\r\n                            (click)=\"isDropDownClicked()\"\r\n                        >\r\n                            <ng-template kendoDropDownListItemTemplate let-dataItem>\r\n                                <div\r\n                                    attr.data-sub=\"{{ dataItem.subscriptionkey }}\"\r\n                                    attr.data-description=\"{{ dataItem.description }}\"\r\n                                    attr.data-instance=\"{{ dataItem.instancekey }}\"\r\n                                >\r\n                                    {{ dataItem.description }}\r\n                                </div>\r\n                            </ng-template>\r\n                        </kendo-dropdownlist>\r\n                        <span\r\n                            data-test=\"loginDropDownSubscriptionArrowUp\"\r\n                            (click)=\"toggle(dropdown)\"\r\n                            *ngIf=\"dropDownIsClicked\"\r\n                            class=\"material-symbols-rounded icon\"\r\n                        >\r\n                            arrow_circle_up\r\n                        </span>\r\n                        <span\r\n                            data-test=\"loginDropDownSubscriptionArrowDown\"\r\n                            (click)=\"toggle(dropdown)\"\r\n                            *ngIf=\"!dropDownIsClicked\"\r\n                            class=\"material-symbols-rounded icon\"\r\n                        >\r\n                            arrow_circle_down\r\n                        </span>\r\n                    </kendo-floatinglabel>\r\n                    <div>\r\n                        <p class=\"instancekey\" data-test=\"loginParagraphInstanceKey\" *ngIf=\"loginSubscriptions.length > 3\">\r\n                            Subscription key: {{ loginRequest.subscriptionKey }} {{ instancekey }}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <kendo-floatinglabel\r\n                    [text]=\"code\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                    *ngIf=\"otp\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        data-test=\"loginAccountNameOtp\"\r\n                        [(ngModel)]=\"inputValue\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"accountNameOtp\"\r\n                        [type]=\"hideOtp ? 'password' : 'text'\"\r\n                        type=\"password\"\r\n                        class=\"normal-state\"\r\n                    />\r\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === true\" class=\"material-icons icon\"> visibility </span>\r\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === false\" class=\"material-icons icon\"> visibility_off </span>\r\n                </kendo-floatinglabel>\r\n\r\n                <!-- AlredyLogged -->\r\n                <div *ngIf=\"useralreadylogged\" class=\"login-infos\">\r\n                    <div\r\n                        style=\"display: flex; justify-content: flex-end; flex-direction: column; white-space: pre-wrap\"\r\n                        class=\"login-warning flex-center\"\r\n                    >\r\n                        <p>{{ loginRequest.accountName }} {{ useralreadyloggedTitle }} {{ useralreadyloggedMessage }}</p>\r\n                    </div>\r\n                    <div class=\"wrap\">\r\n                        <input\r\n                            type=\"checkbox\"\r\n                            id=\"binding\"\r\n                            [(ngModel)]=\"loginRequest.overwriteLogin\"\r\n                            name=\"useralreadyloggedAccepted\"\r\n                            kendoCheckBox\r\n                        />\r\n                        <label class=\"k-checkbox-label\" for=\"binding\"> {{ useralreadyloggedOK }}</label>\r\n                    </div>\r\n                </div>\r\n                <!--END AlredyLogged ---------------- -->\r\n\r\n                <div class=\"login-infos\">\r\n                    <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\r\n                        <p class=\"no-margin\">{{ blocMaiusc }}</p>\r\n                    </div>\r\n                    <div\r\n                        class=\"login-error panel flex-center margin-bottom-5\"\r\n                        *ngIf=\"authService.errorMessage\"\r\n                        style=\"white-space: pre-wrap\"\r\n                    >\r\n                        <p class=\"no-margin\">{{ authService.errorMessage }}</p>\r\n                    </div>\r\n                    <div class=\"login-info panel flex-center\" *ngIf=\"authService.okMessage\">\r\n                        <p class=\"no-margin\">{{ authService.okMessage }}</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"otp\">\r\n                    <div style=\"display: flex; justify-content: flex-end; flex-direction: column\">\r\n                        <p class=\"description\" style=\"margin-bottom: 0px !important\" *ngIf=\"otpInfo.TwoFactorType === 4\">\r\n                            {{ TOTPDescription }}\r\n                        </p>\r\n\r\n                        <u\r\n                            class=\"link pointer\"\r\n                            data-test=\"loginResendOtp\"\r\n                            (click)=\"alternativeMethods(otpInfo.TwoFactorType)\"\r\n                            data-test=\"loginAlternativeOtp\"\r\n                            *ngIf=\"otpInfo.TwoFactorType !== 4\"\r\n                            >{{ resendOTPLabel }}\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ chosenAuthApp }}</span>\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\r\n                        </u>\r\n                        <div class=\"login-header\" *ngIf=\"otpInfo.TOTPConfigured || otpInfo.MobilePhoneNr; else onlyOneMethodConfigured\">\r\n                            <p\r\n                                style=\"margin: 10px 0; font-weight: 600; color: #005890\"\r\n                                *ngIf=\"(otpInfo.Email && otpInfo.TOTPConfigured) || otpInfo.MobilePhoneNr\"\r\n                            >\r\n                                {{ otpText }}\r\n                            </p>\r\n                            <u\r\n                                class=\"link pointer\"\r\n                                *ngIf=\"otpInfo.TwoFactorType !== 1 && otpInfo.MobilePhoneNr\"\r\n                                (click)=\"alternativeMethods(1)\"\r\n                                data-test=\"loginAlternativeSms\"\r\n                                >{{ otpRequestCode }} SMS</u\r\n                            >\r\n                            <u\r\n                                class=\"link pointer\"\r\n                                *ngIf=\"otpInfo.TwoFactorType !== 2\"\r\n                                (click)=\"alternativeMethods(2)\"\r\n                                data-test=\"loginAlternativeSms\"\r\n                                >{{ otpRequestCode }} E-mail</u\r\n                            >\r\n                            <u\r\n                                class=\"link pointer\"\r\n                                *ngIf=\"otpInfo.TOTPConfigured && otpInfo.TwoFactorType !== 4\"\r\n                                (click)=\"alternativeMethods(4)\"\r\n                                data-test=\"loginAlternativeApp\"\r\n                                >{{ useAuthApp }}</u\r\n                            >\r\n                        </div>\r\n                        <ng-template #onlyOneMethodConfigured>\r\n                            <p class=\"link\" style=\"margin-top: 10px; font-weight: 600; color: #005890\">\r\n                                {{ oneMethodOnly }}\r\n                                <u class=\"pointer\" (click)=\"goToStore()\"> {{ alternativeMethod }} </u>\r\n                            </p>\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 60px\">\r\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n                <button kendoButton data-test=\"loginButton\" class=\"buttons login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\r\n                    <span data-test=\"loginLoadingButton\" class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\r\n                    <span *ngIf=\"!loading\">{{ buttonText }}</span>\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"login-footer\" *ngIf=\"(!loading && validate) || otp\">\r\n                <button kendoButton data-test=\"loginBackButton\" class=\"buttons back-button\" (click)=\"back()\">\r\n                    <span> {{ buttonBack }}</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <div *ngIf=\"showSignUp\">\r\n                <p class=\"signup\" data-test=\"loginSignUp\" (click)=\"newUser()\">SignUp here!</p>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!validate && !otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\r\n            <p class=\"forgotpwd\" data-test=\"loginForgotPassword\" (click)=\"goToForgotPassword()\">\r\n                <u>{{ forgetPassword }}</u>\r\n            </p>\r\n        </div>\r\n        <div *ngIf=\"otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\r\n            <p class=\"forgotpwd\" data-test=\"loginManageMethods\">\r\n                <u class=\"pointer\" (click)=\"goToStore()\">{{ manageMethods }}</u>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div style=\"position: absolute; bottom: 0; width: 100%; z-index: 0\">\r\n        <p class=\"copyright copyright-abs\">Login {{ lib_version }} 2017 - {{ currentYear }}, Zucchetti s.p.a.</p>\r\n    </div>\r\n</div>\r\n", styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list{background:#F4F4F4;color:#005890;max-height:100px;width:370px!important}.k-list ::-webkit-scrollbar{background:#bfcdd5}.k-list ::-webkit-scrollbar:hover{background:#d9d9d9}.k-list ::-webkit-scrollbar-thumb{background:#6cafd1}.k-list ::-webkit-scrollbar-thumb:hover{background:#005890}.k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}.kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width: 490px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}.kendo-dropdown{width:323px!important}}@media screen and (max-width: 425px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}.kendo-dropdown{width:273px!important}}@media screen and (max-width: 375px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}.kendo-dropdown{width:217px!important}}.k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}.k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;line-height:20px;margin-bottom:30px}.pointer{cursor:pointer}.link,:host(tb-login) p.forgotpwd{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom{border-bottom:1px solid #0B85CE}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:rgba(0,0,0,.32)}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:3px 0}.login-infos .caps-lock{background:#E7481C;display:flex;align-items:center}.login-infos .login-error{background:#E7481C}.login-infos .login-warning{background:#E79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos .login-info{background:#4AB679}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:#C0C0C0}.login-footer .login-button{background:#E77B2D}.login-footer .login-button:hover:enabled{background:#FF9E18}.login-footer .back-button{background:#808080}.login-footer .back-button:hover:enabled{background:#9F9F9F}.login-footer .ok-button{background:#4AB679}.login-footer .ok-button:hover:enabled{background:#68B388}.login-footer .error-button{background:#D03C13}.login-footer .error-button:hover:enabled{background:#E7481C}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}::ng-deep .mat-dialog-container{color:#005890!important;background:white!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9F9F9F}::ng-deep .mat-dialog-container .login-footer .back-button{background:#808080}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:#C0C0C0}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4AB679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68B388}::ng-deep .k-floating-label-container{width:100%;margin:8px 0}::ng-deep .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea:focus{background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox::-moz-selection,::ng-deep .k-floating-label-container .k-input::-moz-selection,::ng-deep .k-floating-label-container .k-textarea::-moz-selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-textbox::selection,::ng-deep .k-floating-label-container .k-input::selection,::ng-deep .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-picker-md .k-input-inner{background:white!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}::ng-deep .k-floating-label-container .k-picker{border-width:0px;border-style:unset}::ng-deep .k-floating-label-container .k-picker:focus-within{box-shadow:none}::ng-deep .k-floating-label-container .k-picker:focus{box-shadow:none}::ng-deep .k-floating-label-container:after{background-color:#8ee2ff;height:1px}::ng-deep .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}::ng-deep .k-floating-label-container .k-dropdown{border:none;background:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0B85CE}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}::ng-deep html,::ng-deep body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}:host(tb-login){font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}:host(tb-login) .login-container{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}:host(tb-login) .login-container .login{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){:host(tb-login) .login-container .login{padding:20px}}@media screen and (min-width: 576px){:host(tb-login) .login-container .login{max-width:450px}}:host(tb-login) .login-container .login .upicon{transform:rotate(90deg);padding:1px}:host(tb-login) .login-container .login .downicon{transform:rotate(270deg)}:host(tb-login) .login-container .login .login-header{display:flex;flex-direction:column}:host(tb-login) .login-container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:0}:host(tb-login) .login-container .login .k-i-loading{font-size:20px}:host(tb-login) p.instancekey{font-size:9px;font-weight:300;text-indent:1px;color:#005890}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) p.forgotpwd{cursor:pointer;text-align:right}:host(tb-login) p.signup{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}:host(tb-login) .margin-h1{margin-left:-2px;margin-top:20px}:host(tb-login) .margin-p{margin-left:-1.5px;margin-top:-10px}:host(tb-login) .login-expired-subtitle{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}:host(tb-login) .login-chooseSubscription{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}:host(tb-login) .login-sign-in{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){:host(tb-login) .login{padding:20px}:host(tb-login) .login .login-form ::ng-deep .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){:host(tb-login) .login-sign-in{font-size:x-large}}:host(tb-login) ::ng-deep .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host(tb-login) .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#005890}\n"] }]
    }], function () { return [{ type: i1.TbAuthService }, { type: i2.Router }, { type: i3.MatDialog }, { type: i0.Renderer2 }, { type: i2.ActivatedRoute }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { dropdown: [{
            type: ViewChild,
            args: ['dropdown']
        }] }); })();
// workaround for chromium bug https://bugs.chromium.org/p/chromium/issues/detail?id=352527
function webkitAutofillWorkaround() {
    setTimeout(() => {
        try {
            document
                .querySelectorAll('input:-webkit-autofill')
                .forEach((el) => (el.parentElement.className = 'k-floating-label-container'));
        }
        catch {
            // no webkit browser
        }
    }, 1000);
}
// ---------------------------------------------------------------------------
function hasAutofill() {
    try {
        return !!document.querySelector('input:-webkit-autofill');
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL3BhZ2VzL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztJQ0g1Qiw2QkFBdUU7SUFBQSxZQUF3QjtJQUFBLGlCQUFJOzs7SUFBNUIsZUFBd0I7SUFBeEIsZ0RBQXdCOzs7SUFGbkcsMkJBQStCLGFBQUE7SUFDQyxZQUFhO0lBQUEsaUJBQUs7SUFDOUMsb0VBQW1HO0lBQ25HLDZCQUF1QjtJQUFBLFlBQXNCO0lBQUEsaUJBQUksRUFBQTs7O0lBRnJCLGVBQWE7SUFBYixvQ0FBYTtJQUNyQyxlQUFzQjtJQUF0Qiw4Q0FBc0I7SUFDSCxlQUFzQjtJQUF0Qiw2Q0FBc0I7OztJQUVqRCwyQkFBOEIsYUFBQTtJQUNFLFlBQXdCO0lBQUEsaUJBQUs7SUFDekQsNkJBQXVCO0lBQUEsWUFBaUQ7SUFBQSxpQkFBSSxFQUFBOzs7SUFEaEQsZUFBd0I7SUFBeEIsK0NBQXdCO0lBQzdCLGVBQWlEO0lBQWpELHdGQUFpRDs7O0lBTXBFLDRCQUEwQztJQUFBLG1CQUFHO0lBQUEsaUJBQU87OztJQUNwRCw0QkFBMEM7SUFBQSxzQkFBTTtJQUFBLGlCQUFPOzs7SUFDdkQsNEJBQTBDO0lBQUEsWUFBaUI7SUFBQSxpQkFBTzs7O0lBQXhCLGVBQWlCO0lBQWpCLHlDQUFpQjs7O0lBQzNELDRCQUE2QztJQUFBLDBCQUFVO0lBQUEsaUJBQU87OztJQVB0RSwyQkFBaUIsYUFBQTtJQUNlLFlBQWM7SUFBQSxpQkFBSztJQUMvQyw2QkFBNEM7SUFDeEMsWUFDQTtJQUFBLHlFQUFvRDtJQUNwRCx5RUFBdUQ7SUFDdkQseUVBQWtFO0lBQ2xFLHlFQUE4RDtJQUNsRSxpQkFBSSxFQUFBOzs7SUFQd0IsZUFBYztJQUFkLHFDQUFjO0lBRXRDLGVBQ0E7SUFEQSxrREFDQTtJQUFPLGVBQWlDO0lBQWpDLHlEQUFpQztJQUNqQyxlQUFpQztJQUFqQyx5REFBaUM7SUFDakMsZUFBaUM7SUFBakMseURBQWlDO0lBQ2pDLGVBQW9DO0lBQXBDLDREQUFvQzs7OztJQU8vQywrQ0FJQyxnQkFBQTtJQUlPLGtQQUFzQyx3S0FDN0IsNkJBQXFCLElBRFE7SUFIMUMsaUJBUUUsRUFBQTs7O0lBWkYseUNBQW9CLHNGQUFBO0lBT2hCLGVBQXNDO0lBQXRDLHlEQUFzQyw4RUFBQTs7OztJQXVCMUMsZ0NBQStFO0lBQXpFLHNOQUFzQjtJQUFvRCw0QkFBVztJQUFBLGlCQUFPOzs7O0lBQ2xHLGdDQUFnRjtJQUExRSxzTkFBc0I7SUFBcUQsZ0NBQWU7SUFBQSxpQkFBTzs7OztJQWhCM0csK0NBSUMsZ0JBQUE7SUFJTywrT0FBbUMsd0tBQzFCLDZCQUFxQixJQURLO0lBSHZDLGlCQVNFO0lBQ0YsMkZBQWtHO0lBQ2xHLDJGQUF1RztJQUMzRyxpQkFBc0I7OztJQWRsQixtR0FBOEU7SUFLMUUsZUFBbUM7SUFBbkMsc0RBQW1DLDJDQUFBLDhFQUFBO0lBT1QsZUFBbUI7SUFBbkIsMkNBQW1CO0lBQ25CLGVBQW9CO0lBQXBCLDRDQUFvQjs7O0lBdUJ0QywyQkFJQztJQUNHLFlBQ0o7SUFBQSxpQkFBTTs7O0lBTEYsd0RBQThDLDhDQUFBLDJDQUFBO0lBSTlDLGVBQ0o7SUFESSx5REFDSjs7OztJQUdSLGdDQUtDO0lBSEcseU5BQVMsb0JBQWdCLElBQUM7SUFJMUIsaUNBQ0o7SUFBQSxpQkFBTzs7OztJQUNQLGdDQUtDO0lBSEcseU5BQVMsb0JBQWdCLElBQUM7SUFJMUIsbUNBQ0o7SUFBQSxpQkFBTzs7O0lBR1AsNkJBQW1HO0lBQy9GLFlBQ0o7SUFBQSxpQkFBSTs7O0lBREEsZUFDSjtJQURJLGlIQUNKOzs7OztJQWpEUiwrQkFBNEUsOEJBQUEsaUNBQUE7SUFjaEUsbVBBQTBDLHFMQUV6QiwyQkFBbUIsSUFGTSwrSkFHakMsMkJBQW1CLElBSGM7SUFLMUMseUZBUWM7SUFDbEIsaUJBQXFCO0lBQ3JCLDJFQU9PO0lBQ1AsMkVBT087SUFDWCxpQkFBc0I7SUFDdEIsMkJBQUs7SUFDRCxxRUFFSTtJQUNSLGlCQUFNLEVBQUE7OztJQWhERixlQUF5QjtJQUF6QixxREFBeUI7SUFDekIsbUtBQTZHO0lBS3pHLGVBQTRDO0lBQTVDLDZHQUE0QyxtQ0FBQSxnREFBQTtJQXdCM0MsZUFBdUI7SUFBdkIsK0NBQXVCO0lBUXZCLGVBQXdCO0lBQXhCLGdEQUF3QjtJQU9pQyxlQUFtQztJQUFuQywyREFBbUM7Ozs7SUFxQnJHLGdDQUF3RjtJQUFsRiw0TkFBNEI7SUFBdUQsNEJBQVc7SUFBQSxpQkFBTzs7OztJQUMzRyxnQ0FBeUY7SUFBbkYsNE5BQTRCO0lBQXdELGdDQUFlO0lBQUEsaUJBQU87Ozs7SUFoQnBILCtDQUlDLGdCQUFBO0lBSU8sb09BQXdCLHdLQUNmLDZCQUFxQixJQUROO0lBSDVCLGlCQVNFO0lBQ0YsMkZBQTJHO0lBQzNHLDJGQUFnSDtJQUNwSCxpQkFBc0I7OztJQWhCbEIsa0NBQWEsc0ZBQUE7SUFPVCxlQUF3QjtJQUF4QiwyQ0FBd0IsOENBQUE7SUFPUSxlQUFzQjtJQUF0Qiw4Q0FBc0I7SUFDdEIsZUFBdUI7SUFBdkIsK0NBQXVCOzs7O0lBSS9ELCtCQUFtRCxjQUFBLFFBQUE7SUFLeEMsWUFBMEY7SUFBQSxpQkFBSSxFQUFBO0lBRXJHLCtCQUFrQixnQkFBQTtJQUlWLHFPQUF5QztJQUg3QyxpQkFNRTtJQUNGLGlDQUE4QztJQUFDLFlBQXlCO0lBQUEsaUJBQVEsRUFBQSxFQUFBOzs7SUFWN0UsZUFBMEY7SUFBMUYsd0lBQTBGO0lBTXpGLGVBQXlDO0lBQXpDLDREQUF5QztJQUlFLGVBQXlCO0lBQXpCLDBEQUF5Qjs7O0lBTTVFLCtCQUE0RSxZQUFBO0lBQ25ELFlBQWdCO0lBQUEsaUJBQUksRUFBQTs7O0lBQXBCLGVBQWdCO0lBQWhCLHVDQUFnQjs7O0lBRXpDLCtCQUlDLFlBQUE7SUFDd0IsWUFBOEI7SUFBQSxpQkFBSSxFQUFBOzs7SUFBbEMsZUFBOEI7SUFBOUIscURBQThCOzs7SUFFdkQsK0JBQXdFLFlBQUE7SUFDL0MsWUFBMkI7SUFBQSxpQkFBSSxFQUFBOzs7SUFBL0IsZUFBMkI7SUFBM0IsbURBQTJCOzs7SUFNaEQsNkJBQWlHO0lBQzdGLFlBQ0o7SUFBQSxpQkFBSTs7O0lBREEsZUFDSjtJQURJLHdEQUNKOzs7SUFTSSw0QkFBMEM7SUFBQSxtQkFBRztJQUFBLGlCQUFPOzs7SUFDcEQsNEJBQTBDO0lBQUEsc0JBQU07SUFBQSxpQkFBTzs7O0lBQ3ZELDRCQUEwQztJQUFBLFlBQW1CO0lBQUEsaUJBQU87OztJQUExQixlQUFtQjtJQUFuQiwyQ0FBbUI7OztJQUM3RCw0QkFBNkM7SUFBQSwwQkFBVTtJQUFBLGlCQUFPOzs7O0lBVmxFLDZCQU1LO0lBSEQsZ0tBQVMseURBQXlDLElBQUM7SUFHbEQsWUFDRDtJQUFBLDhFQUFvRDtJQUNwRCw4RUFBdUQ7SUFDdkQsOEVBQW9FO0lBQ3BFLDhFQUE4RDtJQUNsRSxpQkFBSTs7O0lBTEMsZUFDRDtJQURDLHNEQUNEO0lBQU8sZUFBaUM7SUFBakMsMERBQWlDO0lBQ2pDLGVBQWlDO0lBQWpDLDBEQUFpQztJQUNqQyxlQUFpQztJQUFqQywwREFBaUM7SUFDakMsZUFBb0M7SUFBcEMsNkRBQW9DOzs7SUFHM0MsNkJBR0M7SUFDRyxZQUNKO0lBQUEsaUJBQUk7OztJQURBLGVBQ0o7SUFESSxnREFDSjs7OztJQUNBLDZCQUtLO0lBRkQsc0tBQVMsMkJBQW1CLENBQUMsQ0FBQyxJQUFDO0lBRTlCLFlBQXdCO0lBQUEsaUJBQzVCOzs7SUFESSxlQUF3QjtJQUF4Qix5REFBd0I7Ozs7SUFFN0IsNkJBS0s7SUFGRCxzS0FBUywyQkFBbUIsQ0FBQyxDQUFDLElBQUM7SUFFOUIsWUFBMkI7SUFBQSxpQkFDL0I7OztJQURJLGVBQTJCO0lBQTNCLDREQUEyQjs7OztJQUVoQyw2QkFLSztJQUZELHNLQUFTLDJCQUFtQixDQUFDLENBQUMsSUFBQztJQUU5QixZQUFnQjtJQUFBLGlCQUNwQjs7O0lBREksZUFBZ0I7SUFBaEIsd0NBQWdCOzs7SUExQnpCLDhCQUFnSDtJQUM1RywyRUFLSTtJQUNKLDJFQU1DO0lBQ0QsMkVBTUM7SUFDRCwyRUFNQztJQUNMLGlCQUFNOzs7SUF6QkcsZUFBd0U7SUFBeEUsK0dBQXdFO0lBTXhFLGVBQTBEO0lBQTFELDJGQUEwRDtJQU8xRCxlQUFpQztJQUFqQywwREFBaUM7SUFPakMsZUFBMkQ7SUFBM0QsNEZBQTJEOzs7O0lBT2hFLDZCQUEyRTtJQUN2RSxZQUNBO0lBQUEsNkJBQXlDO0lBQXRCLDBLQUFTLG1CQUFXLElBQUM7SUFBRSxZQUF3QjtJQUFBLGlCQUFJLEVBQUE7OztJQUR0RSxlQUNBO0lBREEsc0RBQ0E7SUFBMEMsZUFBd0I7SUFBeEIsMERBQXdCOzs7SUFsRGxGLDJCQUFpQixjQUFBO0lBRVQscUVBRUk7SUFFSixxRUFXSTtJQUNKLHlFQTRCTTtJQUNOLDBIQUtjO0lBQ2xCLGlCQUFNLEVBQUE7Ozs7SUFuRDRELGVBQWlDO0lBQWpDLDBEQUFpQztJQVMxRixlQUFpQztJQUFqQywwREFBaUM7SUFPWCxlQUF1RDtJQUF2RCxzRkFBdUQsa0JBQUE7OztJQTJDdEYsMkJBQXVGOzs7SUFDdkYsNEJBQXVCO0lBQUEsWUFBZ0I7SUFBQSxpQkFBTzs7O0lBQXZCLGVBQWdCO0lBQWhCLHdDQUFnQjs7OztJQUkvQywrQkFBZ0UsaUJBQUE7SUFDZ0IsZ0tBQVMsY0FBTSxJQUFDO0lBQ3hGLDRCQUFNO0lBQUMsWUFBZ0I7SUFBQSxpQkFBTyxFQUFBLEVBQUE7OztJQUF2QixlQUFnQjtJQUFoQixrREFBZ0I7Ozs7SUFLL0IsMkJBQXdCLFlBQUE7SUFDc0IsMkpBQVMsaUJBQVMsSUFBQztJQUFDLDRCQUFZO0lBQUEsaUJBQUksRUFBQTs7OztJQUd0RiwrQkFBa0csWUFBQTtJQUN6QywySkFBUyw0QkFBb0IsSUFBQztJQUMvRSx5QkFBRztJQUFBLFlBQW9CO0lBQUEsaUJBQUksRUFBQSxFQUFBOzs7SUFBeEIsZUFBb0I7SUFBcEIsNENBQW9COzs7O0lBRy9CLCtCQUFvRixZQUFBLFlBQUE7SUFFekQsMkpBQVMsbUJBQVcsSUFBQztJQUFDLFlBQW1CO0lBQUEsaUJBQUksRUFBQSxFQUFBOzs7SUFBdkIsZUFBbUI7SUFBbkIsMkNBQW1COzs7QUQ5TzVFLDhFQUE4RTtBQUM5RSxNQUFNLE9BQU8sZ0JBQWdCO0lBbUV6Qiw4RUFBOEU7SUFDOUUsWUFDVyxXQUEwQixFQUMxQixNQUFjLEVBQ2IsTUFBaUIsRUFDakIsUUFBbUIsRUFDbkIsS0FBcUIsRUFDSCxHQUFTO1FBTDVCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDSCxRQUFHLEdBQUgsR0FBRyxDQUFNO1FBekUvQixvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNaLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixRQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ1osWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixpQkFBWSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBVWhELHVCQUFrQixHQUFpRyxFQUFFLENBQUM7UUFHdEgsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFFZixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixnQkFBVyxHQUFXLFdBQVcsQ0FBQztRQThCbEMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLDJCQUFzQixHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNoRSxlQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxZQUFPLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNyQywwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFnWDlCLDhFQUE4RTtRQUM5RSxxQkFBZ0IsR0FBRyxDQUFDLElBQVksRUFBVSxFQUFFO1lBQ3hDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25ELE9BQU8saUJBQWlCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN4SCxDQUFDLENBQUM7UUFFRiw4RUFBOEU7UUFDOUUsMEJBQXFCLEdBQUcsQ0FBQyxJQUFZLEVBQVUsRUFBRTtZQUM3QyxJQUFJLGlCQUFpQixHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLElBQUksQ0FBQyxVQUFVO2dCQUFFLE9BQU8saUJBQWlCLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzs7Z0JBQ3hILE9BQU8saUJBQWlCLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDM0gsQ0FBQyxDQUFDO1FBRUYsOEVBQThFO1FBQzlFLHdCQUFtQixHQUFHLENBQUMsSUFBWSxFQUFFLFlBQW9CLEVBQVUsRUFBRTtZQUNqRSxJQUFJLGlCQUFpQixHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDN0UsSUFBSSxJQUFJLENBQUMsVUFBVTtnQkFBRSxPQUFPLFNBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDOztnQkFDaEgsT0FBTyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkgsQ0FBQyxDQUFDO1FBeFhFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFRLEVBQUUsRUFBRTtZQUNqRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQzthQUNsQztpQkFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2FBQzlCO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7YUFDbEM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxXQUFXLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBQzdCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyw4QkFBOEIsQ0FBQztZQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0VBQWdFLENBQUM7WUFDeEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLEdBQUcsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRywrQ0FBK0MsQ0FBQztZQUN4RSxJQUFJLENBQUMsY0FBYyxHQUFHLCtCQUErQixDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcseUJBQXlCLENBQUM7WUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHFFQUFxRSxDQUFDO1lBQ2hHLElBQUksQ0FBQyxVQUFVLEdBQUcsbURBQW1ELENBQUM7WUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLDhCQUE4QixDQUFDO1lBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsbUNBQW1DLENBQUM7WUFDMUQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHVFQUF1RSxDQUFDO1lBQ3hHLElBQUksQ0FBQyxzQkFBc0IsR0FBRyx3Q0FBd0MsQ0FBQztZQUN2RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsMkJBQTJCLENBQUM7WUFDdkQsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyw4QkFBOEIsQ0FBQztZQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLHNCQUFzQixDQUFDO1lBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsdUNBQXVDLENBQUM7WUFDMUQsSUFBSSxDQUFDLGFBQWE7Z0JBQ2QsNEdBQTRHLENBQUM7WUFDakgsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlDQUFpQyxDQUFDO1lBQzNELElBQUksQ0FBQyxhQUFhLEdBQUcsbUNBQW1DLENBQUM7WUFDekQsSUFBSSxDQUFDLGVBQWU7Z0JBQ2hCLGdJQUFnSSxDQUFDO1NBQ3hJO2FBQU07WUFDSCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsMEJBQTBCLENBQUM7WUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7WUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyw2REFBNkQsQ0FBQztZQUNyRixJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsR0FBRyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDMUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG1FQUFtRSxDQUFDO1lBQzVGLElBQUksQ0FBQyxjQUFjLEdBQUcsd0JBQXdCLENBQUM7WUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7WUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHVFQUF1RSxDQUFDO1lBQ2xHLElBQUksQ0FBQyxVQUFVLEdBQUcsc0NBQXNDLENBQUM7WUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUEyQixDQUFDO1lBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsNkJBQTZCLENBQUM7WUFDcEQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLDhFQUE4RSxDQUFDO1lBQy9HLElBQUksQ0FBQyxzQkFBc0IsR0FBRyw2Q0FBNkMsQ0FBQztZQUM1RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsd0JBQXdCLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRywwQkFBMEIsQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFtQixDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsNEJBQTRCLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyx5R0FBeUcsQ0FBQztZQUMvSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUNBQWlDLENBQUM7WUFDM0QsSUFBSSxDQUFDLGFBQWEsR0FBRywyQkFBMkIsQ0FBQztZQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLHFHQUFxRyxDQUFDO1NBQ2hJO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDeEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxXQUFXLElBQUksV0FBVyxLQUFLLFNBQVMsQ0FBQztZQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNEQUFzRDtJQUN0RCx3QkFBd0I7SUFDeEIsNERBQTREO0lBQzVELGtFQUFrRTtJQUNsRSw4RkFBOEY7SUFFOUYsMkVBQTJFO0lBQzNFLGdGQUFnRjtJQUNoRixrRkFBa0Y7SUFDbEYsK0VBQStFO0lBRS9FLG1GQUFtRjtJQUNuRixxREFBcUQ7SUFDckQsMEVBQTBFO0lBQzFFLCtDQUErQztJQUMvQyxzRUFBc0U7SUFDdEUsZ0ZBQWdGO0lBQ2hGLHFFQUFxRTtJQUNyRSx3RUFBd0U7SUFDeEUsc0NBQXNDO0lBQ3RDLEtBQUs7SUFDTCxzREFBc0Q7SUFFdEQsOEVBQThFO0lBQzlFLGtCQUFrQjtRQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQix3QkFBd0IsRUFBRSxDQUFDO1FBQzNCLDBCQUEwQjtJQUM5QixDQUFDO0lBRUQsOEVBQThFO0lBQzlFLEtBQUssQ0FBQyxlQUFlO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLDRFQUE0RTtZQUM1RSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztZQUMxQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVTtnQkFDM0MsQ0FBQyxDQUFDLHlEQUF5RCxHQUFHLEtBQUs7Z0JBQ25FLENBQUMsQ0FBQywrQ0FBK0MsR0FBRyxLQUFLLENBQUM7U0FDakU7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNoRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRUQsOEVBQThFO0lBQzlFLFdBQVcsQ0FBQyxRQUFhO1FBQ3JCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLEtBQUssUUFBUSxDQUFDLENBQUM7UUFDL0UsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVc7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkYsQ0FBQztJQUVELDhFQUE4RTtJQUM5RSxhQUFhLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNoQjtTQUNKO1FBQ0QsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQsOEVBQThFO0lBQzlFLGNBQWM7UUFDVixPQUFPLENBQ0gsQ0FBQyxXQUFXLEVBQUU7WUFDVixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2QsQ0FBQyxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDckYsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLE9BQU87Z0JBQ1osQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtnQkFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7b0JBQ2QsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVc7b0JBQzlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRO29CQUMzQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNyRixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsT0FBTztvQkFDWixDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUMxRSxDQUFDO0lBQ04sQ0FBQztJQUNELElBQUksZ0JBQWdCO1FBQ2hCLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLE1BQU0sQ0FBQztJQUMvRCxDQUFDO0lBQ0QsOEVBQThFO0lBQzlFLE9BQU87UUFDSCxrR0FBa0c7UUFDbEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCw4RUFBOEU7SUFDOUUsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUF3QixLQUFLO1FBQ3BDLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRCw4RUFBOEU7SUFDOUUsS0FBSyxDQUFDLEtBQUs7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsY0FBYyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLCtFQUErRTtRQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JGLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUNyQztRQUVELElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksSUFBSSxDQUFDLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Z0JBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDOUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ2pFLE9BQU87WUFDWCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNqRSxvRUFBb0U7WUFDcEUsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztnQkFFbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ25DO2lCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtnQkFDM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO29CQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztvQkFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO2lCQUNsQzs7b0JBQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO2FBQ25CO2lCQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFO2dCQUM3RSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO2FBQ3hGO2lCQUFNO2dCQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUN6RSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDL0QsT0FBTztZQUNYLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2pFLG9FQUFvRTtZQUNwRSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtnQkFDckMsOEJBQThCO2dCQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2FBQ2pDO1lBQ0QsaURBQWlEO1lBQ2pELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFFeEcsSUFBSSxFQUFFLEVBQUU7b0JBQ0osbUlBQW1JO29CQUNuSSxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBRXRGLHlGQUF5RjtvQkFDekYsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO3dCQUM5QyxNQUFNLGVBQWUsR0FBa0IsT0FBTyxDQUFDLE9BQXdCLENBQUM7d0JBQ3hFLElBQUksZUFBZSxFQUFFOzRCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzs0QkFDNUUsTUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOzRCQUN2RCxJQUFJLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDOzRCQUNsQyxJQUFJLE9BQU8sR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRCQUUvRCxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsRUFBRyxDQUFDLENBQUM7NEJBQ25GLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7NEJBQzFGLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7NEJBQ2pHLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUNyQixRQUFRLEVBQ1IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLG9CQUFvQixDQUFDLENBQ2hHLENBQUM7NEJBRUYsb0RBQW9EOzRCQUNwRCxJQUFJLEdBQUcsS0FBSyxPQUFPLEVBQUU7Z0NBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQ2xDLE9BQU8sRUFDUCxhQUFhLENBQUMsY0FBYyxFQUFFLEVBQzlCLGFBQWEsQ0FBQyx3QkFBd0IsRUFBRSxFQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUM5QixDQUFDO2dDQUNGLE9BQU87NkJBQ1Y7eUJBQ0o7cUJBQ0o7aUJBQ0o7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztnQkFFbkMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLEVBQUU7b0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQzlCLENBQUM7b0JBQ0YsT0FBTztpQkFDVjtnQkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdEO2lCQUFNO2dCQUNILE1BQU07Z0JBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFO29CQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7b0JBQ2hDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO3dCQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7cUJBQ2xDOzt3QkFBTSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7aUJBQ25CO3FCQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFO29CQUMxRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO2lCQUN4RjtnQkFDRCxNQUFNO2dCQUNOLDBDQUEwQztnQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEI7U0FDSjtJQUNMLENBQUM7SUF1QkQsOEVBQThFO0lBQzlFLGFBQWE7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN4RSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUU3RSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQUVELDhFQUE4RTtJQUN0RSxhQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3JDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hGLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3ZGO2FBQU07WUFDSCxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5RSxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNyRjtRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3hHLElBQUksRUFBRSxFQUFFO2dCQUNKLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO29CQUNyQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ2hGO3FCQUFNO29CQUNILFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDOUU7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELDhFQUE4RTtJQUM5RSxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBWTtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUN2QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQzdCLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELDJDQUEyQztRQUMzQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRXJHLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQ3ZDLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xELFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFOUQsSUFBSSxJQUFJLENBQUMsVUFBVTtnQkFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyw0REFBNEQsQ0FBQzs7Z0JBQzdHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLG1EQUFtRCxDQUFDO1NBQzVGO1FBRUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7YUFDbEY7aUJBQU07Z0JBQ0gsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3pHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7aUJBQ2xGO2FBQ0o7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDdkQ7SUFDTCxDQUFDO0lBRUQsOEVBQThFO0lBQ3RFLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxJQUFZO1FBQ2xELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFXLENBQUMsRUFBRTtZQUNoRixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBVyxDQUFDLENBQUM7U0FDNUM7UUFFRCxNQUFNLElBQUksR0FBd0IsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sTUFBTSxHQUF3QixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2hJLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUU5RCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsOEVBQThFO0lBQ3RFLGdCQUFnQixDQUFDLENBQWUsRUFBRSxDQUFlO1FBQ3JELE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxLQUFLO1lBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEtBQUssR0FBRyxLQUFLO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsOEVBQThFO0lBQzlFLGtCQUFrQjtRQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsOEVBQThFO0lBQzlFLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxXQUFtQjtRQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWhDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ3hELElBQUksRUFBRTtnQkFDRixLQUFLO2dCQUNMLE9BQU87Z0JBQ1AsV0FBVztnQkFDWCxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXO2FBQzNDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBdUMsRUFBRSxFQUFFO1lBQ2hGLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUNuQyxJQUFJLElBQUksS0FBSyxTQUFTO2dCQUFFLE9BQU87WUFDL0IsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtnQkFDdkQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxpQ0FBaUMsQ0FBQztvQkFDbEUsT0FBTztpQkFDVjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyw0QkFBNEIsQ0FBQztvQkFDN0QsT0FBTztpQkFDVjthQUNKO1lBRUQsTUFBTSxPQUFPLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN2QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUN2RSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUMvRCxPQUFPO1lBQ1gsQ0FBQyxDQUFDLENBQUM7WUFFSCw4Q0FBOEM7WUFDOUMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUNuQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLDRFQUE0RSxDQUFDO2lCQUM3RztxQkFBTTtvQkFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxzRUFBc0UsQ0FBQztpQkFDdkc7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3RDtZQUNELElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pGLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzthQUNuQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDhFQUE4RTtJQUM5RSxpQkFBaUI7UUFDYixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRUQsOEVBQThFO0lBQzlFLE1BQU0sQ0FBQyxRQUFhO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDSCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVELDhFQUE4RTtJQUM5RSxrQkFBa0IsQ0FBQyxhQUFrQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxhQUFhLElBQUksSUFBSSxDQUFDLENBQUMsU0FBUyxDQUN6RixDQUFDLEtBQXNCLEVBQUUsRUFBRTtnQkFDdkIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztpQkFDOUM7WUFDTCxDQUFDLEVBQ0QsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FDakIsQ0FBQztZQUVGLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FDNUcsQ0FBQyxLQUFzQixFQUFFLEVBQUU7WUFDdkIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQzthQUM5QztRQUNMLENBQUMsRUFDRCxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUNkLENBQUM7SUFDTixDQUFDO0lBRUQsOEVBQThFO0lBQzlFLFNBQVM7UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDOzttR0Evb0JRLGdCQUFnQixpTkEwRWIsUUFBUTtrR0ExRVgsZ0JBQWdCOzs7Ozs7UUNwQjdCLDhCQUE4RixhQUFBLGFBQUEsVUFBQTtRQUk5RSx5QkFBNkQ7UUFDakUsaUJBQU07UUFDTixpRUFJTTtRQUNOLGlFQUdNO1FBQ04saUVBU007UUFDVixpQkFBTTtRQUVOLDRCQUFNLGFBQUE7UUFFRSxtR0Fjc0I7UUFFdEIsbUdBaUJzQjtRQUV0QixvRUFtRE07UUFFTixtR0FpQnNCO1FBR3RCLG1FQWlCTTtRQUdOLGdDQUF5QjtRQUNyQixvRUFFTTtRQUNOLG9FQU1NO1FBQ04sb0VBRU07UUFDVixpQkFBTTtRQUVOLG1FQXNETTtRQUNWLGlCQUFNLEVBQUE7UUFHVixnQ0FBMEgsZUFBQSxrQkFBQTtRQUV6Qyw4RkFBUyxXQUFPLElBQUM7UUFDdEYsc0VBQXVGO1FBQ3ZGLHFFQUE4QztRQUNsRCxpQkFBUyxFQUFBO1FBR2Isb0VBSU07UUFDVixpQkFBTTtRQUNOLGdDQUEwQjtRQUN0QixtRUFFTTtRQUNWLGlCQUFNO1FBQ04sb0VBSU07UUFDTixvRUFJTTtRQUNWLGlCQUFNO1FBQ04sZ0NBQW9FLGFBQUE7UUFDN0IsYUFBa0U7UUFBQSxpQkFBSSxFQUFBLEVBQUE7O1FBdFFwRix1RkFBZ0U7UUFJdEMsZUFBbUI7UUFBbkIsOERBQW1CO1FBRXhELGVBQXVCO1FBQXZCLGdEQUF1QjtRQUt2QixlQUFzQjtRQUF0QiwrQ0FBc0I7UUFJdEIsZUFBUztRQUFULDhCQUFTO1FBZ0JOLGVBQXVCO1FBQXZCLGdEQUF1QjtRQWdCdkIsZUFBdUI7UUFBdkIsZ0RBQXVCO1FBaUJELGVBQStDO1FBQS9DLDRFQUErQztRQXdEckUsZUFBUztRQUFULDhCQUFTO1FBaUJSLGVBQXVCO1FBQXZCLDRDQUF1QjtRQXFCaUMsZUFBZ0I7UUFBaEIscUNBQWdCO1FBS3JFLGVBQThCO1FBQTlCLG1EQUE4QjtRQUtRLGVBQTJCO1FBQTNCLGdEQUEyQjtRQUtwRSxlQUFTO1FBQVQsOEJBQVM7UUE0RDRFLGVBQTZCO1FBQTdCLCtDQUE2QjtRQUNuRCxlQUFhO1FBQWIsa0NBQWE7UUFDdkUsZUFBYztRQUFkLG1DQUFjO1FBSUYsZUFBbUM7UUFBbkMsOERBQW1DO1FBT3hELGVBQWdCO1FBQWhCLHFDQUFnQjtRQUlwQixlQUF1QjtRQUF2QixnREFBdUI7UUFLdkIsZUFBUztRQUFULDhCQUFTO1FBT29CLGVBQWtFO1FBQWxFLG1HQUFrRTs7dUZEbFBoRyxnQkFBZ0I7Y0FONUIsU0FBUzsyQkFDSSxVQUFVOztzQkErRWYsTUFBTTt1QkFBQyxRQUFRO3dCQWJHLFFBQVE7a0JBQTlCLFNBQVM7bUJBQUMsVUFBVTs7QUFxbEJ6QiwyRkFBMkY7QUFDM0YsU0FBUyx3QkFBd0I7SUFDN0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNaLElBQUk7WUFDQSxRQUFRO2lCQUNILGdCQUFnQixDQUFDLHdCQUF3QixDQUFDO2lCQUMxQyxPQUFPLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1NBQzFGO1FBQUMsTUFBTTtZQUNKLG9CQUFvQjtTQUN2QjtJQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNiLENBQUM7QUFFRCw4RUFBOEU7QUFDOUUsU0FBUyxXQUFXO0lBQ2hCLElBQUk7UUFDQSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDN0Q7SUFBQyxNQUFNO1FBQ0osT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IENVQ2FsZW5kYXJKb2IsIExvZ2luUmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3N1YnNjcmlwdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jnb3QtcGFzc3dvcmQtZGlhbG9nL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyQ29udGVudEluaXQsIEluamVjdCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRXh0cmFJbmZvIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgU3RyaW5ncyB9IGZyb20gJy4uL21vZGVscy9TdHJpbmdzJztcclxuaW1wb3J0IHsgTElCX1ZFUlNJT04gfSBmcm9tICcuLi8uLi92ZXJzaW9uJztcclxuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi4vbW9kZWxzL29wZXJhdGlvbi1yZXN1bHQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RiLWxvZ2luJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNsYXNzIFRiTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICAgIHByaXZhdGUgY2FjaGVkQ29tcGFuaWVzOiBBcnJheTxhbnk+ID0gW107XHJcblxyXG4gICAgY2Fwc0xvY2tPbiA9IGZhbHNlO1xyXG4gICAgdmFsaWRhdGUgPSBmYWxzZTtcclxuICAgIG90cCA9IGZhbHNlO1xyXG4gICAgdXNlcmFscmVhZHlsb2dnZWQgPSBmYWxzZTtcclxuICAgIE9MRCA9IGZhbHNlO1xyXG4gICAgbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgbG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QgPSBuZXcgTG9naW5SZXF1ZXN0KCk7XHJcbiAgICByZWRpcmVjdFVybDogc3RyaW5nO1xyXG4gICAgYnV0dG9uVGV4dDogc3RyaW5nO1xyXG4gICAgbmV4dFRleHQ6IHN0cmluZztcclxuICAgIGxvZ2luVGV4dDogc3RyaW5nO1xyXG4gICAgY3VycmVudFllYXI6IHN0cmluZztcclxuICAgIGNyZWF0ZUFjY291bnRVcmw6IHN0cmluZztcclxuICAgIGNoYW5nZVBhc3N3b3JkVXJsOiBzdHJpbmc7XHJcbiAgICBzdWJzY3JpcHRpb25TZWxlY3Rpb246IGJvb2xlYW47IC8vIGFiaWxpdGEgbGEgc2NlbHRhIGRlbGxhIHN1YnNjcmlwdGlvblxyXG4gICAgc2hvd1NpZ25VcDogYm9vbGVhbjsgLy8gYWJpbGl0YSBsYSBwb3NzaWJpbGl0w6AgZGkgcmVnaXN0cmFyZSBudW92byBhY2NvdW50XHJcbiAgICBsb2dpblN1YnNjcmlwdGlvbnM6IEFycmF5PHsgZGVzY3JpcHRpb246IHN0cmluZzsgc3Vic2NyaXB0aW9ua2V5OiBzdHJpbmc7IHN0YXR1czogbnVtYmVyOyBpbnN0YW5jZWtleTogc3RyaW5nIH0+ID0gW107XHJcbiAgICBsb2dvVVJMOiBzdHJpbmc7XHJcbiAgICBiYWNrZ3JvdW5kVVJMOiBzdHJpbmc7XHJcbiAgICBoaWRlID0gdHJ1ZTtcclxuICAgIGhpZGVPdHAgPSB0cnVlO1xyXG4gICAgaW5zdGFuY2VrZXk6IHN0cmluZztcclxuICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBkb2N1bWVudD86IERvY3VtZW50O1xyXG4gICAgbGliX3ZlcnNpb246IHN0cmluZyA9IExJQl9WRVJTSU9OO1xyXG4gICAgLy8gdGVzdGkgaW4gaXRhbGlhbm8gZWQgaW5nbGVzZVxyXG4gICAgY2hvb3NlU3Vic2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBnb29kSm9iOiBzdHJpbmc7XHJcbiAgICBzdWJzY3JpcHRpb246IHN0cmluZztcclxuICAgIGluc3RhbmNlOiBzdHJpbmc7XHJcbiAgICBidXR0b25CYWNrOiBzdHJpbmc7XHJcbiAgICBhY2NvdW50TmFtZTogc3RyaW5nO1xyXG4gICAgZW50ZXJBY2NvdW5OYW1lOiBzdHJpbmc7XHJcbiAgICB3ZWxjb21lOiBzdHJpbmc7XHJcbiAgICBlbnRlckNyZWRlbnRpYWxzOiBzdHJpbmc7XHJcbiAgICBmb3JnZXRQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgYmxvY01haXVzYzogc3RyaW5nO1xyXG4gICAgaWRsZVRpbWVvdXRNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBvdHBNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBhdXRoQXBwVGV4dDogc3RyaW5nO1xyXG4gICAgb3RwVGl0bGU6IHN0cmluZztcclxuICAgIHJlc2VuZE9UUExhYmVsOiBzdHJpbmc7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbiAgICBjaG9zZW5BdXRoQXBwOiBzdHJpbmc7XHJcbiAgICBvdHBUZXh0OiBzdHJpbmc7XHJcbiAgICBvdHBSZXF1ZXN0Q29kZTogc3RyaW5nO1xyXG4gICAgdXNlcmFscmVhZHlsb2dnZWRNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICB1c2VyYWxyZWFkeWxvZ2dlZE9LOiBzdHJpbmc7XHJcbiAgICB1c2VyYWxyZWFkeWxvZ2dlZFRpdGxlOiBzdHJpbmc7XHJcbiAgICB1c2VBdXRoQXBwOiBzdHJpbmc7XHJcbiAgICBvbmVNZXRob2RPbmx5OiBzdHJpbmc7XHJcbiAgICBhbHRlcm5hdGl2ZU1ldGhvZDogc3RyaW5nO1xyXG4gICAgbWFuYWdlTWV0aG9kczogc3RyaW5nO1xyXG4gICAgVE9UUERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBpbnB1dFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICAgIGRyb3BEb3duSXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICBjb21ib0JveElzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgaWNvbklzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgQFZpZXdDaGlsZCgnZHJvcGRvd24nKSBkcm9wZG93bjogYW55O1xyXG4gICAgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgbGFuZ3VhZ2VJVCA9IHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpO1xyXG4gICAgb3RwSW5mbzogRXh0cmFJbmZvID0gbmV3IEV4dHJhSW5mbygpO1xyXG4gICAgaXNFcnJvckNvbWluZ0Zyb21NYWdvID0gZmFsc2U7XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jPzogYW55XHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ2NsaWNrJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbWJvQm94SXNDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvQm94SXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pY29uSXNDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb25Jc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRyb3Bkb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BEb3duSXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRvY3VtZW50ID0gZG9jIGFzIERvY3VtZW50O1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb25uZWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYXBwSWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFwcElkKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gPSBhdXRoU2VydmljZS5oYXNTdWJzY3JpcHRpb25TZWxlY3Rpb24oKTtcclxuICAgICAgICB0aGlzLnNob3dTaWduVXAgPSBhdXRoU2VydmljZS5zaG93U2lnblVwKCk7XHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdFVybCA9IGF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVBY2NvdW50VXJsID0gYXV0aFNlcnZpY2UuZ2V0Q3JlYXRlQWNjb3VudFVybCgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmRVcmwgPSBhdXRoU2VydmljZS5nZXRDaGFuZ2VQYXNzd29yZFVybCgpO1xyXG4gICAgICAgIHRoaXMubG9nb1VSTCA9IGF1dGhTZXJ2aWNlLmdldExvZ29VUkwoKTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRVUkwgPSBhdXRoU2VydmljZS5nZXRCYWNrZ3JvdW5kVVJMKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZWtleSA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VGV4dCA9ICdhdmFudGknO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luVGV4dCA9ICdhY2NlZGknO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFRleHQgPSAnbmV4dCc7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5UZXh0ID0gJ2xvZ2luJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSB8fCAhdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gPyB0aGlzLmxvZ2luVGV4dCA6IHRoaXMubmV4dFRleHQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaG9vc2VTdWJzY3JpcHRpb24gPSAnU2NlZ2xpIGxhIHR1YSBzb3R0b3Njcml6aW9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZ29vZEpvYiA9ICdCdW9uIGxhdm9ybyEnO1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9ICdTb3R0b3Njcml6aW9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSAnSXN0YW56YSc7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmFjayA9ICc8IElORElFVFJPJztcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50TmFtZSA9ICdOb21lIHV0ZW50ZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJBY2NvdW5OYW1lID0gJ0luc2VyaXNjaSBpbCB0dW8gbm9tZSB1dGVudGUgZSB0aSBpbnZpZXJlbW8gdW5hIG51b3ZhIHBhc3N3b3JkJztcclxuICAgICAgICAgICAgdGhpcy53ZWxjb21lID0gJ0JlbnZlbnV0byBzdSAnICsgYXV0aFNlcnZpY2UuZ2V0QnJhbmROYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJDcmVkZW50aWFscyA9ICdBdXRlbnRpY2F0aSBpbnNlcmVuZG8gbm9tZSB1dGVudGUgZSBwYXNzd29yZC4nO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmdldFBhc3N3b3JkID0gJ0hhaSBkaW1lbnRpY2F0byBsYSBwYXNzd29yZCA/JztcclxuICAgICAgICAgICAgdGhpcy5ibG9jTWFpdXNjID0gJ0Jsb2NjbyBtYWl1c2NvbGUgYXR0aXZvJztcclxuICAgICAgICAgICAgdGhpcy5pZGxlVGltZW91dE1lc3NhZ2UgPSAnTGEgdHVhIHNlc3Npb25lIMOoIHRlcm1pbmF0YSBwZXIgaW5hdHRpdml0w6AsIHB1b2kgcmlwcmVuZGVyZSBkYSBxdWkuJztcclxuICAgICAgICAgICAgdGhpcy5vdHBNZXNzYWdlID0gJ0luc2VyaXNjaSBpbCBjb2RpY2UgT1RQIGNoZSBoYWkgcmljZXZ1dG8gdHJhbWl0ZSAnO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhBcHBUZXh0ID0gJ2FwcCBkaSBhdXRlbnRpY2F6aW9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMub3RwVGl0bGUgPSAnQXV0ZW50aWNhemlvbmUgYSBkdWUgZmF0dG9yaSc7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZW5kT1RQTGFiZWwgPSAnUmljaGllZGkgdW4gbnVvdm8gY29kaWNlIE9UUCB2aWEgJztcclxuICAgICAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZE1lc3NhZ2UgPSAnVnVvaSBjb250aW51YXJlIGNvbiBsYSBsb2dpbj8gTGEgbG9naW4gcHJlY2VkZW50ZSB2ZXJyw6AgZGlzYWJpbGl0YXRhLic7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRUaXRsZSA9ICcgw6ggZ2nDoCBjb25uZXNzbyBhIHF1ZXN0YSBzdWJzY3JpcHRpb24uJztcclxuICAgICAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZE9LID0gJ1PDrCwgY29udGludWEgY29uIGxhIGxvZ2luJztcclxuICAgICAgICAgICAgdGhpcy5jb2RlID0gJ0NvZGljZSBPVFAnO1xyXG4gICAgICAgICAgICB0aGlzLmNob3NlbkF1dGhBcHAgPSAnYXBwIGRpIGF1dGVudGljYXppb25lIHNjZWx0YSc7XHJcbiAgICAgICAgICAgIHRoaXMub3RwVGV4dCA9ICdPcHB1cmUnO1xyXG4gICAgICAgICAgICB0aGlzLm90cFJlcXVlc3RDb2RlID0gJ1JpY2hpZWRpIGNvZGljZSB2aWEgJztcclxuICAgICAgICAgICAgdGhpcy51c2VBdXRoQXBwID0gJ1V0aWxpenphIGxhIHR1YSBhcHAgZGkgYXV0ZW50aWNhemlvbmUnO1xyXG4gICAgICAgICAgICB0aGlzLm9uZU1ldGhvZE9ubHkgPVxyXG4gICAgICAgICAgICAgICAgJ0hhaSB1biBzb2xvIG1ldG9kbyBkaSBhdXRlbnRpY2F6aW9uZSBjb25maWd1cmF0bywgcGVyIG5vbiByaXNjaGlhcmUgZGkgcmltYW5lcmUgYmxvY2NhdG8gdGkgY29uc2lnbGlhbW8gZGknO1xyXG4gICAgICAgICAgICB0aGlzLmFsdGVybmF0aXZlTWV0aG9kID0gJ2F0dGl2YXJlIHVuIG1ldG9kbyBhbHRlcm5hdGl2by4nO1xyXG4gICAgICAgICAgICB0aGlzLm1hbmFnZU1ldGhvZHMgPSAnR2VzdGlzY2kgaSB0dW9pIG1ldG9kaSBkaSBhY2Nlc3NvJztcclxuICAgICAgICAgICAgdGhpcy5UT1RQRGVzY3JpcHRpb24gPVxyXG4gICAgICAgICAgICAgICAgXCJBcHJpIGwnYXBwIG8gbCdlc3RlbnNpb25lIGRlbCBicm93c2VyIGRlbGwnYXV0ZW50aWNhdG9yZSBhIGR1ZSBmYXR0b3JpIChUT1RQKSBwZXIgdmlzdWFsaXp6YXJlIGlsIHR1byBjb2RpY2UgZGkgYXV0ZW50aWNhemlvbmVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNob29zZVN1YnNjcmlwdGlvbiA9ICdDaG9vc2UgeW91ciBzdWJzY3JpcHRpb24nO1xyXG4gICAgICAgICAgICB0aGlzLmdvb2RKb2IgPSAnR29vZCBqb2IhJztcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSAnU3Vic2NyaXB0aW9uJztcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9ICdJbnN0YW5jZSc7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmFjayA9ICc8IEJBQ0snO1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnROYW1lID0gJ0FjY291bnQgbmFtZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJBY2NvdW5OYW1lID0gJ0VudGVyIHlvdXIgYWNjb3VudCBuYW1lIGFuZCB3ZSB3aWxsIHNlbmQgeW91IGEgbmV3IHBhc3N3b3JkJztcclxuICAgICAgICAgICAgdGhpcy53ZWxjb21lID0gJ1dlbGNvbWUgdG8gJyArIGF1dGhTZXJ2aWNlLmdldEJyYW5kTmFtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyQ3JlZGVudGlhbHMgPSAnQXV0aGVudGljYXRlIHlvdXJzZWxmIGJ5IGVudGVyaW5nIHlvdXIgYWNjb3VudCBuYW1lIGFuZCBwYXNzd29yZC4nO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmdldFBhc3N3b3JkID0gJ0ZvcmdvdCB5b3VyIHBhc3N3b3JkID8nO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NNYWl1c2MgPSAnQ2FwcyBsb2NrIG9uJztcclxuICAgICAgICAgICAgdGhpcy5pZGxlVGltZW91dE1lc3NhZ2UgPSAnWW91ciBzZXNzaW9uIGhhcyBleHBpcmVkIGR1ZSB0byBpbmFjdGl2aXR5LCB5b3UgY2FuIHJlc3VtZSBmcm9tIGhlcmUuJztcclxuICAgICAgICAgICAgdGhpcy5vdHBNZXNzYWdlID0gJ0VudGVyIHRoZSBvdHAgY29kZSB5b3UgcmVjZWl2ZWQgdmlhICc7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aEFwcFRleHQgPSAnYXV0aGVudGljYXRpb24gYXBwJztcclxuICAgICAgICAgICAgdGhpcy5vdHBUaXRsZSA9ICdUd28tRmFjdG9yIEF1dGhlbnRpY2F0aW9uJztcclxuICAgICAgICAgICAgdGhpcy5yZXNlbmRPVFBMYWJlbCA9ICdSZXF1ZXN0IGEgbmV3IE9UUCBjb2RlIHZpYSAnO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJhbHJlYWR5bG9nZ2VkTWVzc2FnZSA9ICdEbyB5b3Ugd2FudCB0byBjb250aW51ZSB3aXRoIHRoZSBsb2dpbj8gVGhlIHByZXZpb3VzIGxvZ2luIHdpbGwgYmUgZGlzYWJsZWQuJztcclxuICAgICAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZFRpdGxlID0gJyBpcyBhbHJlYWR5IGxvZ2dlZCBpbiB0byB0aGlzIHN1YnNjcmlwdGlvbi4nO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJhbHJlYWR5bG9nZ2VkT0sgPSAnWWVzLCBjb250aW51ZSB0byBsb2dpbic7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZSA9ICdPVFAgQ29kZSc7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvc2VuQXV0aEFwcCA9ICdjaG9zZW4gYXV0aGVudGljYXRvciBhcHAnO1xyXG4gICAgICAgICAgICB0aGlzLm90cFRleHQgPSAnT3InO1xyXG4gICAgICAgICAgICB0aGlzLm90cFJlcXVlc3RDb2RlID0gJ1JlcXVlc3QgY29kZSB2aWEgJztcclxuICAgICAgICAgICAgdGhpcy51c2VBdXRoQXBwID0gJ1VzZSB5b3VyIGF1dGhlbnRpY2F0b3IgYXBwJztcclxuICAgICAgICAgICAgdGhpcy5vbmVNZXRob2RPbmx5ID0gJ1lvdSBoYXZlIG9ubHkgb25lIGF1dGhlbnRpY2F0aW9uIG1ldGhvZCBjb25maWd1cmVkLCB0byBhdm9pZCB0aGUgcmlzayBvZiBiZWluZyBibG9ja2VkIHdlIHJlY29tbWVuZCB5b3UnO1xyXG4gICAgICAgICAgICB0aGlzLmFsdGVybmF0aXZlTWV0aG9kID0gJ2FjdGl2YXRlIGFuIGFsdGVybmF0aXZlIG1ldGhvZC4nO1xyXG4gICAgICAgICAgICB0aGlzLm1hbmFnZU1ldGhvZHMgPSAnTWFuYWdlIHlvdXIgbG9naW4gbWV0aG9kcyc7XHJcbiAgICAgICAgICAgIHRoaXMuVE9UUERlc2NyaXB0aW9uID0gJ09wZW4geW91ciB0d28tZmFjdG9yIGF1dGhlbnRpY2F0b3IgKFRPVFApIGFwcCBvciBicm93c2VyIGV4dGVuc2lvbiB0byB2aWV3IHlvdXIgYXV0aGVudGljYXRpb24gY29kZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXBwUmVkaXJlY3QgPSBwYXJhbXNbJ2FwcFJlZGlyZWN0J107XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gcGFyYW1zWydlcnJvciddO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnVzZURDUyA9IGFwcFJlZGlyZWN0ICYmIGFwcFJlZGlyZWN0ID09PSAnRENTX0FQUCc7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyb3IgPyBlcnJvciA6ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmlzRXJyb3JDb21pbmdGcm9tTWFnbyA9IGVycm9yID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBST1ZBIFBFUiBBUEVSVFVSQSBESUFMT0cgREkgTk9USUZJQ0EgQUdHSU9STkFNRU5UT1xyXG4gICAgLy8gIGFzeW5jIG9wZW5EaWFsb2coKSB7XHJcbiAgICAvLyAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdET05UU0hPV1VQREFURVdBUk4nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc190cmFuc2xhdGlvbiA9IG5ldyAgU3RyaW5ncygpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc190cmFuc2xhdGlvbi5nZXRVcGRhdGVNZXNzYWdlKHRoaXMuYXV0aFNlcnZpY2UpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN1YicsIFwic3ViIHhcIik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBkYXRlJywgXCJ0aGlzIGRhdGVcIik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBzdGFydGgnLFwic3RhcnQgaG91clwiKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQGVuZGgnLFwiZW5kIGhvdXJcIiApO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub24gbW9zdHJvIHNlIG1pIGhhbm5vIGRldHRvIGRpIG5vbiBtb3N0cmFyZSBwaXUuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbWVzc2FnZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9wZW5VcGRhdGVBbGVydERpYWxvZyhcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZVRpdGxlKCksXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZURvbnRTaG93TWVzc2FnZSgpLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTt9XHJcbiAgICAvLyAgfVxyXG4gICAgLy8gUFJPVkEgUEVSIEFQRVJUVVJBIERJQUxPRyBESSBOT1RJRklDQSBBR0dJT1JOQU1FTlRPXHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2FkTG9naW5EYXRhKCk7XHJcbiAgICAgICAgd2Via2l0QXV0b2ZpbGxXb3JrYXJvdW5kKCk7XHJcbiAgICAgICAgLy90ZXN0OiB0aGlzLm9wZW5EaWFsb2coKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5jaGVja0Nvbm5lY3Rpb24oKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgLy8gc2UgbWkgYXJyaXZhIHVuIGVycm9yZSBtb3N0cm8gcXVlbGxvIGFsdHJpbWVudGkgc29sbyBsIHVybCBjaGUgbG8gaGEgZGF0b1xyXG4gICAgICAgICAgICBsZXQgZXJyb3IgPSB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZTtcclxuICAgICAgICAgICAgaWYgKGVycm9yLmxlbmd0aCA9PT0gMCkgZXJyb3IgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEJhc2VVcmwoKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlSVRcclxuICAgICAgICAgICAgICAgID8gJ1NlcnZpemlvIHRlbXBvcmFuZWFtZW50ZSBub24gcmFnZ2l1bmdpYmlsZS5cXG5EZXR0YWdsaTogJyArIGVycm9yXHJcbiAgICAgICAgICAgICAgICA6ICdTZXJ2aWNlIHRlbXBvcmFyaWx5IG5vdCBhdmFpbGFibGUuXFxuRGV0YWlsczogJyArIGVycm9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gdGhpcy5pc0Vycm9yQ29taW5nRnJvbU1hZ28gPyB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA6ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIG9uU3ViQ2hhbmdlKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBzZCA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmZpbmQoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5ID09PSBuZXdWYWx1ZSk7XHJcbiAgICAgICAgaWYgKHNkICYmIHNkLmluc3RhbmNla2V5KSB0aGlzLmluc3RhbmNla2V5ID0gYCR7dGhpcy5pbnN0YW5jZX06ICR7c2QuaW5zdGFuY2VrZXl9YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGtleVVwRnVuY3Rpb24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZEJ1dHRvbigpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gYnkgZW50ZXIuLi4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYXBzT24gPSBldmVudC5nZXRNb2RpZmllclN0YXRlICYmIGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoJ0NhcHNMb2NrJyk7XHJcbiAgICAgICAgdGhpcy5jYXBzTG9ja09uID0gY2Fwc09uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZGlzYWJsZWRCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKGhhc0F1dG9maWxsKCkgJiZcclxuICAgICAgICAgICAgICAgICghdGhpcy5pc0Nvbm5lY3RlZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiAmJiB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDAgJiYgdGhpcy52YWxpZGF0ZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5vdHAgJiYgdGhpcy5pbnB1dFZhbHVlLmxlbmd0aCAhPT0gNikgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy51c2VyYWxyZWFkeWxvZ2dlZCAmJiAhdGhpcy5sb2dpblJlcXVlc3Qub3ZlcndyaXRlTG9naW4pKSkgfHxcclxuICAgICAgICAgICAgKCFoYXNBdXRvZmlsbCgpICYmXHJcbiAgICAgICAgICAgICAgICAoIXRoaXMuaXNDb25uZWN0ZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gJiYgdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID09PSAwICYmIHRoaXMudmFsaWRhdGUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMub3RwICYmIHRoaXMuaW5wdXRWYWx1ZS5sZW5ndGggIT09IDYpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMudXNlcmFscmVhZHlsb2dnZWQgJiYgIXRoaXMubG9naW5SZXF1ZXN0Lm92ZXJ3cml0ZUxvZ2luKSkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldCBpc0V4cGlyZWRTZXNzaW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVkU2Vzc2lvbicpID09PSAndHJ1ZSc7XHJcbiAgICB9XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIG5ld1VzZXIoKSB7XHJcbiAgICAgICAgLy8gcmltYW5kYSBhbGxhIHBhZ2luYSAocHJlc3VtaWJpbG1lbnRlIGRlbGxvIHN0b3JlKSBkb3ZlICBzYXLDoCBwb3NzaWJpbGUgY3JlYXJlIHVuIG51b3ZvIGFjY291bnQuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY3JlYXRlQWNjb3VudFVybF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgYmFjayhrZWVwTWVzc2FnZXM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIC8vIHJpcHVsaXNjbyB0dXR0by4uLlxyXG4gICAgICAgIHRoaXMudmFsaWRhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC50b2tlbiA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Qub3RQYXNzd29yZCA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRCA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0Lm92ZXJ3cml0ZUxvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gJyc7XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy5uZXh0VGV4dDtcclxuICAgICAgICB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMub3RwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKCFrZWVwTWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBsb2dpbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gcmVxdWVzdGVkLi4uJyArIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5zYXZlTG9naW5EYXRhKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdleHBpcmVkU2Vzc2lvbicpO1xyXG4gICAgICAgIC8vYXNzZWdubyB1biBpZCBhbGxhIGxvZ2luIGUgc29sbyBxdWVzdGEgcG90csOhIHVzYXJlIGlsIGNvZGljZSAgb3RwICAgYXNzZWduYXRvXHJcbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSUQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QucHJvY2Vzc0lEID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwMDAwICsgMTAwMDAwKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5vdFBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5vdHApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuT0xEKSB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9IHRoaXMuaW5wdXRWYWx1ZTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmxvZ2luUmVxdWVzdC5vdFBhc3N3b3JkID0gdGhpcy5pbnB1dFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUgJiYgdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYXBwSWQgPSAnTUNsb3VkUHJlTG9naW4nO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxpbmcgcHJlbG9naW4uLi4gJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDEgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnByZWxvZ2luKHRoaXMubG9naW5SZXF1ZXN0KS5jYXRjaCgoZXJyMSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVycjEuZXJyb3IgJiYgZXJyMS5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMudmFsaWRhdGUgPyB0aGlzLmxvZ2luVGV4dCA6IHRoaXMubmV4dFRleHQ7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmkgc2lhIGxvZ2luIHNpYSBjaGVja2RiXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQxICYmIHJlc3VsdDEuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm90cCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wYW5pZXNGb3JVc2VyKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsZWN0aW5nIHN1YnNjcmlwdGlvbnMuLi4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vdHAgJiYgcmVzdWx0MSAmJiByZXN1bHQxLlJlc3VsdENvZGUgPT09IDE0Mykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvID0gcmVzdWx0MS5FeHRyYUluZm87XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vdHBJbmZvID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk9MRCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvID0gbmV3IEV4dHJhSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuT0xEID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm90cCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vdHAgJiYgcmVzdWx0MSAmJiAhcmVzdWx0MS5SZXN1bHQgJiYgcmVzdWx0MS5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gdGhpcy5sYW5ndWFnZUlUID8gJ09UUCBub24gdmFsaWRvLicgOiAnSW52YWxpZCBPVFAuJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYXBwSWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFwcElkKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsaW5nIGxvZ2luLi4uICcpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMubG9naW5SZXF1ZXN0KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xyXG4gICAgICAgICAgICAvLyB0b2RvIGNvbnRyb2xsYSBjb21lIHZlbmdvbm8gbW9zdHJhdGkgZXJyb3JpIHNpYSBsb2dpbiBzaWEgY2hlY2tkYlxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5SZXN1bHRDb2RlID09PSAxMTYpIHtcclxuICAgICAgICAgICAgICAgIC8vZmFpIGNvc2UgMTE2IChtb3N0cmEgYXZ2aXNvKVxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9sYSBsb2dpbiDDqSBhbmRhdGEsIHByb3NlZ3VvIGNvbiBhbHRyZSB2ZXJpZmljaGVcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZCA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmZpbmQoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5ID09PSB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2hpYW1vIHNlbXByZSBsJyBhcGkgY2hlIGZhIHR1dHRpIGkgY29udHJvbGxpIGRlbCBjYXNvIGluIG1vZG8gZGEgc2dhbmNpYXJlIGxhIGxpYnJhcnkgZGEgbG9naWNoZSBjYW5hcnkgY2hlIHBvdHJlYmJlcm8gY2FtYmlhcmUuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0MSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q2FsZW5kYXIodGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zb2xvIHNlIGlsIHJlc3VsdCDDqSBvayBmYWNjaW8gbG8gc2hvdyBkZWxswrRhdnZpc28gZGkgZXZlbnR1YWxpIGFnZ2lvcm5hbWVudGkgc2NoZWR1bGF0aVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQxICYmIHJlc3VsdDEucmVzdWx0ICYmIHJlc3VsdDEuY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY2hlZHVsZWRVcGRhdGU6IENVQ2FsZW5kYXJKb2IgPSByZXN1bHQxLmNvbnRlbnQgYXMgQ1VDYWxlbmRhckpvYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVkdWxlZFVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NjaGVkdWxlZFVwZGF0ZTogJyArIHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0RPTlRTSE9XVVBEQVRFV0FSTicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNfdHJhbnNsYXRpb24gPSBuZXcgU3RyaW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZU1lc3NhZ2UodGhpcy5hdXRoU2VydmljZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBzdWInLCB0aGlzLmF1dGhTZXJ2aWNlLmdldFN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKCkhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAZGF0ZScsIHRoaXMuRm9ybWF0RGF0ZVN0cmluZyhzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBzdGFydGgnLCB0aGlzLkZvcm1hdFN0YXJ0RGF0ZVN0cmluZyhzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQEBlbmRoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkZvcm1hdEVuZERhdGVTdHJpbmcoc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUsIHNjaGVkdWxlZFVwZGF0ZS5lc3RpbWF0ZWR1cGdyYWRldGltZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9uIG1vc3RybyBzZSBtaSBoYW5ubyBkZXR0byBkaSBub24gbW9zdHJhcmUgcGl1LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub3BlblVwZGF0ZUFsZXJ0RGlhbG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZVRpdGxlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlRG9udFNob3dNZXNzYWdlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IHRvIHJlZGlyZWN0LicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNSZWRpcmVjdEV4dGVybmFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gZXh0ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSURcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vLy8vN1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm90cCAmJiByZXN1bHQgJiYgcmVzdWx0LlJlc3VsdENvZGUgPT09IDE0Mykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mbyA9IHJlc3VsdC5FeHRyYUluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3RwSW5mbyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuT0xEID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvID0gbmV3IEV4dHJhSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLk9MRCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3RwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vdHAgJiYgcmVzdWx0ICYmICFyZXN1bHQuUmVzdWx0ICYmIHJlc3VsdC5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IHRoaXMubGFuZ3VhZ2VJVCA/ICdPVFAgbm9uIHZhbGlkby4nIDogJ0ludmFsaWQgT1RQLic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLy8vLzdcclxuICAgICAgICAgICAgICAgIC8vY2FzbyBkaSBsb2dpbiBmYWxsaXRhIHBlciBxdWFsY2hlIGVycm9yZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy4uLicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBGb3JtYXREYXRlU3RyaW5nID0gKGRhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgdmFyIHNjaGVkdWxlZERhdGVUaW1lID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRlKSk7XHJcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlZERhdGVUaW1lLnRvTG9jYWxlRGF0ZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBGb3JtYXRTdGFydERhdGVTdHJpbmcgPSAoZGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgICAgICB2YXIgc2NoZWR1bGVkRGF0ZVRpbWUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGUpKTtcclxuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSByZXR1cm4gc2NoZWR1bGVkRGF0ZVRpbWUudG9Mb2NhbGVTdHJpbmcoJ2l0LUlUJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IGZhbHNlIH0pO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHNjaGVkdWxlZERhdGVUaW1lLnRvTG9jYWxlU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgRm9ybWF0RW5kRGF0ZVN0cmluZyA9IChkYXRlOiBzdHJpbmcsIGR1cmF0aW9uTWluczogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICB2YXIgc2NoZWR1bGVkRGF0ZVRpbWUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGUpKTtcclxuICAgICAgICB2YXIgZmluYWxEYXRlID0gbmV3IERhdGUoc2NoZWR1bGVkRGF0ZVRpbWUuZ2V0VGltZSgpICsgZHVyYXRpb25NaW5zICogNjAwMDApO1xyXG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHJldHVybiBmaW5hbERhdGUudG9Mb2NhbGVTdHJpbmcoJ2l0LUlUJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IGZhbHNlIH0pO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGZpbmFsRGF0ZS50b0xvY2FsZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGxvYWRMb2dpbkRhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFjY291bnROYW1lKCkgfHwgJyc7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gdGhpcy5hdXRoU2VydmljZS5nZXRTdWJzY3JpcHRpb24oKSB8fCAnJztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIHNhdmVMb2dpbkRhdGEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNTZXNzaW9uU3RvcmFnZSgpKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZCA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmZpbmQoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5ID09PSB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBpZiAoc2QpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzU2Vzc2lvblN0b3JhZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzZC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc2QuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMgPSBbXTtcclxuICAgICAgICAvLyB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGF3YWl0IHRoaXMucmVxdWVzdEFuZFNvcnRTdWJzY3JpcHRpb25zKHVzZXIpO1xyXG4gICAgICAgIC8vIFByZW1pbyBFbGVnYW56YSBDb2RpY2UgMjAxOSAoQEx1Y2FCcnVuaSlcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodGVtcCkgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMubG9naW5TdWJzY3JpcHRpb25zKSkgdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMgPSB0ZW1wO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnTm9uIHRyb3ZvIG5lc3N1bmEgc3Vic2NyaXB0aW9uIGFzc29jaWF0YSBhIHF1ZXN0byBhY2NvdW50Lic7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnSSBjYW5ub3QgZmluZCBhbnkgU3Vic2NyaXB0aW9ucyBhc3NvY2lhdGVkIHRvIHlvdSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnNbMF0uc3Vic2NyaXB0aW9ua2V5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9naW5TdWJzY3JpcHRpb25zLm1hcCgocykgPT4gcy5zdWJzY3JpcHRpb25rZXkpLmluZGV4T2YodGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9uc1swXS5zdWJzY3JpcHRpb25rZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vblN1YkNoYW5nZSh0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgYXN5bmMgcmVxdWVzdEFuZFNvcnRTdWJzY3JpcHRpb25zKHVzZXI6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8U3Vic2NyaXB0aW9uPj4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNhY2hlZENvbXBhbmllcy5oYXNPd25Qcm9wZXJ0eSh1c2VyKSAmJiB0aGlzLmNhY2hlZENvbXBhbmllc1t1c2VyIGFzIGFueV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkQ29tcGFuaWVzW3VzZXIgYXMgYW55XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXA6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBbXTtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmdldENvbXBhbmllc0ZvclVzZXIodXNlcikudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgcmVzdWx0LnNvcnQodGhpcy5jb21wYXJlQ29tcGFuaWVzKS5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICAgIHRlbXAucHVzaCh7IHN1YnNjcmlwdGlvbmtleTogYy5zdWJzY3JpcHRpb25rZXksIGRlc2NyaXB0aW9uOiBjLmRlc2NyaXB0aW9uLCBzdGF0dXM6IGMuc3RhdHVzLCBpbnN0YW5jZWtleTogYy5pbnN0YW5jZWtleSB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRlbXAubGVuZ3RoID4gMCkgdGhpcy5jYWNoZWRDb21wYW5pZXNbdXNlciBhcyBhbnldID0gdGVtcDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIGNvbXBhcmVDb21wYW5pZXMoYTogU3Vic2NyaXB0aW9uLCBiOiBTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICBjb25zdCBuYW1lQSA9IGEuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBuYW1lQiA9IGIuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGdvVG9Gb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLmZvcmdvdHBhc3N3b3JkKHRoaXMuZm9yZ2V0UGFzc3dvcmQsIHRoaXMuZW50ZXJBY2NvdW5OYW1lLCB0aGlzLmFjY291bnROYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGZvcmdvdHBhc3N3b3JkKFRpdGxlOiBzdHJpbmcsIE1lc3NhZ2U6IHN0cmluZywgUGxhY2VIb2xkZXI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihGb3Jnb3RQYXNzd29yZENvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBUaXRsZSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBQbGFjZUhvbGRlcixcclxuICAgICAgICAgICAgICAgIFRleHRWYWx1ZTogdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShhc3luYyAoZGF0YTogeyBUZXh0VmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGRhdGEuVGV4dFZhbHVlID09PSB1bmRlZmluZWQgfHwgZGF0YS5UZXh0VmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnSW5zZXJpc2NpIHVuIG5vbWUgdXRlbnRlIHZhbGlkbyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdXcml0ZSBhIHZhbGlkIGFjY291bnQgbmFtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY2NuYW1lOiBzdHJpbmcgPSBkYXRhLlRleHRWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5yZXNldHBhc3N3b3JkKGFjY25hbWUpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmlcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ0NvbnRyb2xsYSBsYSB0dWEgZS1tYWlsIGUgc2VndWkgbGUgaXN0cnV6aW9uaSBwZXIgcmVpbXBvc3RhcmUgbGEgcGFzc3dvcmQuJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnQ2hlY2sgeW91ciBlbWFpbCBhbmQgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgdG8gcmVzZXQgeW91ciBwYXNzd29yZC4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gcmVzdWx0Lk1lc3NhZ2UgKyAnIChDb2RlOiAnICsgcmVzdWx0LkNvZGUgKyAnKS4nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgaXNEcm9wRG93bkNsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5kcm9wRG93bklzQ2xpY2tlZCA9ICF0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xyXG4gICAgICAgIHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQgPSB0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xyXG4gICAgICAgIGlmICh0aGlzLmRyb3BEb3duSXNDbGlja2VkICYmIHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uSXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdG9nZ2xlKGRyb3Bkb3duOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmRyb3BEb3duSXNDbGlja2VkID0gIXRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XHJcbiAgICAgICAgdGhpcy5pY29uSXNDbGlja2VkID0gdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcclxuICAgICAgICB0aGlzLmRyb3Bkb3duID0gZHJvcGRvd247XHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcERvd25Jc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgZHJvcGRvd24udG9nZ2xlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYWx0ZXJuYXRpdmVNZXRob2RzKHR3b0ZhY3RvclR5cGU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLk9MRCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLk9MRHJlc2VuZE9UUCh0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSwgdHdvRmFjdG9yVHlwZSAhPSBudWxsKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAob3BSZXM6IE9wZXJhdGlvblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFJlcy5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvLlR3b0ZhY3RvclR5cGUgPSB0d29GYWN0b3JUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyT0xEKSA9PiB7fVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlc2VuZE9UUDIodGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsIHRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRCwgdHdvRmFjdG9yVHlwZSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAob3BSZXM6IE9wZXJhdGlvblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wUmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mby5Ud29GYWN0b3JUeXBlID0gdHdvRmFjdG9yVHlwZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycikgPT4ge31cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZ29Ub1N0b3JlKCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuYXV0aFNlcnZpY2UuZ2V0U3RvcmVVcmwoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHdvcmthcm91bmQgZm9yIGNocm9taXVtIGJ1ZyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNTI1MjdcclxuZnVuY3Rpb24gd2Via2l0QXV0b2ZpbGxXb3JrYXJvdW5kKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDotd2Via2l0LWF1dG9maWxsJylcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChlbDogYW55KSA9PiAoZWwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPSAnay1mbG9hdGluZy1sYWJlbC1jb250YWluZXInKSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIC8vIG5vIHdlYmtpdCBicm93c2VyXHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBoYXNBdXRvZmlsbCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCcpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJsb2dpbi1jb250YWluZXJcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgYmFja2dyb3VuZFVSTCArICcpJyB9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibG9naW5cIiBzdHlsZT1cInotaW5kZXg6IDFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIG1hdC1jYXJkLWltYWdlIHN0eWxlPVwid2lkdGg6IDYwJVwiIHNyYz1cInt7IGxvZ29VUkwgfX1cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtYXJnaW4taDEgdGl0bGVcIj57eyB3ZWxjb21lIH19PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaXNFeHBpcmVkU2Vzc2lvblwiIGNsYXNzPVwibG9naW4tZXhwaXJlZC1zdWJ0aXRsZSBkZXNjcmlwdGlvblwiPnt7IGlkbGVUaW1lb3V0TWVzc2FnZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBlbnRlckNyZWRlbnRpYWxzIH19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInZhbGlkYXRlICYmICFvdHBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1hcmdpbi1oMSB0aXRsZVwiPnt7IGNob29zZVN1YnNjcmlwdGlvbiB9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgYWNjb3VudE5hbWUgfX06IHt7IGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSB9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJvdHBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1hcmdpbi1oMSB0aXRsZVwiPnt7IG90cFRpdGxlIH19PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIndpZHRoOiAzNTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IG90cE1lc3NhZ2UgfX1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gMVwiPnNtczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gMlwiPmUtbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gNFwiPnt7IGF1dGhBcHBUZXh0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSBudWxsXCI+c21zL2UtbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBbdGV4dF09XCJhY2NvdW50TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhdmFsaWRhdGUgJiYgIW90cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3InIDogJ2JvcmRlci1ib3R0b20nXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAga2VuZG9UZXh0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWNjb3VudE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIXZhbGlkYXRlICYmICFvdHBcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yJyA6ICdib3JkZXItYm90dG9tJ1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlbmRvVGV4dEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpblBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3QucGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiaGlkZSA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2Vycm9yLXN0YXR1cycgOiAnbm9ybWFsLXN0YXRlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZSA9ICFoaWRlXCIgKm5nSWY9XCJoaWRlID09PSB0cnVlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHkgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlID0gIWhpZGVcIiAqbmdJZj1cImhpZGUgPT09IGZhbHNlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHlfb2ZmIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgKm5nSWY9XCJzdWJzY3JpcHRpb25TZWxlY3Rpb24gJiYgdmFsaWRhdGUgJiYgIW90cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJ7eyBzdWJzY3JpcHRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJbYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3InIDogJycsIGRyb3BEb3duSXNDbGlja2VkID8gJycgOiAnYm9yZGVyLWJvdHRvbSddXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZW5kby1kcm9wZG93bmxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNkcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5Ecm9wRG93blN1YnNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwibG9naW5TdWJzY3JpcHRpb25zPy5sZW5ndGggPD0gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJsb2dpblN1YnNjcmlwdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1YnNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUZpZWxkPVwic3Vic2NyaXB0aW9ua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUHJpbWl0aXZlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJrZW5kby1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblN1YkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJpc0Ryb3BEb3duQ2xpY2tlZCgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGtlbmRvRHJvcERvd25MaXN0SXRlbVRlbXBsYXRlIGxldC1kYXRhSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIuZGF0YS1zdWI9XCJ7eyBkYXRhSXRlbS5zdWJzY3JpcHRpb25rZXkgfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyLmRhdGEtZGVzY3JpcHRpb249XCJ7eyBkYXRhSXRlbS5kZXNjcmlwdGlvbiB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIuZGF0YS1pbnN0YW5jZT1cInt7IGRhdGFJdGVtLmluc3RhbmNla2V5IH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGRhdGFJdGVtLmRlc2NyaXB0aW9uIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2tlbmRvLWRyb3Bkb3dubGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luRHJvcERvd25TdWJzY3JpcHRpb25BcnJvd1VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUoZHJvcGRvd24pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZHJvcERvd25Jc0NsaWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQgaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93X2NpcmNsZV91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkRyb3BEb3duU3Vic2NyaXB0aW9uQXJyb3dEb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUoZHJvcGRvd24pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWRyb3BEb3duSXNDbGlja2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd19jaXJjbGVfZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5zdGFuY2VrZXlcIiBkYXRhLXRlc3Q9XCJsb2dpblBhcmFncmFwaEluc3RhbmNlS2V5XCIgKm5nSWY9XCJsb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID4gM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3Vic2NyaXB0aW9uIGtleToge3sgbG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSB9fSB7eyBpbnN0YW5jZWtleSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIFt0ZXh0XT1cImNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yJyA6ICdib3JkZXItYm90dG9tJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZW5kb1RleHRCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BY2NvdW50TmFtZU90cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudE5hbWVPdHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJoaWRlT3RwID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm9ybWFsLXN0YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlT3RwID0gIWhpZGVPdHBcIiAqbmdJZj1cImhpZGVPdHAgPT09IHRydWVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVPdHAgPSAhaGlkZU90cFwiICpuZ0lmPVwiaGlkZU90cCA9PT0gZmFsc2VcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eV9vZmYgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gQWxyZWR5TG9nZ2VkIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInVzZXJhbHJlYWR5bG9nZ2VkXCIgY2xhc3M9XCJsb2dpbi1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB3aGl0ZS1zcGFjZTogcHJlLXdyYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvZ2luLXdhcm5pbmcgZmxleC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgbG9naW5SZXF1ZXN0LmFjY291bnROYW1lIH19IHt7IHVzZXJhbHJlYWR5bG9nZ2VkVGl0bGUgfX0ge3sgdXNlcmFscmVhZHlsb2dnZWRNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmluZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImxvZ2luUmVxdWVzdC5vdmVyd3JpdGVMb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcmFscmVhZHlsb2dnZWRBY2NlcHRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZW5kb0NoZWNrQm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImstY2hlY2tib3gtbGFiZWxcIiBmb3I9XCJiaW5kaW5nXCI+IHt7IHVzZXJhbHJlYWR5bG9nZ2VkT0sgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8IS0tRU5EIEFscmVkeUxvZ2dlZCAtLS0tLS0tLS0tLS0tLS0tIC0tPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXBzLWxvY2sgcGFuZWwgZmxleC1jZW50ZXIgbWFyZ2luLWJvdHRvbS01XCIgKm5nSWY9XCJjYXBzTG9ja09uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYmxvY01haXVzYyB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tZXJyb3IgcGFuZWwgZmxleC1jZW50ZXIgbWFyZ2luLWJvdHRvbS01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndoaXRlLXNwYWNlOiBwcmUtd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mbyBwYW5lbCBmbGV4LWNlbnRlclwiICpuZ0lmPVwiYXV0aFNlcnZpY2Uub2tNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYXV0aFNlcnZpY2Uub2tNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm90cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50XCIgKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IFRPVFBEZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rIHBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5SZXNlbmRPdHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFsdGVybmF0aXZlTWV0aG9kcyhvdHBJbmZvLlR3b0ZhY3RvclR5cGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWx0ZXJuYXRpdmVPdHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgIT09IDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IHJlc2VuZE9UUExhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gMVwiPnNtczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSAyXCI+ZS1tYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDRcIj57eyBjaG9zZW5BdXRoQXBwIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IG51bGxcIj5zbXMvZS1tYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1oZWFkZXJcIiAqbmdJZj1cIm90cEluZm8uVE9UUENvbmZpZ3VyZWQgfHwgb3RwSW5mby5Nb2JpbGVQaG9uZU5yOyBlbHNlIG9ubHlPbmVNZXRob2RDb25maWd1cmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luOiAxMHB4IDA7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMDA1ODkwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIihvdHBJbmZvLkVtYWlsICYmIG90cEluZm8uVE9UUENvbmZpZ3VyZWQpIHx8IG90cEluZm8uTW9iaWxlUGhvbmVOclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb3RwVGV4dCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpbmsgcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgIT09IDEgJiYgb3RwSW5mby5Nb2JpbGVQaG9uZU5yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWx0ZXJuYXRpdmVNZXRob2RzKDEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkFsdGVybmF0aXZlU21zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgb3RwUmVxdWVzdENvZGUgfX0gU01TPC91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluayBwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSAhPT0gMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFsdGVybmF0aXZlTWV0aG9kcygyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZVNtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IG90cFJlcXVlc3RDb2RlIH19IEUtbWFpbDwvdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpbmsgcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBJbmZvLlRPVFBDb25maWd1cmVkICYmIG90cEluZm8uVHdvRmFjdG9yVHlwZSAhPT0gNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFsdGVybmF0aXZlTWV0aG9kcyg0KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZUFwcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IHVzZUF1dGhBcHAgfX08L3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjb25seU9uZU1ldGhvZENvbmZpZ3VyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxpbmtcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMDA1ODkwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb25lTWV0aG9kT25seSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1IGNsYXNzPVwicG9pbnRlclwiIChjbGljayk9XCJnb1RvU3RvcmUoKVwiPiB7eyBhbHRlcm5hdGl2ZU1ldGhvZCB9fSA8L3U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDAgMXB4OyBtYXJnaW4tdG9wOiA2MHB4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gZGF0YS10ZXN0PVwibG9naW5CdXR0b25cIiBjbGFzcz1cImJ1dHRvbnMgbG9naW4tYnV0dG9uXCIgKGNsaWNrKT1cImxvZ2luKClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRCdXR0b24oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtdGVzdD1cImxvZ2luTG9hZGluZ0J1dHRvblwiIGNsYXNzPVwiay1pY29uIGstaS1sb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWxvYWRpbmdcIj57eyBidXR0b25UZXh0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiICpuZ0lmPVwiKCFsb2FkaW5nICYmIHZhbGlkYXRlKSB8fCBvdHBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gZGF0YS10ZXN0PVwibG9naW5CYWNrQnV0dG9uXCIgY2xhc3M9XCJidXR0b25zIGJhY2stYnV0dG9uXCIgKGNsaWNrKT1cImJhY2soKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBidXR0b25CYWNrIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dTaWduVXBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2lnbnVwXCIgZGF0YS10ZXN0PVwibG9naW5TaWduVXBcIiAoY2xpY2spPVwibmV3VXNlcigpXCI+U2lnblVwIGhlcmUhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIXZhbGlkYXRlICYmICFvdHBcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDEwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb3Jnb3Rwd2RcIiBkYXRhLXRlc3Q9XCJsb2dpbkZvcmdvdFBhc3N3b3JkXCIgKGNsaWNrKT1cImdvVG9Gb3Jnb3RQYXNzd29yZCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8dT57eyBmb3JnZXRQYXNzd29yZCB9fTwvdT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJvdHBcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDEwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb3Jnb3Rwd2RcIiBkYXRhLXRlc3Q9XCJsb2dpbk1hbmFnZU1ldGhvZHNcIj5cclxuICAgICAgICAgICAgICAgIDx1IGNsYXNzPVwicG9pbnRlclwiIChjbGljayk9XCJnb1RvU3RvcmUoKVwiPnt7IG1hbmFnZU1ldGhvZHMgfX08L3U+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAwOyB3aWR0aDogMTAwJTsgei1pbmRleDogMFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY29weXJpZ2h0IGNvcHlyaWdodC1hYnNcIj5Mb2dpbiB7eyBsaWJfdmVyc2lvbiB9fSAyMDE3IC0ge3sgY3VycmVudFllYXIgfX0sIFp1Y2NoZXR0aSBzLnAuYS48L3A+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==