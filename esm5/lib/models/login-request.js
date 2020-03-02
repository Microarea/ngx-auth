/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/login-request.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginRequest = /** @class */ (function () {
    function LoginRequest() {
        this.token = ''; // se presente, sto facendo una autologin
        // se presente, sto facendo una autologin
        this.appId = 'M4'; // identificativo dell'applicazione che sta effettuando la login (da tabellare)
        // identificativo dell'applicazione che sta effettuando la login (da tabellare)
        this.accountName = '';
        this.password = '';
    }
    return LoginRequest;
}());
export { LoginRequest };
if (false) {
    /** @type {?} */
    LoginRequest.prototype.token;
    /** @type {?} */
    LoginRequest.prototype.appId;
    /** @type {?} */
    LoginRequest.prototype.accountName;
    /** @type {?} */
    LoginRequest.prototype.password;
    /** @type {?} */
    LoginRequest.prototype.subscriptionKey;
}
var ChangePasswordInfo = /** @class */ (function () {
    function ChangePasswordInfo() {
        this.AccountName = '';
        this.Password = '';
        this.NewPassword = '';
        this.IgnoreOldPassword = false;
        this.JWTToken = '';
    }
    return ChangePasswordInfo;
}());
export { ChangePasswordInfo };
if (false) {
    /** @type {?} */
    ChangePasswordInfo.prototype.AccountName;
    /** @type {?} */
    ChangePasswordInfo.prototype.Password;
    /** @type {?} */
    ChangePasswordInfo.prototype.NewPassword;
    /** @type {?} */
    ChangePasswordInfo.prototype.IgnoreOldPassword;
    /** @type {?} */
    ChangePasswordInfo.prototype.JWTToken;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9sb2dpbi1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7SUFBQTtRQUNFLFVBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBeUM7O1FBQ3JELFVBQUssR0FBRyxJQUFJLENBQUMsQ0FBQywrRUFBK0U7O1FBQzdGLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFFaEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyw2QkFBVzs7SUFDWCw2QkFBYTs7SUFDYixtQ0FBaUI7O0lBQ2pCLGdDQUFjOztJQUNkLHVDQUF5Qjs7QUFHM0I7SUFBQTtRQUNFLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLHlDQUFpQjs7SUFDakIsc0NBQWM7O0lBQ2QseUNBQWlCOztJQUNqQiwrQ0FBMEI7O0lBQzFCLHNDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExvZ2luUmVxdWVzdCB7XHJcbiAgdG9rZW4gPSAnJzsgLy8gc2UgcHJlc2VudGUsIHN0byBmYWNlbmRvIHVuYSBhdXRvbG9naW5cclxuICBhcHBJZCA9ICdNNCc7IC8vIGlkZW50aWZpY2F0aXZvIGRlbGwnYXBwbGljYXppb25lIGNoZSBzdGEgZWZmZXR0dWFuZG8gbGEgbG9naW4gKGRhIHRhYmVsbGFyZSlcclxuICBhY2NvdW50TmFtZSA9ICcnO1xyXG4gIHBhc3N3b3JkID0gJyc7XHJcbiAgc3Vic2NyaXB0aW9uS2V5ITogc3RyaW5nOyAvLyBsb2dpbiBzdSB1bmEgc3BlY2lmaWNhIFN1YnNjcmlwdGlvblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRJbmZvIHtcclxuICBBY2NvdW50TmFtZSA9ICcnO1xyXG4gIFBhc3N3b3JkID0gJyc7XHJcbiAgTmV3UGFzc3dvcmQgPSAnJztcclxuICBJZ25vcmVPbGRQYXNzd29yZCA9IGZhbHNlO1xyXG4gIEpXVFRva2VuID0gJyc7XHJcbn1cclxuIl19