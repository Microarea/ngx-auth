import { Injector } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginRequest } from './models/login-request';
import { LoginResponse } from './models/login-response';
import { LogoffResponse } from './models/logoff-response';
export declare class TbAuthService {
    private env;
    private http;
    private handler;
    private injector;
    loggedOut$: Subject<{}>;
    loginUrl: string;
    errorMessage: string;
    redirectUrl: string;
    readonly router: Router;
    constructor(env: any, http: HttpClient, handler: HttpBackend, injector: Injector);
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     */
    getBaseUrl(): string;
    getAuthorizationHeader(): string;
    login(loginRequest: LoginRequest): Promise<LoginResponse>;
    isValidToken(authtoken?: any): Promise<any>;
    getCompaniesForUser(user: string): import("rxjs").Observable<any>;
    getIsValidTokenUrl(): string;
    getLoginUrl(): string;
    getLogoutUrl(): string;
    getChangePasswordUrl(): string;
    getResetPasswordUrl(): string;
    getSubsKeysForAccountUrl(): string;
    logoff(): Promise<LogoffResponse>;
    clearStorage(): void;
    private storageData;
    getToken(): string;
    getAccountName(): string;
    getSubscription(): string;
}
