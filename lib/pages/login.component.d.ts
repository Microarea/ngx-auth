import { TbAuthService } from '../auth.service';
import { LoginRequest } from '../models/login-request';
import { AfterContentInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExtraInfo } from '../models/login-response';
import * as i0 from "@angular/core";
export declare class TbLoginComponent implements AfterContentInit {
    authService: TbAuthService;
    router: Router;
    private dialog;
    private renderer;
    private doc?;
    private cachedCompanies;
    capsLockOn: boolean;
    validate: boolean;
    otp: boolean;
    loading: boolean;
    loginRequest: LoginRequest;
    redirectUrl: string;
    buttonText: string;
    nextText: string;
    loginText: string;
    currentYear: string;
    createAccountUrl: string;
    changePasswordUrl: string;
    subscriptionSelection: boolean;
    showSignUp: boolean;
    loginSubscriptions: Array<{
        description: string;
        subscriptionkey: string;
        status: number;
        instancekey: string;
    }>;
    logoURL: string;
    backgroundURL: string;
    hide: boolean;
    hideOtp: boolean;
    instancekey: string;
    isConnected: boolean;
    document?: Document;
    lib_version: string;
    chooseSubscription: string;
    goodJob: string;
    subscription: string;
    instance: string;
    buttonBack: string;
    accountName: string;
    enterAccounName: string;
    welcome: string;
    enterCredentials: string;
    forgetPassword: string;
    blocMaiusc: string;
    idleTimeoutMessage: string;
    otpMessage: string;
    authAppText: string;
    otpTitle: string;
    resendOTPLabel: string;
    code: string;
    chosenAuthApp: string;
    otpText: string;
    otpRequestCode: string;
    useAuthApp: string;
    oneMethodOnly: string;
    alternativeMethod: string;
    manageMethods: string;
    TOTPDescription: string;
    inputValue: string;
    dropDownIsClicked: boolean;
    comboBoxIsClicked: boolean;
    iconIsClicked: boolean;
    dropdown: any;
    currentBrowserLanguage: string;
    languageIT: boolean;
    otpInfo: ExtraInfo;
    constructor(authService: TbAuthService, router: Router, dialog: MatDialog, renderer: Renderer2, doc?: any);
    ngAfterContentInit(): void;
    checkConnection(): Promise<void>;
    onSubChange(newValue: any): void;
    keyUpFunction(event: KeyboardEvent): void;
    disabledButton(): boolean;
    get isExpiredSession(): boolean;
    newUser(): void;
    back(): Promise<void>;
    login(): Promise<void>;
    convertUTCDateToLocalDate(date: Date): Date;
    FormatDateString: (date: Date) => string;
    FormatStartDateString: (date: Date) => string;
    FormatEndDateString: (date: Date, durationMins: number) => string;
    loadLoginData(): void;
    private saveLoginData;
    getCompaniesForUser(user: string): Promise<void>;
    private requestAndSortSubscriptions;
    private compareCompanies;
    goToForgotPassword(): void;
    forgotpassword(Title: string, Message: string, PlaceHolder: string): Promise<void>;
    isDropDownClicked(): void;
    toggle(dropdown: any): void;
    alternativeMethods(twoFactorType: any): void;
    goToStore(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbLoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbLoginComponent, "tb-login", never, {}, {}, never, never>;
}
