import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from '../auth.service';
import { LoginRequest } from '../models/login-request';
import { AuthConnectionState } from '../models/auth-connection-state';
export declare class TbLoginComponent implements OnInit {
    authService: TbAuthService;
    router: Router;
    private cachedCompanies;
    capsLockOn: boolean;
    loading: boolean;
    loginRequest: LoginRequest;
    redirectUrl: string;
    subscriptionSelection: boolean;
    loginSubscriptions: Array<{
        description: string;
        subscriptionkey: string;
    }>;
    logoUrl: string;
    isConnected: boolean;
    connectionService: AuthConnectionState;
    constructor(authService: TbAuthService, router: Router);
    ngOnInit(): void;
    checkConnection(): Promise<void>;
    keyUpFunction(event: KeyboardEvent): void;
    disabledButton(): boolean;
    accountNameBlur(): void;
    login(): Promise<void>;
    loadLoginData(): void;
    private saveLoginData;
    getCompaniesForUser(user: string): Promise<void>;
    private requestAndSortSubscriptions;
    private compareCompanies;
}
