/**
 * @fileoverview added by tsickle
 * Generated from: lib/pages/change-password-dialog/change-password-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
export class ChangePasswordDialogComponent {
    /**
     * @param {?} data
     * @param {?} mdDialogRef
     */
    constructor(data, mdDialogRef) {
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
    ngOnInit() { }
    /**
     * @return {?}
     */
    confirm() {
        this.error = '';
        if (this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined) {
            this.data.NewPwd = this.newpwd;
            this.mdDialogRef.close(this.data);
        }
        else {
            this.error = 'Passwords must be equal';
        }
    }
}
ChangePasswordDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-change-password-dialog',
                template: "<div class=\"app-dialog\">\r\n    <h2>{{ title }}</h2>\r\n    <label>{{ message }}</label>\r\n\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder\" adminAutoFocus value=\"\" [(ngModel)]=\"newpwd\" type=\"password\" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder2\" adminAutoFocus value=\"\" [(ngModel)]=\"newpwd2\" type=\"password\" />\r\n    </mat-form-field>\r\n    <div class=\"login-error\" *ngIf=\"error\">\r\n        <span class=\"k-icon k-i-warning\"></span>{{ error }}\r\n    </div>\r\n    <div class=\"mt40\">\r\n        <button (click)=\"confirm()\" class=\"right\" mat-raised-button color=\"primary\">OK</button>\r\n    </div>\r\n</div>",
                styles: [".right{float:right}"]
            }] }
];
/** @nocollapse */
ChangePasswordDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DEFAULT_OPTIONS,] }] },
    { type: MatDialogRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGIvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBb0MsMEJBQTBCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU90SCxNQUFNLE9BQU8sNkJBQTZCOzs7OztJQVV4QyxZQUM4QyxJQUFTLEVBQzlDLFdBQXdEO1FBRG5CLFNBQUksR0FBSixJQUFJLENBQUs7UUFDOUMsZ0JBQVcsR0FBWCxXQUFXLENBQTZDO1FBRS9ELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxRQUFRLEtBQUssQ0FBQzs7OztJQUVQLE9BQU87UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyx5QkFBeUIsQ0FBQztTQUN4QztJQUNILENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsbTBCQUFzRDs7YUFFdkQ7Ozs7NENBWUksTUFBTSxTQUFDLDBCQUEwQjtZQWxCN0IsWUFBWTs7OztJQVNuQiw4Q0FBcUI7O0lBQ3JCLDhDQUFxQjs7SUFDckIsZ0RBQXVCOztJQUN2QixvREFBMkI7O0lBQzNCLHFEQUE0Qjs7SUFDNUIsK0NBQXNCOztJQUN0QixnREFBdUI7Ozs7O0lBR3JCLDZDQUFxRDs7SUFDckQsb0RBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nTW9kdWxlLCBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYWNlSG9sZGVyMjogc3RyaW5nO1xyXG4gIHB1YmxpYyBuZXdwd2Q6IHN0cmluZztcclxuICBwdWJsaWMgbmV3cHdkMjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMpIHByaXZhdGUgZGF0YTogYW55LFxyXG4gICAgcHVibGljIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQ+XHJcbiAgKSB7XHJcbiAgICB0aGlzLmVycm9yID0gJyc7XHJcbiAgICB0aGlzLnRpdGxlID0gZGF0YS5UaXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkYXRhLlBsYWNlSG9sZGVyO1xyXG4gICAgdGhpcy5wbGFjZUhvbGRlcjIgPSBkYXRhLlBsYWNlSG9sZGVyMjtcclxuICAgIHRoaXMubmV3cHdkID0gdGhpcy5uZXdwd2QyID0gJyc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBwdWJsaWMgY29uZmlybSgpIHtcclxuICAgIHRoaXMuZXJyb3IgPSAnJztcclxuICAgIGlmICh0aGlzLm5ld3B3ZCA9PT0gdGhpcy5uZXdwd2QyICYmIHRoaXMubmV3cHdkMiAhPT0gJycgJiYgdGhpcy5uZXdwd2QyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5kYXRhLk5ld1B3ZCA9IHRoaXMubmV3cHdkO1xyXG4gICAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVycm9yID0gJ1Bhc3N3b3JkcyBtdXN0IGJlIGVxdWFsJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19