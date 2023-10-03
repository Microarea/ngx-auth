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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9tb2RlbHMvbG9naW4tcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sWUFBWTtJQUF6QjtRQUNFLFVBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBeUM7UUFDckQsVUFBSyxHQUFHLElBQUksQ0FBQyxDQUFDLCtFQUErRTtRQUM3RixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBRWhCLENBQUM7Q0FBQTtBQUVELE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUFDRSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFDaEIsQ0FBQztDQUFBO0FBQ0QsTUFBTSxPQUFPLE9BQU87SUFBcEI7UUFDRSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2dpblJlcXVlc3Qge1xuICB0b2tlbiA9ICcnOyAvLyBzZSBwcmVzZW50ZSwgc3RvIGZhY2VuZG8gdW5hIGF1dG9sb2dpblxuICBhcHBJZCA9ICdNNCc7IC8vIGlkZW50aWZpY2F0aXZvIGRlbGwnYXBwbGljYXppb25lIGNoZSBzdGEgZWZmZXR0dWFuZG8gbGEgbG9naW4gKGRhIHRhYmVsbGFyZSlcbiAgYWNjb3VudE5hbWUgPSAnJztcbiAgcGFzc3dvcmQgPSAnJztcbiAgc3Vic2NyaXB0aW9uS2V5ITogc3RyaW5nOyAvLyBsb2dpbiBzdSB1bmEgc3BlY2lmaWNhIFN1YnNjcmlwdGlvblxufVxuXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRJbmZvIHtcbiAgQWNjb3VudE5hbWUgPSAnJztcbiAgUGFzc3dvcmQgPSAnJztcbiAgTmV3UGFzc3dvcmQgPSAnJztcbiAgSWdub3JlT2xkUGFzc3dvcmQgPSBmYWxzZTtcbiAgSldUVG9rZW4gPSAnJztcbn1cbmV4cG9ydCBjbGFzcyBPVFBJbmZvIHtcbiAgQWNjb3VudE5hbWUgPSAnJztcbiAgUGFzc3dvcmQgPSAnJztcbiAgQ29kZSA9ICcnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENVQ2FsZW5kYXJKb2Jcblx0e1xuXHRcdCAgam9iaWQ6IG51bWJlcjtcblx0XHQgIGNhbGVuZGFyaWQ6IG51bWJlcjtcblx0XHQgIHN1YnNjcmlwdGlvbmtleTogc3RyaW5nO1xuXHRcdCAgY3VzdG9tZXI6IHN0cmluZztcblx0XHQgIGluc3RhbmNla2V5OiBzdHJpbmc7XG5cdFx0ICBjdXJyZW50bWFwOiBzdHJpbmc7XG5cdFx0ICBkZXN0aW5hdGlvbm1hcDogc3RyaW5nO1xuXHRcdCAgc2NoZWR1bGVkdGltZTogRGF0ZTtcblx0XHQgIGVzdGltYXRlZHVwZ3JhZGV0aW1lOiBudW1iZXI7XG5cdFx0ICByZWFsdXBncmFkZXRpbWU6IG51bWJlcjtcblx0XHQgIHN0YXR1czogbnVtYmVyO1xuXHRcdCAgbm90ZXM6IHN0cmluZztcblx0XHQgIGNyZWF0aW9uZGF0ZTogRGF0ZTtcblx0fVxuIl19