import { __awaiter, __generator } from "tslib";
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
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.resendOTPpLabel);
} }
function OtpComponent_u_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "u");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.resendOTPpLabelDone);
} }
var OtpComponent = /** @class */ (function () {
    function OtpComponent(mdDialogRef, data) {
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
    OtpComponent.prototype.ngOnInit = function () { };
    OtpComponent.prototype.cancel = function () {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    };
    OtpComponent.prototype.resendOTP = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.resendRequested.emit(this.alternative);
                this.done = false;
                setTimeout(function () { _this.done = true; }, 3000);
                return [2 /*return*/];
            });
        });
    };
    OtpComponent.prototype.closeDialog = function () {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL290cC1kaWFsb2cvb3RwLmNvbXBvbmVudC50cyIsImxpYi9wYWdlcy9vdHAtZGlhbG9nL290cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUErQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7O0lDK0IxRyx5QkFBZ0I7SUFBQSxZQUFxQjtJQUFBLGlCQUFJOzs7SUFBekIsZUFBcUI7SUFBckIsNENBQXFCOzs7SUFBSSx5QkFBaUI7SUFBQSxZQUF5QjtJQUFBLGlCQUFJOzs7SUFBN0IsZUFBeUI7SUFBekIsZ0RBQXlCOztBRDlCL0Y7SUFvQkUsc0JBQ1MsV0FBdUMsRUFDYixJQUFTO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUE0QjtRQUNiLFNBQUksR0FBSixJQUFJLENBQUs7UUFINUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLE9BQU8sSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtZQUNuRyxJ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QUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNuQzs7c0JBa0JJLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nTW9kdWxlLCBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb3RwLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL290cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb3RwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE90cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBhY2NuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgcGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBwdWJsaWMgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBidXR0b25DYW5jZWw6IHN0cmluZztcclxuICBwdWJsaWMgcmVzZW5kT1RQcExhYmVsOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlc2VuZE9UUHBMYWJlbERvbmU6IHN0cmluZztcclxuICBwdWJsaWMgYWx0ZXJuYXRpdmU6IGJvb2xlYW47XHJcbiAgcHVibGljIGFsdGVybmF0aXZlbGJsOiBzdHJpbmc7XHJcbiAgIHB1YmxpYyBkb25lOiBib29sZWFuO1xyXG4gIHJlc2VuZFJlcXVlc3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE90cENvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSBkYXRhLlRpdGxlO1xyXG4gICAgdGhpcy5hY2NuYW1lID0gZGF0YS5BY2NvdW50TmFtZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkYXRhLlBsYWNlSG9sZGVyO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YS5UZXh0VmFsdWU7XHJcbiAgICBpZiAobmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUlUJyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1DSCcpIHtcclxuICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQW5udWxsYSc7XHJcbiAgICAgIHRoaXMucmVzZW5kT1RQcExhYmVsICA9ICdJbnZpYW1pIHVuIG51b3ZvIGNvZGljZSc7XHJcbiAgICAgICB0aGlzLnJlc2VuZE9UUHBMYWJlbERvbmUgID0gJ0ludmlhdG8hICc7XHJcbiAgICAgIHRoaXMuYWx0ZXJuYXRpdmVsYmwgPSAnVXNhIG1ldG9kbyBhbHRlcm5hdGl2byc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdDYW5jZWwnO1xyXG4gICAgICB0aGlzLnJlc2VuZE9UUHBMYWJlbCAgPSAnU2VuZCBtZSBhIG5ldyBjb2RlJztcclxuICAgICAgdGhpcy5yZXNlbmRPVFBwTGFiZWxEb25lICA9ICdTZW50ISc7XHJcbiAgICAgIHRoaXMuYWx0ZXJuYXRpdmVsYmwgPSAnVXNlIGFsdGVybmF0aXZlIHdheSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFsdGVybmF0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmRvbmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgcHVibGljIGNhbmNlbCgpIHtcclxuXHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAgcHVibGljIGFzeW5jIHJlc2VuZE9UUCgpIHtcclxuICAgICB0aGlzLnJlc2VuZFJlcXVlc3RlZC5lbWl0KHRoaXMuYWx0ZXJuYXRpdmUpO1xyXG5cclxuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuZG9uZSA9IHRydWUgfSwgMzAwMClcclxuXHJcbiAgfVxyXG4gICAgcHVibGljIGNsb3NlRGlhbG9nKCkge1xyXG4gIHRoaXMuZGF0YS5UZXh0VmFsdWUgPSB0aGlzLmlucHV0VmFsdWU7XHJcbiAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYXBwLWRpYWxvZ1wiIHN0eWxlPVwiIG1heC13aWR0aDo0NTBweDtcIj5cclxuICAgIDxoMj57eyB0aXRsZSB9fTwvaDI+XHJcbiAgICA8bGFiZWw+e3sgbWVzc2FnZSB9fTwvbGFiZWw+XHJcblxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIHN0eWxlPVwibWluLXdpZHRoOjEwMCVcIiBjbGFzcz1cIm10MTBcIj5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCIgYWRtaW5BdXRvRm9jdXMgdmFsdWU9XCJcIiBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibXQyMFwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtwYWRkaW5nOiAxMHB4IDBweCAwcHggMzBweDtcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiAoY2xpY2spPVwiY2FuY2VsKClcIiBzdHlsZT1cIiBiYWNrZ3JvdW5kOiAjZTc3YjJkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMnB4IDRweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNzdiMmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibGV0dGVyLXNwYWNpbmc6IDNweDsgXCI+e3sgYnV0dG9uQ2FuY2VsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiAoY2xpY2spPVwiY2xvc2VEaWFsb2coKVwiIHN0eWxlPVwiIGJhY2tncm91bmQ6ICNlNzdiMmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHggNHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U3N2IyZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJsZXR0ZXItc3BhY2luZzogM3B4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXCI+IE9LIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDQwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImxpbmtcIiAoY2xpY2spPVwicmVzZW5kT1RQKClcIj5cclxuICAgICAgICAgICAgPHUgKm5nSWY9XCJkb25lXCI+e3sgcmVzZW5kT1RQcExhYmVsIH19PC91Pjx1ICpuZ0lmPVwiIWRvbmVcIj57eyByZXNlbmRPVFBwTGFiZWxEb25lIH19PC91PlxyXG4gICAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDIwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImxpbmtcIj5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImFsdGVybmF0aXZlXCIgbmFtZT1cImFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiB0cmFuc2xhdGU+e3sgYWx0ZXJuYXRpdmVsYmwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbiJdfQ==