import * as i0 from '@angular/core';
import { Injector, AfterContentInit, Renderer2, OnInit, ModuleWithProviders } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import * as i17 from '@angular/router';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import * as i1 from '@angular/material/dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as i5 from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as i2 from '@angular/material/form-field';
import * as i3 from '@angular/material/input';
import * as i4 from '@angular/material/checkbox';
import { MatCheckboxChange } from '@angular/material/checkbox';
import * as i6 from '@angular/common';
import * as i7 from '@angular/forms';
import * as i8 from '@progress/kendo-angular-dropdowns';
import * as i9 from '@progress/kendo-angular-label';
import * as i10 from '@progress/kendo-angular-inputs';
import * as i11 from '@angular/platform-browser';
import * as i12 from '@angular/platform-browser/animations';

declare class LoginRequest {
    token: string;
    appId: string;
    accountName: string;
    password: string;
    subscriptionKey: string;
    processID: string;
    otPassword: string;
    overwriteLogin: boolean;
    version: number;
}
declare class ChangePasswordInfo {
    AccountName: string;
    Password: string;
    NewPassword: string;
    IgnoreOldPassword: boolean;
    JWTToken: string;
}
interface CUCalendarJob {
    jobid: number;
    calendarid: number;
    subscriptionkey: string;
    customer: string;
    instancekey: string;
    currentmap: string;
    destinationmap: string;
    scheduledtime: string;
    estimatedupgradetime: number;
    realupgradetime: number;
    status: number;
    notes: string;
    creationdate: Date;
}

interface LoginResponse {
    Result: boolean;
    Message: string;
    ResultCode: number;
    JwtToken: string;
    ExpirationDate: string;
    ExtraInfo: ExtraInfo;
    RegionalSettings: string;
    Language: string;
    Roles: string;
    AccountName: string;
    SubscriptionKey: string;
    SubscriptionDesc: string;
    AskingProcess: string;
    LoginKey: string;
}
declare class ExtraInfo {
    AccountName: string;
    Email: string;
    ExtraInfo: string;
    MobilePhoneNr: string;
    MobilePhonePrefix: string;
    TOTPConfigured: boolean | null;
    TwoFactorType: number | null;
    constructor();
}

declare class LogoffRequest {
    token: string | null;
    constructor(token: string | null);
}

interface LogoffResponse {
    Result: boolean;
    Message: string;
    Content: any;
    Code: 0;
}

declare class StorageVars {
    static JWT: string;
    static LK: string;
    static CULTURE: string;
    static UI_CULTURE: string;
    static ACCOUNT_NAME: string;
    static ACCOUNT_ROLES: string;
    static SUBSCRIPTION: string;
    static SUBSCRIPTION_DESCRIPTION: string;
    static USER_GATEWAY_AUTOREDIRECT: string;
    static INSTANCEKEY: string;
    static DONTSHOWUPDATEWARN: string;
}

interface Subscription {
    subscriptionkey: string;
    description: string;
    status: number;
    instancekey: string;
}
declare enum EntityStatus {
    None = 0,
    DBUnderMaintenance = 1,// 1
    Disabled = 2,// 2
    PrivacyMode = 4,// 4
    Canary = 8,// 8
    UpdateScheduled = 16
}

declare class IsValidTokenRequest {
    token: string;
    constructor(token?: string);
}

interface TbAuthEnvironment {
    auth: {
        url: string;
        storeUrl: string;
        iupurl: string;
        preLoginAppId: string;
        subscriptionSelection: boolean;
        showSignUp: boolean;
        appId: string;
        isRedirectExternal: boolean;
        snapshotServiceUrl: string;
        redirectUrl: string;
        isMagoWeb: boolean;
        redirectIfNotAuthenticated: boolean;
        userGatewayUrl: string;
        createAccountUrl: string;
        changePasswordUrl: string;
        loginPageUrl: string;
        sessionStorage: boolean;
        logoURL: string;
        backgroundURL: string;
        updatemessage_IT: string;
        updatemessage_EN: string;
        updatemessage_DE: string;
        updatemessage_BR: string;
        updatemessage_BG: string;
        updatemessage_ES: string;
        updatemessage_RO: string;
        updatemessage_PL: string;
    };
    brand: {
        applicationName: string;
        bannerUrl: string;
    };
}

declare class OperationResult {
    Result: boolean;
    Message: string;
    Code: number;
    Content: any;
}

declare const authService: () => TbAuthService;
declare class TbAuthService {
    private http;
    private injector;
    private dialog;
    private snackBar;
    private static DEFAULT_ENV;
    private env;
    loggedOut$: Subject<unknown>;
    errorMessage: string;
    okMessage: string;
    useDCS: boolean;
    langIt: boolean | undefined;
    get router(): Router;
    constructor(env: TbAuthEnvironment, http: HttpClient, injector: Injector, dialog: MatDialog, snackBar: MatSnackBar);
    checkConnection(): Promise<boolean>;
    /**
     * Ritorna la base url del backend,
     * caricata da un file di configurazione caricato dinamicamente (assets/environment.json)
     */
    getBaseUrl: () => string;
    getSnapshotServiceUrl: () => string;
    getLoginPageUrl: () => string;
    getStoreUrl: () => string;
    getAuthorizationHeader(): string;
    prelogin(loginRequest: LoginRequest): Promise<LoginResponse>;
    login(loginRequest: LoginRequest): Promise<LoginResponse>;
    fixIssue(loginResponse: LoginResponse): void;
    getLockedUserMessage(messageFromLogin: string): string;
    get2FARequiredMessage(description: string): string;
    openUpdateAlertDialog(info: string, title: string, dontshow: string, accountName: string, subscriptionKey: string, processid: string): Promise<void>;
    openChangePasswordDialog(loginRequest: LoginRequest): Promise<void>;
    isValidToken(authtoken?: string): Promise<OperationResult>;
    getCompaniesForUser(user: string): Observable<any>;
    getIsValidTokenUrl(): string;
    getLoginUrl(): string;
    getPreLoginUrl(): string;
    getLogoutUrl(): string;
    getChangePasswordApiUrl(): string;
    resendOTPUrl(): string;
    OLDresendOTPUrl(): string;
    getResetPasswordUrl(): string;
    getSubsKeysForAccountUrl(): string;
    changePassword(cpi: ChangePasswordInfo): Promise<OperationResult>;
    LangIT(): boolean | undefined;
    OLDresendOTP(accname: string, alternative: boolean): Observable<OperationResult>;
    resendOTP2(accname: string, processID: string, alternative: number): Observable<OperationResult>;
    resetpassword(accname: string): Promise<OperationResult>;
    logoff(): Promise<LogoffResponse>;
    logoffWithFetch(): void;
    navigateUserGateway(): void;
    getRedirectUrlForSubscription(accountName: string, subscriptionKey: string, processid: string): void;
    getInstancesMapForUser(user: string): Observable<any>;
    getCalendar(subscriptionKey: string): Promise<any>;
    getSnapshot(instanceKey: string, subscriptionKey: string): Observable<any>;
    getInstancesMapForAccountUrl(): string;
    getCalendarUrl(): string | null;
    getUpdateMessage(): string;
    clearStorage(): void;
    storageSubscriptionData(subscriptionKey: string, subscriptionDescription: string): void;
    storageQueryParams(subscriptionKey: string, instanceKey: string): void;
    private getName;
    private storageData;
    getSymbolsToPromise(): Promise<OperationResult>;
    getSymbolsUrl(): string;
    saveCulture(culture: string, uiCulture: string): void;
    openSnackBar(message: string, action: string): void;
    getToken(): string | null;
    getLoginKey(): string | null;
    getRedirect(): string | null;
    getAccountName(): string | null;
    getSubscription(): string | null;
    getSubscriptionDescription(): string | null;
    getCulture(): string | null;
    getUICulture(): string | null;
    getInstanceKey(): string | null;
    setInstanceKey(instanceKey: string): void;
    getAuthServiceUrl: () => string;
    getIupUrl: () => string;
    getRedirectUrl: () => string;
    getIfIsMagoWeb: () => boolean;
    getRedirectIfNotAuthenticated: () => boolean;
    getUserGatewayUrl: () => string;
    getCreateAccountUrl: () => string;
    getChangePasswordUrl: () => string;
    hasSubscriptionSelection: () => boolean;
    showSignUp: () => boolean;
    getAppId: () => string;
    getPreLoginAppId: () => string;
    isSessionStorage: () => boolean;
    getLogoURL: () => string;
    getBackgroundURL: () => string;
    getBrandName: () => string;
    isRedirectExternal: () => boolean;
    getUpdateMessage_IT: () => string;
    getUpdateMessage_EN: () => string;
    getUpdateMessage_BR: () => string;
    getUpdateMessage_BG: () => string;
    getUpdateMessage_RO: () => string;
    getUpdateMessage_DE: () => string;
    getUpdateMessage_ES: () => string;
    getUpdateMessage_PL: () => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbAuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TbAuthService>;
}

declare class TbAuthGuard {
    private authService;
    private router;
    private env;
    constructor(authService: TbAuthService, router: Router, env: TbAuthEnvironment);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbAuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TbAuthGuard>;
}

declare class TbAuthInterceptor implements HttpInterceptor {
    private authService;
    private env;
    constructor(env: TbAuthEnvironment, authService: TbAuthService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbAuthInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TbAuthInterceptor>;
}

declare class AppMaterialModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AppMaterialModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AppMaterialModule, never, [typeof i1.MatDialogModule, typeof i2.MatFormFieldModule, typeof i3.MatInputModule, typeof i2.MatFormFieldModule, typeof i4.MatCheckboxModule, typeof i5.MatSnackBarModule], [typeof i1.MatDialogModule, typeof i2.MatFormFieldModule, typeof i4.MatCheckboxModule, typeof i5.MatSnackBarModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AppMaterialModule>;
}

declare class TbLoginComponent implements AfterContentInit {
    authService: TbAuthService;
    router: Router;
    private dialog;
    private renderer;
    private route;
    private doc?;
    private cachedCompanies;
    capsLockOn: boolean;
    validate: boolean;
    otp: boolean;
    useralreadylogged: boolean;
    OLD: boolean;
    loading: boolean;
    loginRequest: LoginRequest;
    redirectUrl: string;
    isMagoWeb: boolean;
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
    resetPasswordMessage: string;
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
    useralreadyloggedMessage: string;
    useralreadyloggedOK: string;
    useralreadyloggedTitle: string;
    useAuthApp: string;
    oneMethodOnly: string;
    alternativeMethod: string;
    manageMethods: string;
    TOTPDescription: string;
    otpResetTextMagoWeb: string;
    inputValue: string;
    dropDownIsClicked: boolean;
    comboBoxIsClicked: boolean;
    iconIsClicked: boolean;
    dropdown: any;
    currentBrowserLanguage: string;
    languageIT: boolean;
    otpInfo: ExtraInfo;
    isErrorComingFromMago: boolean;
    showResetPasswordMessage: boolean;
    constructor(authService: TbAuthService, router: Router, dialog: MatDialog, renderer: Renderer2, route: ActivatedRoute, doc?: any | undefined);
    ngAfterContentInit(): void;
    checkConnection(): Promise<void>;
    onSubChange(newValue: any): void;
    keyUpFunction(event: KeyboardEvent): void;
    disabledButton(): boolean;
    get isExpiredSession(): boolean;
    newUser(): void;
    back(keepMessages?: boolean): Promise<void>;
    login(): Promise<void>;
    FormatDateString: (date: string) => string;
    FormatStartDateString: (date: string) => string;
    FormatEndDateString: (date: string, durationMins: number) => string;
    loadLoginData(): void;
    private saveLoginData;
    getCompaniesForUser(user: string): Promise<void>;
    private requestAndSortSubscriptions;
    private compareCompanies;
    goToResetPassword(): void;
    openDialog(Title: string, Message: string, PlaceHolder: string): Promise<void>;
    isDropDownClicked(): void;
    toggle(dropdown: any): void;
    alternativeMethods(twoFactorType: any): void;
    goToStore(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbLoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbLoginComponent, "tb-login", never, {}, {}, never, never, false, never>;
}

declare class TbLogoffComponent {
    authService: TbAuthService;
    router: Router;
    constructor(authService: TbAuthService, router: Router);
    LogOff(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbLogoffComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbLogoffComponent, "tb-logoff", never, {}, {}, never, never, false, never>;
}

declare class ForgotPasswordComponent implements OnInit {
    mdDialogRef: MatDialogRef<ForgotPasswordComponent>;
    private data;
    title: string;
    message: string;
    placeHolder: string;
    inputValue: string;
    cancelButton: string;
    sendButton: string;
    constructor(mdDialogRef: MatDialogRef<ForgotPasswordComponent>, data: any);
    ngOnInit(): void;
    cancel(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ForgotPasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ForgotPasswordComponent, "forgot-password-dialog", never, {}, {}, never, never, false, never>;
}

declare class ChangePasswordDialogComponent implements OnInit {
    mdDialogRef: MatDialogRef<ChangePasswordDialogComponent>;
    private data;
    authService: TbAuthService;
    title: string;
    message_1: string;
    message_2: string;
    message_3: string;
    message_4: string;
    message_5: string;
    message_6: string;
    message_7: string;
    message_8: string;
    message_9: string;
    message_10: string;
    message_11: string;
    pswRulesSymbol: string;
    placeHolder_1: string;
    placeHolder_2: string;
    newpwd: string;
    newpwd2: string;
    buttonCancel: string;
    changeButton: string;
    currentBrowserLanguage: string;
    blocMaiusc: string;
    loginRequest: LoginRequest;
    resetPassword: string;
    capsLockOn: boolean;
    hidenewpwd: boolean;
    hidenewpwd2: boolean;
    loading: boolean;
    constructor(mdDialogRef: MatDialogRef<ChangePasswordDialogComponent>, data: any, authService: TbAuthService);
    ngOnInit(): void;
    cancel(): void;
    confirm(): Promise<void>;
    keyUpFunction(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChangePasswordDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChangePasswordDialogComponent, "app-change-password-dialog", never, {}, {}, never, never, false, never>;
}

declare class AlertDialogComponent implements OnInit {
    private data;
    private mdDialogRef;
    title: string;
    message: string;
    dontshow: string;
    subkey: string;
    dontshowanymore: boolean;
    constructor(data: {
        Message: string;
        Title: string;
        DontShow: string;
        SubKey: string;
    }, mdDialogRef: MatDialogRef<AlertDialogComponent>);
    ngOnInit(): void;
    showOptions(event: MatCheckboxChange): void;
    closeDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertDialogComponent, "app-alert-dialog", never, {}, {}, never, never, false, never>;
}

declare class TbAuthModule {
    static forRoot(): ModuleWithProviders<TbAuthModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbAuthModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TbAuthModule, [typeof TbLoginComponent, typeof TbLogoffComponent, typeof ForgotPasswordComponent, typeof ChangePasswordDialogComponent, typeof AlertDialogComponent], [typeof i6.CommonModule, typeof i7.FormsModule, typeof i8.DropDownsModule, typeof i9.LabelModule, typeof i10.InputsModule, typeof i9.FloatingLabelModule, typeof i11.BrowserModule, typeof i12.BrowserAnimationsModule, typeof AppMaterialModule, typeof i1.MatDialogModule, typeof i3.MatInputModule, typeof i2.MatFormFieldModule, typeof i17.RouterModule], [typeof TbLoginComponent, typeof TbLogoffComponent, typeof i17.RouterModule, typeof AppMaterialModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TbAuthModule>;
}

export { AppMaterialModule, ChangePasswordInfo, EntityStatus, ExtraInfo, IsValidTokenRequest, LoginRequest, LogoffRequest, OperationResult, StorageVars, TbAuthGuard, TbAuthInterceptor, TbAuthModule, TbAuthService, TbLoginComponent, TbLogoffComponent, authService };
export type { CUCalendarJob, LoginResponse, LogoffResponse, Subscription, TbAuthEnvironment };
