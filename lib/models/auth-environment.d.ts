export interface TbAuthEnvironment {
    auth: {
        url: string;
        storeUrl: string;
        iupurl: string;
        preLoginAppId: string;
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
        backgroundURL: string;
        updatemessage_IT: string;
        updatemessage_EN: string;
        updatemessage_DE: string;
        updatemessage_BR: string;
        updatemessage_BG: string;
        updatemessage_ES: string;
        updatemessage_RO: string;
        updatemessage_PL: string;
    };
    brand: {
        applicationName: string;
        bannerUrl: string;
    };
}
