import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TbAuthService } from './auth.service';
export declare class TbAuthGuard implements CanActivate {
    private authService;
    private router;
    constructor(authService: TbAuthService, router: Router);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
}
