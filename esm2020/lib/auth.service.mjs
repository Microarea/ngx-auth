import { Injectable, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash';
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
    get router() {
        return this.injector.get(Router);
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
            console.log(`${userGatewayUrl}login?error="${this.errorMessage}"`);
            document.location.href = `${userGatewayUrl}login?error="${this.errorMessage}"`;
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
}
TbAuthService.DEFAULT_ENV = {
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
};
/** @nocollapse */ TbAuthService.ɵfac = function TbAuthService_Factory(t) { return new (t || TbAuthService)(i0.ɵɵinject('env'), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i2.MatDialog), i0.ɵɵinject(i3.MatSnackBar)); };
/** @nocollapse */ TbAuthService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: TbAuthService, factory: TbAuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }, { type: i1.HttpClient }, { type: i0.Injector }, { type: i2.MatDialog }, { type: i3.MatSnackBar }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQWlDLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBSW5GLElBQUksbUJBQWtDLENBQUM7QUFDdkMsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0FBSXJELDhFQUE4RTtBQUM5RSxNQUFNLE9BQU8sYUFBYTtJQXFEdEIsOEVBQThFO0lBQzlFLFlBQ21CLEdBQXNCLEVBQzdCLElBQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLE1BQWlCLEVBQ2pC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R0F2RFIsYUFBYSxXQUFiLGFBQWEsbUJBSFYsTUFBTTt1RkFHVCxhQUFhO2NBSnpCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7c0JBeURRLE1BQU07dUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgbWFwLCBjYXRjaEVycm9yLCB0aW1lb3V0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdG9yYWdlVmFycyB9IGZyb20gJy4vbW9kZWxzL3N0b3JhZ2UtdmFycyc7XG5cbmltcG9ydCB7IExvZ2luUmVxdWVzdCwgQ2hhbmdlUGFzc3dvcmRJbmZvIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xuaW1wb3J0IHsgTG9nb2ZmUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ29mZi1yZXF1ZXN0JztcbmltcG9ydCB7IExvZ29mZlJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9nb2ZmLXJlc3BvbnNlJztcbmltcG9ydCB7IElzVmFsaWRUb2tlblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9pcy12YWxpZC10b2tlbi1yZXF1ZXN0JztcbmltcG9ydCB7IE9wZXJhdGlvblJlc3VsdCB9IGZyb20gJy4vbW9kZWxzL29wZXJhdGlvbi1yZXN1bHQnO1xuaW1wb3J0IHsgVGJBdXRoRW52aXJvbm1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRoLWVudmlyb25tZW50JztcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG5sZXQgYXV0aFNlcnZpY2VJbnN0YW5jZTogVGJBdXRoU2VydmljZTtcbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9ICgpID0+IGF1dGhTZXJ2aWNlSW5zdGFuY2U7XG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNsYXNzIFRiQXV0aFNlcnZpY2Uge1xuICAgIHByaXZhdGUgc3RhdGljIERFRkFVTFRfRU5WOiBUYkF1dGhFbnZpcm9ubWVudCA9IHtcbiAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDoxMDM0NC9hcGkvJyxcbiAgICAgICAgICAgIHN0b3JlVXJsOiAnaHR0cHM6Ly90ZXN0LXN0b3JlLm1hZ28uY2xvdWQnLFxuICAgICAgICAgICAgaXVwdXJsOiAnJyxcbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRVcmw6ICdodHRwOi8vbG9jYWxob3N0OjQyMDAnLFxuICAgICAgICAgICAgY2hhbmdlUGFzc3dvcmRVcmw6ICdodHRwOi8vbG9jYWxob3N0OjU2MzkyL2FwaS8nLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dTaWduVXA6IGZhbHNlLFxuICAgICAgICAgICAgYXBwSWQ6ICdNNCcsXG4gICAgICAgICAgICBwcmVMb2dpbkFwcElkOiAnTUNsb3VkUHJlTG9naW4nLFxuICAgICAgICAgICAgcmVkaXJlY3RVcmw6ICcvJyxcbiAgICAgICAgICAgIHJlZGlyZWN0SWZOb3RBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHVzZXJHYXRld2F5VXJsOiAnJyxcbiAgICAgICAgICAgIGlzUmVkaXJlY3RFeHRlcm5hbDogdHJ1ZSxcbiAgICAgICAgICAgIGxvZ2luUGFnZVVybDogJ2xvZ2luJyxcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlOiBmYWxzZSxcbiAgICAgICAgICAgIHNuYXBzaG90U2VydmljZVVybDogJycsXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgdXBkYXRlbWVzc2FnZV9JVDpcbiAgICAgICAgICAgICAgICBcIlNvbm8gcHJldmlzdGUgYXR0aXZpdMOgIGRpIG1hbnV0ZW56aW9uZSBlZCBhZ2dpb3JuYW1lbnRvLCBwZXIgcXVlc3RvIHN1bGxhIHR1YSBzdWJzY3JpcHRpb24gQEBzdWIgcG90cmViYmVybyB2ZXJpZmljYXJzaSBicmV2aSBkaXNzZXJ2aXppIGlsIDxiPiBAQGRhdGU8L2I+LCBkYWxsZSBvcmUgPGI+IEBAc3RhcnRoPC9iPiBhbGxlIG9yZSA8Yj4gQEBlbmRoPC9iPi48L2JyPkF0dGVuemlvbmUsIHBlciBjb25zZW50aXJlIGlsIGNvcnJldHRvIHN2b2xnaW1lbnRvIGRlbGwnYWdnaW9ybmFtZW50byBsZSBwcm9jZWR1cmUgY2hlIGR1cmFudGUgbG8gc3Rlc3NvIHJpc3VsdGVyYW5ubyBhbmNvcmEgaW4gZXNlY3V6aW9uZSBzYXJhbm5vIGludGVycm90dGUuXCIsXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgdXBkYXRlbWVzc2FnZV9FTjpcbiAgICAgICAgICAgICAgICAnRHVlIHRvIHN5c3RlbSBtYWludGVuYW5jZSBhbmQgdXBkYXRlcyB0aGVyZSBtaWdodCBiZSBkaXN0dXJiYW5jZSBpbiB5b3VyIHN1YnNjcmlwdGlvbiBAQHN1YiBvbiB0aGUgPGI+IEBAZGF0ZSwgYmV0d2VlbiA8Yj4gQEBzdGFydGggYW5kIDxiPiBAQGVuZGg8L2I+LjwvYnI+ICcsXG4gICAgICAgICAgICB1cGRhdGVtZXNzYWdlX0RFOiAnJyxcbiAgICAgICAgICAgIHVwZGF0ZW1lc3NhZ2VfQlI6ICcnLFxuICAgICAgICAgICAgdXBkYXRlbWVzc2FnZV9FUzogJycsXG4gICAgICAgICAgICB1cGRhdGVtZXNzYWdlX0JHOiAnJyxcbiAgICAgICAgICAgIHVwZGF0ZW1lc3NhZ2VfUk86ICcnLFxuICAgICAgICAgICAgdXBkYXRlbWVzc2FnZV9QTDogJycsXG4gICAgICAgICAgICBsb2dvVVJMOiAnaHR0cHM6Ly9tYWdvY2xvdWQtc3RvcmUtcGRmLnMzLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2xvZ2luLWxvZ28ucG5nJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRVUkw6ICdodHRwczovL21hZ29jbG91ZC1zdG9yZS1wZGYuczMuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vbG9naW4tYmcucG5nJyxcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICAvLyAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFUZ0FBQUEyQ0FZQUFBQlRBb1d1QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5VnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFE0SURjNUxqRTJOREF6Tml3Z01qQXhPUzh3T0M4eE15MHdNVG93TmpvMU55QWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lESXhMakFnS0UxaFkybHVkRzl6YUNraUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlJUYzBPRUpFTURjd05EbEJNVEZGUVRsRE56VkRORFJHTmtNelEwRXdSRFVpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UlRjME9FSkVNRGd3TkRsQk1URkZRVGxETnpWRE5EUkdOa016UTBFd1JEVWlQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBGTnpRNFFrUXdOVEEwT1VFeE1VVkJPVU0zTlVNME5FWTJRek5EUVRCRU5TSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEZOelE0UWtRd05qQTBPVUV4TVVWQk9VTTNOVU0wTkVZMlF6TkRRVEJFTlNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BsM2U0RHdBQUJVQVNVUkJWSGphN0YwSmxCYkZFZTVkZGhIbE1xd29JZ2dLS2lMSTRZa2dScU9nSW9vM25pQWVNUW94S3NZb2g2SVJpUkVVanhnSkNwSm84SXFBa2FBUU5NR1k0QUVvS0lxdUFnb1JSVG5rV0JEWTFKZXBmUTYxM1hQMnpQL3Y3dFI3SCt6MFAxUGQwek5kVTExVlhWMVFYbDZ1TXFyeGRBRGhDRUluUWdkQ0UwSmp3bTZFQWdKZWtyV0UveEsrSkx4UFdFQjRpN0EwNjc2TThwVUtNZ0ZYWStrd3dybUVVd2lIeHVEek1tRUs0VVhDaXF4Yk04b0VYRWE1cEpNSTF4TE9zTXozZThMVGhFY0pyMmZkbkZFbTRESktrMzVDR0VJNFBvVzZYaUFNSkt6TXVqMmpUTUJsbENUQm5qYUdjSUhQZWFXRU53bnpDQjhTdmlXc1k4MXNGMElKWVcvbDJPczY4aFIzWHc5K213bkRDZmRtanlDalRNQmxsQVNkU3BoTXFLLzViU3RoUHVGdmhHbjhkMWpxVHJpVTBKWFF4bkRPRzRUQmhIOW5qeU9qVE1CbFpJdWU4dERhSGliY3BSeXZxQzJDRi9aNmp6cC9weHpiWDBZWlpRSXVvOGlFcWVSTTVZUjhTUG9yNFZiQ3dnVHI3MEs0aDlETlVIL3Y3QkZsbEFtNGpLSlFVOEpjUWpOUkRudlkxWVJKS2JZRld1STFtdklKaEFFUitOVW10Q1cwVkk0ZHNCR2hIdisyZ2ZBZDRUUENZc0lIUEFYUEtCTndtWUNySnRTWU5iTzlSRGtjQitjUmx1V2dUZWZ6VkxsUWxFOGtYQmJnK24wSTV4Qk81Q253WGdIclhjWDNQWXUxMmNYWjY1RUp1SXlxTm4xSzJFK1V3U042V0k3YjFaYUZURk5SRHMvdWpZWnJUbUl0NzJ4Q3NZVTJ6T1JwODZ6c05hbFpWSmgxUWJXZ3NScmg5b3B5N0dHNUprd1hPN0t3ZGRNTmhGKzRqbXNSK2hEK3dXM3ZhMG00VlFoTUNMblhDS2NyWi9sWlJwa0dsMUVWb0tHRU8wWFo0NFRMODdDdHI3Q3djZFBKeW9tN2UxVWpwTjJFZUx4M0NJdVVFN08zWERtMk53aXJ1cXdoTmljY1JlanNJeHhMV2RCOWtMMCttWURMS0grcGswWXorcnR5YkZiNVNCQTZXNFFHdFlPd1RUbE9CQjM5U1RuZVYyaDJYd2FzQndISnh5a25EaEEydkYwMTU0RGZqN05YcUdZSU9Bd0lSTHcvelYvS1hGTkZlNTVSOXIxaHlKQUIyODduUEdWSm0vWWtIS21jckIzN0Uxcnd3Ti9CR3NsU3drZUVPWVIzZlhqaEh0d2VVd2lBZlpoWEZOcURwN1h0V1Vqc3dZS25qUEFGYTAwTFdLaHVqbGdIRnZkUEQzQWV2TEFQY2wvRUlieEhWeEx1RU9YUUdFL0lSRUExSnhKd0E4dC9vRVVRZURuR0ZhNzJMQ2JVdDhpN0ZxSFV4ZitDRk8vclFzS0xoTTNsd2VsRHdtaENCdzIvWVpyejIwZG9WMTNDQU1JMHdzYUE3ZnFhOERUaG5JaDlNY2FETi9pMlRxRC9EMlRldU1lRmhBUHk0RjNQa0REd3oxTHhnbDJYNDBadEUrM3BiWkYzRjhGN1hRcjNjemJoemZMNE5KVndHUFBjVGZQN0hTSGJWWTh3Z3ZCVnpIYjloKzh4Ykw4c0YzeStJNXlYd3ZOb2xBMzhtZ040VVRjS3BRNEc2em81VWloN0tjZWI1cVpkTFBJZkxJNGJLQ2RXS3dtQ3NSdTUwcDVUVGd4WFhJSlIvRzNDSllUUjRqY0V1UTRQd2VzMHdpZDhUV01MOTRsN1JBakdNU0hiVU1wVFhkelh3V3lTU0pxK3plWnROY3NHdDREdFFkTCtNVEFIN1ZuT25qQTNJWFJncWdYZWlNZDZYMVArSmR1YmJOSWp5bGs1b0tOdExBeGVaeHNiN0dqckNVVXNiUFpsb1FGYjFVRUI2L3NwWVZ5QTgvRGhlcGFGaTQ0Z2JGNVNPMmNVMmNMWHRlUSs3T29qeUxCYW9sK0l2bXFVQ1oyTTBoWncwT3JxcGR3V0RJcUptbkpiQXU3UHlvbXQwdEZaeXNsaFpvTm1FSHBxeW1Ha3Y1OGRPVjhFNUlVY2JsY3BaeVdDaWJCZ3ZtbEFZenNjRjYwMXYwSHcvNTZGMzZvQXZPQWNPWmMvZ3MwMHYyY0cvSXp5eHNtd3dHQmJPUy9sK2ZJcVF6dk9zTUQ3Uno1MnBGY3QzY05vQS8vSENidkV0QjNPTWZDK01zRDFKWVNWbW10aGc3dzZScnR3VCtNTTdYb3Nzd0ZseURWTUdseUZ4dEU4SlRsN3BjY1V5NFlHQjd2aVVOY3h3aWdLMUEveFdKaUdJVmgwZTR3NnJ1YXBxWnZBN3dMV2pHelEzWVJmaWJKaW52WjZFVUl0RGhSbGlPeS9WQVdQTGZNaVpBaDVTcVAxLzVvd3pQSzdzcnR5d2xqYXNGWUtteTFpbmRZb1o3SDl1MnpxQ0Vvd0RjZzFyb1U4YmQ2WUE1M2pjUFZEK0ZCZEx0dkVOdE5QK2Y2aUJxOFdjcDhWdW5nVXNtbGlkVVNlQ0NQYVU3U3BnUG1WdWNycTg3TUxFOElFUHQvei9YOW5XNE1yNTlDR05DVHRhbzgyMk5EZzFnbWVQUW5UUlZuL0dQemJhZHI5TGVHUUJQcnFmbGNkbHdVNC94bE4yK1lrMEs0V2hHV2F1azYyd0x1RU5jMlhDZXNEZUhiZkpnd250QXJBdXcxNzdyZnovOEFPRHA5S1M5UG9RUmd2UXBoTUJPL3pKTUtaRWVyWmc3QkJjNit2eEdqNzBZSmZSVi8yRU9mZHpIVnRDd0h3MmNMUGZBbVAyU0dFWThLRWlYZ0p1UCttOEhBSCt6elF1QUx1U3NIdk15NC9SNVNYUnVSZm9CblltRzd2bjJDZklhYXJaWUR6T21yNjgzV09CMHlpWFJCRUg0bjZFUGZYTUFhL3V6VWZxREFFd2RIV280NURETmNOVHZpOXh6TTRQMllJRWNidWFTSHFiT3dSNmhQMVBvNDE4T3dsenJ1OTNDNTl4TEdnQi91RmlVZ1BuelJNMzVtZ092NGp3bThUVnZrbC80b0YzZ2h0V0NFTTV4ZEY0RDlPN2J3M0FWWmVkT1RwUkZLMFJBWGJqMVJPalpGT3FWdk1xYmdYZmNQbWpoWENjenN0QXEvKzNJZVlramVJMGFiTDJZa3l5UEM3cVMrMkpQajhrTS91WStXa2s0OFRRb1MreG5hTkMvaWQ4NTJ3aVdsakJXMkkwWVp0QWN2TExQY2hUQzVZbmZJQjk2TnhUcTdFNEpUMnJpRXVXNEJ0R2ltT01XamZzY2dmQXF1aGVKRHUrL3VOT1ArMmtQemhRYnhDbEYyaTdLWUNqMHJuYXp5bXA2UlFieG5iOXR5RXZSdkN4TWpCMWpnaHBtQ1Q5QUI3c2V2bCtMa2NyWnd3blAwczhvU2d3NTRhcDlkUVgrbjVMRGVhNkF5c2JzSTZ6ZHRaMHZkeEdmb2dLVyswM0tnOVZPVllzY2RZRzdLVncyeW9PSjZ0MGI2ZzRlM2krckpDd3dtNnIrZE40aGlDN1prOGVlZ2p4UEVvbGQ3R3pMUFowTCt2YU05SkFhNjlSOU92a3ZEVlJtWVNCQXAveFk0R3JNRTloQjBlSllicnJsTk9tRTZ1TnNEcEVLRHV4ZnorSVE1eEpSdmw5K1l4MGMxSE1FN2xqOWlNS2lTY0pyT0RxRWp6Rys1OVZ4WmNiWlQzTG02ZFdaUHR0Sk9Db2JIQmxiQ05SMUpEeXphSThZSi9HYUdZTU1XU0RlNFl6VDEwMTV3M1Zwd3pNeUQvUXNKYWNlMnY4OFE5M2tsakJ5dE91UTBYYXZwL2I1OXIrdm5ZWFY0Z0hPZkRBMnVYQjdIOVdOSlZHdnRqRzBOZGd5ejNSejBmQjhuN2hMNEIrSnhGK0xkUFA3WDJjRExvMWtMUHNyajgwZTNJYzUvM0s4TjVZZW82Z3ZBSG4zdGY1bjdHdW9TWCs3R05SMmxjL3Jhb1dGWE9WemFTWGNJdExkVWhseTdCNXZGUGc4YmdKbVF5Q1JJZWM3eVkvb0xHNXNsWFVlNXM5WVJLUDBzTXdrYldpckp6UGM1SHFNWkV3MjliK2RvemxaUG15SXNRVHZBZ1Q4K2ZkSlgzWlkxOWU0NmVDUUxKNnh0K0c4UGE1K1FBZlA2aW5Jd3Z0L3IwZlZXaE1PUDlMZVdFbEdHRno5OE01K3pyN3NkQ3c0c0draHYyRHVScGdBM3FyN0hiakhTcHBYRUpna2V1SmpDOUVKaTJQU2ZLZ2poV1RoWEh5TVAyZFo2OE5DZUw0ei9rcUIxL0VzYzlQYzc5bzhmejZhQjVSbjZFR0xhTENlTUo5L0hVTkZkMGhqTG42QnNVMGZ4enQ4YldXVUZ3WEJ4YVJRUmNsS3ppUzNqOGpUTDhqaHlBUFV6TUMxMzJwVFhpdDRjdDNGQnRqYWFEM1pjcXZDNDJNbkJlb3RIZXZBYUlGR2o5Zk9iN1NsWGVGdS9aUEhsaFlLOXA3enBlcHV3NmJzTFE4K0s0dGVHOC9UM3NjeDNaSGhXVjhNVy9JY2ZQNUFsRE9UYmVlU2dHM3oreW9OUFJKRlg5NlJhUFovdWtTY0R0RUF6YzFGdFZ6dllSbG9hcW5UT3N3cEE2d2ZLTi8xSWMzK1Z6L251YTZkVE5IdWNYYVl5OUMvUGtvY3NkNXQvT1lWc1dpZmVwbnVHZE15Myt4NVIxZFJVZmhHZG9UQm1nT1I1VDhqQ0VtY25ubXZJT1BPMnQ3Z1R0L0UxTk9aeVlKL3VwaDQrS0Z3em5ENDdSbUYwMVF0TzJkeGJUcytiQ0poUGthL2FBNXN0ZngyTUtMRU1ZVnVhUkJ1ZW16M0xZbHRWcVo4OXRYYVZQSDM2bTRmcmJxc0VBTkNWS3VNbGlIYmVGckx1NmtXazU0QVZCNXI4M2F6cXpLR0pEaG90cjhlV1piUGxtYjlNSXJpRFQzdnZGTVJ3aEF6Mm0yZTYrUTFEbytqeDUyRkx3cnNseGU3NXgvVjFISStCd2ZKVG1Pb1JUTEs4R2c2K3JwZ3loTFhNdDF2Rm5wUTlNN2xaREJOdzhRM203SUFMdWNhSEY2YlN3SUZSSE0zVzgzdktOd3J0eXRDZ2JFL0JhQ0FMcGZlcnZjYjdjT0dWSENnOFNVenpFRGw3THduZUFxcng3bEh5bTIzUDg4bTBYZlNiYmQ3QkJxNXRSRFFaZWlkSjc1RzFyMVdWS0gxOTNrS29aQlBtazI5aThRVkFQeGpYaWVLZ0tIeEUrUnJ6Y01Cdy9iL2xHNWNvSVRFM0RKRk9VRzVNY292VEpNTGNLZ1FiaFhUK0ZCNG1zRGNoWUFzTTBRaUVlMDB5ak4vbG9kR2xUUTZIcHlpVTdwcENjNnJDbDMrNUtiM1A4SW9HNmRCc1VOZUYzcGliUUlrMVovYUFDN2xtaFVtT0tGaWIwQUYrU240bXl2Z2xvYjJlSnNyRDJQYVFWa3Q1VzNWclp0VUp3UWpQWlA0V0hLR1BaMW1zMFJ6bDRXdVh3cGNOYTQ1YXU0dzJxOHJySGhvWnJ2Nm9HZzg2VWJuOVZBblhwUXBScThUT29DYVM3LzlwaFlsQUdhUVJVaTREWHlyQ1FaY3AvUzd5d0pKZGxQYWVpZWVDa0RlOGl6VXVDYVZlcEtPdVEwb1BjWWZqYkxhVGRkRmdPWHpwb3dFVStBdGswaFM2dUJvUE9aTFlvU3FBdUU4OXRDZDlqdm15c3JIdGZ5c01JT0VRUnl5ankrd08rNURMQTg3NEVwZ0lYaTdLb0t5OHdOWkp1NTE5b3pwc3ZqbnZreVlPRzQ4WnRuRzhkNGtOa203b0gwTXJXR3E1dFVnMEVuR2xQMzcwVHFLdUpvWDQ1MDdBdHBBcENsaWRGZTJuS3RvU05JcGJMbi9vb2MvQ21TWHRibyt3dmFicE9ISDhaVTBNYzRjTWZORXNjUTRqWHpaT0JOVWNjbjUyamRzZ2xZenBEK0ZMRHRlMnFnWUQ3UnVtWHlEVk5vSzdPbXJLVmFtY3ZlcmxCOE1RUlJpWk5PMDNuRnVSWWUwMzVockFDRG1zNU40WFE0akMxKzRrb3V6V0JHNVFhMXBTWS9LYXJuVk41dzA0a1YwZThMTlIvVEJHdXlwT0JKWjAzMSthZ0RZZHFoTlF6aGltMUxoMTE3Mm9nNE5ZWkJMaHR1eWdjU1lkcnl1VUtrREtENEtrVHMyNGRiVTZ4bjBzTUd0eTZLT3ZBWktCdkw4UFhBeVNYVVNDTnllOHQzOXdBbnFLNmFaUUZ2dElXTjB6enNrd1VaVC9QazRFMWpRZFhCY0VCY21IS2JaQWZQcXdmMUMwWjI2YlJoaXRNRzBkWEF5RTMwMkJTT2RkaUhUY3F2YmRXaHRwc01KZ0pTbUxVZllDSHFTUXRNcTJFZVNPS2dIdEVWVFprUDJLd00wakRmeEtEVEdZRHdiS3ZaUmI0amxNN0o2N0VnNVNiUk1zTllGb3E4MzZvYVJLKzBqTG1jSkxtUTVBVXdiRnh2Q2p6Mm1mM2NZOW5VTlhwQVVQNWVCVnRvYmtrSkYzVmJmcGRidWpYaFFhTk1tcVlVeCtEY0Z1V1V2L0NMR1JhenpzMmFnZExtOVNSeWxuNzVTWVpYb0ZvNDljczMxdzd6ZGZuRG92ODVUM2Nyckd4ak5FSSsxWjVNTENrZ0ViSXdJc3AxZjJrT0g3UG9NbFVrQ2tGRXV3cVZYMjVFWlNCZnhtbWRqYjI0cDF1S0gvTU1QVi9RMU5XckRIQkJDRk1DN3RyeXYrVFl2L0NWTFNicGh6WmZUNHRqTUZVN2hJL1VueFZMZ3J4Qlk5Sy9jWHhiQlZzcjRLZ0pHUGlzSkM5aXlpN1dmTWkvVU1sNDNBSTYrMlNvVDNkVkREUGR4eEN6S1NNb0wvWTV4cjBueW11OG1rMmcwU2wrY28vaDF6U1pIcjNrV0w4d1JoODcxSjY0enBvaUtIY0ZGd1B4U0NzcytGUlEva0xLZlJweFFlN3EyZWZhekw2OWdxWVhmTUVUVGJOeG9hdDZzTHMydk5Pd0l5K3hacnNwTjBUeUV5N1dOUXhRM1BPaVpxKytJQTNuTGJkbnUydU90WVE2dnFjdjBMVHRpRUpaZkVkcjZucnR5RTJrZDdra2FrMWJKdXhvOWg4MS9ValBMWU4xTkhQTFBmTk9JOTdtMFpvR29JWHNtdFA4TWw4N0hYOVc0YnJab2RvZ3lsRDd5WkQ5bWpUK2MwaTlPV3B2STJnaWU3eDJqYXdWNGlLM2hYWDNrS29yYW53aUFRRTNMV1d0djN6d3lXYSsybXVPVytrNXJ6UENZZGJiTXQxZ3Y4MlRvWHRkVTNiRkZKeTErRkJKV2x1U0Q3SCthU2pYc1JweC9mMEVXd1BHNjZIa05rOW9JRHJuOExIMGswYkNYY1E5dkc0dmhVTCtxODkrT0NqMXlEaVZuK2doVDViRWFKOW96eXV2ekdrUUd4UUhteHJ6djBJRi9PZXZsNzBUNytkN2VHUmVDbWdtdGhGek9sWHNYSHhTREVYUGpHRTZnbFBXMmRoeEp4cU1HUTJjeDBqNW1weVF1cndhbUhyZzUzdEdzMTVTR3lveTdJNmpLY2k2eUxXMzRFZEduSjVHenhpVFpWL3pCRnlrazB4VENkaFdsZ1FvMit3UEc2MHFweDZlajVQSDhLR0Mxek9Cbmd2QWsrRUxNRXoreTFQclpxeFRmWkluMnZobVowcnpBNkxOZWVWc3JtamRzajJWMHp6ZnE0cUI0T1hzQjI2blkrRGFDNmJnRmE2SEhZWUU0ZjcxSTFsZWtnY0dpUkJLRXdDVjNqOFhzcGo4VU0yamNERzNwWndyREt2bXNCeUtkUGFWN3kvdXVTY2I3R0pRaGRQdDRQN0g4ODJ5RFlDTUoyZHF0d3JTR0pxY01CelBoSjFyNUQ4Z21od1Y2U2t2WmswaSs4OHpwMW82QWZzZEQrYWNHaUlhVWcvM3FoWlI1dERhc2J0Q1Y4WmVMM0dHNTRVaDJqYkFNSThqdzJKNDI2YXM5VHlSc0hZalB1b0VGUFV1SFNLeC8xTlNxQytxWVJkUS9iekJJdjFZMnA2VUlRcHJTMGFxS3ZYeHBvNGVGUk5rZkx6VkRJTGk0ZDVPRGlDRUFLUUVZajZmVUREL1ZiK3lsUzQwcEZKQllrMVp4Z2NINlVhYnk3cXZJRUJyeUsyaGx2RVhyWXQvRlZzeUFiNkRteFlONFYxNERva2lmd2t4RDB2NUh1ZXF0RnlqbU9zWU1NdHZ0d2Y4eGU1ak8rM0tXc2VSN0ZHYm1yYlN5cit5Z2xvUGdlekptY2p0QWo4ZXFwMDk4encwbHd2WlczckZndjFiR1dId3IwUnJyMk1Jd0hpSnAzOWlCMG1TM0xnd0htSHRjTlplcmRjWlR2YWFSRyt1RThZcEdxZkNMem0rZkE0WGFOTkZZYXM0OHdJWDRqdnhmRWJQblVjNzJOemlVcGpMV2lrWXhKb0Y1d2ZOeVdnUGZmWHpES0NFcmFRKzZVUC8zWUphUlE5QTJyVlQ4YW80M2xDQ3d0OWpERzJNa0w5Wld5UHF4V2dqcnNzOXUxVzFsalA4YXUzU0ZYTzZ4WmwyY1lvamUxcGlZcTJaTXF2UFRMMDRTRVZQdGxrbEF3TFJScjc0MEdxY3RCekJiM0tXZ2krTHRlcitIbTVvSVhjYWNrRkR5MXlEbXZDblN6d1EwYlo0U0UxeXFBMGtYRWkyL3U2Y3IrYTFrQit3bmJoNlJ6bTQyZWYzTVRYRkNnN1NVc3JrbnF1RGFoVkk1d0tBZkc5V1d2dm9zeEJ0MnZZWGpxVHg5WmlTMzA4aFdjajBKWlA0VDQySlFUWXd1MmV6TTg5YUtyKzVXeWYzeHF5TDNldzdScTJWaVRDd0hybWZ3V3RGMDRHRE1RZkM0UDJleEU2Q1FaWmQ5YUtIc283dU5ORU00VlRvck13MXVKbDcrYzYzalBDMUFQTFpHenNRTjlNQmRzdHZpNVBBL3J5NEF4S20zaWdQcFZnYk5IWjNKKzlWTGpJK2swOE1PN1ZHTk9UcGliY2o1alM3OGFEYmgwUG9seE1rMndTN2dtclpob3JKeGdZZzN3OXYyY2ZxOHByd1pPZ0ltNURjemF0MU9JMnJPSCsvYnFxZE9iLzNhL0tDZGpEaldBYnNnY2k4anFRK2VDaFlDM2tpSWg4SUNRUmhkK0lCN1pNcmRTSVBVQXRlSUJGU1l0MHJFdnpDeHM4VzRzSDFEMHEvRjZkSUd5RDE0MC9KSzFZWXkzbWRzQnVzNUU5YUsrenB6Q3Rsd2t2TTVaWG5hQ2NIY01hc1BaY3dHM2J3RUxrUGZieXphNUtMM3BHTlpQK0o4QUFEQVBYd0dFcnZBVUFBQUFBU1VWT1JLNUNZSUk9J1xuICAgICAgICB9LFxuICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgYXBwbGljYXRpb25OYW1lOiAnTWFnb0Nsb3VkJyxcbiAgICAgICAgICAgIGJhbm5lclVybDogJ2Fzc2V0cy9pbWFnZXMvbG9nb21hZ29jbG91ZC13aGl0ZS0zMTIucG5nJyxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBlbnY6IFRiQXV0aEVudmlyb25tZW50O1xuICAgIGxvZ2dlZE91dCQgPSBuZXcgU3ViamVjdCgpO1xuICAgIGVycm9yTWVzc2FnZSA9ICcnO1xuICAgIG9rTWVzc2FnZSA9ICcnO1xuICAgIHVzZURDUyA9IGZhbHNlO1xuXG4gICAgbGFuZ0l0OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIGdldCByb3V0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcik7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoJ2VudicpIGVudjogVGJBdXRoRW52aXJvbm1lbnQsXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgICAgIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXG4gICAgKSB7XG4gICAgICAgIGF1dGhTZXJ2aWNlSW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLmVudiA9IF8uZGVmYXVsdHNEZWVwKGVudiwgVGJBdXRoU2VydmljZS5ERUZBVUxUX0VOViwgZW52KTtcbiAgICAgICAgY29uc29sZS5sb2coJ1RiQXV0aEVudmlyb25tZW50JywgdGhpcy5lbnYpO1xuICAgICAgICB0aGlzLmxhbmdJdCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhc3luYyBjaGVja0Nvbm5lY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5nZXQodGhpcy5nZXRCYXNlVXJsKCkpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0aW1lb3V0KDUwMDApLFxuICAgICAgICAgICAgICAgIG1hcCgoX18pID0+IHRydWUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUml0b3JuYSBsYSBiYXNlIHVybCBkZWwgYmFja2VuZCxcbiAgICAgKiBjYXJpY2F0YSBkYSB1biBmaWxlIGRpIGNvbmZpZ3VyYXppb25lIGNhcmljYXRvIGRpbmFtaWNhbWVudGUgKGFzc2V0cy9lbnZpcm9ubWVudC5qc29uKVxuICAgICAqL1xuICAgIGdldEJhc2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXJsO1xuICAgIGdldFNuYXBzaG90U2VydmljZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5zbmFwc2hvdFNlcnZpY2VVcmw7XG4gICAgZ2V0TG9naW5QYWdlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmxvZ2luUGFnZVVybDtcbiAgICBnZXRTdG9yZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5zdG9yZVVybDtcbiAgICAvKlxue1xuICB0eXBlOiBKV1QsXG4gIGFwcGlkOiBNNCxcbiAgc2VjdXJpdHlWYWx1ZTogand0RW5jb2RlZFxufVxuKi9cbiAgICAvLyBtb2RpZmljYSBwZXIgdW5pZm9ybWFyZSBsIGhlYWRlcixvIGNoZSBhcnJpdmEgdW4gcG8gY2FwaXRhbGl6emF0byB1biBwbyBuby4gLy9yaWY6IElsYXJpYSBlIEx1Y2FcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnZXRBdXRob3JpemF0aW9uSGVhZGVyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0eXBlOiAnSldUJyxcbiAgICAgICAgICAgIGFwcElkOiAnTTQnLFxuICAgICAgICAgICAgc2VjdXJpdHlWYWx1ZTogdGhpcy5nZXRUb2tlbigpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhc3luYyBwcmVsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncHJlbG9naW4uLi4nKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cFxuICAgICAgICAgICAgLnBvc3Q8TG9naW5SZXNwb25zZT4odGhpcy5nZXRQcmVMb2dpblVybCgpLCBsb2dpblJlcXVlc3QpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2dpblJlc3BvbnNlLlJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBjYW1iaW8gcGFzc3dvcmQgZSBudW92byB0ZW50YXRpdm8gZGkgbG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2UoY29kLjE5KTogQ2hhbmdlIFBhc3N3b3JkIE5lZWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZSAoY29kLjQpOiBBY2NvdW50IGNvbmZpcm1hdGlvbiBOZWVkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBhdHRpdmFyZSBsJ2FjY291bnQgY2hlIG5vbiBoYSBhbmNvcmEgZWZmZXR0dWF0byBsYSBwcm9jZWR1cmE/XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ludmFsaWREYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlIChjb2QuNDYpOiAnICsgbG9naW5SZXNwb25zZS5NZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSB0aGlzLkxhbmdJVCgpID8gJ0NvZGljZSBub24gdmFsaWRvLicgOiAnSW52YWxpZCBjb2RlLic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNTgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2UgKGNvZC41OCk6IEFjY291bnQgTG9ja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gdGhpcy5nZXRMb2NrZWRVc2VyTWVzc2FnZShsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE0Mykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcmVMb2dpbihjb2QuMTQzKTogb3RwIGNvZGUgbmVlZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTE2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlIChjb2QuMTE2KTogdXNlciBhbHJlYWR5IGxvZ2dlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHBlciAxNDMgKCBvdHBuZWVkZWQpIGUgMTE2IChhbHJlYWR5TG9nZ2VkKSlub24gbW9zdHJvIGVycm9yZSByb3NzbyBjaGUgc2VtYnJhIGdyYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlICE9PSAxNDMgJiYgbG9naW5SZXNwb25zZS5SZXN1bHRDb2RlICE9PSAxMTYpIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5va01lc3NhZ2UgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhc3luYyBsb2dpbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xuICAgICAgICAvLydsb2dpbicpO1xuICAgICAgICBsZXQgaXNzdWUgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luLi4uJyk7XG4gICAgICAgIGNvbnN0IGxvZ2lucmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0TG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgY2FtYmlvIHBhc3N3b3JkIGUgbnVvdm8gdGVudGF0aXZvIGRpIGxvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDaGFuZ2UgUGFzc3dvcmQgTmVlZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuQ2hhbmdlUGFzc3dvcmREaWFsb2cobG9naW5SZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgcmljaGllc3RhIG90cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbihjb2QuMTQzKTogb3RwIGNvZGUgbmVlZGVkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvIGNvc2UgdGlwbyBtb3N0cmFyZSB1bmEgbWFzY2hlcmEgY2hlIGFjY2V0dGkgaWwgY29kaWNlIGUgbG8gcmltYW5kaSBpbmRpZXRybyBwZXIgaWwgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSAxMTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciByaWNoaWVzdGEgb3RwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiB1c2VyIGFscmVhZHkgbG9nZ2VkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvIGNvc2UgdGlwbyBtb3N0cmFyZSB1bmEgbWFzY2hlcmEgY2hlIGNoaWVkYSBzZSBzaSB2dW9sZSBjYW5jZWxsYXJlIGxhIHByZWNlZGVudGUgbG9naW4gcmltYW5kaSBpbmRpZXRybyBsYSByaXNwb3N0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IEFjY291bnQgY29uZmlybWF0aW9uIE5lZWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGF0dGl2YXJlIGwnYWNjb3VudCBjaGUgbm9uIGhhIGFuY29yYSBlZmZldHR1YXRvIGxhIHByb2NlZHVyYT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvIGFtbWV0dG8gY2hlIGxhIHBhc3N3b3JkIHNpYSAgaWwgY29kaWNlPyBtYSBpbiByZWxhdMOgIG9nbmkgc2l0byBsbyBmYSBpbiBkdWUgc3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbCBjbGljayBzdWxsIG1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA1OCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQWNjb3VudCBMb2NrZWQnICsgbG9naW5SZXNwb25zZS5NZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSB0aGlzLmdldExvY2tlZFVzZXJNZXNzYWdlKGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTQ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBTdWJzY3JpcHRpb24gcmVxdWlyZXMgMkZBJyArIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gdGhpcy5nZXQyRkFSZXF1aXJlZE1lc3NhZ2UobG9naW5SZXF1ZXN0LnN1YnNjcmlwdGlvbktleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gTG9naW4gZmFpbHVyZSBmb3IgJyArIGxvZ2luUmVxdWVzdC5hY2NvdW50TmFtZSArICcsIHJlc3VsdCBjb2RlICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTQzIHx8IGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTE2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJzsgLy8gbm9uIG1vc3RybyBlcnJvcmUgcm9zc28gY2hlIHNlbWJyYSBncmF2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMub2tNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9rTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXROYW1lKGxvZ2luUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2U6IExvZ09mZiBkdWUgdG8gQWNjb3VudCBub3QgYWxsb3dlZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nb2ZmKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gJ0FjY291bnQgbm90IGFsbG93ZWQuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9IDk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgaWYgKGlzc3VlKSB7XG4gICAgICAgICAgICB0aGlzLmZpeElzc3VlKGxvZ2lucmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2dpbnJlc3BvbnNlO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZpeElzc3VlKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdCB0byBtYW5hZ2U6ICcgKyBsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdldExvY2tlZFVzZXJNZXNzYWdlKG1lc3NhZ2VGcm9tTG9naW46IHN0cmluZykge1xuICAgICAgICBpZiAoIW1lc3NhZ2VGcm9tTG9naW4pIHJldHVybiBtZXNzYWdlRnJvbUxvZ2luO1xuICAgICAgICBjb25zdCBzZWNvbmRzOiBudW1iZXIgPSArbWVzc2FnZUZyb21Mb2dpbjtcbiAgICAgICAgbGV0IG1zZyA9IG1lc3NhZ2VGcm9tTG9naW47XG4gICAgICAgIGlmIChpc05hTihzZWNvbmRzKSkgcmV0dXJuIG1zZztcbiAgICAgICAgaWYgKHNlY29uZHMgPCA2MCAmJiBzZWNvbmRzID4gLTEpIG1zZyA9IGBMb2dpbiBMb2NrZWQuIFBsZWFzZSB0cnkgYWdhaW4gaW4gJHtzZWNvbmRzfSBzZWNvbmRzLi4uYDtcbiAgICAgICAgZWxzZSBpZiAoc2Vjb25kcyA+PSA2MCkge1xuICAgICAgICAgICAgY29uc3QgbWluVmFsID0gTWF0aC5yb3VuZChzZWNvbmRzIC8gNjApO1xuICAgICAgICAgICAgbXNnID1cbiAgICAgICAgICAgICAgICBtaW5WYWwgPT09IDEgPyBgTG9naW4gTG9ja2VkLiBQbGVhc2UgdHJ5IGFnYWluIGluIG9uZSBtaW51dGUuLi5gIDogYExvZ2luIExvY2tlZC4gUGxlYXNlIHRyeSBhZ2FpbiBpbiAke21pblZhbH0gbWludXRlcy4uLmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1zZztcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnZXQyRkFSZXF1aXJlZE1lc3NhZ2UoZGVzY3JpcHRpb246IHN0cmluZykge1xuICAgICAgICBpZiAobmF2aWdhdG9yLmxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpXG4gICAgICAgICAgICByZXR1cm4gYFF1ZXN0YSBzdWJzY3JpcHRpb24gJHtkZXNjcmlwdGlvbn0gcmljaGllZGUgbCdhdXRlbnRpY2F6aW9uZSBhIGR1ZSBmYXR0b3JpISBMZWdnaSBsYSBtYWlsIHBlciB1bHRlcmlvcmkgZGV0dGFnbGlgO1xuICAgICAgICByZXR1cm4gYFRoaXMgU3Vic2NyaXB0aW9uICR7ZGVzY3JpcHRpb259IHJlcXVpcmVzIHR3byBmYWN0b3IgYXV0ZW50aWNhdGlvbiEgUGxlYXNlIHJlYWQgdGhlIEVtYWlscyBmb3IgZnVydGhlciBkZXRhaWxzLmA7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIG9wZW5VcGRhdGVBbGVydERpYWxvZyhcbiAgICAgICAgaW5mbzogc3RyaW5nLFxuICAgICAgICB0aXRsZTogc3RyaW5nLFxuICAgICAgICBkb250c2hvdzogc3RyaW5nLFxuICAgICAgICBhY2NvdW50TmFtZTogc3RyaW5nLFxuICAgICAgICBzdWJzY3JpcHRpb25LZXk6IHN0cmluZyxcbiAgICAgICAgcHJvY2Vzc2lkOiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcblxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0RGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgVGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIE1lc3NhZ2U6IGluZm8sXG4gICAgICAgICAgICAgICAgRG9udFNob3c6IGRvbnRzaG93LFxuICAgICAgICAgICAgICAgIFN1YktleTogc3Vic2NyaXB0aW9uS2V5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9rTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWRpcmVjdEV4dGVybmFsKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gZXh0ZXJuYWwuJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbihhY2NvdW50TmFtZSwgc3Vic2NyaXB0aW9uS2V5LCBwcm9jZXNzaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvIGludGVybmFsIScpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZ2V0UmVkaXJlY3RVcmwoKV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhc3luYyBvcGVuQ2hhbmdlUGFzc3dvcmREaWFsb2cobG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpIHtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcblxuICAgICAgICBsZXQgdGl0bGU6IHN0cmluZztcbiAgICAgICAgY29uc3Qgb3BSZXMgPSBhd2FpdCB0aGlzLmdldFN5bWJvbHNUb1Byb21pc2UoKTtcbiAgICAgICAgY29uc3QgcHN3UnVsZXNTeW1ib2wgPSBvcFJlcy5Db250ZW50O1xuICAgICAgICBsZXQgbWVzc2FnZV8xOiBzdHJpbmc7XG4gICAgICAgIGxldCBtZXNzYWdlXzI6IHN0cmluZztcbiAgICAgICAgbGV0IG1lc3NhZ2VfMzogc3RyaW5nO1xuICAgICAgICBsZXQgbWVzc2FnZV80OiBzdHJpbmc7XG4gICAgICAgIGxldCBtZXNzYWdlXzU6IHN0cmluZztcbiAgICAgICAgbGV0IG1lc3NhZ2VfNjogc3RyaW5nO1xuICAgICAgICBsZXQgbWVzc2FnZV83OiBzdHJpbmc7XG4gICAgICAgIGxldCBtZXNzYWdlXzg6IHN0cmluZztcbiAgICAgICAgbGV0IG1lc3NhZ2VfOTogc3RyaW5nO1xuICAgICAgICBsZXQgbWVzc2FnZV8xMDogc3RyaW5nO1xuICAgICAgICBsZXQgbWVzc2FnZV8xMTogc3RyaW5nO1xuICAgICAgICBsZXQgcGxhY2VIb2xkZXJfMTogc3RyaW5nO1xuICAgICAgICBsZXQgcGxhY2VIb2xkZXJfMjogc3RyaW5nO1xuICAgICAgICBjb25zdCBjdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpIHtcbiAgICAgICAgICAgIHRpdGxlID0gJ01vZGlmaWNhIHBhc3N3b3JkJztcbiAgICAgICAgICAgIG1lc3NhZ2VfMSA9ICdMYSBudW92YSBwYXNzd29yZCBkZXZlIGVzc2VyZSBjb21wb3N0YSBkYSBhbG1lbm8gJztcbiAgICAgICAgICAgIG1lc3NhZ2VfMiA9ICc4IGNhcmF0dGVyaSAnO1xuICAgICAgICAgICAgbWVzc2FnZV8zID0gJ2UgY29udGVuZXJlIHRhc3NhdGl2YW1lbnRlICc7XG4gICAgICAgICAgICBtZXNzYWdlXzQgPSAnMyBkaSBxdWVzdGUgNCBjb25kaXppb25pOic7XG4gICAgICAgICAgICBtZXNzYWdlXzUgPSAnYXZlcmUgYWxtZW5vICc7XG4gICAgICAgICAgICBtZXNzYWdlXzYgPSAndW5hIG1haXVzY29sYSc7XG4gICAgICAgICAgICBtZXNzYWdlXzcgPSAnYXZlcmUgJztcbiAgICAgICAgICAgIG1lc3NhZ2VfOCA9ICdjYXJhdHRlcmkgbWludXNjb2xpJztcbiAgICAgICAgICAgIG1lc3NhZ2VfOSA9ICdhbG1lbm8gdW4gbnVtZXJvICc7XG4gICAgICAgICAgICBtZXNzYWdlXzEwID0gJyh0cmEgMCBlIDkpJztcbiAgICAgICAgICAgIG1lc3NhZ2VfMTEgPSAndW4gc2ltYm9sbyB0cmEgcXVlc3RpIGEgc2VndWlyZSAnO1xuICAgICAgICAgICAgcGxhY2VIb2xkZXJfMSA9ICdQYXNzd29yZCc7XG4gICAgICAgICAgICBwbGFjZUhvbGRlcl8yID0gJ0NvbmZlcm1hIHBhc3N3b3JkJztcbiAgICAgICAgICAgIC8vdGhpcy5va01lc3NhZ2UgPSBcIlBhc3N3b3JkIG1vZGlmaWNhdGEgY29uIHN1Y2Nlc3NvIVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGl0bGUgPSAnQ2hhbmdlIHBhc3N3b3JkJztcbiAgICAgICAgICAgIG1lc3NhZ2VfMSA9ICdUaGUgbmV3IHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgJztcbiAgICAgICAgICAgIG1lc3NhZ2VfMiA9ICc4IGNoYXJhY3RlcnMgJztcbiAgICAgICAgICAgIG1lc3NhZ2VfMyA9ICdhbmQgY29udGFpbiAnO1xuICAgICAgICAgICAgbWVzc2FnZV80ID0gJzMgb2YgdGhlc2UgNCBjb25kaXRpb25zOic7XG4gICAgICAgICAgICBtZXNzYWdlXzUgPSAnaGF2ZSBhdCBsZWFzdCAnO1xuICAgICAgICAgICAgbWVzc2FnZV82ID0gJ29uZSB1cHBlcmNhc2UnO1xuICAgICAgICAgICAgbWVzc2FnZV83ID0gJ2hhdmUgJztcbiAgICAgICAgICAgIG1lc3NhZ2VfOCA9ICdsb3dlcmNhc2UgY2hhcmFjdGVycyc7XG4gICAgICAgICAgICBtZXNzYWdlXzkgPSAnYXQgbGVhc3Qgb25lIG51bWJlciAnO1xuICAgICAgICAgICAgbWVzc2FnZV8xMCA9ICcoYmV0d2VlbiAwIGFuZCA5KSc7XG4gICAgICAgICAgICBtZXNzYWdlXzExID0gJ29uZSBzeW1ib2wgYW1vbmcgdGhlc2UgdG8gZm9sbG93ICc7XG4gICAgICAgICAgICBwbGFjZUhvbGRlcl8xID0gJ1Bhc3N3b3JkJztcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyXzIgPSAnQ29uZmlybSBwYXNzd29yZCc7XG4gICAgICAgICAgICAvL3RoaXMub2tNZXNzYWdlID0gXCJQYXNzd29yZCBjaGFuZ2VkIHN1Y2Nlc2Z1bGx5IVwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlhbG9nLm9wZW4oQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBUaXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgTWVzc2FnZV8xOiBtZXNzYWdlXzEsXG4gICAgICAgICAgICAgICAgTWVzc2FnZV8yOiBtZXNzYWdlXzIsXG4gICAgICAgICAgICAgICAgTWVzc2FnZV8zOiBtZXNzYWdlXzMsXG4gICAgICAgICAgICAgICAgTWVzc2FnZV80OiBtZXNzYWdlXzQsXG4gICAgICAgICAgICAgICAgTWVzc2FnZV81OiBtZXNzYWdlXzUsXG4gICAgICAgICAgICAgICAgTWVzc2FnZV82OiBtZXNzYWdlXzYsXG4gICAgICAgICAgICAgICAgTWVzc2FnZV83OiBtZXNzYWdlXzcsXG4gICAgICAgICAgICAgICAgTWVzc2FnZV84OiBtZXNzYWdlXzgsXG4gICAgICAgICAgICAgICAgTWVzc2FnZV85OiBtZXNzYWdlXzksXG4gICAgICAgICAgICAgICAgTWVzc2FnZV8xMDogbWVzc2FnZV8xMCxcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzExOiBtZXNzYWdlXzExLFxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfMTI6IHBzd1J1bGVzU3ltYm9sLFxuICAgICAgICAgICAgICAgIFBsYWNlSG9sZGVyXzE6IHBsYWNlSG9sZGVyXzEsXG4gICAgICAgICAgICAgICAgUGxhY2VIb2xkZXJfMjogcGxhY2VIb2xkZXJfMixcbiAgICAgICAgICAgICAgICBMb2dpblJlcXVlc3Q6IGxvZ2luUmVxdWVzdCxcbiAgICAgICAgICAgICAgICBDdXJyZW50QnJvd3Nlckxhbmd1YWdlOiBjdXJyZW50QnJvd3Nlckxhbmd1YWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaXNWYWxpZFRva2VuKGF1dGh0b2tlbiA9ICcnKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcbiAgICAgICAgaWYgKCFhdXRodG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IG9wcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xuICAgICAgICAgICAgb3ByZXMuTWVzc2FnZSA9ICdObyBhdXRodG9rZW4nO1xuICAgICAgICAgICAgcmV0dXJuIG9wcmVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cFxuICAgICAgICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldElzVmFsaWRUb2tlblVybCgpLCBuZXcgSXNWYWxpZFRva2VuUmVxdWVzdChhdXRodG9rZW4pKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKChqT2JqOiBPcGVyYXRpb25SZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzVmFsaWRUb2tlbiAtIHJlc3BvbnNlJywgak9iaik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghak9iai5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpPYmouTWVzc2FnZSA9IGpPYmouTWVzc2FnZSA/IGpPYmouTWVzc2FnZSA6ICdpc1ZhbGlkVG9rZW4gZXJyb3IuLi4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBUb2tlbiBWYWxpZGF0aW9uIGZhaWx1cmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbjogJyArIGF1dGh0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBqT2JqLk1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjY2O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsLmluY2x1ZGVzKHRoaXMuZ2V0TG9naW5QYWdlVXJsKCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZ2V0TG9naW5QYWdlVXJsKCldKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29tcGFuaWVzRm9yVXNlcih1c2VyOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpICsgdXNlcikucGlwZShcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuQ29udGVudCAmJiByZXMuQ29udGVudC5zdWJzY3JpcHRpb25zID8gcmVzLkNvbnRlbnQuc3Vic2NyaXB0aW9ucyA6IFtdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXNWYWxpZFRva2VuVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnaXN2YWxpZHRva2VuLyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvZ2luVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcbiAgICB9XG4gICAgZ2V0UHJlTG9naW5VcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2dvdXRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dvZmYvJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2hhbmdlUGFzc3dvcmRBcGlVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENoYW5nZVBhc3N3b3JkVXJsKCkgKyAnY2hhbmdlcGFzc3dvcmQvJztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZW5kT1RQVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAncmVzZW5kb3RwX3YzLyc7XG4gICAgfVxuXG4gICAgcHVibGljIE9MRHJlc2VuZE9UUFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ3Jlc2VuZG90cC8nO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZXNldFBhc3N3b3JkVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFuZ2VQYXNzd29yZFVybCgpICsgJ3Jlc2V0cGFzc3dvcmQvJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U3Vic0tleXNGb3JBY2NvdW50VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50Lyc7XG4gICAgfVxuXG4gICAgLyphc3luYyBzZW5kT1RQKGNwaTogT1RQSW5mbyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XG4gICAgIGNvbnN0IGJvZHlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjcGkpO1xuICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxuICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMubG9naW4oKSwgYm9keVN0cmluZywgeyBoZWFkZXJzIH0pXG4gICAgICAgICAucGlwZShcbiAgICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlcy5NZXNzYWdlICsgJyAoQ29kZTonICsgcmVzLkNvZGUgKyAnKSc7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xuICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2NjtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgIClcbiAgICAgICAgIC50b1Byb21pc2UoKTtcbiB9Ki9cblxuICAgIGFzeW5jIGNoYW5nZVBhc3N3b3JkKGNwaTogQ2hhbmdlUGFzc3dvcmRJbmZvKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNwaSk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGFsaWduXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRDaGFuZ2VQYXNzd29yZEFwaVVybCgpLCBib2R5U3RyaW5nLCB7IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzLk1lc3NhZ2UgKyAnIChDb2RlOicgKyByZXMuQ29kZSArICcpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjYyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIExhbmdJVCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMubGFuZ0l0ICE9IG51bGwpIHRoaXMubGFuZ0l0ID0gbmF2aWdhdG9yLmxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmdJdDtcbiAgICB9XG5cbiAgICBPTERyZXNlbmRPVFAoYWNjbmFtZTogc3RyaW5nLCBhbHRlcm5hdGl2ZTogYm9vbGVhbik6IE9ic2VydmFibGU8T3BlcmF0aW9uUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXG4gICAgICAgIGxldCB3YXJuaW5nID0gdGhpcy5MYW5nSVQoKSA/ICdBdHRlbnppb25lJyA6ICdXYXJuaW5nJztcbiAgICAgICAgbGV0IHN1Y2Nlc3NNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdPdHAgaW52aWF0bycgOiAnT3RwIHNlbnQnO1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdPdHAgbm9uIGludmlhdG8nIDogJ090cCBub3Qgc2VudCc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5PTERyZXNlbmRPVFBVcmwoKSArIGFjY25hbWUgKyAnLycgKyBhbHRlcm5hdGl2ZSwgeyBoZWFkZXJzIH0pLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoYCR7d2FybmluZ306ICR7cmVzLk1lc3NhZ2V9YCwgJ09LJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoc3VjY2Vzc01lc3NhZ2UsICdPSycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcbiAgICAgICAgICAgICAgICByZXMuTWVzc2FnZSA9IGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XG4gICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2Njk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoYCR7d2FybmluZ306ICR7ZXJyb3IubWVzc2FnZX1gLCAnT0snKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVzZW5kT1RQMihhY2NuYW1lOiBzdHJpbmcsIHByb2Nlc3NJRDogc3RyaW5nLCBhbHRlcm5hdGl2ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxPcGVyYXRpb25SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG5cbiAgICAgICAgbGV0IHdhcm5pbmcgPSB0aGlzLkxhbmdJVCgpID8gJ0F0dGVuemlvbmUnIDogJ1dhcm5pbmcnO1xuICAgICAgICBsZXQgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZztcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgICAgICBzd2l0Y2ggKGFsdGVybmF0aXZlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2UgPSB0aGlzLkxhbmdJVCgpID8gJ1NtcyBpbnZpYXRvJyA6ICdTbXMgc2VudCc7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdTbXMgbm9uIGludmlhdG8nIDogJ1NtcyBub3Qgc2VudCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2UgPSB0aGlzLkxhbmdJVCgpID8gJ0UtbWFpbCBpbnZpYXRhJyA6ICdFLW1haWwgc2VudCc7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdFLW1haWwgbm9uIGludmlhdGEnIDogJ0UtbWFpbCBub3Qgc2VudCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdPdHAgaW52aWF0bycgOiAnT3RwIHNlbnQnO1xuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHRoaXMuTGFuZ0lUKCkgPyAnT3RwIG5vbiBpbnZpYXRvJyA6ICdPdHAgbm90IHNlbnQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMucmVzZW5kT1RQVXJsKCkgKyBhY2NuYW1lICsgJy8nICsgcHJvY2Vzc0lEICsgJy8nICsgYWx0ZXJuYXRpdmUsIHsgaGVhZGVycyB9KS5waXBlKFxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKGAke3dhcm5pbmd9OiAke3Jlcy5NZXNzYWdlfWAsICdPSycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYWx0ZXJuYXRpdmUgIT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoc3VjY2Vzc01lc3NhZ2UsICdPSycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcbiAgICAgICAgICAgICAgICByZXMuTWVzc2FnZSA9IGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XG4gICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2Njk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoYCR7d2FybmluZ306ICR7ZXJyb3IubWVzc2FnZX1gLCAnT0snKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVzZXRwYXNzd29yZChhY2NuYW1lOiBzdHJpbmcpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXG4gICAgICAgICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0UmVzZXRQYXNzd29yZFVybCgpICsgYWNjbmFtZSwgeyBoZWFkZXJzIH0pXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5NZXNzYWdlID0gYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwuaW5jbHVkZXModGhpcy5nZXRMb2dpblBhZ2VVcmwoKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRMb2dpblBhZ2VVcmwoKV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsb2dvZmYoKSB7XG4gICAgICAgIGNvbnN0IGxvZ29mZlJlcXVlc3Q6IExvZ29mZlJlcXVlc3QgPSBuZXcgTG9nb2ZmUmVxdWVzdCh0aGlzLmdldFRva2VuKCkpO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5wb3N0PExvZ29mZlJlc3BvbnNlPih0aGlzLmdldExvZ291dFVybCgpLCBsb2dvZmZSZXF1ZXN0KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChsb2dvZmZSZXNwb25zZTogTG9nb2ZmUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ29mZlJlc3BvbnNlLlJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBMb2dvZmYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZE91dCQubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ29mZlJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ29mZldpdGhGZXRjaCgpIHtcbiAgICAgICAgY29uc3QgbG9nb2ZmUmVxdWVzdDogTG9nb2ZmUmVxdWVzdCA9IG5ldyBMb2dvZmZSZXF1ZXN0KHRoaXMuZ2V0VG9rZW4oKSk7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gSlNPTi5zdHJpbmdpZnkobG9nb2ZmUmVxdWVzdCk7XG4gICAgICAgIGxldCBsb2dvdXQgPSBmZXRjaCh0aGlzLmdldExvZ291dFVybCgpLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IHJlcXVlc3QsXG4gICAgICAgICAgICBrZWVwYWxpdmU6IHRydWUsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0aGlzLmdldEF1dGhvcml6YXRpb25IZWFkZXIoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsb2dvdXQudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVVc2VyR2F0ZXdheSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VudGVyaW5nIG5hdmlnYXRlVXNlckdhdGV3YXkuLicpO1xuICAgICAgICBjb25zdCB1c2VyR2F0ZXdheVVybCA9IHRoaXMuZ2V0VXNlckdhdGV3YXlVcmwoKTtcblxuICAgICAgICAvLyBpZiB1c2VyZ2F0ZXdheSB1cmwgZXhpc3RzLCB0aGVuIHJlZGlyZWN0IHRvIGl0XG4gICAgICAgIGlmICh1c2VyR2F0ZXdheVVybCAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBGb3VuZCBnZXRVc2VyR2F0ZXdheVVybCAke3VzZXJHYXRld2F5VXJsfWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dXNlckdhdGV3YXlVcmx9bG9naW4/ZXJyb3I9XCIke3RoaXMuZXJyb3JNZXNzYWdlfVwiYCk7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYCR7dXNlckdhdGV3YXlVcmx9bG9naW4/ZXJyb3I9XCIke3RoaXMuZXJyb3JNZXNzYWdlfVwiYDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG90aGVyd2lzZSwgcmVkaXJlY3QgdG8gbG9naW5cbiAgICAgICAgY29uc29sZS5sb2coXCJSZWRpcmVjdGluZyB0byBsb2dpbiBwYWdlLi5cIik7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgZXJyb3I6IHRoaXMuZXJyb3JNZXNzYWdlIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbihhY2NvdW50TmFtZTogc3RyaW5nLCBzdWJzY3JpcHRpb25LZXk6IHN0cmluZywgcHJvY2Vzc2lkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZXNNYXBGb3JVc2VyKGFjY291bnROYW1lKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwOiBBcnJheTx7IFN1YnNjcmlwdGlvbktleTogc3RyaW5nOyBEZXNjcmlwdGlvbjogc3RyaW5nOyBJbnN0YW5jZUtleTogc3RyaW5nIH0+ID0gcmVzIGFzIEFycmF5PHtcbiAgICAgICAgICAgICAgICAgICAgU3Vic2NyaXB0aW9uS2V5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIEluc3RhbmNlS2V5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgfT47XG4gICAgICAgICAgICAgICAgaWYgKCFtYXAgfHwgbWFwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc3RhbmNlTWFwIGlzIGludmFsaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEluc3RhbmNlS2V5OiBzdHJpbmcgPSBtYXAuZmlsdGVyKChrKSA9PiBrLlN1YnNjcmlwdGlvbktleSA9PT0gc3Vic2NyaXB0aW9uS2V5KS5tYXAoKGopID0+IGouSW5zdGFuY2VLZXkpWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U25hcHNob3QoY3VycmVudEluc3RhbmNlS2V5LCBzdWJzY3JpcHRpb25LZXkpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgcmVzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdzbmFwc2hvdCBpcyBlbXB0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBub3cgdGhlIHNuYXBzaG90XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlczogQXJyYXk8eyBTZXJ2aWNlVHlwZTogc3RyaW5nOyBVcmw6IHN0cmluZzsgUHJvZHVjdFZlcnNpb246IHN0cmluZzsgUG9ydDogbnVtYmVyIH0+ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuU2VydmljZXMgYXMgQXJyYXk8eyBTZXJ2aWNlVHlwZTogc3RyaW5nOyBVcmw6IHN0cmluZzsgUHJvZHVjdFZlcnNpb246IHN0cmluZzsgUG9ydDogbnVtYmVyIH0+O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvIGlsYSBpbnRlcnZpZW5pIHF1aSBwZXIgYXBwaWQgcGVyc29uYWxpenphdGUgY29tZSBkY3NcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWRpcmVjdFVybCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZURDUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gc2VydmljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaSkgPT4gaS5TZXJ2aWNlVHlwZSA9PT0gJ000RlJPTlRFTkQnIHx8IGkuU2VydmljZVR5cGUgPT09ICdBUFBfRlJPTlRFTkQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChmKSA9PiBmLlVybClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gc2VydmljZXMuZmlsdGVyKChpKSA9PiBpLlNlcnZpY2VUeXBlID09PSAnRENTX0ZST05URU5EJykubWFwKChmKSA9PiBmLlVybClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzaWduYXRlZCByZWRpcmVjdCBpcyAke3JlZGlyZWN0VXJsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZVJlZGlyZWN0VXJsID0gYCR7cmVkaXJlY3RVcmx9P2p3dD0ke3Byb2Nlc3NpZH0mc3ViS2V5PSR7c3Vic2NyaXB0aW9uS2V5fSZpbnN0YW5jZUtleT0ke2N1cnJlbnRJbnN0YW5jZUtleX1gO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzaWduYXRlZCBmaW5hbCByZWRpcmVjdCBpcyAke2Jhc2VSZWRpcmVjdFVybH1gKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCwgYmFzZVJlZGlyZWN0VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCwgYmFzZVJlZGlyZWN0VXJsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGJhc2VSZWRpcmVjdFVybDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NuYXBzaG90IGNhbm5vdCBiZSBvYnRhaW5lZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzbmFwc2hvdCBjYW5ub3QgYmUgb2J0YWluZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbiBpYSBhYm91dCB0byBmYWlsLi4uJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldEluc3RhbmNlc01hcEZvclVzZXIgZmFpbGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JVc2VyKHVzZXI6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0SW5zdGFuY2VzTWFwRm9yQWNjb3VudFVybCgpICsgdXNlcikucGlwZShcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuQ29udGVudDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldENhbGVuZGFyKHN1YnNjcmlwdGlvbktleTogc3RyaW5nKSB7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmdldENhbGVuZGFyVXJsKCk7XG4gICAgICAgIGlmICghdXJsIHx8IHVybC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdXB1cmwgaXMgbm90IHVzZWQuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXG4gICAgICAgICAgICAuZ2V0PE9wZXJhdGlvblJlc3VsdD4oYCR7dGhpcy5nZXRDYWxlbmRhclVybCgpfT9TdWJzY3JpcHRpb25LZXk9JHtzdWJzY3JpcHRpb25LZXl9YCAvKiwgeyBoZWFkZXJzIH0qLylcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzLk1lc3NhZ2UgKyAnIChDb2RlOicgKyByZXMuQ29kZSArICcpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjYyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTbmFwc2hvdChpbnN0YW5jZUtleTogc3RyaW5nLCBzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0U25hcHNob3RTZXJ2aWNlVXJsKCkgKyBpbnN0YW5jZUtleSArICc/c3Vic2NyaXB0aW9uS2V5PScgKyBzdWJzY3JpcHRpb25LZXkpLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLkNvbnRlbnQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JBY2NvdW50VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnaW5zdGFuY2VzTWFwLyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENhbGVuZGFyVXJsKCkge1xuICAgICAgICB2YXIgaXVwdXJsID0gdGhpcy5nZXRJdXBVcmwoKTtcbiAgICAgICAgaWYgKCFpdXB1cmwgfHwgaXVwdXJsLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBpdXB1cmwgKyAnY2FsZW5kYXJqb2JzLyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFVwZGF0ZU1lc3NhZ2UoKSB7XG4gICAgICAgIHZhciBjdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfSVQoKSA/PyB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnZGUnKSkgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9ERSgpID8/IHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9FTigpO1xuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdwdCcpKSByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0JSKCkgPz8gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2JnJykpIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfQkcoKSA/PyB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnZXMnKSkgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9FUygpID8/IHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9FTigpO1xuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdwbCcpKSByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX1BMKCkgPz8gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ3JvJykpIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfUk8oKSA/PyB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyU3RvcmFnZSgpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkxLKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkxLKTtcbiAgICB9XG5cbiAgICBzdG9yYWdlU3Vic2NyaXB0aW9uRGF0YShzdWJzY3JpcHRpb25LZXk6IHN0cmluZywgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb246IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIHN1YnNjcmlwdGlvbktleSk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9yYWdlUXVlcnlQYXJhbXMoc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcsIGluc3RhbmNlS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SW5zdGFuY2VLZXkoaW5zdGFuY2VLZXkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TmFtZShsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlLkFza2luZ1Byb2Nlc3MgPT09IHRoaXMuZ2V0QXBwSWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3JhZ2VEYXRhKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgcmVzcEN1bHR1cmU6IHN0cmluZyA9XG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MgPT09IHVuZGVmaW5lZCB8fCBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3MubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgOiBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3M7XG4gICAgICAgIGNvbnN0IHJlc3BVaUN1bHR1cmU6IHN0cmluZyA9XG4gICAgICAgICAgICBsb2dpblJlc3BvbnNlLkxhbmd1YWdlID09PSB1bmRlZmluZWQgfHwgbG9naW5SZXNwb25zZS5MYW5ndWFnZS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICA6IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuTEssIGxvZ2luUmVzcG9uc2UuTG9naW5LZXkpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHJlc3BVaUN1bHR1cmUpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTLCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLlJvbGVzKSk7XG5cbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSwgbG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSk7XG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25LZXkpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSk7XG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25EZXNjKVxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkxLLCBsb2dpblJlc3BvbnNlLkxvZ2luS2V5KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIHJlc3BDdWx0dXJlKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHJlc3BVaUN1bHR1cmUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xuXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCBsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKTtcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbktleSk7XG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25EZXNjKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhc3luYyBnZXRTeW1ib2xzVG9Qcm9taXNlKCk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0U3ltYm9sc1VybCgpLCB7IGhlYWRlcnMgfSkudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHVibGljIGdldFN5bWJvbHNVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENoYW5nZVBhc3N3b3JkVXJsKCkgKyAnZ2V0c3ltYm9scy8nO1xuICAgIH1cblxuICAgIHNhdmVDdWx0dXJlKGN1bHR1cmU6IHN0cmluZywgdWlDdWx0dXJlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSwgY3VsdHVyZSk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHVpQ3VsdHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuU25hY2tCYXIobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCB7IGR1cmF0aW9uOiA1MDAwIH0pO1xuICAgIH1cblxuICAgIGdldFRva2VuKCkge1xuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcbiAgICB9XG5cbiAgICBnZXRMb2dpbktleSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkxLKTtcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuTEspO1xuICAgIH1cblxuICAgIGdldFJlZGlyZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCk7XG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlVTRVJfR0FURVdBWV9BVVRPUkVESVJFQ1QpO1xuICAgIH1cblxuICAgIGdldEFjY291bnROYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcbiAgICB9XG5cbiAgICBnZXRTdWJzY3JpcHRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04pO1xuICAgIH1cblxuICAgIGdldFN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcbiAgICB9XG5cbiAgICBnZXRDdWx0dXJlKCkge1xuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQ1VMVFVSRSk7XG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xuICAgIH1cblxuICAgIGdldFVJQ3VsdHVyZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFKTtcbiAgICB9XG5cbiAgICBnZXRJbnN0YW5jZUtleSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZKTtcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSU5TVEFOQ0VLRVkpO1xuICAgIH1cblxuICAgIHNldEluc3RhbmNlS2V5KGluc3RhbmNlS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSU5TVEFOQ0VLRVksIGluc3RhbmNlS2V5KTtcbiAgICAgICAgZWxzZSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5JTlNUQU5DRUtFWSk7XG4gICAgfVxuXG4gICAgZ2V0QXV0aFNlcnZpY2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXJsO1xuICAgIGdldEl1cFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5pdXB1cmw7IC8vaHR0cDovL2xvY2FsaG9zdDo1MjE3Mi9hcGkvXG4gICAgZ2V0UmVkaXJlY3RVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgucmVkaXJlY3RVcmw7XG4gICAgZ2V0UmVkaXJlY3RJZk5vdEF1dGhlbnRpY2F0ZWQgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnJlZGlyZWN0SWZOb3RBdXRoZW50aWNhdGVkO1xuICAgIGdldFVzZXJHYXRld2F5VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVzZXJHYXRld2F5VXJsO1xuICAgIGdldENyZWF0ZUFjY291bnRVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguY3JlYXRlQWNjb3VudFVybDtcbiAgICBnZXRDaGFuZ2VQYXNzd29yZFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5jaGFuZ2VQYXNzd29yZFVybDtcbiAgICBoYXNTdWJzY3JpcHRpb25TZWxlY3Rpb24gPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnN1YnNjcmlwdGlvblNlbGVjdGlvbjtcbiAgICBzaG93U2lnblVwID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zaG93U2lnblVwO1xuICAgIGdldEFwcElkID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZURDUyA/ICdEQ1MnIDogdGhpcy5lbnYuYXV0aC5hcHBJZDtcbiAgICB9O1xuICAgIGdldFByZUxvZ2luQXBwSWQgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgucHJlTG9naW5BcHBJZDtcbiAgICBpc1Nlc3Npb25TdG9yYWdlID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZTtcbiAgICBnZXRMb2dvVVJMID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmxvZ29VUkw7XG4gICAgZ2V0QmFja2dyb3VuZFVSTCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5iYWNrZ3JvdW5kVVJMO1xuICAgIGdldEJyYW5kTmFtZSA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYnJhbmQuYXBwbGljYXRpb25OYW1lO1xuICAgIGlzUmVkaXJlY3RFeHRlcm5hbCA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguaXNSZWRpcmVjdEV4dGVybmFsO1xuICAgIGdldFVwZGF0ZU1lc3NhZ2VfSVQgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9JVDtcbiAgICBnZXRVcGRhdGVNZXNzYWdlX0VOID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVwZGF0ZW1lc3NhZ2VfRU47XG4gICAgZ2V0VXBkYXRlTWVzc2FnZV9CUiA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlX0JSO1xuICAgIGdldFVwZGF0ZU1lc3NhZ2VfQkcgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9CRztcbiAgICBnZXRVcGRhdGVNZXNzYWdlX1JPID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVwZGF0ZW1lc3NhZ2VfUk87XG4gICAgZ2V0VXBkYXRlTWVzc2FnZV9ERSA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cGRhdGVtZXNzYWdlX0RFO1xuICAgIGdldFVwZGF0ZU1lc3NhZ2VfRVMgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9FUztcbiAgICBnZXRVcGRhdGVNZXNzYWdlX1BMID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnVwZGF0ZW1lc3NhZ2VfUEw7XG59XG4iXX0=