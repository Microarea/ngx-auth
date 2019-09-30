import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginRequest } from './models/login-request';
import { LoginResponse } from './models/login-response';
import { LogoffResponse } from './models/logoff-response';
import { OperationResult } from './models/operation-result';
import { TbAuthEnvironment } from './models/auth-environment';
export declare class TbAuthService {
    private http;
    private injector;
    private static DEFAULT_ENV;
    private env;
    private stateChangeEventEmitter;
    private currentConnectionState;
    loggedOut$: Subject<unknown>;
    errorMessage: string;
    readonly router: Router;
    constructor(env: TbAuthEnvironment, http: HttpClient, injector: Injector);
    checkConnection(): Promise<boolean>;
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     */
    getBaseUrl(): string;
    getAuthorizationHeader(): string;
    login(loginRequest: LoginRequest): Promise<LoginResponse>;
    isValidToken(authtoken?: string): Promise<OperationResult>;
    getCompaniesForUser(user: string): import("rxjs").Observable<any>;
    getIsValidTokenUrl(): string;
    getLoginUrl(): string;
    getLogoutUrl(): string;
    getChangePasswordUrl(): string;
    getResetPasswordUrl(): string;
    getSubsKeysForAccountUrl(): string;
    logoff(): Promise<LogoffResponse>;
    clearStorage(): void;
    storageSubscriptionData(subscriptionKey: string, subscriptionDescription: string): void;
    private storageData;
    saveCulture(culture: string, uiCulture: string): void;
    getToken(): string | null;
    getAccountName(): string | null;
    getSubscription(): string | null;
    getSubscriptionDescription(): string | null;
    getCulture(): string | null;
    getUICulture(): string | null;
    getAuthServiceUrl: () => string;
    getRedirectUrl: () => string;
    hasSubscriptionSelection: () => boolean;
    getAppId: () => string;
    isSessionStorage: () => boolean;
    getCustomLogo: () => string;
}
