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
/** @nocollapse */ /** @nocollapse */ OtpComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: OtpComponent, selectors: [["otp-dialog"]], decls: 19, vars: 6, consts: [[1, "app-dialog"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", "type", "password", 1, "normal-state", 3, "placeholder", "ngModel", "ngModelChange"], [1, "mt20"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "10px 0px 0px 30px"], ["kendoButton", "", 1, "buttons", 3, "click"], [2, "display", "flex", "margin-top", "40px", "justify-content", "flex-end"], [1, "link", 3, "click"]], template: function OtpComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h2");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "label");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-form-field", 1)(6, "input", 2);
        i0.ɵɵlistener("ngModelChange", function OtpComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputValue = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "div", 3)(8, "div", 4)(9, "button", 5);
        i0.ɵɵlistener("click", function OtpComponent_Template_button_click_9_listener() { return ctx.cancel(); });
        i0.ɵɵelementStart(10, "span");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(12, "button", 5);
        i0.ɵɵlistener("click", function OtpComponent_Template_button_click_12_listener() { return ctx.closeDialog(); });
        i0.ɵɵelementStart(13, "span");
        i0.ɵɵtext(14, " OK ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(15, "div", 6)(16, "p", 7);
        i0.ɵɵlistener("click", function OtpComponent_Template_p_click_16_listener() { return ctx.resendOTP(); });
        i0.ɵɵelementStart(17, "u");
        i0.ɵɵtext(18);
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
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate(ctx.resendOTPpLabel);
    } }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [".mt20[_ngcontent-%COMP%]{margin-top:20px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OtpComponent, [{
        type: Component,
        args: [{ selector: 'otp-dialog', template: "<div class=\"app-dialog\">\n    <h2>{{ title }}</h2>\n    <label>{{ message }}</label>\n\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\n        <input matInput [placeholder]=\"placeHolder\" adminAutoFocus value=\"\" [(ngModel)]=\"inputValue\" type=\"password\"\n            class=\"normal-state\" />\n    </mat-form-field>\n\n    <div class=\"mt20\">\n        <div\n            style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 10px 0px 0px 30px;\">\n            <button kendoButton (click)=\"cancel()\" class=\"buttons\">\n                <span>{{ buttonCancel }}</span>\n            </button>\n            <button kendoButton (click)=\"closeDialog()\" class=\"buttons\">\n                <span> OK </span>\n            </button>\n        </div>\n    </div>\n    <div style=\"display: flex; margin-top: 40px; justify-content: flex-end\">\n        <p class=\"link\" (click)=\"resendOTP()\">\n            <u>{{ resendOTPpLabel }}</u>\n        </p>\n    </div>\n</div>", styles: [".mt20{margin-top:20px}\n"] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9vdHAtZGlhbG9nL290cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvb3RwLWRpYWxvZy9vdHAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBZ0IsZUFBZSxFQUErQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7QUFPdEgsTUFBTSxPQUFPLFlBQVk7SUFVdkIsWUFDUyxXQUF1QyxFQUNiLElBQVM7UUFEbkMsZ0JBQVcsR0FBWCxXQUFXLENBQTRCO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBSztRQUg1QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFLbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxNQUFNLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV0RSxJQUFJLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxHQUFJLHlCQUF5QixDQUFDO1NBQ25EO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFJLG9CQUFvQixDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVELFFBQVEsS0FBSyxDQUFDO0lBRVAsTUFBTTtRQUVYLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sS0FBSyxDQUFDLFNBQVM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ1EsV0FBVztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs4R0E1Q1UsWUFBWSw4REFZYixlQUFlO2lIQVpkLFlBQVk7UUNSekIsOEJBQXdCLFNBQUE7UUFDaEIsWUFBVztRQUFBLGlCQUFLO1FBQ3BCLDZCQUFPO1FBQUEsWUFBYTtRQUFBLGlCQUFRO1FBRTVCLHlDQUFvRCxlQUFBO1FBQ29CLHlJQUF3QjtRQUE1RixpQkFDMkIsRUFBQTtRQUcvQiw4QkFBa0IsYUFBQSxnQkFBQTtRQUdVLHlGQUFTLFlBQVEsSUFBQztRQUNsQyw2QkFBTTtRQUFBLGFBQWtCO1FBQUEsaUJBQU8sRUFBQTtRQUVuQyxrQ0FBNEQ7UUFBeEMsMEZBQVMsaUJBQWEsSUFBQztRQUN2Qyw2QkFBTTtRQUFDLHFCQUFHO1FBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUE7UUFJN0IsK0JBQXdFLFlBQUE7UUFDcEQscUZBQVMsZUFBVyxJQUFDO1FBQ2pDLDBCQUFHO1FBQUEsYUFBcUI7UUFBQSxpQkFBSSxFQUFBLEVBQUEsRUFBQTs7UUFyQmhDLGVBQVc7UUFBWCwrQkFBVztRQUNSLGVBQWE7UUFBYixpQ0FBYTtRQUdBLGVBQTJCO1FBQTNCLDZDQUEyQiwyQkFBQTtRQVE3QixlQUFrQjtRQUFsQixzQ0FBa0I7UUFTekIsZUFBcUI7UUFBckIseUNBQXFCOzt1RkRkdkIsWUFBWTtjQU54QixTQUFTOzJCQUNFLFlBQVk7O3NCQWlCbkIsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nTW9kdWxlLCBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvdHAtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL290cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL290cC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBPdHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICBwdWJsaWMgYWNjbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICBwdWJsaWMgcGxhY2VIb2xkZXI6IHN0cmluZztcbiAgcHVibGljIGlucHV0VmFsdWU6IHN0cmluZztcbiAgcHVibGljIGJ1dHRvbkNhbmNlbDogc3RyaW5nO1xuICBwdWJsaWMgcmVzZW5kT1RQcExhYmVsOiBzdHJpbmc7XG4gIHJlc2VuZFJlcXVlc3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8T3RwQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcbiAgKSB7XG4gICAgdGhpcy50aXRsZSA9IGRhdGEuVGl0bGU7XG4gICAgdGhpcy5hY2NuYW1lID0gZGF0YS5BY2NvdW50TmFtZTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLk1lc3NhZ2U7XG4gICAgdGhpcy5wbGFjZUhvbGRlciA9IGRhdGEuUGxhY2VIb2xkZXI7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YS5UZXh0VmFsdWU7XG4gICAgY29uc3QgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xuICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQW5udWxsYSc7XG4gICAgICB0aGlzLnJlc2VuZE9UUHBMYWJlbCAgPSAnSW52aWFtaSB1biBudW92byBjb2RpY2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdDYW5jZWwnO1xuICAgICAgdGhpcy5yZXNlbmRPVFBwTGFiZWwgID0gJ1NlbmQgbWUgYSBuZXcgY29kZSc7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBwdWJsaWMgY2FuY2VsKCkge1xuXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcbiAgfVxuXG4gICBwdWJsaWMgYXN5bmMgcmVzZW5kT1RQKCkge1xuICAgICB0aGlzLnJlc2VuZFJlcXVlc3RlZC5lbWl0KCk7XG4gIH1cbiAgICBwdWJsaWMgY2xvc2VEaWFsb2coKSB7XG4gIHRoaXMuZGF0YS5UZXh0VmFsdWUgPSB0aGlzLmlucHV0VmFsdWU7XG4gIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImFwcC1kaWFsb2dcIj5cbiAgICA8aDI+e3sgdGl0bGUgfX08L2gyPlxuICAgIDxsYWJlbD57eyBtZXNzYWdlIH19PC9sYWJlbD5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBzdHlsZT1cIm1pbi13aWR0aDoxMDAlXCIgY2xhc3M9XCJtdDEwXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXJcIiBhZG1pbkF1dG9Gb2N1cyB2YWx1ZT1cIlwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzcz1cIm5vcm1hbC1zdGF0ZVwiIC8+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxkaXYgY2xhc3M9XCJtdDIwXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47cGFkZGluZzogMTBweCAwcHggMHB4IDMwcHg7XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIChjbGljayk9XCJjYW5jZWwoKVwiIGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGJ1dHRvbkNhbmNlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiAoY2xpY2spPVwiY2xvc2VEaWFsb2coKVwiIGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiBPSyA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDQwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJsaW5rXCIgKGNsaWNrKT1cInJlc2VuZE9UUCgpXCI+XG4gICAgICAgICAgICA8dT57eyByZXNlbmRPVFBwTGFiZWwgfX08L3U+XG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==