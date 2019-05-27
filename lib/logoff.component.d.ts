import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
export declare class TbLogoffComponent {
    authService: TbAuthService;
    router: Router;
    constructor(authService: TbAuthService, router: Router);
}
