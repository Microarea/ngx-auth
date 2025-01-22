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
const _c1 = a0 => ({ "background-image": a0 });
const _c2 = (a0, a1) => [a0, a1];
function TbLoginComponent_div_5_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.idleTimeoutMessage);
} }
function TbLoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h1", 26);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, TbLoginComponent_div_5_p_3_Template, 2, 1, "p", 27);
    i0.ɵɵelementStart(4, "p", 28);
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
    i0.ɵɵelementStart(0, "div")(1, "h1", 26);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 28);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.chooseSubscription);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.accountName, ": ", ctx_r0.loginRequest.accountName, "");
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
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.authAppText);
} }
function TbLoginComponent_div_7_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "sms/e-mail");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h1", 26);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 30);
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, TbLoginComponent_div_7_span_5_Template, 2, 0, "span", 6)(6, TbLoginComponent_div_7_span_6_Template, 2, 0, "span", 6)(7, TbLoginComponent_div_7_span_7_Template, 2, 1, "span", 6)(8, TbLoginComponent_div_7_span_8_Template, 2, 0, "span", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.otpTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.otpMessage, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TwoFactorType === 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TwoFactorType === 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TwoFactorType === 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TwoFactorType === null);
} }
function TbLoginComponent_kendo_floatinglabel_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 31)(1, "input", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_10_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.loginRequest.accountName, $event) || (ctx_r0.loginRequest.accountName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function TbLoginComponent_kendo_floatinglabel_10_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.keyUpFunction($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r0.accountName)("ngClass", ctx_r0.authService.errorMessage ? "border-bottom-error" : "border-bottom");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.loginRequest.accountName);
    i0.ɵɵproperty("ngClass", ctx_r0.authService.errorMessage ? "error-status" : "normal-state");
} }
function TbLoginComponent_kendo_floatinglabel_11_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 36);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_11_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.hide = !ctx_r0.hide); });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_11_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 36);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_11_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.hide = !ctx_r0.hide); });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 33)(1, "input", 34);
    i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_11_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.loginRequest.password, $event) || (ctx_r0.loginRequest.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function TbLoginComponent_kendo_floatinglabel_11_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.keyUpFunction($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, TbLoginComponent_kendo_floatinglabel_11_span_2_Template, 2, 0, "span", 35)(3, TbLoginComponent_kendo_floatinglabel_11_span_3_Template, 2, 0, "span", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.authService.errorMessage ? "border-bottom-error" : "border-bottom");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.loginRequest.password);
    i0.ɵɵproperty("type", ctx_r0.hide ? "password" : "text")("ngClass", ctx_r0.authService.errorMessage ? "error-status" : "normal-state");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hide === true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hide === false);
} }
function TbLoginComponent_div_12_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dataItem_r7 = ctx.$implicit;
    i0.ɵɵattribute("data-sub", dataItem_r7.subscriptionkey)("data-description", dataItem_r7.description)("data-instance", dataItem_r7.instancekey);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", dataItem_r7.description, " ");
} }
function TbLoginComponent_div_12_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 43);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r8); i0.ɵɵnextContext(); const dropdown_r9 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggle(dropdown_r9)); });
    i0.ɵɵtext(1, " arrow_circle_up ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 44);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r10); i0.ɵɵnextContext(); const dropdown_r9 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggle(dropdown_r9)); });
    i0.ɵɵtext(1, " arrow_circle_down ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" Subscription key: ", ctx_r0.loginRequest.subscriptionKey, " ", ctx_r0.instancekey, " ");
} }
function TbLoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37)(1, "kendo-floatinglabel", 31)(2, "kendo-dropdownlist", 38, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.loginRequest.subscriptionKey, $event) || (ctx_r0.loginRequest.subscriptionKey = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onSubChange($event)); })("click", function TbLoginComponent_div_12_Template_kendo_dropdownlist_click_2_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.isDropDownClicked()); });
    i0.ɵɵtemplate(4, TbLoginComponent_div_12_ng_template_4_Template, 2, 4, "ng-template", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TbLoginComponent_div_12_span_5_Template, 2, 0, "span", 40)(6, TbLoginComponent_div_12_span_6_Template, 2, 0, "span", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtemplate(8, TbLoginComponent_div_12_p_8_Template, 2, 2, "p", 42);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("text", ctx_r0.subscription);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c2, ctx_r0.authService.errorMessage ? "border-bottom-error" : "", ctx_r0.dropDownIsClicked ? "" : "border-bottom"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", (ctx_r0.loginSubscriptions == null ? null : ctx_r0.loginSubscriptions.length) <= 1)("data", ctx_r0.loginSubscriptions);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.loginRequest.subscriptionKey);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.dropDownIsClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.dropDownIsClicked);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.loginSubscriptions.length > 3);
} }
function TbLoginComponent_kendo_floatinglabel_13_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 36);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.hideOtp = !ctx_r0.hideOtp); });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 36);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.hideOtp = !ctx_r0.hideOtp); });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 31)(1, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_13_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function TbLoginComponent_kendo_floatinglabel_13_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.keyUpFunction($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, TbLoginComponent_kendo_floatinglabel_13_span_2_Template, 2, 0, "span", 35)(3, TbLoginComponent_kendo_floatinglabel_13_span_3_Template, 2, 0, "span", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r0.code)("ngClass", ctx_r0.authService.errorMessage ? "border-bottom-error" : "border-bottom");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵproperty("type", ctx_r0.hideOtp ? "password" : "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hideOtp === true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hideOtp === false);
} }
function TbLoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 47)(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 48)(5, "input", 49);
    i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_div_14_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.loginRequest.overwriteLogin, $event) || (ctx_r0.loginRequest.overwriteLogin = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label", 50);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3("", ctx_r0.loginRequest.accountName, " ", ctx_r0.useralreadyloggedTitle, " ", ctx_r0.useralreadyloggedMessage, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.loginRequest.overwriteLogin);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.useralreadyloggedOK, "");
} }
function TbLoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51)(1, "p", 52);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.blocMaiusc);
} }
function TbLoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53)(1, "p", 52);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.authService.errorMessage);
} }
function TbLoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54)(1, "p", 52);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.authService.okMessage);
} }
function TbLoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55)(1, "p", 52);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.resetPasswordMessage);
} }
function TbLoginComponent_div_20_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.TOTPDescription, " ");
} }
function TbLoginComponent_div_20_u_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "sms");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_20_u_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "e-mail");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_20_u_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.chosenAuthApp);
} }
function TbLoginComponent_div_20_u_3_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "sms/e-mail");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_20_u_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 61);
    i0.ɵɵlistener("click", function TbLoginComponent_div_20_u_3_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.alternativeMethods(ctx_r0.otpInfo.TwoFactorType)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TbLoginComponent_div_20_u_3_span_2_Template, 2, 0, "span", 6)(3, TbLoginComponent_div_20_u_3_span_3_Template, 2, 0, "span", 6)(4, TbLoginComponent_div_20_u_3_span_4_Template, 2, 1, "span", 6)(5, TbLoginComponent_div_20_u_3_span_5_Template, 2, 0, "span", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.resendOTPLabel, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TwoFactorType === 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TwoFactorType === 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TwoFactorType === 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TwoFactorType === null);
} }
function TbLoginComponent_div_20_div_4_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.otpText, " ");
} }
function TbLoginComponent_div_20_div_4_u_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 66);
    i0.ɵɵlistener("click", function TbLoginComponent_div_20_div_4_u_2_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.alternativeMethods(1)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.otpRequestCode, " SMS");
} }
function TbLoginComponent_div_20_div_4_u_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 66);
    i0.ɵɵlistener("click", function TbLoginComponent_div_20_div_4_u_3_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.alternativeMethods(2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.otpRequestCode, " E-mail");
} }
function TbLoginComponent_div_20_div_4_u_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 67);
    i0.ɵɵlistener("click", function TbLoginComponent_div_20_div_4_u_4_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.alternativeMethods(4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.useAuthApp);
} }
function TbLoginComponent_div_20_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, TbLoginComponent_div_20_div_4_p_1_Template, 2, 1, "p", 62)(2, TbLoginComponent_div_20_div_4_u_2_Template, 2, 1, "u", 63)(3, TbLoginComponent_div_20_div_4_u_3_Template, 2, 1, "u", 63)(4, TbLoginComponent_div_20_div_4_u_4_Template, 2, 1, "u", 64);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.Email && ctx_r0.otpInfo.TOTPConfigured || ctx_r0.otpInfo.MobilePhoneNr);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TwoFactorType !== 1 && ctx_r0.otpInfo.MobilePhoneNr);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TwoFactorType !== 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TOTPConfigured && ctx_r0.otpInfo.TwoFactorType !== 4);
} }
function TbLoginComponent_div_20_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p", 68);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "u", 69);
    i0.ɵɵlistener("click", function TbLoginComponent_div_20_ng_template_5_Template_u_click_2_listener() { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.goToStore()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.oneMethodOnly, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.alternativeMethod, " ");
} }
function TbLoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 56);
    i0.ɵɵtemplate(2, TbLoginComponent_div_20_p_2_Template, 2, 1, "p", 57)(3, TbLoginComponent_div_20_u_3_Template, 6, 5, "u", 58)(4, TbLoginComponent_div_20_div_4_Template, 5, 4, "div", 59)(5, TbLoginComponent_div_20_ng_template_5_Template, 4, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const onlyOneMethodConfigured_r20 = i0.ɵɵreference(6);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TwoFactorType === 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TwoFactorType !== 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.otpInfo.TOTPConfigured || ctx_r0.otpInfo.MobilePhoneNr)("ngIfElse", onlyOneMethodConfigured_r20);
} }
function TbLoginComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 55)(2, "p", 52);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.otpResetTextMagoWeb);
} }
function TbLoginComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 70);
} }
function TbLoginComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.buttonText);
} }
function TbLoginComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "button", 71);
    i0.ɵɵlistener("click", function TbLoginComponent_div_27_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.back()); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.buttonBack, "");
} }
function TbLoginComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "p", 72);
    i0.ɵɵlistener("click", function TbLoginComponent_div_29_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r22); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.newUser()); });
    i0.ɵɵtext(2, "SignUp here!");
    i0.ɵɵelementEnd()();
} }
function TbLoginComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 73)(1, "p", 74);
    i0.ɵɵlistener("click", function TbLoginComponent_div_30_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.goToResetPassword()); });
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.forgetPassword);
} }
function TbLoginComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 73)(1, "p", 75)(2, "u", 69);
    i0.ɵɵlistener("click", function TbLoginComponent_div_31_Template_u_click_2_listener() { i0.ɵɵrestoreView(_r24); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.goToStore()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.manageMethods);
} }
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
        this.OLD = false; //usato per differenziare le versioni obsolete di login
        this.loading = false;
        this.loginRequest = new LoginRequest();
        this.isMagoWeb = false;
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
        this.showResetPasswordMessage = false;
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
        this.isMagoWeb = authService.getIfIsMagoWeb();
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
            this.resetPasswordMessage = 'Per poter reimpostare una nuova password è necessario contattare l’amministratore di MagoWeb';
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
            this.otpResetTextMagoWeb = "Non puoi accedere via OTP? Contatta l'amministratore di MagoWeb per reimpostare il tipo di autenticazione.";
        }
        else {
            this.chooseSubscription = 'Choose your subscription';
            this.goodJob = 'Good job!';
            this.subscription = 'Subscription';
            this.instance = 'Instance';
            this.buttonBack = '< BACK';
            this.accountName = 'Account name';
            this.resetPasswordMessage = 'Please, contact MagoWeb administrator to reset your password';
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
            this.otpResetTextMagoWeb = "Can't log in via OTP? Contact the MagoWeb administrator to reset the authentication type.";
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
        this.showResetPasswordMessage = false;
        this.saveLoginData();
        this.loading = true;
        sessionStorage.removeItem('expiredSession');
        //assegno un id alla login e solo questa potrá usare il codice  otp   assegnato
        if (!this.loginRequest.processID) {
            this.loginRequest.processID = Math.floor(Math.random() * 900000 + 100000).toString();
            this.loginRequest.otPassword = '';
        }
        if (this.otp) {
            //nelle prime versioni l otp andava nel campo password, poi é stato creato  il campo apposito
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
            else {
                this.loading = false;
            }
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
                            console.log(message);
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
                if (result)
                    console.log('Error ' + result.ResultCode);
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
    goToResetPassword() {
        this.authService.errorMessage = '';
        this.authService.okMessage = '';
        if (this.isMagoWeb) {
            this.showResetPasswordMessage = true;
        }
        else {
            this.showResetPasswordMessage = false;
            this.openDialog(this.forgetPassword, this.enterAccounName, this.accountName);
        }
    }
    // ---------------------------------------------------------------------------
    async openDialog(Title, Message, PlaceHolder) {
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
    /** @nocollapse */ static { this.ɵfac = function TbLoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TbLoginComponent)(i0.ɵɵdirectiveInject(i1.TbAuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.MatDialog), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(DOCUMENT)); }; }
    /** @nocollapse */ static { this.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: TbLoginComponent, selectors: [["tb-login"]], viewQuery: function TbLoginComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
        } }, decls: 35, vars: 27, consts: [["dropdown", ""], ["onlyOneMethodConfigured", ""], [1, "login-container", 3, "ngStyle"], [1, "login", 2, "z-index", "1"], [1, "login-header"], ["mat-card-image", "", 2, "width", "60%", 3, "src"], [4, "ngIf"], [1, "login-form"], [3, "text", "ngClass", 4, "ngIf"], ["text", "Password", 3, "ngClass", 4, "ngIf"], ["class", "form-control", 4, "ngIf"], ["class", "login-infos", 4, "ngIf"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", "style", "white-space: pre-wrap", 4, "ngIf"], ["class", "login-info panel flex-center", 4, "ngIf"], ["class", "login-info-reset-password panel flex-center", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "60px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", "data-test", "loginButton", 1, "buttons", "login-button", 3, "click", "disabled"], ["data-test", "loginLoadingButton", "class", "k-icon k-i-loading", 4, "ngIf"], ["class", "login-footer", 4, "ngIf"], [1, "login-footer"], ["style", "display: flex; margin-top: 10px; justify-content: flex-end", 4, "ngIf"], [2, "position", "absolute", "bottom", "0", "width", "100%", "z-index", "0"], [1, "copyright", "copyright-abs"], [1, "margin-h1", "title"], ["class", "login-expired-subtitle description", 4, "ngIf"], [1, "description"], [1, "login-expired-subtitle", "description"], [1, "description", 2, "width", "350px"], [3, "text", "ngClass"], ["kendoTextBox", "", "data-test", "loginAccountName", "name", "accountName", "type", "text", 3, "ngModelChange", "keyup", "ngModel", "ngClass"], ["text", "Password", 3, "ngClass"], ["kendoTextBox", "", "data-test", "loginPassword", "name", "password", "autocomplete", "current-password", 3, "ngModelChange", "keyup", "ngModel", "type", "ngClass"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], [1, "material-icons", "icon", 3, "click"], [1, "form-control"], ["data-test", "loginDropDownSubscription", "name", "subscription", "textField", "description", "valueField", "subscriptionkey", "valuePrimitive", "true", 1, "kendo-dropdown", 3, "ngModelChange", "click", "disabled", "data", "ngModel"], ["kendoDropDownListItemTemplate", ""], ["data-test", "loginDropDownSubscriptionArrowUp", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowDown", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["class", "instancekey", "data-test", "loginParagraphInstanceKey", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowUp", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginDropDownSubscriptionArrowDown", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginParagraphInstanceKey", 1, "instancekey"], ["kendoTextBox", "", "data-test", "loginAccountNameOtp", "name", "accountNameOtp", "type", "password", 1, "normal-state", 3, "ngModelChange", "keyup", "ngModel", "type"], [1, "login-warning", "flex-center", 2, "display", "flex", "justify-content", "flex-end", "flex-direction", "column", "white-space", "pre-wrap"], [1, "wrap"], ["type", "checkbox", "id", "binding", "name", "useralreadyloggedAccepted", "kendoCheckBox", "", 3, "ngModelChange", "ngModel"], ["for", "binding", 1, "k-checkbox-label"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5", 2, "white-space", "pre-wrap"], [1, "login-info", "panel", "flex-center"], [1, "login-info-reset-password", "panel", "flex-center"], [2, "display", "flex", "justify-content", "flex-end", "flex-direction", "column"], ["class", "description", "style", "margin-bottom: 0px !important", 4, "ngIf"], ["class", "link pointer", "data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 3, "click", 4, "ngIf"], ["class", "login-header", 4, "ngIf", "ngIfElse"], [1, "description", 2, "margin-bottom", "0px !important"], ["data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 1, "link", "pointer", 3, "click"], ["style", "margin: 10px 0; font-weight: 600; color: #005890", 4, "ngIf"], ["class", "link pointer", "data-test", "loginAlternativeSms", 3, "click", 4, "ngIf"], ["class", "link pointer", "data-test", "loginAlternativeApp", 3, "click", 4, "ngIf"], [2, "margin", "10px 0", "font-weight", "600", "color", "#005890"], ["data-test", "loginAlternativeSms", 1, "link", "pointer", 3, "click"], ["data-test", "loginAlternativeApp", 1, "link", "pointer", 3, "click"], [1, "link", 2, "margin-top", "10px", "font-weight", "600", "color", "#005890"], [1, "pointer", 3, "click"], ["data-test", "loginLoadingButton", 1, "k-icon", "k-i-loading"], ["kendoButton", "", "data-test", "loginBackButton", 1, "buttons", "back-button", 3, "click"], ["data-test", "loginSignUp", 1, "signup", 3, "click"], [2, "display", "flex", "margin-top", "10px", "justify-content", "flex-end"], ["data-test", "loginForgotPassword", 1, "forgotpwd", 3, "click"], ["data-test", "loginManageMethods", 1, "forgotpwd"]], template: function TbLoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div");
            i0.ɵɵelement(4, "img", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, TbLoginComponent_div_5_Template, 6, 3, "div", 6)(6, TbLoginComponent_div_6_Template, 5, 3, "div", 6)(7, TbLoginComponent_div_7_Template, 9, 6, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "form")(9, "div", 7);
            i0.ɵɵtemplate(10, TbLoginComponent_kendo_floatinglabel_10_Template, 2, 4, "kendo-floatinglabel", 8)(11, TbLoginComponent_kendo_floatinglabel_11_Template, 4, 6, "kendo-floatinglabel", 9)(12, TbLoginComponent_div_12_Template, 9, 11, "div", 10)(13, TbLoginComponent_kendo_floatinglabel_13_Template, 4, 6, "kendo-floatinglabel", 8)(14, TbLoginComponent_div_14_Template, 8, 5, "div", 11);
            i0.ɵɵelementStart(15, "div", 12);
            i0.ɵɵtemplate(16, TbLoginComponent_div_16_Template, 3, 1, "div", 13)(17, TbLoginComponent_div_17_Template, 3, 1, "div", 14)(18, TbLoginComponent_div_18_Template, 3, 1, "div", 15)(19, TbLoginComponent_div_19_Template, 3, 1, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(20, TbLoginComponent_div_20_Template, 7, 4, "div", 6)(21, TbLoginComponent_div_21_Template, 4, 1, "div", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 17)(23, "div", 18)(24, "button", 19);
            i0.ɵɵlistener("click", function TbLoginComponent_Template_button_click_24_listener() { return ctx.login(); });
            i0.ɵɵtemplate(25, TbLoginComponent_span_25_Template, 1, 0, "span", 20)(26, TbLoginComponent_span_26_Template, 2, 1, "span", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(27, TbLoginComponent_div_27_Template, 4, 1, "div", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 22);
            i0.ɵɵtemplate(29, TbLoginComponent_div_29_Template, 3, 0, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(30, TbLoginComponent_div_30_Template, 4, 1, "div", 23)(31, TbLoginComponent_div_31_Template, 4, 1, "div", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 24)(33, "p", 25);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(25, _c1, "url(" + ctx.backgroundURL + ")"));
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
            i0.ɵɵproperty("ngIf", ctx.showResetPasswordMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.otp && !ctx.isMagoWeb);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.otp && ctx.isMagoWeb);
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
            i0.ɵɵproperty("ngIf", ctx.otp && !ctx.isMagoWeb);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("Login ", ctx.lib_version, " 2017 - ", ctx.currentYear, ", Zucchetti s.p.a.");
        } }, dependencies: [i4.NgClass, i4.NgIf, i4.NgStyle, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.CheckboxControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i6.ItemTemplateDirective, i6.DropDownListComponent, i7.LabelDirective, i7.FloatingLabelComponent, i8.TextBoxDirective, i8.CheckBoxDirective], styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list[_ngcontent-%COMP%]{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{background:#bfcdd5}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar:hover{background:#d9d9d9}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#6cafd1}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#005890}.k-list[_ngcontent-%COMP%]   .k-list-item.k-selected[_ngcontent-%COMP%]{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%]:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width: 490px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:323px!important}}@media screen and (max-width: 425px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:273px!important}}@media screen and (max-width: 375px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:217px!important}}.k-list-md[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%], .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}.k-list-item-text[_ngcontent-%COMP%]{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;line-height:20px;margin-bottom:30px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.link[_ngcontent-%COMP%], tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE!important}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:3px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#e7481c;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#e7481c}.login-infos[_ngcontent-%COMP%]   .login-warning[_ngcontent-%COMP%]{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4ab679}.login-infos[_ngcontent-%COMP%]   .login-info-reset-password[_ngcontent-%COMP%]{background:#005890}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:silver}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#e77b2d}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#ff9e18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:gray}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9f9f9f}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4ab679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68b388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#d03c13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#e7481c}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}  .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}  .mat-dialog-container .login-footer .back-button{background:gray}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:silver}  .mat-dialog-container .login-footer .ok-button{background:#4ab679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}  .k-floating-label-container{width:100%;margin:8px 0}  .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea:focus{background-color:#fff!important}  .k-floating-label-container .k-textbox::selection,   .k-floating-label-container .k-input::selection,   .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-picker-md .k-input-inner{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}  .k-floating-label-container .k-picker{border-width:0px;border-style:unset}  .k-floating-label-container .k-picker:focus-within{box-shadow:none}  .k-floating-label-container .k-picker:focus{box-shadow:none}  .k-floating-label-container:after{background-color:#8ee2ff;height:1px}  .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}  .k-floating-label-container .k-dropdown{border:none;background:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{filter:none;background:#0b85ce}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}.mat-mdc-dialog-container[_ngcontent-%COMP%]   .mdc-dialog__surface[_ngcontent-%COMP%]{padding:24px!important;color:#005890!important;border-radius:0!important}.mat-mdc-snack-bar-container[_ngcontent-%COMP%]   .mat-mdc-button.mat-mdc-snack-bar-action[_ngcontent-%COMP%]:not(:disabled){color:#4ab679}  html,   body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}tb-login[_nghost-%COMP%]{font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:#fff}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}}@media screen and (min-width: 576px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:450px}}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .upicon[_ngcontent-%COMP%]{transform:rotate(90deg);padding:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .downicon[_ngcontent-%COMP%]{transform:rotate(270deg)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .k-i-loading[_ngcontent-%COMP%]{font-size:20px}tb-login[_nghost-%COMP%]   p.instancekey[_ngcontent-%COMP%]{font-size:9px;font-weight:300;text-indent:1px;color:#005890}tb-login[_nghost-%COMP%]   p.copyright[_ngcontent-%COMP%]{font-size:10px;font-weight:300;margin:0;color:#fff}tb-login[_nghost-%COMP%]   p.copyright-abs[_ngcontent-%COMP%]{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{cursor:pointer;text-align:right}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]:hover{text-decoration:underline}tb-login[_nghost-%COMP%]   p.signup[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}tb-login[_nghost-%COMP%]   .margin-h1[_ngcontent-%COMP%]{margin-top:20px}tb-login[_nghost-%COMP%]   .margin-p[_ngcontent-%COMP%]{margin-left:-1.5px;margin-top:-10px}tb-login[_nghost-%COMP%]   .login-expired-subtitle[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}tb-login[_nghost-%COMP%]   .login-chooseSubscription[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-size:x-large}}tb-login[_nghost-%COMP%]     .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, tb-login[_nghost-%COMP%]   .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#005890}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLoginComponent, [{
        type: Component,
        args: [{ selector: 'tb-login', template: "<div class=\"login-container\" [ngStyle]=\"{ 'background-image': 'url(' + backgroundURL + ')' }\">\r\n    <div class=\"login\" style=\"z-index: 1\">\r\n        <div class=\"login-header\">\r\n            <div>\r\n                <img mat-card-image style=\"width: 60%\" src=\"{{ logoURL }}\" />\r\n            </div>\r\n            <div *ngIf=\"!validate && !otp\">\r\n                <h1 class=\"margin-h1 title\">{{ welcome }}</h1>\r\n                <p *ngIf=\"isExpiredSession\" class=\"login-expired-subtitle description\">{{ idleTimeoutMessage }}</p>\r\n                <p class=\"description\">{{ enterCredentials }}</p>\r\n            </div>\r\n            <div *ngIf=\"validate && !otp\">\r\n                <h1 class=\"margin-h1 title\">{{ chooseSubscription }}</h1>\r\n                <p class=\"description\">{{ accountName }}: {{ loginRequest.accountName }}</p>\r\n            </div>\r\n            <div *ngIf=\"otp\">\r\n                <h1 class=\"margin-h1 title\">{{ otpTitle }}</h1>\r\n                <p class=\"description\" style=\"width: 350px\">\r\n                    {{ otpMessage }}\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ authAppText }}</span>\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <form>\r\n            <div class=\"login-form\">\r\n                <kendo-floatinglabel [text]=\"accountName\" *ngIf=\"!validate && !otp\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\">\r\n                    <input kendoTextBox data-test=\"loginAccountName\" [(ngModel)]=\"loginRequest.accountName\"\r\n                        (keyup)=\"keyUpFunction($event)\" name=\"accountName\" type=\"text\"\r\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\" />\r\n                </kendo-floatinglabel>\r\n\r\n                <kendo-floatinglabel text=\"Password\" *ngIf=\"!validate && !otp\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\">\r\n                    <input kendoTextBox data-test=\"loginPassword\" [(ngModel)]=\"loginRequest.password\"\r\n                        (keyup)=\"keyUpFunction($event)\" name=\"password\" [type]=\"hide ? 'password' : 'text'\"\r\n                        autocomplete=\"current-password\"\r\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\" />\r\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === true\" class=\"material-icons icon\"> visibility </span>\r\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === false\" class=\"material-icons icon\"> visibility_off\r\n                    </span>\r\n                </kendo-floatinglabel>\r\n\r\n                <div class=\"form-control\" *ngIf=\"subscriptionSelection && validate && !otp\">\r\n                    <kendo-floatinglabel text=\"{{ subscription }}\"\r\n                        [ngClass]=\"[authService.errorMessage ? 'border-bottom-error' : '', dropDownIsClicked ? '' : 'border-bottom']\">\r\n                        <kendo-dropdownlist #dropdown data-test=\"loginDropDownSubscription\"\r\n                            [disabled]=\"loginSubscriptions?.length <= 1\" [data]=\"loginSubscriptions\" name=\"subscription\"\r\n                            textField=\"description\" valueField=\"subscriptionkey\" valuePrimitive=\"true\"\r\n                            [(ngModel)]=\"loginRequest.subscriptionKey\" class=\"kendo-dropdown\"\r\n                            (ngModelChange)=\"onSubChange($event)\" (click)=\"isDropDownClicked()\">\r\n                            <ng-template kendoDropDownListItemTemplate let-dataItem>\r\n                                <div attr.data-sub=\"{{ dataItem.subscriptionkey }}\"\r\n                                    attr.data-description=\"{{ dataItem.description }}\"\r\n                                    attr.data-instance=\"{{ dataItem.instancekey }}\">\r\n                                    {{ dataItem.description }}\r\n                                </div>\r\n                            </ng-template>\r\n                        </kendo-dropdownlist>\r\n                        <span data-test=\"loginDropDownSubscriptionArrowUp\" (click)=\"toggle(dropdown)\"\r\n                            *ngIf=\"dropDownIsClicked\" class=\"material-symbols-rounded icon\">\r\n                            arrow_circle_up\r\n                        </span>\r\n                        <span data-test=\"loginDropDownSubscriptionArrowDown\" (click)=\"toggle(dropdown)\"\r\n                            *ngIf=\"!dropDownIsClicked\" class=\"material-symbols-rounded icon\">\r\n                            arrow_circle_down\r\n                        </span>\r\n                    </kendo-floatinglabel>\r\n                    <div>\r\n                        <p class=\"instancekey\" data-test=\"loginParagraphInstanceKey\"\r\n                            *ngIf=\"loginSubscriptions.length > 3\">\r\n                            Subscription key: {{ loginRequest.subscriptionKey }} {{ instancekey }}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <kendo-floatinglabel [text]=\"code\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\" *ngIf=\"otp\">\r\n                    <input kendoTextBox data-test=\"loginAccountNameOtp\" [(ngModel)]=\"inputValue\"\r\n                        (keyup)=\"keyUpFunction($event)\" name=\"accountNameOtp\" [type]=\"hideOtp ? 'password' : 'text'\"\r\n                        type=\"password\" class=\"normal-state\" />\r\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === true\" class=\"material-icons icon\"> visibility\r\n                    </span>\r\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === false\" class=\"material-icons icon\">\r\n                        visibility_off </span>\r\n                </kendo-floatinglabel>\r\n\r\n                <!-- AlredyLogged -->\r\n                <div *ngIf=\"useralreadylogged\" class=\"login-infos\">\r\n                    <div style=\"display: flex; justify-content: flex-end; flex-direction: column; white-space: pre-wrap\"\r\n                        class=\"login-warning flex-center\">\r\n                        <p>{{ loginRequest.accountName }} {{ useralreadyloggedTitle }} {{ useralreadyloggedMessage }}\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"wrap\">\r\n                        <input type=\"checkbox\" id=\"binding\" [(ngModel)]=\"loginRequest.overwriteLogin\"\r\n                            name=\"useralreadyloggedAccepted\" kendoCheckBox />\r\n                        <label class=\"k-checkbox-label\" for=\"binding\"> {{ useralreadyloggedOK }}</label>\r\n                    </div>\r\n                </div>\r\n                <!--END AlredyLogged ---------------- -->\r\n\r\n                <div class=\"login-infos\">\r\n                    <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\r\n                        <p class=\"no-margin\">{{ blocMaiusc }}</p>\r\n                    </div>\r\n                    <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"authService.errorMessage\"\r\n                        style=\"white-space: pre-wrap\">\r\n                        <p class=\"no-margin\">{{ authService.errorMessage }}</p>\r\n                    </div>\r\n                    <div class=\"login-info panel flex-center\" *ngIf=\"authService.okMessage\">\r\n                        <p class=\"no-margin\">{{ authService.okMessage }}</p>\r\n                    </div>\r\n                    <div class=\"login-info-reset-password panel flex-center\" *ngIf=\"showResetPasswordMessage\">\r\n                        <p class=\"no-margin\">{{ resetPasswordMessage }}</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"otp && !isMagoWeb\">\r\n                    <div style=\"display: flex; justify-content: flex-end; flex-direction: column\">\r\n                        <p class=\"description\" style=\"margin-bottom: 0px !important\"\r\n                            *ngIf=\"otpInfo.TwoFactorType === 4\">\r\n                            {{ TOTPDescription }}\r\n                        </p>\r\n\r\n                        <u class=\"link pointer\" data-test=\"loginResendOtp\"\r\n                            (click)=\"alternativeMethods(otpInfo.TwoFactorType)\" data-test=\"loginAlternativeOtp\"\r\n                            *ngIf=\"otpInfo.TwoFactorType !== 4\">{{ resendOTPLabel }}\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ chosenAuthApp }}</span>\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\r\n                        </u>\r\n                        <div class=\"login-header\"\r\n                            *ngIf=\"otpInfo.TOTPConfigured || otpInfo.MobilePhoneNr; else onlyOneMethodConfigured\">\r\n                            <p style=\"margin: 10px 0; font-weight: 600; color: #005890\"\r\n                                *ngIf=\"(otpInfo.Email && otpInfo.TOTPConfigured) || otpInfo.MobilePhoneNr\">\r\n                                {{ otpText }}\r\n                            </p>\r\n                            <u class=\"link pointer\" *ngIf=\"otpInfo.TwoFactorType !== 1 && otpInfo.MobilePhoneNr\"\r\n                                (click)=\"alternativeMethods(1)\" data-test=\"loginAlternativeSms\">{{ otpRequestCode }}\r\n                                SMS</u>\r\n                            <u class=\"link pointer\" *ngIf=\"otpInfo.TwoFactorType !== 2\" (click)=\"alternativeMethods(2)\"\r\n                                data-test=\"loginAlternativeSms\">{{ otpRequestCode }} E-mail</u>\r\n                            <u class=\"link pointer\" *ngIf=\"otpInfo.TOTPConfigured && otpInfo.TwoFactorType !== 4\"\r\n                                (click)=\"alternativeMethods(4)\" data-test=\"loginAlternativeApp\">{{ useAuthApp }}</u>\r\n                        </div>\r\n                        <ng-template #onlyOneMethodConfigured>\r\n                            <p class=\"link\" style=\"margin-top: 10px; font-weight: 600; color: #005890\">\r\n                                {{ oneMethodOnly }}\r\n                                <u class=\"pointer\" (click)=\"goToStore()\"> {{ alternativeMethod }} </u>\r\n                            </p>\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"otp && isMagoWeb\" class=\"login-infos\">\r\n                    <div class=\"login-info-reset-password panel flex-center\">\r\n                        <p class=\"no-margin\">{{ otpResetTextMagoWeb }}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div\r\n            style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 60px\">\r\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n                <button kendoButton data-test=\"loginButton\" class=\"buttons login-button\" (click)=\"login()\"\r\n                    [disabled]=\"disabledButton()\">\r\n                    <span data-test=\"loginLoadingButton\" class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\r\n                    <span *ngIf=\"!loading\">{{ buttonText }}</span>\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"login-footer\" *ngIf=\"(!loading && validate) || otp\">\r\n                <button kendoButton data-test=\"loginBackButton\" class=\"buttons back-button\" (click)=\"back()\">\r\n                    <span> {{ buttonBack }}</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <div *ngIf=\"showSignUp\">\r\n                <p class=\"signup\" data-test=\"loginSignUp\" (click)=\"newUser()\">SignUp here!</p>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!validate && !otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\r\n            <p class=\"forgotpwd\" data-test=\"loginForgotPassword\" (click)=\"goToResetPassword()\">\r\n                <a>{{ forgetPassword }}</a>\r\n            </p>\r\n        </div>\r\n        <div *ngIf=\"otp && !isMagoWeb\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\r\n            <p class=\"forgotpwd\" data-test=\"loginManageMethods\">\r\n                <u class=\"pointer\" (click)=\"goToStore()\">{{ manageMethods }}</u>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div style=\"position: absolute; bottom: 0; width: 100%; z-index: 0\">\r\n        <p class=\"copyright copyright-abs\">Login {{ lib_version }} 2017 - {{ currentYear }}, Zucchetti s.p.a.</p>\r\n    </div>\r\n</div>", styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}.k-list ::-webkit-scrollbar{background:#bfcdd5}.k-list ::-webkit-scrollbar:hover{background:#d9d9d9}.k-list ::-webkit-scrollbar-thumb{background:#6cafd1}.k-list ::-webkit-scrollbar-thumb:hover{background:#005890}.k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}.kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width: 490px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}.kendo-dropdown{width:323px!important}}@media screen and (max-width: 425px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}.kendo-dropdown{width:273px!important}}@media screen and (max-width: 375px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}.kendo-dropdown{width:217px!important}}.k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}.k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;line-height:20px;margin-bottom:30px}.pointer{cursor:pointer}.link,:host(tb-login) p.forgotpwd{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom{border-bottom:1px solid #0B85CE!important}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:rgba(0,0,0,.32)}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:3px 0}.login-infos .caps-lock{background:#e7481c;display:flex;align-items:center}.login-infos .login-error{background:#e7481c}.login-infos .login-warning{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos .login-info{background:#4ab679}.login-infos .login-info-reset-password{background:#005890}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:silver}.login-footer .login-button{background:#e77b2d}.login-footer .login-button:hover:enabled{background:#ff9e18}.login-footer .back-button{background:gray}.login-footer .back-button:hover:enabled{background:#9f9f9f}.login-footer .ok-button{background:#4ab679}.login-footer .ok-button:hover:enabled{background:#68b388}.login-footer .error-button{background:#d03c13}.login-footer .error-button:hover:enabled{background:#e7481c}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}::ng-deep .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}::ng-deep .mat-dialog-container .login-footer .back-button{background:gray}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:silver}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4ab679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}::ng-deep .k-floating-label-container{width:100%;margin:8px 0}::ng-deep .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea:focus{background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox::selection,::ng-deep .k-floating-label-container .k-input::selection,::ng-deep .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-picker-md .k-input-inner{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}::ng-deep .k-floating-label-container .k-picker{border-width:0px;border-style:unset}::ng-deep .k-floating-label-container .k-picker:focus-within{box-shadow:none}::ng-deep .k-floating-label-container .k-picker:focus{box-shadow:none}::ng-deep .k-floating-label-container:after{background-color:#8ee2ff;height:1px}::ng-deep .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}::ng-deep .k-floating-label-container .k-dropdown{border:none;background:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{filter:none;background:#0b85ce}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}.mat-mdc-dialog-container .mdc-dialog__surface{padding:24px!important;color:#005890!important;border-radius:0!important}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:#4ab679}::ng-deep html,::ng-deep body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}:host(tb-login){font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}:host(tb-login) .login-container{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}:host(tb-login) .login-container .login{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:#fff}@media screen and (max-width: 768px){:host(tb-login) .login-container .login{padding:20px}}@media screen and (min-width: 576px){:host(tb-login) .login-container .login{max-width:450px}}:host(tb-login) .login-container .login .upicon{transform:rotate(90deg);padding:1px}:host(tb-login) .login-container .login .downicon{transform:rotate(270deg)}:host(tb-login) .login-container .login .login-header{display:flex;flex-direction:column}:host(tb-login) .login-container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:0}:host(tb-login) .login-container .login .k-i-loading{font-size:20px}:host(tb-login) p.instancekey{font-size:9px;font-weight:300;text-indent:1px;color:#005890}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) p.forgotpwd{cursor:pointer;text-align:right}:host(tb-login) p.forgotpwd:hover{text-decoration:underline}:host(tb-login) p.signup{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}:host(tb-login) .margin-h1{margin-top:20px}:host(tb-login) .margin-p{margin-left:-1.5px;margin-top:-10px}:host(tb-login) .login-expired-subtitle{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}:host(tb-login) .login-chooseSubscription{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}:host(tb-login) .login-sign-in{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){:host(tb-login) .login{padding:20px}:host(tb-login) .login .login-form ::ng-deep .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){:host(tb-login) .login-sign-in{font-size:x-large}}:host(tb-login) ::ng-deep .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host(tb-login) .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#005890}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL3BhZ2VzL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDSDVCLDZCQUF1RTtJQUFBLFlBQXdCO0lBQUEsaUJBQUk7OztJQUE1QixjQUF3QjtJQUF4QiwrQ0FBd0I7OztJQUQvRixBQURKLDJCQUErQixhQUNDO0lBQUEsWUFBYTtJQUFBLGlCQUFLO0lBQzlDLG9FQUF1RTtJQUN2RSw2QkFBdUI7SUFBQSxZQUFzQjtJQUNqRCxBQURpRCxpQkFBSSxFQUMvQzs7O0lBSDBCLGVBQWE7SUFBYixvQ0FBYTtJQUNyQyxjQUFzQjtJQUF0Qiw4Q0FBc0I7SUFDSCxlQUFzQjtJQUF0Qiw2Q0FBc0I7OztJQUc3QyxBQURKLDJCQUE4QixhQUNFO0lBQUEsWUFBd0I7SUFBQSxpQkFBSztJ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cnZpY2UgfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDVUNhbGVuZGFySm9iLCBMb2dpblJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL21vZGVscy9zdWJzY3JpcHRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vZm9yZ290LXBhc3N3b3JkLWRpYWxvZy9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlckNvbnRlbnRJbml0LCBJbmplY3QsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEV4dHJhSW5mbyB9IGZyb20gJy4uL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XHJcbmltcG9ydCB7IFN0cmluZ3MgfSBmcm9tICcuLi9tb2RlbHMvU3RyaW5ncyc7XHJcbmltcG9ydCB7IExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vLi4vdmVyc2lvbic7XHJcbmltcG9ydCB7IE9wZXJhdGlvblJlc3VsdCB9IGZyb20gJy4uL21vZGVscy9vcGVyYXRpb24tcmVzdWx0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0Yi1sb2dpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjbGFzcyBUYkxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICBwcml2YXRlIGNhY2hlZENvbXBhbmllczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAgIGNhcHNMb2NrT24gPSBmYWxzZTtcclxuICAgIHZhbGlkYXRlID0gZmFsc2U7XHJcbiAgICBvdHAgPSBmYWxzZTtcclxuICAgIHVzZXJhbHJlYWR5bG9nZ2VkID0gZmFsc2U7XHJcbiAgICBPTEQgPSBmYWxzZTsgLy91c2F0byBwZXIgZGlmZmVyZW56aWFyZSBsZSB2ZXJzaW9uaSBvYnNvbGV0ZSBkaSBsb2dpblxyXG4gICAgbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgbG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QgPSBuZXcgTG9naW5SZXF1ZXN0KCk7XHJcbiAgICByZWRpcmVjdFVybDogc3RyaW5nO1xyXG4gICAgaXNNYWdvV2ViOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBidXR0b25UZXh0OiBzdHJpbmc7XHJcbiAgICBuZXh0VGV4dDogc3RyaW5nO1xyXG4gICAgbG9naW5UZXh0OiBzdHJpbmc7XHJcbiAgICBjdXJyZW50WWVhcjogc3RyaW5nO1xyXG4gICAgY3JlYXRlQWNjb3VudFVybDogc3RyaW5nO1xyXG4gICAgY2hhbmdlUGFzc3dvcmRVcmw6IHN0cmluZztcclxuICAgIHN1YnNjcmlwdGlvblNlbGVjdGlvbjogYm9vbGVhbjsgLy8gYWJpbGl0YSBsYSBzY2VsdGEgZGVsbGEgc3Vic2NyaXB0aW9uXHJcbiAgICBzaG93U2lnblVwOiBib29sZWFuOyAvLyBhYmlsaXRhIGxhIHBvc3NpYmlsaXTDoCBkaSByZWdpc3RyYXJlIG51b3ZvIGFjY291bnRcclxuICAgIGxvZ2luU3Vic2NyaXB0aW9uczogQXJyYXk8eyBkZXNjcmlwdGlvbjogc3RyaW5nOyBzdWJzY3JpcHRpb25rZXk6IHN0cmluZzsgc3RhdHVzOiBudW1iZXI7IGluc3RhbmNla2V5OiBzdHJpbmcgfT4gPSBbXTtcclxuICAgIGxvZ29VUkw6IHN0cmluZztcclxuICAgIGJhY2tncm91bmRVUkw6IHN0cmluZztcclxuICAgIGhpZGUgPSB0cnVlO1xyXG4gICAgaGlkZU90cCA9IHRydWU7XHJcbiAgICBpbnN0YW5jZWtleTogc3RyaW5nO1xyXG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgcHVibGljIGRvY3VtZW50PzogRG9jdW1lbnQ7XHJcbiAgICBsaWJfdmVyc2lvbjogc3RyaW5nID0gTElCX1ZFUlNJT047XHJcbiAgICAvLyB0ZXN0aSBpbiBpdGFsaWFubyBlZCBpbmdsZXNlXHJcbiAgICBjaG9vc2VTdWJzY3JpcHRpb246IHN0cmluZztcclxuICAgIGdvb2RKb2I6IHN0cmluZztcclxuICAgIHN1YnNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgaW5zdGFuY2U6IHN0cmluZztcclxuICAgIGJ1dHRvbkJhY2s6IHN0cmluZztcclxuICAgIGFjY291bnROYW1lOiBzdHJpbmc7XHJcbiAgICBlbnRlckFjY291bk5hbWU6IHN0cmluZztcclxuICAgIHJlc2V0UGFzc3dvcmRNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICB3ZWxjb21lOiBzdHJpbmc7XHJcbiAgICBlbnRlckNyZWRlbnRpYWxzOiBzdHJpbmc7XHJcbiAgICBmb3JnZXRQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgYmxvY01haXVzYzogc3RyaW5nO1xyXG4gICAgaWRsZVRpbWVvdXRNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBvdHBNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBhdXRoQXBwVGV4dDogc3RyaW5nO1xyXG4gICAgb3RwVGl0bGU6IHN0cmluZztcclxuICAgIHJlc2VuZE9UUExhYmVsOiBzdHJpbmc7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbiAgICBjaG9zZW5BdXRoQXBwOiBzdHJpbmc7XHJcbiAgICBvdHBUZXh0OiBzdHJpbmc7XHJcbiAgICBvdHBSZXF1ZXN0Q29kZTogc3RyaW5nO1xyXG4gICAgdXNlcmFscmVhZHlsb2dnZWRNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICB1c2VyYWxyZWFkeWxvZ2dlZE9LOiBzdHJpbmc7XHJcbiAgICB1c2VyYWxyZWFkeWxvZ2dlZFRpdGxlOiBzdHJpbmc7XHJcbiAgICB1c2VBdXRoQXBwOiBzdHJpbmc7XHJcbiAgICBvbmVNZXRob2RPbmx5OiBzdHJpbmc7XHJcbiAgICBhbHRlcm5hdGl2ZU1ldGhvZDogc3RyaW5nO1xyXG4gICAgbWFuYWdlTWV0aG9kczogc3RyaW5nO1xyXG4gICAgVE9UUERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBvdHBSZXNldFRleHRNYWdvV2ViOiBzdHJpbmc7XHJcbiAgICBpbnB1dFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICAgIGRyb3BEb3duSXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICBjb21ib0JveElzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgaWNvbklzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgQFZpZXdDaGlsZCgnZHJvcGRvd24nKSBkcm9wZG93bjogYW55O1xyXG4gICAgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgbGFuZ3VhZ2VJVCA9IHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpO1xyXG4gICAgb3RwSW5mbzogRXh0cmFJbmZvID0gbmV3IEV4dHJhSW5mbygpO1xyXG4gICAgaXNFcnJvckNvbWluZ0Zyb21NYWdvID0gZmFsc2U7XHJcbiAgICBzaG93UmVzZXRQYXNzd29yZE1lc3NhZ2UgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M/OiBhbnlcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnY2xpY2snLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmljb25Jc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbklzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZHJvcGRvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24udG9nZ2xlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcERvd25Jc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSBkb2MgYXMgRG9jdW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jaGVja0Nvbm5lY3Rpb24oKTtcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXBwSWQoKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiA9IGF1dGhTZXJ2aWNlLmhhc1N1YnNjcmlwdGlvblNlbGVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2hvd1NpZ25VcCA9IGF1dGhTZXJ2aWNlLnNob3dTaWduVXAoKTtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKTtcclxuICAgICAgICB0aGlzLmlzTWFnb1dlYiA9IGF1dGhTZXJ2aWNlLmdldElmSXNNYWdvV2ViKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVBY2NvdW50VXJsID0gYXV0aFNlcnZpY2UuZ2V0Q3JlYXRlQWNjb3VudFVybCgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmRVcmwgPSBhdXRoU2VydmljZS5nZXRDaGFuZ2VQYXNzd29yZFVybCgpO1xyXG4gICAgICAgIHRoaXMubG9nb1VSTCA9IGF1dGhTZXJ2aWNlLmdldExvZ29VUkwoKTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRVUkwgPSBhdXRoU2VydmljZS5nZXRCYWNrZ3JvdW5kVVJMKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZWtleSA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VGV4dCA9ICdhdmFudGknO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luVGV4dCA9ICdhY2NlZGknO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFRleHQgPSAnbmV4dCc7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5UZXh0ID0gJ2xvZ2luJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSB8fCAhdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gPyB0aGlzLmxvZ2luVGV4dCA6IHRoaXMubmV4dFRleHQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaG9vc2VTdWJzY3JpcHRpb24gPSAnU2NlZ2xpIGxhIHR1YSBzb3R0b3Njcml6aW9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZ29vZEpvYiA9ICdCdW9uIGxhdm9ybyEnO1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9ICdTb3R0b3Njcml6aW9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSAnSXN0YW56YSc7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmFjayA9ICc8IElORElFVFJPJztcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50TmFtZSA9ICdOb21lIHV0ZW50ZSc7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYXNzd29yZE1lc3NhZ2UgPSAnUGVyIHBvdGVyIHJlaW1wb3N0YXJlIHVuYSBudW92YSBwYXNzd29yZCDDqCBuZWNlc3NhcmlvIGNvbnRhdHRhcmUgbOKAmWFtbWluaXN0cmF0b3JlIGRpIE1hZ29XZWInO1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyQWNjb3VuTmFtZSA9ICdJbnNlcmlzY2kgaWwgdHVvIG5vbWUgdXRlbnRlIGUgdGkgaW52aWVyZW1vIHVuYSBudW92YSBwYXNzd29yZCc7XHJcbiAgICAgICAgICAgIHRoaXMud2VsY29tZSA9ICdCZW52ZW51dG8gc3UgJyArIGF1dGhTZXJ2aWNlLmdldEJyYW5kTmFtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyQ3JlZGVudGlhbHMgPSAnQXV0ZW50aWNhdGkgaW5zZXJlbmRvIG5vbWUgdXRlbnRlIGUgcGFzc3dvcmQuJztcclxuICAgICAgICAgICAgdGhpcy5mb3JnZXRQYXNzd29yZCA9ICdIYWkgZGltZW50aWNhdG8gbGEgcGFzc3dvcmQgPyc7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY01haXVzYyA9ICdCbG9jY28gbWFpdXNjb2xlIGF0dGl2byc7XHJcbiAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVvdXRNZXNzYWdlID0gJ0xhIHR1YSBzZXNzaW9uZSDDqCB0ZXJtaW5hdGEgcGVyIGluYXR0aXZpdMOgLCBwdW9pIHJpcHJlbmRlcmUgZGEgcXVpLic7XHJcbiAgICAgICAgICAgIHRoaXMub3RwTWVzc2FnZSA9ICdJbnNlcmlzY2kgaWwgY29kaWNlIE9UUCBjaGUgaGFpIHJpY2V2dXRvIHRyYW1pdGUgJztcclxuICAgICAgICAgICAgdGhpcy5hdXRoQXBwVGV4dCA9ICdhcHAgZGkgYXV0ZW50aWNhemlvbmUnO1xyXG4gICAgICAgICAgICB0aGlzLm90cFRpdGxlID0gJ0F1dGVudGljYXppb25lIGEgZHVlIGZhdHRvcmknO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2VuZE9UUExhYmVsID0gJ1JpY2hpZWRpIHVuIG51b3ZvIGNvZGljZSBPVFAgdmlhICc7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRNZXNzYWdlID0gJ1Z1b2kgY29udGludWFyZSBjb24gbGEgbG9naW4/IExhIGxvZ2luIHByZWNlZGVudGUgdmVycsOgIGRpc2FiaWxpdGF0YS4nO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJhbHJlYWR5bG9nZ2VkVGl0bGUgPSAnIMOoIGdpw6AgY29ubmVzc28gYSBxdWVzdGEgc3Vic2NyaXB0aW9uLic7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRPSyA9ICdTw6wsIGNvbnRpbnVhIGNvbiBsYSBsb2dpbic7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZSA9ICdDb2RpY2UgT1RQJztcclxuICAgICAgICAgICAgdGhpcy5jaG9zZW5BdXRoQXBwID0gJ2FwcCBkaSBhdXRlbnRpY2F6aW9uZSBzY2VsdGEnO1xyXG4gICAgICAgICAgICB0aGlzLm90cFRleHQgPSAnT3BwdXJlJztcclxuICAgICAgICAgICAgdGhpcy5vdHBSZXF1ZXN0Q29kZSA9ICdSaWNoaWVkaSBjb2RpY2UgdmlhICc7XHJcbiAgICAgICAgICAgIHRoaXMudXNlQXV0aEFwcCA9ICdVdGlsaXp6YSBsYSB0dWEgYXBwIGRpIGF1dGVudGljYXppb25lJztcclxuICAgICAgICAgICAgdGhpcy5vbmVNZXRob2RPbmx5ID1cclxuICAgICAgICAgICAgICAgICdIYWkgdW4gc29sbyBtZXRvZG8gZGkgYXV0ZW50aWNhemlvbmUgY29uZmlndXJhdG8sIHBlciBub24gcmlzY2hpYXJlIGRpIHJpbWFuZXJlIGJsb2NjYXRvIHRpIGNvbnNpZ2xpYW1vIGRpJztcclxuICAgICAgICAgICAgdGhpcy5hbHRlcm5hdGl2ZU1ldGhvZCA9ICdhdHRpdmFyZSB1biBtZXRvZG8gYWx0ZXJuYXRpdm8uJztcclxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VNZXRob2RzID0gJ0dlc3Rpc2NpIGkgdHVvaSBtZXRvZGkgZGkgYWNjZXNzbyc7XHJcbiAgICAgICAgICAgIHRoaXMuVE9UUERlc2NyaXB0aW9uID1cclxuICAgICAgICAgICAgICAgIFwiQXByaSBsJ2FwcCBvIGwnZXN0ZW5zaW9uZSBkZWwgYnJvd3NlciBkZWxsJ2F1dGVudGljYXRvcmUgYSBkdWUgZmF0dG9yaSAoVE9UUCkgcGVyIHZpc3VhbGl6emFyZSBpbCB0dW8gY29kaWNlIGRpIGF1dGVudGljYXppb25lXCI7XHJcbiAgICAgICAgICAgIHRoaXMub3RwUmVzZXRUZXh0TWFnb1dlYiA9IFwiTm9uIHB1b2kgYWNjZWRlcmUgdmlhIE9UUD8gQ29udGF0dGEgbCdhbW1pbmlzdHJhdG9yZSBkaSBNYWdvV2ViIHBlciByZWltcG9zdGFyZSBpbCB0aXBvIGRpIGF1dGVudGljYXppb25lLlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlU3Vic2NyaXB0aW9uID0gJ0Nob29zZSB5b3VyIHN1YnNjcmlwdGlvbic7XHJcbiAgICAgICAgICAgIHRoaXMuZ29vZEpvYiA9ICdHb29kIGpvYiEnO1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9ICdTdWJzY3JpcHRpb24nO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gJ0luc3RhbmNlJztcclxuICAgICAgICAgICAgdGhpcy5idXR0b25CYWNrID0gJzwgQkFDSyc7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudE5hbWUgPSAnQWNjb3VudCBuYW1lJztcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkTWVzc2FnZSA9ICdQbGVhc2UsIGNvbnRhY3QgTWFnb1dlYiBhZG1pbmlzdHJhdG9yIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQnO1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyQWNjb3VuTmFtZSA9ICdFbnRlciB5b3VyIGFjY291bnQgbmFtZSBhbmQgd2Ugd2lsbCBzZW5kIHlvdSBhIG5ldyBwYXNzd29yZCc7XHJcbiAgICAgICAgICAgIHRoaXMud2VsY29tZSA9ICdXZWxjb21lIHRvICcgKyBhdXRoU2VydmljZS5nZXRCcmFuZE5hbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5lbnRlckNyZWRlbnRpYWxzID0gJ0F1dGhlbnRpY2F0ZSB5b3Vyc2VsZiBieSBlbnRlcmluZyB5b3VyIGFjY291bnQgbmFtZSBhbmQgcGFzc3dvcmQuJztcclxuICAgICAgICAgICAgdGhpcy5mb3JnZXRQYXNzd29yZCA9ICdGb3Jnb3QgeW91ciBwYXNzd29yZCA/JztcclxuICAgICAgICAgICAgdGhpcy5ibG9jTWFpdXNjID0gJ0NhcHMgbG9jayBvbic7XHJcbiAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVvdXRNZXNzYWdlID0gJ1lvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZCBkdWUgdG8gaW5hY3Rpdml0eSwgeW91IGNhbiByZXN1bWUgZnJvbSBoZXJlLic7XHJcbiAgICAgICAgICAgIHRoaXMub3RwTWVzc2FnZSA9ICdFbnRlciB0aGUgb3RwIGNvZGUgeW91IHJlY2VpdmVkIHZpYSAnO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhBcHBUZXh0ID0gJ2F1dGhlbnRpY2F0aW9uIGFwcCc7XHJcbiAgICAgICAgICAgIHRoaXMub3RwVGl0bGUgPSAnVHdvLUZhY3RvciBBdXRoZW50aWNhdGlvbic7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZW5kT1RQTGFiZWwgPSAnUmVxdWVzdCBhIG5ldyBPVFAgY29kZSB2aWEgJztcclxuICAgICAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZE1lc3NhZ2UgPSAnRG8geW91IHdhbnQgdG8gY29udGludWUgd2l0aCB0aGUgbG9naW4/IFRoZSBwcmV2aW91cyBsb2dpbiB3aWxsIGJlIGRpc2FibGVkLic7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRUaXRsZSA9ICcgaXMgYWxyZWFkeSBsb2dnZWQgaW4gdG8gdGhpcyBzdWJzY3JpcHRpb24uJztcclxuICAgICAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZE9LID0gJ1llcywgY29udGludWUgdG8gbG9naW4nO1xyXG4gICAgICAgICAgICB0aGlzLmNvZGUgPSAnT1RQIENvZGUnO1xyXG4gICAgICAgICAgICB0aGlzLmNob3NlbkF1dGhBcHAgPSAnY2hvc2VuIGF1dGhlbnRpY2F0b3IgYXBwJztcclxuICAgICAgICAgICAgdGhpcy5vdHBUZXh0ID0gJ09yJztcclxuICAgICAgICAgICAgdGhpcy5vdHBSZXF1ZXN0Q29kZSA9ICdSZXF1ZXN0IGNvZGUgdmlhICc7XHJcbiAgICAgICAgICAgIHRoaXMudXNlQXV0aEFwcCA9ICdVc2UgeW91ciBhdXRoZW50aWNhdG9yIGFwcCc7XHJcbiAgICAgICAgICAgIHRoaXMub25lTWV0aG9kT25seSA9ICdZb3UgaGF2ZSBvbmx5IG9uZSBhdXRoZW50aWNhdGlvbiBtZXRob2QgY29uZmlndXJlZCwgdG8gYXZvaWQgdGhlIHJpc2sgb2YgYmVpbmcgYmxvY2tlZCB3ZSByZWNvbW1lbmQgeW91JztcclxuICAgICAgICAgICAgdGhpcy5hbHRlcm5hdGl2ZU1ldGhvZCA9ICdhY3RpdmF0ZSBhbiBhbHRlcm5hdGl2ZSBtZXRob2QuJztcclxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VNZXRob2RzID0gJ01hbmFnZSB5b3VyIGxvZ2luIG1ldGhvZHMnO1xyXG4gICAgICAgICAgICB0aGlzLlRPVFBEZXNjcmlwdGlvbiA9ICdPcGVuIHlvdXIgdHdvLWZhY3RvciBhdXRoZW50aWNhdG9yIChUT1RQKSBhcHAgb3IgYnJvd3NlciBleHRlbnNpb24gdG8gdmlldyB5b3VyIGF1dGhlbnRpY2F0aW9uIGNvZGUnO1xyXG4gICAgICAgICAgICB0aGlzLm90cFJlc2V0VGV4dE1hZ29XZWIgPSBcIkNhbid0IGxvZyBpbiB2aWEgT1RQPyBDb250YWN0IHRoZSBNYWdvV2ViIGFkbWluaXN0cmF0b3IgdG8gcmVzZXQgdGhlIGF1dGhlbnRpY2F0aW9uIHR5cGUuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXBwUmVkaXJlY3QgPSBwYXJhbXNbJ2FwcFJlZGlyZWN0J107XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gcGFyYW1zWydlcnJvciddO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnVzZURDUyA9IGFwcFJlZGlyZWN0ICYmIGFwcFJlZGlyZWN0ID09PSAnRENTX0FQUCc7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyb3IgPyBlcnJvciA6ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmlzRXJyb3JDb21pbmdGcm9tTWFnbyA9IGVycm9yID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBST1ZBIFBFUiBBUEVSVFVSQSBESUFMT0cgREkgTk9USUZJQ0EgQUdHSU9STkFNRU5UT1xyXG4gICAgLy8gIGFzeW5jIG9wZW5EaWFsb2coKSB7XHJcbiAgICAvLyAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdET05UU0hPV1VQREFURVdBUk4nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc190cmFuc2xhdGlvbiA9IG5ldyAgU3RyaW5ncygpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc190cmFuc2xhdGlvbi5nZXRVcGRhdGVNZXNzYWdlKHRoaXMuYXV0aFNlcnZpY2UpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN1YicsIFwic3ViIHhcIik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBkYXRlJywgXCJ0aGlzIGRhdGVcIik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBzdGFydGgnLFwic3RhcnQgaG91clwiKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQGVuZGgnLFwiZW5kIGhvdXJcIiApO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub24gbW9zdHJvIHNlIG1pIGhhbm5vIGRldHRvIGRpIG5vbiBtb3N0cmFyZSBwaXUuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbWVzc2FnZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9wZW5VcGRhdGVBbGVydERpYWxvZyhcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZVRpdGxlKCksXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZURvbnRTaG93TWVzc2FnZSgpLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTt9XHJcbiAgICAvLyAgfVxyXG4gICAgLy8gUFJPVkEgUEVSIEFQRVJUVVJBIERJQUxPRyBESSBOT1RJRklDQSBBR0dJT1JOQU1FTlRPXHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2FkTG9naW5EYXRhKCk7XHJcbiAgICAgICAgd2Via2l0QXV0b2ZpbGxXb3JrYXJvdW5kKCk7XHJcbiAgICAgICAgLy90ZXN0OiB0aGlzLm9wZW5EaWFsb2coKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5jaGVja0Nvbm5lY3Rpb24oKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgLy8gc2UgbWkgYXJyaXZhIHVuIGVycm9yZSBtb3N0cm8gcXVlbGxvIGFsdHJpbWVudGkgc29sbyBsIHVybCBjaGUgbG8gaGEgZGF0b1xyXG4gICAgICAgICAgICBsZXQgZXJyb3IgPSB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZTtcclxuICAgICAgICAgICAgaWYgKGVycm9yLmxlbmd0aCA9PT0gMCkgZXJyb3IgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEJhc2VVcmwoKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlSVRcclxuICAgICAgICAgICAgICAgID8gJ1NlcnZpemlvIHRlbXBvcmFuZWFtZW50ZSBub24gcmFnZ2l1bmdpYmlsZS5cXG5EZXR0YWdsaTogJyArIGVycm9yXHJcbiAgICAgICAgICAgICAgICA6ICdTZXJ2aWNlIHRlbXBvcmFyaWx5IG5vdCBhdmFpbGFibGUuXFxuRGV0YWlsczogJyArIGVycm9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gdGhpcy5pc0Vycm9yQ29taW5nRnJvbU1hZ28gPyB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA6ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIG9uU3ViQ2hhbmdlKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBzZCA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmZpbmQoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5ID09PSBuZXdWYWx1ZSk7XHJcbiAgICAgICAgaWYgKHNkICYmIHNkLmluc3RhbmNla2V5KSB0aGlzLmluc3RhbmNla2V5ID0gYCR7dGhpcy5pbnN0YW5jZX06ICR7c2QuaW5zdGFuY2VrZXl9YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGtleVVwRnVuY3Rpb24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZEJ1dHRvbigpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gYnkgZW50ZXIuLi4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYXBzT24gPSBldmVudC5nZXRNb2RpZmllclN0YXRlICYmIGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoJ0NhcHNMb2NrJyk7XHJcbiAgICAgICAgdGhpcy5jYXBzTG9ja09uID0gY2Fwc09uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZGlzYWJsZWRCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKGhhc0F1dG9maWxsKCkgJiZcclxuICAgICAgICAgICAgICAgICghdGhpcy5pc0Nvbm5lY3RlZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiAmJiB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDAgJiYgdGhpcy52YWxpZGF0ZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5vdHAgJiYgdGhpcy5pbnB1dFZhbHVlLmxlbmd0aCAhPT0gNikgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy51c2VyYWxyZWFkeWxvZ2dlZCAmJiAhdGhpcy5sb2dpblJlcXVlc3Qub3ZlcndyaXRlTG9naW4pKSkgfHxcclxuICAgICAgICAgICAgKCFoYXNBdXRvZmlsbCgpICYmXHJcbiAgICAgICAgICAgICAgICAoIXRoaXMuaXNDb25uZWN0ZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gJiYgdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID09PSAwICYmIHRoaXMudmFsaWRhdGUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMub3RwICYmIHRoaXMuaW5wdXRWYWx1ZS5sZW5ndGggIT09IDYpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMudXNlcmFscmVhZHlsb2dnZWQgJiYgIXRoaXMubG9naW5SZXF1ZXN0Lm92ZXJ3cml0ZUxvZ2luKSkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldCBpc0V4cGlyZWRTZXNzaW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVkU2Vzc2lvbicpID09PSAndHJ1ZSc7XHJcbiAgICB9XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIG5ld1VzZXIoKSB7XHJcbiAgICAgICAgLy8gcmltYW5kYSBhbGxhIHBhZ2luYSAocHJlc3VtaWJpbG1lbnRlIGRlbGxvIHN0b3JlKSBkb3ZlICBzYXLDoCBwb3NzaWJpbGUgY3JlYXJlIHVuIG51b3ZvIGFjY291bnQuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY3JlYXRlQWNjb3VudFVybF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgYmFjayhrZWVwTWVzc2FnZXM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIC8vIHJpcHVsaXNjbyB0dXR0by4uLlxyXG4gICAgICAgIHRoaXMudmFsaWRhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC50b2tlbiA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Qub3RQYXNzd29yZCA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRCA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0Lm92ZXJ3cml0ZUxvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gJyc7XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy5uZXh0VGV4dDtcclxuICAgICAgICB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMub3RwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKCFrZWVwTWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBsb2dpbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gcmVxdWVzdGVkLi4uJyArIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaG93UmVzZXRQYXNzd29yZE1lc3NhZ2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNhdmVMb2dpbkRhdGEoKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2V4cGlyZWRTZXNzaW9uJyk7XHJcbiAgICAgICAgLy9hc3NlZ25vIHVuIGlkIGFsbGEgbG9naW4gZSBzb2xvIHF1ZXN0YSBwb3Ryw6EgdXNhcmUgaWwgY29kaWNlICBvdHAgICBhc3NlZ25hdG9cclxuICAgICAgICBpZiAoIXRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAwMDAgKyAxMDAwMDApLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0Lm90UGFzc3dvcmQgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm90cCkge1xyXG4gICAgICAgICAgICAvL25lbGxlIHByaW1lIHZlcnNpb25pIGwgb3RwIGFuZGF2YSBuZWwgY2FtcG8gcGFzc3dvcmQsIHBvaSDDqSBzdGF0byBjcmVhdG8gIGlsIGNhbXBvIGFwcG9zaXRvXHJcbiAgICAgICAgICAgIGlmICh0aGlzLk9MRCkgdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgPSB0aGlzLmlucHV0VmFsdWU7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5sb2dpblJlcXVlc3Qub3RQYXNzd29yZCA9IHRoaXMuaW5wdXRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlICYmIHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gJ01DbG91ZFByZUxvZ2luJztcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsaW5nIHByZWxvZ2luLi4uICcpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQxID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5wcmVsb2dpbih0aGlzLmxvZ2luUmVxdWVzdCkuY2F0Y2goKGVycjEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIxLmVycm9yICYmIGVycjEuZXJyb3IuTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xyXG4gICAgICAgICAgICAvLyB0b2RvIGNvbnRyb2xsYSBjb21lIHZlbmdvbm8gbW9zdHJhdGkgZXJyb3JpIHNpYSBsb2dpbiBzaWEgY2hlY2tkYlxyXG4gICAgICAgICAgICBpZiAocmVzdWx0MSAmJiByZXN1bHQxLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdHAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSA/IHRoaXMubG9naW5UZXh0IDogdGhpcy5uZXh0VGV4dDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcGFuaWVzRm9yVXNlcih0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29sbGVjdGluZyBzdWJzY3JpcHRpb25zLi4uJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3RwICYmIHJlc3VsdDEgJiYgcmVzdWx0MS5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mbyA9IHJlc3VsdDEuRXh0cmFJbmZvO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3RwSW5mbyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5PTEQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mbyA9IG5ldyBFeHRyYUluZm8oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLk9MRCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdHAgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3RwICYmIHJlc3VsdDEgJiYgIXJlc3VsdDEuUmVzdWx0ICYmIHJlc3VsdDEuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IHRoaXMubGFuZ3VhZ2VJVCA/ICdPVFAgbm9uIHZhbGlkby4nIDogJ0ludmFsaWQgT1RQLic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gdGhpcy5hdXRoU2VydmljZS5nZXRBcHBJZCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2FsbGluZyBsb2dpbi4uLiAnKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLmxvZ2luUmVxdWVzdCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMub3RwICYmIHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm90cEluZm8gPSByZXN1bHQuRXh0cmFJbmZvO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3RwSW5mbyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5PTEQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mbyA9IG5ldyBFeHRyYUluZm8oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLk9MRCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdHAgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3RwICYmIHJlc3VsdCAmJiAhcmVzdWx0LlJlc3VsdCAmJiByZXN1bHQuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IHRoaXMubGFuZ3VhZ2VJVCA/ICdPVFAgbm9uIHZhbGlkby4nIDogJ0ludmFsaWQgT1RQLic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMudmFsaWRhdGUgPyB0aGlzLmxvZ2luVGV4dCA6IHRoaXMubmV4dFRleHQ7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmkgc2lhIGxvZ2luIHNpYSBjaGVja2RiXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LlJlc3VsdENvZGUgPT09IDExNikge1xyXG4gICAgICAgICAgICAgICAgLy9mYWkgY29zZSAxMTYgKG1vc3RyYSBhdnZpc28pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJhbHJlYWR5bG9nZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2xhIGxvZ2luIMOpIGFuZGF0YSwgcHJvc2VndW8gY29uIGFsdHJlIHZlcmlmaWNoZVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNkID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMuZmluZCgocykgPT4gcy5zdWJzY3JpcHRpb25rZXkgPT09IHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jaGlhbW8gc2VtcHJlIGwnIGFwaSBjaGUgZmEgdHV0dGkgaSBjb250cm9sbGkgZGVsIGNhc28gaW4gbW9kbyBkYSBzZ2FuY2lhcmUgbGEgbGlicmFyeSBkYSBsb2dpY2hlIGNhbmFyeSBjaGUgcG90cmViYmVybyBjYW1iaWFyZS5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQxID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5nZXRDYWxlbmRhcih0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NvbG8gc2UgaWwgcmVzdWx0IMOpIG9rIGZhY2NpbyBsbyBzaG93IGRlbGzCtGF2dmlzbyBkaSBldmVudHVhbGkgYWdnaW9ybmFtZW50aSBzY2hlZHVsYXRpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdDEgJiYgcmVzdWx0MS5yZXN1bHQgJiYgcmVzdWx0MS5jb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlZFVwZGF0ZTogQ1VDYWxlbmRhckpvYiA9IHJlc3VsdDEuY29udGVudCBhcyBDVUNhbGVuZGFySm9iO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NoZWR1bGVkVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2NoZWR1bGVkVXBkYXRlOiAnICsgc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc190cmFuc2xhdGlvbiA9IG5ldyBTdHJpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlTWVzc2FnZSh0aGlzLmF1dGhTZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN1YicsIHRoaXMuYXV0aFNlcnZpY2UuZ2V0U3Vic2NyaXB0aW9uRGVzY3JpcHRpb24oKSEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBkYXRlJywgdGhpcy5Gb3JtYXREYXRlU3RyaW5nKHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN0YXJ0aCcsIHRoaXMuRm9ybWF0U3RhcnREYXRlU3RyaW5nKHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAQGVuZGgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRm9ybWF0RW5kRGF0ZVN0cmluZyhzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZSwgc2NoZWR1bGVkVXBkYXRlLmVzdGltYXRlZHVwZ3JhZGV0aW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9uIG1vc3RybyBzZSBtaSBoYW5ubyBkZXR0byBkaSBub24gbW9zdHJhcmUgcGl1LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub3BlblVwZGF0ZUFsZXJ0RGlhbG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZVRpdGxlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlRG9udFNob3dNZXNzYWdlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IHRvIHJlZGlyZWN0LicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNSZWRpcmVjdEV4dGVybmFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gZXh0ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSURcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vLy8vN1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm90cCAmJiByZXN1bHQgJiYgcmVzdWx0LlJlc3VsdENvZGUgPT09IDE0Mykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mbyA9IHJlc3VsdC5FeHRyYUluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3RwSW5mbyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuT0xEID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvID0gbmV3IEV4dHJhSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLk9MRCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3RwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vdHAgJiYgcmVzdWx0ICYmICFyZXN1bHQuUmVzdWx0ICYmIHJlc3VsdC5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IHRoaXMubGFuZ3VhZ2VJVCA/ICdPVFAgbm9uIHZhbGlkby4nIDogJ0ludmFsaWQgT1RQLic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLy8vLzdcclxuICAgICAgICAgICAgICAgIC8vY2FzbyBkaSBsb2dpbiBmYWxsaXRhIHBlciBxdWFsY2hlIGVycm9yZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy4uLicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSBjb25zb2xlLmxvZygnRXJyb3IgJyArIHJlc3VsdC5SZXN1bHRDb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIEZvcm1hdERhdGVTdHJpbmcgPSAoZGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgICAgICB2YXIgc2NoZWR1bGVkRGF0ZVRpbWUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGUpKTtcclxuICAgICAgICByZXR1cm4gc2NoZWR1bGVkRGF0ZVRpbWUudG9Mb2NhbGVEYXRlU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIEZvcm1hdFN0YXJ0RGF0ZVN0cmluZyA9IChkYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHZhciBzY2hlZHVsZWREYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZSkpO1xyXG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHJldHVybiBzY2hlZHVsZWREYXRlVGltZS50b0xvY2FsZVN0cmluZygnaXQtSVQnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogZmFsc2UgfSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gc2NoZWR1bGVkRGF0ZVRpbWUudG9Mb2NhbGVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBGb3JtYXRFbmREYXRlU3RyaW5nID0gKGRhdGU6IHN0cmluZywgZHVyYXRpb25NaW5zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHZhciBzY2hlZHVsZWREYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZSkpO1xyXG4gICAgICAgIHZhciBmaW5hbERhdGUgPSBuZXcgRGF0ZShzY2hlZHVsZWREYXRlVGltZS5nZXRUaW1lKCkgKyBkdXJhdGlvbk1pbnMgKiA2MDAwMCk7XHJcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkgcmV0dXJuIGZpbmFsRGF0ZS50b0xvY2FsZVN0cmluZygnaXQtSVQnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogZmFsc2UgfSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gZmluYWxEYXRlLnRvTG9jYWxlU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgbG9hZExvZ2luRGF0YSgpIHtcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QWNjb3VudE5hbWUoKSB8fCAnJztcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFN1YnNjcmlwdGlvbigpIHx8ICcnO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgc2F2ZUxvZ2luRGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc1Nlc3Npb25TdG9yYWdlKCkpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUsIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNkID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMuZmluZCgocykgPT4gcy5zdWJzY3JpcHRpb25rZXkgPT09IHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgIGlmIChzZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNTZXNzaW9uU3RvcmFnZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHNkLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzZC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBnZXRDb21wYW5pZXNGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXVzZXIgfHwgIXRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIC8vIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICBjb25zdCB0ZW1wID0gYXdhaXQgdGhpcy5yZXF1ZXN0QW5kU29ydFN1YnNjcmlwdGlvbnModXNlcik7XHJcbiAgICAgICAgLy8gUHJlbWlvIEVsZWdhbnphIENvZGljZSAyMDE5IChATHVjYUJydW5pKVxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0ZW1wKSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMpKSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IHRlbXA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdOb24gdHJvdm8gbmVzc3VuYSBzdWJzY3JpcHRpb24gYXNzb2NpYXRhIGEgcXVlc3RvIGFjY291bnQuJztcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdJIGNhbm5vdCBmaW5kIGFueSBTdWJzY3JpcHRpb25zIGFzc29jaWF0ZWQgdG8geW91JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9uc1swXS5zdWJzY3JpcHRpb25rZXk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubWFwKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSkuaW5kZXhPZih0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zWzBdLnN1YnNjcmlwdGlvbmtleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uU3ViQ2hhbmdlKHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHJpdmF0ZSBhc3luYyByZXF1ZXN0QW5kU29ydFN1YnNjcmlwdGlvbnModXNlcjogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxTdWJzY3JpcHRpb24+PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkQ29tcGFuaWVzLmhhc093blByb3BlcnR5KHVzZXIpICYmIHRoaXMuY2FjaGVkQ29tcGFuaWVzW3VzZXIgYXMgYW55XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRDb21wYW5pZXNbdXNlciBhcyBhbnldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGVtcDogQXJyYXk8U3Vic2NyaXB0aW9uPiA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8U3Vic2NyaXB0aW9uPiA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyKS50b1Byb21pc2UoKTtcclxuICAgICAgICByZXN1bHQuc29ydCh0aGlzLmNvbXBhcmVDb21wYW5pZXMpLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgdGVtcC5wdXNoKHsgc3Vic2NyaXB0aW9ua2V5OiBjLnN1YnNjcmlwdGlvbmtleSwgZGVzY3JpcHRpb246IGMuZGVzY3JpcHRpb24sIHN0YXR1czogYy5zdGF0dXMsIGluc3RhbmNla2V5OiBjLmluc3RhbmNla2V5IH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGVtcC5sZW5ndGggPiAwKSB0aGlzLmNhY2hlZENvbXBhbmllc1t1c2VyIGFzIGFueV0gPSB0ZW1wO1xyXG5cclxuICAgICAgICByZXR1cm4gdGVtcDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgY29tcGFyZUNvbXBhbmllcyhhOiBTdWJzY3JpcHRpb24sIGI6IFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIGNvbnN0IG5hbWVBID0gYS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVCID0gYi5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZ29Ub1Jlc2V0UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWFnb1dlYikge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkTWVzc2FnZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UmVzZXRQYXNzd29yZE1lc3NhZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuZm9yZ2V0UGFzc3dvcmQsIHRoaXMuZW50ZXJBY2NvdW5OYW1lLCB0aGlzLmFjY291bnROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBvcGVuRGlhbG9nKFRpdGxlOiBzdHJpbmcsIE1lc3NhZ2U6IHN0cmluZywgUGxhY2VIb2xkZXI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRm9yZ290UGFzc3dvcmRDb21wb25lbnQsIHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgVGl0bGUsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VIb2xkZXIsXHJcbiAgICAgICAgICAgICAgICBUZXh0VmFsdWU6IHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoYXN5bmMgKGRhdGE6IHsgVGV4dFZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChkYXRhLlRleHRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEuVGV4dFZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ0luc2VyaXNjaSB1biBub21lIHV0ZW50ZSB2YWxpZG8nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnV3JpdGUgYSB2YWxpZCBhY2NvdW50IG5hbWUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWNjbmFtZTogc3RyaW5nID0gZGF0YS5UZXh0VmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UucmVzZXRwYXNzd29yZChhY2NuYW1lKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0b2RvIGNvbnRyb2xsYSBjb21lIHZlbmdvbm8gbW9zdHJhdGkgZXJyb3JpXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICdDb250cm9sbGEgbGEgdHVhIGUtbWFpbCBlIHNlZ3VpIGxlIGlzdHJ1emlvbmkgcGVyIHJlaW1wb3N0YXJlIGxhIHBhc3N3b3JkLic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ0NoZWNrIHlvdXIgZW1haWwgYW5kIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IHJlc3VsdC5NZXNzYWdlICsgJyAoQ29kZTogJyArIHJlc3VsdC5Db2RlICsgJykuJztcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGlzRHJvcERvd25DbGlja2VkKCkge1xyXG4gICAgICAgIHRoaXMuZHJvcERvd25Jc0NsaWNrZWQgPSAhdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcclxuICAgICAgICB0aGlzLmNvbWJvQm94SXNDbGlja2VkID0gdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcclxuICAgICAgICBpZiAodGhpcy5kcm9wRG93bklzQ2xpY2tlZCAmJiB0aGlzLmNvbWJvQm94SXNDbGlja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbklzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRvZ2dsZShkcm9wZG93bjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5kcm9wRG93bklzQ2xpY2tlZCA9ICF0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xyXG4gICAgICAgIHRoaXMuaWNvbklzQ2xpY2tlZCA9IHRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XHJcbiAgICAgICAgdGhpcy5kcm9wZG93biA9IGRyb3Bkb3duO1xyXG4gICAgICAgIGlmICh0aGlzLmRyb3BEb3duSXNDbGlja2VkKSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkcm9wZG93bi50b2dnbGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFsdGVybmF0aXZlTWV0aG9kcyh0d29GYWN0b3JUeXBlOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5PTEQpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5PTERyZXNlbmRPVFAodGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsIHR3b0ZhY3RvclR5cGUgIT0gbnVsbCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKG9wUmVzOiBPcGVyYXRpb25SZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BSZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mby5Ud29GYWN0b3JUeXBlID0gdHdvRmFjdG9yVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVyck9MRCkgPT4geyB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVzZW5kT1RQMih0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSwgdGhpcy5sb2dpblJlcXVlc3QucHJvY2Vzc0lELCB0d29GYWN0b3JUeXBlKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChvcFJlczogT3BlcmF0aW9uUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BSZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvLlR3b0ZhY3RvclR5cGUgPSB0d29GYWN0b3JUeXBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyKSA9PiB7IH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZ29Ub1N0b3JlKCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuYXV0aFNlcnZpY2UuZ2V0U3RvcmVVcmwoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHdvcmthcm91bmQgZm9yIGNocm9taXVtIGJ1ZyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNTI1MjdcclxuZnVuY3Rpb24gd2Via2l0QXV0b2ZpbGxXb3JrYXJvdW5kKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDotd2Via2l0LWF1dG9maWxsJylcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChlbDogYW55KSA9PiAoZWwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPSAnay1mbG9hdGluZy1sYWJlbC1jb250YWluZXInKSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIC8vIG5vIHdlYmtpdCBicm93c2VyXHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBoYXNBdXRvZmlsbCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCcpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJsb2dpbi1jb250YWluZXJcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgYmFja2dyb3VuZFVSTCArICcpJyB9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibG9naW5cIiBzdHlsZT1cInotaW5kZXg6IDFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIG1hdC1jYXJkLWltYWdlIHN0eWxlPVwid2lkdGg6IDYwJVwiIHNyYz1cInt7IGxvZ29VUkwgfX1cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtYXJnaW4taDEgdGl0bGVcIj57eyB3ZWxjb21lIH19PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaXNFeHBpcmVkU2Vzc2lvblwiIGNsYXNzPVwibG9naW4tZXhwaXJlZC1zdWJ0aXRsZSBkZXNjcmlwdGlvblwiPnt7IGlkbGVUaW1lb3V0TWVzc2FnZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBlbnRlckNyZWRlbnRpYWxzIH19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInZhbGlkYXRlICYmICFvdHBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1hcmdpbi1oMSB0aXRsZVwiPnt7IGNob29zZVN1YnNjcmlwdGlvbiB9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgYWNjb3VudE5hbWUgfX06IHt7IGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSB9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJvdHBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1hcmdpbi1oMSB0aXRsZVwiPnt7IG90cFRpdGxlIH19PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIndpZHRoOiAzNTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IG90cE1lc3NhZ2UgfX1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gMVwiPnNtczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gMlwiPmUtbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gNFwiPnt7IGF1dGhBcHBUZXh0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSBudWxsXCI+c21zL2UtbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgW3RleHRdPVwiYWNjb3VudE5hbWVcIiAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnYm9yZGVyLWJvdHRvbSdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQga2VuZG9UZXh0Qm94IGRhdGEtdGVzdD1cImxvZ2luQWNjb3VudE5hbWVcIiBbKG5nTW9kZWwpXT1cImxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIiBuYW1lPVwiYWNjb3VudE5hbWVcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsIHRleHQ9XCJQYXNzd29yZFwiICpuZ0lmPVwiIXZhbGlkYXRlICYmICFvdHBcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yJyA6ICdib3JkZXItYm90dG9tJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBrZW5kb1RleHRCb3ggZGF0YS10ZXN0PVwibG9naW5QYXNzd29yZFwiIFsobmdNb2RlbCldPVwibG9naW5SZXF1ZXN0LnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiIG5hbWU9XCJwYXNzd29yZFwiIFt0eXBlXT1cImhpZGUgPyAncGFzc3dvcmQnIDogJ3RleHQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlID0gIWhpZGVcIiAqbmdJZj1cImhpZGUgPT09IHRydWVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGUgPSAhaGlkZVwiICpuZ0lmPVwiaGlkZSA9PT0gZmFsc2VcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eV9vZmZcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiICpuZ0lmPVwic3Vic2NyaXB0aW9uU2VsZWN0aW9uICYmIHZhbGlkYXRlICYmICFvdHBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbCB0ZXh0PVwie3sgc3Vic2NyaXB0aW9uIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiW2F1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yJyA6ICcnLCBkcm9wRG93bklzQ2xpY2tlZCA/ICcnIDogJ2JvcmRlci1ib3R0b20nXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2VuZG8tZHJvcGRvd25saXN0ICNkcm9wZG93biBkYXRhLXRlc3Q9XCJsb2dpbkRyb3BEb3duU3Vic2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJsb2dpblN1YnNjcmlwdGlvbnM/Lmxlbmd0aCA8PSAxXCIgW2RhdGFdPVwibG9naW5TdWJzY3JpcHRpb25zXCIgbmFtZT1cInN1YnNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGQ9XCJkZXNjcmlwdGlvblwiIHZhbHVlRmllbGQ9XCJzdWJzY3JpcHRpb25rZXlcIiB2YWx1ZVByaW1pdGl2ZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5XCIgY2xhc3M9XCJrZW5kby1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblN1YkNoYW5nZSgkZXZlbnQpXCIgKGNsaWNrKT1cImlzRHJvcERvd25DbGlja2VkKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBrZW5kb0Ryb3BEb3duTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtZGF0YUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBhdHRyLmRhdGEtc3ViPVwie3sgZGF0YUl0ZW0uc3Vic2NyaXB0aW9ua2V5IH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5kYXRhLWRlc2NyaXB0aW9uPVwie3sgZGF0YUl0ZW0uZGVzY3JpcHRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyLmRhdGEtaW5zdGFuY2U9XCJ7eyBkYXRhSXRlbS5pbnN0YW5jZWtleSB9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBkYXRhSXRlbS5kZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9rZW5kby1kcm9wZG93bmxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtdGVzdD1cImxvZ2luRHJvcERvd25TdWJzY3JpcHRpb25BcnJvd1VwXCIgKGNsaWNrKT1cInRvZ2dsZShkcm9wZG93bilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJkcm9wRG93bklzQ2xpY2tlZFwiIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIGljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93X2NpcmNsZV91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtdGVzdD1cImxvZ2luRHJvcERvd25TdWJzY3JpcHRpb25BcnJvd0Rvd25cIiAoY2xpY2spPVwidG9nZ2xlKGRyb3Bkb3duKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFkcm9wRG93bklzQ2xpY2tlZFwiIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIGljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93X2NpcmNsZV9kb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbnN0YW5jZWtleVwiIGRhdGEtdGVzdD1cImxvZ2luUGFyYWdyYXBoSW5zdGFuY2VLZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJsb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID4gM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3Vic2NyaXB0aW9uIGtleToge3sgbG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSB9fSB7eyBpbnN0YW5jZWtleSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbCBbdGV4dF09XCJjb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnYm9yZGVyLWJvdHRvbSdcIiAqbmdJZj1cIm90cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBrZW5kb1RleHRCb3ggZGF0YS10ZXN0PVwibG9naW5BY2NvdW50TmFtZU90cFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIiBuYW1lPVwiYWNjb3VudE5hbWVPdHBcIiBbdHlwZV09XCJoaWRlT3RwID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwibm9ybWFsLXN0YXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZU90cCA9ICFoaWRlT3RwXCIgKm5nSWY9XCJoaWRlT3RwID09PSB0cnVlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHlcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVPdHAgPSAhaGlkZU90cFwiICpuZ0lmPVwiaGlkZU90cCA9PT0gZmFsc2VcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eV9vZmYgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gQWxyZWR5TG9nZ2VkIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInVzZXJhbHJlYWR5bG9nZ2VkXCIgY2xhc3M9XCJsb2dpbi1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB3aGl0ZS1zcGFjZTogcHJlLXdyYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvZ2luLXdhcm5pbmcgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgbG9naW5SZXF1ZXN0LmFjY291bnROYW1lIH19IHt7IHVzZXJhbHJlYWR5bG9nZ2VkVGl0bGUgfX0ge3sgdXNlcmFscmVhZHlsb2dnZWRNZXNzYWdlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJiaW5kaW5nXCIgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3Qub3ZlcndyaXRlTG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJhbHJlYWR5bG9nZ2VkQWNjZXB0ZWRcIiBrZW5kb0NoZWNrQm94IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImstY2hlY2tib3gtbGFiZWxcIiBmb3I9XCJiaW5kaW5nXCI+IHt7IHVzZXJhbHJlYWR5bG9nZ2VkT0sgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8IS0tRU5EIEFscmVkeUxvZ2dlZCAtLS0tLS0tLS0tLS0tLS0tIC0tPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXBzLWxvY2sgcGFuZWwgZmxleC1jZW50ZXIgbWFyZ2luLWJvdHRvbS01XCIgKm5nSWY9XCJjYXBzTG9ja09uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYmxvY01haXVzYyB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZXJyb3IgcGFuZWwgZmxleC1jZW50ZXIgbWFyZ2luLWJvdHRvbS01XCIgKm5nSWY9XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndoaXRlLXNwYWNlOiBwcmUtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mbyBwYW5lbCBmbGV4LWNlbnRlclwiICpuZ0lmPVwiYXV0aFNlcnZpY2Uub2tNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYXV0aFNlcnZpY2Uub2tNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1pbmZvLXJlc2V0LXBhc3N3b3JkIHBhbmVsIGZsZXgtY2VudGVyXCIgKm5nSWY9XCJzaG93UmVzZXRQYXNzd29yZE1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyByZXNldFBhc3N3b3JkTWVzc2FnZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJvdHAgJiYgIWlzTWFnb1dlYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBUT1RQRGVzY3JpcHRpb24gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHUgY2xhc3M9XCJsaW5rIHBvaW50ZXJcIiBkYXRhLXRlc3Q9XCJsb2dpblJlc2VuZE90cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWx0ZXJuYXRpdmVNZXRob2RzKG90cEluZm8uVHdvRmFjdG9yVHlwZSlcIiBkYXRhLXRlc3Q9XCJsb2dpbkFsdGVybmF0aXZlT3RwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlICE9PSA0XCI+e3sgcmVzZW5kT1RQTGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSAxXCI+c21zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDJcIj5lLW1haWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gNFwiPnt7IGNob3NlbkF1dGhBcHAgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gbnVsbFwiPnNtcy9lLW1haWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm90cEluZm8uVE9UUENvbmZpZ3VyZWQgfHwgb3RwSW5mby5Nb2JpbGVQaG9uZU5yOyBlbHNlIG9ubHlPbmVNZXRob2RDb25maWd1cmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjogMTBweCAwOyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzAwNTg5MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIob3RwSW5mby5FbWFpbCAmJiBvdHBJbmZvLlRPVFBDb25maWd1cmVkKSB8fCBvdHBJbmZvLk1vYmlsZVBob25lTnJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBvdHBUZXh0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dSBjbGFzcz1cImxpbmsgcG9pbnRlclwiICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlICE9PSAxICYmIG90cEluZm8uTW9iaWxlUGhvbmVOclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFsdGVybmF0aXZlTWV0aG9kcygxKVwiIGRhdGEtdGVzdD1cImxvZ2luQWx0ZXJuYXRpdmVTbXNcIj57eyBvdHBSZXF1ZXN0Q29kZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNNUzwvdT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1IGNsYXNzPVwibGluayBwb2ludGVyXCIgKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgIT09IDJcIiAoY2xpY2spPVwiYWx0ZXJuYXRpdmVNZXRob2RzKDIpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkFsdGVybmF0aXZlU21zXCI+e3sgb3RwUmVxdWVzdENvZGUgfX0gRS1tYWlsPC91PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHUgY2xhc3M9XCJsaW5rIHBvaW50ZXJcIiAqbmdJZj1cIm90cEluZm8uVE9UUENvbmZpZ3VyZWQgJiYgb3RwSW5mby5Ud29GYWN0b3JUeXBlICE9PSA0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWx0ZXJuYXRpdmVNZXRob2RzKDQpXCIgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZUFwcFwiPnt7IHVzZUF1dGhBcHAgfX08L3U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI29ubHlPbmVNZXRob2RDb25maWd1cmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaW5rXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzAwNTg5MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG9uZU1ldGhvZE9ubHkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dSBjbGFzcz1cInBvaW50ZXJcIiAoY2xpY2spPVwiZ29Ub1N0b3JlKClcIj4ge3sgYWx0ZXJuYXRpdmVNZXRob2QgfX0gPC91PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwib3RwICYmIGlzTWFnb1dlYlwiIGNsYXNzPVwibG9naW4taW5mb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mby1yZXNldC1wYXNzd29yZCBwYW5lbCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IG90cFJlc2V0VGV4dE1hZ29XZWIgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDAgMXB4OyBtYXJnaW4tdG9wOiA2MHB4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gZGF0YS10ZXN0PVwibG9naW5CdXR0b25cIiBjbGFzcz1cImJ1dHRvbnMgbG9naW4tYnV0dG9uXCIgKGNsaWNrKT1cImxvZ2luKClcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZEJ1dHRvbigpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS10ZXN0PVwibG9naW5Mb2FkaW5nQnV0dG9uXCIgY2xhc3M9XCJrLWljb24gay1pLWxvYWRpbmdcIiAqbmdJZj1cImxvYWRpbmdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhbG9hZGluZ1wiPnt7IGJ1dHRvblRleHQgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgKm5nSWY9XCIoIWxvYWRpbmcgJiYgdmFsaWRhdGUpIHx8IG90cFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBkYXRhLXRlc3Q9XCJsb2dpbkJhY2tCdXR0b25cIiBjbGFzcz1cImJ1dHRvbnMgYmFjay1idXR0b25cIiAoY2xpY2spPVwiYmFjaygpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt7IGJ1dHRvbkJhY2sgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd1NpZ25VcFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzaWdudXBcIiBkYXRhLXRlc3Q9XCJsb2dpblNpZ25VcFwiIChjbGljayk9XCJuZXdVc2VyKClcIj5TaWduVXAgaGVyZSE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCIhdmFsaWRhdGUgJiYgIW90cFwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgbWFyZ2luLXRvcDogMTBweDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcmdvdHB3ZFwiIGRhdGEtdGVzdD1cImxvZ2luRm9yZ290UGFzc3dvcmRcIiAoY2xpY2spPVwiZ29Ub1Jlc2V0UGFzc3dvcmQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPGE+e3sgZm9yZ2V0UGFzc3dvcmQgfX08L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwib3RwICYmICFpc01hZ29XZWJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDEwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb3Jnb3Rwd2RcIiBkYXRhLXRlc3Q9XCJsb2dpbk1hbmFnZU1ldGhvZHNcIj5cclxuICAgICAgICAgICAgICAgIDx1IGNsYXNzPVwicG9pbnRlclwiIChjbGljayk9XCJnb1RvU3RvcmUoKVwiPnt7IG1hbmFnZU1ldGhvZHMgfX08L3U+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAwOyB3aWR0aDogMTAwJTsgei1pbmRleDogMFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY29weXJpZ2h0IGNvcHlyaWdodC1hYnNcIj5Mb2dpbiB7eyBsaWJfdmVyc2lvbiB9fSAyMDE3IC0ge3sgY3VycmVudFllYXIgfX0sIFp1Y2NoZXR0aSBzLnAuYS48L3A+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+Il19