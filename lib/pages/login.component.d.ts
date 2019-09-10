import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from '../auth.service';
import { LoginRequest } from '../models/login-request';
export declare class TbLoginComponent implements OnInit {
    authService: TbAuthService;
    router: Router;
    private env;
    capsLockOn: boolean;
    loading: boolean;
    loginRequest: LoginRequest;
    redirectUrl: string;
    logoB64: string;
    subscriptionSelection: boolean;
    loginSubscriptions: Array<{
        description: string;
        subscriptionKey: string;
    }>;
    constructor(authService: TbAuthService, router: Router, env: any);
    ngOnInit(): void;
    keyUpFunction(event: any): void;
    disabledButton(): boolean;
    accountNameBlur(): void;
    login(): Promise<void>;
    loadAccountName(): void;
    saveAccountName(): void;
    getCompaniesForUser(user: string): Promise<void>;
    private requestAndSortSubscriptions;
    compareCompanies(c1: any, c2: any): 1 | 0 | -1;
}
