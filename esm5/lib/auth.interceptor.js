import { Injectable, Inject } from '@angular/core';
import { TbAuthService } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
var TbAuthInterceptor = /** @class */ (function () {
    function TbAuthInterceptor(env, authService) {
        this.authService = authService;
        this.env = env;
    }
    TbAuthInterceptor.prototype.intercept = function (request, next) {
        var token = JSON.stringify({ type: 'app', appId: 'LOGINAPP', securityValue: '1l4r14m' });
        /*
         * Aggiungo a ogni httprequest l'header 'Authorization'
         * In caso di api "pubbliche" come /subscriptionskeysforaccount, uso un token "di applicazione"
         *dal 24022020 anche l'api per reperire le subscription è soggetta a jwt
         */
        // if (!request.url.includes('/subscriptionskeysforaccount')) {
        var jwt = this.authService.getToken();
        if (jwt)
            token = JSON.stringify({ type: 'jwt', appId: this.env.auth.appId, securityValue: jwt });
        //  }
        request = request.clone({
            setHeaders: {
                Authorization: token
            }
        });
        /*
         * Elabora la response di ogni chiamata http
         */
        return next.handle(request).pipe();
    };
    /** @nocollapse */ TbAuthInterceptor.ɵfac = function TbAuthInterceptor_Factory(t) { return new (t || TbAuthInterceptor)(i0.ɵɵinject('env'), i0.ɵɵinject(i1.TbAuthService)); };
    /** @nocollapse */ TbAuthInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: TbAuthInterceptor, factory: TbAuthInterceptor.ɵfac });
    return TbAuthInterceptor;
}());
export { TbAuthInterceptor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TbAuthInterceptor, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }, { type: i1.TbAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFL0M7SUFNRSwyQkFBMkIsR0FBc0IsRUFBVSxXQUEwQjtRQUExQixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUNuRixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUV6Rjs7OztXQUlHO1FBQ0gsK0RBQStEO1FBQy9ELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEMsSUFBSSxHQUFHO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDakcsS0FBSztRQUVMLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFVBQVUsRUFBRTtnQkFDVixhQUFhLEVBQUUsS0FBSzthQUNyQjtTQUNGLENBQUMsQ0FBQztRQUVIOztXQUVHO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7c0ZBaENVLGlCQUFpQixjQUtSLEtBQUs7NkRBTGQsaUJBQWlCLFdBQWpCLGlCQUFpQjs0QkFSOUI7Q0F5Q0MsQUFsQ0QsSUFrQ0M7U0FqQ1ksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FEN0IsVUFBVTs7c0JBTUksTUFBTTt1QkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFRiQXV0aEVudmlyb25tZW50IH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIHByaXZhdGUgZW52OiBUYkF1dGhFbnZpcm9ubWVudDtcclxuXHJcbiAgIFxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2VudicpIGVudjogVGJBdXRoRW52aXJvbm1lbnQsIHByaXZhdGUgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UpIHsgXHJcbiAgICB0aGlzLmVudiA9IGVudjtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGxldCB0b2tlbiA9IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2FwcCcsIGFwcElkOiAnTE9HSU5BUFAnLCBzZWN1cml0eVZhbHVlOiAnMWw0cjE0bScgfSk7XHJcblxyXG4gICAgLypcclxuICAgICAqIEFnZ2l1bmdvIGEgb2duaSBodHRwcmVxdWVzdCBsJ2hlYWRlciAnQXV0aG9yaXphdGlvbidcclxuICAgICAqIEluIGNhc28gZGkgYXBpIFwicHViYmxpY2hlXCIgY29tZSAvc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50LCB1c28gdW4gdG9rZW4gXCJkaSBhcHBsaWNhemlvbmVcIlxyXG4gICAgICpkYWwgMjQwMjIwMjAgYW5jaGUgbCdhcGkgcGVyIHJlcGVyaXJlIGxlIHN1YnNjcmlwdGlvbiDDqCBzb2dnZXR0YSBhIGp3dFxyXG4gICAgICovXHJcbiAgICAvLyBpZiAoIXJlcXVlc3QudXJsLmluY2x1ZGVzKCcvc3Vic2NyaXB0aW9uc2tleXNmb3JhY2NvdW50JykpIHtcclxuICAgIGNvbnN0IGp3dCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcclxuICAgIGlmIChqd3QpIHRva2VuID0gSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnand0JywgYXBwSWQ6IHRoaXMuZW52LmF1dGguYXBwSWQsIHNlY3VyaXR5VmFsdWU6IGp3dCB9KTtcclxuICAgIC8vICB9XHJcblxyXG4gICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICBzZXRIZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLypcclxuICAgICAqIEVsYWJvcmEgbGEgcmVzcG9uc2UgZGkgb2duaSBjaGlhbWF0YSBodHRwXHJcbiAgICAgKi9cclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==