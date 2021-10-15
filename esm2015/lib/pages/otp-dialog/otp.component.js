import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
export class OtpComponent {
    constructor(mdDialogRef, data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL290cC1kaWFsb2cvb3RwLmNvbXBvbmVudC50cyIsImxpYi9wYWdlcy9vdHAtZGlhbG9nL290cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBK0MsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0FBU3RILE1BQU0sT0FBTyxZQUFZO0lBUXZCLFlBQ1MsV0FBdUMsRUFDYixJQUFTO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUE0QjtRQUNiLFNBQUksR0FBSixJQUFJLENBQUs7UUFFMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxPQUFPLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7WUFDbkcsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELFFBQVEsS0FBSyxDQUFDO0lBR1AsTUFBTTtRQUVYLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ00sT0FBTztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O3dFQWxDVSxZQUFZLDhEQVViLGVBQWU7aURBVmQsWUFBWTtRQ1Z6Qiw4QkFDSTtRQUFBLDBCQUFJO1FBQUEsWUFBVztRQUFBLGlCQUFLO1FBQ3BCLDZCQUFPO1FBQUEsWUFBYTtRQUFBLGlCQUFRO1FBRTVCLHlDQUNJO1FBQUEsZ0NBQ0o7UUFEd0UseUlBQXdCO1FBQTVGLGlCQUNKO1FBQUEsaUJBQWlCO1FBRWpCLDhCQUNJO1FBQUEsaUNBQTBEO1FBQWxELHlGQUFTLFlBQVEsSUFBQztRQUFnQyxZQUFrQjtRQUFBLGlCQUFTO1FBRXJGLGtDQUE0RTtRQUFwRSwwRkFBUyxhQUFTLElBQUM7UUFBaUQsbUJBQUU7UUFBQSxpQkFBUztRQUMzRixpQkFBTTtRQUVWLGlCQUFNOztRQWJFLGVBQVc7UUFBWCwrQkFBVztRQUNSLGVBQWE7UUFBYixpQ0FBYTtRQUdBLGVBQTJCO1FBQTNCLDZDQUEyQiwyQkFBQTtRQUllLGVBQWtCO1FBQWxCLHNDQUFrQjs7a0REQ3ZFLFlBQVk7Y0FQeEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUsc0JBQXNCO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNuQzs7c0JBYUksTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nTW9kdWxlLCBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ290cC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vdHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL290cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgT3RwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgcGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBwdWJsaWMgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBidXR0b25DYW5jZWw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxPdHBDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gZGF0YS5UaXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkYXRhLlBsYWNlSG9sZGVyO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YS5UZXh0VmFsdWU7XHJcbiAgICBpZiAobmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUlUJyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1DSCcpIHtcclxuICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSBcIkFubnVsbGFcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gXCJDYW5jZWxcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG5cclxuICBwdWJsaWMgY2FuY2VsKCkge1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcclxuICB9XHJcbiAgcHVibGljIGNvbmZpcm0oKSB7XHJcbiAgICB0aGlzLmRhdGEuVGV4dFZhbHVlID0gdGhpcy5pbnB1dFZhbHVlO1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYXBwLWRpYWxvZ1wiPlxyXG4gICAgPGgyPnt7IHRpdGxlIH19PC9oMj5cclxuICAgIDxsYWJlbD57eyBtZXNzYWdlIH19PC9sYWJlbD5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgc3R5bGU9XCJtaW4td2lkdGg6MTAwJVwiIGNsYXNzPVwibXQxMFwiPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXJcIiBhZG1pbkF1dG9Gb2N1cyB2YWx1ZT1cIlwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJtdDIwXCI+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2FuY2VsKClcIiBjbGFzcz1cImxlZnRcIiBtYXQtcmFpc2VkLWJ1dHRvbj57eyBidXR0b25DYW5jZWwgfX08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY29uZmlybSgpXCIgY2xhc3M9XCJyaWdodFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPk9LPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvZGl2PiJdfQ==