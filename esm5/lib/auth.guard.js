import { __awaiter, __generator } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TbAuthService } from './auth.service';
import { LoginRequest } from './models/login-request';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
var TbAuthGuard = /** @class */ (function () {
    function TbAuthGuard(authService, router, env) {
        this.authService = authService;
        this.router = router;
        this.env = env;
    }
    TbAuthGuard.prototype.canActivate = function (next, state) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, jwt, subKey, ns, args, loginRequest, loginResponse, url, authtoken, res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkConnection()];
                    case 1:
                        connection = _a.sent();
                        if (!connection) {
                            console.log('CONNECTIONDOWN');
                            // non sono loggato quindi vado alla login
                            if (!state.url.includes('/login')) {
                                this.router.navigate(['login']);
                            }
                            return [2 /*return*/, true];
                        }
                        if (state.url.includes(this.authService.getLoginPageUrl())) {
                            this.authService.clearStorage();
                            return [2 /*return*/, true];
                        }
                        jwt = next.queryParams.hasOwnProperty('jwt') ? next.queryParams.jwt : null;
                        subKey = next.queryParams.hasOwnProperty('subKey') ? next.queryParams.subKey : null;
                        ns = next.queryParams.hasOwnProperty('ns') ? next.queryParams.ns : null;
                        args = next.queryParams.hasOwnProperty('args') ? next.queryParams.args : null;
                        if (!(jwt && subKey)) return [3 /*break*/, 3];
                        loginRequest = new LoginRequest();
                        loginRequest.token = jwt;
                        loginRequest.subscriptionKey = subKey;
                        loginRequest.appId = this.authService.getAppId();
                        return [4 /*yield*/, this.authService.login(loginRequest).catch(function (err) {
                                _this.authService.errorMessage = err.error && err.error.Message;
                                _this.router.navigate(['login']);
                                return;
                            })];
                    case 2:
                        loginResponse = (_a.sent());
                        if (!loginResponse) {
                            this.router.navigate(['login']);
                            return [2 /*return*/, false];
                        }
                        if (loginResponse.Result) {
                            this.authService.errorMessage = '';
                            url = ns ? 'document' : this.authService.getRedirectUrl();
                            this.router.navigate([url], {
                                replaceUrl: true,
                                queryParams: { jwt: null, subKey: null, ns: ns, args: args },
                                queryParamsHandling: 'merge',
                            });
                            //this.router.navigate([this.authService.getRedirectUrl()]);
                            return [2 /*return*/, true];
                        }
                        _a.label = 3;
                    case 3:
                        authtoken = this.authService.getToken() || '';
                        if (!authtoken) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.authService.isValidToken(authtoken)];
                    case 4:
                        res = (_a.sent());
                        if (res.Result) {
                            if (state.url.includes(this.authService.getLoginPageUrl()))
                                this.router.navigate([this.authService.getRedirectUrl()]);
                            return [2 /*return*/, true];
                        }
                        else {
                            this.router.navigate([this.authService.getLoginPageUrl()]);
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        // non sono loggato quindi vado alla login
                        if (!state.url.includes(this.authService.getLoginPageUrl()))
                            this.router.navigate([this.authService.getLoginPageUrl()]);
                        return [2 /*return*/, true];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /** @nocollapse */ TbAuthGuard.ɵfac = function TbAuthGuard_Factory(t) { return new (t || TbAuthGuard)(i0.ɵɵinject(i1.TbAuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject('env')); };
    /** @nocollapse */ TbAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ token: TbAuthGuard, factory: TbAuthGuard.ɵfac, providedIn: 'root' });
    return TbAuthGuard;
}());
export { TbAuthGuard };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TbAuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.TbAuthService }, { type: i2.Router }, { type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBNEQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUt0RDtJQUlJLHFCQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBc0I7UUFBakcsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXlCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQUcsQ0FBQztJQUVuSCxpQ0FBVyxHQUFqQixVQUFrQixJQUE0QixFQUFFLEtBQTBCOzs7Ozs7NEJBQ25ELHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEVBQUE7O3dCQUFyRCxVQUFVLEdBQUcsU0FBd0M7d0JBRTNELElBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzRCQUM5QiwwQ0FBMEM7NEJBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQ0FDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzZCQUNuQzs0QkFDRCxzQkFBTyxJQUFJLEVBQUM7eUJBQ2Y7d0JBRUQsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUU7NEJBQ3hELElBQUksQ0FBQyxX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Q0FBQyxNQUFNLEVBQUU7NEJBQ1osSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3RILHNCQUFPLElBQUksRUFBQzt5QkFDZjs2QkFBTTs0QkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUMzRCxzQkFBTyxLQUFLLEVBQUM7eUJBQ2hCOzs7d0JBRUQsMENBQTBDO3dCQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs0QkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN4SCxzQkFBTyxJQUFJLEVBQUM7Ozs7O0tBRW5COzBFQW5GUSxXQUFXLHFFQUM0RCxLQUFLO3VEQUQ1RSxXQUFXLFdBQVgsV0FBVyxtQkFGUixNQUFNO3NCQVZ0QjtDQWdHQyxBQXZGRCxJQXVGQztTQXBGWSxXQUFXO2tEQUFYLFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkFFNEUsTUFBTTt1QkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVxdWVzdCc7XHJcbmltcG9ydCB7IFRiQXV0aEVudmlyb25tZW50IH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IE9wZXJhdGlvblJlc3VsdCB9IGZyb20gJy4vbW9kZWxzL29wZXJhdGlvbi1yZXN1bHQnO1xyXG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBUYkF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBASW5qZWN0KCdlbnYnKSBwcml2YXRlIGVudjogVGJBdXRoRW52aXJvbm1lbnQpIHt9XHJcblxyXG4gICAgYXN5bmMgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5jaGVja0Nvbm5lY3Rpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDT05ORUNUSU9ORE9XTicpO1xyXG4gICAgICAgICAgICAvLyBub24gc29ubyBsb2dnYXRvIHF1aW5kaSB2YWRvIGFsbGEgbG9naW5cclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS51cmwuaW5jbHVkZXMoJy9sb2dpbicpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLnVybC5pbmNsdWRlcyh0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlIHJpY2V2byBqd3QgZSBzdWJLZXkgc2lnbmlmaWNhIGNoZSBkZXZvIGZhcmUgdW5hIFwiYXV0b2xvZ2luXCJcclxuICAgICAgICAgKiBDcmVvIHVuIExvZ2luUmVxdWVzdCBjb24gaSB2YWxvcmkgcmljZXZ1dGksIGludGVncm8gY29uIGFwcGlkIGxldHRvIGRhIGVudmlyb25tZW50IGVkIGVmZmV0dHVvIHVuYSBsb2dpbiBzcGVjaWZpY2FcclxuICAgICAgICAgKiBJbiBjYXNvIHBvc2l0aXZvIHZhZG8gaW4gaG9tZXBhZ2UgXCIvXCJcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBqd3QgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdqd3QnKSA/IG5leHQucXVlcnlQYXJhbXMuand0IDogbnVsbDtcclxuICAgICAgICBjb25zdCBzdWJLZXkgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdzdWJLZXknKSA/IG5leHQucXVlcnlQYXJhbXMuc3ViS2V5IDogbnVsbDtcclxuICAgICAgICBjb25zdCBucyA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ25zJykgPyBuZXh0LnF1ZXJ5UGFyYW1zLm5zIDogbnVsbDtcclxuICAgICAgICBjb25zdCBhcmdzID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnYXJncycpID8gbmV4dC5xdWVyeVBhcmFtcy5hcmdzIDogbnVsbDtcclxuICAgICAgICBpZiAoand0ICYmIHN1YktleSkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCA9IG5ldyBMb2dpblJlcXVlc3QoKTtcclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnRva2VuID0gand0O1xyXG4gICAgICAgICAgICBsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gc3ViS2V5O1xyXG4gICAgICAgICAgICBsb2dpblJlcXVlc3QuYXBwSWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFwcElkKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsb2dpblJlc3BvbnNlID0gKGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4obG9naW5SZXF1ZXN0KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0pKSBhcyBMb2dpblJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFsb2dpblJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9xdWVzdGEgcGFydGUgw6ggZGEgcmVmYWN0b3JpenphcmUsICBwZXIgYXBlcnR1cmEgZG9jdW1lbnRpIGRhIGluZmluaXR5IHVyZ2VudGlzc2ltYVxyXG4gICAgICAgICAgICAgICAgLy9pbiBmdXR1cm8gY2kgc2Fyw6AgbCd1cmwgb3JpZ2luYWxlIGRlbGxhIHJpY2hpZXN0YVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbnMgPyAnZG9jdW1lbnQnIDogdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3VybF0sIHtcclxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlVXJsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IGp3dDogbnVsbCwgc3ViS2V5OiBudWxsLCBuczogbnMsIGFyZ3M6IGFyZ3MgfSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2UgYXJyaXZvIHF1YSB2dW9sIGRpcmUgY2hlIGhvIGdpw6AgdW4gdG9rZW4gc2FsdmF0byBlIG5vbiBzY2FkdXRvIHF1aW5kaSBjaGllZG8gY29uZmVybWEgZGVsbGEgdmFsaWRpdMOgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgYXV0aHRva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpIHx8ICcnO1xyXG4gICAgICAgIGlmIChhdXRodG9rZW4pIHtcclxuICAgICAgICAgICAgLy8gaG8gdW4gdG9rZW4sIG1hIG5lIHZlcmlmaWNvIGxhIHZhbGlkaXTDoFxyXG4gICAgICAgICAgICBjb25zdCByZXM6IE9wZXJhdGlvblJlc3VsdCA9IChhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmlzVmFsaWRUb2tlbihhdXRodG9rZW4pKSBhcyBPcGVyYXRpb25SZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnVybC5pbmNsdWRlcyh0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpKSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbm9uIHNvbm8gbG9nZ2F0byBxdWluZGkgdmFkbyBhbGxhIGxvZ2luXHJcbiAgICAgICAgICAgIGlmICghc3RhdGUudXJsLmluY2x1ZGVzKHRoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCkpKSB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19