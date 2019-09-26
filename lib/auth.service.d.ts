import { Injector, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { LoginRequest } from './models/login-request';
import { LoginResponse } from './models/login-response';
import { LogoffResponse } from './models/logoff-response';
import { TbAuthEnvironment } from './models/auth-environment';
import { AuthConnectionState } from './models/auth-connection-state';
export declare class TbAuthService implements OnDestroy {
    private http;
    private injector;
    private static DEFAULT_ENV;
    private env;
    private stateChangeEventEmitter;
    private currentConnectionState;
    private offlineSubscription;
    private onlineSubscription;
    private httpSubscription;
    private serviceOptions;
    loggedOut$: Subject<unknown>;
    errorMessage: string;
    readonly router: Router;
    constructor(env: TbAuthEnvironment, http: HttpClient, injector: Injector);
    private checkBackendState;
    private checkNetworkState;
    private emitEvent;
    /**
     * Monitor Network & Internet connection status by subscribing to this observer.
     * If you set "reportcurrentConnectionState" to "false" then
     * function will not report current status of the connections when initially subscribed.
     * @param reportcurrentConnectionState Report current state when initial subscription. Default is "true"
     */
    monitorConnectionStatus(reportcurrentConnectionState?: boolean): Observable<AuthConnectionState>;
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     */
    getBaseUrl(): string;
    getAuthorizationHeader(): string;
    login(loginRequest: LoginRequest): Promise<LoginResponse>;
    isValidToken(authtoken?: string): Promise<any>;
    getCompaniesForUser(user: string): Observable<any>;
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
    stopCheckingConnection(): void;
    ngOnDestroy(): void;
}
