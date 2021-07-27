export interface TbAuthEnvironment {
    auth: {
        url: string;
        iupurl: string;
        subscriptionSelection: boolean;
        showSignUp: boolean;
        appId: string;
        isRedirectExternal: boolean;
        snapshotServiceUrl: string;
        redirectUrl: string;
        userGatewayUrl: string;
        createAccountUrl: string;
        changePasswordUrl: string;
        loginPageUrl: string;
        sessionStorage: boolean;
        logoURL: string;
        updatemessageIt: string;
        updatemessageEn: string;
    };
}
