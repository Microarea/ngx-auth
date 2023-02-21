import { __awaiter } from "tslib";
import { Component, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@progress/kendo-angular-buttons";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/checkbox";
function OtpComponent_u_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "u");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.resendOTPpLabel);
} }
function OtpComponent_u_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "u");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.resendOTPpLabelDone);
} }
export class OtpComponent {
    constructor(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.resendRequested = new EventEmitter();
        this.title = data.Title;
        this.accname = data.AccountName;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.inputValue = data.TextValue;
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
            this.buttonCancel = 'Annulla';
            this.resendOTPpLabel = 'Inviami un nuovo codice';
            this.resendOTPpLabelDone = 'Inviato! ';
            this.alternativelbl = 'Usa metodo alternativo';
        }
        else {
            this.buttonCancel = 'Cancel';
            this.resendOTPpLabel = 'Send me a new code';
            this.resendOTPpLabelDone = 'Sent!';
            this.alternativelbl = 'Use alternative way';
        }
        this.alternative = false;
        this.done = true;
    }
    ngOnInit() { }
    cancel() {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    }
    resendOTP() {
        return __awaiter(this, void 0, void 0, function* () {
            this.resendRequested.emit(this.alternative);
            this.done = false;
            setTimeout(() => { this.done = true; }, 3000);
        });
    }
    closeDialog() {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    }
}
/** @nocollapse */ OtpComponent.ɵfac = function OtpComponent_Factory(t) { return new (t || OtpComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ OtpComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OtpComponent, selectors: [["otp-dialog"]], decls: 24, vars: 9, consts: [[1, "app-dialog", 2, "max-width", "450px"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", "type", "password", 3, "placeholder", "ngModel", "ngModelChange"], [1, "mt20"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "10px 0px 0px 30px"], ["kendoButton", "", 2, "background", "#e77b2d", "padding", "4px 12px 4px 12px", "background", "#e77b2d", "color", "#fff", "font-size", "14px", "border-radius", "0px", "border-color", "rgba(0, 0, 0, 0)", 3, "click"], [2, "letter-spacing", "3px"], [2, "letter-spacing", "3px", "text-transform", "uppercase"], [2, "display", "flex", "margin-top", "40px", "justify-content", "flex-end"], [1, "link", 3, "click"], [4, "ngIf"], [2, "display", "flex", "margin-top", "20px", "justify-content", "flex-end"], [1, "link"], ["name", "alternative", 3, "ngModel", "ngModelChange"], ["translate", ""]], template: function OtpComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(8, "div", 4);
        i0.ɵɵelementStart(9, "button", 5);
        i0.ɵɵlistener("click", function OtpComponent_Template_button_click_9_listener() { return ctx.cancel(); });
        i0.ɵɵelementStart(10, "span", 6);
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 5);
        i0.ɵɵlistener("click", function OtpComponent_Template_button_click_12_listener() { return ctx.closeDialog(); });
        i0.ɵɵelementStart(13, "span", 7);
        i0.ɵɵtext(14, " OK ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 8);
        i0.ɵɵelementStart(16, "p", 9);
        i0.ɵɵlistener("click", function OtpComponent_Template_p_click_16_listener() { return ctx.resendOTP(); });
        i0.ɵɵtemplate(17, OtpComponent_u_17_Template, 2, 1, "u", 10);
        i0.ɵɵtemplate(18, OtpComponent_u_18_Template, 2, 1, "u", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 11);
        i0.ɵɵelementStart(20, "p", 12);
        i0.ɵɵelementStart(21, "mat-checkbox", 13);
        i0.ɵɵlistener("ngModelChange", function OtpComponent_Template_mat_checkbox_ngModelChange_21_listener($event) { return ctx.alternative = $event; });
        i0.ɵɵelementStart(22, "span", 14);
        i0.ɵɵtext(23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.buttonCancel);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.done);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.done);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.alternative);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.alternativelbl);
    } }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.Button, i6.NgIf, i7.MatCheckbox], styles: [".right[_ngcontent-%COMP%]{float:right}.mt40[_ngcontent-%COMP%]{margin-top:40px}.mt20[_ngcontent-%COMP%]{margin-top:20px}.ml40[_ngcontent-%COMP%]{margin-left:40px}.link[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}  .mat-checkbox{font-family:'Open Sans',sans-serif;font-size:16px;font-weight:300}  .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%],   .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#005890}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL290cC1kaWFsb2cvb3RwLmNvbXBvbmVudC50cyIsImxpYi9wYWdlcy9vdHAtZGlhbG9nL290cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUErQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7O0lDK0IxRyx5QkFBZ0I7SUFBQSxZQUFxQjtJQUFBLGlCQUFJOzs7SUFBekIsZUFBcUI7SUFBckIsNENBQXFCOzs7SUFBSSx5QkFBaUI7SUFBQSxZQUF5QjtJQUFBLGlCQUFJOzs7SUFBN0IsZUFBeUI7SUFBekIsZ0RBQXlCOztBRHhCL0YsTUFBTSxPQUFPLFlBQVk7SUFjdkIsWUFDUyxXQUF1QyxFQUNiLElBQVM7UUFEbkMsZ0JBQVcsR0FBWCxXQUFXLENBQTRCO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBSztRQUg1QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFLbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssT0FB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O3NCQWtCSSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ290cC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vdHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL290cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPdHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgYWNjbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgcHVibGljIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBwdWJsaWMgYnV0dG9uQ2FuY2VsOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlc2VuZE9UUHBMYWJlbDogc3RyaW5nO1xyXG4gIHB1YmxpYyByZXNlbmRPVFBwTGFiZWxEb25lOiBzdHJpbmc7XHJcbiAgcHVibGljIGFsdGVybmF0aXZlOiBib29sZWFuO1xyXG4gIHB1YmxpYyBhbHRlcm5hdGl2ZWxibDogc3RyaW5nO1xyXG4gICBwdWJsaWMgZG9uZTogYm9vbGVhbjtcclxuICByZXNlbmRSZXF1ZXN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxPdHBDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gZGF0YS5UaXRsZTtcclxuICAgIHRoaXMuYWNjbmFtZSA9IGRhdGEuQWNjb3VudE5hbWU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLk1lc3NhZ2U7XHJcbiAgICB0aGlzLnBsYWNlSG9sZGVyID0gZGF0YS5QbGFjZUhvbGRlcjtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGRhdGEuVGV4dFZhbHVlO1xyXG4gICAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0JyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1JVCcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQtQ0gnKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gJ0FubnVsbGEnO1xyXG4gICAgICB0aGlzLnJlc2VuZE9UUHBMYWJlbCAgPSAnSW52aWFtaSB1biBudW92byBjb2RpY2UnO1xyXG4gICAgICAgdGhpcy5yZXNlbmRPVFBwTGFiZWxEb25lICA9ICdJbnZpYXRvISAnO1xyXG4gICAgICB0aGlzLmFsdGVybmF0aXZlbGJsID0gJ1VzYSBtZXRvZG8gYWx0ZXJuYXRpdm8nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQ2FuY2VsJztcclxuICAgICAgdGhpcy5yZXNlbmRPVFBwTGFiZWwgID0gJ1NlbmQgbWUgYSBuZXcgY29kZSc7XHJcbiAgICAgIHRoaXMucmVzZW5kT1RQcExhYmVsRG9uZSAgPSAnU2VudCEnO1xyXG4gICAgICB0aGlzLmFsdGVybmF0aXZlbGJsID0gJ1VzZSBhbHRlcm5hdGl2ZSB3YXknO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hbHRlcm5hdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb25lID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIHB1YmxpYyBjYW5jZWwoKSB7XHJcblxyXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgIHB1YmxpYyBhc3luYyByZXNlbmRPVFAoKSB7XHJcbiAgICAgdGhpcy5yZXNlbmRSZXF1ZXN0ZWQuZW1pdCh0aGlzLmFsdGVybmF0aXZlKTtcclxuXHJcbiAgICB0aGlzLmRvbmUgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmRvbmUgPSB0cnVlIH0sIDMwMDApXHJcblxyXG4gIH1cclxuICAgIHB1YmxpYyBjbG9zZURpYWxvZygpIHtcclxuICB0aGlzLmRhdGEuVGV4dFZhbHVlID0gdGhpcy5pbnB1dFZhbHVlO1xyXG4gIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFwcC1kaWFsb2dcIiBzdHlsZT1cIiBtYXgtd2lkdGg6NDUwcHg7XCI+XHJcbiAgICA8aDI+e3sgdGl0bGUgfX08L2gyPlxyXG4gICAgPGxhYmVsPnt7IG1lc3NhZ2UgfX08L2xhYmVsPlxyXG5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBzdHlsZT1cIm1pbi13aWR0aDoxMDAlXCIgY2xhc3M9XCJtdDEwXCI+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlclwiIGFkbWluQXV0b0ZvY3VzIHZhbHVlPVwiXCIgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm10MjBcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47cGFkZGluZzogMTBweCAwcHggMHB4IDMwcHg7XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gKGNsaWNrKT1cImNhbmNlbCgpXCIgc3R5bGU9XCIgYmFja2dyb3VuZDogI2U3N2IyZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweCA0cHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTc3YjJkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImxldHRlci1zcGFjaW5nOiAzcHg7IFwiPnt7IGJ1dHRvbkNhbmNlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gKGNsaWNrKT1cImNsb3NlRGlhbG9nKClcIiBzdHlsZT1cIiBiYWNrZ3JvdW5kOiAjZTc3YjJkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMnB4IDRweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNzdiMmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibGV0dGVyLXNwYWNpbmc6IDNweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVwiPiBPSyA8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBtYXJnaW4tdG9wOiA0MHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJsaW5rXCIgKGNsaWNrKT1cInJlc2VuZE9UUCgpXCI+XHJcbiAgICAgICAgICAgIDx1ICpuZ0lmPVwiZG9uZVwiPnt7IHJlc2VuZE9UUHBMYWJlbCB9fTwvdT48dSAqbmdJZj1cIiFkb25lXCI+e3sgcmVzZW5kT1RQcExhYmVsRG9uZSB9fTwvdT5cclxuICAgICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBtYXJnaW4tdG9wOiAyMHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJhbHRlcm5hdGl2ZVwiIG5hbWU9XCJhbHRlcm5hdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gdHJhbnNsYXRlPnt7IGFsdGVybmF0aXZlbGJsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG4iXX0=