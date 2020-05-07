/**
 * @fileoverview added by tsickle
 * Generated from: lib/pages/forgot-password.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.title = data.Title;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.inputValue = data.TextValue;
    }
    /**
     * @return {?}
     */
    ForgotPasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ForgotPasswordComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    };
    /**
     * @return {?}
     */
    ForgotPasswordComponent.prototype.confirm = /**
     * @return {?}
     */
    function () {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    };
    ForgotPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'forgot-password-dialog',
                    template: "<div class=\"app-dialog\">\r\n    <h2>{{ title }}</h2>\r\n    <label>{{ message }}</label>\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder\" adminAutoFocus value=\"\" [(ngModel)]=\"inputValue\" />\r\n    </mat-form-field>\r\n\r\n    <div class=\"mt20\">\r\n        <button (click)=\"cancel()\" class=\"left\" mat-raised-button>Cancel</button>\r\n\r\n        <button (click)=\"confirm()\" class=\"right\" mat-raised-button color=\"primary\">OK</button>\r\n    </div>\r\n\r\n</div>",
                    styles: [".right{float:right}.mt40{margin-top:40px}.mt20{margin-top:20px}.ml40{margin-left:40px}"]
                }] }
    ];
    /** @nocollapse */
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
if (false) {
    /** @type {?} */
    ForgotPasswordComponent.prototype.title;
    /** @type {?} */
    ForgotPasswordComponent.prototype.message;
    /** @type {?} */
    ForgotPasswordComponent.prototype.placeHolder;
    /** @type {?} */
    ForgotPasswordComponent.prototype.inputValue;
    /** @type {?} */
    ForgotPasswordComponent.prototype.mdDialogRef;
    /**
     * @type {?}
     * @private
     */
    ForgotPasswordComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBK0MsTUFBTSwwQkFBMEIsQ0FBQztBQUV0SDtJQWNFLGlDQUNTLFdBQWtELEVBQ3hCLElBQVM7UUFEbkMsZ0JBQVcsR0FBWCxXQUFXLENBQXVDO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQUs7UUFFMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVIsY0FBYSxDQUFDOzs7O0lBR1Asd0NBQU07OztJQUFiO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDTSx5Q0FBTzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLHNqQkFBK0M7O2lCQUVoRDs7OztnQkFOUSxZQUFZO2dEQWtCaEIsTUFBTSxTQUFDLGVBQWU7O0lBb0IzQiw4QkFBQztDQUFBLEFBcENELElBb0NDO1NBN0JZLHVCQUF1Qjs7O0lBRWxDLHdDQUFxQjs7SUFDckIsMENBQXVCOztJQUN2Qiw4Q0FBMkI7O0lBQzNCLDZDQUEwQjs7SUFHeEIsOENBQXlEOzs7OztJQUN6RCx1Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dNb2R1bGUsIE1BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9yZ290LXBhc3N3b3JkLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgcHVibGljIGlucHV0VmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxGb3Jnb3RQYXNzd29yZENvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSBkYXRhLlRpdGxlO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gZGF0YS5NZXNzYWdlO1xyXG4gICAgdGhpcy5wbGFjZUhvbGRlciA9IGRhdGEuUGxhY2VIb2xkZXI7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSBkYXRhLlRleHRWYWx1ZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG5cclxuICBwdWJsaWMgY2FuY2VsKCkge1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcclxuICB9XHJcbiAgcHVibGljIGNvbmZpcm0oKSB7XHJcbiAgICB0aGlzLmRhdGEuVGV4dFZhbHVlID0gdGhpcy5pbnB1dFZhbHVlO1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxufSJdfQ==