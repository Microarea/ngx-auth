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
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
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
    i0.ɵɵadvance();
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
    i0.ɵɵadvance();
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
    i0.ɵɵtemplate(5, TbLoginComponent_div_7_span_5_Template, 2, 0, "span", 4)(6, TbLoginComponent_div_7_span_6_Template, 2, 0, "span", 4)(7, TbLoginComponent_div_7_span_7_Template, 2, 1, "span", 4)(8, TbLoginComponent_div_7_span_8_Template, 2, 0, "span", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.otpTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.otpMessage, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.otpInfo.TwoFactorType === 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.otpInfo.TwoFactorType === 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.otpInfo.TwoFactorType === 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.otpInfo.TwoFactorType === null);
} }
function TbLoginComponent_kendo_floatinglabel_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 28)(1, "input", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_10_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r23.loginRequest.accountName, $event) || (ctx_r23.loginRequest.accountName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function TbLoginComponent_kendo_floatinglabel_10_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.keyUpFunction($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r3.accountName)("ngClass", ctx_r3.authService.errorMessage ? "border-bottom-error" : "border-bottom");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.loginRequest.accountName);
    i0.ɵɵproperty("ngClass", ctx_r3.authService.errorMessage ? "error-status" : "normal-state");
} }
function TbLoginComponent_kendo_floatinglabel_11_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_11_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r28.hide = !ctx_r28.hide); });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_11_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_11_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r30.hide = !ctx_r30.hide); });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_11_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 30)(1, "input", 31);
    i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_11_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r32.loginRequest.password, $event) || (ctx_r32.loginRequest.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function TbLoginComponent_kendo_floatinglabel_11_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.keyUpFunction($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, TbLoginComponent_kendo_floatinglabel_11_span_2_Template, 2, 0, "span", 32)(3, TbLoginComponent_kendo_floatinglabel_11_span_3_Template, 2, 0, "span", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r4.authService.errorMessage ? "border-bottom-error" : "border-bottom");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.loginRequest.password);
    i0.ɵɵproperty("type", ctx_r4.hide ? "password" : "text")("ngClass", ctx_r4.authService.errorMessage ? "error-status" : "normal-state");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.hide === true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.hide === false);
} }
function TbLoginComponent_div_12_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dataItem_r40 = ctx.$implicit;
    i0.ɵɵattribute("data-sub", dataItem_r40.subscriptionkey)("data-description", dataItem_r40.description)("data-instance", dataItem_r40.instancekey);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", dataItem_r40.description, " ");
} }
function TbLoginComponent_div_12_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r42); i0.ɵɵnextContext(); const _r35 = i0.ɵɵreference(3); const ctx_r41 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r41.toggle(_r35)); });
    i0.ɵɵtext(1, " arrow_circle_up ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 42);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r44); i0.ɵɵnextContext(); const _r35 = i0.ɵɵreference(3); const ctx_r43 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r43.toggle(_r35)); });
    i0.ɵɵtext(1, " arrow_circle_down ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" Subscription key: ", ctx_r39.loginRequest.subscriptionKey, " ", ctx_r39.instancekey, " ");
} }
const _c1 = (a0, a1) => [a0, a1];
function TbLoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "kendo-floatinglabel", 28)(2, "kendo-dropdownlist", 35, 36);
    i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r45.loginRequest.subscriptionKey, $event) || (ctx_r45.loginRequest.subscriptionKey = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r47 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r47.onSubChange($event)); })("click", function TbLoginComponent_div_12_Template_kendo_dropdownlist_click_2_listener() { i0.ɵɵrestoreView(_r46); const ctx_r48 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r48.isDropDownClicked()); });
    i0.ɵɵtemplate(4, TbLoginComponent_div_12_ng_template_4_Template, 2, 4, "ng-template", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TbLoginComponent_div_12_span_5_Template, 2, 0, "span", 38)(6, TbLoginComponent_div_12_span_6_Template, 2, 0, "span", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtemplate(8, TbLoginComponent_div_12_p_8_Template, 2, 2, "p", 40);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("text", ctx_r5.subscription);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c1, ctx_r5.authService.errorMessage ? "border-bottom-error" : "", ctx_r5.dropDownIsClicked ? "" : "border-bottom"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", (ctx_r5.loginSubscriptions == null ? null : ctx_r5.loginSubscriptions.length) <= 1)("data", ctx_r5.loginSubscriptions);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r5.loginRequest.subscriptionKey);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r5.dropDownIsClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r5.dropDownIsClicked);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.loginSubscriptions.length > 3);
} }
function TbLoginComponent_kendo_floatinglabel_13_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r52); const ctx_r51 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r51.hideOtp = !ctx_r51.hideOtp); });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r54); const ctx_r53 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r53.hideOtp = !ctx_r53.hideOtp); });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 28)(1, "input", 44);
    i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_13_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r55.inputValue, $event) || (ctx_r55.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function TbLoginComponent_kendo_floatinglabel_13_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r57 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r57.keyUpFunction($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, TbLoginComponent_kendo_floatinglabel_13_span_2_Template, 2, 0, "span", 32)(3, TbLoginComponent_kendo_floatinglabel_13_span_3_Template, 2, 0, "span", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r6.code)("ngClass", ctx_r6.authService.errorMessage ? "border-bottom-error" : "border-bottom");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r6.inputValue);
    i0.ɵɵproperty("type", ctx_r6.hideOtp ? "password" : "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r6.hideOtp === true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r6.hideOtp === false);
} }
function TbLoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 45)(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 46)(5, "input", 47);
    i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_div_14_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r58.loginRequest.overwriteLogin, $event) || (ctx_r58.loginRequest.overwriteLogin = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label", 48);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3("", ctx_r7.loginRequest.accountName, " ", ctx_r7.useralreadyloggedTitle, " ", ctx_r7.useralreadyloggedMessage, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r7.loginRequest.overwriteLogin);
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
    i0.ɵɵadvance();
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
    i0.ɵɵadvance();
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
    i0.ɵɵlistener("click", function TbLoginComponent_div_19_u_3_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r70); const ctx_r69 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r69.alternativeMethods(ctx_r69.otpInfo.TwoFactorType)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TbLoginComponent_div_19_u_3_span_2_Template, 2, 0, "span", 4)(3, TbLoginComponent_div_19_u_3_span_3_Template, 2, 0, "span", 4)(4, TbLoginComponent_div_19_u_3_span_4_Template, 2, 1, "span", 4)(5, TbLoginComponent_div_19_u_3_span_5_Template, 2, 0, "span", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r61 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r61.resendOTPLabel, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r61.otpInfo.TwoFactorType === 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r61.otpInfo.TwoFactorType === 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r61.otpInfo.TwoFactorType === 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r61.otpInfo.TwoFactorType === null);
} }
function TbLoginComponent_div_19_div_4_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 63);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r71.otpText, " ");
} }
function TbLoginComponent_div_19_div_4_u_2_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 64);
    i0.ɵɵlistener("click", function TbLoginComponent_div_19_div_4_u_2_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r76); const ctx_r75 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r75.alternativeMethods(1)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r72 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r72.otpRequestCode, " SMS");
} }
function TbLoginComponent_div_19_div_4_u_3_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 64);
    i0.ɵɵlistener("click", function TbLoginComponent_div_19_div_4_u_3_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r78); const ctx_r77 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r77.alternativeMethods(2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r73 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r73.otpRequestCode, " E-mail");
} }
function TbLoginComponent_div_19_div_4_u_4_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 65);
    i0.ɵɵlistener("click", function TbLoginComponent_div_19_div_4_u_4_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r80); const ctx_r79 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r79.alternativeMethods(4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r74 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r74.useAuthApp);
} }
function TbLoginComponent_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, TbLoginComponent_div_19_div_4_p_1_Template, 2, 1, "p", 60)(2, TbLoginComponent_div_19_div_4_u_2_Template, 2, 1, "u", 61)(3, TbLoginComponent_div_19_div_4_u_3_Template, 2, 1, "u", 61)(4, TbLoginComponent_div_19_div_4_u_4_Template, 2, 1, "u", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r62.otpInfo.Email && ctx_r62.otpInfo.TOTPConfigured || ctx_r62.otpInfo.MobilePhoneNr);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r62.otpInfo.TwoFactorType !== 1 && ctx_r62.otpInfo.MobilePhoneNr);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r62.otpInfo.TwoFactorType !== 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r62.otpInfo.TOTPConfigured && ctx_r62.otpInfo.TwoFactorType !== 4);
} }
function TbLoginComponent_div_19_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "u", 67);
    i0.ɵɵlistener("click", function TbLoginComponent_div_19_ng_template_5_Template_u_click_2_listener() { i0.ɵɵrestoreView(_r82); const ctx_r81 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r81.goToStore()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r63 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r63.oneMethodOnly, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r63.alternativeMethod, " ");
} }
function TbLoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 53);
    i0.ɵɵtemplate(2, TbLoginComponent_div_19_p_2_Template, 2, 1, "p", 54)(3, TbLoginComponent_div_19_u_3_Template, 6, 5, "u", 55)(4, TbLoginComponent_div_19_div_4_Template, 5, 4, "div", 56)(5, TbLoginComponent_div_19_ng_template_5_Template, 4, 2, "ng-template", null, 57, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r64 = i0.ɵɵreference(6);
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r11.otpInfo.TwoFactorType === 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r11.otpInfo.TwoFactorType !== 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r11.otpInfo.TOTPConfigured || ctx_r11.otpInfo.MobilePhoneNr)("ngIfElse", _r64);
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
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r13.buttonText);
} }
function TbLoginComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "button", 69);
    i0.ɵɵlistener("click", function TbLoginComponent_div_25_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r84); const ctx_r83 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r83.back()); });
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
    i0.ɵɵlistener("click", function TbLoginComponent_div_27_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r86); const ctx_r85 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r85.newUser()); });
    i0.ɵɵtext(2, "SignUp here!");
    i0.ɵɵelementEnd()();
} }
function TbLoginComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71)(1, "p", 72);
    i0.ɵɵlistener("click", function TbLoginComponent_div_28_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r88); const ctx_r87 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r87.goToForgotPassword()); });
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
    i0.ɵɵlistener("click", function TbLoginComponent_div_29_Template_u_click_2_listener() { i0.ɵɵrestoreView(_r90); const ctx_r89 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r89.goToStore()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r17.manageMethods);
} }
const _c2 = a0 => ({ "background-image": a0 });
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
            this.authService.useDCS = appRedirect && appRedirect === 'DCS_APP';
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
    async back() {
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
                //fai cose 116
                this.useralreadylogged = true;
            }
            if (result && result.Result) {
                const sd = this.loginSubscriptions.find((s) => s.subscriptionkey === this.loginRequest.subscriptionKey);
                if (sd) {
                    //chiamero' sempre l' api che fara' tutti i controlli del caso in modo da sganciare la librari da logiche che potrebbero cambiare.
                    const result1 = await this.authService.getCalendar(this.loginRequest.subscriptionKey);
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
                this.loading = false;
                //116?
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
    /** @nocollapse */ static { this.ɵfac = function TbLoginComponent_Factory(t) { return new (t || TbLoginComponent)(i0.ɵɵdirectiveInject(i1.TbAuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.MatDialog), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(DOCUMENT)); }; }
    /** @nocollapse */ static { this.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: TbLoginComponent, selectors: [["tb-login"]], viewQuery: function TbLoginComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
        } }, decls: 33, vars: 25, consts: [[1, "login-container", 3, "ngStyle"], [1, "login", 2, "z-index", "1"], [1, "login-header"], ["mat-card-image", "", 2, "width", "60%", 3, "src"], [4, "ngIf"], [1, "login-form"], [3, "text", "ngClass", 4, "ngIf"], ["text", "Password", 3, "ngClass", 4, "ngIf"], ["class", "form-control", 4, "ngIf"], ["class", "login-infos", 4, "ngIf"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", "style", "white-space: pre-wrap", 4, "ngIf"], ["class", "login-info panel flex-center", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "60px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", "data-test", "loginButton", 1, "buttons", "login-button", 3, "disabled", "click"], ["data-test", "loginLoadingButton", "class", "k-icon k-i-loading", 4, "ngIf"], ["class", "login-footer", 4, "ngIf"], [1, "login-footer"], ["style", "display: flex; margin-top: 10px; justify-content: flex-end", 4, "ngIf"], [2, "position", "absolute", "bottom", "0", "width", "100%", "z-index", "0"], [1, "copyright", "copyright-abs"], [1, "margin-h1", "title"], ["class", "login-expired-subtitle description", 4, "ngIf"], [1, "description"], [1, "login-expired-subtitle", "description"], [1, "description", 2, "width", "350px"], [3, "text", "ngClass"], ["kendoTextBox", "", "data-test", "loginAccountName", "name", "accountName", "type", "text", 3, "ngModel", "ngClass", "ngModelChange", "keyup"], ["text", "Password", 3, "ngClass"], ["kendoTextBox", "", "data-test", "loginPassword", "name", "password", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "ngModelChange", "keyup"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], [1, "material-icons", "icon", 3, "click"], [1, "form-control"], ["data-test", "loginDropDownSubscription", "name", "subscription", "textField", "description", "valueField", "subscriptionkey", "valuePrimitive", "true", 1, "kendo-dropdown", 3, "disabled", "data", "ngModel", "ngModelChange", "click"], ["dropdown", ""], ["kendoDropDownListItemTemplate", ""], ["data-test", "loginDropDownSubscriptionArrowUp", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowDown", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["class", "instancekey", "data-test", "loginParagraphInstanceKey", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowUp", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginDropDownSubscriptionArrowDown", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginParagraphInstanceKey", 1, "instancekey"], ["kendoTextBox", "", "data-test", "loginAccountNameOtp", "name", "accountNameOtp", "type", "password", 1, "normal-state", 3, "ngModel", "type", "ngModelChange", "keyup"], [1, "login-warning", "flex-center", 2, "display", "flex", "justify-content", "flex-end", "flex-direction", "column", "white-space", "pre-wrap"], [1, "wrap"], ["type", "checkbox", "id", "binding", "name", "useralreadyloggedAccepted", "kendoCheckBox", "", 3, "ngModel", "ngModelChange"], ["for", "binding", 1, "k-checkbox-label"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5", 2, "white-space", "pre-wrap"], [1, "login-info", "panel", "flex-center"], [2, "display", "flex", "justify-content", "flex-end", "flex-direction", "column"], ["class", "description", "style", "margin-bottom: 0px !important", 4, "ngIf"], ["class", "link pointer", "data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 3, "click", 4, "ngIf"], ["class", "login-header", 4, "ngIf", "ngIfElse"], ["onlyOneMethodConfigured", ""], [1, "description", 2, "margin-bottom", "0px !important"], ["data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 1, "link", "pointer", 3, "click"], ["style", "margin: 10px 0; font-weight: 600; color: #005890", 4, "ngIf"], ["class", "link pointer", "data-test", "loginAlternativeSms", 3, "click", 4, "ngIf"], ["class", "link pointer", "data-test", "loginAlternativeApp", 3, "click", 4, "ngIf"], [2, "margin", "10px 0", "font-weight", "600", "color", "#005890"], ["data-test", "loginAlternativeSms", 1, "link", "pointer", 3, "click"], ["data-test", "loginAlternativeApp", 1, "link", "pointer", 3, "click"], [1, "link", 2, "margin-top", "10px", "font-weight", "600", "color", "#005890"], [1, "pointer", 3, "click"], ["data-test", "loginLoadingButton", 1, "k-icon", "k-i-loading"], ["kendoButton", "", "data-test", "loginBackButton", 1, "buttons", "back-button", 3, "click"], ["data-test", "loginSignUp", 1, "signup", 3, "click"], [2, "display", "flex", "margin-top", "10px", "justify-content", "flex-end"], ["data-test", "loginForgotPassword", 1, "forgotpwd", 3, "click"], ["data-test", "loginManageMethods", 1, "forgotpwd"]], template: function TbLoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
            i0.ɵɵelement(4, "img", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, TbLoginComponent_div_5_Template, 6, 3, "div", 4)(6, TbLoginComponent_div_6_Template, 5, 3, "div", 4)(7, TbLoginComponent_div_7_Template, 9, 6, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "form")(9, "div", 5);
            i0.ɵɵtemplate(10, TbLoginComponent_kendo_floatinglabel_10_Template, 2, 4, "kendo-floatinglabel", 6)(11, TbLoginComponent_kendo_floatinglabel_11_Template, 4, 6, "kendo-floatinglabel", 7)(12, TbLoginComponent_div_12_Template, 9, 11, "div", 8)(13, TbLoginComponent_kendo_floatinglabel_13_Template, 4, 6, "kendo-floatinglabel", 6)(14, TbLoginComponent_div_14_Template, 8, 5, "div", 9);
            i0.ɵɵelementStart(15, "div", 10);
            i0.ɵɵtemplate(16, TbLoginComponent_div_16_Template, 3, 1, "div", 11)(17, TbLoginComponent_div_17_Template, 3, 1, "div", 12)(18, TbLoginComponent_div_18_Template, 3, 1, "div", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(19, TbLoginComponent_div_19_Template, 7, 4, "div", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 14)(21, "div", 15)(22, "button", 16);
            i0.ɵɵlistener("click", function TbLoginComponent_Template_button_click_22_listener() { return ctx.login(); });
            i0.ɵɵtemplate(23, TbLoginComponent_span_23_Template, 1, 0, "span", 17)(24, TbLoginComponent_span_24_Template, 2, 1, "span", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(25, TbLoginComponent_div_25_Template, 4, 1, "div", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 19);
            i0.ɵɵtemplate(27, TbLoginComponent_div_27_Template, 3, 0, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(28, TbLoginComponent_div_28_Template, 4, 1, "div", 20)(29, TbLoginComponent_div_29_Template, 4, 1, "div", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div", 21)(31, "p", 22);
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(23, _c2, "url(" + ctx.backgroundURL + ")"));
            i0.ɵɵadvance(4);
            i0.ɵɵpropertyInterpolate("src", ctx.logoURL, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.validate && !ctx.otp);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.validate && !ctx.otp);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.otp);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.validate && !ctx.otp);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.validate && !ctx.otp);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.subscriptionSelection && ctx.validate && !ctx.otp);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.otp);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.useralreadylogged);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.capsLockOn);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.authService.errorMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.authService.okMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.otp);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.disabledButton());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.validate || ctx.otp);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showSignUp);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.validate && !ctx.otp);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.otp);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("Login ", ctx.lib_version, " 2017 - ", ctx.currentYear, ", Zucchetti s.p.a.");
        } }, dependencies: [i4.NgClass, i4.NgIf, i4.NgStyle, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.CheckboxControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i6.ItemTemplateDirective, i6.DropDownListComponent, i7.LabelDirective, i7.FloatingLabelComponent, i8.TextBoxDirective, i8.CheckBoxDirective], styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list[_ngcontent-%COMP%]{background:#F4F4F4;color:#005890;max-height:100px;width:370px!important}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{background:#bfcdd5}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar:hover{background:#d9d9d9}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#6cafd1}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#005890}.k-list[_ngcontent-%COMP%]   .k-list-item.k-selected[_ngcontent-%COMP%]{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%]:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width: 490px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:323px!important}}@media screen and (max-width: 425px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:273px!important}}@media screen and (max-width: 375px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:217px!important}}.k-list-md[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%], .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}.k-list-item-text[_ngcontent-%COMP%]{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;line-height:20px;margin-bottom:30px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.link[_ngcontent-%COMP%], tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:3px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#E7481C;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#E7481C}.login-infos[_ngcontent-%COMP%]   .login-warning[_ngcontent-%COMP%]{background:#E79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4AB679}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:#C0C0C0}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#E77B2D}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#FF9E18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:#808080}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9F9F9F}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4AB679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68B388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#D03C13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#E7481C}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}  .mat-dialog-container{color:#005890!important;background:white!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9F9F9F}  .mat-dialog-container .login-footer .back-button{background:#808080}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:#C0C0C0}  .mat-dialog-container .login-footer .ok-button{background:#4AB679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68B388}  .k-floating-label-container{width:100%;margin:8px 0}  .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea:focus{background-color:#fff!important}  .k-floating-label-container .k-textbox::-moz-selection,   .k-floating-label-container .k-input::-moz-selection,   .k-floating-label-container .k-textarea::-moz-selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-textbox::selection,   .k-floating-label-container .k-input::selection,   .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-picker-md .k-input-inner{background:white!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}  .k-floating-label-container .k-picker{border-width:0px;border-style:unset}  .k-floating-label-container .k-picker:focus-within{box-shadow:none}  .k-floating-label-container .k-picker:focus{box-shadow:none}  .k-floating-label-container:after{background-color:#8ee2ff;height:1px}  .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}  .k-floating-label-container .k-dropdown{border:none;background:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0B85CE}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}  html,   body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}tb-login[_nghost-%COMP%]{font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}}@media screen and (min-width: 576px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:450px}}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .upicon[_ngcontent-%COMP%]{transform:rotate(90deg);padding:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .downicon[_ngcontent-%COMP%]{transform:rotate(270deg)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .k-i-loading[_ngcontent-%COMP%]{font-size:20px}tb-login[_nghost-%COMP%]   p.instancekey[_ngcontent-%COMP%]{font-size:9px;font-weight:300;text-indent:1px;color:#005890}tb-login[_nghost-%COMP%]   p.copyright[_ngcontent-%COMP%]{font-size:10px;font-weight:300;margin:0;color:#fff}tb-login[_nghost-%COMP%]   p.copyright-abs[_ngcontent-%COMP%]{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{cursor:pointer;text-align:right}tb-login[_nghost-%COMP%]   p.signup[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}tb-login[_nghost-%COMP%]   .margin-h1[_ngcontent-%COMP%]{margin-left:-2px;margin-top:20px}tb-login[_nghost-%COMP%]   .margin-p[_ngcontent-%COMP%]{margin-left:-1.5px;margin-top:-10px}tb-login[_nghost-%COMP%]   .login-expired-subtitle[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}tb-login[_nghost-%COMP%]   .login-chooseSubscription[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-size:x-large}}tb-login[_nghost-%COMP%]     .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, tb-login[_nghost-%COMP%]   .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#005890}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLoginComponent, [{
        type: Component,
        args: [{ selector: 'tb-login', template: "<div class=\"login-container\" [ngStyle]=\"{ 'background-image': 'url(' + backgroundURL + ')' }\">\n    <div class=\"login\" style=\"z-index: 1\">\n        <div class=\"login-header\">\n            <div>\n                <img mat-card-image style=\"width: 60%\" src=\"{{ logoURL }}\" />\n            </div>\n            <div *ngIf=\"!validate && !otp\">\n                <h1 class=\"margin-h1 title\">{{ welcome }}</h1>\n                <p *ngIf=\"isExpiredSession\" class=\"login-expired-subtitle description\">{{ idleTimeoutMessage }}</p>\n                <p class=\"description\">{{ enterCredentials }}</p>\n            </div>\n            <div *ngIf=\"validate && !otp\">\n                <h1 class=\"margin-h1 title\">{{ chooseSubscription }}</h1>\n                <p class=\"description\">{{ accountName }}: {{ loginRequest.accountName }}</p>\n            </div>\n            <div *ngIf=\"otp\">\n                <h1 class=\"margin-h1 title\">{{ otpTitle }}</h1>\n                <p class=\"description\" style=\"width: 350px\">\n                    {{ otpMessage }}\n                    <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\n                    <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\n                    <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ authAppText }}</span>\n                    <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\n                </p>\n            </div>\n        </div>\n\n        <form>\n            <div class=\"login-form\">\n                <kendo-floatinglabel\n                    [text]=\"accountName\"\n                    *ngIf=\"!validate && !otp\"\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\n                >\n                    <input\n                        kendoTextBox\n                        data-test=\"loginAccountName\"\n                        [(ngModel)]=\"loginRequest.accountName\"\n                        (keyup)=\"keyUpFunction($event)\"\n                        name=\"accountName\"\n                        type=\"text\"\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n                    />\n                </kendo-floatinglabel>\n\n                <kendo-floatinglabel\n                    text=\"Password\"\n                    *ngIf=\"!validate && !otp\"\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\n                >\n                    <input\n                        kendoTextBox\n                        data-test=\"loginPassword\"\n                        [(ngModel)]=\"loginRequest.password\"\n                        (keyup)=\"keyUpFunction($event)\"\n                        name=\"password\"\n                        [type]=\"hide ? 'password' : 'text'\"\n                        autocomplete=\"current-password\"\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n                    />\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === true\" class=\"material-icons icon\"> visibility </span>\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === false\" class=\"material-icons icon\"> visibility_off </span>\n                </kendo-floatinglabel>\n\n                <div class=\"form-control\" *ngIf=\"subscriptionSelection && validate && !otp\">\n                    <kendo-floatinglabel\n                        text=\"{{ subscription }}\"\n                        [ngClass]=\"[authService.errorMessage ? 'border-bottom-error' : '', dropDownIsClicked ? '' : 'border-bottom']\"\n                    >\n                        <kendo-dropdownlist\n                            #dropdown\n                            data-test=\"loginDropDownSubscription\"\n                            [disabled]=\"loginSubscriptions?.length <= 1\"\n                            [data]=\"loginSubscriptions\"\n                            name=\"subscription\"\n                            textField=\"description\"\n                            valueField=\"subscriptionkey\"\n                            valuePrimitive=\"true\"\n                            [(ngModel)]=\"loginRequest.subscriptionKey\"\n                            class=\"kendo-dropdown\"\n                            (ngModelChange)=\"onSubChange($event)\"\n                            (click)=\"isDropDownClicked()\"\n                        >\n                            <ng-template kendoDropDownListItemTemplate let-dataItem>\n                                <div\n                                    attr.data-sub=\"{{ dataItem.subscriptionkey }}\"\n                                    attr.data-description=\"{{ dataItem.description }}\"\n                                    attr.data-instance=\"{{ dataItem.instancekey }}\"\n                                >\n                                    {{ dataItem.description }}\n                                </div>\n                            </ng-template>\n                        </kendo-dropdownlist>\n                        <span\n                            data-test=\"loginDropDownSubscriptionArrowUp\"\n                            (click)=\"toggle(dropdown)\"\n                            *ngIf=\"dropDownIsClicked\"\n                            class=\"material-symbols-rounded icon\"\n                        >\n                            arrow_circle_up\n                        </span>\n                        <span\n                            data-test=\"loginDropDownSubscriptionArrowDown\"\n                            (click)=\"toggle(dropdown)\"\n                            *ngIf=\"!dropDownIsClicked\"\n                            class=\"material-symbols-rounded icon\"\n                        >\n                            arrow_circle_down\n                        </span>\n                    </kendo-floatinglabel>\n                    <div>\n                        <p class=\"instancekey\" data-test=\"loginParagraphInstanceKey\" *ngIf=\"loginSubscriptions.length > 3\">\n                            Subscription key: {{ loginRequest.subscriptionKey }} {{ instancekey }}\n                        </p>\n                    </div>\n                </div>\n\n                <kendo-floatinglabel\n                    [text]=\"code\"\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\n                    *ngIf=\"otp\"\n                >\n                    <input\n                        kendoTextBox\n                        data-test=\"loginAccountNameOtp\"\n                        [(ngModel)]=\"inputValue\"\n                        (keyup)=\"keyUpFunction($event)\"\n                        name=\"accountNameOtp\"\n                        [type]=\"hideOtp ? 'password' : 'text'\"\n                        type=\"password\"\n                        class=\"normal-state\"\n                    />\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === true\" class=\"material-icons icon\"> visibility </span>\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === false\" class=\"material-icons icon\"> visibility_off </span>\n                </kendo-floatinglabel>\n\n                <!-- AlredyLogged -->\n                <div *ngIf=\"useralreadylogged\" class=\"login-infos\">\n                    <div\n                        style=\"display: flex; justify-content: flex-end; flex-direction: column; white-space: pre-wrap\"\n                        class=\"login-warning flex-center\"\n                    >\n                        <p>{{ loginRequest.accountName }} {{ useralreadyloggedTitle }} {{ useralreadyloggedMessage }}</p>\n                    </div>\n                    <div class=\"wrap\">\n                        <input\n                            type=\"checkbox\"\n                            id=\"binding\"\n                            [(ngModel)]=\"loginRequest.overwriteLogin\"\n                            name=\"useralreadyloggedAccepted\"\n                            kendoCheckBox\n                        />\n                        <label class=\"k-checkbox-label\" for=\"binding\"> {{ useralreadyloggedOK }}</label>\n                    </div>\n                </div>\n                <!--END AlredyLogged ---------------- -->\n\n                <div class=\"login-infos\">\n                    <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\n                        <p class=\"no-margin\">{{ blocMaiusc }}</p>\n                    </div>\n                    <div\n                        class=\"login-error panel flex-center margin-bottom-5\"\n                        *ngIf=\"authService.errorMessage\"\n                        style=\"white-space: pre-wrap\"\n                    >\n                        <p class=\"no-margin\">{{ authService.errorMessage }}</p>\n                    </div>\n                    <div class=\"login-info panel flex-center\" *ngIf=\"authService.okMessage\">\n                        <p class=\"no-margin\">{{ authService.okMessage }}</p>\n                    </div>\n                </div>\n\n                <div *ngIf=\"otp\">\n                    <div style=\"display: flex; justify-content: flex-end; flex-direction: column\">\n                        <p class=\"description\" style=\"margin-bottom: 0px !important\" *ngIf=\"otpInfo.TwoFactorType === 4\">\n                            {{ TOTPDescription }}\n                        </p>\n\n                        <u\n                            class=\"link pointer\"\n                            data-test=\"loginResendOtp\"\n                            (click)=\"alternativeMethods(otpInfo.TwoFactorType)\"\n                            data-test=\"loginAlternativeOtp\"\n                            *ngIf=\"otpInfo.TwoFactorType !== 4\"\n                            >{{ resendOTPLabel }}\n                            <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\n                            <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\n                            <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ chosenAuthApp }}</span>\n                            <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\n                        </u>\n                        <div class=\"login-header\" *ngIf=\"otpInfo.TOTPConfigured || otpInfo.MobilePhoneNr; else onlyOneMethodConfigured\">\n                            <p\n                                style=\"margin: 10px 0; font-weight: 600; color: #005890\"\n                                *ngIf=\"(otpInfo.Email && otpInfo.TOTPConfigured) || otpInfo.MobilePhoneNr\"\n                            >\n                                {{ otpText }}\n                            </p>\n                            <u\n                                class=\"link pointer\"\n                                *ngIf=\"otpInfo.TwoFactorType !== 1 && otpInfo.MobilePhoneNr\"\n                                (click)=\"alternativeMethods(1)\"\n                                data-test=\"loginAlternativeSms\"\n                                >{{ otpRequestCode }} SMS</u\n                            >\n                            <u\n                                class=\"link pointer\"\n                                *ngIf=\"otpInfo.TwoFactorType !== 2\"\n                                (click)=\"alternativeMethods(2)\"\n                                data-test=\"loginAlternativeSms\"\n                                >{{ otpRequestCode }} E-mail</u\n                            >\n                            <u\n                                class=\"link pointer\"\n                                *ngIf=\"otpInfo.TOTPConfigured && otpInfo.TwoFactorType !== 4\"\n                                (click)=\"alternativeMethods(4)\"\n                                data-test=\"loginAlternativeApp\"\n                                >{{ useAuthApp }}</u\n                            >\n                        </div>\n                        <ng-template #onlyOneMethodConfigured>\n                            <p class=\"link\" style=\"margin-top: 10px; font-weight: 600; color: #005890\">\n                                {{ oneMethodOnly }}\n                                <u class=\"pointer\" (click)=\"goToStore()\"> {{ alternativeMethod }} </u>\n                            </p>\n                        </ng-template>\n                    </div>\n                </div>\n            </div>\n        </form>\n\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 60px\">\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n                <button kendoButton data-test=\"loginButton\" class=\"buttons login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\n                    <span data-test=\"loginLoadingButton\" class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\n                    <span *ngIf=\"!loading\">{{ buttonText }}</span>\n                </button>\n            </div>\n\n            <div class=\"login-footer\" *ngIf=\"(!loading && validate) || otp\">\n                <button kendoButton data-test=\"loginBackButton\" class=\"buttons back-button\" (click)=\"back()\">\n                    <span> {{ buttonBack }}</span>\n                </button>\n            </div>\n        </div>\n        <div class=\"login-footer\">\n            <div *ngIf=\"showSignUp\">\n                <p class=\"signup\" data-test=\"loginSignUp\" (click)=\"newUser()\">SignUp here!</p>\n            </div>\n        </div>\n        <div *ngIf=\"!validate && !otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\n            <p class=\"forgotpwd\" data-test=\"loginForgotPassword\" (click)=\"goToForgotPassword()\">\n                <u>{{ forgetPassword }}</u>\n            </p>\n        </div>\n        <div *ngIf=\"otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\n            <p class=\"forgotpwd\" data-test=\"loginManageMethods\">\n                <u class=\"pointer\" (click)=\"goToStore()\">{{ manageMethods }}</u>\n            </p>\n        </div>\n    </div>\n    <div style=\"position: absolute; bottom: 0; width: 100%; z-index: 0\">\n        <p class=\"copyright copyright-abs\">Login {{ lib_version }} 2017 - {{ currentYear }}, Zucchetti s.p.a.</p>\n    </div>\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list{background:#F4F4F4;color:#005890;max-height:100px;width:370px!important}.k-list ::-webkit-scrollbar{background:#bfcdd5}.k-list ::-webkit-scrollbar:hover{background:#d9d9d9}.k-list ::-webkit-scrollbar-thumb{background:#6cafd1}.k-list ::-webkit-scrollbar-thumb:hover{background:#005890}.k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}.kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width: 490px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}.kendo-dropdown{width:323px!important}}@media screen and (max-width: 425px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}.kendo-dropdown{width:273px!important}}@media screen and (max-width: 375px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}.kendo-dropdown{width:217px!important}}.k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}.k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;line-height:20px;margin-bottom:30px}.pointer{cursor:pointer}.link,:host(tb-login) p.forgotpwd{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom{border-bottom:1px solid #0B85CE}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:rgba(0,0,0,.32)}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:3px 0}.login-infos .caps-lock{background:#E7481C;display:flex;align-items:center}.login-infos .login-error{background:#E7481C}.login-infos .login-warning{background:#E79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos .login-info{background:#4AB679}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:#C0C0C0}.login-footer .login-button{background:#E77B2D}.login-footer .login-button:hover:enabled{background:#FF9E18}.login-footer .back-button{background:#808080}.login-footer .back-button:hover:enabled{background:#9F9F9F}.login-footer .ok-button{background:#4AB679}.login-footer .ok-button:hover:enabled{background:#68B388}.login-footer .error-button{background:#D03C13}.login-footer .error-button:hover:enabled{background:#E7481C}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}::ng-deep .mat-dialog-container{color:#005890!important;background:white!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9F9F9F}::ng-deep .mat-dialog-container .login-footer .back-button{background:#808080}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:#C0C0C0}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4AB679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68B388}::ng-deep .k-floating-label-container{width:100%;margin:8px 0}::ng-deep .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea:focus{background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox::-moz-selection,::ng-deep .k-floating-label-container .k-input::-moz-selection,::ng-deep .k-floating-label-container .k-textarea::-moz-selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-textbox::selection,::ng-deep .k-floating-label-container .k-input::selection,::ng-deep .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-picker-md .k-input-inner{background:white!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}::ng-deep .k-floating-label-container .k-picker{border-width:0px;border-style:unset}::ng-deep .k-floating-label-container .k-picker:focus-within{box-shadow:none}::ng-deep .k-floating-label-container .k-picker:focus{box-shadow:none}::ng-deep .k-floating-label-container:after{background-color:#8ee2ff;height:1px}::ng-deep .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}::ng-deep .k-floating-label-container .k-dropdown{border:none;background:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0B85CE}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}::ng-deep html,::ng-deep body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}:host(tb-login){font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}:host(tb-login) .login-container{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}:host(tb-login) .login-container .login{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){:host(tb-login) .login-container .login{padding:20px}}@media screen and (min-width: 576px){:host(tb-login) .login-container .login{max-width:450px}}:host(tb-login) .login-container .login .upicon{transform:rotate(90deg);padding:1px}:host(tb-login) .login-container .login .downicon{transform:rotate(270deg)}:host(tb-login) .login-container .login .login-header{display:flex;flex-direction:column}:host(tb-login) .login-container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:0}:host(tb-login) .login-container .login .k-i-loading{font-size:20px}:host(tb-login) p.instancekey{font-size:9px;font-weight:300;text-indent:1px;color:#005890}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) p.forgotpwd{cursor:pointer;text-align:right}:host(tb-login) p.signup{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}:host(tb-login) .margin-h1{margin-left:-2px;margin-top:20px}:host(tb-login) .margin-p{margin-left:-1.5px;margin-top:-10px}:host(tb-login) .login-expired-subtitle{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}:host(tb-login) .login-chooseSubscription{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}:host(tb-login) .login-sign-in{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){:host(tb-login) .login{padding:20px}:host(tb-login) .login .login-form ::ng-deep .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){:host(tb-login) .login-sign-in{font-size:x-large}}:host(tb-login) ::ng-deep .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host(tb-login) .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#005890}\n"] }]
    }], () => [{ type: i1.TbAuthService }, { type: i2.Router }, { type: i3.MatDialog }, { type: i0.Renderer2 }, { type: i2.ActivatedRoute }, { type: undefined, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL3BhZ2VzL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztJQ0g1Qiw2QkFBdUU7SUFBQSxZQUF3QjtJQUFBLGlCQUFJOzs7SUFBNUIsY0FBd0I7SUFBeEIsZ0RBQXdCOzs7SUFGbkcsMkJBQStCLGFBQUE7SUFDQyxZQUFhO0lBQUEsaUJBQUs7SUFDOUMsb0VBQW1HO0lBQ25HLDZCQUF1QjtJQUFBLFlBQXNCO0lBQUEsaUJBQUksRUFBQTs7O0lBRnJCLGVBQWE7SUFBYixvQ0FBYTtJQUNyQyxjQUFzQjtJQUF0Qiw4Q0FBc0I7SUFDSCxlQUFzQjtJQUF0Qiw2Q0FBc0I7OztJQUVqRCwyQkFBOEIsYUFBQTtJQUNFLFlBQXdCO0lBQUEsaUJBQUs7SUFDekQsNkJBQXVCO0lBQUEsWUFB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QUNBLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUM3RDtJQUFDLE1BQU07UUFDSixPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENVQ2FsZW5kYXJKb2IsIExvZ2luUmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9tb2RlbHMvc3Vic2NyaXB0aW9uLm1vZGVsJztcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jnb3QtcGFzc3dvcmQtZGlhbG9nL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlckNvbnRlbnRJbml0LCBJbmplY3QsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFeHRyYUluZm8gfSBmcm9tICcuLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xuaW1wb3J0IHsgU3RyaW5ncyB9IGZyb20gJy4uL21vZGVscy9TdHJpbmdzJztcbmltcG9ydCB7IExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vLi4vdmVyc2lvbic7XG5pbXBvcnQgeyBPcGVyYXRpb25SZXN1bHQgfSBmcm9tICcuLi9tb2RlbHMvb3BlcmF0aW9uLXJlc3VsdCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGItbG9naW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXSxcbn0pXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjbGFzcyBUYkxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHJpdmF0ZSBjYWNoZWRDb21wYW5pZXM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIGNhcHNMb2NrT24gPSBmYWxzZTtcbiAgICB2YWxpZGF0ZSA9IGZhbHNlO1xuICAgIG90cCA9IGZhbHNlO1xuICAgIHVzZXJhbHJlYWR5bG9nZ2VkID0gZmFsc2U7XG4gICAgT0xEID0gZmFsc2U7XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0ID0gbmV3IExvZ2luUmVxdWVzdCgpO1xuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG4gICAgYnV0dG9uVGV4dDogc3RyaW5nO1xuICAgIG5leHRUZXh0OiBzdHJpbmc7XG4gICAgbG9naW5UZXh0OiBzdHJpbmc7XG4gICAgY3VycmVudFllYXI6IHN0cmluZztcbiAgICBjcmVhdGVBY2NvdW50VXJsOiBzdHJpbmc7XG4gICAgY2hhbmdlUGFzc3dvcmRVcmw6IHN0cmluZztcbiAgICBzdWJzY3JpcHRpb25TZWxlY3Rpb246IGJvb2xlYW47IC8vIGFiaWxpdGEgbGEgc2NlbHRhIGRlbGxhIHN1YnNjcmlwdGlvblxuICAgIHNob3dTaWduVXA6IGJvb2xlYW47IC8vIGFiaWxpdGEgbGEgcG9zc2liaWxpdMOgIGRpIHJlZ2lzdHJhcmUgbnVvdm8gYWNjb3VudFxuICAgIGxvZ2luU3Vic2NyaXB0aW9uczogQXJyYXk8eyBkZXNjcmlwdGlvbjogc3RyaW5nOyBzdWJzY3JpcHRpb25rZXk6IHN0cmluZzsgc3RhdHVzOiBudW1iZXI7IGluc3RhbmNla2V5OiBzdHJpbmcgfT4gPSBbXTtcbiAgICBsb2dvVVJMOiBzdHJpbmc7XG4gICAgYmFja2dyb3VuZFVSTDogc3RyaW5nO1xuICAgIGhpZGUgPSB0cnVlO1xuICAgIGhpZGVPdHAgPSB0cnVlO1xuICAgIGluc3RhbmNla2V5OiBzdHJpbmc7XG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIHB1YmxpYyBkb2N1bWVudD86IERvY3VtZW50O1xuICAgIGxpYl92ZXJzaW9uOiBzdHJpbmcgPSBMSUJfVkVSU0lPTjtcbiAgICAvLyB0ZXN0aSBpbiBpdGFsaWFubyBlZCBpbmdsZXNlXG4gICAgY2hvb3NlU3Vic2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZ29vZEpvYjogc3RyaW5nO1xuICAgIHN1YnNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGluc3RhbmNlOiBzdHJpbmc7XG4gICAgYnV0dG9uQmFjazogc3RyaW5nO1xuICAgIGFjY291bnROYW1lOiBzdHJpbmc7XG4gICAgZW50ZXJBY2NvdW5OYW1lOiBzdHJpbmc7XG4gICAgd2VsY29tZTogc3RyaW5nO1xuICAgIGVudGVyQ3JlZGVudGlhbHM6IHN0cmluZztcbiAgICBmb3JnZXRQYXNzd29yZDogc3RyaW5nO1xuICAgIGJsb2NNYWl1c2M6IHN0cmluZztcbiAgICBpZGxlVGltZW91dE1lc3NhZ2U6IHN0cmluZztcbiAgICBvdHBNZXNzYWdlOiBzdHJpbmc7XG4gICAgYXV0aEFwcFRleHQ6IHN0cmluZztcbiAgICBvdHBUaXRsZTogc3RyaW5nO1xuICAgIHJlc2VuZE9UUExhYmVsOiBzdHJpbmc7XG4gICAgY29kZTogc3RyaW5nO1xuICAgIGNob3NlbkF1dGhBcHA6IHN0cmluZztcbiAgICBvdHBUZXh0OiBzdHJpbmc7XG4gICAgb3RwUmVxdWVzdENvZGU6IHN0cmluZztcbiAgICB1c2VyYWxyZWFkeWxvZ2dlZE1lc3NhZ2U6IHN0cmluZztcbiAgICB1c2VyYWxyZWFkeWxvZ2dlZE9LOiBzdHJpbmc7XG4gICAgdXNlcmFscmVhZHlsb2dnZWRUaXRsZTogc3RyaW5nO1xuICAgIHVzZUF1dGhBcHA6IHN0cmluZztcbiAgICBvbmVNZXRob2RPbmx5OiBzdHJpbmc7XG4gICAgYWx0ZXJuYXRpdmVNZXRob2Q6IHN0cmluZztcbiAgICBtYW5hZ2VNZXRob2RzOiBzdHJpbmc7XG4gICAgVE9UUERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaW5wdXRWYWx1ZTogc3RyaW5nID0gJyc7XG4gICAgZHJvcERvd25Jc0NsaWNrZWQgPSBmYWxzZTtcbiAgICBjb21ib0JveElzQ2xpY2tlZCA9IGZhbHNlO1xuICAgIGljb25Jc0NsaWNrZWQgPSBmYWxzZTtcbiAgICBAVmlld0NoaWxkKCdkcm9wZG93bicpIGRyb3Bkb3duOiBhbnk7XG4gICAgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGxhbmd1YWdlSVQgPSB0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKTtcbiAgICBvdHBJbmZvOiBFeHRyYUluZm8gPSBuZXcgRXh0cmFJbmZvKCk7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSxcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYz86IGFueVxuICAgICkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ2NsaWNrJywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb21ib0JveElzQ2xpY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pY29uSXNDbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uSXNDbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wRG93bklzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kb2N1bWVudCA9IGRvYyBhcyBEb2N1bWVudDtcbiAgICAgICAgdGhpcy5jaGVja0Nvbm5lY3Rpb24oKTtcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYXBwSWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFwcElkKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uID0gYXV0aFNlcnZpY2UuaGFzU3Vic2NyaXB0aW9uU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuc2hvd1NpZ25VcCA9IGF1dGhTZXJ2aWNlLnNob3dTaWduVXAoKTtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFVybCA9IGF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQWNjb3VudFVybCA9IGF1dGhTZXJ2aWNlLmdldENyZWF0ZUFjY291bnRVcmwoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZFVybCA9IGF1dGhTZXJ2aWNlLmdldENoYW5nZVBhc3N3b3JkVXJsKCk7XG4gICAgICAgIHRoaXMubG9nb1VSTCA9IGF1dGhTZXJ2aWNlLmdldExvZ29VUkwoKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVVJMID0gYXV0aFNlcnZpY2UuZ2V0QmFja2dyb3VuZFVSTCgpO1xuICAgICAgICB0aGlzLmluc3RhbmNla2V5ID0gJyc7XG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFRleHQgPSAnYXZhbnRpJztcbiAgICAgICAgICAgIHRoaXMubG9naW5UZXh0ID0gJ2FjY2VkaSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5leHRUZXh0ID0gJ25leHQnO1xuICAgICAgICAgICAgdGhpcy5sb2dpblRleHQgPSAnbG9naW4nO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMudmFsaWRhdGUgfHwgIXRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xuICAgICAgICB0aGlzLmN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlU3Vic2NyaXB0aW9uID0gJ1NjZWdsaSBsYSB0dWEgc290dG9zY3JpemlvbmUnO1xuICAgICAgICAgICAgdGhpcy5nb29kSm9iID0gJ0J1b24gbGF2b3JvISc7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9ICdTb3R0b3Njcml6aW9uZSc7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gJ0lzdGFuemEnO1xuICAgICAgICAgICAgdGhpcy5idXR0b25CYWNrID0gJzwgSU5ESUVUUk8nO1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50TmFtZSA9ICdOb21lIHV0ZW50ZSc7XG4gICAgICAgICAgICB0aGlzLmVudGVyQWNjb3VuTmFtZSA9ICdJbnNlcmlzY2kgaWwgdHVvIG5vbWUgdXRlbnRlIGUgdGkgaW52aWVyZW1vIHVuYSBudW92YSBwYXNzd29yZCc7XG4gICAgICAgICAgICB0aGlzLndlbGNvbWUgPSAnQmVudmVudXRvIHN1ICcgKyBhdXRoU2VydmljZS5nZXRCcmFuZE5hbWUoKTtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJDcmVkZW50aWFscyA9ICdBdXRlbnRpY2F0aSBpbnNlcmVuZG8gbm9tZSB1dGVudGUgZSBwYXNzd29yZC4nO1xuICAgICAgICAgICAgdGhpcy5mb3JnZXRQYXNzd29yZCA9ICdIYWkgZGltZW50aWNhdG8gbGEgcGFzc3dvcmQgPyc7XG4gICAgICAgICAgICB0aGlzLmJsb2NNYWl1c2MgPSAnQmxvY2NvIG1haXVzY29sZSBhdHRpdm8nO1xuICAgICAgICAgICAgdGhpcy5pZGxlVGltZW91dE1lc3NhZ2UgPSAnTGEgdHVhIHNlc3Npb25lIMOoIHRlcm1pbmF0YSBwZXIgaW5hdHRpdml0w6AsIHB1b2kgcmlwcmVuZGVyZSBkYSBxdWkuJztcbiAgICAgICAgICAgIHRoaXMub3RwTWVzc2FnZSA9ICdJbnNlcmlzY2kgaWwgY29kaWNlIE9UUCBjaGUgaGFpIHJpY2V2dXRvIHRyYW1pdGUgJztcbiAgICAgICAgICAgIHRoaXMuYXV0aEFwcFRleHQgPSAnYXBwIGRpIGF1dGVudGljYXppb25lJztcbiAgICAgICAgICAgIHRoaXMub3RwVGl0bGUgPSAnQXV0ZW50aWNhemlvbmUgYSBkdWUgZmF0dG9yaSc7XG4gICAgICAgICAgICB0aGlzLnJlc2VuZE9UUExhYmVsID0gJ1JpY2hpZWRpIHVuIG51b3ZvIGNvZGljZSBPVFAgdmlhICc7XG4gICAgICAgICAgICB0aGlzLnVzZXJhbHJlYWR5bG9nZ2VkTWVzc2FnZSA9ICdWdW9pIGNvbnRpbnVhcmUgY29uIGxhIGxvZ2luPyBMYSBsb2dpbiBwcmVjZWRlbnRlIHZlcnLDoCBkaXNhYmlsaXRhdGEuJztcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRUaXRsZSA9ICcgw6ggZ2nDoCBjb25uZXNzbyBhIHF1ZXN0YSBzdWJzY3JpcHRpb24uJztcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRPSyA9ICdTw6wsIGNvbnRpbnVhIGNvbiBsYSBsb2dpbic7XG4gICAgICAgICAgICB0aGlzLmNvZGUgPSAnQ29kaWNlIE9UUCc7XG4gICAgICAgICAgICB0aGlzLmNob3NlbkF1dGhBcHAgPSAnYXBwIGRpIGF1dGVudGljYXppb25lIHNjZWx0YSc7XG4gICAgICAgICAgICB0aGlzLm90cFRleHQgPSAnT3BwdXJlJztcbiAgICAgICAgICAgIHRoaXMub3RwUmVxdWVzdENvZGUgPSAnUmljaGllZGkgY29kaWNlIHZpYSAnO1xuICAgICAgICAgICAgdGhpcy51c2VBdXRoQXBwID0gJ1V0aWxpenphIGxhIHR1YSBhcHAgZGkgYXV0ZW50aWNhemlvbmUnO1xuICAgICAgICAgICAgdGhpcy5vbmVNZXRob2RPbmx5ID1cbiAgICAgICAgICAgICAgICAnSGFpIHVuIHNvbG8gbWV0b2RvIGRpIGF1dGVudGljYXppb25lIGNvbmZpZ3VyYXRvLCBwZXIgbm9uIHJpc2NoaWFyZSBkaSByaW1hbmVyZSBibG9jY2F0byB0aSBjb25zaWdsaWFtbyBkaSc7XG4gICAgICAgICAgICB0aGlzLmFsdGVybmF0aXZlTWV0aG9kID0gJ2F0dGl2YXJlIHVuIG1ldG9kbyBhbHRlcm5hdGl2by4nO1xuICAgICAgICAgICAgdGhpcy5tYW5hZ2VNZXRob2RzID0gJ0dlc3Rpc2NpIGkgdHVvaSBtZXRvZGkgZGkgYWNjZXNzbyc7XG4gICAgICAgICAgICB0aGlzLlRPVFBEZXNjcmlwdGlvbiA9XG4gICAgICAgICAgICAgICAgXCJBcHJpIGwnYXBwIG8gbCdlc3RlbnNpb25lIGRlbCBicm93c2VyIGRlbGwnYXV0ZW50aWNhdG9yZSBhIGR1ZSBmYXR0b3JpIChUT1RQKSBwZXIgdmlzdWFsaXp6YXJlIGlsIHR1byBjb2RpY2UgZGkgYXV0ZW50aWNhemlvbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlU3Vic2NyaXB0aW9uID0gJ0Nob29zZSB5b3VyIHN1YnNjcmlwdGlvbic7XG4gICAgICAgICAgICB0aGlzLmdvb2RKb2IgPSAnR29vZCBqb2IhJztcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gJ1N1YnNjcmlwdGlvbic7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gJ0luc3RhbmNlJztcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmFjayA9ICc8IEJBQ0snO1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50TmFtZSA9ICdBY2NvdW50IG5hbWUnO1xuICAgICAgICAgICAgdGhpcy5lbnRlckFjY291bk5hbWUgPSAnRW50ZXIgeW91ciBhY2NvdW50IG5hbWUgYW5kIHdlIHdpbGwgc2VuZCB5b3UgYSBuZXcgcGFzc3dvcmQnO1xuICAgICAgICAgICAgdGhpcy53ZWxjb21lID0gJ1dlbGNvbWUgdG8gJyArIGF1dGhTZXJ2aWNlLmdldEJyYW5kTmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5lbnRlckNyZWRlbnRpYWxzID0gJ0F1dGhlbnRpY2F0ZSB5b3Vyc2VsZiBieSBlbnRlcmluZyB5b3VyIGFjY291bnQgbmFtZSBhbmQgcGFzc3dvcmQuJztcbiAgICAgICAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmQgPSAnRm9yZ290IHlvdXIgcGFzc3dvcmQgPyc7XG4gICAgICAgICAgICB0aGlzLmJsb2NNYWl1c2MgPSAnQ2FwcyBsb2NrIG9uJztcbiAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVvdXRNZXNzYWdlID0gJ1lvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZCBkdWUgdG8gaW5hY3Rpdml0eSwgeW91IGNhbiByZXN1bWUgZnJvbSBoZXJlLic7XG4gICAgICAgICAgICB0aGlzLm90cE1lc3NhZ2UgPSAnRW50ZXIgdGhlIG90cCBjb2RlIHlvdSByZWNlaXZlZCB2aWEgJztcbiAgICAgICAgICAgIHRoaXMuYXV0aEFwcFRleHQgPSAnYXV0aGVudGljYXRpb24gYXBwJztcbiAgICAgICAgICAgIHRoaXMub3RwVGl0bGUgPSAnVHdvLUZhY3RvciBBdXRoZW50aWNhdGlvbic7XG4gICAgICAgICAgICB0aGlzLnJlc2VuZE9UUExhYmVsID0gJ1JlcXVlc3QgYSBuZXcgT1RQIGNvZGUgdmlhICc7XG4gICAgICAgICAgICB0aGlzLnVzZXJhbHJlYWR5bG9nZ2VkTWVzc2FnZSA9ICdEbyB5b3Ugd2FudCB0byBjb250aW51ZSB3aXRoIHRoZSBsb2dpbj8gVGhlIHByZXZpb3VzIGxvZ2luIHdpbGwgYmUgZGlzYWJsZWQuJztcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRUaXRsZSA9ICcgaXMgYWxyZWFkeSBsb2dnZWQgaW4gdG8gdGhpcyBzdWJzY3JpcHRpb24uJztcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRPSyA9ICdZZXMsIGNvbnRpbnVlIHRvIGxvZ2luJztcbiAgICAgICAgICAgIHRoaXMuY29kZSA9ICdPVFAgQ29kZSc7XG4gICAgICAgICAgICB0aGlzLmNob3NlbkF1dGhBcHAgPSAnY2hvc2VuIGF1dGhlbnRpY2F0b3IgYXBwJztcbiAgICAgICAgICAgIHRoaXMub3RwVGV4dCA9ICdPcic7XG4gICAgICAgICAgICB0aGlzLm90cFJlcXVlc3RDb2RlID0gJ1JlcXVlc3QgY29kZSB2aWEgJztcbiAgICAgICAgICAgIHRoaXMudXNlQXV0aEFwcCA9ICdVc2UgeW91ciBhdXRoZW50aWNhdG9yIGFwcCc7XG4gICAgICAgICAgICB0aGlzLm9uZU1ldGhvZE9ubHkgPSAnWW91IGhhdmUgb25seSBvbmUgYXV0aGVudGljYXRpb24gbWV0aG9kIGNvbmZpZ3VyZWQsIHRvIGF2b2lkIHRoZSByaXNrIG9mIGJlaW5nIGJsb2NrZWQgd2UgcmVjb21tZW5kIHlvdSc7XG4gICAgICAgICAgICB0aGlzLmFsdGVybmF0aXZlTWV0aG9kID0gJ2FjdGl2YXRlIGFuIGFsdGVybmF0aXZlIG1ldGhvZC4nO1xuICAgICAgICAgICAgdGhpcy5tYW5hZ2VNZXRob2RzID0gJ01hbmFnZSB5b3VyIGxvZ2luIG1ldGhvZHMnO1xuICAgICAgICAgICAgdGhpcy5UT1RQRGVzY3JpcHRpb24gPSAnT3BlbiB5b3VyIHR3by1mYWN0b3IgYXV0aGVudGljYXRvciAoVE9UUCkgYXBwIG9yIGJyb3dzZXIgZXh0ZW5zaW9uIHRvIHZpZXcgeW91ciBhdXRoZW50aWNhdGlvbiBjb2RlJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcHBSZWRpcmVjdCA9IHBhcmFtc1snYXBwUmVkaXJlY3QnXTtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UudXNlRENTID0gYXBwUmVkaXJlY3QgJiYgYXBwUmVkaXJlY3QgPT09ICdEQ1NfQVBQJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUFJPVkEgUEVSIEFQRVJUVVJBIERJQUxPRyBESSBOT1RJRklDQSBBR0dJT1JOQU1FTlRPXG4gICAgLy8gIGFzeW5jIG9wZW5EaWFsb2coKSB7XG4gICAgLy8gICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzX3RyYW5zbGF0aW9uID0gbmV3ICBTdHJpbmdzKCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc190cmFuc2xhdGlvbi5nZXRVcGRhdGVNZXNzYWdlKHRoaXMuYXV0aFNlcnZpY2UpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3ViJywgXCJzdWIgeFwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBkYXRlJywgXCJ0aGlzIGRhdGVcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3RhcnRoJyxcInN0YXJ0IGhvdXJcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAZW5kaCcsXCJlbmQgaG91clwiICk7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9uIG1vc3RybyBzZSBtaSBoYW5ubyBkZXR0byBkaSBub24gbW9zdHJhcmUgcGl1LlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSBtZXNzYWdlKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9wZW5VcGRhdGVBbGVydERpYWxvZyhcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlVGl0bGUoKSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZURvbnRTaG93TWVzc2FnZSgpLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTt9XG4gICAgLy8gIH1cbiAgICAvLyBQUk9WQSBQRVIgQVBFUlRVUkEgRElBTE9HIERJIE5PVElGSUNBIEFHR0lPUk5BTUVOVE9cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkTG9naW5EYXRhKCk7XG4gICAgICAgIHdlYmtpdEF1dG9maWxsV29ya2Fyb3VuZCgpO1xuICAgICAgICAvL3Rlc3Q6IHRoaXMub3BlbkRpYWxvZygpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tDb25uZWN0aW9uKCk7XG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgLy8gc2UgbWkgYXJyaXZhIHVuIGVycm9yZSBtb3N0cm8gcXVlbGxvIGFsdHJpbWVudGkgc29sbyBsIHVybCBjaGUgbG8gaGEgZGF0b1xuICAgICAgICAgICAgbGV0IGVycm9yID0gdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoZXJyb3IubGVuZ3RoID09PSAwKSBlcnJvciA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QmFzZVVybCgpO1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlSVRcbiAgICAgICAgICAgICAgICA/ICdTZXJ2aXppbyB0ZW1wb3JhbmVhbWVudGUgbm9uIHJhZ2dpdW5naWJpbGUuXFxuRGV0dGFnbGk6ICcgKyBlcnJvclxuICAgICAgICAgICAgICAgIDogJ1NlcnZpY2UgdGVtcG9yYXJpbHkgbm90IGF2YWlsYWJsZS5cXG5EZXRhaWxzOiAnICsgZXJyb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG9uU3ViQ2hhbmdlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgc2QgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5maW5kKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSA9PT0gbmV3VmFsdWUpO1xuICAgICAgICBpZiAoc2QgJiYgc2QuaW5zdGFuY2VrZXkpIHRoaXMuaW5zdGFuY2VrZXkgPSBgJHt0aGlzLmluc3RhbmNlfTogJHtzZC5pbnN0YW5jZWtleX1gO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGtleVVwRnVuY3Rpb24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkQnV0dG9uKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gYnkgZW50ZXIuLi4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2Fwc09uID0gZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSAmJiBldmVudC5nZXRNb2RpZmllclN0YXRlKCdDYXBzTG9jaycpO1xuICAgICAgICB0aGlzLmNhcHNMb2NrT24gPSBjYXBzT247XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGlzYWJsZWRCdXR0b24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoaGFzQXV0b2ZpbGwoKSAmJlxuICAgICAgICAgICAgICAgICghdGhpcy5pc0Nvbm5lY3RlZCB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gJiYgdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID09PSAwICYmIHRoaXMudmFsaWRhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm90cCAmJiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoICE9PSA2KSB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMudXNlcmFscmVhZHlsb2dnZWQgJiYgIXRoaXMubG9naW5SZXF1ZXN0Lm92ZXJ3cml0ZUxvZ2luKSkpIHx8XG4gICAgICAgICAgICAoIWhhc0F1dG9maWxsKCkgJiZcbiAgICAgICAgICAgICAgICAoIXRoaXMuaXNDb25uZWN0ZWQgfHxcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gJiYgdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID09PSAwICYmIHRoaXMudmFsaWRhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm90cCAmJiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoICE9PSA2KSB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMudXNlcmFscmVhZHlsb2dnZWQgJiYgIXRoaXMubG9naW5SZXF1ZXN0Lm92ZXJ3cml0ZUxvZ2luKSkpXG4gICAgICAgICk7XG4gICAgfVxuICAgIGdldCBpc0V4cGlyZWRTZXNzaW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZXhwaXJlZFNlc3Npb24nKSA9PT0gJ3RydWUnO1xuICAgIH1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBuZXdVc2VyKCkge1xuICAgICAgICAvLyByaW1hbmRhIGFsbGEgcGFnaW5hIChwcmVzdW1pYmlsbWVudGUgZGVsbG8gc3RvcmUpIGRvdmUgIHNhcsOgIHBvc3NpYmlsZSBjcmVhcmUgdW4gbnVvdm8gYWNjb3VudC5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY3JlYXRlQWNjb3VudFVybF0pO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGJhY2soKSB7XG4gICAgICAgIC8vIHJpcHVsaXNjbyB0dXR0by4uLlxuICAgICAgICB0aGlzLnZhbGlkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnRva2VuID0gJyc7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gJyc7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0Lm90UGFzc3dvcmQgPSAnJztcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QucHJvY2Vzc0lEID0gJyc7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5vdmVyd3JpdGVMb2dpbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVzZXJhbHJlYWR5bG9nZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gJyc7XG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMubmV4dFRleHQ7XG4gICAgICAgIHRoaXMubG9naW5TdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMub3RwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGxvZ2luKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gcmVxdWVzdGVkLi4uJyArIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5zYXZlTG9naW5EYXRhKCk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2V4cGlyZWRTZXNzaW9uJyk7XG4gICAgICAgIC8vYXNzZWdubyB1biBpZCBhbGxhIGxvZ2luIGUgc29sbyBxdWVzdGEgcG90csOhIHVzYXJlIGlsIGNvZGljZSAgb3RwICAgYXNzZWduYXRvXG4gICAgICAgIGlmICghdGhpcy5sb2dpblJlcXVlc3QucHJvY2Vzc0lEKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAwMDAgKyAxMDAwMDApLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5vdFBhc3N3b3JkID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vdHApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLk9MRCkgdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgPSB0aGlzLmlucHV0VmFsdWU7XG4gICAgICAgICAgICBlbHNlIHRoaXMubG9naW5SZXF1ZXN0Lm90UGFzc3dvcmQgPSB0aGlzLmlucHV0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlICYmIHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9ICdNQ2xvdWRQcmVMb2dpbic7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsaW5nIHByZWxvZ2luLi4uICcpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0MSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UucHJlbG9naW4odGhpcy5sb2dpblJlcXVlc3QpLmNhdGNoKChlcnIxKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIxLmVycm9yICYmIGVycjEuZXJyb3IuTWVzc2FnZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSA/IHRoaXMubG9naW5UZXh0IDogdGhpcy5uZXh0VGV4dDtcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmkgc2lhIGxvZ2luIHNpYSBjaGVja2RiXG4gICAgICAgICAgICBpZiAocmVzdWx0MSAmJiByZXN1bHQxLlJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3RwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSA/IHRoaXMubG9naW5UZXh0IDogdGhpcy5uZXh0VGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBhbmllc0ZvclVzZXIodGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsZWN0aW5nIHN1YnNjcmlwdGlvbnMuLi4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3RwICYmIHJlc3VsdDEgJiYgcmVzdWx0MS5SZXN1bHRDb2RlID09PSAxNDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm90cEluZm8gPSByZXN1bHQxLkV4dHJhSW5mbztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vdHBJbmZvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5PTEQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm90cEluZm8gPSBuZXcgRXh0cmFJbmZvKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuT0xEID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vdHAgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm90cCAmJiByZXN1bHQxICYmICFyZXN1bHQxLlJlc3VsdCAmJiByZXN1bHQxLlJlc3VsdENvZGUgPT09IDE0Mykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gdGhpcy5sYW5ndWFnZUlUID8gJ09UUCBub24gdmFsaWRvLicgOiAnSW52YWxpZCBPVFAuJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXBwSWQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsaW5nIGxvZ2luLi4uICcpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLmxvZ2luUmVxdWVzdCkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMudmFsaWRhdGUgPyB0aGlzLmxvZ2luVGV4dCA6IHRoaXMubmV4dFRleHQ7XG4gICAgICAgICAgICAvLyB0b2RvIGNvbnRyb2xsYSBjb21lIHZlbmdvbm8gbW9zdHJhdGkgZXJyb3JpIHNpYSBsb2dpbiBzaWEgY2hlY2tkYlxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0Q29kZSA9PT0gMTE2KSB7XG4gICAgICAgICAgICAgICAgLy9mYWkgY29zZSAxMTZcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJhbHJlYWR5bG9nZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LlJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNkID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMuZmluZCgocykgPT4gcy5zdWJzY3JpcHRpb25rZXkgPT09IHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jaGlhbWVybycgc2VtcHJlIGwnIGFwaSBjaGUgZmFyYScgdHV0dGkgaSBjb250cm9sbGkgZGVsIGNhc28gaW4gbW9kbyBkYSBzZ2FuY2lhcmUgbGEgbGlicmFyaSBkYSBsb2dpY2hlIGNoZSBwb3RyZWJiZXJvIGNhbWJpYXJlLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQxID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5nZXRDYWxlbmRhcih0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQxICYmIHJlc3VsdDEucmVzdWx0ICYmIHJlc3VsdDEuY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGVkVXBkYXRlOiBDVUNhbGVuZGFySm9iID0gcmVzdWx0MS5jb250ZW50IGFzIENVQ2FsZW5kYXJKb2I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NoZWR1bGVkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NjaGVkdWxlZFVwZGF0ZTogJyArIHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdET05UU0hPV1VQREFURVdBUk4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc190cmFuc2xhdGlvbiA9IG5ldyBTdHJpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZU1lc3NhZ2UodGhpcy5hdXRoU2VydmljZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN1YicsIHRoaXMuYXV0aFNlcnZpY2UuZ2V0U3Vic2NyaXB0aW9uRGVzY3JpcHRpb24oKSEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAZGF0ZScsIHRoaXMuRm9ybWF0RGF0ZVN0cmluZyhzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3RhcnRoJywgdGhpcy5Gb3JtYXRTdGFydERhdGVTdHJpbmcoc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQEBlbmRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Gb3JtYXRFbmREYXRlU3RyaW5nKHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lLCBzY2hlZHVsZWRVcGRhdGUuZXN0aW1hdGVkdXBncmFkZXRpbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vbiBtb3N0cm8gc2UgbWkgaGFubm8gZGV0dG8gZGkgbm9uIG1vc3RyYXJlIHBpdS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSBtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub3BlblVwZGF0ZUFsZXJ0RGlhbG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlVGl0bGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlRG9udFNob3dNZXNzYWdlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWFkeSB0byByZWRpcmVjdC4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc1JlZGlyZWN0RXh0ZXJuYWwoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gZXh0ZXJuYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QucHJvY2Vzc0lEXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gaW50ZXJuYWwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vMTE2P1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgRm9ybWF0RGF0ZVN0cmluZyA9IChkYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICB2YXIgc2NoZWR1bGVkRGF0ZVRpbWUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGUpKTtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlZERhdGVUaW1lLnRvTG9jYWxlRGF0ZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgRm9ybWF0U3RhcnREYXRlU3RyaW5nID0gKGRhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICAgIHZhciBzY2hlZHVsZWREYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZSkpO1xuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSByZXR1cm4gc2NoZWR1bGVkRGF0ZVRpbWUudG9Mb2NhbGVTdHJpbmcoJ2l0LUlUJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IGZhbHNlIH0pO1xuICAgICAgICBlbHNlIHJldHVybiBzY2hlZHVsZWREYXRlVGltZS50b0xvY2FsZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBGb3JtYXRFbmREYXRlU3RyaW5nID0gKGRhdGU6IHN0cmluZywgZHVyYXRpb25NaW5zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgICAgICB2YXIgc2NoZWR1bGVkRGF0ZVRpbWUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGUpKTtcbiAgICAgICAgdmFyIGZpbmFsRGF0ZSA9IG5ldyBEYXRlKHNjaGVkdWxlZERhdGVUaW1lLmdldFRpbWUoKSArIGR1cmF0aW9uTWlucyAqIDYwMDAwKTtcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkgcmV0dXJuIGZpbmFsRGF0ZS50b0xvY2FsZVN0cmluZygnaXQtSVQnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogZmFsc2UgfSk7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZpbmFsRGF0ZS50b0xvY2FsZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBsb2FkTG9naW5EYXRhKCkge1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QWNjb3VudE5hbWUoKSB8fCAnJztcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gdGhpcy5hdXRoU2VydmljZS5nZXRTdWJzY3JpcHRpb24oKSB8fCAnJztcblxuICAgICAgICBpZiAoIXRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHByaXZhdGUgc2F2ZUxvZ2luRGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNTZXNzaW9uU3RvcmFnZSgpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUsIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzZCA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmZpbmQoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5ID09PSB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xuICAgICAgICAgICAgaWYgKHNkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNTZXNzaW9uU3RvcmFnZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzZC5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzZC5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYXN5bmMgZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXVzZXIgfHwgIXRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9naW5TdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIC8vIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xuICAgICAgICBjb25zdCB0ZW1wID0gYXdhaXQgdGhpcy5yZXF1ZXN0QW5kU29ydFN1YnNjcmlwdGlvbnModXNlcik7XG4gICAgICAgIC8vIFByZW1pbyBFbGVnYW56YSBDb2RpY2UgMjAxOSAoQEx1Y2FCcnVuaSlcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRlbXApICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucykpIHRoaXMubG9naW5TdWJzY3JpcHRpb25zID0gdGVtcDtcblxuICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdOb24gdHJvdm8gbmVzc3VuYSBzdWJzY3JpcHRpb24gYXNzb2NpYXRhIGEgcXVlc3RvIGFjY291bnQuJztcbiAgICAgICAgICAgIGVsc2UgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnSSBjYW5ub3QgZmluZCBhbnkgU3Vic2NyaXB0aW9ucyBhc3NvY2lhdGVkIHRvIHlvdSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9uc1swXS5zdWJzY3JpcHRpb25rZXk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5tYXAoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5KS5pbmRleE9mKHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zWzBdLnN1YnNjcmlwdGlvbmtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9uU3ViQ2hhbmdlKHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwcml2YXRlIGFzeW5jIHJlcXVlc3RBbmRTb3J0U3Vic2NyaXB0aW9ucyh1c2VyOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PFN1YnNjcmlwdGlvbj4+IHtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkQ29tcGFuaWVzLmhhc093blByb3BlcnR5KHVzZXIpICYmIHRoaXMuY2FjaGVkQ29tcGFuaWVzW3VzZXIgYXMgYW55XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkQ29tcGFuaWVzW3VzZXIgYXMgYW55XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRlbXA6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBbXTtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBBcnJheTxTdWJzY3JpcHRpb24+ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5nZXRDb21wYW5pZXNGb3JVc2VyKHVzZXIpLnRvUHJvbWlzZSgpO1xuICAgICAgICByZXN1bHQuc29ydCh0aGlzLmNvbXBhcmVDb21wYW5pZXMpLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIHRlbXAucHVzaCh7IHN1YnNjcmlwdGlvbmtleTogYy5zdWJzY3JpcHRpb25rZXksIGRlc2NyaXB0aW9uOiBjLmRlc2NyaXB0aW9uLCBzdGF0dXM6IGMuc3RhdHVzLCBpbnN0YW5jZWtleTogYy5pbnN0YW5jZWtleSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlbXAubGVuZ3RoID4gMCkgdGhpcy5jYWNoZWRDb21wYW5pZXNbdXNlciBhcyBhbnldID0gdGVtcDtcblxuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwcml2YXRlIGNvbXBhcmVDb21wYW5pZXMoYTogU3Vic2NyaXB0aW9uLCBiOiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgbmFtZUEgPSBhLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IG5hbWVCID0gYi5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikgcmV0dXJuIC0xO1xuICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikgcmV0dXJuIDE7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdvVG9Gb3Jnb3RQYXNzd29yZCgpIHtcbiAgICAgICAgdGhpcy5mb3Jnb3RwYXNzd29yZCh0aGlzLmZvcmdldFBhc3N3b3JkLCB0aGlzLmVudGVyQWNjb3VuTmFtZSwgdGhpcy5hY2NvdW50TmFtZSk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYXN5bmMgZm9yZ290cGFzc3dvcmQoVGl0bGU6IHN0cmluZywgTWVzc2FnZTogc3RyaW5nLCBQbGFjZUhvbGRlcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XG5cbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihGb3Jnb3RQYXNzd29yZENvbXBvbmVudCwge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIFRpdGxlLFxuICAgICAgICAgICAgICAgIE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgUGxhY2VIb2xkZXIsXG4gICAgICAgICAgICAgICAgVGV4dFZhbHVlOiB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShhc3luYyAoZGF0YTogeyBUZXh0VmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGRhdGEuVGV4dFZhbHVlID09PSB1bmRlZmluZWQgfHwgZGF0YS5UZXh0VmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdJbnNlcmlzY2kgdW4gbm9tZSB1dGVudGUgdmFsaWRvJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ1dyaXRlIGEgdmFsaWQgYWNjb3VudCBuYW1lJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWNjbmFtZTogc3RyaW5nID0gZGF0YS5UZXh0VmFsdWU7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnJlc2V0cGFzc3dvcmQoYWNjbmFtZSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyB0b2RvIGNvbnRyb2xsYSBjb21lIHZlbmdvbm8gbW9zdHJhdGkgZXJyb3JpXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnQ29udHJvbGxhIGxhIHR1YSBlLW1haWwgZSBzZWd1aSBsZSBpc3RydXppb25pIHBlciByZWltcG9zdGFyZSBsYSBwYXNzd29yZC4nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ0NoZWNrIHlvdXIgZW1haWwgYW5kIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhcmVzdWx0LlJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gcmVzdWx0Lk1lc3NhZ2UgKyAnIChDb2RlOiAnICsgcmVzdWx0LkNvZGUgKyAnKS4nO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlzRHJvcERvd25DbGlja2VkKCkge1xuICAgICAgICB0aGlzLmRyb3BEb3duSXNDbGlja2VkID0gIXRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XG4gICAgICAgIHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQgPSB0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xuICAgICAgICBpZiAodGhpcy5kcm9wRG93bklzQ2xpY2tlZCAmJiB0aGlzLmNvbWJvQm94SXNDbGlja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmljb25Jc0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRvZ2dsZShkcm9wZG93bjogYW55KSB7XG4gICAgICAgIHRoaXMuZHJvcERvd25Jc0NsaWNrZWQgPSAhdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcbiAgICAgICAgdGhpcy5pY29uSXNDbGlja2VkID0gdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcbiAgICAgICAgdGhpcy5kcm9wZG93biA9IGRyb3Bkb3duO1xuICAgICAgICBpZiAodGhpcy5kcm9wRG93bklzQ2xpY2tlZCkge1xuICAgICAgICAgICAgZHJvcGRvd24udG9nZ2xlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJvcGRvd24udG9nZ2xlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFsdGVybmF0aXZlTWV0aG9kcyh0d29GYWN0b3JUeXBlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuT0xEKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLk9MRHJlc2VuZE9UUCh0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSwgdHdvRmFjdG9yVHlwZSAhPSBudWxsKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKG9wUmVzOiBPcGVyYXRpb25SZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wUmVzLlJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvLlR3b0ZhY3RvclR5cGUgPSB0d29GYWN0b3JUeXBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyT0xEKSA9PiB7fVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVzZW5kT1RQMih0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSwgdGhpcy5sb2dpblJlcXVlc3QucHJvY2Vzc0lELCB0d29GYWN0b3JUeXBlKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAob3BSZXM6IE9wZXJhdGlvblJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcFJlcy5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvLlR3b0ZhY3RvclR5cGUgPSB0d29GYWN0b3JUeXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyKSA9PiB7fVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdvVG9TdG9yZSgpIHtcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5hdXRoU2VydmljZS5nZXRTdG9yZVVybCgpKTtcbiAgICB9XG59XG5cbi8vIHdvcmthcm91bmQgZm9yIGNocm9taXVtIGJ1ZyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNTI1MjdcbmZ1bmN0aW9uIHdlYmtpdEF1dG9maWxsV29ya2Fyb3VuZCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Oi13ZWJraXQtYXV0b2ZpbGwnKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChlbDogYW55KSA9PiAoZWwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPSAnay1mbG9hdGluZy1sYWJlbC1jb250YWluZXInKSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gbm8gd2Via2l0IGJyb3dzZXJcbiAgICAgICAgfVxuICAgIH0sIDEwMDApO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGhhc0F1dG9maWxsKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Oi13ZWJraXQtYXV0b2ZpbGwnKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJsb2dpbi1jb250YWluZXJcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgYmFja2dyb3VuZFVSTCArICcpJyB9XCI+XG4gICAgPGRpdiBjbGFzcz1cImxvZ2luXCIgc3R5bGU9XCJ6LWluZGV4OiAxXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBtYXQtY2FyZC1pbWFnZSBzdHlsZT1cIndpZHRoOiA2MCVcIiBzcmM9XCJ7eyBsb2dvVVJMIH19XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWFyZ2luLWgxIHRpdGxlXCI+e3sgd2VsY29tZSB9fTwvaDE+XG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpc0V4cGlyZWRTZXNzaW9uXCIgY2xhc3M9XCJsb2dpbi1leHBpcmVkLXN1YnRpdGxlIGRlc2NyaXB0aW9uXCI+e3sgaWRsZVRpbWVvdXRNZXNzYWdlIH19PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBlbnRlckNyZWRlbnRpYWxzIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidmFsaWRhdGUgJiYgIW90cFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1hcmdpbi1oMSB0aXRsZVwiPnt7IGNob29zZVN1YnNjcmlwdGlvbiB9fTwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IGFjY291bnROYW1lIH19OiB7eyBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJvdHBcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtYXJnaW4taDEgdGl0bGVcIj57eyBvdHBUaXRsZSB9fTwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHN0eWxlPVwid2lkdGg6IDM1MHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IG90cE1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDFcIj5zbXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSAyXCI+ZS1tYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gNFwiPnt7IGF1dGhBcHBUZXh0IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gbnVsbFwiPnNtcy9lLW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbFxuICAgICAgICAgICAgICAgICAgICBbdGV4dF09XCJhY2NvdW50TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIXZhbGlkYXRlICYmICFvdHBcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnYm9yZGVyLWJvdHRvbSdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBrZW5kb1RleHRCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWNjb3VudE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3QuYWNjb3VudE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2Vycm9yLXN0YXR1cycgOiAnbm9ybWFsLXN0YXRlJ1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhdmFsaWRhdGUgJiYgIW90cFwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yJyA6ICdib3JkZXItYm90dG9tJ1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlbmRvVGV4dEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImxvZ2luUmVxdWVzdC5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJoaWRlID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZSA9ICFoaWRlXCIgKm5nSWY9XCJoaWRlID09PSB0cnVlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHkgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZSA9ICFoaWRlXCIgKm5nSWY9XCJoaWRlID09PSBmYWxzZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5X29mZiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiICpuZ0lmPVwic3Vic2NyaXB0aW9uU2VsZWN0aW9uICYmIHZhbGlkYXRlICYmICFvdHBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJ7eyBzdWJzY3JpcHRpb24gfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiW2F1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yJyA6ICcnLCBkcm9wRG93bklzQ2xpY2tlZCA/ICcnIDogJ2JvcmRlci1ib3R0b20nXVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZW5kby1kcm9wZG93bmxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkRyb3BEb3duU3Vic2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwibG9naW5TdWJzY3JpcHRpb25zPy5sZW5ndGggPD0gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwibG9naW5TdWJzY3JpcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3Vic2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVGaWVsZD1cInN1YnNjcmlwdGlvbmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQcmltaXRpdmU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia2VuZG8tZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uU3ViQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJpc0Ryb3BEb3duQ2xpY2tlZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUga2VuZG9Ecm9wRG93bkxpc3RJdGVtVGVtcGxhdGUgbGV0LWRhdGFJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyLmRhdGEtc3ViPVwie3sgZGF0YUl0ZW0uc3Vic2NyaXB0aW9ua2V5IH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIuZGF0YS1kZXNjcmlwdGlvbj1cInt7IGRhdGFJdGVtLmRlc2NyaXB0aW9uIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIuZGF0YS1pbnN0YW5jZT1cInt7IGRhdGFJdGVtLmluc3RhbmNla2V5IH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZGF0YUl0ZW0uZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwva2VuZG8tZHJvcGRvd25saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkRyb3BEb3duU3Vic2NyaXB0aW9uQXJyb3dVcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZShkcm9wZG93bilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZHJvcERvd25Jc0NsaWNrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIGljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93X2NpcmNsZV91cFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkRyb3BEb3duU3Vic2NyaXB0aW9uQXJyb3dEb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlKGRyb3Bkb3duKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhZHJvcERvd25Jc0NsaWNrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIGljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93X2NpcmNsZV9kb3duXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5zdGFuY2VrZXlcIiBkYXRhLXRlc3Q9XCJsb2dpblBhcmFncmFwaEluc3RhbmNlS2V5XCIgKm5nSWY9XCJsb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID4gM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1YnNjcmlwdGlvbiBrZXk6IHt7IGxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgfX0ge3sgaW5zdGFuY2VrZXkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbFxuICAgICAgICAgICAgICAgICAgICBbdGV4dF09XCJjb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3InIDogJ2JvcmRlci1ib3R0b20nXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBrZW5kb1RleHRCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWNjb3VudE5hbWVPdHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROYW1lT3RwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImhpZGVPdHAgPyAncGFzc3dvcmQnIDogJ3RleHQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vcm1hbC1zdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlT3RwID0gIWhpZGVPdHBcIiAqbmdJZj1cImhpZGVPdHAgPT09IHRydWVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlT3RwID0gIWhpZGVPdHBcIiAqbmdJZj1cImhpZGVPdHAgPT09IGZhbHNlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHlfb2ZmIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8IS0tIEFscmVkeUxvZ2dlZCAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidXNlcmFscmVhZHlsb2dnZWRcIiBjbGFzcz1cImxvZ2luLWluZm9zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgd2hpdGUtc3BhY2U6IHByZS13cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4td2FybmluZyBmbGV4LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSB9fSB7eyB1c2VyYWxyZWFkeWxvZ2dlZFRpdGxlIH19IHt7IHVzZXJhbHJlYWR5bG9nZ2VkTWVzc2FnZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmluZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3Qub3ZlcndyaXRlTG9naW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyYWxyZWFkeWxvZ2dlZEFjY2VwdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZW5kb0NoZWNrQm94XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiay1jaGVja2JveC1sYWJlbFwiIGZvcj1cImJpbmRpbmdcIj4ge3sgdXNlcmFscmVhZHlsb2dnZWRPSyB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS1FTkQgQWxyZWR5TG9nZ2VkIC0tLS0tLS0tLS0tLS0tLS0gLS0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mb3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcHMtbG9jayBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIiAqbmdJZj1cImNhcHNMb2NrT25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYmxvY01haXVzYyB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tZXJyb3IgcGFuZWwgZmxleC1jZW50ZXIgbWFyZ2luLWJvdHRvbS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2hpdGUtc3BhY2U6IHByZS13cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyBhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mbyBwYW5lbCBmbGV4LWNlbnRlclwiICpuZ0lmPVwiYXV0aFNlcnZpY2Uub2tNZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGF1dGhTZXJ2aWNlLm9rTWVzc2FnZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwib3RwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudFwiICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSA0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgVE9UUERlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rIHBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luUmVzZW5kT3RwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWx0ZXJuYXRpdmVNZXRob2RzKG90cEluZm8uVHdvRmFjdG9yVHlwZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWx0ZXJuYXRpdmVPdHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlICE9PSA0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgcmVzZW5kT1RQTGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gMVwiPnNtczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gMlwiPmUtbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gNFwiPnt7IGNob3NlbkF1dGhBcHAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IG51bGxcIj5zbXMvZS1tYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWhlYWRlclwiICpuZ0lmPVwib3RwSW5mby5UT1RQQ29uZmlndXJlZCB8fCBvdHBJbmZvLk1vYmlsZVBob25lTnI7IGVsc2Ugb25seU9uZU1ldGhvZENvbmZpZ3VyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1hcmdpbjogMTBweCAwOyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzAwNTg5MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiKG90cEluZm8uRW1haWwgJiYgb3RwSW5mby5UT1RQQ29uZmlndXJlZCkgfHwgb3RwSW5mby5Nb2JpbGVQaG9uZU5yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG90cFRleHQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rIHBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSAhPT0gMSAmJiBvdHBJbmZvLk1vYmlsZVBob25lTnJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWx0ZXJuYXRpdmVNZXRob2RzKDEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZVNtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBvdHBSZXF1ZXN0Q29kZSB9fSBTTVM8L3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rIHBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSAhPT0gMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhbHRlcm5hdGl2ZU1ldGhvZHMoMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkFsdGVybmF0aXZlU21zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IG90cFJlcXVlc3RDb2RlIH19IEUtbWFpbDwvdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpbmsgcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib3RwSW5mby5UT1RQQ29uZmlndXJlZCAmJiBvdHBJbmZvLlR3b0ZhY3RvclR5cGUgIT09IDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWx0ZXJuYXRpdmVNZXRob2RzKDQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZUFwcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB1c2VBdXRoQXBwIH19PC91XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI29ubHlPbmVNZXRob2RDb25maWd1cmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlua1wiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMwMDU4OTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb25lTWV0aG9kT25seSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dSBjbGFzcz1cInBvaW50ZXJcIiAoY2xpY2spPVwiZ29Ub1N0b3JlKClcIj4ge3sgYWx0ZXJuYXRpdmVNZXRob2QgfX0gPC91PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDAgMXB4OyBtYXJnaW4tdG9wOiA2MHB4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBkYXRhLXRlc3Q9XCJsb2dpbkJ1dHRvblwiIGNsYXNzPVwiYnV0dG9ucyBsb2dpbi1idXR0b25cIiAoY2xpY2spPVwibG9naW4oKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZEJ1dHRvbigpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtdGVzdD1cImxvZ2luTG9hZGluZ0J1dHRvblwiIGNsYXNzPVwiay1pY29uIGstaS1sb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFsb2FkaW5nXCI+e3sgYnV0dG9uVGV4dCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgKm5nSWY9XCIoIWxvYWRpbmcgJiYgdmFsaWRhdGUpIHx8IG90cFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gZGF0YS10ZXN0PVwibG9naW5CYWNrQnV0dG9uXCIgY2xhc3M9XCJidXR0b25zIGJhY2stYnV0dG9uXCIgKGNsaWNrKT1cImJhY2soKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgYnV0dG9uQmFjayB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dTaWduVXBcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNpZ251cFwiIGRhdGEtdGVzdD1cImxvZ2luU2lnblVwXCIgKGNsaWNrKT1cIm5ld1VzZXIoKVwiPlNpZ25VcCBoZXJlITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBtYXJnaW4tdG9wOiAxMHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcmdvdHB3ZFwiIGRhdGEtdGVzdD1cImxvZ2luRm9yZ290UGFzc3dvcmRcIiAoY2xpY2spPVwiZ29Ub0ZvcmdvdFBhc3N3b3JkKClcIj5cbiAgICAgICAgICAgICAgICA8dT57eyBmb3JnZXRQYXNzd29yZCB9fTwvdT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJvdHBcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDEwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9yZ290cHdkXCIgZGF0YS10ZXN0PVwibG9naW5NYW5hZ2VNZXRob2RzXCI+XG4gICAgICAgICAgICAgICAgPHUgY2xhc3M9XCJwb2ludGVyXCIgKGNsaWNrKT1cImdvVG9TdG9yZSgpXCI+e3sgbWFuYWdlTWV0aG9kcyB9fTwvdT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAwOyB3aWR0aDogMTAwJTsgei1pbmRleDogMFwiPlxuICAgICAgICA8cCBjbGFzcz1cImNvcHlyaWdodCBjb3B5cmlnaHQtYWJzXCI+TG9naW4ge3sgbGliX3ZlcnNpb24gfX0gMjAxNyAtIHt7IGN1cnJlbnRZZWFyIH19LCBadWNjaGV0dGkgcy5wLmEuPC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=