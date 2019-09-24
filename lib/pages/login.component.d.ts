import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from '../auth.service';
import { LoginRequest } from '../models/login-request';
import { TbAuthEnvironment } from '../models/auth-environment';
export declare class TbLoginComponent implements OnInit {
    authService: TbAuthService;
    router: Router;
    private env;
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
    logoB64: string;
    constructor(authService: TbAuthService, router: Router, env: TbAuthEnvironment);
    ngOnInit(): void;
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
