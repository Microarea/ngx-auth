import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TbAuthService } from './auth.service';
export declare class TbAuthGuard implements CanActivate {
    private authService;
    private router;
    private env;
    constructor(authService: TbAuthService, router: Router, env: any);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
}
