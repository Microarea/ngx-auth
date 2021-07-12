import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
import * as i0 from "@angular/core";
export declare class TbLogoffComponent {
    authService: TbAuthService;
    router: Router;
    constructor(authService: TbAuthService, router: Router);
    LogOff(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDef<TbLogoffComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TbLogoffComponent, "tb-logoff", never, {}, {}, never, never>;
}
