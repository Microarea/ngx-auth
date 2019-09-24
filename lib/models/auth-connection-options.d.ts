/**
 * Instance of this interface could be used to configure "ConnectionService".
 */
export declare class AuthConnectionOptions {
    /**
     * Controls the Internet connectivity heartbeat system. Default value is 'true'.
     */
    enableHeartbeat: boolean;
    /**
     * Url used for checking Internet connectivity, heartbeat system periodically makes "HEAD" requests to this URL to determine Internet
     * connection status. Default value is "//internethealthtest.org".
     */
    heartbeatUrl: string;
    /**
     * Interval used to check Internet connectivity specified in milliseconds. Default value is "30000".
     */
    heartbeatInterval: number;
    /**
     * Interval used to retry Internet connectivity checks when an error is detected (when no Internet connection). Default value is "1000".
     */
    heartbeatRetryInterval: number;
    /**
     * HTTP method used for requesting heartbeat Url. Default is 'head'.
     */
    requestMethod: 'get' | 'post' | 'head' | 'options';
    constructor(heartbeatUrl: string);
}
