import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from '../auth.service';
import { LoginRequest } from '../models/login-request';
import { TbAuthEnvironment } from '../models/auth-environment';
import { Subscription } from '../models/subscription.model';
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
    logoB64: string;
    cloudlogoB64: string;
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
    compareCompanies(c1: Subscription, c2: Subscription): 1 | 0 | -1;
}
