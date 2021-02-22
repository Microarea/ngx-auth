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
            var connection, jwt, subKey, instanceKey, ns, args, loginRequest, loginResponse, url, authtoken, res;
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
                        instanceKey = next.queryParams.hasOwnProperty('instanceKey') ? next.queryParams.instanceKey : null;
                        ns = next.queryParams.hasOwnProperty('ns') ? next.queryParams.ns : null;
                        args = next.queryParams.hasOwnProperty('args') ? next.queryParams.args : null;
                        //store nel local/sessions storage delle info necessarie allo snapshot 
                        //in questo caso la libreria sta "vivendo" dentro mago, riceve la redirect dello user gateway e popola queste info 
                        if (subKey && instanceKey)
                            this.authService.storageQueryParams(subKey, instanceKey);
                        if (!(jwt && subKey && instanceKey)) return [3 /*break*/, 3];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBNEQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUt0RDtJQUlJLHFCQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBc0I7UUFBakcsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXlCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQUcsQ0FBQztJQUVuSCxpQ0FBVyxHQUFqQixVQUFrQixJQUE0QixFQUFFLEtBQTBCOzs7Ozs7NEJBQ25ELHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEVBQUE7O3dCQUFyRCxVQUFVLEdBQUcsU0FBd0M7d0JBRTNELElBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzRCQUM5QiwwQ0FBMEM7NEJBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQ0FDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzZCQUNuQzs0QkFDRCxzQkFBTyxJQUFJLEVBQUM7eUJBQ2Y7d0JBRUQsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUU7NEJBQ3hELElBQUksQ0FBQyxX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VztjQUh2QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7O3NCQUU0RSxNQUFNO3VCQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgVGJBdXRoRW52aXJvbm1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRoLWVudmlyb25tZW50JztcclxuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi9tb2RlbHMvb3BlcmF0aW9uLXJlc3VsdCc7XHJcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52OiBUYkF1dGhFbnZpcm9ubWVudCkge31cclxuXHJcbiAgICBhc3luYyBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNoZWNrQ29ubmVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NPTk5FQ1RJT05ET1dOJyk7XHJcbiAgICAgICAgICAgIC8vIG5vbiBzb25vIGxvZ2dhdG8gcXVpbmRpIHZhZG8gYWxsYSBsb2dpblxyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnVybC5pbmNsdWRlcygnL2xvZ2luJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUudXJsLmluY2x1ZGVzKHRoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2UgcmljZXZvIGp3dCBlIHN1YktleSBzaWduaWZpY2EgY2hlIGRldm8gZmFyZSB1bmEgXCJhdXRvbG9naW5cIlxyXG4gICAgICAgICAqIENyZW8gdW4gTG9naW5SZXF1ZXN0IGNvbiBpIHZhbG9yaSByaWNldnV0aSwgaW50ZWdybyBjb24gYXBwaWQgbGV0dG8gZGEgZW52aXJvbm1lbnQgZWQgZWZmZXR0dW8gdW5hIGxvZ2luIHNwZWNpZmljYVxyXG4gICAgICAgICAqIEluIGNhc28gcG9zaXRpdm8gdmFkbyBpbiBob21lcGFnZSBcIi9cIlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGp3dCA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ2p3dCcpID8gbmV4dC5xdWVyeVBhcmFtcy5qd3QgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHN1YktleSA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ3N1YktleScpID8gbmV4dC5xdWVyeVBhcmFtcy5zdWJLZXkgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlS2V5ID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnaW5zdGFuY2VLZXknKSA/IG5leHQucXVlcnlQYXJhbXMuaW5zdGFuY2VLZXkgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IG5zID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnbnMnKSA/IG5leHQucXVlcnlQYXJhbXMubnMgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdhcmdzJykgPyBuZXh0LnF1ZXJ5UGFyYW1zLmFyZ3MgOiBudWxsO1xyXG5cclxuICAgICAgICAvL3N0b3JlIG5lbCBsb2NhbC9zZXNzaW9ucyBzdG9yYWdlIGRlbGxlIGluZm8gbmVjZXNzYXJpZSBhbGxvIHNuYXBzaG90IFxyXG4gICAgICAgIC8vaW4gcXVlc3RvIGNhc28gbGEgbGlicmVyaWEgc3RhIFwidml2ZW5kb1wiIGRlbnRybyBtYWdvLCByaWNldmUgbGEgcmVkaXJlY3QgZGVsbG8gdXNlciBnYXRld2F5IGUgcG9wb2xhIHF1ZXN0ZSBpbmZvIFxyXG4gICAgICAgIGlmIChzdWJLZXkgJiYgaW5zdGFuY2VLZXkpXHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc3RvcmFnZVF1ZXJ5UGFyYW1zKHN1YktleSwgaW5zdGFuY2VLZXkpO1xyXG5cclxuICAgICAgICBpZiAoand0ICYmIHN1YktleSAmJiBpbnN0YW5jZUtleSkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCA9IG5ldyBMb2dpblJlcXVlc3QoKTtcclxuICAgICAgICAgICAgbG9naW5SZXF1ZXN0LnRva2VuID0gand0O1xyXG4gICAgICAgICAgICBsb2dpblJlcXVlc3Quc3Vic2NyaXB0aW9uS2V5ID0gc3ViS2V5O1xyXG4gICAgICAgICAgICBsb2dpblJlcXVlc3QuYXBwSWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFwcElkKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsb2dpblJlc3BvbnNlID0gKGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4obG9naW5SZXF1ZXN0KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVycm9yTWVzc2FnZSA9IGVyci5lcnJvciAmJiBlcnIuZXJyb3IuTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0pKSBhcyBMb2dpblJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFsb2dpblJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobG9naW5SZXNwb25zZS5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9xdWVzdGEgcGFydGUgw6ggZGEgcmVmYWN0b3JpenphcmUsICBwZXIgYXBlcnR1cmEgZG9jdW1lbnRpIGRhIGluZmluaXR5IHVyZ2VudGlzc2ltYVxyXG4gICAgICAgICAgICAgICAgLy9pbiBmdXR1cm8gY2kgc2Fyw6AgbCd1cmwgb3JpZ2luYWxlIGRlbGxhIHJpY2hpZXN0YVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbnMgPyAnZG9jdW1lbnQnIDogdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3VybF0sIHtcclxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlVXJsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IGp3dDogbnVsbCwgc3ViS2V5OiBudWxsLCBuczogbnMsIGFyZ3M6IGFyZ3MgfSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2UgYXJyaXZvIHF1YSB2dW9sIGRpcmUgY2hlIGhvIGdpw6AgdW4gdG9rZW4gc2FsdmF0byBlIG5vbiBzY2FkdXRvIHF1aW5kaSBjaGllZG8gY29uZmVybWEgZGVsbGEgdmFsaWRpdMOgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgYXV0aHRva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpIHx8ICcnO1xyXG4gICAgICAgIGlmIChhdXRodG9rZW4pIHtcclxuICAgICAgICAgICAgLy8gaG8gdW4gdG9rZW4sIG1hIG5lIHZlcmlmaWNvIGxhIHZhbGlkaXTDoFxyXG4gICAgICAgICAgICBjb25zdCByZXM6IE9wZXJhdGlvblJlc3VsdCA9IChhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmlzVmFsaWRUb2tlbihhdXRodG9rZW4pKSBhcyBPcGVyYXRpb25SZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnVybC5pbmNsdWRlcyh0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpKSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFNlcnZpY2UuZ2V0UmVkaXJlY3RVcmwoKV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbm9uIHNvbm8gbG9nZ2F0byBxdWluZGkgdmFkbyBhbGxhIGxvZ2luXHJcbiAgICAgICAgICAgIGlmICghc3RhdGUudXJsLmluY2x1ZGVzKHRoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCkpKSB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19