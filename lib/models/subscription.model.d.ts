export interface Subscription {
    subscriptionkey: string;
    description: string;
    status: number;
    instancekey: string;
}
export declare enum EntityStatus {
    None = 0,
    DBUnderMaintenance = 1,// 1
    Disabled = 2,// 2
    PrivacyMode = 4,// 4
    Canary = 8,// 8
    UpdateScheduled = 16
}
