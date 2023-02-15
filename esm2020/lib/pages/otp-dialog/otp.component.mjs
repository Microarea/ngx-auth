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
/** @nocollapse */ /** @nocollapse */ OtpComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: OtpComponent, selectors: [["otp-dialog"]], decls: 20, vars: 6, consts: [[1, "app-dialog"], [1, "title"], [1, "description", 2, "width", "350px"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", "type", "password", 1, "normal-state", 3, "placeholder", "ngModel", "ngModelChange"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "click"], [2, "display", "flex", "margin-top", "40px", "justify-content", "flex-end"], [1, "link", 3, "click"]], template: function OtpComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", 2);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-form-field", 3)(6, "input", 4);
        i0.ɵɵlistener("ngModelChange", function OtpComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputValue = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "div", 5)(8, "div", 6)(9, "button", 7);
        i0.ɵɵlistener("click", function OtpComponent_Template_button_click_9_listener() { return ctx.cancel(); });
        i0.ɵɵelementStart(10, "span");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(12, "div", 8)(13, "button", 9);
        i0.ɵɵlistener("click", function OtpComponent_Template_button_click_13_listener() { return ctx.closeDialog(); });
        i0.ɵɵelementStart(14, "span");
        i0.ɵɵtext(15, " OK ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(16, "div", 10)(17, "p", 11);
        i0.ɵɵlistener("click", function OtpComponent_Template_p_click_17_listener() { return ctx.resendOTP(); });
        i0.ɵɵelementStart(18, "u");
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", ctx.placeHolder)("ngModel", ctx.inputValue);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.buttonCancel);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate(ctx.resendOTPpLabel);
    } }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [".mt20[_ngcontent-%COMP%]{margin-top:20px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OtpComponent, [{
        type: Component,
        args: [{ selector: 'otp-dialog', template: "<div class=\"app-dialog\">\r\n    <h1 class=\"title\">{{ title }}</h1>\r\n    <p class=\"description\" style=\"width: 350px;\">{{ message }}</p>\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder\" adminAutoFocus value=\"\" [(ngModel)]=\"inputValue\" type=\"password\"\r\n            class=\"normal-state\" />\r\n    </mat-form-field>\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 0 1px;\r\nmargin-top: 30px;\">\r\n\r\n        <div class=\"login-footer\">\r\n          <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\r\n            <span>{{ buttonCancel }}</span>\r\n          </button>\r\n        </div>\r\n\r\n            <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n            <button kendoButton (click)=\"closeDialog()\" class=\"buttons ok-button\">\r\n                <span> OK </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"display: flex; margin-top: 40px; justify-content: flex-end\">\r\n        <p class=\"link\" (click)=\"resendOTP()\">\r\n            <u>{{ resendOTPpLabel }}</u>\r\n        </p>\r\n    </div>\r\n</div>\r\n", styles: [".mt20{margin-top:20px}\n"] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9vdHAtZGlhbG9nL290cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvb3RwLWRpYWxvZy9vdHAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBZ0IsZUFBZSxFQUErQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7QUFPdEgsTUFBTSxPQUFPLFlBQVk7SUFVdkIsWUFDUyxXQUF1QyxFQUNiLElBQVM7UUFEbkMsZ0JBQVcsR0FBWCxXQUFXLENBQTRCO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBSztRQUg1QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFLbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxNQUFNLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV0RSxJQUFJLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxHQUFJLHlCQUF5QixDQUFDO1NBQ25EO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFJLG9CQUFvQixDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVELFFBQVEsS0FBSyxDQUFDO0lBRVAsTUFBTTtRQUVYLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sS0FBSyxDQUFDLFNBQVM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ1EsV0FBVztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs4R0E1Q1UsWUFBWSw4REFZYixlQUFlO2lIQVpkLFlBQVk7UUNSekIsOEJBQXdCLFlBQUE7UUFDRixZQUFXO1FBQUEsaUJBQUs7UUFDbEMsNEJBQTZDO1FBQUEsWUFBYTtRQUFBLGlCQUFJO1FBRTlELHlDQUFvRCxlQUFBO1FBQ29CLHlJQUF3QjtRQUE1RixpQkFDMkIsRUFBQTtRQUcvQiw4QkFDZSxhQUFBLGdCQUFBO1FBR3VDLHlGQUFTLFlBQVEsSUFBQztRQUNoRSw2QkFBTTtRQUFBLGFBQWtCO1FBQUEsaUJBQU8sRUFBQSxFQUFBO1FBSS9CLCtCQUEyRSxpQkFBQTtRQUN2RCwwRkFBUyxpQkFBYSxJQUFDO1FBQ3ZDLDZCQUFNO1FBQUMscUJBQUc7UUFBQSxpQkFBTyxFQUFBLEVBQUEsRUFBQTtRQUs3QixnQ0FBd0UsYUFBQTtRQUNwRCxxRkFBUyxlQUFXLElBQUM7UUFDakMsMEJBQUc7UUFBQSxhQUFxQjtRQUFBLGlCQUFJLEVBQUEsRUFBQSxFQUFBOztRQTFCbEIsZUFBVztRQUFYLCtCQUFXO1FBQ2dCLGVBQWE7UUFBYixpQ0FBYTtRQUd0QyxlQUEyQjtRQUEzQiw2Q0FBMkIsMkJBQUE7UUFTakMsZUFBa0I7UUFBbEIsc0NBQWtCO1FBYXJCLGVBQXFCO1FBQXJCLHlDQUFxQjs7dUZEbkJ2QixZQUFZO2NBTnhCLFNBQVM7MkJBQ0UsWUFBWTs7c0JBaUJuQixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ290cC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vdHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL290cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPdHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgYWNjbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgcHVibGljIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBwdWJsaWMgYnV0dG9uQ2FuY2VsOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlc2VuZE9UUHBMYWJlbDogc3RyaW5nO1xyXG4gIHJlc2VuZFJlcXVlc3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE90cENvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSBkYXRhLlRpdGxlO1xyXG4gICAgdGhpcy5hY2NuYW1lID0gZGF0YS5BY2NvdW50TmFtZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkYXRhLlBsYWNlSG9sZGVyO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YS5UZXh0VmFsdWU7XHJcbiAgICBjb25zdCBjdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xyXG4gICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdBbm51bGxhJztcclxuICAgICAgdGhpcy5yZXNlbmRPVFBwTGFiZWwgID0gJ0ludmlhbWkgdW4gbnVvdm8gY29kaWNlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gJ0NhbmNlbCc7XHJcbiAgICAgIHRoaXMucmVzZW5kT1RQcExhYmVsICA9ICdTZW5kIG1lIGEgbmV3IGNvZGUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgcHVibGljIGNhbmNlbCgpIHtcclxuXHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAgcHVibGljIGFzeW5jIHJlc2VuZE9UUCgpIHtcclxuICAgICB0aGlzLnJlc2VuZFJlcXVlc3RlZC5lbWl0KCk7XHJcbiAgfVxyXG4gICAgcHVibGljIGNsb3NlRGlhbG9nKCkge1xyXG4gIHRoaXMuZGF0YS5UZXh0VmFsdWUgPSB0aGlzLmlucHV0VmFsdWU7XHJcbiAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYXBwLWRpYWxvZ1wiPlxyXG4gICAgPGgxIGNsYXNzPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvaDE+XHJcbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgc3R5bGU9XCJ3aWR0aDogMzUwcHg7XCI+e3sgbWVzc2FnZSB9fTwvcD5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgc3R5bGU9XCJtaW4td2lkdGg6MTAwJVwiIGNsYXNzPVwibXQxMFwiPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXJcIiBhZG1pbkF1dG9Gb2N1cyB2YWx1ZT1cIlwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwibm9ybWFsLXN0YXRlXCIgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6IDAgMXB4O1xyXG5tYXJnaW4tdG9wOiAzMHB4O1wiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBiYWNrLWJ1dHRvblwiIChjbGljayk9XCJjYW5jZWwoKVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57eyBidXR0b25DYW5jZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiAoY2xpY2spPVwiY2xvc2VEaWFsb2coKVwiIGNsYXNzPVwiYnV0dG9ucyBvay1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiBPSyA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDQwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImxpbmtcIiAoY2xpY2spPVwicmVzZW5kT1RQKClcIj5cclxuICAgICAgICAgICAgPHU+e3sgcmVzZW5kT1RQcExhYmVsIH19PC91PlxyXG4gICAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19