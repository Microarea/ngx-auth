export class LoginRequest {
    constructor() {
        this.token = ''; // se presente, sto facendo una login con token, non ci sará il check password
        this.appId = 'M4'; // identificativo dell'applicazione che sta effettuando la login
        this.accountName = '';
        this.password = '';
        this.processID = ''; // codice identificativo dello specifico processo di login
        this.otPassword = ''; // otp
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9tb2RlbHMvbG9naW4tcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sWUFBWTtJQUF6QjtRQUNDLFVBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyw4RUFBOEU7UUFDMUYsVUFBSyxHQUFHLElBQUksQ0FBQyxDQUFDLGdFQUFnRTtRQUM5RSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWQsY0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLDBEQUEwRDtRQUMxRSxlQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtJQUN4QixDQUFDO0NBQUE7QUFFRCxNQUFNLE9BQU8sa0JBQWtCO0lBQS9CO1FBQ0MsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExvZ2luUmVxdWVzdCB7XHJcblx0dG9rZW4gPSAnJzsgLy8gc2UgcHJlc2VudGUsIHN0byBmYWNlbmRvIHVuYSBsb2dpbiBjb24gdG9rZW4sIG5vbiBjaSBzYXLDoSBpbCBjaGVjayBwYXNzd29yZFxyXG5cdGFwcElkID0gJ000JzsgLy8gaWRlbnRpZmljYXRpdm8gZGVsbCdhcHBsaWNhemlvbmUgY2hlIHN0YSBlZmZldHR1YW5kbyBsYSBsb2dpblxyXG5cdGFjY291bnROYW1lID0gJyc7XHJcblx0cGFzc3dvcmQgPSAnJztcclxuXHRzdWJzY3JpcHRpb25LZXkhOiBzdHJpbmc7IC8vIGxvZ2luIHN1IHVuYSBzcGVjaWZpY2EgU3Vic2NyaXB0aW9uLCBhIHNlY29uZGEgZGVsbCdhcHBpZCBwb3RyZWJiZSBub24gZXNzZXJlIHByZXNlbnRlXHJcblx0cHJvY2Vzc0lEID0gJyc7IC8vIGNvZGljZSBpZGVudGlmaWNhdGl2byBkZWxsbyBzcGVjaWZpY28gcHJvY2Vzc28gZGkgbG9naW5cclxuXHRvdFBhc3N3b3JkID0gJyc7IC8vIG90cFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRJbmZvIHtcclxuXHRBY2NvdW50TmFtZSA9ICcnO1xyXG5cdFBhc3N3b3JkID0gJyc7XHJcblx0TmV3UGFzc3dvcmQgPSAnJztcclxuXHRJZ25vcmVPbGRQYXNzd29yZCA9IGZhbHNlO1xyXG5cdEpXVFRva2VuID0gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ1VDYWxlbmRhckpvYiB7XHJcblx0am9iaWQ6IG51bWJlcjtcclxuXHRjYWxlbmRhcmlkOiBudW1iZXI7XHJcblx0c3Vic2NyaXB0aW9ua2V5OiBzdHJpbmc7XHJcblx0Y3VzdG9tZXI6IHN0cmluZztcclxuXHRpbnN0YW5jZWtleTogc3RyaW5nO1xyXG5cdGN1cnJlbnRtYXA6IHN0cmluZztcclxuXHRkZXN0aW5hdGlvbm1hcDogc3RyaW5nO1xyXG5cdHNjaGVkdWxlZHRpbWU6IERhdGU7XHJcblx0ZXN0aW1hdGVkdXBncmFkZXRpbWU6IG51bWJlcjtcclxuXHRyZWFsdXBncmFkZXRpbWU6IG51bWJlcjtcclxuXHRzdGF0dXM6IG51bWJlcjtcclxuXHRub3Rlczogc3RyaW5nO1xyXG5cdGNyZWF0aW9uZGF0ZTogRGF0ZTtcclxufVxyXG4iXX0=