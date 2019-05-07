import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
import { SessionStorageVars } from './session-storage';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
let TbAuthGuard = class TbAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('ActivatedRouteSnapshot', next, state.url);
            let autologinToken;
            const jwt = next.queryParams.hasOwnProperty('jwt') ? next.queryParams.jwt : null;
            const subKey = next.queryParams.hasOwnProperty('subKey') ? next.queryParams.subKey : null;
            if (jwt && subKey) {
                autologinToken = {
                    JwtToken: jwt,
                    SubscriptionKey: subKey
                };
            }
            const authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
            if (authtoken || autologinToken) {
                // ho un token, ma ne verifico la validità
                const res = yield this.authService.isValidToken(autologinToken);
                console.log('isValidToken', res);
                if (res.Success) {
                    return true;
                }
                else {
                    this.router.navigate(['login']);
                    return false;
                }
            }
            else {
                // non sono loggato quindi vado alla login
                this.router.navigate(['login']);
                return true;
            }
        });
    }
};
TbAuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TbAuthGuard_Factory() { return new TbAuthGuard(i0.ɵɵinject(i1.TbAuthService), i0.ɵɵinject(i2.Router)); }, token: TbAuthGuard, providedIn: "root" });
TbAuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [TbAuthService, Router])
], TbAuthGuard);
export { TbAuthGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUE0RCxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFLdkQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUNwQixZQUFvQixXQUEwQixFQUFVLE1BQWM7UUFBbEQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUVwRSxXQUFXLENBQUMsSUFBNEIsRUFBRSxLQUEwQjs7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXZELElBQUksY0FBOEIsQ0FBQztZQUNuQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqRixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxRixJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7Z0JBQ2YsY0FBYyxHQUFHO29CQUNiLFFBQVEsRUFBRSxHQUFHO29CQUNiLGVBQWUsRUFBRSxNQUFNO2lCQUMxQixDQUFDO2FBQ0w7WUFFRCxNQUFNLFNBQVMsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWpFLElBQUksU0FBUyxJQUFJLGNBQWMsRUFBRTtnQkFDN0IsMENBQTBDO2dCQUMxQyxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDakMsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO29CQUNiLE9BQU8sSUFBSSxDQUFDO2lCQUNmO3FCQUFNO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0o7aUJBQU07Z0JBQ0gsMENBQTBDO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDO0tBQUE7Q0FDSixDQUFBOztBQWxDWSxXQUFXO0lBSHZCLFVBQVUsQ0FBQztRQUNSLFVBQVUsRUFBRSxNQUFNO0tBQ3JCLENBQUM7NkNBRW1DLGFBQWEsRUFBa0IsTUFBTTtHQUQ3RCxXQUFXLENBa0N2QjtTQWxDWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBdXRvbG9naW5Ub2tlbiB9IGZyb20gJy4vbW9kZWxzL2F1dG9sb2dpbi10b2tlbi5tb2RlbCc7XG5pbXBvcnQgeyBTZXNzaW9uU3RvcmFnZVZhcnMgfSBmcm9tICcuL3Nlc3Npb24tc3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGJBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICAgIGFzeW5jIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90JywgbmV4dCwgc3RhdGUudXJsKTtcblxuICAgICAgICBsZXQgYXV0b2xvZ2luVG9rZW46IEF1dG9sb2dpblRva2VuO1xuICAgICAgICBjb25zdCBqd3QgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdqd3QnKSA/IG5leHQucXVlcnlQYXJhbXMuand0IDogbnVsbDtcbiAgICAgICAgY29uc3Qgc3ViS2V5ID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnc3ViS2V5JykgPyBuZXh0LnF1ZXJ5UGFyYW1zLnN1YktleSA6IG51bGw7XG4gICAgICAgIGlmIChqd3QgJiYgc3ViS2V5KSB7XG4gICAgICAgICAgICBhdXRvbG9naW5Ub2tlbiA9IHtcbiAgICAgICAgICAgICAgICBKd3RUb2tlbjogand0LFxuICAgICAgICAgICAgICAgIFN1YnNjcmlwdGlvbktleTogc3ViS2V5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXV0aHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTZXNzaW9uU3RvcmFnZVZhcnMuSldUKTtcblxuICAgICAgICBpZiAoYXV0aHRva2VuIHx8IGF1dG9sb2dpblRva2VuKSB7XG4gICAgICAgICAgICAvLyBobyB1biB0b2tlbiwgbWEgbmUgdmVyaWZpY28gbGEgdmFsaWRpdMOgXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmlzVmFsaWRUb2tlbihhdXRvbG9naW5Ub2tlbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXNWYWxpZFRva2VuJywgcmVzKTtcbiAgICAgICAgICAgIGlmIChyZXMuU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19