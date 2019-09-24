/**
 * Instance of this interface is used to report current connection status.
 */
export interface AuthConnectionState {
    /**
     * "True" if browser has network connection. Determined by Window objects "online" / "offline" events.
     */
    hasNetworkConnection: boolean;
    /**
     * "True" if browser has Internet access. Determined by heartbeat system which periodically makes request to heartbeat Url.
     */
    hasBackendAccess: boolean;
}
