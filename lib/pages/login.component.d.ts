import { TbAuthService } from '../auth.service';
import { LoginRequest } from '../models/login-request';
import { AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
export declare class TbLoginComponent implements AfterContentInit {
    authService: TbAuthService;
    router: Router;
    private dialog;
    private doc?;
    private cachedCompanies;
    capsLockOn: boolean;
    validate: boolean;
    loading: boolean;
    loginRequest: LoginRequest;
    redirectUrl: string;
    buttonText: string;
    currentYear: string;
    createAccountUrl: string;
    changePasswordUrl: string;
    subscriptionSelection: boolean;
    showSignUp: boolean;
    loginSubscriptions: Array<{
        description: string;
        subscriptionkey: string;
    }>;
    logoURL: string;
    isConnected: boolean;
    document?: Document;
    constructor(authService: TbAuthService, router: Router, dialog: MatDialog, doc?: any);
    ngAfterContentInit(): void;
    checkConnection(): Promise<void>;
    keyUpFunction(event: KeyboardEvent): void;
    disabledButton(): boolean;
    newUser(): void;
    back(): Promise<void>;
    login(): Promise<void>;
    loadLoginData(): void;
    private saveLoginData;
    getCompaniesForUser(user: string): Promise<void>;
    private requestAndSortSubscriptions;
    private compareCompanies;
    forgotpassword(): Promise<void>;
}
