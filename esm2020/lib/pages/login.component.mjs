import { LoginRequest } from '../models/login-request';
import { StorageVars } from '../models/storage-vars';
import { EntityStatus } from '../models/subscription.model';
import { ForgotPasswordComponent } from './forgot-password-dialog/forgot-password.component';
import { DateTime } from 'luxon';
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
import * as i8 from "@tb/icons";
import * as i9 from "@progress/kendo-angular-dropdowns";
const _c0 = ["dropdown"];
function TbLoginComponent_div_5_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r13.idleTimeoutMessage);
} }
function TbLoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "h2", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, TbLoginComponent_div_5_p_3_Template, 2, 1, "p", 24);
    i0.ɵɵelementStart(4, "p", 25);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "h2", 27);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.chooseSubscription);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.accountName, ": ", ctx_r1.loginRequest.accountName, " ");
} }
function TbLoginComponent_kendo_floatinglabel_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 28);
    i0.ɵɵelementStart(1, "input", 29);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_9_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.loginRequest.accountName = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_9_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.keyUpFunction($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r2.accountName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.loginRequest.accountName);
} }
function TbLoginComponent_kendo_floatinglabel_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "kendo-floatinglabel", 30);
    i0.ɵɵelementStart(1, "input", 31);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_kendo_floatinglabel_10_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.loginRequest.password = $event; })("keyup", function TbLoginComponent_kendo_floatinglabel_10_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.keyUpFunction($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "m4-icon", 32);
    i0.ɵɵlistener("click", function TbLoginComponent_kendo_floatinglabel_10_Template_m4_icon_click_2_listener() { i0.ɵɵrestoreView(_r18); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.hide = !ctx_r20.hide; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.loginRequest.password)("type", ctx_r3.hide ? "password" : "text");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r3.hide ? "tb-eyefilled" : "tb-hide");
} }
function TbLoginComponent_div_11_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" Subscription key: ", ctx_r22.loginRequest.subscriptionKey, " ", ctx_r22.instancekey, "");
} }
function TbLoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "kendo-floatinglabel", 34);
    i0.ɵɵelementStart(2, "kendo-dropdownlist", 35, 36);
    i0.ɵɵlistener("ngModelChange", function TbLoginComponent_div_11_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.loginRequest.subscriptionKey = $event; })("ngModelChange", function TbLoginComponent_div_11_Template_kendo_dropdownlist_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onSubChange($event); })("click", function TbLoginComponent_div_11_Template_kendo_dropdownlist_click_2_listener() { i0.ɵɵrestoreView(_r24); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.isDropDownClicked(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "m4-icon", 37);
    i0.ɵɵlistener("click", function TbLoginComponent_div_11_Template_m4_icon_click_4_listener() { i0.ɵɵrestoreView(_r24); const _r21 = i0.ɵɵreference(3); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.toggle(_r21); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, TbLoginComponent_div_11_p_6_Template, 2, 2, "p", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("text", ctx_r4.subscription);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", (ctx_r4.loginSubscriptions == null ? null : ctx_r4.loginSubscriptions.length) <= 1)("data", ctx_r4.loginSubscriptions)("ngModel", ctx_r4.loginRequest.subscriptionKey);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r4.dropDownIsClicked ? "upicon" : "downicon");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.loginSubscriptions.length > 3);
} }
function TbLoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵelement(1, "span", 41);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.blocMaiusc, " ");
} }
function TbLoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵelement(1, "span", 41);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r6.authService.errorMessage, " ");
} }
function TbLoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵelement(1, "span", 41);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r7.authService.okMessage, " ");
} }
function TbLoginComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 44);
} }
function TbLoginComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r9.buttonText);
} }
function TbLoginComponent_button_22_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 48);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r28.buttonBack, "");
} }
function TbLoginComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function TbLoginComponent_button_22_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.back(); });
    i0.ɵɵtemplate(1, TbLoginComponent_button_22_span_1_Template, 2, 1, "span", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r10.loading && ctx_r10.validate);
} }
function TbLoginComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p", 49);
    i0.ɵɵlistener("click", function TbLoginComponent_div_24_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.newUser(); });
    i0.ɵɵtext(2, "SignUp here!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TbLoginComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵelementStart(1, "p", 51);
    i0.ɵɵlistener("click", function TbLoginComponent_div_25_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.goToForgotPassword(); });
    i0.ɵɵelementStart(2, "u");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r12.forgetPassword);
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
        this.loading = false;
        this.loginRequest = new LoginRequest();
        this.loginSubscriptions = [];
        this.hide = true;
        this.isConnected = true;
        this.dropDownIsClicked = false;
        this.comboBoxIsClicked = false;
        this.iconIsClicked = false;
        // ---------------------------------------------------------------------------
        this.FormatDateString = (date) => {
            const tempDate = this.convertUTCDateToLocalDate(date);
            return `${tempDate.getDate()}-${tempDate.getMonth() + 1}-${tempDate.getFullYear()}`;
        };
        // ---------------------------------------------------------------------------
        this.FormatStartDateString = (date) => {
            const tempDate = this.convertUTCDateToLocalDate(date);
            // imposto l ora senza minuti, arrotonadando per sicurezza.
            return `${this.NumberPad(tempDate.getHours(), 2)}:00`;
        };
        // ---------------------------------------------------------------------------
        this.FormatEndDateString = (date) => {
            const tempDate = this.convertUTCDateToLocalDate(date);
            let h = tempDate.getHours();
            h += 2; // cablato due ore perche non abbiamo ancora stime sensate e cerchiamo di stare aderenti alla mail inviata
            return `${this.NumberPad(h, 2)}:00`;
        };
        // ---------------------------------------------------------------------------
        this.NumberPad = (value, padding) => {
            const zeroes = new Array(padding + 1).join('0');
            return (zeroes + value).slice(-padding);
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
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
            this.buttonText = this.validate || !this.subscriptionSelection ? 'Accedi' : 'Avanti';
        }
        else {
            this.buttonText = this.validate || !this.subscriptionSelection ? 'Login' : 'Next';
        }
        this.currentYear = new Date().getFullYear().toString();
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
            this.chooseSubscription = 'Scegli la tua sottoscrizione.';
            this.goodJob = 'Buon lavoro!';
            this.subscription = 'Sottoscrizione';
            this.instance = 'Istanza';
            this.buttonBack = '< INDIETRO';
            this.accountName = 'Nome utente';
            this.welcome = 'Benvenuto su MagoCloud';
            this.enterCredentials = "Inserisci nome utente e password per l'autenticazione.";
            this.dontshow = 'Non mostrare più questo messaggio';
            this.forgetPassword = 'Hai dimenticato la password';
            this.blocMaiusc = 'Blocco maiuscole attivo';
            this.idleTimeoutMessage = 'La tua sessione è terminata per inattività, puoi riprendere da qui.';
            this.upgradeWarningTitle = 'Aggiornamento  in vista!';
        }
        else {
            this.chooseSubscription = 'Choose your subscription.';
            this.goodJob = 'Good job!';
            this.subscription = 'Subscription';
            this.instance = 'Instance';
            this.buttonBack = '< BACK';
            this.accountName = 'Account name';
            this.welcome = 'Welcome to MagoCloud';
            this.enterCredentials = 'Enter account name and password for authentication.';
            this.dontshow = 'Do not show me this message again';
            this.forgetPassword = 'Did you forget your password ?';
            this.blocMaiusc = 'Caps lock on';
            this.idleTimeoutMessage = 'Your session has expired due to inactivity, you can resume from here.';
            this.upgradeWarningTitle = 'Update planned!';
        }
        authService.reLoginAfterOTP.subscribe(() => {
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
            if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
                this.authService.errorMessage = 'Servizio di autenticazione temporaneamente inattivo';
            }
            else {
                this.authService.errorMessage = 'Authentication service temporarily down';
            }
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
            if (!this.disabledButton())
                this.login();
        }
        const capsOn = event.getModifierState && event.getModifierState('CapsLock');
        this.capsLockOn = capsOn;
    }
    // ---------------------------------------------------------------------------
    disabledButton() {
        return ((hasAutofill() &&
            (!this.isConnected ||
                (this.subscriptionSelection && this.loginSubscriptions.length === 0 && this.validate) ||
                this.loading)) ||
            (!hasAutofill() &&
                (!this.isConnected ||
                    !this.loginRequest.accountName ||
                    !this.loginRequest.password ||
                    (this.subscriptionSelection && this.loginSubscriptions.length === 0 && this.validate) ||
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
        this.buttonText = 'Next';
        this.loginSubscriptions = [];
        this.authService.okMessage = '';
        this.authService.errorMessage = '';
    }
    // ---------------------------------------------------------------------------
    async login() {
        this.authService.okMessage = '';
        this.authService.errorMessage = '';
        this.saveLoginData();
        this.loading = true;
        sessionStorage.removeItem('expiredSession');
        if (!this.validate && this.subscriptionSelection) {
            this.loginRequest.appId = 'MCloudPreLogin';
            this.loginRequest.subscriptionKey = '';
            const result1 = await this.authService.prelogin(this.loginRequest).catch((err1) => {
                this.loading = false;
                this.authService.errorMessage = err1.error && err1.error.Message;
                return;
            });
            this.loading = false;
            this.buttonText = this.validate ? 'Login' : 'Next';
            // todo controlla come vengono mostrati errori sia login sia checkdb
            if (result1 && result1.Result) {
                this.validate = true;
                this.buttonText = this.validate ? 'Login' : 'Next';
                this.getCompaniesForUser(this.loginRequest.accountName);
                this.authService.errorMessage = '';
                this.authService.okMessage = '';
            }
            else {
                this.loading = false;
            }
        }
        else {
            this.loginRequest.appId = this.authService.getAppId();
            const result = await this.authService.login(this.loginRequest).catch((err) => {
                this.loading = false;
                this.authService.errorMessage = err.error && err.error.Message;
                return;
            });
            this.loading = false;
            this.buttonText = this.validate ? 'Login' : 'Next';
            // todo controlla come vengono mostrati errori sia login sia checkdb
            if (result && result.Result) {
                const sd = this.loginSubscriptions.find((s) => s.subscriptionkey === this.loginRequest.subscriptionKey);
                if (sd && sd.status) {
                    // tslint:disable-next-line:no-bitwise
                    const scheduled = (sd.status & EntityStatus.UpdateScheduled) === EntityStatus.UpdateScheduled;
                    if (scheduled) {
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
                                message = message.replace('@@endh', this.FormatEndDateString(scheduledUpdate.scheduledtime));
                                // tslint:disable-next-line:max-line-length
                                const diffInDays = DateTime.fromISO(scheduledUpdate.scheduledtime.toString())
                                    .diff(DateTime.fromISO(DateTime.local().toString()), 'days')
                                    .toObject().days;
                                // non mostro se mi torna una data precedente ad oggi.
                                if (val !== message &&
                                    DateTime.local() < DateTime.fromISO(scheduledUpdate.scheduledtime.toString()) &&
                                    // mostro solo se previsti entro 15 giorni per decisione mia di me medesima ilaria
                                    diffInDays &&
                                    diffInDays < 15) {
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
            this.authService.errorMessage = 'No Subscriptions associated to this user';
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
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
            this.forgotpassword('Hai dimenticato la password ?', 'Inserisci il tuo nome utente: ', 'Nome utente');
        }
        else {
            this.forgotpassword('Forgot Password ?', 'Please write your account name: ', 'Account name');
        }
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
                if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
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
                if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
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
    } }, decls: 29, vars: 16, consts: [[1, "login-container"], [1, "login", 2, "z-index", "1"], [1, "login-header"], ["mat-card-image", "", 2, "width", "60%", 3, "src"], [4, "ngIf"], [1, "login-form"], [3, "text", 4, "ngIf"], ["text", "Password", 4, "ngIf"], ["class", "form-control", 4, "ngIf"], [1, "login-infos"], ["class", "caps-lock", 4, "ngIf"], ["class", "login-error", 4, "ngIf"], ["class", "login-info", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "login-button", 3, "disabled", "click"], ["class", "k-icon k-i-loading", 4, "ngIf"], ["style", "letter-spacing: 3px; text-transform: uppercase", 4, "ngIf"], [1, "login-footer"], ["kendoButton", "", "class", "login-button", "style", "background: grey", 3, "click", 4, "ngIf"], ["style", "display: flex; margin-top: 40px; justify-content: flex-end", 4, "ngIf"], [2, "position", "absolute", "bottom", "0", "width", "100%", "z-index", "0"], [1, "copyright", "copyright-abs"], [1, "login-title"], ["class", "login-expired-subtitle", 4, "ngIf"], [1, "login-subtitle"], [1, "login-expired-subtitle"], [1, "login-chooseSubscription"], [3, "text"], ["kendoTextBox", "", "name", "accountName", "type", "text", 3, "ngModel", "ngModelChange", "keyup"], ["text", "Password"], ["kendoTextBox", "", "name", "password", "autocomplete", "current-password", 3, "ngModel", "type", "ngModelChange", "keyup"], [1, "icon", 3, "icon", "click"], [1, "form-control"], [2, "border-bottom", "1px solid #005890", 3, "text"], ["name", "subscription", "textField", "description", "valueField", "subscriptionkey", "valuePrimitive", "true", 2, "position", "relative", 3, "disabled", "data", "ngModel", "ngModelChange", "click"], ["dropdown", ""], ["icon", "tb-circledrightfilled", 1, "icon", 3, "ngClass", "click"], ["class", "instancekey", 4, "ngIf"], [1, "instancekey"], [1, "caps-lock"], [1, "k-icon", "k-i-warning"], [1, "login-error"], [1, "login-info"], [1, "k-icon", "k-i-loading"], [2, "letter-spacing", "3px", "text-transform", "uppercase"], ["kendoButton", "", 1, "login-button", 2, "background", "grey", 3, "click"], ["style", "letter-spacing: 3px", 4, "ngIf"], [2, "letter-spacing", "3px"], [1, "signup", 3, "click"], [2, "display", "flex", "margin-top", "40px", "justify-content", "flex-end"], [1, "forgotpwd", 3, "click"]], template: function TbLoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div");
        i0.ɵɵelement(4, "img", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, TbLoginComponent_div_5_Template, 6, 3, "div", 4);
        i0.ɵɵtemplate(6, TbLoginComponent_div_6_Template, 5, 3, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "form");
        i0.ɵɵelementStart(8, "div", 5);
        i0.ɵɵtemplate(9, TbLoginComponent_kendo_floatinglabel_9_Template, 2, 2, "kendo-floatinglabel", 6);
        i0.ɵɵtemplate(10, TbLoginComponent_kendo_floatinglabel_10_Template, 3, 3, "kendo-floatinglabel", 7);
        i0.ɵɵtemplate(11, TbLoginComponent_div_11_Template, 7, 6, "div", 8);
        i0.ɵɵelementStart(12, "div", 9);
        i0.ɵɵtemplate(13, TbLoginComponent_div_13_Template, 3, 1, "div", 10);
        i0.ɵɵtemplate(14, TbLoginComponent_div_14_Template, 3, 1, "div", 11);
        i0.ɵɵtemplate(15, TbLoginComponent_div_15_Template, 3, 1, "div", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 13);
        i0.ɵɵelementStart(17, "div", 14);
        i0.ɵɵelementStart(18, "button", 15);
        i0.ɵɵlistener("click", function TbLoginComponent_Template_button_click_18_listener() { return ctx.login(); });
        i0.ɵɵtemplate(19, TbLoginComponent_span_19_Template, 1, 0, "span", 16);
        i0.ɵɵtemplate(20, TbLoginComponent_span_20_Template, 2, 1, "span", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 18);
        i0.ɵɵtemplate(22, TbLoginComponent_button_22_Template, 2, 1, "button", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 18);
        i0.ɵɵtemplate(24, TbLoginComponent_div_24_Template, 3, 0, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(25, TbLoginComponent_div_25_Template, 4, 1, "div", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 21);
        i0.ɵɵelementStart(27, "p", 22);
        i0.ɵɵtext(28);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵpropertyInterpolate("src", ctx.logoURL, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.validate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.validate);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.validate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.validate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.subscriptionSelection && ctx.validate);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.capsLockOn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.authService.errorMessage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.authService.okMessage);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx.disabledButton());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.loading);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.validate);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showSignUp);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.validate);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("Login.2.2.0.28 \u00A9 2017 - ", ctx.currentYear, ", Zucchetti s.p.a. ");
    } }, directives: [i4.NgIf, i5.ɵNgNoValidate, i5.NgControlStatusGroup, i5.NgForm, i6.FloatingLabelComponent, i7.TextBoxDirective, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i8.IconsComponent, i9.DropDownListComponent, i4.NgClass], styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown[_ngcontent-%COMP%], .k-animation-container[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{box-shadow:none;color:#005890;background:#d0e4ff}.k-list[_ngcontent-%COMP%]{background:#fff;color:#005890}.k-list[_ngcontent-%COMP%]   .k-item.k-state-selected[_ngcontent-%COMP%], .k-list[_ngcontent-%COMP%]   .k-list-optionlabel.k-state-selected[_ngcontent-%COMP%], .k-list[_ngcontent-%COMP%]   .k-item.k-state-selected[_ngcontent-%COMP%]:hover, .k-list[_ngcontent-%COMP%]   .k-list-optionlabel.k-state-selected[_ngcontent-%COMP%]:hover, .k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:hover, .k-list[_ngcontent-%COMP%]   .k-item.k-state-hover[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:hover, .k-list-optionlabel.k-state-hover[_ngcontent-%COMP%], .k-list-item.k-selected[_ngcontent-%COMP%]:hover{color:#005890;background-color:#d0e4ff!important}.k-list[_ngcontent-%COMP%]   .k-item[_ngcontent-%COMP%]:focus, .k-list[_ngcontent-%COMP%]   .k-item.k-state-focused[_ngcontent-%COMP%], .k-list-optionlabel[_ngcontent-%COMP%]:focus, .k-list-optionlabel.k-state-focused[_ngcontent-%COMP%]{box-shadow:none}.k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap[_ngcontent-%COMP%]:hover, .k-dropdown[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%]   .k-dropdown-wrap.k-state-hover[_ngcontent-%COMP%]{color:#005890}.k-list-item.k-selected[_ngcontent-%COMP%], .k-selected.k-list-optionlabel[_ngcontent-%COMP%], .k-list-item[_ngcontent-%COMP%]:hover, .k-list-optionlabel[_ngcontent-%COMP%]:hover, .k-list-item.k-hover[_ngcontent-%COMP%], .k-hover.k-list-optionlabel[_ngcontent-%COMP%]{color:#005890!important;background-color:#d0e4ff!important}.k-animation-container[_ngcontent-%COMP%] > .arrow-right[_ngcontent-%COMP%]{box-shadow:none}.k-animation-container-fixed[_ngcontent-%COMP%] > .k-popup[_ngcontent-%COMP%]{margin-right:0;border:none;background:transparent}.mat-dialog-container[_ngcontent-%COMP%]{background:white!important}  html,   body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}tb-login[_nghost-%COMP%]{font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-image:url(https://magocloud-store-pdf.s3.eu-west-1.amazonaws.com/login-bg.png);background-size:cover;background-repeat:no-repeat}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}}@media screen and (min-width: 576px){tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:450px}}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .upicon[_ngcontent-%COMP%]{transform:rotate(90deg);padding:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .downicon[_ngcontent-%COMP%]{transform:rotate(270deg)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container{width:100%;margin:8px 0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container>.k-label{font-weight:600;color:#005890}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-textbox, tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-textbox .k-input, tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-textarea{border:none;border-bottom:2px solid #0078c3;border-radius:0;box-shadow:none;padding:5px 0;height:33px;color:#005890!important;font-size:16px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-picker-md .k-input-inner{border-bottom:1px solid #0078c3;background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0;font-weight:600}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-picker{border-width:0px;border-style:unset}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container:after{background-color:#8ee2ff;height:1px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-list .k-item.k-state-selected:hover, tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-list .k-list-optionlabel.k-state-selected:hover{color:#005890;background-color:#d0e4ff}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown{border:none;background:none}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0078c3}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]{margin:20px 0}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]{margin:0 0 10px;background:#005890;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em;display:flex;align-items:center}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]   .caps-lock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{margin:0 0 10px;background:#ee2411;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]{margin:0 0 10px;background:green;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-infos[_ngcontent-%COMP%]   .login-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-footer[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{padding:4px 12px;background:#e77b2d;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0)}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-footer[_ngcontent-%COMP%]   .login-button.k-state-disabled[_ngcontent-%COMP%]{background:#c0c6c9;cursor:not-allowed}tb-login[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-footer[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]   .k-i-loading[_ngcontent-%COMP%]{font-size:20px}tb-login[_nghost-%COMP%]   p.instancekey[_ngcontent-%COMP%]{font-size:9px;font-weight:300;text-indent:1px;color:#005890}tb-login[_nghost-%COMP%]   p.copyright[_ngcontent-%COMP%]{font-size:10px;font-weight:300;margin:0;color:#fff}tb-login[_nghost-%COMP%]   p.copyright-abs[_ngcontent-%COMP%]{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}tb-login[_nghost-%COMP%]   p.forgotpwd[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}tb-login[_nghost-%COMP%]   p.signup[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}tb-login[_nghost-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important}tb-login[_nghost-%COMP%]   [_ngcontent-%COMP%]:focus{outline:none}tb-login[_nghost-%COMP%]   .login-title[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:600;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-subtitle[_ngcontent-%COMP%]{margin-top:-10px;margin-left:-1.5px;color:#005890}tb-login[_nghost-%COMP%]   .login-expired-subtitle[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:700}tb-login[_nghost-%COMP%]   .login-chooseSubscription[_ngcontent-%COMP%]{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}tb-login[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{position:absolute;bottom:6px;right:0;cursor:pointer;color:#005890;font-size:14px;padding-bottom:2px;z-index:333}@media (min-width: 576px){tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{padding:20px}tb-login[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]     .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){tb-login[_nghost-%COMP%]   .login-title[_ngcontent-%COMP%]{font-size:19px}tb-login[_nghost-%COMP%]   .login-sign-in[_ngcontent-%COMP%]{font-size:x-large}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbLoginComponent, [{
        type: Component,
        args: [{ selector: 'tb-login', template: "<div class=\"login-container\">\r\n    <div class=\"login\" style=\"z-index: 1\">\r\n        <div class=\"login-header\">\r\n            <div>\r\n                <img mat-card-image style=\"width: 60%\" src=\"{{ logoURL }}\" />\r\n            </div>\r\n            <div *ngIf=\"!validate\">\r\n                <h2 class=\"login-title\">{{ welcome }}</h2>\r\n                <p *ngIf=\"isExpiredSession\" class=\"login-expired-subtitle\">{{ idleTimeoutMessage }}</p>\r\n                <p class=\"login-subtitle\">{{ enterCredentials }}</p>\r\n            </div>\r\n            <div *ngIf=\"validate\">\r\n                <h2 class=\"login-chooseSubscription\">{{ chooseSubscription }}</h2>\r\n                <p class=\"login-subtitle\">{{ accountName }}: {{ loginRequest.accountName }} </p>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <form>\r\n            <div class=\"login-form\">\r\n\r\n                <kendo-floatinglabel [text]=\"accountName\" *ngIf=\"!validate\">\r\n                    <input kendoTextBox [(ngModel)]=\"loginRequest.accountName\" (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"accountName\" type=\"text\" />\r\n                </kendo-floatinglabel>\r\n\r\n                <kendo-floatinglabel text=\"Password\" *ngIf=\"!validate\">\r\n                    <input kendoTextBox [(ngModel)]=\"loginRequest.password\" (keyup)=\"keyUpFunction($event)\"\r\n                        name=\"password\" [type]=\"hide ? 'password' : 'text'\" autocomplete=\"current-password\" />\r\n                    <m4-icon (click)=\"hide = !hide\" class=\"icon\" [icon]=\"hide ? 'tb-eyefilled':'tb-hide'\"></m4-icon>\r\n                </kendo-floatinglabel>\r\n\r\n                <div class=\"form-control\" *ngIf=\"subscriptionSelection && validate\">\r\n                    <kendo-floatinglabel text=\"{{ subscription }}\" style=\"border-bottom: 1px solid #005890\">\r\n\r\n                        <kendo-dropdownlist #dropdown [disabled]=\"loginSubscriptions?.length <= 1\"\r\n                            [data]=\"loginSubscriptions\" name=\"subscription\" textField=\"description\"\r\n                            valueField=\"subscriptionkey\" valuePrimitive=\"true\"\r\n                            [(ngModel)]=\"loginRequest.subscriptionKey\" style=\"position: relative;\"\r\n                            (ngModelChange)=\"onSubChange($event)\" (click)=\"isDropDownClicked()\">\r\n                        </kendo-dropdownlist>\r\n                        <m4-icon (click)=\"toggle(dropdown)\" class=\"icon\" \r\n                            [ngClass]=\" dropDownIsClicked ?  'upicon': 'downicon' \"\r\n                            icon=\"tb-circledrightfilled\"></m4-icon>\r\n                    </kendo-floatinglabel>\r\n                    <div>\r\n                        <p class=\"instancekey\" *ngIf=\"loginSubscriptions.length > 3\"> Subscription key:\r\n                            {{loginRequest.subscriptionKey}} {{instancekey}}</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"login-infos\">\r\n                    <div class=\"caps-lock\" *ngIf=\"capsLockOn\"><span class=\"k-icon k-i-warning\"></span> {{ blocMaiusc }}\r\n                    </div>\r\n                    <div class=\"login-error\" *ngIf=\"authService.errorMessage\">\r\n                        <span class=\"k-icon k-i-warning\"></span>{{ authService.errorMessage }}\r\n                    </div>\r\n                    <div class=\"login-info\" *ngIf=\"authService.okMessage\">\r\n                        <span class=\"k-icon k-i-warning\"></span>{{ authService.okMessage }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 0 1px;\">\r\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n                <button kendoButton class=\"login-button\" (click)=\"login()\" [disabled]=\"disabledButton()\">\r\n                    <span class=\"k-icon k-i-loading\" *ngIf=\"loading\"></span>\r\n                    <span *ngIf=\"!loading\" style=\"letter-spacing: 3px; text-transform: uppercase\">{{ buttonText\r\n                        }}</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"login-footer\">\r\n                <button kendoButton class=\"login-button\" style=\"background: grey\" (click)=\"back()\"\r\n                    *ngIf=\"!loading && validate\">\r\n                    <span *ngIf=\"!loading && validate\" style=\"letter-spacing: 3px\"> {{ buttonBack }}</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <div *ngIf=\"showSignUp\">\r\n                <p class=\"signup\" (click)=\"newUser()\">SignUp here!</p>\r\n            </div>\r\n            <!-- <div class=\"login-button-container\">\r\n                <button kendoButton class=\" login-button \" (click)=\"back()\" *ngIf=\"!loading && validate \">\r\n                    <span *ngIf=\"!loading && validate \" style=\"letter-spacing: 3px;\">\r\n                        < BACK</span>\r\n                </button>\r\n            </div> -->\r\n            <!-- <div class=\"login-button-container\">\r\n                <button kendoButton class=\" login-button \" (click)=\"login() \" [disabled]=\"disabledButton() \">\r\n                    <span class=\"k-icon k-i-loading \" *ngIf=\"loading \"></span>\r\n                    <span *ngIf=\"!loading \">{{ buttonText}}</span>\r\n                </button>\r\n            </div> -->\r\n        </div>\r\n        <div *ngIf=\"!validate\" style=\"display: flex; margin-top: 40px; justify-content: flex-end\">\r\n            <p class=\"forgotpwd\" (click)=\"goToForgotPassword()\">\r\n                <u>{{ forgetPassword }}</u>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div style=\"position: absolute; bottom: 0; width: 100%; z-index: 0\">\r\n        <p class=\"copyright copyright-abs\">Login.2.2.0.28 \u00A9 2017 - {{ currentYear }}, Zucchetti s.p.a. </p>\r\n    </div>\r\n</div>", styles: ["@import\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\";body,html{font-family:Open Sans,sans-serif!important;overflow:hidden;padding:0;margin:0}.k-animation-container-shown,.k-animation-container>.k-popup{box-shadow:none;color:#005890;background:#d0e4ff}.k-list{background:#fff;color:#005890}.k-list .k-item.k-state-selected,.k-list .k-list-optionlabel.k-state-selected,.k-list .k-item.k-state-selected:hover,.k-list .k-list-optionlabel.k-state-selected:hover,.k-list .k-item:hover,.k-list .k-item.k-state-hover,.k-list-optionlabel:hover,.k-list-optionlabel.k-state-hover,.k-list-item.k-selected:hover{color:#005890;background-color:#d0e4ff!important}.k-list .k-item:focus,.k-list .k-item.k-state-focused,.k-list-optionlabel:focus,.k-list-optionlabel.k-state-focused{box-shadow:none}.k-dropdown .k-dropdown-wrap:hover,.k-dropdowntree .k-dropdown-wrap:hover,.k-dropdown .k-dropdown-wrap.k-state-hover,.k-dropdowntree .k-dropdown-wrap.k-state-hover{color:#005890}.k-list-item.k-selected,.k-selected.k-list-optionlabel,.k-list-item:hover,.k-list-optionlabel:hover,.k-list-item.k-hover,.k-hover.k-list-optionlabel{color:#005890!important;background-color:#d0e4ff!important}.k-animation-container>.arrow-right{box-shadow:none}.k-animation-container-fixed>.k-popup{margin-right:0;border:none;background:transparent}.mat-dialog-container{background:white!important}::ng-deep html,::ng-deep body{height:100%;margin:0;font-family:Open Sans,sans-serif!important}:host(tb-login){font-family:Open Sans,sans-serif!important;display:block;min-height:100vh;padding:0;margin:0;overflow:auto;height:100%;min-height:100%;width:100%}:host(tb-login) .login-container{display:flex;flex:1;min-height:100%;justify-content:center;align-items:center;padding:20px;background-image:url(https://magocloud-store-pdf.s3.eu-west-1.amazonaws.com/login-bg.png);background-size:cover;background-repeat:no-repeat}:host(tb-login) .login-container .login{background-color:#e5ebee;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:450px;flex:1;display:flex;padding:40px;flex-direction:column;justify-content:center;background:white}@media screen and (max-width: 768px){:host(tb-login) .login-container .login{padding:20px}}@media screen and (min-width: 576px){:host(tb-login) .login-container .login{max-width:450px}}:host(tb-login) .login-container .login .upicon{transform:rotate(90deg);padding:1px}:host(tb-login) .login-container .login .downicon{transform:rotate(270deg)}:host(tb-login) .login-container .login .login-header{display:flex;flex-direction:column}:host(tb-login) .login-container .login .login-form{display:flex;flex-direction:column;justify-content:center;margin:0}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container{width:100%;margin:8px 0}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container>.k-label{font-weight:600;color:#005890}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-textbox,:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-textbox .k-input,:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-textarea{border:none;border-bottom:2px solid #0078c3;border-radius:0;box-shadow:none;padding:5px 0;height:33px;color:#005890!important;font-size:16px}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-picker-md .k-input-inner{border-bottom:1px solid #0078c3;background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0;font-weight:600}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-picker{border-width:0px;border-style:unset}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container:after{background-color:#8ee2ff;height:1px}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-picker .k-input-button{border-color:transparent;display:none}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-list .k-item.k-state-selected:hover,:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-list .k-list-optionlabel.k-state-selected:hover{color:#005890;background-color:#d0e4ff}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown{border:none;background:none}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap{border:none;border-radius:0;padding:0;box-shadow:none}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap>.k-input{background:white!important;height:33px;opacity:1;color:#005890;font-size:16px;padding:0}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{opacity:1;color:#fff}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled .k-select{display:none}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap.k-state-disabled{-webkit-filter:none;filter:none;background:#0078c3}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select{color:#8ee2ff;opacity:1;background:#fff;border-radius:0;border:none}:host(tb-login) .login-container .login .login-form ::ng-deep .k-floating-label-container .k-dropdown .k-dropdown-wrap .k-select .k-icon{color:#005890;display:none}:host(tb-login) .login-container .login .login-infos{margin:20px 0}:host(tb-login) .login-container .login .login-infos .caps-lock{margin:0 0 10px;background:#005890;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em;display:flex;align-items:center}:host(tb-login) .login-container .login .login-infos .caps-lock span{margin-right:5px}:host(tb-login) .login-container .login .login-infos .login-error{margin:0 0 10px;background:#ee2411;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}:host(tb-login) .login-container .login .login-infos .login-error span{margin-right:5px}:host(tb-login) .login-container .login .login-infos .login-info{margin:0 0 10px;background:green;color:#fff;font-size:13px;font-weight:300;padding:5px 10px;line-height:1.8em}:host(tb-login) .login-container .login .login-infos .login-info span{margin-right:5px}:host(tb-login) .login-container .login .login-footer{float:right;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}:host(tb-login) .login-container .login .login-footer .login-button{padding:4px 12px;background:#e77b2d;color:#fff;font-size:14px;border-radius:0;border-color:rgba(0,0,0,0)}:host(tb-login) .login-container .login .login-footer .login-button.k-state-disabled{background:#c0c6c9;cursor:not-allowed}:host(tb-login) .login-container .login .login-footer .login-button .k-i-loading{font-size:20px}:host(tb-login) p.instancekey{font-size:9px;font-weight:300;text-indent:1px;color:#005890}:host(tb-login) p.copyright{font-size:10px;font-weight:300;margin:0;color:#fff}:host(tb-login) p.copyright-abs{position:absolute;bottom:5px;color:#ccc;text-align:center;width:100%}:host(tb-login) p.forgotpwd{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}:host(tb-login) p.signup{font-size:13px;font-weight:300;margin:0;color:#fff;text-align:left;cursor:pointer}:host(tb-login) input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important}:host(tb-login) :focus{outline:none}:host(tb-login) .login-title{margin-top:20px;margin-left:-2px;color:#005890;font-weight:600;font-size:1.5rem}:host(tb-login) .login-subtitle{margin-top:-10px;margin-left:-1.5px;color:#005890}:host(tb-login) .login-expired-subtitle{margin-top:20px;margin-bottom:20px;margin-left:-1.5px;color:#005890;font-weight:700}:host(tb-login) .login-chooseSubscription{margin-top:20px;margin-left:-2px;color:#005890;font-weight:300;font-size:1.5rem}:host(tb-login) .login-sign-in{font-family:inherit;font-weight:100;font-size:xx-large;color:#005890}:host(tb-login) .icon{position:absolute;bottom:6px;right:0;cursor:pointer;color:#005890;font-size:14px;padding-bottom:2px;z-index:333}@media (min-width: 576px){:host(tb-login) .login{padding:20px}:host(tb-login) .login .login-form ::ng-deep .k-floating-label{margin:10px 0}}@media screen and (max-width: 768px){:host(tb-login) .login-title{font-size:19px}:host(tb-login) .login-sign-in{font-size:x-large}}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL3BhZ2VzL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFnQixNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDakMsT0FBTyxFQUFFLFNBQVMsRUFBb0IsTUFBTSxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNEM0IsNkJBQTJEO0lBQUEsWUFBd0I7SUFBQSxpQkFBSTs7O0lBQTVCLGVBQXdCO0lBQXhCLGdEQUF3Qjs7O0lBRnZGLDJCQUF1QjtJQUNuQiw4QkFBd0I7SUFBQSxZQUFhO0lBQUEsaUJBQUs7SUFDMUMsb0VBQXVGO0lBQ3ZGLDZCQUEwQjtJQUFBLFlBQXNCO0lBQUEsaUJBQUk7SUFDeEQsaUJBQU07OztJQUhzQixlQUFhO0lBQWIsb0NBQWE7SUFDakMsZUFBc0I7SUFBdEIsOENBQXNCO0lBQ0EsZUFBc0I7SUFBdEIsNkNBQXNCOzs7SUFFcEQsMkJBQXNCO0lBQ2xCLDhCQUFxQztJQUFBLFlBQXdCO0lBQUEsaUJBQUs7SUFDbEUsNkJBQTBCO0lBQUEsWUFBa0Q7SUFBQSxpQkFBSTtJQUNw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QTREOzt1RkRyRjFGLGdCQUFnQjtjQU41QixTQUFTOzJCQUNJLFVBQVU7O3NCQWtEZixNQUFNO3VCQUFDLFFBQVE7d0JBUkcsUUFBUTtrQkFBOUIsU0FBUzttQkFBQyxVQUFVOztBQThjekIsMkZBQTJGO0FBQzNGLFNBQVMsd0JBQXdCO0lBQzdCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDWixJQUFJO1lBQ0EsUUFBUTtpQkFDSCxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDMUMsT0FBTyxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLDRCQUE0QixDQUFDLENBQUMsQ0FBQztTQUMxRjtRQUFDLE1BQU07WUFDSixvQkFBb0I7U0FDdkI7SUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDYixDQUFDO0FBRUQsOEVBQThFO0FBQzlFLFNBQVMsV0FBVztJQUNoQixJQUFJO1FBQ0EsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQzdEO0lBQUMsTUFBTTtRQUNKLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDVUNhbGVuZGFySm9iLCBMb2dpblJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XHJcbmltcG9ydCB7IEVudGl0eVN0YXR1cywgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3N1YnNjcmlwdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jnb3QtcGFzc3dvcmQtZGlhbG9nL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlckNvbnRlbnRJbml0LCBJbmplY3QsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0Yi1sb2dpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjbGFzcyBUYkxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICBwcml2YXRlIGNhY2hlZENvbXBhbmllczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAgIGNhcHNMb2NrT24gPSBmYWxzZTtcclxuICAgIHZhbGlkYXRlID0gZmFsc2U7XHJcbiAgICBsb2FkaW5nID0gZmFsc2U7XHJcbiAgICBsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCA9IG5ldyBMb2dpblJlcXVlc3QoKTtcclxuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmc7XHJcbiAgICBidXR0b25UZXh0OiBzdHJpbmc7XHJcbiAgICBjdXJyZW50WWVhcjogc3RyaW5nO1xyXG4gICAgY3JlYXRlQWNjb3VudFVybDogc3RyaW5nO1xyXG4gICAgY2hhbmdlUGFzc3dvcmRVcmw6IHN0cmluZztcclxuICAgIHN1YnNjcmlwdGlvblNlbGVjdGlvbjogYm9vbGVhbjsgLy8gYWJpbGl0YSBsYSBzY2VsdGEgZGVsbGEgc3Vic2NyaXB0aW9uXHJcbiAgICBzaG93U2lnblVwOiBib29sZWFuOyAvLyBhYmlsaXRhIGxhIHBvc3NpYmlsaXTDoCBkaSByZWdpc3RyYXJlIG51b3ZvIGFjY291bnRcclxuICAgIGxvZ2luU3Vic2NyaXB0aW9uczogQXJyYXk8eyBkZXNjcmlwdGlvbjogc3RyaW5nOyBzdWJzY3JpcHRpb25rZXk6IHN0cmluZzsgc3RhdHVzOiBudW1iZXI7IGluc3RhbmNla2V5OiBzdHJpbmcgfT4gPSBbXTtcclxuICAgIGxvZ29VUkw6IHN0cmluZztcclxuICAgIGhpZGUgPSB0cnVlO1xyXG4gICAgaW5zdGFuY2VrZXk6IHN0cmluZztcclxuICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBkb2N1bWVudD86IERvY3VtZW50O1xyXG4gICAgLy8gdGVzdGkgaW4gaXRhbGlhbm8gZWQgaW5nbGVzZVxyXG4gICAgY2hvb3NlU3Vic2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBnb29kSm9iOiBzdHJpbmc7XHJcbiAgICBzdWJzY3JpcHRpb246IHN0cmluZztcclxuICAgIGluc3RhbmNlOiBzdHJpbmc7XHJcbiAgICBidXR0b25CYWNrOiBzdHJpbmc7XHJcbiAgICBhY2NvdW50TmFtZTogc3RyaW5nO1xyXG4gICAgd2VsY29tZTogc3RyaW5nO1xyXG4gICAgZW50ZXJDcmVkZW50aWFsczogc3RyaW5nO1xyXG4gICAgZm9yZ2V0UGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGRvbnRzaG93OiBzdHJpbmc7XHJcbiAgICBibG9jTWFpdXNjOiBzdHJpbmc7XHJcbiAgICBpZGxlVGltZW91dE1lc3NhZ2U6IHN0cmluZztcclxuICAgIHVwZ3JhZGVXYXJuaW5nVGl0bGU6IHN0cmluZztcclxuICAgIGRyb3BEb3duSXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICBjb21ib0JveElzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgaWNvbklzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgQFZpZXdDaGlsZCgnZHJvcGRvd24nKSBkcm9wZG93bjogYW55O1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYz86IGFueVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdjbGljaycsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21ib0JveElzQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21ib0JveElzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWNvbklzQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29uSXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kcm9wZG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi50b2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wRG93bklzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudCA9IGRvYyBhcyBEb2N1bWVudDtcclxuICAgICAgICB0aGlzLmNoZWNrQ29ubmVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LmFwcElkID0gdGhpcy5hdXRoU2VydmljZS5nZXRBcHBJZCgpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uID0gYXV0aFNlcnZpY2UuaGFzU3Vic2NyaXB0aW9uU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zaG93U2lnblVwID0gYXV0aFNlcnZpY2Uuc2hvd1NpZ25VcCgpO1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RVcmwgPSBhdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQWNjb3VudFVybCA9IGF1dGhTZXJ2aWNlLmdldENyZWF0ZUFjY291bnRVcmwoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhc3N3b3JkVXJsID0gYXV0aFNlcnZpY2UuZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKTtcclxuICAgICAgICB0aGlzLmxvZ29VUkwgPSBhdXRoU2VydmljZS5nZXRMb2dvVVJMKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZWtleSA9ICcnO1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdCcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQtSVQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUNIJykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLnZhbGlkYXRlIHx8ICF0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiA/ICdBY2NlZGknIDogJ0F2YW50aSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSB8fCAhdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24gPyAnTG9naW4nIDogJ05leHQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0JyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1JVCcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQtQ0gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlU3Vic2NyaXB0aW9uID0gJ1NjZWdsaSBsYSB0dWEgc290dG9zY3JpemlvbmUuJztcclxuICAgICAgICAgICAgdGhpcy5nb29kSm9iID0gJ0J1b24gbGF2b3JvISc7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gJ1NvdHRvc2NyaXppb25lJztcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9ICdJc3RhbnphJztcclxuICAgICAgICAgICAgdGhpcy5idXR0b25CYWNrID0gJzwgSU5ESUVUUk8nO1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnROYW1lID0gJ05vbWUgdXRlbnRlJztcclxuICAgICAgICAgICAgdGhpcy53ZWxjb21lID0gJ0JlbnZlbnV0byBzdSBNYWdvQ2xvdWQnO1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyQ3JlZGVudGlhbHMgPSBcIkluc2VyaXNjaSBub21lIHV0ZW50ZSBlIHBhc3N3b3JkIHBlciBsJ2F1dGVudGljYXppb25lLlwiO1xyXG4gICAgICAgICAgICB0aGlzLmRvbnRzaG93ID0gJ05vbiBtb3N0cmFyZSBwacO5IHF1ZXN0byBtZXNzYWdnaW8nO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmdldFBhc3N3b3JkID0gJ0hhaSBkaW1lbnRpY2F0byBsYSBwYXNzd29yZCc7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY01haXVzYyA9ICdCbG9jY28gbWFpdXNjb2xlIGF0dGl2byc7XHJcbiAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVvdXRNZXNzYWdlID0gJ0xhIHR1YSBzZXNzaW9uZSDDqCB0ZXJtaW5hdGEgcGVyIGluYXR0aXZpdMOgLCBwdW9pIHJpcHJlbmRlcmUgZGEgcXVpLic7XHJcbiAgICAgICAgICAgIHRoaXMudXBncmFkZVdhcm5pbmdUaXRsZSA9ICdBZ2dpb3JuYW1lbnRvICBpbiB2aXN0YSEnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlU3Vic2NyaXB0aW9uID0gJ0Nob29zZSB5b3VyIHN1YnNjcmlwdGlvbi4nO1xyXG4gICAgICAgICAgICB0aGlzLmdvb2RKb2IgPSAnR29vZCBqb2IhJztcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSAnU3Vic2NyaXB0aW9uJztcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9ICdJbnN0YW5jZSc7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmFjayA9ICc8IEJBQ0snO1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnROYW1lID0gJ0FjY291bnQgbmFtZSc7XHJcbiAgICAgICAgICAgIHRoaXMud2VsY29tZSA9ICdXZWxjb21lIHRvIE1hZ29DbG91ZCc7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJDcmVkZW50aWFscyA9ICdFbnRlciBhY2NvdW50IG5hbWUgYW5kIHBhc3N3b3JkIGZvciBhdXRoZW50aWNhdGlvbi4nO1xyXG4gICAgICAgICAgICB0aGlzLmRvbnRzaG93ID0gJ0RvIG5vdCBzaG93IG1lIHRoaXMgbWVzc2FnZSBhZ2Fpbic7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmQgPSAnRGlkIHlvdSBmb3JnZXQgeW91ciBwYXNzd29yZCA/JztcclxuICAgICAgICAgICAgdGhpcy5ibG9jTWFpdXNjID0gJ0NhcHMgbG9jayBvbic7XHJcbiAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVvdXRNZXNzYWdlID0gJ1lvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZCBkdWUgdG8gaW5hY3Rpdml0eSwgeW91IGNhbiByZXN1bWUgZnJvbSBoZXJlLic7XHJcbiAgICAgICAgICAgIHRoaXMudXBncmFkZVdhcm5pbmdUaXRsZSA9ICdVcGRhdGUgcGxhbm5lZCEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhdXRoU2VydmljZS5yZUxvZ2luQWZ0ZXJPVFAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9hZExvZ2luRGF0YSgpO1xyXG4gICAgICAgIHdlYmtpdEF1dG9maWxsV29ya2Fyb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgY2hlY2tDb25uZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNoZWNrQ29ubmVjdGlvbigpO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUlUJyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1DSCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ1NlcnZpemlvIGRpIGF1dGVudGljYXppb25lIHRlbXBvcmFuZWFtZW50ZSBpbmF0dGl2byc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdBdXRoZW50aWNhdGlvbiBzZXJ2aWNlIHRlbXBvcmFyaWx5IGRvd24nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBvblN1YkNoYW5nZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgY29uc3Qgc2QgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5maW5kKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSA9PT0gbmV3VmFsdWUpO1xyXG4gICAgICAgIGlmIChzZCAmJiBzZC5pbnN0YW5jZWtleSkgdGhpcy5pbnN0YW5jZWtleSA9IGAke3RoaXMuaW5zdGFuY2V9OiAke3NkLmluc3RhbmNla2V5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBrZXlVcEZ1bmN0aW9uKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWRCdXR0b24oKSkgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYXBzT24gPSBldmVudC5nZXRNb2RpZmllclN0YXRlICYmIGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoJ0NhcHNMb2NrJyk7XHJcbiAgICAgICAgdGhpcy5jYXBzTG9ja09uID0gY2Fwc09uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZGlzYWJsZWRCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKGhhc0F1dG9maWxsKCkgJiZcclxuICAgICAgICAgICAgICAgICghdGhpcy5pc0Nvbm5lY3RlZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiAmJiB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDAgJiYgdGhpcy52YWxpZGF0ZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcpKSB8fFxyXG4gICAgICAgICAgICAoIWhhc0F1dG9maWxsKCkgJiZcclxuICAgICAgICAgICAgICAgICghdGhpcy5pc0Nvbm5lY3RlZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmxvZ2luUmVxdWVzdC5wYXNzd29yZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN1YnNjcmlwdGlvblNlbGVjdGlvbiAmJiB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDAgJiYgdGhpcy52YWxpZGF0ZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNFeHBpcmVkU2Vzc2lvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZXhwaXJlZFNlc3Npb24nKSA9PT0gJ3RydWUnO1xyXG4gICAgfVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBuZXdVc2VyKCkge1xyXG4gICAgICAgIC8vIHJpbWFuZGEgYWxsYSBwYWdpbmEgKHByZXN1bWliaWxtZW50ZSBkZWxsbyBzdG9yZSkgZG92ZSAgc2Fyw6AgcG9zc2liaWxlIGNyZWFyZSB1biBudW92byBhY2NvdW50LlxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNyZWF0ZUFjY291bnRVcmxdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGJhY2soKSB7XHJcbiAgICAgICAgLy8gcmlwdWxpc2NvIHR1dHRvLi4uXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnRva2VuID0gJyc7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QucGFzc3dvcmQgPSAnJztcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9ICcnO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9ICdOZXh0JztcclxuICAgICAgICB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLnNhdmVMb2dpbkRhdGEoKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdleHBpcmVkU2Vzc2lvbicpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUgJiYgdGhpcy5zdWJzY3JpcHRpb25TZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYXBwSWQgPSAnTUNsb3VkUHJlTG9naW4nO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0MSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UucHJlbG9naW4odGhpcy5sb2dpblJlcXVlc3QpLmNhdGNoKChlcnIxKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyMS5lcnJvciAmJiBlcnIxLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSA/ICdMb2dpbicgOiAnTmV4dCc7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmkgc2lhIGxvZ2luIHNpYSBjaGVja2RiXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQxICYmIHJlc3VsdDEuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMudmFsaWRhdGUgPyAnTG9naW4nIDogJ05leHQnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wYW5pZXNGb3JVc2VyKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hcHBJZCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXBwSWQoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLmxvZ2luUmVxdWVzdCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy52YWxpZGF0ZSA/ICdMb2dpbicgOiAnTmV4dCc7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmkgc2lhIGxvZ2luIHNpYSBjaGVja2RiXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2QgPSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5maW5kKChzKSA9PiBzLnN1YnNjcmlwdGlvbmtleSA9PT0gdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2QgJiYgc2Quc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY2hlZHVsZWQgPSAoc2Quc3RhdHVzICYgRW50aXR5U3RhdHVzLlVwZGF0ZVNjaGVkdWxlZCkgPT09IEVudGl0eVN0YXR1cy5VcGRhdGVTY2hlZHVsZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVkdWxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZSBsYSBzdWIgbm9uIGhhIGxvIHN0YXRvIGltcG9zdGF0byAgbm9uIGNlcmNvIG5lbW1lbm8gcmlzcGFybWlhbmRvbWkgdW5hIGNoaWFtYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDEgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmdldENhbGVuZGFyKHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQxLnJlc3VsdCAmJiByZXN1bHQxLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlZFVwZGF0ZTogQ1VDYWxlbmRhckpvYiA9IHJlc3VsdDEuY29udGVudCBhcyBDVUNhbGVuZGFySm9iO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVkdWxlZFVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzY2hlZHVsZWRVcGRhdGU6ICcgKyBzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFVwZGF0ZU1lc3NhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBzdWInLCB0aGlzLmF1dGhTZXJ2aWNlLmdldFN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKCkhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQGRhdGUnLCB0aGlzLkZvcm1hdERhdGVTdHJpbmcoc2NoZWR1bGVkVXBkYXRlLnNjaGVkdWxlZHRpbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdAQHN0YXJ0aCcsIHRoaXMuRm9ybWF0U3RhcnREYXRlU3RyaW5nKHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnQEBlbmRoJywgdGhpcy5Gb3JtYXRFbmREYXRlU3RyaW5nKHNjaGVkdWxlZFVwZGF0ZS5zY2hlZHVsZWR0aW1lKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmSW5EYXlzID0gRGF0ZVRpbWUuZnJvbUlTTyhzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlmZihEYXRlVGltZS5mcm9tSVNPKERhdGVUaW1lLmxvY2FsKCkudG9TdHJpbmcoKSksICdkYXlzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvT2JqZWN0KCkuZGF5cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub24gbW9zdHJvIHNlIG1pIHRvcm5hIHVuYSBkYXRhIHByZWNlZGVudGUgYWQgb2dnaS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCAhPT0gbWVzc2FnZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZS5sb2NhbCgpIDwgRGF0ZVRpbWUuZnJvbUlTTyhzY2hlZHVsZWRVcGRhdGUuc2NoZWR1bGVkdGltZS50b1N0cmluZygpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtb3N0cm8gc29sbyBzZSBwcmV2aXN0aSBlbnRybyAxNSBnaW9ybmkgcGVyIGRlY2lzaW9uZSBtaWEgZGkgbWUgbWVkZXNpbWEgaWxhcmlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmZJbkRheXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZkluRGF5cyA8IDE1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub3BlblVwZGF0ZUFsZXJ0RGlhbG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBncmFkZVdhcm5pbmdUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9udHNob3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNSZWRpcmVjdEV4dGVybmFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gZXh0ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uKHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lLCB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29udmVydFVUQ0RhdGVUb0xvY2FsRGF0ZShkYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgLy8gZGV2byBmYXJlIHF1ZXN0byByaWdpcm8gcGVyY2jDqCBsIG9yYSBjaGUgbWkgYXJyaXZhICDDqCBpbnRlc2EgY29tZSB1dGMgZSBkZXZvIG1vc3RyYXJsYSBjb21lIGxvY2FsZVxyXG4gICAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFxyXG4gICAgICAgICAgICBEYXRlLlVUQyhkdC5nZXRGdWxsWWVhcigpLCBkdC5nZXRNb250aCgpLCBkdC5nZXREYXRlKCksIGR0LmdldEhvdXJzKCksIGR0LmdldE1pbnV0ZXMoKSwgZHQuZ2V0U2Vjb25kcygpLCBkdC5nZXRNaWxsaXNlY29uZHMoKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgRm9ybWF0RGF0ZVN0cmluZyA9IChkYXRlOiBEYXRlKTogc3RyaW5nID0+IHtcclxuICAgICAgICBjb25zdCB0ZW1wRGF0ZSA9IHRoaXMuY29udmVydFVUQ0RhdGVUb0xvY2FsRGF0ZShkYXRlKTtcclxuICAgICAgICByZXR1cm4gYCR7dGVtcERhdGUuZ2V0RGF0ZSgpfS0ke3RlbXBEYXRlLmdldE1vbnRoKCkgKyAxfS0ke3RlbXBEYXRlLmdldEZ1bGxZZWFyKCl9YDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBGb3JtYXRTdGFydERhdGVTdHJpbmcgPSAoZGF0ZTogRGF0ZSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcERhdGUgPSB0aGlzLmNvbnZlcnRVVENEYXRlVG9Mb2NhbERhdGUoZGF0ZSk7XHJcbiAgICAgICAgLy8gaW1wb3N0byBsIG9yYSBzZW56YSBtaW51dGksIGFycm90b25hZGFuZG8gcGVyIHNpY3VyZXp6YS5cclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5OdW1iZXJQYWQodGVtcERhdGUuZ2V0SG91cnMoKSwgMil9OjAwYDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBGb3JtYXRFbmREYXRlU3RyaW5nID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRlbXBEYXRlID0gdGhpcy5jb252ZXJ0VVRDRGF0ZVRvTG9jYWxEYXRlKGRhdGUpO1xyXG4gICAgICAgIGxldCBoID0gdGVtcERhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgICBoICs9IDI7IC8vIGNhYmxhdG8gZHVlIG9yZSBwZXJjaGUgbm9uIGFiYmlhbW8gYW5jb3JhIHN0aW1lIHNlbnNhdGUgZSBjZXJjaGlhbW8gZGkgc3RhcmUgYWRlcmVudGkgYWxsYSBtYWlsIGludmlhdGFcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5OdW1iZXJQYWQoaCwgMil9OjAwYDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBOdW1iZXJQYWQgPSAodmFsdWU6IG51bWJlciwgcGFkZGluZzogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgemVyb2VzID0gbmV3IEFycmF5KHBhZGRpbmcgKyAxKS5qb2luKCcwJyk7XHJcbiAgICAgICAgcmV0dXJuICh6ZXJvZXMgKyB2YWx1ZSkuc2xpY2UoLXBhZGRpbmcpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGxvYWRMb2dpbkRhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFjY291bnROYW1lKCkgfHwgJyc7XHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gdGhpcy5hdXRoU2VydmljZS5nZXRTdWJzY3JpcHRpb24oKSB8fCAnJztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBhbmllc0ZvclVzZXIodGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgc2F2ZUxvZ2luRGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc1Nlc3Npb25TdG9yYWdlKCkpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUsIHRoaXMubG9naW5SZXF1ZXN0LmFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCB0aGlzLmxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNkID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnMuZmluZCgocykgPT4gcy5zdWJzY3JpcHRpb25rZXkgPT09IHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgIGlmIChzZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNTZXNzaW9uU3RvcmFnZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHNkLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzZC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBnZXRDb21wYW5pZXNGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXVzZXIgfHwgIXRoaXMuc3Vic2NyaXB0aW9uU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIC8vIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICBjb25zdCB0ZW1wID0gYXdhaXQgdGhpcy5yZXF1ZXN0QW5kU29ydFN1YnNjcmlwdGlvbnModXNlcik7XHJcbiAgICAgICAgLy8gUHJlbWlvIEVsZWdhbnphIENvZGljZSAyMDE5IChATHVjYUJydW5pKVxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0ZW1wKSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5sb2dpblN1YnNjcmlwdGlvbnMpKSB0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucyA9IHRlbXA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gJyc7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ05vIFN1YnNjcmlwdGlvbnMgYXNzb2NpYXRlZCB0byB0aGlzIHVzZXInO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9naW5TdWJzY3JpcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9IHRoaXMubG9naW5TdWJzY3JpcHRpb25zWzBdLnN1YnNjcmlwdGlvbmtleTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvZ2luU3Vic2NyaXB0aW9ucy5tYXAoKHMpID0+IHMuc3Vic2NyaXB0aW9ua2V5KS5pbmRleE9mKHRoaXMubG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gdGhpcy5sb2dpblN1YnNjcmlwdGlvbnNbMF0uc3Vic2NyaXB0aW9ua2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub25TdWJDaGFuZ2UodGhpcy5sb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIGFzeW5jIHJlcXVlc3RBbmRTb3J0U3Vic2NyaXB0aW9ucyh1c2VyOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PFN1YnNjcmlwdGlvbj4+IHtcclxuICAgICAgICBpZiAodGhpcy5jYWNoZWRDb21wYW5pZXMuaGFzT3duUHJvcGVydHkodXNlcikgJiYgdGhpcy5jYWNoZWRDb21wYW5pZXNbdXNlciBhcyBhbnldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZENvbXBhbmllc1t1c2VyIGFzIGFueV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZW1wOiBBcnJheTxTdWJzY3JpcHRpb24+ID0gW107XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBBcnJheTxTdWJzY3JpcHRpb24+ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5nZXRDb21wYW5pZXNGb3JVc2VyKHVzZXIpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgIHJlc3VsdC5zb3J0KHRoaXMuY29tcGFyZUNvbXBhbmllcykuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICB0ZW1wLnB1c2goeyBzdWJzY3JpcHRpb25rZXk6IGMuc3Vic2NyaXB0aW9ua2V5LCBkZXNjcmlwdGlvbjogYy5kZXNjcmlwdGlvbiwgc3RhdHVzOiBjLnN0YXR1cywgaW5zdGFuY2VrZXk6IGMuaW5zdGFuY2VrZXkgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0ZW1wLmxlbmd0aCA+IDApIHRoaXMuY2FjaGVkQ29tcGFuaWVzW3VzZXIgYXMgYW55XSA9IHRlbXA7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZW1wO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHJpdmF0ZSBjb21wYXJlQ29tcGFuaWVzKGE6IFN1YnNjcmlwdGlvbiwgYjogU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZUEgPSBhLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgbmFtZUIgPSBiLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBnb1RvRm9yZ290UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0JyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1JVCcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQtQ0gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yZ290cGFzc3dvcmQoJ0hhaSBkaW1lbnRpY2F0byBsYSBwYXNzd29yZCA/JywgJ0luc2VyaXNjaSBpbCB0dW8gbm9tZSB1dGVudGU6ICcsICdOb21lIHV0ZW50ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yZ290cGFzc3dvcmQoJ0ZvcmdvdCBQYXNzd29yZCA/JywgJ1BsZWFzZSB3cml0ZSB5b3VyIGFjY291bnQgbmFtZTogJywgJ0FjY291bnQgbmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGZvcmdvdHBhc3N3b3JkKFRpdGxlOiBzdHJpbmcsIE1lc3NhZ2U6IHN0cmluZywgUGxhY2VIb2xkZXI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5va01lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihGb3Jnb3RQYXNzd29yZENvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBUaXRsZSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBQbGFjZUhvbGRlcixcclxuICAgICAgICAgICAgICAgIFRleHRWYWx1ZTogdGhpcy5sb2dpblJlcXVlc3QuYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShhc3luYyAoZGF0YTogeyBUZXh0VmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGRhdGEuVGV4dFZhbHVlID09PSB1bmRlZmluZWQgfHwgZGF0YS5UZXh0VmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUlUJyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1DSCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9ICdJbnNlcmlzY2kgdW4gbm9tZSB1dGVudGUgdmFsaWRvJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJ1dyaXRlIGEgdmFsaWQgYWNjb3VudCBuYW1lJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFjY25hbWU6IHN0cmluZyA9IGRhdGEuVGV4dFZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnJlc2V0cGFzc3dvcmQoYWNjbmFtZSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdG9kbyBjb250cm9sbGEgY29tZSB2ZW5nb25vIG1vc3RyYXRpIGVycm9yaVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUlUJyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1DSCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLm9rTWVzc2FnZSA9ICdDb250cm9sbGEgbGEgdHVhIGUtbWFpbCBlIHNlZ3VpIGxlIGlzdHJ1emlvbmkgcGVyIHJlaW1wb3N0YXJlIGxhIHBhc3N3b3JkLic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJ0NoZWNrIHlvdXIgZW1haWwgYW5kIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IHJlc3VsdC5NZXNzYWdlICsgJyAoQ29kZTogJyArIHJlc3VsdC5Db2RlICsgJykuJztcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGlzRHJvcERvd25DbGlja2VkKCkge1xyXG4gICAgICAgIHRoaXMuZHJvcERvd25Jc0NsaWNrZWQgPSAhdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcclxuICAgICAgICB0aGlzLmNvbWJvQm94SXNDbGlja2VkID0gdGhpcy5kcm9wRG93bklzQ2xpY2tlZDtcclxuICAgICAgICBpZiAodGhpcy5kcm9wRG93bklzQ2xpY2tlZCAmJiB0aGlzLmNvbWJvQm94SXNDbGlja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbklzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRvZ2dsZShkcm9wZG93bjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5kcm9wRG93bklzQ2xpY2tlZCA9ICF0aGlzLmRyb3BEb3duSXNDbGlja2VkO1xyXG4gICAgICAgIHRoaXMuaWNvbklzQ2xpY2tlZCA9IHRoaXMuZHJvcERvd25Jc0NsaWNrZWQ7XHJcbiAgICAgICAgdGhpcy5kcm9wZG93biA9IGRyb3Bkb3duO1xyXG4gICAgICAgIGlmICh0aGlzLmRyb3BEb3duSXNDbGlja2VkKSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkcm9wZG93bi50b2dnbGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gd29ya2Fyb3VuZCBmb3IgY2hyb21pdW0gYnVnIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM1MjUyN1xyXG5mdW5jdGlvbiB3ZWJraXRBdXRvZmlsbFdvcmthcm91bmQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Oi13ZWJraXQtYXV0b2ZpbGwnKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGVsOiBhbnkpID0+IChlbC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9ICdrLWZsb2F0aW5nLWxhYmVsLWNvbnRhaW5lcicpKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgLy8gbm8gd2Via2l0IGJyb3dzZXJcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGhhc0F1dG9maWxsKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dDotd2Via2l0LWF1dG9maWxsJyk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImxvZ2luLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImxvZ2luXCIgc3R5bGU9XCJ6LWluZGV4OiAxXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBtYXQtY2FyZC1pbWFnZSBzdHlsZT1cIndpZHRoOiA2MCVcIiBzcmM9XCJ7eyBsb2dvVVJMIH19XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhdmFsaWRhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImxvZ2luLXRpdGxlXCI+e3sgd2VsY29tZSB9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cImlzRXhwaXJlZFNlc3Npb25cIiBjbGFzcz1cImxvZ2luLWV4cGlyZWQtc3VidGl0bGVcIj57eyBpZGxlVGltZW91dE1lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxvZ2luLXN1YnRpdGxlXCI+e3sgZW50ZXJDcmVkZW50aWFscyB9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ2YWxpZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibG9naW4tY2hvb3NlU3Vic2NyaXB0aW9uXCI+e3sgY2hvb3NlU3Vic2NyaXB0aW9uIH19PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibG9naW4tc3VidGl0bGVcIj57eyBhY2NvdW50TmFtZSB9fToge3sgbG9naW5SZXF1ZXN0LmFjY291bnROYW1lIH19IDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvcm1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbCBbdGV4dF09XCJhY2NvdW50TmFtZVwiICpuZ0lmPVwiIXZhbGlkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGtlbmRvVGV4dEJveCBbKG5nTW9kZWwpXT1cImxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZVwiIChrZXl1cCk9XCJrZXlVcEZ1bmN0aW9uKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudE5hbWVcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgdGV4dD1cIlBhc3N3b3JkXCIgKm5nSWY9XCIhdmFsaWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQga2VuZG9UZXh0Qm94IFsobmdNb2RlbCldPVwibG9naW5SZXF1ZXN0LnBhc3N3b3JkXCIgKGtleXVwKT1cImtleVVwRnVuY3Rpb24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiIFt0eXBlXT1cImhpZGUgPyAncGFzc3dvcmQnIDogJ3RleHQnXCIgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG00LWljb24gKGNsaWNrKT1cImhpZGUgPSAhaGlkZVwiIGNsYXNzPVwiaWNvblwiIFtpY29uXT1cImhpZGUgPyAndGItZXllZmlsbGVkJzondGItaGlkZSdcIj48L200LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiICpuZ0lmPVwic3Vic2NyaXB0aW9uU2VsZWN0aW9uICYmIHZhbGlkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgdGV4dD1cInt7IHN1YnNjcmlwdGlvbiB9fVwiIHN0eWxlPVwiYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDU4OTBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZW5kby1kcm9wZG93bmxpc3QgI2Ryb3Bkb3duIFtkaXNhYmxlZF09XCJsb2dpblN1YnNjcmlwdGlvbnM/Lmxlbmd0aCA8PSAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImxvZ2luU3Vic2NyaXB0aW9uc1wiIG5hbWU9XCJzdWJzY3JpcHRpb25cIiB0ZXh0RmllbGQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUZpZWxkPVwic3Vic2NyaXB0aW9ua2V5XCIgdmFsdWVQcmltaXRpdmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleVwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblN1YkNoYW5nZSgkZXZlbnQpXCIgKGNsaWNrKT1cImlzRHJvcERvd25DbGlja2VkKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9rZW5kby1kcm9wZG93bmxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtNC1pY29uIChjbGljayk9XCJ0b2dnbGUoZHJvcGRvd24pXCIgY2xhc3M9XCJpY29uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCIgZHJvcERvd25Jc0NsaWNrZWQgPyAgJ3VwaWNvbic6ICdkb3duaWNvbicgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0Yi1jaXJjbGVkcmlnaHRmaWxsZWRcIj48L200LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5zdGFuY2VrZXlcIiAqbmdJZj1cImxvZ2luU3Vic2NyaXB0aW9ucy5sZW5ndGggPiAzXCI+IFN1YnNjcmlwdGlvbiBrZXk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXl9fSB7e2luc3RhbmNla2V5fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fwcy1sb2NrXCIgKm5nSWY9XCJjYXBzTG9ja09uXCI+PHNwYW4gY2xhc3M9XCJrLWljb24gay1pLXdhcm5pbmdcIj48L3NwYW4+IHt7IGJsb2NNYWl1c2MgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZXJyb3JcIiAqbmdJZj1cImF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImstaWNvbiBrLWktd2FybmluZ1wiPjwvc3Bhbj57eyBhdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mb1wiICpuZ0lmPVwiYXV0aFNlcnZpY2Uub2tNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiay1pY29uIGstaS13YXJuaW5nXCI+PC9zcGFuPnt7IGF1dGhTZXJ2aWNlLm9rTWVzc2FnZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47cGFkZGluZzogMCAxcHg7XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gY2xhc3M9XCJsb2dpbi1idXR0b25cIiAoY2xpY2spPVwibG9naW4oKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZEJ1dHRvbigpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrLWljb24gay1pLWxvYWRpbmdcIiAqbmdJZj1cImxvYWRpbmdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhbG9hZGluZ1wiIHN0eWxlPVwibGV0dGVyLXNwYWNpbmc6IDNweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVwiPnt7IGJ1dHRvblRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gY2xhc3M9XCJsb2dpbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQ6IGdyZXlcIiAoY2xpY2spPVwiYmFjaygpXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFsb2FkaW5nICYmIHZhbGlkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhbG9hZGluZyAmJiB2YWxpZGF0ZVwiIHN0eWxlPVwibGV0dGVyLXNwYWNpbmc6IDNweFwiPiB7eyBidXR0b25CYWNrIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dTaWduVXBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2lnbnVwXCIgKGNsaWNrKT1cIm5ld1VzZXIoKVwiPlNpZ25VcCBoZXJlITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImxvZ2luLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gY2xhc3M9XCIgbG9naW4tYnV0dG9uIFwiIChjbGljayk9XCJiYWNrKClcIiAqbmdJZj1cIiFsb2FkaW5nICYmIHZhbGlkYXRlIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWxvYWRpbmcgJiYgdmFsaWRhdGUgXCIgc3R5bGU9XCJsZXR0ZXItc3BhY2luZzogM3B4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IEJBQ0s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJsb2dpbi1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiIGxvZ2luLWJ1dHRvbiBcIiAoY2xpY2spPVwibG9naW4oKSBcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRCdXR0b24oKSBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImstaWNvbiBrLWktbG9hZGluZyBcIiAqbmdJZj1cImxvYWRpbmcgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWxvYWRpbmcgXCI+e3sgYnV0dG9uVGV4dH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIXZhbGlkYXRlXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBtYXJnaW4tdG9wOiA0MHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9yZ290cHdkXCIgKGNsaWNrKT1cImdvVG9Gb3Jnb3RQYXNzd29yZCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8dT57eyBmb3JnZXRQYXNzd29yZCB9fTwvdT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDA7IHdpZHRoOiAxMDAlOyB6LWluZGV4OiAwXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjb3B5cmlnaHQgY29weXJpZ2h0LWFic1wiPkxvZ2luLjIuMi4wLjI4IMKpIDIwMTcgLSB7eyBjdXJyZW50WWVhciB9fSwgWnVjY2hldHRpIHMucC5hLiA8L3A+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+Il19