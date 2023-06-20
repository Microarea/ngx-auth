import { LoginRequest } from '../models/login-request';
import { StorageVars } from '../models/storage-vars';
import { ForgotPasswordComponent } from './forgot-password-dialog/forgot-password.component';
import { Component, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Strings } from '../models/Strings';
import * as i0 from "@angular/core";
import * as i1 from "../auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@progress/kendo-angular-label";
import * as i7 from "@progress/kendo-angular-inputs";
import * as i8 from "@progress/kendo-angular-dropdowns";
import * as i9 from "@angular/material/checkbox";
const _c0 = ["dropdown"];
function TbLoginComponent_div_5_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r16.idleTimeoutMessage);
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
function TbLoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h1", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 24);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.otpTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.otpMessage);
} }
function TbLoginComponent_kendo_floatinglabel_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 26)(1, "input", 27);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_10_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.loginRequest.accountName = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_10_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.keyUpFunction($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r3.accountName)("ngClass", ctx_r3.authService.errorMessage ? "border-bottom-error" : "border-bottom");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.loginRequest.accountName)("ngClass", ctx_r3.authService.errorMessage ? "error-status" : "normal-state");
} }
function TbLoginComponent_kendo_floatinglabel_11_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_11_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.hide = !ctx_r22.hide; });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_11_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_11_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.hide = !ctx_r24.hide; });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_11_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 28)(1, "input", 29);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_11_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.loginRequest.password = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_11_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.keyUpFunction($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, TbLoginComponent_kendo_floatinglabel_11_span_2_Template, 2, 0, "span", 30);
    i0.ɵɵtemplate(3, TbLoginComponent_kendo_floatinglabel_11_span_3_Template, 2, 0, "span", 30);
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
    const dataItem_r34 = ctx.$implicit;
    i0.ɵɵattribute("data-sub", dataItem_r34.subscriptionkey)("data-description", dataItem_r34.description)("data-instance", dataItem_r34.instancekey);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", dataItem_r34.description, " ");
} }
function TbLoginComponent_div_12_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r36); i0.ɵɵnextContext(); const _r29 = i0.ɵɵreference(3); const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.toggle(_r29); });
    i0.ɵɵtext(1, " arrow_circle_up ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r38); i0.ɵɵnextContext(); const _r29 = i0.ɵɵreference(3); const ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.toggle(_r29); });
    i0.ɵɵtext(1, " arrow_circle_down ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" Subscription key: ", ctx_r33.loginRequest.subscriptionKey, " ", ctx_r33.instancekey, " ");
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
function TbLoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "kendo-floatinglabel", 26)(2, "kendo-dropdownlist", 33, 34);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.loginRequest.subscriptionKey = $event; })("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.onSubChange($event); })("click", function TbLoginComponent_div_12_Template_kendo_dropdownlist_click_2_listener() { i0.ɵɵrestoreView(_r40); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.isDropDownClicked(); });
    i0.ɵɵtemplate(4, TbLoginComponent_div_12_ng_template_4_Template, 2, 4, "ng-template", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TbLoginComponent_div_12_span_5_Template, 2, 0, "span", 36);
    i0.ɵɵtemplate(6, TbLoginComponent_div_12_span_6_Template, 2, 0, "span", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtemplate(8, TbLoginComponent_div_12_p_8_Template, 2, 2, "p", 38);
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
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(2); return ctx_r45.hideOtp = !ctx_r45.hideOtp; });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(2); return ctx_r47.hideOtp = !ctx_r47.hideOtp; });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 26)(1, "input", 42);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_13_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.inputValue = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_13_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r51 = i0.ɵɵnextContext(); return ctx_r51.keyUpFunction($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, TbLoginComponent_kendo_floatinglabel_13_span_2_Template, 2, 0, "span", 30);
    i0.ɵɵtemplate(3, TbLoginComponent_kendo_floatinglabel_13_span_3_Template, 2, 0, "span", 30);
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
    i0.ɵɵelementStart(0, "div", 43)(1, "p", 44);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r7.blocMaiusc);
} }
function TbLoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "p", 44);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.authService.errorMessage);
} }
function TbLoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "p", 44);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.authService.okMessage);
} }
function TbLoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 47)(2, "p", 48);
    i0.ɵɵlistener("click", function TbLoginComponent_div_18_Template_p_click_2_listener() { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.authService.resendOTP(ctx_r52.loginRequest.accountName, ctx_r52.alternative); });
    i0.ɵɵelementStart(3, "u");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 49)(6, "p", 50)(7, "mat-checkbox", 51);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_div_18_Template_mat_checkbox_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.alternative = $event; });
    i0.ɵɵelementStart(8, "span", 52);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r10.resendOTPpLabel);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r10.alternative);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r10.alternativelbl);
} }
function TbLoginComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 53);
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
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "button", 54);
    i0.ɵɵlistener("click", function TbLoginComponent_div_24_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(); return ctx_r55.back(); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.buttonBack, "");
} }
function TbLoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "p", 55);
    i0.ɵɵlistener("click", function TbLoginComponent_div_26_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r58); const ctx_r57 = i0.ɵɵnextContext(); return ctx_r57.newUser(); });
    i0.ɵɵtext(2, "SignUp here!");
    i0.ɵɵelementEnd()();
} }
function TbLoginComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "p", 56);
    i0.ɵɵlistener("click", function TbLoginComponent_div_27_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r60); const ctx_r59 = i0.ɵɵnextContext(); return ctx_r59.goToForgotPassword(); });
    i0.ɵɵelementStart(2, "u");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r15.forgetPassword);
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
        this.loading = false;
        this.loginRequest = new LoginRequest();
        this.loginSubscriptions = [];
        this.hide = true;
        this.hideOtp = true;
        this.isConnected = true;
        this.inputValue = '';
        this.dropDownIsClicked = false;
        this.comboBoxIsClicked = false;
        this.iconIsClicked = false;
        this.alternative = false;
        this.currentBrowserLanguage = navigator.language.toLocaleLowerCase();
        this.languageIT = this.currentBrowserLanguage.startsWith('it');
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
            this.otpMessage = 'Prego inserire il codice OTP ricevuto via mail o SMS a seconda della modalità impostata.';
            this.otpTitle = 'Autenticazione a due fattori';
            this.resendOTPpLabel = 'Inviami un nuovo codice';
            this.alternativelbl = 'Usa metodo alternativo';
            this.code = 'Codice';
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
            this.otpMessage = 'Please insert the OTP code. Depending on the mode set, the OTP is sent either by e-mail or by SMS.';
            this.otpTitle = 'Two-Factor Authentication';
            this.resendOTPpLabel = 'Send me a new code';
            this.alternativelbl = 'Use alternative way';
            this.code = 'Code';
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
                ? 'Servizio temporaneamente non raggiungibile. Dettagli: ' + error
                : 'Service temporarily not available. Details: ' + error;
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
        if (this.otp) {
            this.loginRequest.password = this.inputValue;
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
}
/** @nocollapse */ /** @nocollapse */ TbLoginComponent.ɵfac = function TbLoginComponent_Factory(t) { return new (t || TbLoginComponent)(i0.ɵɵdirectiveInject(i1.TbAuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.MatDialog), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ /** @nocollapse */ TbLoginComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: TbLoginComponent, selectors: [["tb-login"]], viewQuery: function TbLoginComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
    } }, decls: 31, vars: 22, consts: [[1, "login-container", 3, "ngStyle"], [1, "login", 2, "z-index", "1"], [1, "login-header"], ["mat-card-image", "", 2, "width", "60%", 3, "src"], [4, "ngIf"], [1, "login-form"], [3, "text", "ngClass", 4, "ngIf"], ["text", "Password", 3, "ngClass", 4, "ngIf"], ["class", "form-control", 4, "ngIf"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-info panel flex-center", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "60px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", "data-test", "loginButton", 1, "buttons", "login-button", 3, "disabled", "click"], ["data-test", "loginLoadingButton", "class", "k-icon k-i-loading", 4, "ngIf"], ["class", "login-footer", 4, "ngIf"], [1, "login-footer"], ["style", "display: flex; margin-top: 10px; justify-content: flex-end", 4, "ngIf"], [2, "position", "absolute", "bottom", "0", "width", "100%", "z-index", "0"], [1, "copyright", "copyright-abs"], [1, "margin-h1", "title"], ["class", "login-expired-subtitle description", 4, "ngIf"], [1, "description"], [1, "login-expired-subtitle", "description"], [3, "text", "ngClass"], ["kendoTextBox", "", "data-test", "loginAccountName", "name", "accountName", "type", "text", 3, "ngModel", "ngClass", "ngModelChange", "keyup"], ["text", "Password", 3, "ngClass"], ["kendoTextBox", "", "data-test", "loginPassword", "name", "password", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "ngModelChange", "keyup"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], [1, "material-icons", "icon", 3, "click"], [1, "form-control"], ["data-test", "loginDropDownSubscription", "name", "subscription", "textField", "description", "valueField", "subscriptionkey", "valuePrimitive", "true", 1, "kendo-dropdown", 3, "disabled", "data", "ngModel", "ngModelChange", "click"], ["dropdown", ""], ["kendoDropDownListItemTemplate", ""], ["data-test", "loginDropDownSubscriptionArrowUp", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowDown", "class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["class", "instancekey", "data-test", "loginParagraphInstanceKey", 4, "ngIf"], ["data-test", "loginDropDownSubscriptionArrowUp", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginDropDownSubscriptionArrowDown", 1, "material-symbols-rounded", "icon", 3, "click"], ["data-test", "loginParagraphInstanceKey", 1, "instancekey"], ["kendoTextBox", "", "data-test", "loginAccountNameOtp", "name", "accountNameOtp", "type", "password", 1, "normal-state", 3, "ngModel", "type", "ngModelChange", "keyup"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5"], [1, "login-info", "panel", "flex-center"], [2, "display", "flex", "justify-content", "flex-end"], ["data-test", "loginResendOtp", 1, "link", 3, "click"], [2, "display", "flex", "margin-top", "10px", "justify-content", "flex-end"], [1, "link"], ["name", "alternative", 3, "ngModel", "ngModelChange"], ["translate", ""], ["data-test", "loginLoadingButton", 1, "k-icon", "k-i-loading"], ["kendoButton", "", "data-test", "loginBackButton", 1, "buttons", "back-button", 3, "click"], ["data-test", "loginSignUp", 1, "signup", 3, "click"], ["data-test", "loginForgotPassword", 1, "forgotpwd", 3, "click"]], template: function TbLoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
        i0.ɵɵelement(4, "img", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, TbLoginComponent_div_5_Template, 6, 3, "div", 4);
        i0.ɵɵtemplate(6, TbLoginComponent_div_6_Template, 5, 3, "div", 4);
        i0.ɵɵtemplate(7, TbLoginComponent_div_7_Template, 5, 2, "div", 4);
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
        i0.ɵɵtemplate(18, TbLoginComponent_div_18_Template, 10, 3, "div", 4);
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
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div", 20)(29, "p", 21);
        i0.ɵɵtext(30);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(20, _c2, "url(" + ctx.backgroundURL + ")"));
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
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("Login v2.3.1+51 2017 - ", ctx.currentYear, ", Zucchetti s.p.a.");
    } }, directives: [i4.NgStyle, i4.NgIf, i5.ɵNgNoValidate, i5.NgControlStatusGroup, i5.NgForm, i6.FloatingLabelComponent, i4.NgClass, i7.TextBoxDirective, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i8.DropDownListComponent, i8.ItemTemplateDirective, i9.MatCheckbox], styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list[_ngcontent-%COMP%]{background:#F4F4F4;color:#005890;max-height:100px;width:370px!important}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{background:#bfcdd5}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar:hover{background:#d9d9d9}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#6cafd1}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#005890}.k-list[_ngcontent-%COMP%]   .k-list-item.k-selected[_ngcontent-%COMP%]{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%]:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width: 490px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:323px!important}}@media screen and (max-width: 425px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:273px!important}}@media screen and (max-width: 375px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:217px!important}}.k-list-md[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%], .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}.k-list-item-text[_ngcontent-%COMP%]{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;line-height:20px;margin-bottom:30px}.link[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:20px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#E7481C;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#E7481C}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4AB679}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:#C0C0C0}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#E77B2D}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#FF9E18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:#808080}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9F9F9F}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4AB679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68B388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#D03C13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#E7481C}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}  .mat-dialog-container{color:#005890!important;background:white!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}  .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9F9F9F}  .mat-dialog-container .login-footer .back-button{background:#808080}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:#C0C0C0}  .mat-dialog-container .login-footer .ok-button{background:#4AB679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68B388}  .k-floating-label-container{width:100%;margin:8px 0}  .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea:focus{background-color:#fff!important}  .k-floating-label-container .k-textbox::-moz-selection,   .k-floating-label-container .k-input::-moz-selection,   .k-floating-label-container .k-textarea::-moz-selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-textbox::selection,   .k-floating-label-container .k-input::selection,   .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-picker-md .k-input-inner{background:white!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}  .k-floating-label-container .k-picker{border-width:0px;border-style:unset}  .k-floating-label-container .k-picker:focus-within{box-shadow:none}  .k-floating-label-container .k-picker:focus{box-shadow:none}  .k-floating-label-container:after{background-color:#8ee2ff;height:1px}  .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}  .k-floating-label-container .k-dropdown{border:none;background:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0B85CE}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}  html,   body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}tb-login[_nghost-%COMP%]{font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}}@media screen and (min-width: 576px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:450px}}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .upicon[_ngcontent-%COMP%]{transform:rotate(90deg);padding:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .downicon[_ngcontent-%COMP%]{transform:rotate(270deg)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .k-i-loading[_ngcontent-%COMP%]{font-size:20px}tb-login[_nghost-%COMP%]   p.instancekey[_ngcontent-%COMP%]{font-size:9px;font-weight:300;text-indent:1px;color:#005890}tb-login[_nghost-%COMP%]   p.copyright[_ngcontent-%COMP%]{font-size:10px;font-weight:300;margin:0;color:#fff}tb-login[_nghost-%COMP%]   p.copyright-abs[_ngcontent-%COMP%]{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}tb-login[_nghost-%COMP%]   p.signup[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}tb-login[_nghost-%COMP%]   .margin-h1[_ngcontent-%COMP%]{margin-left:-2px;margin-top:20px}tb-login[_nghost-%COMP%]   .margin-p[_ngcontent-%COMP%]{margin-left:-1.5px;margin-top:-10px}tb-login[_nghost-%COMP%]   .login-expired-subtitle[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}tb-login[_nghost-%COMP%]   .login-chooseSubscription[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-size:x-large}}tb-login[_nghost-%COMP%]     .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, tb-login[_nghost-%COMP%]   .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#005890}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLoginComponent, [{
        type: Component,
        args: [{ selector: 'tb-login', template: "<div class=\"login-container\" [ngStyle]=\"{ 'background-image': 'url(' + backgroundURL + ')' }\">\r\n    <div class=\"login\" style=\"z-index: 1\">\r\n        <div class=\"login-header\">\r\n            <div>\r\n                <img mat-card-image style=\"width: 60%\" src=\"{{ logoURL }}\" />\r\n            </div>\r\n            <div *ngIf=\"!validate && !otp\">\r\n                <h1 class=\"margin-h1 title\">{{ welcome }}</h1>\r\n                <p *ngIf=\"isExpiredSession\" class=\"login-expired-subtitle description\">{{ idleTimeoutMessage }}</p>\r\n                <p class=\"description\">{{ enterCredentials }}</p>\r\n            </div>\r\n            <div *ngIf=\"validate && !otp\">\r\n                <h1 class=\"margin-h1 title\">{{ chooseSubscription }}</h1>\r\n                <p class=\"description\">{{ accountName }}: {{ loginRequest.accountName }}</p>\r\n            </div>\r\n            <div *ngIf=\"otp\">\r\n                <h1 class=\"margin-h1 title\">{{ otpTitle }}</h1>\r\n                <p class=\"description\">{{ otpMessage }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <form>\r\n            <div class=\"login-form\">\r\n                <kendo-floatinglabel\r\n                    [text]=\"accountName\"\r\n                    *ngIf=\"!validate && !otp\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        data-test=\"loginAccountName\"\r\n                        [(ngModel)]=\"loginRequest.accountName\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"accountName\"\r\n                        type=\"text\"\r\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n                    />\r\n                </kendo-floatinglabel>\r\n\r\n                <kendo-floatinglabel\r\n                    text=\"Password\"\r\n                    *ngIf=\"!validate && !otp\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        data-test=\"loginPassword\"\r\n                        [(ngModel)]=\"loginRequest.password\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"password\"\r\n                        [type]=\"hide ? 'password' : 'text'\"\r\n                        autocomplete=\"current-password\"\r\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n                    />\r\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === true\" class=\"material-icons icon\"> visibility </span>\r\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === false\" class=\"material-icons icon\"> visibility_off </span>\r\n                </kendo-floatinglabel>\r\n\r\n                <div class=\"form-control\" *ngIf=\"subscriptionSelection && validate && !otp\">\r\n                    <kendo-floatinglabel\r\n                        text=\"{{ subscription }}\"\r\n                        [ngClass]=\"[authService.errorMessage ? 'border-bottom-error' : '', dropDownIsClicked ? '' : 'border-bottom']\"\r\n                    >\r\n                        <kendo-dropdownlist\r\n                            #dropdown\r\n                            data-test=\"loginDropDownSubscription\"\r\n                            [disabled]=\"loginSubscriptions?.length <= 1\"\r\n                            [data]=\"loginSubscriptions\"\r\n                            name=\"subscription\"\r\n                            textField=\"description\"\r\n                            valueField=\"subscriptionkey\"\r\n                            valuePrimitive=\"true\"\r\n                            [(ngModel)]=\"loginRequest.subscriptionKey\"\r\n                            class=\"kendo-dropdown\"\r\n                            (ngModelChange)=\"onSubChange($event)\"\r\n                            (click)=\"isDropDownClicked()\"\r\n                        >\r\n                            <ng-template kendoDropDownListItemTemplate let-dataItem>\r\n                                <div\r\n                                    attr.data-sub=\"{{ dataItem.subscriptionkey }}\"\r\n                                    attr.data-description=\"{{ dataItem.description }}\"\r\n                                    attr.data-instance=\"{{ dataItem.instancekey }}\"\r\n                                >\r\n                                    {{ dataItem.description }}\r\n                                </div>\r\n                            </ng-template>\r\n                        </kendo-dropdownlist>\r\n                        <span\r\n                            data-test=\"loginDropDownSubscriptionArrowUp\"\r\n                            (click)=\"toggle(dropdown)\"\r\n                            *ngIf=\"dropDownIsClicked\"\r\n                            class=\"material-symbols-rounded icon\"\r\n                        >\r\n                            arrow_circle_up\r\n                        </span>\r\n                        <span\r\n                            data-test=\"loginDropDownSubscriptionArrowDown\"\r\n                            (click)=\"toggle(dropdown)\"\r\n                            *ngIf=\"!dropDownIsClicked\"\r\n                            class=\"material-symbols-rounded icon\"\r\n                        >\r\n                            arrow_circle_down\r\n                        </span>\r\n                    </kendo-floatinglabel>\r\n                    <div>\r\n                        <p class=\"instancekey\" data-test=\"loginParagraphInstanceKey\" *ngIf=\"loginSubscriptions.length > 3\">\r\n                            Subscription key: {{ loginRequest.subscriptionKey }} {{ instancekey }}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <kendo-floatinglabel\r\n                    [text]=\"code\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                    *ngIf=\"otp\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        data-test=\"loginAccountNameOtp\"\r\n                        [(ngModel)]=\"inputValue\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"accountNameOtp\"\r\n                        [type]=\"hideOtp ? 'password' : 'text'\"\r\n                        type=\"password\"\r\n                        class=\"normal-state\"\r\n                    />\r\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === true\" class=\"material-icons icon\"> visibility </span>\r\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === false\" class=\"material-icons icon\"> visibility_off </span>\r\n                </kendo-floatinglabel>\r\n\r\n                <div class=\"login-infos\">\r\n                    <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\r\n                        <p class=\"no-margin\">{{ blocMaiusc }}</p>\r\n                    </div>\r\n                    <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"authService.errorMessage\">\r\n                        <p class=\"no-margin\">{{ authService.errorMessage }}</p>\r\n                    </div>\r\n                    <div class=\"login-info panel flex-center\" *ngIf=\"authService.okMessage\">\r\n                        <p class=\"no-margin\">{{ authService.okMessage }}</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"otp\">\r\n                    <div style=\"display: flex; justify-content: flex-end\">\r\n                        <p class=\"link\" data-test=\"loginResendOtp\" (click)=\"authService.resendOTP(loginRequest.accountName, alternative)\">\r\n                            <u>{{ resendOTPpLabel }}</u>\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\r\n                        <p class=\"link\">\r\n                            <mat-checkbox [(ngModel)]=\"alternative\" name=\"alternative\">\r\n                                <span translate>{{ alternativelbl }}</span>\r\n                            </mat-checkbox>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 60px\">\r\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n                <button kendoButton data-test=\"loginButton\" class=\"buttons login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\r\n                    <span data-test=\"loginLoadingButton\" class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\r\n                    <span *ngIf=\"!loading\">{{ buttonText }}</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"login-footer\" *ngIf=\"(!loading && validate) || otp\">\r\n                <button kendoButton data-test=\"loginBackButton\" class=\"buttons back-button\" (click)=\"back()\">\r\n                    <span> {{ buttonBack }}</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <div *ngIf=\"showSignUp\">\r\n                <p class=\"signup\" data-test=\"loginSignUp\" (click)=\"newUser()\">SignUp here!</p>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!validate && !otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\r\n            <p class=\"forgotpwd\" data-test=\"loginForgotPassword\" (click)=\"goToForgotPassword()\">\r\n                <u>{{ forgetPassword }}</u>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div style=\"position: absolute; bottom: 0; width: 100%; z-index: 0\">\r\n        <p class=\"copyright copyright-abs\">Login v2.3.1+51 2017 - {{ currentYear }}, Zucchetti s.p.a.</p>\r\n    </div>\r\n</div>\r\n", styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list{background:#F4F4F4;color:#005890;max-height:100px;width:370px!important}.k-list ::-webkit-scrollbar{background:#bfcdd5}.k-list ::-webkit-scrollbar:hover{background:#d9d9d9}.k-list ::-webkit-scrollbar-thumb{background:#6cafd1}.k-list ::-webkit-scrollbar-thumb:hover{background:#005890}.k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}.kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width: 490px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}.kendo-dropdown{width:323px!important}}@media screen and (max-width: 425px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}.kendo-dropdown{width:273px!important}}@media screen and (max-width: 375px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}.kendo-dropdown{width:217px!important}}.k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}.k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;line-height:20px;margin-bottom:30px}.link{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}.border-bottom{border-bottom:1px solid #0B85CE}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:rgba(0,0,0,.32)}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:20px 0}.login-infos .caps-lock{background:#E7481C;display:flex;align-items:center}.login-infos .login-error{background:#E7481C}.login-infos .login-info{background:#4AB679}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:#C0C0C0}.login-footer .login-button{background:#E77B2D}.login-footer .login-button:hover:enabled{background:#FF9E18}.login-footer .back-button{background:#808080}.login-footer .back-button:hover:enabled{background:#9F9F9F}.login-footer .ok-button{background:#4AB679}.login-footer .ok-button:hover:enabled{background:#68B388}.login-footer .error-button{background:#D03C13}.login-footer .error-button:hover:enabled{background:#E7481C}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}::ng-deep .mat-dialog-container{color:#005890!important;background:white!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;line-height:20px;margin-bottom:30px}::ng-deep .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9F9F9F}::ng-deep .mat-dialog-container .login-footer .back-button{background:#808080}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:#C0C0C0}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4AB679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68B388}::ng-deep .k-floating-label-container{width:100%;margin:8px 0}::ng-deep .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea:focus{background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox::-moz-selection,::ng-deep .k-floating-label-container .k-input::-moz-selection,::ng-deep .k-floating-label-container .k-textarea::-moz-selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-textbox::selection,::ng-deep .k-floating-label-container .k-input::selection,::ng-deep .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-picker-md .k-input-inner{background:white!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}::ng-deep .k-floating-label-container .k-picker{border-width:0px;border-style:unset}::ng-deep .k-floating-label-container .k-picker:focus-within{box-shadow:none}::ng-deep .k-floating-label-container .k-picker:focus{box-shadow:none}::ng-deep .k-floating-label-container:after{background-color:#8ee2ff;height:1px}::ng-deep .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}::ng-deep .k-floating-label-container .k-dropdown{border:none;background:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0B85CE}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}::ng-deep html,::ng-deep body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}:host(tb-login){font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}:host(tb-login) .login-container{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-size:cover;background-repeat:no-repeat}:host(tb-login) .login-container .login{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){:host(tb-login) .login-container .login{padding:20px}}@media screen and (min-width: 576px){:host(tb-login) .login-container .login{max-width:450px}}:host(tb-login) .login-container .login .upicon{transform:rotate(90deg);padding:1px}:host(tb-login) .login-container .login .downicon{transform:rotate(270deg)}:host(tb-login) .login-container .login .login-header{display:flex;flex-direction:column}:host(tb-login) .login-container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:0}:host(tb-login) .login-container .login .k-i-loading{font-size:20px}:host(tb-login) p.instancekey{font-size:9px;font-weight:300;text-indent:1px;color:#005890}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) p.forgotpwd{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}:host(tb-login) p.signup{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}:host(tb-login) .margin-h1{margin-left:-2px;margin-top:20px}:host(tb-login) .margin-p{margin-left:-1.5px;margin-top:-10px}:host(tb-login) .login-expired-subtitle{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}:host(tb-login) .login-chooseSubscription{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}:host(tb-login) .login-sign-in{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){:host(tb-login) .login{padding:20px}:host(tb-login) .login .login-form ::ng-deep .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){:host(tb-login) .login-sign-in{font-size:x-large}}:host(tb-login) ::ng-deep .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host(tb-login) .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#005890}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL3BhZ2VzL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNENUIsNkJBQXVFO0lBQUEsWUFBd0I7SUFBQSxpQkFBSTs7O0lBQTVCLGVBQXdCO0lBQXhCLGdEQUF3Qjs7O0lBRm5HLDJCQUErQixhQUFBO0lBQ0MsWUFBYTtJQUFBLGlCQUFLO0lBQzlDLG9FQUFtRztJQUNuRyw2QkFBdUI7SUFBQSxZQUFzQjtJQUFBLGlCQUFJLEVBQUE7OztJQUZyQixlQUFhO0lBQWIsb0NBQWE7SUFDckMsZUFBc0I7SUFBdEIsOENBQXNCO0lBQ0gsZUFBc0I7SUFBdEIsNkNBQXNCOzs7SUFFakQsMkJBQThCLGFBQUE7SUFDRSxZQUF3QjtJQUFBLGlCQUFLO0lBQ3pELDZCQUF1QjtJQUFBLFlBQWlEO0lBQUEsaUJBQUksRUFBQTs7O0lBRGhELGVBQXdCO0lBQXhCLCtDQUF3QjtJQUM3QixlQUFpRDtJQUFqRCx3RkFBaUQ7OztJQUU1RSwyQkFB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TCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDYixDQUFDO0FBRUQsOEVBQThFO0FBQzlFLFNBQVMsV0FBVztJQUNoQixJQUFJO1FBQ0EsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQzdEO0lBQUMsTUFBTTtRQUNKLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDVUNhbGVuZGFySm9iLCBMb2dpblJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL21vZGVscy9zdWJzY3JpcHRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vZm9yZ290LXBhc3N3b3JkLWRpYWxvZy9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlckNvbnRlbnRJbml0LCBJbmplY3QsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU3RyaW5ncyB9IGZyb20gJy4uL21vZGVscy9TdHJpbmdzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0Yi1sb2dpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjbGFzcyBUYkxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICBwcml2YXRlIGNhY2hlZENvbXBhbmllczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAgIGNhcHNMb2NrT24gPSBmYWxzZTtcclxuICAgIHZhbGlkYXRlID0gZmFsc2U7XHJcbiAgICBvdHAgPSBmYWxzZTtcclxuICAgIGxvYWRpbmcgPSBmYWxzZTtcclxuICAgIGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0ID0gbmV3IExvZ2luUmVxdWVzdCgpO1xyXG4gICAgcmVkaXJlY3RVcmw6IHN0cmluZztcclxuICAgIGJ1dHRvblRleHQ6IHN0cmluZztcclxuICAgIG5leHRUZXh0OiBzdHJpbmc7XHJcbiAgICBsb2dpblRleHQ6IHN0cmluZztcclxuICAgIGN1cnJlbnRZZWFyOiBzdHJpbmc7XHJcbiAgICBjcmVhdGVBY2NvdW50VXJsOiBzdHJpbmc7XHJcbiAgICBjaGFuZ2VQYXNzd29yZFVybDogc3RyaW5nO1xyXG4gICAgc3Vic2NyaXB0aW9uU2VsZWN0aW9uOiBib29sZWFuOyAvLyBhYmlsaXRhIGxhIHNjZWx0YSBkZWxsYSBzdWJzY3JpcHRpb25cclxuICAgIHNob3dTaWduVXA6IGJvb2xlYW47IC8vIGFiaWxpdGEgbGEgcG9zc2liaWxpdMOgIGRpIHJlZ2lzdHJhcmUgbnVvdm8gYWNjb3VudFxyXG4gICAgbG9naW5TdWJzY3JpcHRpb25zOiBBcnJheTx7IGRlc2NyaXB0aW9uOiBzdHJpbmc7IHN1YnNjcmlwdGlvbmtleTogc3RyaW5nOyBzdGF0dXM6IG51bWJlcjsgaW5zdGFuY2VrZXk6IHN0cmluZyB9PiA9IFtdO1xyXG4gICAgbG9nb1VSTDogc3RyaW5nO1xyXG4gICAgYmFja2dyb3VuZFVSTDogc3RyaW5nO1xyXG4gICAgaGlkZSA9IHRydWU7XHJcbiAgICBoaWRlT3RwID0gdHJ1ZTtcclxuICAgIGluc3RhbmNla2V5OiBzdHJpbmc7XHJcbiAgICBpc0Nvbm5lY3RlZCA9IHRydWU7XHJcbiAgICBwdWJsaWMgZG9jdW1lbnQ/OiBEb2N1bWVudDtcclxuICAgIC8vIHRlc3RpIGluIGl0YWxpYW5vIGVkIGluZ2xlc2VcclxuICAgIGNob29zZVN1YnNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgZ29vZEpvYjogc3RyaW5nO1xyXG4gICAgc3Vic2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBpbnN0YW5jZTogc3RyaW5nO1xyXG4gICAgYnV0dG9uQmFjazogc3RyaW5nO1xyXG4gICAgYWNjb3VudE5hbWU6IHN0cmluZztcclxuICAgIGVudGVyQWNjb3VuTmFtZTogc3RyaW5nO1xyXG4gICAgd2VsY29tZTogc3RyaW5nO1xyXG4gICAgZW50ZXJDcmVkZW50aWFsczogc3RyaW5nO1xyXG4gICAgZm9yZ2V0UGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGJsb2NNYWl1c2M6IHN0cmluZztcclxuICAgIGlkbGVUaW1lb3V0TWVzc2FnZTogc3RyaW5nO1xyXG4gICAgb3RwTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgb3RwVGl0bGU6IHN0cmluZztcclxuICAgIHJlc2VuZE9UUHBMYWJlbDogc3RyaW5nO1xyXG4gICAgYWx0ZXJuYXRpdmVsYmw6IHN0cmluZztcclxuICAgIGNvZGU6IHN0cmluZztcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gICAgZHJvcERvd25Jc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgIGNvbWJvQm94SXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICBpY29uSXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICBhbHRlcm5hdGl2ZSA9IGZhbHNlO1xyXG4gICAgQFZpZXdDaGlsZCgnZHJvcGRvd24nKSBkcm9wZG93bjogYW55O1xyXG4gICAgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgbGFuZ3VhZ2VJVCA9IHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpO1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jPzogYW55XHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ2NsaWNrJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbWJvQm94SXNDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvQm94SXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pY29uSXNDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb25Jc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRyb3Bkb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BEb3duSXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRvY3VtZW50ID0gZG9jIGFzIERvY3VtZW50O1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb25uZWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYXBwSWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFwcElkKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gPSBhdXRoU2VydmljZS5oYXNTdWJzY3JpcHRpb25TZWxlY3Rpb24oKTtcclxuICAgICAgICB0aGlzLnNob3dTaWduVXAgPSBhdXRoU2VydmljZS5zaG93U2lnblVwKCk7XHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdFVybCA9IGF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVBY2NvdW50VXJsID0gYXV0aFNlcnZpY2UuZ2V0Q3JlYXRlQWNjb3VudFVybCgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmRVcmwgPSBhdXRoU2VydmljZS5nZXRDaGFuZ2VQYXNzd29yZFVybCgpO1xyXG4gICAgICAgIHRoaXMubG9nb1VSTCA9IGF1dGhTZXJ2aWNlLmdldExvZ29VUkwoKTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRVUkwgPSBhdXRoU2VydmljZS5nZXRCYWNrZ3JvdW5kVVJMKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZWtleSA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VGV4dCA9ICdhdmFudGknO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luVGV4dCA9ICdhY2NlZGknO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFRleHQgPSAnbmV4dCc7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5UZXh0ID0gJ2xvZ2luJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSB8fCAhdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gPyB0aGlzLmxvZ2luVGV4dCA6IHRoaXMubmV4dFRleHQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaG9vc2VTdWJzY3JpcHRpb24gPSAnU2NlZ2xpIGxhIHR1YSBzb3R0b3Njcml6aW9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZ29vZEpvYiA9ICdCdW9uIGxhdm9ybyEnO1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9ICdTb3R0b3Njcml6aW9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSAnSXN0YW56YSc7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmFjayA9ICc8IElORElFVFJPJztcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50TmFtZSA9ICdOb21lIHV0ZW50ZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJBY2NvdW5OYW1lID0gJ0luc2VyaXNjaSBpbCB0dW8gbm9tZSB1dGVudGUgZSB0aSBpbnZpZXJlbW8gdW5hIG51b3ZhIHBhc3N3b3JkJztcclxuICAgICAgICAgICAgdGhpcy53ZWxjb21lID0gJ0JlbnZlbnV0byBzdSAnKyBhdXRoU2VydmljZS5nZXRCcmFuZE5hbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5lbnRlckNyZWRlbnRpYWxzID0gJ0F1dGVudGljYXRpIGluc2VyZW5kbyBub21lIHV0ZW50ZSBlIHBhc3N3b3JkLic7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmQgPSAnSGFpIGRpbWVudGljYXRvIGxhIHBhc3N3b3JkID8nO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NNYWl1c2MgPSAnQmxvY2NvIG1haXVzY29sZSBhdHRpdm8nO1xyXG4gICAgICAgICAgICB0aGlzLmlkbGVUaW1lb3V0TWVzc2FnZSA9ICdMYSB0dWEgc2Vzc2lvbmUgw6ggdGVybWluYXRhIHBlciBpbmF0dGl2aXTDoCwgcHVvaSByaXByZW5kZXJlIGRhIHF1aS4nO1xyXG4gICAgICAgICAgICB0aGlzLm90cE1lc3NhZ2UgPSAnUHJlZ28gaW5zZXJpcmUgaWwgY29kaWNlIE9UUCByaWNldnV0byB2aWEgbWFpbCBvIFNNUyBhIHNlY29uZGEgZGVsbGEgbW9kYWxpdMOgIGltcG9zdGF0YS4nO1xyXG4gICAgICAgICAgICB0aGlzLm90cFRpdGxlID0gJ0F1dGVudGljYXppb25lIGEgZHVlIGZhdHRvcmknO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2VuZE9UUHBMYWJlbCA9ICdJbnZpYW1pIHVuIG51b3ZvIGNvZGljZSc7XHJcbiAgICAgICAgICAgIHRoaXMuYWx0ZXJuYXRpdmVsYmwgPSAnVXNhIG1ldG9kbyBhbHRlcm5hdGl2byc7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZSA9ICdDb2RpY2UnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlU3Vic2NyaXB0aW9uID0gJ0Nob29zZSB5b3VyIHN1YnNjcmlwdGlvbic7XHJcbiAgICAgICAgICAgIHRoaXMuZ29vZEpvYiA9ICdHb29kIGpvYiEnO1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9ICdTdWJzY3JpcHRpb24nO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gJ0luc3RhbmNlJztcclxuICAgICAgICAgICAgdGhpcy5idXR0b25CYWNrID0gJzwgQkFDSyc7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudE5hbWUgPSAnQWNjb3VudCBuYW1lJztcclxuICAgICAgICAgICAgdGhpcy5lbnRlckFjY291bk5hbWUgPSAnRW50ZXIgeW91ciBhY2NvdW50IG5hbWUgYW5kIHdlIHdpbGwgc2VuZCB5b3UgYSBuZXcgcGFzc3dvcmQnO1xyXG4gICAgICAgICAgICB0aGlzLndlbGNvbWUgPSAnV2VsY29tZSB0byAnICsgYXV0aFNlcnZpY2UuZ2V0QnJhbmROYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJDcmVkZW50aWFscyA9ICdBdXRoZW50aWNhdGUgeW91cnNlbGYgYnkgZW50ZXJpbmcgeW91ciBhY2NvdW50IG5hbWUgYW5kIHBhc3N3b3JkLic7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmQgPSAnRm9yZ290IHlvdXIgcGFzc3dvcmQgPyc7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY01haXVzYyA9ICdDYXBzIGxvY2sgb24nO1xyXG4gICAgICAgICAgICB0aGlzLmlkbGVUaW1lb3V0TWVzc2FnZSA9ICdZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQgZHVlIHRvIGluYWN0aXZpdHksIHlvdSBjYW4gcmVzdW1lIGZyb20gaGVyZS4nO1xyXG4gICAgICAgICAgICB0aGlzLm90cE1lc3NhZ2UgPSAnUGxlYXNlIGluc2VydCB0aGUgT1RQIGNvZGUuIERlcGVuZGluZyBvbiB0aGUgbW9kZSBzZXQsIHRoZSBPVFAgaXMgc2VudCBlaXRoZXIgYnkgZS1tYWlsIG9yIGJ5IFNNUy4nO1xyXG4gICAgICAgICAgICB0aGlzLm90cFRpdGxlID0gJ1R3by1GYWN0b3IgQXV0aGVudGljYXRpb24nO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2VuZE9UUHBMYWJlbCA9ICdTZW5kIG1lIGEgbmV3IGNvZGUnO1xyXG4gICAgICAgICAgICB0aGlzLmFsdGVybmF0aXZlbGJsID0gJ1VzZSBhbHRlcm5hdGl2ZSB3YXknO1xyXG4gICAgICAgICAgICB0aGlzLmNvZGUgPSAnQ29kZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF1dGhTZXJ2aWNlLnJlTG9naW5BZnRlck9UUC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLydsb2dpbiBzdWJzY3JpYmVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAgLy8gUFJPVkEgUEVSIEFQRVJUVVJBIERJQUxPRyBESSBOT1RJRklDQSBBR0dJT1JOQU1FTlRPXHJcbiAgICAvLyAgYXN5bmMgb3BlbkRpYWxvZygpIHtcclxuICAgIC8vICAgY29uc3QgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0RPTlRTSE9XVVBEQVRFV0FSTicpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzX3RyYW5zbGF0aW9uID0gbmV3ICBTdHJpbmdzKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzX3RyYW5zbGF0aW9uLmdldFVwZGF0ZU1lc3NhZ2UodGhpcy5hdXRoU2VydmljZSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3ViJywgXCJzdWIgeFwiKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQGRhdGUnLCBcInRoaXMgZGF0ZVwiKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN0YXJ0aCcsXCJzdGFydCBob3VyXCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAZW5kaCcsXCJlbmQgaG91clwiICk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vbiBtb3N0cm8gc2UgbWkgaGFubm8gZGV0dG8gZGkgbm9uIG1vc3RyYXJlIHBpdS5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSBtZXNzYWdlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub3BlblVwZGF0ZUFsZXJ0RGlhbG9nKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlVGl0bGUoKSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlRG9udFNob3dNZXNzYWdlKCksXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO31cclxuICAgIC8vICB9XHJcbiAgICAvLyBQUk9WQSBQRVIgQVBFUlRVUkEgRElBTE9HIERJIE5PVElGSUNBIEFHR0lPUk5BTUVOVE9cclxuXHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2FkTG9naW5EYXRhKCk7XHJcbiAgICAgICAgd2Via2l0QXV0b2ZpbGxXb3JrYXJvdW5kKCk7XHJcbiAgICAgICAgLy90ZXN0OiB0aGlzLm9wZW5EaWFsb2coKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5jaGVja0Nvbm5lY3Rpb24oKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgLy8gc2UgbWkgYXJyaXZhIHVuIGVycm9yZSBtb3N0cm8gcXVlbGxvIGFsdHJpbWVudGkgc29sbyBsIHVybCBjaGUgbG8gaGEgZGF0b1xyXG4gICAgICAgICAgICBsZXQgZXJyb3IgPSB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZTtcclxuICAgICAgICAgICAgaWYgKGVycm9yLmxlbmd0aCA9PT0gMCkgZXJyb3IgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEJhc2VVcmwoKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlSVRcclxuICAgICAgICAgICAgICAgID8gJ1NlcnZpemlvIHRlbXBvcmFuZWFtZW50ZSBub24gcmFnZ2l1bmdpYmlsZS4gRGV0dGFnbGk6ICcgKyBlcnJvclxyXG4gICAgICAgICAgICAgICAgOiAnU2VydmljZSB0ZW1wb3JhcmlseSBub3QgYXZhaWxhYmxlLiBEZXRhaWxzOiAnICsgZXJyb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBvblN1YkNoYW5nZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgY29uc3Qgc2QgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5maW5kKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSA9PT0gbmV3VmFsdWUpO1xyXG4gICAgICAgIGlmIChzZCAmJiBzZC5pbnN0YW5jZWtleSkgdGhpcy5pbnN0YW5jZWtleSA9IGAke3RoaXMuaW5zdGFuY2V9OiAke3NkLmluc3RhbmNla2V5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBrZXlVcEZ1bmN0aW9uKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWRCdXR0b24oKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhcHNPbiA9IGV2ZW50LmdldE1vZGlmaWVyU3RhdGUgJiYgZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSgnQ2Fwc0xvY2snKTtcclxuICAgICAgICB0aGlzLmNhcHNMb2NrT24gPSBjYXBzT247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBkaXNhYmxlZEJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAoaGFzQXV0b2ZpbGwoKSAmJlxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLmlzQ29ubmVjdGVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uICYmIHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnZhbGlkYXRlKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm90cCAmJiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoICE9PSA2KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZykpIHx8XHJcbiAgICAgICAgICAgICghaGFzQXV0b2ZpbGwoKSAmJlxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLmlzQ29ubmVjdGVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMubG9naW5SZXF1ZXN0LnBhc3N3b3JkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uICYmIHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnZhbGlkYXRlKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm90cCAmJiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoICE9PSA2KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldCBpc0V4cGlyZWRTZXNzaW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVkU2Vzc2lvbicpID09PSAndHJ1ZSc7XHJcbiAgICB9XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIG5ld1VzZXIoKSB7XHJcbiAgICAgICAgLy8gcmltYW5kYSBhbGxhIHBhZ2luYSAocHJlc3VtaWJpbG1lbnRlIGRlbGxvIHN0b3JlKSBkb3ZlICBzYXLDoCBwb3NzaWJpbGUgY3JlYXJlIHVuIG51b3ZvIGFjY291bnQuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY3JlYXRlQWNjb3VudFVybF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgYmFjaygpIHtcclxuICAgICAgICAvLyByaXB1bGlzY28gdHV0dG8uLi5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QudG9rZW4gPSAnJztcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gJyc7XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy5uZXh0VGV4dDtcclxuICAgICAgICB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLm90cCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbG9naW4gcmVxdWVzdGVkJyk7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2F2ZUxvZ2luRGF0YSgpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2V4cGlyZWRTZXNzaW9uJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm90cCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9IHRoaXMuaW5wdXRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlICYmIHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gJ01DbG91ZFByZUxvZ2luJztcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NhbGxpbmcgcHJlbG9naW4gJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDEgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnByZWxvZ2luKHRoaXMubG9naW5SZXF1ZXN0KS5jYXRjaCgoZXJyMSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVycjEuZXJyb3IgJiYgZXJyMS5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMudmFsaWRhdGUgPyB0aGlzLmxvZ2luVGV4dCA6IHRoaXMubmV4dFRleHQ7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmkgc2lhIGxvZ2luIHNpYSBjaGVja2RiXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQxICYmIHJlc3VsdDEuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm90cCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wYW5pZXNGb3JVc2VyKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm90cCAmJiByZXN1bHQxICYmIHJlc3VsdDEuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm90cCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vdHAgJiYgcmVzdWx0MSAmJiAhcmVzdWx0MS5SZXN1bHQgJiYgcmVzdWx0MS5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gdGhpcy5sYW5ndWFnZUlUID8gJ0NvZGljZSBub24gdmFsaWRvJyA6ICdJbnZhbGlkIGNvZGUnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXBwSWQoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2FsbGluZyBsb2dpbiAnKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLmxvZ2luUmVxdWVzdCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSA/IHRoaXMubG9naW5UZXh0IDogdGhpcy5uZXh0VGV4dDtcclxuICAgICAgICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaSBzaWEgbG9naW4gc2lhIGNoZWNrZGJcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZCA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmZpbmQoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5ID09PSB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZCAvKiYmIHNkLnN0YXR1cyovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBzY2hlZHVsZWQgPSAoc2Quc3RhdHVzICYgRW50aXR5U3RhdHVzLlVwZGF0ZVNjaGVkdWxlZCkgPT09IEVudGl0eVN0YXR1cy5VcGRhdGVTY2hlZHVsZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoc2NoZWR1bGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbm9uIGNvbnRyb2xsbyBwaXUsIGNoaWFtZXJvJyBzZW1wcmUgbCcgYXBpIGNoZSBmYXJhJyB0dXR0aSBpIGNvbnRyb2xsaSBkZWwgY2FzbyBpbiBtb2RvIGRhIHNnYW5jaWFyZSBsYSBsaWJyYXJpIGRhIGxvZ2ljaGUgY2hlIHBvdHJlYmJlcm8gY2FtYmlhcmUuXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZSBsYSBzdWIgbm9uIGhhIGxvIHN0YXRvIGltcG9zdGF0byAgbm9uIGNlcmNvIG5lbW1lbm8gcmlzcGFybWlhbmRvbWkgdW5hIGNoaWFtYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDEgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmdldENhbGVuZGFyKHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQxLnJlc3VsdCAmJiByZXN1bHQxLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlZFVwZGF0ZTogQ1VDYWxlbmRhckpvYiA9IHJlc3VsdDEuY29udGVudCBhcyBDVUNhbGVuZGFySm9iO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVkdWxlZFVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzY2hlZHVsZWRVcGRhdGU6ICcgKyBzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNfdHJhbnNsYXRpb24gPSBuZXcgIFN0cmluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlTWVzc2FnZSh0aGlzLmF1dGhTZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBzdWInLCB0aGlzLmF1dGhTZXJ2aWNlLmdldFN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKCkhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQGRhdGUnLCB0aGlzLkZvcm1hdERhdGVTdHJpbmcoc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN0YXJ0aCcsIHRoaXMuRm9ybWF0U3RhcnREYXRlU3RyaW5nKHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BAZW5kaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRm9ybWF0RW5kRGF0ZVN0cmluZyhzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZSwgc2NoZWR1bGVkVXBkYXRlLmVzdGltYXRlZHVwZ3JhZGV0aW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vbiBtb3N0cm8gc2UgbWkgaGFubm8gZGV0dG8gZGkgbm9uIG1vc3RyYXJlIHBpdS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub3BlblVwZGF0ZUFsZXJ0RGlhbG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlVGl0bGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNfdHJhbnNsYXRpb24uZ2V0VXBkYXRlRG9udFNob3dNZXNzYWdlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNSZWRpcmVjdEV4dGVybmFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gZXh0ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLCB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29udmVydFVUQ0RhdGVUb0xvY2FsRGF0ZShkYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgLy8gZGV2byBmYXJlIHF1ZXN0byByaWdpcm8gcGVyY2jDqCBsIG9yYSBjaGUgbWkgYXJyaXZhICDDqCBpbnRlc2EgY29tZSB1dGMgZSBkZXZvIG1vc3RyYXJsYSBjb21lIGxvY2FsZVxyXG4gICAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFxyXG4gICAgICAgICAgICBEYXRlLlVUQyhkdC5nZXRGdWxsWWVhcigpLCBkdC5nZXRNb250aCgpLCBkdC5nZXREYXRlKCksIGR0LmdldEhvdXJzKCksIGR0LmdldE1pbnV0ZXMoKSwgZHQuZ2V0U2Vjb25kcygpLCBkdC5nZXRNaWxsaXNlY29uZHMoKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgRm9ybWF0RGF0ZVN0cmluZyA9IChkYXRlOiBEYXRlKTogc3RyaW5nID0+IHtcclxuICAgICAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLmNvbnZlcnRVVENEYXRlVG9Mb2NhbERhdGUoZGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSk7XHJcbiAgICAgICAgLy9yZXR1cm4gYCR7c3RhcnREYXRlLmdldERhdGUoKX0tJHt0ZW1wRGF0ZS5nZXRNb250aCgpICsgMX0tJHt0ZW1wRGF0ZS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgRm9ybWF0U3RhcnREYXRlU3RyaW5nID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHRoaXMuY29udmVydFVUQ0RhdGVUb0xvY2FsRGF0ZShkYXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkgcmV0dXJuIHN0YXJ0RGF0ZS50b0xvY2FsZVN0cmluZygnaXQtSVQnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogZmFsc2UgfSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gc3RhcnREYXRlLnRvTG9jYWxlU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIC8vY29uc3QgemVyb2VzID0gbmV3IEFycmF5KDIgKyAxKS5qb2luKCcwJyk7XHJcbiAgICAgICAgLy92YXIgbSA9ICAgICh6ZXJvZXMgKyBzdGFydERhdGUuZ2V0TWludXRlcygpKS5zbGljZSgtMik7XHJcbiAgICAgICAgLy8gdmFyIGggPSAgICAoemVyb2VzICsgc3RhcnREYXRlLmdldEhvdXJzKCkpLnNsaWNlKC0yKTtcclxuICAgICAgICAvLyByZXR1cm4gIGAke2h9OiR7bX1gO1xyXG4gICAgfTtcclxuICAgIC8vdG9kbyxcclxuICAgIC8vYW0gLyBwbT8gc2VsICdpbnRlcnZhbGxvIHNjYXR0YSBhbCBnaW9ybm8gZG9wbywgZm9yc2UgZG92cmVpIGRpcmUgaWwgNG1hZ2dpbyBkYWxsZSAxMHBtXHJcbiAgICAvLyhvIDIyLCBtYSBkaXBlbmRlIGRhbGwgaW1wb3N0YXppb25lIGRpIGN1bHR1cmEpICBhbCA0IChvIDUpICBtYWdnaW8gYWxsZSAxMSAoIG8gYWxsZSAwMSBhbSkgKSBhbFxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBGb3JtYXRFbmREYXRlU3RyaW5nID0gKGRhdGU6IERhdGUsIGR1cmF0aW9uTWluczogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICBjb25zdCB0ZW1wRGF0ZSA9IHRoaXMuY29udmVydFVUQ0RhdGVUb0xvY2FsRGF0ZShkYXRlKTtcclxuICAgICAgICB2YXIgZmluYWxEYXRlID0gbmV3IERhdGUodGVtcERhdGUuZ2V0VGltZSgpICsgZHVyYXRpb25NaW5zICogNjAwMDApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSByZXR1cm4gZmluYWxEYXRlLnRvTG9jYWxlU3RyaW5nKCdpdC1JVCcsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiBmYWxzZSB9KTtcclxuICAgICAgICBlbHNlIHJldHVybiBmaW5hbERhdGUudG9Mb2NhbGVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgLy9jb25zdCB6ZXJvZXMgPSBuZXcgQXJyYXkoMiArIDEpLmpvaW4oJzAnKTtcclxuICAgICAgICAvL3ZhciBtID0gICAgKHplcm9lcyArIGZpbmFsRGF0ZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKTtcclxuICAgICAgICAvL3ZhciBoID0gICAgKHplcm9lcyArIGZpbmFsRGF0ZS5nZXRIb3VycygpKS5zbGljZSgtMik7XHJcbiAgICAgICAgLy9yZXR1cm4gIGAke2h9OiR7bX1gO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGxvYWRMb2dpbkRhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFjY291bnROYW1lKCkgfHwgJyc7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gdGhpcy5hdXRoU2VydmljZS5nZXRTdWJzY3JpcHRpb24oKSB8fCAnJztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBhbmllc0ZvclVzZXIodGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgc2F2ZUxvZ2luRGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc1Nlc3Npb25TdG9yYWdlKCkpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUsIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNkID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMuZmluZCgocykgPT4gcy5zdWJzY3JpcHRpb25rZXkgPT09IHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgIGlmIChzZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNTZXNzaW9uU3RvcmFnZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHNkLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzZC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBnZXRDb21wYW5pZXNGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXVzZXIgfHwgIXRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIC8vIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICBjb25zdCB0ZW1wID0gYXdhaXQgdGhpcy5yZXF1ZXN0QW5kU29ydFN1YnNjcmlwdGlvbnModXNlcik7XHJcbiAgICAgICAgLy8gUHJlbWlvIEVsZWdhbnphIENvZGljZSAyMDE5IChATHVjYUJydW5pKVxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0ZW1wKSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMpKSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IHRlbXA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdOb24gdHJvdm8gbmVzc3VuYSBzdWJzY3JpcHRpb24gYXNzb2NpYXRhIGEgcXVlc3RvIGFjY291bnQuJztcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdJIGNhbm5vdCBmaW5kIGFueSBTdWJzY3JpcHRpb25zIGFzc29jaWF0ZWQgdG8geW91JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9uc1swXS5zdWJzY3JpcHRpb25rZXk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubWFwKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSkuaW5kZXhPZih0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zWzBdLnN1YnNjcmlwdGlvbmtleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uU3ViQ2hhbmdlKHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHJpdmF0ZSBhc3luYyByZXF1ZXN0QW5kU29ydFN1YnNjcmlwdGlvbnModXNlcjogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxTdWJzY3JpcHRpb24+PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkQ29tcGFuaWVzLmhhc093blByb3BlcnR5KHVzZXIpICYmIHRoaXMuY2FjaGVkQ29tcGFuaWVzW3VzZXIgYXMgYW55XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRDb21wYW5pZXNbdXNlciBhcyBhbnldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGVtcDogQXJyYXk8U3Vic2NyaXB0aW9uPiA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8U3Vic2NyaXB0aW9uPiA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyKS50b1Byb21pc2UoKTtcclxuICAgICAgICByZXN1bHQuc29ydCh0aGlzLmNvbXBhcmVDb21wYW5pZXMpLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgdGVtcC5wdXNoKHsgc3Vic2NyaXB0aW9ua2V5OiBjLnN1YnNjcmlwdGlvbmtleSwgZGVzY3JpcHRpb246IGMuZGVzY3JpcHRpb24sIHN0YXR1czogYy5zdGF0dXMsIGluc3RhbmNla2V5OiBjLmluc3RhbmNla2V5IH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGVtcC5sZW5ndGggPiAwKSB0aGlzLmNhY2hlZENvbXBhbmllc1t1c2VyIGFzIGFueV0gPSB0ZW1wO1xyXG5cclxuICAgICAgICByZXR1cm4gdGVtcDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgY29tcGFyZUNvbXBhbmllcyhhOiBTdWJzY3JpcHRpb24sIGI6IFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIGNvbnN0IG5hbWVBID0gYS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVCID0gYi5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZ29Ub0ZvcmdvdFBhc3N3b3JkKCkge1xyXG4gICAgICAgIHRoaXMuZm9yZ290cGFzc3dvcmQodGhpcy5mb3JnZXRQYXNzd29yZCwgdGhpcy5lbnRlckFjY291bk5hbWUsIHRoaXMuYWNjb3VudE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgZm9yZ290cGFzc3dvcmQoVGl0bGU6IHN0cmluZywgTWVzc2FnZTogc3RyaW5nLCBQbGFjZUhvbGRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFRpdGxlLFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIFBsYWNlSG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgVGV4dFZhbHVlOiB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKGFzeW5jIChkYXRhOiB7IFRleHRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkIH0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5UZXh0VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBkYXRhLlRleHRWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdJbnNlcmlzY2kgdW4gbm9tZSB1dGVudGUgdmFsaWRvJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ1dyaXRlIGEgdmFsaWQgYWNjb3VudCBuYW1lJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFjY25hbWU6IHN0cmluZyA9IGRhdGEuVGV4dFZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnJlc2V0cGFzc3dvcmQoYWNjbmFtZSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnQ29udHJvbGxhIGxhIHR1YSBlLW1haWwgZSBzZWd1aSBsZSBpc3RydXppb25pIHBlciByZWltcG9zdGFyZSBsYSBwYXNzd29yZC4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICdDaGVjayB5b3VyIGVtYWlsIGFuZCBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyB0byByZXNldCB5b3VyIHBhc3N3b3JkLic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhcmVzdWx0LlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSByZXN1bHQuTWVzc2FnZSArICcgKENvZGU6ICcgKyByZXN1bHQuQ29kZSArICcpLic7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBpc0Ryb3BEb3duQ2xpY2tlZCgpIHtcclxuICAgICAgICB0aGlzLmRyb3BEb3duSXNDbGlja2VkID0gIXRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XHJcbiAgICAgICAgdGhpcy5jb21ib0JveElzQ2xpY2tlZCA9IHRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcERvd25Jc0NsaWNrZWQgJiYgdGhpcy5jb21ib0JveElzQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmljb25Jc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0b2dnbGUoZHJvcGRvd246IGFueSkge1xyXG4gICAgICAgIHRoaXMuZHJvcERvd25Jc0NsaWNrZWQgPSAhdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcclxuICAgICAgICB0aGlzLmljb25Jc0NsaWNrZWQgPSB0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xyXG4gICAgICAgIHRoaXMuZHJvcGRvd24gPSBkcm9wZG93bjtcclxuICAgICAgICBpZiAodGhpcy5kcm9wRG93bklzQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICBkcm9wZG93bi50b2dnbGUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZHJvcGRvd24udG9nZ2xlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHdvcmthcm91bmQgZm9yIGNocm9taXVtIGJ1ZyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNTI1MjdcclxuZnVuY3Rpb24gd2Via2l0QXV0b2ZpbGxXb3JrYXJvdW5kKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDotd2Via2l0LWF1dG9maWxsJylcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChlbDogYW55KSA9PiAoZWwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPSAnay1mbG9hdGluZy1sYWJlbC1jb250YWluZXInKSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIC8vIG5vIHdlYmtpdCBicm93c2VyXHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBoYXNBdXRvZmlsbCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCcpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJsb2dpbi1jb250YWluZXJcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgYmFja2dyb3VuZFVSTCArICcpJyB9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibG9naW5cIiBzdHlsZT1cInotaW5kZXg6IDFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIG1hdC1jYXJkLWltYWdlIHN0eWxlPVwid2lkdGg6IDYwJVwiIHNyYz1cInt7IGxvZ29VUkwgfX1cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtYXJnaW4taDEgdGl0bGVcIj57eyB3ZWxjb21lIH19PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaXNFeHBpcmVkU2Vzc2lvblwiIGNsYXNzPVwibG9naW4tZXhwaXJlZC1zdWJ0aXRsZSBkZXNjcmlwdGlvblwiPnt7IGlkbGVUaW1lb3V0TWVzc2FnZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBlbnRlckNyZWRlbnRpYWxzIH19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInZhbGlkYXRlICYmICFvdHBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1hcmdpbi1oMSB0aXRsZVwiPnt7IGNob29zZVN1YnNjcmlwdGlvbiB9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgYWNjb3VudE5hbWUgfX06IHt7IGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSB9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJvdHBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1hcmdpbi1oMSB0aXRsZVwiPnt7IG90cFRpdGxlIH19PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBvdHBNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIFt0ZXh0XT1cImFjY291bnROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnYm9yZGVyLWJvdHRvbSdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZW5kb1RleHRCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5BY2NvdW50TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibG9naW5SZXF1ZXN0LmFjY291bnROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2Vycm9yLXN0YXR1cycgOiAnbm9ybWFsLXN0YXRlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhdmFsaWRhdGUgJiYgIW90cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3InIDogJ2JvcmRlci1ib3R0b20nXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAga2VuZG9UZXh0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImxvZ2luUmVxdWVzdC5wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJoaWRlID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnZXJyb3Itc3RhdHVzJyA6ICdub3JtYWwtc3RhdGUnXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlID0gIWhpZGVcIiAqbmdJZj1cImhpZGUgPT09IHRydWVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGUgPSAhaGlkZVwiICpuZ0lmPVwiaGlkZSA9PT0gZmFsc2VcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25cIj4gdmlzaWJpbGl0eV9vZmYgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAqbmdJZj1cInN1YnNjcmlwdGlvblNlbGVjdGlvbiAmJiB2YWxpZGF0ZSAmJiAhb3RwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cInt7IHN1YnNjcmlwdGlvbiB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIlthdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnJywgZHJvcERvd25Jc0NsaWNrZWQgPyAnJyA6ICdib3JkZXItYm90dG9tJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGtlbmRvLWRyb3Bkb3dubGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2Ryb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkRyb3BEb3duU3Vic2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJsb2dpblN1YnNjcmlwdGlvbnM/Lmxlbmd0aCA8PSAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImxvZ2luU3Vic2NyaXB0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3Vic2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWVsZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRmllbGQ9XCJzdWJzY3JpcHRpb25rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQcmltaXRpdmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImtlbmRvLWRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uU3ViQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImlzRHJvcERvd25DbGlja2VkKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUga2VuZG9Ecm9wRG93bkxpc3RJdGVtVGVtcGxhdGUgbGV0LWRhdGFJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5kYXRhLXN1Yj1cInt7IGRhdGFJdGVtLnN1YnNjcmlwdGlvbmtleSB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIuZGF0YS1kZXNjcmlwdGlvbj1cInt7IGRhdGFJdGVtLmRlc2NyaXB0aW9uIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5kYXRhLWluc3RhbmNlPVwie3sgZGF0YUl0ZW0uaW5zdGFuY2VrZXkgfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZGF0YUl0ZW0uZGVzY3JpcHRpb24gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwva2VuZG8tZHJvcGRvd25saXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwibG9naW5Ecm9wRG93blN1YnNjcmlwdGlvbkFycm93VXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZShkcm9wZG93bilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJkcm9wRG93bklzQ2xpY2tlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCBpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dfY2lyY2xlX3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cImxvZ2luRHJvcERvd25TdWJzY3JpcHRpb25BcnJvd0Rvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZShkcm9wZG93bilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhZHJvcERvd25Jc0NsaWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQgaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93X2NpcmNsZV9kb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbnN0YW5jZWtleVwiIGRhdGEtdGVzdD1cImxvZ2luUGFyYWdyYXBoSW5zdGFuY2VLZXlcIiAqbmdJZj1cImxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPiAzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJzY3JpcHRpb24ga2V5OiB7eyBsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5IH19IHt7IGluc3RhbmNla2V5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwiY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3InIDogJ2JvcmRlci1ib3R0b20nXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm90cFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlbmRvVGV4dEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbkFjY291bnROYW1lT3RwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50TmFtZU90cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImhpZGVPdHAgPyAncGFzc3dvcmQnIDogJ3RleHQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3JtYWwtc3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImhpZGVPdHAgPSAhaGlkZU90cFwiICpuZ0lmPVwiaGlkZU90cCA9PT0gdHJ1ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZU90cCA9ICFoaWRlT3RwXCIgKm5nSWY9XCJoaWRlT3RwID09PSBmYWxzZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiPiB2aXNpYmlsaXR5X29mZiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWluZm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcHMtbG9jayBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIiAqbmdJZj1cImNhcHNMb2NrT25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyBibG9jTWFpdXNjIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1lcnJvciBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIiAqbmdJZj1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mbyBwYW5lbCBmbGV4LWNlbnRlclwiICpuZ0lmPVwiYXV0aFNlcnZpY2Uub2tNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYXV0aFNlcnZpY2Uub2tNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm90cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlua1wiIGRhdGEtdGVzdD1cImxvZ2luUmVzZW5kT3RwXCIgKGNsaWNrKT1cImF1dGhTZXJ2aWNlLnJlc2VuZE9UUChsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsIGFsdGVybmF0aXZlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHU+e3sgcmVzZW5kT1RQcExhYmVsIH19PC91PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBtYXJnaW4tdG9wOiAxMHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImFsdGVybmF0aXZlXCIgbmFtZT1cImFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdHJhbnNsYXRlPnt7IGFsdGVybmF0aXZlbGJsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwYWRkaW5nOiAwIDFweDsgbWFyZ2luLXRvcDogNjBweFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGRhdGEtdGVzdD1cImxvZ2luQnV0dG9uXCIgY2xhc3M9XCJidXR0b25zIGxvZ2luLWJ1dHRvblwiIChjbGljayk9XCJsb2dpbigpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkQnV0dG9uKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXRlc3Q9XCJsb2dpbkxvYWRpbmdCdXR0b25cIiBjbGFzcz1cImstaWNvbiBrLWktbG9hZGluZ1wiICpuZ0lmPVwibG9hZGluZ1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFsb2FkaW5nXCI+e3sgYnV0dG9uVGV4dCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiICpuZ0lmPVwiKCFsb2FkaW5nICYmIHZhbGlkYXRlKSB8fCBvdHBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gZGF0YS10ZXN0PVwibG9naW5CYWNrQnV0dG9uXCIgY2xhc3M9XCJidXR0b25zIGJhY2stYnV0dG9uXCIgKGNsaWNrKT1cImJhY2soKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBidXR0b25CYWNrIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dTaWduVXBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2lnbnVwXCIgZGF0YS10ZXN0PVwibG9naW5TaWduVXBcIiAoY2xpY2spPVwibmV3VXNlcigpXCI+U2lnblVwIGhlcmUhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIXZhbGlkYXRlICYmICFvdHBcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDEwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb3Jnb3Rwd2RcIiBkYXRhLXRlc3Q9XCJsb2dpbkZvcmdvdFBhc3N3b3JkXCIgKGNsaWNrKT1cImdvVG9Gb3Jnb3RQYXNzd29yZCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8dT57eyBmb3JnZXRQYXNzd29yZCB9fTwvdT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDA7IHdpZHRoOiAxMDAlOyB6LWluZGV4OiAwXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjb3B5cmlnaHQgY29weXJpZ2h0LWFic1wiPkxvZ2luIHYyLjMuMSs1MSAyMDE3IC0ge3sgY3VycmVudFllYXIgfX0sIFp1Y2NoZXR0aSBzLnAuYS48L3A+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==