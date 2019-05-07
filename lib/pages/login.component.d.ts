import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from '../auth.service';
import { LoginRequest } from '../models/login-request';
export declare class TbLoginComponent implements OnInit {
    authService: TbAuthService;
    router: Router;
    capsLockOn: boolean;
    loading: boolean;
    loginRequest: LoginRequest;
    constructor(authService: TbAuthService, router: Router);
    ngOnInit(): void;
    keyUpFunction(event: any): void;
    disabledButton(): boolean;
    accountNameBlur(): void;
    login(): Promise<void>;
    loadAccountName(): void;
    saveAccountName(): void;
}
