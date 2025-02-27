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
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 31)(1, "kendo-textbox", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_10_Template_kendo_textbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.loginRequest.accountName, $event) || (ctx_r0.loginRequest.accountName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function TbLoginComponent_kendo_floatinglabel_10_Template_kendo_textbox_keyup_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.keyUpFunction($event)); });
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
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 33)(1, "kendo-textbox", 34);
    i0.ɵɵtwoWayListener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_11_Template_kendo_textbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.loginRequest.password, $event) || (ctx_r0.loginRequest.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function TbLoginComponent_kendo_floatinglabel_11_Template_kendo_textbox_keyup_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.keyUpFunction($event)); });
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
function TbLoginComponent_div_20_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "sms");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_20_a_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "e-mail");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_20_a_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.chosenAuthApp);
} }
function TbLoginComponent_div_20_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "sms/e-mail");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_20_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 61);
    i0.ɵɵlistener("click", function TbLoginComponent_div_20_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.alternativeMethods(ctx_r0.otpInfo.TwoFactorType)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TbLoginComponent_div_20_a_3_span_2_Template, 2, 0, "span", 6)(3, TbLoginComponent_div_20_a_3_span_3_Template, 2, 0, "span", 6)(4, TbLoginComponent_div_20_a_3_span_4_Template, 2, 1, "span", 6)(5, TbLoginComponent_div_20_a_3_span_5_Template, 2, 0, "span", 6);
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
function TbLoginComponent_div_20_div_4_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 66);
    i0.ɵɵlistener("click", function TbLoginComponent_div_20_div_4_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.alternativeMethods(1)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.otpRequestCode, " SMS");
} }
function TbLoginComponent_div_20_div_4_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 66);
    i0.ɵɵlistener("click", function TbLoginComponent_div_20_div_4_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.alternativeMethods(2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.otpRequestCode, " E-mail");
} }
function TbLoginComponent_div_20_div_4_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 67);
    i0.ɵɵlistener("click", function TbLoginComponent_div_20_div_4_a_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.alternativeMethods(4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.useAuthApp);
} }
function TbLoginComponent_div_20_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, TbLoginComponent_div_20_div_4_p_1_Template, 2, 1, "p", 62)(2, TbLoginComponent_div_20_div_4_a_2_Template, 2, 1, "a", 63)(3, TbLoginComponent_div_20_div_4_a_3_Template, 2, 1, "a", 63)(4, TbLoginComponent_div_20_div_4_a_4_Template, 2, 1, "a", 64);
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
    i0.ɵɵelementStart(2, "a", 69);
    i0.ɵɵlistener("click", function TbLoginComponent_div_20_ng_template_5_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.goToStore()); });
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
    i0.ɵɵtemplate(2, TbLoginComponent_div_20_p_2_Template, 2, 1, "p", 57)(3, TbLoginComponent_div_20_a_3_Template, 6, 5, "a", 58)(4, TbLoginComponent_div_20_div_4_Template, 5, 4, "div", 59)(5, TbLoginComponent_div_20_ng_template_5_Template, 4, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
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
    i0.ɵɵelementStart(0, "div", 73)(1, "p", 75)(2, "a", 69);
    i0.ɵɵlistener("click", function TbLoginComponent_div_31_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r24); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.goToStore()); });
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
        } }, decls: 35, vars: 27, consts: [["dropdown", ""], ["onlyOneMethodConfigured", ""], [1, "login-container", 3, "ngStyle"], [1, "login", 2, "z-index", "1"], [1, "login-header"], ["mat-card-image", "", 1, "logo", 3, "src"], [4, "ngIf"], [1, "login-form"], [3, "text", "ngClass", 4, "ngIf"], ["text", "Password", 3, "ngClass", 4, "ngIf"], ["class", "form-control", 4, "ngIf"], ["class", "login-infos", 4, "ngIf"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", "style", "white-space: pre-wrap", 4, "ngIf"], ["class", "login-info panel flex-center", 4, "ngIf"], ["class", "login-info-reset-password panel flex-center", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "60px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", "data-test", "loginButton", 1, "buttons", "login-button", 3, "click", "disabled"], ["data-test", "loginLoadingButton", "class", "k-icon k-i-loading", 4, "ngIf"], ["class", "login-footer", 4, "ngIf"], [1, "login-footer"], ["style", "display: flex; margin-top: 10px; justify-content: flex-end", 4, "ngIf"], [2, "position", "absolute", "bottom", "0", "width", "100%", "z-index", "0"], [1, "copyright", "copyright-abs"], [1, "margin-h1", "title"], ["class", "login-expired-subtitle description", 4, "ngIf"], [1, "description"], [1, "login-expired-subtitle", "description"], [1, "description", 2, "width", "350px"], [3, "text", "ngClass"], ["data-test", "loginAccountName", "name", "accountName", "type", "text", 3, "ngModelChange", "keyup", "ngModel", "ngClass"], ["text", "Password", 3, "ngClass"], ["data-test", "loginPassword", "name", "password", "autocomplete", "current-password", 3, "ngModelChange", "keyup", "ngModel", "type", "ngClass"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], [1, "material-icons", "icon", 3, "click"], [1, "form-control"], ["data-test", "loginDropDownSubscription", "name", "subscription", "textField", "description", "valueField", "subscriptionkey", "valuePrimitive", "true", 1, "kendo-dropdown", 3, "ngModelChange", "click", "disabled", "data", "ngModel"], ["kendoDropDownListItemTemplate", ""], ["data-test", "loginDropDownSubscriptionArrowUp", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowDown", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["class", "instancekey", "data-test", "loginParagraphInstanceKey", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowUp", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginDropDownSubscriptionArrowDown", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginParagraphInstanceKey", 1, "instancekey"], ["kendoTextBox", "", "data-test", "loginAccountNameOtp", "name", "accountNameOtp", "type", "password", 1, "normal-state", 3, "ngModelChange", "keyup", "ngModel", "type"], [1, "login-warning", "flex-center", 2, "display", "flex", "justify-content", "flex-end", "flex-direction", "column", "white-space", "pre-wrap"], [1, "wrap"], ["type", "checkbox", "id", "binding", "name", "useralreadyloggedAccepted", "kendoCheckBox", "", 3, "ngModelChange", "ngModel"], ["for", "binding", 1, "k-checkbox-label"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5", 2, "white-space", "pre-wrap"], [1, "login-info", "panel", "flex-center"], [1, "login-info-reset-password", "panel", "flex-center"], [2, "display", "flex", "justify-content", "flex-end", "flex-direction", "column"], ["class", "description", "style", "margin-bottom: 0px !important", 4, "ngIf"], ["class", "link", "data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 3, "click", 4, "ngIf"], ["class", "login-header", 4, "ngIf", "ngIfElse"], [1, "description", 2, "margin-bottom", "0px !important"], ["data-test", "loginResendOtp", "data-test", "loginAlternativeOtp", 1, "link", 3, "click"], ["style", "margin: 10px 0; font-weight: 600; color: #005890", 4, "ngIf"], ["class", "link", "data-test", "loginAlternativeSms", 3, "click", 4, "ngIf"], ["class", "link", "data-test", "loginAlternativeApp", 3, "click", 4, "ngIf"], [2, "margin", "10px 0", "font-weight", "600", "color", "#005890"], ["data-test", "loginAlternativeSms", 1, "link", 3, "click"], ["data-test", "loginAlternativeApp", 1, "link", 3, "click"], [1, "link", 2, "margin-top", "10px", "font-weight", "600", "color", "#005890"], [3, "click"], ["data-test", "loginLoadingButton", 1, "k-icon", "k-i-loading"], ["kendoButton", "", "data-test", "loginBackButton", 1, "buttons", "back-button", 3, "click"], ["data-test", "loginSignUp", 1, "signup", 3, "click"], [2, "display", "flex", "margin-top", "10px", "justify-content", "flex-end"], ["data-test", "loginForgotPassword", 1, "forgotpwd", 3, "click"], ["data-test", "loginManageMethods", 1, "forgotpwd"]], template: function TbLoginComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i4.NgClass, i4.NgIf, i4.NgStyle, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.CheckboxControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i6.ItemTemplateDirective, i6.DropDownListComponent, i7.LabelDirective, i7.FloatingLabelComponent, i8.TextBoxDirective, i8.TextBoxComponent, i8.CheckBoxDirective], styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list[_ngcontent-%COMP%]{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{background:#bfcdd5}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar:hover{background:#d9d9d9}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#6cafd1}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#005890}.k-list[_ngcontent-%COMP%]   .k-list-item.k-selected[_ngcontent-%COMP%]{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%]:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width: 490px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:323px!important}}@media screen and (max-width: 425px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:273px!important}}@media screen and (max-width: 375px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:217px!important}}.k-list-md[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%], .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}.k-list-item-text[_ngcontent-%COMP%]{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;line-height:20px;margin-bottom:30px}.link[_ngcontent-%COMP%], tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE!important}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:3px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#e7481c;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#e7481c}.login-infos[_ngcontent-%COMP%]   .login-warning[_ngcontent-%COMP%]{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4ab679}.login-infos[_ngcontent-%COMP%]   .login-info-reset-password[_ngcontent-%COMP%]{background:#005890}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:silver}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#e77b2d}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#ff9e18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:gray}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9f9f9f}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4ab679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68b388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#d03c13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#e7481c}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}  .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}  .mat-dialog-container .login-footer .back-button{background:gray}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:silver}  .mat-dialog-container .login-footer .ok-button{background:#4ab679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}.mat-mdc-dialog-container[_ngcontent-%COMP%]   .mdc-dialog__surface[_ngcontent-%COMP%]{padding:24px!important;color:#005890!important;border-radius:0!important}.mat-mdc-snack-bar-container[_ngcontent-%COMP%]   .mat-mdc-button.mat-mdc-snack-bar-action[_ngcontent-%COMP%]{background-color:#4ab679!important;color:#fff!important}.mat-mdc-snack-bar-container[_ngcontent-%COMP%]   .mat-mdc-button.mat-mdc-snack-bar-action[_ngcontent-%COMP%]:hover{background-color:#68b388!important;color:#fff!important}.mat-mdc-snack-bar-container[_ngcontent-%COMP%]   .mat-mdc-snackbar-surface[_ngcontent-%COMP%]{color:#005890!important;background-color:#fff!important}  html,   body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}tb-login[_nghost-%COMP%]{font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:#fff}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}}@media screen and (min-width: 576px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:450px}}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .upicon[_ngcontent-%COMP%]{transform:rotate(90deg);padding:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .downicon[_ngcontent-%COMP%]{transform:rotate(270deg)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:222px;height:39px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .k-i-loading[_ngcontent-%COMP%]{font-size:20px}tb-login[_nghost-%COMP%]   p.instancekey[_ngcontent-%COMP%]{font-size:9px;font-weight:300;text-indent:1px;color:#005890}tb-login[_nghost-%COMP%]   p.copyright[_ngcontent-%COMP%]{font-size:10px;font-weight:300;margin:0;color:#fff}tb-login[_nghost-%COMP%]   p.copyright-abs[_ngcontent-%COMP%]{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{text-align:right}tb-login[_nghost-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}tb-login[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}tb-login[_nghost-%COMP%]   p.signup[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}tb-login[_nghost-%COMP%]   .margin-h1[_ngcontent-%COMP%]{margin-top:20px}tb-login[_nghost-%COMP%]   .margin-p[_ngcontent-%COMP%]{margin-left:-1.5px;margin-top:-10px}tb-login[_nghost-%COMP%]   .login-expired-subtitle[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}tb-login[_nghost-%COMP%]   .login-chooseSubscription[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label{margin:1px 0}}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-size:x-large}}tb-login[_nghost-%COMP%]     .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, tb-login[_nghost-%COMP%]   .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#005890}tb-login[_nghost-%COMP%]     .k-floating-label-container>.k-floating-label, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textbox{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}tb-login[_nghost-%COMP%]     .k-floating-label-container{width:100%;margin:8px 0}tb-login[_nghost-%COMP%]     .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textbox, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textbox .k-input, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textbox, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textbox .k-input, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textarea:focus{background-color:#fff!important}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textbox::selection, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-input::selection, tb-login[_nghost-%COMP%]     .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-picker-md .k-input-inner{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-picker{border-width:0px;border-style:unset}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-picker:focus-within{box-shadow:none}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-picker:focus{box-shadow:none}tb-login[_nghost-%COMP%]     .k-floating-label-container:after{background-color:#8ee2ff;height:1px}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown{border:none;background:none}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{filter:none;background:#0b85ce}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}tb-login[_nghost-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLoginComponent, [{
        type: Component,
        args: [{ selector: 'tb-login', template: "<div class=\"login-container\" [ngStyle]=\"{ 'background-image': 'url(' + backgroundURL + ')' }\">\n    <div class=\"login\" style=\"z-index: 1\">\n        <div class=\"login-header\">\n            <div>\n                <img mat-card-image class=\"logo\" src=\"{{ logoURL }}\" />\n            </div>\n            <div *ngIf=\"!validate && !otp\">\n                <h1 class=\"margin-h1 title\">{{ welcome }}</h1>\n                <p *ngIf=\"isExpiredSession\" class=\"login-expired-subtitle description\">{{ idleTimeoutMessage }}</p>\n                <p class=\"description\">{{ enterCredentials }}</p>\n            </div>\n            <div *ngIf=\"validate && !otp\">\n                <h1 class=\"margin-h1 title\">{{ chooseSubscription }}</h1>\n                <p class=\"description\">{{ accountName }}: {{ loginRequest.accountName }}</p>\n            </div>\n            <div *ngIf=\"otp\">\n                <h1 class=\"margin-h1 title\">{{ otpTitle }}</h1>\n                <p class=\"description\" style=\"width: 350px\">\n                    {{ otpMessage }}\n                    <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\n                    <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\n                    <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ authAppText }}</span>\n                    <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\n                </p>\n            </div>\n        </div>\n\n        <form>\n            <div class=\"login-form\">\n                <kendo-floatinglabel\n                    [text]=\"accountName\"\n                    *ngIf=\"!validate && !otp\"\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\n                >\n                    <kendo-textbox\n                        data-test=\"loginAccountName\"\n                        [(ngModel)]=\"loginRequest.accountName\"\n                        (keyup)=\"keyUpFunction($event)\"\n                        name=\"accountName\"\n                        type=\"text\"\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n                    />\n                </kendo-floatinglabel>\n\n                <kendo-floatinglabel\n                    text=\"Password\"\n                    *ngIf=\"!validate && !otp\"\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\n                >\n                    <kendo-textbox\n                        data-test=\"loginPassword\"\n                        [(ngModel)]=\"loginRequest.password\"\n                        (keyup)=\"keyUpFunction($event)\"\n                        name=\"password\"\n                        [type]=\"hide ? 'password' : 'text'\"\n                        autocomplete=\"current-password\"\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\n                    />\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === true\" class=\"material-icons icon\"> visibility </span>\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === false\" class=\"material-icons icon\"> visibility_off </span>\n                </kendo-floatinglabel>\n\n                <div class=\"form-control\" *ngIf=\"subscriptionSelection && validate && !otp\">\n                    <kendo-floatinglabel\n                        text=\"{{ subscription }}\"\n                        [ngClass]=\"[authService.errorMessage ? 'border-bottom-error' : '', dropDownIsClicked ? '' : 'border-bottom']\"\n                    >\n                        <kendo-dropdownlist\n                            #dropdown\n                            data-test=\"loginDropDownSubscription\"\n                            [disabled]=\"loginSubscriptions?.length <= 1\"\n                            [data]=\"loginSubscriptions\"\n                            name=\"subscription\"\n                            textField=\"description\"\n                            valueField=\"subscriptionkey\"\n                            valuePrimitive=\"true\"\n                            [(ngModel)]=\"loginRequest.subscriptionKey\"\n                            class=\"kendo-dropdown\"\n                            (ngModelChange)=\"onSubChange($event)\"\n                            (click)=\"isDropDownClicked()\"\n                        >\n                            <ng-template kendoDropDownListItemTemplate let-dataItem>\n                                <div\n                                    attr.data-sub=\"{{ dataItem.subscriptionkey }}\"\n                                    attr.data-description=\"{{ dataItem.description }}\"\n                                    attr.data-instance=\"{{ dataItem.instancekey }}\"\n                                >\n                                    {{ dataItem.description }}\n                                </div>\n                            </ng-template>\n                        </kendo-dropdownlist>\n                        <span\n                            data-test=\"loginDropDownSubscriptionArrowUp\"\n                            (click)=\"toggle(dropdown)\"\n                            *ngIf=\"dropDownIsClicked\"\n                            class=\"material-symbols-rounded icon\"\n                        >\n                            arrow_circle_up\n                        </span>\n                        <span\n                            data-test=\"loginDropDownSubscriptionArrowDown\"\n                            (click)=\"toggle(dropdown)\"\n                            *ngIf=\"!dropDownIsClicked\"\n                            class=\"material-symbols-rounded icon\"\n                        >\n                            arrow_circle_down\n                        </span>\n                    </kendo-floatinglabel>\n                    <div>\n                        <p class=\"instancekey\" data-test=\"loginParagraphInstanceKey\" *ngIf=\"loginSubscriptions.length > 3\">\n                            Subscription key: {{ loginRequest.subscriptionKey }} {{ instancekey }}\n                        </p>\n                    </div>\n                </div>\n\n                <kendo-floatinglabel\n                    [text]=\"code\"\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\n                    *ngIf=\"otp\"\n                >\n                    <input\n                        kendoTextBox\n                        data-test=\"loginAccountNameOtp\"\n                        [(ngModel)]=\"inputValue\"\n                        (keyup)=\"keyUpFunction($event)\"\n                        name=\"accountNameOtp\"\n                        [type]=\"hideOtp ? 'password' : 'text'\"\n                        type=\"password\"\n                        class=\"normal-state\"\n                    />\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === true\" class=\"material-icons icon\"> visibility </span>\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === false\" class=\"material-icons icon\"> visibility_off </span>\n                </kendo-floatinglabel>\n\n                <!-- AlredyLogged -->\n                <div *ngIf=\"useralreadylogged\" class=\"login-infos\">\n                    <div\n                        style=\"display: flex; justify-content: flex-end; flex-direction: column; white-space: pre-wrap\"\n                        class=\"login-warning flex-center\"\n                    >\n                        <p>{{ loginRequest.accountName }} {{ useralreadyloggedTitle }} {{ useralreadyloggedMessage }}</p>\n                    </div>\n                    <div class=\"wrap\">\n                        <input\n                            type=\"checkbox\"\n                            id=\"binding\"\n                            [(ngModel)]=\"loginRequest.overwriteLogin\"\n                            name=\"useralreadyloggedAccepted\"\n                            kendoCheckBox\n                        />\n                        <label class=\"k-checkbox-label\" for=\"binding\"> {{ useralreadyloggedOK }}</label>\n                    </div>\n                </div>\n                <!--END AlredyLogged ---------------- -->\n\n                <div class=\"login-infos\">\n                    <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\n                        <p class=\"no-margin\">{{ blocMaiusc }}</p>\n                    </div>\n                    <div\n                        class=\"login-error panel flex-center margin-bottom-5\"\n                        *ngIf=\"authService.errorMessage\"\n                        style=\"white-space: pre-wrap\"\n                    >\n                        <p class=\"no-margin\">{{ authService.errorMessage }}</p>\n                    </div>\n                    <div class=\"login-info panel flex-center\" *ngIf=\"authService.okMessage\">\n                        <p class=\"no-margin\">{{ authService.okMessage }}</p>\n                    </div>\n                    <div class=\"login-info-reset-password panel flex-center\" *ngIf=\"showResetPasswordMessage\">\n                        <p class=\"no-margin\">{{ resetPasswordMessage }}</p>\n                    </div>\n                </div>\n\n                <div *ngIf=\"otp && !isMagoWeb\">\n                    <div style=\"display: flex; justify-content: flex-end; flex-direction: column\">\n                        <p class=\"description\" style=\"margin-bottom: 0px !important\" *ngIf=\"otpInfo.TwoFactorType === 4\">\n                            {{ TOTPDescription }}\n                        </p>\n\n                        <a\n                            class=\"link\"\n                            data-test=\"loginResendOtp\"\n                            (click)=\"alternativeMethods(otpInfo.TwoFactorType)\"\n                            data-test=\"loginAlternativeOtp\"\n                            *ngIf=\"otpInfo.TwoFactorType !== 4\"\n                            >{{ resendOTPLabel }}\n                            <span *ngIf=\"otpInfo.TwoFactorType === 1\">sms</span>\n                            <span *ngIf=\"otpInfo.TwoFactorType === 2\">e-mail</span>\n                            <span *ngIf=\"otpInfo.TwoFactorType === 4\">{{ chosenAuthApp }}</span>\n                            <span *ngIf=\"otpInfo.TwoFactorType === null\">sms/e-mail</span>\n                        </a>\n                        <div class=\"login-header\" *ngIf=\"otpInfo.TOTPConfigured || otpInfo.MobilePhoneNr; else onlyOneMethodConfigured\">\n                            <p\n                                style=\"margin: 10px 0; font-weight: 600; color: #005890\"\n                                *ngIf=\"(otpInfo.Email && otpInfo.TOTPConfigured) || otpInfo.MobilePhoneNr\"\n                            >\n                                {{ otpText }}\n                            </p>\n                            <a\n                                class=\"link\"\n                                *ngIf=\"otpInfo.TwoFactorType !== 1 && otpInfo.MobilePhoneNr\"\n                                (click)=\"alternativeMethods(1)\"\n                                data-test=\"loginAlternativeSms\"\n                                >{{ otpRequestCode }} SMS</a\n                            >\n                            <a\n                                class=\"link\"\n                                *ngIf=\"otpInfo.TwoFactorType !== 2\"\n                                (click)=\"alternativeMethods(2)\"\n                                data-test=\"loginAlternativeSms\"\n                                >{{ otpRequestCode }} E-mail</a\n                            >\n                            <a\n                                class=\"link\"\n                                *ngIf=\"otpInfo.TOTPConfigured && otpInfo.TwoFactorType !== 4\"\n                                (click)=\"alternativeMethods(4)\"\n                                data-test=\"loginAlternativeApp\"\n                                >{{ useAuthApp }}</a\n                            >\n                        </div>\n                        <ng-template #onlyOneMethodConfigured>\n                            <p class=\"link\" style=\"margin-top: 10px; font-weight: 600; color: #005890\">\n                                {{ oneMethodOnly }}\n                                <a (click)=\"goToStore()\"> {{ alternativeMethod }} </a>\n                            </p>\n                        </ng-template>\n                    </div>\n                </div>\n                <div *ngIf=\"otp && isMagoWeb\" class=\"login-infos\">\n                    <div class=\"login-info-reset-password panel flex-center\">\n                        <p class=\"no-margin\">{{ otpResetTextMagoWeb }}</p>\n                    </div>\n                </div>\n            </div>\n        </form>\n\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 60px\">\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n                <button kendoButton data-test=\"loginButton\" class=\"buttons login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\n                    <span data-test=\"loginLoadingButton\" class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\n                    <span *ngIf=\"!loading\">{{ buttonText }}</span>\n                </button>\n            </div>\n\n            <div class=\"login-footer\" *ngIf=\"(!loading && validate) || otp\">\n                <button kendoButton data-test=\"loginBackButton\" class=\"buttons back-button\" (click)=\"back()\">\n                    <span> {{ buttonBack }}</span>\n                </button>\n            </div>\n        </div>\n        <div class=\"login-footer\">\n            <div *ngIf=\"showSignUp\">\n                <p class=\"signup\" data-test=\"loginSignUp\" (click)=\"newUser()\">SignUp here!</p>\n            </div>\n        </div>\n        <div *ngIf=\"!validate && !otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\n            <p class=\"forgotpwd\" data-test=\"loginForgotPassword\" (click)=\"goToResetPassword()\">\n                <a>{{ forgetPassword }}</a>\n            </p>\n        </div>\n        <div *ngIf=\"otp && !isMagoWeb\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\n            <p class=\"forgotpwd\" data-test=\"loginManageMethods\">\n                <a (click)=\"goToStore()\">{{ manageMethods }}</a>\n            </p>\n        </div>\n    </div>\n    <div style=\"position: absolute; bottom: 0; width: 100%; z-index: 0\">\n        <p class=\"copyright copyright-abs\">Login {{ lib_version }} 2017 - {{ currentYear }}, Zucchetti s.p.a.</p>\n    </div>\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list{background:#f4f4f4;color:#005890;max-height:100px;width:370px!important}.k-list ::-webkit-scrollbar{background:#bfcdd5}.k-list ::-webkit-scrollbar:hover{background:#d9d9d9}.k-list ::-webkit-scrollbar-thumb{background:#6cafd1}.k-list ::-webkit-scrollbar-thumb:hover{background:#005890}.k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}.kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width: 490px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}.kendo-dropdown{width:323px!important}}@media screen and (max-width: 425px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}.kendo-dropdown{width:273px!important}}@media screen and (max-width: 375px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}.kendo-dropdown{width:217px!important}}.k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}.k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;line-height:20px;margin-bottom:30px}.link,:host(tb-login) p.forgotpwd{font-size:16px;font-weight:300;margin:0;color:#005890;line-height:20px}.border-bottom{border-bottom:1px solid #0B85CE!important}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:rgba(0,0,0,.32)}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:3px 0}.login-infos .caps-lock{background:#e7481c;display:flex;align-items:center}.login-infos .login-error{background:#e7481c}.login-infos .login-warning{background:#e79641;font-size:14px;padding:5px;color:#fff;font-weight:600}.login-infos .login-info{background:#4ab679}.login-infos .login-info-reset-password{background:#005890}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:silver}.login-footer .login-button{background:#e77b2d}.login-footer .login-button:hover:enabled{background:#ff9e18}.login-footer .back-button{background:gray}.login-footer .back-button:hover:enabled{background:#9f9f9f}.login-footer .ok-button{background:#4ab679}.login-footer .ok-button:hover:enabled{background:#68b388}.login-footer .error-button{background:#d03c13}.login-footer .error-button:hover:enabled{background:#e7481c}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}::ng-deep .mat-dialog-container{color:#005890!important;background:#fff!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9f9f9f}::ng-deep .mat-dialog-container .login-footer .back-button{background:gray}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:silver}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4ab679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68b388}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}.mat-mdc-dialog-container .mdc-dialog__surface{padding:24px!important;color:#005890!important;border-radius:0!important}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action{background-color:#4ab679!important;color:#fff!important}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:hover{background-color:#68b388!important;color:#fff!important}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:#005890!important;background-color:#fff!important}::ng-deep html,::ng-deep body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}:host(tb-login){font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}:host(tb-login) .login-container{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}:host(tb-login) .login-container .login{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:#fff}@media screen and (max-width: 768px){:host(tb-login) .login-container .login{padding:20px}}@media screen and (min-width: 576px){:host(tb-login) .login-container .login{max-width:450px}}:host(tb-login) .login-container .login .upicon{transform:rotate(90deg);padding:1px}:host(tb-login) .login-container .login .downicon{transform:rotate(270deg)}:host(tb-login) .login-container .login .login-header{display:flex;flex-direction:column}:host(tb-login) .login-container .login .login-header .logo{width:222px;height:39px}:host(tb-login) .login-container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:0}:host(tb-login) .login-container .login .k-i-loading{font-size:20px}:host(tb-login) p.instancekey{font-size:9px;font-weight:300;text-indent:1px;color:#005890}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) p.forgotpwd{text-align:right}:host(tb-login) a{text-decoration:underline;cursor:pointer}:host(tb-login) a:hover{text-decoration:none}:host(tb-login) p.signup{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}:host(tb-login) .margin-h1{margin-top:20px}:host(tb-login) .margin-p{margin-left:-1.5px;margin-top:-10px}:host(tb-login) .login-expired-subtitle{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}:host(tb-login) .login-chooseSubscription{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}:host(tb-login) .login-sign-in{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){:host(tb-login) .login{padding:20px}:host(tb-login) .login .login-form ::ng-deep .k-floating-label{margin:1px 0}}@media screen and (max-width: 768px){:host(tb-login) .login-sign-in{font-size:x-large}}:host(tb-login) ::ng-deep .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host(tb-login) .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#005890}:host(tb-login) ::ng-deep .k-floating-label-container>.k-floating-label,:host(tb-login) ::ng-deep .k-floating-label-container .k-textbox{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}:host(tb-login) ::ng-deep .k-floating-label-container{width:100%;margin:8px 0}:host(tb-login) ::ng-deep .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}:host(tb-login) ::ng-deep .k-floating-label-container .k-textbox,:host(tb-login) ::ng-deep .k-floating-label-container .k-textbox .k-input,:host(tb-login) ::ng-deep .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}:host(tb-login) ::ng-deep .k-floating-label-container .k-textbox,:host(tb-login) ::ng-deep .k-floating-label-container .k-textbox .k-input,:host(tb-login) ::ng-deep .k-floating-label-container .k-textarea:focus{background-color:#fff!important}:host(tb-login) ::ng-deep .k-floating-label-container .k-textbox::selection,:host(tb-login) ::ng-deep .k-floating-label-container .k-input::selection,:host(tb-login) ::ng-deep .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}:host(tb-login) ::ng-deep .k-floating-label-container .k-picker-md .k-input-inner{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}:host(tb-login) ::ng-deep .k-floating-label-container .k-picker{border-width:0px;border-style:unset}:host(tb-login) ::ng-deep .k-floating-label-container .k-picker:focus-within{box-shadow:none}:host(tb-login) ::ng-deep .k-floating-label-container .k-picker:focus{box-shadow:none}:host(tb-login) ::ng-deep .k-floating-label-container:after{background-color:#8ee2ff;height:1px}:host(tb-login) ::ng-deep .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown{border:none;background:none}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:#fff!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{filter:none;background:#0b85ce}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}:host(tb-login) ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL3BhZ2VzL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDSDVCLDZCQUF1RTtJQUFBLFlBQXdCO0lBQUEsaUJBQUk7OztJQUE1QixjQUF3QjtJQUF4QiwrQ0FBd0I7OztJQUQvRixBQURKLDJCQUErQixhQUNDO0lBQUEsWUFBYTtJQUFBLGlCQUFLO0lBQzlDLG9FQUF1RTtJQUN2RSw2QkFBdUI7SUFBQSxZQUFzQjtJQUNqRCxBQURpRCxpQkFBSSxFQUMvQzs7O0lBSDBCLGVBQWE7SUFBYixvQ0FBYTtJQUNyQyxjQUFzQjtJQUF0Qiw4Q0FBc0I7SUFDSCxlQUFzQjtJQUF0Qiw2Q0FBc0I7OztJQUc3QyxBQURKLDJCQUE4QixhQUNFO0lBQUEsWUFBd0I7SUFBQSxpQkFBSztJ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c2VydmljZSc7XG5pbXBvcnQgeyBDVUNhbGVuZGFySm9iLCBMb2dpblJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4uL21vZGVscy9zdG9yYWdlLXZhcnMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3N1YnNjcmlwdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vZm9yZ290LXBhc3N3b3JkLWRpYWxvZy9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJDb250ZW50SW5pdCwgSW5qZWN0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXh0cmFJbmZvIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcbmltcG9ydCB7IFN0cmluZ3MgfSBmcm9tICcuLi9tb2RlbHMvU3RyaW5ncyc7XG5pbXBvcnQgeyBMSUJfVkVSU0lPTiB9IGZyb20gJy4uLy4uL3ZlcnNpb24nO1xuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi4vbW9kZWxzL29wZXJhdGlvbi1yZXN1bHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RiLWxvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY2xhc3MgVGJMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIHByaXZhdGUgY2FjaGVkQ29tcGFuaWVzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICBjYXBzTG9ja09uID0gZmFsc2U7XG4gICAgdmFsaWRhdGUgPSBmYWxzZTtcbiAgICBvdHAgPSBmYWxzZTtcbiAgICB1c2VyYWxyZWFkeWxvZ2dlZCA9IGZhbHNlO1xuICAgIE9MRCA9IGZhbHNlOyAvL3VzYXRvIHBlciBkaWZmZXJlbnppYXJlIGxlIHZlcnNpb25pIG9ic29sZXRlIGRpIGxvZ2luXG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0ID0gbmV3IExvZ2luUmVxdWVzdCgpO1xuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG4gICAgaXNNYWdvV2ViOiBib29sZWFuID0gZmFsc2U7XG4gICAgYnV0dG9uVGV4dDogc3RyaW5nO1xuICAgIG5leHRUZXh0OiBzdHJpbmc7XG4gICAgbG9naW5UZXh0OiBzdHJpbmc7XG4gICAgY3VycmVudFllYXI6IHN0cmluZztcbiAgICBjcmVhdGVBY2NvdW50VXJsOiBzdHJpbmc7XG4gICAgY2hhbmdlUGFzc3dvcmRVcmw6IHN0cmluZztcbiAgICBzdWJzY3JpcHRpb25TZWxlY3Rpb246IGJvb2xlYW47IC8vIGFiaWxpdGEgbGEgc2NlbHRhIGRlbGxhIHN1YnNjcmlwdGlvblxuICAgIHNob3dTaWduVXA6IGJvb2xlYW47IC8vIGFiaWxpdGEgbGEgcG9zc2liaWxpdMOgIGRpIHJlZ2lzdHJhcmUgbnVvdm8gYWNjb3VudFxuICAgIGxvZ2luU3Vic2NyaXB0aW9uczogQXJyYXk8eyBkZXNjcmlwdGlvbjogc3RyaW5nOyBzdWJzY3JpcHRpb25rZXk6IHN0cmluZzsgc3RhdHVzOiBudW1iZXI7IGluc3RhbmNla2V5OiBzdHJpbmcgfT4gPSBbXTtcbiAgICBsb2dvVVJMOiBzdHJpbmc7XG4gICAgYmFja2dyb3VuZFVSTDogc3RyaW5nO1xuICAgIGhpZGUgPSB0cnVlO1xuICAgIGhpZGVPdHAgPSB0cnVlO1xuICAgIGluc3RhbmNla2V5OiBzdHJpbmc7XG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIHB1YmxpYyBkb2N1bWVudD86IERvY3VtZW50O1xuICAgIGxpYl92ZXJzaW9uOiBzdHJpbmcgPSBMSUJfVkVSU0lPTjtcbiAgICAvLyB0ZXN0aSBpbiBpdGFsaWFubyBlZCBpbmdsZXNlXG4gICAgY2hvb3NlU3Vic2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZ29vZEpvYjogc3RyaW5nO1xuICAgIHN1YnNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGluc3RhbmNlOiBzdHJpbmc7XG4gICAgYnV0dG9uQmFjazogc3RyaW5nO1xuICAgIGFjY291bnROYW1lOiBzdHJpbmc7XG4gICAgZW50ZXJBY2NvdW5OYW1lOiBzdHJpbmc7XG4gICAgcmVzZXRQYXNzd29yZE1lc3NhZ2U6IHN0cmluZztcbiAgICB3ZWxjb21lOiBzdHJpbmc7XG4gICAgZW50ZXJDcmVkZW50aWFsczogc3RyaW5nO1xuICAgIGZvcmdldFBhc3N3b3JkOiBzdHJpbmc7XG4gICAgYmxvY01haXVzYzogc3RyaW5nO1xuICAgIGlkbGVUaW1lb3V0TWVzc2FnZTogc3RyaW5nO1xuICAgIG90cE1lc3NhZ2U6IHN0cmluZztcbiAgICBhdXRoQXBwVGV4dDogc3RyaW5nO1xuICAgIG90cFRpdGxlOiBzdHJpbmc7XG4gICAgcmVzZW5kT1RQTGFiZWw6IHN0cmluZztcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgY2hvc2VuQXV0aEFwcDogc3RyaW5nO1xuICAgIG90cFRleHQ6IHN0cmluZztcbiAgICBvdHBSZXF1ZXN0Q29kZTogc3RyaW5nO1xuICAgIHVzZXJhbHJlYWR5bG9nZ2VkTWVzc2FnZTogc3RyaW5nO1xuICAgIHVzZXJhbHJlYWR5bG9nZ2VkT0s6IHN0cmluZztcbiAgICB1c2VyYWxyZWFkeWxvZ2dlZFRpdGxlOiBzdHJpbmc7XG4gICAgdXNlQXV0aEFwcDogc3RyaW5nO1xuICAgIG9uZU1ldGhvZE9ubHk6IHN0cmluZztcbiAgICBhbHRlcm5hdGl2ZU1ldGhvZDogc3RyaW5nO1xuICAgIG1hbmFnZU1ldGhvZHM6IHN0cmluZztcbiAgICBUT1RQRGVzY3JpcHRpb246IHN0cmluZztcbiAgICBvdHBSZXNldFRleHRNYWdvV2ViOiBzdHJpbmc7XG4gICAgaW5wdXRWYWx1ZTogc3RyaW5nID0gJyc7XG4gICAgZHJvcERvd25Jc0NsaWNrZWQgPSBmYWxzZTtcbiAgICBjb21ib0JveElzQ2xpY2tlZCA9IGZhbHNlO1xuICAgIGljb25Jc0NsaWNrZWQgPSBmYWxzZTtcbiAgICBAVmlld0NoaWxkKCdkcm9wZG93bicpIGRyb3Bkb3duOiBhbnk7XG4gICAgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGxhbmd1YWdlSVQgPSB0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKTtcbiAgICBvdHBJbmZvOiBFeHRyYUluZm8gPSBuZXcgRXh0cmFJbmZvKCk7XG4gICAgaXNFcnJvckNvbWluZ0Zyb21NYWdvID0gZmFsc2U7XG4gICAgc2hvd1Jlc2V0UGFzc3dvcmRNZXNzYWdlID0gZmFsc2U7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jPzogYW55XG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnY2xpY2snLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbWJvQm94SXNDbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21ib0JveElzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmljb25Jc0NsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmljb25Jc0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kcm9wZG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24udG9nZ2xlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BEb3duSXNDbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRvY3VtZW50ID0gZG9jIGFzIERvY3VtZW50O1xuICAgICAgICB0aGlzLmNoZWNrQ29ubmVjdGlvbigpO1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXBwSWQoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gPSBhdXRoU2VydmljZS5oYXNTdWJzY3JpcHRpb25TZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5zaG93U2lnblVwID0gYXV0aFNlcnZpY2Uuc2hvd1NpZ25VcCgpO1xuICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKTtcbiAgICAgICAgdGhpcy5pc01hZ29XZWIgPSBhdXRoU2VydmljZS5nZXRJZklzTWFnb1dlYigpO1xuICAgICAgICB0aGlzLmNyZWF0ZUFjY291bnRVcmwgPSBhdXRoU2VydmljZS5nZXRDcmVhdGVBY2NvdW50VXJsKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmRVcmwgPSBhdXRoU2VydmljZS5nZXRDaGFuZ2VQYXNzd29yZFVybCgpO1xuICAgICAgICB0aGlzLmxvZ29VUkwgPSBhdXRoU2VydmljZS5nZXRMb2dvVVJMKCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFVSTCA9IGF1dGhTZXJ2aWNlLmdldEJhY2tncm91bmRVUkwoKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZWtleSA9ICcnO1xuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRUZXh0ID0gJ2F2YW50aSc7XG4gICAgICAgICAgICB0aGlzLmxvZ2luVGV4dCA9ICdhY2NlZGknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uZXh0VGV4dCA9ICduZXh0JztcbiAgICAgICAgICAgIHRoaXMubG9naW5UZXh0ID0gJ2xvZ2luJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlIHx8ICF0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiA/IHRoaXMubG9naW5UZXh0IDogdGhpcy5uZXh0VGV4dDtcbiAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XG4gICAgICAgICAgICB0aGlzLmNob29zZVN1YnNjcmlwdGlvbiA9ICdTY2VnbGkgbGEgdHVhIHNvdHRvc2NyaXppb25lJztcbiAgICAgICAgICAgIHRoaXMuZ29vZEpvYiA9ICdCdW9uIGxhdm9ybyEnO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSAnU290dG9zY3JpemlvbmUnO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9ICdJc3RhbnphJztcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmFjayA9ICc8IElORElFVFJPJztcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudE5hbWUgPSAnTm9tZSB1dGVudGUnO1xuICAgICAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkTWVzc2FnZSA9ICdQZXIgcG90ZXIgcmVpbXBvc3RhcmUgdW5hIG51b3ZhIHBhc3N3b3JkIMOoIG5lY2Vzc2FyaW8gY29udGF0dGFyZSBs4oCZYW1taW5pc3RyYXRvcmUgZGkgTWFnb1dlYic7XG4gICAgICAgICAgICB0aGlzLmVudGVyQWNjb3VuTmFtZSA9ICdJbnNlcmlzY2kgaWwgdHVvIG5vbWUgdXRlbnRlIGUgdGkgaW52aWVyZW1vIHVuYSBudW92YSBwYXNzd29yZCc7XG4gICAgICAgICAgICB0aGlzLndlbGNvbWUgPSAnQmVudmVudXRvIHN1ICcgKyBhdXRoU2VydmljZS5nZXRCcmFuZE5hbWUoKTtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJDcmVkZW50aWFscyA9ICdBdXRlbnRpY2F0aSBpbnNlcmVuZG8gbm9tZSB1dGVudGUgZSBwYXNzd29yZC4nO1xuICAgICAgICAgICAgdGhpcy5mb3JnZXRQYXNzd29yZCA9ICdIYWkgZGltZW50aWNhdG8gbGEgcGFzc3dvcmQgPyc7XG4gICAgICAgICAgICB0aGlzLmJsb2NNYWl1c2MgPSAnQmxvY2NvIG1haXVzY29sZSBhdHRpdm8nO1xuICAgICAgICAgICAgdGhpcy5pZGxlVGltZW91dE1lc3NhZ2UgPSAnTGEgdHVhIHNlc3Npb25lIMOoIHRlcm1pbmF0YSBwZXIgaW5hdHRpdml0w6AsIHB1b2kgcmlwcmVuZGVyZSBkYSBxdWkuJztcbiAgICAgICAgICAgIHRoaXMub3RwTWVzc2FnZSA9ICdJbnNlcmlzY2kgaWwgY29kaWNlIE9UUCBjaGUgaGFpIHJpY2V2dXRvIHRyYW1pdGUgJztcbiAgICAgICAgICAgIHRoaXMuYXV0aEFwcFRleHQgPSAnYXBwIGRpIGF1dGVudGljYXppb25lJztcbiAgICAgICAgICAgIHRoaXMub3RwVGl0bGUgPSAnQXV0ZW50aWNhemlvbmUgYSBkdWUgZmF0dG9yaSc7XG4gICAgICAgICAgICB0aGlzLnJlc2VuZE9UUExhYmVsID0gJ1JpY2hpZWRpIHVuIG51b3ZvIGNvZGljZSBPVFAgdmlhICc7XG4gICAgICAgICAgICB0aGlzLnVzZXJhbHJlYWR5bG9nZ2VkTWVzc2FnZSA9ICdWdW9pIGNvbnRpbnVhcmUgY29uIGxhIGxvZ2luPyBMYSBsb2dpbiBwcmVjZWRlbnRlIHZlcnLDoCBkaXNhYmlsaXRhdGEuJztcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRUaXRsZSA9ICcgw6ggZ2nDoCBjb25uZXNzbyBhIHF1ZXN0YSBzdWJzY3JpcHRpb24uJztcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRPSyA9ICdTw6wsIGNvbnRpbnVhIGNvbiBsYSBsb2dpbic7XG4gICAgICAgICAgICB0aGlzLmNvZGUgPSAnQ29kaWNlIE9UUCc7XG4gICAgICAgICAgICB0aGlzLmNob3NlbkF1dGhBcHAgPSAnYXBwIGRpIGF1dGVudGljYXppb25lIHNjZWx0YSc7XG4gICAgICAgICAgICB0aGlzLm90cFRleHQgPSAnT3BwdXJlJztcbiAgICAgICAgICAgIHRoaXMub3RwUmVxdWVzdENvZGUgPSAnUmljaGllZGkgY29kaWNlIHZpYSAnO1xuICAgICAgICAgICAgdGhpcy51c2VBdXRoQXBwID0gJ1V0aWxpenphIGxhIHR1YSBhcHAgZGkgYXV0ZW50aWNhemlvbmUnO1xuICAgICAgICAgICAgdGhpcy5vbmVNZXRob2RPbmx5ID1cbiAgICAgICAgICAgICAgICAnSGFpIHVuIHNvbG8gbWV0b2RvIGRpIGF1dGVudGljYXppb25lIGNvbmZpZ3VyYXRvLCBwZXIgbm9uIHJpc2NoaWFyZSBkaSByaW1hbmVyZSBibG9jY2F0byB0aSBjb25zaWdsaWFtbyBkaSc7XG4gICAgICAgICAgICB0aGlzLmFsdGVybmF0aXZlTWV0aG9kID0gJ2F0dGl2YXJlIHVuIG1ldG9kbyBhbHRlcm5hdGl2by4nO1xuICAgICAgICAgICAgdGhpcy5tYW5hZ2VNZXRob2RzID0gJ0dlc3Rpc2NpIGkgdHVvaSBtZXRvZGkgZGkgYWNjZXNzbyc7XG4gICAgICAgICAgICB0aGlzLlRPVFBEZXNjcmlwdGlvbiA9XG4gICAgICAgICAgICAgICAgXCJBcHJpIGwnYXBwIG8gbCdlc3RlbnNpb25lIGRlbCBicm93c2VyIGRlbGwnYXV0ZW50aWNhdG9yZSBhIGR1ZSBmYXR0b3JpIChUT1RQKSBwZXIgdmlzdWFsaXp6YXJlIGlsIHR1byBjb2RpY2UgZGkgYXV0ZW50aWNhemlvbmVcIjtcbiAgICAgICAgICAgIHRoaXMub3RwUmVzZXRUZXh0TWFnb1dlYiA9IFwiTm9uIHB1b2kgYWNjZWRlcmUgdmlhIE9UUD8gQ29udGF0dGEgbCdhbW1pbmlzdHJhdG9yZSBkaSBNYWdvV2ViIHBlciByZWltcG9zdGFyZSBpbCB0aXBvIGRpIGF1dGVudGljYXppb25lLlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaG9vc2VTdWJzY3JpcHRpb24gPSAnQ2hvb3NlIHlvdXIgc3Vic2NyaXB0aW9uJztcbiAgICAgICAgICAgIHRoaXMuZ29vZEpvYiA9ICdHb29kIGpvYiEnO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSAnU3Vic2NyaXB0aW9uJztcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSAnSW5zdGFuY2UnO1xuICAgICAgICAgICAgdGhpcy5idXR0b25CYWNrID0gJzwgQkFDSyc7XG4gICAgICAgICAgICB0aGlzLmFjY291bnROYW1lID0gJ0FjY291bnQgbmFtZSc7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UGFzc3dvcmRNZXNzYWdlID0gJ1BsZWFzZSwgY29udGFjdCBNYWdvV2ViIGFkbWluaXN0cmF0b3IgdG8gcmVzZXQgeW91ciBwYXNzd29yZCc7XG4gICAgICAgICAgICB0aGlzLmVudGVyQWNjb3VuTmFtZSA9ICdFbnRlciB5b3VyIGFjY291bnQgbmFtZSBhbmQgd2Ugd2lsbCBzZW5kIHlvdSBhIG5ldyBwYXNzd29yZCc7XG4gICAgICAgICAgICB0aGlzLndlbGNvbWUgPSAnV2VsY29tZSB0byAnICsgYXV0aFNlcnZpY2UuZ2V0QnJhbmROYW1lKCk7XG4gICAgICAgICAgICB0aGlzLmVudGVyQ3JlZGVudGlhbHMgPSAnQXV0aGVudGljYXRlIHlvdXJzZWxmIGJ5IGVudGVyaW5nIHlvdXIgYWNjb3VudCBuYW1lIGFuZCBwYXNzd29yZC4nO1xuICAgICAgICAgICAgdGhpcy5mb3JnZXRQYXNzd29yZCA9ICdGb3Jnb3QgeW91ciBwYXNzd29yZCA/JztcbiAgICAgICAgICAgIHRoaXMuYmxvY01haXVzYyA9ICdDYXBzIGxvY2sgb24nO1xuICAgICAgICAgICAgdGhpcy5pZGxlVGltZW91dE1lc3NhZ2UgPSAnWW91ciBzZXNzaW9uIGhhcyBleHBpcmVkIGR1ZSB0byBpbmFjdGl2aXR5LCB5b3UgY2FuIHJlc3VtZSBmcm9tIGhlcmUuJztcbiAgICAgICAgICAgIHRoaXMub3RwTWVzc2FnZSA9ICdFbnRlciB0aGUgb3RwIGNvZGUgeW91IHJlY2VpdmVkIHZpYSAnO1xuICAgICAgICAgICAgdGhpcy5hdXRoQXBwVGV4dCA9ICdhdXRoZW50aWNhdGlvbiBhcHAnO1xuICAgICAgICAgICAgdGhpcy5vdHBUaXRsZSA9ICdUd28tRmFjdG9yIEF1dGhlbnRpY2F0aW9uJztcbiAgICAgICAgICAgIHRoaXMucmVzZW5kT1RQTGFiZWwgPSAnUmVxdWVzdCBhIG5ldyBPVFAgY29kZSB2aWEgJztcbiAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWRNZXNzYWdlID0gJ0RvIHlvdSB3YW50IHRvIGNvbnRpbnVlIHdpdGggdGhlIGxvZ2luPyBUaGUgcHJldmlvdXMgbG9naW4gd2lsbCBiZSBkaXNhYmxlZC4nO1xuICAgICAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZFRpdGxlID0gJyBpcyBhbHJlYWR5IGxvZ2dlZCBpbiB0byB0aGlzIHN1YnNjcmlwdGlvbi4nO1xuICAgICAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZE9LID0gJ1llcywgY29udGludWUgdG8gbG9naW4nO1xuICAgICAgICAgICAgdGhpcy5jb2RlID0gJ09UUCBDb2RlJztcbiAgICAgICAgICAgIHRoaXMuY2hvc2VuQXV0aEFwcCA9ICdjaG9zZW4gYXV0aGVudGljYXRvciBhcHAnO1xuICAgICAgICAgICAgdGhpcy5vdHBUZXh0ID0gJ09yJztcbiAgICAgICAgICAgIHRoaXMub3RwUmVxdWVzdENvZGUgPSAnUmVxdWVzdCBjb2RlIHZpYSAnO1xuICAgICAgICAgICAgdGhpcy51c2VBdXRoQXBwID0gJ1VzZSB5b3VyIGF1dGhlbnRpY2F0b3IgYXBwJztcbiAgICAgICAgICAgIHRoaXMub25lTWV0aG9kT25seSA9ICdZb3UgaGF2ZSBvbmx5IG9uZSBhdXRoZW50aWNhdGlvbiBtZXRob2QgY29uZmlndXJlZCwgdG8gYXZvaWQgdGhlIHJpc2sgb2YgYmVpbmcgYmxvY2tlZCB3ZSByZWNvbW1lbmQgeW91JztcbiAgICAgICAgICAgIHRoaXMuYWx0ZXJuYXRpdmVNZXRob2QgPSAnYWN0aXZhdGUgYW4gYWx0ZXJuYXRpdmUgbWV0aG9kLic7XG4gICAgICAgICAgICB0aGlzLm1hbmFnZU1ldGhvZHMgPSAnTWFuYWdlIHlvdXIgbG9naW4gbWV0aG9kcyc7XG4gICAgICAgICAgICB0aGlzLlRPVFBEZXNjcmlwdGlvbiA9ICdPcGVuIHlvdXIgdHdvLWZhY3RvciBhdXRoZW50aWNhdG9yIChUT1RQKSBhcHAgb3IgYnJvd3NlciBleHRlbnNpb24gdG8gdmlldyB5b3VyIGF1dGhlbnRpY2F0aW9uIGNvZGUnO1xuICAgICAgICAgICAgdGhpcy5vdHBSZXNldFRleHRNYWdvV2ViID0gXCJDYW4ndCBsb2cgaW4gdmlhIE9UUD8gQ29udGFjdCB0aGUgTWFnb1dlYiBhZG1pbmlzdHJhdG9yIHRvIHJlc2V0IHRoZSBhdXRoZW50aWNhdGlvbiB0eXBlLlwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFwcFJlZGlyZWN0ID0gcGFyYW1zWydhcHBSZWRpcmVjdCddO1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBwYXJhbXNbJ2Vycm9yJ107XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnVzZURDUyA9IGFwcFJlZGlyZWN0ICYmIGFwcFJlZGlyZWN0ID09PSAnRENTX0FQUCc7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVycm9yID8gZXJyb3IgOiAnJztcbiAgICAgICAgICAgIHRoaXMuaXNFcnJvckNvbWluZ0Zyb21NYWdvID0gZXJyb3IgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFBST1ZBIFBFUiBBUEVSVFVSQSBESUFMT0cgREkgTk9USUZJQ0EgQUdHSU9STkFNRU5UT1xuICAgIC8vICBhc3luYyBvcGVuRGlhbG9nKCkge1xuICAgIC8vICAgY29uc3QgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0RPTlRTSE9XVVBEQVRFV0FSTicpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc190cmFuc2xhdGlvbiA9IG5ldyAgU3RyaW5ncygpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlTWVzc2FnZSh0aGlzLmF1dGhTZXJ2aWNlKTtcblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN1YicsIFwic3ViIHhcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAZGF0ZScsIFwidGhpcyBkYXRlXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN0YXJ0aCcsXCJzdGFydCBob3VyXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQGVuZGgnLFwiZW5kIGhvdXJcIiApO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vbiBtb3N0cm8gc2UgbWkgaGFubm8gZGV0dG8gZGkgbm9uIG1vc3RyYXJlIHBpdS5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbWVzc2FnZSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5vcGVuVXBkYXRlQWxlcnREaWFsb2coXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZVRpdGxlKCksXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc190cmFuc2xhdGlvbi5nZXRVcGRhdGVEb250U2hvd01lc3NhZ2UoKSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7fVxuICAgIC8vICB9XG4gICAgLy8gUFJPVkEgUEVSIEFQRVJUVVJBIERJQUxPRyBESSBOT1RJRklDQSBBR0dJT1JOQU1FTlRPXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZExvZ2luRGF0YSgpO1xuICAgICAgICB3ZWJraXRBdXRvZmlsbFdvcmthcm91bmQoKTtcbiAgICAgICAgLy90ZXN0OiB0aGlzLm9wZW5EaWFsb2coKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhc3luYyBjaGVja0Nvbm5lY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNoZWNrQ29ubmVjdGlvbigpO1xuICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIHNlIG1pIGFycml2YSB1biBlcnJvcmUgbW9zdHJvIHF1ZWxsbyBhbHRyaW1lbnRpIHNvbG8gbCB1cmwgY2hlIGxvIGhhIGRhdG9cbiAgICAgICAgICAgIGxldCBlcnJvciA9IHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgaWYgKGVycm9yLmxlbmd0aCA9PT0gMCkgZXJyb3IgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEJhc2VVcmwoKTtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gdGhpcy5sYW5ndWFnZUlUXG4gICAgICAgICAgICAgICAgPyAnU2Vydml6aW8gdGVtcG9yYW5lYW1lbnRlIG5vbiByYWdnaXVuZ2liaWxlLlxcbkRldHRhZ2xpOiAnICsgZXJyb3JcbiAgICAgICAgICAgICAgICA6ICdTZXJ2aWNlIHRlbXBvcmFyaWx5IG5vdCBhdmFpbGFibGUuXFxuRGV0YWlsczogJyArIGVycm9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmlzRXJyb3JDb21pbmdGcm9tTWFnbyA/IHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlIDogJyc7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgb25TdWJDaGFuZ2UobmV3VmFsdWU6IGFueSkge1xuICAgICAgICBjb25zdCBzZCA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmZpbmQoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5ID09PSBuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChzZCAmJiBzZC5pbnN0YW5jZWtleSkgdGhpcy5pbnN0YW5jZWtleSA9IGAke3RoaXMuaW5zdGFuY2V9OiAke3NkLmluc3RhbmNla2V5fWA7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAga2V5VXBGdW5jdGlvbihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWRCdXR0b24oKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBieSBlbnRlci4uLicpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYXBzT24gPSBldmVudC5nZXRNb2RpZmllclN0YXRlICYmIGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoJ0NhcHNMb2NrJyk7XG4gICAgICAgIHRoaXMuY2Fwc0xvY2tPbiA9IGNhcHNPbjtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkaXNhYmxlZEJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChoYXNBdXRvZmlsbCgpICYmXG4gICAgICAgICAgICAgICAgKCF0aGlzLmlzQ29ubmVjdGVkIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiAmJiB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDAgJiYgdGhpcy52YWxpZGF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMub3RwICYmIHRoaXMuaW5wdXRWYWx1ZS5sZW5ndGggIT09IDYpIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy51c2VyYWxyZWFkeWxvZ2dlZCAmJiAhdGhpcy5sb2dpblJlcXVlc3Qub3ZlcndyaXRlTG9naW4pKSkgfHxcbiAgICAgICAgICAgICghaGFzQXV0b2ZpbGwoKSAmJlxuICAgICAgICAgICAgICAgICghdGhpcy5pc0Nvbm5lY3RlZCB8fFxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMubG9naW5SZXF1ZXN0LnBhc3N3b3JkIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiAmJiB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDAgJiYgdGhpcy52YWxpZGF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMub3RwICYmIHRoaXMuaW5wdXRWYWx1ZS5sZW5ndGggIT09IDYpIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy51c2VyYWxyZWFkeWxvZ2dlZCAmJiAhdGhpcy5sb2dpblJlcXVlc3Qub3ZlcndyaXRlTG9naW4pKSlcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZ2V0IGlzRXhwaXJlZFNlc3Npb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVkU2Vzc2lvbicpID09PSAndHJ1ZSc7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG5ld1VzZXIoKSB7XG4gICAgICAgIC8vIHJpbWFuZGEgYWxsYSBwYWdpbmEgKHByZXN1bWliaWxtZW50ZSBkZWxsbyBzdG9yZSkgZG92ZSAgc2Fyw6AgcG9zc2liaWxlIGNyZWFyZSB1biBudW92byBhY2NvdW50LlxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jcmVhdGVBY2NvdW50VXJsXSk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYXN5bmMgYmFjayhrZWVwTWVzc2FnZXM6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICAvLyByaXB1bGlzY28gdHV0dG8uLi5cbiAgICAgICAgdGhpcy52YWxpZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC50b2tlbiA9ICcnO1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9ICcnO1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5vdFBhc3N3b3JkID0gJyc7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRCA9ICcnO1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Qub3ZlcndyaXRlTG9naW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy51c2VyYWxyZWFkeWxvZ2dlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9ICcnO1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLm5leHRUZXh0O1xuICAgICAgICB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLm90cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcbiAgICAgICAgaWYgKCFrZWVwTWVzc2FnZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYXN5bmMgbG9naW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiByZXF1ZXN0ZWQuLi4nICsgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkTWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNhdmVMb2dpbkRhdGEoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnZXhwaXJlZFNlc3Npb24nKTtcbiAgICAgICAgLy9hc3NlZ25vIHVuIGlkIGFsbGEgbG9naW4gZSBzb2xvIHF1ZXN0YSBwb3Ryw6EgdXNhcmUgaWwgY29kaWNlICBvdHAgICBhc3NlZ25hdG9cbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSUQpIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMDAwMCArIDEwMDAwMCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0Lm90UGFzc3dvcmQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm90cCkge1xuICAgICAgICAgICAgLy9uZWxsZSBwcmltZSB2ZXJzaW9uaSBsIG90cCBhbmRhdmEgbmVsIGNhbXBvIHBhc3N3b3JkLCBwb2kgw6kgc3RhdG8gY3JlYXRvICBpbCBjYW1wbyBhcHBvc2l0b1xuICAgICAgICAgICAgaWYgKHRoaXMuT0xEKSB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9IHRoaXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5sb2dpblJlcXVlc3Qub3RQYXNzd29yZCA9IHRoaXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUgJiYgdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gJ01DbG91ZFByZUxvZ2luJztcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxpbmcgcHJlbG9naW4uLi4gJyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQxID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5wcmVsb2dpbih0aGlzLmxvZ2luUmVxdWVzdCkuY2F0Y2goKGVycjEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVycjEuZXJyb3IgJiYgZXJyMS5lcnJvci5NZXNzYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xuICAgICAgICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaSBzaWEgbG9naW4gc2lhIGNoZWNrZGJcbiAgICAgICAgICAgIGlmIChyZXN1bHQxICYmIHJlc3VsdDEuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdHAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcGFuaWVzRm9yVXNlcih0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbGxlY3Rpbmcgc3Vic2NyaXB0aW9ucy4uLicpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vdHAgJiYgcmVzdWx0MSAmJiByZXN1bHQxLlJlc3VsdENvZGUgPT09IDE0Mykge1xuICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mbyA9IHJlc3VsdDEuRXh0cmFJbmZvO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm90cEluZm8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk9MRCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mbyA9IG5ldyBFeHRyYUluZm8oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy5PTEQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm90cCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3RwICYmIHJlc3VsdDEgJiYgIXJlc3VsdDEuUmVzdWx0ICYmIHJlc3VsdDEuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlSVQgPyAnT1RQIG5vbiB2YWxpZG8uJyA6ICdJbnZhbGlkIE9UUC4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gdGhpcy5hdXRoU2VydmljZS5nZXRBcHBJZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxpbmcgbG9naW4uLi4gJyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMubG9naW5SZXF1ZXN0KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5vdHAgJiYgcmVzdWx0ICYmIHJlc3VsdC5SZXN1bHRDb2RlID09PSAxNDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm90cEluZm8gPSByZXN1bHQuRXh0cmFJbmZvO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm90cEluZm8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk9MRCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mbyA9IG5ldyBFeHRyYUluZm8oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy5PTEQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm90cCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3RwICYmIHJlc3VsdCAmJiAhcmVzdWx0LlJlc3VsdCAmJiByZXN1bHQuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlSVQgPyAnT1RQIG5vbiB2YWxpZG8uJyA6ICdJbnZhbGlkIE9UUC4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xuICAgICAgICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaSBzaWEgbG9naW4gc2lhIGNoZWNrZGJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LlJlc3VsdENvZGUgPT09IDExNikge1xuICAgICAgICAgICAgICAgIC8vZmFpIGNvc2UgMTE2IChtb3N0cmEgYXZ2aXNvKVxuICAgICAgICAgICAgICAgIHRoaXMudXNlcmFscmVhZHlsb2dnZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9sYSBsb2dpbiDDqSBhbmRhdGEsIHByb3NlZ3VvIGNvbiBhbHRyZSB2ZXJpZmljaGVcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LlJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNkID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMuZmluZCgocykgPT4gcy5zdWJzY3JpcHRpb25rZXkgPT09IHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jaGlhbW8gc2VtcHJlIGwnIGFwaSBjaGUgZmEgdHV0dGkgaSBjb250cm9sbGkgZGVsIGNhc28gaW4gbW9kbyBkYSBzZ2FuY2lhcmUgbGEgbGlicmFyeSBkYSBsb2dpY2hlIGNhbmFyeSBjaGUgcG90cmViYmVybyBjYW1iaWFyZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0MSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q2FsZW5kYXIodGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcblxuICAgICAgICAgICAgICAgICAgICAvL3NvbG8gc2UgaWwgcmVzdWx0IMOpIG9rIGZhY2NpbyBsbyBzaG93IGRlbGzCtGF2dmlzbyBkaSBldmVudHVhbGkgYWdnaW9ybmFtZW50aSBzY2hlZHVsYXRpXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQxICYmIHJlc3VsdDEucmVzdWx0ICYmIHJlc3VsdDEuY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGVkVXBkYXRlOiBDVUNhbGVuZGFySm9iID0gcmVzdWx0MS5jb250ZW50IGFzIENVQ2FsZW5kYXJKb2I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NoZWR1bGVkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NjaGVkdWxlZFVwZGF0ZTogJyArIHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdET05UU0hPV1VQREFURVdBUk4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc190cmFuc2xhdGlvbiA9IG5ldyBTdHJpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZU1lc3NhZ2UodGhpcy5hdXRoU2VydmljZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN1YicsIHRoaXMuYXV0aFNlcnZpY2UuZ2V0U3Vic2NyaXB0aW9uRGVzY3JpcHRpb24oKSEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAZGF0ZScsIHRoaXMuRm9ybWF0RGF0ZVN0cmluZyhzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3RhcnRoJywgdGhpcy5Gb3JtYXRTdGFydERhdGVTdHJpbmcoc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQEBlbmRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Gb3JtYXRFbmREYXRlU3RyaW5nKHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lLCBzY2hlZHVsZWRVcGRhdGUuZXN0aW1hdGVkdXBncmFkZXRpbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub24gbW9zdHJvIHNlIG1pIGhhbm5vIGRldHRvIGRpIG5vbiBtb3N0cmFyZSBwaXUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9wZW5VcGRhdGVBbGVydERpYWxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZVRpdGxlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZURvbnRTaG93TWVzc2FnZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wcm9jZXNzSURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVhZHkgdG8gcmVkaXJlY3QuJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNSZWRpcmVjdEV4dGVybmFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvIGV4dGVybmFsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnByb2Nlc3NJRFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvIGludGVybmFsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLy8vLzdcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3RwICYmIHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3RwSW5mbyA9IHJlc3VsdC5FeHRyYUluZm87XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm90cEluZm8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5PTEQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvID0gbmV3IEV4dHJhSW5mbygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy5PTEQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vdHAgJiYgcmVzdWx0ICYmICFyZXN1bHQuUmVzdWx0ICYmIHJlc3VsdC5SZXN1bHRDb2RlID09PSAxNDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlSVQgPyAnT1RQIG5vbiB2YWxpZG8uJyA6ICdJbnZhbGlkIE9UUC4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLy8vLzdcbiAgICAgICAgICAgICAgICAvL2Nhc28gZGkgbG9naW4gZmFsbGl0YSBwZXIgcXVhbGNoZSBlcnJvcmVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLi4uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkgY29uc29sZS5sb2coJ0Vycm9yICcgKyByZXN1bHQuUmVzdWx0Q29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBGb3JtYXREYXRlU3RyaW5nID0gKGRhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICAgIHZhciBzY2hlZHVsZWREYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZSkpO1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVkRGF0ZVRpbWUudG9Mb2NhbGVEYXRlU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBGb3JtYXRTdGFydERhdGVTdHJpbmcgPSAoZGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgdmFyIHNjaGVkdWxlZERhdGVUaW1lID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRlKSk7XG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHJldHVybiBzY2hlZHVsZWREYXRlVGltZS50b0xvY2FsZVN0cmluZygnaXQtSVQnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogZmFsc2UgfSk7XG4gICAgICAgIGVsc2UgcmV0dXJuIHNjaGVkdWxlZERhdGVUaW1lLnRvTG9jYWxlU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSk7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEZvcm1hdEVuZERhdGVTdHJpbmcgPSAoZGF0ZTogc3RyaW5nLCBkdXJhdGlvbk1pbnM6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgICAgIHZhciBzY2hlZHVsZWREYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZSkpO1xuICAgICAgICB2YXIgZmluYWxEYXRlID0gbmV3IERhdGUoc2NoZWR1bGVkRGF0ZVRpbWUuZ2V0VGltZSgpICsgZHVyYXRpb25NaW5zICogNjAwMDApO1xuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSByZXR1cm4gZmluYWxEYXRlLnRvTG9jYWxlU3RyaW5nKCdpdC1JVCcsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiBmYWxzZSB9KTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmluYWxEYXRlLnRvTG9jYWxlU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSk7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGxvYWRMb2dpbkRhdGEoKSB7XG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lID0gdGhpcy5hdXRoU2VydmljZS5nZXRBY2NvdW50TmFtZSgpIHx8ICcnO1xuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFN1YnNjcmlwdGlvbigpIHx8ICcnO1xuXG4gICAgICAgIGlmICghdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpdmF0ZSBzYXZlTG9naW5EYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc1Nlc3Npb25TdG9yYWdlKCkpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNkID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMuZmluZCgocykgPT4gcy5zdWJzY3JpcHRpb25rZXkgPT09IHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XG4gICAgICAgICAgICBpZiAoc2QpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc1Nlc3Npb25TdG9yYWdlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHNkLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHNkLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhc3luYyBnZXRDb21wYW5pZXNGb3JVc2VyKHVzZXI6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXNlciB8fCAhdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgLy8gdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBhd2FpdCB0aGlzLnJlcXVlc3RBbmRTb3J0U3Vic2NyaXB0aW9ucyh1c2VyKTtcbiAgICAgICAgLy8gUHJlbWlvIEVsZWdhbnphIENvZGljZSAyMDE5IChATHVjYUJydW5pKVxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodGVtcCkgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMubG9naW5TdWJzY3JpcHRpb25zKSkgdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMgPSB0ZW1wO1xuXG4gICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ05vbiB0cm92byBuZXNzdW5hIHN1YnNjcmlwdGlvbiBhc3NvY2lhdGEgYSBxdWVzdG8gYWNjb3VudC4nO1xuICAgICAgICAgICAgZWxzZSB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdJIGNhbm5vdCBmaW5kIGFueSBTdWJzY3JpcHRpb25zIGFzc29jaWF0ZWQgdG8geW91JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zWzBdLnN1YnNjcmlwdGlvbmtleTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9naW5TdWJzY3JpcHRpb25zLm1hcCgocykgPT4gcy5zdWJzY3JpcHRpb25rZXkpLmluZGV4T2YodGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnNbMF0uc3Vic2NyaXB0aW9ua2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25TdWJDaGFuZ2UodGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHByaXZhdGUgYXN5bmMgcmVxdWVzdEFuZFNvcnRTdWJzY3JpcHRpb25zKHVzZXI6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8U3Vic2NyaXB0aW9uPj4ge1xuICAgICAgICBpZiAodGhpcy5jYWNoZWRDb21wYW5pZXMuaGFzT3duUHJvcGVydHkodXNlcikgJiYgdGhpcy5jYWNoZWRDb21wYW5pZXNbdXNlciBhcyBhbnldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRDb21wYW5pZXNbdXNlciBhcyBhbnldO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGVtcDogQXJyYXk8U3Vic2NyaXB0aW9uPiA9IFtdO1xuICAgICAgICBjb25zdCByZXN1bHQ6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmdldENvbXBhbmllc0ZvclVzZXIodXNlcikudG9Qcm9taXNlKCk7XG4gICAgICAgIHJlc3VsdC5zb3J0KHRoaXMuY29tcGFyZUNvbXBhbmllcykuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgdGVtcC5wdXNoKHsgc3Vic2NyaXB0aW9ua2V5OiBjLnN1YnNjcmlwdGlvbmtleSwgZGVzY3JpcHRpb246IGMuZGVzY3JpcHRpb24sIHN0YXR1czogYy5zdGF0dXMsIGluc3RhbmNla2V5OiBjLmluc3RhbmNla2V5IH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVtcC5sZW5ndGggPiAwKSB0aGlzLmNhY2hlZENvbXBhbmllc1t1c2VyIGFzIGFueV0gPSB0ZW1wO1xuXG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHByaXZhdGUgY29tcGFyZUNvbXBhbmllcyhhOiBTdWJzY3JpcHRpb24sIGI6IFN1YnNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCBuYW1lQSA9IGEuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbmFtZUIgPSBiLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZ29Ub1Jlc2V0UGFzc3dvcmQoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XG4gICAgICAgIGlmICh0aGlzLmlzTWFnb1dlYikge1xuICAgICAgICAgICAgdGhpcy5zaG93UmVzZXRQYXNzd29yZE1lc3NhZ2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93UmVzZXRQYXNzd29yZE1lc3NhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLmZvcmdldFBhc3N3b3JkLCB0aGlzLmVudGVyQWNjb3VuTmFtZSwgdGhpcy5hY2NvdW50TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhc3luYyBvcGVuRGlhbG9nKFRpdGxlOiBzdHJpbmcsIE1lc3NhZ2U6IHN0cmluZywgUGxhY2VIb2xkZXI6IHN0cmluZykge1xuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgVGl0bGUsXG4gICAgICAgICAgICAgICAgTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBQbGFjZUhvbGRlcixcbiAgICAgICAgICAgICAgICBUZXh0VmFsdWU6IHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKGFzeW5jIChkYXRhOiB7IFRleHRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZGF0YS5UZXh0VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBkYXRhLlRleHRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ0luc2VyaXNjaSB1biBub21lIHV0ZW50ZSB2YWxpZG8nO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnV3JpdGUgYSB2YWxpZCBhY2NvdW50IG5hbWUnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhY2NuYW1lOiBzdHJpbmcgPSBkYXRhLlRleHRWYWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UucmVzZXRwYXNzd29yZChhY2NuYW1lKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmlcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LlJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICdDb250cm9sbGEgbGEgdHVhIGUtbWFpbCBlIHNlZ3VpIGxlIGlzdHJ1emlvbmkgcGVyIHJlaW1wb3N0YXJlIGxhIHBhc3N3b3JkLic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnQ2hlY2sgeW91ciBlbWFpbCBhbmQgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgdG8gcmVzZXQgeW91ciBwYXNzd29yZC4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSByZXN1bHQuTWVzc2FnZSArICcgKENvZGU6ICcgKyByZXN1bHQuQ29kZSArICcpLic7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaXNEcm9wRG93bkNsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMuZHJvcERvd25Jc0NsaWNrZWQgPSAhdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcbiAgICAgICAgdGhpcy5jb21ib0JveElzQ2xpY2tlZCA9IHRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XG4gICAgICAgIGlmICh0aGlzLmRyb3BEb3duSXNDbGlja2VkICYmIHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbklzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdG9nZ2xlKGRyb3Bkb3duOiBhbnkpIHtcbiAgICAgICAgdGhpcy5kcm9wRG93bklzQ2xpY2tlZCA9ICF0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xuICAgICAgICB0aGlzLmljb25Jc0NsaWNrZWQgPSB0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xuICAgICAgICB0aGlzLmRyb3Bkb3duID0gZHJvcGRvd247XG4gICAgICAgIGlmICh0aGlzLmRyb3BEb3duSXNDbGlja2VkKSB7XG4gICAgICAgICAgICBkcm9wZG93bi50b2dnbGUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkcm9wZG93bi50b2dnbGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYWx0ZXJuYXRpdmVNZXRob2RzKHR3b0ZhY3RvclR5cGU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5PTEQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuT0xEcmVzZW5kT1RQKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLCB0d29GYWN0b3JUeXBlICE9IG51bGwpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAob3BSZXM6IE9wZXJhdGlvblJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3BSZXMuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm90cEluZm8uVHdvRmFjdG9yVHlwZSA9IHR3b0ZhY3RvclR5cGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJPTEQpID0+IHsgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVzZW5kT1RQMih0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSwgdGhpcy5sb2dpblJlcXVlc3QucHJvY2Vzc0lELCB0d29GYWN0b3JUeXBlKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAob3BSZXM6IE9wZXJhdGlvblJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcFJlcy5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHBJbmZvLlR3b0ZhY3RvclR5cGUgPSB0d29GYWN0b3JUeXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyKSA9PiB7IH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnb1RvU3RvcmUoKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuYXV0aFNlcnZpY2UuZ2V0U3RvcmVVcmwoKSk7XG4gICAgfVxufVxuXG4vLyB3b3JrYXJvdW5kIGZvciBjaHJvbWl1bSBidWcgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MzUyNTI3XG5mdW5jdGlvbiB3ZWJraXRBdXRvZmlsbFdvcmthcm91bmQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDotd2Via2l0LWF1dG9maWxsJylcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoZWw6IGFueSkgPT4gKGVsLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID0gJ2stZmxvYXRpbmctbGFiZWwtY29udGFpbmVyJykpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8vIG5vIHdlYmtpdCBicm93c2VyXG4gICAgICAgIH1cbiAgICB9LCAxMDAwKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBoYXNBdXRvZmlsbCgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dDotd2Via2l0LWF1dG9maWxsJyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibG9naW4tY29udGFpbmVyXCIgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIGJhY2tncm91bmRVUkwgKyAnKScgfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJsb2dpblwiIHN0eWxlPVwiei1pbmRleDogMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgbWF0LWNhcmQtaW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwie3sgbG9nb1VSTCB9fVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhdmFsaWRhdGUgJiYgIW90cFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1hcmdpbi1oMSB0aXRsZVwiPnt7IHdlbGNvbWUgfX08L2gxPlxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaXNFeHBpcmVkU2Vzc2lvblwiIGNsYXNzPVwibG9naW4tZXhwaXJlZC1zdWJ0aXRsZSBkZXNjcmlwdGlvblwiPnt7IGlkbGVUaW1lb3V0TWVzc2FnZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgZW50ZXJDcmVkZW50aWFscyB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInZhbGlkYXRlICYmICFvdHBcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtYXJnaW4taDEgdGl0bGVcIj57eyBjaG9vc2VTdWJzY3JpcHRpb24gfX08L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBhY2NvdW50TmFtZSB9fToge3sgbG9naW5SZXF1ZXN0LmFjY291bnROYW1lIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwib3RwXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWFyZ2luLWgxIHRpdGxlXCI+e3sgb3RwVGl0bGUgfX08L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIndpZHRoOiAzNTBweFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBvdHBNZXNzYWdlIH19XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSAxXCI+c21zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gMlwiPmUtbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IDRcIj57eyBhdXRoQXBwVGV4dCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgPT09IG51bGxcIj5zbXMvZS1tYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwiYWNjb3VudE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3InIDogJ2JvcmRlci1ib3R0b20nXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxrZW5kby10ZXh0Ym94XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkFjY291bnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibG9naW5SZXF1ZXN0LmFjY291bnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cblxuICAgICAgICAgICAgICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIXZhbGlkYXRlICYmICFvdHBcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnYm9yZGVyLWJvdHRvbSdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGtlbmRvLXRleHRib3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3QucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiaGlkZSA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnZXJyb3Itc3RhdHVzJyA6ICdub3JtYWwtc3RhdGUnXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGUgPSAhaGlkZVwiICpuZ0lmPVwiaGlkZSA9PT0gdHJ1ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGUgPSAhaGlkZVwiICpuZ0lmPVwiaGlkZSA9PT0gZmFsc2VcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eV9vZmYgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAqbmdJZj1cInN1YnNjcmlwdGlvblNlbGVjdGlvbiAmJiB2YWxpZGF0ZSAmJiAhb3RwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwie3sgc3Vic2NyaXB0aW9uIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIlthdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnJywgZHJvcERvd25Jc0NsaWNrZWQgPyAnJyA6ICdib3JkZXItYm90dG9tJ11cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8a2VuZG8tZHJvcGRvd25saXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2Ryb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5Ecm9wRG93blN1YnNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImxvZ2luU3Vic2NyaXB0aW9ucz8ubGVuZ3RoIDw9IDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImxvZ2luU3Vic2NyaXB0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1YnNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpZWxkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRmllbGQ9XCJzdWJzY3JpcHRpb25rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUHJpbWl0aXZlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImtlbmRvLWRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblN1YkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiaXNEcm9wRG93bkNsaWNrZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGtlbmRvRHJvcERvd25MaXN0SXRlbVRlbXBsYXRlIGxldC1kYXRhSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5kYXRhLXN1Yj1cInt7IGRhdGFJdGVtLnN1YnNjcmlwdGlvbmtleSB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyLmRhdGEtZGVzY3JpcHRpb249XCJ7eyBkYXRhSXRlbS5kZXNjcmlwdGlvbiB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyLmRhdGEtaW5zdGFuY2U9XCJ7eyBkYXRhSXRlbS5pbnN0YW5jZWtleSB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGRhdGFJdGVtLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2tlbmRvLWRyb3Bkb3dubGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5Ecm9wRG93blN1YnNjcmlwdGlvbkFycm93VXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUoZHJvcGRvd24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImRyb3BEb3duSXNDbGlja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCBpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd19jaXJjbGVfdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5Ecm9wRG93blN1YnNjcmlwdGlvbkFycm93RG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZShkcm9wZG93bilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWRyb3BEb3duSXNDbGlja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCBpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd19jaXJjbGVfZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluc3RhbmNla2V5XCIgZGF0YS10ZXN0PVwibG9naW5QYXJhZ3JhcGhJbnN0YW5jZUtleVwiICpuZ0lmPVwibG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA+IDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJzY3JpcHRpb24ga2V5OiB7eyBsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5IH19IHt7IGluc3RhbmNla2V5IH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwiY29kZVwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA/ICdib3JkZXItYm90dG9tLWVycm9yJyA6ICdib3JkZXItYm90dG9tJ1wiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib3RwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAga2VuZG9UZXh0Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkFjY291bnROYW1lT3RwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50TmFtZU90cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJoaWRlT3RwID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3JtYWwtc3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZU90cCA9ICFoaWRlT3RwXCIgKm5nSWY9XCJoaWRlT3RwID09PSB0cnVlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHkgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZU90cCA9ICFoaWRlT3RwXCIgKm5nSWY9XCJoaWRlT3RwID09PSBmYWxzZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5X29mZiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBBbHJlZHlMb2dnZWQgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInVzZXJhbHJlYWR5bG9nZ2VkXCIgY2xhc3M9XCJsb2dpbi1pbmZvc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHdoaXRlLXNwYWNlOiBwcmUtd3JhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvZ2luLXdhcm5pbmcgZmxleC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgfX0ge3sgdXNlcmFscmVhZHlsb2dnZWRUaXRsZSB9fSB7eyB1c2VyYWxyZWFkeWxvZ2dlZE1lc3NhZ2UgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJpbmRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibG9naW5SZXF1ZXN0Lm92ZXJ3cml0ZUxvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcmFscmVhZHlsb2dnZWRBY2NlcHRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2VuZG9DaGVja0JveFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImstY2hlY2tib3gtbGFiZWxcIiBmb3I9XCJiaW5kaW5nXCI+IHt7IHVzZXJhbHJlYWR5bG9nZ2VkT0sgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tRU5EIEFscmVkeUxvZ2dlZCAtLS0tLS0tLS0tLS0tLS0tIC0tPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWluZm9zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXBzLWxvY2sgcGFuZWwgZmxleC1jZW50ZXIgbWFyZ2luLWJvdHRvbS01XCIgKm5nSWY9XCJjYXBzTG9ja09uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGJsb2NNYWl1c2MgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvZ2luLWVycm9yIHBhbmVsIGZsZXgtY2VudGVyIG1hcmdpbi1ib3R0b20tNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndoaXRlLXNwYWNlOiBwcmUtd3JhcFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWluZm8gcGFuZWwgZmxleC1jZW50ZXJcIiAqbmdJZj1cImF1dGhTZXJ2aWNlLm9rTWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyBhdXRoU2VydmljZS5va01lc3NhZ2UgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mby1yZXNldC1wYXNzd29yZCBwYW5lbCBmbGV4LWNlbnRlclwiICpuZ0lmPVwic2hvd1Jlc2V0UGFzc3dvcmRNZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IHJlc2V0UGFzc3dvcmRNZXNzYWdlIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJvdHAgJiYgIWlzTWFnb1dlYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgZmxleC1kaXJlY3Rpb246IGNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnRcIiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IFRPVFBEZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5SZXNlbmRPdHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhbHRlcm5hdGl2ZU1ldGhvZHMob3RwSW5mby5Ud29GYWN0b3JUeXBlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZU90cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgIT09IDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyByZXNlbmRPVFBMYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSAxXCI+c21zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSAyXCI+ZS1tYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib3RwSW5mby5Ud29GYWN0b3JUeXBlID09PSA0XCI+e3sgY2hvc2VuQXV0aEFwcCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSA9PT0gbnVsbFwiPnNtcy9lLW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taGVhZGVyXCIgKm5nSWY9XCJvdHBJbmZvLlRPVFBDb25maWd1cmVkIHx8IG90cEluZm8uTW9iaWxlUGhvbmVOcjsgZWxzZSBvbmx5T25lTWV0aG9kQ29uZmlndXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luOiAxMHB4IDA7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMDA1ODkwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIob3RwSW5mby5FbWFpbCAmJiBvdHBJbmZvLlRPVFBDb25maWd1cmVkKSB8fCBvdHBJbmZvLk1vYmlsZVBob25lTnJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb3RwVGV4dCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm90cEluZm8uVHdvRmFjdG9yVHlwZSAhPT0gMSAmJiBvdHBJbmZvLk1vYmlsZVBob25lTnJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWx0ZXJuYXRpdmVNZXRob2RzKDEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZVNtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBvdHBSZXF1ZXN0Q29kZSB9fSBTTVM8L2FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBJbmZvLlR3b0ZhY3RvclR5cGUgIT09IDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWx0ZXJuYXRpdmVNZXRob2RzKDIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BbHRlcm5hdGl2ZVNtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBvdHBSZXF1ZXN0Q29kZSB9fSBFLW1haWw8L2FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvdHBJbmZvLlRPVFBDb25maWd1cmVkICYmIG90cEluZm8uVHdvRmFjdG9yVHlwZSAhPT0gNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhbHRlcm5hdGl2ZU1ldGhvZHMoNClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkFsdGVybmF0aXZlQXBwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IHVzZUF1dGhBcHAgfX08L2FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjb25seU9uZU1ldGhvZENvbmZpZ3VyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaW5rXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzAwNTg5MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBvbmVNZXRob2RPbmx5IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJnb1RvU3RvcmUoKVwiPiB7eyBhbHRlcm5hdGl2ZU1ldGhvZCB9fSA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm90cCAmJiBpc01hZ29XZWJcIiBjbGFzcz1cImxvZ2luLWluZm9zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1pbmZvLXJlc2V0LXBhc3N3b3JkIHBhbmVsIGZsZXgtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IG90cFJlc2V0VGV4dE1hZ29XZWIgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDAgMXB4OyBtYXJnaW4tdG9wOiA2MHB4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBkYXRhLXRlc3Q9XCJsb2dpbkJ1dHRvblwiIGNsYXNzPVwiYnV0dG9ucyBsb2dpbi1idXR0b25cIiAoY2xpY2spPVwibG9naW4oKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZEJ1dHRvbigpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtdGVzdD1cImxvZ2luTG9hZGluZ0J1dHRvblwiIGNsYXNzPVwiay1pY29uIGstaS1sb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFsb2FkaW5nXCI+e3sgYnV0dG9uVGV4dCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgKm5nSWY9XCIoIWxvYWRpbmcgJiYgdmFsaWRhdGUpIHx8IG90cFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gZGF0YS10ZXN0PVwibG9naW5CYWNrQnV0dG9uXCIgY2xhc3M9XCJidXR0b25zIGJhY2stYnV0dG9uXCIgKGNsaWNrKT1cImJhY2soKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgYnV0dG9uQmFjayB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dTaWduVXBcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNpZ251cFwiIGRhdGEtdGVzdD1cImxvZ2luU2lnblVwXCIgKGNsaWNrKT1cIm5ld1VzZXIoKVwiPlNpZ25VcCBoZXJlITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBtYXJnaW4tdG9wOiAxMHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcmdvdHB3ZFwiIGRhdGEtdGVzdD1cImxvZ2luRm9yZ290UGFzc3dvcmRcIiAoY2xpY2spPVwiZ29Ub1Jlc2V0UGFzc3dvcmQoKVwiPlxuICAgICAgICAgICAgICAgIDxhPnt7IGZvcmdldFBhc3N3b3JkIH19PC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIm90cCAmJiAhaXNNYWdvV2ViXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBtYXJnaW4tdG9wOiAxMHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcmdvdHB3ZFwiIGRhdGEtdGVzdD1cImxvZ2luTWFuYWdlTWV0aG9kc1wiPlxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJnb1RvU3RvcmUoKVwiPnt7IG1hbmFnZU1ldGhvZHMgfX08L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMDsgd2lkdGg6IDEwMCU7IHotaW5kZXg6IDBcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJjb3B5cmlnaHQgY29weXJpZ2h0LWFic1wiPkxvZ2luIHt7IGxpYl92ZXJzaW9uIH19IDIwMTcgLSB7eyBjdXJyZW50WWVhciB9fSwgWnVjY2hldHRpIHMucC5hLjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19