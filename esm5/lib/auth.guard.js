import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
import { SessionStorageVars } from './session-storage';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
var TbAuthGuard = /** @class */ (function () {
    function TbAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    TbAuthGuard.prototype.canActivate = function (next, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var autologinToken, jwt, subKey, authtoken, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ActivatedRouteSnapshot', next, state.url);
                        jwt = next.queryParams.hasOwnProperty('jwt') ? next.queryParams.jwt : null;
                        subKey = next.queryParams.hasOwnProperty('subKey') ? next.queryParams.subKey : null;
                        if (jwt && subKey) {
                            autologinToken = {
                                JwtToken: jwt,
                                SubscriptionKey: subKey
                            };
                        }
                        authtoken = sessionStorage.getItem(SessionStorageVars.JWT);
                        if (!(authtoken || autologinToken)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.authService.isValidToken(autologinToken)];
                    case 1:
                        res = _a.sent();
                        console.log('isValidToken', res);
                        if (res.Success) {
                            return [2 /*return*/, true];
                        }
                        else {
                            this.router.navigate(['login']);
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        // non sono loggato quindi vado alla login
                        this.router.navigate(['login']);
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TbAuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TbAuthGuard_Factory() { return new TbAuthGuard(i0.ɵɵinject(i1.TbAuthService), i0.ɵɵinject(i2.Router)); }, token: TbAuthGuard, providedIn: "root" });
    TbAuthGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [TbAuthService, Router])
    ], TbAuthGuard);
    return TbAuthGuard;
}());
export { TbAuthGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUE0RCxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFLdkQ7SUFDSSxxQkFBb0IsV0FBMEIsRUFBVSxNQUFjO1FBQWxELGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFcEUsaUNBQVcsR0FBakIsVUFBa0IsSUFBNEIsRUFBRSxLQUEwQjs7Ozs7O3dCQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBR2pELEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDM0UsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUMxRixJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7NEJBQ2YsY0FBYyxHQUFHO2dDQUNiLFFBQVEsRUFBRSxHQUFHO2dDQUNiLGVBQWUsRUFBRSxNQUFNOzZCQUMxQixDQUFDO3lCQUNMO3dCQUVLLFNBQVMsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDOzZCQUU3RCxDQUFBLFNBQVMsSUFBSSxjQUFjLENBQUEsRUFBM0Isd0JBQTJCO3dCQUVmLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFBOzt3QkFBekQsR0FBRyxHQUFHLFNBQW1EO3dCQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDakMsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFOzRCQUNiLHNCQUFPLElBQUksRUFBQzt5QkFDZjs2QkFBTTs0QkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ2hDLHNCQUFPLEtBQUssRUFBQzt5QkFDaEI7Ozt3QkFFRCwwQ0FBMEM7d0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsc0JBQU8sSUFBSSxFQUFDOzs7OztLQUVuQjs7SUFqQ1EsV0FBVztRQUh2QixVQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO2lEQUVtQyxhQUFhLEVBQWtCLE1BQU07T0FEN0QsV0FBVyxDQWtDdkI7c0JBNUNEO0NBNENDLEFBbENELElBa0NDO1NBbENZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dG9sb2dpblRva2VuIH0gZnJvbSAnLi9tb2RlbHMvYXV0b2xvZ2luLXRva2VuLm1vZGVsJztcbmltcG9ydCB7IFNlc3Npb25TdG9yYWdlVmFycyB9IGZyb20gJy4vc2Vzc2lvbi1zdG9yYWdlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUYkF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gICAgYXN5bmMgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FjdGl2YXRlZFJvdXRlU25hcHNob3QnLCBuZXh0LCBzdGF0ZS51cmwpO1xuXG4gICAgICAgIGxldCBhdXRvbG9naW5Ub2tlbjogQXV0b2xvZ2luVG9rZW47XG4gICAgICAgIGNvbnN0IGp3dCA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ2p3dCcpID8gbmV4dC5xdWVyeVBhcmFtcy5qd3QgOiBudWxsO1xuICAgICAgICBjb25zdCBzdWJLZXkgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdzdWJLZXknKSA/IG5leHQucXVlcnlQYXJhbXMuc3ViS2V5IDogbnVsbDtcbiAgICAgICAgaWYgKGp3dCAmJiBzdWJLZXkpIHtcbiAgICAgICAgICAgIGF1dG9sb2dpblRva2VuID0ge1xuICAgICAgICAgICAgICAgIEp3dFRva2VuOiBqd3QsXG4gICAgICAgICAgICAgICAgU3Vic2NyaXB0aW9uS2V5OiBzdWJLZXlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhdXRodG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNlc3Npb25TdG9yYWdlVmFycy5KV1QpO1xuXG4gICAgICAgIGlmIChhdXRodG9rZW4gfHwgYXV0b2xvZ2luVG9rZW4pIHtcbiAgICAgICAgICAgIC8vIGhvIHVuIHRva2VuLCBtYSBuZSB2ZXJpZmljbyBsYSB2YWxpZGl0w6BcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuaXNWYWxpZFRva2VuKGF1dG9sb2dpblRva2VuKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpc1ZhbGlkVG9rZW4nLCByZXMpO1xuICAgICAgICAgICAgaWYgKHJlcy5TdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm9uIHNvbm8gbG9nZ2F0byBxdWluZGkgdmFkbyBhbGxhIGxvZ2luXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=