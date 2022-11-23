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
export class OTPInfo {
    constructor() {
        this.AccountName = '';
        this.Password = '';
        this.Code = '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9tb2RlbHMvbG9naW4tcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sWUFBWTtJQUF6QjtRQUNFLFVBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBeUM7UUFDckQsVUFBSyxHQUFHLElBQUksQ0FBQyxDQUFDLCtFQUErRTtRQUM3RixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBRWhCLENBQUM7Q0FBQTtBQUVELE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUFDRSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFDaEIsQ0FBQztDQUFBO0FBQ0QsTUFBTSxPQUFPLE9BQU87SUFBcEI7UUFDRSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2dpblJlcXVlc3Qge1xyXG4gIHRva2VuID0gJyc7IC8vIHNlIHByZXNlbnRlLCBzdG8gZmFjZW5kbyB1bmEgYXV0b2xvZ2luXHJcbiAgYXBwSWQgPSAnTTQnOyAvLyBpZGVudGlmaWNhdGl2byBkZWxsJ2FwcGxpY2F6aW9uZSBjaGUgc3RhIGVmZmV0dHVhbmRvIGxhIGxvZ2luIChkYSB0YWJlbGxhcmUpXHJcbiAgYWNjb3VudE5hbWUgPSAnJztcclxuICBwYXNzd29yZCA9ICcnO1xyXG4gIHN1YnNjcmlwdGlvbktleSE6IHN0cmluZzsgLy8gbG9naW4gc3UgdW5hIHNwZWNpZmljYSBTdWJzY3JpcHRpb25cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkSW5mbyB7XHJcbiAgQWNjb3VudE5hbWUgPSAnJztcclxuICBQYXNzd29yZCA9ICcnO1xyXG4gIE5ld1Bhc3N3b3JkID0gJyc7XHJcbiAgSWdub3JlT2xkUGFzc3dvcmQgPSBmYWxzZTtcclxuICBKV1RUb2tlbiA9ICcnO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBPVFBJbmZvIHtcclxuICBBY2NvdW50TmFtZSA9ICcnO1xyXG4gIFBhc3N3b3JkID0gJyc7XHJcbiAgQ29kZSA9ICcnO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENVQ2FsZW5kYXJKb2JcclxuXHR7XHJcblx0XHQgIGpvYmlkOiBudW1iZXI7XHJcblx0XHQgIGNhbGVuZGFyaWQ6IG51bWJlcjtcclxuXHRcdCAgc3Vic2NyaXB0aW9ua2V5OiBzdHJpbmc7XHJcblx0XHQgIGN1c3RvbWVyOiBzdHJpbmc7XHJcblx0XHQgIGluc3RhbmNla2V5OiBzdHJpbmc7XHJcblx0XHQgIGN1cnJlbnRtYXA6IHN0cmluZztcclxuXHRcdCAgZGVzdGluYXRpb25tYXA6IHN0cmluZztcclxuXHRcdCAgc2NoZWR1bGVkdGltZTogRGF0ZTtcclxuXHRcdCAgZXN0aW1hdGVkdXBncmFkZXRpbWU6IG51bWJlcjtcclxuXHRcdCAgcmVhbHVwZ3JhZGV0aW1lOiBudW1iZXI7XHJcblx0XHQgIHN0YXR1czogbnVtYmVyO1xyXG5cdFx0ICBub3Rlczogc3RyaW5nO1xyXG5cdFx0ICBjcmVhdGlvbmRhdGU6IERhdGU7XHJcblx0fVxyXG4iXX0=