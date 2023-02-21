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
var OTPInfo = /** @class */ (function () {
    function OTPInfo() {
        this.AccountName = '';
        this.Password = '';
        this.Code = '';
    }
    return OTPInfo;
}());
export { OTPInfo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9sb2dpbi1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUE7UUFDRSxVQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXlDO1FBQ3JELFVBQUssR0FBRyxJQUFJLENBQUMsQ0FBQywrRUFBK0U7UUFDN0YsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUVoQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7QUFFRDtJQUFBO1FBQ0UsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFORCxJQU1DOztBQUNEO0lBQUE7UUFDRSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQUpELElBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTG9naW5SZXF1ZXN0IHtcclxuICB0b2tlbiA9ICcnOyAvLyBzZSBwcmVzZW50ZSwgc3RvIGZhY2VuZG8gdW5hIGF1dG9sb2dpblxyXG4gIGFwcElkID0gJ000JzsgLy8gaWRlbnRpZmljYXRpdm8gZGVsbCdhcHBsaWNhemlvbmUgY2hlIHN0YSBlZmZldHR1YW5kbyBsYSBsb2dpbiAoZGEgdGFiZWxsYXJlKVxyXG4gIGFjY291bnROYW1lID0gJyc7XHJcbiAgcGFzc3dvcmQgPSAnJztcclxuICBzdWJzY3JpcHRpb25LZXkhOiBzdHJpbmc7IC8vIGxvZ2luIHN1IHVuYSBzcGVjaWZpY2EgU3Vic2NyaXB0aW9uXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZEluZm8ge1xyXG4gIEFjY291bnROYW1lID0gJyc7XHJcbiAgUGFzc3dvcmQgPSAnJztcclxuICBOZXdQYXNzd29yZCA9ICcnO1xyXG4gIElnbm9yZU9sZFBhc3N3b3JkID0gZmFsc2U7XHJcbiAgSldUVG9rZW4gPSAnJztcclxufVxyXG5leHBvcnQgY2xhc3MgT1RQSW5mbyB7XHJcbiAgQWNjb3VudE5hbWUgPSAnJztcclxuICBQYXNzd29yZCA9ICcnO1xyXG4gIENvZGUgPSAnJztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDVUNhbGVuZGFySm9iXHJcblx0e1xyXG5cdFx0ICBqb2JpZDogbnVtYmVyO1xyXG5cdFx0ICBjYWxlbmRhcmlkOiBudW1iZXI7XHJcblx0XHQgIHN1YnNjcmlwdGlvbmtleTogc3RyaW5nO1xyXG5cdFx0ICBjdXN0b21lcjogc3RyaW5nO1xyXG5cdFx0ICBpbnN0YW5jZWtleTogc3RyaW5nO1xyXG5cdFx0ICBjdXJyZW50bWFwOiBzdHJpbmc7XHJcblx0XHQgIGRlc3RpbmF0aW9ubWFwOiBzdHJpbmc7XHJcblx0XHQgIHNjaGVkdWxlZHRpbWU6IERhdGU7XHJcblx0XHQgIGVzdGltYXRlZHVwZ3JhZGV0aW1lOiBudW1iZXI7XHJcblx0XHQgIHJlYWx1cGdyYWRldGltZTogbnVtYmVyO1xyXG5cdFx0ICBzdGF0dXM6IG51bWJlcjtcclxuXHRcdCAgbm90ZXM6IHN0cmluZztcclxuXHRcdCAgY3JlYXRpb25kYXRlOiBEYXRlO1xyXG5cdH1cclxuIl19