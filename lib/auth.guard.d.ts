import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TbAuthService } from './auth.service';
import { TbAuthEnvironment } from './models/auth-environment';
import * as i0 from "@angular/core";
export declare class TbAuthGuard implements CanActivate {
    private authService;
    private router;
    private env;
    constructor(authService: TbAuthService, router: Router, env: TbAuthEnvironment);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbAuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TbAuthGuard>;
}
