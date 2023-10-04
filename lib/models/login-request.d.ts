export declare class LoginRequest {
    token: string;
    appId: string;
    accountName: string;
    password: string;
    subscriptionKey: string;
    processID: string;
    otPassword: string;
}
export declare class ChangePasswordInfo {
    AccountName: string;
    Password: string;
    NewPassword: string;
    IgnoreOldPassword: boolean;
    JWTToken: string;
}
export interface CUCalendarJob {
    jobid: number;
    calendarid: number;
    subscriptionkey: string;
    customer: string;
    instancekey: string;
    currentmap: string;
    destinationmap: string;
    scheduledtime: Date;
    estimatedupgradetime: number;
    realupgradetime: number;
    status: number;
    notes: string;
    creationdate: Date;
}
