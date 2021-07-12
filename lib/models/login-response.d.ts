export interface LoginResponse {
    Result: boolean;
    Message: string;
    ResultCode: number;
    JwtToken: string;
    ExpirationDate: string;
    RegionalSettings: string;
    Language: string;
    Roles: string;
    AccountName: string;
    SubscriptionKey: string;
    SubscriptionDesc: string;
}
