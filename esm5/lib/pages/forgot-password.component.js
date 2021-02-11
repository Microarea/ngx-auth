import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.title = data.Title;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.inputValue = data.TextValue;
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
            this.buttonCancel = "Annulla";
        }
        else {
            this.buttonCancel = "Cancel";
        }
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () { };
    ForgotPasswordComponent.prototype.cancel = function () {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    };
    ForgotPasswordComponent.prototype.confirm = function () {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    };
    /** @nocollapse */ ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    /** @nocollapse */ ForgotPasswordComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ForgotPasswordComponent, selectors: [["forgot-password-dialog"]], decls: 12, vars: 5, consts: [[1, "app-dialog"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", 3, "placeholder", "ngModel", "ngModelChange"], [1, "mt20"], ["mat-raised-button", "", 1, "left", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "right", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field", 1);
            i0.ɵɵelementStart(6, "input", 2);
            i0.ɵɵlistener("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputValue = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵlistener("click", function ForgotPasswordComponent_Template_button_click_8_listener() { return ctx.cancel(); });
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 5);
            i0.ɵɵlistener("click", function ForgotPasswordComponent_Template_button_click_10_listener() { return ctx.confirm(); });
            i0.ɵɵtext(11, "OK");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("placeholder", ctx.placeHolder)("ngModel", ctx.inputValue);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.buttonCancel);
        } }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [".right[_ngcontent-%COMP%]{float:right}.mt40[_ngcontent-%COMP%]{margin-top:40px}.mt20[_ngcontent-%COMP%]{margin-top:20px}.ml40[_ngcontent-%COMP%]{margin-left:40px}"] });
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ForgotPasswordComponent, [{
        type: Component,
        args: [{
                selector: 'forgot-password-dialog',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.css']
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUErQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7QUFFdEg7SUFlRSxpQ0FDUyxXQUFrRCxFQUN4QixJQUFTO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUF1QztRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQ25HLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1NBQy9CO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCwwQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUdQLHdDQUFNLEdBQWI7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNNLHlDQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO2tHQWxDVSx1QkFBdUIsOERBVXhCLGVBQWU7Z0VBVmQsdUJBQXVCO1lDVnBDLDhCQUNJO1lBQUEsMEJBQUk7WUFBQSxZQUFXO1lBQUEsaUJBQUs7WUFDcEIsNkJBQU87WUFBQSxZQUFhO1lBQUEsaUJBQVE7WUFFNUIseUNBQ0k7WUFBQSxnQ0FDSjtZQUR3RSxvSkFBd0I7WUFBNUYsaUJBQ0o7WUFBQSxpQkFBaUI7WUFFakIsOEJBQ0k7WUFBQSxpQ0FBMEQ7WUFBbEQsb0dBQVMsWUFBUSxJQUFDO1lBQWdDLFlBQWtCO1lBQUEsaUJBQVM7WUFFckYsa0NBQTRFO1lBQXBFLHFHQUFTLGFBQVMsSUFBQztZQUFpRCxtQkFBRTtZQUFBLGlCQUFTO1lBQzNGLGlCQUFNO1lBRVYsaUJBQU07O1lBYkUsZUFBVztZQUFYLCtCQUFXO1lBQ1IsZUFBYTtZQUFiLGlDQUFhO1lBR0EsZUFBMkI7WUFBM0IsNkNBQTJCLDJCQUFBO1lBSWUsZUFBa0I7WUFBbEIsc0NBQWtCOztrQ0RUcEY7Q0E2Q0MsQUExQ0QsSUEwQ0M7U0FuQ1ksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FQbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOztzQkFhSSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dNb2R1bGUsIE1BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9yZ290LXBhc3N3b3JkLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgcHVibGljIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBwdWJsaWMgYnV0dG9uQ2FuY2VsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Rm9yZ290UGFzc3dvcmRDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gZGF0YS5UaXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkYXRhLlBsYWNlSG9sZGVyO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YS5UZXh0VmFsdWU7XHJcbiAgICBpZiAobmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUlUJyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1DSCcpIHtcclxuICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSBcIkFubnVsbGFcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gXCJDYW5jZWxcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG5cclxuICBwdWJsaWMgY2FuY2VsKCkge1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcclxuICB9XHJcbiAgcHVibGljIGNvbmZpcm0oKSB7XHJcbiAgICB0aGlzLmRhdGEuVGV4dFZhbHVlID0gdGhpcy5pbnB1dFZhbHVlO1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxufSIsIjxkaXYgY2xhc3M9XCJhcHAtZGlhbG9nXCI+XHJcbiAgICA8aDI+e3sgdGl0bGUgfX08L2gyPlxyXG4gICAgPGxhYmVsPnt7IG1lc3NhZ2UgfX08L2xhYmVsPlxyXG5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBzdHlsZT1cIm1pbi13aWR0aDoxMDAlXCIgY2xhc3M9XCJtdDEwXCI+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlclwiIGFkbWluQXV0b0ZvY3VzIHZhbHVlPVwiXCIgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCIgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm10MjBcIj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjYW5jZWwoKVwiIGNsYXNzPVwibGVmdFwiIG1hdC1yYWlzZWQtYnV0dG9uPnt7IGJ1dHRvbkNhbmNlbCB9fTwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjb25maXJtKClcIiBjbGFzcz1cInJpZ2h0XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+T0s8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+Il19