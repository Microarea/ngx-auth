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
        const currentBrowserLanguage = navigator.language.toLocaleLowerCase();
        if (currentBrowserLanguage.startsWith('it')) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9vdHAtZGlhbG9nL290cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvb3RwLWRpYWxvZy9vdHAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBZ0IsZUFBZSxFQUErQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7QUFPdEgsTUFBTSxPQUFPLFlBQVk7SUFVdkIsWUFDUyxXQUF1QyxFQUNiLElBQVM7UUFEbkMsZ0JBQVcsR0FBWCxXQUFXLENBQTRCO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBSztRQUg1QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFLbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxNQUFNLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV0RSxJQUFJLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxHQUFJLHlCQUF5QixDQUFDO1NBQ25EO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFJLG9CQUFvQixDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVELFFBQVEsS0FBSyxDQUFDO0lBRVAsTUFBTTtRQUVYLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sS0FBSyxDQUFDLFNBQVM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ1EsV0FBVztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs4R0E1Q1UsWUFBWSw4REFZYixlQUFlO2lIQVpkLFlBQVk7UUNSekIsOEJBQXdCO1FBQ3BCLDBCQUFJO1FBQUEsWUFBVztRQUFBLGlCQUFLO1FBQ3BCLDZCQUFPO1FBQUEsWUFBYTtRQUFBLGlCQUFRO1FBRTVCLHlDQUFvRDtRQUNoRCxnQ0FBK0c7UUFBM0MseUlBQXdCO1FBQTVGLGlCQUErRztRQUNuSCxpQkFBaUI7UUFFakIsOEJBQWtCO1FBQ2QsOEJBQW9IO1FBQ2hILGlDQU15QztRQU5yQix5RkFBUyxZQUFRLElBQUM7UUFPdEMsZ0NBQW9DO1FBQUEsYUFBa0I7UUFBQSxpQkFBTztRQUM3RCxpQkFBUztRQUNULGtDQU15QztRQU5yQiwwRkFBUyxpQkFBYSxJQUFDO1FBTzNDLGdDQUE2RDtRQUFDLHFCQUFHO1FBQUEsaUJBQU87UUFDNUUsaUJBQVM7UUFDVCxpQkFBTTtRQUNWLGlCQUFNO1FBQ04sK0JBQXdFO1FBQ3BFLDZCQUFzQztRQUF0QixxRkFBUyxlQUFXLElBQUM7UUFDakMsMEJBQUc7UUFBQSxhQUFxQjtRQUFBLGlCQUFJO1FBQ2hDLGlCQUFJO1FBQ1IsaUJBQU07UUFDVixpQkFBTTs7UUFsQ0UsZUFBVztRQUFYLCtCQUFXO1FBQ1IsZUFBYTtRQUFiLGlDQUFhO1FBR0EsZUFBMkI7UUFBM0IsNkNBQTJCLDJCQUFBO1FBWUgsZUFBa0I7UUFBbEIsc0NBQWtCO1FBZW5ELGVBQXFCO1FBQXJCLHlDQUFxQjs7dUZEeEJ2QixZQUFZO2NBTnhCLFNBQVM7MkJBQ0UsWUFBWTs7c0JBaUJuQixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ290cC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vdHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL290cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPdHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgYWNjbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgcHVibGljIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBwdWJsaWMgYnV0dG9uQ2FuY2VsOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlc2VuZE9UUHBMYWJlbDogc3RyaW5nO1xyXG4gIHJlc2VuZFJlcXVlc3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE90cENvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSBkYXRhLlRpdGxlO1xyXG4gICAgdGhpcy5hY2NuYW1lID0gZGF0YS5BY2NvdW50TmFtZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkYXRhLlBsYWNlSG9sZGVyO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YS5UZXh0VmFsdWU7XHJcbiAgICBjb25zdCBjdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xyXG4gICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdBbm51bGxhJztcclxuICAgICAgdGhpcy5yZXNlbmRPVFBwTGFiZWwgID0gJ0ludmlhbWkgdW4gbnVvdm8gY29kaWNlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gJ0NhbmNlbCc7XHJcbiAgICAgIHRoaXMucmVzZW5kT1RQcExhYmVsICA9ICdTZW5kIG1lIGEgbmV3IGNvZGUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgcHVibGljIGNhbmNlbCgpIHtcclxuXHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAgcHVibGljIGFzeW5jIHJlc2VuZE9UUCgpIHtcclxuICAgICB0aGlzLnJlc2VuZFJlcXVlc3RlZC5lbWl0KCk7XHJcbiAgfVxyXG4gICAgcHVibGljIGNsb3NlRGlhbG9nKCkge1xyXG4gIHRoaXMuZGF0YS5UZXh0VmFsdWUgPSB0aGlzLmlucHV0VmFsdWU7XHJcbiAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYXBwLWRpYWxvZ1wiPlxyXG4gICAgPGgyPnt7IHRpdGxlIH19PC9oMj5cclxuICAgIDxsYWJlbD57eyBtZXNzYWdlIH19PC9sYWJlbD5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgc3R5bGU9XCJtaW4td2lkdGg6MTAwJVwiIGNsYXNzPVwibXQxMFwiPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXJcIiBhZG1pbkF1dG9Gb2N1cyB2YWx1ZT1cIlwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJtdDIwXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6IDEwcHggMHB4IDBweCAzMHB4O1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIChjbGljayk9XCJjYW5jZWwoKVwiIHN0eWxlPVwiIGJhY2tncm91bmQ6ICNlNzdiMmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHggNHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U3N2IyZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJsZXR0ZXItc3BhY2luZzogM3B4OyBcIj57eyBidXR0b25DYW5jZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIChjbGljayk9XCJjbG9zZURpYWxvZygpXCIgc3R5bGU9XCIgYmFja2dyb3VuZDogI2U3N2IyZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweCA0cHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTc3YjJkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImxldHRlci1zcGFjaW5nOiAzcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcIj4gT0sgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgbWFyZ2luLXRvcDogNDBweDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwibGlua1wiIChjbGljayk9XCJyZXNlbmRPVFAoKVwiPlxyXG4gICAgICAgICAgICA8dT57eyByZXNlbmRPVFBwTGFiZWwgfX08L3U+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==