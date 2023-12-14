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
        this.getAppId = () => this.env.auth.appId; // todo ila intervieni qui per appid personalizzate come dcs
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
                    console.log('AuthService: Change Password Needed');
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
                    console.log('AuthService (cod.143): otp code needed');
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
        let redologin = false;
        console.log('login...');
        const loginresponse = await this.http
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
                    redologin = true;
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
        if (redologin) {
            console.log('redo login...');
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
    async openUpdateAlertDialog(info, title, dontshow, accountName, subscriptionKey) {
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
                if (!res || res.length === 0)
                    throw new Error('snapshot is empty');
                // we have now the snapshot
                const services = res.Services;
                // todo ila intervieni qui per appid personalizzate come dcs
                const redirectUrl = services
                    .filter((i) => i.ServiceType === 'M4FRONTEND' || i.ServiceType === 'APP_FRONTEND')
                    .map((f) => f.Url)[0];
                console.log(`Designated redirect is ${redirectUrl}`);
                const baseRedirectUrl = `${redirectUrl}?jwt=${this.getLoginKey()}&subKey=${subscriptionKey}&instanceKey=${currentInstanceKey}`;
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
/** @nocollapse */ /** @nocollapse */ TbAuthService.ɵfac = function TbAuthService_Factory(t) { return new (t || TbAuthService)(i0.ɵɵinject('env'), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i2.MatDialog), i0.ɵɵinject(i3.MatSnackBar)); };
/** @nocollapse */ /** @nocollapse */ TbAuthService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: TbAuthService, factory: TbAuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }, { type: i1.HttpClient }, { type: i0.Injector }, { type: i2.MatDialog }, { type: i3.MatSnackBar }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBMEIsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFpQyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUlwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7OztBQUluRixJQUFJLG1CQUFrQyxDQUFDO0FBQ3ZDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztBQUlyRCw4RUFBOEU7QUFDOUUsTUFBTSxPQUFPLGFBQWE7SUFvRHRCLDhFQUE4RTtJQUM5RSxZQUNtQixHQUFzQixFQUM3QixJQUFnQixFQUNoQixRQUFrQixFQUNsQixNQUFpQixFQUNq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RUFBRTtRQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsT0FBTyxFQUFFLHVFQUF1RTtRQUNoRixhQUFhLEVBQUUscUVBQXFFO1FBQ3BGLDRDQUE0QztRQUM1QywydFFBQTJ0UTtLQUM5dFE7SUFDRCxLQUFLLEVBQUU7UUFDSCxlQUFlLEVBQUUsV0FBVztRQUM1QixTQUFTLEVBQUUsMkNBQTJDO0tBQ3pEO0NBQ0gsQ0FBQTtnSEF4Q08sYUFBYSxjQXNEVixLQUFLO3FIQXREUixhQUFhLFdBQWIsYUFBYSxtQkFIVixNQUFNO3VGQUdULGFBQWE7Y0FKekIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkF3RFEsTUFBTTt1QkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgbWFwLCBjYXRjaEVycm9yLCB0aW1lb3V0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmFnZVZhcnMgfSBmcm9tICcuL21vZGVscy9zdG9yYWdlLXZhcnMnO1xyXG5cclxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0LCBDaGFuZ2VQYXNzd29yZEluZm8gfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9naW5SZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgTG9nb2ZmUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2xvZ29mZi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9nb2ZmUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dvZmYtcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBJc1ZhbGlkVG9rZW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvaXMtdmFsaWQtdG9rZW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IE9wZXJhdGlvblJlc3VsdCB9IGZyb20gJy4vbW9kZWxzL29wZXJhdGlvbi1yZXN1bHQnO1xyXG5pbXBvcnQgeyBUYkF1dGhFbnZpcm9ubWVudCB9IGZyb20gJy4vbW9kZWxzL2F1dGgtZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuXHJcbmxldCBhdXRoU2VydmljZUluc3RhbmNlOiBUYkF1dGhTZXJ2aWNlO1xyXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSAoKSA9PiBhdXRoU2VydmljZUluc3RhbmNlO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBERUZBVUxUX0VOVjogVGJBdXRoRW52aXJvbm1lbnQgPSB7XHJcbiAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjEwMzQ0L2FwaS8nLFxyXG4gICAgICAgICAgICBzdG9yZVVybDogJ2h0dHBzOi8vdGVzdC1zdG9yZS5tYWdvLmNsb3VkJyxcclxuICAgICAgICAgICAgaXVwdXJsOiAnJyxcclxuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMCcsXHJcbiAgICAgICAgICAgIGNoYW5nZVBhc3N3b3JkVXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1NjM5Mi9hcGkvJyxcclxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1NpZ25VcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFwcElkOiAnTTQnLFxyXG4gICAgICAgICAgICBwcmVMb2dpbkFwcElkOiAnTUNsb3VkUHJlTG9naW4nLFxyXG4gICAgICAgICAgICByZWRpcmVjdFVybDogJy8nLFxyXG4gICAgICAgICAgICByZWRpcmVjdElmTm90QXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXJHYXRld2F5VXJsOiAnJyxcclxuICAgICAgICAgICAgaXNSZWRpcmVjdEV4dGVybmFsOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2dpblBhZ2VVcmw6ICdsb2dpbicsXHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlOiBmYWxzZSxcclxuICAgICAgICAgICAgc25hcHNob3RTZXJ2aWNlVXJsOiAnJyxcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgdXBkYXRlbWVzc2FnZV9JVDpcclxuICAgICAgICAgICAgICAgIFwiU29ubyBwcmV2aXN0ZSBhdHRpdml0w6AgZGkgbWFudXRlbnppb25lIGVkIGFnZ2lvcm5hbWVudG8sIHBlciBxdWVzdG8gc3VsbGEgdHVhIHN1YnNjcmlwdGlvbiBAQHN1YiBwb3RyZWJiZXJvIHZlcmlmaWNhcnNpIGJyZXZpIGRpc3NlcnZpemkgaWwgPGI+IEBAZGF0ZTwvYj4sIGRhbGxlIG9yZSA8Yj4gQEBzdGFydGg8L2I+IGFsbGUgb3JlIDxiPiBAQGVuZGg8L2I+LjwvYnI+QXR0ZW56aW9uZSwgcGVyIGNvbnNlbnRpcmUgaWwgY29ycmV0dG8gc3ZvbGdpbWVudG8gZGVsbCdhZ2dpb3JuYW1lbnRvIGxlIHByb2NlZHVyZSBjaGUgZHVyYW50ZSBsbyBzdGVzc28gcmlzdWx0ZXJhbm5vIGFuY29yYSBpbiBlc2VjdXppb25lIHNhcmFubm8gaW50ZXJyb3R0ZS5cIixcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgdXBkYXRlbWVzc2FnZV9FTjpcclxuICAgICAgICAgICAgICAgICdEdWUgdG8gc3lzdGVtIG1haW50ZW5hbmNlIGFuZCB1cGRhdGVzIHRoZXJlIG1pZ2h0IGJlIGRpc3R1cmJhbmNlIGluIHlvdXIgc3Vic2NyaXB0aW9uIEBAc3ViIG9uIHRoZSA8Yj4gQEBkYXRlLCBiZXR3ZWVuIDxiPiBAQHN0YXJ0aCBhbmQgPGI+IEBAZW5kaDwvYj4uPC9icj4gJyxcclxuICAgICAgICAgICAgdXBkYXRlbWVzc2FnZV9ERTogJycsXHJcbiAgICAgICAgICAgIHVwZGF0ZW1lc3NhZ2VfQlI6ICcnLFxyXG4gICAgICAgICAgICB1cGRhdGVtZXNzYWdlX0VTOiAnJyxcclxuICAgICAgICAgICAgdXBkYXRlbWVzc2FnZV9CRzogJycsXHJcbiAgICAgICAgICAgIHVwZGF0ZW1lc3NhZ2VfUk86ICcnLFxyXG4gICAgICAgICAgICB1cGRhdGVtZXNzYWdlX1BMOiAnJyxcclxuICAgICAgICAgICAgbG9nb1VSTDogJ2h0dHBzOi8vbWFnb2Nsb3VkLXN0b3JlLXBkZi5zMy5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9sb2dpbi1sb2dvLnBuZycsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRVUkw6ICdodHRwczovL21hZ29jbG91ZC1zdG9yZS1wZGYuczMuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vbG9naW4tYmcucG5nJyxcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgLy8gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBVGdBQUFBMkNBWUFBQUJUQW9XdUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeVZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRRNElEYzVMakUyTkRBek5pd2dNakF4T1M4d09DOHhNeTB3TVRvd05qbzFOeUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREl4TGpBZ0tFMWhZMmx1ZEc5emFDa2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZSVGMwT0VKRU1EY3dORGxCTVRGRlFUbEROelZETkRSR05rTXpRMEV3UkRVaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJUYzBPRUpFTURnd05EbEJNVEZGUVRsRE56VkRORFJHTmtNelEwRXdSRFVpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRk56UTRRa1F3TlRBME9VRXhNVVZCT1VNM05VTTBORVkyUXpORFFUQkVOU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBGTnpRNFFrUXdOakEwT1VFeE1VVkJPVU0zTlVNME5FWTJRek5EUVRCRU5TSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QbDNlNER3QUFCVUFTVVJCVkhqYTdGMEpsQmJGRWU1ZGRoSGxNcXdvSWdnS0tpTEk0WWtnUnFPZ0lvbzNuaUFlTVFveEtzWW9oNklSaVJFVWp4Z0pDcEpvOElxQWthQVFOTUdZNEFFb0tJcXVBZ29SUlRua1dCRFkxSmVwZlE2MTNYUDJ6UC92N3RSN0grejBQMVBkMHpOZFUxMVZYVjFRWGw2dU1xcnhkQURoQ0VJblFnZENFMEpqd202RUFnSmVrcldFL3hLK0pMeFBXRUI0aTdBMDY3Nk04cFVLTWdGWFkra3d3cm1FVXdpSHh1RHpNbUVLNFVYQ2lxeGJNOG9FWEVhNXBKTUkxeExPc016M2U4TFRoRWNKcjJmZG5GRW00REpLazM1Q0dFSTRQb1c2WGlBTUpLek11ajJqVE1CbGxDVEJuamFHY0lIUGVhV0VOd256Q0I4U3ZpV3NZODFzRjBJSllXL2wyT3M2OGhSM1h3OSttd25EQ2ZkbWp5Q2pUTUJsbEFTZFNwaE1xSy81YlN0aFB1RnZoR244ZDFqcVRyaVUwSlhReG5ET0c0VEJoSDluanlPalRNQmxaSXVlOHREYUhpYmNwUnl2cUMyQ0YvWjZqenAvcHh6YlgwWVpaUUl1bzhpRXFlUk01WVI4U1BvcjRWYkN3Z1RyNzBLNGg5RE5VSC92N0JGbGxBbTRqS0pRVThKY1FqTlJEbnZZMVlSSktiWUZXdUkxbXZJSmhBRVIrTlVtdENXMFZJNGRzQkdoSHYrMmdmQWQ0VFBDWXNJSFBBWFBLQk53bVlDckp0U1lOYk85UkRrY0IrY1JsdVdnVGVmelZMbFFsRThrWEJiZytuMEk1eEJPNUNud1hnSHJYY1gzUFl1MTJjWFo2NUVKdUl5cU5uMUsyRStVd1NONldJN2IxWmFGVEZOUkRzL3VqWVpyVG1JdDcyeENzWVUyek9ScDg2enNOYWxaVkpoMVFiV2dzUnJoOW9weTdHRzVKa3dYTzdLd2RkTU5oRis0am1zUitoRCt3VzN2YTBtNFZRaE1DTG5YQ0tjclovbFpScGtHbDFFVm9LR0VPMFhaNDRUTDg3Q3RyN0N3Y2RQSnlvbTdlMVVqcE4yRWVMeDNDSXVVRTdPM1hEbTJOd2lydXF3aE5pY2NSZWpzSXh4TFdkQjlrTDArbVlETEtIK3BrMFl6K3J0eWJGYjVTQkE2VzRRR3RZT3dUVGxPQkIzOVNUbmVWMmgyWHdhc0J3SEp4eWtuRGhBMnZGMDE1NERmajdOWHFHWUlPQXdJUkx3L3pWL0tYRk5GZTU1UjlyMWh5SkFCMjg3blBHVkptL1lrSEttY3JCMzdFMXJ3d04vQkdzbFN3a2VFT1lSM2ZYamhIdHdlVXdpQWZaaFhGTnFEcDdYdFdVanN3WUtualBBRmEwMExXS2h1amxnSEZ2ZFBEM0FldkxBUGNsL0VJYnhIVnhMdUVPWFFHRS9JUkVBMUp4SndBOHQvb0VVUWVEbkdGYTcyTENiVXQ4aTdGcUhVeGYrQ0ZPL3JRc0tMaE0zbHdlbER3bWhDQncyL1lacnoyMGRvVjEzQ0FNSTB3c2FBN2ZxYThEVGhuSWg5TWNhRE4vaTJUcUQvRDJUZXVNZUZoQVB5NEYzUGtERHd6MUx4Z2wyWDQwWnRFKzNwYlpGM0Y4RjdYUXIzY3piaHpmTDROSlZ3R1BQY1RmUDdIU0hiVlk4d2d2QlZ6SGI5aCs4eGJMOHNGM3krSTV5WHd2Tm9sQTM4bWdONFVUY0twUTRHNnpvNVVpaDdLY2ViNXFaZExQSWZMSTRiS0NkV0t3bUNzUnU1MHA1VFRneFhYSUpSL0czQ0pZVFI0amNFdVE0UHdlczB3aWQ4VFdNTDk0bDdSQWpHTVNIYlVNcFRYZHpYd1d5U1NKcSt6ZVp0TmNzR3Q0RHRRZEwrTVRBSDdWbk9uakEzSVhSZ3FnWGVpTWQ2WDFQK0pkdWJiTklqeWxrNW9LTnRMQXhlWnhzYjdHanJDVVVzYlBabG9RRmIxVUVCNi9zcFlWeUE4L0RoZXBhRmk0NGdiRjVTTzJjVTJjTFh0ZVErN09vanlMQmFvbCtJdm1xVUNaMk0waFp3ME9ycXBkd1dESXFKbW5KYkF1N1B5b210MHRGWnlzbGhab05tRUhwcXltR2t2NThkT1Y4RTVJVWNibGNwWnlXQ2liQmd2bWxBWXpzY0Y2MDF2MEh3LzU2RjM2b0F2T0FjT1pjL2dzMDB2MmNHL0l6eXhzbXd3R0JiT1MvbCtmSXFRenZPc01EN1J6NTJwRmN0M2NOb0EvL0hDYnZFdEIzT01mQytNc0QxSllTVm1tdGhnN3c2UnJ0d1QrTU03WG9zc3dGbHlEVk1HbHlGeHRFOEpUbDdwY2NVeTRZR0I3dmlVTmN4d2lnSzFBL3hXSmlHSVZoMGU0dzZydWFwcVp2QTd3TFdqR3pRM1lSZmliSmludlo2RVVJdERoUmxpT3kvVkFXUExmTWlaQWg1U3FQMS81b3d6UEs3c3J0eXdsamFzRllLbXkxaW5kWW9aN0g5dTJ6cUNFb3dEY2cxcm9VOGJkNllBNTNqY1BWRCtGQmRMdHZFTnROUCtmNmlCcThXY3A4VnVuZ1VzbWxpZFVTZUNDUGFVN1NwZ1BtVnVjcnE4N01MRThJRVB0L3ovWDluVzRNcjU5Q0dOQ1R0YW84MjJORGcxZ21lUFFuVFJWbi9HUHpiYWRyOUxlR1FCUHJxZmxjZGx3VTQveGxOMitZazBLNFdoR1dhdWs2MndMdUVOYzJYQ2VzRGVIYmZKZ3dudEFyQXV3MTc3cmZ6LzhBT0RwOUtTOVBvUVJndlFwaE1CTy96Sk1LWkVlclpnN0JCYzYrdnhHajcwWUpmUlYvMkVPZmR6SFZ0Q3dIdzJjTFBmQW1QMlNHRVk4S0VpWGdKdVArbThIQUgrenpRdUFMdVNzSHZNeTQvUjVTWFJ1UmZvQm5ZbUc3dm4yQ2ZJYWFyWllEek9tcjY4M1dPQjB5aVhSQkVING42RVBmWE1BYS91elVmcURBRXdkSFdvNDVERE5jTlR2aTl4ek00UDJZSUVjYnVhU0hxYk93UjZoUDFQbzQxOE93bHpydTkzQzU5eExHZ0IvdUZpVWdQbnpSTTM1bWdPdjRqd204VFZ2a2wvNG9GM2dodFdDRU01eGRGNEQ5TzdidzNBVlplZE9UcFJGSzBSQVhiajFST2paRk9xVnZNcWJnWGZjUG1qaFhDY3pzdEFxLyszSWVZa2plSTBhYkwyWWt5eVBDN3FTKzJKUGo4a00vdVkrV2trNDhUUW9TK3huYU5DL2lkODUyd2lXbGpCVzJJMFladEFjdkxMUGNoVEM1WW5mSUI5Nk54VHE3RTRKVDJyaUV1VzRCdEdpbU9NV2pmc2NnZkFxdWhlSkR1Ky91Tk9QKzJrUHpoUWJ4Q2xGMmk3S1lDajBybmF6eW1wNlJRYnhuYjl0eUV2UnZDeE1qQjFqZ2hwbUNUOUFCN3NldmwrTGtjclp3d25QMHM4b1NndzU0YXA5ZFFYK241TERlYTZBeXNic0k2emR0WjB2ZHhHZm9nS1crMDNLZzlWT1ZZc2NkWUc3S1Z3MnlvT0o2dDBiNmc0ZTNpK3JKQ3d3bTZyK2RONGhpQzdaazhlZWdqeFBFb2xkN0d6TFBaMEwrdmFNOUpBYTY5UjlPdmt2RFZSbVlTQkFwL3hZNEdyTUU5aEIwZUpZYnJybE5PbUU2dU5zRHBFS0R1eGZ6K0lRNXhKUnZsOStZeDBjMUhNRTdsajlpTUtpU2NKck9EcUVqekcrNTlWeFpjYlpUM0xtNmRXWlB0dEpPQ29iSEJsYkNOUjFKRHl6YUk4WUovR2FHWU1NV1NEZTRZelQxMDE1dzNWcHd6TXlEL1FzSmFjZTJ2ODhROTNrbGpCeXRPdVEwWGF2cC9iNTlyK3ZuWVhWNGdIT2ZEQTJ1WEI3SDlXTkpWR3Z0akcwTmRneXozUnowZkI4bjdoTDRCK0p4RitMZFBQN1gyY0RMbzFrTFBzcmo4MGUzSWM1LzNLOE41WWVvNmd2QUhuM3RmNW43R3VvU1grN0dOUjJsYy9yYW9XRlhPVnphU1hjSXRMZFVobHk3QjV2RlBnOGJnSm1ReUNSSWVjN3lZL29MRzVzbFhVZTVzOVlSS1Awc013a2JXaXJKelBjNUhxTVpFdzI5Yitkb3psWlBteUlzUVR2QWdUOCtmZEpYM1pZMTllNDZlQ1FMSjZ4dCtHOFBhNStRQWZQNmluSXd2dC9yMGZWV2hNT1A5TGVXRWxHR0Z6OThNNSt6cjdzZEN3NHNHa2h2MkR1UnBnQTNxcjdIYmpIU3BwWEVKZ2tldUpqQzlFSmkyUFNmS2dqaFdUaFhIeU1QMmRaNjhOQ2VMNHova3FCMS9Fc2M5UGM3OW84Zno2YUI1Um42RUdMYUxDZU1KOS9IVU5GZDBoakxuNkJzVTBmeHp0OGJXV1VGd1hCeGFSUVJjbEt6aVMzajhqVEw4amh5QVBVek1DMTMycFRYaXQ0Y3QzRkJ0amFhRDNaY3F2QzQyTW5CZW90SGV2QWFJRkdqOWZPYjdTbFhlRnUvWlBIbGhZSzlwN3pwZXB1dzZic0xROCtLNHRlRzgvVDNzY3gzWkhoV1Y4TVcvSWNmUDVBbERPVGJlZVNnRzN6K3lvTlBSSkZYOTZSYVBaL3VrU2NEdEVBemMxRnRWenZZUmxvYXFuVE9zd3BBNndmS04vMUljMytWei9udWE2ZFROSHVjWGFZeTlDL1Brb2NzZDV0L09ZVnNXaWZlcG51R2RNeTMreDVSMWRSVWZoR2RvVEJtZ09SNVQ4akNFbWNubm12SU9QTzJ0N2dUdC9FMU5PWnlZSi91cGg0K0tGd3puRDQ3Um1GMDFRdE8yZHhiVHMrYkNKaFBrYS9hQTVzdGZ4Mk1LTEVNWVZ1YVJCdWVtejNMWWx0VnFaODl0WGFWUEgzNm00ZnJicXNFQU5DVkt1TWxpSGJlRnJMdTZrV2s1NEFWQjVyODNhenF6S0dKRGhvdHI4ZVdaYlBsbWI5TUlyaURUM3Z2Rk1Sd2hBejJtMmU2K1ExRG8rang1MkZMd3JzbHhlNzV4L1YxSEkrQndmSlRtT29SVExLOEdnNitycGd5aExYTXQxdkZucFE5TTdsWkRCTnc4UTNtN0lBTHVjYUhGNmJTd0lGUkhNM1c4M3ZLTndydHl0Q2diRS9CYUNBTHBmZXJ2Y2I3Y09HVkhDZzhTVXp6RURsN0x3bmVBcXJ4N2xIeW0yM1A4OG0wWGZTYmJkN0JCcTV0UkRRWmVpZEo3NUcxcjFXVktIMTkza0tvWkJQbWsyOWk4UVZBUHhqWGllS2dLSHhFK1JyemNNQncvYi9sRzVjb0lURTNESkZPVUc1TWNvdlRKTUxjS2dRYmhYVCtGQjRtc0RjaFlBc00wUWlFZTAweWpOL2xvZEdsVFE2SHB5aVU3cHBDYzZyQ2wzKzVLYjNQOElvRzZkQnNVTmVGM3BpYlFJazFaL2FBQzdsbWhVbU9LRmliMEFGK1NuNG15dmdsb2IyZUpzckQyUGFRVmt0NVczVnJadFVKd1FqUFpQNFdIS0dQWjFtczBSemw0V3VYd3BjTmE0NWF1NHcycThyckhob1pydjZvR2c4NlVibjlWQW5YcFFwUnE4VE9vQ2FTNy85cGhZbEFHYVFSVWk0RFh5ckNRWmNwL1M3eXdKSmRsUGFlaWVlQ2tEZThpelV1Q2FWZXBLT3VRMG9QY1lmamJMYVRkZEZnT1h6cG93RVUrQXRrMGhTNnVCb1BPWkxZb1NxQXVFODl0Q2Q5anZteXNySHRmeXNNSU9FUVJ5eWp5K3dPKzVETEE4NzRFcGdJWGk3S29LeTh3TlpKdTUxOW96cHN2am52a3lZT0c0OFp0bkc4ZDRrTmttN29IME1yV0dxNXRVZzBFbkdsUDM3MFRxS3VKb1g0NTA3QXRwQXBDbGlkRmUybkt0b1NOSXBiTG4vb29jL0NtU1h0Ym8rd3ZhYnBPSEg4WlUwTWM0Y01mTkVzY1E0alh6Wk9CTlVjY241Mmpkc2dsWXpwRCtGTER0ZTJxZ1lEN1J1bVh5RFZOb0s3T21yS1ZhbWN2ZXJsQjhNUVJSaVpOTzAzbkZ1UlllMDM1aHJBQ0RtczVONFhRNGpDMSs0a291eldCRzVRYTFwU1kvS2FyblZONXcwNGtWMGU4TE5SL1RCR3V5cE9CSlowMzErYWdEWWRxaE5RemhpbTFMaDExNzJvZzROWVpCTGh0dXlnY1NZZHJ5dVVLa0RLRDRLa1RzMjRkYlU2eG4wc01HdHk2S092QVpLQnZMOFBYQXlTWFVTQ055ZTh0Mzl3QW5xSzZhWlFGdnRJV04wenpza3dVWlQvUGs0RTFqUWRYQmNFQmNtSEtiWkFmUHF3ZjFDMFoyNmJSaGl0TUcwZFhBeUUzMDJCU09kZGlIVGNxdmJkV2h0cHNNSmdKU21MVWZZQ0hxU1F0TXEyRWVTT0tnSHRFVlRaa1AyS3dNMGpEZnhLRFRHWUR3Ykt2WlJiNGpsTTdKNjdFZzVTYlJNc05ZRm9xODM2b2FSSyswakxtY0pMbVE1QVV3YkZ4dkNqejJtZjNjWTluVU5YcEFVUDVlQlZ0b2Jra0pGM1ZiZnBkYnVqWGhRYU5NbXFZVXgrRGNGdVdVdi9DTEdSYXp6czJhZ2RMbTlTUnlsbjc1U1laWG9GbzQ5Y3MzMXc3emRmbkRvdjg1VDNjcnJHeGpORUkrMVo1TUxDa2dFYkl3SXNwMWYya09IN1BvTWxVa0NrRkV1d3FWWDI1RVpTQmZ4bW1kamIyNHAxdUtIL01NUFYvUTFOV3JESEJCQ0ZNQzd0cnl2K1RZdi9DVkxTYnBoelpmVDR0ak1GVTdoSS9VbnhWTGdyeEJZOUsvY1h4YkJWc3I0S2dKR1Bpc0pDOWl5aTdXZk1pL1VNbDQzQUk2KzJTb1QzZFZERFBkeHhDektTTW9ML1k1eHIwbnltdThtazJnMFNsK2NvL2gxelNaSHIza1dMOHdSaDg3MUo2NHpwb2lLSGNGRndQeFNDc3MrRlJRL2tMS2ZScHhRZTdxMmVmYXpMNjlncVlYZk1FVFRiTnhvYXQ2c0xzMnZOT3dJeSt4WnJzcE4wVHlFeTdXTlF4UTNQT2lacSsrSUEzbkxiZG51MnVPdFlRNnZxY3YwTFR0aUVKWmZFZHI2bnJ0eUUya2Q3a2thazFiSnV4bzloODEvVWpQTFlOMU5IUExQZk5PSTk3bTBab0dvSVhzbXRQOE1sODdIWDlXNGJyWm9kb2d5bEQ3eVpEOW1qVCtjMGk5T1dwdkkyZ2llN3gyamF3VjRpSzNoWFgza0tvcmFud2lBUUUzTFdXdHYzend5V2ErMm11T1crazVyelBDWWRiYk10MWd2ODJUb1h0ZFUzYkZGSnkxK0ZCSldsdVNEN0grYVNqWHNScHgvZjBFV3dQRzY2SGtOazlvSURybjhMSDBrMGJDWGNROXZHNHZoVUwrcTg5K09DajF5RGlWbitnaFQ1YkVhSjlvenl1dnpHa1FHeFFIbXhyenYwSUYvT2V2bDcwVDcrZDdlR1JlQ21nbXRoRnpPbFhzWEh4U0RFWFBqR0U2Z2xQVzJkaHhKeHFNR1EyY3gwajVtcHlRdXJ3YW1Icmc1M3RHczE1U0d5b3k3STZqS2NpNnlMVzM0RWRHbko1R3p4aVRaVi96QkZ5a2sweFRDZGhXbGdRbzIrd1BHNjBxcHg2ZWo1UEg4S0dDMXpPQm5ndkFrK0VMTUV6K3kxUHJacXhUZlpJbjJ2aG1aMHJ6QTZMTmVlVnNybWpkc2oyVjB6emZxNHFCNE9Yc0IyNm5ZK0RhQzZiZ0ZhNkhIWVlFNGY3MUkxbGVrZ2NHaVJCS0V3Q1YzajhYc3BqOFVNMmpjREczcFp3ckRLdm1zQnlLZFBhVjd5L3V1U2NiN0dKUWhkUHQ0UDdIODgyeURZQ01KMmRxdHdyU0dKcWNNQnpQaEoxcjVEOGdtaHdWNlNrdlprMGkrODh6cDFvNkFmc2REK2FjR2lJYVVnLzNxaFpSNXREYXNidENWOFplTDNHRzU0VWgyamJBTUk4ancySjQyNmFzOVR5UnNIWWpQdW9FRlBVdUhTS3gvMU5TcUMrcVlSZFEvYnpCSXYxWTJwNlVJUXByUzBhcUt2WHhwbzRlRlJOa2ZMelZESUxpNGQ1T0RpQ0VBS1FFWWo2ZlVERC9WYit5bFM0MHBGSkJZazFaeGdjSDZVYWJ5N3F2SUVCcnlLMmhsdkVYcll0L0ZWc3lBYjZEbXhZTjRWMTREb2tpZndreEQwdjVIdWVxdEZ5am1Pc1lNTXR2dHdmOHhlNWpPKzNLV3NlUjdGR2JtcmJTeXIreWdsb1BnZXpKbWNqdEFqOGVxcDA5OHp3MGx3dlpXM3JGZ3YxYkdXSHdyMFJycjJNSXdIaUpwMzlpQjBtUzNMZ3dIbUh0Y05aZXJkY1pUdmFhUkcrdUU4WXBHcWZDTHptK2ZBNFhhTk5GWWFzNDh3SVg0anZ4ZkViUG5VYzcyTnppVXBqTFdpa1l4Sm9GNXdmTnlXZ1BmZlh6REtDRXJhUSs2VVAvM1lKYVJROUEyclZUOGFvNDNsQ0N3dDlqREcyTWtMOVpXeVBxeFdnanJzczl1MVcxbGpQOGF1M1NGWE82eFpsMmNZb2plMXBpWXEyWk1xdlBUTDA0U0VWUHRsa2xBd0xSUnI3NDBHcWN0QnpCYjNLV2dpK0x0ZXIrSG01b0lYY2Fja0ZEeTF5RG12Q25TendRMGJaNFNFMXlxQTBrWEVpMi91NmNyK2Exa0Ird25iaDZSem00MmVmM01UWEZDZzdTVXNya25xdURhaFZJNXdLQWZHOVdXdnZvc3hCdDJ2WVhqcVR4OVppUzMwOGhXY2owSlpQNFQ0MkpRVFl3dTJlek04OWFLcis1V3lmM3hxeUwzZXc3UnEyVmlUQ3dIcm1md1d0RjA0R0RNUWZDNFAyZXhFNkNRWlpkOWFLSHNvN3VOTkVNNFZUb3JNdzF1Smw3K2M2M2pQQzFBUExaR3pzUU45TUJkc3R2aTVQQS9yeTRBeEttM2lnUHBWZ2JOSFozSis5VkxqSStrMDhNTzdWR05PVHBpYmNqNWpTNzhhRGJoMFBvbHhNazJ3UzdnbXJaaG9ySnhnWWczdzl2MmNmcThwcndaT2dJbTVEY3phdDFPSTJyT0grL2JxcWRPYi8zYS9LQ2RqRGpXQWJzZ2NpOGpxUStlQ2hZQzNraUloOElDUVJoZCtJQjdaTXJkU0lQVUF0ZUlCRlNZdDByRXZ6Q3hzOFc0c0gxRDBxL0Y2ZElHeUQxNDAvSksxWVl5M21kc0J1czVFOWFLK3pwekN0bHdrdk01WlhuYUNjSGNNYXNQWmN3RzNid0VMa1BmYnl6YTVLTDNwR05aUCtKOEFBREFQWHdHRXJ2QVVBQUFBQVNVVk9SSzVDWUlJPSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyYW5kOiB7XHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uTmFtZTogJ01hZ29DbG91ZCcsXHJcbiAgICAgICAgICAgIGJhbm5lclVybDogJ2Fzc2V0cy9pbWFnZXMvbG9nb21hZ29jbG91ZC13aGl0ZS0zMTIucG5nJyxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGVudjogVGJBdXRoRW52aXJvbm1lbnQ7XHJcbiAgICBsb2dnZWRPdXQkID0gbmV3IFN1YmplY3QoKTtcclxuICAgIGVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgb2tNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgbGFuZ0l0OiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gICAgZ2V0IHJvdXRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8Um91dGVyPihSb3V0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgQEluamVjdCgnZW52JykgZW52OiBUYkF1dGhFbnZpcm9ubWVudCxcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICkge1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZW52ID0gXy5kZWZhdWx0c0RlZXAoZW52LCBUYkF1dGhTZXJ2aWNlLkRFRkFVTFRfRU5WLCBlbnYpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUYkF1dGhFbnZpcm9ubWVudCcsIHRoaXMuZW52KTtcclxuICAgICAgICB0aGlzLmxhbmdJdCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGNoZWNrQ29ubmVjdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQodGhpcy5nZXRCYXNlVXJsKCkpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGltZW91dCg1MDAwKSxcclxuICAgICAgICAgICAgICAgIG1hcCgoX18pID0+IHRydWUpLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSaXRvcm5hIGxhIGJhc2UgdXJsIGRlbCBiYWNrZW5kLFxyXG4gICAgICogY2FyaWNhdGEgZGEgdW4gZmlsZSBkaSBjb25maWd1cmF6aW9uZSBjYXJpY2F0byBkaW5hbWljYW1lbnRlIChhc3NldHMvZW52aXJvbm1lbnQuanNvbilcclxuICAgICAqL1xyXG4gICAgZ2V0QmFzZVVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC51cmw7XHJcbiAgICBnZXRTbmFwc2hvdFNlcnZpY2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGguc25hcHNob3RTZXJ2aWNlVXJsO1xyXG4gICAgZ2V0TG9naW5QYWdlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmxvZ2luUGFnZVVybDtcclxuICAgIGdldFN0b3JlVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnN0b3JlVXJsO1xyXG4gICAgLypcclxue1xyXG4gIHR5cGU6IEpXVCxcclxuICBhcHBpZDogTTQsXHJcbiAgc2VjdXJpdHlWYWx1ZTogand0RW5jb2RlZFxyXG59XHJcbiovXHJcbiAgICAvLyBtb2RpZmljYSBwZXIgdW5pZm9ybWFyZSBsIGhlYWRlcixvIGNoZSBhcnJpdmEgdW4gcG8gY2FwaXRhbGl6emF0byB1biBwbyBuby4gLy9yaWY6IElsYXJpYSBlIEx1Y2FcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZ2V0QXV0aG9yaXphdGlvbkhlYWRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdKV1QnLFxyXG4gICAgICAgICAgICBhcHBJZDogJ000JyxcclxuICAgICAgICAgICAgc2VjdXJpdHlWYWx1ZTogdGhpcy5nZXRUb2tlbigpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgcHJlbG9naW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPExvZ2luUmVzcG9uc2U+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJlbG9naW4uLi4nKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0UHJlTG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGNhbWJpbyBwYXNzd29yZCBlIG51b3ZvIHRlbnRhdGl2byBkaSBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDaGFuZ2UgUGFzc3dvcmQgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2VQYXNzd29yZERpYWxvZyhsb2dpblJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlIChjb2QuNCk6IEFjY291bnQgY29uZmlybWF0aW9uIE5lZWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgYXR0aXZhcmUgbCdhY2NvdW50IGNoZSBub24gaGEgYW5jb3JhIGVmZmV0dHVhdG8gbGEgcHJvY2VkdXJhP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW52YWxpZERhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZSAoY29kLjQ2KTogJyArIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSB0aGlzLkxhbmdJVCgpID8gJ0NvZGljZSBub24gdmFsaWRvLicgOiAnSW52YWxpZCBjb2RlLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlID09PSA1OCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlIChjb2QuNTgpOiBBY2NvdW50IExvY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5NZXNzYWdlID0gdGhpcy5nZXRMb2NrZWRVc2VyTWVzc2FnZShsb2dpblJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTQzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2UgKGNvZC4xNDMpOiBvdHAgY29kZSBuZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDExNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlIChjb2QuMTE2KTogdXNlciBhbHJlYWR5IGxvZ2dlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBwZXIgMTQzICggb3RwbmVlZGVkKSBlIDExNiAoYWxyZWFkeUxvZ2dlZCkpbm9uIG1vc3RybyBlcnJvcmUgcm9zc28gY2hlIHNlbWJyYSBncmF2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHRDb2RlICE9PSAxNDMgJiYgbG9naW5SZXNwb25zZS5SZXN1bHRDb2RlICE9PSAxMTYpIHRoaXMuZXJyb3JNZXNzYWdlID0gbG9naW5SZXNwb25zZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9rTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgbG9naW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPExvZ2luUmVzcG9uc2U+IHtcclxuICAgICAgICAvLydsb2dpbicpO1xyXG4gICAgICAgIGxldCByZWRvbG9naW4gPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9naW4uLi4nKTtcclxuICAgICAgICBjb25zdCBsb2dpbnJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PExvZ2luUmVzcG9uc2U+KHRoaXMuZ2V0TG9naW5VcmwoKSwgbG9naW5SZXF1ZXN0KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgobG9naW5SZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gMTkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pIHNwb3N0byBzdSBwYWdpbmEgcGVyIGNhbWJpbyBwYXNzd29yZCBlIG51b3ZvIHRlbnRhdGl2byBkaSBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDaGFuZ2UgUGFzc3dvcmQgTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2VQYXNzd29yZERpYWxvZyhsb2dpblJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkb2xvZ2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE0Mykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgcmljaGllc3RhIG90cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBvdHAgY29kZSBOZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZG9sb2dpbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvIGNvc2UgdGlwbyBtb3N0cmFyZSB1bmEgbWFzY2hlcmEgY2hlIGFjY2V0dGkgaWwgY29kaWNlIGUgbG8gcmltYW5kaSBpbmRpZXRybyBwZXIgaWwgY2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDExNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWkgc3Bvc3RvIHN1IHBhZ2luYSBwZXIgcmljaGllc3RhIG90cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiB1c2VyIGFscmVhZHkgbG9nZ2VkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbyBjb3NlIHRpcG8gbW9zdHJhcmUgdW5hIG1hc2NoZXJhIGNoZSBjaGllZGEgc2Ugc2kgdnVvbGUgY2FuY2VsbGFyZSBsYSBwcmVjZWRlbnRlIGxvZ2luIHJpbWFuZGkgaW5kaWV0cm8gbGEgcmlzcG9zdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQWNjb3VudCBjb25maXJtYXRpb24gTmVlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaSBzcG9zdG8gc3UgcGFnaW5hIHBlciBhdHRpdmFyZSBsJ2FjY291bnQgY2hlIG5vbiBoYSBhbmNvcmEgZWZmZXR0dWF0byBsYSBwcm9jZWR1cmE/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvIGFtbWV0dG8gY2hlIGxhIHBhc3N3b3JkIHNpYSAgaWwgY29kaWNlPyBtYSBpbiByZWxhdMOgIG9nbmkgc2l0byBsbyBmYSBpbiBkdWUgc3RlcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29sIGNsaWNrIHN1bGwgbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9PT0gNTgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQWNjb3VudCBMb2NrZWQnICsgbG9naW5SZXNwb25zZS5NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IHRoaXMuZ2V0TG9ja2VkVXNlck1lc3NhZ2UobG9naW5SZXNwb25zZS5NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE0OSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBTdWJzY3JpcHRpb24gcmVxdWlyZXMgMkZBJyArIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSB0aGlzLmdldDJGQVJlcXVpcmVkTWVzc2FnZShsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXV0aFNlcnZpY2U6IENsZWFyaW5nIHN0b3JhZ2UgZHVlIHRvIExvZ2luIGZhaWx1cmUgZm9yICcgKyBsb2dpblJlcXVlc3QuYWNjb3VudE5hbWUgKyAnLCByZXN1bHQgY29kZSAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA9IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA/IGxvZ2luUmVzcG9uc2UuTWVzc2FnZSA6ICdMb2dpbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2luUmVzcG9uc2UuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDE0MyB8fCBsb2dpblJlc3BvbnNlLlJlc3VsdENvZGUgPT09IDExNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJzsgLy8gbm9uIG1vc3RybyBlcnJvcmUgcm9zc28gY2hlIHNlbWJyYSBncmF2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5va01lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBsb2dpblJlc3BvbnNlLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXROYW1lKGxvZ2luUmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZURhdGEobG9naW5SZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dpblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogTG9nT2ZmIGR1ZSB0byBBY2NvdW50IG5vdCBhbGxvd2VkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ29mZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLk1lc3NhZ2UgPSAnQWNjb3VudCBub3QgYWxsb3dlZC4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlc3BvbnNlLkp3dFRva2VuID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuUmVzdWx0Q29kZSA9IDk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5SZXNwb25zZS5SZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG5cclxuICAgICAgICBpZiAocmVkb2xvZ2luKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWRvIGxvZ2luLi4uJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvZ2luKGxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiBsb2dpbnJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZ2V0TG9ja2VkVXNlck1lc3NhZ2UobWVzc2FnZUZyb21Mb2dpbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFtZXNzYWdlRnJvbUxvZ2luKSByZXR1cm4gbWVzc2FnZUZyb21Mb2dpbjtcclxuICAgICAgICBjb25zdCBzZWNvbmRzOiBudW1iZXIgPSArbWVzc2FnZUZyb21Mb2dpbjtcclxuICAgICAgICBsZXQgbXNnID0gbWVzc2FnZUZyb21Mb2dpbjtcclxuICAgICAgICBpZiAoaXNOYU4oc2Vjb25kcykpIHJldHVybiBtc2c7XHJcbiAgICAgICAgaWYgKHNlY29uZHMgPCA2MCAmJiBzZWNvbmRzID4gLTEpIG1zZyA9IGBMb2dpbiBMb2NrZWQuIFBsZWFzZSB0cnkgYWdhaW4gaW4gJHtzZWNvbmRzfSBzZWNvbmRzLi4uYDtcclxuICAgICAgICBlbHNlIGlmIChzZWNvbmRzID49IDYwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pblZhbCA9IE1hdGgucm91bmQoc2Vjb25kcyAvIDYwKTtcclxuICAgICAgICAgICAgbXNnID1cclxuICAgICAgICAgICAgICAgIG1pblZhbCA9PT0gMSA/IGBMb2dpbiBMb2NrZWQuIFBsZWFzZSB0cnkgYWdhaW4gaW4gb25lIG1pbnV0ZS4uLmAgOiBgTG9naW4gTG9ja2VkLiBQbGVhc2UgdHJ5IGFnYWluIGluICR7bWluVmFsfSBtaW51dGVzLi4uYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGdldDJGQVJlcXVpcmVkTWVzc2FnZShkZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKVxyXG4gICAgICAgICAgICByZXR1cm4gYFF1ZXN0YSBzdWJzY3JpcHRpb24gJHtkZXNjcmlwdGlvbn0gcmljaGllZGUgbCdhdXRlbnRpY2F6aW9uZSBhIGR1ZSBmYXR0b3JpISBMZWdnaSBsYSBtYWlsIHBlciB1bHRlcmlvcmkgZGV0dGFnbGlgO1xyXG4gICAgICAgIHJldHVybiBgVGhpcyBTdWJzY3JpcHRpb24gJHtkZXNjcmlwdGlvbn0gcmVxdWlyZXMgdHdvIGZhY3RvciBhdXRlbnRpY2F0aW9uISBQbGVhc2UgcmVhZCB0aGUgRW1haWxzIGZvciBmdXJ0aGVyIGRldGFpbHMuYDtcclxuICAgIH1cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgb3BlblVwZGF0ZUFsZXJ0RGlhbG9nKGluZm86IHN0cmluZywgdGl0bGU6IHN0cmluZywgZG9udHNob3c6IHN0cmluZywgYWNjb3VudE5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0RGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2U6IGluZm8sXHJcbiAgICAgICAgICAgICAgICBEb250U2hvdzogZG9udHNob3csXHJcbiAgICAgICAgICAgICAgICBTdWJLZXk6IHN1YnNjcmlwdGlvbktleSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9rTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWRpcmVjdEV4dGVybmFsKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbyBleHRlcm5hbC4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmxGb3JTdWJzY3JpcHRpb24oYWNjb3VudE5hbWUsIHN1YnNjcmlwdGlvbktleSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbyBpbnRlcm5hbCEnKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgb3BlbkNoYW5nZVBhc3N3b3JkRGlhbG9nKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgbGV0IHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgY29uc3Qgb3BSZXMgPSBhd2FpdCB0aGlzLmdldFN5bWJvbHNUb1Byb21pc2UoKTtcclxuICAgICAgICBjb25zdCBwc3dSdWxlc1N5bWJvbCA9IG9wUmVzLkNvbnRlbnQ7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VfMTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtZXNzYWdlXzI6IHN0cmluZztcclxuICAgICAgICBsZXQgbWVzc2FnZV8zOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VfNDogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtZXNzYWdlXzU6IHN0cmluZztcclxuICAgICAgICBsZXQgbWVzc2FnZV82OiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VfNzogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtZXNzYWdlXzg6IHN0cmluZztcclxuICAgICAgICBsZXQgbWVzc2FnZV85OiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VfMTA6IHN0cmluZztcclxuICAgICAgICBsZXQgbWVzc2FnZV8xMTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBwbGFjZUhvbGRlcl8xOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHBsYWNlSG9sZGVyXzI6IHN0cmluZztcclxuICAgICAgICBjb25zdCBjdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xyXG4gICAgICAgICAgICB0aXRsZSA9ICdNb2RpZmljYSBwYXNzd29yZCc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfMSA9ICdMYSBudW92YSBwYXNzd29yZCBkZXZlIGVzc2VyZSBjb21wb3N0YSBkYSBhbG1lbm8gJztcclxuICAgICAgICAgICAgbWVzc2FnZV8yID0gJzggY2FyYXR0ZXJpICc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfMyA9ICdlIGNvbnRlbmVyZSB0YXNzYXRpdmFtZW50ZSAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzQgPSAnMyBkaSBxdWVzdGUgNCBjb25kaXppb25pOic7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfNSA9ICdhdmVyZSBhbG1lbm8gJztcclxuICAgICAgICAgICAgbWVzc2FnZV82ID0gJ3VuYSBtYWl1c2NvbGEnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzcgPSAnYXZlcmUgJztcclxuICAgICAgICAgICAgbWVzc2FnZV84ID0gJ2NhcmF0dGVyaSBtaW51c2NvbGknO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzkgPSAnYWxtZW5vIHVuIG51bWVybyAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzEwID0gJyh0cmEgMCBlIDkpJztcclxuICAgICAgICAgICAgbWVzc2FnZV8xMSA9ICd1biBzaW1ib2xvIHRyYSBxdWVzdGkgYSBzZWd1aXJlICc7XHJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyXzEgPSAnUGFzc3dvcmQnO1xyXG4gICAgICAgICAgICBwbGFjZUhvbGRlcl8yID0gJ0NvbmZlcm1hIHBhc3N3b3JkJztcclxuICAgICAgICAgICAgLy90aGlzLm9rTWVzc2FnZSA9IFwiUGFzc3dvcmQgbW9kaWZpY2F0YSBjb24gc3VjY2Vzc28hXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGl0bGUgPSAnQ2hhbmdlIHBhc3N3b3JkJztcclxuICAgICAgICAgICAgbWVzc2FnZV8xID0gJ1RoZSBuZXcgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzIgPSAnOCBjaGFyYWN0ZXJzICc7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VfMyA9ICdhbmQgY29udGFpbiAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzQgPSAnMyBvZiB0aGVzZSA0IGNvbmRpdGlvbnM6JztcclxuICAgICAgICAgICAgbWVzc2FnZV81ID0gJ2hhdmUgYXQgbGVhc3QgJztcclxuICAgICAgICAgICAgbWVzc2FnZV82ID0gJ29uZSB1cHBlcmNhc2UnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzcgPSAnaGF2ZSAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzggPSAnbG93ZXJjYXNlIGNoYXJhY3RlcnMnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzkgPSAnYXQgbGVhc3Qgb25lIG51bWJlciAnO1xyXG4gICAgICAgICAgICBtZXNzYWdlXzEwID0gJyhiZXR3ZWVuIDAgYW5kIDkpJztcclxuICAgICAgICAgICAgbWVzc2FnZV8xMSA9ICdvbmUgc3ltYm9sIGFtb25nIHRoZXNlIHRvIGZvbGxvdyAnO1xyXG4gICAgICAgICAgICBwbGFjZUhvbGRlcl8xID0gJ1Bhc3N3b3JkJztcclxuICAgICAgICAgICAgcGxhY2VIb2xkZXJfMiA9ICdDb25maXJtIHBhc3N3b3JkJztcclxuICAgICAgICAgICAgLy90aGlzLm9rTWVzc2FnZSA9IFwiUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNmdWxseSFcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaWFsb2cub3BlbihDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBUaXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzE6IG1lc3NhZ2VfMSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfMjogbWVzc2FnZV8yLFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZV8zOiBtZXNzYWdlXzMsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzQ6IG1lc3NhZ2VfNCxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfNTogbWVzc2FnZV81LFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZV82OiBtZXNzYWdlXzYsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzc6IG1lc3NhZ2VfNyxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfODogbWVzc2FnZV84LFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZV85OiBtZXNzYWdlXzksXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXzEwOiBtZXNzYWdlXzEwLFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZV8xMTogbWVzc2FnZV8xMSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VfMTI6IHBzd1J1bGVzU3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgUGxhY2VIb2xkZXJfMTogcGxhY2VIb2xkZXJfMSxcclxuICAgICAgICAgICAgICAgIFBsYWNlSG9sZGVyXzI6IHBsYWNlSG9sZGVyXzIsXHJcbiAgICAgICAgICAgICAgICBMb2dpblJlcXVlc3Q6IGxvZ2luUmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIEN1cnJlbnRCcm93c2VyTGFuZ3VhZ2U6IGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaXNWYWxpZFRva2VuKGF1dGh0b2tlbiA9ICcnKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIWF1dGh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCBvcHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgb3ByZXMuTWVzc2FnZSA9ICdObyBhdXRodG9rZW4nO1xyXG4gICAgICAgICAgICByZXR1cm4gb3ByZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRJc1ZhbGlkVG9rZW5VcmwoKSwgbmV3IElzVmFsaWRUb2tlblJlcXVlc3QoYXV0aHRva2VuKSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAoKGpPYmo6IE9wZXJhdGlvblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4gLSByZXNwb25zZScsIGpPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghak9iai5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgak9iai5NZXNzYWdlID0gak9iai5NZXNzYWdlID8gak9iai5NZXNzYWdlIDogJ2lzVmFsaWRUb2tlbiBlcnJvci4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZTogQ2xlYXJpbmcgc3RvcmFnZSBkdWUgdG8gVG9rZW4gVmFsaWRhdGlvbiBmYWlsdXJlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbjogJyArIGF1dGh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gak9iai5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2NjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwuaW5jbHVkZXModGhpcy5nZXRMb2dpblBhZ2VVcmwoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbXBhbmllc0ZvclVzZXIodXNlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpICsgdXNlcikucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5SZXN1bHQpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuQ29udGVudCAmJiByZXMuQ29udGVudC5zdWJzY3JpcHRpb25zID8gcmVzLkNvbnRlbnQuc3Vic2NyaXB0aW9ucyA6IFtdO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJc1ZhbGlkVG9rZW5VcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2lzdmFsaWR0b2tlbi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2dpblVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnbG9naW4vJztcclxuICAgIH1cclxuICAgIGdldFByZUxvZ2luVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdsb2dpbi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2dvdXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJ2xvZ29mZi8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDaGFuZ2VQYXNzd29yZEFwaVVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFuZ2VQYXNzd29yZFVybCgpICsgJ2NoYW5nZXBhc3N3b3JkLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2VuZE9UUFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAncmVzZW5kb3RwX3YzLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE9MRHJlc2VuZE9UUFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAncmVzZW5kb3RwLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlc2V0UGFzc3dvcmRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRVcmwoKSArICdyZXNldHBhc3N3b3JkLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN1YnNLZXlzRm9yQWNjb3VudFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50Lyc7XHJcbiAgICB9XHJcblxyXG4gICAgLyphc3luYyBzZW5kT1RQKGNwaTogT1RQSW5mbyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XHJcbiAgICAgY29uc3QgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNwaSk7XHJcbiAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhbGlnblxyXG4gICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgLnBvc3Q8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmxvZ2luKCksIGJvZHlTdHJpbmcsIHsgaGVhZGVycyB9KVxyXG4gICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlcy5NZXNzYWdlICsgJyAoQ29kZTonICsgcmVzLkNvZGUgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjY7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICApXHJcbiAgICAgICAgIC50b1Byb21pc2UoKTtcclxuIH0qL1xyXG5cclxuICAgIGFzeW5jIGNoYW5nZVBhc3N3b3JkKGNwaTogQ2hhbmdlUGFzc3dvcmRJbmZvKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBjb25zdCBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY3BpKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGFsaWduXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0Q2hhbmdlUGFzc3dvcmRBcGlVcmwoKSwgYm9keVN0cmluZywgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzLk1lc3NhZ2UgKyAnIChDb2RlOicgKyByZXMuQ29kZSArICcpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBMYW5nSVQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFuZ0l0ICE9IG51bGwpIHRoaXMubGFuZ0l0ID0gbmF2aWdhdG9yLmxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ0l0O1xyXG4gICAgfVxyXG5cclxuICAgIE9MRHJlc2VuZE9UUChhY2NuYW1lOiBzdHJpbmcsIGFsdGVybmF0aXZlOiBib29sZWFuKTogT2JzZXJ2YWJsZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuXHJcbiAgICAgICAgbGV0IHdhcm5pbmcgPSB0aGlzLkxhbmdJVCgpID8gJ0F0dGVuemlvbmUnIDogJ1dhcm5pbmcnO1xyXG4gICAgICAgIGxldCBzdWNjZXNzTWVzc2FnZSA9IHRoaXMuTGFuZ0lUKCkgPyAnT3RwIGludmlhdG8nIDogJ090cCBzZW50JztcclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdPdHAgbm9uIGludmlhdG8nIDogJ090cCBub3Qgc2VudCc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuT0xEcmVzZW5kT1RQVXJsKCkgKyBhY2NuYW1lICsgJy8nICsgYWx0ZXJuYXRpdmUsIHsgaGVhZGVycyB9KS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TbmFja0JhcihgJHt3YXJuaW5nfTogJHtyZXMuTWVzc2FnZX1gLCAnT0snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TbmFja0JhcihzdWNjZXNzTWVzc2FnZSwgJ09LJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c30uXFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmVzLk1lc3NhZ2UgPSBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9Llxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2Njk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5TbmFja0JhcihgJHt3YXJuaW5nfTogJHtlcnJvci5tZXNzYWdlfWAsICdPSycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZW5kT1RQMihhY2NuYW1lOiBzdHJpbmcsIHByb2Nlc3NJRDogc3RyaW5nLCBhbHRlcm5hdGl2ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuXHJcbiAgICAgICAgbGV0IHdhcm5pbmcgPSB0aGlzLkxhbmdJVCgpID8gJ0F0dGVuemlvbmUnIDogJ1dhcm5pbmcnO1xyXG4gICAgICAgIGxldCBzdWNjZXNzTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgICBzd2l0Y2ggKGFsdGVybmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdTbXMgaW52aWF0bycgOiAnU21zIHNlbnQnO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gdGhpcy5MYW5nSVQoKSA/ICdTbXMgbm9uIGludmlhdG8nIDogJ1NtcyBub3Qgc2VudCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2UgPSB0aGlzLkxhbmdJVCgpID8gJ0UtbWFpbCBpbnZpYXRhJyA6ICdFLW1haWwgc2VudCc7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSB0aGlzLkxhbmdJVCgpID8gJ0UtbWFpbCBub24gaW52aWF0YScgOiAnRS1tYWlsIG5vdCBzZW50JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2UgPSB0aGlzLkxhbmdJVCgpID8gJ090cCBpbnZpYXRvJyA6ICdPdHAgc2VudCc7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSB0aGlzLkxhbmdJVCgpID8gJ090cCBub24gaW52aWF0bycgOiAnT3RwIG5vdCBzZW50JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5yZXNlbmRPVFBVcmwoKSArIGFjY25hbWUgKyAnLycgKyBwcm9jZXNzSUQgKyAnLycgKyBhbHRlcm5hdGl2ZSwgeyBoZWFkZXJzIH0pLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjYzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKGAke3dhcm5pbmd9OiAke3Jlcy5NZXNzYWdlfWAsICdPSycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFsdGVybmF0aXZlICE9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoc3VjY2Vzc01lc3NhZ2UsICdPSycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9Llxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJlcy5NZXNzYWdlID0gYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICAgICAgICAgICAgICAgIHJlcy5Db2RlID0gNjY5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoYCR7d2FybmluZ306ICR7ZXJyb3IubWVzc2FnZX1gLCAnT0snKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlc2V0cGFzc3dvcmQoYWNjbmFtZTogc3RyaW5nKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGFsaWduXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0UmVzZXRQYXNzd29yZFVybCgpICsgYWNjbmFtZSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IG5ldyBPcGVyYXRpb25SZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbmV3IE9wZXJhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5NZXNzYWdlID0gYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfS5cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICAgICAgICAgICAgICAgICAgICByZXMuQ29kZSA9IDY2MTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwuaW5jbHVkZXModGhpcy5nZXRMb2dpblBhZ2VVcmwoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGxvZ29mZigpIHtcclxuICAgICAgICBjb25zdCBsb2dvZmZSZXF1ZXN0OiBMb2dvZmZSZXF1ZXN0ID0gbmV3IExvZ29mZlJlcXVlc3QodGhpcy5nZXRUb2tlbigpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxMb2dvZmZSZXNwb25zZT4odGhpcy5nZXRMb2dvdXRVcmwoKSwgbG9nb2ZmUmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKGxvZ29mZlJlc3BvbnNlOiBMb2dvZmZSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2dvZmZSZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlOiBDbGVhcmluZyBzdG9yYWdlIGR1ZSB0byBMb2dvZmYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRPdXQkLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2dvZmZSZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb2ZmV2l0aEZldGNoKCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ29mZlJlcXVlc3Q6IExvZ29mZlJlcXVlc3QgPSBuZXcgTG9nb2ZmUmVxdWVzdCh0aGlzLmdldFRva2VuKCkpO1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gSlNPTi5zdHJpbmdpZnkobG9nb2ZmUmVxdWVzdCk7XHJcbiAgICAgICAgbGV0IGxvZ291dCA9IGZldGNoKHRoaXMuZ2V0TG9nb3V0VXJsKCksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgIGtlZXBhbGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRoaXMuZ2V0QXV0aG9yaXphdGlvbkhlYWRlcigpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvZ291dC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmF2aWdhdGVVc2VyR2F0ZXdheSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZW50ZXJpbmcgbmF2aWdhdGVVc2VyR2F0ZXdheS4uJyk7XHJcbiAgICAgICAgY29uc3QgdXNlckdhdGV3YXlVcmwgPSB0aGlzLmdldFVzZXJHYXRld2F5VXJsKCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXJnYXRld2F5IHVybCBleGlzdHMsIHRoZW4gcmVkaXJlY3QgdG8gaXRcclxuICAgICAgICBpZiAodXNlckdhdGV3YXlVcmwgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBGb3VuZCBnZXRVc2VyR2F0ZXdheVVybCAke3VzZXJHYXRld2F5VXJsfWApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gdXNlckdhdGV3YXlVcmw7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG90aGVyd2lzZSwgcmVkaXJlY3QgdG8gbG9naW5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZWRpcmVjdFVybEZvclN1YnNjcmlwdGlvbihhY2NvdW50TmFtZTogc3RyaW5nLCBzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2VzTWFwRm9yVXNlcihhY2NvdW50TmFtZSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXA6IEFycmF5PHsgU3Vic2NyaXB0aW9uS2V5OiBzdHJpbmc7IERlc2NyaXB0aW9uOiBzdHJpbmc7IEluc3RhbmNlS2V5OiBzdHJpbmcgfT4gPSByZXMgYXMgQXJyYXk8e1xyXG4gICAgICAgICAgICAgICAgICAgIFN1YnNjcmlwdGlvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgSW5zdGFuY2VLZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIH0+O1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtYXAgfHwgbWFwLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5zdGFuY2VNYXAgaXMgaW52YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEluc3RhbmNlS2V5OiBzdHJpbmcgPSBtYXAuZmlsdGVyKChrKSA9PiBrLlN1YnNjcmlwdGlvbktleSA9PT0gc3Vic2NyaXB0aW9uS2V5KS5tYXAoKGopID0+IGouSW5zdGFuY2VLZXkpWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTbmFwc2hvdChjdXJyZW50SW5zdGFuY2VLZXksIHN1YnNjcmlwdGlvbktleSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgcmVzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdzbmFwc2hvdCBpcyBlbXB0eScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIG5vdyB0aGUgc25hcHNob3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZXM6IEFycmF5PHsgU2VydmljZVR5cGU6IHN0cmluZzsgVXJsOiBzdHJpbmc7IFByb2R1Y3RWZXJzaW9uOiBzdHJpbmc7IFBvcnQ6IG51bWJlciB9PiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuU2VydmljZXMgYXMgQXJyYXk8eyBTZXJ2aWNlVHlwZTogc3RyaW5nOyBVcmw6IHN0cmluZzsgUHJvZHVjdFZlcnNpb246IHN0cmluZzsgUG9ydDogbnVtYmVyIH0+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbyBpbGEgaW50ZXJ2aWVuaSBxdWkgcGVyIGFwcGlkIHBlcnNvbmFsaXp6YXRlIGNvbWUgZGNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0VXJsOiBzdHJpbmcgPSBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaSkgPT4gaS5TZXJ2aWNlVHlwZSA9PT0gJ000RlJPTlRFTkQnIHx8IGkuU2VydmljZVR5cGUgPT09ICdBUFBfRlJPTlRFTkQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZikgPT4gZi5VcmwpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzaWduYXRlZCByZWRpcmVjdCBpcyAke3JlZGlyZWN0VXJsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlUmVkaXJlY3RVcmwgPSBgJHtyZWRpcmVjdFVybH0/and0PSR7dGhpcy5nZXRMb2dpbktleSgpfSZzdWJLZXk9JHtzdWJzY3JpcHRpb25LZXl9Jmluc3RhbmNlS2V5PSR7Y3VycmVudEluc3RhbmNlS2V5fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzaWduYXRlZCBmaW5hbCByZWRpcmVjdCBpcyAke2Jhc2VSZWRpcmVjdFVybH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVTRVJfR0FURVdBWV9BVVRPUkVESVJFQ1QsIGJhc2VSZWRpcmVjdFVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCwgYmFzZVJlZGlyZWN0VXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBiYXNlUmVkaXJlY3RVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzbmFwc2hvdCBjYW5ub3QgYmUgb2J0YWluZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzbmFwc2hvdCBjYW5ub3QgYmUgb2J0YWluZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldFJlZGlyZWN0VXJsRm9yU3Vic2NyaXB0aW9uIGlhIGFib3V0IHRvIGZhaWwuLi4nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldEluc3RhbmNlc01hcEZvclVzZXIgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JVc2VyKHVzZXI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wZXJhdGlvblJlc3VsdD4odGhpcy5nZXRJbnN0YW5jZXNNYXBGb3JBY2NvdW50VXJsKCkgKyB1c2VyKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5Db250ZW50O1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRDYWxlbmRhcihzdWJzY3JpcHRpb25LZXk6IHN0cmluZykge1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmdldENhbGVuZGFyVXJsKCk7XHJcbiAgICAgICAgaWYgKCF1cmwgfHwgdXJsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXVwdXJsIGlzIG5vdCB1c2VkLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQ8T3BlcmF0aW9uUmVzdWx0PihgJHt0aGlzLmdldENhbGVuZGFyVXJsKCl9P1N1YnNjcmlwdGlvbktleT0ke3N1YnNjcmlwdGlvbktleX1gIC8qLCB7IGhlYWRlcnMgfSovKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlcy5NZXNzYWdlICsgJyAoQ29kZTonICsgcmVzLkNvZGUgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgT3BlcmF0aW9uUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLkNvZGUgPSA2NjI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNuYXBzaG90KGluc3RhbmNlS2V5OiBzdHJpbmcsIHN1YnNjcmlwdGlvbktleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3BlcmF0aW9uUmVzdWx0Pih0aGlzLmdldFNuYXBzaG90U2VydmljZVVybCgpICsgaW5zdGFuY2VLZXkgKyAnP3N1YnNjcmlwdGlvbktleT0nICsgc3Vic2NyaXB0aW9uS2V5KS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLlJlc3VsdCkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5Db250ZW50O1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbnN0YW5jZXNNYXBGb3JBY2NvdW50VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICdpbnN0YW5jZXNNYXAvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2FsZW5kYXJVcmwoKSB7XHJcbiAgICAgICAgdmFyIGl1cHVybCA9IHRoaXMuZ2V0SXVwVXJsKCk7XHJcbiAgICAgICAgaWYgKCFpdXB1cmwgfHwgaXVwdXJsLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGl1cHVybCArICdjYWxlbmRhcmpvYnMvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VXBkYXRlTWVzc2FnZSgpIHtcclxuICAgICAgICB2YXIgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfSVQoKSA/PyB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcclxuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdkZScpKSByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0RFKCkgPz8gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgncHQnKSkgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9CUigpID8/IHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9FTigpO1xyXG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2JnJykpIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfQkcoKSA/PyB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcclxuICAgICAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdlcycpKSByZXR1cm4gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VTKCkgPz8gdGhpcy5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgncGwnKSkgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9QTCgpID8/IHRoaXMuZ2V0VXBkYXRlTWVzc2FnZV9FTigpO1xyXG4gICAgICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ3JvJykpIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfUk8oKSA/PyB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcclxuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkxLKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTdG9yYWdlVmFycy5KV1QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfUk9MRVMpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLlVTRVJfR0FURVdBWV9BVVRPUkVESVJFQ1QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFN0b3JhZ2VWYXJzLkxLKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9yYWdlU3Vic2NyaXB0aW9uRGF0YShzdWJzY3JpcHRpb25LZXk6IHN0cmluZywgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTl9ERVNDUklQVElPTiwgc3Vic2NyaXB0aW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JhZ2VRdWVyeVBhcmFtcyhzdWJzY3JpcHRpb25LZXk6IHN0cmluZywgaW5zdGFuY2VLZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OLCBzdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgc3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRJbnN0YW5jZUtleShpbnN0YW5jZUtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROYW1lKGxvZ2luUmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gbG9naW5SZXNwb25zZS5Bc2tpbmdQcm9jZXNzID09PSB0aGlzLmdldEFwcElkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9yYWdlRGF0YShsb2dpblJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcEN1bHR1cmU6IHN0cmluZyA9XHJcbiAgICAgICAgICAgIGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncyA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuUmVnaW9uYWxTZXR0aW5ncy5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxyXG4gICAgICAgICAgICAgICAgOiBsb2dpblJlc3BvbnNlLlJlZ2lvbmFsU2V0dGluZ3M7XHJcbiAgICAgICAgY29uc3QgcmVzcFVpQ3VsdHVyZTogc3RyaW5nID1cclxuICAgICAgICAgICAgbG9naW5SZXNwb25zZS5MYW5ndWFnZSA9PT0gdW5kZWZpbmVkIHx8IGxvZ2luUmVzcG9uc2UuTGFuZ3VhZ2UubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgIDogbG9naW5SZXNwb25zZS5MYW5ndWFnZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5KV1QsIGxvZ2luUmVzcG9uc2UuSnd0VG9rZW4pO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkxLLCBsb2dpblJlc3BvbnNlLkxvZ2luS2V5KTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSwgcmVzcFVpQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9ST0xFUywgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS5Sb2xlcykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuQWNjb3VudE5hbWUpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCBsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTiwgbG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5TdWJzY3JpcHRpb25EZXNjKVxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuSldULCBsb2dpblJlc3BvbnNlLkp3dFRva2VuKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuTEssIGxvZ2luUmVzcG9uc2UuTG9naW5LZXkpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCByZXNwQ3VsdHVyZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLlVJX0NVTFRVUkUsIHJlc3BVaUN1bHR1cmUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5BQ0NPVU5UX1JPTEVTLCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLlJvbGVzKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5BY2NvdW50TmFtZSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FLCBsb2dpblJlc3BvbnNlLkFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT04sIGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgICAgICAgICAgaWYgKGxvZ2luUmVzcG9uc2UuU3Vic2NyaXB0aW9uRGVzYykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OLCBsb2dpblJlc3BvbnNlLlN1YnNjcmlwdGlvbkRlc2MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGdldFN5bWJvbHNUb1Byb21pc2UoKTogUHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwLmdldDxPcGVyYXRpb25SZXN1bHQ+KHRoaXMuZ2V0U3ltYm9sc1VybCgpLCB7IGhlYWRlcnMgfSkudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwdWJsaWMgZ2V0U3ltYm9sc1VybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFuZ2VQYXNzd29yZFVybCgpICsgJ2dldHN5bWJvbHMvJztcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQ3VsdHVyZShjdWx0dXJlOiBzdHJpbmcsIHVpQ3VsdHVyZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5DVUxUVVJFLCBjdWx0dXJlKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCB1aUN1bHR1cmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUsIGN1bHR1cmUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yYWdlVmFycy5VSV9DVUxUVVJFLCB1aUN1bHR1cmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuU25hY2tCYXIobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHsgZHVyYXRpb246IDUwMDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkpXVCk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuSldUKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2dpbktleSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuTEspO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkxLKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWRpcmVjdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVVNFUl9HQVRFV0FZX0FVVE9SRURJUkVDVCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNjb3VudE5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkFDQ09VTlRfTkFNRSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuQUNDT1VOVF9OQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWJzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLlNVQlNDUklQVElPTik7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWJzY3JpcHRpb25EZXNjcmlwdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuU1VCU0NSSVBUSU9OX0RFU0NSSVBUSU9OKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5TVUJTQ1JJUFRJT05fREVTQ1JJUFRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1bHR1cmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLkNVTFRVUkUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVJQ3VsdHVyZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnYuYXV0aC5zZXNzaW9uU3RvcmFnZSkgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmFnZVZhcnMuVUlfQ1VMVFVSRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VLZXkoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW52LmF1dGguc2Vzc2lvblN0b3JhZ2UpIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZKTtcclxuICAgICAgICBlbHNlIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5JTlNUQU5DRUtFWSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5zdGFuY2VLZXkoaW5zdGFuY2VLZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFN0b3JhZ2VWYXJzLklOU1RBTkNFS0VZLCBpbnN0YW5jZUtleSk7XHJcbiAgICAgICAgZWxzZSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlVmFycy5JTlNUQU5DRUtFWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXV0aFNlcnZpY2VVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXJsO1xyXG4gICAgZ2V0SXVwVXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLml1cHVybDsgLy9odHRwOi8vbG9jYWxob3N0OjUyMTcyL2FwaS9cclxuICAgIGdldFJlZGlyZWN0VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLnJlZGlyZWN0VXJsO1xyXG4gICAgZ2V0UmVkaXJlY3RJZk5vdEF1dGhlbnRpY2F0ZWQgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnJlZGlyZWN0SWZOb3RBdXRoZW50aWNhdGVkO1xyXG4gICAgZ2V0VXNlckdhdGV3YXlVcmwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXNlckdhdGV3YXlVcmw7XHJcbiAgICBnZXRDcmVhdGVBY2NvdW50VXJsID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmNyZWF0ZUFjY291bnRVcmw7XHJcbiAgICBnZXRDaGFuZ2VQYXNzd29yZFVybCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5jaGFuZ2VQYXNzd29yZFVybDtcclxuICAgIGhhc1N1YnNjcmlwdGlvblNlbGVjdGlvbiA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc3Vic2NyaXB0aW9uU2VsZWN0aW9uO1xyXG4gICAgc2hvd1NpZ25VcCA9ICgpOiBib29sZWFuID0+IHRoaXMuZW52LmF1dGguc2hvd1NpZ25VcDtcclxuICAgIGdldEFwcElkID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5hdXRoLmFwcElkOyAvLyB0b2RvIGlsYSBpbnRlcnZpZW5pIHF1aSBwZXIgYXBwaWQgcGVyc29uYWxpenphdGUgY29tZSBkY3NcclxuICAgIGdldFByZUxvZ2luQXBwSWQgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgucHJlTG9naW5BcHBJZDtcclxuICAgIGlzU2Vzc2lvblN0b3JhZ2UgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLnNlc3Npb25TdG9yYWdlO1xyXG4gICAgZ2V0TG9nb1VSTCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5sb2dvVVJMO1xyXG4gICAgZ2V0QmFja2dyb3VuZFVSTCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5lbnYuYXV0aC5iYWNrZ3JvdW5kVVJMO1xyXG4gICAgZ2V0QnJhbmROYW1lID0gKCk6IHN0cmluZyA9PiB0aGlzLmVudi5icmFuZC5hcHBsaWNhdGlvbk5hbWU7XHJcbiAgICBpc1JlZGlyZWN0RXh0ZXJuYWwgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmVudi5hdXRoLmlzUmVkaXJlY3RFeHRlcm5hbDtcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfSVQgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9JVDtcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfRU4gPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9FTjtcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfQlIgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9CUjtcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfQkcgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9CRztcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfUk8gPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9STztcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfREUgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9ERTtcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfRVMgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9FUztcclxuICAgIGdldFVwZGF0ZU1lc3NhZ2VfUEwgPSAoKTogc3RyaW5nID0+IHRoaXMuZW52LmF1dGgudXBkYXRlbWVzc2FnZV9QTDtcclxufVxyXG4iXX0=