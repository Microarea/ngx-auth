import { LoginRequest } from '../models/login-request';
import { StorageVars } from '../models/storage-vars';
import { ForgotPasswordComponent } from './forgot-password-dialog/forgot-password.component';
import { Component, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
function TbLoginComponent_div_12_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 37);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_4_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r34); i0.ɵɵnextContext(); const _r29 = i0.ɵɵreference(3); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.toggle(_r29); });
    i0.ɵɵtext(1, " arrow_circle_up ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 37);
    i0.ɵɵlistener("click", function TbLoginComponent_div_12_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r36); i0.ɵɵnextContext(); const _r29 = i0.ɵɵreference(3); const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.toggle(_r29); });
    i0.ɵɵtext(1, " arrow_circle_down ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_12_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" Subscription key: ", ctx_r32.loginRequest.subscriptionKey, " ", ctx_r32.instancekey, " ");
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
function TbLoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "kendo-floatinglabel", 26)(2, "kendo-dropdownlist", 33, 34);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.loginRequest.subscriptionKey = $event; })("ngModelChange", function TbLoginComponent_div_12_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.onSubChange($event); })("click", function TbLoginComponent_div_12_Template_kendo_dropdownlist_click_2_listener() { i0.ɵɵrestoreView(_r38); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.isDropDownClicked(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, TbLoginComponent_div_12_span_4_Template, 2, 0, "span", 35);
    i0.ɵɵtemplate(5, TbLoginComponent_div_12_span_5_Template, 2, 0, "span", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div");
    i0.ɵɵtemplate(7, TbLoginComponent_div_12_p_7_Template, 2, 2, "p", 36);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("text", ctx_r5.subscription);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c1, ctx_r5.authService.errorMessage ? "border-bottom-error" : "", ctx_r5.dropDownIsClicked ? "" : "border-bottom"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", (ctx_r5.loginSubscriptions == null ? null : ctx_r5.loginSubscriptions.length) <= 1)("data", ctx_r5.loginSubscriptions)("ngModel", ctx_r5.loginRequest.subscriptionKey);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.dropDownIsClicked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.dropDownIsClicked);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.loginSubscriptions.length > 3);
} }
function TbLoginComponent_kendo_floatinglabel_13_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.hideOtp = !ctx_r43.hideOtp; });
    i0.ɵɵtext(1, " visibility ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_13_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(2); return ctx_r45.hideOtp = !ctx_r45.hideOtp; });
    i0.ɵɵtext(1, " visibility_off ");
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_kendo_floatinglabel_13_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 26)(1, "input", 39);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_13_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(); return ctx_r47.inputValue = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_13_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.keyUpFunction($event); });
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
    i0.ɵɵelementStart(0, "div", 40)(1, "p", 41);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r7.blocMaiusc);
} }
function TbLoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "p", 41);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.authService.errorMessage);
} }
function TbLoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43)(1, "p", 41);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.authService.okMessage);
} }
function TbLoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 44)(2, "p", 45);
    i0.ɵɵlistener("click", function TbLoginComponent_div_18_Template_p_click_2_listener() { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(); return ctx_r50.authService.resendOTP(ctx_r50.loginRequest.accountName, ctx_r50.alternative); });
    i0.ɵɵelementStart(3, "u");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 46)(6, "p", 47)(7, "mat-checkbox", 48);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_div_18_Template_mat_checkbox_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.alternative = $event; });
    i0.ɵɵelementStart(8, "span", 49);
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
    i0.ɵɵelement(0, "span", 50);
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
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "button", 51);
    i0.ɵɵlistener("click", function TbLoginComponent_div_24_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r54); const ctx_r53 = i0.ɵɵnextContext(); return ctx_r53.back(); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.buttonBack, "");
} }
function TbLoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "p", 52);
    i0.ɵɵlistener("click", function TbLoginComponent_div_26_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(); return ctx_r55.newUser(); });
    i0.ɵɵtext(2, "SignUp here!");
    i0.ɵɵelementEnd()();
} }
function TbLoginComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "p", 53);
    i0.ɵɵlistener("click", function TbLoginComponent_div_27_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r58); const ctx_r57 = i0.ɵɵnextContext(); return ctx_r57.goToForgotPassword(); });
    i0.ɵɵelementStart(2, "u");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r15.forgetPassword);
} }
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
            this.chooseSubscription = 'Scegli la tua sottoscrizione.';
            this.goodJob = 'Buon lavoro!';
            this.subscription = 'Sottoscrizione';
            this.instance = 'Istanza';
            this.buttonBack = '< INDIETRO';
            this.accountName = 'Nome utente';
            this.enterAccounName = 'Inserisci il tuo nome utente e ti invieremo una nuova password';
            this.welcome = 'Benvenuto su MagoCloud';
            this.enterCredentials = "Inserisci nome utente e password per l'autenticazione.";
            this.dontshow = 'Non mostrare più questo messaggio';
            this.forgetPassword = 'Hai dimenticato la password ?';
            this.blocMaiusc = 'Blocco maiuscole attivo';
            this.idleTimeoutMessage = 'La tua sessione è terminata per inattività, puoi riprendere da qui.';
            this.upgradeWarningTitle = 'Aggiornamento  in vista';
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
            this.welcome = 'Welcome to MagoCloud';
            this.enterCredentials = 'Enter account name and password for authentication.';
            this.dontshow = 'Do not show me this message again';
            this.forgetPassword = 'Forgot your password ?';
            this.blocMaiusc = 'Caps lock on';
            this.idleTimeoutMessage = 'Your session has expired due to inactivity, you can resume from here.';
            this.upgradeWarningTitle = 'Update planned';
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
    // ---------------------------------------------------------------------------
    ngAfterContentInit() {
        this.loadLoginData();
        webkitAutofillWorkaround();
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
                                let message = this.authService.getUpdateMessage();
                                message = message.replace('@@sub', this.authService.getSubscriptionDescription());
                                message = message.replace('@@date', this.FormatDateString(scheduledUpdate.scheduledtime));
                                message = message.replace('@@starth', this.FormatStartDateString(scheduledUpdate.scheduledtime));
                                message = message.replace('@@endh', this.FormatEndDateString(scheduledUpdate.scheduledtime, scheduledUpdate.estimatedupgradetime));
                                // non mostro se mi hanno detto di non mostrare piu.
                                if (val !== message) {
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
    } }, decls: 31, vars: 19, consts: [[1, "login-container"], [1, "login", 2, "z-index", "1"], [1, "login-header"], ["mat-card-image", "", 2, "width", "60%", 3, "src"], [4, "ngIf"], [1, "login-form"], [3, "text", "ngClass", 4, "ngIf"], ["text", "Password", 3, "ngClass", 4, "ngIf"], ["class", "form-control", 4, "ngIf"], [1, "login-infos"], ["class", "caps-lock panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-error panel flex-center margin-bottom-5", 4, "ngIf"], ["class", "login-info panel flex-center", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "60px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "login-button", 3, "disabled", "click"], ["class", "k-icon k-i-loading", 4, "ngIf"], ["class", "login-footer", 4, "ngIf"], [1, "login-footer"], ["style", "display: flex; margin-top: 10px; justify-content: flex-end", 4, "ngIf"], [2, "position", "absolute", "bottom", "0", "width", "100%", "z-index", "0"], [1, "copyright", "copyright-abs"], [1, "margin-h1", "title"], ["class", "login-expired-subtitle description", 4, "ngIf"], [1, "description"], [1, "login-expired-subtitle", "description"], [3, "text", "ngClass"], ["kendoTextBox", "", "name", "accountName", "type", "text", 3, "ngModel", "ngClass", "ngModelChange", "keyup"], ["text", "Password", 3, "ngClass"], ["kendoTextBox", "", "name", "password", "autocomplete", "current-password", 3, "ngModel", "type", "ngClass", "ngModelChange", "keyup"], ["class", "material-icons icon", 3, "click", 4, "ngIf"], [1, "material-icons", "icon", 3, "click"], [1, "form-control"], ["name", "subscription", "textField", "description", "valueField", "subscriptionkey", "valuePrimitive", "true", 1, "kendo-dropdown", 3, "disabled", "data", "ngModel", "ngModelChange", "click"], ["dropdown", ""], ["class", "material-symbols-rounded icon", 3, "click", 4, "ngIf"], ["class", "instancekey", 4, "ngIf"], [1, "material-symbols-rounded", "icon", 3, "click"], [1, "instancekey"], ["kendoTextBox", "", "name", "accountNameOtp", "type", "password", 1, "normal-state", 3, "ngModel", "type", "ngModelChange", "keyup"], [1, "caps-lock", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"], [1, "login-error", "panel", "flex-center", "margin-bottom-5"], [1, "login-info", "panel", "flex-center"], [2, "display", "flex", "justify-content", "flex-end"], [1, "link", 3, "click"], [2, "display", "flex", "margin-top", "10px", "justify-content", "flex-end"], [1, "link"], ["name", "alternative", 3, "ngModel", "ngModelChange"], ["translate", ""], [1, "k-icon", "k-i-loading"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"], [1, "signup", 3, "click"], [1, "forgotpwd", 3, "click"]], template: function TbLoginComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(12, TbLoginComponent_div_12_Template, 8, 11, "div", 8);
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
        i0.ɵɵtextInterpolate1("Login v2.3.1+45 2017 - ", ctx.currentYear, ", Zucchetti s.p.a.");
    } }, directives: [i4.NgIf, i5.ɵNgNoValidate, i5.NgControlStatusGroup, i5.NgForm, i6.FloatingLabelComponent, i4.NgClass, i7.TextBoxDirective, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i8.DropDownListComponent, i9.MatCheckbox], styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list[_ngcontent-%COMP%]{background:#F4F4F4;color:#005890;max-height:100px;width:370px!important}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{background:#bfcdd5}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar:hover{background:#d9d9d9}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#6cafd1}.k-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#005890}.k-list[_ngcontent-%COMP%]   .k-list-item.k-selected[_ngcontent-%COMP%]{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%]:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:410px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:388px!important}.title[_ngcontent-%COMP%]{font-size:19px}}@media screen and (max-width: 490px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:345.6px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:323px!important}}@media screen and (max-width: 425px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:295.2px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:273px!important}}@media screen and (max-width: 375px){.k-list[_ngcontent-%COMP%], .k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{width:240px!important}.kendo-dropdown[_ngcontent-%COMP%]{width:217px!important}}.k-list-md[_ngcontent-%COMP%]   .k-list-item[_ngcontent-%COMP%], .k-list-md[_ngcontent-%COMP%]   .k-list-optionlabel[_ngcontent-%COMP%]{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}.k-list-item-text[_ngcontent-%COMP%]{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.title[_ngcontent-%COMP%]{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description[_ngcontent-%COMP%]{color:#005890!important;font-size:16px;line-height:20px;font-weight:300;margin-bottom:30px}.link[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #0B85CE}.border-bottom-error[_ngcontent-%COMP%]{border-bottom:1px solid #E7481C}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}.no-margin[_ngcontent-%COMP%]{margin:0;word-break:unset}.cdk-overlay-container[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.margin-bottom-5[_ngcontent-%COMP%]{margin-bottom:5px}.k-disabled[_ngcontent-%COMP%]{opacity:inherit!important}.normal-state[_ngcontent-%COMP%]{color:#005890!important}.error-status[_ngcontent-%COMP%]{color:#e7481c!important}.kendo-dropdown[_ngcontent-%COMP%]{position:relative;width:348px}.k-checkbox-label[_ngcontent-%COMP%]{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox[_ngcontent-%COMP%]:checked, .k-checkbox.k-checked[_ngcontent-%COMP%]{border-color:#005890;background-color:#005890}.k-checkbox[_ngcontent-%COMP%]:checked:focus, .k-checkbox.k-checked.k-focus[_ngcontent-%COMP%]{box-shadow:none}.login-infos[_ngcontent-%COMP%]{margin:20px 0}.login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{background:#E7481C;display:flex;align-items:center}.login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background:#E7481C}.login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{background:#4AB679}.login-infos[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:#C0C0C0}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:#E77B2D}.login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:enabled{background:#FF9E18}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{background:#808080}.login-footer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover:enabled{background:#9F9F9F}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]{background:#4AB679}.login-footer[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%]:hover:enabled{background:#68B388}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]{background:#D03C13}.login-footer[_ngcontent-%COMP%]   .error-button[_ngcontent-%COMP%]:hover:enabled{background:#E7481C}input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}[_ngcontent-%COMP%]:focus{outline:none}  .mat-dialog-container{background:white!important;border-radius:0!important}  .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}  .mat-dialog-container .description{color:#005890!important;font-size:16px;line-height:20px;font-weight:300;margin-bottom:30px}  .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}  .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9F9F9F}  .mat-dialog-container .login-footer .back-button{background:#808080}  .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}  .mat-dialog-container .login-footer button:disabled{background:#C0C0C0}  .mat-dialog-container .login-footer .ok-button{background:#4AB679}  .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68B388}  .k-floating-label-container{width:100%;margin:8px 0}  .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}  .k-floating-label-container .k-textbox,   .k-floating-label-container .k-textbox .k-input,   .k-floating-label-container .k-textarea:focus{background-color:#fff!important}  .k-floating-label-container .k-textbox::-moz-selection,   .k-floating-label-container .k-input::-moz-selection,   .k-floating-label-container .k-textarea::-moz-selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-textbox::selection,   .k-floating-label-container .k-input::selection,   .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}  .k-floating-label-container .k-picker-md .k-input-inner{background:white!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}  .k-floating-label-container .k-picker{border-width:0px;border-style:unset}  .k-floating-label-container .k-picker:focus-within{box-shadow:none}  .k-floating-label-container .k-picker:focus{box-shadow:none}  .k-floating-label-container:after{background-color:#8ee2ff;height:1px}  .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}  .k-floating-label-container .k-dropdown{border:none;background:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0B85CE}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}  .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#4ab679}.icon[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}  html,   body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}tb-login[_nghost-%COMP%]{font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-image:url(https://magocloud-store-pdf.s3.eu-west-1.amazonaws.com/login-bg.png);background-size:cover;background-repeat:no-repeat}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}}@media screen and (min-width: 576px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:450px}}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .upicon[_ngcontent-%COMP%]{transform:rotate(90deg);padding:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .downicon[_ngcontent-%COMP%]{transform:rotate(270deg)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .k-i-loading[_ngcontent-%COMP%]{font-size:20px}tb-login[_nghost-%COMP%]   p.instancekey[_ngcontent-%COMP%]{font-size:9px;font-weight:300;text-indent:1px;color:#005890}tb-login[_nghost-%COMP%]   p.copyright[_ngcontent-%COMP%]{font-size:10px;font-weight:300;margin:0;color:#fff}tb-login[_nghost-%COMP%]   p.copyright-abs[_ngcontent-%COMP%]{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}tb-login[_nghost-%COMP%]   p.signup[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}tb-login[_nghost-%COMP%]   .margin-h1[_ngcontent-%COMP%]{margin-left:-2px;margin-top:20px}tb-login[_nghost-%COMP%]   .margin-p[_ngcontent-%COMP%]{margin-left:-1.5px;margin-top:-10px}tb-login[_nghost-%COMP%]   .login-expired-subtitle[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}tb-login[_nghost-%COMP%]   .login-chooseSubscription[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-size:x-large}}tb-login[_nghost-%COMP%]     .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}tb-login[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, tb-login[_nghost-%COMP%]   .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#005890}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLoginComponent, [{
        type: Component,
        args: [{ selector: 'tb-login', template: "<div class=\"login-container\">\r\n    <div class=\"login\" style=\"z-index: 1\">\r\n        <div class=\"login-header\">\r\n            <div>\r\n                <img mat-card-image style=\"width: 60%\" src=\"{{ logoURL }}\" />\r\n            </div>\r\n            <div *ngIf=\"!validate && !otp\">\r\n                <h1 class=\"margin-h1 title\">{{ welcome }}</h1>\r\n                <p *ngIf=\"isExpiredSession\" class=\"login-expired-subtitle description\">{{ idleTimeoutMessage }}</p>\r\n                <p class=\"description\">{{ enterCredentials }}</p>\r\n            </div>\r\n            <div *ngIf=\"validate && !otp\">\r\n                <h1 class=\"margin-h1 title\">{{ chooseSubscription }}</h1>\r\n                <p class=\"description\">{{ accountName }}: {{ loginRequest.accountName }}</p>\r\n            </div>\r\n            <div *ngIf=\"otp\">\r\n                <h1 class=\"margin-h1 title\">{{ otpTitle }}</h1>\r\n                <p class=\"description\">{{ otpMessage }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <form>\r\n            <div class=\"login-form\">\r\n                <kendo-floatinglabel\r\n                    [text]=\"accountName\"\r\n                    *ngIf=\"!validate && !otp\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        [(ngModel)]=\"loginRequest.accountName\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"accountName\"\r\n                        type=\"text\"\r\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n                    />\r\n                </kendo-floatinglabel>\r\n\r\n                <kendo-floatinglabel\r\n                    text=\"Password\"\r\n                    *ngIf=\"!validate && !otp\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        [(ngModel)]=\"loginRequest.password\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"password\"\r\n                        [type]=\"hide ? 'password' : 'text'\"\r\n                        autocomplete=\"current-password\"\r\n                        [ngClass]=\"authService.errorMessage ? 'error-status' : 'normal-state'\"\r\n                    />\r\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === true\" class=\"material-icons icon\"> visibility </span>\r\n                    <span (click)=\"hide = !hide\" *ngIf=\"hide === false\" class=\"material-icons icon\"> visibility_off </span>\r\n                </kendo-floatinglabel>\r\n\r\n                <div class=\"form-control\" *ngIf=\"subscriptionSelection && validate && !otp\">\r\n                    <kendo-floatinglabel\r\n                        text=\"{{ subscription }}\"\r\n                        [ngClass]=\"[authService.errorMessage ? 'border-bottom-error' : '', dropDownIsClicked ? '' : 'border-bottom']\"\r\n                    >\r\n                        <kendo-dropdownlist\r\n                            #dropdown\r\n                            [disabled]=\"loginSubscriptions?.length <= 1\"\r\n                            [data]=\"loginSubscriptions\"\r\n                            name=\"subscription\"\r\n                            textField=\"description\"\r\n                            valueField=\"subscriptionkey\"\r\n                            valuePrimitive=\"true\"\r\n                            [(ngModel)]=\"loginRequest.subscriptionKey\"\r\n                            class=\"kendo-dropdown\"\r\n                            (ngModelChange)=\"onSubChange($event)\"\r\n                            (click)=\"isDropDownClicked()\"\r\n                        >\r\n                        </kendo-dropdownlist>\r\n                        <span (click)=\"toggle(dropdown)\" *ngIf=\"dropDownIsClicked\" class=\"material-symbols-rounded icon\">\r\n                            arrow_circle_up\r\n                        </span>\r\n                        <span (click)=\"toggle(dropdown)\" *ngIf=\"!dropDownIsClicked\" class=\"material-symbols-rounded icon\">\r\n                            arrow_circle_down\r\n                        </span>\r\n                    </kendo-floatinglabel>\r\n                    <div>\r\n                        <p class=\"instancekey\" *ngIf=\"loginSubscriptions.length > 3\">\r\n                            Subscription key: {{ loginRequest.subscriptionKey }} {{ instancekey }}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <kendo-floatinglabel\r\n                    [text]=\"code\"\r\n                    [ngClass]=\"authService.errorMessage ? 'border-bottom-error' : 'border-bottom'\"\r\n                    *ngIf=\"otp\"\r\n                >\r\n                    <input\r\n                        kendoTextBox\r\n                        [(ngModel)]=\"inputValue\"\r\n                        (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"accountNameOtp\"\r\n                        [type]=\"hideOtp ? 'password' : 'text'\"\r\n                        type=\"password\"\r\n                        class=\"normal-state\"\r\n                    />\r\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === true\" class=\"material-icons icon\"> visibility </span>\r\n                    <span (click)=\"hideOtp = !hideOtp\" *ngIf=\"hideOtp === false\" class=\"material-icons icon\"> visibility_off </span>\r\n                </kendo-floatinglabel>\r\n\r\n                <div class=\"login-infos\">\r\n                    <div class=\"caps-lock panel flex-center margin-bottom-5\" *ngIf=\"capsLockOn\">\r\n                        <p class=\"no-margin\">{{ blocMaiusc }}</p>\r\n                    </div>\r\n                    <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"authService.errorMessage\">\r\n                        <p class=\"no-margin\">{{ authService.errorMessage }}</p>\r\n                    </div>\r\n                    <div class=\"login-info panel flex-center\" *ngIf=\"authService.okMessage\">\r\n                        <p class=\"no-margin\">{{ authService.okMessage }}</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"otp\">\r\n                    <div style=\"display: flex; justify-content: flex-end\">\r\n                        <p class=\"link\" (click)=\"authService.resendOTP(loginRequest.accountName, alternative)\">\r\n                            <u>{{ resendOTPpLabel }}</u>\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\r\n                        <p class=\"link\">\r\n                            <mat-checkbox [(ngModel)]=\"alternative\" name=\"alternative\">\r\n                                <span translate>{{ alternativelbl }}</span>\r\n                            </mat-checkbox>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 60px\">\r\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n                <button kendoButton class=\"buttons login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\r\n                    <span class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\r\n                    <span *ngIf=\"!loading\">{{ buttonText }}</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"login-footer\" *ngIf=\"(!loading && validate) || otp\">\r\n                <button kendoButton class=\"buttons back-button\" (click)=\"back()\">\r\n                    <span> {{ buttonBack }}</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <div *ngIf=\"showSignUp\">\r\n                <p class=\"signup\" (click)=\"newUser()\">SignUp here!</p>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!validate && !otp\" style=\"display: flex; margin-top: 10px; justify-content: flex-end\">\r\n            <p class=\"forgotpwd\" (click)=\"goToForgotPassword()\">\r\n                <u>{{ forgetPassword }}</u>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div style=\"position: absolute; bottom: 0; width: 100%; z-index: 0\">\r\n        <p class=\"copyright copyright-abs\">Login v2.3.1+45 2017 - {{ currentYear }}, Zucchetti s.p.a.</p>\r\n    </div>\r\n</div>\r\n", styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;max-height:130px;width:370px!important}.k-list{background:#F4F4F4;color:#005890;max-height:100px;width:370px!important}.k-list ::-webkit-scrollbar{background:#bfcdd5}.k-list ::-webkit-scrollbar:hover{background:#d9d9d9}.k-list ::-webkit-scrollbar-thumb{background:#6cafd1}.k-list ::-webkit-scrollbar-thumb:hover{background:#005890}.k-list .k-list-item.k-selected{background-color:#edf8fe!important;box-shadow:none;font-weight:600;color:#005890;font-size:13px;line-height:17px;word-break:break-all}.k-list .k-list-item:hover{background-color:#e5e5e5!important}@media screen and (max-width: 768px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:410px!important}.kendo-dropdown{width:388px!important}.title{font-size:19px}}@media screen and (max-width: 490px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:345.6px!important}.kendo-dropdown{width:323px!important}}@media screen and (max-width: 425px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:295.2px!important}.kendo-dropdown{width:273px!important}}@media screen and (max-width: 375px){.k-list,.k-animation-container-shown,.k-animation-container>.k-popup{width:240px!important}.kendo-dropdown{width:217px!important}}.k-list-md .k-list-item,.k-list-md .k-list-optionlabel{padding:4px 8px;font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}.k-list-item-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}.description{color:#005890!important;font-size:16px;line-height:20px;font-weight:300;margin-bottom:30px}.link{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}.border-bottom{border-bottom:1px solid #0B85CE}.border-bottom-error{border-bottom:1px solid #E7481C}.flex-center{display:flex;align-items:center}.no-margin{margin:0;word-break:unset}.cdk-overlay-container{background:rgba(0,0,0,.32)}.margin-bottom-5{margin-bottom:5px}.k-disabled{opacity:inherit!important}.normal-state{color:#005890!important}.error-status{color:#e7481c!important}.kendo-dropdown{position:relative;width:348px}.k-checkbox-label{font-weight:600;color:#005890;font-size:13px;line-height:17px}.k-checkbox:checked,.k-checkbox.k-checked{border-color:#005890;background-color:#005890}.k-checkbox:checked:focus,.k-checkbox.k-checked.k-focus{box-shadow:none}.login-infos{margin:20px 0}.login-infos .caps-lock{background:#E7481C;display:flex;align-items:center}.login-infos .login-error{background:#E7481C}.login-infos .login-info{background:#4AB679}.login-infos .panel{color:#fff;font-size:16px;font-weight:600;padding:10px;line-height:20px}.login-infos span{margin-right:5px}.login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}.login-footer button:disabled{background:#C0C0C0}.login-footer .login-button{background:#E77B2D}.login-footer .login-button:hover:enabled{background:#FF9E18}.login-footer .back-button{background:#808080}.login-footer .back-button:hover:enabled{background:#9F9F9F}.login-footer .ok-button{background:#4AB679}.login-footer .ok-button:hover:enabled{background:#68B388}.login-footer .error-button{background:#D03C13}.login-footer .error-button:hover:enabled{background:#E7481C}input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important;-webkit-text-fill-color:#005890!important}:focus{outline:none}::ng-deep .mat-dialog-container{background:white!important;border-radius:0!important}::ng-deep .mat-dialog-container .title{margin-bottom:10px;color:#005890!important;font-weight:800;font-size:24px}::ng-deep .mat-dialog-container .description{color:#005890!important;font-size:16px;line-height:20px;font-weight:300;margin-bottom:30px}::ng-deep .mat-dialog-container .border-bottom{border-bottom:1px solid #0B85CE}::ng-deep .mat-dialog-container .login-footer .back-button:hover:enabled{background:#9F9F9F}::ng-deep .mat-dialog-container .login-footer .back-button{background:#808080}::ng-deep .mat-dialog-container .login-footer .buttons{padding:6px 12px;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0);letter-spacing:3px;text-transform:uppercase}::ng-deep .mat-dialog-container .login-footer button:disabled{background:#C0C0C0}::ng-deep .mat-dialog-container .login-footer .ok-button{background:#4AB679}::ng-deep .mat-dialog-container .login-footer .ok-button:hover:enabled{background:#68B388}::ng-deep .k-floating-label-container{width:100%;margin:8px 0}::ng-deep .k-floating-label-container>.k-label{font-weight:600;color:#005890;font-size:14px;line-height:17px;left:0!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea{border:none;border-radius:0;box-shadow:none;padding:5px 0;height:33px;font-size:13px;line-height:17px;font-weight:600;background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox,::ng-deep .k-floating-label-container .k-textbox .k-input,::ng-deep .k-floating-label-container .k-textarea:focus{background-color:#fff!important}::ng-deep .k-floating-label-container .k-textbox::-moz-selection,::ng-deep .k-floating-label-container .k-input::-moz-selection,::ng-deep .k-floating-label-container .k-textarea::-moz-selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-textbox::selection,::ng-deep .k-floating-label-container .k-input::selection,::ng-deep .k-floating-label-container .k-textarea::selection{color:#fff;background-color:#909090}::ng-deep .k-floating-label-container .k-picker-md .k-input-inner{background:white!important;height:33px;opacity:1;color:#005890;font-size:13px;padding:0;font-weight:600;line-height:17px}::ng-deep .k-floating-label-container .k-picker{border-width:0px;border-style:unset}::ng-deep .k-floating-label-container .k-picker:focus-within{box-shadow:none}::ng-deep .k-floating-label-container .k-picker:focus{box-shadow:none}::ng-deep .k-floating-label-container:after{background-color:#8ee2ff;height:1px}::ng-deep .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}::ng-deep .k-floating-label-container .k-dropdown{border:none;background:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0B85CE}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}.mat-simple-snackbar-action{color:#4ab679}.icon{position:absolute;bottom:4px;right:0;cursor:pointer;color:#005890;padding-bottom:2px}::ng-deep html,::ng-deep body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}:host(tb-login){font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}:host(tb-login) .login-container{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-image:url(https://magocloud-store-pdf.s3.eu-west-1.amazonaws.com/login-bg.png);background-size:cover;background-repeat:no-repeat}:host(tb-login) .login-container .login{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){:host(tb-login) .login-container .login{padding:20px}}@media screen and (min-width: 576px){:host(tb-login) .login-container .login{max-width:450px}}:host(tb-login) .login-container .login .upicon{transform:rotate(90deg);padding:1px}:host(tb-login) .login-container .login .downicon{transform:rotate(270deg)}:host(tb-login) .login-container .login .login-header{display:flex;flex-direction:column}:host(tb-login) .login-container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:0}:host(tb-login) .login-container .login .k-i-loading{font-size:20px}:host(tb-login) p.instancekey{font-size:9px;font-weight:300;text-indent:1px;color:#005890}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) p.forgotpwd{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}:host(tb-login) p.signup{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}:host(tb-login) .margin-h1{margin-left:-2px;margin-top:20px}:host(tb-login) .margin-p{margin-left:-1.5px;margin-top:-10px}:host(tb-login) .login-expired-subtitle{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:800}:host(tb-login) .login-chooseSubscription{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}:host(tb-login) .login-sign-in{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}@media (min-width: 576px){:host(tb-login) .login{padding:20px}:host(tb-login) .login .login-form ::ng-deep .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){:host(tb-login) .login-sign-in{font-size:x-large}}:host(tb-login) ::ng-deep .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}:host(tb-login) ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host(tb-login) .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#005890}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL3BhZ2VzL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0EzQiw2QkFBdUU7SUFBQSxZQUF3QjtJQUFBLGlCQUFJOzs7SUFBNUIsZUFBd0I7SUFBeEIsZ0RBQXdCOzs7SUFGbkcsMkJBQStCLGFBQUE7SUFDQyxZQUFhO0lBQUEsaUJBQUs7SUFDOUMsb0VBQW1HO0lBQ25HLDZCQUF1QjtJQUFBLFlBQXNCO0lBQUEsaUJBQUksRUFBQTs7O0lBRnJCLGVBQWE7SUFBYixvQ0FBYTtJQUNyQyxlQUFzQjtJQUF0Qiw4Q0FBc0I7SUFDSCxlQUFzQjtJQUF0Qiw2Q0FBc0I7OztJQUVqRCwyQkFBOEIsYUFBQTtJQUNFLFlBQXdCO0lBQUEsaUJBQUs7SUFDekQsNkJBQXVCO0lBQUEsWUFBaUQ7SUFBQSxpQkFBSSxFQUFBOzs7SUFEaEQsZUFBd0I7SUFBeEIsK0NBQXdCO0lBQzdCLGVBQWlEO0lBQWpELHdGQUFpRDs7O0lBRTVFLDJCQUFpQixhQUFBO0lBQ2UsWUFBYztJQUFBLGlCQUFLO0lBQy9DLDZCQUF1QjtJ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Q0FBYTtRQUN4QyxlQUFjO1FBQWQsbUNBQWM7UUFHRixlQUFtQztRQUFuQyw4REFBbUM7UUFPeEQsZUFBZ0I7UUFBaEIscUNBQWdCO1FBSXBCLGVBQXVCO1FBQXZCLGdEQUF1QjtRQU9NLGVBQTBEO1FBQTFELHVGQUEwRDs7dUZEakp4RixnQkFBZ0I7Y0FONUIsU0FBUzsyQkFDSSxVQUFVOztzQkErRGYsTUFBTTt1QkFBQyxRQUFRO3dCQVRHLFFBQVE7a0JBQTlCLFNBQVM7bUJBQUMsVUFBVTs7QUFtZnpCLDJGQUEyRjtBQUMzRixTQUFTLHdCQUF3QjtJQUM3QixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ1osSUFBSTtZQUNBLFFBQVE7aUJBQ0gsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUM7aUJBQzFDLE9BQU8sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7U0FDMUY7UUFBQyxNQUFNO1lBQ0osb0JBQW9CO1NBQ3ZCO0lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVELDhFQUE4RTtBQUM5RSxTQUFTLFdBQVc7SUFDaEIsSUFBSTtRQUNBLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUM3RDtJQUFDLE1BQU07UUFDSixPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ1VDYWxlbmRhckpvYiwgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4uL21vZGVscy9zdG9yYWdlLXZhcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9tb2RlbHMvc3Vic2NyaXB0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2ZvcmdvdC1wYXNzd29yZC1kaWFsb2cvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJDb250ZW50SW5pdCwgSW5qZWN0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGItbG9naW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY2xhc3MgVGJMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gICAgcHJpdmF0ZSBjYWNoZWRDb21wYW5pZXM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICBjYXBzTG9ja09uID0gZmFsc2U7XHJcbiAgICB2YWxpZGF0ZSA9IGZhbHNlO1xyXG4gICAgb3RwID0gZmFsc2U7XHJcbiAgICBsb2FkaW5nID0gZmFsc2U7XHJcbiAgICBsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCA9IG5ldyBMb2dpblJlcXVlc3QoKTtcclxuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmc7XHJcbiAgICBidXR0b25UZXh0OiBzdHJpbmc7XHJcbiAgICBuZXh0VGV4dDogc3RyaW5nO1xyXG4gICAgbG9naW5UZXh0OiBzdHJpbmc7XHJcbiAgICBjdXJyZW50WWVhcjogc3RyaW5nO1xyXG4gICAgY3JlYXRlQWNjb3VudFVybDogc3RyaW5nO1xyXG4gICAgY2hhbmdlUGFzc3dvcmRVcmw6IHN0cmluZztcclxuICAgIHN1YnNjcmlwdGlvblNlbGVjdGlvbjogYm9vbGVhbjsgLy8gYWJpbGl0YSBsYSBzY2VsdGEgZGVsbGEgc3Vic2NyaXB0aW9uXHJcbiAgICBzaG93U2lnblVwOiBib29sZWFuOyAvLyBhYmlsaXRhIGxhIHBvc3NpYmlsaXTDoCBkaSByZWdpc3RyYXJlIG51b3ZvIGFjY291bnRcclxuICAgIGxvZ2luU3Vic2NyaXB0aW9uczogQXJyYXk8eyBkZXNjcmlwdGlvbjogc3RyaW5nOyBzdWJzY3JpcHRpb25rZXk6IHN0cmluZzsgc3RhdHVzOiBudW1iZXI7IGluc3RhbmNla2V5OiBzdHJpbmcgfT4gPSBbXTtcclxuICAgIGxvZ29VUkw6IHN0cmluZztcclxuICAgIGhpZGUgPSB0cnVlO1xyXG4gICAgaGlkZU90cCA9IHRydWU7XHJcbiAgICBpbnN0YW5jZWtleTogc3RyaW5nO1xyXG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgcHVibGljIGRvY3VtZW50PzogRG9jdW1lbnQ7XHJcbiAgICAvLyB0ZXN0aSBpbiBpdGFsaWFubyBlZCBpbmdsZXNlXHJcbiAgICBjaG9vc2VTdWJzY3JpcHRpb246IHN0cmluZztcclxuICAgIGdvb2RKb2I6IHN0cmluZztcclxuICAgIHN1YnNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgaW5zdGFuY2U6IHN0cmluZztcclxuICAgIGJ1dHRvbkJhY2s6IHN0cmluZztcclxuICAgIGFjY291bnROYW1lOiBzdHJpbmc7XHJcbiAgICBlbnRlckFjY291bk5hbWU6IHN0cmluZztcclxuICAgIHdlbGNvbWU6IHN0cmluZztcclxuICAgIGVudGVyQ3JlZGVudGlhbHM6IHN0cmluZztcclxuICAgIGZvcmdldFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBkb250c2hvdzogc3RyaW5nO1xyXG4gICAgYmxvY01haXVzYzogc3RyaW5nO1xyXG4gICAgaWRsZVRpbWVvdXRNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICB1cGdyYWRlV2FybmluZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICBvdHBNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBvdHBUaXRsZTogc3RyaW5nO1xyXG4gICAgcmVzZW5kT1RQcExhYmVsOiBzdHJpbmc7XHJcbiAgICBhbHRlcm5hdGl2ZWxibDogc3RyaW5nO1xyXG4gICAgY29kZTogc3RyaW5nO1xyXG4gICAgaW5wdXRWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgICBkcm9wRG93bklzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgY29tYm9Cb3hJc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgIGljb25Jc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgIGFsdGVybmF0aXZlID0gZmFsc2U7XHJcbiAgICBAVmlld0NoaWxkKCdkcm9wZG93bicpIGRyb3Bkb3duOiBhbnk7XHJcbiAgICBjdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICBsYW5ndWFnZUlUID0gdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0Jyk7XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M/OiBhbnlcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnY2xpY2snLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmljb25Jc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbklzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZHJvcGRvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24udG9nZ2xlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcERvd25Jc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSBkb2MgYXMgRG9jdW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jaGVja0Nvbm5lY3Rpb24oKTtcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXBwSWQoKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiA9IGF1dGhTZXJ2aWNlLmhhc1N1YnNjcmlwdGlvblNlbGVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2hvd1NpZ25VcCA9IGF1dGhTZXJ2aWNlLnNob3dTaWduVXAoKTtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUFjY291bnRVcmwgPSBhdXRoU2VydmljZS5nZXRDcmVhdGVBY2NvdW50VXJsKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZFVybCA9IGF1dGhTZXJ2aWNlLmdldENoYW5nZVBhc3N3b3JkVXJsKCk7XHJcbiAgICAgICAgdGhpcy5sb2dvVVJMID0gYXV0aFNlcnZpY2UuZ2V0TG9nb1VSTCgpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VrZXkgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFRleHQgPSAnYXZhbnRpJztcclxuICAgICAgICAgICAgdGhpcy5sb2dpblRleHQgPSAnYWNjZWRpJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRUZXh0ID0gJ25leHQnO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luVGV4dCA9ICdsb2dpbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMudmFsaWRhdGUgfHwgIXRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlU3Vic2NyaXB0aW9uID0gJ1NjZWdsaSBsYSB0dWEgc290dG9zY3JpemlvbmUuJztcclxuICAgICAgICAgICAgdGhpcy5nb29kSm9iID0gJ0J1b24gbGF2b3JvISc7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gJ1NvdHRvc2NyaXppb25lJztcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9ICdJc3RhbnphJztcclxuICAgICAgICAgICAgdGhpcy5idXR0b25CYWNrID0gJzwgSU5ESUVUUk8nO1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnROYW1lID0gJ05vbWUgdXRlbnRlJztcclxuICAgICAgICAgICAgdGhpcy5lbnRlckFjY291bk5hbWUgPSAnSW5zZXJpc2NpIGlsIHR1byBub21lIHV0ZW50ZSBlIHRpIGludmllcmVtbyB1bmEgbnVvdmEgcGFzc3dvcmQnO1xyXG4gICAgICAgICAgICB0aGlzLndlbGNvbWUgPSAnQmVudmVudXRvIHN1IE1hZ29DbG91ZCc7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJDcmVkZW50aWFscyA9IFwiSW5zZXJpc2NpIG5vbWUgdXRlbnRlIGUgcGFzc3dvcmQgcGVyIGwnYXV0ZW50aWNhemlvbmUuXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZG9udHNob3cgPSAnTm9uIG1vc3RyYXJlIHBpw7kgcXVlc3RvIG1lc3NhZ2dpbyc7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmQgPSAnSGFpIGRpbWVudGljYXRvIGxhIHBhc3N3b3JkID8nO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NNYWl1c2MgPSAnQmxvY2NvIG1haXVzY29sZSBhdHRpdm8nO1xyXG4gICAgICAgICAgICB0aGlzLmlkbGVUaW1lb3V0TWVzc2FnZSA9ICdMYSB0dWEgc2Vzc2lvbmUgw6ggdGVybWluYXRhIHBlciBpbmF0dGl2aXTDoCwgcHVvaSByaXByZW5kZXJlIGRhIHF1aS4nO1xyXG4gICAgICAgICAgICB0aGlzLnVwZ3JhZGVXYXJuaW5nVGl0bGUgPSAnQWdnaW9ybmFtZW50byAgaW4gdmlzdGEnO1xyXG4gICAgICAgICAgICB0aGlzLm90cE1lc3NhZ2UgPSAnUHJlZ28gaW5zZXJpcmUgaWwgY29kaWNlIE9UUCByaWNldnV0byB2aWEgbWFpbCBvIFNNUyBhIHNlY29uZGEgZGVsbGEgbW9kYWxpdMOgIGltcG9zdGF0YS4nO1xyXG4gICAgICAgICAgICB0aGlzLm90cFRpdGxlID0gJ0F1dGVudGljYXppb25lIGEgZHVlIGZhdHRvcmknO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2VuZE9UUHBMYWJlbCA9ICdJbnZpYW1pIHVuIG51b3ZvIGNvZGljZSc7XHJcbiAgICAgICAgICAgIHRoaXMuYWx0ZXJuYXRpdmVsYmwgPSAnVXNhIG1ldG9kbyBhbHRlcm5hdGl2byc7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZSA9ICdDb2RpY2UnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlU3Vic2NyaXB0aW9uID0gJ0Nob29zZSB5b3VyIHN1YnNjcmlwdGlvbic7XHJcbiAgICAgICAgICAgIHRoaXMuZ29vZEpvYiA9ICdHb29kIGpvYiEnO1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9ICdTdWJzY3JpcHRpb24nO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gJ0luc3RhbmNlJztcclxuICAgICAgICAgICAgdGhpcy5idXR0b25CYWNrID0gJzwgQkFDSyc7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudE5hbWUgPSAnQWNjb3VudCBuYW1lJztcclxuICAgICAgICAgICAgdGhpcy5lbnRlckFjY291bk5hbWUgPSAnRW50ZXIgeW91ciBhY2NvdW50IG5hbWUgYW5kIHdlIHdpbGwgc2VuZCB5b3UgYSBuZXcgcGFzc3dvcmQnO1xyXG4gICAgICAgICAgICB0aGlzLndlbGNvbWUgPSAnV2VsY29tZSB0byBNYWdvQ2xvdWQnO1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyQ3JlZGVudGlhbHMgPSAnRW50ZXIgYWNjb3VudCBuYW1lIGFuZCBwYXNzd29yZCBmb3IgYXV0aGVudGljYXRpb24uJztcclxuICAgICAgICAgICAgdGhpcy5kb250c2hvdyA9ICdEbyBub3Qgc2hvdyBtZSB0aGlzIG1lc3NhZ2UgYWdhaW4nO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmdldFBhc3N3b3JkID0gJ0ZvcmdvdCB5b3VyIHBhc3N3b3JkID8nO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NNYWl1c2MgPSAnQ2FwcyBsb2NrIG9uJztcclxuICAgICAgICAgICAgdGhpcy5pZGxlVGltZW91dE1lc3NhZ2UgPSAnWW91ciBzZXNzaW9uIGhhcyBleHBpcmVkIGR1ZSB0byBpbmFjdGl2aXR5LCB5b3UgY2FuIHJlc3VtZSBmcm9tIGhlcmUuJztcclxuICAgICAgICAgICAgdGhpcy51cGdyYWRlV2FybmluZ1RpdGxlID0gJ1VwZGF0ZSBwbGFubmVkJztcclxuICAgICAgICAgICAgdGhpcy5vdHBNZXNzYWdlID0gJ1BsZWFzZSBpbnNlcnQgdGhlIE9UUCBjb2RlLiBEZXBlbmRpbmcgb24gdGhlIG1vZGUgc2V0LCB0aGUgT1RQIGlzIHNlbnQgZWl0aGVyIGJ5IGUtbWFpbCBvciBieSBTTVMuJztcclxuICAgICAgICAgICAgdGhpcy5vdHBUaXRsZSA9ICdUd28tRmFjdG9yIEF1dGhlbnRpY2F0aW9uJztcclxuICAgICAgICAgICAgdGhpcy5yZXNlbmRPVFBwTGFiZWwgPSAnU2VuZCBtZSBhIG5ldyBjb2RlJztcclxuICAgICAgICAgICAgdGhpcy5hbHRlcm5hdGl2ZWxibCA9ICdVc2UgYWx0ZXJuYXRpdmUgd2F5JztcclxuICAgICAgICAgICAgdGhpcy5jb2RlID0gJ0NvZGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhdXRoU2VydmljZS5yZUxvZ2luQWZ0ZXJPVFAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8nbG9naW4gc3Vic2NyaWJlZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvYWRMb2dpbkRhdGEoKTtcclxuICAgICAgICB3ZWJraXRBdXRvZmlsbFdvcmthcm91bmQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5jaGVja0Nvbm5lY3Rpb24oKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgLy8gc2UgbWkgYXJyaXZhIHVuIGVycm9yZSBtb3N0cm8gcXVlbGxvIGFsdHJpbWVudGkgc29sbyBsIHVybCBjaGUgbG8gaGEgZGF0b1xyXG4gICAgICAgICAgICBsZXQgZXJyb3IgPSB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZTtcclxuICAgICAgICAgICAgaWYgKGVycm9yLmxlbmd0aCA9PT0gMCkgZXJyb3IgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEJhc2VVcmwoKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlSVRcclxuICAgICAgICAgICAgICAgID8gJ1NlcnZpemlvIHRlbXBvcmFuZWFtZW50ZSBub24gcmFnZ2l1bmdpYmlsZS4gRGV0dGFnbGk6ICcgKyBlcnJvclxyXG4gICAgICAgICAgICAgICAgOiAnU2VydmljZSB0ZW1wb3JhcmlseSBub3QgYXZhaWxhYmxlLiBEZXRhaWxzOiAnICsgZXJyb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBvblN1YkNoYW5nZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgY29uc3Qgc2QgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5maW5kKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSA9PT0gbmV3VmFsdWUpO1xyXG4gICAgICAgIGlmIChzZCAmJiBzZC5pbnN0YW5jZWtleSkgdGhpcy5pbnN0YW5jZWtleSA9IGAke3RoaXMuaW5zdGFuY2V9OiAke3NkLmluc3RhbmNla2V5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBrZXlVcEZ1bmN0aW9uKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWRCdXR0b24oKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhcHNPbiA9IGV2ZW50LmdldE1vZGlmaWVyU3RhdGUgJiYgZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSgnQ2Fwc0xvY2snKTtcclxuICAgICAgICB0aGlzLmNhcHNMb2NrT24gPSBjYXBzT247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBkaXNhYmxlZEJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAoaGFzQXV0b2ZpbGwoKSAmJlxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLmlzQ29ubmVjdGVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uICYmIHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnZhbGlkYXRlKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm90cCAmJiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoICE9PSA2KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZykpIHx8XHJcbiAgICAgICAgICAgICghaGFzQXV0b2ZpbGwoKSAmJlxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLmlzQ29ubmVjdGVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMubG9naW5SZXF1ZXN0LnBhc3N3b3JkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uICYmIHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnZhbGlkYXRlKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm90cCAmJiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoICE9PSA2KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldCBpc0V4cGlyZWRTZXNzaW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVkU2Vzc2lvbicpID09PSAndHJ1ZSc7XHJcbiAgICB9XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIG5ld1VzZXIoKSB7XHJcbiAgICAgICAgLy8gcmltYW5kYSBhbGxhIHBhZ2luYSAocHJlc3VtaWJpbG1lbnRlIGRlbGxvIHN0b3JlKSBkb3ZlICBzYXLDoCBwb3NzaWJpbGUgY3JlYXJlIHVuIG51b3ZvIGFjY291bnQuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY3JlYXRlQWNjb3VudFVybF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgYmFjaygpIHtcclxuICAgICAgICAvLyByaXB1bGlzY28gdHV0dG8uLi5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QudG9rZW4gPSAnJztcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gJyc7XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy5uZXh0VGV4dDtcclxuICAgICAgICB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLm90cCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbG9naW4gcmVxdWVzdGVkJyk7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2F2ZUxvZ2luRGF0YSgpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2V4cGlyZWRTZXNzaW9uJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm90cCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCA9IHRoaXMuaW5wdXRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlICYmIHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gJ01DbG91ZFByZUxvZ2luJztcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NhbGxpbmcgcHJlbG9naW4gJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDEgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnByZWxvZ2luKHRoaXMubG9naW5SZXF1ZXN0KS5jYXRjaCgoZXJyMSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVycjEuZXJyb3IgJiYgZXJyMS5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMudmFsaWRhdGUgPyB0aGlzLmxvZ2luVGV4dCA6IHRoaXMubmV4dFRleHQ7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmkgc2lhIGxvZ2luIHNpYSBjaGVja2RiXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQxICYmIHJlc3VsdDEuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm90cCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlID8gdGhpcy5sb2dpblRleHQgOiB0aGlzLm5leHRUZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wYW5pZXNGb3JVc2VyKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm90cCAmJiByZXN1bHQxICYmIHJlc3VsdDEuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm90cCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vdHAgJiYgcmVzdWx0MSAmJiAhcmVzdWx0MS5SZXN1bHQgJiYgcmVzdWx0MS5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gdGhpcy5sYW5ndWFnZUlUID8gJ0NvZGljZSBub24gdmFsaWRvJyA6ICdJbnZhbGlkIGNvZGUnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXBwSWQoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2FsbGluZyBsb2dpbiAnKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLmxvZ2luUmVxdWVzdCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSA/IHRoaXMubG9naW5UZXh0IDogdGhpcy5uZXh0VGV4dDtcclxuICAgICAgICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaSBzaWEgbG9naW4gc2lhIGNoZWNrZGJcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZCA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmZpbmQoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5ID09PSB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZCAvKiYmIHNkLnN0YXR1cyovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBzY2hlZHVsZWQgPSAoc2Quc3RhdHVzICYgRW50aXR5U3RhdHVzLlVwZGF0ZVNjaGVkdWxlZCkgPT09IEVudGl0eVN0YXR1cy5VcGRhdGVTY2hlZHVsZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoc2NoZWR1bGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbm9uIGNvbnRyb2xsbyBwaXUsIGNoaWFtZXJvJyBzZW1wcmUgbCcgYXBpIGNoZSBmYXJhJyB0dXR0aSBpIGNvbnRyb2xsaSBkZWwgY2FzbyBpbiBtb2RvIGRhIHNnYW5jaWFyZSBsYSBsaWJyYXJpIGRhIGxvZ2ljaGUgY2hlIHBvdHJlYmJlcm8gY2FtYmlhcmUuXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZSBsYSBzdWIgbm9uIGhhIGxvIHN0YXRvIGltcG9zdGF0byAgbm9uIGNlcmNvIG5lbW1lbm8gcmlzcGFybWlhbmRvbWkgdW5hIGNoaWFtYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDEgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmdldENhbGVuZGFyKHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQxLnJlc3VsdCAmJiByZXN1bHQxLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlZFVwZGF0ZTogQ1VDYWxlbmRhckpvYiA9IHJlc3VsdDEuY29udGVudCBhcyBDVUNhbGVuZGFySm9iO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVkdWxlZFVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzY2hlZHVsZWRVcGRhdGU6ICcgKyBzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5hdXRoU2VydmljZS5nZXRVcGRhdGVNZXNzYWdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ0BAc3ViJywgdGhpcy5hdXRoU2VydmljZS5nZXRTdWJzY3JpcHRpb25EZXNjcmlwdGlvbigpISk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBkYXRlJywgdGhpcy5Gb3JtYXREYXRlU3RyaW5nKHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBzdGFydGgnLCB0aGlzLkZvcm1hdFN0YXJ0RGF0ZVN0cmluZyhzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAQGVuZGgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkZvcm1hdEVuZERhdGVTdHJpbmcoc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUsIHNjaGVkdWxlZFVwZGF0ZS5lc3RpbWF0ZWR1cGdyYWRldGltZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub24gbW9zdHJvIHNlIG1pIGhhbm5vIGRldHRvIGRpIG5vbiBtb3N0cmFyZSBwaXUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9wZW5VcGRhdGVBbGVydERpYWxvZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZ3JhZGVXYXJuaW5nVGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbnRzaG93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzUmVkaXJlY3RFeHRlcm5hbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvIGV4dGVybmFsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbih0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSwgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvIGludGVybmFsJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNvbnZlcnRVVENEYXRlVG9Mb2NhbERhdGUoZGF0ZTogRGF0ZSkge1xyXG4gICAgICAgIC8vIGRldm8gZmFyZSBxdWVzdG8gcmlnaXJvIHBlcmNow6ggbCBvcmEgY2hlIG1pIGFycml2YSAgw6ggaW50ZXNhIGNvbWUgdXRjIGUgZGV2byBtb3N0cmFybGEgY29tZSBsb2NhbGVcclxuICAgICAgICBjb25zdCBkdCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShcclxuICAgICAgICAgICAgRGF0ZS5VVEMoZHQuZ2V0RnVsbFllYXIoKSwgZHQuZ2V0TW9udGgoKSwgZHQuZ2V0RGF0ZSgpLCBkdC5nZXRIb3VycygpLCBkdC5nZXRNaW51dGVzKCksIGR0LmdldFNlY29uZHMoKSwgZHQuZ2V0TWlsbGlzZWNvbmRzKCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIEZvcm1hdERhdGVTdHJpbmcgPSAoZGF0ZTogRGF0ZSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gdGhpcy5jb252ZXJ0VVRDRGF0ZVRvTG9jYWxEYXRlKGRhdGUpO1xyXG4gICAgICAgIHJldHVybiBzdGFydERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pO1xyXG4gICAgICAgIC8vcmV0dXJuIGAke3N0YXJ0RGF0ZS5nZXREYXRlKCl9LSR7dGVtcERhdGUuZ2V0TW9udGgoKSArIDF9LSR7dGVtcERhdGUuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIEZvcm1hdFN0YXJ0RGF0ZVN0cmluZyA9IChkYXRlOiBEYXRlKTogc3RyaW5nID0+IHtcclxuICAgICAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLmNvbnZlcnRVVENEYXRlVG9Mb2NhbERhdGUoZGF0ZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlSVQpIHJldHVybiBzdGFydERhdGUudG9Mb2NhbGVTdHJpbmcoJ2l0LUlUJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IGZhbHNlIH0pO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHN0YXJ0RGF0ZS50b0xvY2FsZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAvL2NvbnN0IHplcm9lcyA9IG5ldyBBcnJheSgyICsgMSkuam9pbignMCcpO1xyXG4gICAgICAgIC8vdmFyIG0gPSAgICAoemVyb2VzICsgc3RhcnREYXRlLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpO1xyXG4gICAgICAgIC8vIHZhciBoID0gICAgKHplcm9lcyArIHN0YXJ0RGF0ZS5nZXRIb3VycygpKS5zbGljZSgtMik7XHJcbiAgICAgICAgLy8gcmV0dXJuICBgJHtofToke219YDtcclxuICAgIH07XHJcbiAgICAvL3RvZG8sXHJcbiAgICAvL2FtIC8gcG0/IHNlbCAnaW50ZXJ2YWxsbyBzY2F0dGEgYWwgZ2lvcm5vIGRvcG8sIGZvcnNlIGRvdnJlaSBkaXJlIGlsIDRtYWdnaW8gZGFsbGUgMTBwbVxyXG4gICAgLy8obyAyMiwgbWEgZGlwZW5kZSBkYWxsIGltcG9zdGF6aW9uZSBkaSBjdWx0dXJhKSAgYWwgNCAobyA1KSAgbWFnZ2lvIGFsbGUgMTEgKCBvIGFsbGUgMDEgYW0pICkgYWxcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgRm9ybWF0RW5kRGF0ZVN0cmluZyA9IChkYXRlOiBEYXRlLCBkdXJhdGlvbk1pbnM6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcERhdGUgPSB0aGlzLmNvbnZlcnRVVENEYXRlVG9Mb2NhbERhdGUoZGF0ZSk7XHJcbiAgICAgICAgdmFyIGZpbmFsRGF0ZSA9IG5ldyBEYXRlKHRlbXBEYXRlLmdldFRpbWUoKSArIGR1cmF0aW9uTWlucyAqIDYwMDAwKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkgcmV0dXJuIGZpbmFsRGF0ZS50b0xvY2FsZVN0cmluZygnaXQtSVQnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogZmFsc2UgfSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gZmluYWxEYXRlLnRvTG9jYWxlU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIC8vY29uc3QgemVyb2VzID0gbmV3IEFycmF5KDIgKyAxKS5qb2luKCcwJyk7XHJcbiAgICAgICAgLy92YXIgbSA9ICAgICh6ZXJvZXMgKyBmaW5hbERhdGUuZ2V0TWludXRlcygpKS5zbGljZSgtMik7XHJcbiAgICAgICAgLy92YXIgaCA9ICAgICh6ZXJvZXMgKyBmaW5hbERhdGUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpO1xyXG4gICAgICAgIC8vcmV0dXJuICBgJHtofToke219YDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBsb2FkTG9naW5EYXRhKCkge1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lID0gdGhpcy5hdXRoU2VydmljZS5nZXRBY2NvdW50TmFtZSgpIHx8ICcnO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0U3Vic2NyaXB0aW9uKCkgfHwgJyc7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wYW5pZXNGb3JVc2VyKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIHNhdmVMb2dpbkRhdGEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNTZXNzaW9uU3RvcmFnZSgpKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZCA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmZpbmQoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5ID09PSB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBpZiAoc2QpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzU2Vzc2lvblN0b3JhZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzZC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc2QuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMgPSBbXTtcclxuICAgICAgICAvLyB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGF3YWl0IHRoaXMucmVxdWVzdEFuZFNvcnRTdWJzY3JpcHRpb25zKHVzZXIpO1xyXG4gICAgICAgIC8vIFByZW1pbyBFbGVnYW56YSBDb2RpY2UgMjAxOSAoQEx1Y2FCcnVuaSlcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodGVtcCkgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMubG9naW5TdWJzY3JpcHRpb25zKSkgdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMgPSB0ZW1wO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnTm9uIHRyb3ZvIG5lc3N1bmEgc3Vic2NyaXB0aW9uIGFzc29jaWF0YSBhIHF1ZXN0byBhY2NvdW50Lic7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnSSBjYW5ub3QgZmluZCBhbnkgU3Vic2NyaXB0aW9ucyBhc3NvY2lhdGVkIHRvIHlvdSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnNbMF0uc3Vic2NyaXB0aW9ua2V5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9naW5TdWJzY3JpcHRpb25zLm1hcCgocykgPT4gcy5zdWJzY3JpcHRpb25rZXkpLmluZGV4T2YodGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9uc1swXS5zdWJzY3JpcHRpb25rZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vblN1YkNoYW5nZSh0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgYXN5bmMgcmVxdWVzdEFuZFNvcnRTdWJzY3JpcHRpb25zKHVzZXI6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8U3Vic2NyaXB0aW9uPj4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNhY2hlZENvbXBhbmllcy5oYXNPd25Qcm9wZXJ0eSh1c2VyKSAmJiB0aGlzLmNhY2hlZENvbXBhbmllc1t1c2VyIGFzIGFueV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkQ29tcGFuaWVzW3VzZXIgYXMgYW55XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXA6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBbXTtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmdldENvbXBhbmllc0ZvclVzZXIodXNlcikudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgcmVzdWx0LnNvcnQodGhpcy5jb21wYXJlQ29tcGFuaWVzKS5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICAgIHRlbXAucHVzaCh7IHN1YnNjcmlwdGlvbmtleTogYy5zdWJzY3JpcHRpb25rZXksIGRlc2NyaXB0aW9uOiBjLmRlc2NyaXB0aW9uLCBzdGF0dXM6IGMuc3RhdHVzLCBpbnN0YW5jZWtleTogYy5pbnN0YW5jZWtleSB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRlbXAubGVuZ3RoID4gMCkgdGhpcy5jYWNoZWRDb21wYW5pZXNbdXNlciBhcyBhbnldID0gdGVtcDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIGNvbXBhcmVDb21wYW5pZXMoYTogU3Vic2NyaXB0aW9uLCBiOiBTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICBjb25zdCBuYW1lQSA9IGEuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBuYW1lQiA9IGIuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGdvVG9Gb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLmZvcmdvdHBhc3N3b3JkKHRoaXMuZm9yZ2V0UGFzc3dvcmQsIHRoaXMuZW50ZXJBY2NvdW5OYW1lLCB0aGlzLmFjY291bnROYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGZvcmdvdHBhc3N3b3JkKFRpdGxlOiBzdHJpbmcsIE1lc3NhZ2U6IHN0cmluZywgUGxhY2VIb2xkZXI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihGb3Jnb3RQYXNzd29yZENvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBUaXRsZSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBQbGFjZUhvbGRlcixcclxuICAgICAgICAgICAgICAgIFRleHRWYWx1ZTogdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShhc3luYyAoZGF0YTogeyBUZXh0VmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGRhdGEuVGV4dFZhbHVlID09PSB1bmRlZmluZWQgfHwgZGF0YS5UZXh0VmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUlUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnSW5zZXJpc2NpIHVuIG5vbWUgdXRlbnRlIHZhbGlkbyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdXcml0ZSBhIHZhbGlkIGFjY291bnQgbmFtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY2NuYW1lOiBzdHJpbmcgPSBkYXRhLlRleHRWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5yZXNldHBhc3N3b3JkKGFjY25hbWUpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmlcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VJVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ0NvbnRyb2xsYSBsYSB0dWEgZS1tYWlsIGUgc2VndWkgbGUgaXN0cnV6aW9uaSBwZXIgcmVpbXBvc3RhcmUgbGEgcGFzc3dvcmQuJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnQ2hlY2sgeW91ciBlbWFpbCBhbmQgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgdG8gcmVzZXQgeW91ciBwYXNzd29yZC4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gcmVzdWx0Lk1lc3NhZ2UgKyAnIChDb2RlOiAnICsgcmVzdWx0LkNvZGUgKyAnKS4nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgaXNEcm9wRG93bkNsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5kcm9wRG93bklzQ2xpY2tlZCA9ICF0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xyXG4gICAgICAgIHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQgPSB0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xyXG4gICAgICAgIGlmICh0aGlzLmRyb3BEb3duSXNDbGlja2VkICYmIHRoaXMuY29tYm9Cb3hJc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uSXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdG9nZ2xlKGRyb3Bkb3duOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmRyb3BEb3duSXNDbGlja2VkID0gIXRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XHJcbiAgICAgICAgdGhpcy5pY29uSXNDbGlja2VkID0gdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcclxuICAgICAgICB0aGlzLmRyb3Bkb3duID0gZHJvcGRvd247XHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcERvd25Jc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgZHJvcGRvd24udG9nZ2xlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyB3b3JrYXJvdW5kIGZvciBjaHJvbWl1bSBidWcgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MzUyNTI3XHJcbmZ1bmN0aW9uIHdlYmtpdEF1dG9maWxsV29ya2Fyb3VuZCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCcpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoZWw6IGFueSkgPT4gKGVsLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID0gJ2stZmxvYXRpbmctbGFiZWwtY29udGFpbmVyJykpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAvLyBubyB3ZWJraXQgYnJvd3NlclxyXG4gICAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gaGFzQXV0b2ZpbGwoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Oi13ZWJraXQtYXV0b2ZpbGwnKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibG9naW4tY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibG9naW5cIiBzdHlsZT1cInotaW5kZXg6IDFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIG1hdC1jYXJkLWltYWdlIHN0eWxlPVwid2lkdGg6IDYwJVwiIHNyYz1cInt7IGxvZ29VUkwgfX1cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtYXJnaW4taDEgdGl0bGVcIj57eyB3ZWxjb21lIH19PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaXNFeHBpcmVkU2Vzc2lvblwiIGNsYXNzPVwibG9naW4tZXhwaXJlZC1zdWJ0aXRsZSBkZXNjcmlwdGlvblwiPnt7IGlkbGVUaW1lb3V0TWVzc2FnZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBlbnRlckNyZWRlbnRpYWxzIH19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInZhbGlkYXRlICYmICFvdHBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1hcmdpbi1oMSB0aXRsZVwiPnt7IGNob29zZVN1YnNjcmlwdGlvbiB9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgYWNjb3VudE5hbWUgfX06IHt7IGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSB9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJvdHBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1hcmdpbi1oMSB0aXRsZVwiPnt7IG90cFRpdGxlIH19PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBvdHBNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIFt0ZXh0XT1cImFjY291bnROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnYm9yZGVyLWJvdHRvbSdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZW5kb1RleHRCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3QuYWNjb3VudE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnZXJyb3Itc3RhdHVzJyA6ICdub3JtYWwtc3RhdGUnXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiF2YWxpZGF0ZSAmJiAhb3RwXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPyAnYm9yZGVyLWJvdHRvbS1lcnJvcicgOiAnYm9yZGVyLWJvdHRvbSdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZW5kb1RleHRCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3QucGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiaGlkZSA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2Vycm9yLXN0YXR1cycgOiAnbm9ybWFsLXN0YXRlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZSA9ICFoaWRlXCIgKm5nSWY9XCJoaWRlID09PSB0cnVlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHkgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlID0gIWhpZGVcIiAqbmdJZj1cImhpZGUgPT09IGZhbHNlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHlfb2ZmIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgKm5nSWY9XCJzdWJzY3JpcHRpb25TZWxlY3Rpb24gJiYgdmFsaWRhdGUgJiYgIW90cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJ7eyBzdWJzY3JpcHRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJbYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3InIDogJycsIGRyb3BEb3duSXNDbGlja2VkID8gJycgOiAnYm9yZGVyLWJvdHRvbSddXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZW5kby1kcm9wZG93bmxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNkcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImxvZ2luU3Vic2NyaXB0aW9ucz8ubGVuZ3RoIDw9IDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwibG9naW5TdWJzY3JpcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpZWxkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVGaWVsZD1cInN1YnNjcmlwdGlvbmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVByaW1pdGl2ZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia2VuZG8tZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25TdWJDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiaXNEcm9wRG93bkNsaWNrZWQoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9rZW5kby1kcm9wZG93bmxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJ0b2dnbGUoZHJvcGRvd24pXCIgKm5nSWY9XCJkcm9wRG93bklzQ2xpY2tlZFwiIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIGljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93X2NpcmNsZV91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJ0b2dnbGUoZHJvcGRvd24pXCIgKm5nSWY9XCIhZHJvcERvd25Jc0NsaWNrZWRcIiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCBpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd19jaXJjbGVfZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5zdGFuY2VrZXlcIiAqbmdJZj1cImxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPiAzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJzY3JpcHRpb24ga2V5OiB7eyBsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5IH19IHt7IGluc3RhbmNla2V5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwiY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID8gJ2JvcmRlci1ib3R0b20tZXJyb3InIDogJ2JvcmRlci1ib3R0b20nXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm90cFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlbmRvVGV4dEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5VXBGdW5jdGlvbigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROYW1lT3RwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiaGlkZU90cCA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vcm1hbC1zdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiaGlkZU90cCA9ICFoaWRlT3RwXCIgKm5nSWY9XCJoaWRlT3RwID09PSB0cnVlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHkgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJoaWRlT3RwID0gIWhpZGVPdHBcIiAqbmdJZj1cImhpZGVPdHAgPT09IGZhbHNlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+IHZpc2liaWxpdHlfb2ZmIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fwcy1sb2NrIHBhbmVsIGZsZXgtY2VudGVyIG1hcmdpbi1ib3R0b20tNVwiICpuZ0lmPVwiY2Fwc0xvY2tPblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPnt7IGJsb2NNYWl1c2MgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWVycm9yIHBhbmVsIGZsZXgtY2VudGVyIG1hcmdpbi1ib3R0b20tNVwiICpuZ0lmPVwiYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+e3sgYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1pbmZvIHBhbmVsIGZsZXgtY2VudGVyXCIgKm5nSWY9XCJhdXRoU2VydmljZS5va01lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj57eyBhdXRoU2VydmljZS5va01lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwib3RwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaW5rXCIgKGNsaWNrKT1cImF1dGhTZXJ2aWNlLnJlc2VuZE9UUChsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsIGFsdGVybmF0aXZlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHU+e3sgcmVzZW5kT1RQcExhYmVsIH19PC91PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBtYXJnaW4tdG9wOiAxMHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImFsdGVybmF0aXZlXCIgbmFtZT1cImFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdHJhbnNsYXRlPnt7IGFsdGVybmF0aXZlbGJsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwYWRkaW5nOiAwIDFweDsgbWFyZ2luLXRvcDogNjBweFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBsb2dpbi1idXR0b25cIiAoY2xpY2spPVwibG9naW4oKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZEJ1dHRvbigpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrLWljb24gay1pLWxvYWRpbmdcIiAqbmdJZj1cImxvYWRpbmdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhbG9hZGluZ1wiPnt7IGJ1dHRvblRleHQgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiAqbmdJZj1cIighbG9hZGluZyAmJiB2YWxpZGF0ZSkgfHwgb3RwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBiYWNrLWJ1dHRvblwiIChjbGljayk9XCJiYWNrKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgYnV0dG9uQmFjayB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzaG93U2lnblVwXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNpZ251cFwiIChjbGljayk9XCJuZXdVc2VyKClcIj5TaWduVXAgaGVyZSE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCIhdmFsaWRhdGUgJiYgIW90cFwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgbWFyZ2luLXRvcDogMTBweDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcmdvdHB3ZFwiIChjbGljayk9XCJnb1RvRm9yZ290UGFzc3dvcmQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPHU+e3sgZm9yZ2V0UGFzc3dvcmQgfX08L3U+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAwOyB3aWR0aDogMTAwJTsgei1pbmRleDogMFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY29weXJpZ2h0IGNvcHlyaWdodC1hYnNcIj5Mb2dpbiB2Mi4zLjErNDUgMjAxNyAtIHt7IGN1cnJlbnRZZWFyIH19LCBadWNjaGV0dGkgcy5wLmEuPC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=