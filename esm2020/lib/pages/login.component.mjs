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
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 27)(1, "input", 28);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_10_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.loginRequest.accountName = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_10_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.keyUpFunction($event); });
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
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_11_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.hide = !ctx_r27.hide; });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_11_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_11_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.hide = !ctx_r29.hide; });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 29)(1, "input", 30);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_11_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.loginRequest.password = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_11_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.keyUpFunction($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, TbLoginComponent_kendo_floatinglabel_11_span_2_Template, 2, 0, "span", 31);
    i0.ɵɵtemplate(3, TbLoginComponent_kendo_floatinglabel_11_span_3_Template, 2, 0, "span", 31);
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
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r41); i0.ɵɵnextContext(); const _r34 = i0.ɵɵreference(3); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.toggle(_r34); });
    i0.ɵɵtext(1, " arrow_circle_up ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r43); i0.ɵɵnextContext(); const _r34 = i0.ɵɵreference(3); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.toggle(_r34); });
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
const _c1 = function (a0, a1) { return [a0, a1]; };
function TbLoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "kendo-floatinglabel", 27)(2, "kendo-dropdownlist", 34, 35);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.loginRequest.subscriptionKey = $event; })("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(); return ctx_r46.onSubChange($event); })("click", function TbLoginComponent_div_12_Template_kendo_dropdownlist_click_2_listener() { i0.ɵɵrestoreView(_r45); const ctx_r47 = i0.ɵɵnextContext(); return ctx_r47.isDropDownClicked(); });
    i0.ɵɵtemplate(4, TbLoginComponent_div_12_ng_template_4_Template, 2, 4, "ng-template", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TbLoginComponent_div_12_span_5_Template, 2, 0, "span", 37);
    i0.ɵɵtemplate(6, TbLoginComponent_div_12_span_6_Template, 2, 0, "span", 38);
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
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(2); return ctx_r50.hideOtp = !ctx_r50.hideOtp; });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.hideOtp = !ctx_r52.hideOtp; });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 27)(1, "input", 43);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_13_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.inputValue = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_13_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r56 = i0.ɵɵnextContext(); return ctx_r56.keyUpFunction($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, TbLoginComponent_kendo_floatinglabel_13_span_2_Template, 2, 0, "span", 31);
    i0.ɵɵtemplate(3, TbLoginComponent_kendo_floatinglabel_13_span_3_Template, 2, 0, "span", 31);
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
    i0.ɵɵlistener("click", function TbLoginComponent_div_18_u_3_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(2); return ctx_r66.alternativeMethods(ctx_r66.otpInfo.TwoFactorType); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TbLoginComponent_div_18_u_3_span_2_Template, 2, 0, "span", 4);
    i0.ɵɵtemplate(3, TbLoginComponent_div_18_u_3_span_3_Template, 2, 0, "span", 4);
    i0.ɵɵtemplate(4, TbLoginComponent_div_18_u_3_span_4_Template, 2, 1, "span", 4);
    i0.ɵɵtemplate(5, TbLoginComponent_div_18_u_3_span_5_Template, 2, 0, "span", 4);
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
    i0.ɵɵlistener("click", function TbLoginComponent_div_18_div_4_u_2_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r73); const ctx_r72 = i0.ɵɵnextContext(3); return ctx_r72.alternativeMethods(1); });
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
    i0.ɵɵlistener("click", function TbLoginComponent_div_18_div_4_u_3_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r75); const ctx_r74 = i0.ɵɵnextContext(3); return ctx_r74.alternativeMethods(2); });
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
    i0.ɵɵlistener("click", function TbLoginComponent_div_18_div_4_u_4_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r77); const ctx_r76 = i0.ɵɵnextContext(3); return ctx_r76.alternativeMethods(4); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r71.useAuthApp);
} }
function TbLoginComponent_div_18_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, TbLoginComponent_div_18_div_4_p_1_Template, 2, 1, "p", 55);
    i0.ɵɵtemplate(2, TbLoginComponent_div_18_div_4_u_2_Template, 2, 1, "u", 56);
    i0.ɵɵtemplate(3, TbLoginComponent_div_18_div_4_u_3_Template, 2, 1, "u", 56);
    i0.ɵɵtemplate(4, TbLoginComponent_div_18_div_4_u_4_Template, 2, 1, "u", 57);
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
    i0.ɵɵlistener("click", function TbLoginComponent_div_18_ng_template_5_Template_u_click_2_listener() { i0.ɵɵrestoreView(_r79); const ctx_r78 = i0.ɵɵnextContext(2); return ctx_r78.goToStore(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r61 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r61.oneMethodOnly, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r61.alternativeMethod, " ");
} }
function TbLoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 48);
    i0.ɵɵtemplate(2, TbLoginComponent_div_18_p_2_Template, 2, 1, "p", 49);
    i0.ɵɵtemplate(3, TbLoginComponent_div_18_u_3_Template, 6, 5, "u", 50);
    i0.ɵɵtemplate(4, TbLoginComponent_div_18_div_4_Template, 5, 4, "div", 51);
    i0.ɵɵtemplate(5, TbLoginComponent_div_18_ng_template_5_Template, 4, 2, "ng-template", null, 52, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r60 = i0.ɵɵreference(6);
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r10.otpInfo.TwoFactorType === 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.otpInfo.TwoFactorType !== 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.otpInfo.TOTPConfigured || ctx_r10.otpInfo.MobilePhoneNr)("ngIfElse", _r60);
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
    i0.ɵɵlistener("click", function TbLoginComponent_div_24_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r81); const ctx_r80 = i0.ɵɵnextContext(); return ctx_r80.back(); });
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
    i0.ɵɵlistener("click", function TbLoginComponent_div_26_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r83); const ctx_r82 = i0.ɵɵnextContext(); return ctx_r82.newUser(); });
    i0.ɵɵtext(2, "SignUp here!");
    i0.ɵɵelementEnd()();
} }
function TbLoginComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66)(1, "p", 67);
    i0.ɵɵlistener("click", function TbLoginComponent_div_27_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r85); const ctx_r84 = i0.ɵɵnextContext(); return ctx_r84.goToForgotPassword(); });
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
    i0.ɵɵlistener("click", function TbLoginComponent_div_28_Template_u_click_2_listener() { i0.ɵɵrestoreView(_r87); const ctx_r86 = i0.ɵɵnextContext(); return ctx_r86.goToStore(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r16.manageMethods);
} }
const _c2 = function (a0) { return { "background-image": a0 }; };
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
            const startDate = this.convertUTCDateToLocalDate(date);
            return startDate.toLocaleDateString(navigator.language, { year: 'numeric', month: 'long', day: 'numeric' });
            //return `${startDate.getDate()}-${tempDate.getMonth() + 1}-${tempDate.getFullYear()}`;
        };
        // ---------------------------------------------------------------------------
        this.FormatStartDateString = (date) => {
            const startDate = this.convertUTCDateToLocalDate(date);
            if (this.languageIT)
                return startDate.toLocaleString('it-IT', { hour: 'numeric', minute: 'numeric', hour12: false });
            else
                return startDate.toLocaleString(navigator.language, { hour: 'numeric', minute: 'numeric', hour12: true });
            //const zeroes = new Array(2 + 1).join('0');
            //var m =    (zeroes + startDate.getMinutes()).slice(-2);
            // var h =    (zeroes + startDate.getHours()).slice(-2);
            // return  `${h}:${m}`;
        };
        //todo,
        //am / pm? sel 'intervallo scatta al giorno dopo, forse dovrei dire il 4maggio dalle 10pm
        //(o 22, ma dipende dall impostazione di cultura)  al 4 (o 5)  maggio alle 11 ( o alle 01 am) ) al
        // ---------------------------------------------------------------------------
        this.FormatEndDateString = (date, durationMins) => {
            const tempDate = this.convertUTCDateToLocalDate(date);
            var finalDate = new Date(tempDate.getTime() + durationMins * 60000);
            if (this.languageIT)
                return finalDate.toLocaleString('it-IT', { hour: 'numeric', minute: 'numeric', hour12: false });
            else
                return finalDate.toLocaleString(navigator.language, { hour: 'numeric', minute: 'numeric', hour12: true });
            //const zeroes = new Array(2 + 1).join('0');
            //var m =    (zeroes + finalDate.getMinutes()).slice(-2);
            //var h =    (zeroes + finalDate.getHours()).slice(-2);
            //return  `${h}:${m}`;
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
        authService.reLoginAfterOTP.subscribe(() => {
            //'login subscribed');
            this.login();
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
        //console.log('login requested');
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
            //console.log('calling prelogin ');
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
            //console.log('calling login ');
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
}
/** @nocollapse */ /** @nocollapse */ TbLoginComponent.ɵfac = function TbLoginComponent_Factory(t) { return new (t || TbLoginComponent)(i0.ɵɵdirectiveInject(i1.TbAuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.MatDialog), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ /** @nocollapse */ TbLoginComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: TbLoginComponent, selectors: [["tb-login"]], viewQuery: function TbLoginComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
    } }, decls: 32, vars: 24, consts: [[1, "login-container", 3, "ngStyle"], [1, "login", 2, "z-index", "1"], [1, "login-header"], ["mat-card-image", "", 2, "width", "60%", 3, "src"], [4, "ngIf"], [1, "login-form"], [3, "text", "ngClass", 4, "ngIf"], ["text", "Password", 3, "ngClass", 4, "ngIf"], ["class", "form-control", 4, "ngIf"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", "style", "white-space: pre-wrap;", 4, "ngIf"], ["class", "login-info panel flex-center", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "60px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", "data-test", "loginButton", 1, "buttons", "login-button", 3, "disabled", "click"], ["data-test", "loginLoadingButton", "class", "k-icon k-i-loading", 4, "ngIf"], ["class", "login-footer", 4, "ngIf"], [1, "login-footer"], ["style", "display: flex; margin-top: 10px; justify-content: flex-end", 4, "ngIf"], [2, "position", "absolute", "bottom", "0", "width", "100%", "z-index", "0"], [1, "copyright", "copyright-abs"], [1, "margin-h1", "title"], ["class", "login-expired-subtitle description", 4, "ngIf"], [1, "description"], [1, "login-expired-subtitle", "description"], [1, "description", 2, "width", "350px"], [3, "text", "ngClass"], ["kendoTextBox", "", "data-test", "loginAccountName", "name", "accountName", "type", "text", 3, "ngModel", "ngClass", "ngModelChange", "keyup"], ["text", "Password", 3, "ngClass"], ["kendoTextBox", "", "data-test", "loginPassword", "name", "password", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "ngModelChange", "keyup"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], [1, "material-icons", "icon", 3, "click"], [1, "form-control"], ["data-test", "loginDropDownSubscription", "name", "subscription", "textField", "description", "valueField", "subscriptionkey", "valuePrimitive", "true", 1, "kendo-dropdown", 3, "disabled", "data", "ngModel", "ngModelChange", "click"], ["dropdown", ""], ["kendoDropDownListItemTemplate", ""], ["data-test", "loginDropDownSubscriptionArrowUp", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowDown", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["class", "instancekey", "data-test", "loginParagraphInstanceKey", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowUp", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginDropDownSubscriptionArrowDown", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginParagraphInstanceKey", 1, "instancekey"], ["kendoTextBox", "", "data-test", "loginAccountNameOtp", "name", "accountNameOtp", "type", "password", 1, "normal-state", 3, "ngModel", "type", "ngModelChange", "keyup"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5", 2, "white-space", "pre-wrap"], [1, "login-info", "panel", "flex-center"], [2, "display", "flex", "justify-content", "flex-end", "flex-direction", "column"], ["class", "description", "style", "margin-bottom: 0px !important", 4, "ngIf"], ["class", "link pointer", "data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 3, "click", 4, "ngIf"], ["class", "login-header", 4, "ngIf", "ngIfElse"], ["onlyOneMethodConfigured", ""], [1, "description", 2, "margin-bottom", "0px !important"], ["data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 1, "link", "pointer", 3, "click"], ["style", "margin: 10px 0; font-weight: 600; color: #005890", 4, "ngIf"], ["class", "link pointer", "data-test", "loginAlternativeSms", 3, "click", 4, "ngIf"], ["class", "link pointer", "data-test", "loginAlternativeApp", 3, "click", 4, "ngIf"], [2, "margin", "10px 0", "font-weight", "600", "color", "#005890"], ["data-test", "loginAlternativeSms", 1, "link", "pointer", 3, "click"], ["data-test", "loginAlternativeApp", 1, "link", "pointer", 3, "click"], [1, "link", 2, "margin-top", "10px", "font-weight", "600", "color", "#005890"], [1, "pointer", 3, "click"], ["data-test", "loginLoadingButton", 1, "k-icon", "k-i-loading"], ["kendoButton", "", "data-test", "loginBackButton", 1, "buttons", "back-button", 3, "click"], ["data-test", "loginSignUp", 1, "signup", 3, "click"], [2, "display", "flex", "margin-top", "10px", "justify-content", "flex-end"], ["data-test", "loginForgotPassword", 1, "forgotpwd", 3, "click"], ["data-test", "loginManageMethods", 1, "forgotpwd"]], template: function TbLoginComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(14, "div", 9);
        i0.ɵɵtemplate(15, TbLoginComponent_div_15_Template, 3, 1, "div", 10);
        i0.ɵɵtemplate(16, TbLoginComponent_div_16_Template, 3, 1, "div", 11);
        i0.ɵɵtemplate(17, TbLoginComponent_div_17_Template, 3, 1, "div", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(18, TbLoginComponent_div_18_Template, 7, 4, "div", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(19, "div", 13)(20, "div", 14)(21, "button", 15);
        i0.ɵɵlistener("click", function TbLoginComponent_Template_button_click_21_listener() { return ctx.login(); });
        i0.ɵɵtemplate(22, TbLoginComponent_span_22_Template, 1, 0, "span", 16);
        i0.ɵɵtemplate(23, TbLoginComponent_span_23_Template, 2, 1, "span", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(24, TbLoginComponent_div_24_Template, 4, 1, "div", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 18);
        i0.ɵɵtemplate(26, TbLoginComponent_div_26_Template, 3, 0, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(27, TbLoginComponent_div_27_Template, 4, 1, "div", 19);
        i0.ɵɵtemplate(28, TbLoginComponent_div_28_Template, 4, 1, "div", 19);
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
    } }, directives: [i4.NgStyle, i4.NgIf, i5.ɵNgNoValidate, i5.NgControlStatusGroup, i5.NgForm, i6.FloatingLabelComponent, i4.NgClass, i7.TextBoxDirective, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i8.DropDownListComponent, i8.ItemTemplateDirective], styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list[_ngcontent-%COMP%]{background:#F4F4F4;color:#005890;max-height:100px;width:370px!important}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{background:#bfcdd5}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar:hover{background:#d9d9d9}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#6cafd1}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#005890}.k-list[_ngcontent-%COMP%]   .k-list-item.k-selected[_ngcontent-%COMP%]{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%]:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width: 490px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:323px!important}}@media screen and (max-width: 425px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:273px!important}}@media screen and (max-width: 375px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:217px!important}}.k-list-md[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%], .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}.k-list-item-text[_ngcontent-%COMP%]{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;line-height:20px;margin-bottom:30px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.link[_ngcontent-%COMP%], tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:20px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#E7481C;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#E7481C}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4AB679}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:#C0C0C0}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#E77B2D}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#FF9E18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:#808080}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9F9F9F}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4AB679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68B388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#D03C13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#E7481C}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}  .mat-dialog-container{color:#005890!important;background:white!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9F9F9F}  .mat-dialog-container .login-footer .back-button{background:#808080}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:#C0C0C0}  .mat-dialog-container .login-footer .ok-button{background:#4AB679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68B388}  .k-floating-label-container{width:100%;margin:8px 0}  .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea:focus{background-color:#fff!important}  .k-floating-label-container .k-textbox::-moz-selection,   .k-floating-label-container .k-input::-moz-selection,   .k-floating-label-container .k-textarea::-moz-selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-textbox::selection,   .k-floating-label-container .k-input::selection,   .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-picker-md .k-input-inner{background:white!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}  .k-floating-label-container .k-picker{border-width:0px;border-style:unset}  .k-floating-label-container .k-picker:focus-within{box-shadow:none}  .k-floating-label-container .k-picker:focus{box-shadow:none}  .k-floating-label-container:after{background-color:#8ee2ff;height:1px}  .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}  .k-floating-label-container .k-dropdown{border:none;background:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0B85CE}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}  html,   body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}tb-login[_nghost-%COMP%]{font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}}@media screen and (min-width: 576px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:450px}}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .upicon[_ngcontent-%COMP%]{transform:rotate(90deg);padding:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .downicon[_ngcontent-%COMP%]{transform:rotate(270deg)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .k-i-loading[_ngcontent-%COMP%]{font-size:20px}tb-login[_nghost-%COMP%]   p.instancekey[_ngcontent-%COMP%]{font-size:9px;font-weight:300;text-indent:1px;color:#005890}tb-login[_nghost-%COMP%]   p.copyright[_ngcontent-%COMP%]{font-size:10px;font-weight:300;margin:0;color:#fff}tb-login[_nghost-%COMP%]   p.copyright-abs[_ngcontent-%COMP%]{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{cursor:pointer;text-align:right}tb-login[_nghost-%COMP%]   p.signup[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}tb-login[_nghost-%COMP%]   .margin-h1[_ngcontent-%COMP%]{margin-left:-2px;margin-top:20px}tb-login[_nghost-%COMP%]   .margin-p[_ngcontent-%COMP%]{margin-left:-1.5px;margin-top:-10px}tb-login[_nghost-%COMP%]   .login-expired-subtitle[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}tb-login[_nghost-%COMP%]   .login-chooseSubscription[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-size:x-large}}tb-login[_nghost-%COMP%]     .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, tb-login[_nghost-%COMP%]   .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#005890}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLoginComponent, [{
        type: Component,
        args: [{ selector: 'tb-login', template: "<div class=\"login-container\" [ngStyle]=\"{ 'background-image': 'url(' + backgroundURL + ')' }\">\r\n    <div class=\"login\" style=\"z-index: 1\">\r\n        <div class=\"login-header\">\r\n            <div>\r\n                <img mat-card-image style=\"width: 60%\" src=\"{{ logoURL }}\" />\r\n            </div>\r\n            <div *ngIf=\"!validate && !otp\">\r\n                <h1 class=\"margin-h1 title\">{{ welcome }}</h1>\r\n                <p *ngIf=\"isExpiredSession\" class=\"login-expired-subtitle description\">{{ idleTimeoutMessage }}</p>\r\n                <p class=\"description\">{{ enterCredentials }}</p>\r\n            </div>\r\n            <div *ngIf=\"validate && !otp\">\r\n                <h1 class=\"margin-h1 title\">{{ chooseSubscription }}</h1>\r\n                <p class=\"description\">{{ accountName }}: {{ loginRequest.accountName }}</p>\r\n            </div>\r\n            <div *ngIf=\"otp\">\r\n                <h1 class=\"margin-h1 title\">{{ otpTitle }}</h1>\r\n                <p class=\"description\" style=\"width: 350px\">\r\n                    {{ otpMessage }}\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ authAppText }}</span>\r\n\t\t    <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <form>\r\n            <div class=\"login-form\">\r\n                <kendo-floatinglabel\r\n                    [text]=\"accountName\"\r\n                    *ngIf=\"!validate && !otp\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        data-test=\"loginAccountName\"\r\n                        [(ngModel)]=\"loginRequest.accountName\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"accountName\"\r\n                        type=\"text\"\r\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n                    />\r\n                </kendo-floatinglabel>\r\n\r\n                <kendo-floatinglabel\r\n                    text=\"Password\"\r\n                    *ngIf=\"!validate && !otp\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        data-test=\"loginPassword\"\r\n                        [(ngModel)]=\"loginRequest.password\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"password\"\r\n                        [type]=\"hide ? 'password' : 'text'\"\r\n                        autocomplete=\"current-password\"\r\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n                    />\r\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === true\" class=\"material-icons icon\"> visibility </span>\r\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === false\" class=\"material-icons icon\"> visibility_off </span>\r\n                </kendo-floatinglabel>\r\n\r\n                <div class=\"form-control\" *ngIf=\"subscriptionSelection && validate && !otp\">\r\n                    <kendo-floatinglabel\r\n                        text=\"{{ subscription }}\"\r\n                        [ngClass]=\"[authService.errorMessage ? 'border-bottom-error' : '', dropDownIsClicked ? '' : 'border-bottom']\"\r\n                    >\r\n                        <kendo-dropdownlist\r\n                            #dropdown\r\n                            data-test=\"loginDropDownSubscription\"\r\n                            [disabled]=\"loginSubscriptions?.length <= 1\"\r\n                            [data]=\"loginSubscriptions\"\r\n                            name=\"subscription\"\r\n                            textField=\"description\"\r\n                            valueField=\"subscriptionkey\"\r\n                            valuePrimitive=\"true\"\r\n                            [(ngModel)]=\"loginRequest.subscriptionKey\"\r\n                            class=\"kendo-dropdown\"\r\n                            (ngModelChange)=\"onSubChange($event)\"\r\n                            (click)=\"isDropDownClicked()\"\r\n                        >\r\n                            <ng-template kendoDropDownListItemTemplate let-dataItem>\r\n                                <div\r\n                                    attr.data-sub=\"{{ dataItem.subscriptionkey }}\"\r\n                                    attr.data-description=\"{{ dataItem.description }}\"\r\n                                    attr.data-instance=\"{{ dataItem.instancekey }}\"\r\n                                >\r\n                                    {{ dataItem.description }}\r\n                                </div>\r\n                            </ng-template>\r\n                        </kendo-dropdownlist>\r\n                        <span\r\n                            data-test=\"loginDropDownSubscriptionArrowUp\"\r\n                            (click)=\"toggle(dropdown)\"\r\n                            *ngIf=\"dropDownIsClicked\"\r\n                            class=\"material-symbols-rounded icon\"\r\n                        >\r\n                            arrow_circle_up\r\n                        </span>\r\n                        <span\r\n                            data-test=\"loginDropDownSubscriptionArrowDown\"\r\n                            (click)=\"toggle(dropdown)\"\r\n                            *ngIf=\"!dropDownIsClicked\"\r\n                            class=\"material-symbols-rounded icon\"\r\n                        >\r\n                            arrow_circle_down\r\n                        </span>\r\n                    </kendo-floatinglabel>\r\n                    <div>\r\n                        <p class=\"instancekey\" data-test=\"loginParagraphInstanceKey\" *ngIf=\"loginSubscriptions.length > 3\">\r\n                            Subscription key: {{ loginRequest.subscriptionKey }} {{ instancekey }}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <kendo-floatinglabel\r\n                    [text]=\"code\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                    *ngIf=\"otp\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        data-test=\"loginAccountNameOtp\"\r\n                        [(ngModel)]=\"inputValue\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"accountNameOtp\"\r\n                        [type]=\"hideOtp ? 'password' : 'text'\"\r\n                        type=\"password\"\r\n                        class=\"normal-state\"\r\n                    />\r\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === true\" class=\"material-icons icon\"> visibility </span>\r\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === false\" class=\"material-icons icon\"> visibility_off </span>\r\n                </kendo-floatinglabel>\r\n\r\n                <div class=\"login-infos\">\r\n                    <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\r\n                        <p class=\"no-margin\">{{ blocMaiusc }}</p>\r\n                    </div>\r\n                    <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"authService.errorMessage\" style=\"white-space: pre-wrap;\">\r\n                        <p class=\"no-margin\">{{ authService.errorMessage }}</p>\r\n                    </div>\r\n                    <div class=\"login-info panel flex-center\" *ngIf=\"authService.okMessage\">\r\n                        <p class=\"no-margin\">{{ authService.okMessage }}</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"otp\">\r\n                    <div style=\"display: flex; justify-content: flex-end; flex-direction: column\">\r\n                        <!-- <p class=\"link\" data-test=\"loginResendOtp\"\r\n                      (click)=\"authService.resendOTP(loginRequest.accountName, loginRequest.processID, alternative)\">\r\n                      <u>{{ resendOTPpLabel }}</u>\r\n                  </p> -->\r\n\r\n                        <p class=\"description\" style=\"margin-bottom: 0px !important\" *ngIf=\"otpInfo.TwoFactorType === 4\">\r\n                            {{ TOTPDescription }}\r\n                        </p>\r\n\r\n                        <u\r\n                            class=\"link pointer\"\r\n                            data-test=\"loginResendOtp\"\r\n                            (click)=\"alternativeMethods(otpInfo.TwoFactorType)\"\r\n                            data-test=\"loginAlternativeOtp\"\r\n                            *ngIf=\"otpInfo.TwoFactorType !== 4\"\r\n                            >{{ resendOTPLabel }}\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ chosenAuthApp }}</span>\r\n\t\t\t    <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\r\n                        </u>\r\n                        <div class=\"login-header\" *ngIf=\"otpInfo.TOTPConfigured || otpInfo.MobilePhoneNr; else onlyOneMethodConfigured\">\r\n                            <p\r\n                                style=\"margin: 10px 0; font-weight: 600; color: #005890\"\r\n                                *ngIf=\"(otpInfo.Email && otpInfo.TOTPConfigured) || otpInfo.MobilePhoneNr\"\r\n                            >\r\n                                {{ otpText }}\r\n                            </p>\r\n                            <u\r\n                                class=\"link pointer\"\r\n                                *ngIf=\"otpInfo.TwoFactorType !== 1 && otpInfo.MobilePhoneNr\"\r\n                                (click)=\"alternativeMethods(1)\"\r\n                                data-test=\"loginAlternativeSms\"\r\n                                >{{ otpRequestCode }} SMS</u\r\n                            >\r\n                            <u\r\n                                class=\"link pointer\"\r\n                                *ngIf=\"otpInfo.TwoFactorType !== 2\"\r\n                                (click)=\"alternativeMethods(2)\"\r\n                                data-test=\"loginAlternativeSms\"\r\n                                >{{ otpRequestCode }} E-mail</u\r\n                            >\r\n                            <u\r\n                                class=\"link pointer\"\r\n                                *ngIf=\"otpInfo.TOTPConfigured && otpInfo.TwoFactorType !== 4\"\r\n                                (click)=\"alternativeMethods(4)\"\r\n                                data-test=\"loginAlternativeApp\"\r\n                                >{{ useAuthApp }}</u\r\n                            >\r\n                        </div>\r\n                        <ng-template #onlyOneMethodConfigured>\r\n                            <p class=\"link\" style=\"margin-top: 10px; font-weight: 600; color: #005890\">\r\n                                {{ oneMethodOnly }}\r\n                                <u class=\"pointer\" (click)=\"goToStore()\"> {{ alternativeMethod }} </u>\r\n                            </p>\r\n                        </ng-template>\r\n                    </div>\r\n                    <!-- <div style=\"margin-top: 10px\">\r\n                        <p class=\"link\" data-test=\"loginAlternativeOtp\"> -->\r\n                    <!-- <mat-checkbox [(ngModel)]=\"alternative\" name=\"alternative\">\r\n                                <span translate>{{ alternativelbl }}</span>\r\n                            </mat-checkbox> -->\r\n                    <!-- <u>{{ alternativelbl }}</u>\r\n                        </p>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 60px\">\r\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n                <button kendoButton data-test=\"loginButton\" class=\"buttons login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\r\n                    <span data-test=\"loginLoadingButton\" class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\r\n                    <span *ngIf=\"!loading\">{{ buttonText }}</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"login-footer\" *ngIf=\"(!loading && validate) || otp\">\r\n                <button kendoButton data-test=\"loginBackButton\" class=\"buttons back-button\" (click)=\"back()\">\r\n                    <span> {{ buttonBack }}</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <div *ngIf=\"showSignUp\">\r\n                <p class=\"signup\" data-test=\"loginSignUp\" (click)=\"newUser()\">SignUp here!</p>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!validate && !otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\r\n            <p class=\"forgotpwd\" data-test=\"loginForgotPassword\" (click)=\"goToForgotPassword()\">\r\n                <u>{{ forgetPassword }}</u>\r\n            </p>\r\n        </div>\r\n        <div *ngIf=\"otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\r\n            <p class=\"forgotpwd\" data-test=\"loginManageMethods\">\r\n                <u class=\"pointer\" (click)=\"goToStore()\">{{ manageMethods }}</u>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div style=\"position: absolute; bottom: 0; width: 100%; z-index: 0\">\r\n        <p class=\"copyright copyright-abs\">Login {{ lib_version }} 2017 - {{ currentYear }}, Zucchetti s.p.a.</p>\r\n    </div>\r\n</div>\r\n", styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list{background:#F4F4F4;color:#005890;max-height:100px;width:370px!important}.k-list ::-webkit-scrollbar{background:#bfcdd5}.k-list ::-webkit-scrollbar:hover{background:#d9d9d9}.k-list ::-webkit-scrollbar-thumb{background:#6cafd1}.k-list ::-webkit-scrollbar-thumb:hover{background:#005890}.k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}.kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width: 490px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}.kendo-dropdown{width:323px!important}}@media screen and (max-width: 425px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}.kendo-dropdown{width:273px!important}}@media screen and (max-width: 375px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}.kendo-dropdown{width:217px!important}}.k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}.k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;line-height:20px;margin-bottom:30px}.pointer{cursor:pointer}.link,:host(tb-login) p.forgotpwd{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom{border-bottom:1px solid #0B85CE}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:rgba(0,0,0,.32)}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:20px 0}.login-infos .caps-lock{background:#E7481C;display:flex;align-items:center}.login-infos .login-error{background:#E7481C}.login-infos .login-info{background:#4AB679}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:#C0C0C0}.login-footer .login-button{background:#E77B2D}.login-footer .login-button:hover:enabled{background:#FF9E18}.login-footer .back-button{background:#808080}.login-footer .back-button:hover:enabled{background:#9F9F9F}.login-footer .ok-button{background:#4AB679}.login-footer .ok-button:hover:enabled{background:#68B388}.login-footer .error-button{background:#D03C13}.login-footer .error-button:hover:enabled{background:#E7481C}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}::ng-deep .mat-dialog-container{color:#005890!important;background:white!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9F9F9F}::ng-deep .mat-dialog-container .login-footer .back-button{background:#808080}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:#C0C0C0}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4AB679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68B388}::ng-deep .k-floating-label-container{width:100%;margin:8px 0}::ng-deep .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea:focus{background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox::-moz-selection,::ng-deep .k-floating-label-container .k-input::-moz-selection,::ng-deep .k-floating-label-container .k-textarea::-moz-selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-textbox::selection,::ng-deep .k-floating-label-container .k-input::selection,::ng-deep .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-picker-md .k-input-inner{background:white!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}::ng-deep .k-floating-label-container .k-picker{border-width:0px;border-style:unset}::ng-deep .k-floating-label-container .k-picker:focus-within{box-shadow:none}::ng-deep .k-floating-label-container .k-picker:focus{box-shadow:none}::ng-deep .k-floating-label-container:after{background-color:#8ee2ff;height:1px}::ng-deep .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}::ng-deep .k-floating-label-container .k-dropdown{border:none;background:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0B85CE}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}::ng-deep html,::ng-deep body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}:host(tb-login){font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}:host(tb-login) .login-container{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}:host(tb-login) .login-container .login{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){:host(tb-login) .login-container .login{padding:20px}}@media screen and (min-width: 576px){:host(tb-login) .login-container .login{max-width:450px}}:host(tb-login) .login-container .login .upicon{transform:rotate(90deg);padding:1px}:host(tb-login) .login-container .login .downicon{transform:rotate(270deg)}:host(tb-login) .login-container .login .login-header{display:flex;flex-direction:column}:host(tb-login) .login-container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:0}:host(tb-login) .login-container .login .k-i-loading{font-size:20px}:host(tb-login) p.instancekey{font-size:9px;font-weight:300;text-indent:1px;color:#005890}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) p.forgotpwd{cursor:pointer;text-align:right}:host(tb-login) p.signup{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}:host(tb-login) .margin-h1{margin-left:-2px;margin-top:20px}:host(tb-login) .margin-p{margin-left:-1.5px;margin-top:-10px}:host(tb-login) .login-expired-subtitle{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}:host(tb-login) .login-chooseSubscription{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}:host(tb-login) .login-sign-in{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){:host(tb-login) .login{padding:20px}:host(tb-login) .login .login-form ::ng-deep .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){:host(tb-login) .login-sign-in{font-size:x-large}}:host(tb-login) ::ng-deep .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host(tb-login) .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#005890}\n"] }]
    }], function () { return [{ type: i1.TbAuthService }, { type: i2.Router }, { type: i3.MatDialog }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL3BhZ2VzL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztJQ0g1Qiw2QkFBdUU7SUFBQSxZQUF3QjtJQUFBLGlCQUFJOzs7SUFBNUIsZUFBd0I7SUFBeEIsZ0RBQXdCOzs7SUFGbkcsMkJBQStCLGFBQUE7SUFDQyxZQUFhO0lBQUEsaUJBQUs7SUFDOUMsb0VBQW1HO0lBQ25HLDZCQUF1QjtJQUFBLFlBQXNCO0lBQUEsaUJBQUksRUFBQTs7O0lBRnJCLGVBQWE7SUFBYixvQ0FBYTtJQUNyQyxlQUFzQjtJQUF0Qiw4Q0FBc0I7SUFDSCxlQUFzQjtJQUF0Qiw2Q0FBc0I7OztJQUVqRCwyQkFBOEIsYUFBQTtJQUNFLFlBQXdCO0lBQUEsaUJBQUs7SUFDekQsNkJBQXVCO0lBQUEsWUFB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T0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQzdEO0lBQUMsTUFBTTtRQUNKLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ1VDYWxlbmRhckpvYiwgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL21vZGVscy9zdWJzY3JpcHRpb24ubW9kZWwnO1xuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2ZvcmdvdC1wYXNzd29yZC1kaWFsb2cvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyQ29udGVudEluaXQsIEluamVjdCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXh0cmFJbmZvIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcbmltcG9ydCB7IFN0cmluZ3MgfSBmcm9tICcuLi9tb2RlbHMvU3RyaW5ncyc7XG5pbXBvcnQgeyBMSUJfVkVSU0lPTiB9IGZyb20gJy4uLy4uL3ZlcnNpb24nO1xuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi4vbW9kZWxzL29wZXJhdGlvbi1yZXN1bHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RiLWxvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY2xhc3MgVGJMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIHByaXZhdGUgY2FjaGVkQ29tcGFuaWVzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICBjYXBzTG9ja09uID0gZmFsc2U7XG4gICAgdmFsaWRhdGUgPSBmYWxzZTtcbiAgICBvdHAgPSBmYWxzZTtcbiAgICBPTEQgPSBmYWxzZTtcbiAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgbG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QgPSBuZXcgTG9naW5SZXF1ZXN0KCk7XG4gICAgcmVkaXJlY3RVcmw6IHN0cmluZztcbiAgICBidXR0b25UZXh0OiBzdHJpbmc7XG4gICAgbmV4dFRleHQ6IHN0cmluZztcbiAgICBsb2dpblRleHQ6IHN0cmluZztcbiAgICBjdXJyZW50WWVhcjogc3RyaW5nO1xuICAgIGNyZWF0ZUFjY291bnRVcmw6IHN0cmluZztcbiAgICBjaGFuZ2VQYXNzd29yZFVybDogc3RyaW5nO1xuICAgIHN1YnNjcmlwdGlvblNlbGVjdGlvbjogYm9vbGVhbjsgLy8gYWJpbGl0YSBsYSBzY2VsdGEgZGVsbGEgc3Vic2NyaXB0aW9uXG4gICAgc2hvd1NpZ25VcDogYm9vbGVhbjsgLy8gYWJpbGl0YSBsYSBwb3NzaWJpbGl0w6AgZGkgcmVnaXN0cmFyZSBudW92byBhY2NvdW50XG4gICAgbG9naW5TdWJzY3JpcHRpb25zOiBBcnJheTx7IGRlc2NyaXB0aW9uOiBzdHJpbmc7IHN1YnNjcmlwdGlvbmtleTogc3RyaW5nOyBzdGF0dXM6IG51bWJlcjsgaW5zdGFuY2VrZXk6IHN0cmluZyB9PiA9IFtdO1xuICAgIGxvZ29VUkw6IHN0cmluZztcbiAgICBiYWNrZ3JvdW5kVVJMOiBzdHJpbmc7XG4gICAgaGlkZSA9IHRydWU7XG4gICAgaGlkZU90cCA9IHRydWU7XG4gICAgaW5zdGFuY2VrZXk6IHN0cmluZztcbiAgICBpc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgcHVibGljIGRvY3VtZW50PzogRG9jdW1lbnQ7XG4gICAgbGliX3ZlcnNpb246IHN0cmluZyA9IExJQl9WRVJTSU9OO1xuICAgIC8vIHRlc3RpIGluIGl0YWxpYW5vIGVkIGluZ2xlc2VcbiAgICBjaG9vc2VTdWJzY3JpcHRpb246IHN0cmluZztcbiAgICBnb29kSm9iOiBzdHJpbmc7XG4gICAgc3Vic2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaW5zdGFuY2U6IHN0cmluZztcbiAgICBidXR0b25CYWNrOiBzdHJpbmc7XG4gICAgYWNjb3VudE5hbWU6IHN0cmluZztcbiAgICBlbnRlckFjY291bk5hbWU6IHN0cmluZztcbiAgICB3ZWxjb21lOiBzdHJpbmc7XG4gICAgZW50ZXJDcmVkZW50aWFsczogc3RyaW5nO1xuICAgIGZvcmdldFBhc3N3b3JkOiBzdHJpbmc7XG4gICAgYmxvY01haXVzYzogc3RyaW5nO1xuICAgIGlkbGVUaW1lb3V0TWVzc2FnZTogc3RyaW5nO1xuICAgIG90cE1lc3NhZ2U6IHN0cmluZztcbiAgICBhdXRoQXBwVGV4dDogc3RyaW5nO1xuICAgIG90cFRpdGxlOiBzdHJpbmc7XG4gICAgcmVzZW5kT1RQTGFiZWw6IHN0cmluZztcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgY2hvc2VuQXV0aEFwcDogc3RyaW5nO1xuICAgIG90cFRleHQ6IHN0cmluZztcbiAgICBvdHBSZXF1ZXN0Q29kZTogc3RyaW5nO1xuICAgIHVzZUF1dGhBcHA6IHN0cmluZztcbiAgICBvbmVNZXRob2RPbmx5OiBzdHJpbmc7XG4gICAgYWx0ZXJuYXRpdmVNZXRob2Q6IHN0cmluZztcbiAgICBtYW5hZ2VNZXRob2RzOiBzdHJpbmc7XG4gICAgVE9UUERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaW5wdXRWYWx1ZTogc3RyaW5nID0gJyc7XG4gICAgZHJvcERvd25Jc0NsaWNrZWQgPSBmYWxzZTtcbiAgICBjb21ib0JveElzQ2xpY2tlZCA9IGZhbHNlO1xuICAgIGljb25Jc0NsaWNrZWQgPSBmYWxzZTtcbiAgICBAVmlld0NoaWxkKCdkcm9wZG93bicpIGRyb3Bkb3duOiBhbnk7XG4gICAgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGxhbmd1YWdlSVQgPSB0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKTtcbiAgICBvdHBJbmZvOiBFeHRyYUluZm8gPSBuZXcgRXh0cmFJbmZvKCk7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSxcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jPzogYW55XG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnY2xpY2snLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbWJvQm94SXNDbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21ib0JveElzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmljb25Jc0NsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmljb25Jc0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kcm9wZG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24udG9nZ2xlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BEb3duSXNDbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRvY3VtZW50ID0gZG9jIGFzIERvY3VtZW50O1xuICAgICAgICB0aGlzLmNoZWNrQ29ubmVjdGlvbigpO1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXBwSWQoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gPSBhdXRoU2VydmljZS5oYXNTdWJzY3JpcHRpb25TZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5zaG93U2lnblVwID0gYXV0aFNlcnZpY2Uuc2hvd1NpZ25VcCgpO1xuICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVBY2NvdW50VXJsID0gYXV0aFNlcnZpY2UuZ2V0Q3JlYXRlQWNjb3VudFVybCgpO1xuICAgICAgICB0aGlzLmNoYW5nZVBhc3N3b3JkVXJsID0gYXV0aFNlcnZpY2UuZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKTtcbiAgICAgICAgdGhpcy5sb2dvVVJMID0gYXV0aFNlcnZpY2UuZ2V0TG9nb1VSTCgpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRVUkwgPSBhdXRoU2VydmljZS5nZXRCYWNrZ3JvdW5kVVJMKCk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VrZXkgPSAnJztcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0VGV4dCA9ICdhdmFudGknO1xuICAgICAgICAgICAgdGhpcy5sb2dpblRleHQgPSAnYWNjZWRpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFRleHQgPSAnbmV4dCc7XG4gICAgICAgICAgICB0aGlzLmxvZ2luVGV4dCA9ICdsb2dpbic7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSB8fCAhdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gPyB0aGlzLmxvZ2luVGV4dCA6IHRoaXMubmV4dFRleHQ7XG4gICAgICAgIHRoaXMuY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkge1xuICAgICAgICAgICAgdGhpcy5jaG9vc2VTdWJzY3JpcHRpb24gPSAnU2NlZ2xpIGxhIHR1YSBzb3R0b3Njcml6aW9uZSc7XG4gICAgICAgICAgICB0aGlzLmdvb2RKb2IgPSAnQnVvbiBsYXZvcm8hJztcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gJ1NvdHRvc2NyaXppb25lJztcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSAnSXN0YW56YSc7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkJhY2sgPSAnPCBJTkRJRVRSTyc7XG4gICAgICAgICAgICB0aGlzLmFjY291bnROYW1lID0gJ05vbWUgdXRlbnRlJztcbiAgICAgICAgICAgIHRoaXMuZW50ZXJBY2NvdW5OYW1lID0gJ0luc2VyaXNjaSBpbCB0dW8gbm9tZSB1dGVudGUgZSB0aSBpbnZpZXJlbW8gdW5hIG51b3ZhIHBhc3N3b3JkJztcbiAgICAgICAgICAgIHRoaXMud2VsY29tZSA9ICdCZW52ZW51dG8gc3UgJyArIGF1dGhTZXJ2aWNlLmdldEJyYW5kTmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5lbnRlckNyZWRlbnRpYWxzID0gJ0F1dGVudGljYXRpIGluc2VyZW5kbyBub21lIHV0ZW50ZSBlIHBhc3N3b3JkLic7XG4gICAgICAgICAgICB0aGlzLmZvcmdldFBhc3N3b3JkID0gJ0hhaSBkaW1lbnRpY2F0byBsYSBwYXNzd29yZCA/JztcbiAgICAgICAgICAgIHRoaXMuYmxvY01haXVzYyA9ICdCbG9jY28gbWFpdXNjb2xlIGF0dGl2byc7XG4gICAgICAgICAgICB0aGlzLmlkbGVUaW1lb3V0TWVzc2FnZSA9ICdMYSB0dWEgc2Vzc2lvbmUgw6ggdGVybWluYXRhIHBlciBpbmF0dGl2aXTDoCwgcHVvaSByaXByZW5kZXJlIGRhIHF1aS4nO1xuICAgICAgICAgICAgdGhpcy5vdHBNZXNzYWdlID0gJ0luc2VyaXNjaSBpbCBjb2RpY2UgT1RQIGNoZSBoYWkgcmljZXZ1dG8gdHJhbWl0ZSAnO1xuICAgICAgICAgICAgdGhpcy5hdXRoQXBwVGV4dCA9ICdhcHAgZGkgYXV0ZW50aWNhemlvbmUnO1xuICAgICAgICAgICAgdGhpcy5vdHBUaXRsZSA9ICdBdXRlbnRpY2F6aW9uZSBhIGR1ZSBmYXR0b3JpJztcbiAgICAgICAgICAgIHRoaXMucmVzZW5kT1RQTGFiZWwgPSAnUmljaGllZGkgdW4gbnVvdm8gY29kaWNlIE9UUCB2aWEgJztcbiAgICAgICAgICAgIHRoaXMuY29kZSA9ICdDb2RpY2UgT1RQJztcbiAgICAgICAgICAgIHRoaXMuY2hvc2VuQXV0aEFwcCA9ICdhcHAgZGkgYXV0ZW50aWNhemlvbmUgc2NlbHRhJztcbiAgICAgICAgICAgIHRoaXMub3RwVGV4dCA9ICdPcHB1cmUnO1xuICAgICAgICAgICAgdGhpcy5vdHBSZXF1ZXN0Q29kZSA9ICdSaWNoaWVkaSBjb2RpY2UgdmlhICc7XG4gICAgICAgICAgICB0aGlzLnVzZUF1dGhBcHAgPSAnVXRpbGl6emEgbGEgdHVhIGFwcCBkaSBhdXRlbnRpY2F6aW9uZSc7XG4gICAgICAgICAgICB0aGlzLm9uZU1ldGhvZE9ubHkgPVxuICAgICAgICAgICAgICAgICdIYWkgdW4gc29sbyBtZXRvZG8gZGkgYXV0ZW50aWNhemlvbmUgY29uZmlndXJhdG8sIHBlciBub24gcmlzY2hpYXJlIGRpIHJpbWFuZXJlIGJsb2NjYXRvIHRpIGNvbnNpZ2xpYW1vIGRpJztcbiAgICAgICAgICAgIHRoaXMuYWx0ZXJuYXRpdmVNZXRob2QgPSAnYXR0aXZhcmUgdW4gbWV0b2RvIGFsdGVybmF0aXZvLic7XG4gICAgICAgICAgICB0aGlzLm1hbmFnZU1ldGhvZHMgPSAnR2VzdGlzY2kgaSB0dW9pIG1ldG9kaSBkaSBhY2Nlc3NvJztcbiAgICAgICAgICAgIHRoaXMuVE9UUERlc2NyaXB0aW9uID1cbiAgICAgICAgICAgICAgICBcIkFwcmkgbCdhcHAgbyBsJ2VzdGVuc2lvbmUgZGVsIGJyb3dzZXIgZGVsbCdhdXRlbnRpY2F0b3JlIGEgZHVlIGZhdHRvcmkgKFRPVFApIHBlciB2aXN1YWxpenphcmUgaWwgdHVvIGNvZGljZSBkaSBhdXRlbnRpY2F6aW9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaG9vc2VTdWJzY3JpcHRpb24gPSAnQ2hvb3NlIHlvdXIgc3Vic2NyaXB0aW9uJztcbiAgICAgICAgICAgIHRoaXMuZ29vZEpvYiA9ICdHb29kIGpvYiEnO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSAnU3Vic2NyaXB0aW9uJztcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSAnSW5zdGFuY2UnO1xuICAgICAgICAgICAgdGhpcy5idXR0b25CYWNrID0gJzwgQkFDSyc7XG4gICAgICAgICAgICB0aGlzLmFjY291bnROYW1lID0gJ0FjY291bnQgbmFtZSc7XG4gICAgICAgICAgICB0aGlzLmVudGVyQWNjb3VuTmFtZSA9ICdFbnRlciB5b3VyIGFjY291bnQgbmFtZSBhbmQgd2Ugd2lsbCBzZW5kIHlvdSBhIG5ldyBwYXNzd29yZCc7XG4gICAgICAgICAgICB0aGlzLndlbGNvbWUgPSAnV2VsY29tZSB0byAnICsgYXV0aFNlcnZpY2UuZ2V0QnJhbmROYW1lKCk7XG4gICAgICAgICAgICB0aGlzLmVudGVyQ3JlZGVudGlhbHMgPSAnQXV0aGVudGljYXRlIHlvdXJzZWxmIGJ5IGVudGVyaW5nIHlvdXIgYWNjb3VudCBuYW1lIGFuZCBwYXNzd29yZC4nO1xuICAgICAgICAgICAgdGhpcy5mb3JnZXRQYXNzd29yZCA9ICdGb3Jnb3QgeW91ciBwYXNzd29yZCA/JztcbiAgICAgICAgICAgIHRoaXMuYmxvY01haXVzYyA9ICdDYXBzIGxvY2sgb24nO1xuICAgICAgICAgICAgdGhpcy5pZGxlVGltZW91dE1lc3NhZ2UgPSAnWW91ciBzZXNzaW9uIGhhcyBleHBpcmVkIGR1ZSB0byBpbmFjdGl2aXR5LCB5b3UgY2FuIHJlc3VtZSBmcm9tIGhlcmUuJztcbiAgICAgICAgICAgIHRoaXMub3RwTWVzc2FnZSA9ICdFbnRlciB0aGUgb3RwIGNvZGUgeW91IHJlY2VpdmVkIHZpYSAnO1xuICAgICAgICAgICAgdGhpcy5hdXRoQXBwVGV4dCA9ICdhdXRoZW50aWNhdGlvbiBhcHAnO1xuICAgICAgICAgICAgdGhpcy5vdHBUaXRsZSA9ICdUd28tRmFjdG9yIEF1dGhlbnRpY2F0aW9uJztcbiAgICAgICAgICAgIHRoaXMucmVzZW5kT1RQTGFiZWwgPSAnUmVxdWVzdCBhIG5ldyBPVFAgY29kZSB2aWEgJztcbiAgICAgICAgICAgIHRoaXMuY29kZSA9ICdPVFAgQ29kZSc7XG4gICAgICAgICAgICB0aGlzLmNob3NlbkF1dGhBcHAgPSAnY2hvc2VuIGF1dGhlbnRpY2F0b3IgYXBwJztcbiAgICAgICAgICAgIHRoaXMub3RwVGV4dCA9ICdPcic7XG4gICAgICAgICAgICB0aGlzLm90cFJlcXVlc3RDb2RlID0gJ1JlcXVlc3QgY29kZSB2aWEgJztcbiAgICAgICAgICAgIHRoaXMudXNlQXV0aEFwcCA9ICdVc2UgeW91ciBhdXRoZW50aWNhdG9yIGFwcCc7XG4gICAgICAgICAgICB0aGlzLm9uZU1ldGhvZE9ubHkgPSAnWW91IGhhdmUgb25seSBvbmUgYXV0aGVudGljYXRpb24gbWV0aG9kIGNvbmZpZ3VyZWQsIHRvIGF2b2lkIHRoZSByaXNrIG9mIGJlaW5nIGJsb2NrZWQgd2UgcmVjb21tZW5kIHlvdSc7XG4gICAgICAgICAgICB0aGlzLmFsdGVybmF0aXZlTWV0aG9kID0gJ2FjdGl2YXRlIGFuIGFsdGVybmF0aXZlIG1ldGhvZC4nO1xuICAgICAgICAgICAgdGhpcy5tYW5hZ2VNZXRob2RzID0gJ01hbmFnZSB5b3VyIGxvZ2luIG1ldGhvZHMnO1xuICAgICAgICAgICAgdGhpcy5UT1RQRGVzY3JpcHRpb24gPSAnT3BlbiB5b3VyIHR3by1mYWN0b3IgYXV0aGVudGljYXRvciAoVE9UUCkgYXBwIG9yIGJyb3dzZXIgZXh0ZW5zaW9uIHRvIHZpZXcgeW91ciBhdXRoZW50aWNhdGlvbiBjb2RlJztcbiAgICAgICAgfVxuICAgICAgICBhdXRoU2VydmljZS5yZUxvZ2luQWZ0ZXJPVFAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIC8vJ2xvZ2luIHN1YnNjcmliZWQnKTtcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUFJPVkEgUEVSIEFQRVJUVVJBIERJQUxPRyBESSBOT1RJRklDQSBBR0dJT1JOQU1FTlRPXG4gICAgLy8gIGFzeW5jIG9wZW5EaWFsb2coKSB7XG4gICAgLy8gICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzX3RyYW5zbGF0aW9uID0gbmV3ICBTdHJpbmdzKCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc190cmFuc2xhdGlvbi5nZXRVcGRhdGVNZXNzYWdlKHRoaXMuYXV0aFNlcnZpY2UpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3ViJywgXCJzdWIgeFwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBkYXRlJywgXCJ0aGlzIGRhdGVcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3RhcnRoJyxcInN0YXJ0IGhvdXJcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAZW5kaCcsXCJlbmQgaG91clwiICk7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9uIG1vc3RybyBzZSBtaSBoYW5ubyBkZXR0byBkaSBub24gbW9zdHJhcmUgcGl1LlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSBtZXNzYWdlKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9wZW5VcGRhdGVBbGVydERpYWxvZyhcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlVGl0bGUoKSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZURvbnRTaG93TWVzc2FnZSgpLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTt9XG4gICAgLy8gIH1cbiAgICAvLyBQUk9WQSBQRVIgQVBFUlRVUkEgRElBTE9HIERJIE5PVElGSUNBIEFHR0lPUk5BTUVOVE9cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkTG9naW5EYXRhKCk7XG4gICAgICAgIHdlYmtpdEF1dG9maWxsV29ya2Fyb3VuZCgpO1xuICAgICAgICAvL3Rlc3Q6IHRoaXMub3BlbkRpYWxvZygpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tDb25uZWN0aW9uKCk7XG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgLy8gc2UgbWkgYXJyaXZhIHVuIGVycm9yZSBtb3N0cm8gcXVlbGxvIGFsdHJpbWVudGkgc29sbyBsIHVybCBjaGUgbG8gaGEgZGF0b1xuICAgICAgICAgICAgbGV0IGVycm9yID0gdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoZXJyb3IubGVuZ3RoID09PSAwKSBlcnJvciA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QmFzZVVybCgpO1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlSVRcbiAgICAgICAgICAgICAgICA/ICdTZXJ2aXppbyB0ZW1wb3JhbmVhbWVudGUgbm9uIHJhZ2dpdW5naWJpbGUuXFxuRGV0dGFnbGk6ICcgKyBlcnJvclxuICAgICAgICAgICAgICAgIDogJ1NlcnZpY2UgdGVtcG9yYXJpbHkgbm90IGF2YWlsYWJsZS5cXG5EZXRhaWxzOiAnICsgZXJyb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG9uU3ViQ2hhbmdlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgc2QgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5maW5kKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSA9PT0gbmV3VmFsdWUpO1xuICAgICAgICBpZiAoc2QgJiYgc2QuaW5zdGFuY2VrZXkpIHRoaXMuaW5zdGFuY2VrZXkgPSBgJHt0aGlzLmluc3RhbmNlfTogJHtzZC5pbnN0YW5jZWtleX1gO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGtleVVwRnVuY3Rpb24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkQnV0dG9uKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2Fwc09uID0gZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSAmJiBldmVudC5nZXRNb2RpZmllclN0YXRlKCdDYXBzTG9jaycpO1xuICAgICAgICB0aGlzLmNhcHNMb2NrT24gPSBjYXBzT247XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGlzYWJsZWRCdXR0b24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoaGFzQXV0b2ZpbGwoKSAmJlxuICAgICAgICAgICAgICAgICghdGhpcy5pc0Nvbm5lY3RlZCB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gJiYgdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID09PSAwICYmIHRoaXMudmFsaWRhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm90cCAmJiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoICE9PSA2KSB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcpKSB8fFxuICAgICAgICAgICAgKCFoYXNBdXRvZmlsbCgpICYmXG4gICAgICAgICAgICAgICAgKCF0aGlzLmlzQ29ubmVjdGVkIHx8XG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uICYmIHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnZhbGlkYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5vdHAgJiYgdGhpcy5pbnB1dFZhbHVlLmxlbmd0aCAhPT0gNikgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nKSlcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZ2V0IGlzRXhwaXJlZFNlc3Npb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVkU2Vzc2lvbicpID09PSAndHJ1ZSc7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG5ld1VzZXIoKSB7XG4gICAgICAgIC8vIHJpbWFuZGEgYWxsYSBwYWdpbmEgKHByZXN1bWliaWxtZW50ZSBkZWxsbyBzdG9yZSkgZG92ZSAgc2Fyw6AgcG9zc2liaWxlIGNyZWFyZSB1biBudW92byBhY2NvdW50LlxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jcmVhdGVBY2NvdW50VXJsXSk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYXN5bmMgYmFjaygpIHtcbiAgICAgICAgLy8gcmlwdWxpc2NvIHR1dHRvLi4uXG4gICAgICAgIHRoaXMudmFsaWRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QudG9rZW4gPSAnJztcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgPSAnJztcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Qub3RQYXNzd29yZCA9ICcnO1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSUQgPSAnJztcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gJyc7XG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMubmV4dFRleHQ7XG4gICAgICAgIHRoaXMubG9naW5TdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMub3RwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGxvZ2luKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdsb2dpbiByZXF1ZXN0ZWQnKTtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5zYXZlTG9naW5EYXRhKCk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2V4cGlyZWRTZXNzaW9uJyk7XG4gICAgICAgIC8vYXNzZWdubyB1biBpZCBhbGxhIGxvZ2luIGUgc29sbyBxdWVzdGEgcG90csOhIHVzYXJlIGlsIGNvZGljZSAgb3RwICAgYXNzZWduYXRvXG4gICAgICAgIGlmICghdGhpcy5sb2dpblJlcXVlc3QucHJvY2Vzc0lEKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAwMDAgKyAxMDAwMDApLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5vdFBhc3N3b3JkID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vdHApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLk9MRCkgdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgPSB0aGlzLmlucHV0VmFsdWU7XG4gICAgICAgICAgICBlbHNlIHRoaXMubG9naW5SZXF1ZXN0Lm90UGFzc3dvcmQgPSB0aGlzLmlucHV0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlICYmIHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9ICdNQ2xvdWRQcmVMb2dpbic7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NhbGxpbmcgcHJlbG9naW4gJyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQxID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5wcmVsb2dpbih0aGlzLmxvZ2luUmVxdWVzdCkuY2F0Y2goKGVycjEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVycjEuZXJyb3IgJiYgZXJyMS5lcnJvci5NZXNzYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xuICAgICAgICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaSBzaWEgbG9naW4gc2lhIGNoZWNrZGJcbiAgICAgICAgICAgIGlmIChyZXN1bHQxICYmIHJlc3VsdDEuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdHAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcGFuaWVzRm9yVXNlcih0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vdHAgJiYgcmVzdWx0MSAmJiByZXN1bHQxLlJlc3VsdENvZGUgPT09IDE0Mykge1xuICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mbyA9IHJlc3VsdDEuRXh0cmFJbmZvO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm90cEluZm8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk9MRCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mbyA9IG5ldyBFeHRyYUluZm8oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy5PTEQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm90cCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3RwICYmIHJlc3VsdDEgJiYgIXJlc3VsdDEuUmVzdWx0ICYmIHJlc3VsdDEuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlSVQgPyAnQ29kaWNlIG5vbiB2YWxpZG8nIDogJ0ludmFsaWQgY29kZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYXBwSWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFwcElkKCk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjYWxsaW5nIGxvZ2luICcpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLmxvZ2luUmVxdWVzdCkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMudmFsaWRhdGUgPyB0aGlzLmxvZ2luVGV4dCA6IHRoaXMubmV4dFRleHQ7XG4gICAgICAgICAgICAvLyB0b2RvIGNvbnRyb2xsYSBjb21lIHZlbmdvbm8gbW9zdHJhdGkgZXJyb3JpIHNpYSBsb2dpbiBzaWEgY2hlY2tkYlxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2QgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5maW5kKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSA9PT0gdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcblxuICAgICAgICAgICAgICAgIGlmIChzZCAvKiYmIHNkLnN0YXR1cyovKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHNjaGVkdWxlZCA9IChzZC5zdGF0dXMgJiBFbnRpdHlTdGF0dXMuVXBkYXRlU2NoZWR1bGVkKSA9PT0gRW50aXR5U3RhdHVzLlVwZGF0ZVNjaGVkdWxlZDtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoc2NoZWR1bGVkKVxuICAgICAgICAgICAgICAgICAgICAvL25vbiBjb250cm9sbG8gcGl1LCBjaGlhbWVybycgc2VtcHJlIGwnIGFwaSBjaGUgZmFyYScgdHV0dGkgaSBjb250cm9sbGkgZGVsIGNhc28gaW4gbW9kbyBkYSBzZ2FuY2lhcmUgbGEgbGlicmFyaSBkYSBsb2dpY2hlIGNoZSBwb3RyZWJiZXJvIGNhbWJpYXJlLlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZSBsYSBzdWIgbm9uIGhhIGxvIHN0YXRvIGltcG9zdGF0byAgbm9uIGNlcmNvIG5lbW1lbm8gcmlzcGFybWlhbmRvbWkgdW5hIGNoaWFtYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQxID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5nZXRDYWxlbmRhcih0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdDEucmVzdWx0ICYmIHJlc3VsdDEuY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlZFVwZGF0ZTogQ1VDYWxlbmRhckpvYiA9IHJlc3VsdDEuY29udGVudCBhcyBDVUNhbGVuZGFySm9iO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlZHVsZWRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NjaGVkdWxlZFVwZGF0ZTogJyArIHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzX3RyYW5zbGF0aW9uID0gbmV3IFN0cmluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZU1lc3NhZ2UodGhpcy5hdXRoU2VydmljZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBzdWInLCB0aGlzLmF1dGhTZXJ2aWNlLmdldFN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKCkhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBkYXRlJywgdGhpcy5Gb3JtYXREYXRlU3RyaW5nKHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3RhcnRoJywgdGhpcy5Gb3JtYXRTdGFydERhdGVTdHJpbmcoc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAQGVuZGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Gb3JtYXRFbmREYXRlU3RyaW5nKHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lLCBzY2hlZHVsZWRVcGRhdGUuZXN0aW1hdGVkdXBncmFkZXRpbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9uIG1vc3RybyBzZSBtaSBoYW5ubyBkZXR0byBkaSBub24gbW9zdHJhcmUgcGl1LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSBtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9wZW5VcGRhdGVBbGVydERpYWxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlVGl0bGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZURvbnRTaG93TWVzc2FnZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc1JlZGlyZWN0RXh0ZXJuYWwoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gZXh0ZXJuYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbih0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSwgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbyBpbnRlcm5hbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb252ZXJ0VVRDRGF0ZVRvTG9jYWxEYXRlKGRhdGU6IERhdGUpIHtcbiAgICAgICAgLy8gZGV2byBmYXJlIHF1ZXN0byByaWdpcm8gcGVyY2jDqCBsIG9yYSBjaGUgbWkgYXJyaXZhICDDqCBpbnRlc2EgY29tZSB1dGMgZSBkZXZvIG1vc3RyYXJsYSBjb21lIGxvY2FsZVxuICAgICAgICBjb25zdCBkdCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICAgICAgICBEYXRlLlVUQyhkdC5nZXRGdWxsWWVhcigpLCBkdC5nZXRNb250aCgpLCBkdC5nZXREYXRlKCksIGR0LmdldEhvdXJzKCksIGR0LmdldE1pbnV0ZXMoKSwgZHQuZ2V0U2Vjb25kcygpLCBkdC5nZXRNaWxsaXNlY29uZHMoKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBGb3JtYXREYXRlU3RyaW5nID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT4ge1xuICAgICAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLmNvbnZlcnRVVENEYXRlVG9Mb2NhbERhdGUoZGF0ZSk7XG4gICAgICAgIHJldHVybiBzdGFydERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pO1xuICAgICAgICAvL3JldHVybiBgJHtzdGFydERhdGUuZ2V0RGF0ZSgpfS0ke3RlbXBEYXRlLmdldE1vbnRoKCkgKyAxfS0ke3RlbXBEYXRlLmdldEZ1bGxZZWFyKCl9YDtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgRm9ybWF0U3RhcnREYXRlU3RyaW5nID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT4ge1xuICAgICAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLmNvbnZlcnRVVENEYXRlVG9Mb2NhbERhdGUoZGF0ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkgcmV0dXJuIHN0YXJ0RGF0ZS50b0xvY2FsZVN0cmluZygnaXQtSVQnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogZmFsc2UgfSk7XG4gICAgICAgIGVsc2UgcmV0dXJuIHN0YXJ0RGF0ZS50b0xvY2FsZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pO1xuXG4gICAgICAgIC8vY29uc3QgemVyb2VzID0gbmV3IEFycmF5KDIgKyAxKS5qb2luKCcwJyk7XG4gICAgICAgIC8vdmFyIG0gPSAgICAoemVyb2VzICsgc3RhcnREYXRlLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpO1xuICAgICAgICAvLyB2YXIgaCA9ICAgICh6ZXJvZXMgKyBzdGFydERhdGUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpO1xuICAgICAgICAvLyByZXR1cm4gIGAke2h9OiR7bX1gO1xuICAgIH07XG4gICAgLy90b2RvLFxuICAgIC8vYW0gLyBwbT8gc2VsICdpbnRlcnZhbGxvIHNjYXR0YSBhbCBnaW9ybm8gZG9wbywgZm9yc2UgZG92cmVpIGRpcmUgaWwgNG1hZ2dpbyBkYWxsZSAxMHBtXG4gICAgLy8obyAyMiwgbWEgZGlwZW5kZSBkYWxsIGltcG9zdGF6aW9uZSBkaSBjdWx0dXJhKSAgYWwgNCAobyA1KSAgbWFnZ2lvIGFsbGUgMTEgKCBvIGFsbGUgMDEgYW0pICkgYWxcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBGb3JtYXRFbmREYXRlU3RyaW5nID0gKGRhdGU6IERhdGUsIGR1cmF0aW9uTWluczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgICAgY29uc3QgdGVtcERhdGUgPSB0aGlzLmNvbnZlcnRVVENEYXRlVG9Mb2NhbERhdGUoZGF0ZSk7XG4gICAgICAgIHZhciBmaW5hbERhdGUgPSBuZXcgRGF0ZSh0ZW1wRGF0ZS5nZXRUaW1lKCkgKyBkdXJhdGlvbk1pbnMgKiA2MDAwMCk7XG5cbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkgcmV0dXJuIGZpbmFsRGF0ZS50b0xvY2FsZVN0cmluZygnaXQtSVQnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogZmFsc2UgfSk7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZpbmFsRGF0ZS50b0xvY2FsZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pO1xuXG4gICAgICAgIC8vY29uc3QgemVyb2VzID0gbmV3IEFycmF5KDIgKyAxKS5qb2luKCcwJyk7XG4gICAgICAgIC8vdmFyIG0gPSAgICAoemVyb2VzICsgZmluYWxEYXRlLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpO1xuICAgICAgICAvL3ZhciBoID0gICAgKHplcm9lcyArIGZpbmFsRGF0ZS5nZXRIb3VycygpKS5zbGljZSgtMik7XG4gICAgICAgIC8vcmV0dXJuICBgJHtofToke219YDtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbG9hZExvZ2luRGF0YSgpIHtcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFjY291bnROYW1lKCkgfHwgJyc7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0U3Vic2NyaXB0aW9uKCkgfHwgJyc7XG5cbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwcml2YXRlIHNhdmVMb2dpbkRhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzU2Vzc2lvblN0b3JhZ2UoKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUsIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc2QgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5maW5kKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSA9PT0gdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcbiAgICAgICAgICAgIGlmIChzZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzU2Vzc2lvblN0b3JhZ2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc2QuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc2QuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGdldENvbXBhbmllc0ZvclVzZXIodXNlcjogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF1c2VyIHx8ICF0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICAvLyB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcbiAgICAgICAgY29uc3QgdGVtcCA9IGF3YWl0IHRoaXMucmVxdWVzdEFuZFNvcnRTdWJzY3JpcHRpb25zKHVzZXIpO1xuICAgICAgICAvLyBQcmVtaW8gRWxlZ2FuemEgQ29kaWNlIDIwMTkgKEBMdWNhQnJ1bmkpXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0ZW1wKSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMpKSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IHRlbXA7XG5cbiAgICAgICAgaWYgKHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnTm9uIHRyb3ZvIG5lc3N1bmEgc3Vic2NyaXB0aW9uIGFzc29jaWF0YSBhIHF1ZXN0byBhY2NvdW50Lic7XG4gICAgICAgICAgICBlbHNlIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ0kgY2Fubm90IGZpbmQgYW55IFN1YnNjcmlwdGlvbnMgYXNzb2NpYXRlZCB0byB5b3UnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnNbMF0uc3Vic2NyaXB0aW9ua2V5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubWFwKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSkuaW5kZXhPZih0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9uc1swXS5zdWJzY3JpcHRpb25rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vblN1YkNoYW5nZSh0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpdmF0ZSBhc3luYyByZXF1ZXN0QW5kU29ydFN1YnNjcmlwdGlvbnModXNlcjogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxTdWJzY3JpcHRpb24+PiB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlZENvbXBhbmllcy5oYXNPd25Qcm9wZXJ0eSh1c2VyKSAmJiB0aGlzLmNhY2hlZENvbXBhbmllc1t1c2VyIGFzIGFueV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZENvbXBhbmllc1t1c2VyIGFzIGFueV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZW1wOiBBcnJheTxTdWJzY3JpcHRpb24+ID0gW107XG4gICAgICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8U3Vic2NyaXB0aW9uPiA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyKS50b1Byb21pc2UoKTtcbiAgICAgICAgcmVzdWx0LnNvcnQodGhpcy5jb21wYXJlQ29tcGFuaWVzKS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICB0ZW1wLnB1c2goeyBzdWJzY3JpcHRpb25rZXk6IGMuc3Vic2NyaXB0aW9ua2V5LCBkZXNjcmlwdGlvbjogYy5kZXNjcmlwdGlvbiwgc3RhdHVzOiBjLnN0YXR1cywgaW5zdGFuY2VrZXk6IGMuaW5zdGFuY2VrZXkgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZW1wLmxlbmd0aCA+IDApIHRoaXMuY2FjaGVkQ29tcGFuaWVzW3VzZXIgYXMgYW55XSA9IHRlbXA7XG5cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpdmF0ZSBjb21wYXJlQ29tcGFuaWVzKGE6IFN1YnNjcmlwdGlvbiwgYjogU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IG5hbWVBID0gYS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBuYW1lQiA9IGIuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHJldHVybiAxO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnb1RvRm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICAgIHRoaXMuZm9yZ290cGFzc3dvcmQodGhpcy5mb3JnZXRQYXNzd29yZCwgdGhpcy5lbnRlckFjY291bk5hbWUsIHRoaXMuYWNjb3VudE5hbWUpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGZvcmdvdHBhc3N3b3JkKFRpdGxlOiBzdHJpbmcsIE1lc3NhZ2U6IHN0cmluZywgUGxhY2VIb2xkZXI6IHN0cmluZykge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRm9yZ290UGFzc3dvcmRDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBUaXRsZSxcbiAgICAgICAgICAgICAgICBNZXNzYWdlLFxuICAgICAgICAgICAgICAgIFBsYWNlSG9sZGVyLFxuICAgICAgICAgICAgICAgIFRleHRWYWx1ZTogdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoYXN5bmMgKGRhdGE6IHsgVGV4dFZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChkYXRhLlRleHRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEuVGV4dFZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnSW5zZXJpc2NpIHVuIG5vbWUgdXRlbnRlIHZhbGlkbyc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdXcml0ZSBhIHZhbGlkIGFjY291bnQgbmFtZSc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFjY25hbWU6IHN0cmluZyA9IGRhdGEuVGV4dFZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5yZXNldHBhc3N3b3JkKGFjY25hbWUpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaVxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ0NvbnRyb2xsYSBsYSB0dWEgZS1tYWlsIGUgc2VndWkgbGUgaXN0cnV6aW9uaSBwZXIgcmVpbXBvc3RhcmUgbGEgcGFzc3dvcmQuJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICdDaGVjayB5b3VyIGVtYWlsIGFuZCBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyB0byByZXNldCB5b3VyIHBhc3N3b3JkLic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IHJlc3VsdC5NZXNzYWdlICsgJyAoQ29kZTogJyArIHJlc3VsdC5Db2RlICsgJykuJztcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpc0Ryb3BEb3duQ2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5kcm9wRG93bklzQ2xpY2tlZCA9ICF0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xuICAgICAgICB0aGlzLmNvbWJvQm94SXNDbGlja2VkID0gdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcbiAgICAgICAgaWYgKHRoaXMuZHJvcERvd25Jc0NsaWNrZWQgJiYgdGhpcy5jb21ib0JveElzQ2xpY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5pY29uSXNDbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0b2dnbGUoZHJvcGRvd246IGFueSkge1xuICAgICAgICB0aGlzLmRyb3BEb3duSXNDbGlja2VkID0gIXRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XG4gICAgICAgIHRoaXMuaWNvbklzQ2xpY2tlZCA9IHRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XG4gICAgICAgIHRoaXMuZHJvcGRvd24gPSBkcm9wZG93bjtcbiAgICAgICAgaWYgKHRoaXMuZHJvcERvd25Jc0NsaWNrZWQpIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbHRlcm5hdGl2ZU1ldGhvZHModHdvRmFjdG9yVHlwZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLk9MRCkge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5PTERyZXNlbmRPVFAodGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsIHR3b0ZhY3RvclR5cGUgIT0gbnVsbCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChvcFJlczogT3BlcmF0aW9uUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFJlcy5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mby5Ud29GYWN0b3JUeXBlID0gdHdvRmFjdG9yVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVyck9MRCkgPT4ge31cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlc2VuZE9UUDIodGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsIHRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRCwgdHdvRmFjdG9yVHlwZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKG9wUmVzOiBPcGVyYXRpb25SZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3BSZXMuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mby5Ud29GYWN0b3JUeXBlID0gdHdvRmFjdG9yVHlwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycikgPT4ge31cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnb1RvU3RvcmUoKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuYXV0aFNlcnZpY2UuZ2V0U3RvcmVVcmwoKSk7XG4gICAgfVxufVxuXG4vLyB3b3JrYXJvdW5kIGZvciBjaHJvbWl1bSBidWcgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MzUyNTI3XG5mdW5jdGlvbiB3ZWJraXRBdXRvZmlsbFdvcmthcm91bmQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDotd2Via2l0LWF1dG9maWxsJylcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoZWw6IGFueSkgPT4gKGVsLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID0gJ2stZmxvYXRpbmctbGFiZWwtY29udGFpbmVyJykpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8vIG5vIHdlYmtpdCBicm93c2VyXG4gICAgICAgIH1cbiAgICB9LCAxMDAwKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBoYXNBdXRvZmlsbCgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dDotd2Via2l0LWF1dG9maWxsJyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibG9naW4tY29udGFpbmVyXCIgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIGJhY2tncm91bmRVUkwgKyAnKScgfVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImxvZ2luXCIgc3R5bGU9XCJ6LWluZGV4OiAxXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBtYXQtY2FyZC1pbWFnZSBzdHlsZT1cIndpZHRoOiA2MCVcIiBzcmM9XCJ7eyBsb2dvVVJMIH19XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhdmFsaWRhdGUgJiYgIW90cFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWFyZ2luLWgxIHRpdGxlXCI+e3sgd2VsY29tZSB9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cImlzRXhwaXJlZFNlc3Npb25cIiBjbGFzcz1cImxvZ2luLWV4cGlyZWQtc3VidGl0bGUgZGVzY3JpcHRpb25cIj57eyBpZGxlVGltZW91dE1lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgZW50ZXJDcmVkZW50aWFscyB9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ2YWxpZGF0ZSAmJiAhb3RwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtYXJnaW4taDEgdGl0bGVcIj57eyBjaG9vc2VTdWJzY3JpcHRpb24gfX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IGFjY291bnROYW1lIH19OiB7eyBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgfX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwib3RwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtYXJnaW4taDEgdGl0bGVcIj57eyBvdHBUaXRsZSB9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgc3R5bGU9XCJ3aWR0aDogMzUwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBvdHBNZXNzYWdlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDFcIj5zbXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDJcIj5lLW1haWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDRcIj57eyBhdXRoQXBwVGV4dCB9fTwvc3Bhbj5cclxuXHRcdCAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gbnVsbFwiPnNtcy9lLW1haWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwiYWNjb3VudE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIXZhbGlkYXRlICYmICFvdHBcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yJyA6ICdib3JkZXItYm90dG9tJ1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlbmRvVGV4dEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkFjY291bnROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3QuYWNjb3VudE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnZXJyb3Itc3RhdHVzJyA6ICdub3JtYWwtc3RhdGUnXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnYm9yZGVyLWJvdHRvbSdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZW5kb1RleHRCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibG9naW5SZXF1ZXN0LnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImhpZGUgPyAncGFzc3dvcmQnIDogJ3RleHQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGUgPSAhaGlkZVwiICpuZ0lmPVwiaGlkZSA9PT0gdHJ1ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZSA9ICFoaWRlXCIgKm5nSWY9XCJoaWRlID09PSBmYWxzZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5X29mZiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiICpuZ0lmPVwic3Vic2NyaXB0aW9uU2VsZWN0aW9uICYmIHZhbGlkYXRlICYmICFvdHBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwie3sgc3Vic2NyaXB0aW9uIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiW2F1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yJyA6ICcnLCBkcm9wRG93bklzQ2xpY2tlZCA/ICcnIDogJ2JvcmRlci1ib3R0b20nXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2VuZG8tZHJvcGRvd25saXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luRHJvcERvd25TdWJzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImxvZ2luU3Vic2NyaXB0aW9ucz8ubGVuZ3RoIDw9IDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwibG9naW5TdWJzY3JpcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpZWxkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVGaWVsZD1cInN1YnNjcmlwdGlvbmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVByaW1pdGl2ZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia2VuZG8tZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25TdWJDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiaXNEcm9wRG93bkNsaWNrZWQoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBrZW5kb0Ryb3BEb3duTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtZGF0YUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyLmRhdGEtc3ViPVwie3sgZGF0YUl0ZW0uc3Vic2NyaXB0aW9ua2V5IH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5kYXRhLWRlc2NyaXB0aW9uPVwie3sgZGF0YUl0ZW0uZGVzY3JpcHRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyLmRhdGEtaW5zdGFuY2U9XCJ7eyBkYXRhSXRlbS5pbnN0YW5jZWtleSB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBkYXRhSXRlbS5kZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9rZW5kby1kcm9wZG93bmxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkRyb3BEb3duU3Vic2NyaXB0aW9uQXJyb3dVcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlKGRyb3Bkb3duKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImRyb3BEb3duSXNDbGlja2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd19jaXJjbGVfdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5Ecm9wRG93blN1YnNjcmlwdGlvbkFycm93RG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlKGRyb3Bkb3duKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFkcm9wRG93bklzQ2xpY2tlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCBpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dfY2lyY2xlX2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluc3RhbmNla2V5XCIgZGF0YS10ZXN0PVwibG9naW5QYXJhZ3JhcGhJbnN0YW5jZUtleVwiICpuZ0lmPVwibG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA+IDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1YnNjcmlwdGlvbiBrZXk6IHt7IGxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgfX0ge3sgaW5zdGFuY2VrZXkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBbdGV4dF09XCJjb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnYm9yZGVyLWJvdHRvbSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib3RwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAga2VuZG9UZXh0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWNjb3VudE5hbWVPdHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROYW1lT3RwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiaGlkZU90cCA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vcm1hbC1zdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZU90cCA9ICFoaWRlT3RwXCIgKm5nSWY9XCJoaWRlT3RwID09PSB0cnVlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHkgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlT3RwID0gIWhpZGVPdHBcIiAqbmdJZj1cImhpZGVPdHAgPT09IGZhbHNlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHlfb2ZmIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fwcy1sb2NrIHBhbmVsIGZsZXgtY2VudGVyIG1hcmdpbi1ib3R0b20tNVwiICpuZ0lmPVwiY2Fwc0xvY2tPblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGJsb2NNYWl1c2MgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWVycm9yIHBhbmVsIGZsZXgtY2VudGVyIG1hcmdpbi1ib3R0b20tNVwiICpuZ0lmPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlXCIgc3R5bGU9XCJ3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1pbmZvIHBhbmVsIGZsZXgtY2VudGVyXCIgKm5nSWY9XCJhdXRoU2VydmljZS5va01lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyBhdXRoU2VydmljZS5va01lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwib3RwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8cCBjbGFzcz1cImxpbmtcIiBkYXRhLXRlc3Q9XCJsb2dpblJlc2VuZE90cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYXV0aFNlcnZpY2UucmVzZW5kT1RQKGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSwgbG9naW5SZXF1ZXN0LnByb2Nlc3NJRCwgYWx0ZXJuYXRpdmUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dT57eyByZXNlbmRPVFBwTGFiZWwgfX08L3U+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD4gLS0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudFwiICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBUT1RQRGVzY3JpcHRpb24gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluayBwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luUmVzZW5kT3RwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhbHRlcm5hdGl2ZU1ldGhvZHMob3RwSW5mby5Ud29GYWN0b3JUeXBlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkFsdGVybmF0aXZlT3RwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlICE9PSA0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyByZXNlbmRPVFBMYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDFcIj5zbXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gMlwiPmUtbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSA0XCI+e3sgY2hvc2VuQXV0aEFwcCB9fTwvc3Bhbj5cclxuXHRcdFx0ICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSBudWxsXCI+c21zL2UtbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taGVhZGVyXCIgKm5nSWY9XCJvdHBJbmZvLlRPVFBDb25maWd1cmVkIHx8IG90cEluZm8uTW9iaWxlUGhvbmVOcjsgZWxzZSBvbmx5T25lTWV0aG9kQ29uZmlndXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1hcmdpbjogMTBweCAwOyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzAwNTg5MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIob3RwSW5mby5FbWFpbCAmJiBvdHBJbmZvLlRPVFBDb25maWd1cmVkKSB8fCBvdHBJbmZvLk1vYmlsZVBob25lTnJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG90cFRleHQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rIHBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlICE9PSAxICYmIG90cEluZm8uTW9iaWxlUGhvbmVOclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFsdGVybmF0aXZlTWV0aG9kcygxKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZVNtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IG90cFJlcXVlc3RDb2RlIH19IFNNUzwvdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpbmsgcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgIT09IDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhbHRlcm5hdGl2ZU1ldGhvZHMoMilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWx0ZXJuYXRpdmVTbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBvdHBSZXF1ZXN0Q29kZSB9fSBFLW1haWw8L3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rIHBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib3RwSW5mby5UT1RQQ29uZmlndXJlZCAmJiBvdHBJbmZvLlR3b0ZhY3RvclR5cGUgIT09IDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhbHRlcm5hdGl2ZU1ldGhvZHMoNClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWx0ZXJuYXRpdmVBcHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB1c2VBdXRoQXBwIH19PC91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI29ubHlPbmVNZXRob2RDb25maWd1cmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaW5rXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzAwNTg5MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG9uZU1ldGhvZE9ubHkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dSBjbGFzcz1cInBvaW50ZXJcIiAoY2xpY2spPVwiZ29Ub1N0b3JlKClcIj4ge3sgYWx0ZXJuYXRpdmVNZXRob2QgfX0gPC91PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaW5rXCIgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZU90cFwiPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJhbHRlcm5hdGl2ZVwiIG5hbWU9XCJhbHRlcm5hdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHRyYW5zbGF0ZT57eyBhbHRlcm5hdGl2ZWxibCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDx1Pnt7IGFsdGVybmF0aXZlbGJsIH19PC91PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDAgMXB4OyBtYXJnaW4tdG9wOiA2MHB4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gZGF0YS10ZXN0PVwibG9naW5CdXR0b25cIiBjbGFzcz1cImJ1dHRvbnMgbG9naW4tYnV0dG9uXCIgKGNsaWNrKT1cImxvZ2luKClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRCdXR0b24oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtdGVzdD1cImxvZ2luTG9hZGluZ0J1dHRvblwiIGNsYXNzPVwiay1pY29uIGstaS1sb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWxvYWRpbmdcIj57eyBidXR0b25UZXh0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgKm5nSWY9XCIoIWxvYWRpbmcgJiYgdmFsaWRhdGUpIHx8IG90cFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBkYXRhLXRlc3Q9XCJsb2dpbkJhY2tCdXR0b25cIiBjbGFzcz1cImJ1dHRvbnMgYmFjay1idXR0b25cIiAoY2xpY2spPVwiYmFjaygpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt7IGJ1dHRvbkJhY2sgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd1NpZ25VcFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzaWdudXBcIiBkYXRhLXRlc3Q9XCJsb2dpblNpZ25VcFwiIChjbGljayk9XCJuZXdVc2VyKClcIj5TaWduVXAgaGVyZSE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCIhdmFsaWRhdGUgJiYgIW90cFwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgbWFyZ2luLXRvcDogMTBweDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcmdvdHB3ZFwiIGRhdGEtdGVzdD1cImxvZ2luRm9yZ290UGFzc3dvcmRcIiAoY2xpY2spPVwiZ29Ub0ZvcmdvdFBhc3N3b3JkKClcIj5cclxuICAgICAgICAgICAgICAgIDx1Pnt7IGZvcmdldFBhc3N3b3JkIH19PC91PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm90cFwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgbWFyZ2luLXRvcDogMTBweDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcmdvdHB3ZFwiIGRhdGEtdGVzdD1cImxvZ2luTWFuYWdlTWV0aG9kc1wiPlxyXG4gICAgICAgICAgICAgICAgPHUgY2xhc3M9XCJwb2ludGVyXCIgKGNsaWNrKT1cImdvVG9TdG9yZSgpXCI+e3sgbWFuYWdlTWV0aG9kcyB9fTwvdT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDA7IHdpZHRoOiAxMDAlOyB6LWluZGV4OiAwXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjb3B5cmlnaHQgY29weXJpZ2h0LWFic1wiPkxvZ2luIHt7IGxpYl92ZXJzaW9uIH19IDIwMTcgLSB7eyBjdXJyZW50WWVhciB9fSwgWnVjY2hldHRpIHMucC5hLjwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19