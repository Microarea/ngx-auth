import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutologinToken } from './models/autologin-token.model';
import { LoginRequest } from './models/login-request';
import { LoginResponse } from './models/login-response';
export declare class TbAuthService {
    private env;
    private http;
    router: Router;
    loginUrl: string;
    errorMessage: string;
    redirectUrl: string;
    constructor(env: any, http: HttpClient, router: Router);
    isValidToken(autologinToken?: AutologinToken): Promise<any>;
    login(loginRequest: LoginRequest): Observable<LoginResponse>;
    private storageData;
    getIsValidTokenUrl(): string;
    getLoginUrl(): string;
    getLogoutUrl(): string;
    getRedirectUrl(): string;
    setRedirectUrl(url: string): void;
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     */
    getBaseUrl(): string;
    logoff(): void;
    saveCulture(culture?: string, uiCulture?: string): void;
    clearStorage(): void;
    isExpired(): boolean;
}
