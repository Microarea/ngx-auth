export interface TbAuthEnvironment {
    auth: {
        url: string;
        subscriptionSelection: boolean;
        appId: string;
        redirectUrl: string;
        isRedirectExternal: boolean;
        loginPageUrl: string;
        sessionStorage: boolean;
        snapshotServiceUrl: string;
        logo: string;
    };
}
