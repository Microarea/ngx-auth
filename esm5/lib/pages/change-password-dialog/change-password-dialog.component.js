/**
 * @fileoverview added by tsickle
 * Generated from: lib/pages/change-password-dialog/change-password-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
var ChangePasswordDialogComponent = /** @class */ (function () {
    function ChangePasswordDialogComponent(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
        this.error = '';
        this.title = data.Title;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.placeHolder2 = data.PlaceHolder2;
        this.newpwd = this.newpwd2 = '';
    }
    /**
     * @return {?}
     */
    ChangePasswordDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ChangePasswordDialogComponent.prototype.confirm = /**
     * @return {?}
     */
    function () {
        this.error = '';
        if (this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined) {
            this.data.NewPwd = this.newpwd;
            this.mdDialogRef.close(this.data);
        }
        else {
            this.error = 'Passwords must be equal';
        }
    };
    ChangePasswordDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-change-password-dialog',
                    template: "<div class=\"app-dialog\">\r\n    <h2>{{ title }}</h2>\r\n    <label>{{ message }}</label>\r\n\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder\" adminAutoFocus value=\"\" [(ngModel)]=\"newpwd\" type=\"password\" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder2\" adminAutoFocus value=\"\" [(ngModel)]=\"newpwd2\" type=\"password\" />\r\n    </mat-form-field>\r\n    <div class=\"login-error\" *ngIf=\"error\">\r\n        <span class=\"k-icon k-i-warning\"></span>{{ error }}\r\n    </div>\r\n    <div class=\"mt40\">\r\n        <button (click)=\"confirm()\" class=\"right\" mat-raised-button color=\"primary\">OK</button>\r\n    </div>\r\n</div>",
                    styles: [".right{float:right}"]
                }] }
    ];
    /** @nocollapse */
    ChangePasswordDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DEFAULT_OPTIONS,] }] },
        { type: MatDialogRef }
    ]; };
    return ChangePasswordDialogComponent;
}());
export { ChangePasswordDialogComponent };
if (false) {
    /** @type {?} */
    ChangePasswordDialogComponent.prototype.title;
    /** @type {?} */
    ChangePasswordDialogComponent.prototype.error;
    /** @type {?} */
    ChangePasswordDialogComponent.prototype.message;
    /** @type {?} */
    ChangePasswordDialogComponent.prototype.placeHolder;
    /** @type {?} */
    ChangePasswordDialogComponent.prototype.placeHolder2;
    /** @type {?} */
    ChangePasswordDialogComponent.prototype.newpwd;
    /** @type {?} */
    ChangePasswordDialogComponent.prototype.newpwd2;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordDialogComponent.prototype.data;
    /** @type {?} */
    ChangePasswordDialogComponent.prototype.mdDialogRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGIvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBb0MsMEJBQTBCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV0SDtJQWVFLHVDQUM4QyxJQUFTLEVBQzlDLFdBQXdEO1FBRG5CLFNBQUksR0FBSixJQUFJLENBQUs7UUFDOUMsZ0JBQVcsR0FBWCxXQUFXLENBQTZDO1FBRS9ELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxnREFBUTs7O0lBQVIsY0FBYSxDQUFDOzs7O0lBRVAsK0NBQU87OztJQUFkO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcseUJBQXlCLENBQUM7U0FDeEM7SUFDSCxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLG0wQkFBc0Q7O2lCQUV2RDs7OztnREFZSSxNQUFNLFNBQUMsMEJBQTBCO2dCQWxCN0IsWUFBWTs7SUF3Q3JCLG9DQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FqQ1ksNkJBQTZCOzs7SUFFeEMsOENBQXFCOztJQUNyQiw4Q0FBcUI7O0lBQ3JCLGdEQUF1Qjs7SUFDdkIsb0RBQTJCOztJQUMzQixxREFBNEI7O0lBQzVCLCtDQUFzQjs7SUFDdEIsZ0RBQXVCOzs7OztJQUdyQiw2Q0FBcUQ7O0lBQ3JELG9EQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2hhbmdlLXBhc3N3b3JkLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgZXJyb3I6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBwbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBwbGFjZUhvbGRlcjI6IHN0cmluZztcclxuICBwdWJsaWMgbmV3cHdkOiBzdHJpbmc7XHJcbiAgcHVibGljIG5ld3B3ZDI6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TKSBwcml2YXRlIGRhdGE6IGFueSxcclxuICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50PlxyXG4gICkge1xyXG4gICAgdGhpcy5lcnJvciA9ICcnO1xyXG4gICAgdGhpcy50aXRsZSA9IGRhdGEuVGl0bGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLk1lc3NhZ2U7XHJcbiAgICB0aGlzLnBsYWNlSG9sZGVyID0gZGF0YS5QbGFjZUhvbGRlcjtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIyID0gZGF0YS5QbGFjZUhvbGRlcjI7XHJcbiAgICB0aGlzLm5ld3B3ZCA9IHRoaXMubmV3cHdkMiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgcHVibGljIGNvbmZpcm0oKSB7XHJcbiAgICB0aGlzLmVycm9yID0gJyc7XHJcbiAgICBpZiAodGhpcy5uZXdwd2QgPT09IHRoaXMubmV3cHdkMiAmJiB0aGlzLm5ld3B3ZDIgIT09ICcnICYmIHRoaXMubmV3cHdkMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5OZXdQd2QgPSB0aGlzLm5ld3B3ZDtcclxuICAgICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lcnJvciA9ICdQYXNzd29yZHMgbXVzdCBiZSBlcXVhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==