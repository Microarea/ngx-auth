import { Injectable, Inject } from '@angular/core';
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
            isMagoWeb: false,
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
        this.getIfIsMagoWeb = () => this.env.auth.isMagoWeb;
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
        console.log('Redirecting to login page..');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQWlDLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFdBQVcsQ0FBQztBQUUvQixPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBSW5GLElBQUksbUJBQWtDLENBQUM7QUFDdkMsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0FBSXJELDhFQUE4RTtBQUM5RSxNQUFNLE9BQU8sYUFBYTthQUNQLGdCQUFXLEdBQXNCO1FBQzVDLElBQUksRUFBRTtZQUNGLEdBQUcsRUFBRSw2QkFBNkI7WUFDbEMsUUFBUSxFQUFFLCtC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VyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxZQUFZO1FBQ1IsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7WUFDbkYsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYztZQUFFLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBQ3BGLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGNBQWMsQ0FBQyxXQUFtQjtRQUM5QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7O1lBQzFGLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7aUlBOTRCUSxhQUFhLGNBd0RWLEtBQUs7c0dBeERSLGFBQWEsV0FBYixhQUFhLG1CQUhWLE1BQU07O2lGQUdULGFBQWE7Y0FKekIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkEwRFEsTUFBTTt1QkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIG1hcCwgY2F0Y2hFcnJvciwgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFN0b3JhZ2VWYXJzIH0gZnJvbSAnLi9tb2RlbHMvc3RvcmFnZS12YXJzJztcclxuXHJcbmltcG9ydCB7IExvZ2luUmVxdWVzdCwgQ2hhbmdlUGFzc3dvcmRJbmZvIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XHJcbmltcG9ydCB7IExvZ29mZlJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dvZmYtcmVxdWVzdCc7XHJcbmltcG9ydCB7IExvZ29mZlJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9nb2ZmLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgSXNWYWxpZFRva2VuUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2lzLXZhbGlkLXRva2VuLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBPcGVyYXRpb25SZXN1bHQgfSBmcm9tICcuL21vZGVscy9vcGVyYXRpb24tcmVzdWx0JztcclxuaW1wb3J0IHsgVGJBdXRoRW52aXJvbm1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRoLWVudmlyb25tZW50JztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGVydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcblxyXG5sZXQgYXV0aFNlcnZpY2VJbnN0YW5jZTogVGJBdXRoU2VydmljZTtcclxuZXhwb3J0IGNvbnN0IGF1dGhTZXJ2aWNlID0gKCkgPT4gYXV0aFNlcnZpY2VJbnN0YW5jZTtcclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNsYXNzIFRiQXV0aFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9FTlY6IFRiQXV0aEVudmlyb25tZW50ID0ge1xyXG4gICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDoxMDM0NC9hcGkvJyxcclxuICAgICAgICAgICAgc3RvcmVVcmw6ICdodHRwczovL3Rlc3Qtc3RvcmUubWFnby5jbG91ZCcsXHJcbiAgICAgICAgICAgIGl1cHVybDogJycsXHJcbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRVcmw6ICdodHRwOi8vbG9jYWxob3N0OjQyMDAnLFxyXG4gICAgICAgICAgICBjaGFuZ2VQYXNzd29yZFVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTYzOTIvYXBpLycsXHJcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dTaWduVXA6IGZhbHNlLFxyXG4gICAgICAgICAgICBhcHBJZDogJ000JyxcclxuICAgICAgICAgICAgcHJlTG9naW5BcHBJZDogJ01DbG91ZFByZUxvZ2luJyxcclxuICAgICAgICAgICAgcmVkaXJlY3RVcmw6ICcvJyxcclxuICAgICAgICAgICAgaXNNYWdvV2ViOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVkaXJlY3RJZk5vdEF1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB1c2VyR2F0ZXdheVVybDogJycsXHJcbiAgICAgICAgICAgIGlzUmVkaXJlY3RFeHRlcm5hbDogdHJ1ZSxcclxuICAgICAgICAgICAgbG9naW5QYWdlVXJsOiAnbG9naW4nLFxyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNuYXBzaG90U2VydmljZVVybDogJycsXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgIHVwZGF0ZW1lc3NhZ2VfSVQ6XHJcbiAgICAgICAgICAgICAgICBcIlNvbm8gcHJldmlzdGUgYXR0aXZpdMOgIGRpIG1hbnV0ZW56aW9uZSBlZCBhZ2dpb3JuYW1lbnRvLCBwZXIgcXVlc3RvIHN1bGxhIHR1YSBzdWJzY3JpcHRpb24gQEBzdWIgcG90cmViYmVybyB2ZXJpZmljYXJzaSBicmV2aSBkaXNzZXJ2aXppIGlsIDxiPiBAQGRhdGU8L2I+LCBkYWxsZSBvcmUgPGI+IEBAc3RhcnRoPC9iPiBhbGxlIG9yZSA8Yj4gQEBlbmRoPC9iPi48L2JyPkF0dGVuemlvbmUsIHBlciBjb25zZW50aXJlIGlsIGNvcnJldHRvIHN2b2xnaW1lbnRvIGRlbGwnYWdnaW9ybmFtZW50byBsZSBwcm9jZWR1cmUgY2hlIGR1cmFudGUgbG8gc3Rlc3NvIHJpc3VsdGVyYW5ubyBhbmNvcmEgaW4gZXNlY3V6aW9uZSBzYXJhbm5vIGludGVycm90dGUuXCIsXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgIHVwZGF0ZW1lc3NhZ2VfRU46XHJcbiAgICAgICAgICAgICAgICAnRHVlIHRvIHN5c3RlbSBtYWludGVuYW5jZSBhbmQgdXBkYXRlcyB0aGVyZSBtaWdodCBiZSBkaXN0dXJiYW5jZSBpbiB5b3VyIHN1YnNjcmlwdGlvbiBAQHN1YiBvbiB0aGUgPGI+IEBAZGF0ZSwgYmV0d2VlbiA8Yj4gQEBzdGFydGggYW5kIDxiPiBAQGVuZGg8L2I+LjwvYnI+ICcsXHJcbiAgICAgICAgICAgIHVwZGF0ZW1lc3NhZ2VfREU6ICcnLFxyXG4gICAgICAgICAgICB1cGRhdGVtZXNzYWdlX0JSOiAnJyxcclxuICAgICAgICAgICAgdXBkYXRlbWVzc2FnZV9FUzogJycsXHJcbiAgICAgICAgICAgIHVwZGF0ZW1lc3NhZ2VfQkc6ICcnLFxyXG4gICAgICAgICAgICB1cGRhdGVtZXNzYWdlX1JPOiAnJyxcclxuICAgICAgICAgICAgdXBkYXRlbWVzc2FnZV9QTDogJycsXHJcbiAgICAgICAgICAgIGxvZ29VUkw6ICdodHRwczovL21hZ29jbG91ZC1zdG9yZS1wZGYuczMuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vbG9naW4tbG9nby5wbmcnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kVVJMOiAnaHR0cHM6Ly9tYWdvY2xvdWQtc3RvcmUtcGRmLnMzLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2xvZ2luLWJnLnBuZycsXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgIC8vICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVRnQUFBQTJDQVlBQUFCVEFvV3VBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlWcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUTRJRGM1TGpFMk5EQXpOaXdnTWpBeE9TOHdPQzh4TXkwd01Ub3dOam8xTnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SURJeExqQWdLRTFoWTJsdWRHOXphQ2tpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UlRjME9FSkVNRGN3TkRsQk1URkZRVGxETnpWRE5EUkdOa016UTBFd1JEVWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZSVGMwT0VKRU1EZ3dORGxCTVRGRlFUbEROelZETkRSR05rTXpRMEV3UkRVaVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEZOelE0UWtRd05UQTBPVUV4TVVWQk9VTTNOVU0wTkVZMlF6TkRRVEJFTlNJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwRk56UTRRa1F3TmpBME9VRXhNVVZCT1VNM05VTTBORVkyUXpORFFUQkVOU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUGwzZTREd0FBQlVBU1VSQlZIamE3RjBKbEJiRkVlNWRkaEhsTXF3b0lnZ0tLaUxJNFlrZ1JxT2dJb28zbmlBZU1Rb3hLc1lvaDZJUmlSRVVqeGdKQ3BKbzhJcUFrYUFRTk1HWTRBRW9LSXF1QWdvUlJUbmtXQkRZMUplcGZRNjEzWFAyelAvdjd0UjdIK3owUDFQZDB6TmRVMTFWWFYxUVhsNnVNcXJ4ZEFEaENFSW5RZ2RDRTBKandtNkVBZ0pla3JXRS94SytKTHhQV0VCNGk3QTA2NzZNOHBVS01nRlhZK2t3d3JtRVV3aUh4dUR6TW1FSzRVWENpcXhiTThvRVhFYTVwSk1JMXhMT3NNejNlOExUaEVjSnIyZmRuRkVtNERKS2szNUNHRUk0UG9XNlhpQU1KS3pNdWoyalRNQmxsQ1RCbmphR2NJSFBlYVdFTnduekNCOFN2aVdzWTgxc0YwSUpZVy9sMk9zNjhoUjNYdzkrbXduRENmZG1qeUNqVE1CbGxBU2RTcGhNcUsvNWJTdGhQdUZ2aEduOGQxanFUcmlVMEpYUXhuRE9HNFRCaEg5bmp5T2pUTUJsWkl1ZTh0RGFIaWJjcFJ5dnFDMkNGL1o2anpwL3B4emJYMFlaWlFJdW84aUVxZVJNNVlSOFNQb3I0VmJDd2dUcjcwSzRoOUROVUgvdjdCRmxsQW00aktKUVU4SmNRak5SRG52WTFZUkpLYllGV3VJMW12SUpoQUVSK05VbXRDVzBWSTRkc0JHaEh2KzJnZkFkNFRQQ1lzSUhQQVhQS0JOd21ZQ3JKdFNZTmJPOVJEa2NCK2NSbHVXZ1RlZnpWTGxRbEU4a1hCYmcrbjBJNXhCTzVDbndYZ0hyWGNYM1BZdTEyY1haNjVFSnVJeXFObjFLMkUrVXdTTjZXSTdiMVphRlRGTlJEcy91allaclRtSXQ3MnhDc1lVMnpPUnA4NnpzTmFsWlZKaDFRYldnc1JyaDlvcHk3R0c1Smt3WE83S3dkZE1OaEYrNGptc1IraEQrd1czdmEwbTRWUWhNQ0xuWENLY3JaL2xaUnBrR2wxRVZvS0dFTzBYWjQ0VEw4N0N0cjdDd2NkUEp5b203ZTFVanBOMkVlTHgzQ0l1VUU3TzNYRG0yTndpcnVxd2hOaWNjUmVqc0l4eExXZEI5a0wwK21ZRExLSCtwazBZeitydHliRmI1U0JBNlc0UUd0WU93VFRsT0JCMzlTVG5lVjJoMlh3YXNCd0hKeHlrbkRoQTJ2RjAxNTREZmo3TlhxR1lJT0F3SVJMdy96Vi9LWEZORmU1NVI5cjFoeUpBQjI4N25QR1ZKbS9Za0hLbWNyQjM3RTFyd3dOL0JHc2xTd2tlRU9ZUjNmWGpoSHR3ZVV3aUFmWmhYRk5xRHA3WHRXVWpzd1lLbmpQQUZhMDBMV0todWpsZ0hGdmRQRDNBZXZMQVBjbC9FSWJ4SFZ4THVFT1hRR0UvSVJFQTFKeEp3QTh0L29FVVFlRG5HRmE3MkxDYlV0OGk3RnFIVXhmK0NGTy9yUXNLTGhNM2x3ZWxEd21oQ0J3Mi9ZWnJ6MjBkb1YxM0NBTUkwd3NhQTdmcWE4RFRobkloOU1jYUROL2kyVHFEL0QyVGV1TWVGaEFQeTRGM1BrRER3ejFMeGdsMlg0MFp0RSszcGJaRjNGOEY3WFFyM2N6Ymh6Zkw0TkpWd0dQUGNUZlA3SFNIYlZZOHdndkJWekhiOWgrOHhiTDhzRjN5K0k1eVh3dk5vbEEzOG1nTjRVVGNLcFE0RzZ6bzVVaWg3S2NlYjVxWmRMUElmTEk0YktDZFdLd21Dc1J1NTBwNVRUZ3hYWElKUi9HM0NKWVRSNGpjRXVRNFB3ZXMwd2lkOFRXTUw5NGw3UkFqR01TSGJVTXBUWGR6WHdXeVNTSnEremVadE5jc0d0NER0UWRMK01UQUg3Vm5PbmpBM0lYUmdxZ1hlaU1kNlgxUCtKZHViYk5JanlsazVvS050TEF4ZVp4c2I3R2pyQ1VVc2JQWmxvUUZiMVVFQjYvc3BZVnlBOC9EaGVwYUZpNDRnYkY1U08yY1UyY0xYdGVRKzdPb2p5TEJhb2wrSXZtcVVDWjJNMGhadzBPcnFwZHdXRElxSm1uSmJBdTdQeW9tdDB0Rlp5c2xoWm9ObUVIcHF5bUdrdjU4ZE9WOEU1SVVjYmxjcFp5V0NpYkJndm1sQVl6c2NGNjAxdjBIdy81NkYzNm9Bdk9BY09aYy9nczAwdjJjRy9Jenl4c213d0dCYk9TL2wrZklxUXp2T3NNRDdSejUycEZjdDNjTm9BLy9IQ2J2RXRCM09NZkMrTXNEMUpZU1ZtbXRoZzd3NlJydHdUK01NN1hvc3N3Rmx5RFZNR2x5Rnh0RThKVGw3cGNjVXk0WUdCN3ZpVU5jeHdpZ0sxQS94V0ppR0lWaDBlNHc2cnVhcHFadkE3d0xXakd6UTNZUmZpYkppbnZaNkVVSXREaFJsaU95L1ZBV1BMZk1pWkFoNVNxUDEvNW93elBLN3NydHl3bGphc0ZZS215MWluZFlvWjdIOXUyenFDRW93RGNnMXJvVThiZDZZQTUzamNQVkQrRkJkTHR2RU50TlArZjZpQnE4V2NwOFZ1bmdVc21saWRVU2VDQ1BhVTdTcGdQbVZ1Y3JxODdNTEU4SUVQdC96L1g5blc0TXI1OUNHTkNUdGFvODIyTkRnMWdtZVBRblRSVm4vR1B6YmFkcjlMZUdRQlBycWZsY2Rsd1U0L3hsTjIrWWswSzRXaEdXYXVrNjJ3THVFTmMyWENlc0RlSGJmSmd3bnRBckF1dzE3N3Jmei84QU9EcDlLUzlQb1FSZ3ZRcGhNQk8vekpNS1pFZXJaZzdCQmM2K3Z4R2o3MFlKZlJWLzJFT2ZkekhWdEN3SHcyY0xQZkFtUDJTR0VZOEtFaVhnSnVQK204SEFIK3p6UXVBTHVTc0h2TXk0L1I1U1hSdVJmb0JuWW1HN3ZuMkNmSWFhclpZRHpPbXI2ODNXT0IweWlYUkJFSDRuNkVQZlhNQWEvdXpVZnFEQUV3ZEhXbzQ1REROY05Udmk5eHpNNFAyWUlFY2J1YVNIcWJPd1I2aFAxUG80MThPd2x6cnU5M0M1OXhMR2dCL3VGaVVnUG56Uk0zNW1nT3Y0andtOFRWdmtsLzRvRjNnaHRXQ0VNNXhkRjREOU83YnczQVZaZWRPVHBSRkswUkFYYmoxUk9qWkZPcVZ2TXFiZ1hmY1BtamhYQ2N6c3RBcS8rM0llWWtqZUkwYWJMMllreXlQQzdxUysySlBqOGtNL3VZK1drazQ4VFFvUyt4bmFOQy9pZDg1MndpV2xqQlcySTBZWnRBY3ZMTFBjaFRDNVluZklCOTZOeFRxN0U0SlQycmlFdVc0QnRHaW1PTVdqZnNjZ2ZBcXVoZUpEdSsvdU5PUCsya1B6aFFieENsRjJpN0tZQ2owcm5henltcDZSUWJ4bmI5dHlFdlJ2Q3hNakIxamdocG1DVDlBQjdzZXZsK0xrY3Jad3duUDBzOG9TZ3c1NGFwOWRRWCtuNUxEZWE2QXlzYnNJNnpkdFowdmR4R2ZvZ0tXKzAzS2c5Vk9WWXNjZFlHN0tWdzJ5b09KNnQwYjZnNGUzaStySkN3d202citkTjRoaUM3Wms4ZWVnanhQRW9sZDdHekxQWjBMK3ZhTTlKQWE2OVI5T3ZrdkRWUm1ZU0JBcC94WTRHck1FOWhCMGVKWWJycmxOT21FNnVOc0RwRUtEdXhmeitJUTV4SlJ2bDkrWXgwYzFITUU3bGo5aU1LaVNjSnJPRHFFanpHKzU5VnhaY2JaVDNMbTZkV1pQdHRKT0NvYkhCbGJDTlIxSkR5emFJOFlKL0dhR1lNTVdTRGU0WXpUMTAxNXczVnB3ek15RC9Rc0phY2Uydjg4UTkza2xqQnl0T3VRMFhhdnAvYjU5cit2bllYVjRnSE9mREEydVhCN0g5V05KVkd2dGpHME5kZ3l6M1J6MGZCOG43aEw0QitKeEYrTGRQUDdYMmNETG8xa0xQc3JqODBlM0ljNS8zSzhONVllbzZndkFIbjN0ZjVuN0d1b1NYKzdHTlIybGMvcmFvV0ZYT1Z6YVNYY0l0TGRVaGx5N0I1dkZQZzhiZ0ptUXlDUkllYzd5WS9vTEc1c2xYVWU1czlZUktQMHNNd2tiV2lySnpQYzVIcU1aRXcyOWIrZG96bFpQbXlJc1FUdkFnVDgrZmRKWDNaWTE5ZTQ2ZUNRTEo2eHQrRzhQYTUrUUFmUDZpbkl3dnQvcjBmVldoTU9QOUxlV0VsR0dGejk4TTUrenI3c2RDdzRzR2todjJEdVJwZ0EzcXI3SGJqSFNwcFhFSmdrZXVKakM5RUppMlBTZktnamhXVGhYSHlNUDJkWjY4TkNlTDR6L2txQjEvRXNjOVBjNzlvOGZ6NmFCNVJuNkVHTGFMQ2VNSjkvSFVORmQwaGpMbjZCc1UwZnh6dDhiV1dVRndYQnhhUlFSY2xLemlTM2o4alRMOGpoeUFQVXpNQzEzMnBUWGl0NGN0M0ZCdGphYUQzWmNxdkM0Mk1uQmVvdEhldkFhSUZHajlmT2I3U2xYZUZ1L1pQSGxoWUs5cDd6cGVwdXc2YnNMUTgrSzR0ZUc4L1Qzc2N4M1pIaFdWOE1XL0ljZlA1QWxET1RiZWVTZ0czeit5b05QUkpGWDk2UmFQWi91a1NjRHRFQXpjMUZ0Vnp2WVJsb2FxblRPc3dwQTZ3ZktOLzFJYzMrVnovbnVhNmRUTkh1Y1hhWXk5Qy9Qa29jc2Q1dC9PWVZzV2lmZXBudUdkTXkzK3g1UjFkUlVmaEdkb1RCbWdPUjVUOGpDRW1jbm5tdklPUE8ydDdnVHQvRTFOT1p5WUovdXBoNCtLRnd6bkQ0N1JtRjAxUXRPMmR4YlRzK2JDSmhQa2EvYUE1c3RmeDJNS0xFTVlWdWFSQnVlbXozTFlsdFZxWjg5dFhhVlBIMzZtNGZyYnFzRUFOQ1ZLdU1saUhiZUZyTHU2a1drNTRBVkI1cjgzYXpxektHSkRob3RyOGVXWmJQbG1iOU1JcmlEVDN2dkZNUndoQXoybTJlNitRMURvK2p4NTJGTHdyc2x4ZTc1eC9WMUhJK0J3ZkpUbU9vUlRMSzhHZzYrcnBneWhMWE10MXZGbnBROU03bFpEQk53OFEzbTdJQUx1Y2FIRjZiU3dJRlJITTNXODN2S053cnR5dENnYkUvQmFDQUxwZmVydmNiN2NPR1ZIQ2c4U1V6ekVEbDdMd25lQXFyeDdsSHltMjNQODhtMFhmU2JiZDdCQnE1dFJEUVplaWRKNzVHMXIxV1ZLSDE5M2tLb1pCUG1rMjlpOFFWQVB4alhpZUtnS0h4RStScnpjTUJ3L2IvbEc1Y29JVEUzREpGT1VHNU1jb3ZUSk1MY0tnUWJoWFQrRkI0bXNEY2hZQXNNMFFpRWUwMHlqTi9sb2RHbFRRNkhweWlVN3BwQ2M2ckNsMys1S2IzUDhJb0c2ZEJzVU5lRjNwaWJRSWsxWi9hQUM3bG1oVW1PS0ZpYjBBRitTbjRteXZnbG9iMmVKc3JEMlBhUVZrdDVXM1ZyWnRVSndRalBaUDRXSEtHUFoxbXMwUnpsNFd1WHdwY05hNDVhdTR3MnE4cnJIaG9acnY2b0dnODZVYm45VkFuWHBRcFJxOFRPb0NhUzcvOXBoWWxBR2FRUlVpNERYeXJDUVpjcC9TN3l3SkpkbFBhZWllZUNrRGU4aXpVdUNhVmVwS091UTBvUGNZZmpiTGFUZGRGZ09YenBvd0VVK0F0azBoUzZ1Qm9QT1pMWW9TcUF1RTg5dENkOWp2bXlzckh0ZnlzTUlPRVFSeXlqeSt3Tys1RExBODc0RXBnSVhpN0tvS3k4d05aSnU1MTlvenBzdmpudmt5WU9HNDhadG5HOGQ0a05rbTdvSDBNcldHcTV0VWcwRW5HbFAzNzBUcUt1Sm9YNDUwN0F0cEFwQ2xpZEZlMm5LdG9TTklwYkxuL29vYy9DbVNYdGJvK3d2YWJwT0hIOFpVME1jNGNNZk5Fc2NRNGpYelpPQk5VY2NuNTJqZHNnbFl6cEQrRkxEdGUycWdZRDdSdW1YeURWTm9LN09tcktWYW1jdmVybEI4TVFSUmlaTk8wM25GdVJZZTAzNWhyQUNEbXM1TjRYUTRqQzErNGtvdXpXQkc1UWExcFNZL0thcm5WTjV3MDRrVjBlOExOUi9UQkd1eXBPQkpaMDMxK2FnRFlkcWhOUXpoaW0xTGgxMTcyb2c0TllaQkxodHV5Z2NTWWRyeXVVS2tES0Q0S2tUczI0ZGJVNnhuMHNNR3R5NktPdkFaS0J2TDhQWEF5U1hVU0NOeWU4dDM5d0FucUs2YVpRRnZ0SVdOMHp6c2t3VVpUL1BrNEUxalFkWEJjRUJjbUhLYlpBZlBxd2YxQzBaMjZiUmhpdE1HMGRYQXlFMzAyQlNPZGRpSFRjcXZiZFdodHBzTUpnSlNtTFVmWUNIcVNRdE1xMkVlU09LZ0h0RVZUWmtQMkt3TTBqRGZ4S0RUR1lEd2JLdlpSYjRqbE03SjY3RWc1U2JSTXNOWUZvcTgzNm9hUksrMGpMbWNKTG1RNUFVd2JGeHZDanoybWYzY1k5blVOWHBBVVA1ZUJWdG9ia2tKRjNWYmZwZGJ1alhoUWFOTW1xWVV4K0RjRnVXVXYvQ0xHUmF6enMyYWdkTG05U1J5bG43NVNZWlhvRm80OWNzMzF3N3pkZm5Eb3Y4NVQzY3JyR3hqTkVJKzFaNU1MQ2tnRWJJd0lzcDFmMmtPSDdQb01sVWtDa0ZFdXdxVlgyNUVaU0JmeG1tZGpiMjRwMXVLSC9NTVBWL1ExTldyREhCQkNGTUM3dHJ5ditUWXYvQ1ZMU2JwaHpaZlQ0dGpNRlU3aEkvVW54VkxncnhCWTlLL2NYeGJCVnNyNEtnSkdQaXNKQzlpeWk3V2ZNaS9VTWw0M0FJNisyU29UM2RWRERQZHh4Q3pLU01vTC9ZNXhyMG55bXU4bWsyZzBTbCtjby9oMXpTWkhyM2tXTDh3Umg4NzFKNjR6cG9pS0hjRkZ3UHhTQ3NzK0ZSUS9rTEtmUnB4UWU3cTJlZmF6TDY5Z3FZWGZNRVRUYk54b2F0NnNMczJ2Tk93SXkreFpyc3BOMFR5RXk3V05ReFEzUE9pWnErK0lBM25MYmRudTJ1T3RZUTZ2cWN2MExUdGlFSlpmRWRyNm5ydHlFMmtkN2trYWsxYkp1eG85aDgxL1VqUExZTjFOSFBMUGZOT0k5N20wWm9Hb0lYc210UDhNbDg3SFg5VzRiclpvZG9neWxEN3laRDltalQrYzBpOU9XcHZJMmdpZTd4Mmphd1Y0aUszaFhYM2tLb3JhbndpQVFFM0xXV3R2M3p3eVdhKzJtdU9XK2s1cnpQQ1lkYmJNdDFndjgyVG9YdGRVM2JGRkp5MStGQkpXbHVTRDdIK2FTalhzUnB4L2YwRVd3UEc2NkhrTms5b0lEcm44TEgwazBiQ1hjUTl2RzR2aFVMK3E4OStPQ2oxeURpVm4rZ2hUNWJFYUo5b3p5dXZ6R2tRR3hRSG14cnp2MElGL09ldmw3MFQ3K2Q3ZUdSZUNtZ210aEZ6T2xYc1hIeFNERVhQakdFNmdsUFcyZGh4SnhxTUdRMmN4MGo1bXB5UXVyd2FtSHJnNTN0R3MxNVNHeW95N0k2aktjaTZ5TFczNEVkR25KNUd6eGlUWlYvekJGeWtrMHhUQ2RoV2xnUW8yK3dQRzYwcXB4NmVqNVBIOEtHQzF6T0JuZ3ZBaytFTE1Feit5MVByWnF4VGZaSW4ydmhtWjByekE2TE5lZVZzcm1qZHNqMlYwenpmcTRxQjRPWHNCMjZuWStEYUM2YmdGYTZISFlZRTRmNzFJMWxla2djR2lSQktFd0NWM2o4WHNwajhVTTJqY0RHM3Bad3JES3Ztc0J5S2RQYVY3eS91dVNjYjdHSlFoZFB0NFA3SDg4MnlEWUNNSjJkcXR3clNHSnFjTUJ6UGhKMXI1RDhnbWh3VjZTa3ZaazBpKzg4enAxbzZBZnNkRCthY0dpSWFVZy8zcWhaUjV0RGFzYnRDVjhaZUwzR0c1NFVoMmpiQU1JOGp3Mko0MjZhczlUeVJzSFlqUHVvRUZQVXVIU0t4LzFOU3FDK3FZUmRRL2J6Qkl2MVkycDZVSVFwclMwYXFLdlh4cG80ZUZSTmtmTHpWRElMaTRkNU9EaUNFQUtRRVlqNmZVREQvVmIreWxTNDBwRkpCWWsxWnhnY0g2VWFieTdxdklFQnJ5SzJobHZFWHJZdC9GVnN5QWI2RG14WU40VjE0RG9raWZ3a3hEMHY1SHVlcXRGeWptT3NZTU10dnR3Zjh4ZTVqTyszS1dzZVI3RkdibXJiU3lyK3lnbG9QZ2V6Sm1janRBajhlcXAwOTh6dzBsd3ZaVzNyRmd2MWJHV0h3cjBScnIyTUl3SGlKcDM5aUIwbVMzTGd3SG1IdGNOWmVyZGNaVHZhYVJHK3VFOFlwR3FmQ0x6bStmQTRYYU5ORllhczQ4d0lYNGp2eGZFYlBuVWM3Mk56aVVwakxXaWtZeEpvRjV3Zk55V2dQZmZYekRLQ0VyYVErNlVQLzNZSmFSUTlBMnJWVDhhbzQzbENDd3Q5akRHMk1rTDlaV3lQcXhXZ2pyc3M5dTFXMWxqUDhhdTNTRlhPNnhabDJjWW9qZTFwaVlxMlpNcXZQVEwwNFNFVlB0bGtsQXdMUlJyNzQwR3FjdEJ6QmIzS1dnaStMdGVyK0htNW9JWGNhY2tGRHkxeURtdkNuU3p3UTBiWjRTRTF5cUEwa1hFaTIvdTZjcithMWtCK3duYmg2UnptNDJlZjNNVFhGQ2c3U1VzcmtucXVEYWhWSTV3S0FmRzlXV3Z2b3N4QnQydllYanFUeDlaaVMzMDhoV2NqMEpaUDRUNDJKUVRZd3UyZXpNODlhS3IrNVd5ZjN4cXlMM2V3N1JxMlZpVEN3SHJtZndXdEYwNEdETVFmQzRQMmV4RTZDUVpaZDlhS0hzbzd1Tk5FTTRWVG9yTXcxdUpsNytjNjNqUEMxQVBMWkd6c1FOOU1CZHN0dmk1UEEvcnk0QXhLbTNpZ1BwVmdiTkhaM0orOVZMakkrazA4TU83VkdOT1RwaWJjajVqUzc4YURiaDBQb2x4TWsyd1M3Z21yWmhvckp4Z1lnM3c5djJjZnE4cHJ3Wk9nSW01RGN6YXQxT0kyck9IKy9icXFkT2IvM2EvS0NkakRqV0Fic2djaThqcVErZUNoWUMza2lJaDhJQ1FSaGQrSUI3Wk1yZFNJUFVBdGVJQkZTWXQwckV2ekN4czhXNHNIMUQwcS9GNmRJR3lEMTQwL0pLMVlZeTNtZHNCdXM1RTlhSyt6cHpDdGx3a3ZNNVpYbmFDY0hjTWFzUFpjd0czYndFTGtQZmJ5emE1S0wzcEdOWlArSjhBQURBUFh3R0VydkFVQUFBQUFTVVZPUks1Q1lJST0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBicmFuZDoge1xyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbk5hbWU6ICdNYWdvQ2xvdWQnLFxyXG4gICAgICAgICAgICBiYW5uZXJVcmw6ICdhc3NldHMvaW1hZ2VzL2xvZ29tYWdvY2xvdWQtd2hpdGUtMzEyLnBuZycsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBlbnY6IFRiQXV0aEVudmlyb25tZW50O1xyXG4gICAgbG9nZ2VkT3V0JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICBlcnJvck1lc3NhZ2UgPSAnJztcclxuICAgIG9rTWVzc2FnZSA9ICcnO1xyXG4gICAgdXNlRENTID0gZmFsc2U7XHJcblxyXG4gICAgbGFuZ0l0OiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gICAgZ2V0IHJvdXRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8Um91dGVyPihSb3V0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgQEluamVjdCgnZW52JykgZW52OiBUYkF1dGhFbnZpcm9ubWVudCxcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhclxyXG4gICAgKSB7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lbnYgPSBfLmRlZmF1bHRzRGVlcChlbnYsIFRiQXV0aFNlcnZpY2UuREVGQVVMVF9FTlYsIGVudik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RiQXV0aEVudmlyb25tZW50JywgdGhpcy5lbnYpO1xyXG4gICAgICAgIHRoaXMubGFuZ0l0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgY2hlY2tDb25uZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldCh0aGlzLmdldEJhc2VVcmwoKSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0KDUwMDApLFxyXG4gICAgICAgICAgICAgICAgbWFwKChfXykgPT4gdHJ1ZSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUml0b3JuYSBsYSBiYXNlIHVybCBkZWwgYmFja2VuZCxcclxuICAgICAqIGNhcmljYXRhIGRhIHVuIGZpbGUgZGkgY29uZmlndXJhemlvbmUgY2FyaWNhdG8gZGluYW1pY2FtZW50ZSAoYXNzZXRzL2Vudmlyb25tZW50Lmpzb24pXHJcbiAgICAgKi9cclxuICAgIGdldEJhc2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXJsO1xyXG4gICAgZ2V0U25hcHNob3RTZXJ2aWNlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnNuYXBzaG90U2VydmljZVVybDtcclxuICAgIGdldExvZ2luUGFnZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5sb2dpblBhZ2VVcmw7XHJcbiAgICBnZXRTdG9yZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5zdG9yZVVybDtcclxuICAgIC8qXHJcbntcclxuICB0eXBlOiBKV1QsXHJcbiAgYXBwaWQ6IE00LFxyXG4gIHNlY3VyaXR5VmFsdWU6IGp3dEVuY29kZWRcclxufVxyXG4qL1xyXG4gICAgLy8gbW9kaWZpY2EgcGVyIHVuaWZvcm1hcmUgbCBoZWFkZXIsbyBjaGUgYXJyaXZhIHVuIHBvIGNhcGl0YWxpenphdG8gdW4gcG8gbm8uIC8vcmlmOiBJbGFyaWEgZSBMdWNhXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGdldEF1dGhvcml6YXRpb25IZWFkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0eXBlOiAnSldUJyxcclxuICAgICAgICAgICAgYXBwSWQ6ICdNNCcsXHJcbiAgICAgICAgICAgIHNlY3VyaXR5VmFsdWU6IHRoaXMuZ2V0VG9rZW4oKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIHByZWxvZ2luKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KTogUHJvbWlzZTxMb2dpblJlc3BvbnNlPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZWxvZ2luLi4uJyk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxMb2dpblJlc3BvbnNlPih0aGlzLmdldFByZUxvZ2luVXJsKCksIGxvZ2luUmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBjYW1iaW8gcGFzc3dvcmQgZSBudW92byB0ZW50YXRpdm8gZGkgbG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZShjb2QuMTkpOiBDaGFuZ2UgUGFzc3dvcmQgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2VQYXNzd29yZERpYWxvZyhsb2dpblJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlIChjb2QuNCk6IEFjY291bnQgY29uZmlybWF0aW9uIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgYXR0aXZhcmUgbCdhY2NvdW50IGNoZSBub24gaGEgYW5jb3JhIGVmZmV0dHVhdG8gbGEgcHJvY2VkdXJhP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW52YWxpZERhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZSAoY29kLjQ2KTogJyArIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSB0aGlzLkxhbmdJVCgpID8gJ0NvZGljZSBub24gdmFsaWRvLicgOiAnSW52YWxpZCBjb2RlLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA1OCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlIChjb2QuNTgpOiBBY2NvdW50IExvY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gdGhpcy5nZXRMb2NrZWRVc2VyTWVzc2FnZShsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUHJlTG9naW4oY29kLjE0Myk6IG90cCBjb2RlIG5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTE2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2UgKGNvZC4xMTYpOiB1c2VyIGFscmVhZHkgbG9nZ2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHBlciAxNDMgKCBvdHBuZWVkZWQpIGUgMTE2IChhbHJlYWR5TG9nZ2VkKSlub24gbW9zdHJvIGVycm9yZSByb3NzbyBjaGUgc2VtYnJhIGdyYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgIT09IDE0MyAmJiBsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgIT09IDExNikgdGhpcy5lcnJvck1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2tNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGxvZ2luKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KTogUHJvbWlzZTxMb2dpblJlc3BvbnNlPiB7XHJcbiAgICAgICAgLy8nbG9naW4nKTtcclxuICAgICAgICBsZXQgaXNzdWUgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9naW4uLi4nKTtcclxuICAgICAgICBjb25zdCBsb2dpbnJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0TG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGNhbWJpbyBwYXNzd29yZCBlIG51b3ZvIHRlbnRhdGl2byBkaSBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDaGFuZ2UgUGFzc3dvcmQgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2VQYXNzd29yZERpYWxvZyhsb2dpblJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciByaWNoaWVzdGEgb3RwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4oY29kLjE0Myk6IG90cCBjb2RlIG5lZWRlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG8gY29zZSB0aXBvIG1vc3RyYXJlIHVuYSBtYXNjaGVyYSBjaGUgYWNjZXR0aSBpbCBjb2RpY2UgZSBsbyByaW1hbmRpIGluZGlldHJvIHBlciBpbCBjaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTE2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciByaWNoaWVzdGEgb3RwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IHVzZXIgYWxyZWFkeSBsb2dnZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvIGNvc2UgdGlwbyBtb3N0cmFyZSB1bmEgbWFzY2hlcmEgY2hlIGNoaWVkYSBzZSBzaSB2dW9sZSBjYW5jZWxsYXJlIGxhIHByZWNlZGVudGUgbG9naW4gcmltYW5kaSBpbmRpZXRybyBsYSByaXNwb3N0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBBY2NvdW50IGNvbmZpcm1hdGlvbiBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGF0dGl2YXJlIGwnYWNjb3VudCBjaGUgbm9uIGhhIGFuY29yYSBlZmZldHR1YXRvIGxhIHByb2NlZHVyYT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG8gYW1tZXR0byBjaGUgbGEgcGFzc3dvcmQgc2lhICBpbCBjb2RpY2U/IG1hIGluIHJlbGF0w6Agb2duaSBzaXRvIGxvIGZhIGluIGR1ZSBzdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2wgY2xpY2sgc3VsbCBtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA1OCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBBY2NvdW50IExvY2tlZCcgKyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gdGhpcy5nZXRMb2NrZWRVc2VyTWVzc2FnZShsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTQ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IFN1YnNjcmlwdGlvbiByZXF1aXJlcyAyRkEnICsgbG9naW5SZXNwb25zZS5NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IHRoaXMuZ2V0MkZBUmVxdWlyZWRNZXNzYWdlKGxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gTG9naW4gZmFpbHVyZSBmb3IgJyArIGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSArICcsIHJlc3VsdCBjb2RlICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5SZXN1bHRDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPyBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgOiAnTG9naW4gZXJyb3IuLi4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxNDMgfHwgbG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxMTYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7IC8vIG5vbiBtb3N0cm8gZXJyb3JlIHJvc3NvIGNoZSBzZW1icmEgZ3JhdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMub2tNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0TmFtZShsb2dpblJlc3BvbnNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IExvZ09mZiBkdWUgdG8gQWNjb3VudCBub3QgYWxsb3dlZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dvZmYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gJ0FjY291bnQgbm90IGFsbG93ZWQuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5Kd3RUb2tlbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPSA5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuUmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG5cclxuICAgICAgICBpZiAoaXNzdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5maXhJc3N1ZShsb2dpbnJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxvZ2lucmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBmaXhJc3N1ZShsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdCB0byBtYW5hZ2U6ICcgKyBsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZ2V0TG9ja2VkVXNlck1lc3NhZ2UobWVzc2FnZUZyb21Mb2dpbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFtZXNzYWdlRnJvbUxvZ2luKSByZXR1cm4gbWVzc2FnZUZyb21Mb2dpbjtcclxuICAgICAgICBjb25zdCBzZWNvbmRzOiBudW1iZXIgPSArbWVzc2FnZUZyb21Mb2dpbjtcclxuICAgICAgICBsZXQgbXNnID0gbWVzc2FnZUZyb21Mb2dpbjtcclxuICAgICAgICBpZiAoaXNOYU4oc2Vjb25kcykpIHJldHVybiBtc2c7XHJcbiAgICAgICAgaWYgKHNlY29uZHMgPCA2MCAmJiBzZWNvbmRzID4gLTEpIG1zZyA9IGBMb2dpbiBMb2NrZWQuIFBsZWFzZSB0cnkgYWdhaW4gaW4gJHtzZWNvbmRzfSBzZWNvbmRzLi4uYDtcclxuICAgICAgICBlbHNlIGlmIChzZWNvbmRzID49IDYwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pblZhbCA9IE1hdGgucm91bmQoc2Vjb25kcyAvIDYwKTtcclxuICAgICAgICAgICAgbXNnID1cclxuICAgICAgICAgICAgICAgIG1pblZhbCA9PT0gMSA/IGBMb2dpbiBMb2NrZWQuIFBsZWFzZSB0cnkgYWdhaW4gaW4gb25lIG1pbnV0ZS4uLmAgOiBgTG9naW4gTG9ja2VkLiBQbGVhc2UgdHJ5IGFnYWluIGluICR7bWluVmFsfSBtaW51dGVzLi4uYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGdldDJGQVJlcXVpcmVkTWVzc2FnZShkZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKVxyXG4gICAgICAgICAgICByZXR1cm4gYFF1ZXN0YSBzdWJzY3JpcHRpb24gJHtkZXNjcmlwdGlvbn0gcmljaGllZGUgbCdhdXRlbnRpY2F6aW9uZSBhIGR1ZSBmYXR0b3JpISBMZWdnaSBsYSBtYWlsIHBlciB1bHRlcmlvcmkgZGV0dGFnbGlgO1xyXG4gICAgICAgIHJldHVybiBgVGhpcyBTdWJzY3JpcHRpb24gJHtkZXNjcmlwdGlvbn0gcmVxdWlyZXMgdHdvIGZhY3RvciBhdXRlbnRpY2F0aW9uISBQbGVhc2UgcmVhZCB0aGUgRW1haWxzIGZvciBmdXJ0aGVyIGRldGFpbHMuYDtcclxuICAgIH1cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgb3BlblVwZGF0ZUFsZXJ0RGlhbG9nKFxyXG4gICAgICAgIGluZm86IHN0cmluZyxcclxuICAgICAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgICAgIGRvbnRzaG93OiBzdHJpbmcsXHJcbiAgICAgICAgYWNjb3VudE5hbWU6IHN0cmluZyxcclxuICAgICAgICBzdWJzY3JpcHRpb25LZXk6IHN0cmluZyxcclxuICAgICAgICBwcm9jZXNzaWQ6IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihBbGVydERpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBUaXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlOiBpbmZvLFxyXG4gICAgICAgICAgICAgICAgRG9udFNob3c6IGRvbnRzaG93LFxyXG4gICAgICAgICAgICAgICAgU3ViS2V5OiBzdWJzY3JpcHRpb25LZXksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5va01lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVkaXJlY3RFeHRlcm5hbCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gZXh0ZXJuYWwuJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uKGFjY291bnROYW1lLCBzdWJzY3JpcHRpb25LZXksIHByb2Nlc3NpZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbyBpbnRlcm5hbCEnKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgb3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgbGV0IHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgY29uc3Qgb3BSZXMgPSBhd2FpdCB0aGlzLmdldFN5bWJvbHNUb1Byb21pc2UoKTtcclxuICAgICAgICBjb25zdCBwc3dSdWxlc1N5bWJvbCA9IG9wUmVzLkNvbnRlbnQ7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VfMTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtZXNzYWdlXzI6IHN0cmluZztcclxuICAgICAgICBsZXQgbWVzc2FnZV8zOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VfNDogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtZXNzYWdlXzU6IHN0cmluZztcclxuICAgICAgICBsZXQgbWVzc2FnZV82OiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VfNzogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtZXNzYWdlXzg6IHN0cmluZztcclxuICAgICAgICBsZXQgbWVzc2FnZV85OiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VfMTA6IHN0cmluZztcclxuICAgICAgICBsZXQgbWVzc2FnZV8xMTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBwbGFjZUhvbGRlcl8xOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHBsYWNlSG9sZGVyXzI6IHN0cmluZztcclxuICAgICAgICBjb25zdCBjdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xyXG4gICAgICAgICAgICB0aXRsZSA9ICdNb2RpZmljYSBwYXNzd29yZCc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfMSA9ICdMYSBudW92YSBwYXNzd29yZCBkZXZlIGVzc2VyZSBjb21wb3N0YSBkYSBhbG1lbm8gJztcclxuICAgICAgICAgICAgbWVzc2FnZV8yID0gJzggY2FyYXR0ZXJpICc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfMyA9ICdlIGNvbnRlbmVyZSB0YXNzYXRpdmFtZW50ZSAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzQgPSAnMyBkaSBxdWVzdGUgNCBjb25kaXppb25pOic7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfNSA9ICdhdmVyZSBhbG1lbm8gJztcclxuICAgICAgICAgICAgbWVzc2FnZV82ID0gJ3VuYSBtYWl1c2NvbGEnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzcgPSAnYXZlcmUgJztcclxuICAgICAgICAgICAgbWVzc2FnZV84ID0gJ2NhcmF0dGVyaSBtaW51c2NvbGknO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzkgPSAnYWxtZW5vIHVuIG51bWVybyAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzEwID0gJyh0cmEgMCBlIDkpJztcclxuICAgICAgICAgICAgbWVzc2FnZV8xMSA9ICd1biBzaW1ib2xvIHRyYSBxdWVzdGkgYSBzZWd1aXJlICc7XHJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyXzEgPSAnUGFzc3dvcmQnO1xyXG4gICAgICAgICAgICBwbGFjZUhvbGRlcl8yID0gJ0NvbmZlcm1hIHBhc3N3b3JkJztcclxuICAgICAgICAgICAgLy90aGlzLm9rTWVzc2FnZSA9IFwiUGFzc3dvcmQgbW9kaWZpY2F0YSBjb24gc3VjY2Vzc28hXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGl0bGUgPSAnQ2hhbmdlIHBhc3N3b3JkJztcclxuICAgICAgICAgICAgbWVzc2FnZV8xID0gJ1RoZSBuZXcgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzIgPSAnOCBjaGFyYWN0ZXJzICc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfMyA9ICdhbmQgY29udGFpbiAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzQgPSAnMyBvZiB0aGVzZSA0IGNvbmRpdGlvbnM6JztcclxuICAgICAgICAgICAgbWVzc2FnZV81ID0gJ2hhdmUgYXQgbGVhc3QgJztcclxuICAgICAgICAgICAgbWVzc2FnZV82ID0gJ29uZSB1cHBlcmNhc2UnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzcgPSAnaGF2ZSAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzggPSAnbG93ZXJjYXNlIGNoYXJhY3RlcnMnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzkgPSAnYXQgbGVhc3Qgb25lIG51bWJlciAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzEwID0gJyhiZXR3ZWVuIDAgYW5kIDkpJztcclxuICAgICAgICAgICAgbWVzc2FnZV8xMSA9ICdvbmUgc3ltYm9sIGFtb25nIHRoZXNlIHRvIGZvbGxvdyAnO1xyXG4gICAgICAgICAgICBwbGFjZUhvbGRlcl8xID0gJ1Bhc3N3b3JkJztcclxuICAgICAgICAgICAgcGxhY2VIb2xkZXJfMiA9ICdDb25maXJtIHBhc3N3b3JkJztcclxuICAgICAgICAgICAgLy90aGlzLm9rTWVzc2FnZSA9IFwiUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNmdWxseSFcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaWFsb2cub3BlbihDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBUaXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzE6IG1lc3NhZ2VfMSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfMjogbWVzc2FnZV8yLFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZV8zOiBtZXNzYWdlXzMsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzQ6IG1lc3NhZ2VfNCxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfNTogbWVzc2FnZV81LFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZV82OiBtZXNzYWdlXzYsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzc6IG1lc3NhZ2VfNyxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfODogbWVzc2FnZV84LFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZV85OiBtZXNzYWdlXzksXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzEwOiBtZXNzYWdlXzEwLFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZV8xMTogbWVzc2FnZV8xMSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfMTI6IHBzd1J1bGVzU3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VIb2xkZXJfMTogcGxhY2VIb2xkZXJfMSxcclxuICAgICAgICAgICAgICAgIFBsYWNlSG9sZGVyXzI6IHBsYWNlSG9sZGVyXzIsXHJcbiAgICAgICAgICAgICAgICBMb2dpblJlcXVlc3Q6IGxvZ2luUmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIEN1cnJlbnRCcm93c2VyTGFuZ3VhZ2U6IGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaXNWYWxpZFRva2VuKGF1dGh0b2tlbiA9ICcnKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIWF1dGh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCBvcHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgb3ByZXMuTWVzc2FnZSA9ICdObyBhdXRodG9rZW4nO1xyXG4gICAgICAgICAgICByZXR1cm4gb3ByZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRJc1ZhbGlkVG9rZW5VcmwoKSwgbmV3IElzVmFsaWRUb2tlblJlcXVlc3QoYXV0aHRva2VuKSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAoKGpPYmo6IE9wZXJhdGlvblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4gLSByZXNwb25zZScsIGpPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghak9iai5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgak9iai5NZXNzYWdlID0gak9iai5NZXNzYWdlID8gak9iai5NZXNzYWdlIDogJ2lzVmFsaWRUb2tlbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gVG9rZW4gVmFsaWRhdGlvbiBmYWlsdXJlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbjogJyArIGF1dGh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gak9iai5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2NjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwuaW5jbHVkZXModGhpcy5nZXRMb2dpblBhZ2VVcmwoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0U3Vic0tleXNGb3JBY2NvdW50VXJsKCkgKyB1c2VyKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5Db250ZW50ICYmIHJlcy5Db250ZW50LnN1YnNjcmlwdGlvbnMgPyByZXMuQ29udGVudC5zdWJzY3JpcHRpb25zIDogW107XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXNWYWxpZFRva2VuVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdpc3ZhbGlkdG9rZW4vJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9naW5VcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ2luLyc7XHJcbiAgICB9XHJcbiAgICBnZXRQcmVMb2dpblVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9nb3V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dvZmYvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2hhbmdlUGFzc3dvcmRBcGlVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKSArICdjaGFuZ2VwYXNzd29yZC8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNlbmRPVFBVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3Jlc2VuZG90cF92My8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBPTERyZXNlbmRPVFBVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3Jlc2VuZG90cC8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXNldFBhc3N3b3JkVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENoYW5nZVBhc3N3b3JkVXJsKCkgKyAncmVzZXRwYXNzd29yZC8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdWJzS2V5c0ZvckFjY291bnRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3N1YnNjcmlwdGlvbnNrZXlzZm9yYWNjb3VudC8nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qYXN5bmMgc2VuZE9UUChjcGk6IE9UUEluZm8pOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgIGNvbnN0IGJvZHlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjcGkpO1xyXG4gICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYWxpZ25cclxuICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5sb2dpbigpLCBib2R5U3RyaW5nLCB7IGhlYWRlcnMgfSlcclxuICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXMuTWVzc2FnZSArICcgKENvZGU6JyArIHJlcy5Db2RlICsgJyknO1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjY2O1xyXG4gICAgICAgICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgICAgKVxyXG4gICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiB9Ki9cclxuXHJcbiAgICBhc3luYyBjaGFuZ2VQYXNzd29yZChjcGk6IENoYW5nZVBhc3N3b3JkSW5mbyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgY29uc3QgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNwaSk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldENoYW5nZVBhc3N3b3JkQXBpVXJsKCksIGJvZHlTdHJpbmcsIHsgaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlcy5NZXNzYWdlICsgJyAoQ29kZTonICsgcmVzLkNvZGUgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBMYW5nSVQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFuZ0l0ICE9IG51bGwpIHRoaXMubGFuZ0l0ID0gbmF2aWdhdG9yLmxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ0l0O1xyXG4gICAgfVxyXG5cclxuICAgIE9MRHJlc2VuZE9UUChhY2NuYW1lOiBzdHJpbmcsIGFsdGVybmF0aXZlOiBib29sZWFuKTogT2JzZXJ2YWJsZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuXHJcbiAgICAgICAgbGV0IHdhcm5pbmcgPSB0aGlzLkxhbmdJVCgpID8gJ0F0dGVuemlvbmUnIDogJ1dhcm5pbmcnO1xyXG4gICAgICAgIGxldCBzdWNjZXNzTWVzc2FnZSA9IHRoaXMuTGFuZ0lUKCkgPyAnT3RwIGludmlhdG8nIDogJ090cCBzZW50JztcclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdPdHAgbm9uIGludmlhdG8nIDogJ090cCBub3Qgc2VudCc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuT0xEcmVzZW5kT1RQVXJsKCkgKyBhY2NuYW1lICsgJy8nICsgYWx0ZXJuYXRpdmUsIHsgaGVhZGVycyB9KS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TbmFja0JhcihgJHt3YXJuaW5nfTogJHtyZXMuTWVzc2FnZX1gLCAnT0snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TbmFja0JhcihzdWNjZXNzTWVzc2FnZSwgJ09LJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmVzLk1lc3NhZ2UgPSBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9Llxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2Njk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5TbmFja0JhcihgJHt3YXJuaW5nfTogJHtlcnJvci5tZXNzYWdlfWAsICdPSycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNlbmRPVFAyKGFjY25hbWU6IHN0cmluZywgcHJvY2Vzc0lEOiBzdHJpbmcsIGFsdGVybmF0aXZlOiBudW1iZXIpOiBPYnNlcnZhYmxlPE9wZXJhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG5cclxuICAgICAgICBsZXQgd2FybmluZyA9IHRoaXMuTGFuZ0lUKCkgPyAnQXR0ZW56aW9uZScgOiAnV2FybmluZyc7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3NNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgIHN3aXRjaCAoYWx0ZXJuYXRpdmUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2UgPSB0aGlzLkxhbmdJVCgpID8gJ1NtcyBpbnZpYXRvJyA6ICdTbXMgc2VudCc7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSB0aGlzLkxhbmdJVCgpID8gJ1NtcyBub24gaW52aWF0bycgOiAnU21zIG5vdCBzZW50JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzTWVzc2FnZSA9IHRoaXMuTGFuZ0lUKCkgPyAnRS1tYWlsIGludmlhdGEnIDogJ0UtbWFpbCBzZW50JztcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHRoaXMuTGFuZ0lUKCkgPyAnRS1tYWlsIG5vbiBpbnZpYXRhJyA6ICdFLW1haWwgbm90IHNlbnQnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzTWVzc2FnZSA9IHRoaXMuTGFuZ0lUKCkgPyAnT3RwIGludmlhdG8nIDogJ090cCBzZW50JztcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHRoaXMuTGFuZ0lUKCkgPyAnT3RwIG5vbiBpbnZpYXRvJyA6ICdPdHAgbm90IHNlbnQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLnJlc2VuZE9UUFVybCgpICsgYWNjbmFtZSArICcvJyArIHByb2Nlc3NJRCArICcvJyArIGFsdGVybmF0aXZlLCB7IGhlYWRlcnMgfSkucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoYCR7d2FybmluZ306ICR7cmVzLk1lc3NhZ2V9YCwgJ09LJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYWx0ZXJuYXRpdmUgIT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TbmFja0JhcihzdWNjZXNzTWVzc2FnZSwgJ09LJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmVzLk1lc3NhZ2UgPSBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9Llxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2Njk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5TbmFja0JhcihgJHt3YXJuaW5nfTogJHtlcnJvci5tZXNzYWdlfWAsICdPSycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZXNldHBhc3N3b3JkKGFjY25hbWU6IHN0cmluZyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldFJlc2V0UGFzc3dvcmRVcmwoKSArIGFjY25hbWUsIHsgaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjYzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuTWVzc2FnZSA9IGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsLmluY2x1ZGVzKHRoaXMuZ2V0TG9naW5QYWdlVXJsKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGxvZ29mZigpIHtcclxuICAgICAgICBjb25zdCBsb2dvZmZSZXF1ZXN0OiBMb2dvZmZSZXF1ZXN0ID0gbmV3IExvZ29mZlJlcXVlc3QodGhpcy5nZXRUb2tlbigpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxMb2dvZmZSZXNwb25zZT4odGhpcy5nZXRMb2dvdXRVcmwoKSwgbG9nb2ZmUmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKGxvZ29mZlJlc3BvbnNlOiBMb2dvZmZSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2dvZmZSZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBMb2dvZmYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRPdXQkLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dvZmZSZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dvZmZXaXRoRmV0Y2goKSB7XHJcbiAgICAgICAgY29uc3QgbG9nb2ZmUmVxdWVzdDogTG9nb2ZmUmVxdWVzdCA9IG5ldyBMb2dvZmZSZXF1ZXN0KHRoaXMuZ2V0VG9rZW4oKSk7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBKU09OLnN0cmluZ2lmeShsb2dvZmZSZXF1ZXN0KTtcclxuICAgICAgICBsZXQgbG9nb3V0ID0gZmV0Y2godGhpcy5nZXRMb2dvdXRVcmwoKSwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogcmVxdWVzdCxcclxuICAgICAgICAgICAga2VlcGFsaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdGhpcy5nZXRBdXRob3JpemF0aW9uSGVhZGVyKCksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9nb3V0LnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuYXZpZ2F0ZVVzZXJHYXRld2F5KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbnRlcmluZyBuYXZpZ2F0ZVVzZXJHYXRld2F5Li4nKTtcclxuICAgICAgICBjb25zdCB1c2VyR2F0ZXdheVVybCA9IHRoaXMuZ2V0VXNlckdhdGV3YXlVcmwoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlcmdhdGV3YXkgdXJsIGV4aXN0cywgdGhlbiByZWRpcmVjdCB0byBpdFxyXG4gICAgICAgIGlmICh1c2VyR2F0ZXdheVVybCAhPT0gJycpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEZvdW5kIGdldFVzZXJHYXRld2F5VXJsICR7dXNlckdhdGV3YXlVcmx9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IHRoaXMuZXJyb3JNZXNzYWdlID8gYCR7dXNlckdhdGV3YXlVcmx9bG9naW4/ZXJyb3I9XCIke3RoaXMuZXJyb3JNZXNzYWdlfVwiYCA6IHVzZXJHYXRld2F5VXJsO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvdGhlcndpc2UsIHJlZGlyZWN0IHRvIGxvZ2luXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1JlZGlyZWN0aW5nIHRvIGxvZ2luIHBhZ2UuLicpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSwge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyBlcnJvcjogdGhpcy5lcnJvck1lc3NhZ2UgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24oYWNjb3VudE5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcsIHByb2Nlc3NpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZXNNYXBGb3JVc2VyKGFjY291bnROYW1lKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcDogQXJyYXk8eyBTdWJzY3JpcHRpb25LZXk6IHN0cmluZzsgRGVzY3JpcHRpb246IHN0cmluZzsgSW5zdGFuY2VLZXk6IHN0cmluZyB9PiA9IHJlcyBhcyBBcnJheTx7XHJcbiAgICAgICAgICAgICAgICAgICAgU3Vic2NyaXB0aW9uS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICBJbnN0YW5jZUtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgfT47XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1hcCB8fCBtYXAubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnN0YW5jZU1hcCBpcyBpbnZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SW5zdGFuY2VLZXk6IHN0cmluZyA9IG1hcC5maWx0ZXIoKGspID0+IGsuU3Vic2NyaXB0aW9uS2V5ID09PSBzdWJzY3JpcHRpb25LZXkpLm1hcCgoaikgPT4gai5JbnN0YW5jZUtleSlbMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNuYXBzaG90KGN1cnJlbnRJbnN0YW5jZUtleSwgc3Vic2NyaXB0aW9uS2V5KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCByZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ3NuYXBzaG90IGlzIGVtcHR5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgbm93IHRoZSBzbmFwc2hvdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlczogQXJyYXk8eyBTZXJ2aWNlVHlwZTogc3RyaW5nOyBVcmw6IHN0cmluZzsgUHJvZHVjdFZlcnNpb246IHN0cmluZzsgUG9ydDogbnVtYmVyIH0+ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5TZXJ2aWNlcyBhcyBBcnJheTx7IFNlcnZpY2VUeXBlOiBzdHJpbmc7IFVybDogc3RyaW5nOyBQcm9kdWN0VmVyc2lvbjogc3RyaW5nOyBQb3J0OiBudW1iZXIgfT47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvIGlsYSBpbnRlcnZpZW5pIHF1aSBwZXIgYXBwaWQgcGVyc29uYWxpenphdGUgY29tZSBkY3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZGlyZWN0VXJsID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VEQ1MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gc2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChpKSA9PiBpLlNlcnZpY2VUeXBlID09PSAnTTRGUk9OVEVORCcgfHwgaS5TZXJ2aWNlVHlwZSA9PT0gJ0FQUF9GUk9OVEVORCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZikgPT4gZi5VcmwpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSBzZXJ2aWNlcy5maWx0ZXIoKGkpID0+IGkuU2VydmljZVR5cGUgPT09ICdEQ1NfRlJPTlRFTkQnKS5tYXAoKGYpID0+IGYuVXJsKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzaWduYXRlZCByZWRpcmVjdCBpcyAke3JlZGlyZWN0VXJsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlUmVkaXJlY3RVcmwgPSBgJHtyZWRpcmVjdFVybH0/and0PSR7cHJvY2Vzc2lkfSZzdWJLZXk9JHtzdWJzY3JpcHRpb25LZXl9Jmluc3RhbmNlS2V5PSR7Y3VycmVudEluc3RhbmNlS2V5fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzaWduYXRlZCBmaW5hbCByZWRpcmVjdCBpcyAke2Jhc2VSZWRpcmVjdFVybH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVTRVJfR0FURVdBWV9BVVRPUkVESVJFQ1QsIGJhc2VSZWRpcmVjdFVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCwgYmFzZVJlZGlyZWN0VXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBiYXNlUmVkaXJlY3RVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzbmFwc2hvdCBjYW5ub3QgYmUgb2J0YWluZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzbmFwc2hvdCBjYW5ub3QgYmUgb2J0YWluZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24gaWEgYWJvdXQgdG8gZmFpbC4uLicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0SW5zdGFuY2VzTWFwRm9yVXNlciBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0SW5zdGFuY2VzTWFwRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0SW5zdGFuY2VzTWFwRm9yQWNjb3VudFVybCgpICsgdXNlcikucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuQ29udGVudDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRDYWxlbmRhcihzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmdldENhbGVuZGFyVXJsKCk7XHJcbiAgICAgICAgaWYgKCF1cmwgfHwgdXJsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXVwdXJsIGlzIG5vdCB1c2VkLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQ8T3BlcmF0aW9uUmVzdWx0PihgJHt0aGlzLmdldENhbGVuZGFyVXJsKCl9P1N1YnNjcmlwdGlvbktleT0ke3N1YnNjcmlwdGlvbktleX1gIC8qLCB7IGhlYWRlcnMgfSovKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlcy5NZXNzYWdlICsgJyAoQ29kZTonICsgcmVzLkNvZGUgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U25hcHNob3QoaW5zdGFuY2VLZXk6IHN0cmluZywgc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0U25hcHNob3RTZXJ2aWNlVXJsKCkgKyBpbnN0YW5jZUtleSArICc/c3Vic2NyaXB0aW9uS2V5PScgKyBzdWJzY3JpcHRpb25LZXkpLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLkNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5zdGFuY2VzTWFwRm9yQWNjb3VudFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnaW5zdGFuY2VzTWFwLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENhbGVuZGFyVXJsKCkge1xyXG4gICAgICAgIHZhciBpdXB1cmwgPSB0aGlzLmdldEl1cFVybCgpO1xyXG4gICAgICAgIGlmICghaXVwdXJsIHx8IGl1cHVybC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBpdXB1cmwgKyAnY2FsZW5kYXJqb2JzLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFVwZGF0ZU1lc3NhZ2UoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKSByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0lUKCkgPz8gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnZGUnKSkgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9ERSgpID8/IHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9FTigpO1xyXG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ3B0JykpIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfQlIoKSA/PyB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcclxuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdiZycpKSByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0JHKCkgPz8gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnZXMnKSkgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9FUygpID8/IHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9FTigpO1xyXG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ3BsJykpIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfUEwoKSA/PyB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcclxuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdybycpKSByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX1JPKCkgPz8gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyU3RvcmFnZSgpIHtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUyk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5MSyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5VU0VSX0dBVEVXQVlfQVVUT1JFRElSRUNUKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5MSyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmFnZVN1YnNjcmlwdGlvbkRhdGEoc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcsIHN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9yYWdlUXVlcnlQYXJhbXMoc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcsIGluc3RhbmNlS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0SW5zdGFuY2VLZXkoaW5zdGFuY2VLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmFtZShsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2UuQXNraW5nUHJvY2VzcyA9PT0gdGhpcy5nZXRBcHBJZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcmFnZURhdGEobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BDdWx0dXJlOiBzdHJpbmcgPVxyXG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgIDogbG9naW5SZXNwb25zZS5SZWdpb25hbFNldHRpbmdzO1xyXG4gICAgICAgIGNvbnN0IHJlc3BVaUN1bHR1cmU6IHN0cmluZyA9XHJcbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2UgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLkxhbmd1YWdlLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5MSywgbG9naW5SZXNwb25zZS5Mb2dpbktleSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgcmVzcEN1bHR1cmUpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHJlc3BVaUN1bHR1cmUpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMsIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UuUm9sZXMpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgbG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYylcclxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCwgbG9naW5SZXNwb25zZS5Kd3RUb2tlbik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkxLLCBsb2dpblJlc3BvbnNlLkxvZ2luS2V5KTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgcmVzcEN1bHR1cmUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCByZXNwVWlDdWx0dXJlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgbG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgbG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25EZXNjKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhc3luYyBnZXRTeW1ib2xzVG9Qcm9taXNlKCk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldFN5bWJvbHNVcmwoKSwgeyBoZWFkZXJzIH0pLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHVibGljIGdldFN5bWJvbHNVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKSArICdnZXRzeW1ib2xzLyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUN1bHR1cmUoY3VsdHVyZTogc3RyaW5nLCB1aUN1bHR1cmU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgdWlDdWx0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblNuYWNrQmFyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCB7IGR1cmF0aW9uOiA1MDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9naW5LZXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkxLKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5MSyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVkaXJlY3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlVTRVJfR0FURVdBWV9BVVRPUkVESVJFQ1QpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlVTRVJfR0FURVdBWV9BVVRPUkVESVJFQ1QpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjY291bnROYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX05BTUUpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Vic2NyaXB0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Vic2NyaXB0aW9uRGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTik7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdWx0dXJlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVSUN1bHR1cmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlS2V5KCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5JTlNUQU5DRUtFWSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSU5TVEFOQ0VLRVkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEluc3RhbmNlS2V5KGluc3RhbmNlS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5JTlNUQU5DRUtFWSwgaW5zdGFuY2VLZXkpO1xyXG4gICAgICAgIGVsc2UgbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSU5TVEFOQ0VLRVkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF1dGhTZXJ2aWNlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVybDtcclxuICAgIGdldEl1cFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5pdXB1cmw7IC8vaHR0cDovL2xvY2FsaG9zdDo1MjE3Mi9hcGkvXHJcbiAgICBnZXRSZWRpcmVjdFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5yZWRpcmVjdFVybDtcclxuICAgIGdldElmSXNNYWdvV2ViID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5pc01hZ29XZWI7XHJcbiAgICBnZXRSZWRpcmVjdElmTm90QXV0aGVudGljYXRlZCA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGgucmVkaXJlY3RJZk5vdEF1dGhlbnRpY2F0ZWQ7XHJcbiAgICBnZXRVc2VyR2F0ZXdheVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51c2VyR2F0ZXdheVVybDtcclxuICAgIGdldENyZWF0ZUFjY291bnRVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguY3JlYXRlQWNjb3VudFVybDtcclxuICAgIGdldENoYW5nZVBhc3N3b3JkVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmNoYW5nZVBhc3N3b3JkVXJsO1xyXG4gICAgaGFzU3Vic2NyaXB0aW9uU2VsZWN0aW9uID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zdWJzY3JpcHRpb25TZWxlY3Rpb247XHJcbiAgICBzaG93U2lnblVwID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zaG93U2lnblVwO1xyXG4gICAgZ2V0QXBwSWQgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VEQ1MgPyAnRENTJyA6IHRoaXMuZW52LmF1dGguYXBwSWQ7XHJcbiAgICB9O1xyXG4gICAgZ2V0UHJlTG9naW5BcHBJZCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5wcmVMb2dpbkFwcElkO1xyXG4gICAgaXNTZXNzaW9uU3RvcmFnZSA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2U7XHJcbiAgICBnZXRMb2dvVVJMID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmxvZ29VUkw7XHJcbiAgICBnZXRCYWNrZ3JvdW5kVVJMID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmJhY2tncm91bmRVUkw7XHJcbiAgICBnZXRCcmFuZE5hbWUgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmJyYW5kLmFwcGxpY2F0aW9uTmFtZTtcclxuICAgIGlzUmVkaXJlY3RFeHRlcm5hbCA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguaXNSZWRpcmVjdEV4dGVybmFsO1xyXG4gICAgZ2V0VXBkYXRlTWVzc2FnZV9JVCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlX0lUO1xyXG4gICAgZ2V0VXBkYXRlTWVzc2FnZV9FTiA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlX0VOO1xyXG4gICAgZ2V0VXBkYXRlTWVzc2FnZV9CUiA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlX0JSO1xyXG4gICAgZ2V0VXBkYXRlTWVzc2FnZV9CRyA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlX0JHO1xyXG4gICAgZ2V0VXBkYXRlTWVzc2FnZV9STyA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlX1JPO1xyXG4gICAgZ2V0VXBkYXRlTWVzc2FnZV9ERSA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlX0RFO1xyXG4gICAgZ2V0VXBkYXRlTWVzc2FnZV9FUyA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlX0VTO1xyXG4gICAgZ2V0VXBkYXRlTWVzc2FnZV9QTCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlX1BMO1xyXG59XHJcbiJdfQ==