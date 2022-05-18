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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9sb2dpbi1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxZQUFZO0lBQXpCO1FBQ0UsVUFBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF5QztRQUNyRCxVQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsK0VBQStFO1FBQzdGLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFFaEIsQ0FBQztDQUFBO0FBRUQsTUFBTSxPQUFPLGtCQUFrQjtJQUEvQjtRQUNFLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBQUE7QUFDRCxNQUFNLE9BQU8sT0FBTztJQUFwQjtRQUNFLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxTQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExvZ2luUmVxdWVzdCB7XHJcbiAgdG9rZW4gPSAnJzsgLy8gc2UgcHJlc2VudGUsIHN0byBmYWNlbmRvIHVuYSBhdXRvbG9naW5cclxuICBhcHBJZCA9ICdNNCc7IC8vIGlkZW50aWZpY2F0aXZvIGRlbGwnYXBwbGljYXppb25lIGNoZSBzdGEgZWZmZXR0dWFuZG8gbGEgbG9naW4gKGRhIHRhYmVsbGFyZSlcclxuICBhY2NvdW50TmFtZSA9ICcnO1xyXG4gIHBhc3N3b3JkID0gJyc7XHJcbiAgc3Vic2NyaXB0aW9uS2V5ITogc3RyaW5nOyAvLyBsb2dpbiBzdSB1bmEgc3BlY2lmaWNhIFN1YnNjcmlwdGlvblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRJbmZvIHtcclxuICBBY2NvdW50TmFtZSA9ICcnO1xyXG4gIFBhc3N3b3JkID0gJyc7XHJcbiAgTmV3UGFzc3dvcmQgPSAnJztcclxuICBJZ25vcmVPbGRQYXNzd29yZCA9IGZhbHNlO1xyXG4gIEpXVFRva2VuID0gJyc7XHJcbn1cclxuZXhwb3J0IGNsYXNzIE9UUEluZm8ge1xyXG4gIEFjY291bnROYW1lID0gJyc7XHJcbiAgUGFzc3dvcmQgPSAnJztcclxuICBDb2RlID0gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ1VDYWxlbmRhckpvYlxyXG5cdHtcclxuXHRcdCAgam9iaWQ6IG51bWJlcjtcclxuXHRcdCAgY2FsZW5kYXJpZDogbnVtYmVyO1xyXG5cdFx0ICBzdWJzY3JpcHRpb25rZXk6IHN0cmluZztcclxuXHRcdCAgY3VzdG9tZXI6IHN0cmluZztcclxuXHRcdCAgaW5zdGFuY2VrZXk6IHN0cmluZztcclxuXHRcdCAgY3VycmVudG1hcDogc3RyaW5nO1xyXG5cdFx0ICBkZXN0aW5hdGlvbm1hcDogc3RyaW5nO1xyXG5cdFx0ICBzY2hlZHVsZWR0aW1lOiBEYXRlO1xyXG5cdFx0ICBlc3RpbWF0ZWR1cGdyYWRldGltZTogbnVtYmVyO1xyXG5cdFx0ICByZWFsdXBncmFkZXRpbWU6IG51bWJlcjtcclxuXHRcdCAgc3RhdHVzOiBudW1iZXI7XHJcblx0XHQgIG5vdGVzOiBzdHJpbmc7XHJcblx0XHQgIGNyZWF0aW9uZGF0ZTogRGF0ZTtcclxuXHR9XHJcbiJdfQ==