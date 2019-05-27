import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginRequest } from './models/login-request';
import { LoginResponse } from './models/login-response';
import { LogoffResponse } from './models/logoff-response';
export declare class TbAuthService {
    private env;
    private http;
    router: Router;
    loginUrl: string;
    errorMessage: string;
    redirectUrl: string;
    constructor(env: any, http: HttpClient, router: Router);
    login(loginRequest: LoginRequest): Promise<LoginResponse>;
    isValidToken(authtoken?: any): Promise<any>;
    getRedirectUrl(): string;
    setRedirectUrl(url: string): void;
    getAccountName(): void;
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     */
    getBaseUrl(): string;
    getIsValidTokenUrl(): string;
    getLoginUrl(): string;
    getLogoutUrl(): string;
    getChangePasswordUrl(): string;
    getResetPasswordUrl(): string;
    getSubsKeysForAccountUrl(): string;
    logoff(): Promise<LogoffResponse>;
    saveCulture(culture?: string, uiCulture?: string): void;
    clearStorage(): void;
    isExpired(): boolean;
    private storageData;
}
