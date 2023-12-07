import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
export class TbAuthInterceptor {
    constructor(env, authService) {
        this.authService = authService;
        this.env = env;
    }
    intercept(request, next) {
        let token = JSON.stringify({ type: 'app', appId: 'LOGINAPP', securityValue: '1l4r14m' });
        /*
         * Aggiungo a ogni httprequest l'header 'Authorization'
         * In caso di api "pubbliche" come /subscriptionskeysforaccount, uso un token "di applicazione"
         *dal 24022020 anche l'api per reperire le subscription è soggetta a jwt
         */
        // if (!request.url.includes('/subscriptionskeysforaccount')) {
        const jwt = this.authService.getToken();
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
    }
    /** @nocollapse */ static { this.ɵfac = function TbAuthInterceptor_Factory(t) { return new (t || TbAuthInterceptor)(i0.ɵɵinject('env'), i0.ɵɵinject(i1.TbAuthService)); }; }
    /** @nocollapse */ static { this.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: TbAuthInterceptor, factory: TbAuthInterceptor.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthInterceptor, [{
        type: Injectable
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }, { type: i1.TbAuthService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9hdXRoLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRbkQsTUFBTSxPQUFPLGlCQUFpQjtJQUs1QixZQUEyQixHQUFzQixFQUFVLFdBQTBCO1FBQTFCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQ25GLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxTQUFTLENBQUMsT0FBeUIsRUFBRSxJQUFpQjtRQUNwRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRXpGOzs7O1dBSUc7UUFDSCwrREFBK0Q7UUFDL0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QyxJQUFJLEdBQUc7WUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNqRyxLQUFLO1FBRUwsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdEIsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxLQUFLO2FBQ3JCO1NBQ0YsQ0FBQyxDQUFDO1FBRUg7O1dBRUc7UUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQztxR0FoQ1UsaUJBQWlCLGNBS1IsS0FBSztzR0FMZCxpQkFBaUIsV0FBakIsaUJBQWlCOztpRkFBakIsaUJBQWlCO2NBRDdCLFVBQVU7O3NCQU1JLE1BQU07dUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBUYkF1dGhFbnZpcm9ubWVudCB9IGZyb20gJy4vbW9kZWxzL2F1dGgtZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICBwcml2YXRlIGVudjogVGJBdXRoRW52aXJvbm1lbnQ7XHJcblxyXG4gICBcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdlbnYnKSBlbnY6IFRiQXV0aEVudmlyb25tZW50LCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlKSB7IFxyXG4gICAgdGhpcy5lbnYgPSBlbnY7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICBsZXQgdG9rZW4gPSBKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdhcHAnLCBhcHBJZDogJ0xPR0lOQVBQJywgc2VjdXJpdHlWYWx1ZTogJzFsNHIxNG0nIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBBZ2dpdW5nbyBhIG9nbmkgaHR0cHJlcXVlc3QgbCdoZWFkZXIgJ0F1dGhvcml6YXRpb24nXHJcbiAgICAgKiBJbiBjYXNvIGRpIGFwaSBcInB1YmJsaWNoZVwiIGNvbWUgL3N1YnNjcmlwdGlvbnNrZXlzZm9yYWNjb3VudCwgdXNvIHVuIHRva2VuIFwiZGkgYXBwbGljYXppb25lXCJcclxuICAgICAqZGFsIDI0MDIyMDIwIGFuY2hlIGwnYXBpIHBlciByZXBlcmlyZSBsZSBzdWJzY3JpcHRpb24gw6ggc29nZ2V0dGEgYSBqd3RcclxuICAgICAqL1xyXG4gICAgLy8gaWYgKCFyZXF1ZXN0LnVybC5pbmNsdWRlcygnL3N1YnNjcmlwdGlvbnNrZXlzZm9yYWNjb3VudCcpKSB7XHJcbiAgICBjb25zdCBqd3QgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XHJcbiAgICBpZiAoand0KSB0b2tlbiA9IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2p3dCcsIGFwcElkOiB0aGlzLmVudi5hdXRoLmFwcElkLCBzZWN1cml0eVZhbHVlOiBqd3QgfSk7XHJcbiAgICAvLyAgfVxyXG5cclxuICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcclxuICAgICAgc2V0SGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBFbGFib3JhIGxhIHJlc3BvbnNlIGRpIG9nbmkgY2hpYW1hdGEgaHR0cFxyXG4gICAgICovXHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=