import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { of, Subject } from 'rxjs';
import { tap, map, catchError, timeout } from 'rxjs/operators';
import { StorageVars } from './models/storage-vars';
import { ChangePasswordInfo } from './models/login-request';
import { LogoffRequest } from './models/logoff-request';
import { IsValidTokenRequest } from './models/is-valid-token-request';
import { OperationResult } from './models/operation-result';
import { ChangePasswordDialogComponent } from './pages/change-password-dialog/change-password-dialog.component';
import { AlertDialogComponent } from './pages/alert-dialog/alert-dialog.component';
import { OtpComponent } from './pages/otp-dialog/otp.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/material/dialog";
let authServiceInstance;
export const authService = () => authServiceInstance;
// ---------------------------------------------------------------------------
export class TbAuthService {
    // ---------------------------------------------------------------------------
    constructor(env, http, injector, dialog) {
        this.http = http;
        this.injector = injector;
        this.dialog = dialog;
        this.loggedOut$ = new Subject();
        this.errorMessage = '';
        this.okMessage = '';
        this.callLoginAfterOTPRequest = false;
        this.reLoginAfterOTP = new EventEmitter();
        /**
         * Ritorna la base url del backend,
         * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
         */
        this.getBaseUrl = () => this.env.auth.url;
        this.getSnapshotServiceUrl = () => this.env.auth.snapshotServiceUrl;
        this.getLoginPageUrl = () => this.env.auth.loginPageUrl;
        this.getAuthServiceUrl = () => this.env.auth.url;
        this.getIupUrl = () => this.env.auth.iupurl;
        this.getRedirectUrl = () => this.env.auth.redirectUrl;
        this.getUserGatewayUrl = () => this.env.auth.userGatewayUrl;
        this.getCreateAccountUrl = () => this.env.auth.createAccountUrl;
        this.getChangePasswordUrl = () => this.env.auth.changePasswordUrl;
        this.hasSubscriptionSelection = () => this.env.auth.subscriptionSelection;
        this.showSignUp = () => this.env.auth.showSignUp;
        this.getAppId = () => this.env.auth.appId;
        this.isSessionStorage = () => this.env.auth.sessionStorage;
        this.getLogoURL = () => this.env.auth.logoURL;
        this.isRedirectExternal = () => this.env.auth.isRedirectExternal;
        this.getUpdateMessageIt = () => this.env.auth.updatemessageIt;
        this.getUpdateMessageEn = () => this.env.auth.updatemessageEn;
        authServiceInstance = this;
        this.env = _.defaultsDeep(env, TbAuthService.DEFAULT_ENV, env);
        console.log('TbAuthEnvironment', this.env);
        this.callLoginAfterOTPRequest = false;
    }
    get router() { return this.injector.get(Router); }
    // ---------------------------------------------------------------------------
    async checkConnection() {
        return await this.http
            .get(this.getBaseUrl())
            .pipe(timeout(5000), map((__) => true))
            .toPromise()
            .catch((err) => {
            this.errorMessage = err.message;
            return false;
        })
            .catch((err) => false);
    }
    /*
  {
    type: JWT,
    appid: M4,
    securityValue: jwtEncoded
  }
  */
    // modifica per uniformare l header,o che arriva un po capitalizzato un po no. //rif: Ilaria e Luca
    // ---------------------------------------------------------------------------
    getAuthorizationHeader() {
        return JSON.stringify({
            type: 'JWT',
            appId: 'M4',
            securityValue: this.getToken(),
        });
    }
    // ---------------------------------------------------------------------------
    prelogin(loginRequest) {
        //console.log('prelogin');
        // console.log('authService.login - loginRequest', loginRequest);
        return this.http
            .post(this.getPreLoginUrl(), loginRequest)
            .pipe(map((loginResponse) => {
            if (!loginResponse.Result) {
                if (loginResponse.ResultCode === 19) {
                    // mi sposto su pagina per cambio password e nuovo tentativo di login
                    console.log('AuthService: Change Password Needed');
                    this.openChangePasswordDialog(loginRequest);
                }
                else if (loginResponse.ResultCode === 4) {
                    console.log('AuthService: Account confirmation Needed');
                    // mi sposto su pagina per attivare l'account che non ha ancora effettuato la procedura?
                }
                else if (loginResponse.ResultCode === 58) {
                    console.log('AuthService: Account Locked');
                    loginResponse.Message = this.getLockedUserMessage(loginResponse.Message);
                }
                else if (loginResponse.ResultCode === 143) {
                    console.log('AuthService: otp code needed');
                    this.openOTPDialog(loginRequest);
                }
                if (loginResponse.ResultCode === 143) {
                    this.errorMessage = ''; // non mostro errore rosso che sembra grave
                    // this.okMessage = loginResponse.Message;
                }
                else {
                    this.okMessage = '';
                    this.errorMessage = loginResponse.Message;
                }
                return loginResponse;
            }
            // non serve qua , viene gia gestito prima
            // if (this.callLoginAfterOTPRequest)
            // {
            //   this.callLoginAfterOTPRequest = false;
            //   console.log('relogin emitted');
            //   this.reLoginAfterOTP.emit();
            // }
            return loginResponse;
        }))
            .toPromise();
    }
    // ---------------------------------------------------------------------------
    login(loginRequest) {
        //'login');
        let redologin = false;
        // console.log('authService.login - loginRequest', loginRequest);
        const loginresponse = this.http
            .post(this.getLoginUrl(), loginRequest)
            .pipe(map((loginResponse) => {
            if (!loginResponse.Result) {
                if (loginResponse.ResultCode === 19) {
                    // mi sposto su pagina per cambio password e nuovo tentativo di login
                    console.log('AuthService: Change Password Needed');
                    this.openChangePasswordDialog(loginRequest);
                    redologin = true;
                }
                else if (loginResponse.ResultCode === 143) {
                    // mi sposto su pagina per richiesta otp
                    console.log('AuthService: otp code Needed');
                    this.openOTPDialog(loginRequest);
                    redologin = true;
                    // todo cose tipo mostrare una maschera che accetti il codice e lo rimandi indietro per il check
                }
                else if (loginResponse.ResultCode === 4) {
                    console.log('AuthService: Account confirmation Needed');
                    // mi sposto su pagina per attivare l'account che non ha ancora effettuato la procedura?
                    // o ammetto che la password sia  il codice? ma in relatà ogni sito lo fa in due step
                    // col click sull mail
                }
                else if (loginResponse.ResultCode === 58) {
                    console.log('AuthService: Account Locked' + loginResponse.Message);
                    loginResponse.Message = this.getLockedUserMessage(loginResponse.Message);
                }
                else if (loginResponse.ResultCode === 149) {
                    console.log('AuthService: Subscription requires 2FA' + loginResponse.Message);
                    loginResponse.Message = this.get2FARequiredMessage(loginRequest.subscriptionKey);
                }
                else {
                    this.clearStorage();
                    console.log('AuthService: Clearing storage due to Login failure, result code ', loginResponse.ResultCode);
                    console.log('LoginRequest by account' + loginRequest.accountName + ' token:' + loginRequest.token);
                }
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                console.log(loginResponse.Message);
                if (loginResponse.ResultCode === 143) {
                    this.errorMessage = ''; // non mostro errore rosso che sembra grave
                    // this.okMessage = loginResponse.Message;
                }
                else {
                    this.okMessage = '';
                    this.errorMessage = loginResponse.Message;
                }
                return loginResponse;
            }
            if (this.getName(loginResponse)) {
                this.storageData(loginResponse);
                return loginResponse;
            }
            else {
                console.log('AuthService: LogOff due to Account not allowed.');
                this.logoff();
                this.clearStorage();
                loginResponse.Message = 'Account not allowed.';
                loginResponse.JwtToken = '';
                loginResponse.ResultCode = 999;
                loginResponse.Result = false;
                return loginResponse;
            }
        }))
            .toPromise();
        if (redologin) {
            //console.log('redologin');
            return this.login(loginRequest);
        }
        else
            return loginresponse;
    }
    // ---------------------------------------------------------------------------
    getLockedUserMessage(messageFromLogin) {
        if (!messageFromLogin)
            return messageFromLogin;
        const seconds = +messageFromLogin;
        let msg = messageFromLogin;
        if (isNaN(seconds))
            return msg;
        if (seconds < 60 && seconds > -1)
            msg = `Login Locked. Please try again in ${seconds} seconds...`;
        else if (seconds >= 60) {
            const minVal = Math.round(seconds / 60);
            msg = (minVal === 1) ?
                `Login Locked. Please try again in one minute...` :
                `Login Locked. Please try again in ${minVal} minutes...`;
        }
        return msg;
    }
    // ---------------------------------------------------------------------------
    get2FARequiredMessage(description) {
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH')
            return `Questa subscription ${description} richiede l'autenticazione a due fattori! Leggi la mail per ulteriori dettagli`;
        return `This Subscription ${description} requires two factor autentication! Please read the Emails for further details.`;
    }
    // ---------------------------------------------------------------------------
    async openUpdateAlertDialog(info, title, dontshow, accountName, subscriptionKey) {
        this.errorMessage = '';
        const dialogRef = this.dialog.open(AlertDialogComponent, {
            data: {
                Title: title,
                Message: info,
                DontShow: dontshow,
                SubKey: subscriptionKey
            },
        });
        dialogRef.afterClosed().subscribe(() => {
            this.okMessage = '';
            this.errorMessage = '';
            if (this.isRedirectExternal()) {
                console.log('go external.');
                this.getRedirectUrlForSubscription(accountName, subscriptionKey);
                return;
            }
            console.log('go internal!');
            this.router.navigate([this.getRedirectUrl()]);
        });
    }
    // ---------------------------------------------------------------------------
    async openChangePasswordDialog(loginRequest) {
        this.errorMessage = '';
        let title;
        let message;
        let placeHolder_1;
        let placeHolder_2;
        const currentBrowserLanguage = navigator.language.toLocaleLowerCase();
        if (currentBrowserLanguage.startsWith('it')) {
            title = "Modifica password";
            message = "La nuova password deve essere almeno di 8 caratteri e contenere 3 di queste 4 condizioni: avere almeno una maiuscola, avere caratteri minuscoli, almeno un numero (0-9), un simbolo (!?";
            placeHolder_1 = "Password";
            placeHolder_2 = "Conferma password";
            this.okMessage = "Password modificata con successo!";
        }
        else {
            title = "Change password";
            message = "The new password must be at least 8 characters long and contain 3 of these 4 conditions: have at least one uppercase, have lowercase characters, at least one number (0-9), one symbol (!?";
            placeHolder_1 = "Password";
            placeHolder_2 = "Confirm password";
            this.okMessage = "Password changed succesfully!";
        }
        const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
            data: {
                Title: title,
                Message: message,
                PlaceHolder_1: placeHolder_1,
                PlaceHolder_2: placeHolder_2
            },
        });
        dialogRef.afterClosed().subscribe(async (data) => {
            if (data === undefined)
                return;
            if (data.NewPwd === undefined || data.NewPwd === '') {
                alert('Write a valid AccountName');
                return;
            }
            this.errorMessage = '';
            const cpi = new ChangePasswordInfo();
            cpi.AccountName = loginRequest.accountName;
            cpi.IgnoreOldPassword = false;
            cpi.JWTToken = loginRequest.token;
            cpi.NewPassword = data.NewPwd;
            cpi.Password = loginRequest.password;
            loginRequest.password = data.NewPwd;
            const result = await this.changePassword(cpi).catch((err) => {
                this.errorMessage = err.error && err.error.Message;
                return;
            });
            // todo controlla come vengono mostrati errori
            if (result && result.Result) {
                this.errorMessage = '';
                if (currentBrowserLanguage.startsWith('it')) {
                    this.okMessage = "Password modificata con successo!";
                }
                else {
                    this.okMessage = "Password changed succesfully!";
                }
                // la login la fa  a mano altrimenti mi perdo
            }
            else {
                // errore già indicato
                loginRequest.token = '';
                loginRequest.password = '';
                loginRequest.subscriptionKey = '';
                loginRequest.appId = '';
            }
        });
    }
    // ---------------------------------------------------------------------------
    async openOTPDialog(loginRequest) {
        this.errorMessage = '';
        var mes = (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') ?
            `Prego inserire il codice OTP ricevuto via mail o SMS a seconda della modalità impostata.` :
            `Please insert the OTP code. Depending on the mode set, the OTP is sent either by e-mail or by SMS.`;
        let title = (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') ?
            "Autenticazione a due fattori" : "Two-Factor Authentication";
        const dialogRef = this.dialog.open(OtpComponent, {
            data: {
                Title: title,
                AccountName: loginRequest.accountName,
                Message: mes,
                PlaceHolder: 'Code',
                TextValue: '',
            },
        });
        const sub = dialogRef.componentInstance.resendRequested.subscribe(() => {
            this.resendOTP(loginRequest.accountName);
        });
        dialogRef.afterClosed().subscribe(async (data) => {
            if (data === undefined)
                return;
            if (data.TextValue === undefined || data.TextValue === '') {
                alert('Write a valid Code');
                return;
            }
            this.errorMessage = '';
            /*const cpi: OTPInfo = new OTPInfo();
            cpi.AccountName = loginRequest.accountName;
            cpi.Code = data.Code;
            cpi.Password = loginRequest.password;*/
            loginRequest.password = data.TextValue;
            this.callLoginAfterOTPRequest = true;
            //non devo richiamare prelogin ma solo fare emit
            //console.log('reLoginAfterOTP emitted');
            this.reLoginAfterOTP.emit();
            //this.prelogin(loginRequest);
        });
    }
    async isValidToken(authtoken = '') {
        if (!authtoken) {
            const opres = new OperationResult();
            opres.Message = 'No authtoken';
            return opres;
        }
        return this.http
            .post(this.getIsValidTokenUrl(), new IsValidTokenRequest(authtoken))
            .pipe(tap((jObj) => {
            // console.log('isValidToken - response', jObj);
            if (!jObj.Result) {
                jObj.Message = jObj.Message ? jObj.Message : 'isValidToken error...';
                console.log('AuthService: Clearing storage due to Token Validation failure');
                console.log('token: ' + authtoken);
                this.clearStorage();
                this.errorMessage = jObj.Message;
            }
        }), catchError((error) => {
            console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
            const res = new OperationResult();
            res.Code = 666;
            if (!this.router.routerState.snapshot.url.includes(this.getLoginPageUrl()))
                this.router.navigate([this.getLoginPageUrl()]);
            return of(res);
        }))
            .toPromise();
    }
    getCompaniesForUser(user) {
        return this.http.get(this.getSubsKeysForAccountUrl() + user).pipe(map((res) => {
            if (!res || !res.Result)
                return [];
            return res.Content && res.Content.subscriptions ? res.Content.subscriptions : [];
        }));
    }
    getIsValidTokenUrl() {
        return this.getBaseUrl() + 'isvalidtoken/';
    }
    getLoginUrl() {
        return this.getBaseUrl() + 'login/';
    }
    getPreLoginUrl() {
        return this.getBaseUrl() + 'login/';
    }
    getLogoutUrl() {
        return this.getBaseUrl() + 'logoff/';
    }
    getChangePasswordApiUrl() {
        return this.getChangePasswordUrl() + 'changepassword/';
    }
    resendOTPUrl() {
        return this.getChangePasswordUrl() + 'resendotp/';
    }
    getResetPasswordUrl() {
        return this.getChangePasswordUrl() + 'resetpassword/';
    }
    getSubsKeysForAccountUrl() {
        return this.getBaseUrl() + 'subscriptionskeysforaccount/';
    }
    /*async sendOTP(cpi: OTPInfo): Promise<OperationResult> {
       const bodyString = JSON.stringify(cpi);
       const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
       // tslint:disable-next-line: align
       return this.http
           .post<OperationResult>(this.login(), bodyString, { headers })
           .pipe(
               map((res: any) => {
                   if (!res || !res.Result) {
                       this.errorMessage = res.Message + ' (Code:' + res.Code + ')';
                       return res;
                   }
                   return res;
               }),
               catchError((error: HttpErrorResponse) => {
                   console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
                   const res = new OperationResult();
                   res.Code = 666;
                   return of(res);
               })
           )
           .toPromise();
   }*/
    async changePassword(cpi) {
        const bodyString = JSON.stringify(cpi);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // tslint:disable-next-line: align
        return this.http
            .post(this.getChangePasswordApiUrl(), bodyString, { headers })
            .pipe(map((res) => {
            if (!res || !res.Result) {
                this.errorMessage = res.Message + ' (Code:' + res.Code + ')';
                return res;
            }
            return res;
        }), catchError((error) => {
            console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
            const res = new OperationResult();
            res.Code = 662;
            return of(res);
        }))
            .toPromise();
    }
    async resendOTP(accname) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http
            .post(this.resendOTPUrl() + accname, { headers })
            .pipe(map((res) => {
            if (!res) {
                res = new OperationResult();
                res.Code = 663;
            }
            return res;
        }), catchError((error) => {
            console.error(`Error Code: ${error.status}.\nMessage: ${error.message}`);
            const res = new OperationResult();
            res.Message = `Error Code: ${error.status}.\nMessage: ${error.message}`;
            res.Code = 669;
            return of(res);
        }))
            .toPromise();
    }
    async resetpassword(accname) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // tslint:disable-next-line: align
        return this.http
            .post(this.getResetPasswordUrl() + accname, { headers })
            .pipe(map((res) => {
            if (!res) {
                res = new OperationResult();
                res.Code = 663;
            }
            return res;
        }), catchError((error) => {
            console.error(`Error Code: ${error.status}.\nMessage: ${error.message}`);
            const res = new OperationResult();
            res.Message = `Error Code: ${error.status}.\nMessage: ${error.message}`;
            res.Code = 661;
            if (!this.router.routerState.snapshot.url.includes(this.getLoginPageUrl()))
                this.router.navigate([this.getLoginPageUrl()]);
            return of(res);
        }))
            .toPromise();
    }
    logoff() {
        const logoffRequest = new LogoffRequest(this.getToken());
        return this.http
            .post(this.getLogoutUrl(), logoffRequest)
            .pipe(map((logoffResponse) => {
            if (logoffResponse.Result) {
                console.log('AuthService: Clearing storage due to Logoff');
                this.clearStorage();
                this.loggedOut$.next();
            }
            return logoffResponse;
        }))
            .toPromise();
    }
    navigateUserGateway() {
        console.log('entering navigateUserGateway..');
        const userGatewayUrl = this.getUserGatewayUrl();
        // if usergateway url exists, then redirect to it
        if (userGatewayUrl !== '') {
            console.log(`Found getUserGatewayUrl ${userGatewayUrl}`);
            document.location.href = userGatewayUrl;
            return;
        }
        // otherwise, redirect to login
        this.router.navigate([this.getLoginPageUrl()]);
    }
    getRedirectUrlForSubscription(accountName, subscriptionKey) {
        this.getInstancesMapForUser(accountName).subscribe((res) => {
            const map = res;
            if (!map || map.length === 0) {
                throw new Error('instanceMap is invalid');
            }
            const currentInstanceKey = map.filter((k) => k.SubscriptionKey === subscriptionKey).map((j) => j.InstanceKey)[0];
            this.getSnapshot(currentInstanceKey, subscriptionKey).subscribe((res) => {
                if (!res || res === [] || res.length === 0)
                    throw new Error('snapshot is empty');
                // we have now the snapshot
                const services = res.Services;
                const redirectUrl = services
                    .filter((i) => i.ServiceType === 'M4FRONTEND' || i.ServiceType === 'APP_FRONTEND')
                    .map((f) => f.Url)[0];
                console.log(`Designated redirect is ${redirectUrl}`);
                const baseRedirectUrl = `${redirectUrl}?jwt=${this.getToken()}&subKey=${subscriptionKey}&instanceKey=${currentInstanceKey}`;
                console.log(`Designated final redirect is ${baseRedirectUrl}`);
                localStorage.setItem('lastLoggedRedirect', baseRedirectUrl);
                document.location.href = baseRedirectUrl;
            }, (err) => {
                console.log('snapshot cannot be obtained');
                throw new Error('snapshot cannot be obtained');
            });
        }, (err) => {
            console.log('getRedirectUrlForSubscription ia about to fail...');
            console.log(err);
            throw new Error('getInstancesMapForUser failed');
        });
    }
    getInstancesMapForUser(user) {
        return this.http.get(this.getInstancesMapForAccountUrl() + user).pipe(map((res) => {
            if (!res || !res.Result)
                return [];
            return res.Content;
        }));
    }
    async getCalendar(subscriptionKey) {
        return await this.http.get(`${this.getCalendarUrl()}?SubscriptionKey=${subscriptionKey}` /*, { headers }*/)
            .pipe(map((res) => {
            if (!res || !res.Result) {
                this.errorMessage = res.Message + ' (Code:' + res.Code + ')';
                return res;
            }
            return res;
        }), catchError((error) => {
            console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
            const res = new OperationResult();
            res.Code = 662;
            return of(res);
        }))
            .toPromise();
    }
    getSnapshot(instanceKey, subscriptionKey) {
        return this.http.get(this.getSnapshotServiceUrl() + instanceKey + '?subscriptionKey=' + subscriptionKey).pipe(map((res) => {
            if (!res || !res.Result)
                return [];
            return res.Content;
        }));
    }
    getInstancesMapForAccountUrl() {
        return this.getBaseUrl() + 'instancesMap/';
    }
    getCalendarUrl() {
        return this.getIupUrl() + 'calendarjobs/';
    }
    getUpdateMessage(it) {
        if (it)
            return this.getUpdateMessageIt();
        else
            return this.getUpdateMessageEn();
    }
    clearStorage() {
        sessionStorage.removeItem(StorageVars.JWT);
        sessionStorage.removeItem(StorageVars.CULTURE);
        sessionStorage.removeItem(StorageVars.UI_CULTURE);
        sessionStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        localStorage.removeItem(StorageVars.JWT);
        localStorage.removeItem(StorageVars.CULTURE);
        localStorage.removeItem(StorageVars.UI_CULTURE);
        localStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        localStorage.removeItem(StorageVars.USER_GATEWAY_AUTOREDIRECT);
    }
    storageSubscriptionData(subscriptionKey, subscriptionDescription) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
            sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
        }
        else {
            localStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
            localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, subscriptionDescription);
        }
    }
    storageQueryParams(subscriptionKey, instanceKey) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
        }
        else {
            localStorage.setItem(StorageVars.SUBSCRIPTION, subscriptionKey);
        }
        this.setInstanceKey(instanceKey);
    }
    getName(loginResponse) {
        return loginResponse.AskingProcess === this.getAppId();
    }
    storageData(loginResponse) {
        const respCulture = loginResponse.RegionalSettings === undefined || loginResponse.RegionalSettings.length === 0
            ? window.navigator.language
            : loginResponse.RegionalSettings;
        const respUiCulture = loginResponse.Language === undefined || loginResponse.Language.length === 0
            ? window.navigator.language
            : loginResponse.Language;
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
            sessionStorage.setItem(StorageVars.CULTURE, respCulture);
            sessionStorage.setItem(StorageVars.UI_CULTURE, respUiCulture);
            sessionStorage.setItem(StorageVars.ACCOUNT_ROLES, JSON.stringify(loginResponse.Roles));
            if (loginResponse.AccountName)
                sessionStorage.setItem(StorageVars.ACCOUNT_NAME, loginResponse.AccountName);
            if (loginResponse.SubscriptionKey)
                sessionStorage.setItem(StorageVars.SUBSCRIPTION, loginResponse.SubscriptionKey);
            if (loginResponse.SubscriptionDesc)
                sessionStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, loginResponse.SubscriptionDesc);
        }
        else {
            localStorage.setItem(StorageVars.JWT, loginResponse.JwtToken);
            localStorage.setItem(StorageVars.CULTURE, respCulture);
            localStorage.setItem(StorageVars.UI_CULTURE, respUiCulture);
            localStorage.setItem(StorageVars.ACCOUNT_ROLES, JSON.stringify(loginResponse.Roles));
            if (loginResponse.AccountName)
                localStorage.setItem(StorageVars.ACCOUNT_NAME, loginResponse.AccountName);
            if (loginResponse.SubscriptionKey)
                localStorage.setItem(StorageVars.SUBSCRIPTION, loginResponse.SubscriptionKey);
            if (loginResponse.SubscriptionDesc)
                localStorage.setItem(StorageVars.SUBSCRIPTION_DESCRIPTION, loginResponse.SubscriptionDesc);
        }
    }
    saveCulture(culture, uiCulture) {
        if (this.env.auth.sessionStorage) {
            sessionStorage.setItem(StorageVars.CULTURE, culture);
            sessionStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
        }
        else {
            localStorage.setItem(StorageVars.CULTURE, culture);
            localStorage.setItem(StorageVars.UI_CULTURE, uiCulture);
        }
    }
    getToken() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.JWT);
        else
            return localStorage.getItem(StorageVars.JWT);
    }
    getAccountName() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.ACCOUNT_NAME);
        else
            return localStorage.getItem(StorageVars.ACCOUNT_NAME);
    }
    getSubscription() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION);
    }
    getSubscriptionDescription() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
        else
            return localStorage.getItem(StorageVars.SUBSCRIPTION_DESCRIPTION);
    }
    getCulture() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.CULTURE);
        else
            return localStorage.getItem(StorageVars.CULTURE);
    }
    getUICulture() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.UI_CULTURE);
        else
            return localStorage.getItem(StorageVars.UI_CULTURE);
    }
    getInstanceKey() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.INSTANCEKEY);
        else
            return localStorage.getItem(StorageVars.INSTANCEKEY);
    }
    setInstanceKey(instanceKey) {
        if (this.env.auth.sessionStorage)
            sessionStorage.setItem(StorageVars.INSTANCEKEY, instanceKey);
        else
            localStorage.getItem(StorageVars.INSTANCEKEY);
    }
}
TbAuthService.DEFAULT_ENV = {
    auth: {
        url: 'http://localhost:10344/api/',
        iupurl: 'http://localhost:52172/api/',
        createAccountUrl: 'http://localhost:4200',
        changePasswordUrl: 'http://localhost:56392/api/',
        subscriptionSelection: false,
        showSignUp: false,
        appId: 'M4',
        redirectUrl: '/',
        userGatewayUrl: '',
        isRedirectExternal: true,
        loginPageUrl: 'login',
        sessionStorage: false,
        snapshotServiceUrl: '',
        // tslint:disable-next-line: max-line-length
        updatemessageIt: 'Sono previste attività di manutenzione ed aggiornamento, per questo sulla tua subscription @@sub potrebbero verificarsi brevi disservizi il @@date, dalle ore @@starth alle ore @@endh',
        // tslint:disable-next-line: max-line-length
        updatemessageEn: 'Due to system maintenance and updates there might be disturbance in your subscription @@sub on the @@date, between @@starth and @@endh',
        logoURL: 'https://magocloud-store-pdf.s3.eu-west-1.amazonaws.com/login-logo.png',
        // tslint:disable-next-line: max-line-length
        // 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAA2CAYAAABTAoWuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc0OEJEMDcwNDlBMTFFQTlDNzVDNDRGNkMzQ0EwRDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc0OEJEMDgwNDlBMTFFQTlDNzVDNDRGNkMzQ0EwRDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzQ4QkQwNTA0OUExMUVBOUM3NUM0NEY2QzNDQTBENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzQ4QkQwNjA0OUExMUVBOUM3NUM0NEY2QzNDQTBENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl3e4DwAABUASURBVHja7F0J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'
    },
};
/** @nocollapse */ /** @nocollapse */ TbAuthService.ɵfac = function TbAuthService_Factory(t) { return new (t || TbAuthService)(i0.ɵɵinject('env'), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i2.MatDialog)); };
/** @nocollapse */ /** @nocollapse */ TbAuthService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: TbAuthService, factory: TbAuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }, { type: i1.HttpClient }, { type: i0.Injector }, { type: i2.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBWSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFpQyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRCxPQUFPLEVBQWdCLGtCQUFrQixFQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFFbkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7QUFFaEUsSUFBSSxtQkFBa0MsQ0FBQztBQUN2QyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7QUFJckQsOEVB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Q0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsY0FBYyxDQUFDLFdBQW1CO1FBQ2hDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYztZQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQzs7WUFDMUYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7QUFoeUJjLHlCQUFXLEdBQXNCO0lBQzlDLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSw2QkFBNkI7UUFDbEMsTUFBTSxFQUFFLDZCQUE2QjtRQUNyQyxnQkFBZ0IsRUFBRSx1QkFBdUI7UUFDekMsaUJBQWlCLEVBQUUsNkJBQTZCO1FBQ2hELHFCQUFxQixFQUFFLEtBQUs7UUFDNUIsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLElBQUk7UUFDWCxXQUFXLEVBQUUsR0FBRztRQUNoQixjQUFjLEVBQUUsRUFBRTtRQUNsQixrQkFBa0IsRUFBRSxJQUFJO1FBQ3hCLFlBQVksRUFBRSxPQUFPO1FBQ3JCLGNBQWMsRUFBRSxLQUFLO1FBQ3JCLGtCQUFrQixFQUFFLEVBQUU7UUFDdEIsNENBQTRDO1FBQzVDLGVBQWUsRUFBRSx3TEFBd0w7UUFDek0sNENBQTRDO1FBQzVDLGVBQWUsRUFBRSx3SUFBd0k7UUFDekosT0FBTyxFQUFFLHVFQUF1RTtRQUNoRiw0Q0FBNEM7UUFDNUMsMnRRQUEydFE7S0FDNXRRO0NBQ0QsQ0FBQTtnSEF4QlMsYUFBYSxjQW1DSixLQUFLO3FIQW5DZCxhQUFhLFdBQWIsYUFBYSxtQkFIWixNQUFNO3VGQUdQLGFBQWE7Y0FKekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFxQ2MsTUFBTTt1QkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgbWFwLCBjYXRjaEVycm9yLCB0aW1lb3V0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuL21vZGVscy9zdG9yYWdlLXZhcnMnO1xyXG5cclxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0LCBDaGFuZ2VQYXNzd29yZEluZm8sIE9UUEluZm8gfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9naW5SZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgTG9nb2ZmUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ29mZi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9nb2ZmUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dvZmYtcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBJc1ZhbGlkVG9rZW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvaXMtdmFsaWQtdG9rZW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IE9wZXJhdGlvblJlc3VsdCB9IGZyb20gJy4vbW9kZWxzL29wZXJhdGlvbi1yZXN1bHQnO1xyXG5pbXBvcnQgeyBUYkF1dGhFbnZpcm9ubWVudCB9IGZyb20gJy4vbW9kZWxzL2F1dGgtZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE90cENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvb3RwLWRpYWxvZy9vdHAuY29tcG9uZW50JztcclxuXHJcbmxldCBhdXRoU2VydmljZUluc3RhbmNlOiBUYkF1dGhTZXJ2aWNlO1xyXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSAoKSA9PiBhdXRoU2VydmljZUluc3RhbmNlO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNsYXNzIFRiQXV0aFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3RhdGljIERFRkFVTFRfRU5WOiBUYkF1dGhFbnZpcm9ubWVudCA9IHtcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDoxMDM0NC9hcGkvJyxcclxuICAgICAgaXVwdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MjE3Mi9hcGkvJyxcclxuICAgICAgY3JlYXRlQWNjb3VudFVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMCcsXHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkVXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1NjM5Mi9hcGkvJyxcclxuICAgICAgc3Vic2NyaXB0aW9uU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgc2hvd1NpZ25VcDogZmFsc2UsXHJcbiAgICAgIGFwcElkOiAnTTQnLFxyXG4gICAgICByZWRpcmVjdFVybDogJy8nLFxyXG4gICAgICB1c2VyR2F0ZXdheVVybDogJycsXHJcbiAgICAgIGlzUmVkaXJlY3RFeHRlcm5hbDogdHJ1ZSxcclxuICAgICAgbG9naW5QYWdlVXJsOiAnbG9naW4nLFxyXG4gICAgICBzZXNzaW9uU3RvcmFnZTogZmFsc2UsXHJcbiAgICAgIHNuYXBzaG90U2VydmljZVVybDogJycsXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHVwZGF0ZW1lc3NhZ2VJdDogJ1Nvbm8gcHJldmlzdGUgYXR0aXZpdMOgIGRpIG1hbnV0ZW56aW9uZSBlZCBhZ2dpb3JuYW1lbnRvLCBwZXIgcXVlc3RvIHN1bGxhIHR1YSBzdWJzY3JpcHRpb24gQEBzdWIgcG90cmViYmVybyB2ZXJpZmljYXJzaSBicmV2aSBkaXNzZXJ2aXppIGlsIEBAZGF0ZSwgZGFsbGUgb3JlIEBAc3RhcnRoIGFsbGUgb3JlIEBAZW5kaCcsXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHVwZGF0ZW1lc3NhZ2VFbjogJ0R1ZSB0byBzeXN0ZW0gbWFpbnRlbmFuY2UgYW5kIHVwZGF0ZXMgdGhlcmUgbWlnaHQgYmUgZGlzdHVyYmFuY2UgaW4geW91ciBzdWJzY3JpcHRpb24gQEBzdWIgb24gdGhlIEBAZGF0ZSwgYmV0d2VlbiBAQHN0YXJ0aCBhbmQgQEBlbmRoJyxcclxuICAgICAgbG9nb1VSTDogJ2h0dHBzOi8vbWFnb2Nsb3VkLXN0b3JlLXBkZi5zMy5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9sb2dpbi1sb2dvLnBuZycsXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIC8vICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVRnQUFBQTJDQVlBQUFCVEFvV3VBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlWcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUTRJRGM1TGpFMk5EQXpOaXdnTWpBeE9TOHdPQzh4TXkwd01Ub3dOam8xTnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SURJeExqQWdLRTFoWTJsdWRHOXphQ2tpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UlRjME9FSkVNRGN3TkRsQk1URkZRVGxETnpWRE5EUkdOa016UTBFd1JEVWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZSVGMwT0VKRU1EZ3dORGxCTVRGRlFUbEROelZETkRSR05rTXpRMEV3UkRVaVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEZOelE0UWtRd05UQTBPVUV4TVVWQk9VTTNOVU0wTkVZMlF6TkRRVEJFTlNJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwRk56UTRRa1F3TmpBME9VRXhNVVZCT1VNM05VTTBORVkyUXpORFFUQkVOU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUGwzZTREd0FBQlVBU1VSQlZIamE3RjBKbEJiRkVlNWRkaEhsTXF3b0lnZ0tLaUxJNFlrZ1JxT2dJb28zbmlBZU1Rb3hLc1lvaDZJUmlSRVVqeGdKQ3BKbzhJcUFrYUFRTk1HWTRBRW9LSXF1QWdvUlJUbmtXQkRZMUplcGZRNjEzWFAyelAvdjd0UjdIK3owUDFQZDB6TmRVMTFWWFYxUVhsNnVNcXJ4ZEFEaENFSW5RZ2RDRTBKandtNkVBZ0pla3JXRS94SytKTHhQV0VCNGk3QTA2NzZNOHBVS01nRlhZK2t3d3JtRVV3aUh4dUR6TW1FSzRVWENpcXhiTThvRVhFYTVwSk1JMXhMT3NNejNlOExUaEVjSnIyZmRuRkVtNERKS2szNUNHRUk0UG9XNlhpQU1KS3pNdWoyalRNQmxsQ1RCbmphR2NJSFBlYVdFTnduekNCOFN2aVdzWTgxc0YwSUpZVy9sMk9zNjhoUjNYdzkrbXduRENmZG1qeUNqVE1CbGxBU2RTcGhNcUsvNWJTdGhQdUZ2aEduOGQxanFUcmlVMEpYUXhuRE9HNFRCaEg5bmp5T2pUTUJsWkl1ZTh0RGFIaWJjcFJ5dnFDMkNGL1o2anpwL3B4emJYMFlaWlFJdW84aUVxZVJNNVlSOFNQb3I0VmJDd2dUcjcwSzRoOUROVUgvdjdCRmxsQW00aktKUVU4SmNRak5SRG52WTFZUkpLYllGV3VJMW12SUpoQUVSK05VbXRDVzBWSTRkc0JHaEh2KzJnZkFkNFRQQ1lzSUhQQVhQS0JOd21ZQ3JKdFNZTmJPOVJEa2NCK2NSbHVXZ1RlZnpWTGxRbEU4a1hCYmcrbjBJNXhCTzVDbndYZ0hyWGNYM1BZdTEyY1haNjVFSnVJeXFObjFLMkUrVXdTTjZXSTdiMVphRlRGTlJEcy91allaclRtSXQ3MnhDc1lVMnpPUnA4NnpzTmFsWlZKaDFRYldnc1JyaDlvcHk3R0c1Smt3WE83S3dkZE1OaEYrNGptc1IraEQrd1czdmEwbTRWUWhNQ0xuWENLY3JaL2xaUnBrR2wxRVZvS0dFTzBYWjQ0VEw4N0N0cjdDd2NkUEp5b203ZTFVanBOMkVlTHgzQ0l1VUU3TzNYRG0yTndpcnVxd2hOaWNjUmVqc0l4eExXZEI5a0wwK21ZRExLSCtwazBZeitydHliRmI1U0JBNlc0UUd0WU93VFRsT0JCMzlTVG5lVjJoMlh3YXNCd0hKeHlrbkRoQTJ2RjAxNTREZmo3TlhxR1lJT0F3SVJMdy96Vi9LWEZORmU1NVI5cjFoeUpBQjI4N25QR1ZKbS9Za0hLbWNyQjM3RTFyd3dOL0JHc2xTd2tlRU9ZUjNmWGpoSHR3ZVV3aUFmWmhYRk5xRHA3WHRXVWpzd1lLbmpQQUZhMDBMV0todWpsZ0hGdmRQRDNBZXZMQVBjbC9FSWJ4SFZ4THVFT1hRR0UvSVJFQTFKeEp3QTh0L29FVVFlRG5HRmE3MkxDYlV0OGk3RnFIVXhmK0NGTy9yUXNLTGhNM2x3ZWxEd21oQ0J3Mi9ZWnJ6MjBkb1YxM0NBTUkwd3NhQTdmcWE4RFRobkloOU1jYUROL2kyVHFEL0QyVGV1TWVGaEFQeTRGM1BrRER3ejFMeGdsMlg0MFp0RSszcGJaRjNGOEY3WFFyM2N6Ymh6Zkw0TkpWd0dQUGNUZlA3SFNIYlZZOHdndkJWekhiOWgrOHhiTDhzRjN5K0k1eVh3dk5vbEEzOG1nTjRVVGNLcFE0RzZ6bzVVaWg3S2NlYjVxWmRMUElmTEk0YktDZFdLd21Dc1J1NTBwNVRUZ3hYWElKUi9HM0NKWVRSNGpjRXVRNFB3ZXMwd2lkOFRXTUw5NGw3UkFqR01TSGJVTXBUWGR6WHdXeVNTSnEremVadE5jc0d0NER0UWRMK01UQUg3Vm5PbmpBM0lYUmdxZ1hlaU1kNlgxUCtKZHViYk5JanlsazVvS050TEF4ZVp4c2I3R2pyQ1VVc2JQWmxvUUZiMVVFQjYvc3BZVnlBOC9EaGVwYUZpNDRnYkY1U08yY1UyY0xYdGVRKzdPb2p5TEJhb2wrSXZtcVVDWjJNMGhadzBPcnFwZHdXRElxSm1uSmJBdTdQeW9tdDB0Rlp5c2xoWm9ObUVIcHF5bUdrdjU4ZE9WOEU1SVVjYmxjcFp5V0NpYkJndm1sQVl6c2NGNjAxdjBIdy81NkYzNm9Bdk9BY09aYy9nczAwdjJjRy9Jenl4c213d0dCYk9TL2wrZklxUXp2T3NNRDdSejUycEZjdDNjTm9BLy9IQ2J2RXRCM09NZkMrTXNEMUpZU1ZtbXRoZzd3NlJydHdUK01NN1hvc3N3Rmx5RFZNR2x5Rnh0RThKVGw3cGNjVXk0WUdCN3ZpVU5jeHdpZ0sxQS94V0ppR0lWaDBlNHc2cnVhcHFadkE3d0xXakd6UTNZUmZpYkppbnZaNkVVSXREaFJsaU95L1ZBV1BMZk1pWkFoNVNxUDEvNW93elBLN3NydHl3bGphc0ZZS215MWluZFlvWjdIOXUyenFDRW93RGNnMXJvVThiZDZZQTUzamNQVkQrRkJkTHR2RU50TlArZjZpQnE4V2NwOFZ1bmdVc21saWRVU2VDQ1BhVTdTcGdQbVZ1Y3JxODdNTEU4SUVQdC96L1g5blc0TXI1OUNHTkNUdGFvODIyTkRnMWdtZVBRblRSVm4vR1B6YmFkcjlMZUdRQlBycWZsY2Rsd1U0L3hsTjIrWWswSzRXaEdXYXVrNjJ3THVFTmMyWENlc0RlSGJmSmd3bnRBckF1dzE3N3Jmei84QU9EcDlLUzlQb1FSZ3ZRcGhNQk8vekpNS1pFZXJaZzdCQmM2K3Z4R2o3MFlKZlJWLzJFT2ZkekhWdEN3SHcyY0xQZkFtUDJTR0VZOEtFaVhnSnVQK204SEFIK3p6UXVBTHVTc0h2TXk0L1I1U1hSdVJmb0JuWW1HN3ZuMkNmSWFhclpZRHpPbXI2ODNXT0IweWlYUkJFSDRuNkVQZlhNQWEvdXpVZnFEQUV3ZEhXbzQ1REROY05Udmk5eHpNNFAyWUlFY2J1YVNIcWJPd1I2aFAxUG80MThPd2x6cnU5M0M1OXhMR2dCL3VGaVVnUG56Uk0zNW1nT3Y0andtOFRWdmtsLzRvRjNnaHRXQ0VNNXhkRjREOU83YnczQVZaZWRPVHBSRkswUkFYYmoxUk9qWkZPcVZ2TXFiZ1hmY1BtamhYQ2N6c3RBcS8rM0llWWtqZUkwYWJMMllreXlQQzdxUysySlBqOGtNL3VZK1drazQ4VFFvUyt4bmFOQy9pZDg1MndpV2xqQlcySTBZWnRBY3ZMTFBjaFRDNVluZklCOTZOeFRxN0U0SlQycmlFdVc0QnRHaW1PTVdqZnNjZ2ZBcXVoZUpEdSsvdU5PUCsya1B6aFFieENsRjJpN0tZQ2owcm5henltcDZSUWJ4bmI5dHlFdlJ2Q3hNakIxamdocG1DVDlBQjdzZXZsK0xrY3Jad3duUDBzOG9TZ3c1NGFwOWRRWCtuNUxEZWE2QXlzYnNJNnpkdFowdmR4R2ZvZ0tXKzAzS2c5Vk9WWXNjZFlHN0tWdzJ5b09KNnQwYjZnNGUzaStySkN3d202citkTjRoaUM3Wms4ZWVnanhQRW9sZDdHekxQWjBMK3ZhTTlKQWE2OVI5T3ZrdkRWUm1ZU0JBcC94WTRHck1FOWhCMGVKWWJycmxOT21FNnVOc0RwRUtEdXhmeitJUTV4SlJ2bDkrWXgwYzFITUU3bGo5aU1LaVNjSnJPRHFFanpHKzU5VnhaY2JaVDNMbTZkV1pQdHRKT0NvYkhCbGJDTlIxSkR5emFJOFlKL0dhR1lNTVdTRGU0WXpUMTAxNXczVnB3ek15RC9Rc0phY2Uydjg4UTkza2xqQnl0T3VRMFhhdnAvYjU5cit2bllYVjRnSE9mREEydVhCN0g5V05KVkd2dGpHME5kZ3l6M1J6MGZCOG43aEw0QitKeEYrTGRQUDdYMmNETG8xa0xQc3JqODBlM0ljNS8zSzhONVllbzZndkFIbjN0ZjVuN0d1b1NYKzdHTlIybGMvcmFvV0ZYT1Z6YVNYY0l0TGRVaGx5N0I1dkZQZzhiZ0ptUXlDUkllYzd5WS9vTEc1c2xYVWU1czlZUktQMHNNd2tiV2lySnpQYzVIcU1aRXcyOWIrZG96bFpQbXlJc1FUdkFnVDgrZmRKWDNaWTE5ZTQ2ZUNRTEo2eHQrRzhQYTUrUUFmUDZpbkl3dnQvcjBmVldoTU9QOUxlV0VsR0dGejk4TTUrenI3c2RDdzRzR2todjJEdVJwZ0EzcXI3SGJqSFNwcFhFSmdrZXVKakM5RUppMlBTZktnamhXVGhYSHlNUDJkWjY4TkNlTDR6L2txQjEvRXNjOVBjNzlvOGZ6NmFCNVJuNkVHTGFMQ2VNSjkvSFVORmQwaGpMbjZCc1UwZnh6dDhiV1dVRndYQnhhUlFSY2xLemlTM2o4alRMOGpoeUFQVXpNQzEzMnBUWGl0NGN0M0ZCdGphYUQzWmNxdkM0Mk1uQmVvdEhldkFhSUZHajlmT2I3U2xYZUZ1L1pQSGxoWUs5cDd6cGVwdXc2YnNMUTgrSzR0ZUc4L1Qzc2N4M1pIaFdWOE1XL0ljZlA1QWxET1RiZWVTZ0czeit5b05QUkpGWDk2UmFQWi91a1NjRHRFQXpjMUZ0Vnp2WVJsb2FxblRPc3dwQTZ3ZktOLzFJYzMrVnovbnVhNmRUTkh1Y1hhWXk5Qy9Qa29jc2Q1dC9PWVZzV2lmZXBudUdkTXkzK3g1UjFkUlVmaEdkb1RCbWdPUjVUOGpDRW1jbm5tdklPUE8ydDdnVHQvRTFOT1p5WUovdXBoNCtLRnd6bkQ0N1JtRjAxUXRPMmR4YlRzK2JDSmhQa2EvYUE1c3RmeDJNS0xFTVlWdWFSQnVlbXozTFlsdFZxWjg5dFhhVlBIMzZtNGZyYnFzRUFOQ1ZLdU1saUhiZUZyTHU2a1drNTRBVkI1cjgzYXpxektHSkRob3RyOGVXWmJQbG1iOU1JcmlEVDN2dkZNUndoQXoybTJlNitRMURvK2p4NTJGTHdyc2x4ZTc1eC9WMUhJK0J3ZkpUbU9vUlRMSzhHZzYrcnBneWhMWE10MXZGbnBROU03bFpEQk53OFEzbTdJQUx1Y2FIRjZiU3dJRlJITTNXODN2S053cnR5dENnYkUvQmFDQUxwZmVydmNiN2NPR1ZIQ2c4U1V6ekVEbDdMd25lQXFyeDdsSHltMjNQODhtMFhmU2JiZDdCQnE1dFJEUVplaWRKNzVHMXIxV1ZLSDE5M2tLb1pCUG1rMjlpOFFWQVB4alhpZUtnS0h4RStScnpjTUJ3L2IvbEc1Y29JVEUzREpGT1VHNU1jb3ZUSk1MY0tnUWJoWFQrRkI0bXNEY2hZQXNNMFFpRWUwMHlqTi9sb2RHbFRRNkhweWlVN3BwQ2M2ckNsMys1S2IzUDhJb0c2ZEJzVU5lRjNwaWJRSWsxWi9hQUM3bG1oVW1PS0ZpYjBBRitTbjRteXZnbG9iMmVKc3JEMlBhUVZrdDVXM1ZyWnRVSndRalBaUDRXSEtHUFoxbXMwUnpsNFd1WHdwY05hNDVhdTR3MnE4cnJIaG9acnY2b0dnODZVYm45VkFuWHBRcFJxOFRPb0NhUzcvOXBoWWxBR2FRUlVpNERYeXJDUVpjcC9TN3l3SkpkbFBhZWllZUNrRGU4aXpVdUNhVmVwS091UTBvUGNZZmpiTGFUZGRGZ09YenBvd0VVK0F0azBoUzZ1Qm9QT1pMWW9TcUF1RTg5dENkOWp2bXlzckh0ZnlzTUlPRVFSeXlqeSt3Tys1RExBODc0RXBnSVhpN0tvS3k4d05aSnU1MTlvenBzdmpudmt5WU9HNDhadG5HOGQ0a05rbTdvSDBNcldHcTV0VWcwRW5HbFAzNzBUcUt1Sm9YNDUwN0F0cEFwQ2xpZEZlMm5LdG9TTklwYkxuL29vYy9DbVNYdGJvK3d2YWJwT0hIOFpVME1jNGNNZk5Fc2NRNGpYelpPQk5VY2NuNTJqZHNnbFl6cEQrRkxEdGUycWdZRDdSdW1YeURWTm9LN09tcktWYW1jdmVybEI4TVFSUmlaTk8wM25GdVJZZTAzNWhyQUNEbXM1TjRYUTRqQzErNGtvdXpXQkc1UWExcFNZL0thcm5WTjV3MDRrVjBlOExOUi9UQkd1eXBPQkpaMDMxK2FnRFlkcWhOUXpoaW0xTGgxMTcyb2c0TllaQkxodHV5Z2NTWWRyeXVVS2tES0Q0S2tUczI0ZGJVNnhuMHNNR3R5NktPdkFaS0J2TDhQWEF5U1hVU0NOeWU4dDM5d0FucUs2YVpRRnZ0SVdOMHp6c2t3VVpUL1BrNEUxalFkWEJjRUJjbUhLYlpBZlBxd2YxQzBaMjZiUmhpdE1HMGRYQXlFMzAyQlNPZGRpSFRjcXZiZFdodHBzTUpnSlNtTFVmWUNIcVNRdE1xMkVlU09LZ0h0RVZUWmtQMkt3TTBqRGZ4S0RUR1lEd2JLdlpSYjRqbE03SjY3RWc1U2JSTXNOWUZvcTgzNm9hUksrMGpMbWNKTG1RNUFVd2JGeHZDanoybWYzY1k5blVOWHBBVVA1ZUJWdG9ia2tKRjNWYmZwZGJ1alhoUWFOTW1xWVV4K0RjRnVXVXYvQ0xHUmF6enMyYWdkTG05U1J5bG43NVNZWlhvRm80OWNzMzF3N3pkZm5Eb3Y4NVQzY3JyR3hqTkVJKzFaNU1MQ2tnRWJJd0lzcDFmMmtPSDdQb01sVWtDa0ZFdXdxVlgyNUVaU0JmeG1tZGpiMjRwMXVLSC9NTVBWL1ExTldyREhCQkNGTUM3dHJ5ditUWXYvQ1ZMU2JwaHpaZlQ0dGpNRlU3aEkvVW54VkxncnhCWTlLL2NYeGJCVnNyNEtnSkdQaXNKQzlpeWk3V2ZNaS9VTWw0M0FJNisyU29UM2RWRERQZHh4Q3pLU01vTC9ZNXhyMG55bXU4bWsyZzBTbCtjby9oMXpTWkhyM2tXTDh3Umg4NzFKNjR6cG9pS0hjRkZ3UHhTQ3NzK0ZSUS9rTEtmUnB4UWU3cTJlZmF6TDY5Z3FZWGZNRVRUYk54b2F0NnNMczJ2Tk93SXkreFpyc3BOMFR5RXk3V05ReFEzUE9pWnErK0lBM25MYmRudTJ1T3RZUTZ2cWN2MExUdGlFSlpmRWRyNm5ydHlFMmtkN2trYWsxYkp1eG85aDgxL1VqUExZTjFOSFBMUGZOT0k5N20wWm9Hb0lYc210UDhNbDg3SFg5VzRiclpvZG9neWxEN3laRDltalQrYzBpOU9XcHZJMmdpZTd4Mmphd1Y0aUszaFhYM2tLb3JhbndpQVFFM0xXV3R2M3p3eVdhKzJtdU9XK2s1cnpQQ1lkYmJNdDFndjgyVG9YdGRVM2JGRkp5MStGQkpXbHVTRDdIK2FTalhzUnB4L2YwRVd3UEc2NkhrTms5b0lEcm44TEgwazBiQ1hjUTl2RzR2aFVMK3E4OStPQ2oxeURpVm4rZ2hUNWJFYUo5b3p5dXZ6R2tRR3hRSG14cnp2MElGL09ldmw3MFQ3K2Q3ZUdSZUNtZ210aEZ6T2xYc1hIeFNERVhQakdFNmdsUFcyZGh4SnhxTUdRMmN4MGo1bXB5UXVyd2FtSHJnNTN0R3MxNVNHeW95N0k2aktjaTZ5TFczNEVkR25KNUd6eGlUWlYvekJGeWtrMHhUQ2RoV2xnUW8yK3dQRzYwcXB4NmVqNVBIOEtHQzF6T0JuZ3ZBaytFTE1Feit5MVByWnF4VGZaSW4ydmhtWjByekE2TE5lZVZzcm1qZHNqMlYwenpmcTRxQjRPWHNCMjZuWStEYUM2YmdGYTZISFlZRTRmNzFJMWxla2djR2lSQktFd0NWM2o4WHNwajhVTTJqY0RHM3Bad3JES3Ztc0J5S2RQYVY3eS91dVNjYjdHSlFoZFB0NFA3SDg4MnlEWUNNSjJkcXR3clNHSnFjTUJ6UGhKMXI1RDhnbWh3VjZTa3ZaazBpKzg4enAxbzZBZnNkRCthY0dpSWFVZy8zcWhaUjV0RGFzYnRDVjhaZUwzR0c1NFVoMmpiQU1JOGp3Mko0MjZhczlUeVJzSFlqUHVvRUZQVXVIU0t4LzFOU3FDK3FZUmRRL2J6Qkl2MVkycDZVSVFwclMwYXFLdlh4cG80ZUZSTmtmTHpWRElMaTRkNU9EaUNFQUtRRVlqNmZVREQvVmIreWxTNDBwRkpCWWsxWnhnY0g2VWFieTdxdklFQnJ5SzJobHZFWHJZdC9GVnN5QWI2RG14WU40VjE0RG9raWZ3a3hEMHY1SHVlcXRGeWptT3NZTU10dnR3Zjh4ZTVqTyszS1dzZVI3RkdibXJiU3lyK3lnbG9QZ2V6Sm1janRBajhlcXAwOTh6dzBsd3ZaVzNyRmd2MWJHV0h3cjBScnIyTUl3SGlKcDM5aUIwbVMzTGd3SG1IdGNOWmVyZGNaVHZhYVJHK3VFOFlwR3FmQ0x6bStmQTRYYU5ORllhczQ4d0lYNGp2eGZFYlBuVWM3Mk56aVVwakxXaWtZeEpvRjV3Zk55V2dQZmZYekRLQ0VyYVErNlVQLzNZSmFSUTlBMnJWVDhhbzQzbENDd3Q5akRHMk1rTDlaV3lQcXhXZ2pyc3M5dTFXMWxqUDhhdTNTRlhPNnhabDJjWW9qZTFwaVlxMlpNcXZQVEwwNFNFVlB0bGtsQXdMUlJyNzQwR3FjdEJ6QmIzS1dnaStMdGVyK0htNW9JWGNhY2tGRHkxeURtdkNuU3p3UTBiWjRTRTF5cUEwa1hFaTIvdTZjcithMWtCK3duYmg2UnptNDJlZjNNVFhGQ2c3U1VzcmtucXVEYWhWSTV3S0FmRzlXV3Z2b3N4QnQydllYanFUeDlaaVMzMDhoV2NqMEpaUDRUNDJKUVRZd3UyZXpNODlhS3IrNVd5ZjN4cXlMM2V3N1JxMlZpVEN3SHJtZndXdEYwNEdETVFmQzRQMmV4RTZDUVpaZDlhS0hzbzd1Tk5FTTRWVG9yTXcxdUpsNytjNjNqUEMxQVBMWkd6c1FOOU1CZHN0dmk1UEEvcnk0QXhLbTNpZ1BwVmdiTkhaM0orOVZMakkrazA4TU83VkdOT1RwaWJjajVqUzc4YURiaDBQb2x4TWsyd1M3Z21yWmhvckp4Z1lnM3c5djJjZnE4cHJ3Wk9nSW01RGN6YXQxT0kyck9IKy9icXFkT2IvM2EvS0NkakRqV0Fic2djaThqcVErZUNoWUMza2lJaDhJQ1FSaGQrSUI3Wk1yZFNJUFVBdGVJQkZTWXQwckV2ekN4czhXNHNIMUQwcS9GNmRJR3lEMTQwL0pLMVlZeTNtZHNCdXM1RTlhSyt6cHpDdGx3a3ZNNVpYbmFDY0hjTWFzUFpjd0czYndFTGtQZmJ5emE1S0wzcEdOWlArSjhBQURBUFh3R0VydkFVQUFBQUFTVVZPUks1Q1lJST0nXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZW52OiBUYkF1dGhFbnZpcm9ubWVudDtcclxuICBsb2dnZWRPdXQkID0gbmV3IFN1YmplY3QoKTtcclxuICBlcnJvck1lc3NhZ2UgPSAnJztcclxuICBva01lc3NhZ2UgPSAnJztcclxuICBjYWxsTG9naW5BZnRlck9UUFJlcXVlc3QgPSBmYWxzZTtcclxuICByZUxvZ2luQWZ0ZXJPVFAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgZ2V0IHJvdXRlcigpIHsgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKTsgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdlbnYnKSBlbnY6IFRiQXV0aEVudmlyb25tZW50LCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7XHJcbiAgICBhdXRoU2VydmljZUluc3RhbmNlID0gdGhpcztcclxuICAgIHRoaXMuZW52ID0gXy5kZWZhdWx0c0RlZXAoZW52LCBUYkF1dGhTZXJ2aWNlLkRFRkFVTFRfRU5WLCBlbnYpO1xyXG4gICAgY29uc29sZS5sb2coJ1RiQXV0aEVudmlyb25tZW50JywgdGhpcy5lbnYpO1xyXG4gICAgdGhpcy5jYWxsTG9naW5BZnRlck9UUFJlcXVlc3QgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgLmdldCh0aGlzLmdldEJhc2VVcmwoKSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGltZW91dCg1MDAwKSxcclxuICAgICAgICBtYXAoKF9fKSA9PiB0cnVlKVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAuY2F0Y2goKGVycjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVyci5tZXNzYWdlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJpdG9ybmEgbGEgYmFzZSB1cmwgZGVsIGJhY2tlbmQsXHJcbiAgICogY2FyaWNhdGEgZGEgdW4gZmlsZSBkaSBjb25maWd1cmF6aW9uZSBjYXJpY2F0byBkaW5hbWljYW1lbnRlIChhc3NldHMvZW52aXJvbm1lbnQuanNvbilcclxuICAgKi9cclxuICBnZXRCYXNlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVybDtcclxuICBnZXRTbmFwc2hvdFNlcnZpY2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguc25hcHNob3RTZXJ2aWNlVXJsO1xyXG4gIGdldExvZ2luUGFnZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5sb2dpblBhZ2VVcmw7XHJcblxyXG4gIC8qXHJcbntcclxuICB0eXBlOiBKV1QsXHJcbiAgYXBwaWQ6IE00LFxyXG4gIHNlY3VyaXR5VmFsdWU6IGp3dEVuY29kZWRcclxufVxyXG4qL1xyXG4gIC8vIG1vZGlmaWNhIHBlciB1bmlmb3JtYXJlIGwgaGVhZGVyLG8gY2hlIGFycml2YSB1biBwbyBjYXBpdGFsaXp6YXRvIHVuIHBvIG5vLiAvL3JpZjogSWxhcmlhIGUgTHVjYVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGdldEF1dGhvcml6YXRpb25IZWFkZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIHR5cGU6ICdKV1QnLFxyXG4gICAgICBhcHBJZDogJ000JyxcclxuICAgICAgc2VjdXJpdHlWYWx1ZTogdGhpcy5nZXRUb2tlbigpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcmVsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZygncHJlbG9naW4nKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRoU2VydmljZS5sb2dpbiAtIGxvZ2luUmVxdWVzdCcsIGxvZ2luUmVxdWVzdCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0UHJlTG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTkpIHtcclxuICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBjYW1iaW8gcGFzc3dvcmQgZSBudW92byB0ZW50YXRpdm8gZGkgbG9naW5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENoYW5nZSBQYXNzd29yZCBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2VQYXNzd29yZERpYWxvZyhsb2dpblJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQWNjb3VudCBjb25maXJtYXRpb24gTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgYXR0aXZhcmUgbCdhY2NvdW50IGNoZSBub24gaGEgYW5jb3JhIGVmZmV0dHVhdG8gbGEgcHJvY2VkdXJhP1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNTgpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IEFjY291bnQgTG9ja2VkJyk7XHJcbiAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gdGhpcy5nZXRMb2NrZWRVc2VyTWVzc2FnZShsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBvdHAgY29kZSBuZWVkZWQnKTtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5PVFBEaWFsb2cobG9naW5SZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE0Mykge1xyXG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7IC8vIG5vbiBtb3N0cm8gZXJyb3JlIHJvc3NvIGNoZSBzZW1icmEgZ3JhdmVcclxuICAgICAgICAgICAgICAvLyB0aGlzLm9rTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBub24gc2VydmUgcXVhICwgdmllbmUgZ2lhIGdlc3RpdG8gcHJpbWFcclxuICAgICAgICAgLy8gaWYgKHRoaXMuY2FsbExvZ2luQWZ0ZXJPVFBSZXF1ZXN0KVxyXG4gICAgICAgICAvLyB7XHJcbiAgICAgICAgIC8vICAgdGhpcy5jYWxsTG9naW5BZnRlck9UUFJlcXVlc3QgPSBmYWxzZTtcclxuICAgICAgICAgLy8gICBjb25zb2xlLmxvZygncmVsb2dpbiBlbWl0dGVkJyk7XHJcbiAgICAgICAgIC8vICAgdGhpcy5yZUxvZ2luQWZ0ZXJPVFAuZW1pdCgpO1xyXG4gICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xyXG4gICAgLy8nbG9naW4nKTtcclxuICAgIGxldCByZWRvbG9naW4gPSBmYWxzZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRoU2VydmljZS5sb2dpbiAtIGxvZ2luUmVxdWVzdCcsIGxvZ2luUmVxdWVzdCk7XHJcbiAgICBjb25zdCBsb2dpbnJlc3BvbnNlID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0TG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE5KSB7XHJcbiAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgY2FtYmlvIHBhc3N3b3JkIGUgbnVvdm8gdGVudGF0aXZvIGRpIGxvZ2luXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDaGFuZ2UgUGFzc3dvcmQgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vcGVuQ2hhbmdlUGFzc3dvcmREaWFsb2cobG9naW5SZXF1ZXN0KTtcclxuICAgICAgICAgICAgICByZWRvbG9naW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XHJcbiAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgcmljaGllc3RhIG90cFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogb3RwIGNvZGUgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vcGVuT1RQRGlhbG9nKGxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgcmVkb2xvZ2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAvLyB0b2RvIGNvc2UgdGlwbyBtb3N0cmFyZSB1bmEgbWFzY2hlcmEgY2hlIGFjY2V0dGkgaWwgY29kaWNlIGUgbG8gcmltYW5kaSBpbmRpZXRybyBwZXIgaWwgY2hlY2tcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IEFjY291bnQgY29uZmlybWF0aW9uIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGF0dGl2YXJlIGwnYWNjb3VudCBjaGUgbm9uIGhhIGFuY29yYSBlZmZldHR1YXRvIGxhIHByb2NlZHVyYT9cclxuICAgICAgICAgICAgICAvLyBvIGFtbWV0dG8gY2hlIGxhIHBhc3N3b3JkIHNpYSAgaWwgY29kaWNlPyBtYSBpbiByZWxhdMOgIG9nbmkgc2l0byBsbyBmYSBpbiBkdWUgc3RlcFxyXG4gICAgICAgICAgICAgIC8vIGNvbCBjbGljayBzdWxsIG1haWxcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDU4KSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBBY2NvdW50IExvY2tlZCcgKyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IHRoaXMuZ2V0TG9ja2VkVXNlck1lc3NhZ2UobG9naW5SZXNwb25zZS5NZXNzYWdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE0OSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogU3Vic2NyaXB0aW9uIHJlcXVpcmVzIDJGQScgKyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IHRoaXMuZ2V0MkZBUmVxdWlyZWRNZXNzYWdlKGxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBMb2dpbiBmYWlsdXJlLCByZXN1bHQgY29kZSAnLCBsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpblJlcXVlc3QgYnkgYWNjb3VudCcgKyBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgKyAnIHRva2VuOicgKyBsb2dpblJlcXVlc3QudG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgOiAnTG9naW4gZXJyb3IuLi4nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnOyAvLyBub24gbW9zdHJvIGVycm9yZSByb3NzbyBjaGUgc2VtYnJhIGdyYXZlXHJcbiAgICAgICAgICAgICAgLy8gdGhpcy5va01lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5nZXROYW1lKGxvZ2luUmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZURhdGEobG9naW5SZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBMb2dPZmYgZHVlIHRvIEFjY291bnQgbm90IGFsbG93ZWQuJyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nb2ZmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9ICdBY2NvdW50IG5vdCBhbGxvd2VkLic7XHJcbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4gPSAnJztcclxuICAgICAgICAgICAgbG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID0gOTk5O1xyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLlJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuXHJcbiAgICBpZiAocmVkb2xvZ2luKSAgICB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ3JlZG9sb2dpbicpO1xyXG4gICAgICByZXR1cm4gdGhpcy5sb2dpbihsb2dpblJlcXVlc3QpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICByZXR1cm4gbG9naW5yZXNwb25zZTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGdldExvY2tlZFVzZXJNZXNzYWdlKG1lc3NhZ2VGcm9tTG9naW46IHN0cmluZykge1xyXG4gICAgaWYgKCFtZXNzYWdlRnJvbUxvZ2luKVxyXG4gICAgICByZXR1cm4gbWVzc2FnZUZyb21Mb2dpbjtcclxuICAgIGNvbnN0IHNlY29uZHM6IG51bWJlciA9ICttZXNzYWdlRnJvbUxvZ2luO1xyXG4gICAgbGV0IG1zZyA9IG1lc3NhZ2VGcm9tTG9naW47XHJcbiAgICBpZiAoaXNOYU4oc2Vjb25kcykpXHJcbiAgICAgIHJldHVybiBtc2c7XHJcbiAgICBpZiAoc2Vjb25kcyA8IDYwICYmIHNlY29uZHMgPiAtMSlcclxuICAgICAgbXNnID0gYExvZ2luIExvY2tlZC4gUGxlYXNlIHRyeSBhZ2FpbiBpbiAke3NlY29uZHN9IHNlY29uZHMuLi5gO1xyXG4gICAgZWxzZSBpZiAoc2Vjb25kcyA+PSA2MCkge1xyXG4gICAgICBjb25zdCBtaW5WYWwgPSBNYXRoLnJvdW5kKHNlY29uZHMgLyA2MCk7XHJcbiAgICAgIG1zZyA9IChtaW5WYWwgPT09IDEpID9cclxuICAgICAgICBgTG9naW4gTG9ja2VkLiBQbGVhc2UgdHJ5IGFnYWluIGluIG9uZSBtaW51dGUuLi5gIDpcclxuICAgICAgICBgTG9naW4gTG9ja2VkLiBQbGVhc2UgdHJ5IGFnYWluIGluICR7bWluVmFsfSBtaW51dGVzLi4uYDtcclxuICAgIH1cclxuICAgIHJldHVybiBtc2c7XHJcbiAgfVxyXG5cclxuICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZ2V0MkZBUmVxdWlyZWRNZXNzYWdlKGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgIGlmIChuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdCcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQtSVQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUNIJylcclxuICAgICByZXR1cm4gYFF1ZXN0YSBzdWJzY3JpcHRpb24gJHtkZXNjcmlwdGlvbn0gcmljaGllZGUgbCdhdXRlbnRpY2F6aW9uZSBhIGR1ZSBmYXR0b3JpISBMZWdnaSBsYSBtYWlsIHBlciB1bHRlcmlvcmkgZGV0dGFnbGlgO1xyXG4gICAgcmV0dXJuIGBUaGlzIFN1YnNjcmlwdGlvbiAke2Rlc2NyaXB0aW9ufSByZXF1aXJlcyB0d28gZmFjdG9yIGF1dGVudGljYXRpb24hIFBsZWFzZSByZWFkIHRoZSBFbWFpbHMgZm9yIGZ1cnRoZXIgZGV0YWlscy5gO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYXN5bmMgb3BlblVwZGF0ZUFsZXJ0RGlhbG9nKGluZm86IHN0cmluZywgdGl0bGU6IHN0cmluZywgZG9udHNob3c6IHN0cmluZywgYWNjb3VudE5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihBbGVydERpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgVGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIE1lc3NhZ2U6IGluZm8sXHJcbiAgICAgICAgRG9udFNob3c6IGRvbnRzaG93LFxyXG4gICAgICAgIFN1YktleTogc3Vic2NyaXB0aW9uS2V5XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMub2tNZXNzYWdlID0gJyc7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc1JlZGlyZWN0RXh0ZXJuYWwoKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnbyBleHRlcm5hbC4nKTtcclxuICAgICAgICB0aGlzLmdldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uKGFjY291bnROYW1lLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ2dvIGludGVybmFsIScpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRSZWRpcmVjdFVybCgpXSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYXN5bmMgb3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KSB7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIGxldCB0aXRsZTogc3RyaW5nO1xyXG4gICAgbGV0IG1lc3NhZ2U6IHN0cmluZztcclxuICAgIGxldCBwbGFjZUhvbGRlcl8xOiBzdHJpbmc7XHJcbiAgICBsZXQgcGxhY2VIb2xkZXJfMjogc3RyaW5nO1xyXG4gICAgY29uc3QgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xyXG4gICAgICB0aXRsZSA9IFwiTW9kaWZpY2EgcGFzc3dvcmRcIjtcclxuICAgICAgbWVzc2FnZSA9IFwiTGEgbnVvdmEgcGFzc3dvcmQgZGV2ZSBlc3NlcmUgYWxtZW5vIGRpIDggY2FyYXR0ZXJpIGUgY29udGVuZXJlIDMgZGkgcXVlc3RlIDQgY29uZGl6aW9uaTogYXZlcmUgYWxtZW5vIHVuYSBtYWl1c2NvbGEsIGF2ZXJlIGNhcmF0dGVyaSBtaW51c2NvbGksIGFsbWVubyB1biBudW1lcm8gKDAtOSksIHVuIHNpbWJvbG8gKCE/XCI7XHJcbiAgICAgIHBsYWNlSG9sZGVyXzEgPSBcIlBhc3N3b3JkXCI7XHJcbiAgICAgIHBsYWNlSG9sZGVyXzIgPSBcIkNvbmZlcm1hIHBhc3N3b3JkXCI7XHJcbiAgICAgIHRoaXMub2tNZXNzYWdlID0gXCJQYXNzd29yZCBtb2RpZmljYXRhIGNvbiBzdWNjZXNzbyFcIjtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGl0bGUgPSBcIkNoYW5nZSBwYXNzd29yZFwiO1xyXG4gICAgICBtZXNzYWdlID0gXCJUaGUgbmV3IHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcgYW5kIGNvbnRhaW4gMyBvZiB0aGVzZSA0IGNvbmRpdGlvbnM6IGhhdmUgYXQgbGVhc3Qgb25lIHVwcGVyY2FzZSwgaGF2ZSBsb3dlcmNhc2UgY2hhcmFjdGVycywgYXQgbGVhc3Qgb25lIG51bWJlciAoMC05KSwgb25lIHN5bWJvbCAoIT9cIjtcclxuICAgICAgcGxhY2VIb2xkZXJfMSA9IFwiUGFzc3dvcmRcIjtcclxuICAgICAgcGxhY2VIb2xkZXJfMiA9IFwiQ29uZmlybSBwYXNzd29yZFwiO1xyXG4gICAgICB0aGlzLm9rTWVzc2FnZSA9IFwiUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNmdWxseSFcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIFRpdGxlOiB0aXRsZSxcclxuICAgICAgICBNZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgIFBsYWNlSG9sZGVyXzE6IHBsYWNlSG9sZGVyXzEsXHJcbiAgICAgICAgUGxhY2VIb2xkZXJfMjogcGxhY2VIb2xkZXJfMlxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKGFzeW5jIChkYXRhOiB7IE5ld1B3ZDogc3RyaW5nIHwgdW5kZWZpbmVkIH0pID0+IHtcclxuICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBpZiAoZGF0YS5OZXdQd2QgPT09IHVuZGVmaW5lZCB8fCBkYXRhLk5ld1B3ZCA9PT0gJycpIHtcclxuICAgICAgICBhbGVydCgnV3JpdGUgYSB2YWxpZCBBY2NvdW50TmFtZScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICBjb25zdCBjcGk6IENoYW5nZVBhc3N3b3JkSW5mbyA9IG5ldyBDaGFuZ2VQYXNzd29yZEluZm8oKTtcclxuICAgICAgY3BpLkFjY291bnROYW1lID0gbG9naW5SZXF1ZXN0LmFjY291bnROYW1lO1xyXG4gICAgICBjcGkuSWdub3JlT2xkUGFzc3dvcmQgPSBmYWxzZTtcclxuICAgICAgY3BpLkpXVFRva2VuID0gbG9naW5SZXF1ZXN0LnRva2VuO1xyXG4gICAgICBjcGkuTmV3UGFzc3dvcmQgPSBkYXRhLk5ld1B3ZDtcclxuICAgICAgY3BpLlBhc3N3b3JkID0gbG9naW5SZXF1ZXN0LnBhc3N3b3JkO1xyXG5cclxuICAgICAgbG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gZGF0YS5OZXdQd2Q7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY2hhbmdlUGFzc3dvcmQoY3BpKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHRvZG8gY29udHJvbGxhIGNvbWUgdmVuZ29ubyBtb3N0cmF0aSBlcnJvcmlcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuUmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKSB7XHJcbiAgICAgICAgICB0aGlzLm9rTWVzc2FnZSA9IFwiUGFzc3dvcmQgbW9kaWZpY2F0YSBjb24gc3VjY2Vzc28hXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5va01lc3NhZ2UgPSBcIlBhc3N3b3JkIGNoYW5nZWQgc3VjY2VzZnVsbHkhXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxhIGxvZ2luIGxhIGZhICBhIG1hbm8gYWx0cmltZW50aSBtaSBwZXJkb1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGVycm9yZSBnacOgIGluZGljYXRvXHJcbiAgICAgICAgbG9naW5SZXF1ZXN0LnRva2VuID0gJyc7XHJcbiAgICAgICAgbG9naW5SZXF1ZXN0LnBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgbG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSA9ICcnO1xyXG4gICAgICAgIGxvZ2luUmVxdWVzdC5hcHBJZCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBhc3luYyBvcGVuT1RQRGlhbG9nKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KSB7XHJcblxyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxudmFyIG1lcz0gICAobmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUlUJyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1DSCcpID9cclxuYFByZWdvIGluc2VyaXJlIGlsIGNvZGljZSBPVFAgcmljZXZ1dG8gdmlhIG1haWwgbyBTTVMgYSBzZWNvbmRhIGRlbGxhIG1vZGFsaXTDoCBpbXBvc3RhdGEuYDpcclxuYFBsZWFzZSBpbnNlcnQgdGhlIE9UUCBjb2RlLiBEZXBlbmRpbmcgb24gdGhlIG1vZGUgc2V0LCB0aGUgT1RQIGlzIHNlbnQgZWl0aGVyIGJ5IGUtbWFpbCBvciBieSBTTVMuYFxyXG5sZXQgdGl0bGUgPSAobmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUlUJyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1DSCcpID9cclxuXCJBdXRlbnRpY2F6aW9uZSBhIGR1ZSBmYXR0b3JpXCIgOiBcIlR3by1GYWN0b3IgQXV0aGVudGljYXRpb25cIjtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oT3RwQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBUaXRsZTogdGl0bGUsXHJcbiAgICAgICAgQWNjb3VudE5hbWU6IGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSxcclxuXHJcbiAgICAgICAgTWVzc2FnZTogbWVzLFxyXG4gICAgICAgIFBsYWNlSG9sZGVyOiAnQ29kZScsXHJcbiAgICAgICAgVGV4dFZhbHVlOiAnJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3ViID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLnJlc2VuZFJlcXVlc3RlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc2VuZE9UUChsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKGFzeW5jIChkYXRhOiB7IFRleHRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkIH0pID0+IHtcclxuICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBpZiAoZGF0YS5UZXh0VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBkYXRhLlRleHRWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICBhbGVydCgnV3JpdGUgYSB2YWxpZCBDb2RlJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgIC8qY29uc3QgY3BpOiBPVFBJbmZvID0gbmV3IE9UUEluZm8oKTtcclxuICAgICAgY3BpLkFjY291bnROYW1lID0gbG9naW5SZXF1ZXN0LmFjY291bnROYW1lO1xyXG4gICAgICBjcGkuQ29kZSA9IGRhdGEuQ29kZTtcclxuICAgICAgY3BpLlBhc3N3b3JkID0gbG9naW5SZXF1ZXN0LnBhc3N3b3JkOyovXHJcblxyXG4gICAgICBsb2dpblJlcXVlc3QucGFzc3dvcmQgPSBkYXRhLlRleHRWYWx1ZTtcclxuICAgICAgdGhpcy5jYWxsTG9naW5BZnRlck9UUFJlcXVlc3QgPSB0cnVlO1xyXG5cclxuICAgICAgLy9ub24gZGV2byByaWNoaWFtYXJlIHByZWxvZ2luIG1hIHNvbG8gZmFyZSBlbWl0XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ3JlTG9naW5BZnRlck9UUCBlbWl0dGVkJyk7XHJcbiAgICAgIHRoaXMucmVMb2dpbkFmdGVyT1RQLmVtaXQoKTtcclxuICAgICAgLy90aGlzLnByZWxvZ2luKGxvZ2luUmVxdWVzdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGlzVmFsaWRUb2tlbihhdXRodG9rZW4gPSAnJyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICBpZiAoIWF1dGh0b2tlbikge1xyXG4gICAgICBjb25zdCBvcHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgb3ByZXMuTWVzc2FnZSA9ICdObyBhdXRodG9rZW4nO1xyXG4gICAgICByZXR1cm4gb3ByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0SXNWYWxpZFRva2VuVXJsKCksIG5ldyBJc1ZhbGlkVG9rZW5SZXF1ZXN0KGF1dGh0b2tlbikpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcCgoak9iajogT3BlcmF0aW9uUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXNWYWxpZFRva2VuIC0gcmVzcG9uc2UnLCBqT2JqKTtcclxuICAgICAgICAgIGlmICghak9iai5SZXN1bHQpIHtcclxuICAgICAgICAgICAgak9iai5NZXNzYWdlID0gak9iai5NZXNzYWdlID8gak9iai5NZXNzYWdlIDogJ2lzVmFsaWRUb2tlbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gVG9rZW4gVmFsaWRhdGlvbiBmYWlsdXJlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbjogJyArIGF1dGh0b2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gak9iai5NZXNzYWdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgcmVzLkNvZGUgPSA2NjY7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwuaW5jbHVkZXModGhpcy5nZXRMb2dpblBhZ2VVcmwoKSkpXHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb21wYW5pZXNGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpICsgdXNlcikucGlwZShcclxuICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHJlcy5Db250ZW50ICYmIHJlcy5Db250ZW50LnN1YnNjcmlwdGlvbnMgPyByZXMuQ29udGVudC5zdWJzY3JpcHRpb25zIDogW107XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldElzVmFsaWRUb2tlblVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdpc3ZhbGlkdG9rZW4vJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMb2dpblVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xyXG4gIH1cclxuICBnZXRQcmVMb2dpblVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExvZ291dFVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dvZmYvJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDaGFuZ2VQYXNzd29yZEFwaVVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldENoYW5nZVBhc3N3b3JkVXJsKCkgKyAnY2hhbmdlcGFzc3dvcmQvJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNlbmRPVFBVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDaGFuZ2VQYXNzd29yZFVybCgpICsgJ3Jlc2VuZG90cC8nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJlc2V0UGFzc3dvcmRVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDaGFuZ2VQYXNzd29yZFVybCgpICsgJ3Jlc2V0cGFzc3dvcmQvJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdWJzS2V5c0ZvckFjY291bnRVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50Lyc7XHJcbiAgfVxyXG5cclxuICAvKmFzeW5jIHNlbmRPVFAoY3BpOiBPVFBJbmZvKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICBjb25zdCBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY3BpKTtcclxuICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGFsaWduXHJcbiAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMubG9naW4oKSwgYm9keVN0cmluZywgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzLk1lc3NhZ2UgKyAnIChDb2RlOicgKyByZXMuQ29kZSArICcpJztcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2NjtcclxuICAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIClcclxuICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gfSovXHJcblxyXG4gIGFzeW5jIGNoYW5nZVBhc3N3b3JkKGNwaTogQ2hhbmdlUGFzc3dvcmRJbmZvKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgIGNvbnN0IGJvZHlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjcGkpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGFsaWduXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRDaGFuZ2VQYXNzd29yZEFwaVVybCgpLCBib2R5U3RyaW5nLCB7IGhlYWRlcnMgfSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXMuTWVzc2FnZSArICcgKENvZGU6JyArIHJlcy5Db2RlICsgJyknO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KSxcclxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgIHJlcy5Db2RlID0gNjYyO1xyXG4gICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZXNlbmRPVFAoYWNjbmFtZTogc3RyaW5nKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMucmVzZW5kT1RQVXJsKCkgKyBhY2NuYW1lLCB7IGhlYWRlcnMgfSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICByZXMuQ29kZSA9IDY2MztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgcmVzLk1lc3NhZ2UgPSBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9Llxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICAgICAgcmVzLkNvZGUgPSA2Njk7XHJcbiAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJlc2V0cGFzc3dvcmQoYWNjbmFtZTogc3RyaW5nKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0UmVzZXRQYXNzd29yZFVybCgpICsgYWNjbmFtZSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICghcmVzKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9Llxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgIHJlcy5NZXNzYWdlID0gYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICAgICAgICAgIHJlcy5Db2RlID0gNjYxO1xyXG5cclxuICAgICAgICAgIGlmICghdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsLmluY2x1ZGVzKHRoaXMuZ2V0TG9naW5QYWdlVXJsKCkpKVxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9nb2ZmKCkge1xyXG4gICAgY29uc3QgbG9nb2ZmUmVxdWVzdDogTG9nb2ZmUmVxdWVzdCA9IG5ldyBMb2dvZmZSZXF1ZXN0KHRoaXMuZ2V0VG9rZW4oKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxMb2dvZmZSZXNwb25zZT4odGhpcy5nZXRMb2dvdXRVcmwoKSwgbG9nb2ZmUmVxdWVzdClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChsb2dvZmZSZXNwb25zZTogTG9nb2ZmUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChsb2dvZmZSZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBMb2dvZmYnKTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZWRPdXQkLm5leHQoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gbG9nb2ZmUmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmF2aWdhdGVVc2VyR2F0ZXdheSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlbnRlcmluZyBuYXZpZ2F0ZVVzZXJHYXRld2F5Li4nKTtcclxuICAgIGNvbnN0IHVzZXJHYXRld2F5VXJsID0gdGhpcy5nZXRVc2VyR2F0ZXdheVVybCgpO1xyXG5cclxuICAgIC8vIGlmIHVzZXJnYXRld2F5IHVybCBleGlzdHMsIHRoZW4gcmVkaXJlY3QgdG8gaXRcclxuICAgIGlmICh1c2VyR2F0ZXdheVVybCAhPT0gJycpIHtcclxuICAgICAgY29uc29sZS5sb2coYEZvdW5kIGdldFVzZXJHYXRld2F5VXJsICR7dXNlckdhdGV3YXlVcmx9YCk7XHJcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSB1c2VyR2F0ZXdheVVybDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG90aGVyd2lzZSwgcmVkaXJlY3QgdG8gbG9naW5cclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24oYWNjb3VudE5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZ2V0SW5zdGFuY2VzTWFwRm9yVXNlcihhY2NvdW50TmFtZSkuc3Vic2NyaWJlKFxyXG4gICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFwOiBBcnJheTx7IFN1YnNjcmlwdGlvbktleTogc3RyaW5nOyBEZXNjcmlwdGlvbjogc3RyaW5nOyBJbnN0YW5jZUtleTogc3RyaW5nIH0+ID0gcmVzIGFzIEFycmF5PHtcclxuICAgICAgICAgIFN1YnNjcmlwdGlvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgIEluc3RhbmNlS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgfT47XHJcbiAgICAgICAgaWYgKCFtYXAgfHwgbWFwLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnN0YW5jZU1hcCBpcyBpbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbnN0YW5jZUtleTogc3RyaW5nID0gbWFwLmZpbHRlcigoaykgPT4gay5TdWJzY3JpcHRpb25LZXkgPT09IHN1YnNjcmlwdGlvbktleSkubWFwKChqKSA9PiBqLkluc3RhbmNlS2V5KVswXTtcclxuICAgICAgICB0aGlzLmdldFNuYXBzaG90KGN1cnJlbnRJbnN0YW5jZUtleSwgc3Vic2NyaXB0aW9uS2V5KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzIHx8IHJlcyA9PT0gW10gfHwgcmVzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdzbmFwc2hvdCBpcyBlbXB0eScpO1xyXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIG5vdyB0aGUgc25hcHNob3RcclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZXM6IEFycmF5PHsgU2VydmljZVR5cGU6IHN0cmluZzsgVXJsOiBzdHJpbmc7IFByb2R1Y3RWZXJzaW9uOiBzdHJpbmc7IFBvcnQ6IG51bWJlciB9PiA9IHJlcy5TZXJ2aWNlcyBhcyBBcnJheTx7IFNlcnZpY2VUeXBlOiBzdHJpbmc7IFVybDogc3RyaW5nOyBQcm9kdWN0VmVyc2lvbjogc3RyaW5nOyBQb3J0OiBudW1iZXIgfT47XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdFVybDogc3RyaW5nID0gc2VydmljZXNcclxuICAgICAgICAgICAgICAuZmlsdGVyKChpKSA9PiBpLlNlcnZpY2VUeXBlID09PSAnTTRGUk9OVEVORCcgfHwgaS5TZXJ2aWNlVHlwZSA9PT0gJ0FQUF9GUk9OVEVORCcpXHJcbiAgICAgICAgICAgICAgLm1hcCgoZikgPT4gZi5VcmwpWzBdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzaWduYXRlZCByZWRpcmVjdCBpcyAke3JlZGlyZWN0VXJsfWApO1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlUmVkaXJlY3RVcmwgPSBgJHtyZWRpcmVjdFVybH0/and0PSR7dGhpcy5nZXRUb2tlbigpfSZzdWJLZXk9JHtzdWJzY3JpcHRpb25LZXl9Jmluc3RhbmNlS2V5PSR7Y3VycmVudEluc3RhbmNlS2V5fWA7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzaWduYXRlZCBmaW5hbCByZWRpcmVjdCBpcyAke2Jhc2VSZWRpcmVjdFVybH1gKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RMb2dnZWRSZWRpcmVjdCcsIGJhc2VSZWRpcmVjdFVybCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBiYXNlUmVkaXJlY3RVcmw7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc25hcHNob3QgY2Fubm90IGJlIG9idGFpbmVkJyk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc25hcHNob3QgY2Fubm90IGJlIG9idGFpbmVkJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbiBpYSBhYm91dCB0byBmYWlsLi4uJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldEluc3RhbmNlc01hcEZvclVzZXIgZmFpbGVkJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldEluc3RhbmNlc01hcEZvckFjY291bnRVcmwoKSArIHVzZXIpLnBpcGUoXHJcbiAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgIHJldHVybiByZXMuQ29udGVudDtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0Q2FsZW5kYXIoc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4oYCR7dGhpcy5nZXRDYWxlbmRhclVybCgpfT9TdWJzY3JpcHRpb25LZXk9JHtzdWJzY3JpcHRpb25LZXl9YC8qLCB7IGhlYWRlcnMgfSovKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlcy5NZXNzYWdlICsgJyAoQ29kZTonICsgcmVzLkNvZGUgKyAnKSc7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgcmVzLkNvZGUgPSA2NjI7XHJcbiAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGdldFNuYXBzaG90KGluc3RhbmNlS2V5OiBzdHJpbmcsIHN1YnNjcmlwdGlvbktleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0U25hcHNob3RTZXJ2aWNlVXJsKCkgKyBpbnN0YW5jZUtleSArICc/c3Vic2NyaXB0aW9uS2V5PScgKyBzdWJzY3JpcHRpb25LZXkpLnBpcGUoXHJcbiAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgIHJldHVybiByZXMuQ29udGVudDtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SW5zdGFuY2VzTWFwRm9yQWNjb3VudFVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdpbnN0YW5jZXNNYXAvJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDYWxlbmRhclVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEl1cFVybCgpICsgJ2NhbGVuZGFyam9icy8nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVwZGF0ZU1lc3NhZ2UoaXQ6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpdClcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlTWVzc2FnZUl0KCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VFbigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyU3RvcmFnZSgpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCk7XHJcbiAgfVxyXG5cclxuICBzdG9yYWdlU3Vic2NyaXB0aW9uRGF0YShzdWJzY3JpcHRpb25LZXk6IHN0cmluZywgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcmFnZVF1ZXJ5UGFyYW1zKHN1YnNjcmlwdGlvbktleTogc3RyaW5nLCBpbnN0YW5jZUtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0SW5zdGFuY2VLZXkoaW5zdGFuY2VLZXkpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0TmFtZShsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gbG9naW5SZXNwb25zZS5Bc2tpbmdQcm9jZXNzID09PSB0aGlzLmdldEFwcElkKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHJlc3BDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXHJcbiAgICAgICAgOiBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3M7XHJcbiAgICBjb25zdCByZXNwVWlDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICBsb2dpblJlc3BvbnNlLkxhbmd1YWdlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5MYW5ndWFnZS5sZW5ndGggPT09IDBcclxuICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcclxuICAgICAgICA6IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2U7XHJcblxyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5KV1QsIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4pO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIHJlc3BDdWx0dXJlKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCByZXNwVWlDdWx0dXJlKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTLCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLlJvbGVzKSk7XHJcblxyXG4gICAgICBpZiAobG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUsIGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpO1xyXG4gICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25LZXkpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5KV1QsIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHJlc3BVaUN1bHR1cmUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTLCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLlJvbGVzKSk7XHJcblxyXG4gICAgICBpZiAobG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCBsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKTtcclxuICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZUN1bHR1cmUoY3VsdHVyZTogc3RyaW5nLCB1aUN1bHR1cmU6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCB1aUN1bHR1cmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbigpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICB9XHJcblxyXG4gIGdldEFjY291bnROYW1lKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSk7XHJcbiAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3Vic2NyaXB0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XHJcbiAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3Vic2NyaXB0aW9uRGVzY3JpcHRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcclxuICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XHJcbiAgfVxyXG5cclxuICBnZXRDdWx0dXJlKCkge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XHJcbiAgfVxyXG5cclxuICBnZXRVSUN1bHR1cmUoKSB7XHJcbiAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICB9XHJcblxyXG4gIGdldEluc3RhbmNlS2V5KCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZKTtcclxuICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZKTtcclxuICB9XHJcblxyXG4gIHNldEluc3RhbmNlS2V5KGluc3RhbmNlS2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZLCBpbnN0YW5jZUtleSk7XHJcbiAgICBlbHNlIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZKTtcclxuICB9XHJcblxyXG4gIGdldEF1dGhTZXJ2aWNlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVybDtcclxuICBnZXRJdXBVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguaXVwdXJsO1xyXG4gIGdldFJlZGlyZWN0VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnJlZGlyZWN0VXJsO1xyXG4gIGdldFVzZXJHYXRld2F5VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVzZXJHYXRld2F5VXJsO1xyXG4gIGdldENyZWF0ZUFjY291bnRVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguY3JlYXRlQWNjb3VudFVybDtcclxuICBnZXRDaGFuZ2VQYXNzd29yZFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5jaGFuZ2VQYXNzd29yZFVybDtcclxuICBoYXNTdWJzY3JpcHRpb25TZWxlY3Rpb24gPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnN1YnNjcmlwdGlvblNlbGVjdGlvbjtcclxuICBzaG93U2lnblVwID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zaG93U2lnblVwO1xyXG4gIGdldEFwcElkID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmFwcElkO1xyXG4gIGlzU2Vzc2lvblN0b3JhZ2UgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlO1xyXG4gIGdldExvZ29VUkwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgubG9nb1VSTDtcclxuICBpc1JlZGlyZWN0RXh0ZXJuYWwgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLmlzUmVkaXJlY3RFeHRlcm5hbDtcclxuICBnZXRVcGRhdGVNZXNzYWdlSXQgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZUl0O1xyXG4gIGdldFVwZGF0ZU1lc3NhZ2VFbiA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlRW47XHJcbn1cclxuIl19