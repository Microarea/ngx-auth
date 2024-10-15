export interface LoginResponse {
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
export declare class ExtraInfo {
    AccountName: string;
    Email: string;
    ExtraInfo: string;
    MobilePhoneNr: string;
    MobilePhonePrefix: string;
    TOTPConfigured: boolean | null;
    TwoFactorType: number | null;
    constructor();
}
