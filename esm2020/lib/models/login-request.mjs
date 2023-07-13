export class LoginRequest {
    constructor() {
        this.token = ''; // se presente, sto facendo una autologin
        this.appId = 'M4'; // identificativo dell'applicazione che sta effettuando la login (da tabellare)
        this.accountName = '';
        this.password = '';
        this.processID = '';
        this.otPassword = '';
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
export class OTPInfo {
    constructor() {
        this.AccountName = '';
        this.Password = '';
        this.Code = '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9tb2RlbHMvbG9naW4tcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sWUFBWTtJQUF6QjtRQUNDLFVBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBeUM7UUFDckQsVUFBSyxHQUFHLElBQUksQ0FBQyxDQUFDLCtFQUErRTtRQUM3RixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWQsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztDQUFBO0FBRUQsTUFBTSxPQUFPLGtCQUFrQjtJQUEvQjtRQUNDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FBQTtBQUNELE1BQU0sT0FBTyxPQUFPO0lBQXBCO1FBQ0MsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFNBQUksR0FBRyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTG9naW5SZXF1ZXN0IHtcclxuXHR0b2tlbiA9ICcnOyAvLyBzZSBwcmVzZW50ZSwgc3RvIGZhY2VuZG8gdW5hIGF1dG9sb2dpblxyXG5cdGFwcElkID0gJ000JzsgLy8gaWRlbnRpZmljYXRpdm8gZGVsbCdhcHBsaWNhemlvbmUgY2hlIHN0YSBlZmZldHR1YW5kbyBsYSBsb2dpbiAoZGEgdGFiZWxsYXJlKVxyXG5cdGFjY291bnROYW1lID0gJyc7XHJcblx0cGFzc3dvcmQgPSAnJztcclxuXHRzdWJzY3JpcHRpb25LZXkhOiBzdHJpbmc7IC8vIGxvZ2luIHN1IHVuYSBzcGVjaWZpY2EgU3Vic2NyaXB0aW9uXHJcblx0cHJvY2Vzc0lEID0gJyc7XHJcblx0b3RQYXNzd29yZCA9ICcnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRJbmZvIHtcclxuXHRBY2NvdW50TmFtZSA9ICcnO1xyXG5cdFBhc3N3b3JkID0gJyc7XHJcblx0TmV3UGFzc3dvcmQgPSAnJztcclxuXHRJZ25vcmVPbGRQYXNzd29yZCA9IGZhbHNlO1xyXG5cdEpXVFRva2VuID0gJyc7XHJcbn1cclxuZXhwb3J0IGNsYXNzIE9UUEluZm8ge1xyXG5cdEFjY291bnROYW1lID0gJyc7XHJcblx0UGFzc3dvcmQgPSAnJztcclxuXHRDb2RlID0gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ1VDYWxlbmRhckpvYiB7XHJcblx0am9iaWQ6IG51bWJlcjtcclxuXHRjYWxlbmRhcmlkOiBudW1iZXI7XHJcblx0c3Vic2NyaXB0aW9ua2V5OiBzdHJpbmc7XHJcblx0Y3VzdG9tZXI6IHN0cmluZztcclxuXHRpbnN0YW5jZWtleTogc3RyaW5nO1xyXG5cdGN1cnJlbnRtYXA6IHN0cmluZztcclxuXHRkZXN0aW5hdGlvbm1hcDogc3RyaW5nO1xyXG5cdHNjaGVkdWxlZHRpbWU6IERhdGU7XHJcblx0ZXN0aW1hdGVkdXBncmFkZXRpbWU6IG51bWJlcjtcclxuXHRyZWFsdXBncmFkZXRpbWU6IG51bWJlcjtcclxuXHRzdGF0dXM6IG51bWJlcjtcclxuXHRub3Rlczogc3RyaW5nO1xyXG5cdGNyZWF0aW9uZGF0ZTogRGF0ZTtcclxufVxyXG4iXX0=