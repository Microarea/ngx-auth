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
import * as i6 from "@progress/kendo-angular-dropdowns";
import * as i7 from "@progress/kendo-angular-label";
import * as i8 from "@progress/kendo-angular-inputs";
const _c0 = ["dropdown"];
function TbLoginComponent_div_5_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r17.idleTimeoutMessage);
} }
function TbLoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h1", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, TbLoginComponent_div_5_p_3_Template, 2, 1, "p", 23);
    i0.ɵɵelementStart(4, "p", 24);
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
    i0.ɵɵelementStart(0, "div")(1, "h1", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 24);
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
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r20.authAppText);
} }
function TbLoginComponent_div_7_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "sms/e-mail");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h1", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 26);
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, TbLoginComponent_div_7_span_5_Template, 2, 0, "span", 4)(6, TbLoginComponent_div_7_span_6_Template, 2, 0, "span", 4)(7, TbLoginComponent_div_7_span_7_Template, 2, 1, "span", 4)(8, TbLoginComponent_div_7_span_8_Template, 2, 0, "span", 4);
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
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 27)(1, "input", 28);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_10_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.loginRequest.accountName = $event); })("keyup", function TbLoginComponent_kendo_floatinglabel_10_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.keyUpFunction($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r3.accountName)("ngClass", ctx_r3.authService.errorMessage ? "border-bottom-error" : "border-bottom");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.loginRequest.accountName)("ngClass", ctx_r3.authService.errorMessage ? "error-status" : "normal-state");
} }
function TbLoginComponent_kendo_floatinglabel_11_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_11_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r27.hide = !ctx_r27.hide); });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_11_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_11_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r29.hide = !ctx_r29.hide); });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 29)(1, "input", 30);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_11_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r31.loginRequest.password = $event); })("keyup", function TbLoginComponent_kendo_floatinglabel_11_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r33 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r33.keyUpFunction($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, TbLoginComponent_kendo_floatinglabel_11_span_2_Template, 2, 0, "span", 31)(3, TbLoginComponent_kendo_floatinglabel_11_span_3_Template, 2, 0, "span", 31);
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
    const dataItem_r39 = ctx.$implicit;
    i0.ɵɵattribute("data-sub", dataItem_r39.subscriptionkey)("data-description", dataItem_r39.description)("data-instance", dataItem_r39.instancekey);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", dataItem_r39.description, " ");
} }
function TbLoginComponent_div_12_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r41); i0.ɵɵnextContext(); const _r34 = i0.ɵɵreference(3); const ctx_r40 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r40.toggle(_r34)); });
    i0.ɵɵtext(1, " arrow_circle_up ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r43); i0.ɵɵnextContext(); const _r34 = i0.ɵɵreference(3); const ctx_r42 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r42.toggle(_r34)); });
    i0.ɵɵtext(1, " arrow_circle_down ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" Subscription key: ", ctx_r38.loginRequest.subscriptionKey, " ", ctx_r38.instancekey, " ");
} }
const _c1 = (a0, a1) => [a0, a1];
function TbLoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "kendo-floatinglabel", 27)(2, "kendo-dropdownlist", 34, 35);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r44.loginRequest.subscriptionKey = $event); })("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r46.onSubChange($event)); })("click", function TbLoginComponent_div_12_Template_kendo_dropdownlist_click_2_listener() { i0.ɵɵrestoreView(_r45); const ctx_r47 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r47.isDropDownClicked()); });
    i0.ɵɵtemplate(4, TbLoginComponent_div_12_ng_template_4_Template, 2, 4, "ng-template", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TbLoginComponent_div_12_span_5_Template, 2, 0, "span", 37)(6, TbLoginComponent_div_12_span_6_Template, 2, 0, "span", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtemplate(8, TbLoginComponent_div_12_p_8_Template, 2, 2, "p", 39);
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
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r50.hideOtp = !ctx_r50.hideOtp); });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r52.hideOtp = !ctx_r52.hideOtp); });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 27)(1, "input", 43);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_13_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r54 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r54.inputValue = $event); })("keyup", function TbLoginComponent_kendo_floatinglabel_13_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r56 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r56.keyUpFunction($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, TbLoginComponent_kendo_floatinglabel_13_span_2_Template, 2, 0, "span", 31)(3, TbLoginComponent_kendo_floatinglabel_13_span_3_Template, 2, 0, "span", 31);
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
function TbLoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44)(1, "p", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r7.blocMaiusc);
} }
function TbLoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "p", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.authService.errorMessage);
} }
function TbLoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "p", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.authService.okMessage);
} }
function TbLoginComponent_div_18_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 53);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r57.TOTPDescription, " ");
} }
function TbLoginComponent_div_18_u_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "sms");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_18_u_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "e-mail");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_18_u_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r64 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r64.chosenAuthApp);
} }
function TbLoginComponent_div_18_u_3_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "sms/e-mail");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_18_u_3_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 54);
    i0.ɵɵlistener("click", function TbLoginComponent_div_18_u_3_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r66.alternativeMethods(ctx_r66.otpInfo.TwoFactorType)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TbLoginComponent_div_18_u_3_span_2_Template, 2, 0, "span", 4)(3, TbLoginComponent_div_18_u_3_span_3_Template, 2, 0, "span", 4)(4, TbLoginComponent_div_18_u_3_span_4_Template, 2, 1, "span", 4)(5, TbLoginComponent_div_18_u_3_span_5_Template, 2, 0, "span", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r58 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r58.resendOTPLabel, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r58.otpInfo.TwoFactorType === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r58.otpInfo.TwoFactorType === 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r58.otpInfo.TwoFactorType === 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r58.otpInfo.TwoFactorType === null);
} }
function TbLoginComponent_div_18_div_4_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r68 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r68.otpText, " ");
} }
function TbLoginComponent_div_18_div_4_u_2_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 59);
    i0.ɵɵlistener("click", function TbLoginComponent_div_18_div_4_u_2_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r73); const ctx_r72 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r72.alternativeMethods(1)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r69 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r69.otpRequestCode, " SMS");
} }
function TbLoginComponent_div_18_div_4_u_3_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 59);
    i0.ɵɵlistener("click", function TbLoginComponent_div_18_div_4_u_3_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r75); const ctx_r74 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r74.alternativeMethods(2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r70 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r70.otpRequestCode, " E-mail");
} }
function TbLoginComponent_div_18_div_4_u_4_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 60);
    i0.ɵɵlistener("click", function TbLoginComponent_div_18_div_4_u_4_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r77); const ctx_r76 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r76.alternativeMethods(4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r71.useAuthApp);
} }
function TbLoginComponent_div_18_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, TbLoginComponent_div_18_div_4_p_1_Template, 2, 1, "p", 55)(2, TbLoginComponent_div_18_div_4_u_2_Template, 2, 1, "u", 56)(3, TbLoginComponent_div_18_div_4_u_3_Template, 2, 1, "u", 56)(4, TbLoginComponent_div_18_div_4_u_4_Template, 2, 1, "u", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.otpInfo.Email && ctx_r59.otpInfo.TOTPConfigured || ctx_r59.otpInfo.MobilePhoneNr);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.otpInfo.TwoFactorType !== 1 && ctx_r59.otpInfo.MobilePhoneNr);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.otpInfo.TwoFactorType !== 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.otpInfo.TOTPConfigured && ctx_r59.otpInfo.TwoFactorType !== 4);
} }
function TbLoginComponent_div_18_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p", 61);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "u", 62);
    i0.ɵɵlistener("click", function TbLoginComponent_div_18_ng_template_5_Template_u_click_2_listener() { i0.ɵɵrestoreView(_r79); const ctx_r78 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r78.goToStore()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r60 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r60.oneMethodOnly, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r60.alternativeMethod, " ");
} }
function TbLoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 48);
    i0.ɵɵtemplate(2, TbLoginComponent_div_18_p_2_Template, 2, 1, "p", 49)(3, TbLoginComponent_div_18_u_3_Template, 6, 5, "u", 50)(4, TbLoginComponent_div_18_div_4_Template, 5, 4, "div", 51)(5, TbLoginComponent_div_18_ng_template_5_Template, 4, 2, "ng-template", null, 52, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r61 = i0.ɵɵreference(6);
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r10.otpInfo.TwoFactorType === 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.otpInfo.TwoFactorType !== 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.otpInfo.TOTPConfigured || ctx_r10.otpInfo.MobilePhoneNr)("ngIfElse", _r61);
} }
function TbLoginComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 63);
} }
function TbLoginComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r12.buttonText);
} }
function TbLoginComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "button", 64);
    i0.ɵɵlistener("click", function TbLoginComponent_div_24_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r81); const ctx_r80 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r80.back()); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.buttonBack, "");
} }
function TbLoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "p", 65);
    i0.ɵɵlistener("click", function TbLoginComponent_div_26_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r83); const ctx_r82 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r82.newUser()); });
    i0.ɵɵtext(2, "SignUp here!");
    i0.ɵɵelementEnd()();
} }
function TbLoginComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66)(1, "p", 67);
    i0.ɵɵlistener("click", function TbLoginComponent_div_27_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r85); const ctx_r84 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r84.goToForgotPassword()); });
    i0.ɵɵelementStart(2, "u");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r15.forgetPassword);
} }
function TbLoginComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66)(1, "p", 68)(2, "u", 62);
    i0.ɵɵlistener("click", function TbLoginComponent_div_28_Template_u_click_2_listener() { i0.ɵɵrestoreView(_r87); const ctx_r86 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r86.goToStore()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r16.manageMethods);
} }
const _c2 = a0 => ({ "background-image": a0 });
// ---------------------------------------------------------------------------
export class TbLoginComponent {
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
        this.otp = false;
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
            this.authService.errorMessage = '';
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
                this.loading)) ||
            (!hasAutofill() &&
                (!this.isConnected ||
                    !this.loginRequest.accountName ||
                    !this.loginRequest.password ||
                    (this.subscriptionSelection && this.loginSubscriptions.length === 0 && this.validate) ||
                    (this.otp && this.inputValue.length !== 6) ||
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
    async back() {
        // ripulisco tutto...
        this.validate = false;
        this.loginRequest.token = '';
        this.loginRequest.password = '';
        this.loginRequest.otPassword = '';
        this.loginRequest.processID = '';
        this.loginRequest.subscriptionKey = '';
        this.loginRequest.appId = '';
        this.buttonText = this.nextText;
        this.loginSubscriptions = [];
        this.authService.okMessage = '';
        this.authService.errorMessage = '';
        this.otp = false;
        this.inputValue = '';
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
                this.authService.errorMessage = this.languageIT ? 'Codice non valido' : 'Invalid code';
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
            if (result && result.Result) {
                const sd = this.loginSubscriptions.find((s) => s.subscriptionkey === this.loginRequest.subscriptionKey);
                if (sd /*&& sd.status*/) {
                    // tslint:disable-next-line:no-bitwise
                    // const scheduled = (sd.status & EntityStatus.UpdateScheduled) === EntityStatus.UpdateScheduled;
                    //if (scheduled)
                    //non controllo piu, chiamero' sempre l' api che fara' tutti i controlli del caso in modo da sganciare la librari da logiche che potrebbero cambiare.
                    {
                        // se la sub non ha lo stato impostato  non cerco nemmeno risparmiandomi una chiamata
                        const result1 = await this.authService.getCalendar(this.loginRequest.subscriptionKey);
                        if (result1.result && result1.content) {
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
                                    this.authService.openUpdateAlertDialog(message, s_translation.getUpdateTitle(), s_translation.getUpdateDontShowMessage(), this.loginRequest.accountName, this.loginRequest.subscriptionKey);
                                    return;
                                }
                            }
                        }
                    }
                }
                console.log('ready to redirect.');
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
    goToStore() {
        window.open(this.authService.getStoreUrl());
    }
    /** @nocollapse */ static { this.ɵfac = function TbLoginComponent_Factory(t) { return new (t || TbLoginComponent)(i0.ɵɵdirectiveInject(i1.TbAuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.MatDialog), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); }; }
    /** @nocollapse */ static { this.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: TbLoginComponent, selectors: [["tb-login"]], viewQuery: function TbLoginComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
        } }, decls: 32, vars: 24, consts: [[1, "login-container", 3, "ngStyle"], [1, "login", 2, "z-index", "1"], [1, "login-header"], ["mat-card-image", "", 2, "width", "60%", 3, "src"], [4, "ngIf"], [1, "login-form"], [3, "text", "ngClass", 4, "ngIf"], ["text", "Password", 3, "ngClass", 4, "ngIf"], ["class", "form-control", 4, "ngIf"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", "style", "white-space: pre-wrap;", 4, "ngIf"], ["class", "login-info panel flex-center", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "60px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", "data-test", "loginButton", 1, "buttons", "login-button", 3, "disabled", "click"], ["data-test", "loginLoadingButton", "class", "k-icon k-i-loading", 4, "ngIf"], ["class", "login-footer", 4, "ngIf"], [1, "login-footer"], ["style", "display: flex; margin-top: 10px; justify-content: flex-end", 4, "ngIf"], [2, "position", "absolute", "bottom", "0", "width", "100%", "z-index", "0"], [1, "copyright", "copyright-abs"], [1, "margin-h1", "title"], ["class", "login-expired-subtitle description", 4, "ngIf"], [1, "description"], [1, "login-expired-subtitle", "description"], [1, "description", 2, "width", "350px"], [3, "text", "ngClass"], ["kendoTextBox", "", "data-test", "loginAccountName", "name", "accountName", "type", "text", 3, "ngModel", "ngClass", "ngModelChange", "keyup"], ["text", "Password", 3, "ngClass"], ["kendoTextBox", "", "data-test", "loginPassword", "name", "password", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "ngModelChange", "keyup"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], [1, "material-icons", "icon", 3, "click"], [1, "form-control"], ["data-test", "loginDropDownSubscription", "name", "subscription", "textField", "description", "valueField", "subscriptionkey", "valuePrimitive", "true", 1, "kendo-dropdown", 3, "disabled", "data", "ngModel", "ngModelChange", "click"], ["dropdown", ""], ["kendoDropDownListItemTemplate", ""], ["data-test", "loginDropDownSubscriptionArrowUp", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowDown", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["class", "instancekey", "data-test", "loginParagraphInstanceKey", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowUp", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginDropDownSubscriptionArrowDown", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginParagraphInstanceKey", 1, "instancekey"], ["kendoTextBox", "", "data-test", "loginAccountNameOtp", "name", "accountNameOtp", "type", "password", 1, "normal-state", 3, "ngModel", "type", "ngModelChange", "keyup"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5", 2, "white-space", "pre-wrap"], [1, "login-info", "panel", "flex-center"], [2, "display", "flex", "justify-content", "flex-end", "flex-direction", "column"], ["class", "description", "style", "margin-bottom: 0px !important", 4, "ngIf"], ["class", "link pointer", "data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 3, "click", 4, "ngIf"], ["class", "login-header", 4, "ngIf", "ngIfElse"], ["onlyOneMethodConfigured", ""], [1, "description", 2, "margin-bottom", "0px !important"], ["data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 1, "link", "pointer", 3, "click"], ["style", "margin: 10px 0; font-weight: 600; color: #005890", 4, "ngIf"], ["class", "link pointer", "data-test", "loginAlternativeSms", 3, "click", 4, "ngIf"], ["class", "link pointer", "data-test", "loginAlternativeApp", 3, "click", 4, "ngIf"], [2, "margin", "10px 0", "font-weight", "600", "color", "#005890"], ["data-test", "loginAlternativeSms", 1, "link", "pointer", 3, "click"], ["data-test", "loginAlternativeApp", 1, "link", "pointer", 3, "click"], [1, "link", 2, "margin-top", "10px", "font-weight", "600", "color", "#005890"], [1, "pointer", 3, "click"], ["data-test", "loginLoadingButton", 1, "k-icon", "k-i-loading"], ["kendoButton", "", "data-test", "loginBackButton", 1, "buttons", "back-button", 3, "click"], ["data-test", "loginSignUp", 1, "signup", 3, "click"], [2, "display", "flex", "margin-top", "10px", "justify-content", "flex-end"], ["data-test", "loginForgotPassword", 1, "forgotpwd", 3, "click"], ["data-test", "loginManageMethods", 1, "forgotpwd"]], template: function TbLoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
            i0.ɵɵelement(4, "img", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, TbLoginComponent_div_5_Template, 6, 3, "div", 4)(6, TbLoginComponent_div_6_Template, 5, 3, "div", 4)(7, TbLoginComponent_div_7_Template, 9, 6, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "form")(9, "div", 5);
            i0.ɵɵtemplate(10, TbLoginComponent_kendo_floatinglabel_10_Template, 2, 4, "kendo-floatinglabel", 6)(11, TbLoginComponent_kendo_floatinglabel_11_Template, 4, 6, "kendo-floatinglabel", 7)(12, TbLoginComponent_div_12_Template, 9, 11, "div", 8)(13, TbLoginComponent_kendo_floatinglabel_13_Template, 4, 6, "kendo-floatinglabel", 6);
            i0.ɵɵelementStart(14, "div", 9);
            i0.ɵɵtemplate(15, TbLoginComponent_div_15_Template, 3, 1, "div", 10)(16, TbLoginComponent_div_16_Template, 3, 1, "div", 11)(17, TbLoginComponent_div_17_Template, 3, 1, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(18, TbLoginComponent_div_18_Template, 7, 4, "div", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div", 13)(20, "div", 14)(21, "button", 15);
            i0.ɵɵlistener("click", function TbLoginComponent_Template_button_click_21_listener() { return ctx.login(); });
            i0.ɵɵtemplate(22, TbLoginComponent_span_22_Template, 1, 0, "span", 16)(23, TbLoginComponent_span_23_Template, 2, 1, "span", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(24, TbLoginComponent_div_24_Template, 4, 1, "div", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 18);
            i0.ɵɵtemplate(26, TbLoginComponent_div_26_Template, 3, 0, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(27, TbLoginComponent_div_27_Template, 4, 1, "div", 19)(28, TbLoginComponent_div_28_Template, 4, 1, "div", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 20)(30, "p", 21);
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(22, _c2, "url(" + ctx.backgroundURL + ")"));
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
        } }, dependencies: [i4.NgClass, i4.NgIf, i4.NgStyle, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i6.ItemTemplateDirective, i6.DropDownListComponent, i7.FloatingLabelComponent, i8.TextBoxDirective], styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list[_ngcontent-%COMP%]{background:#F4F4F4;color:#005890;max-height:100px;width:370px!important}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{background:#bfcdd5}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar:hover{background:#d9d9d9}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#6cafd1}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#005890}.k-list[_ngcontent-%COMP%]   .k-list-item.k-selected[_ngcontent-%COMP%]{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%]:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width: 490px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:323px!important}}@media screen and (max-width: 425px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:273px!important}}@media screen and (max-width: 375px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:217px!important}}.k-list-md[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%], .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}.k-list-item-text[_ngcontent-%COMP%]{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;line-height:20px;margin-bottom:30px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.link[_ngcontent-%COMP%], tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:20px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#E7481C;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#E7481C}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4AB679}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:#C0C0C0}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#E77B2D}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#FF9E18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:#808080}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9F9F9F}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4AB679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68B388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#D03C13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#E7481C}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}  .mat-dialog-container{color:#005890!important;background:white!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9F9F9F}  .mat-dialog-container .login-footer .back-button{background:#808080}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:#C0C0C0}  .mat-dialog-container .login-footer .ok-button{background:#4AB679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68B388}  .k-floating-label-container{width:100%;margin:8px 0}  .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea:focus{background-color:#fff!important}  .k-floating-label-container .k-textbox::-moz-selection,   .k-floating-label-container .k-input::-moz-selection,   .k-floating-label-container .k-textarea::-moz-selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-textbox::selection,   .k-floating-label-container .k-input::selection,   .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-picker-md .k-input-inner{background:white!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}  .k-floating-label-container .k-picker{border-width:0px;border-style:unset}  .k-floating-label-container .k-picker:focus-within{box-shadow:none}  .k-floating-label-container .k-picker:focus{box-shadow:none}  .k-floating-label-container:after{background-color:#8ee2ff;height:1px}  .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}  .k-floating-label-container .k-dropdown{border:none;background:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0B85CE}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}  html,   body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}tb-login[_nghost-%COMP%]{font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}}@media screen and (min-width: 576px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:450px}}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .upicon[_ngcontent-%COMP%]{transform:rotate(90deg);padding:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .downicon[_ngcontent-%COMP%]{transform:rotate(270deg)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .k-i-loading[_ngcontent-%COMP%]{font-size:20px}tb-login[_nghost-%COMP%]   p.instancekey[_ngcontent-%COMP%]{font-size:9px;font-weight:300;text-indent:1px;color:#005890}tb-login[_nghost-%COMP%]   p.copyright[_ngcontent-%COMP%]{font-size:10px;font-weight:300;margin:0;color:#fff}tb-login[_nghost-%COMP%]   p.copyright-abs[_ngcontent-%COMP%]{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{cursor:pointer;text-align:right}tb-login[_nghost-%COMP%]   p.signup[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}tb-login[_nghost-%COMP%]   .margin-h1[_ngcontent-%COMP%]{margin-left:-2px;margin-top:20px}tb-login[_nghost-%COMP%]   .margin-p[_ngcontent-%COMP%]{margin-left:-1.5px;margin-top:-10px}tb-login[_nghost-%COMP%]   .login-expired-subtitle[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}tb-login[_nghost-%COMP%]   .login-chooseSubscription[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-size:x-large}}tb-login[_nghost-%COMP%]     .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, tb-login[_nghost-%COMP%]   .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#005890}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLoginComponent, [{
        type: Component,
        args: [{ selector: 'tb-login', template: "<div class=\"login-container\" [ngStyle]=\"{ 'background-image': 'url(' + backgroundURL + ')' }\">\n    <div class=\"login\" style=\"z-index: 1\">\n        <div class=\"login-header\">\n            <div>\n                <img mat-card-image style=\"width: 60%\" src=\"{{ logoURL }}\" />\n            </div>\n            <div *ngIf=\"!validate && !otp\">\n                <h1 class=\"margin-h1 title\">{{ welcome }}</h1>\n                <p *ngIf=\"isExpiredSession\" class=\"login-expired-subtitle description\">{{ idleTimeoutMessage }}</p>\n                <p class=\"description\">{{ enterCredentials }}</p>\n            </div>\n            <div *ngIf=\"validate && !otp\">\n                <h1 class=\"margin-h1 title\">{{ chooseSubscription }}</h1>\n                <p class=\"description\">{{ accountName }}: {{ loginRequest.accountName }}</p>\n            </div>\n            <div *ngIf=\"otp\">\n                <h1 class=\"margin-h1 title\">{{ otpTitle }}</h1>\n                <p class=\"description\" style=\"width: 350px\">\n                    {{ otpMessage }}\n                    <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\n                    <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\n                    <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ authAppText }}</span>\n\t\t    <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\n                </p>\n            </div>\n        </div>\n\n        <form>\n            <div class=\"login-form\">\n                <kendo-floatinglabel\n                    [text]=\"accountName\"\n                    *ngIf=\"!validate && !otp\"\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\n                >\n                    <input\n                        kendoTextBox\n                        data-test=\"loginAccountName\"\n                        [(ngModel)]=\"loginRequest.accountName\"\n                        (keyup)=\"keyUpFunction($event)\"\n                        name=\"accountName\"\n                        type=\"text\"\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n                    />\n                </kendo-floatinglabel>\n\n                <kendo-floatinglabel\n                    text=\"Password\"\n                    *ngIf=\"!validate && !otp\"\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\n                >\n                    <input\n                        kendoTextBox\n                        data-test=\"loginPassword\"\n                        [(ngModel)]=\"loginRequest.password\"\n                        (keyup)=\"keyUpFunction($event)\"\n                        name=\"password\"\n                        [type]=\"hide ? 'password' : 'text'\"\n                        autocomplete=\"current-password\"\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n                    />\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === true\" class=\"material-icons icon\"> visibility </span>\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === false\" class=\"material-icons icon\"> visibility_off </span>\n                </kendo-floatinglabel>\n\n                <div class=\"form-control\" *ngIf=\"subscriptionSelection && validate && !otp\">\n                    <kendo-floatinglabel\n                        text=\"{{ subscription }}\"\n                        [ngClass]=\"[authService.errorMessage ? 'border-bottom-error' : '', dropDownIsClicked ? '' : 'border-bottom']\"\n                    >\n                        <kendo-dropdownlist\n                            #dropdown\n                            data-test=\"loginDropDownSubscription\"\n                            [disabled]=\"loginSubscriptions?.length <= 1\"\n                            [data]=\"loginSubscriptions\"\n                            name=\"subscription\"\n                            textField=\"description\"\n                            valueField=\"subscriptionkey\"\n                            valuePrimitive=\"true\"\n                            [(ngModel)]=\"loginRequest.subscriptionKey\"\n                            class=\"kendo-dropdown\"\n                            (ngModelChange)=\"onSubChange($event)\"\n                            (click)=\"isDropDownClicked()\"\n                        >\n                            <ng-template kendoDropDownListItemTemplate let-dataItem>\n                                <div\n                                    attr.data-sub=\"{{ dataItem.subscriptionkey }}\"\n                                    attr.data-description=\"{{ dataItem.description }}\"\n                                    attr.data-instance=\"{{ dataItem.instancekey }}\"\n                                >\n                                    {{ dataItem.description }}\n                                </div>\n                            </ng-template>\n                        </kendo-dropdownlist>\n                        <span\n                            data-test=\"loginDropDownSubscriptionArrowUp\"\n                            (click)=\"toggle(dropdown)\"\n                            *ngIf=\"dropDownIsClicked\"\n                            class=\"material-symbols-rounded icon\"\n                        >\n                            arrow_circle_up\n                        </span>\n                        <span\n                            data-test=\"loginDropDownSubscriptionArrowDown\"\n                            (click)=\"toggle(dropdown)\"\n                            *ngIf=\"!dropDownIsClicked\"\n                            class=\"material-symbols-rounded icon\"\n                        >\n                            arrow_circle_down\n                        </span>\n                    </kendo-floatinglabel>\n                    <div>\n                        <p class=\"instancekey\" data-test=\"loginParagraphInstanceKey\" *ngIf=\"loginSubscriptions.length > 3\">\n                            Subscription key: {{ loginRequest.subscriptionKey }} {{ instancekey }}\n                        </p>\n                    </div>\n                </div>\n\n                <kendo-floatinglabel\n                    [text]=\"code\"\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\n                    *ngIf=\"otp\"\n                >\n                    <input\n                        kendoTextBox\n                        data-test=\"loginAccountNameOtp\"\n                        [(ngModel)]=\"inputValue\"\n                        (keyup)=\"keyUpFunction($event)\"\n                        name=\"accountNameOtp\"\n                        [type]=\"hideOtp ? 'password' : 'text'\"\n                        type=\"password\"\n                        class=\"normal-state\"\n                    />\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === true\" class=\"material-icons icon\"> visibility </span>\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === false\" class=\"material-icons icon\"> visibility_off </span>\n                </kendo-floatinglabel>\n\n                <div class=\"login-infos\">\n                    <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\n                        <p class=\"no-margin\">{{ blocMaiusc }}</p>\n                    </div>\n                    <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"authService.errorMessage\" style=\"white-space: pre-wrap;\">\n                        <p class=\"no-margin\">{{ authService.errorMessage }}</p>\n                    </div>\n                    <div class=\"login-info panel flex-center\" *ngIf=\"authService.okMessage\">\n                        <p class=\"no-margin\">{{ authService.okMessage }}</p>\n                    </div>\n                </div>\n\n                <div *ngIf=\"otp\">\n                    <div style=\"display: flex; justify-content: flex-end; flex-direction: column\">\n                        <!-- <p class=\"link\" data-test=\"loginResendOtp\"\n                      (click)=\"authService.resendOTP(loginRequest.accountName, loginRequest.processID, alternative)\">\n                      <u>{{ resendOTPpLabel }}</u>\n                  </p> -->\n\n                        <p class=\"description\" style=\"margin-bottom: 0px !important\" *ngIf=\"otpInfo.TwoFactorType === 4\">\n                            {{ TOTPDescription }}\n                        </p>\n\n                        <u\n                            class=\"link pointer\"\n                            data-test=\"loginResendOtp\"\n                            (click)=\"alternativeMethods(otpInfo.TwoFactorType)\"\n                            data-test=\"loginAlternativeOtp\"\n                            *ngIf=\"otpInfo.TwoFactorType !== 4\"\n                            >{{ resendOTPLabel }}\n                            <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\n                            <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\n                            <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ chosenAuthApp }}</span>\n\t\t\t    <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\n                        </u>\n                        <div class=\"login-header\" *ngIf=\"otpInfo.TOTPConfigured || otpInfo.MobilePhoneNr; else onlyOneMethodConfigured\">\n                            <p\n                                style=\"margin: 10px 0; font-weight: 600; color: #005890\"\n                                *ngIf=\"(otpInfo.Email && otpInfo.TOTPConfigured) || otpInfo.MobilePhoneNr\"\n                            >\n                                {{ otpText }}\n                            </p>\n                            <u\n                                class=\"link pointer\"\n                                *ngIf=\"otpInfo.TwoFactorType !== 1 && otpInfo.MobilePhoneNr\"\n                                (click)=\"alternativeMethods(1)\"\n                                data-test=\"loginAlternativeSms\"\n                                >{{ otpRequestCode }} SMS</u\n                            >\n                            <u\n                                class=\"link pointer\"\n                                *ngIf=\"otpInfo.TwoFactorType !== 2\"\n                                (click)=\"alternativeMethods(2)\"\n                                data-test=\"loginAlternativeSms\"\n                                >{{ otpRequestCode }} E-mail</u\n                            >\n                            <u\n                                class=\"link pointer\"\n                                *ngIf=\"otpInfo.TOTPConfigured && otpInfo.TwoFactorType !== 4\"\n                                (click)=\"alternativeMethods(4)\"\n                                data-test=\"loginAlternativeApp\"\n                                >{{ useAuthApp }}</u\n                            >\n                        </div>\n                        <ng-template #onlyOneMethodConfigured>\n                            <p class=\"link\" style=\"margin-top: 10px; font-weight: 600; color: #005890\">\n                                {{ oneMethodOnly }}\n                                <u class=\"pointer\" (click)=\"goToStore()\"> {{ alternativeMethod }} </u>\n                            </p>\n                        </ng-template>\n                    </div>\n                    <!-- <div style=\"margin-top: 10px\">\n                        <p class=\"link\" data-test=\"loginAlternativeOtp\"> -->\n                    <!-- <mat-checkbox [(ngModel)]=\"alternative\" name=\"alternative\">\n                                <span translate>{{ alternativelbl }}</span>\n                            </mat-checkbox> -->\n                    <!-- <u>{{ alternativelbl }}</u>\n                        </p>\n                    </div> -->\n                </div>\n            </div>\n        </form>\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 60px\">\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n                <button kendoButton data-test=\"loginButton\" class=\"buttons login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\n                    <span data-test=\"loginLoadingButton\" class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\n                    <span *ngIf=\"!loading\">{{ buttonText }}</span>\n                </button>\n            </div>\n            <div class=\"login-footer\" *ngIf=\"(!loading && validate) || otp\">\n                <button kendoButton data-test=\"loginBackButton\" class=\"buttons back-button\" (click)=\"back()\">\n                    <span> {{ buttonBack }}</span>\n                </button>\n            </div>\n        </div>\n        <div class=\"login-footer\">\n            <div *ngIf=\"showSignUp\">\n                <p class=\"signup\" data-test=\"loginSignUp\" (click)=\"newUser()\">SignUp here!</p>\n            </div>\n        </div>\n        <div *ngIf=\"!validate && !otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\n            <p class=\"forgotpwd\" data-test=\"loginForgotPassword\" (click)=\"goToForgotPassword()\">\n                <u>{{ forgetPassword }}</u>\n            </p>\n        </div>\n        <div *ngIf=\"otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\n            <p class=\"forgotpwd\" data-test=\"loginManageMethods\">\n                <u class=\"pointer\" (click)=\"goToStore()\">{{ manageMethods }}</u>\n            </p>\n        </div>\n    </div>\n    <div style=\"position: absolute; bottom: 0; width: 100%; z-index: 0\">\n        <p class=\"copyright copyright-abs\">Login {{ lib_version }} 2017 - {{ currentYear }}, Zucchetti s.p.a.</p>\n    </div>\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list{background:#F4F4F4;color:#005890;max-height:100px;width:370px!important}.k-list ::-webkit-scrollbar{background:#bfcdd5}.k-list ::-webkit-scrollbar:hover{background:#d9d9d9}.k-list ::-webkit-scrollbar-thumb{background:#6cafd1}.k-list ::-webkit-scrollbar-thumb:hover{background:#005890}.k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}.kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width: 490px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}.kendo-dropdown{width:323px!important}}@media screen and (max-width: 425px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}.kendo-dropdown{width:273px!important}}@media screen and (max-width: 375px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}.kendo-dropdown{width:217px!important}}.k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}.k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;line-height:20px;margin-bottom:30px}.pointer{cursor:pointer}.link,:host(tb-login) p.forgotpwd{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom{border-bottom:1px solid #0B85CE}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:rgba(0,0,0,.32)}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:20px 0}.login-infos .caps-lock{background:#E7481C;display:flex;align-items:center}.login-infos .login-error{background:#E7481C}.login-infos .login-info{background:#4AB679}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:#C0C0C0}.login-footer .login-button{background:#E77B2D}.login-footer .login-button:hover:enabled{background:#FF9E18}.login-footer .back-button{background:#808080}.login-footer .back-button:hover:enabled{background:#9F9F9F}.login-footer .ok-button{background:#4AB679}.login-footer .ok-button:hover:enabled{background:#68B388}.login-footer .error-button{background:#D03C13}.login-footer .error-button:hover:enabled{background:#E7481C}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}::ng-deep .mat-dialog-container{color:#005890!important;background:white!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9F9F9F}::ng-deep .mat-dialog-container .login-footer .back-button{background:#808080}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:#C0C0C0}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4AB679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68B388}::ng-deep .k-floating-label-container{width:100%;margin:8px 0}::ng-deep .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea:focus{background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox::-moz-selection,::ng-deep .k-floating-label-container .k-input::-moz-selection,::ng-deep .k-floating-label-container .k-textarea::-moz-selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-textbox::selection,::ng-deep .k-floating-label-container .k-input::selection,::ng-deep .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-picker-md .k-input-inner{background:white!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}::ng-deep .k-floating-label-container .k-picker{border-width:0px;border-style:unset}::ng-deep .k-floating-label-container .k-picker:focus-within{box-shadow:none}::ng-deep .k-floating-label-container .k-picker:focus{box-shadow:none}::ng-deep .k-floating-label-container:after{background-color:#8ee2ff;height:1px}::ng-deep .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}::ng-deep .k-floating-label-container .k-dropdown{border:none;background:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0B85CE}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}::ng-deep html,::ng-deep body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}:host(tb-login){font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}:host(tb-login) .login-container{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}:host(tb-login) .login-container .login{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){:host(tb-login) .login-container .login{padding:20px}}@media screen and (min-width: 576px){:host(tb-login) .login-container .login{max-width:450px}}:host(tb-login) .login-container .login .upicon{transform:rotate(90deg);padding:1px}:host(tb-login) .login-container .login .downicon{transform:rotate(270deg)}:host(tb-login) .login-container .login .login-header{display:flex;flex-direction:column}:host(tb-login) .login-container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:0}:host(tb-login) .login-container .login .k-i-loading{font-size:20px}:host(tb-login) p.instancekey{font-size:9px;font-weight:300;text-indent:1px;color:#005890}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) p.forgotpwd{cursor:pointer;text-align:right}:host(tb-login) p.signup{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}:host(tb-login) .margin-h1{margin-left:-2px;margin-top:20px}:host(tb-login) .margin-p{margin-left:-1.5px;margin-top:-10px}:host(tb-login) .login-expired-subtitle{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}:host(tb-login) .login-chooseSubscription{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}:host(tb-login) .login-sign-in{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){:host(tb-login) .login{padding:20px}:host(tb-login) .login .login-form ::ng-deep .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){:host(tb-login) .login-sign-in{font-size:x-large}}:host(tb-login) ::ng-deep .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host(tb-login) .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#005890}\n"] }]
    }], () => [{ type: i1.TbAuthService }, { type: i2.Router }, { type: i3.MatDialog }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }], { dropdown: [{
            type: ViewChild,
            args: ['dropdown']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TbLoginComponent, { className: "TbLoginComponent", filePath: "lib\\pages\\login.component.ts", lineNumber: 21 }); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL3BhZ2VzL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztJQ0g1Qiw2QkFBdUU7SUFBQSxZQUF3QjtJQUFBLGlCQUFJOzs7SUFBNUIsZUFBd0I7SUFBeEIsZ0RBQXdCOzs7SUFGbkcsMkJBQStCLGFBQUE7SUFDQyxZQUFhO0lBQUEsaUJBQUs7SUFDOUMsb0VBQW1HO0lBQ25HLDZCQUF1QjtJQUFBLFlBQXNCO0lBQUEsaUJBQUksRUFBQTs7O0lBRnJCLGVBQWE7SUFBYixvQ0FBYTtJQUNyQyxlQUFzQjtJQUF0Qiw4Q0FBc0I7SUFDSCxlQUFzQjtJQUF0Qiw2Q0FBc0I7OztJQUVqRCwyQkFBOEIsYUFBQTtJQUNFLFlBQXdCO0lBQUEsaUJBQUs7SUFDekQsNkJBQXVCO0lBQUEsWUFBaUQ7SUFBQSxpQkFBSSxFQUFBOzs7SUFEaEQsZUFBd0I7SUFBeEIsK0NBQXdCO0lBQzdCLGVBQWlEO0lBQWpELHdGQUFpRDs7O0lBTXBFLDRCQUEwQztJQUFBLG1CQUFHO0lBQUEsaUJBQU87OztJQUNwRCw0QkFBMEM7SUFBQSxzQkFBTTtJQUFBLGlCQUFPOzs7SUFDdkQsNEJBQTBDO0lBQUEsWUFBaUI7SUFBQSxpQkFBTzs7O0lBQXhCLGVBQWlCO0lBQWpCLHlDQUFpQjs7O0lBQ3pFLDRCQUE2QztJQUFBLDBCQUFVO0lBQUEsaUJBQU87OztJQVB4RCwyQkFBaUIsYUFBQTtJQUNlLFlBQWM7SUFBQSxpQkFBSztJQUMvQyw2QkFBNEM7SUFDeEMsWUFDQTtJQUFBLHlFQUFvRCw0REFBQSw0REFBQSw0REFBQTtJQUl4RCxpQkFBSSxFQUFBOzs7SUFQd0IsZUFBYztJQUFkLHFDQUFjO0lBRXRDLGVBQ0E7SUFEQSxrREFDQTtJQUFPLGVBQWlDO0lBQWpDLHlEQUFpQztJQUNqQyxlQUFpQztJQUFqQyx5REFBaUM7SUFDakMsZUFBaUM7SUFBakMseURBQWlDO0lBQy9DLGVBQW9DO0lBQXBDLDREQUFvQzs7OztJQU9qQywrQ0FJQyxnQkFBQTtJQUlPLHFNQUFhLHlEQUMvQixJQUR3RCx3S0FDN0IsZUFBQSw2QkFBcUIsQ0FBQSxJQURRO0lBSDFDLGlCQVFFLEVBQUE7OztJQVpGLHlDQUFvQixzRkFBQTtJQU9oQixlQUFzQztJQUF0Qyx5REFBc0MsOEVBQUE7Ozs7SUF1QjFDLGdDQUErRTtJQUF6RSxzT0FBc0I7SUFBb0QsNEJBQVc7SUFBQSxpQkFBTzs7OztJQUNsRyxnQ0FBZ0Y7SUFBMUUsc09BQXNCO0lBQXFELGdDQUFlO0lBQUEsaUJBQU87Ozs7SUFoQjNHLCtDQUlDLGdCQUFBO0lBSU8scU1BQWEsc0RBQy9CLElBRHFELHdLQUMxQixlQUFBLDZCQUFxQixDQUFBLElBREs7SUFIdkMsaUJBU0U7SUFDRiwyRkFBa0csOEVBQUE7SUFFdEcsaUJBQXNCOzs7SUFkbEIsbUdBQThFO0lBSzFFLGVBQW1DO0lBQW5DLHNEQUFtQywyQ0FBQSw4RUFBQTtJQU9ULGVBQW1CO0lBQW5CLDJDQUFtQjtJQUNuQixlQUFvQjtJQUFwQiw0Q0FBb0I7OztJQXVCdEMsMkJBSUM7SUFDRyxZQUNKO0lBQUEsaUJBQU07OztJQUxGLHdEQUE4Qyw4Q0FBQSwyQ0FBQTtJQUk5QyxlQUNKO0lBREkseURBQ0o7Ozs7SUFHUixnQ0FLQztJQUhHLHlOQUFTLGVBQUEsb0JBQWdCLENBQUEsSUFBQztJQUkxQixpQ0FDSjtJQUFBLGlCQUFPOzs7O0lBQ1AsZ0NBS0M7SUFIRyx5TkFBUyxlQUFBLG9CQUFnQixDQUFBLElBQUM7SUFJMUIsbUNBQ0o7SUFBQSxpQkFBTzs7O0lBR1AsNkJBQW1HO0lBQy9GLFlBQ0o7SUFBQSxpQkFBSTs7O0lBREEsZUFDSjtJQURJLGlIQUNKOzs7OztJQWpEUiwrQkFBNEUsOEJBQUEsaUNBQUE7SUFjaEUsa01BQWEsNkRBQ25DLElBRGdFLHFMQUV6QixlQUFBLDJCQUFtQixDQUFBLElBRk0sK0pBR2pDLGVBQUEsMkJBQW1CLENBQUEsSUFIYztJQUsxQyx5RkFRYztJQUNsQixpQkFBcUI7SUFDckIsMkVBT08sOERBQUE7SUFTWCxpQkFBc0I7SUFDdEIsMkJBQUs7SUFDRCxxRUFFSTtJQUNSLGlCQUFNLEVBQUE7OztJQWhERixlQUF5QjtJQUF6QixxREFBeUI7SUFDekIsbUtBQTZHO0lBS3pHLGVBQTRDO0lBQTVDLDZHQUE0QyxtQ0FBQSxnREFBQTtJQXdCM0MsZUFBdUI7SUFBdkIsK0NBQXVCO0lBUXZCLGVBQXdCO0lBQXhCLGdEQUF3QjtJQU9pQyxlQUFtQztJQUFuQywyREFBbUM7Ozs7SUFxQnJHLGdDQUF3RjtJQUFsRiw0T0FBNEI7SUFBdUQsNEJBQVc7SUFBQSxpQkFBTzs7OztJQUMzRyxnQ0FBeUY7SUFBbkYsNE9BQTRCO0lBQXdELGdDQUFlO0lBQUEsaUJBQU87Ozs7SUFoQnBILCtDQUlDLGdCQUFBO0lBSU8sb1BBQXdCLHdLQUNmLGVBQUEsNkJBQXFCLENBQUEsSUFETjtJQUg1QixpQkFTRTtJQUNGLDJGQUEyRyw4RUFBQTtJQUUvRyxpQkFBc0I7OztJQWhCbEIsa0NBQWEsc0ZBQUE7SUFPVCxlQUF3QjtJQUF4QiwyQ0FBd0IsOENBQUE7SUFPUSxlQUFzQjtJQUF0Qiw4Q0FBc0I7SUFDdEIsZUFBdUI7SUFBdkIsK0NBQXVCOzs7SUFJM0QsK0JBQTRFLFlBQUE7SUFDbkQsWUFBZ0I7SUFBQSxpQkFBSSxFQUFBOzs7SUFBcEIsZUFBZ0I7SUFBaEIsdUNBQWdCOzs7SUFFekMsK0JBQTJILFlBQUE7SUFDbEcsWUFBOEI7SUFBQSxpQkFBSSxFQUFBOzs7SUFBbEMsZUFBOEI7SUFBOUIscURBQThCOzs7SUFFdkQsK0JBQXdFLFlBQUE7SUFDL0MsWUFBMkI7SUFBQSxpQkFBSSxFQUFBOzs7SUFBL0IsZUFBMkI7SUFBM0Isa0RBQTJCOzs7SUFXaEQsNkJBQWlHO0lBQzdGLFlBQ0o7SUFBQSxpQkFBSTs7O0lBREEsZUFDSjtJQURJLHdEQUNKOzs7SUFTSSw0QkFBMEM7SUFBQSxtQkFBRztJQUFBLGlCQUFPOzs7SUFDcEQsNEJBQTBDO0lBQUEsc0JBQU07SUFBQSxpQkFBTzs7O0lBQ3ZELDRCQUEwQztJQUFBLFlBQW1CO0lBQUEsaUJBQU87OztJQUExQixlQUFtQjtJQUFuQiwyQ0FBbUI7OztJQUNsRiw0QkFBNkM7SUFBQSwwQkFBVTtJQUFBLGlCQUFPOzs7O0lBVjdDLDZCQU1LO0lBSEQsZ0tBQVMsZUFBQSx5REFBeUMsQ0FBQSxJQUFDO0lBR2xELFlBQ0Q7SUFBQSw4RUFBb0QsaUVBQUEsaUVBQUEsaUVBQUE7SUFJeEQsaUJBQUk7OztJQUxDLGVBQ0Q7SUFEQyxzREFDRDtJQUFPLGVBQWlDO0lBQWpDLDBEQUFpQztJQUNqQyxlQUFpQztJQUFqQywwREFBaUM7SUFDakMsZUFBaUM7SUFBakMsMERBQWlDO0lBQ3RELGVBQW9DO0lBQXBDLDZEQUFvQzs7O0lBR3RCLDZCQUdDO0lBQ0csWUFDSjtJQUFBLGlCQUFJOzs7SUFEQSxlQUNKO0lBREksZ0RBQ0o7Ozs7SUFDQSw2QkFLSztJQUZELHNLQUFTLGVBQUEsMkJBQW1CLENBQUMsQ0FBQyxDQUFBLElBQUM7SUFFOUIsWUFBd0I7SUFBQSxpQkFDNUI7OztJQURJLGVBQXdCO0lBQXhCLHlEQUF3Qjs7OztJQUU3Qiw2QkFLSztJQUZELHNLQUFTLGVBQUEsMkJBQW1CLENBQUMsQ0FBQyxDQUFBLElBQUM7SUFFOUIsWUFBMkI7SUFBQSxpQkFDL0I7OztJQURJLGVBQTJCO0lBQTNCLDREQUEyQjs7OztJQUVoQyw2QkFLSztJQUZELHNLQUFTLGVBQUEsMkJBQW1CLENBQUMsQ0FBQyxDQUFBLElBQUM7SUFFOUIsWUFBZ0I7SUFBQSxpQkFDcEI7OztJQURJLGVBQWdCO0lBQWhCLHdDQUFnQjs7O0lBMUJ6Qiw4QkFBZ0g7SUFDNUcsMkVBS0ksOERBQUEsOERBQUEsOERBQUE7SUFzQlIsaUJBQU07OztJQXpCRyxlQUF3RTtJQUF4RSwrR0FBd0U7SUFNeEUsZUFBMEQ7SUFBMUQsMkZBQTBEO0lBTzFELGVBQWlDO0lBQWpDLDBEQUFpQztJQU9qQyxlQUEyRDtJQUEzRCw0RkFBMkQ7Ozs7SUFPaEUsNkJBQTJFO0lBQ3ZFLFlBQ0E7SUFBQSw2QkFBeUM7SUFBdEIsMEtBQVMsZUFBQSxtQkFBVyxDQUFBLElBQUM7SUFBRSxZQUF3QjtJQUFBLGlCQUFJLEVBQUE7OztJQUR0RSxlQUNBO0lBREEsc0RBQ0E7SUFBMEMsZUFBd0I7SUFBeEIsMERBQXdCOzs7SUF2RGxGLDJCQUFpQixjQUFBO0lBT1QscUVBRUksd0RBQUEsNERBQUEsNkdBQUE7SUFpRFIsaUJBQU0sRUFBQTs7OztJQW5ENEQsZUFBaUM7SUFBakMsMERBQWlDO0lBUzFGLGVBQWlDO0lBQWpDLDBEQUFpQztJQU9YLGVBQXVEO0lBQXZELHNGQUF1RCxrQkFBQTs7O0lBa0R0RiwyQkFBdUY7OztJQUN2Riw0QkFBdUI7SUFBQSxZQUFnQjtJQUFBLGlCQUFPOzs7SUFBdkIsZUFBZ0I7SUFBaEIsd0NBQWdCOzs7O0lBRy9DLCtCQUFnRSxpQkFBQTtJQUNnQixnS0FBUyxlQUFBLGNBQU0sQ0FBQSxJQUFDO0lBQ3hGLDRCQUFNO0lBQUMsWUFBZ0I7SUFBQSxpQkFBTyxFQUFBLEVBQUE7OztJQUF2QixlQUFnQjtJQUFoQixrREFBZ0I7Ozs7SUFLL0IsMkJBQXdCLFlBQUE7SUFDc0IsMkpBQVMsZUFBQSxpQkFBUyxDQUFBLElBQUM7SUFBQyw0QkFBWTtJQUFBLGlCQUFJLEVBQUE7Ozs7SUFHdEYsK0JBQWtHLFlBQUE7SUFDekMsMkpBQVMsZUFBQSw0QkFBb0IsQ0FBQSxJQUFDO0lBQy9FLHlCQUFHO0lBQUEsWUFBb0I7SUFBQSxpQkFBSSxFQUFBLEVBQUE7OztJQUF4QixlQUFvQjtJQUFwQiw0Q0FBb0I7Ozs7SUFHL0IsK0JBQW9GLFlBQUEsWUFBQTtJQUV6RCwySkFBUyxlQUFBLG1CQUFXLENBQUEsSUFBQztJQUFDLFlBQW1CO0lBQUEsaUJBQUksRUFBQSxFQUFBOzs7SUFBdkIsZUFBbUI7SUFBbkIsMkNBQW1COzs7QURoTzVFLDhFQUE4RTtBQUM5RSxNQUFNLE9BQU8sZ0JBQWdCO0lBNkR6Qiw4RUFBOEU7SUFDOUUsWUFDVyxXQUEwQixFQUMxQixNQUFjLEVBQ2IsTUFBaUIsRUFDakIsUUFBbUIsRUFDRCxHQUFTO1FBSjVCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDRCxRQUFHLEdBQUgsR0FBRyxDQUFNO1FBbEUvQixvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNaLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGlCQUFZLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFVaEQsdUJBQWtCLEdBQWlHLEVBQUUsQ0FBQztRQUd0SCxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osWUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGdCQUFXLEdBQVcsV0FBVyxDQUFDO1FBMkJsQyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsMkJBQXNCLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2hFLGVBQVUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELFlBQU8sR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBdVVyQyw4RUFBOEU7UUFDOUUscUJBQWdCLEdBQUcsQ0FBQyxJQUFZLEVBQVUsRUFBRTtZQUN4QyxJQUFJLGlCQUFpQixHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxPQUFPLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDeEgsQ0FBQyxDQUFDO1FBRUYsOEVBQThFO1FBQzlFLDBCQUFxQixHQUFHLENBQUMsSUFBWSxFQUFVLEVBQUU7WUFDN0MsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxJQUFJLENBQUMsVUFBVTtnQkFBRSxPQUFPLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7O2dCQUN4SCxPQUFPLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNILENBQUMsQ0FBQztRQUVGLDhFQUE4RTtRQUM5RSx3QkFBbUIsR0FBRyxDQUFDLElBQVksRUFBRSxZQUFvQixFQUFVLEVBQUU7WUFDakUsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEdBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQzdFLElBQUksSUFBSSxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzs7Z0JBQ2hILE9BQU8sU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25ILENBQUMsQ0FBQztRQWpWRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBUSxFQUFFLEVBQUU7WUFDakQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7YUFDbEM7aUJBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzthQUM5QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2FBQ2xDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQWUsQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsV0FBVyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUM3QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsOEJBQThCLENBQUM7WUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7WUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztZQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdFQUFnRSxDQUFDO1lBQ3hGLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxHQUFHLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsK0NBQStDLENBQUM7WUFDeEUsSUFBSSxDQUFDLGNBQWMsR0FBRywrQkFBK0IsQ0FBQztZQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFHLHlCQUF5QixDQUFDO1lBQzVDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxxRUFBcUUsQ0FBQztZQUNoRyxJQUFJLENBQUMsVUFBVSxHQUFHLG1EQUFtRCxDQUFDO1lBQ3RFLElBQUksQ0FBQyxXQUFXLEdBQUcsdUJBQXVCLENBQUM7WUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyw4QkFBOEIsQ0FBQztZQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLG1DQUFtQyxDQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQThCLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxzQkFBc0IsQ0FBQztZQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLHVDQUF1QyxDQUFDO1lBQzFELElBQUksQ0FBQyxhQUFhO2dCQUNkLDRHQUE0RyxDQUFDO1lBQ2pILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQ0FBaUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsYUFBYSxHQUFHLG1DQUFtQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxlQUFlO2dCQUNoQixnSUFBZ0ksQ0FBQztTQUN4STthQUFNO1lBQ0gsSUFBSSxDQUFDLGtCQUFrQixHQUFHLDBCQUEwQixDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxlQUFlLEdBQUcsNkRBQTZELENBQUM7WUFDckYsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLEdBQUcsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxtRUFBbUUsQ0FBQztZQUM1RixJQUFJLENBQUMsY0FBYyxHQUFHLHdCQUF3QixDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyx1RUFBdUUsQ0FBQztZQUNsRyxJQUFJLENBQUMsVUFBVSxHQUFHLHNDQUFzQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRywyQkFBMkIsQ0FBQztZQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLDZCQUE2QixDQUFDO1lBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsMEJBQTBCLENBQUM7WUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLDRCQUE0QixDQUFDO1lBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcseUdBQXlHLENBQUM7WUFDL0gsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlDQUFpQyxDQUFDO1lBQzNELElBQUksQ0FBQyxhQUFhLEdBQUcsMkJBQTJCLENBQUM7WUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxxR0FBcUcsQ0FBQztTQUNoSTtJQUNMLENBQUM7SUFFRCxzREFBc0Q7SUFDdEQsd0JBQXdCO0lBQ3hCLDREQUE0RDtJQUM1RCxrRUFBa0U7SUFDbEUsOEZBQThGO0lBRTlGLDJFQUEyRTtJQUMzRSxnRkFBZ0Y7SUFDaEYsa0ZBQWtGO0lBQ2xGLCtFQUErRTtJQUUvRSxtRkFBbUY7SUFDbkYscURBQXFEO0lBQ3JELDBFQUEwRTtJQUMxRSwrQ0FBK0M7SUFDL0Msc0VBQXNFO0lBQ3RFLGdGQUFnRjtJQUNoRixxRUFBcUU7SUFDckUsd0VBQXdFO0lBQ3hFLHNDQUFzQztJQUN0QyxLQUFLO0lBQ0wsc0RBQXNEO0lBRXRELDhFQUE4RTtJQUM5RSxrQkFBa0I7UUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsd0JBQXdCLEVBQUUsQ0FBQztRQUMzQiwwQkFBMEI7SUFDOUIsQ0FBQztJQUVELDhFQUE4RTtJQUM5RSxLQUFLLENBQUMsZUFBZTtRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQiw0RUFBNEU7WUFDNUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7WUFDMUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVU7Z0JBQzNDLENBQUMsQ0FBQyx5REFBeUQsR0FBRyxLQUFLO2dCQUNuRSxDQUFDLENBQUMsK0NBQStDLEdBQUcsS0FBSyxDQUFDO1NBQ2pFO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVELDhFQUE4RTtJQUM5RSxXQUFXLENBQUMsUUFBYTtRQUNyQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxLQUFLLFFBQVEsQ0FBQyxDQUFDO1FBQy9FLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZGLENBQUM7SUFFRCw4RUFBOEU7SUFDOUUsYUFBYSxDQUFDLEtBQW9CO1FBQzlCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEI7U0FDSjtRQUNELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELDhFQUE4RTtJQUM5RSxjQUFjO1FBQ1YsT0FBTyxDQUNILENBQUMsV0FBVyxFQUFFO1lBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXO2dCQUNkLENBQUMsSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3JGLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUMsV0FBVyxFQUFFO2dCQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztvQkFDZCxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVztvQkFDOUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVE7b0JBQzNCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ3JGLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUN6QixDQUFDO0lBQ04sQ0FBQztJQUNELElBQUksZ0JBQWdCO1FBQ2hCLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLE1BQU0sQ0FBQztJQUMvRCxDQUFDO0lBQ0QsOEVBQThFO0lBQzlFLE9BQU87UUFDSCxrR0FBa0c7UUFDbEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCw4RUFBOEU7SUFDOUUsS0FBSyxDQUFDLElBQUk7UUFDTixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsOEVBQThFO0lBQzlFLEtBQUssQ0FBQyxLQUFLO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGNBQWMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QywrRUFBK0U7UUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyRixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDckM7UUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxHQUFHO2dCQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O2dCQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1lBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzlFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNqRSxPQUFPO1lBQ1gsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFH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REFBOEI7WUFHL0MsZUFBMkI7WUFBM0IsZ0RBQTJCO1lBS3BFLGVBQVM7WUFBVCw4QkFBUztZQXdFNEUsZUFBNkI7WUFBN0IsK0NBQTZCO1lBQ25ELGVBQWE7WUFBYixrQ0FBYTtZQUN2RSxlQUFjO1lBQWQsbUNBQWM7WUFHRixlQUFtQztZQUFuQyw4REFBbUM7WUFPeEQsZUFBZ0I7WUFBaEIscUNBQWdCO1lBSXBCLGVBQXVCO1lBQXZCLGdEQUF1QjtZQUt2QixlQUFTO1lBQVQsOEJBQVM7WUFPb0IsZUFBa0U7WUFBbEUsbUdBQWtFOzs7aUZEcE9oRyxnQkFBZ0I7Y0FONUIsU0FBUzsyQkFDSSxVQUFVOztzQkF3RWYsTUFBTTt1QkFBQyxRQUFRO3FCQVZHLFFBQVE7a0JBQTlCLFNBQVM7bUJBQUMsVUFBVTs7a0ZBekRaLGdCQUFnQjtBQWttQjdCLDJGQUEyRjtBQUMzRixTQUFTLHdCQUF3QjtJQUM3QixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ1osSUFBSTtZQUNBLFFBQVE7aUJBQ0gsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUM7aUJBQzFDLE9BQU8sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7U0FDMUY7UUFBQyxNQUFNO1lBQ0osb0JBQW9CO1NBQ3ZCO0lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVELDhFQUE4RTtBQUM5RSxTQUFTLFdBQVc7SUFDaEIsSUFBSTtRQUNBLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUM3RDtJQUFDLE1BQU07UUFDSixPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENVQ2FsZW5kYXJKb2IsIExvZ2luUmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9tb2RlbHMvc3Vic2NyaXB0aW9uLm1vZGVsJztcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jnb3QtcGFzc3dvcmQtZGlhbG9nL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlckNvbnRlbnRJbml0LCBJbmplY3QsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEV4dHJhSW5mbyB9IGZyb20gJy4uL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XG5pbXBvcnQgeyBTdHJpbmdzIH0gZnJvbSAnLi4vbW9kZWxzL1N0cmluZ3MnO1xuaW1wb3J0IHsgTElCX1ZFUlNJT04gfSBmcm9tICcuLi8uLi92ZXJzaW9uJztcbmltcG9ydCB7IE9wZXJhdGlvblJlc3VsdCB9IGZyb20gJy4uL21vZGVscy9vcGVyYXRpb24tcmVzdWx0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0Yi1sb2dpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddLFxufSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNsYXNzIFRiTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBwcml2YXRlIGNhY2hlZENvbXBhbmllczogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgY2Fwc0xvY2tPbiA9IGZhbHNlO1xuICAgIHZhbGlkYXRlID0gZmFsc2U7XG4gICAgb3RwID0gZmFsc2U7XG4gICAgT0xEID0gZmFsc2U7XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0ID0gbmV3IExvZ2luUmVxdWVzdCgpO1xuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG4gICAgYnV0dG9uVGV4dDogc3RyaW5nO1xuICAgIG5leHRUZXh0OiBzdHJpbmc7XG4gICAgbG9naW5UZXh0OiBzdHJpbmc7XG4gICAgY3VycmVudFllYXI6IHN0cmluZztcbiAgICBjcmVhdGVBY2NvdW50VXJsOiBzdHJpbmc7XG4gICAgY2hhbmdlUGFzc3dvcmRVcmw6IHN0cmluZztcbiAgICBzdWJzY3JpcHRpb25TZWxlY3Rpb246IGJvb2xlYW47IC8vIGFiaWxpdGEgbGEgc2NlbHRhIGRlbGxhIHN1YnNjcmlwdGlvblxuICAgIHNob3dTaWduVXA6IGJvb2xlYW47IC8vIGFiaWxpdGEgbGEgcG9zc2liaWxpdMOgIGRpIHJlZ2lzdHJhcmUgbnVvdm8gYWNjb3VudFxuICAgIGxvZ2luU3Vic2NyaXB0aW9uczogQXJyYXk8eyBkZXNjcmlwdGlvbjogc3RyaW5nOyBzdWJzY3JpcHRpb25rZXk6IHN0cmluZzsgc3RhdHVzOiBudW1iZXI7IGluc3RhbmNla2V5OiBzdHJpbmcgfT4gPSBbXTtcbiAgICBsb2dvVVJMOiBzdHJpbmc7XG4gICAgYmFja2dyb3VuZFVSTDogc3RyaW5nO1xuICAgIGhpZGUgPSB0cnVlO1xuICAgIGhpZGVPdHAgPSB0cnVlO1xuICAgIGluc3RhbmNla2V5OiBzdHJpbmc7XG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIHB1YmxpYyBkb2N1bWVudD86IERvY3VtZW50O1xuICAgIGxpYl92ZXJzaW9uOiBzdHJpbmcgPSBMSUJfVkVSU0lPTjtcbiAgICAvLyB0ZXN0aSBpbiBpdGFsaWFubyBlZCBpbmdsZXNlXG4gICAgY2hvb3NlU3Vic2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZ29vZEpvYjogc3RyaW5nO1xuICAgIHN1YnNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGluc3RhbmNlOiBzdHJpbmc7XG4gICAgYnV0dG9uQmFjazogc3RyaW5nO1xuICAgIGFjY291bnROYW1lOiBzdHJpbmc7XG4gICAgZW50ZXJBY2NvdW5OYW1lOiBzdHJpbmc7XG4gICAgd2VsY29tZTogc3RyaW5nO1xuICAgIGVudGVyQ3JlZGVudGlhbHM6IHN0cmluZztcbiAgICBmb3JnZXRQYXNzd29yZDogc3RyaW5nO1xuICAgIGJsb2NNYWl1c2M6IHN0cmluZztcbiAgICBpZGxlVGltZW91dE1lc3NhZ2U6IHN0cmluZztcbiAgICBvdHBNZXNzYWdlOiBzdHJpbmc7XG4gICAgYXV0aEFwcFRleHQ6IHN0cmluZztcbiAgICBvdHBUaXRsZTogc3RyaW5nO1xuICAgIHJlc2VuZE9UUExhYmVsOiBzdHJpbmc7XG4gICAgY29kZTogc3RyaW5nO1xuICAgIGNob3NlbkF1dGhBcHA6IHN0cmluZztcbiAgICBvdHBUZXh0OiBzdHJpbmc7XG4gICAgb3RwUmVxdWVzdENvZGU6IHN0cmluZztcbiAgICB1c2VBdXRoQXBwOiBzdHJpbmc7XG4gICAgb25lTWV0aG9kT25seTogc3RyaW5nO1xuICAgIGFsdGVybmF0aXZlTWV0aG9kOiBzdHJpbmc7XG4gICAgbWFuYWdlTWV0aG9kczogc3RyaW5nO1xuICAgIFRPVFBEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGlucHV0VmFsdWU6IHN0cmluZyA9ICcnO1xuICAgIGRyb3BEb3duSXNDbGlja2VkID0gZmFsc2U7XG4gICAgY29tYm9Cb3hJc0NsaWNrZWQgPSBmYWxzZTtcbiAgICBpY29uSXNDbGlja2VkID0gZmFsc2U7XG4gICAgQFZpZXdDaGlsZCgnZHJvcGRvd24nKSBkcm9wZG93bjogYW55O1xuICAgIGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBsYW5ndWFnZUlUID0gdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0Jyk7XG4gICAgb3RwSW5mbzogRXh0cmFJbmZvID0gbmV3IEV4dHJhSW5mbygpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYz86IGFueSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdjbGljaycsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvQm94SXNDbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWNvbklzQ2xpY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbklzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi50b2dnbGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcERvd25Jc0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSBkb2MgYXMgRG9jdW1lbnQ7XG4gICAgICAgIHRoaXMuY2hlY2tDb25uZWN0aW9uKCk7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gdGhpcy5hdXRoU2VydmljZS5nZXRBcHBJZCgpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiA9IGF1dGhTZXJ2aWNlLmhhc1N1YnNjcmlwdGlvblNlbGVjdGlvbigpO1xuICAgICAgICB0aGlzLnNob3dTaWduVXAgPSBhdXRoU2VydmljZS5zaG93U2lnblVwKCk7XG4gICAgICAgIHRoaXMucmVkaXJlY3RVcmwgPSBhdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUFjY291bnRVcmwgPSBhdXRoU2VydmljZS5nZXRDcmVhdGVBY2NvdW50VXJsKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmRVcmwgPSBhdXRoU2VydmljZS5nZXRDaGFuZ2VQYXNzd29yZFVybCgpO1xuICAgICAgICB0aGlzLmxvZ29VUkwgPSBhdXRoU2VydmljZS5nZXRMb2dvVVJMKCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFVSTCA9IGF1dGhTZXJ2aWNlLmdldEJhY2tncm91bmRVUkwoKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZWtleSA9ICcnO1xuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRUZXh0ID0gJ2F2YW50aSc7XG4gICAgICAgICAgICB0aGlzLmxvZ2luVGV4dCA9ICdhY2NlZGknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uZXh0VGV4dCA9ICduZXh0JztcbiAgICAgICAgICAgIHRoaXMubG9naW5UZXh0ID0gJ2xvZ2luJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlIHx8ICF0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiA/IHRoaXMubG9naW5UZXh0IDogdGhpcy5uZXh0VGV4dDtcbiAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XG4gICAgICAgICAgICB0aGlzLmNob29zZVN1YnNjcmlwdGlvbiA9ICdTY2VnbGkgbGEgdHVhIHNvdHRvc2NyaXppb25lJztcbiAgICAgICAgICAgIHRoaXMuZ29vZEpvYiA9ICdCdW9uIGxhdm9ybyEnO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSAnU290dG9zY3JpemlvbmUnO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9ICdJc3RhbnphJztcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmFjayA9ICc8IElORElFVFJPJztcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudE5hbWUgPSAnTm9tZSB1dGVudGUnO1xuICAgICAgICAgICAgdGhpcy5lbnRlckFjY291bk5hbWUgPSAnSW5zZXJpc2NpIGlsIHR1byBub21lIHV0ZW50ZSBlIHRpIGludmllcmVtbyB1bmEgbnVvdmEgcGFzc3dvcmQnO1xuICAgICAgICAgICAgdGhpcy53ZWxjb21lID0gJ0JlbnZlbnV0byBzdSAnICsgYXV0aFNlcnZpY2UuZ2V0QnJhbmROYW1lKCk7XG4gICAgICAgICAgICB0aGlzLmVudGVyQ3JlZGVudGlhbHMgPSAnQXV0ZW50aWNhdGkgaW5zZXJlbmRvIG5vbWUgdXRlbnRlIGUgcGFzc3dvcmQuJztcbiAgICAgICAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmQgPSAnSGFpIGRpbWVudGljYXRvIGxhIHBhc3N3b3JkID8nO1xuICAgICAgICAgICAgdGhpcy5ibG9jTWFpdXNjID0gJ0Jsb2NjbyBtYWl1c2NvbGUgYXR0aXZvJztcbiAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVvdXRNZXNzYWdlID0gJ0xhIHR1YSBzZXNzaW9uZSDDqCB0ZXJtaW5hdGEgcGVyIGluYXR0aXZpdMOgLCBwdW9pIHJpcHJlbmRlcmUgZGEgcXVpLic7XG4gICAgICAgICAgICB0aGlzLm90cE1lc3NhZ2UgPSAnSW5zZXJpc2NpIGlsIGNvZGljZSBPVFAgY2hlIGhhaSByaWNldnV0byB0cmFtaXRlICc7XG4gICAgICAgICAgICB0aGlzLmF1dGhBcHBUZXh0ID0gJ2FwcCBkaSBhdXRlbnRpY2F6aW9uZSc7XG4gICAgICAgICAgICB0aGlzLm90cFRpdGxlID0gJ0F1dGVudGljYXppb25lIGEgZHVlIGZhdHRvcmknO1xuICAgICAgICAgICAgdGhpcy5yZXNlbmRPVFBMYWJlbCA9ICdSaWNoaWVkaSB1biBudW92byBjb2RpY2UgT1RQIHZpYSAnO1xuICAgICAgICAgICAgdGhpcy5jb2RlID0gJ0NvZGljZSBPVFAnO1xuICAgICAgICAgICAgdGhpcy5jaG9zZW5BdXRoQXBwID0gJ2FwcCBkaSBhdXRlbnRpY2F6aW9uZSBzY2VsdGEnO1xuICAgICAgICAgICAgdGhpcy5vdHBUZXh0ID0gJ09wcHVyZSc7XG4gICAgICAgICAgICB0aGlzLm90cFJlcXVlc3RDb2RlID0gJ1JpY2hpZWRpIGNvZGljZSB2aWEgJztcbiAgICAgICAgICAgIHRoaXMudXNlQXV0aEFwcCA9ICdVdGlsaXp6YSBsYSB0dWEgYXBwIGRpIGF1dGVudGljYXppb25lJztcbiAgICAgICAgICAgIHRoaXMub25lTWV0aG9kT25seSA9XG4gICAgICAgICAgICAgICAgJ0hhaSB1biBzb2xvIG1ldG9kbyBkaSBhdXRlbnRpY2F6aW9uZSBjb25maWd1cmF0bywgcGVyIG5vbiByaXNjaGlhcmUgZGkgcmltYW5lcmUgYmxvY2NhdG8gdGkgY29uc2lnbGlhbW8gZGknO1xuICAgICAgICAgICAgdGhpcy5hbHRlcm5hdGl2ZU1ldGhvZCA9ICdhdHRpdmFyZSB1biBtZXRvZG8gYWx0ZXJuYXRpdm8uJztcbiAgICAgICAgICAgIHRoaXMubWFuYWdlTWV0aG9kcyA9ICdHZXN0aXNjaSBpIHR1b2kgbWV0b2RpIGRpIGFjY2Vzc28nO1xuICAgICAgICAgICAgdGhpcy5UT1RQRGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgICAgIFwiQXByaSBsJ2FwcCBvIGwnZXN0ZW5zaW9uZSBkZWwgYnJvd3NlciBkZWxsJ2F1dGVudGljYXRvcmUgYSBkdWUgZmF0dG9yaSAoVE9UUCkgcGVyIHZpc3VhbGl6emFyZSBpbCB0dW8gY29kaWNlIGRpIGF1dGVudGljYXppb25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNob29zZVN1YnNjcmlwdGlvbiA9ICdDaG9vc2UgeW91ciBzdWJzY3JpcHRpb24nO1xuICAgICAgICAgICAgdGhpcy5nb29kSm9iID0gJ0dvb2Qgam9iISc7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9ICdTdWJzY3JpcHRpb24nO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9ICdJbnN0YW5jZSc7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkJhY2sgPSAnPCBCQUNLJztcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudE5hbWUgPSAnQWNjb3VudCBuYW1lJztcbiAgICAgICAgICAgIHRoaXMuZW50ZXJBY2NvdW5OYW1lID0gJ0VudGVyIHlvdXIgYWNjb3VudCBuYW1lIGFuZCB3ZSB3aWxsIHNlbmQgeW91IGEgbmV3IHBhc3N3b3JkJztcbiAgICAgICAgICAgIHRoaXMud2VsY29tZSA9ICdXZWxjb21lIHRvICcgKyBhdXRoU2VydmljZS5nZXRCcmFuZE5hbWUoKTtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJDcmVkZW50aWFscyA9ICdBdXRoZW50aWNhdGUgeW91cnNlbGYgYnkgZW50ZXJpbmcgeW91ciBhY2NvdW50IG5hbWUgYW5kIHBhc3N3b3JkLic7XG4gICAgICAgICAgICB0aGlzLmZvcmdldFBhc3N3b3JkID0gJ0ZvcmdvdCB5b3VyIHBhc3N3b3JkID8nO1xuICAgICAgICAgICAgdGhpcy5ibG9jTWFpdXNjID0gJ0NhcHMgbG9jayBvbic7XG4gICAgICAgICAgICB0aGlzLmlkbGVUaW1lb3V0TWVzc2FnZSA9ICdZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQgZHVlIHRvIGluYWN0aXZpdHksIHlvdSBjYW4gcmVzdW1lIGZyb20gaGVyZS4nO1xuICAgICAgICAgICAgdGhpcy5vdHBNZXNzYWdlID0gJ0VudGVyIHRoZSBvdHAgY29kZSB5b3UgcmVjZWl2ZWQgdmlhICc7XG4gICAgICAgICAgICB0aGlzLmF1dGhBcHBUZXh0ID0gJ2F1dGhlbnRpY2F0aW9uIGFwcCc7XG4gICAgICAgICAgICB0aGlzLm90cFRpdGxlID0gJ1R3by1GYWN0b3IgQXV0aGVudGljYXRpb24nO1xuICAgICAgICAgICAgdGhpcy5yZXNlbmRPVFBMYWJlbCA9ICdSZXF1ZXN0IGEgbmV3IE9UUCBjb2RlIHZpYSAnO1xuICAgICAgICAgICAgdGhpcy5jb2RlID0gJ09UUCBDb2RlJztcbiAgICAgICAgICAgIHRoaXMuY2hvc2VuQXV0aEFwcCA9ICdjaG9zZW4gYXV0aGVudGljYXRvciBhcHAnO1xuICAgICAgICAgICAgdGhpcy5vdHBUZXh0ID0gJ09yJztcbiAgICAgICAgICAgIHRoaXMub3RwUmVxdWVzdENvZGUgPSAnUmVxdWVzdCBjb2RlIHZpYSAnO1xuICAgICAgICAgICAgdGhpcy51c2VBdXRoQXBwID0gJ1VzZSB5b3VyIGF1dGhlbnRpY2F0b3IgYXBwJztcbiAgICAgICAgICAgIHRoaXMub25lTWV0aG9kT25seSA9ICdZb3UgaGF2ZSBvbmx5IG9uZSBhdXRoZW50aWNhdGlvbiBtZXRob2QgY29uZmlndXJlZCwgdG8gYXZvaWQgdGhlIHJpc2sgb2YgYmVpbmcgYmxvY2tlZCB3ZSByZWNvbW1lbmQgeW91JztcbiAgICAgICAgICAgIHRoaXMuYWx0ZXJuYXRpdmVNZXRob2QgPSAnYWN0aXZhdGUgYW4gYWx0ZXJuYXRpdmUgbWV0aG9kLic7XG4gICAgICAgICAgICB0aGlzLm1hbmFnZU1ldGhvZHMgPSAnTWFuYWdlIHlvdXIgbG9naW4gbWV0aG9kcyc7XG4gICAgICAgICAgICB0aGlzLlRPVFBEZXNjcmlwdGlvbiA9ICdPcGVuIHlvdXIgdHdvLWZhY3RvciBhdXRoZW50aWNhdG9yIChUT1RQKSBhcHAgb3IgYnJvd3NlciBleHRlbnNpb24gdG8gdmlldyB5b3VyIGF1dGhlbnRpY2F0aW9uIGNvZGUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUFJPVkEgUEVSIEFQRVJUVVJBIERJQUxPRyBESSBOT1RJRklDQSBBR0dJT1JOQU1FTlRPXG4gICAgLy8gIGFzeW5jIG9wZW5EaWFsb2coKSB7XG4gICAgLy8gICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzX3RyYW5zbGF0aW9uID0gbmV3ICBTdHJpbmdzKCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc190cmFuc2xhdGlvbi5nZXRVcGRhdGVNZXNzYWdlKHRoaXMuYXV0aFNlcnZpY2UpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3ViJywgXCJzdWIgeFwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBkYXRlJywgXCJ0aGlzIGRhdGVcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3RhcnRoJyxcInN0YXJ0IGhvdXJcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAZW5kaCcsXCJlbmQgaG91clwiICk7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9uIG1vc3RybyBzZSBtaSBoYW5ubyBkZXR0byBkaSBub24gbW9zdHJhcmUgcGl1LlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSBtZXNzYWdlKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9wZW5VcGRhdGVBbGVydERpYWxvZyhcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlVGl0bGUoKSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZURvbnRTaG93TWVzc2FnZSgpLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTt9XG4gICAgLy8gIH1cbiAgICAvLyBQUk9WQSBQRVIgQVBFUlRVUkEgRElBTE9HIERJIE5PVElGSUNBIEFHR0lPUk5BTUVOVE9cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkTG9naW5EYXRhKCk7XG4gICAgICAgIHdlYmtpdEF1dG9maWxsV29ya2Fyb3VuZCgpO1xuICAgICAgICAvL3Rlc3Q6IHRoaXMub3BlbkRpYWxvZygpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tDb25uZWN0aW9uKCk7XG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgLy8gc2UgbWkgYXJyaXZhIHVuIGVycm9yZSBtb3N0cm8gcXVlbGxvIGFsdHJpbWVudGkgc29sbyBsIHVybCBjaGUgbG8gaGEgZGF0b1xuICAgICAgICAgICAgbGV0IGVycm9yID0gdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoZXJyb3IubGVuZ3RoID09PSAwKSBlcnJvciA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QmFzZVVybCgpO1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlSVRcbiAgICAgICAgICAgICAgICA/ICdTZXJ2aXppbyB0ZW1wb3JhbmVhbWVudGUgbm9uIHJhZ2dpdW5naWJpbGUuXFxuRGV0dGFnbGk6ICcgKyBlcnJvclxuICAgICAgICAgICAgICAgIDogJ1NlcnZpY2UgdGVtcG9yYXJpbHkgbm90IGF2YWlsYWJsZS5cXG5EZXRhaWxzOiAnICsgZXJyb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG9uU3ViQ2hhbmdlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgc2QgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5maW5kKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSA9PT0gbmV3VmFsdWUpO1xuICAgICAgICBpZiAoc2QgJiYgc2QuaW5zdGFuY2VrZXkpIHRoaXMuaW5zdGFuY2VrZXkgPSBgJHt0aGlzLmluc3RhbmNlfTogJHtzZC5pbnN0YW5jZWtleX1gO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGtleVVwRnVuY3Rpb24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkQnV0dG9uKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gYnkgZW50ZXIuLi4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2Fwc09uID0gZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSAmJiBldmVudC5nZXRNb2RpZmllclN0YXRlKCdDYXBzTG9jaycpO1xuICAgICAgICB0aGlzLmNhcHNMb2NrT24gPSBjYXBzT247XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGlzYWJsZWRCdXR0b24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoaGFzQXV0b2ZpbGwoKSAmJlxuICAgICAgICAgICAgICAgICghdGhpcy5pc0Nvbm5lY3RlZCB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gJiYgdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID09PSAwICYmIHRoaXMudmFsaWRhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm90cCAmJiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoICE9PSA2KSB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcpKSB8fFxuICAgICAgICAgICAgKCFoYXNBdXRvZmlsbCgpICYmXG4gICAgICAgICAgICAgICAgKCF0aGlzLmlzQ29ubmVjdGVkIHx8XG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uICYmIHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnZhbGlkYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5vdHAgJiYgdGhpcy5pbnB1dFZhbHVlLmxlbmd0aCAhPT0gNikgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nKSlcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZ2V0IGlzRXhwaXJlZFNlc3Npb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVkU2Vzc2lvbicpID09PSAndHJ1ZSc7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG5ld1VzZXIoKSB7XG4gICAgICAgIC8vIHJpbWFuZGEgYWxsYSBwYWdpbmEgKHByZXN1bWliaWxtZW50ZSBkZWxsbyBzdG9yZSkgZG92ZSAgc2Fyw6AgcG9zc2liaWxlIGNyZWFyZSB1biBudW92byBhY2NvdW50LlxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jcmVhdGVBY2NvdW50VXJsXSk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYXN5bmMgYmFjaygpIHtcbiAgICAgICAgLy8gcmlwdWxpc2NvIHR1dHRvLi4uXG4gICAgICAgIHRoaXMudmFsaWRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QudG9rZW4gPSAnJztcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgPSAnJztcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Qub3RQYXNzd29yZCA9ICcnO1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSUQgPSAnJztcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gJyc7XG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMubmV4dFRleHQ7XG4gICAgICAgIHRoaXMubG9naW5TdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMub3RwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGxvZ2luKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gcmVxdWVzdGVkLi4uJyArIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5zYXZlTG9naW5EYXRhKCk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2V4cGlyZWRTZXNzaW9uJyk7XG4gICAgICAgIC8vYXNzZWdubyB1biBpZCBhbGxhIGxvZ2luIGUgc29sbyBxdWVzdGEgcG90csOhIHVzYXJlIGlsIGNvZGljZSAgb3RwICAgYXNzZWduYXRvXG4gICAgICAgIGlmICghdGhpcy5sb2dpblJlcXVlc3QucHJvY2Vzc0lEKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAwMDAgKyAxMDAwMDApLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5vdFBhc3N3b3JkID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vdHApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLk9MRCkgdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgPSB0aGlzLmlucHV0VmFsdWU7XG4gICAgICAgICAgICBlbHNlIHRoaXMubG9naW5SZXF1ZXN0Lm90UGFzc3dvcmQgPSB0aGlzLmlucHV0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlICYmIHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9ICdNQ2xvdWRQcmVMb2dpbic7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsaW5nIHByZWxvZ2luLi4uICcpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0MSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UucHJlbG9naW4odGhpcy5sb2dpblJlcXVlc3QpLmNhdGNoKChlcnIxKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIxLmVycm9yICYmIGVycjEuZXJyb3IuTWVzc2FnZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSA/IHRoaXMubG9naW5UZXh0IDogdGhpcy5uZXh0VGV4dDtcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmkgc2lhIGxvZ2luIHNpYSBjaGVja2RiXG4gICAgICAgICAgICBpZiAocmVzdWx0MSAmJiByZXN1bHQxLlJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3RwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSA/IHRoaXMubG9naW5UZXh0IDogdGhpcy5uZXh0VGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBhbmllc0ZvclVzZXIodGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsZWN0aW5nIHN1YnNjcmlwdGlvbnMuLi4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3RwICYmIHJlc3VsdDEgJiYgcmVzdWx0MS5SZXN1bHRDb2RlID09PSAxNDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm90cEluZm8gPSByZXN1bHQxLkV4dHJhSW5mbztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vdHBJbmZvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5PTEQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm90cEluZm8gPSBuZXcgRXh0cmFJbmZvKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuT0xEID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vdHAgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm90cCAmJiByZXN1bHQxICYmICFyZXN1bHQxLlJlc3VsdCAmJiByZXN1bHQxLlJlc3VsdENvZGUgPT09IDE0Mykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gdGhpcy5sYW5ndWFnZUlUID8gJ0NvZGljZSBub24gdmFsaWRvJyA6ICdJbnZhbGlkIGNvZGUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gdGhpcy5hdXRoU2VydmljZS5nZXRBcHBJZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxpbmcgbG9naW4uLi4gJyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMubG9naW5SZXF1ZXN0KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSA/IHRoaXMubG9naW5UZXh0IDogdGhpcy5uZXh0VGV4dDtcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmkgc2lhIGxvZ2luIHNpYSBjaGVja2RiXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZCA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmZpbmQoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5ID09PSB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNkIC8qJiYgc2Quc3RhdHVzKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3Qgc2NoZWR1bGVkID0gKHNkLnN0YXR1cyAmIEVudGl0eVN0YXR1cy5VcGRhdGVTY2hlZHVsZWQpID09PSBFbnRpdHlTdGF0dXMuVXBkYXRlU2NoZWR1bGVkO1xuICAgICAgICAgICAgICAgICAgICAvL2lmIChzY2hlZHVsZWQpXG4gICAgICAgICAgICAgICAgICAgIC8vbm9uIGNvbnRyb2xsbyBwaXUsIGNoaWFtZXJvJyBzZW1wcmUgbCcgYXBpIGNoZSBmYXJhJyB0dXR0aSBpIGNvbnRyb2xsaSBkZWwgY2FzbyBpbiBtb2RvIGRhIHNnYW5jaWFyZSBsYSBsaWJyYXJpIGRhIGxvZ2ljaGUgY2hlIHBvdHJlYmJlcm8gY2FtYmlhcmUuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlIGxhIHN1YiBub24gaGEgbG8gc3RhdG8gaW1wb3N0YXRvICBub24gY2VyY28gbmVtbWVubyByaXNwYXJtaWFuZG9taSB1bmEgY2hpYW1hdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDEgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmdldENhbGVuZGFyKHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0MS5yZXN1bHQgJiYgcmVzdWx0MS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGVkVXBkYXRlOiBDVUNhbGVuZGFySm9iID0gcmVzdWx0MS5jb250ZW50IGFzIENVQ2FsZW5kYXJKb2I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVkdWxlZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2NoZWR1bGVkVXBkYXRlOiAnICsgc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdET05UU0hPV1VQREFURVdBUk4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNfdHJhbnNsYXRpb24gPSBuZXcgU3RyaW5ncygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlTWVzc2FnZSh0aGlzLmF1dGhTZXJ2aWNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN1YicsIHRoaXMuYXV0aFNlcnZpY2UuZ2V0U3Vic2NyaXB0aW9uRGVzY3JpcHRpb24oKSEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQGRhdGUnLCB0aGlzLkZvcm1hdERhdGVTdHJpbmcoc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBzdGFydGgnLCB0aGlzLkZvcm1hdFN0YXJ0RGF0ZVN0cmluZyhzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BAZW5kaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkZvcm1hdEVuZERhdGVTdHJpbmcoc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUsIHNjaGVkdWxlZFVwZGF0ZS5lc3RpbWF0ZWR1cGdyYWRldGltZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9uIG1vc3RybyBzZSBtaSBoYW5ubyBkZXR0byBkaSBub24gbW9zdHJhcmUgcGl1LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSBtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9wZW5VcGRhdGVBbGVydERpYWxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlVGl0bGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZURvbnRTaG93TWVzc2FnZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IHRvIHJlZGlyZWN0LicpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzUmVkaXJlY3RFeHRlcm5hbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbyBleHRlcm5hbCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLCB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvIGludGVybmFsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEZvcm1hdERhdGVTdHJpbmcgPSAoZGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgdmFyIHNjaGVkdWxlZERhdGVUaW1lID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRlKSk7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZWREYXRlVGltZS50b0xvY2FsZURhdGVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSk7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEZvcm1hdFN0YXJ0RGF0ZVN0cmluZyA9IChkYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICB2YXIgc2NoZWR1bGVkRGF0ZVRpbWUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGUpKTtcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkgcmV0dXJuIHNjaGVkdWxlZERhdGVUaW1lLnRvTG9jYWxlU3RyaW5nKCdpdC1JVCcsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiBmYWxzZSB9KTtcbiAgICAgICAgZWxzZSByZXR1cm4gc2NoZWR1bGVkRGF0ZVRpbWUudG9Mb2NhbGVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSB9KTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgRm9ybWF0RW5kRGF0ZVN0cmluZyA9IChkYXRlOiBzdHJpbmcsIGR1cmF0aW9uTWluczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgICAgdmFyIHNjaGVkdWxlZERhdGVUaW1lID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRlKSk7XG4gICAgICAgIHZhciBmaW5hbERhdGUgPSBuZXcgRGF0ZShzY2hlZHVsZWREYXRlVGltZS5nZXRUaW1lKCkgKyBkdXJhdGlvbk1pbnMgKiA2MDAwMCk7XG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHJldHVybiBmaW5hbERhdGUudG9Mb2NhbGVTdHJpbmcoJ2l0LUlUJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IGZhbHNlIH0pO1xuICAgICAgICBlbHNlIHJldHVybiBmaW5hbERhdGUudG9Mb2NhbGVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSB9KTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbG9hZExvZ2luRGF0YSgpIHtcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFjY291bnROYW1lKCkgfHwgJyc7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0U3Vic2NyaXB0aW9uKCkgfHwgJyc7XG5cbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwcml2YXRlIHNhdmVMb2dpbkRhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzU2Vzc2lvblN0b3JhZ2UoKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUsIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc2QgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5maW5kKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSA9PT0gdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcbiAgICAgICAgICAgIGlmIChzZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzU2Vzc2lvblN0b3JhZ2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc2QuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc2QuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGdldENvbXBhbmllc0ZvclVzZXIodXNlcjogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF1c2VyIHx8ICF0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICAvLyB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcbiAgICAgICAgY29uc3QgdGVtcCA9IGF3YWl0IHRoaXMucmVxdWVzdEFuZFNvcnRTdWJzY3JpcHRpb25zKHVzZXIpO1xuICAgICAgICAvLyBQcmVtaW8gRWxlZ2FuemEgQ29kaWNlIDIwMTkgKEBMdWNhQnJ1bmkpXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0ZW1wKSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMpKSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IHRlbXA7XG5cbiAgICAgICAgaWYgKHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnTm9uIHRyb3ZvIG5lc3N1bmEgc3Vic2NyaXB0aW9uIGFzc29jaWF0YSBhIHF1ZXN0byBhY2NvdW50Lic7XG4gICAgICAgICAgICBlbHNlIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ0kgY2Fubm90IGZpbmQgYW55IFN1YnNjcmlwdGlvbnMgYXNzb2NpYXRlZCB0byB5b3UnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnNbMF0uc3Vic2NyaXB0aW9ua2V5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubWFwKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSkuaW5kZXhPZih0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9uc1swXS5zdWJzY3JpcHRpb25rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vblN1YkNoYW5nZSh0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpdmF0ZSBhc3luYyByZXF1ZXN0QW5kU29ydFN1YnNjcmlwdGlvbnModXNlcjogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxTdWJzY3JpcHRpb24+PiB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlZENvbXBhbmllcy5oYXNPd25Qcm9wZXJ0eSh1c2VyKSAmJiB0aGlzLmNhY2hlZENvbXBhbmllc1t1c2VyIGFzIGFueV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZENvbXBhbmllc1t1c2VyIGFzIGFueV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZW1wOiBBcnJheTxTdWJzY3JpcHRpb24+ID0gW107XG4gICAgICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8U3Vic2NyaXB0aW9uPiA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyKS50b1Byb21pc2UoKTtcbiAgICAgICAgcmVzdWx0LnNvcnQodGhpcy5jb21wYXJlQ29tcGFuaWVzKS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICB0ZW1wLnB1c2goeyBzdWJzY3JpcHRpb25rZXk6IGMuc3Vic2NyaXB0aW9ua2V5LCBkZXNjcmlwdGlvbjogYy5kZXNjcmlwdGlvbiwgc3RhdHVzOiBjLnN0YXR1cywgaW5zdGFuY2VrZXk6IGMuaW5zdGFuY2VrZXkgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZW1wLmxlbmd0aCA+IDApIHRoaXMuY2FjaGVkQ29tcGFuaWVzW3VzZXIgYXMgYW55XSA9IHRlbXA7XG5cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpdmF0ZSBjb21wYXJlQ29tcGFuaWVzKGE6IFN1YnNjcmlwdGlvbiwgYjogU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IG5hbWVBID0gYS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBuYW1lQiA9IGIuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHJldHVybiAxO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnb1RvRm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICAgIHRoaXMuZm9yZ290cGFzc3dvcmQodGhpcy5mb3JnZXRQYXNzd29yZCwgdGhpcy5lbnRlckFjY291bk5hbWUsIHRoaXMuYWNjb3VudE5hbWUpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGZvcmdvdHBhc3N3b3JkKFRpdGxlOiBzdHJpbmcsIE1lc3NhZ2U6IHN0cmluZywgUGxhY2VIb2xkZXI6IHN0cmluZykge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRm9yZ290UGFzc3dvcmRDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBUaXRsZSxcbiAgICAgICAgICAgICAgICBNZXNzYWdlLFxuICAgICAgICAgICAgICAgIFBsYWNlSG9sZGVyLFxuICAgICAgICAgICAgICAgIFRleHRWYWx1ZTogdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoYXN5bmMgKGRhdGE6IHsgVGV4dFZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChkYXRhLlRleHRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEuVGV4dFZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnSW5zZXJpc2NpIHVuIG5vbWUgdXRlbnRlIHZhbGlkbyc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdXcml0ZSBhIHZhbGlkIGFjY291bnQgbmFtZSc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFjY25hbWU6IHN0cmluZyA9IGRhdGEuVGV4dFZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5yZXNldHBhc3N3b3JkKGFjY25hbWUpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaVxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ0NvbnRyb2xsYSBsYSB0dWEgZS1tYWlsIGUgc2VndWkgbGUgaXN0cnV6aW9uaSBwZXIgcmVpbXBvc3RhcmUgbGEgcGFzc3dvcmQuJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICdDaGVjayB5b3VyIGVtYWlsIGFuZCBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyB0byByZXNldCB5b3VyIHBhc3N3b3JkLic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IHJlc3VsdC5NZXNzYWdlICsgJyAoQ29kZTogJyArIHJlc3VsdC5Db2RlICsgJykuJztcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpc0Ryb3BEb3duQ2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5kcm9wRG93bklzQ2xpY2tlZCA9ICF0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xuICAgICAgICB0aGlzLmNvbWJvQm94SXNDbGlja2VkID0gdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcbiAgICAgICAgaWYgKHRoaXMuZHJvcERvd25Jc0NsaWNrZWQgJiYgdGhpcy5jb21ib0JveElzQ2xpY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5pY29uSXNDbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0b2dnbGUoZHJvcGRvd246IGFueSkge1xuICAgICAgICB0aGlzLmRyb3BEb3duSXNDbGlja2VkID0gIXRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XG4gICAgICAgIHRoaXMuaWNvbklzQ2xpY2tlZCA9IHRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XG4gICAgICAgIHRoaXMuZHJvcGRvd24gPSBkcm9wZG93bjtcbiAgICAgICAgaWYgKHRoaXMuZHJvcERvd25Jc0NsaWNrZWQpIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbHRlcm5hdGl2ZU1ldGhvZHModHdvRmFjdG9yVHlwZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLk9MRCkge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5PTERyZXNlbmRPVFAodGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsIHR3b0ZhY3RvclR5cGUgIT0gbnVsbCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChvcFJlczogT3BlcmF0aW9uUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFJlcy5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mby5Ud29GYWN0b3JUeXBlID0gdHdvRmFjdG9yVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVyck9MRCkgPT4ge30sXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5yZXNlbmRPVFAyKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLCB0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSUQsIHR3b0ZhY3RvclR5cGUpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChvcFJlczogT3BlcmF0aW9uUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wUmVzLlJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm90cEluZm8uVHdvRmFjdG9yVHlwZSA9IHR3b0ZhY3RvclR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnIpID0+IHt9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdvVG9TdG9yZSgpIHtcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5hdXRoU2VydmljZS5nZXRTdG9yZVVybCgpKTtcbiAgICB9XG59XG5cbi8vIHdvcmthcm91bmQgZm9yIGNocm9taXVtIGJ1ZyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNTI1MjdcbmZ1bmN0aW9uIHdlYmtpdEF1dG9maWxsV29ya2Fyb3VuZCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Oi13ZWJraXQtYXV0b2ZpbGwnKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChlbDogYW55KSA9PiAoZWwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPSAnay1mbG9hdGluZy1sYWJlbC1jb250YWluZXInKSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gbm8gd2Via2l0IGJyb3dzZXJcbiAgICAgICAgfVxuICAgIH0sIDEwMDApO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGhhc0F1dG9maWxsKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Oi13ZWJraXQtYXV0b2ZpbGwnKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJsb2dpbi1jb250YWluZXJcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgYmFja2dyb3VuZFVSTCArICcpJyB9XCI+XG4gICAgPGRpdiBjbGFzcz1cImxvZ2luXCIgc3R5bGU9XCJ6LWluZGV4OiAxXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBtYXQtY2FyZC1pbWFnZSBzdHlsZT1cIndpZHRoOiA2MCVcIiBzcmM9XCJ7eyBsb2dvVVJMIH19XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWFyZ2luLWgxIHRpdGxlXCI+e3sgd2VsY29tZSB9fTwvaDE+XG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpc0V4cGlyZWRTZXNzaW9uXCIgY2xhc3M9XCJsb2dpbi1leHBpcmVkLXN1YnRpdGxlIGRlc2NyaXB0aW9uXCI+e3sgaWRsZVRpbWVvdXRNZXNzYWdlIH19PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBlbnRlckNyZWRlbnRpYWxzIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidmFsaWRhdGUgJiYgIW90cFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1hcmdpbi1oMSB0aXRsZVwiPnt7IGNob29zZVN1YnNjcmlwdGlvbiB9fTwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IGFjY291bnROYW1lIH19OiB7eyBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJvdHBcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtYXJnaW4taDEgdGl0bGVcIj57eyBvdHBUaXRsZSB9fTwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHN0eWxlPVwid2lkdGg6IDM1MHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IG90cE1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDFcIj5zbXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSAyXCI+ZS1tYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gNFwiPnt7IGF1dGhBcHBUZXh0IH19PC9zcGFuPlxuXHRcdCAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gbnVsbFwiPnNtcy9lLW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbFxuICAgICAgICAgICAgICAgICAgICBbdGV4dF09XCJhY2NvdW50TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIXZhbGlkYXRlICYmICFvdHBcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnYm9yZGVyLWJvdHRvbSdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBrZW5kb1RleHRCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWNjb3VudE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3QuYWNjb3VudE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2Vycm9yLXN0YXR1cycgOiAnbm9ybWFsLXN0YXRlJ1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhdmFsaWRhdGUgJiYgIW90cFwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yJyA6ICdib3JkZXItYm90dG9tJ1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlbmRvVGV4dEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImxvZ2luUmVxdWVzdC5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJoaWRlID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZSA9ICFoaWRlXCIgKm5nSWY9XCJoaWRlID09PSB0cnVlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHkgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZSA9ICFoaWRlXCIgKm5nSWY9XCJoaWRlID09PSBmYWxzZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5X29mZiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiICpuZ0lmPVwic3Vic2NyaXB0aW9uU2VsZWN0aW9uICYmIHZhbGlkYXRlICYmICFvdHBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJ7eyBzdWJzY3JpcHRpb24gfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiW2F1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yJyA6ICcnLCBkcm9wRG93bklzQ2xpY2tlZCA/ICcnIDogJ2JvcmRlci1ib3R0b20nXVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZW5kby1kcm9wZG93bmxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkRyb3BEb3duU3Vic2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwibG9naW5TdWJzY3JpcHRpb25zPy5sZW5ndGggPD0gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwibG9naW5TdWJzY3JpcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3Vic2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVGaWVsZD1cInN1YnNjcmlwdGlvbmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQcmltaXRpdmU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia2VuZG8tZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uU3ViQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJpc0Ryb3BEb3duQ2xpY2tlZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUga2VuZG9Ecm9wRG93bkxpc3RJdGVtVGVtcGxhdGUgbGV0LWRhdGFJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyLmRhdGEtc3ViPVwie3sgZGF0YUl0ZW0uc3Vic2NyaXB0aW9ua2V5IH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIuZGF0YS1kZXNjcmlwdGlvbj1cInt7IGRhdGFJdGVtLmRlc2NyaXB0aW9uIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIuZGF0YS1pbnN0YW5jZT1cInt7IGRhdGFJdGVtLmluc3RhbmNla2V5IH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZGF0YUl0ZW0uZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwva2VuZG8tZHJvcGRvd25saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkRyb3BEb3duU3Vic2NyaXB0aW9uQXJyb3dVcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZShkcm9wZG93bilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZHJvcERvd25Jc0NsaWNrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIGljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93X2NpcmNsZV91cFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkRyb3BEb3duU3Vic2NyaXB0aW9uQXJyb3dEb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlKGRyb3Bkb3duKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhZHJvcERvd25Jc0NsaWNrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIGljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93X2NpcmNsZV9kb3duXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5zdGFuY2VrZXlcIiBkYXRhLXRlc3Q9XCJsb2dpblBhcmFncmFwaEluc3RhbmNlS2V5XCIgKm5nSWY9XCJsb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID4gM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1YnNjcmlwdGlvbiBrZXk6IHt7IGxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgfX0ge3sgaW5zdGFuY2VrZXkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbFxuICAgICAgICAgICAgICAgICAgICBbdGV4dF09XCJjb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3InIDogJ2JvcmRlci1ib3R0b20nXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBrZW5kb1RleHRCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWNjb3VudE5hbWVPdHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROYW1lT3RwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImhpZGVPdHAgPyAncGFzc3dvcmQnIDogJ3RleHQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vcm1hbC1zdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlT3RwID0gIWhpZGVPdHBcIiAqbmdJZj1cImhpZGVPdHAgPT09IHRydWVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlT3RwID0gIWhpZGVPdHBcIiAqbmdJZj1cImhpZGVPdHAgPT09IGZhbHNlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHlfb2ZmIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mb3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcHMtbG9jayBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIiAqbmdJZj1cImNhcHNMb2NrT25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYmxvY01haXVzYyB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1lcnJvciBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIiAqbmdJZj1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZVwiIHN0eWxlPVwid2hpdGUtc3BhY2U6IHByZS13cmFwO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyBhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mbyBwYW5lbCBmbGV4LWNlbnRlclwiICpuZ0lmPVwiYXV0aFNlcnZpY2Uub2tNZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGF1dGhTZXJ2aWNlLm9rTWVzc2FnZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwib3RwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxwIGNsYXNzPVwibGlua1wiIGRhdGEtdGVzdD1cImxvZ2luUmVzZW5kT3RwXCJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYXV0aFNlcnZpY2UucmVzZW5kT1RQKGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSwgbG9naW5SZXF1ZXN0LnByb2Nlc3NJRCwgYWx0ZXJuYXRpdmUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHU+e3sgcmVzZW5kT1RQcExhYmVsIH19PC91PlxuICAgICAgICAgICAgICAgICAgPC9wPiAtLT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnRcIiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IFRPVFBEZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluayBwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpblJlc2VuZE90cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFsdGVybmF0aXZlTWV0aG9kcyhvdHBJbmZvLlR3b0ZhY3RvclR5cGUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkFsdGVybmF0aXZlT3RwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSAhPT0gNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IHJlc2VuZE9UUExhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDFcIj5zbXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDJcIj5lLW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDRcIj57eyBjaG9zZW5BdXRoQXBwIH19PC9zcGFuPlxuXHRcdFx0ICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSBudWxsXCI+c21zL2UtbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1oZWFkZXJcIiAqbmdJZj1cIm90cEluZm8uVE9UUENvbmZpZ3VyZWQgfHwgb3RwSW5mby5Nb2JpbGVQaG9uZU5yOyBlbHNlIG9ubHlPbmVNZXRob2RDb25maWd1cmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW46IDEwcHggMDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMwMDU4OTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIihvdHBJbmZvLkVtYWlsICYmIG90cEluZm8uVE9UUENvbmZpZ3VyZWQpIHx8IG90cEluZm8uTW9iaWxlUGhvbmVOclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBvdHBUZXh0IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluayBwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgIT09IDEgJiYgb3RwSW5mby5Nb2JpbGVQaG9uZU5yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFsdGVybmF0aXZlTWV0aG9kcygxKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWx0ZXJuYXRpdmVTbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgb3RwUmVxdWVzdENvZGUgfX0gU01TPC91XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluayBwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgIT09IDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWx0ZXJuYXRpdmVNZXRob2RzKDIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZVNtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBvdHBSZXF1ZXN0Q29kZSB9fSBFLW1haWw8L3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rIHBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm90cEluZm8uVE9UUENvbmZpZ3VyZWQgJiYgb3RwSW5mby5Ud29GYWN0b3JUeXBlICE9PSA0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFsdGVybmF0aXZlTWV0aG9kcyg0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWx0ZXJuYXRpdmVBcHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgdXNlQXV0aEFwcCB9fTwvdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNvbmx5T25lTWV0aG9kQ29uZmlndXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxpbmtcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMDA1ODkwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG9uZU1ldGhvZE9ubHkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHUgY2xhc3M9XCJwb2ludGVyXCIgKGNsaWNrKT1cImdvVG9TdG9yZSgpXCI+IHt7IGFsdGVybmF0aXZlTWV0aG9kIH19IDwvdT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMTBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaW5rXCIgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZU90cFwiPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwiYWx0ZXJuYXRpdmVcIiBuYW1lPVwiYWx0ZXJuYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdHJhbnNsYXRlPnt7IGFsdGVybmF0aXZlbGJsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8dT57eyBhbHRlcm5hdGl2ZWxibCB9fTwvdT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwYWRkaW5nOiAwIDFweDsgbWFyZ2luLXRvcDogNjBweFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gZGF0YS10ZXN0PVwibG9naW5CdXR0b25cIiBjbGFzcz1cImJ1dHRvbnMgbG9naW4tYnV0dG9uXCIgKGNsaWNrKT1cImxvZ2luKClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRCdXR0b24oKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXRlc3Q9XCJsb2dpbkxvYWRpbmdCdXR0b25cIiBjbGFzcz1cImstaWNvbiBrLWktbG9hZGluZ1wiICpuZ0lmPVwibG9hZGluZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhbG9hZGluZ1wiPnt7IGJ1dHRvblRleHQgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiAqbmdJZj1cIighbG9hZGluZyAmJiB2YWxpZGF0ZSkgfHwgb3RwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBkYXRhLXRlc3Q9XCJsb2dpbkJhY2tCdXR0b25cIiBjbGFzcz1cImJ1dHRvbnMgYmFjay1idXR0b25cIiAoY2xpY2spPVwiYmFjaygpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBidXR0b25CYWNrIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd1NpZ25VcFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2lnbnVwXCIgZGF0YS10ZXN0PVwibG9naW5TaWduVXBcIiAoY2xpY2spPVwibmV3VXNlcigpXCI+U2lnblVwIGhlcmUhPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIXZhbGlkYXRlICYmICFvdHBcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDEwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9yZ290cHdkXCIgZGF0YS10ZXN0PVwibG9naW5Gb3Jnb3RQYXNzd29yZFwiIChjbGljayk9XCJnb1RvRm9yZ290UGFzc3dvcmQoKVwiPlxuICAgICAgICAgICAgICAgIDx1Pnt7IGZvcmdldFBhc3N3b3JkIH19PC91PlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIm90cFwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgbWFyZ2luLXRvcDogMTBweDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb3Jnb3Rwd2RcIiBkYXRhLXRlc3Q9XCJsb2dpbk1hbmFnZU1ldGhvZHNcIj5cbiAgICAgICAgICAgICAgICA8dSBjbGFzcz1cInBvaW50ZXJcIiAoY2xpY2spPVwiZ29Ub1N0b3JlKClcIj57eyBtYW5hZ2VNZXRob2RzIH19PC91PlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDA7IHdpZHRoOiAxMDAlOyB6LWluZGV4OiAwXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiY29weXJpZ2h0IGNvcHlyaWdodC1hYnNcIj5Mb2dpbiB7eyBsaWJfdmVyc2lvbiB9fSAyMDE3IC0ge3sgY3VycmVudFllYXIgfX0sIFp1Y2NoZXR0aSBzLnAuYS48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==