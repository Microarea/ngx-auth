export interface TbAuthEnvironment {
    auth: {
        url: string;
        subscriptionSelection: boolean;
        appId: string;
        redirectUrl: string;
        loginPageUrl: string;
        sessionStorage: boolean;
        logo: string;
    };
}
