import { Injector, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginRequest, ChangePasswordInfo } from './models/login-request';
import { LoginResponse } from './models/login-response';
import { LogoffResponse } from './models/logoff-response';
import { OperationResult } from './models/operation-result';
import { TbAuthEnvironment } from './models/auth-environment';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
export declare const authService: () => TbAuthService;
export declare class TbAuthService {
    private http;
    private injector;
    private dialog;
    private snackBar;
    private static DEFAULT_ENV;
    private env;
    loggedOut$: Subject<unknown>;
    errorMessage: string;
    okMessage: string;
    callLoginAfterOTPRequest: boolean;
    reLoginAfterOTP: EventEmitter<any>;
    get router(): Router;
    constructor(env: TbAuthEnvironment, http: HttpClient, injector: Injector, dialog: MatDialog, snackBar: MatSnackBar);
    checkConnection(): Promise<boolean>;
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     */
    getBaseUrl: () => string;
    getSnapshotServiceUrl: () => string;
    getLoginPageUrl: () => string;
    getAuthorizationHeader(): string;
    prelogin(loginRequest: LoginRequest): Promise<LoginResponse>;
    login(loginRequest: LoginRequest): Promise<LoginResponse>;
    getLockedUserMessage(messageFromLogin: string): string;
    get2FARequiredMessage(description: string): string;
    openUpdateAlertDialog(info: string, title: string, dontshow: string, accountName: string, subscriptionKey: string): Promise<void>;
    openChangePasswordDialog(loginRequest: LoginRequest): Promise<void>;
    isValidToken(authtoken?: string): Promise<OperationResult>;
    getCompaniesForUser(user: string): import("rxjs").Observable<any>;
    getIsValidTokenUrl(): string;
    getLoginUrl(): string;
    getPreLoginUrl(): string;
    getLogoutUrl(): string;
    getChangePasswordApiUrl(): string;
    resendOTPUrl(): string;
    getResetPasswordUrl(): string;
    getSubsKeysForAccountUrl(): string;
    changePassword(cpi: ChangePasswordInfo): Promise<OperationResult>;
    resendOTP(accname: string, alternative: boolean): Promise<OperationResult>;
    resetpassword(accname: string): Promise<OperationResult>;
    logoff(): Promise<LogoffResponse>;
    navigateUserGateway(): void;
    getRedirectUrlForSubscription(accountName: string, subscriptionKey: string): void;
    getInstancesMapForUser(user: string): import("rxjs").Observable<any>;
    getCalendar(subscriptionKey: string): Promise<any>;
    getSnapshot(instanceKey: string, subscriptionKey: string): import("rxjs").Observable<any>;
    getInstancesMapForAccountUrl(): string;
    getCalendarUrl(): string;
    getUpdateMessage(): string;
    clearStorage(): void;
    storageSubscriptionData(subscriptionKey: string, subscriptionDescription: string): void;
    storageQueryParams(subscriptionKey: string, instanceKey: string): void;
    private getName;
    private storageData;
    getSymbolsToPromise(): Promise<OperationResult>;
    getSymbolsUrl(): string;
    saveCulture(culture: string, uiCulture: string): void;
    openSnackBar(message: string, action: string): void;
    getToken(): string | null;
    getAccountName(): string | null;
    getSubscription(): string | null;
    getSubscriptionDescription(): string | null;
    getCulture(): string | null;
    getUICulture(): string | null;
    getInstanceKey(): string | null;
    setInstanceKey(instanceKey: string): void;
    getAuthServiceUrl: () => string;
    getIupUrl: () => string;
    getRedirectUrl: () => string;
    getUserGatewayUrl: () => string;
    getCreateAccountUrl: () => string;
    getChangePasswordUrl: () => string;
    hasSubscriptionSelection: () => boolean;
    showSignUp: () => boolean;
    getAppId: () => string;
    getPreLoginAppId: () => string;
    isSessionStorage: () => boolean;
    getLogoURL: () => string;
    isRedirectExternal: () => boolean;
    getUpdateMessage_IT: () => string;
    getUpdateMessage_EN: () => string;
    getUpdateMessage_BR: () => string;
    getUpdateMessage_BG: () => string;
    getUpdateMessage_RO: () => string;
    getUpdateMessage_DE: () => string;
    getUpdateMessage_ES: () => string;
    getUpdateMessage_PL: () => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbAuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TbAuthService>;
}
