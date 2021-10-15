// enum as [Flags] to set multiple status in MP_Subscriptions and MP_Instances
// --------------------------------------------------------------------------------------------------------
export var EntityStatus;
(function (EntityStatus) {
    EntityStatus[EntityStatus["None"] = 0] = "None";
    // tslint:disable-next-line: no-bitwise
    EntityStatus[EntityStatus["DBUnderMaintenance"] = 1] = "DBUnderMaintenance";
    // tslint:disable-next-line: no-bitwise
    EntityStatus[EntityStatus["Disabled"] = 2] = "Disabled";
    // tslint:disable-next-line: no-bitwise
    EntityStatus[EntityStatus["PrivacyMode"] = 4] = "PrivacyMode";
    // tslint:disable-next-line: no-bitwise
    EntityStatus[EntityStatus["Canary"] = 8] = "Canary";
    // tslint:disable-next-line: no-bitwise
    EntityStatus[EntityStatus["UpdateScheduled"] = 16] = "UpdateScheduled"; // 16
})(EntityStatus || (EntityStatus = {}));
//[Flag] public enum EntityStatus //in provmodel
//	None = 0,
//	DBUnderMaintenance = 1,	// per propagare il valore di UnderMaintenance della SubDb sulla Subscription (quando operiamo dallo Store)
//	Disabled = 2,
//	PrivacyMode = 4,        // gestione NickName obbligatorio
//	Canary = 8,             //canary update in corso
//	UpdateScheduled = 32    //nel calendario è presente una data per questa sub
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3N1YnNjcmlwdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSw4RUFBOEU7QUFDOUUsMkdBQTJHO0FBQzNHLE1BQU0sQ0FBTixJQUFZLFlBWVg7QUFaRCxXQUFZLFlBQVk7SUFDckIsK0NBQVEsQ0FBQTtJQUNULHVDQUF1QztJQUN2QywyRUFBMkIsQ0FBQTtJQUMzQix1Q0FBdUM7SUFDdkMsdURBQWlCLENBQUE7SUFDakIsdUNBQXVDO0lBQ3ZDLDZEQUFvQixDQUFBO0lBQ3RCLHVDQUF1QztJQUNyQyxtREFBZSxDQUFBO0lBQ2YsdUNBQXVDO0lBQ3ZDLHNFQUF3QixDQUFBLENBQUMsS0FBSztBQUNoQyxDQUFDLEVBWlcsWUFBWSxLQUFaLFlBQVksUUFZdkI7QUFDRCxnREFBZ0Q7QUFDaEQsWUFBWTtBQUNaLHNJQUFzSTtBQUN0SSxnQkFBZ0I7QUFDaEIsNERBQTREO0FBQzVELG1EQUFtRDtBQUNuRCw4RUFBOEUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbiB7XHJcbiAgICBzdWJzY3JpcHRpb25rZXk6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIGluc3RhbmNla2V5OiBzdHJpbmc7XHJcbn1cclxuLy8gZW51bSBhcyBbRmxhZ3NdIHRvIHNldCBtdWx0aXBsZSBzdGF0dXMgaW4gTVBfU3Vic2NyaXB0aW9ucyBhbmQgTVBfSW5zdGFuY2VzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBlbnVtIEVudGl0eVN0YXR1cyB7XHJcbiAgIE5vbmUgPSAwLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZVxyXG4gIERCVW5kZXJNYWludGVuYW5jZSA9IDEgPDwgMCwgLy8gMVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZVxyXG4gIERpc2FibGVkID0gMSA8PCAxLCAvLyAyXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgUHJpdmFjeU1vZGUgPSAxIDw8IDIsIC8vIDRcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgQ2FuYXJ5ID0gMSA8PCAzLCAvLyA4XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgVXBkYXRlU2NoZWR1bGVkID0gMSA8PCA0IC8vIDE2XHJcbn1cclxuLy9bRmxhZ10gcHVibGljIGVudW0gRW50aXR5U3RhdHVzIC8vaW4gcHJvdm1vZGVsXHJcbi8vXHROb25lID0gMCxcclxuLy9cdERCVW5kZXJNYWludGVuYW5jZSA9IDEsXHQvLyBwZXIgcHJvcGFnYXJlIGlsIHZhbG9yZSBkaSBVbmRlck1haW50ZW5hbmNlIGRlbGxhIFN1YkRiIHN1bGxhIFN1YnNjcmlwdGlvbiAocXVhbmRvIG9wZXJpYW1vIGRhbGxvIFN0b3JlKVxyXG4vL1x0RGlzYWJsZWQgPSAyLFxyXG4vL1x0UHJpdmFjeU1vZGUgPSA0LCAgICAgICAgLy8gZ2VzdGlvbmUgTmlja05hbWUgb2JibGlnYXRvcmlvXHJcbi8vXHRDYW5hcnkgPSA4LCAgICAgICAgICAgICAvL2NhbmFyeSB1cGRhdGUgaW4gY29yc29cclxuLy9cdFVwZGF0ZVNjaGVkdWxlZCA9IDMyICAgIC8vbmVsIGNhbGVuZGFyaW8gw6ggcHJlc2VudGUgdW5hIGRhdGEgcGVyIHF1ZXN0YSBzdWJcclxuIl19