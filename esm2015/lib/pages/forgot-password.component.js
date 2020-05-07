import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
export class ForgotPasswordComponent {
    constructor(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.title = data.Title;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.inputValue = data.TextValue;
    }
    ngOnInit() { }
    cancel() {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    }
    confirm() {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    }
}
/** @nocollapse */ ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ ForgotPasswordComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ForgotPasswordComponent, selectors: [["forgot-password-dialog"]], decls: 12, vars: 4, consts: [[1, "app-dialog"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", 3, "placeholder", "ngModel", "ngModelChange"], [1, "mt20"], ["mat-raised-button", "", 1, "left", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "right", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtext(9, "Cancel");
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
    } }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [".right[_ngcontent-%COMP%]{float:right}.mt40[_ngcontent-%COMP%]{margin-top:40px}.mt20[_ngcontent-%COMP%]{margin-top:20px}.ml40[_ngcontent-%COMP%]{margin-left:40px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUErQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7QUFTdEgsTUFBTSxPQUFPLHVCQUF1QjtJQU9sQyxZQUNTLFdBQWtELEVBQ3hCLElBQVM7UUFEbkMsZ0JBQVcsR0FBWCxXQUFXLENBQXVDO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQUs7UUFFMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRLEtBQUssQ0FBQztJQUdQLE1BQU07UUFFWCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNNLE9BQU87UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs4RkE1QlUsdUJBQXVCLDhEQVN4QixlQUFlOzREQVRkLHVCQUF1QjtRQ1ZwQyw4QkFDSTtRQUFBLDBCQUFJO1FBQUEsWUFBVztRQUFBLGlCQUFLO1FBQ3BCLDZCQUFPO1FBQUEsWUFBYTtRQUFBLGlCQUFRO1FBRTVCLHlDQUNJO1FBQUEsZ0NBQ0o7UUFEd0Usb0pBQXdCO1FBQTVGLGlCQUNKO1FBQUEsaUJBQWlCO1FBRWpCLDhCQUNJO1FBQUEsaUNBQTBEO1FBQWxELG9HQUFTLFlBQVEsSUFBQztRQUFnQyxzQkFBTTtRQUFBLGlCQUFTO1FBRXpFLGtDQUE0RTtRQUFwRSxxR0FBUyxhQUFTLElBQUM7UUFBaUQsbUJBQUU7UUFBQSxpQkFBUztRQUMzRixpQkFBTTtRQUVWLGlCQUFNOztRQWJFLGVBQVc7UUFBWCwrQkFBVztRQUNSLGVBQWE7UUFBYixpQ0FBYTtRQUdBLGVBQTJCO1FBQTNCLDZDQUEyQiwyQkFBQTs7a0RES3RDLHVCQUF1QjtjQVBuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7O3NCQVlJLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3Jnb3QtcGFzc3dvcmQtZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgcGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBwdWJsaWMgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9IGRhdGEuVGl0bGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLk1lc3NhZ2U7XHJcbiAgICB0aGlzLnBsYWNlSG9sZGVyID0gZGF0YS5QbGFjZUhvbGRlcjtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGRhdGEuVGV4dFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcblxyXG4gIHB1YmxpYyBjYW5jZWwoKSB7XHJcblxyXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxuICBwdWJsaWMgY29uZmlybSgpIHtcclxuICAgIHRoaXMuZGF0YS5UZXh0VmFsdWUgPSB0aGlzLmlucHV0VmFsdWU7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG59IiwiPGRpdiBjbGFzcz1cImFwcC1kaWFsb2dcIj5cclxuICAgIDxoMj57eyB0aXRsZSB9fTwvaDI+XHJcbiAgICA8bGFiZWw+e3sgbWVzc2FnZSB9fTwvbGFiZWw+XHJcblxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIHN0eWxlPVwibWluLXdpZHRoOjEwMCVcIiBjbGFzcz1cIm10MTBcIj5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCIgYWRtaW5BdXRvRm9jdXMgdmFsdWU9XCJcIiBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIiAvPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibXQyMFwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNhbmNlbCgpXCIgY2xhc3M9XCJsZWZ0XCIgbWF0LXJhaXNlZC1idXR0b24+Q2FuY2VsPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNvbmZpcm0oKVwiIGNsYXNzPVwicmlnaHRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5PSzwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG48L2Rpdj4iXX0=