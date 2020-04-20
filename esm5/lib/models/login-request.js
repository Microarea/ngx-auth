var LoginRequest = /** @class */ (function () {
    function LoginRequest() {
        this.token = ''; // se presente, sto facendo una autologin
        this.appId = 'M4'; // identificativo dell'applicazione che sta effettuando la login (da tabellare)
        this.accountName = '';
        this.password = '';
    }
    return LoginRequest;
}());
export { LoginRequest };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9sb2dpbi1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUE7UUFDRSxVQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXlDO1FBQ3JELFVBQUssR0FBRyxJQUFJLENBQUMsQ0FBQywrRUFBK0U7UUFDN0YsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUVoQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7QUFFRDtJQUFBO1FBQ0UsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFORCxJQU1DIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExvZ2luUmVxdWVzdCB7XHJcbiAgdG9rZW4gPSAnJzsgLy8gc2UgcHJlc2VudGUsIHN0byBmYWNlbmRvIHVuYSBhdXRvbG9naW5cclxuICBhcHBJZCA9ICdNNCc7IC8vIGlkZW50aWZpY2F0aXZvIGRlbGwnYXBwbGljYXppb25lIGNoZSBzdGEgZWZmZXR0dWFuZG8gbGEgbG9naW4gKGRhIHRhYmVsbGFyZSlcclxuICBhY2NvdW50TmFtZSA9ICcnO1xyXG4gIHBhc3N3b3JkID0gJyc7XHJcbiAgc3Vic2NyaXB0aW9uS2V5ITogc3RyaW5nOyAvLyBsb2dpbiBzdSB1bmEgc3BlY2lmaWNhIFN1YnNjcmlwdGlvblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRJbmZvIHtcclxuICBBY2NvdW50TmFtZSA9ICcnO1xyXG4gIFBhc3N3b3JkID0gJyc7XHJcbiAgTmV3UGFzc3dvcmQgPSAnJztcclxuICBJZ25vcmVPbGRQYXNzd29yZCA9IGZhbHNlO1xyXG4gIEpXVFRva2VuID0gJyc7XHJcbn1cclxuIl19