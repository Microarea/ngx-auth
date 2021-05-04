export declare class LoginRequest {
    token: string;
    appId: string;
    accountName: string;
    password: string;
    subscriptionKey: string;
}
export declare class ChangePasswordInfo {
    AccountName: string;
    Password: string;
    NewPassword: string;
    IgnoreOldPassword: boolean;
    JWTToken: string;
}
