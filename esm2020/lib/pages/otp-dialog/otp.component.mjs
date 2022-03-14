import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
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
        }
        else {
            this.buttonCancel = 'Cancel';
            this.resendOTPpLabel = 'Send me a new code';
        }
    }
    ngOnInit() { }
    cancel() {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    }
    async resendOTP() {
        this.resendRequested.emit();
    }
    closeDialog() {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    }
}
/** @nocollapse */ /** @nocollapse */ OtpComponent.ɵfac = function OtpComponent_Factory(t) { return new (t || OtpComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ /** @nocollapse */ OtpComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: OtpComponent, selectors: [["otp-dialog"]], decls: 19, vars: 6, consts: [[1, "app-dialog"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", "type", "password", 3, "placeholder", "ngModel", "ngModelChange"], [1, "mt20"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "10px 0px 0px 30px"], ["kendoButton", "", 2, "background", "#e77b2d", "padding", "4px 12px 4px 12px", "background", "#e77b2d", "color", "#fff", "font-size", "14px", "border-radius", "0px", "border-color", "rgba(0, 0, 0, 0)", 3, "click"], [2, "letter-spacing", "3px"], [2, "letter-spacing", "3px", "text-transform", "uppercase"], [2, "display", "flex", "margin-top", "40px", "justify-content", "flex-end"], [1, "link", 3, "click"]], template: function OtpComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(17, "u");
        i0.ɵɵtext(18);
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
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate(ctx.resendOTPpLabel);
    } }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [".right[_ngcontent-%COMP%]{float:right}.mt40[_ngcontent-%COMP%]{margin-top:40px}.mt20[_ngcontent-%COMP%]{margin-top:20px}.ml40[_ngcontent-%COMP%]{margin-left:40px}.link[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OtpComponent, [{
        type: Component,
        args: [{ selector: 'otp-dialog', template: "<div class=\"app-dialog\">\r\n    <h2>{{ title }}</h2>\r\n    <label>{{ message }}</label>\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder\" adminAutoFocus value=\"\" [(ngModel)]=\"inputValue\" type=\"password\" />\r\n    </mat-form-field>\r\n\r\n    <div class=\"mt20\">\r\n        <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 10px 0px 0px 30px;\">\r\n            <button kendoButton (click)=\"cancel()\" style=\" background: #e77b2d;\r\n                    padding: 4px 12px 4px 12px;\r\n                    background: #e77b2d;\r\n                    color: #fff;\r\n                    font-size: 14px;\r\n                    border-radius: 0px;\r\n                    border-color: rgba(0, 0, 0, 0);\">\r\n            <span style=\"letter-spacing: 3px; \">{{ buttonCancel }}</span>\r\n            </button>\r\n            <button kendoButton (click)=\"closeDialog()\" style=\" background: #e77b2d;\r\n                    padding: 4px 12px 4px 12px;\r\n                    background: #e77b2d;\r\n                    color: #fff;\r\n                    font-size: 14px;\r\n                    border-radius: 0px;\r\n                    border-color: rgba(0, 0, 0, 0);\">\r\n            <span style=\"letter-spacing: 3px; text-transform: uppercase\"> OK </span>\r\n        </button>\r\n        </div>\r\n    </div>\r\n    <div style=\"display: flex; margin-top: 40px; justify-content: flex-end\">\r\n        <p class=\"link\" (click)=\"resendOTP()\">\r\n            <u>{{ resendOTPpLabel }}</u>\r\n        </p>\r\n    </div>\r\n</div>", styles: [".right{float:right}.mt40{margin-top:40px}.mt20{margin-top:20px}.ml40{margin-left:40px}.link{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}\n"] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9vdHAtZGlhbG9nL290cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvb3RwLWRpYWxvZy9vdHAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBZ0IsZUFBZSxFQUErQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7QUFPdEgsTUFBTSxPQUFPLFlBQVk7SUFVdkIsWUFDUyxXQUF1QyxFQUNiLElBQVM7UUFEbkMsZ0JBQVcsR0FBWCxXQUFXLENBQTRCO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBSztRQUg1QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFLbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQ25HLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUkseUJBQXlCLENBQUM7U0FDbkQ7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUksb0JBQW9CLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQsUUFBUSxLQUFLLENBQUM7SUFFUCxNQUFNO1FBRVgsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxLQUFLLENBQUMsU0FBUztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDUSxXQUFXO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OzhHQTFDVSxZQUFZLDhEQVliLGVBQWU7aUhBWmQsWUFBWTtRQ1J6Qiw4QkFBd0I7UUFDcEIsMEJBQUk7UUFBQSxZQUFXO1FBQUEsaUJBQUs7UUFDcEIsNkJBQU87UUFBQSxZQUFhO1FBQUEsaUJBQVE7UUFFNUIseUNBQW9EO1FBQ2hELGdDQUErRztRQUEzQyx5SUFBd0I7UUFBNUYsaUJBQStHO1FBQ25ILGlCQUFpQjtRQUVqQiw4QkFBa0I7UUFDZCw4QkFBb0g7UUFDaEgsaUNBTXlDO1FBTnJCLHlGQUFTLFlBQVEsSUFBQztRQU90QyxnQ0FBb0M7UUFBQSxhQUFrQjtRQUFBLGlCQUFPO1FBQzdELGlCQUFTO1FBQ1Qsa0NBTXlDO1FBTnJCLDBGQUFTLGlCQUFhLElBQUM7UUFPM0MsZ0NBQTZEO1FBQUMscUJBQUc7UUFBQSxpQkFBTztRQUM1RSxpQkFBUztRQUNULGlCQUFNO1FBQ1YsaUJBQU07UUFDTiwrQkFBd0U7UUFDcEUsNkJBQXNDO1FBQXRCLHFGQUFTLGVBQVcsSUFBQztRQUNqQywwQkFBRztRQUFBLGFBQXFCO1FBQUEsaUJBQUk7UUFDaEMsaUJBQUk7UUFDUixpQkFBTTtRQUNWLGlCQUFNOztRQWxDRSxlQUFXO1FBQVgsK0JBQVc7UUFDUixlQUFhO1FBQWIsaUNBQWE7UUFHQSxlQUEyQjtRQUEzQiw2Q0FBMkIsMkJBQUE7UUFZSCxlQUFrQjtRQUFsQixzQ0FBa0I7UUFlbkQsZUFBcUI7UUFBckIseUNBQXFCOzt1RkR4QnZCLFlBQVk7Y0FOeEIsU0FBUzsyQkFDRSxZQUFZOztzQkFpQm5CLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nTW9kdWxlLCBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb3RwLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL290cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb3RwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE90cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBhY2NuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgcGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBwdWJsaWMgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBidXR0b25DYW5jZWw6IHN0cmluZztcclxuICBwdWJsaWMgcmVzZW5kT1RQcExhYmVsOiBzdHJpbmc7XHJcbiAgcmVzZW5kUmVxdWVzdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8T3RwQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9IGRhdGEuVGl0bGU7XHJcbiAgICB0aGlzLmFjY25hbWUgPSBkYXRhLkFjY291bnROYW1lO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gZGF0YS5NZXNzYWdlO1xyXG4gICAgdGhpcy5wbGFjZUhvbGRlciA9IGRhdGEuUGxhY2VIb2xkZXI7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSBkYXRhLlRleHRWYWx1ZTtcclxuICAgIGlmIChuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdCcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQtSVQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUNIJykge1xyXG4gICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdBbm51bGxhJztcclxuICAgICAgdGhpcy5yZXNlbmRPVFBwTGFiZWwgID0gJ0ludmlhbWkgdW4gbnVvdm8gY29kaWNlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gJ0NhbmNlbCc7XHJcbiAgICAgIHRoaXMucmVzZW5kT1RQcExhYmVsICA9ICdTZW5kIG1lIGEgbmV3IGNvZGUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgcHVibGljIGNhbmNlbCgpIHtcclxuXHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAgcHVibGljIGFzeW5jIHJlc2VuZE9UUCgpIHtcclxuICAgICB0aGlzLnJlc2VuZFJlcXVlc3RlZC5lbWl0KCk7XHJcbiAgfVxyXG4gICAgcHVibGljIGNsb3NlRGlhbG9nKCkge1xyXG4gIHRoaXMuZGF0YS5UZXh0VmFsdWUgPSB0aGlzLmlucHV0VmFsdWU7XHJcbiAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYXBwLWRpYWxvZ1wiPlxyXG4gICAgPGgyPnt7IHRpdGxlIH19PC9oMj5cclxuICAgIDxsYWJlbD57eyBtZXNzYWdlIH19PC9sYWJlbD5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgc3R5bGU9XCJtaW4td2lkdGg6MTAwJVwiIGNsYXNzPVwibXQxMFwiPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXJcIiBhZG1pbkF1dG9Gb2N1cyB2YWx1ZT1cIlwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJtdDIwXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6IDEwcHggMHB4IDBweCAzMHB4O1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIChjbGljayk9XCJjYW5jZWwoKVwiIHN0eWxlPVwiIGJhY2tncm91bmQ6ICNlNzdiMmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHggNHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U3N2IyZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJsZXR0ZXItc3BhY2luZzogM3B4OyBcIj57eyBidXR0b25DYW5jZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIChjbGljayk9XCJjbG9zZURpYWxvZygpXCIgc3R5bGU9XCIgYmFja2dyb3VuZDogI2U3N2IyZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweCA0cHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTc3YjJkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImxldHRlci1zcGFjaW5nOiAzcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcIj4gT0sgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgbWFyZ2luLXRvcDogNDBweDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwibGlua1wiIChjbGljayk9XCJyZXNlbmRPVFAoKVwiPlxyXG4gICAgICAgICAgICA8dT57eyByZXNlbmRPVFBwTGFiZWwgfX08L3U+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==