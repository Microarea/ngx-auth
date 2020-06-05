export interface TbAuthEnvironment {
    auth: {
        url: string;
        subscriptionSelection: boolean;
        showSignUp: boolean;
        appId: string;
        isRedirectExternal: boolean;
        snapshotServiceUrl: string;
        redirectUrl: string;
        createAccountUrl: string;
        changePasswordUrl: string;
        loginPageUrl: string;
        sessionStorage: boolean;
        logoURL: string;
    };
}
