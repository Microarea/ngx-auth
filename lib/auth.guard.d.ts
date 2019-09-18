import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TbAuthService } from './auth.service';
import { TbAuthEnvironment } from './models/auth-environment';
export declare class TbAuthGuard implements CanActivate {
    private authService;
    private router;
    private env;
    constructor(authService: TbAuthService, router: Router, env: TbAuthEnvironment);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
}
