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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvYXV0aC9zcmMvbGliL21vZGVscy9zdWJzY3JpcHRpb24ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsOEVBQThFO0FBQzlFLDJHQUEyRztBQUMzRyxNQUFNLENBQU4sSUFBWSxZQVlYO0FBWkQsV0FBWSxZQUFZO0lBQ3JCLCtDQUFRLENBQUE7SUFDVCx1Q0FBdUM7SUFDdkMsMkVBQTJCLENBQUE7SUFDM0IsdUNBQXVDO0lBQ3ZDLHVEQUFpQixDQUFBO0lBQ2pCLHVDQUF1QztJQUN2Qyw2REFBb0IsQ0FBQTtJQUN0Qix1Q0FBdUM7SUFDckMsbURBQWUsQ0FBQTtJQUNmLHVDQUF1QztJQUN2QyxzRUFBd0IsQ0FBQSxDQUFDLEtBQUs7QUFDaEMsQ0FBQyxFQVpXLFlBQVksS0FBWixZQUFZLFFBWXZCO0FBQ0QsZ0RBQWdEO0FBQ2hELFlBQVk7QUFDWixzSUFBc0k7QUFDdEksZ0JBQWdCO0FBQ2hCLDREQUE0RDtBQUM1RCxtREFBbUQ7QUFDbkQsOEVBQThFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBTdWJzY3JpcHRpb24ge1xyXG4gICAgc3Vic2NyaXB0aW9ua2V5OiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBpbnN0YW5jZWtleTogc3RyaW5nO1xyXG59XHJcbi8vIGVudW0gYXMgW0ZsYWdzXSB0byBzZXQgbXVsdGlwbGUgc3RhdHVzIGluIE1QX1N1YnNjcmlwdGlvbnMgYW5kIE1QX0luc3RhbmNlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZW51bSBFbnRpdHlTdGF0dXMge1xyXG4gICBOb25lID0gMCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICBEQlVuZGVyTWFpbnRlbmFuY2UgPSAxIDw8IDAsIC8vIDFcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICBEaXNhYmxlZCA9IDEgPDwgMSwgLy8gMlxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZVxyXG4gIFByaXZhY3lNb2RlID0gMSA8PCAyLCAvLyA0XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZVxyXG4gIENhbmFyeSA9IDEgPDwgMywgLy8gOFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZVxyXG4gIFVwZGF0ZVNjaGVkdWxlZCA9IDEgPDwgNCAvLyAxNlxyXG59XHJcbi8vW0ZsYWddIHB1YmxpYyBlbnVtIEVudGl0eVN0YXR1cyAvL2luIHByb3Ztb2RlbFxyXG4vL1x0Tm9uZSA9IDAsXHJcbi8vXHREQlVuZGVyTWFpbnRlbmFuY2UgPSAxLFx0Ly8gcGVyIHByb3BhZ2FyZSBpbCB2YWxvcmUgZGkgVW5kZXJNYWludGVuYW5jZSBkZWxsYSBTdWJEYiBzdWxsYSBTdWJzY3JpcHRpb24gKHF1YW5kbyBvcGVyaWFtbyBkYWxsbyBTdG9yZSlcclxuLy9cdERpc2FibGVkID0gMixcclxuLy9cdFByaXZhY3lNb2RlID0gNCwgICAgICAgIC8vIGdlc3Rpb25lIE5pY2tOYW1lIG9iYmxpZ2F0b3Jpb1xyXG4vL1x0Q2FuYXJ5ID0gOCwgICAgICAgICAgICAgLy9jYW5hcnkgdXBkYXRlIGluIGNvcnNvXHJcbi8vXHRVcGRhdGVTY2hlZHVsZWQgPSAzMiAgICAvL25lbCBjYWxlbmRhcmlvIMOoIHByZXNlbnRlIHVuYSBkYXRhIHBlciBxdWVzdGEgc3ViXHJcbiJdfQ==