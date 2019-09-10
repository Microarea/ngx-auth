import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TbAuthService } from './auth.service';
export declare class TbAuthInterceptor implements HttpInterceptor {
    private authService;
    constructor(authService: TbAuthService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
