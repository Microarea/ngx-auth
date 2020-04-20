/**
 * @fileoverview added by tsickle
 * Generated from: lib/pages/change-password-dialog/change-password-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export class ChangePasswordDialogComponent {
    /**
     * @param {?} mdDialogRef
     * @param {?} data
     */
    constructor(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
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
    cancel() {
        this.error = '';
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    }
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
                template: "<div class=\"app-dialog\">\r\n    <h2>{{ title }}</h2>\r\n    <label>{{ message }}</label>\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder\" adminAutoFocus value=\"\" [(ngModel)]=\"newpwd\" type=\"password\" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder2\" adminAutoFocus value=\"\" [(ngModel)]=\"newpwd2\" type=\"password\" />\r\n    </mat-form-field>\r\n    <div class=\"login-error\" *ngIf=\"error\">\r\n        <span class=\"k-icon k-i-warning\"></span>{{ error }}\r\n    </div>\r\n    <div class=\"mt20\">\r\n        <button (click)=\"cancel()\" class=\"left\" mat-raised-button>Cancel</button>\r\n\r\n        <button (click)=\"confirm()\" class=\"right\" mat-raised-button color=\"primary\">OK</button>\r\n    </div>\r\n</div>",
                styles: [".right{float:right}.mt40{margin-top:40px}.mt20{margin-top:20px}.ml40{margin-left:40px}"]
            }] }
];
/** @nocollapse */
ChangePasswordDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
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
    /** @type {?} */
    ChangePasswordDialogComponent.prototype.mdDialogRef;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordDialogComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGIvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQStDLE1BQU0sMEJBQTBCLENBQUM7QUFPdEgsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFVeEMsWUFFUyxXQUF3RCxFQUM5QixJQUFTO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUE2QztRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxRQUFRLEtBQUssQ0FBQzs7OztJQUNQLE1BQU07UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyx5QkFBeUIsQ0FBQztTQUN4QztJQUNILENBQUM7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsNDVCQUFzRDs7YUFFdkQ7Ozs7WUFOUSxZQUFZOzRDQW9CaEIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFYekIsOENBQXFCOztJQUNyQiw4Q0FBcUI7O0lBQ3JCLGdEQUF1Qjs7SUFDdkIsb0RBQTJCOztJQUMzQixxREFBNEI7O0lBQzVCLCtDQUFzQjs7SUFDdEIsZ0RBQXVCOztJQUlyQixvREFBK0Q7Ozs7O0lBQy9ELDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2hhbmdlLXBhc3N3b3JkLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgZXJyb3I6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBwbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBwbGFjZUhvbGRlcjI6IHN0cmluZztcclxuICBwdWJsaWMgbmV3cHdkOiBzdHJpbmc7XHJcbiAgcHVibGljIG5ld3B3ZDI6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcblxyXG4gICAgcHVibGljIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmVycm9yID0gJyc7XHJcbiAgICB0aGlzLnRpdGxlID0gZGF0YS5UaXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkYXRhLlBsYWNlSG9sZGVyO1xyXG4gICAgdGhpcy5wbGFjZUhvbGRlcjIgPSBkYXRhLlBsYWNlSG9sZGVyMjtcclxuICAgIHRoaXMubmV3cHdkID0gdGhpcy5uZXdwd2QyID0gJyc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG4gIHB1YmxpYyBjYW5jZWwoKSB7XHJcbiAgICB0aGlzLmVycm9yID0gJyc7XHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uZmlybSgpIHtcclxuICAgIHRoaXMuZXJyb3IgPSAnJztcclxuICAgIGlmICh0aGlzLm5ld3B3ZCA9PT0gdGhpcy5uZXdwd2QyICYmIHRoaXMubmV3cHdkMiAhPT0gJycgJiYgdGhpcy5uZXdwd2QyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5kYXRhLk5ld1B3ZCA9IHRoaXMubmV3cHdkO1xyXG4gICAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVycm9yID0gJ1Bhc3N3b3JkcyBtdXN0IGJlIGVxdWFsJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19