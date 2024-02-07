import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
import * as i0 from "@angular/core";
export declare class TbLogoffComponent {
    authService: TbAuthService;
    router: Router;
    constructor(authService: TbAuthService, router: Router);
    LogOff(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbLogoffComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbLogoffComponent, "tb-logoff", never, {}, {}, never, never>;
}
