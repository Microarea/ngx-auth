import { Injectable, Inject, } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash-es';
import { of, Subject } from 'rxjs';
import { tap, map, catchError, timeout } from 'rxjs/operators';
import { StorageVars } from './models/storage-vars';
import { LogoffRequest } from './models/logoff-request';
import { IsValidTokenRequest } from './models/is-valid-token-request';
import { OperationResult } from './models/operation-result';
import { ChangePasswordDialogComponent } from './pages/change-password-dialog/change-password-dialog.component';
import { AlertDialogComponent } from './pages/alert-dialog/alert-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/material/snack-bar";
let authServiceInstance;
export const authService = () => authServiceInstance;
// ---------------------------------------------------------------------------
export class TbAuthService {
    static { this.DEFAULT_ENV = {
        auth: {
            url: 'http://localhost:10344/api/',
            storeUrl: 'https://test-store.mago.cloud',
            iupurl: '',
            createAccountUrl: 'http://localhost:4200',
            changePasswordUrl: 'http://localhost:56392/api/',
            subscriptionSelection: false,
            showSignUp: false,
            appId: 'M4',
            preLoginAppId: 'MCloudPreLogin',
            redirectUrl: '/',
            redirectIfNotAuthenticated: false,
            userGatewayUrl: '',
            isRedirectExternal: true,
            loginPageUrl: 'login',
            sessionStorage: false,
            snapshotServiceUrl: '',
            // tslint:disable-next-line: max-line-length
            updatemessage_IT: "Sono previste attività di manutenzione ed aggiornamento, per questo sulla tua subscription @@sub potrebbero verificarsi brevi disservizi il <b> @@date</b>, dalle ore <b> @@starth</b> alle ore <b> @@endh</b>.</br>Attenzione, per consentire il corretto svolgimento dell'aggiornamento le procedure che durante lo stesso risulteranno ancora in esecuzione saranno interrotte.",
            // tslint:disable-next-line: max-line-length
            updatemessage_EN: 'Due to system maintenance and updates there might be disturbance in your subscription @@sub on the <b> @@date, between <b> @@starth and <b> @@endh</b>.</br> ',
            updatemessage_DE: '',
            updatemessage_BR: '',
            updatemessage_ES: '',
            updatemessage_BG: '',
            updatemessage_RO: '',
            updatemessage_PL: '',
            logoURL: 'https://magocloud-store-pdf.s3.eu-west-1.amazonaws.com/login-logo.png',
            backgroundURL: 'https://magocloud-store-pdf.s3.eu-west-1.amazonaws.com/login-bg.png',
            // tslint:disable-next-line: max-line-length
            // 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAA2CAYAAABTAoWuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc0OEJEMDcwNDlBMTFFQTlDNzVDNDRGNkMzQ0EwRDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc0OEJEMDgwNDlBMTFFQTlDNzVDNDRGNkMzQ0EwRDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzQ4QkQwNTA0OUExMUVBOUM3NUM0NEY2QzNDQTBENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzQ4QkQwNjA0OUExMUVBOUM3NUM0NEY2QzNDQTBENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl3e4DwAABUASURBVHja7F0J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'
        },
        brand: {
            applicationName: 'MagoCloud',
            bannerUrl: 'assets/images/logomagocloud-white-312.png',
        },
    }; }
    get router() {
        return this.injector.get(Router);
    }
    // ---------------------------------------------------------------------------
    constructor(env, http, injector, dialog, snackBar) {
        this.http = http;
        this.injector = injector;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.loggedOut$ = new Subject();
        this.errorMessage = '';
        this.okMessage = '';
        this.useDCS = false;
        /**
         * Ritorna la base url del backend,
         * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
         */
        this.getBaseUrl = () => this.env.auth.url;
        this.getSnapshotServiceUrl = () => this.env.auth.snapshotServiceUrl;
        this.getLoginPageUrl = () => this.env.auth.loginPageUrl;
        this.getStoreUrl = () => this.env.auth.storeUrl;
        this.getAuthServiceUrl = () => this.env.auth.url;
        this.getIupUrl = () => this.env.auth.iupurl; //http://localhost:52172/api/
        this.getRedirectUrl = () => this.env.auth.redirectUrl;
        this.getRedirectIfNotAuthenticated = () => this.env.auth.redirectIfNotAuthenticated;
        this.getUserGatewayUrl = () => this.env.auth.userGatewayUrl;
        this.getCreateAccountUrl = () => this.env.auth.createAccountUrl;
        this.getChangePasswordUrl = () => this.env.auth.changePasswordUrl;
        this.hasSubscriptionSelection = () => this.env.auth.subscriptionSelection;
        this.showSignUp = () => this.env.auth.showSignUp;
        this.getAppId = () => {
            return this.useDCS ? 'DCS' : this.env.auth.appId;
        };
        this.getPreLoginAppId = () => this.env.auth.preLoginAppId;
        this.isSessionStorage = () => this.env.auth.sessionStorage;
        this.getLogoURL = () => this.env.auth.logoURL;
        this.getBackgroundURL = () => this.env.auth.backgroundURL;
        this.getBrandName = () => this.env.brand.applicationName;
        this.isRedirectExternal = () => this.env.auth.isRedirectExternal;
        this.getUpdateMessage_IT = () => this.env.auth.updatemessage_IT;
        this.getUpdateMessage_EN = () => this.env.auth.updatemessage_EN;
        this.getUpdateMessage_BR = () => this.env.auth.updatemessage_BR;
        this.getUpdateMessage_BG = () => this.env.auth.updatemessage_BG;
        this.getUpdateMessage_RO = () => this.env.auth.updatemessage_RO;
        this.getUpdateMessage_DE = () => this.env.auth.updatemessage_DE;
        this.getUpdateMessage_ES = () => this.env.auth.updatemessage_ES;
        this.getUpdateMessage_PL = () => this.env.auth.updatemessage_PL;
        authServiceInstance = this;
        this.env = _.defaultsDeep(env, TbAuthService.DEFAULT_ENV, env);
        console.log('TbAuthEnvironment', this.env);
        this.langIt = undefined;
    }
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
    async prelogin(loginRequest) {
        console.log('prelogin...');
        return await this.http
            .post(this.getPreLoginUrl(), loginRequest)
            .pipe(map((loginResponse) => {
            if (!loginResponse.Result) {
                if (loginResponse.ResultCode === 19) {
                    // mi sposto su pagina per cambio password e nuovo tentativo di login
                    console.log('AuthService(cod.19): Change Password Needed');
                    this.openChangePasswordDialog(loginRequest);
                }
                else if (loginResponse.ResultCode === 4) {
                    console.log('AuthService (cod.4): Account confirmation Needed');
                    // mi sposto su pagina per attivare l'account che non ha ancora effettuato la procedura?
                }
                else if (loginResponse.ResultCode === 46) {
                    //invalidData
                    console.log('AuthService (cod.46): ' + loginResponse.Message);
                    loginResponse.Message = this.LangIT() ? 'Codice non valido.' : 'Invalid code.';
                }
                else if (loginResponse.ResultCode === 58) {
                    console.log('AuthService (cod.58): Account Locked');
                    loginResponse.Message = this.getLockedUserMessage(loginResponse.Message);
                }
                else if (loginResponse.ResultCode === 143) {
                    console.log('PreLogin(cod.143): otp code needed');
                }
                else if (loginResponse.ResultCode === 116) {
                    console.log('AuthService (cod.116): user already logged');
                }
                //  per 143 ( otpneeded) e 116 (alreadyLogged))non mostro errore rosso che sembra grave
                if (loginResponse.ResultCode !== 143 && loginResponse.ResultCode !== 116)
                    this.errorMessage = loginResponse.Message;
                this.okMessage = '';
                return loginResponse;
            }
            return loginResponse;
        }))
            .toPromise();
    }
    // ---------------------------------------------------------------------------
    async login(loginRequest) {
        //'login');
        let issue = false;
        console.log('login...');
        const loginresponse = await this.http
            .post(this.getLoginUrl(), loginRequest)
            .pipe(map((loginResponse) => {
            if (!loginResponse.Result) {
                if (loginResponse.ResultCode === 19) {
                    // mi sposto su pagina per cambio password e nuovo tentativo di login
                    console.log('AuthService: Change Password Needed');
                    this.openChangePasswordDialog(loginRequest);
                    issue = true;
                }
                else if (loginResponse.ResultCode === 143) {
                    // mi sposto su pagina per richiesta otp
                    console.log('Login(cod.143): otp code needed');
                    // todo cose tipo mostrare una maschera che accetti il codice e lo rimandi indietro per il check
                }
                else if (loginResponse.ResultCode === 116) {
                    // mi sposto su pagina per richiesta otp
                    console.log('AuthService: user already logged');
                    // todo cose tipo mostrare una maschera che chieda se si vuole cancellare la precedente login rimandi indietro la risposta
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
                    console.log('AuthService: Clearing storage due to Login failure for ' + loginRequest.accountName + ', result code ', loginResponse.ResultCode);
                }
                loginResponse.Message = loginResponse.Message ? loginResponse.Message : 'Login error...';
                console.log(loginResponse.Message);
                if (loginResponse.ResultCode === 143 || loginResponse.ResultCode === 116) {
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
        if (issue) {
            this.fixIssue(loginresponse);
        }
        return loginresponse;
    }
    // ---------------------------------------------------------------------------
    fixIssue(loginResponse) {
        console.log('Result to manage: ' + loginResponse.ResultCode);
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
            msg =
                minVal === 1 ? `Login Locked. Please try again in one minute...` : `Login Locked. Please try again in ${minVal} minutes...`;
        }
        return msg;
    }
    // ---------------------------------------------------------------------------
    get2FARequiredMessage(description) {
        if (navigator.language.startsWith('it'))
            return `Questa subscription ${description} richiede l'autenticazione a due fattori! Leggi la mail per ulteriori dettagli`;
        return `This Subscription ${description} requires two factor autentication! Please read the Emails for further details.`;
    }
    // ---------------------------------------------------------------------------
    async openUpdateAlertDialog(info, title, dontshow, accountName, subscriptionKey, processid) {
        this.errorMessage = '';
        const dialogRef = this.dialog.open(AlertDialogComponent, {
            data: {
                Title: title,
                Message: info,
                DontShow: dontshow,
                SubKey: subscriptionKey,
            },
        });
        dialogRef.afterClosed().subscribe(() => {
            this.okMessage = '';
            this.errorMessage = '';
            if (this.isRedirectExternal()) {
                console.log('go external.');
                this.getRedirectUrlForSubscription(accountName, subscriptionKey, processid);
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
        const opRes = await this.getSymbolsToPromise();
        const pswRulesSymbol = opRes.Content;
        let message_1;
        let message_2;
        let message_3;
        let message_4;
        let message_5;
        let message_6;
        let message_7;
        let message_8;
        let message_9;
        let message_10;
        let message_11;
        let placeHolder_1;
        let placeHolder_2;
        const currentBrowserLanguage = navigator.language.toLocaleLowerCase();
        if (currentBrowserLanguage.startsWith('it')) {
            title = 'Modifica password';
            message_1 = 'La nuova password deve essere composta da almeno ';
            message_2 = '8 caratteri ';
            message_3 = 'e contenere tassativamente ';
            message_4 = '3 di queste 4 condizioni:';
            message_5 = 'avere almeno ';
            message_6 = 'una maiuscola';
            message_7 = 'avere ';
            message_8 = 'caratteri minuscoli';
            message_9 = 'almeno un numero ';
            message_10 = '(tra 0 e 9)';
            message_11 = 'un simbolo tra questi a seguire ';
            placeHolder_1 = 'Password';
            placeHolder_2 = 'Conferma password';
            //this.okMessage = "Password modificata con successo!";
        }
        else {
            title = 'Change password';
            message_1 = 'The new password must be at least ';
            message_2 = '8 characters ';
            message_3 = 'and contain ';
            message_4 = '3 of these 4 conditions:';
            message_5 = 'have at least ';
            message_6 = 'one uppercase';
            message_7 = 'have ';
            message_8 = 'lowercase characters';
            message_9 = 'at least one number ';
            message_10 = '(between 0 and 9)';
            message_11 = 'one symbol among these to follow ';
            placeHolder_1 = 'Password';
            placeHolder_2 = 'Confirm password';
            //this.okMessage = "Password changed succesfully!";
        }
        this.dialog.open(ChangePasswordDialogComponent, {
            data: {
                Title: title,
                Message_1: message_1,
                Message_2: message_2,
                Message_3: message_3,
                Message_4: message_4,
                Message_5: message_5,
                Message_6: message_6,
                Message_7: message_7,
                Message_8: message_8,
                Message_9: message_9,
                Message_10: message_10,
                Message_11: message_11,
                Message_12: pswRulesSymbol,
                PlaceHolder_1: placeHolder_1,
                PlaceHolder_2: placeHolder_2,
                LoginRequest: loginRequest,
                CurrentBrowserLanguage: currentBrowserLanguage,
            },
        });
    }
    async isValidToken(authtoken = '') {
        if (!authtoken) {
            const opres = new OperationResult();
            opres.Message = 'No authtoken';
            return opres;
        }
        return await this.http
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
        return this.getBaseUrl() + 'resendotp_v3/';
    }
    OLDresendOTPUrl() {
        return this.getBaseUrl() + 'resendotp/';
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
        return await this.http
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
    LangIT() {
        if (this.langIt != null)
            this.langIt = navigator.language.startsWith('it');
        return this.langIt;
    }
    OLDresendOTP(accname, alternative) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let warning = this.LangIT() ? 'Attenzione' : 'Warning';
        let successMessage = this.LangIT() ? 'Otp inviato' : 'Otp sent';
        let errorMessage = this.LangIT() ? 'Otp non inviato' : 'Otp not sent';
        return this.http.post(this.OLDresendOTPUrl() + accname + '/' + alternative, { headers }).pipe(map((res) => {
            if (!res) {
                res = new OperationResult();
                res.Code = 663;
                this.openSnackBar(`${warning}: ${res.Message}`, 'OK');
            }
            {
                this.openSnackBar(successMessage, 'OK');
            }
            return res;
        }), catchError((error) => {
            console.error(`Error Code: ${error.status}.\nMessage: ${error.message}`);
            const res = new OperationResult();
            res.Message = `Error Code: ${error.status}.\nMessage: ${error.message}`;
            res.Code = 669;
            this.openSnackBar(`${warning}: ${error.message}`, 'OK');
            return of(res);
        }));
    }
    resendOTP2(accname, processID, alternative) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let warning = this.LangIT() ? 'Attenzione' : 'Warning';
        let successMessage;
        let errorMessage;
        switch (alternative) {
            case 1:
                successMessage = this.LangIT() ? 'Sms inviato' : 'Sms sent';
                errorMessage = this.LangIT() ? 'Sms non inviato' : 'Sms not sent';
                break;
            case 2:
                successMessage = this.LangIT() ? 'E-mail inviata' : 'E-mail sent';
                errorMessage = this.LangIT() ? 'E-mail non inviata' : 'E-mail not sent';
                break;
            default:
                successMessage = this.LangIT() ? 'Otp inviato' : 'Otp sent';
                errorMessage = this.LangIT() ? 'Otp non inviato' : 'Otp not sent';
        }
        return this.http.post(this.resendOTPUrl() + accname + '/' + processID + '/' + alternative, { headers }).pipe(map((res) => {
            if (!res) {
                res = new OperationResult();
                res.Code = 663;
                this.openSnackBar(`${warning}: ${res.Message}`, 'OK');
            }
            if (alternative !== 4) {
                this.openSnackBar(successMessage, 'OK');
            }
            return res;
        }), catchError((error) => {
            console.error(`Error Code: ${error.status}.\nMessage: ${error.message}`);
            const res = new OperationResult();
            res.Message = `Error Code: ${error.status}.\nMessage: ${error.message}`;
            res.Code = 669;
            this.openSnackBar(`${warning}: ${error.message}`, 'OK');
            return of(res);
        }));
    }
    async resetpassword(accname) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // tslint:disable-next-line: align
        return await this.http
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
    async logoff() {
        const logoffRequest = new LogoffRequest(this.getToken());
        return await this.http
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
    logoffWithFetch() {
        const logoffRequest = new LogoffRequest(this.getToken());
        let request = JSON.stringify(logoffRequest);
        let logout = fetch(this.getLogoutUrl(), {
            method: 'POST',
            body: request,
            keepalive: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.getAuthorizationHeader(),
            },
        });
        logout.then((res) => {
            console.log(res);
        });
    }
    navigateUserGateway() {
        console.log('entering navigateUserGateway..');
        const userGatewayUrl = this.getUserGatewayUrl();
        // if usergateway url exists, then redirect to it
        if (userGatewayUrl !== '') {
            console.log(`Found getUserGatewayUrl ${userGatewayUrl}`);
            console.log(this.errorMessage);
            document.location.href = this.errorMessage ? `${userGatewayUrl}login?error="${this.errorMessage}"` : userGatewayUrl;
            return;
        }
        // otherwise, redirect to login
        console.log("Redirecting to login page..");
        this.router.navigate([this.getLoginPageUrl()], {
            queryParams: { error: this.errorMessage },
        });
    }
    getRedirectUrlForSubscription(accountName, subscriptionKey, processid) {
        this.getInstancesMapForUser(accountName).subscribe((res) => {
            const map = res;
            if (!map || map.length === 0) {
                throw new Error('instanceMap is invalid');
            }
            const currentInstanceKey = map.filter((k) => k.SubscriptionKey === subscriptionKey).map((j) => j.InstanceKey)[0];
            this.getSnapshot(currentInstanceKey, subscriptionKey).subscribe((res) => {
                if (!res || res.length === 0)
                    throw new Error('snapshot is empty');
                // we have now the snapshot
                const services = res.Services;
                // todo ila intervieni qui per appid personalizzate come dcs
                let redirectUrl = '';
                if (!this.useDCS) {
                    redirectUrl = services
                        .filter((i) => i.ServiceType === 'M4FRONTEND' || i.ServiceType === 'APP_FRONTEND')
                        .map((f) => f.Url)[0];
                }
                else {
                    redirectUrl = services.filter((i) => i.ServiceType === 'DCS_FRONTEND').map((f) => f.Url)[0];
                }
                console.log(`Designated redirect is ${redirectUrl}`);
                const baseRedirectUrl = `${redirectUrl}?jwt=${processid}&subKey=${subscriptionKey}&instanceKey=${currentInstanceKey}`;
                console.log(`Designated final redirect is ${baseRedirectUrl}`);
                if (this.env.auth.sessionStorage)
                    sessionStorage.setItem(StorageVars.USER_GATEWAY_AUTOREDIRECT, baseRedirectUrl);
                else
                    localStorage.setItem(StorageVars.USER_GATEWAY_AUTOREDIRECT, baseRedirectUrl);
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
        var url = this.getCalendarUrl();
        if (!url || url.length === 0) {
            console.log('iupurl is not used.');
            return;
        }
        return await this.http
            .get(`${this.getCalendarUrl()}?SubscriptionKey=${subscriptionKey}` /*, { headers }*/)
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
        var iupurl = this.getIupUrl();
        if (!iupurl || iupurl.length === 0)
            return null;
        return iupurl + 'calendarjobs/';
    }
    getUpdateMessage() {
        var currentBrowserLanguage = navigator.language.toLocaleLowerCase();
        if (currentBrowserLanguage.startsWith('it'))
            return this.getUpdateMessage_IT() ?? this.getUpdateMessage_EN();
        if (currentBrowserLanguage.startsWith('de'))
            return this.getUpdateMessage_DE() ?? this.getUpdateMessage_EN();
        if (currentBrowserLanguage.startsWith('pt'))
            return this.getUpdateMessage_BR() ?? this.getUpdateMessage_EN();
        if (currentBrowserLanguage.startsWith('bg'))
            return this.getUpdateMessage_BG() ?? this.getUpdateMessage_EN();
        if (currentBrowserLanguage.startsWith('es'))
            return this.getUpdateMessage_ES() ?? this.getUpdateMessage_EN();
        if (currentBrowserLanguage.startsWith('pl'))
            return this.getUpdateMessage_PL() ?? this.getUpdateMessage_EN();
        if (currentBrowserLanguage.startsWith('ro'))
            return this.getUpdateMessage_RO() ?? this.getUpdateMessage_EN();
        else
            return this.getUpdateMessage_EN();
    }
    clearStorage() {
        sessionStorage.removeItem(StorageVars.JWT);
        sessionStorage.removeItem(StorageVars.CULTURE);
        sessionStorage.removeItem(StorageVars.UI_CULTURE);
        sessionStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        sessionStorage.removeItem(StorageVars.LK);
        localStorage.removeItem(StorageVars.JWT);
        localStorage.removeItem(StorageVars.CULTURE);
        localStorage.removeItem(StorageVars.UI_CULTURE);
        localStorage.removeItem(StorageVars.ACCOUNT_ROLES);
        localStorage.removeItem(StorageVars.USER_GATEWAY_AUTOREDIRECT);
        localStorage.removeItem(StorageVars.LK);
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
            sessionStorage.setItem(StorageVars.LK, loginResponse.LoginKey);
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
            localStorage.setItem(StorageVars.LK, loginResponse.LoginKey);
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
    // ---------------------------------------------------------------------------
    async getSymbolsToPromise() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return await this.http.get(this.getSymbolsUrl(), { headers }).toPromise();
    }
    // ---------------------------------------------------------------------------
    getSymbolsUrl() {
        return this.getChangePasswordUrl() + 'getsymbols/';
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
    openSnackBar(message, action) {
        this.snackBar.open(message, action, { duration: 5000 });
    }
    getToken() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.JWT);
        else
            return localStorage.getItem(StorageVars.JWT);
    }
    getLoginKey() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.LK);
        else
            return localStorage.getItem(StorageVars.LK);
    }
    getRedirect() {
        if (this.env.auth.sessionStorage)
            return sessionStorage.getItem(StorageVars.USER_GATEWAY_AUTOREDIRECT);
        else
            return localStorage.getItem(StorageVars.USER_GATEWAY_AUTOREDIRECT);
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
    /** @nocollapse */ static { this.ɵfac = function TbAuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TbAuthService)(i0.ɵɵinject('env'), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i2.MatDialog), i0.ɵɵinject(i3.MatSnackBar)); }; }
    /** @nocollapse */ static { this.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: TbAuthService, factory: TbAuthService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }, { type: i1.HttpClient }, { type: i0.Injector }, { type: i2.MatDialog }, { type: i3.MatSnackBar }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sR0FBYSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQWlDLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFdBQVcsQ0FBQztBQUUvQixPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBSW5GLElBQUksbUJBQWtDLENBQUM7QUFDdkMsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0FBSXJELDhFQUE4RTtBQUM5RSxNQUFNLE9BQU8sYUFBYTthQUNQLGdCQUFXLEdBQXNCO1FBQzVDLElBQUksRUFBRTtZQUNGLEdBQUcsRUFBRSw2QkFBNkI7WUFDbEMsUUFBUSxFQUFFLCtC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T0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7WUFDbkYsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYztZQUFFLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBQ3BGLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGNBQWMsQ0FBQyxXQUFtQjtRQUM5QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7O1lBQzFGLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7aUlBOTRCUSxhQUFhLGNBdURWLEtBQUs7c0dBdkRSLGFBQWEsV0FBYixhQUFhLG1CQUhWLE1BQU07O2lGQUdULGFBQWE7Y0FKekIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkF5RFEsTUFBTTt1QkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwLCBtYXAsIGNhdGNoRXJyb3IsIHRpbWVvdXQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XHJcblxyXG5pbXBvcnQgeyBMb2dpblJlcXVlc3QsIENoYW5nZVBhc3N3b3JkSW5mbyB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBMb2dvZmZSZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9nb2ZmLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBMb2dvZmZSZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2xvZ29mZi1yZXNwb25zZSc7XHJcbmltcG9ydCB7IElzVmFsaWRUb2tlblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9pcy12YWxpZC10b2tlbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi9tb2RlbHMvb3BlcmF0aW9uLXJlc3VsdCc7XHJcbmltcG9ydCB7IFRiQXV0aEVudmlyb25tZW50IH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5cclxubGV0IGF1dGhTZXJ2aWNlSW5zdGFuY2U6IFRiQXV0aFNlcnZpY2U7XHJcbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9ICgpID0+IGF1dGhTZXJ2aWNlSW5zdGFuY2U7XHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIERFRkFVTFRfRU5WOiBUYkF1dGhFbnZpcm9ubWVudCA9IHtcclxuICAgICAgICBhdXRoOiB7XHJcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MTAzNDQvYXBpLycsXHJcbiAgICAgICAgICAgIHN0b3JlVXJsOiAnaHR0cHM6Ly90ZXN0LXN0b3JlLm1hZ28uY2xvdWQnLFxyXG4gICAgICAgICAgICBpdXB1cmw6ICcnLFxyXG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VXJsOiAnaHR0cDovL2xvY2FsaG9zdDo0MjAwJyxcclxuICAgICAgICAgICAgY2hhbmdlUGFzc3dvcmRVcmw6ICdodHRwOi8vbG9jYWxob3N0OjU2MzkyL2FwaS8nLFxyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25TZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93U2lnblVwOiBmYWxzZSxcclxuICAgICAgICAgICAgYXBwSWQ6ICdNNCcsXHJcbiAgICAgICAgICAgIHByZUxvZ2luQXBwSWQ6ICdNQ2xvdWRQcmVMb2dpbicsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsOiAnLycsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0SWZOb3RBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgdXNlckdhdGV3YXlVcmw6ICcnLFxyXG4gICAgICAgICAgICBpc1JlZGlyZWN0RXh0ZXJuYWw6IHRydWUsXHJcbiAgICAgICAgICAgIGxvZ2luUGFnZVVybDogJ2xvZ2luJyxcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbmFwc2hvdFNlcnZpY2VVcmw6ICcnLFxyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICB1cGRhdGVtZXNzYWdlX0lUOlxyXG4gICAgICAgICAgICAgICAgXCJTb25vIHByZXZpc3RlIGF0dGl2aXTDoCBkaSBtYW51dGVuemlvbmUgZWQgYWdnaW9ybmFtZW50bywgcGVyIHF1ZXN0byBzdWxsYSB0dWEgc3Vic2NyaXB0aW9uIEBAc3ViIHBvdHJlYmJlcm8gdmVyaWZpY2Fyc2kgYnJldmkgZGlzc2Vydml6aSBpbCA8Yj4gQEBkYXRlPC9iPiwgZGFsbGUgb3JlIDxiPiBAQHN0YXJ0aDwvYj4gYWxsZSBvcmUgPGI+IEBAZW5kaDwvYj4uPC9icj5BdHRlbnppb25lLCBwZXIgY29uc2VudGlyZSBpbCBjb3JyZXR0byBzdm9sZ2ltZW50byBkZWxsJ2FnZ2lvcm5hbWVudG8gbGUgcHJvY2VkdXJlIGNoZSBkdXJhbnRlIGxvIHN0ZXNzbyByaXN1bHRlcmFubm8gYW5jb3JhIGluIGVzZWN1emlvbmUgc2FyYW5ubyBpbnRlcnJvdHRlLlwiLFxyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICB1cGRhdGVtZXNzYWdlX0VOOlxyXG4gICAgICAgICAgICAgICAgJ0R1ZSB0byBzeXN0ZW0gbWFpbnRlbmFuY2UgYW5kIHVwZGF0ZXMgdGhlcmUgbWlnaHQgYmUgZGlzdHVyYmFuY2UgaW4geW91ciBzdWJzY3JpcHRpb24gQEBzdWIgb24gdGhlIDxiPiBAQGRhdGUsIGJldHdlZW4gPGI+IEBAc3RhcnRoIGFuZCA8Yj4gQEBlbmRoPC9iPi48L2JyPiAnLFxyXG4gICAgICAgICAgICB1cGRhdGVtZXNzYWdlX0RFOiAnJyxcclxuICAgICAgICAgICAgdXBkYXRlbWVzc2FnZV9CUjogJycsXHJcbiAgICAgICAgICAgIHVwZGF0ZW1lc3NhZ2VfRVM6ICcnLFxyXG4gICAgICAgICAgICB1cGRhdGVtZXNzYWdlX0JHOiAnJyxcclxuICAgICAgICAgICAgdXBkYXRlbWVzc2FnZV9STzogJycsXHJcbiAgICAgICAgICAgIHVwZGF0ZW1lc3NhZ2VfUEw6ICcnLFxyXG4gICAgICAgICAgICBsb2dvVVJMOiAnaHR0cHM6Ly9tYWdvY2xvdWQtc3RvcmUtcGRmLnMzLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2xvZ2luLWxvZ28ucG5nJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFVSTDogJ2h0dHBzOi8vbWFnb2Nsb3VkLXN0b3JlLXBkZi5zMy5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9sb2dpbi1iZy5wbmcnLFxyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAvLyAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFUZ0FBQUEyQ0FZQUFBQlRBb1d1QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5VnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFE0SURjNUxqRTJOREF6Tml3Z01qQXhPUzh3T0M4eE15MHdNVG93TmpvMU55QWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lESXhMakFnS0UxaFkybHVkRzl6YUNraUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlJUYzBPRUpFTURjd05EbEJNVEZGUVRsRE56VkRORFJHTmtNelEwRXdSRFVpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UlRjME9FSkVNRGd3TkRsQk1URkZRVGxETnpWRE5EUkdOa016UTBFd1JEVWlQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBGTnpRNFFrUXdOVEEwT1VFeE1VVkJPVU0zTlVNME5FWTJRek5EUVRCRU5TSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEZOelE0UWtRd05qQTBPVUV4TVVWQk9VTTNOVU0wTkVZMlF6TkRRVEJFTlNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BsM2U0RHdBQUJVQVNVUkJWSGphN0YwSmxCYkZFZTVkZGhIbE1xd29JZ2dLS2lMSTRZa2dScU9nSW9vM25pQWVNUW94S3NZb2g2SVJpUkVVanhnSkNwSm84SXFBa2FBUU5NR1k0QUVvS0lxdUFnb1JSVG5rV0JEWTFKZXBmUTYxM1hQMnpQL3Y3dFI3SCt6MFAxUGQwek5kVTExVlhWMVFYbDZ1TXFyeGRBRGhDRUluUWdkQ0UwSmp3bTZFQWdKZWtyV0UveEsrSkx4UFdFQjRpN0EwNjc2TThwVUtNZ0ZYWStrd3dybUVVd2lIeHVEek1tRUs0VVhDaXF4Yk04b0VYRWE1cEpNSTF4TE9zTXozZThMVGhFY0pyMmZkbkZFbTRESktrMzVDR0VJNFBvVzZYaUFNSkt6TXVqMmpUTUJsbENUQm5qYUdjSUhQZWFXRU53bnpDQjhTdmlXc1k4MXNGMElKWVcvbDJPczY4aFIzWHc5K213bkRDZmRtanlDalRNQmxsQVNkU3BoTXFLLzViU3RoUHVGdmhHbjhkMWpxVHJpVTBKWFF4bkRPRzRUQmhIOW5qeU9qVE1CbFpJdWU4dERhSGliY3BSeXZxQzJDRi9aNmp6cC9weHpiWDBZWlpRSXVvOGlFcWVSTTVZUjhTUG9yNFZiQ3dnVHI3MEs0aDlETlVIL3Y3QkZsbEFtNGpLSlFVOEpjUWpOUkRudlkxWVJKS2JZRld1STFtdklKaEFFUitOVW10Q1cwVkk0ZHNCR2hIdisyZ2ZBZDRUUENZc0lIUEFYUEtCTndtWUNySnRTWU5iTzlSRGtjQitjUmx1V2dUZWZ6VkxsUWxFOGtYQmJnK24wSTV4Qk81Q253WGdIclhjWDNQWXUxMmNYWjY1RUp1SXlxTm4xSzJFK1V3U042V0k3YjFaYUZURk5SRHMvdWpZWnJUbUl0NzJ4Q3NZVTJ6T1JwODZ6c05hbFpWSmgxUWJXZ3NScmg5b3B5N0dHNUprd1hPN0t3ZGRNTmhGKzRqbXNSK2hEK3dXM3ZhMG00VlFoTUNMblhDS2NyWi9sWlJwa0dsMUVWb0tHRU8wWFo0NFRMODdDdHI3Q3djZFBKeW9tN2UxVWpwTjJFZUx4M0NJdVVFN08zWERtMk53aXJ1cXdoTmljY1JlanNJeHhMV2RCOWtMMCttWURMS0grcGswWXorcnR5YkZiNVNCQTZXNFFHdFlPd1RUbE9CQjM5U1RuZVYyaDJYd2FzQndISnh5a25EaEEydkYwMTU0RGZqN05YcUdZSU9Bd0lSTHcvelYvS1hGTkZlNTVSOXIxaHlKQUIyODduUEdWSm0vWWtIS21jckIzN0Uxcnd3Ti9CR3NsU3drZUVPWVIzZlhqaEh0d2VVd2lBZlpoWEZOcURwN1h0V1Vqc3dZS25qUEFGYTAwTFdLaHVqbGdIRnZkUEQzQWV2TEFQY2wvRUlieEhWeEx1RU9YUUdFL0lSRUExSnhKd0E4dC9vRVVRZURuR0ZhNzJMQ2JVdDhpN0ZxSFV4ZitDRk8vclFzS0xoTTNsd2VsRHdtaENCdzIvWVpyejIwZG9WMTNDQU1JMHdzYUE3ZnFhOERUaG5JaDlNY2FETi9pMlRxRC9EMlRldU1lRmhBUHk0RjNQa0REd3oxTHhnbDJYNDBadEUrM3BiWkYzRjhGN1hRcjNjemJoemZMNE5KVndHUFBjVGZQN0hTSGJWWTh3Z3ZCVnpIYjloKzh4Ykw4c0YzeStJNXlYd3ZOb2xBMzhtZ040VVRjS3BRNEc2em81VWloN0tjZWI1cVpkTFBJZkxJNGJLQ2RXS3dtQ3NSdTUwcDVUVGd4WFhJSlIvRzNDSllUUjRqY0V1UTRQd2VzMHdpZDhUV01MOTRsN1JBakdNU0hiVU1wVFhkelh3V3lTU0pxK3plWnROY3NHdDREdFFkTCtNVEFIN1ZuT25qQTNJWFJncWdYZWlNZDZYMVArSmR1YmJOSWp5bGs1b0tOdExBeGVaeHNiN0dqckNVVXNiUFpsb1FGYjFVRUI2L3NwWVZ5QTgvRGhlcGFGaTQ0Z2JGNVNPMmNVMmNMWHRlUSs3T29qeUxCYW9sK0l2bXFVQ1oyTTBoWncwT3JxcGR3V0RJcUptbkpiQXU3UHlvbXQwdEZaeXNsaFpvTm1FSHBxeW1Ha3Y1OGRPVjhFNUlVY2JsY3BaeVdDaWJCZ3ZtbEFZenNjRjYwMXYwSHcvNTZGMzZvQXZPQWNPWmMvZ3MwMHYyY0cvSXp5eHNtd3dHQmJPUy9sK2ZJcVF6dk9zTUQ3Uno1MnBGY3QzY05vQS8vSENidkV0QjNPTWZDK01zRDFKWVNWbW10aGc3dzZScnR3VCtNTTdYb3Nzd0ZseURWTUdseUZ4dEU4SlRsN3BjY1V5NFlHQjd2aVVOY3h3aWdLMUEveFdKaUdJVmgwZTR3NnJ1YXBxWnZBN3dMV2pHelEzWVJmaWJKaW52WjZFVUl0RGhSbGlPeS9WQVdQTGZNaVpBaDVTcVAxLzVvd3pQSzdzcnR5d2xqYXNGWUtteTFpbmRZb1o3SDl1MnpxQ0Vvd0RjZzFyb1U4YmQ2WUE1M2pjUFZEK0ZCZEx0dkVOdE5QK2Y2aUJxOFdjcDhWdW5nVXNtbGlkVVNlQ0NQYVU3U3BnUG1WdWNycTg3TUxFOElFUHQvei9YOW5XNE1yNTlDR05DVHRhbzgyMk5EZzFnbWVQUW5UUlZuL0dQemJhZHI5TGVHUUJQcnFmbGNkbHdVNC94bE4yK1lrMEs0V2hHV2F1azYyd0x1RU5jMlhDZXNEZUhiZkpnd250QXJBdXcxNzdyZnovOEFPRHA5S1M5UG9RUmd2UXBoTUJPL3pKTUtaRWVyWmc3QkJjNit2eEdqNzBZSmZSVi8yRU9mZHpIVnRDd0h3MmNMUGZBbVAyU0dFWThLRWlYZ0p1UCttOEhBSCt6elF1QUx1U3NIdk15NC9SNVNYUnVSZm9CblltRzd2bjJDZklhYXJaWUR6T21yNjgzV09CMHlpWFJCRUg0bjZFUGZYTUFhL3V6VWZxREFFd2RIV280NURETmNOVHZpOXh6TTRQMllJRWNidWFTSHFiT3dSNmhQMVBvNDE4T3dsenJ1OTNDNTl4TEdnQi91RmlVZ1BuelJNMzVtZ092NGp3bThUVnZrbC80b0YzZ2h0V0NFTTV4ZEY0RDlPN2J3M0FWWmVkT1RwUkZLMFJBWGJqMVJPalpGT3FWdk1xYmdYZmNQbWpoWENjenN0QXEvKzNJZVlramVJMGFiTDJZa3l5UEM3cVMrMkpQajhrTS91WStXa2s0OFRRb1MreG5hTkMvaWQ4NTJ3aVdsakJXMkkwWVp0QWN2TExQY2hUQzVZbmZJQjk2TnhUcTdFNEpUMnJpRXVXNEJ0R2ltT01XamZzY2dmQXF1aGVKRHUrL3VOT1ArMmtQemhRYnhDbEYyaTdLWUNqMHJuYXp5bXA2UlFieG5iOXR5RXZSdkN4TWpCMWpnaHBtQ1Q5QUI3c2V2bCtMa2NyWnd3blAwczhvU2d3NTRhcDlkUVgrbjVMRGVhNkF5c2JzSTZ6ZHRaMHZkeEdmb2dLVyswM0tnOVZPVllzY2RZRzdLVncyeW9PSjZ0MGI2ZzRlM2krckpDd3dtNnIrZE40aGlDN1prOGVlZ2p4UEVvbGQ3R3pMUFowTCt2YU05SkFhNjlSOU92a3ZEVlJtWVNCQXAveFk0R3JNRTloQjBlSllicnJsTk9tRTZ1TnNEcEVLRHV4ZnorSVE1eEpSdmw5K1l4MGMxSE1FN2xqOWlNS2lTY0pyT0RxRWp6Rys1OVZ4WmNiWlQzTG02ZFdaUHR0Sk9Db2JIQmxiQ05SMUpEeXphSThZSi9HYUdZTU1XU0RlNFl6VDEwMTV3M1Zwd3pNeUQvUXNKYWNlMnY4OFE5M2tsakJ5dE91UTBYYXZwL2I1OXIrdm5ZWFY0Z0hPZkRBMnVYQjdIOVdOSlZHdnRqRzBOZGd5ejNSejBmQjhuN2hMNEIrSnhGK0xkUFA3WDJjRExvMWtMUHNyajgwZTNJYzUvM0s4TjVZZW82Z3ZBSG4zdGY1bjdHdW9TWCs3R05SMmxjL3Jhb1dGWE9WemFTWGNJdExkVWhseTdCNXZGUGc4YmdKbVF5Q1JJZWM3eVkvb0xHNXNsWFVlNXM5WVJLUDBzTXdrYldpckp6UGM1SHFNWkV3MjliK2RvemxaUG15SXNRVHZBZ1Q4K2ZkSlgzWlkxOWU0NmVDUUxKNnh0K0c4UGE1K1FBZlA2aW5Jd3Z0L3IwZlZXaE1PUDlMZVdFbEdHRno5OE01K3pyN3NkQ3c0c0draHYyRHVScGdBM3FyN0hiakhTcHBYRUpna2V1SmpDOUVKaTJQU2ZLZ2poV1RoWEh5TVAyZFo2OE5DZUw0ei9rcUIxL0VzYzlQYzc5bzhmejZhQjVSbjZFR0xhTENlTUo5L0hVTkZkMGhqTG42QnNVMGZ4enQ4YldXVUZ3WEJ4YVJRUmNsS3ppUzNqOGpUTDhqaHlBUFV6TUMxMzJwVFhpdDRjdDNGQnRqYWFEM1pjcXZDNDJNbkJlb3RIZXZBYUlGR2o5Zk9iN1NsWGVGdS9aUEhsaFlLOXA3enBlcHV3NmJzTFE4K0s0dGVHOC9UM3NjeDNaSGhXVjhNVy9JY2ZQNUFsRE9UYmVlU2dHM3oreW9OUFJKRlg5NlJhUFovdWtTY0R0RUF6YzFGdFZ6dllSbG9hcW5UT3N3cEE2d2ZLTi8xSWMzK1Z6L251YTZkVE5IdWNYYVl5OUMvUGtvY3NkNXQvT1lWc1dpZmVwbnVHZE15Myt4NVIxZFJVZmhHZG9UQm1nT1I1VDhqQ0VtY25ubXZJT1BPMnQ3Z1R0L0UxTk9aeVlKL3VwaDQrS0Z3em5ENDdSbUYwMVF0TzJkeGJUcytiQ0poUGthL2FBNXN0ZngyTUtMRU1ZVnVhUkJ1ZW16M0xZbHRWcVo4OXRYYVZQSDM2bTRmcmJxc0VBTkNWS3VNbGlIYmVGckx1NmtXazU0QVZCNXI4M2F6cXpLR0pEaG90cjhlV1piUGxtYjlNSXJpRFQzdnZGTVJ3aEF6Mm0yZTYrUTFEbytqeDUyRkx3cnNseGU3NXgvVjFISStCd2ZKVG1Pb1JUTEs4R2c2K3JwZ3loTFhNdDF2Rm5wUTlNN2xaREJOdzhRM203SUFMdWNhSEY2YlN3SUZSSE0zVzgzdktOd3J0eXRDZ2JFL0JhQ0FMcGZlcnZjYjdjT0dWSENnOFNVenpFRGw3THduZUFxcng3bEh5bTIzUDg4bTBYZlNiYmQ3QkJxNXRSRFFaZWlkSjc1RzFyMVdWS0gxOTNrS29aQlBtazI5aThRVkFQeGpYaWVLZ0tIeEUrUnJ6Y01Cdy9iL2xHNWNvSVRFM0RKRk9VRzVNY292VEpNTGNLZ1FiaFhUK0ZCNG1zRGNoWUFzTTBRaUVlMDB5ak4vbG9kR2xUUTZIcHlpVTdwcENjNnJDbDMrNUtiM1A4SW9HNmRCc1VOZUYzcGliUUlrMVovYUFDN2xtaFVtT0tGaWIwQUYrU240bXl2Z2xvYjJlSnNyRDJQYVFWa3Q1VzNWclp0VUp3UWpQWlA0V0hLR1BaMW1zMFJ6bDRXdVh3cGNOYTQ1YXU0dzJxOHJySGhvWnJ2Nm9HZzg2VWJuOVZBblhwUXBScThUT29DYVM3LzlwaFlsQUdhUVJVaTREWHlyQ1FaY3AvUzd5d0pKZGxQYWVpZWVDa0RlOGl6VXVDYVZlcEtPdVEwb1BjWWZqYkxhVGRkRmdPWHpwb3dFVStBdGswaFM2dUJvUE9aTFlvU3FBdUU4OXRDZDlqdm15c3JIdGZ5c01JT0VRUnl5ankrd08rNURMQTg3NEVwZ0lYaTdLb0t5OHdOWkp1NTE5b3pwc3ZqbnZreVlPRzQ4WnRuRzhkNGtOa203b0gwTXJXR3E1dFVnMEVuR2xQMzcwVHFLdUpvWDQ1MDdBdHBBcENsaWRGZTJuS3RvU05JcGJMbi9vb2MvQ21TWHRibyt3dmFicE9ISDhaVTBNYzRjTWZORXNjUTRqWHpaT0JOVWNjbjUyamRzZ2xZenBEK0ZMRHRlMnFnWUQ3UnVtWHlEVk5vSzdPbXJLVmFtY3ZlcmxCOE1RUlJpWk5PMDNuRnVSWWUwMzVockFDRG1zNU40WFE0akMxKzRrb3V6V0JHNVFhMXBTWS9LYXJuVk41dzA0a1YwZThMTlIvVEJHdXlwT0JKWjAzMSthZ0RZZHFoTlF6aGltMUxoMTE3Mm9nNE5ZWkJMaHR1eWdjU1lkcnl1VUtrREtENEtrVHMyNGRiVTZ4bjBzTUd0eTZLT3ZBWktCdkw4UFhBeVNYVVNDTnllOHQzOXdBbnFLNmFaUUZ2dElXTjB6enNrd1VaVC9QazRFMWpRZFhCY0VCY21IS2JaQWZQcXdmMUMwWjI2YlJoaXRNRzBkWEF5RTMwMkJTT2RkaUhUY3F2YmRXaHRwc01KZ0pTbUxVZllDSHFTUXRNcTJFZVNPS2dIdEVWVFprUDJLd00wakRmeEtEVEdZRHdiS3ZaUmI0amxNN0o2N0VnNVNiUk1zTllGb3E4MzZvYVJLKzBqTG1jSkxtUTVBVXdiRnh2Q2p6Mm1mM2NZOW5VTlhwQVVQNWVCVnRvYmtrSkYzVmJmcGRidWpYaFFhTk1tcVlVeCtEY0Z1V1V2L0NMR1JhenpzMmFnZExtOVNSeWxuNzVTWVpYb0ZvNDljczMxdzd6ZGZuRG92ODVUM2Nyckd4ak5FSSsxWjVNTENrZ0ViSXdJc3AxZjJrT0g3UG9NbFVrQ2tGRXV3cVZYMjVFWlNCZnhtbWRqYjI0cDF1S0gvTU1QVi9RMU5XckRIQkJDRk1DN3RyeXYrVFl2L0NWTFNicGh6WmZUNHRqTUZVN2hJL1VueFZMZ3J4Qlk5Sy9jWHhiQlZzcjRLZ0pHUGlzSkM5aXlpN1dmTWkvVU1sNDNBSTYrMlNvVDNkVkREUGR4eEN6S1NNb0wvWTV4cjBueW11OG1rMmcwU2wrY28vaDF6U1pIcjNrV0w4d1JoODcxSjY0enBvaUtIY0ZGd1B4U0NzcytGUlEva0xLZlJweFFlN3EyZWZhekw2OWdxWVhmTUVUVGJOeG9hdDZzTHMydk5Pd0l5K3hacnNwTjBUeUV5N1dOUXhRM1BPaVpxKytJQTNuTGJkbnUydU90WVE2dnFjdjBMVHRpRUpaZkVkcjZucnR5RTJrZDdra2FrMWJKdXhvOWg4MS9ValBMWU4xTkhQTFBmTk9JOTdtMFpvR29JWHNtdFA4TWw4N0hYOVc0YnJab2RvZ3lsRDd5WkQ5bWpUK2MwaTlPV3B2STJnaWU3eDJqYXdWNGlLM2hYWDNrS29yYW53aUFRRTNMV1d0djN6d3lXYSsybXVPVytrNXJ6UENZZGJiTXQxZ3Y4MlRvWHRkVTNiRkZKeTErRkJKV2x1U0Q3SCthU2pYc1JweC9mMEVXd1BHNjZIa05rOW9JRHJuOExIMGswYkNYY1E5dkc0dmhVTCtxODkrT0NqMXlEaVZuK2doVDViRWFKOW96eXV2ekdrUUd4UUhteHJ6djBJRi9PZXZsNzBUNytkN2VHUmVDbWdtdGhGek9sWHNYSHhTREVYUGpHRTZnbFBXMmRoeEp4cU1HUTJjeDBqNW1weVF1cndhbUhyZzUzdEdzMTVTR3lveTdJNmpLY2k2eUxXMzRFZEduSjVHenhpVFpWL3pCRnlrazB4VENkaFdsZ1FvMit3UEc2MHFweDZlajVQSDhLR0Mxek9Cbmd2QWsrRUxNRXoreTFQclpxeFRmWkluMnZobVowcnpBNkxOZWVWc3JtamRzajJWMHp6ZnE0cUI0T1hzQjI2blkrRGFDNmJnRmE2SEhZWUU0ZjcxSTFsZWtnY0dpUkJLRXdDVjNqOFhzcGo4VU0yamNERzNwWndyREt2bXNCeUtkUGFWN3kvdXVTY2I3R0pRaGRQdDRQN0g4ODJ5RFlDTUoyZHF0d3JTR0pxY01CelBoSjFyNUQ4Z21od1Y2U2t2WmswaSs4OHpwMW82QWZzZEQrYWNHaUlhVWcvM3FoWlI1dERhc2J0Q1Y4WmVMM0dHNTRVaDJqYkFNSThqdzJKNDI2YXM5VHlSc0hZalB1b0VGUFV1SFNLeC8xTlNxQytxWVJkUS9iekJJdjFZMnA2VUlRcHJTMGFxS3ZYeHBvNGVGUk5rZkx6VkRJTGk0ZDVPRGlDRUFLUUVZajZmVUREL1ZiK3lsUzQwcEZKQllrMVp4Z2NINlVhYnk3cXZJRUJyeUsyaGx2RVhyWXQvRlZzeUFiNkRteFlONFYxNERva2lmd2t4RDB2NUh1ZXF0RnlqbU9zWU1NdHZ0d2Y4eGU1ak8rM0tXc2VSN0ZHYm1yYlN5cit5Z2xvUGdlekptY2p0QWo4ZXFwMDk4encwbHd2WlczckZndjFiR1dId3IwUnJyMk1Jd0hpSnAzOWlCMG1TM0xnd0htSHRjTlplcmRjWlR2YWFSRyt1RThZcEdxZkNMem0rZkE0WGFOTkZZYXM0OHdJWDRqdnhmRWJQblVjNzJOemlVcGpMV2lrWXhKb0Y1d2ZOeVdnUGZmWHpES0NFcmFRKzZVUC8zWUphUlE5QTJyVlQ4YW80M2xDQ3d0OWpERzJNa0w5Wld5UHF4V2dqcnNzOXUxVzFsalA4YXUzU0ZYTzZ4WmwyY1lvamUxcGlZcTJaTXF2UFRMMDRTRVZQdGxrbEF3TFJScjc0MEdxY3RCekJiM0tXZ2krTHRlcitIbTVvSVhjYWNrRkR5MXlEbXZDblN6d1EwYlo0U0UxeXFBMGtYRWkyL3U2Y3IrYTFrQit3bmJoNlJ6bTQyZWYzTVRYRkNnN1NVc3JrbnF1RGFoVkk1d0tBZkc5V1d2dm9zeEJ0MnZZWGpxVHg5WmlTMzA4aFdjajBKWlA0VDQySlFUWXd1MmV6TTg5YUtyKzVXeWYzeHF5TDNldzdScTJWaVRDd0hybWZ3V3RGMDRHRE1RZkM0UDJleEU2Q1FaWmQ5YUtIc283dU5ORU00VlRvck13MXVKbDcrYzYzalBDMUFQTFpHenNRTjlNQmRzdHZpNVBBL3J5NEF4S20zaWdQcFZnYk5IWjNKKzlWTGpJK2swOE1PN1ZHTk9UcGliY2o1alM3OGFEYmgwUG9seE1rMndTN2dtclpob3JKeGdZZzN3OXYyY2ZxOHByd1pPZ0ltNURjemF0MU9JMnJPSCsvYnFxZE9iLzNhL0tDZGpEaldBYnNnY2k4anFRK2VDaFlDM2tpSWg4SUNRUmhkK0lCN1pNcmRTSVBVQXRlSUJGU1l0MHJFdnpDeHM4VzRzSDFEMHEvRjZkSUd5RDE0MC9KSzFZWXkzbWRzQnVzNUU5YUsrenB6Q3Rsd2t2TTVaWG5hQ2NIY01hc1BaY3dHM2J3RUxrUGZieXphNUtMM3BHTlpQK0o4QUFEQVBYd0dFcnZBVUFBQUFBU1VWT1JLNUNZSUk9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJhbmQ6IHtcclxuICAgICAgICAgICAgYXBwbGljYXRpb25OYW1lOiAnTWFnb0Nsb3VkJyxcclxuICAgICAgICAgICAgYmFubmVyVXJsOiAnYXNzZXRzL2ltYWdlcy9sb2dvbWFnb2Nsb3VkLXdoaXRlLTMxMi5wbmcnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgZW52OiBUYkF1dGhFbnZpcm9ubWVudDtcclxuICAgIGxvZ2dlZE91dCQgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICBva01lc3NhZ2UgPSAnJztcclxuICAgIHVzZURDUyA9IGZhbHNlO1xyXG5cclxuICAgIGxhbmdJdDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICAgIGdldCByb3V0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBJbmplY3QoJ2VudicpIGVudjogVGJBdXRoRW52aXJvbm1lbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICApIHtcclxuICAgICAgICBhdXRoU2VydmljZUluc3RhbmNlID0gdGhpcztcclxuICAgICAgICB0aGlzLmVudiA9IF8uZGVmYXVsdHNEZWVwKGVudiwgVGJBdXRoU2VydmljZS5ERUZBVUxUX0VOViwgZW52KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGJBdXRoRW52aXJvbm1lbnQnLCB0aGlzLmVudik7XHJcbiAgICAgICAgdGhpcy5sYW5nSXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBjaGVja0Nvbm5lY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAuZ2V0KHRoaXMuZ2V0QmFzZVVybCgpKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQoNTAwMCksXHJcbiAgICAgICAgICAgICAgICBtYXAoKF9fKSA9PiB0cnVlKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSaXRvcm5hIGxhIGJhc2UgdXJsIGRlbCBiYWNrZW5kLFxyXG4gICAgICogY2FyaWNhdGEgZGEgdW4gZmlsZSBkaSBjb25maWd1cmF6aW9uZSBjYXJpY2F0byBkaW5hbWljYW1lbnRlIChhc3NldHMvZW52aXJvbm1lbnQuanNvbilcclxuICAgICAqL1xyXG4gICAgZ2V0QmFzZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cmw7XHJcbiAgICBnZXRTbmFwc2hvdFNlcnZpY2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguc25hcHNob3RTZXJ2aWNlVXJsO1xyXG4gICAgZ2V0TG9naW5QYWdlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmxvZ2luUGFnZVVybDtcclxuICAgIGdldFN0b3JlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnN0b3JlVXJsO1xyXG4gICAgLypcclxue1xyXG4gIHR5cGU6IEpXVCxcclxuICBhcHBpZDogTTQsXHJcbiAgc2VjdXJpdHlWYWx1ZTogand0RW5jb2RlZFxyXG59XHJcbiovXHJcbiAgICAvLyBtb2RpZmljYSBwZXIgdW5pZm9ybWFyZSBsIGhlYWRlcixvIGNoZSBhcnJpdmEgdW4gcG8gY2FwaXRhbGl6emF0byB1biBwbyBuby4gLy9yaWY6IElsYXJpYSBlIEx1Y2FcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZ2V0QXV0aG9yaXphdGlvbkhlYWRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdKV1QnLFxyXG4gICAgICAgICAgICBhcHBJZDogJ000JyxcclxuICAgICAgICAgICAgc2VjdXJpdHlWYWx1ZTogdGhpcy5nZXRUb2tlbigpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgcHJlbG9naW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPExvZ2luUmVzcG9uc2U+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJlbG9naW4uLi4nKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0UHJlTG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGNhbWJpbyBwYXNzd29yZCBlIG51b3ZvIHRlbnRhdGl2byBkaSBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlKGNvZC4xOSk6IENoYW5nZSBQYXNzd29yZCBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2UgKGNvZC40KTogQWNjb3VudCBjb25maXJtYXRpb24gTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBhdHRpdmFyZSBsJ2FjY291bnQgY2hlIG5vbiBoYSBhbmNvcmEgZWZmZXR0dWF0byBsYSBwcm9jZWR1cmE/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA0Nikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnZhbGlkRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlIChjb2QuNDYpOiAnICsgbG9naW5SZXNwb25zZS5NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IHRoaXMuTGFuZ0lUKCkgPyAnQ29kaWNlIG5vbiB2YWxpZG8uJyA6ICdJbnZhbGlkIGNvZGUuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDU4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2UgKGNvZC41OCk6IEFjY291bnQgTG9ja2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSB0aGlzLmdldExvY2tlZFVzZXJNZXNzYWdlKGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcmVMb2dpbihjb2QuMTQzKTogb3RwIGNvZGUgbmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxMTYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZSAoY29kLjExNik6IHVzZXIgYWxyZWFkeSBsb2dnZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgcGVyIDE0MyAoIG90cG5lZWRlZCkgZSAxMTYgKGFscmVhZHlMb2dnZWQpKW5vbiBtb3N0cm8gZXJyb3JlIHJvc3NvIGNoZSBzZW1icmEgZ3JhdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSAhPT0gMTQzICYmIGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSAhPT0gMTE2KSB0aGlzLmVycm9yTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5va01lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgbG9naW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPExvZ2luUmVzcG9uc2U+IHtcclxuICAgICAgICAvLydsb2dpbicpO1xyXG4gICAgICAgIGxldCBpc3N1ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbi4uLicpO1xyXG4gICAgICAgIGNvbnN0IGxvZ2lucmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8TG9naW5SZXNwb25zZT4odGhpcy5nZXRMb2dpblVybCgpLCBsb2dpblJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2dpblJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgY2FtYmlvIHBhc3N3b3JkIGUgbnVvdm8gdGVudGF0aXZvIGRpIGxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENoYW5nZSBQYXNzd29yZCBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxNDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIHJpY2hpZXN0YSBvdHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbihjb2QuMTQzKTogb3RwIGNvZGUgbmVlZGVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbyBjb3NlIHRpcG8gbW9zdHJhcmUgdW5hIG1hc2NoZXJhIGNoZSBhY2NldHRpIGlsIGNvZGljZSBlIGxvIHJpbWFuZGkgaW5kaWV0cm8gcGVyIGlsIGNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxMTYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIHJpY2hpZXN0YSBvdHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogdXNlciBhbHJlYWR5IGxvZ2dlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG8gY29zZSB0aXBvIG1vc3RyYXJlIHVuYSBtYXNjaGVyYSBjaGUgY2hpZWRhIHNlIHNpIHZ1b2xlIGNhbmNlbGxhcmUgbGEgcHJlY2VkZW50ZSBsb2dpbiByaW1hbmRpIGluZGlldHJvIGxhIHJpc3Bvc3RhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IEFjY291bnQgY29uZmlybWF0aW9uIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgYXR0aXZhcmUgbCdhY2NvdW50IGNoZSBub24gaGEgYW5jb3JhIGVmZmV0dHVhdG8gbGEgcHJvY2VkdXJhP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbyBhbW1ldHRvIGNoZSBsYSBwYXNzd29yZCBzaWEgIGlsIGNvZGljZT8gbWEgaW4gcmVsYXTDoCBvZ25pIHNpdG8gbG8gZmEgaW4gZHVlIHN0ZXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbCBjbGljayBzdWxsIG1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDU4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IEFjY291bnQgTG9ja2VkJyArIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSB0aGlzLmdldExvY2tlZFVzZXJNZXNzYWdlKGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxNDkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogU3Vic2NyaXB0aW9uIHJlcXVpcmVzIDJGQScgKyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gdGhpcy5nZXQyRkFSZXF1aXJlZE1lc3NhZ2UobG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBMb2dpbiBmYWlsdXJlIGZvciAnICsgbG9naW5SZXF1ZXN0LmFjY291bnROYW1lICsgJywgcmVzdWx0IGNvZGUgJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLlJlc3VsdENvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE0MyB8fCBsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDExNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJzsgLy8gbm9uIG1vc3RybyBlcnJvcmUgcm9zc28gY2hlIHNlbWJyYSBncmF2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5va01lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXROYW1lKGxvZ2luUmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZURhdGEobG9naW5SZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogTG9nT2ZmIGR1ZSB0byBBY2NvdW50IG5vdCBhbGxvd2VkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ29mZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSAnQWNjb3VudCBub3QgYWxsb3dlZC4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLkp3dFRva2VuID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9IDk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5SZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcblxyXG4gICAgICAgIGlmIChpc3N1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpeElzc3VlKGxvZ2lucmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbG9naW5yZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGZpeElzc3VlKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0IHRvIG1hbmFnZTogJyArIGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBnZXRMb2NrZWRVc2VyTWVzc2FnZShtZXNzYWdlRnJvbUxvZ2luOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIW1lc3NhZ2VGcm9tTG9naW4pIHJldHVybiBtZXNzYWdlRnJvbUxvZ2luO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHM6IG51bWJlciA9ICttZXNzYWdlRnJvbUxvZ2luO1xyXG4gICAgICAgIGxldCBtc2cgPSBtZXNzYWdlRnJvbUxvZ2luO1xyXG4gICAgICAgIGlmIChpc05hTihzZWNvbmRzKSkgcmV0dXJuIG1zZztcclxuICAgICAgICBpZiAoc2Vjb25kcyA8IDYwICYmIHNlY29uZHMgPiAtMSkgbXNnID0gYExvZ2luIExvY2tlZC4gUGxlYXNlIHRyeSBhZ2FpbiBpbiAke3NlY29uZHN9IHNlY29uZHMuLi5gO1xyXG4gICAgICAgIGVsc2UgaWYgKHNlY29uZHMgPj0gNjApIHtcclxuICAgICAgICAgICAgY29uc3QgbWluVmFsID0gTWF0aC5yb3VuZChzZWNvbmRzIC8gNjApO1xyXG4gICAgICAgICAgICBtc2cgPVxyXG4gICAgICAgICAgICAgICAgbWluVmFsID09PSAxID8gYExvZ2luIExvY2tlZC4gUGxlYXNlIHRyeSBhZ2FpbiBpbiBvbmUgbWludXRlLi4uYCA6IGBMb2dpbiBMb2NrZWQuIFBsZWFzZSB0cnkgYWdhaW4gaW4gJHttaW5WYWx9IG1pbnV0ZXMuLi5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXNnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZ2V0MkZBUmVxdWlyZWRNZXNzYWdlKGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLmxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpXHJcbiAgICAgICAgICAgIHJldHVybiBgUXVlc3RhIHN1YnNjcmlwdGlvbiAke2Rlc2NyaXB0aW9ufSByaWNoaWVkZSBsJ2F1dGVudGljYXppb25lIGEgZHVlIGZhdHRvcmkhIExlZ2dpIGxhIG1haWwgcGVyIHVsdGVyaW9yaSBkZXR0YWdsaWA7XHJcbiAgICAgICAgcmV0dXJuIGBUaGlzIFN1YnNjcmlwdGlvbiAke2Rlc2NyaXB0aW9ufSByZXF1aXJlcyB0d28gZmFjdG9yIGF1dGVudGljYXRpb24hIFBsZWFzZSByZWFkIHRoZSBFbWFpbHMgZm9yIGZ1cnRoZXIgZGV0YWlscy5gO1xyXG4gICAgfVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBvcGVuVXBkYXRlQWxlcnREaWFsb2coXHJcbiAgICAgICAgaW5mbzogc3RyaW5nLFxyXG4gICAgICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICAgICAgZG9udHNob3c6IHN0cmluZyxcclxuICAgICAgICBhY2NvdW50TmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHN1YnNjcmlwdGlvbktleTogc3RyaW5nLFxyXG4gICAgICAgIHByb2Nlc3NpZDogc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0RGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2U6IGluZm8sXHJcbiAgICAgICAgICAgICAgICBEb250U2hvdzogZG9udHNob3csXHJcbiAgICAgICAgICAgICAgICBTdWJLZXk6IHN1YnNjcmlwdGlvbktleSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWRpcmVjdEV4dGVybmFsKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbyBleHRlcm5hbC4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24oYWNjb3VudE5hbWUsIHN1YnNjcmlwdGlvbktleSwgcHJvY2Vzc2lkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvIGludGVybmFsIScpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRSZWRpcmVjdFVybCgpXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBvcGVuQ2hhbmdlUGFzc3dvcmREaWFsb2cobG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpIHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICBsZXQgdGl0bGU6IHN0cmluZztcclxuICAgICAgICBjb25zdCBvcFJlcyA9IGF3YWl0IHRoaXMuZ2V0U3ltYm9sc1RvUHJvbWlzZSgpO1xyXG4gICAgICAgIGNvbnN0IHBzd1J1bGVzU3ltYm9sID0gb3BSZXMuQ29udGVudDtcclxuICAgICAgICBsZXQgbWVzc2FnZV8xOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VfMjogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtZXNzYWdlXzM6IHN0cmluZztcclxuICAgICAgICBsZXQgbWVzc2FnZV80OiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VfNTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtZXNzYWdlXzY6IHN0cmluZztcclxuICAgICAgICBsZXQgbWVzc2FnZV83OiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VfODogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtZXNzYWdlXzk6IHN0cmluZztcclxuICAgICAgICBsZXQgbWVzc2FnZV8xMDogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtZXNzYWdlXzExOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHBsYWNlSG9sZGVyXzE6IHN0cmluZztcclxuICAgICAgICBsZXQgcGxhY2VIb2xkZXJfMjogc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKSB7XHJcbiAgICAgICAgICAgIHRpdGxlID0gJ01vZGlmaWNhIHBhc3N3b3JkJztcclxuICAgICAgICAgICAgbWVzc2FnZV8xID0gJ0xhIG51b3ZhIHBhc3N3b3JkIGRldmUgZXNzZXJlIGNvbXBvc3RhIGRhIGFsbWVubyAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzIgPSAnOCBjYXJhdHRlcmkgJztcclxuICAgICAgICAgICAgbWVzc2FnZV8zID0gJ2UgY29udGVuZXJlIHRhc3NhdGl2YW1lbnRlICc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfNCA9ICczIGRpIHF1ZXN0ZSA0IGNvbmRpemlvbmk6JztcclxuICAgICAgICAgICAgbWVzc2FnZV81ID0gJ2F2ZXJlIGFsbWVubyAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzYgPSAndW5hIG1haXVzY29sYSc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfNyA9ICdhdmVyZSAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzggPSAnY2FyYXR0ZXJpIG1pbnVzY29saSc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfOSA9ICdhbG1lbm8gdW4gbnVtZXJvICc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfMTAgPSAnKHRyYSAwIGUgOSknO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzExID0gJ3VuIHNpbWJvbG8gdHJhIHF1ZXN0aSBhIHNlZ3VpcmUgJztcclxuICAgICAgICAgICAgcGxhY2VIb2xkZXJfMSA9ICdQYXNzd29yZCc7XHJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyXzIgPSAnQ29uZmVybWEgcGFzc3dvcmQnO1xyXG4gICAgICAgICAgICAvL3RoaXMub2tNZXNzYWdlID0gXCJQYXNzd29yZCBtb2RpZmljYXRhIGNvbiBzdWNjZXNzbyFcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aXRsZSA9ICdDaGFuZ2UgcGFzc3dvcmQnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzEgPSAnVGhlIG5ldyBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0ICc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfMiA9ICc4IGNoYXJhY3RlcnMgJztcclxuICAgICAgICAgICAgbWVzc2FnZV8zID0gJ2FuZCBjb250YWluICc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfNCA9ICczIG9mIHRoZXNlIDQgY29uZGl0aW9uczonO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzUgPSAnaGF2ZSBhdCBsZWFzdCAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzYgPSAnb25lIHVwcGVyY2FzZSc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfNyA9ICdoYXZlICc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfOCA9ICdsb3dlcmNhc2UgY2hhcmFjdGVycyc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfOSA9ICdhdCBsZWFzdCBvbmUgbnVtYmVyICc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfMTAgPSAnKGJldHdlZW4gMCBhbmQgOSknO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzExID0gJ29uZSBzeW1ib2wgYW1vbmcgdGhlc2UgdG8gZm9sbG93ICc7XHJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyXzEgPSAnUGFzc3dvcmQnO1xyXG4gICAgICAgICAgICBwbGFjZUhvbGRlcl8yID0gJ0NvbmZpcm0gcGFzc3dvcmQnO1xyXG4gICAgICAgICAgICAvL3RoaXMub2tNZXNzYWdlID0gXCJQYXNzd29yZCBjaGFuZ2VkIHN1Y2Nlc2Z1bGx5IVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpYWxvZy5vcGVuKENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfMTogbWVzc2FnZV8xLFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZV8yOiBtZXNzYWdlXzIsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzM6IG1lc3NhZ2VfMyxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfNDogbWVzc2FnZV80LFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZV81OiBtZXNzYWdlXzUsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzY6IG1lc3NhZ2VfNixcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfNzogbWVzc2FnZV83LFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZV84OiBtZXNzYWdlXzgsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzk6IG1lc3NhZ2VfOSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfMTA6IG1lc3NhZ2VfMTAsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzExOiBtZXNzYWdlXzExLFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZV8xMjogcHN3UnVsZXNTeW1ib2wsXHJcbiAgICAgICAgICAgICAgICBQbGFjZUhvbGRlcl8xOiBwbGFjZUhvbGRlcl8xLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VIb2xkZXJfMjogcGxhY2VIb2xkZXJfMixcclxuICAgICAgICAgICAgICAgIExvZ2luUmVxdWVzdDogbG9naW5SZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgQ3VycmVudEJyb3dzZXJMYW5ndWFnZTogY3VycmVudEJyb3dzZXJMYW5ndWFnZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpc1ZhbGlkVG9rZW4oYXV0aHRva2VuID0gJycpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIGlmICghYXV0aHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICBvcHJlcy5NZXNzYWdlID0gJ05vIGF1dGh0b2tlbic7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHJlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldElzVmFsaWRUb2tlblVybCgpLCBuZXcgSXNWYWxpZFRva2VuUmVxdWVzdChhdXRodG9rZW4pKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcCgoak9iajogT3BlcmF0aW9uUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzVmFsaWRUb2tlbiAtIHJlc3BvbnNlJywgak9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqT2JqLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqT2JqLk1lc3NhZ2UgPSBqT2JqLk1lc3NhZ2UgPyBqT2JqLk1lc3NhZ2UgOiAnaXNWYWxpZFRva2VuIGVycm9yLi4uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBUb2tlbiBWYWxpZGF0aW9uIGZhaWx1cmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuOiAnICsgYXV0aHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBqT2JqLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjY2O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnVybC5pbmNsdWRlcyh0aGlzLmdldExvZ2luUGFnZVVybCgpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZ2V0TG9naW5QYWdlVXJsKCldKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb21wYW5pZXNGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRTdWJzS2V5c0ZvckFjY291bnRVcmwoKSArIHVzZXIpLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLkNvbnRlbnQgJiYgcmVzLkNvbnRlbnQuc3Vic2NyaXB0aW9ucyA/IHJlcy5Db250ZW50LnN1YnNjcmlwdGlvbnMgOiBbXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJc1ZhbGlkVG9rZW5VcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2lzdmFsaWR0b2tlbi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2dpblVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcclxuICAgIH1cclxuICAgIGdldFByZUxvZ2luVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2dvdXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ29mZi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDaGFuZ2VQYXNzd29yZEFwaVVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFuZ2VQYXNzd29yZFVybCgpICsgJ2NoYW5nZXBhc3N3b3JkLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2VuZE9UUFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAncmVzZW5kb3RwX3YzLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE9MRHJlc2VuZE9UUFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAncmVzZW5kb3RwLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlc2V0UGFzc3dvcmRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKSArICdyZXNldHBhc3N3b3JkLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50Lyc7XHJcbiAgICB9XHJcblxyXG4gICAgLyphc3luYyBzZW5kT1RQKGNwaTogT1RQSW5mbyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICAgY29uc3QgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNwaSk7XHJcbiAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxyXG4gICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmxvZ2luKCksIGJvZHlTdHJpbmcsIHsgaGVhZGVycyB9KVxyXG4gICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlcy5NZXNzYWdlICsgJyAoQ29kZTonICsgcmVzLkNvZGUgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjY7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICApXHJcbiAgICAgICAgIC50b1Byb21pc2UoKTtcclxuIH0qL1xyXG5cclxuICAgIGFzeW5jIGNoYW5nZVBhc3N3b3JkKGNwaTogQ2hhbmdlUGFzc3dvcmRJbmZvKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBjb25zdCBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY3BpKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGFsaWduXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRBcGlVcmwoKSwgYm9keVN0cmluZywgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzLk1lc3NhZ2UgKyAnIChDb2RlOicgKyByZXMuQ29kZSArICcpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIExhbmdJVCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5sYW5nSXQgIT0gbnVsbCkgdGhpcy5sYW5nSXQgPSBuYXZpZ2F0b3IubGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYW5nSXQ7XHJcbiAgICB9XHJcblxyXG4gICAgT0xEcmVzZW5kT1RQKGFjY25hbWU6IHN0cmluZywgYWx0ZXJuYXRpdmU6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG5cclxuICAgICAgICBsZXQgd2FybmluZyA9IHRoaXMuTGFuZ0lUKCkgPyAnQXR0ZW56aW9uZScgOiAnV2FybmluZyc7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3NNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdPdHAgaW52aWF0bycgOiAnT3RwIHNlbnQnO1xyXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSB0aGlzLkxhbmdJVCgpID8gJ090cCBub24gaW52aWF0bycgOiAnT3RwIG5vdCBzZW50JztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5PTERyZXNlbmRPVFBVcmwoKSArIGFjY25hbWUgKyAnLycgKyBhbHRlcm5hdGl2ZSwgeyBoZWFkZXJzIH0pLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjYzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKGAke3dhcm5pbmd9OiAke3Jlcy5NZXNzYWdlfWAsICdPSycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKHN1Y2Nlc3NNZXNzYWdlLCAnT0snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICByZXMuTWVzc2FnZSA9IGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2OTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKGAke3dhcm5pbmd9OiAke2Vycm9yLm1lc3NhZ2V9YCwgJ09LJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2VuZE9UUDIoYWNjbmFtZTogc3RyaW5nLCBwcm9jZXNzSUQ6IHN0cmluZywgYWx0ZXJuYXRpdmU6IG51bWJlcik6IE9ic2VydmFibGU8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcblxyXG4gICAgICAgIGxldCB3YXJuaW5nID0gdGhpcy5MYW5nSVQoKSA/ICdBdHRlbnppb25lJyA6ICdXYXJuaW5nJztcclxuICAgICAgICBsZXQgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZztcclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgc3dpdGNoIChhbHRlcm5hdGl2ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzTWVzc2FnZSA9IHRoaXMuTGFuZ0lUKCkgPyAnU21zIGludmlhdG8nIDogJ1NtcyBzZW50JztcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHRoaXMuTGFuZ0lUKCkgPyAnU21zIG5vbiBpbnZpYXRvJyA6ICdTbXMgbm90IHNlbnQnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdFLW1haWwgaW52aWF0YScgOiAnRS1tYWlsIHNlbnQnO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdFLW1haWwgbm9uIGludmlhdGEnIDogJ0UtbWFpbCBub3Qgc2VudCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdPdHAgaW52aWF0bycgOiAnT3RwIHNlbnQnO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdPdHAgbm9uIGludmlhdG8nIDogJ090cCBub3Qgc2VudCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMucmVzZW5kT1RQVXJsKCkgKyBhY2NuYW1lICsgJy8nICsgcHJvY2Vzc0lEICsgJy8nICsgYWx0ZXJuYXRpdmUsIHsgaGVhZGVycyB9KS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TbmFja0JhcihgJHt3YXJuaW5nfTogJHtyZXMuTWVzc2FnZX1gLCAnT0snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhbHRlcm5hdGl2ZSAhPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKHN1Y2Nlc3NNZXNzYWdlLCAnT0snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICByZXMuTWVzc2FnZSA9IGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2OTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKGAke3dhcm5pbmd9OiAke2Vycm9yLm1lc3NhZ2V9YCwgJ09LJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlc2V0cGFzc3dvcmQoYWNjbmFtZTogc3RyaW5nKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGFsaWduXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0UmVzZXRQYXNzd29yZFVybCgpICsgYWNjbmFtZSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5NZXNzYWdlID0gYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwuaW5jbHVkZXModGhpcy5nZXRMb2dpblBhZ2VVcmwoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbG9nb2ZmKCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ29mZlJlcXVlc3Q6IExvZ29mZlJlcXVlc3QgPSBuZXcgTG9nb2ZmUmVxdWVzdCh0aGlzLmdldFRva2VuKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PExvZ29mZlJlc3BvbnNlPih0aGlzLmdldExvZ291dFVybCgpLCBsb2dvZmZSZXF1ZXN0KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgobG9nb2ZmUmVzcG9uc2U6IExvZ29mZlJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ29mZlJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IENsZWFyaW5nIHN0b3JhZ2UgZHVlIHRvIExvZ29mZicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZE91dCQubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ29mZlJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ29mZldpdGhGZXRjaCgpIHtcclxuICAgICAgICBjb25zdCBsb2dvZmZSZXF1ZXN0OiBMb2dvZmZSZXF1ZXN0ID0gbmV3IExvZ29mZlJlcXVlc3QodGhpcy5nZXRUb2tlbigpKTtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IEpTT04uc3RyaW5naWZ5KGxvZ29mZlJlcXVlc3QpO1xyXG4gICAgICAgIGxldCBsb2dvdXQgPSBmZXRjaCh0aGlzLmdldExvZ291dFVybCgpLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICBrZWVwYWxpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0aGlzLmdldEF1dGhvcml6YXRpb25IZWFkZXIoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2dvdXQudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5hdmlnYXRlVXNlckdhdGV3YXkoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VudGVyaW5nIG5hdmlnYXRlVXNlckdhdGV3YXkuLicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJHYXRld2F5VXJsID0gdGhpcy5nZXRVc2VyR2F0ZXdheVVybCgpO1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyZ2F0ZXdheSB1cmwgZXhpc3RzLCB0aGVuIHJlZGlyZWN0IHRvIGl0XHJcbiAgICAgICAgaWYgKHVzZXJHYXRld2F5VXJsICE9PSAnJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRm91bmQgZ2V0VXNlckdhdGV3YXlVcmwgJHt1c2VyR2F0ZXdheVVybH1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gdGhpcy5lcnJvck1lc3NhZ2UgPyBgJHt1c2VyR2F0ZXdheVVybH1sb2dpbj9lcnJvcj1cIiR7dGhpcy5lcnJvck1lc3NhZ2V9XCJgIDogdXNlckdhdGV3YXlVcmw7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG90aGVyd2lzZSwgcmVkaXJlY3QgdG8gbG9naW5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlZGlyZWN0aW5nIHRvIGxvZ2luIHBhZ2UuLlwiKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRMb2dpblBhZ2VVcmwoKV0sIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgZXJyb3I6IHRoaXMuZXJyb3JNZXNzYWdlIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbihhY2NvdW50TmFtZTogc3RyaW5nLCBzdWJzY3JpcHRpb25LZXk6IHN0cmluZywgcHJvY2Vzc2lkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmdldEluc3RhbmNlc01hcEZvclVzZXIoYWNjb3VudE5hbWUpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFwOiBBcnJheTx7IFN1YnNjcmlwdGlvbktleTogc3RyaW5nOyBEZXNjcmlwdGlvbjogc3RyaW5nOyBJbnN0YW5jZUtleTogc3RyaW5nIH0+ID0gcmVzIGFzIEFycmF5PHtcclxuICAgICAgICAgICAgICAgICAgICBTdWJzY3JpcHRpb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIEluc3RhbmNlS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB9PjtcclxuICAgICAgICAgICAgICAgIGlmICghbWFwIHx8IG1hcC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc3RhbmNlTWFwIGlzIGludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbnN0YW5jZUtleTogc3RyaW5nID0gbWFwLmZpbHRlcigoaykgPT4gay5TdWJzY3JpcHRpb25LZXkgPT09IHN1YnNjcmlwdGlvbktleSkubWFwKChqKSA9PiBqLkluc3RhbmNlS2V5KVswXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U25hcHNob3QoY3VycmVudEluc3RhbmNlS2V5LCBzdWJzY3JpcHRpb25LZXkpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzIHx8IHJlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcignc25hcHNob3QgaXMgZW1wdHknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBub3cgdGhlIHNuYXBzaG90XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzOiBBcnJheTx7IFNlcnZpY2VUeXBlOiBzdHJpbmc7IFVybDogc3RyaW5nOyBQcm9kdWN0VmVyc2lvbjogc3RyaW5nOyBQb3J0OiBudW1iZXIgfT4gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLlNlcnZpY2VzIGFzIEFycmF5PHsgU2VydmljZVR5cGU6IHN0cmluZzsgVXJsOiBzdHJpbmc7IFByb2R1Y3RWZXJzaW9uOiBzdHJpbmc7IFBvcnQ6IG51bWJlciB9PjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG8gaWxhIGludGVydmllbmkgcXVpIHBlciBhcHBpZCBwZXJzb25hbGl6emF0ZSBjb21lIGRjc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVkaXJlY3RVcmwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZURDUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGkpID0+IGkuU2VydmljZVR5cGUgPT09ICdNNEZST05URU5EJyB8fCBpLlNlcnZpY2VUeXBlID09PSAnQVBQX0ZST05URU5EJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChmKSA9PiBmLlVybClbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFVybCA9IHNlcnZpY2VzLmZpbHRlcigoaSkgPT4gaS5TZXJ2aWNlVHlwZSA9PT0gJ0RDU19GUk9OVEVORCcpLm1hcCgoZikgPT4gZi5VcmwpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXNpZ25hdGVkIHJlZGlyZWN0IGlzICR7cmVkaXJlY3RVcmx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VSZWRpcmVjdFVybCA9IGAke3JlZGlyZWN0VXJsfT9qd3Q9JHtwcm9jZXNzaWR9JnN1YktleT0ke3N1YnNjcmlwdGlvbktleX0maW5zdGFuY2VLZXk9JHtjdXJyZW50SW5zdGFuY2VLZXl9YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXNpZ25hdGVkIGZpbmFsIHJlZGlyZWN0IGlzICR7YmFzZVJlZGlyZWN0VXJsfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCwgYmFzZVJlZGlyZWN0VXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VU0VSX0dBVEVXQVlfQVVUT1JFRElSRUNULCBiYXNlUmVkaXJlY3RVcmwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGJhc2VSZWRpcmVjdFVybDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NuYXBzaG90IGNhbm5vdCBiZSBvYnRhaW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NuYXBzaG90IGNhbm5vdCBiZSBvYnRhaW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbiBpYSBhYm91dCB0byBmYWlsLi4uJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRJbnN0YW5jZXNNYXBGb3JVc2VyIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRJbnN0YW5jZXNNYXBGb3JBY2NvdW50VXJsKCkgKyB1c2VyKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5Db250ZW50O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldENhbGVuZGFyKHN1YnNjcmlwdGlvbktleTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuZ2V0Q2FsZW5kYXJVcmwoKTtcclxuICAgICAgICBpZiAoIXVybCB8fCB1cmwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdXB1cmwgaXMgbm90IHVzZWQuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldDxPcGVyYXRpb25SZXN1bHQ+KGAke3RoaXMuZ2V0Q2FsZW5kYXJVcmwoKX0/U3Vic2NyaXB0aW9uS2V5PSR7c3Vic2NyaXB0aW9uS2V5fWAgLyosIHsgaGVhZGVycyB9Ki8pXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzLk1lc3NhZ2UgKyAnIChDb2RlOicgKyByZXMuQ29kZSArICcpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTbmFwc2hvdChpbnN0YW5jZUtleTogc3RyaW5nLCBzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRTbmFwc2hvdFNlcnZpY2VVcmwoKSArIGluc3RhbmNlS2V5ICsgJz9zdWJzY3JpcHRpb25LZXk9JyArIHN1YnNjcmlwdGlvbktleSkucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuQ29udGVudDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JBY2NvdW50VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdpbnN0YW5jZXNNYXAvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2FsZW5kYXJVcmwoKSB7XHJcbiAgICAgICAgdmFyIGl1cHVybCA9IHRoaXMuZ2V0SXVwVXJsKCk7XHJcbiAgICAgICAgaWYgKCFpdXB1cmwgfHwgaXVwdXJsLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGl1cHVybCArICdjYWxlbmRhcmpvYnMvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VXBkYXRlTWVzc2FnZSgpIHtcclxuICAgICAgICB2YXIgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfSVQoKSA/PyB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcclxuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdkZScpKSByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0RFKCkgPz8gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgncHQnKSkgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9CUigpID8/IHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9FTigpO1xyXG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2JnJykpIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfQkcoKSA/PyB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcclxuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdlcycpKSByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VTKCkgPz8gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgncGwnKSkgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9QTCgpID8/IHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9FTigpO1xyXG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ3JvJykpIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfUk8oKSA/PyB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcclxuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkxLKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVTRVJfR0FURVdBWV9BVVRPUkVESVJFQ1QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkxLKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9yYWdlU3Vic2NyaXB0aW9uRGF0YShzdWJzY3JpcHRpb25LZXk6IHN0cmluZywgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JhZ2VRdWVyeVBhcmFtcyhzdWJzY3JpcHRpb25LZXk6IHN0cmluZywgaW5zdGFuY2VLZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRJbnN0YW5jZUtleShpbnN0YW5jZUtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROYW1lKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZS5Bc2tpbmdQcm9jZXNzID09PSB0aGlzLmdldEFwcElkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9yYWdlRGF0YShsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcEN1bHR1cmU6IHN0cmluZyA9XHJcbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncyA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncy5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxyXG4gICAgICAgICAgICAgICAgOiBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3M7XHJcbiAgICAgICAgY29uc3QgcmVzcFVpQ3VsdHVyZTogc3RyaW5nID1cclxuICAgICAgICAgICAgbG9naW5SZXNwb25zZS5MYW5ndWFnZSA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2UubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgIDogbG9naW5SZXNwb25zZS5MYW5ndWFnZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5KV1QsIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4pO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkxLLCBsb2dpblJlc3BvbnNlLkxvZ2luS2V5KTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgcmVzcFVpQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCBsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgbG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25EZXNjKVxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuTEssIGxvZ2luUmVzcG9uc2UuTG9naW5LZXkpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHJlc3BVaUN1bHR1cmUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTLCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLlJvbGVzKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCBsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGdldFN5bWJvbHNUb1Byb21pc2UoKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0U3ltYm9sc1VybCgpLCB7IGhlYWRlcnMgfSkudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwdWJsaWMgZ2V0U3ltYm9sc1VybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFuZ2VQYXNzd29yZFVybCgpICsgJ2dldHN5bWJvbHMvJztcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQ3VsdHVyZShjdWx0dXJlOiBzdHJpbmcsIHVpQ3VsdHVyZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCB1aUN1bHR1cmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIGN1bHR1cmUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCB1aUN1bHR1cmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuU25hY2tCYXIobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHsgZHVyYXRpb246IDUwMDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2dpbktleSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuTEspO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkxLKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWRpcmVjdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNjb3VudE5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWJzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWJzY3JpcHRpb25EZXNjcmlwdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1bHR1cmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVJQ3VsdHVyZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VLZXkoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5JTlNUQU5DRUtFWSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5zdGFuY2VLZXkoaW5zdGFuY2VLZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZLCBpbnN0YW5jZUtleSk7XHJcbiAgICAgICAgZWxzZSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5JTlNUQU5DRUtFWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXV0aFNlcnZpY2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXJsO1xyXG4gICAgZ2V0SXVwVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLml1cHVybDsgLy9odHRwOi8vbG9jYWxob3N0OjUyMTcyL2FwaS9cclxuICAgIGdldFJlZGlyZWN0VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnJlZGlyZWN0VXJsO1xyXG4gICAgZ2V0UmVkaXJlY3RJZk5vdEF1dGhlbnRpY2F0ZWQgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnJlZGlyZWN0SWZOb3RBdXRoZW50aWNhdGVkO1xyXG4gICAgZ2V0VXNlckdhdGV3YXlVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXNlckdhdGV3YXlVcmw7XHJcbiAgICBnZXRDcmVhdGVBY2NvdW50VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmNyZWF0ZUFjY291bnRVcmw7XHJcbiAgICBnZXRDaGFuZ2VQYXNzd29yZFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5jaGFuZ2VQYXNzd29yZFVybDtcclxuICAgIGhhc1N1YnNjcmlwdGlvblNlbGVjdGlvbiA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc3Vic2NyaXB0aW9uU2VsZWN0aW9uO1xyXG4gICAgc2hvd1NpZ25VcCA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc2hvd1NpZ25VcDtcclxuICAgIGdldEFwcElkID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlRENTID8gJ0RDUycgOiB0aGlzLmVudi5hdXRoLmFwcElkO1xyXG4gICAgfTtcclxuICAgIGdldFByZUxvZ2luQXBwSWQgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgucHJlTG9naW5BcHBJZDtcclxuICAgIGlzU2Vzc2lvblN0b3JhZ2UgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlO1xyXG4gICAgZ2V0TG9nb1VSTCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5sb2dvVVJMO1xyXG4gICAgZ2V0QmFja2dyb3VuZFVSTCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5iYWNrZ3JvdW5kVVJMO1xyXG4gICAgZ2V0QnJhbmROYW1lID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5icmFuZC5hcHBsaWNhdGlvbk5hbWU7XHJcbiAgICBpc1JlZGlyZWN0RXh0ZXJuYWwgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLmlzUmVkaXJlY3RFeHRlcm5hbDtcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfSVQgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9JVDtcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfRU4gPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9FTjtcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfQlIgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9CUjtcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfQkcgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9CRztcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfUk8gPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9STztcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfREUgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9ERTtcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfRVMgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9FUztcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfUEwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9QTDtcclxufVxyXG4iXX0=