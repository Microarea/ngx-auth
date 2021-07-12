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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2F1dGgvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3N1YnNjcmlwdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSw4RUFBOEU7QUFDOUUsMkdBQTJHO0FBQzNHLE1BQU0sQ0FBTixJQUFZLFlBWVg7QUFaRCxXQUFZLFlBQVk7SUFDckIsK0NBQVEsQ0FBQTtJQUNULHVDQUF1QztJQUN2QywyRUFBMkIsQ0FBQTtJQUMzQix1Q0FBdUM7SUFDdkMsdURBQWlCLENBQUE7SUFDakIsdUNBQXVDO0lBQ3ZDLDZEQUFvQixDQUFBO0lBQ3RCLHVDQUF1QztJQUNyQyxtREFBZSxDQUFBO0lBQ2YsdUNBQXVDO0lBQ3ZDLHNFQUF3QixDQUFBLENBQUMsS0FBSztBQUNoQyxDQUFDLEVBWlcsWUFBWSxLQUFaLFlBQVksUUFZdkI7QUFDRCxnREFBZ0Q7QUFDaEQsWUFBWTtBQUNaLHNJQUFzSTtBQUN0SSxnQkFBZ0I7QUFDaEIsNERBQTREO0FBQzVELG1EQUFtRDtBQUNuRCw4RUFBOEUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbiB7XHJcbiAgICBzdWJzY3JpcHRpb25rZXk6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxufVxyXG4vLyBlbnVtIGFzIFtGbGFnc10gdG8gc2V0IG11bHRpcGxlIHN0YXR1cyBpbiBNUF9TdWJzY3JpcHRpb25zIGFuZCBNUF9JbnN0YW5jZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGVudW0gRW50aXR5U3RhdHVzIHtcclxuICAgTm9uZSA9IDAsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgREJVbmRlck1haW50ZW5hbmNlID0gMSA8PCAwLCAvLyAxXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgRGlzYWJsZWQgPSAxIDw8IDEsIC8vIDJcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICBQcml2YWN5TW9kZSA9IDEgPDwgMiwgLy8gNFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICBDYW5hcnkgPSAxIDw8IDMsIC8vIDhcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICBVcGRhdGVTY2hlZHVsZWQgPSAxIDw8IDQgLy8gMTZcclxufVxyXG4vL1tGbGFnXSBwdWJsaWMgZW51bSBFbnRpdHlTdGF0dXMgLy9pbiBwcm92bW9kZWxcclxuLy9cdE5vbmUgPSAwLFxyXG4vL1x0REJVbmRlck1haW50ZW5hbmNlID0gMSxcdC8vIHBlciBwcm9wYWdhcmUgaWwgdmFsb3JlIGRpIFVuZGVyTWFpbnRlbmFuY2UgZGVsbGEgU3ViRGIgc3VsbGEgU3Vic2NyaXB0aW9uIChxdWFuZG8gb3BlcmlhbW8gZGFsbG8gU3RvcmUpXHJcbi8vXHREaXNhYmxlZCA9IDIsXHJcbi8vXHRQcml2YWN5TW9kZSA9IDQsICAgICAgICAvLyBnZXN0aW9uZSBOaWNrTmFtZSBvYmJsaWdhdG9yaW9cclxuLy9cdENhbmFyeSA9IDgsICAgICAgICAgICAgIC8vY2FuYXJ5IHVwZGF0ZSBpbiBjb3Jzb1xyXG4vL1x0VXBkYXRlU2NoZWR1bGVkID0gMzIgICAgLy9uZWwgY2FsZW5kYXJpbyDDqCBwcmVzZW50ZSB1bmEgZGF0YSBwZXIgcXVlc3RhIHN1YlxyXG4iXX0=