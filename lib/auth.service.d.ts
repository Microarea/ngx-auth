import { HttpClient, HttpBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRequest } from './models/login-request';
import { LoginResponse } from './models/login-response';
import { LogoffResponse } from './models/logoff-response';
export declare class TbAuthService {
    private env;
    private http;
    private handler;
    router: Router;
    loginUrl: string;
    errorMessage: string;
    redirectUrl: string;
    constructor(env: any, http: HttpClient, handler: HttpBackend, router: Router);
    login(loginRequest: LoginRequest): Promise<LoginResponse>;
    isValidToken(authtoken?: any): Promise<any>;
    getCompaniesForUser(user: string): Observable<any>;
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
    private storageData;
}
