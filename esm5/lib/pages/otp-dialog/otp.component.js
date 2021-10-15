import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
var OtpComponent = /** @class */ (function () {
    function OtpComponent(mdDialogRef, data) {
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
    OtpComponent.prototype.ngOnInit = function () { };
    OtpComponent.prototype.cancel = function () {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    };
    OtpComponent.prototype.confirm = function () {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    };
    /** @nocollapse */ OtpComponent.ɵfac = function OtpComponent_Factory(t) { return new (t || OtpComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    /** @nocollapse */ OtpComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OtpComponent, selectors: [["otp-dialog"]], decls: 12, vars: 5, consts: [[1, "app-dialog"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", 3, "placeholder", "ngModel", "ngModelChange"], [1, "mt20"], ["mat-raised-button", "", 1, "left", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "right", 3, "click"]], template: function OtpComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field", 1);
            i0.ɵɵelementStart(6, "input", 2);
            i0.ɵɵlistener("ngModelChange", function OtpComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputValue = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵlistener("click", function OtpComponent_Template_button_click_8_listener() { return ctx.cancel(); });
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 5);
            i0.ɵɵlistener("click", function OtpComponent_Template_button_click_10_listener() { return ctx.confirm(); });
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
    return OtpComponent;
}());
export { OtpComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OtpComponent, [{
        type: Component,
        args: [{
                selector: 'otp-dialog',
                templateUrl: './otp.component.html',
                styleUrls: ['./otp.component.css']
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL290cC1kaWFsb2cvb3RwLmNvbXBvbmVudC50cyIsImxpYi9wYWdlcy9vdHAtZGlhbG9nL290cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBK0MsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0FBRXRIO0lBZUUsc0JBQ1MsV0FBdUMsRUFDYixJQUFTO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUE0QjtRQUNiLFNBQUksR0FBSixJQUFJLENBQUs7UUFFMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxPQUFPLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7WUFDbkcsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELCtCQUFRLEdBQVIsY0FBYSxDQUFDO0lBR1AsNkJBQU0sR0FBYjtRQUVFLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ00sOEJBQU8sR0FBZDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7NEVBbENVLFlBQVksOERBVWIsZUFBZTtxREFWZCxZQUFZO1lDVnpCLDhCQUNJO1lBQUEsMEJBQUk7WUFBQSxZQUFXO1lBQUEsaUJBQUs7WUFDcEIsNkJBQU87WUFBQSxZQUFhO1lBQUEsaUJBQVE7WUFFNUIseUNBQ0k7WUFBQSxnQ0FDSjtZQUR3RSx5SUFBd0I7WUFBNUYsaUJBQ0o7WUFBQSxpQkFBaUI7WUFFakIsOEJBQ0k7WUFBQSxpQ0FBMEQ7WUFBbEQseUZBQVMsWUFBUSxJQUFDO1lBQWdDLFlBQWtCO1lBQUEsaUJBQVM7WUFFckYsa0NBQTRFO1lBQXBFLDBGQUFTLGFBQVMsSUFBQztZQUFpRCxtQkFBRTtZQUFBLGlCQUFTO1lBQzNGLGlCQUFNO1lBRVYsaUJBQU07O1lBYkUsZUFBVztZQUFYLCtCQUFXO1lBQ1IsZUFBYTtZQUFiLGlDQUFhO1lBR0EsZUFBMkI7WUFBM0IsNkNBQTJCLDJCQUFBO1lBSWUsZUFBa0I7WUFBbEIsc0NBQWtCOzt1QkRUcEY7Q0E2Q0MsQUExQ0QsSUEwQ0M7U0FuQ1ksWUFBWTtrREFBWixZQUFZO2NBUHhCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLHNCQUFzQjtnQkFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDbkM7O3NCQWFJLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvdHAtZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vb3RwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vdHAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE90cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgcHVibGljIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBwdWJsaWMgYnV0dG9uQ2FuY2VsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8T3RwQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9IGRhdGEuVGl0bGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLk1lc3NhZ2U7XHJcbiAgICB0aGlzLnBsYWNlSG9sZGVyID0gZGF0YS5QbGFjZUhvbGRlcjtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGRhdGEuVGV4dFZhbHVlO1xyXG4gICAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0JyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1JVCcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQtQ0gnKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gXCJBbm51bGxhXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9IFwiQ2FuY2VsXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuXHJcbiAgcHVibGljIGNhbmNlbCgpIHtcclxuXHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBjb25maXJtKCkge1xyXG4gICAgdGhpcy5kYXRhLlRleHRWYWx1ZSA9IHRoaXMuaW5wdXRWYWx1ZTtcclxuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFwcC1kaWFsb2dcIj5cclxuICAgIDxoMj57eyB0aXRsZSB9fTwvaDI+XHJcbiAgICA8bGFiZWw+e3sgbWVzc2FnZSB9fTwvbGFiZWw+XHJcblxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIHN0eWxlPVwibWluLXdpZHRoOjEwMCVcIiBjbGFzcz1cIm10MTBcIj5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCIgYWRtaW5BdXRvRm9jdXMgdmFsdWU9XCJcIiBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIiAvPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibXQyMFwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNhbmNlbCgpXCIgY2xhc3M9XCJsZWZ0XCIgbWF0LXJhaXNlZC1idXR0b24+e3sgYnV0dG9uQ2FuY2VsIH19PC9idXR0b24+XHJcblxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNvbmZpcm0oKVwiIGNsYXNzPVwicmlnaHRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5PSzwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG48L2Rpdj4iXX0=