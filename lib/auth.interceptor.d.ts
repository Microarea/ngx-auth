import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { TbAuthEnvironment } from './models/auth-environment';
import { Observable } from 'rxjs';
import { TbAuthService } from './auth.service';
import * as i0 from "@angular/core";
export declare class TbAuthInterceptor implements HttpInterceptor {
    private authService;
    private env;
    constructor(env: TbAuthEnvironment, authService: TbAuthService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbAuthInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TbAuthInterceptor>;
}
