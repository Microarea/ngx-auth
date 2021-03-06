export class LoginRequest {
    constructor() {
        this.token = ''; // se presente, sto facendo una autologin
        this.appId = 'M4'; // identificativo dell'applicazione che sta effettuando la login (da tabellare)
        this.accountName = '';
        this.password = '';
    }
}
export class ChangePasswordInfo {
    constructor() {
        this.AccountName = '';
        this.Password = '';
        this.NewPassword = '';
        this.IgnoreOldPassword = false;
        this.JWTToken = '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9sb2dpbi1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxZQUFZO0lBQXpCO1FBQ0UsVUFBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF5QztRQUNyRCxVQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsK0VBQStFO1FBQzdGLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFFaEIsQ0FBQztDQUFBO0FBRUQsTUFBTSxPQUFPLGtCQUFrQjtJQUEvQjtRQUNFLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTG9naW5SZXF1ZXN0IHtcclxuICB0b2tlbiA9ICcnOyAvLyBzZSBwcmVzZW50ZSwgc3RvIGZhY2VuZG8gdW5hIGF1dG9sb2dpblxyXG4gIGFwcElkID0gJ000JzsgLy8gaWRlbnRpZmljYXRpdm8gZGVsbCdhcHBsaWNhemlvbmUgY2hlIHN0YSBlZmZldHR1YW5kbyBsYSBsb2dpbiAoZGEgdGFiZWxsYXJlKVxyXG4gIGFjY291bnROYW1lID0gJyc7XHJcbiAgcGFzc3dvcmQgPSAnJztcclxuICBzdWJzY3JpcHRpb25LZXkhOiBzdHJpbmc7IC8vIGxvZ2luIHN1IHVuYSBzcGVjaWZpY2EgU3Vic2NyaXB0aW9uXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZEluZm8ge1xyXG4gIEFjY291bnROYW1lID0gJyc7XHJcbiAgUGFzc3dvcmQgPSAnJztcclxuICBOZXdQYXNzd29yZCA9ICcnO1xyXG4gIElnbm9yZU9sZFBhc3N3b3JkID0gZmFsc2U7XHJcbiAgSldUVG9rZW4gPSAnJztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ1VDYWxlbmRhckpvYlxyXG5cdHtcclxuXHRcdCAgam9iaWQ6IG51bWJlcjtcclxuXHRcdCAgY2FsZW5kYXJpZDogbnVtYmVyO1xyXG5cdFx0ICBzdWJzY3JpcHRpb25rZXk6IHN0cmluZztcclxuXHRcdCAgY3VzdG9tZXI6IHN0cmluZztcclxuXHRcdCAgaW5zdGFuY2VrZXk6IHN0cmluZztcclxuXHRcdCAgY3VycmVudG1hcDogc3RyaW5nO1xyXG5cdFx0ICBkZXN0aW5hdGlvbm1hcDogc3RyaW5nO1xyXG5cdFx0ICBzY2hlZHVsZWR0aW1lOiBEYXRlO1xyXG5cdFx0ICBlc3RpbWF0ZWR1cGdyYWRldGltZTogbnVtYmVyO1xyXG5cdFx0ICByZWFsdXBncmFkZXRpbWU6IG51bWJlcjtcclxuXHRcdCAgc3RhdHVzOiBudW1iZXI7XHJcblx0XHQgIG5vdGVzOiBzdHJpbmc7XHJcblx0XHQgIGNyZWF0aW9uZGF0ZTogRGF0ZTtcclxuXHR9XHJcbiJdfQ==