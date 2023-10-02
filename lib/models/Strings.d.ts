import { TbAuthService } from "../auth.service";
export declare class Strings {
    /**
     *
     */
    private currentBrowserLanguage;
    constructor();
    UpdateTitle_IT: string;
    UpdateTitle_EN: string;
    UpdateTitle_DE: string;
    UpdateTitle_BR: string;
    UpdateTitle_BG: string;
    UpdateTitle_ES: string;
    UpdateTitle_RO: string;
    UpdateTitle_PL: string;
    UpdateDontShow_IT: string;
    UpdateDontShow_EN: string;
    UpdateDontShow_DE: string;
    UpdateDontShow_BR: string;
    UpdateDontShow_BG: string;
    UpdateDontShow_ES: string;
    UpdateDontShow_RO: string;
    UpdateDontShow_PL: string;
    getUpdateTitle(): string;
    getUpdateDontShowMessage(): string;
    getUpdateMessage(authService: TbAuthService): string;
}
