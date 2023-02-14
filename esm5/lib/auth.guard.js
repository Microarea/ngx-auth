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
                            console.log("CONNECTIONDOWN on: " + this.authService.getBaseUrl());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBNEQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUt0RDtJQUlJLHFCQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBeUIsR0FBc0I7UUFBakcsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXlCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQUcsQ0FBQztJQUVuSCxpQ0FBVyxHQUFqQixVQUFrQixJQUE0QixFQUFFLEtBQTBCOzs7Ozs7NEJBQ25ELHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEVBQUE7O3dCQUFyRCxVQUFVLEdBQUcsU0FBd0M7d0JBRTNELElBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBc0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUksQ0FBQyxDQUFDOzRCQUNuRSwwQ0FBMEM7NEJBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQ0FDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzZCQUNuQzs0QkFDRCxzQkFBTyxJQUFJLEVBQUM7eUJBQ2Y7d0JBRUQsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFB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OUZELElBOEZDO1NBM0ZZLFdBQVc7a0RBQVgsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7O3NCQUU0RSxNQUFNO3VCQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXF1ZXN0JztcclxuaW1wb3J0IHsgVGJBdXRoRW52aXJvbm1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRoLWVudmlyb25tZW50JztcclxuaW1wb3J0IHsgT3BlcmF0aW9uUmVzdWx0IH0gZnJvbSAnLi9tb2RlbHMvb3BlcmF0aW9uLXJlc3VsdCc7XHJcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9sb2dpbi1yZXNwb25zZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYkF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IFRiQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52OiBUYkF1dGhFbnZpcm9ubWVudCkge31cclxuXHJcbiAgICBhc3luYyBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNoZWNrQ29ubmVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYENPTk5FQ1RJT05ET1dOIG9uOiAke3RoaXMuYXV0aFNlcnZpY2UuZ2V0QmFzZVVybCgpfWApO1xyXG4gICAgICAgICAgICAvLyBub24gc29ubyBsb2dnYXRvIHF1aW5kaSB2YWRvIGFsbGEgbG9naW5cclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS51cmwuaW5jbHVkZXMoJy9sb2dpbicpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLnVybC5pbmNsdWRlcyh0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlIHJpY2V2byBqd3QgZSBzdWJLZXkgc2lnbmlmaWNhIGNoZSBkZXZvIGZhcmUgdW5hIFwiYXV0b2xvZ2luXCJcclxuICAgICAgICAgKiBDcmVvIHVuIExvZ2luUmVxdWVzdCBjb24gaSB2YWxvcmkgcmljZXZ1dGksIGludGVncm8gY29uIGFwcGlkIGxldHRvIGRhIGVudmlyb25tZW50IGVkIGVmZmV0dHVvIHVuYSBsb2dpbiBzcGVjaWZpY2FcclxuICAgICAgICAgKiBJbiBjYXNvIHBvc2l0aXZvIHZhZG8gaW4gaG9tZXBhZ2UgXCIvXCJcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBqd3QgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdqd3QnKSA/IG5leHQucXVlcnlQYXJhbXMuand0IDogbnVsbDtcclxuICAgICAgICBjb25zdCBzdWJLZXkgPSBuZXh0LnF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KCdzdWJLZXknKSA/IG5leHQucXVlcnlQYXJhbXMuc3ViS2V5IDogbnVsbDtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ2luc3RhbmNlS2V5JykgPyBuZXh0LnF1ZXJ5UGFyYW1zLmluc3RhbmNlS2V5IDogbnVsbDtcclxuICAgICAgICBjb25zdCBucyA9IG5leHQucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoJ25zJykgPyBuZXh0LnF1ZXJ5UGFyYW1zLm5zIDogbnVsbDtcclxuICAgICAgICBjb25zdCBhcmdzID0gbmV4dC5xdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnYXJncycpID8gbmV4dC5xdWVyeVBhcmFtcy5hcmdzIDogbnVsbDtcclxuXHJcbiAgICAgICAgLy9zdG9yZSBuZWwgbG9jYWwvc2Vzc2lvbnMgc3RvcmFnZSBkZWxsZSBpbmZvIG5lY2Vzc2FyaWUgYWxsbyBzbmFwc2hvdFxyXG4gICAgICAgIC8vaW4gcXVlc3RvIGNhc28gbGEgbGlicmVyaWEgc3RhIFwidml2ZW5kb1wiIGRlbnRybyBtYWdvLCByaWNldmUgbGEgcmVkaXJlY3QgZGVsbG8gdXNlciBnYXRld2F5IGUgcG9wb2xhIHF1ZXN0ZSBpbmZvXHJcbiAgICAgICAgaWYgKHN1YktleSAmJiBpbnN0YW5jZUtleSlcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zdG9yYWdlUXVlcnlQYXJhbXMoc3ViS2V5LCBpbnN0YW5jZUtleSk7XHJcblxyXG4gICAgICAgIGlmIChqd3QgJiYgc3ViS2V5ICYmIGluc3RhbmNlS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0ID0gbmV3IExvZ2luUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBsb2dpblJlcXVlc3QudG9rZW4gPSBqd3Q7XHJcbiAgICAgICAgICAgIGxvZ2luUmVxdWVzdC5zdWJzY3JpcHRpb25LZXkgPSBzdWJLZXk7XHJcbiAgICAgICAgICAgIGxvZ2luUmVxdWVzdC5hcHBJZCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXBwSWQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVzcG9uc2UgPSAoYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbihsb2dpblJlcXVlc3QpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZXJyb3JNZXNzYWdlID0gZXJyLmVycm9yICYmIGVyci5lcnJvci5NZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSkpIGFzIExvZ2luUmVzcG9uc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvZ2luUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsb2dpblJlc3BvbnNlLlJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAvL3F1ZXN0YSBwYXJ0ZSDDqCBkYSByZWZhY3Rvcml6emFyZSwgIHBlciBhcGVydHVyYSBkb2N1bWVudGkgZGEgaW5maW5pdHkgdXJnZW50aXNzaW1hXHJcbiAgICAgICAgICAgICAgICAvL2luIGZ1dHVybyBjaSBzYXLDoCBsJ3VybCBvcmlnaW5hbGUgZGVsbGEgcmljaGllc3RhXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBucyA/ICdkb2N1bWVudCcgOiB0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdXJsXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VVcmw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgand0OiBudWxsLCBzdWJLZXk6IG51bGwsIG5zOiBucywgYXJnczogYXJncyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldFJlZGlyZWN0VXJsKCldKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZSBhcnJpdm8gcXVhIHZ1b2wgZGlyZSBjaGUgaG8gZ2nDoCB1biB0b2tlbiBzYWx2YXRvIGUgbm9uIHNjYWR1dG8gcXVpbmRpIGNoaWVkbyBjb25mZXJtYSBkZWxsYSB2YWxpZGl0w6BcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBhdXRodG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCkgfHwgJyc7XHJcbiAgICAgICAgaWYgKGF1dGh0b2tlbikge1xyXG4gICAgICAgICAgICAvLyBobyB1biB0b2tlbiwgbWEgbmUgdmVyaWZpY28gbGEgdmFsaWRpdMOgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlczogT3BlcmF0aW9uUmVzdWx0ID0gKGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuaXNWYWxpZFRva2VuKGF1dGh0b2tlbikpIGFzIE9wZXJhdGlvblJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMuUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudXJsLmluY2x1ZGVzKHRoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5QYWdlVXJsKCkpKSB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoU2VydmljZS5nZXRSZWRpcmVjdFVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBub24gc29ubyBsb2dnYXRvIHF1aW5kaSB2YWRvIGFsbGEgbG9naW5cclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS51cmwuaW5jbHVkZXModGhpcy5hdXRoU2VydmljZS5nZXRMb2dpblBhZ2VVcmwoKSkpIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luUGFnZVVybCgpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=