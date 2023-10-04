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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9tb2RlbHMvbG9naW4tcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sWUFBWTtJQUF6QjtRQUNDLFVBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyw4RUFBOEU7UUFDMUYsVUFBSyxHQUFHLElBQUksQ0FBQyxDQUFDLGdFQUFnRTtRQUM5RSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWQsY0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLDBEQUEwRDtRQUMxRSxlQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtJQUN4QixDQUFDO0NBQUE7QUFFRCxNQUFNLE9BQU8sa0JBQWtCO0lBQS9CO1FBQ0MsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExvZ2luUmVxdWVzdCB7XG5cdHRva2VuID0gJyc7IC8vIHNlIHByZXNlbnRlLCBzdG8gZmFjZW5kbyB1bmEgbG9naW4gY29uIHRva2VuLCBub24gY2kgc2Fyw6EgaWwgY2hlY2sgcGFzc3dvcmRcblx0YXBwSWQgPSAnTTQnOyAvLyBpZGVudGlmaWNhdGl2byBkZWxsJ2FwcGxpY2F6aW9uZSBjaGUgc3RhIGVmZmV0dHVhbmRvIGxhIGxvZ2luXG5cdGFjY291bnROYW1lID0gJyc7XG5cdHBhc3N3b3JkID0gJyc7XG5cdHN1YnNjcmlwdGlvbktleSE6IHN0cmluZzsgLy8gbG9naW4gc3UgdW5hIHNwZWNpZmljYSBTdWJzY3JpcHRpb24sIGEgc2Vjb25kYSBkZWxsJ2FwcGlkIHBvdHJlYmJlIG5vbiBlc3NlcmUgcHJlc2VudGVcblx0cHJvY2Vzc0lEID0gJyc7IC8vIGNvZGljZSBpZGVudGlmaWNhdGl2byBkZWxsbyBzcGVjaWZpY28gcHJvY2Vzc28gZGkgbG9naW5cblx0b3RQYXNzd29yZCA9ICcnOyAvLyBvdHBcbn1cblxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkSW5mbyB7XG5cdEFjY291bnROYW1lID0gJyc7XG5cdFBhc3N3b3JkID0gJyc7XG5cdE5ld1Bhc3N3b3JkID0gJyc7XG5cdElnbm9yZU9sZFBhc3N3b3JkID0gZmFsc2U7XG5cdEpXVFRva2VuID0gJyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ1VDYWxlbmRhckpvYiB7XG5cdGpvYmlkOiBudW1iZXI7XG5cdGNhbGVuZGFyaWQ6IG51bWJlcjtcblx0c3Vic2NyaXB0aW9ua2V5OiBzdHJpbmc7XG5cdGN1c3RvbWVyOiBzdHJpbmc7XG5cdGluc3RhbmNla2V5OiBzdHJpbmc7XG5cdGN1cnJlbnRtYXA6IHN0cmluZztcblx0ZGVzdGluYXRpb25tYXA6IHN0cmluZztcblx0c2NoZWR1bGVkdGltZTogRGF0ZTtcblx0ZXN0aW1hdGVkdXBncmFkZXRpbWU6IG51bWJlcjtcblx0cmVhbHVwZ3JhZGV0aW1lOiBudW1iZXI7XG5cdHN0YXR1czogbnVtYmVyO1xuXHRub3Rlczogc3RyaW5nO1xuXHRjcmVhdGlvbmRhdGU6IERhdGU7XG59XG4iXX0=