import { Injectable, Inject } from '@angular/core';
import { LoginRequest } from './models/login-request';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
export class TbAuthGuard {
    constructor(authService, router, env) {
        this.authService = authService;
        this.router = router;
        this.env = env;
    }
    async canActivate(next, state) {
        /**
         * Se ricevo jwt e subKey significa che devo fare una "autologin"
         * Creo un LoginRequest con i valori ricevuti, integro con appid letto da environment ed effettuo una login specifica
         * In caso positivo vado in homepage "/"
         */
        const jwt = next.queryParams.hasOwnProperty('jwt') ? next.queryParams.jwt : null;
        const subKey = next.queryParams.hasOwnProperty('subKey') ? next.queryParams.subKey : null;
        const instanceKey = next.queryParams.hasOwnProperty('instanceKey') ? next.queryParams.instanceKey : null;
        const ns = next.queryParams.hasOwnProperty('ns') ? next.queryParams.ns : null;
        const args = next.queryParams.hasOwnProperty('args') ? next.queryParams.args : null;
        //potrei passare di qua quando ho già un token valido, quindi il meccanismo "no jwt->redirect verso il gateway" non deve partire
        const tempToken = this.authService.getToken() || '';
        //mago non deve più far vedere la sua pagina di login, a meno che non si tratti di magoweb o ambiente di sviluppo
        //viene effettuato direttamente un redirect all'indirizzo specificato (tipicamente lo usergateway)
        //se non arrivi da un redirect con token o se non sei già autenticato, rimando al gateway
        if (!jwt && this.env.auth.redirectIfNotAuthenticated && this.authService.getUserGatewayUrl() && !tempToken) {
            this.authService.navigateUserGateway();
            return true;
        }
        const connection = await this.authService.checkConnection();
        if (!connection) {
            console.log(`CONNECTIONDOWN on: ${this.authService.getBaseUrl()}`);
            // non sono loggato quindi vado alla login
            if (!state.url.includes('/login')) {
                this.router.navigate(['login']);
            }
            return true;
        }
        if (state.url.includes(this.authService.getLoginPageUrl())) {
            this.authService.clearStorage();
            return true;
        }
        //store nel local/sessions storage delle info necessarie allo snapshot
        //in questo caso la libreria sta "vivendo" dentro mago, riceve la redirect dello user gateway e popola queste info
        if (subKey && instanceKey)
            this.authService.storageQueryParams(subKey, instanceKey);
        if (jwt && subKey && instanceKey) {
            const loginRequest = new LoginRequest();
            loginRequest.token = jwt;
            loginRequest.subscriptionKey = subKey;
            loginRequest.appId = this.authService.getAppId();
            console.log('login by token...');
            const loginResponse = (await this.authService.login(loginRequest).catch((err) => {
                this.authService.errorMessage = err.error && err.error.Message;
                this.router.navigate(['login'], {
                    queryParams: { error: this.authService.errorMessage },
                });
                return;
            }));
            if (!loginResponse) {
                this.router.navigate(['login'], {
                    queryParams: { error: this.authService.errorMessage },
                });
                return false;
            }
            if (loginResponse.Result) {
                this.authService.errorMessage = '';
                //questa parte è da refactorizzare,  per apertura documenti da infinity urgentissima
                //in futuro ci sarà l'url originale della richiesta
                const url = ns ? 'document' : this.authService.getRedirectUrl();
                this.router.navigate([url], {
                    replaceUrl: true,
                    queryParams: { jwt: null, subKey: null, ns: ns, args: args },
                    queryParamsHandling: 'merge',
                });
                //this.router.navigate([this.authService.getRedirectUrl()]);
                return true;
            }
        }
        /**
         * Se arrivo qua vuol dire che ho già un token salvato e non scaduto quindi chiedo conferma della validità
         */
        const authtoken = this.authService.getToken() || '';
        if (authtoken) {
            // ho un token, ma ne verifico la validità
            const res = (await this.authService.isValidToken(authtoken));
            if (res.Result) {
                if (state.url.includes(this.authService.getLoginPageUrl()))
                    this.router.navigate([this.authService.getRedirectUrl()]);
                return true;
            }
            else {
                this.router.navigate([this.authService.getLoginPageUrl()]);
                return false;
            }
        }
        else {
            // non sono loggato quindi vado alla login
            if (!state.url.includes(this.authService.getLoginPageUrl()))
                this.router.navigate([this.authService.getLoginPageUrl()]);
            return true;
        }
    }
    /** @nocollapse */ static { this.ɵfac = function TbAuthGuard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TbAuthGuard)(i0.ɵɵinject(i1.TbAuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject('env')); }; }
    /** @nocollapse */ static { this.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: TbAuthGuard, factory: TbAuthGuard.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.TbAuthService }, { type: i2.Router }, { type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVF0RCxNQUFNLE9BQU8sV0FBVztJQUNwQixZQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBc0I7UUFBakcsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXlCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQUcsQ0FBQztJQUV6SCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQTRCLEVBQUUsS0FBMEI7UUFDdEU7Ozs7V0FJRztRQUNILE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFGLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pHLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJ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QUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0SCxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO2lCQUFNLENBQUM7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsT0FBTyxLQUFLLENBQUM7WUFDakIsQ0FBQztRQUNMLENBQUM7YUFBTSxDQUFDO1lBQ0osMENBQTBDO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEgsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7K0hBeEdRLFdBQVcscUVBQzRELEtBQUs7c0dBRDVFLFdBQVcsV0FBWCxXQUFXLG1CQUZSLE1BQU07O2lGQUVULFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkFFNEUsTUFBTTt1QkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgVGJBdXRoRW52aXJvbm1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRoLWVudmlyb25tZW50JztcclxuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi9tb2RlbHMvb3BlcmF0aW9uLXJlc3VsdCc7XHJcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhHdWFyZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBASW5qZWN0KCdlbnYnKSBwcml2YXRlIGVudjogVGJBdXRoRW52aXJvbm1lbnQpIHt9XHJcblxyXG4gICAgYXN5bmMgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZSByaWNldm8gand0IGUgc3ViS2V5IHNpZ25pZmljYSBjaGUgZGV2byBmYXJlIHVuYSBcImF1dG9sb2dpblwiXHJcbiAgICAgICAgICogQ3JlbyB1biBMb2dpblJlcXVlc3QgY29uIGkgdmFsb3JpIHJpY2V2dXRpLCBpbnRlZ3JvIGNvbiBhcHBpZCBsZXR0byBkYSBlbnZpcm9ubWVudCBlZCBlZmZldHR1byB1bmEgbG9naW4gc3BlY2lmaWNhXHJcbiAgICAgICAgICogSW4gY2FzbyBwb3NpdGl2byB2YWRvIGluIGhvbWVwYWdlIFwiL1wiXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgand0ID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnand0JykgPyBuZXh0LnF1ZXJ5UGFyYW1zLmp3dCA6IG51bGw7XHJcbiAgICAgICAgY29uc3Qgc3ViS2V5ID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnc3ViS2V5JykgPyBuZXh0LnF1ZXJ5UGFyYW1zLnN1YktleSA6IG51bGw7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdpbnN0YW5jZUtleScpID8gbmV4dC5xdWVyeVBhcmFtcy5pbnN0YW5jZUtleSA6IG51bGw7XHJcbiAgICAgICAgY29uc3QgbnMgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCducycpID8gbmV4dC5xdWVyeVBhcmFtcy5ucyA6IG51bGw7XHJcbiAgICAgICAgY29uc3QgYXJncyA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ2FyZ3MnKSA/IG5leHQucXVlcnlQYXJhbXMuYXJncyA6IG51bGw7XHJcblxyXG4gICAgICAgIC8vcG90cmVpIHBhc3NhcmUgZGkgcXVhIHF1YW5kbyBobyBnacOgIHVuIHRva2VuIHZhbGlkbywgcXVpbmRpIGlsIG1lY2NhbmlzbW8gXCJubyBqd3QtPnJlZGlyZWN0IHZlcnNvIGlsIGdhdGV3YXlcIiBub24gZGV2ZSBwYXJ0aXJlXHJcbiAgICAgICAgY29uc3QgdGVtcFRva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpIHx8ICcnO1xyXG5cclxuICAgICAgICAvL21hZ28gbm9uIGRldmUgcGnDuSBmYXIgdmVkZXJlIGxhIHN1YSBwYWdpbmEgZGkgbG9naW4sIGEgbWVubyBjaGUgbm9uIHNpIHRyYXR0aSBkaSBtYWdvd2ViIG8gYW1iaWVudGUgZGkgc3ZpbHVwcG9cclxuICAgICAgICAvL3ZpZW5lIGVmZmV0dHVhdG8gZGlyZXR0YW1lbnRlIHVuIHJlZGlyZWN0IGFsbCdpbmRpcml6em8gc3BlY2lmaWNhdG8gKHRpcGljYW1lbnRlIGxvIHVzZXJnYXRld2F5KVxyXG4gICAgICAgIC8vc2Ugbm9uIGFycml2aSBkYSB1biByZWRpcmVjdCBjb24gdG9rZW4gbyBzZSBub24gc2VpIGdpw6AgYXV0ZW50aWNhdG8sIHJpbWFuZG8gYWwgZ2F0ZXdheVxyXG4gICAgICAgIGlmICghand0ICYmIHRoaXMuZW52LmF1dGgucmVkaXJlY3RJZk5vdEF1dGhlbnRpY2F0ZWQgJiYgdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyR2F0ZXdheVVybCgpICYmICF0ZW1wVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5uYXZpZ2F0ZVVzZXJHYXRld2F5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tDb25uZWN0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmICghY29ubmVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ09OTkVDVElPTkRPV04gb246ICR7dGhpcy5hdXRoU2VydmljZS5nZXRCYXNlVXJsKCl9YCk7XHJcbiAgICAgICAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnVybC5pbmNsdWRlcygnL2xvZ2luJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUudXJsLmluY2x1ZGVzKHRoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9zdG9yZSBuZWwgbG9jYWwvc2Vzc2lvbnMgc3RvcmFnZSBkZWxsZSBpbmZvIG5lY2Vzc2FyaWUgYWxsbyBzbmFwc2hvdFxyXG4gICAgICAgIC8vaW4gcXVlc3RvIGNhc28gbGEgbGlicmVyaWEgc3RhIFwidml2ZW5kb1wiIGRlbnRybyBtYWdvLCByaWNldmUgbGEgcmVkaXJlY3QgZGVsbG8gdXNlciBnYXRld2F5IGUgcG9wb2xhIHF1ZXN0ZSBpbmZvXHJcbiAgICAgICAgaWYgKHN1YktleSAmJiBpbnN0YW5jZUtleSkgdGhpcy5hdXRoU2VydmljZS5zdG9yYWdlUXVlcnlQYXJhbXMoc3ViS2V5LCBpbnN0YW5jZUtleSk7XHJcblxyXG4gICAgICAgIGlmIChqd3QgJiYgc3ViS2V5ICYmIGluc3RhbmNlS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0ID0gbmV3IExvZ2luUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBsb2dpblJlcXVlc3QudG9rZW4gPSBqd3Q7XHJcbiAgICAgICAgICAgIGxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSBzdWJLZXk7XHJcbiAgICAgICAgICAgIGxvZ2luUmVxdWVzdC5hcHBJZCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXBwSWQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGJ5IHRva2VuLi4uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVzcG9uc2UgPSAoYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbihsb2dpblJlcXVlc3QpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgZXJyb3I6IHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSkpIGFzIExvZ2luUmVzcG9uc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IGVycm9yOiB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAvL3F1ZXN0YSBwYXJ0ZSDDqCBkYSByZWZhY3Rvcml6emFyZSwgIHBlciBhcGVydHVyYSBkb2N1bWVudGkgZGEgaW5maW5pdHkgdXJnZW50aXNzaW1hXHJcbiAgICAgICAgICAgICAgICAvL2luIGZ1dHVybyBjaSBzYXLDoCBsJ3VybCBvcmlnaW5hbGUgZGVsbGEgcmljaGllc3RhXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBucyA/ICdkb2N1bWVudCcgOiB0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdXJsXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VVcmw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgand0OiBudWxsLCBzdWJLZXk6IG51bGwsIG5zOiBucywgYXJnczogYXJncyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZSBhcnJpdm8gcXVhIHZ1b2wgZGlyZSBjaGUgaG8gZ2nDoCB1biB0b2tlbiBzYWx2YXRvIGUgbm9uIHNjYWR1dG8gcXVpbmRpIGNoaWVkbyBjb25mZXJtYSBkZWxsYSB2YWxpZGl0w6BcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBhdXRodG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCkgfHwgJyc7XHJcbiAgICAgICAgaWYgKGF1dGh0b2tlbikge1xyXG4gICAgICAgICAgICAvLyBobyB1biB0b2tlbiwgbWEgbmUgdmVyaWZpY28gbGEgdmFsaWRpdMOgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlczogT3BlcmF0aW9uUmVzdWx0ID0gKGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuaXNWYWxpZFRva2VuKGF1dGh0b2tlbikpIGFzIE9wZXJhdGlvblJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudXJsLmluY2x1ZGVzKHRoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCkpKSB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBub24gc29ubyBsb2dnYXRvIHF1aW5kaSB2YWRvIGFsbGEgbG9naW5cclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS51cmwuaW5jbHVkZXModGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKSkpIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=