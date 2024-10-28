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
    i0.ɵɵtextInterpolate3("", ctx_r0.loginRequest.accountName, " ", ctx_r0.useralreadyloggedTitle, " ", ctx_r0.useralreadyloggedMessage, "");
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
function TbLoginComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 70);
} }
function TbLoginComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.buttonText);
} }
function TbLoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "button", 71);
    i0.ɵɵlistener("click", function TbLoginComponent_div_26_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.back()); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.buttonBack, "");
} }
function TbLoginComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "p", 72);
    i0.ɵɵlistener("click", function TbLoginComponent_div_28_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r22); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.newUser()); });
    i0.ɵɵtext(2, "SignUp here!");
    i0.ɵɵelementEnd()();
} }
function TbLoginComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 73)(1, "p", 74);
    i0.ɵɵlistener("click", function TbLoginComponent_div_29_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.goToResetPassword()); });
    i0.ɵɵelementStart(2, "u");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.forgetPassword);
} }
function TbLoginComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 73)(1, "p", 75)(2, "u", 69);
    i0.ɵɵlistener("click", function TbLoginComponent_div_30_Template_u_click_2_listener() { i0.ɵɵrestoreView(_r24); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.goToStore()); });
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
        } }, decls: 34, vars: 26, consts: [["dropdown", ""], ["onlyOneMethodConfigured", ""], [1, "login-container", 3, "ngStyle"], [1, "login", 2, "z-index", "1"], [1, "login-header"], ["mat-card-image", "", 2, "width", "60%", 3, "src"], [4, "ngIf"], [1, "login-form"], [3, "text", "ngClass", 4, "ngIf"], ["text", "Password", 3, "ngClass", 4, "ngIf"], ["class", "form-control", 4, "ngIf"], ["class", "login-infos", 4, "ngIf"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", "style", "white-space: pre-wrap", 4, "ngIf"], ["class", "login-info panel flex-center", 4, "ngIf"], ["class", "login-info-reset-password panel flex-center", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "60px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", "data-test", "loginButton", 1, "buttons", "login-button", 3, "click", "disabled"], ["data-test", "loginLoadingButton", "class", "k-icon k-i-loading", 4, "ngIf"], ["class", "login-footer", 4, "ngIf"], [1, "login-footer"], ["style", "display: flex; margin-top: 10px; justify-content: flex-end", 4, "ngIf"], [2, "position", "absolute", "bottom", "0", "width", "100%", "z-index", "0"], [1, "copyright", "copyright-abs"], [1, "margin-h1", "title"], ["class", "login-expired-subtitle description", 4, "ngIf"], [1, "description"], [1, "login-expired-subtitle", "description"], [1, "description", 2, "width", "350px"], [3, "text", "ngClass"], ["kendoTextBox", "", "data-test", "loginAccountName", "name", "accountName", "type", "text", 3, "ngModelChange", "keyup", "ngModel", "ngClass"], ["text", "Password", 3, "ngClass"], ["kendoTextBox", "", "data-test", "loginPassword", "name", "password", "autocomplete", "current-password", 3, "ngModelChange", "keyup", "ngModel", "type", "ngClass"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], [1, "material-icons", "icon", 3, "click"], [1, "form-control"], ["data-test", "loginDropDownSubscription", "name", "subscription", "textField", "description", "valueField", "subscriptionkey", "valuePrimitive", "true", 1, "kendo-dropdown", 3, "ngModelChange", "click", "disabled", "data", "ngModel"], ["kendoDropDownListItemTemplate", ""], ["data-test", "loginDropDownSubscriptionArrowUp", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowDown", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["class", "instancekey", "data-test", "loginParagraphInstanceKey", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowUp", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginDropDownSubscriptionArrowDown", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginParagraphInstanceKey", 1, "instancekey"], ["kendoTextBox", "", "data-test", "loginAccountNameOtp", "name", "accountNameOtp", "type", "password", 1, "normal-state", 3, "ngModelChange", "keyup", "ngModel", "type"], [1, "login-warning", "flex-center", 2, "display", "flex", "justify-content", "flex-end", "flex-direction", "column", "white-space", "pre-wrap"], [1, "wrap"], ["type", "checkbox", "id", "binding", "name", "useralreadyloggedAccepted", "kendoCheckBox", "", 3, "ngModelChange", "ngModel"], ["for", "binding", 1, "k-checkbox-label"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5", 2, "white-space", "pre-wrap"], [1, "login-info", "panel", "flex-center"], [1, "login-info-reset-password", "panel", "flex-center"], [2, "display", "flex", "justify-content", "flex-end", "flex-direction", "column"], ["class", "description", "style", "margin-bottom: 0px !important", 4, "ngIf"], ["class", "link pointer", "data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 3, "click", 4, "ngIf"], ["class", "login-header", 4, "ngIf", "ngIfElse"], [1, "description", 2, "margin-bottom", "0px !important"], ["data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 1, "link", "pointer", 3, "click"], ["style", "margin: 10px 0; font-weight: 600; color: #005890", 4, "ngIf"], ["class", "link pointer", "data-test", "loginAlternativeSms", 3, "click", 4, "ngIf"], ["class", "link pointer", "data-test", "loginAlternativeApp", 3, "click", 4, "ngIf"], [2, "margin", "10px 0", "font-weight", "600", "color", "#005890"], ["data-test", "loginAlternativeSms", 1, "link", "pointer", 3, "click"], ["data-test", "loginAlternativeApp", 1, "link", "pointer", 3, "click"], [1, "link", 2, "margin-top", "10px", "font-weight", "600", "color", "#005890"], [1, "pointer", 3, "click"], ["data-test", "loginLoadingButton", 1, "k-icon", "k-i-loading"], ["kendoButton", "", "data-test", "loginBackButton", 1, "buttons", "back-button", 3, "click"], ["data-test", "loginSignUp", 1, "signup", 3, "click"], [2, "display", "flex", "margin-top", "10px", "justify-content", "flex-end"], ["data-test", "loginForgotPassword", 1, "forgotpwd", 3, "click"], ["data-test", "loginManageMethods", 1, "forgotpwd"]], template: function TbLoginComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵtemplate(20, TbLoginComponent_div_20_Template, 7, 4, "div", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 17)(22, "div", 18)(23, "button", 19);
            i0.ɵɵlistener("click", function TbLoginComponent_Template_button_click_23_listener() { return ctx.login(); });
            i0.ɵɵtemplate(24, TbLoginComponent_span_24_Template, 1, 0, "span", 20)(25, TbLoginComponent_span_25_Template, 2, 1, "span", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(26, TbLoginComponent_div_26_Template, 4, 1, "div", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 22);
            i0.ɵɵtemplate(28, TbLoginComponent_div_28_Template, 3, 0, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(29, TbLoginComponent_div_29_Template, 4, 1, "div", 23)(30, TbLoginComponent_div_30_Template, 4, 1, "div", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div", 24)(32, "p", 25);
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(24, _c1, "url(" + ctx.backgroundURL + ")"));
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
        } }, dependencies: [i4.NgClass, i4.NgIf, i4.NgStyle, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.CheckboxControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i6.ItemTemplateDirective, i6.DropDownListComponent, i7.LabelDirective, i7.FloatingLabelComponent, i8.TextBoxDirective, i8.CheckBoxDirective], styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list[_ngcontent-%COMP%]{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{background:#bfcdd5}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar:hover{background:#d9d9d9}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#6cafd1}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#005890}.k-list[_ngcontent-%COMP%]   .k-list-item.k-selected[_ngcontent-%COMP%]{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%]:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width: 490px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:323px!important}}@media screen and (max-width: 425px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:273px!important}}@media screen and (max-width: 375px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:217px!important}}.k-list-md[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%], .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}.k-list-item-text[_ngcontent-%COMP%]{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;line-height:20px;margin-bottom:30px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.link[_ngcontent-%COMP%], tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE!important}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:3px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#e7481c;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#e7481c}.login-infos[_ngcontent-%COMP%]   .login-warning[_ngcontent-%COMP%]{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4ab679}.login-infos[_ngcontent-%COMP%]   .login-info-reset-password[_ngcontent-%COMP%]{background:#005890}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:silver}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#e77b2d}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#ff9e18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:gray}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9f9f9f}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4ab679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68b388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#d03c13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#e7481c}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}  .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}  .mat-dialog-container .login-footer .back-button{background:gray}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:silver}  .mat-dialog-container .login-footer .ok-button{background:#4ab679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}  .k-floating-label-container{width:100%;margin:8px 0}  .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea:focus{background-color:#fff!important}  .k-floating-label-container .k-textbox::selection,   .k-floating-label-container .k-input::selection,   .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-picker-md .k-input-inner{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}  .k-floating-label-container .k-picker{border-width:0px;border-style:unset}  .k-floating-label-container .k-picker:focus-within{box-shadow:none}  .k-floating-label-container .k-picker:focus{box-shadow:none}  .k-floating-label-container:after{background-color:#8ee2ff;height:1px}  .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}  .k-floating-label-container .k-dropdown{border:none;background:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{filter:none;background:#0b85ce}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}.mat-mdc-dialog-container[_ngcontent-%COMP%]   .mdc-dialog__surface[_ngcontent-%COMP%]{padding:24px!important;color:#005890!important;border-radius:0!important}.mat-mdc-snack-bar-container[_ngcontent-%COMP%]   .mat-mdc-button.mat-mdc-snack-bar-action[_ngcontent-%COMP%]:not(:disabled){color:#4ab679}  html,   body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}tb-login[_nghost-%COMP%]{font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:#fff}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}}@media screen and (min-width: 576px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:450px}}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .upicon[_ngcontent-%COMP%]{transform:rotate(90deg);padding:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .downicon[_ngcontent-%COMP%]{transform:rotate(270deg)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .k-i-loading[_ngcontent-%COMP%]{font-size:20px}tb-login[_nghost-%COMP%]   p.instancekey[_ngcontent-%COMP%]{font-size:9px;font-weight:300;text-indent:1px;color:#005890}tb-login[_nghost-%COMP%]   p.copyright[_ngcontent-%COMP%]{font-size:10px;font-weight:300;margin:0;color:#fff}tb-login[_nghost-%COMP%]   p.copyright-abs[_ngcontent-%COMP%]{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{cursor:pointer;text-align:right}tb-login[_nghost-%COMP%]   p.signup[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}tb-login[_nghost-%COMP%]   .margin-h1[_ngcontent-%COMP%]{margin-left:-2px;margin-top:20px}tb-login[_nghost-%COMP%]   .margin-p[_ngcontent-%COMP%]{margin-left:-1.5px;margin-top:-10px}tb-login[_nghost-%COMP%]   .login-expired-subtitle[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}tb-login[_nghost-%COMP%]   .login-chooseSubscription[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-size:x-large}}tb-login[_nghost-%COMP%]     .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, tb-login[_nghost-%COMP%]   .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#005890}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLoginComponent, [{
        type: Component,
        args: [{ selector: 'tb-login', template: "<div class=\"login-container\" [ngStyle]=\"{ 'background-image': 'url(' + backgroundURL + ')' }\">\r\n    <div class=\"login\" style=\"z-index: 1\">\r\n        <div class=\"login-header\">\r\n            <div>\r\n                <img mat-card-image style=\"width: 60%\" src=\"{{ logoURL }}\" />\r\n            </div>\r\n            <div *ngIf=\"!validate && !otp\">\r\n                <h1 class=\"margin-h1 title\">{{ welcome }}</h1>\r\n                <p *ngIf=\"isExpiredSession\" class=\"login-expired-subtitle description\">{{ idleTimeoutMessage }}</p>\r\n                <p class=\"description\">{{ enterCredentials }}</p>\r\n            </div>\r\n            <div *ngIf=\"validate && !otp\">\r\n                <h1 class=\"margin-h1 title\">{{ chooseSubscription }}</h1>\r\n                <p class=\"description\">{{ accountName }}: {{ loginRequest.accountName }}</p>\r\n            </div>\r\n            <div *ngIf=\"otp\">\r\n                <h1 class=\"margin-h1 title\">{{ otpTitle }}</h1>\r\n                <p class=\"description\" style=\"width: 350px\">\r\n                    {{ otpMessage }}\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ authAppText }}</span>\r\n                    <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <form>\r\n            <div class=\"login-form\">\r\n                <kendo-floatinglabel\r\n                    [text]=\"accountName\"\r\n                    *ngIf=\"!validate && !otp\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        data-test=\"loginAccountName\"\r\n                        [(ngModel)]=\"loginRequest.accountName\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"accountName\"\r\n                        type=\"text\"\r\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n                    />\r\n                </kendo-floatinglabel>\r\n\r\n                <kendo-floatinglabel\r\n                    text=\"Password\"\r\n                    *ngIf=\"!validate && !otp\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        data-test=\"loginPassword\"\r\n                        [(ngModel)]=\"loginRequest.password\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"password\"\r\n                        [type]=\"hide ? 'password' : 'text'\"\r\n                        autocomplete=\"current-password\"\r\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n                    />\r\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === true\" class=\"material-icons icon\"> visibility </span>\r\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === false\" class=\"material-icons icon\"> visibility_off </span>\r\n                </kendo-floatinglabel>\r\n\r\n                <div class=\"form-control\" *ngIf=\"subscriptionSelection && validate && !otp\">\r\n                    <kendo-floatinglabel\r\n                        text=\"{{ subscription }}\"\r\n                        [ngClass]=\"[authService.errorMessage ? 'border-bottom-error' : '', dropDownIsClicked ? '' : 'border-bottom']\"\r\n                    >\r\n                        <kendo-dropdownlist\r\n                            #dropdown\r\n                            data-test=\"loginDropDownSubscription\"\r\n                            [disabled]=\"loginSubscriptions?.length <= 1\"\r\n                            [data]=\"loginSubscriptions\"\r\n                            name=\"subscription\"\r\n                            textField=\"description\"\r\n                            valueField=\"subscriptionkey\"\r\n                            valuePrimitive=\"true\"\r\n                            [(ngModel)]=\"loginRequest.subscriptionKey\"\r\n                            class=\"kendo-dropdown\"\r\n                            (ngModelChange)=\"onSubChange($event)\"\r\n                            (click)=\"isDropDownClicked()\"\r\n                        >\r\n                            <ng-template kendoDropDownListItemTemplate let-dataItem>\r\n                                <div\r\n                                    attr.data-sub=\"{{ dataItem.subscriptionkey }}\"\r\n                                    attr.data-description=\"{{ dataItem.description }}\"\r\n                                    attr.data-instance=\"{{ dataItem.instancekey }}\"\r\n                                >\r\n                                    {{ dataItem.description }}\r\n                                </div>\r\n                            </ng-template>\r\n                        </kendo-dropdownlist>\r\n                        <span\r\n                            data-test=\"loginDropDownSubscriptionArrowUp\"\r\n                            (click)=\"toggle(dropdown)\"\r\n                            *ngIf=\"dropDownIsClicked\"\r\n                            class=\"material-symbols-rounded icon\"\r\n                        >\r\n                            arrow_circle_up\r\n                        </span>\r\n                        <span\r\n                            data-test=\"loginDropDownSubscriptionArrowDown\"\r\n                            (click)=\"toggle(dropdown)\"\r\n                            *ngIf=\"!dropDownIsClicked\"\r\n                            class=\"material-symbols-rounded icon\"\r\n                        >\r\n                            arrow_circle_down\r\n                        </span>\r\n                    </kendo-floatinglabel>\r\n                    <div>\r\n                        <p class=\"instancekey\" data-test=\"loginParagraphInstanceKey\" *ngIf=\"loginSubscriptions.length > 3\">\r\n                            Subscription key: {{ loginRequest.subscriptionKey }} {{ instancekey }}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <kendo-floatinglabel\r\n                    [text]=\"code\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                    *ngIf=\"otp\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        data-test=\"loginAccountNameOtp\"\r\n                        [(ngModel)]=\"inputValue\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"accountNameOtp\"\r\n                        [type]=\"hideOtp ? 'password' : 'text'\"\r\n                        type=\"password\"\r\n                        class=\"normal-state\"\r\n                    />\r\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === true\" class=\"material-icons icon\"> visibility </span>\r\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === false\" class=\"material-icons icon\"> visibility_off </span>\r\n                </kendo-floatinglabel>\r\n\r\n                <!-- AlredyLogged -->\r\n                <div *ngIf=\"useralreadylogged\" class=\"login-infos\">\r\n                    <div\r\n                        style=\"display: flex; justify-content: flex-end; flex-direction: column; white-space: pre-wrap\"\r\n                        class=\"login-warning flex-center\"\r\n                    >\r\n                        <p>{{ loginRequest.accountName }} {{ useralreadyloggedTitle }} {{ useralreadyloggedMessage }}</p>\r\n                    </div>\r\n                    <div class=\"wrap\">\r\n                        <input\r\n                            type=\"checkbox\"\r\n                            id=\"binding\"\r\n                            [(ngModel)]=\"loginRequest.overwriteLogin\"\r\n                            name=\"useralreadyloggedAccepted\"\r\n                            kendoCheckBox\r\n                        />\r\n                        <label class=\"k-checkbox-label\" for=\"binding\"> {{ useralreadyloggedOK }}</label>\r\n                    </div>\r\n                </div>\r\n                <!--END AlredyLogged ---------------- -->\r\n\r\n                <div class=\"login-infos\">\r\n                    <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\r\n                        <p class=\"no-margin\">{{ blocMaiusc }}</p>\r\n                    </div>\r\n                    <div\r\n                        class=\"login-error panel flex-center margin-bottom-5\"\r\n                        *ngIf=\"authService.errorMessage\"\r\n                        style=\"white-space: pre-wrap\"\r\n                    >\r\n                        <p class=\"no-margin\">{{ authService.errorMessage }}</p>\r\n                    </div>\r\n                    <div class=\"login-info panel flex-center\" *ngIf=\"authService.okMessage\">\r\n                        <p class=\"no-margin\">{{ authService.okMessage }}</p>\r\n                    </div>\r\n                    <div class=\"login-info-reset-password panel flex-center\" *ngIf=\"showResetPasswordMessage\">\r\n                        <p class=\"no-margin\">{{ resetPasswordMessage }}</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"otp\">\r\n                    <div style=\"display: flex; justify-content: flex-end; flex-direction: column\">\r\n                        <p class=\"description\" style=\"margin-bottom: 0px !important\" *ngIf=\"otpInfo.TwoFactorType === 4\">\r\n                            {{ TOTPDescription }}\r\n                        </p>\r\n\r\n                        <u\r\n                            class=\"link pointer\"\r\n                            data-test=\"loginResendOtp\"\r\n                            (click)=\"alternativeMethods(otpInfo.TwoFactorType)\"\r\n                            data-test=\"loginAlternativeOtp\"\r\n                            *ngIf=\"otpInfo.TwoFactorType !== 4\"\r\n                            >{{ resendOTPLabel }}\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ chosenAuthApp }}</span>\r\n                            <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\r\n                        </u>\r\n                        <div class=\"login-header\" *ngIf=\"otpInfo.TOTPConfigured || otpInfo.MobilePhoneNr; else onlyOneMethodConfigured\">\r\n                            <p\r\n                                style=\"margin: 10px 0; font-weight: 600; color: #005890\"\r\n                                *ngIf=\"(otpInfo.Email && otpInfo.TOTPConfigured) || otpInfo.MobilePhoneNr\"\r\n                            >\r\n                                {{ otpText }}\r\n                            </p>\r\n                            <u\r\n                                class=\"link pointer\"\r\n                                *ngIf=\"otpInfo.TwoFactorType !== 1 && otpInfo.MobilePhoneNr\"\r\n                                (click)=\"alternativeMethods(1)\"\r\n                                data-test=\"loginAlternativeSms\"\r\n                                >{{ otpRequestCode }} SMS</u\r\n                            >\r\n                            <u\r\n                                class=\"link pointer\"\r\n                                *ngIf=\"otpInfo.TwoFactorType !== 2\"\r\n                                (click)=\"alternativeMethods(2)\"\r\n                                data-test=\"loginAlternativeSms\"\r\n                                >{{ otpRequestCode }} E-mail</u\r\n                            >\r\n                            <u\r\n                                class=\"link pointer\"\r\n                                *ngIf=\"otpInfo.TOTPConfigured && otpInfo.TwoFactorType !== 4\"\r\n                                (click)=\"alternativeMethods(4)\"\r\n                                data-test=\"loginAlternativeApp\"\r\n                                >{{ useAuthApp }}</u\r\n                            >\r\n                        </div>\r\n                        <ng-template #onlyOneMethodConfigured>\r\n                            <p class=\"link\" style=\"margin-top: 10px; font-weight: 600; color: #005890\">\r\n                                {{ oneMethodOnly }}\r\n                                <u class=\"pointer\" (click)=\"goToStore()\"> {{ alternativeMethod }} </u>\r\n                            </p>\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 60px\">\r\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n                <button kendoButton data-test=\"loginButton\" class=\"buttons login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\r\n                    <span data-test=\"loginLoadingButton\" class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\r\n                    <span *ngIf=\"!loading\">{{ buttonText }}</span>\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"login-footer\" *ngIf=\"(!loading && validate) || otp\">\r\n                <button kendoButton data-test=\"loginBackButton\" class=\"buttons back-button\" (click)=\"back()\">\r\n                    <span> {{ buttonBack }}</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <div *ngIf=\"showSignUp\">\r\n                <p class=\"signup\" data-test=\"loginSignUp\" (click)=\"newUser()\">SignUp here!</p>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!validate && !otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\r\n            <p class=\"forgotpwd\" data-test=\"loginForgotPassword\" (click)=\"goToResetPassword()\">\r\n                <u>{{ forgetPassword }}</u>\r\n            </p>\r\n        </div>\r\n        <div *ngIf=\"otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\r\n            <p class=\"forgotpwd\" data-test=\"loginManageMethods\">\r\n                <u class=\"pointer\" (click)=\"goToStore()\">{{ manageMethods }}</u>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div style=\"position: absolute; bottom: 0; width: 100%; z-index: 0\">\r\n        <p class=\"copyright copyright-abs\">Login {{ lib_version }} 2017 - {{ currentYear }}, Zucchetti s.p.a.</p>\r\n    </div>\r\n</div>\r\n", styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}.k-list ::-webkit-scrollbar{background:#bfcdd5}.k-list ::-webkit-scrollbar:hover{background:#d9d9d9}.k-list ::-webkit-scrollbar-thumb{background:#6cafd1}.k-list ::-webkit-scrollbar-thumb:hover{background:#005890}.k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}.kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width: 490px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}.kendo-dropdown{width:323px!important}}@media screen and (max-width: 425px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}.kendo-dropdown{width:273px!important}}@media screen and (max-width: 375px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}.kendo-dropdown{width:217px!important}}.k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}.k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;line-height:20px;margin-bottom:30px}.pointer{cursor:pointer}.link,:host(tb-login) p.forgotpwd{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom{border-bottom:1px solid #0B85CE!important}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:rgba(0,0,0,.32)}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:3px 0}.login-infos .caps-lock{background:#e7481c;display:flex;align-items:center}.login-infos .login-error{background:#e7481c}.login-infos .login-warning{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos .login-info{background:#4ab679}.login-infos .login-info-reset-password{background:#005890}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:silver}.login-footer .login-button{background:#e77b2d}.login-footer .login-button:hover:enabled{background:#ff9e18}.login-footer .back-button{background:gray}.login-footer .back-button:hover:enabled{background:#9f9f9f}.login-footer .ok-button{background:#4ab679}.login-footer .ok-button:hover:enabled{background:#68b388}.login-footer .error-button{background:#d03c13}.login-footer .error-button:hover:enabled{background:#e7481c}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}::ng-deep .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}::ng-deep .mat-dialog-container .login-footer .back-button{background:gray}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:silver}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4ab679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}::ng-deep .k-floating-label-container{width:100%;margin:8px 0}::ng-deep .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea:focus{background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox::selection,::ng-deep .k-floating-label-container .k-input::selection,::ng-deep .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-picker-md .k-input-inner{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}::ng-deep .k-floating-label-container .k-picker{border-width:0px;border-style:unset}::ng-deep .k-floating-label-container .k-picker:focus-within{box-shadow:none}::ng-deep .k-floating-label-container .k-picker:focus{box-shadow:none}::ng-deep .k-floating-label-container:after{background-color:#8ee2ff;height:1px}::ng-deep .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}::ng-deep .k-floating-label-container .k-dropdown{border:none;background:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{filter:none;background:#0b85ce}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}.mat-mdc-dialog-container .mdc-dialog__surface{padding:24px!important;color:#005890!important;border-radius:0!important}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:#4ab679}::ng-deep html,::ng-deep body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}:host(tb-login){font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}:host(tb-login) .login-container{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}:host(tb-login) .login-container .login{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:#fff}@media screen and (max-width: 768px){:host(tb-login) .login-container .login{padding:20px}}@media screen and (min-width: 576px){:host(tb-login) .login-container .login{max-width:450px}}:host(tb-login) .login-container .login .upicon{transform:rotate(90deg);padding:1px}:host(tb-login) .login-container .login .downicon{transform:rotate(270deg)}:host(tb-login) .login-container .login .login-header{display:flex;flex-direction:column}:host(tb-login) .login-container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:0}:host(tb-login) .login-container .login .k-i-loading{font-size:20px}:host(tb-login) p.instancekey{font-size:9px;font-weight:300;text-indent:1px;color:#005890}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) p.forgotpwd{cursor:pointer;text-align:right}:host(tb-login) p.signup{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}:host(tb-login) .margin-h1{margin-left:-2px;margin-top:20px}:host(tb-login) .margin-p{margin-left:-1.5px;margin-top:-10px}:host(tb-login) .login-expired-subtitle{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}:host(tb-login) .login-chooseSubscription{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}:host(tb-login) .login-sign-in{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){:host(tb-login) .login{padding:20px}:host(tb-login) .login .login-form ::ng-deep .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){:host(tb-login) .login-sign-in{font-size:x-large}}:host(tb-login) ::ng-deep .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host(tb-login) .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#005890}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL3BhZ2VzL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDSDVCLDZCQUF1RTtJQUFBLFlBQXdCO0lBQUEsaUJBQUk7OztJQUE1QixjQUF3QjtJQUF4QiwrQ0FBd0I7OztJQUQvRixBQURKLDJCQUErQixhQUNDO0lBQUEsWUFBYTtJQUFBLGlCQUFLO0lBQzlDLG9FQUF1RTtJQUN2RSw2QkFBdUI7SUFBQSxZQUFzQjtJQUNqRCxBQURpRCxpQkFBSSxFQUMvQzs7O0lBSDBCLGVBQWE7SUFBYixvQ0FBYTtJQUNyQyxjQUFzQjtJQUF0Qiw4Q0FBc0I7SUFDSCxlQUFzQjtJQUF0Qiw2Q0FBc0I7OztJQUc3QyxBQURKLDJCQUE4QixhQUNFO0lBQUEsWUFBd0I7SUFBQSxpQkFBSztJ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a0U7OztpRkRyUGhHLGdCQUFnQjtjQU41QixTQUFTOzJCQUNJLFVBQVU7O3NCQWtGZixNQUFNO3VCQUFDLFFBQVE7cUJBZEcsUUFBUTtrQkFBOUIsU0FBUzttQkFBQyxVQUFVOztrRkEvRFosZ0JBQWdCO0FBNHFCN0IsMkZBQTJGO0FBQzNGLFNBQVMsd0JBQXdCO0lBQzdCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDWixJQUFJLENBQUM7WUFDRCxRQUFRO2lCQUNILGdCQUFnQixDQUFDLHdCQUF3QixDQUFDO2lCQUMxQyxPQUFPLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQzNGLENBQUM7UUFBQyxNQUFNLENBQUM7WUFDTCxvQkFBb0I7UUFDeEIsQ0FBQztJQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNiLENBQUM7QUFFRCw4RUFBOEU7QUFDOUUsU0FBUyxXQUFXO0lBQ2hCLElBQUksQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQUMsTUFBTSxDQUFDO1FBQ0wsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ1VDYWxlbmRhckpvYiwgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4uL21vZGVscy9zdG9yYWdlLXZhcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9tb2RlbHMvc3Vic2NyaXB0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2ZvcmdvdC1wYXNzd29yZC1kaWFsb2cvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJDb250ZW50SW5pdCwgSW5qZWN0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBFeHRyYUluZm8gfSBmcm9tICcuLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBTdHJpbmdzIH0gZnJvbSAnLi4vbW9kZWxzL1N0cmluZ3MnO1xyXG5pbXBvcnQgeyBMSUJfVkVSU0lPTiB9IGZyb20gJy4uLy4uL3ZlcnNpb24nO1xyXG5pbXBvcnQgeyBPcGVyYXRpb25SZXN1bHQgfSBmcm9tICcuLi9tb2RlbHMvb3BlcmF0aW9uLXJlc3VsdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGItbG9naW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY2xhc3MgVGJMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gICAgcHJpdmF0ZSBjYWNoZWRDb21wYW5pZXM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICBjYXBzTG9ja09uID0gZmFsc2U7XHJcbiAgICB2YWxpZGF0ZSA9IGZhbHNlO1xyXG4gICAgb3RwID0gZmFsc2U7XHJcbiAgICB1c2VyYWxyZWFkeWxvZ2dlZCA9IGZhbHNlO1xyXG4gICAgT0xEID0gZmFsc2U7IC8vdXNhdG8gcGVyIGRpZmZlcmVuemlhcmUgbGUgdmVyc2lvbmkgb2Jzb2xldGUgZGkgbG9naW5cclxuICAgIGxvYWRpbmcgPSBmYWxzZTtcclxuICAgIGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0ID0gbmV3IExvZ2luUmVxdWVzdCgpO1xyXG4gICAgcmVkaXJlY3RVcmw6IHN0cmluZztcclxuICAgIGlzTWFnb1dlYjogYm9vbGVhbjtcclxuICAgIGJ1dHRvblRleHQ6IHN0cmluZztcclxuICAgIG5leHRUZXh0OiBzdHJpbmc7XHJcbiAgICBsb2dpblRleHQ6IHN0cmluZztcclxuICAgIGN1cnJlbnRZZWFyOiBzdHJpbmc7XHJcbiAgICBjcmVhdGVBY2NvdW50VXJsOiBzdHJpbmc7XHJcbiAgICBjaGFuZ2VQYXNzd29yZFVybDogc3RyaW5nO1xyXG4gICAgc3Vic2NyaXB0aW9uU2VsZWN0aW9uOiBib29sZWFuOyAvLyBhYmlsaXRhIGxhIHNjZWx0YSBkZWxsYSBzdWJzY3JpcHRpb25cclxuICAgIHNob3dTaWduVXA6IGJvb2xlYW47IC8vIGFiaWxpdGEgbGEgcG9zc2liaWxpdMOgIGRpIHJlZ2lzdHJhcmUgbnVvdm8gYWNjb3VudFxyXG4gICAgbG9naW5TdWJzY3JpcHRpb25zOiBBcnJheTx7IGRlc2NyaXB0aW9uOiBzdHJpbmc7IHN1YnNjcmlwdGlvbmtleTogc3RyaW5nOyBzdGF0dXM6IG51bWJlcjsgaW5zdGFuY2VrZXk6IHN0cmluZyB9PiA9IFtdO1xyXG4gICAgbG9nb1VSTDogc3RyaW5nO1xyXG4gICAgYmFja2dyb3VuZFVSTDogc3RyaW5nO1xyXG4gICAgaGlkZSA9IHRydWU7XHJcbiAgICBoaWRlT3RwID0gdHJ1ZTtcclxuICAgIGluc3RhbmNla2V5OiBzdHJpbmc7XHJcbiAgICBpc0Nvbm5lY3RlZCA9IHRydWU7XHJcbiAgICBwdWJsaWMgZG9jdW1lbnQ/OiBEb2N1bWVudDtcclxuICAgIGxpYl92ZXJzaW9uOiBzdHJpbmcgPSBMSUJfVkVSU0lPTjtcclxuICAgIC8vIHRlc3RpIGluIGl0YWxpYW5vIGVkIGluZ2xlc2VcclxuICAgIGNob29zZVN1YnNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgZ29vZEpvYjogc3RyaW5nO1xyXG4gICAgc3Vic2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBpbnN0YW5jZTogc3RyaW5nO1xyXG4gICAgYnV0dG9uQmFjazogc3RyaW5nO1xyXG4gICAgYWNjb3VudE5hbWU6IHN0cmluZztcclxuICAgIGVudGVyQWNjb3VuTmFtZTogc3RyaW5nO1xyXG4gICAgcmVzZXRQYXNzd29yZE1lc3NhZ2U6IHN0cmluZztcclxuICAgIHdlbGNvbWU6IHN0cmluZztcclxuICAgIGVudGVyQ3JlZGVudGlhbHM6IHN0cmluZztcclxuICAgIGZvcmdldFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBibG9jTWFpdXNjOiBzdHJpbmc7XHJcbiAgICBpZGxlVGltZW91dE1lc3NhZ2U6IHN0cmluZztcclxuICAgIG90cE1lc3NhZ2U6IHN0cmluZztcclxuICAgIGF1dGhBcHBUZXh0OiBzdHJpbmc7XHJcbiAgICBvdHBUaXRsZTogc3RyaW5nO1xyXG4gICAgcmVzZW5kT1RQTGFiZWw6IHN0cmluZztcclxuICAgIGNvZGU6IHN0cmluZztcclxuICAgIGNob3NlbkF1dGhBcHA6IHN0cmluZztcclxuICAgIG90cFRleHQ6IHN0cmluZztcclxuICAgIG90cFJlcXVlc3RDb2RlOiBzdHJpbmc7XHJcbiAgICB1c2VyYWxyZWFkeWxvZ2dlZE1lc3NhZ2U6IHN0cmluZztcclxuICAgIHVzZXJhbHJlYWR5bG9nZ2VkT0s6IHN0cmluZztcclxuICAgIHVzZXJhbHJlYWR5bG9nZ2VkVGl0bGU6IHN0cmluZztcclxuICAgIHVzZUF1dGhBcHA6IHN0cmluZztcclxuICAgIG9uZU1ldGhvZE9ubHk6IHN0cmluZztcclxuICAgIGFsdGVybmF0aXZlTWV0aG9kOiBzdHJpbmc7XHJcbiAgICBtYW5hZ2VNZXRob2RzOiBzdHJpbmc7XHJcbiAgICBUT1RQRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gICAgZHJvcERvd25Jc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgIGNvbWJvQm94SXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICBpY29uSXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICBAVmlld0NoaWxkKCdkcm9wZG93bicpIGRyb3Bkb3duOiBhbnk7XHJcbiAgICBjdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICBsYW5ndWFnZUlUID0gdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0Jyk7XHJcbiAgICBvdHBJbmZvOiBFeHRyYUluZm8gPSBuZXcgRXh0cmFJbmZvKCk7XHJcbiAgICBpc0Vycm9yQ29taW5nRnJvbU1hZ28gPSBmYWxzZTtcclxuICAgIHNob3dSZXNldFBhc3N3b3JkTWVzc2FnZSA9IGZhbHNlO1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYz86IGFueVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdjbGljaycsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21ib0JveElzQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21ib0JveElzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWNvbklzQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29uSXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kcm9wZG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi50b2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wRG93bklzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudCA9IGRvYyBhcyBEb2N1bWVudDtcclxuICAgICAgICB0aGlzLmNoZWNrQ29ubmVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gdGhpcy5hdXRoU2VydmljZS5nZXRBcHBJZCgpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uID0gYXV0aFNlcnZpY2UuaGFzU3Vic2NyaXB0aW9uU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zaG93U2lnblVwID0gYXV0aFNlcnZpY2Uuc2hvd1NpZ25VcCgpO1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RVcmwgPSBhdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpO1xyXG4gICAgICAgIHRoaXMuaXNNYWdvV2ViID0gYXV0aFNlcnZpY2UuZ2V0SWZJc01hZ29XZWIoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUFjY291bnRVcmwgPSBhdXRoU2VydmljZS5nZXRDcmVhdGVBY2NvdW50VXJsKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZFVybCA9IGF1dGhTZXJ2aWNlLmdldENoYW5nZVBhc3N3b3JkVXJsKCk7XHJcbiAgICAgICAgdGhpcy5sb2dvVVJMID0gYXV0aFNlcnZpY2UuZ2V0TG9nb1VSTCgpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFVSTCA9IGF1dGhTZXJ2aWNlLmdldEJhY2tncm91bmRVUkwoKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNla2V5ID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRUZXh0ID0gJ2F2YW50aSc7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5UZXh0ID0gJ2FjY2VkaSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VGV4dCA9ICduZXh0JztcclxuICAgICAgICAgICAgdGhpcy5sb2dpblRleHQgPSAnbG9naW4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlIHx8ICF0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiA/IHRoaXMubG9naW5UZXh0IDogdGhpcy5uZXh0VGV4dDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkge1xyXG4gICAgICAgICAgICB0aGlzLmNob29zZVN1YnNjcmlwdGlvbiA9ICdTY2VnbGkgbGEgdHVhIHNvdHRvc2NyaXppb25lJztcclxuICAgICAgICAgICAgdGhpcy5nb29kSm9iID0gJ0J1b24gbGF2b3JvISc7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gJ1NvdHRvc2NyaXppb25lJztcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9ICdJc3RhbnphJztcclxuICAgICAgICAgICAgdGhpcy5idXR0b25CYWNrID0gJzwgSU5ESUVUUk8nO1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnROYW1lID0gJ05vbWUgdXRlbnRlJztcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkTWVzc2FnZSA9ICdQZXIgcG90ZXIgcmVpbXBvc3RhcmUgdW5hIG51b3ZhIHBhc3N3b3JkIMOoIG5lY2Vzc2FyaW8gY29udGF0dGFyZSBs4oCZYW1taW5pc3RyYXRvcmUgZGkgTWFnb1dlYic7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJBY2NvdW5OYW1lID0gJ0luc2VyaXNjaSBpbCB0dW8gbm9tZSB1dGVudGUgZSB0aSBpbnZpZXJlbW8gdW5hIG51b3ZhIHBhc3N3b3JkJztcclxuICAgICAgICAgICAgdGhpcy53ZWxjb21lID0gJ0JlbnZlbnV0byBzdSAnICsgYXV0aFNlcnZpY2UuZ2V0QnJhbmROYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJDcmVkZW50aWFscyA9ICdBdXRlbnRpY2F0aSBpbnNlcmVuZG8gbm9tZSB1dGVudGUgZSBwYXNzd29yZC4nO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmdldFBhc3N3b3JkID0gJ0hhaSBkaW1lbnRpY2F0byBsYSBwYXNzd29yZCA/JztcclxuICAgICAgICAgICAgdGhpcy5ibG9jTWFpdXNjID0gJ0Jsb2NjbyBtYWl1c2NvbGUgYXR0aXZvJztcclxuICAgICAgICAgICAgdGhpcy5pZGxlVGltZW91dE1lc3NhZ2UgPSAnTGEgdHVhIHNlc3Npb25lIMOoIHRlcm1pbmF0YSBwZXIgaW5hdHRpdml0w6AsIHB1b2kgcmlwcmVuZGVyZSBkYSBxdWkuJztcclxuICAgICAgICAgICAgdGhpcy5vdHBNZXNzYWdlID0gJ0luc2VyaXNjaSBpbCBjb2RpY2UgT1RQIGNoZSBoYWkgcmljZXZ1dG8gdHJhbWl0ZSAnO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhBcHBUZXh0ID0gJ2FwcCBkaSBhdXRlbnRpY2F6aW9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMub3RwVGl0bGUgPSAnQXV0ZW50aWNhemlvbmUgYSBkdWUgZmF0dG9yaSc7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZW5kT1RQTGFiZWwgPSAnUmljaGllZGkgdW4gbnVvdm8gY29kaWNlIE9UUCB2aWEgJztcclxuICAgICAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZE1lc3NhZ2UgPSAnVnVvaSBjb250aW51YXJlIGNvbiBsYSBsb2dpbj8gTGEgbG9naW4gcHJlY2VkZW50ZSB2ZXJyw6AgZGlzYWJpbGl0YXRhLic7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRUaXRsZSA9ICcgw6ggZ2nDoCBjb25uZXNzbyBhIHF1ZXN0YSBzdWJzY3JpcHRpb24uJztcclxuICAgICAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZE9LID0gJ1PDrCwgY29udGludWEgY29uIGxhIGxvZ2luJztcclxuICAgICAgICAgICAgdGhpcy5jb2RlID0gJ0NvZGljZSBPVFAnO1xyXG4gICAgICAgICAgICB0aGlzLmNob3NlbkF1dGhBcHAgPSAnYXBwIGRpIGF1dGVudGljYXppb25lIHNjZWx0YSc7XHJcbiAgICAgICAgICAgIHRoaXMub3RwVGV4dCA9ICdPcHB1cmUnO1xyXG4gICAgICAgICAgICB0aGlzLm90cFJlcXVlc3RDb2RlID0gJ1JpY2hpZWRpIGNvZGljZSB2aWEgJztcclxuICAgICAgICAgICAgdGhpcy51c2VBdXRoQXBwID0gJ1V0aWxpenphIGxhIHR1YSBhcHAgZGkgYXV0ZW50aWNhemlvbmUnO1xyXG4gICAgICAgICAgICB0aGlzLm9uZU1ldGhvZE9ubHkgPVxyXG4gICAgICAgICAgICAgICAgJ0hhaSB1biBzb2xvIG1ldG9kbyBkaSBhdXRlbnRpY2F6aW9uZSBjb25maWd1cmF0bywgcGVyIG5vbiByaXNjaGlhcmUgZGkgcmltYW5lcmUgYmxvY2NhdG8gdGkgY29uc2lnbGlhbW8gZGknO1xyXG4gICAgICAgICAgICB0aGlzLmFsdGVybmF0aXZlTWV0aG9kID0gJ2F0dGl2YXJlIHVuIG1ldG9kbyBhbHRlcm5hdGl2by4nO1xyXG4gICAgICAgICAgICB0aGlzLm1hbmFnZU1ldGhvZHMgPSAnR2VzdGlzY2kgaSB0dW9pIG1ldG9kaSBkaSBhY2Nlc3NvJztcclxuICAgICAgICAgICAgdGhpcy5UT1RQRGVzY3JpcHRpb24gPVxyXG4gICAgICAgICAgICAgICAgXCJBcHJpIGwnYXBwIG8gbCdlc3RlbnNpb25lIGRlbCBicm93c2VyIGRlbGwnYXV0ZW50aWNhdG9yZSBhIGR1ZSBmYXR0b3JpIChUT1RQKSBwZXIgdmlzdWFsaXp6YXJlIGlsIHR1byBjb2RpY2UgZGkgYXV0ZW50aWNhemlvbmVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNob29zZVN1YnNjcmlwdGlvbiA9ICdDaG9vc2UgeW91ciBzdWJzY3JpcHRpb24nO1xyXG4gICAgICAgICAgICB0aGlzLmdvb2RKb2IgPSAnR29vZCBqb2IhJztcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSAnU3Vic2NyaXB0aW9uJztcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9ICdJbnN0YW5jZSc7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmFjayA9ICc8IEJBQ0snO1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnROYW1lID0gJ0FjY291bnQgbmFtZSc7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYXNzd29yZE1lc3NhZ2UgPSAnUGxlYXNlLCBjb250YWN0IE1hZ29XZWIgYWRtaW5pc3RyYXRvciB0byByZXNldCB5b3VyIHBhc3N3b3JkJztcclxuICAgICAgICAgICAgdGhpcy5lbnRlckFjY291bk5hbWUgPSAnRW50ZXIgeW91ciBhY2NvdW50IG5hbWUgYW5kIHdlIHdpbGwgc2VuZCB5b3UgYSBuZXcgcGFzc3dvcmQnO1xyXG4gICAgICAgICAgICB0aGlzLndlbGNvbWUgPSAnV2VsY29tZSB0byAnICsgYXV0aFNlcnZpY2UuZ2V0QnJhbmROYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJDcmVkZW50aWFscyA9ICdBdXRoZW50aWNhdGUgeW91cnNlbGYgYnkgZW50ZXJpbmcgeW91ciBhY2NvdW50IG5hbWUgYW5kIHBhc3N3b3JkLic7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmQgPSAnRm9yZ290IHlvdXIgcGFzc3dvcmQgPyc7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY01haXVzYyA9ICdDYXBzIGxvY2sgb24nO1xyXG4gICAgICAgICAgICB0aGlzLmlkbGVUaW1lb3V0TWVzc2FnZSA9ICdZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQgZHVlIHRvIGluYWN0aXZpdHksIHlvdSBjYW4gcmVzdW1lIGZyb20gaGVyZS4nO1xyXG4gICAgICAgICAgICB0aGlzLm90cE1lc3NhZ2UgPSAnRW50ZXIgdGhlIG90cCBjb2RlIHlvdSByZWNlaXZlZCB2aWEgJztcclxuICAgICAgICAgICAgdGhpcy5hdXRoQXBwVGV4dCA9ICdhdXRoZW50aWNhdGlvbiBhcHAnO1xyXG4gICAgICAgICAgICB0aGlzLm90cFRpdGxlID0gJ1R3by1GYWN0b3IgQXV0aGVudGljYXRpb24nO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2VuZE9UUExhYmVsID0gJ1JlcXVlc3QgYSBuZXcgT1RQIGNvZGUgdmlhICc7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRNZXNzYWdlID0gJ0RvIHlvdSB3YW50IHRvIGNvbnRpbnVlIHdpdGggdGhlIGxvZ2luPyBUaGUgcHJldmlvdXMgbG9naW4gd2lsbCBiZSBkaXNhYmxlZC4nO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJhbHJlYWR5bG9nZ2VkVGl0bGUgPSAnIGlzIGFscmVhZHkgbG9nZ2VkIGluIHRvIHRoaXMgc3Vic2NyaXB0aW9uLic7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRPSyA9ICdZZXMsIGNvbnRpbnVlIHRvIGxvZ2luJztcclxuICAgICAgICAgICAgdGhpcy5jb2RlID0gJ09UUCBDb2RlJztcclxuICAgICAgICAgICAgdGhpcy5jaG9zZW5BdXRoQXBwID0gJ2Nob3NlbiBhdXRoZW50aWNhdG9yIGFwcCc7XHJcbiAgICAgICAgICAgIHRoaXMub3RwVGV4dCA9ICdPcic7XHJcbiAgICAgICAgICAgIHRoaXMub3RwUmVxdWVzdENvZGUgPSAnUmVxdWVzdCBjb2RlIHZpYSAnO1xyXG4gICAgICAgICAgICB0aGlzLnVzZUF1dGhBcHAgPSAnVXNlIHlvdXIgYXV0aGVudGljYXRvciBhcHAnO1xyXG4gICAgICAgICAgICB0aGlzLm9uZU1ldGhvZE9ubHkgPSAnWW91IGhhdmUgb25seSBvbmUgYXV0aGVudGljYXRpb24gbWV0aG9kIGNvbmZpZ3VyZWQsIHRvIGF2b2lkIHRoZSByaXNrIG9mIGJlaW5nIGJsb2NrZWQgd2UgcmVjb21tZW5kIHlvdSc7XHJcbiAgICAgICAgICAgIHRoaXMuYWx0ZXJuYXRpdmVNZXRob2QgPSAnYWN0aXZhdGUgYW4gYWx0ZXJuYXRpdmUgbWV0aG9kLic7XHJcbiAgICAgICAgICAgIHRoaXMubWFuYWdlTWV0aG9kcyA9ICdNYW5hZ2UgeW91ciBsb2dpbiBtZXRob2RzJztcclxuICAgICAgICAgICAgdGhpcy5UT1RQRGVzY3JpcHRpb24gPSAnT3BlbiB5b3VyIHR3by1mYWN0b3IgYXV0aGVudGljYXRvciAoVE9UUCkgYXBwIG9yIGJyb3dzZXIgZXh0ZW5zaW9uIHRvIHZpZXcgeW91ciBhdXRoZW50aWNhdGlvbiBjb2RlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhcHBSZWRpcmVjdCA9IHBhcmFtc1snYXBwUmVkaXJlY3QnXTtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBwYXJhbXNbJ2Vycm9yJ107XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UudXNlRENTID0gYXBwUmVkaXJlY3QgJiYgYXBwUmVkaXJlY3QgPT09ICdEQ1NfQVBQJztcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnJvciA/IGVycm9yIDogJyc7XHJcbiAgICAgICAgICAgIHRoaXMuaXNFcnJvckNvbWluZ0Zyb21NYWdvID0gZXJyb3IgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUFJPVkEgUEVSIEFQRVJUVVJBIERJQUxPRyBESSBOT1RJRklDQSBBR0dJT1JOQU1FTlRPXHJcbiAgICAvLyAgYXN5bmMgb3BlbkRpYWxvZygpIHtcclxuICAgIC8vICAgY29uc3QgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0RPTlRTSE9XVVBEQVRFV0FSTicpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzX3RyYW5zbGF0aW9uID0gbmV3ICBTdHJpbmdzKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZU1lc3NhZ2UodGhpcy5hdXRoU2VydmljZSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3ViJywgXCJzdWIgeFwiKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQGRhdGUnLCBcInRoaXMgZGF0ZVwiKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN0YXJ0aCcsXCJzdGFydCBob3VyXCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAZW5kaCcsXCJlbmQgaG91clwiICk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vbiBtb3N0cm8gc2UgbWkgaGFubm8gZGV0dG8gZGkgbm9uIG1vc3RyYXJlIHBpdS5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSBtZXNzYWdlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub3BlblVwZGF0ZUFsZXJ0RGlhbG9nKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlVGl0bGUoKSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlRG9udFNob3dNZXNzYWdlKCksXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO31cclxuICAgIC8vICB9XHJcbiAgICAvLyBQUk9WQSBQRVIgQVBFUlRVUkEgRElBTE9HIERJIE5PVElGSUNBIEFHR0lPUk5BTUVOVE9cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvYWRMb2dpbkRhdGEoKTtcclxuICAgICAgICB3ZWJraXRBdXRvZmlsbFdvcmthcm91bmQoKTtcclxuICAgICAgICAvL3Rlc3Q6IHRoaXMub3BlbkRpYWxvZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgY2hlY2tDb25uZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNoZWNrQ29ubmVjdGlvbigpO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAvLyBzZSBtaSBhcnJpdmEgdW4gZXJyb3JlIG1vc3RybyBxdWVsbG8gYWx0cmltZW50aSBzb2xvIGwgdXJsIGNoZSBsbyBoYSBkYXRvXHJcbiAgICAgICAgICAgIGxldCBlcnJvciA9IHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IubGVuZ3RoID09PSAwKSBlcnJvciA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QmFzZVVybCgpO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IHRoaXMubGFuZ3VhZ2VJVFxyXG4gICAgICAgICAgICAgICAgPyAnU2Vydml6aW8gdGVtcG9yYW5lYW1lbnRlIG5vbiByYWdnaXVuZ2liaWxlLlxcbkRldHRhZ2xpOiAnICsgZXJyb3JcclxuICAgICAgICAgICAgICAgIDogJ1NlcnZpY2UgdGVtcG9yYXJpbHkgbm90IGF2YWlsYWJsZS5cXG5EZXRhaWxzOiAnICsgZXJyb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmlzRXJyb3JDb21pbmdGcm9tTWFnbyA/IHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlIDogJyc7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgb25TdWJDaGFuZ2UobmV3VmFsdWU6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHNkID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMuZmluZCgocykgPT4gcy5zdWJzY3JpcHRpb25rZXkgPT09IG5ld1ZhbHVlKTtcclxuICAgICAgICBpZiAoc2QgJiYgc2QuaW5zdGFuY2VrZXkpIHRoaXMuaW5zdGFuY2VrZXkgPSBgJHt0aGlzLmluc3RhbmNlfTogJHtzZC5pbnN0YW5jZWtleX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAga2V5VXBGdW5jdGlvbihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkQnV0dG9uKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBieSBlbnRlci4uLicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhcHNPbiA9IGV2ZW50LmdldE1vZGlmaWVyU3RhdGUgJiYgZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSgnQ2Fwc0xvY2snKTtcclxuICAgICAgICB0aGlzLmNhcHNMb2NrT24gPSBjYXBzT247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBkaXNhYmxlZEJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAoaGFzQXV0b2ZpbGwoKSAmJlxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLmlzQ29ubmVjdGVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uICYmIHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnZhbGlkYXRlKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm90cCAmJiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoICE9PSA2KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnVzZXJhbHJlYWR5bG9nZ2VkICYmICF0aGlzLmxvZ2luUmVxdWVzdC5vdmVyd3JpdGVMb2dpbikpKSB8fFxyXG4gICAgICAgICAgICAoIWhhc0F1dG9maWxsKCkgJiZcclxuICAgICAgICAgICAgICAgICghdGhpcy5pc0Nvbm5lY3RlZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiAmJiB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDAgJiYgdGhpcy52YWxpZGF0ZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5vdHAgJiYgdGhpcy5pbnB1dFZhbHVlLmxlbmd0aCAhPT0gNikgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy51c2VyYWxyZWFkeWxvZ2dlZCAmJiAhdGhpcy5sb2dpblJlcXVlc3Qub3ZlcndyaXRlTG9naW4pKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzRXhwaXJlZFNlc3Npb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2V4cGlyZWRTZXNzaW9uJykgPT09ICd0cnVlJztcclxuICAgIH1cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgbmV3VXNlcigpIHtcclxuICAgICAgICAvLyByaW1hbmRhIGFsbGEgcGFnaW5hIChwcmVzdW1pYmlsbWVudGUgZGVsbG8gc3RvcmUpIGRvdmUgIHNhcsOgIHBvc3NpYmlsZSBjcmVhcmUgdW4gbnVvdm8gYWNjb3VudC5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jcmVhdGVBY2NvdW50VXJsXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBiYWNrKGtlZXBNZXNzYWdlczogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgLy8gcmlwdWxpc2NvIHR1dHRvLi4uXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnRva2VuID0gJyc7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgPSAnJztcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5vdFBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QucHJvY2Vzc0lEID0gJyc7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Qub3ZlcndyaXRlTG9naW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVzZXJhbHJlYWR5bG9nZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYXBwSWQgPSAnJztcclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLm5leHRUZXh0O1xyXG4gICAgICAgIHRoaXMubG9naW5TdWJzY3JpcHRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5vdHAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuICAgICAgICBpZiAoIWtlZXBNZXNzYWdlcykge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGxvZ2luKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiByZXF1ZXN0ZWQuLi4nICsgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkTWVzc2FnZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2F2ZUxvZ2luRGF0YSgpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnZXhwaXJlZFNlc3Npb24nKTtcclxuICAgICAgICAvL2Fzc2Vnbm8gdW4gaWQgYWxsYSBsb2dpbiBlIHNvbG8gcXVlc3RhIHBvdHLDoSB1c2FyZSBpbCBjb2RpY2UgIG90cCAgIGFzc2VnbmF0b1xyXG4gICAgICAgIGlmICghdGhpcy5sb2dpblJlcXVlc3QucHJvY2Vzc0lEKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMDAwMCArIDEwMDAwMCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Qub3RQYXNzd29yZCA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3RwKSB7XHJcbiAgICAgICAgICAgIC8vbmVsbGUgcHJpbWUgdmVyc2lvbmkgbCBvdHAgYW5kYXZhIG5lbCBjYW1wbyBwYXNzd29yZCwgcG9pIMOpIHN0YXRvIGNyZWF0byAgaWwgY2FtcG8gYXBwb3NpdG9cclxuICAgICAgICAgICAgaWYgKHRoaXMuT0xEKSB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9IHRoaXMuaW5wdXRWYWx1ZTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmxvZ2luUmVxdWVzdC5vdFBhc3N3b3JkID0gdGhpcy5pbnB1dFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUgJiYgdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYXBwSWQgPSAnTUNsb3VkUHJlTG9naW4nO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxpbmcgcHJlbG9naW4uLi4gJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDEgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnByZWxvZ2luKHRoaXMubG9naW5SZXF1ZXN0KS5jYXRjaCgoZXJyMSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVycjEuZXJyb3IgJiYgZXJyMS5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMudmFsaWRhdGUgPyB0aGlzLmxvZ2luVGV4dCA6IHRoaXMubmV4dFRleHQ7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmkgc2lhIGxvZ2luIHNpYSBjaGVja2RiXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQxICYmIHJlc3VsdDEuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm90cCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wYW5pZXNGb3JVc2VyKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsZWN0aW5nIHN1YnNjcmlwdGlvbnMuLi4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vdHAgJiYgcmVzdWx0MSAmJiByZXN1bHQxLlJlc3VsdENvZGUgPT09IDE0Mykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvID0gcmVzdWx0MS5FeHRyYUluZm87XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vdHBJbmZvID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk9MRCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvID0gbmV3IEV4dHJhSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuT0xEID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm90cCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vdHAgJiYgcmVzdWx0MSAmJiAhcmVzdWx0MS5SZXN1bHQgJiYgcmVzdWx0MS5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gdGhpcy5sYW5ndWFnZUlUID8gJ09UUCBub24gdmFsaWRvLicgOiAnSW52YWxpZCBPVFAuJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYXBwSWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFwcElkKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsaW5nIGxvZ2luLi4uICcpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMubG9naW5SZXF1ZXN0KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vdHAgJiYgcmVzdWx0ICYmIHJlc3VsdC5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mbyA9IHJlc3VsdC5FeHRyYUluZm87XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vdHBJbmZvID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk9MRCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvID0gbmV3IEV4dHJhSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuT0xEID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm90cCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vdHAgJiYgcmVzdWx0ICYmICFyZXN1bHQuUmVzdWx0ICYmIHJlc3VsdC5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gdGhpcy5sYW5ndWFnZUlUID8gJ09UUCBub24gdmFsaWRvLicgOiAnSW52YWxpZCBPVFAuJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSA/IHRoaXMubG9naW5UZXh0IDogdGhpcy5uZXh0VGV4dDtcclxuICAgICAgICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaSBzaWEgbG9naW4gc2lhIGNoZWNrZGJcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0Q29kZSA9PT0gMTE2KSB7XHJcbiAgICAgICAgICAgICAgICAvL2ZhaSBjb3NlIDExNiAobW9zdHJhIGF2dmlzbylcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vbGEgbG9naW4gw6kgYW5kYXRhLCBwcm9zZWd1byBjb24gYWx0cmUgdmVyaWZpY2hlXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2QgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5maW5kKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSA9PT0gdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2QpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NoaWFtbyBzZW1wcmUgbCcgYXBpIGNoZSBmYSB0dXR0aSBpIGNvbnRyb2xsaSBkZWwgY2FzbyBpbiBtb2RvIGRhIHNnYW5jaWFyZSBsYSBsaWJyYXJ5IGRhIGxvZ2ljaGUgY2FuYXJ5IGNoZSBwb3RyZWJiZXJvIGNhbWJpYXJlLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDEgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmdldENhbGVuZGFyKHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vc29sbyBzZSBpbCByZXN1bHQgw6kgb2sgZmFjY2lvIGxvIHNob3cgZGVsbMK0YXZ2aXNvIGRpIGV2ZW50dWFsaSBhZ2dpb3JuYW1lbnRpIHNjaGVkdWxhdGlcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0MSAmJiByZXN1bHQxLnJlc3VsdCAmJiByZXN1bHQxLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGVkVXBkYXRlOiBDVUNhbGVuZGFySm9iID0gcmVzdWx0MS5jb250ZW50IGFzIENVQ2FsZW5kYXJKb2I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlZHVsZWRVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzY2hlZHVsZWRVcGRhdGU6ICcgKyBzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdET05UU0hPV1VQREFURVdBUk4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzX3RyYW5zbGF0aW9uID0gbmV3IFN0cmluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc190cmFuc2xhdGlvbi5nZXRVcGRhdGVNZXNzYWdlKHRoaXMuYXV0aFNlcnZpY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3ViJywgdGhpcy5hdXRoU2VydmljZS5nZXRTdWJzY3JpcHRpb25EZXNjcmlwdGlvbigpISk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQGRhdGUnLCB0aGlzLkZvcm1hdERhdGVTdHJpbmcoc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3RhcnRoJywgdGhpcy5Gb3JtYXRTdGFydERhdGVTdHJpbmcoc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BAZW5kaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Gb3JtYXRFbmREYXRlU3RyaW5nKHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lLCBzY2hlZHVsZWRVcGRhdGUuZXN0aW1hdGVkdXBncmFkZXRpbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub24gbW9zdHJvIHNlIG1pIGhhbm5vIGRldHRvIGRpIG5vbiBtb3N0cmFyZSBwaXUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5vcGVuVXBkYXRlQWxlcnREaWFsb2coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlVGl0bGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc190cmFuc2xhdGlvbi5nZXRVcGRhdGVEb250U2hvd01lc3NhZ2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QucHJvY2Vzc0lEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVhZHkgdG8gcmVkaXJlY3QuJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc1JlZGlyZWN0RXh0ZXJuYWwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbyBleHRlcm5hbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbyBpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8vLy83XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3RwICYmIHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvID0gcmVzdWx0LkV4dHJhSW5mbztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vdHBJbmZvID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5PTEQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm90cEluZm8gPSBuZXcgRXh0cmFJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuT0xEID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm90cCAmJiByZXN1bHQgJiYgIXJlc3VsdC5SZXN1bHQgJiYgcmVzdWx0LlJlc3VsdENvZGUgPT09IDE0Mykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gdGhpcy5sYW5ndWFnZUlUID8gJ09UUCBub24gdmFsaWRvLicgOiAnSW52YWxpZCBPVFAuJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vLy8vN1xyXG4gICAgICAgICAgICAgICAgLy9jYXNvIGRpIGxvZ2luIGZhbGxpdGEgcGVyIHF1YWxjaGUgZXJyb3JlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLi4uJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIGNvbnNvbGUubG9nKCdFcnJvciAnICsgcmVzdWx0LlJlc3VsdENvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgRm9ybWF0RGF0ZVN0cmluZyA9IChkYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHZhciBzY2hlZHVsZWREYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZSkpO1xyXG4gICAgICAgIHJldHVybiBzY2hlZHVsZWREYXRlVGltZS50b0xvY2FsZURhdGVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgRm9ybWF0U3RhcnREYXRlU3RyaW5nID0gKGRhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgdmFyIHNjaGVkdWxlZERhdGVUaW1lID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRlKSk7XHJcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkgcmV0dXJuIHNjaGVkdWxlZERhdGVUaW1lLnRvTG9jYWxlU3RyaW5nKCdpdC1JVCcsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiBmYWxzZSB9KTtcclxuICAgICAgICBlbHNlIHJldHVybiBzY2hlZHVsZWREYXRlVGltZS50b0xvY2FsZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIEZvcm1hdEVuZERhdGVTdHJpbmcgPSAoZGF0ZTogc3RyaW5nLCBkdXJhdGlvbk1pbnM6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgdmFyIHNjaGVkdWxlZERhdGVUaW1lID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRlKSk7XHJcbiAgICAgICAgdmFyIGZpbmFsRGF0ZSA9IG5ldyBEYXRlKHNjaGVkdWxlZERhdGVUaW1lLmdldFRpbWUoKSArIGR1cmF0aW9uTWlucyAqIDYwMDAwKTtcclxuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSByZXR1cm4gZmluYWxEYXRlLnRvTG9jYWxlU3RyaW5nKCdpdC1JVCcsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiBmYWxzZSB9KTtcclxuICAgICAgICBlbHNlIHJldHVybiBmaW5hbERhdGUudG9Mb2NhbGVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBsb2FkTG9naW5EYXRhKCkge1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lID0gdGhpcy5hdXRoU2VydmljZS5nZXRBY2NvdW50TmFtZSgpIHx8ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0U3Vic2NyaXB0aW9uKCkgfHwgJyc7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHJpdmF0ZSBzYXZlTG9naW5EYXRhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzU2Vzc2lvblN0b3JhZ2UoKSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUsIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2QgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5maW5kKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSA9PT0gdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgaWYgKHNkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc1Nlc3Npb25TdG9yYWdlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc2QuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHNkLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGdldENvbXBhbmllc0ZvclVzZXIodXNlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdXNlciB8fCAhdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5TdWJzY3JpcHRpb25zID0gW107XHJcbiAgICAgICAgLy8gdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhd2FpdCB0aGlzLnJlcXVlc3RBbmRTb3J0U3Vic2NyaXB0aW9ucyh1c2VyKTtcclxuICAgICAgICAvLyBQcmVtaW8gRWxlZ2FuemEgQ29kaWNlIDIwMTkgKEBMdWNhQnJ1bmkpXHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRlbXApICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucykpIHRoaXMubG9naW5TdWJzY3JpcHRpb25zID0gdGVtcDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ05vbiB0cm92byBuZXNzdW5hIHN1YnNjcmlwdGlvbiBhc3NvY2lhdGEgYSBxdWVzdG8gYWNjb3VudC4nO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ0kgY2Fubm90IGZpbmQgYW55IFN1YnNjcmlwdGlvbnMgYXNzb2NpYXRlZCB0byB5b3UnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zWzBdLnN1YnNjcmlwdGlvbmtleTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5tYXAoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5KS5pbmRleE9mKHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnNbMF0uc3Vic2NyaXB0aW9ua2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub25TdWJDaGFuZ2UodGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIGFzeW5jIHJlcXVlc3RBbmRTb3J0U3Vic2NyaXB0aW9ucyh1c2VyOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PFN1YnNjcmlwdGlvbj4+IHtcclxuICAgICAgICBpZiAodGhpcy5jYWNoZWRDb21wYW5pZXMuaGFzT3duUHJvcGVydHkodXNlcikgJiYgdGhpcy5jYWNoZWRDb21wYW5pZXNbdXNlciBhcyBhbnldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZENvbXBhbmllc1t1c2VyIGFzIGFueV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZW1wOiBBcnJheTxTdWJzY3JpcHRpb24+ID0gW107XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBBcnJheTxTdWJzY3JpcHRpb24+ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5nZXRDb21wYW5pZXNGb3JVc2VyKHVzZXIpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgIHJlc3VsdC5zb3J0KHRoaXMuY29tcGFyZUNvbXBhbmllcykuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICB0ZW1wLnB1c2goeyBzdWJzY3JpcHRpb25rZXk6IGMuc3Vic2NyaXB0aW9ua2V5LCBkZXNjcmlwdGlvbjogYy5kZXNjcmlwdGlvbiwgc3RhdHVzOiBjLnN0YXR1cywgaW5zdGFuY2VrZXk6IGMuaW5zdGFuY2VrZXkgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0ZW1wLmxlbmd0aCA+IDApIHRoaXMuY2FjaGVkQ29tcGFuaWVzW3VzZXIgYXMgYW55XSA9IHRlbXA7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZW1wO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHJpdmF0ZSBjb21wYXJlQ29tcGFuaWVzKGE6IFN1YnNjcmlwdGlvbiwgYjogU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZUEgPSBhLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgbmFtZUIgPSBiLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBnb1RvUmVzZXRQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNYWdvV2ViKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc2V0UGFzc3dvcmRNZXNzYWdlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkTWVzc2FnZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5mb3JnZXRQYXNzd29yZCwgdGhpcy5lbnRlckFjY291bk5hbWUsIHRoaXMuYWNjb3VudE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIG9wZW5EaWFsb2coVGl0bGU6IHN0cmluZywgTWVzc2FnZTogc3RyaW5nLCBQbGFjZUhvbGRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihGb3Jnb3RQYXNzd29yZENvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBUaXRsZSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBQbGFjZUhvbGRlcixcclxuICAgICAgICAgICAgICAgIFRleHRWYWx1ZTogdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShhc3luYyAoZGF0YTogeyBUZXh0VmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGRhdGEuVGV4dFZhbHVlID09PSB1bmRlZmluZWQgfHwgZGF0YS5UZXh0VmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnSW5zZXJpc2NpIHVuIG5vbWUgdXRlbnRlIHZhbGlkbyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdXcml0ZSBhIHZhbGlkIGFjY291bnQgbmFtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY2NuYW1lOiBzdHJpbmcgPSBkYXRhLlRleHRWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5yZXNldHBhc3N3b3JkKGFjY25hbWUpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmlcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ0NvbnRyb2xsYSBsYSB0dWEgZS1tYWlsIGUgc2VndWkgbGUgaXN0cnV6aW9uaSBwZXIgcmVpbXBvc3RhcmUgbGEgcGFzc3dvcmQuJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnQ2hlY2sgeW91ciBlbWFpbCBhbmQgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgdG8gcmVzZXQgeW91ciBwYXNzd29yZC4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gcmVzdWx0Lk1lc3NhZ2UgKyAnIChDb2RlOiAnICsgcmVzdWx0LkNvZGUgKyAnKS4nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgaXNEcm9wRG93bkNsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5kcm9wRG93bklzQ2xpY2tlZCA9ICF0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xyXG4gICAgICAgIHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQgPSB0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xyXG4gICAgICAgIGlmICh0aGlzLmRyb3BEb3duSXNDbGlja2VkICYmIHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uSXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdG9nZ2xlKGRyb3Bkb3duOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmRyb3BEb3duSXNDbGlja2VkID0gIXRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XHJcbiAgICAgICAgdGhpcy5pY29uSXNDbGlja2VkID0gdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcclxuICAgICAgICB0aGlzLmRyb3Bkb3duID0gZHJvcGRvd247XHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcERvd25Jc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgZHJvcGRvd24udG9nZ2xlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYWx0ZXJuYXRpdmVNZXRob2RzKHR3b0ZhY3RvclR5cGU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLk9MRCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLk9MRHJlc2VuZE9UUCh0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSwgdHdvRmFjdG9yVHlwZSAhPSBudWxsKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAob3BSZXM6IE9wZXJhdGlvblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFJlcy5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvLlR3b0ZhY3RvclR5cGUgPSB0d29GYWN0b3JUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyT0xEKSA9PiB7IH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5yZXNlbmRPVFAyKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLCB0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSUQsIHR3b0ZhY3RvclR5cGUpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKG9wUmVzOiBPcGVyYXRpb25SZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvcFJlcy5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm90cEluZm8uVHdvRmFjdG9yVHlwZSA9IHR3b0ZhY3RvclR5cGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnIpID0+IHsgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBnb1RvU3RvcmUoKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5hdXRoU2VydmljZS5nZXRTdG9yZVVybCgpKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gd29ya2Fyb3VuZCBmb3IgY2hyb21pdW0gYnVnIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM1MjUyN1xyXG5mdW5jdGlvbiB3ZWJraXRBdXRvZmlsbFdvcmthcm91bmQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Oi13ZWJraXQtYXV0b2ZpbGwnKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGVsOiBhbnkpID0+IChlbC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9ICdrLWZsb2F0aW5nLWxhYmVsLWNvbnRhaW5lcicpKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgLy8gbm8gd2Via2l0IGJyb3dzZXJcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGhhc0F1dG9maWxsKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dDotd2Via2l0LWF1dG9maWxsJyk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImxvZ2luLWNvbnRhaW5lclwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBiYWNrZ3JvdW5kVVJMICsgJyknIH1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2dpblwiIHN0eWxlPVwiei1pbmRleDogMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3R5bGU9XCJ3aWR0aDogNjAlXCIgc3JjPVwie3sgbG9nb1VSTCB9fVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIXZhbGlkYXRlICYmICFvdHBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1hcmdpbi1oMSB0aXRsZVwiPnt7IHdlbGNvbWUgfX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpc0V4cGlyZWRTZXNzaW9uXCIgY2xhc3M9XCJsb2dpbi1leHBpcmVkLXN1YnRpdGxlIGRlc2NyaXB0aW9uXCI+e3sgaWRsZVRpbWVvdXRNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IGVudGVyQ3JlZGVudGlhbHMgfX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidmFsaWRhdGUgJiYgIW90cFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWFyZ2luLWgxIHRpdGxlXCI+e3sgY2hvb3NlU3Vic2NyaXB0aW9uIH19PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBhY2NvdW50TmFtZSB9fToge3sgbG9naW5SZXF1ZXN0LmFjY291bnROYW1lIH19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm90cFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWFyZ2luLWgxIHRpdGxlXCI+e3sgb3RwVGl0bGUgfX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHN0eWxlPVwid2lkdGg6IDM1MHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgb3RwTWVzc2FnZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSAxXCI+c21zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSAyXCI+ZS1tYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSA0XCI+e3sgYXV0aEFwcFRleHQgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IG51bGxcIj5zbXMvZS1tYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIFt0ZXh0XT1cImFjY291bnROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnYm9yZGVyLWJvdHRvbSdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZW5kb1RleHRCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BY2NvdW50TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibG9naW5SZXF1ZXN0LmFjY291bnROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2Vycm9yLXN0YXR1cycgOiAnbm9ybWFsLXN0YXRlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhdmFsaWRhdGUgJiYgIW90cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3InIDogJ2JvcmRlci1ib3R0b20nXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAga2VuZG9UZXh0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImxvZ2luUmVxdWVzdC5wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJoaWRlID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnZXJyb3Itc3RhdHVzJyA6ICdub3JtYWwtc3RhdGUnXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlID0gIWhpZGVcIiAqbmdJZj1cImhpZGUgPT09IHRydWVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGUgPSAhaGlkZVwiICpuZ0lmPVwiaGlkZSA9PT0gZmFsc2VcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eV9vZmYgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAqbmdJZj1cInN1YnNjcmlwdGlvblNlbGVjdGlvbiAmJiB2YWxpZGF0ZSAmJiAhb3RwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cInt7IHN1YnNjcmlwdGlvbiB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIlthdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnJywgZHJvcERvd25Jc0NsaWNrZWQgPyAnJyA6ICdib3JkZXItYm90dG9tJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGtlbmRvLWRyb3Bkb3dubGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2Ryb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkRyb3BEb3duU3Vic2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJsb2dpblN1YnNjcmlwdGlvbnM/Lmxlbmd0aCA8PSAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImxvZ2luU3Vic2NyaXB0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3Vic2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWVsZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRmllbGQ9XCJzdWJzY3JpcHRpb25rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQcmltaXRpdmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImtlbmRvLWRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uU3ViQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImlzRHJvcERvd25DbGlja2VkKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUga2VuZG9Ecm9wRG93bkxpc3RJdGVtVGVtcGxhdGUgbGV0LWRhdGFJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5kYXRhLXN1Yj1cInt7IGRhdGFJdGVtLnN1YnNjcmlwdGlvbmtleSB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIuZGF0YS1kZXNjcmlwdGlvbj1cInt7IGRhdGFJdGVtLmRlc2NyaXB0aW9uIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5kYXRhLWluc3RhbmNlPVwie3sgZGF0YUl0ZW0uaW5zdGFuY2VrZXkgfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZGF0YUl0ZW0uZGVzY3JpcHRpb24gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwva2VuZG8tZHJvcGRvd25saXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5Ecm9wRG93blN1YnNjcmlwdGlvbkFycm93VXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZShkcm9wZG93bilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJkcm9wRG93bklzQ2xpY2tlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCBpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dfY2lyY2xlX3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luRHJvcERvd25TdWJzY3JpcHRpb25BcnJvd0Rvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZShkcm9wZG93bilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhZHJvcERvd25Jc0NsaWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQgaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93X2NpcmNsZV9kb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbnN0YW5jZWtleVwiIGRhdGEtdGVzdD1cImxvZ2luUGFyYWdyYXBoSW5zdGFuY2VLZXlcIiAqbmdJZj1cImxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPiAzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJzY3JpcHRpb24ga2V5OiB7eyBsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5IH19IHt7IGluc3RhbmNla2V5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwiY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3InIDogJ2JvcmRlci1ib3R0b20nXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm90cFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlbmRvVGV4dEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkFjY291bnROYW1lT3RwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50TmFtZU90cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImhpZGVPdHAgPyAncGFzc3dvcmQnIDogJ3RleHQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3JtYWwtc3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVPdHAgPSAhaGlkZU90cFwiICpuZ0lmPVwiaGlkZU90cCA9PT0gdHJ1ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZU90cCA9ICFoaWRlT3RwXCIgKm5nSWY9XCJoaWRlT3RwID09PSBmYWxzZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5X29mZiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBBbHJlZHlMb2dnZWQgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidXNlcmFscmVhZHlsb2dnZWRcIiBjbGFzcz1cImxvZ2luLWluZm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHdoaXRlLXNwYWNlOiBwcmUtd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4td2FybmluZyBmbGV4LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgfX0ge3sgdXNlcmFscmVhZHlsb2dnZWRUaXRsZSB9fSB7eyB1c2VyYWxyZWFkeWxvZ2dlZE1lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiaW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibG9naW5SZXF1ZXN0Lm92ZXJ3cml0ZUxvZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyYWxyZWFkeWxvZ2dlZEFjY2VwdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlbmRvQ2hlY2tCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiay1jaGVja2JveC1sYWJlbFwiIGZvcj1cImJpbmRpbmdcIj4ge3sgdXNlcmFscmVhZHlsb2dnZWRPSyB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwhLS1FTkQgQWxyZWR5TG9nZ2VkIC0tLS0tLS0tLS0tLS0tLS0gLS0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWluZm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcHMtbG9jayBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIiAqbmdJZj1cImNhcHNMb2NrT25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyBibG9jTWFpdXNjIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2dpbi1lcnJvciBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2hpdGUtc3BhY2U6IHByZS13cmFwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1pbmZvIHBhbmVsIGZsZXgtY2VudGVyXCIgKm5nSWY9XCJhdXRoU2VydmljZS5va01lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyBhdXRoU2VydmljZS5va01lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWluZm8tcmVzZXQtcGFzc3dvcmQgcGFuZWwgZmxleC1jZW50ZXJcIiAqbmdJZj1cInNob3dSZXNldFBhc3N3b3JkTWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IHJlc2V0UGFzc3dvcmRNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm90cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50XCIgKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IFRPVFBEZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rIHBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5SZXNlbmRPdHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFsdGVybmF0aXZlTWV0aG9kcyhvdHBJbmZvLlR3b0ZhY3RvclR5cGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luQWx0ZXJuYXRpdmVPdHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgIT09IDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IHJlc2VuZE9UUExhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gMVwiPnNtczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSAyXCI+ZS1tYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDRcIj57eyBjaG9zZW5BdXRoQXBwIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IG51bGxcIj5zbXMvZS1tYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1oZWFkZXJcIiAqbmdJZj1cIm90cEluZm8uVE9UUENvbmZpZ3VyZWQgfHwgb3RwSW5mby5Nb2JpbGVQaG9uZU5yOyBlbHNlIG9ubHlPbmVNZXRob2RDb25maWd1cmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luOiAxMHB4IDA7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMDA1ODkwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIihvdHBJbmZvLkVtYWlsICYmIG90cEluZm8uVE9UUENvbmZpZ3VyZWQpIHx8IG90cEluZm8uTW9iaWxlUGhvbmVOclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb3RwVGV4dCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpbmsgcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgIT09IDEgJiYgb3RwSW5mby5Nb2JpbGVQaG9uZU5yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWx0ZXJuYXRpdmVNZXRob2RzKDEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkFsdGVybmF0aXZlU21zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgb3RwUmVxdWVzdENvZGUgfX0gU01TPC91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluayBwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSAhPT0gMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFsdGVybmF0aXZlTWV0aG9kcygyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZVNtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IG90cFJlcXVlc3RDb2RlIH19IEUtbWFpbDwvdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpbmsgcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBJbmZvLlRPVFBDb25maWd1cmVkICYmIG90cEluZm8uVHdvRmFjdG9yVHlwZSAhPT0gNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFsdGVybmF0aXZlTWV0aG9kcyg0KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZUFwcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IHVzZUF1dGhBcHAgfX08L3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjb25seU9uZU1ldGhvZENvbmZpZ3VyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxpbmtcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMDA1ODkwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb25lTWV0aG9kT25seSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1IGNsYXNzPVwicG9pbnRlclwiIChjbGljayk9XCJnb1RvU3RvcmUoKVwiPiB7eyBhbHRlcm5hdGl2ZU1ldGhvZCB9fSA8L3U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDAgMXB4OyBtYXJnaW4tdG9wOiA2MHB4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gZGF0YS10ZXN0PVwibG9naW5CdXR0b25cIiBjbGFzcz1cImJ1dHRvbnMgbG9naW4tYnV0dG9uXCIgKGNsaWNrKT1cImxvZ2luKClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRCdXR0b24oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtdGVzdD1cImxvZ2luTG9hZGluZ0J1dHRvblwiIGNsYXNzPVwiay1pY29uIGstaS1sb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWxvYWRpbmdcIj57eyBidXR0b25UZXh0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiICpuZ0lmPVwiKCFsb2FkaW5nICYmIHZhbGlkYXRlKSB8fCBvdHBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gZGF0YS10ZXN0PVwibG9naW5CYWNrQnV0dG9uXCIgY2xhc3M9XCJidXR0b25zIGJhY2stYnV0dG9uXCIgKGNsaWNrKT1cImJhY2soKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBidXR0b25CYWNrIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dTaWduVXBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2lnbnVwXCIgZGF0YS10ZXN0PVwibG9naW5TaWduVXBcIiAoY2xpY2spPVwibmV3VXNlcigpXCI+U2lnblVwIGhlcmUhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIXZhbGlkYXRlICYmICFvdHBcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDEwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb3Jnb3Rwd2RcIiBkYXRhLXRlc3Q9XCJsb2dpbkZvcmdvdFBhc3N3b3JkXCIgKGNsaWNrKT1cImdvVG9SZXNldFBhc3N3b3JkKClcIj5cclxuICAgICAgICAgICAgICAgIDx1Pnt7IGZvcmdldFBhc3N3b3JkIH19PC91PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm90cFwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgbWFyZ2luLXRvcDogMTBweDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcmdvdHB3ZFwiIGRhdGEtdGVzdD1cImxvZ2luTWFuYWdlTWV0aG9kc1wiPlxyXG4gICAgICAgICAgICAgICAgPHUgY2xhc3M9XCJwb2ludGVyXCIgKGNsaWNrKT1cImdvVG9TdG9yZSgpXCI+e3sgbWFuYWdlTWV0aG9kcyB9fTwvdT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDA7IHdpZHRoOiAxMDAlOyB6LWluZGV4OiAwXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjb3B5cmlnaHQgY29weXJpZ2h0LWFic1wiPkxvZ2luIHt7IGxpYl92ZXJzaW9uIH19IDIwMTcgLSB7eyBjdXJyZW50WWVhciB9fSwgWnVjY2hldHRpIHMucC5hLjwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19