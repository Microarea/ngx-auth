import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@progress/kendo-angular-label";
import * as i3 from "@progress/kendo-angular-inputs";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/checkbox";
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
            this.alternativelbl = 'Usa metodo alternativo';
        }
        else {
            this.buttonCancel = 'Cancel';
            this.resendOTPpLabel = 'Send me a new code';
            this.alternativelbl = 'Use alternative way';
        }
        this.alternative = false;
    }
    ngOnInit() { }
    cancel() {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    }
    async resendOTP() {
        this.resendRequested.emit(this.alternative);
    }
    closeDialog() {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    }
}
/** @nocollapse */ /** @nocollapse */ OtpComponent.ɵfac = function OtpComponent_Factory(t) { return new (t || OtpComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ /** @nocollapse */ OtpComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: OtpComponent, selectors: [["otp-dialog"]], decls: 25, vars: 8, consts: [[1, "app-dialog"], [1, "title"], [1, "description", 2, "width", "350px"], [1, "border-bottom", 3, "text"], ["kendoTextBox", "", "name", "accountName", "type", "password", 1, "normal-state", 3, "ngModel", "ngModelChange"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "click"], [2, "display", "flex", "margin-top", "40px", "justify-content", "flex-end"], [1, "link", 3, "click"], [2, "display", "flex", "margin-top", "20px", "justify-content", "flex-end"], [1, "link"], ["name", "alternative", 3, "ngModel", "ngModelChange"], ["translate", ""]], template: function OtpComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", 2);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "kendo-floatinglabel", 3)(6, "input", 4);
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
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(20, "div", 12)(21, "p", 13)(22, "mat-checkbox", 14);
        i0.ɵɵlistener("ngModelChange", function OtpComponent_Template_mat_checkbox_ngModelChange_22_listener($event) { return ctx.alternative = $event; });
        i0.ɵɵelementStart(23, "span", 15);
        i0.ɵɵtext(24);
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("text", ctx.placeHolder);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.inputValue);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.buttonCancel);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate(ctx.resendOTPpLabel);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.alternative);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.alternativelbl);
    } }, directives: [i2.FloatingLabelComponent, i3.TextBoxDirective, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatCheckbox], styles: [".mt20[_ngcontent-%COMP%]{margin-top:20px}  .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}  .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}  .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#005890}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OtpComponent, [{
        type: Component,
        args: [{ selector: 'otp-dialog', template: "<div class=\"app-dialog\">\r\n    <h1 class=\"title\">{{ title }}</h1>\r\n    <p class=\"description\" style=\"width: 350px\">{{ message }}</p>\r\n\r\n    <kendo-floatinglabel [text]=\"placeHolder\" class=\"border-bottom\">\r\n        <input kendoTextBox [(ngModel)]=\"inputValue\" name=\"accountName\" type=\"password\" class=\"normal-state\" />\r\n    </kendo-floatinglabel>\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 30px\">\r\n        <div class=\"login-footer\">\r\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\r\n                <span>{{ buttonCancel }}</span>\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n            <button kendoButton (click)=\"closeDialog()\" class=\"buttons ok-button\">\r\n                <span> OK </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"display: flex; margin-top: 40px; justify-content: flex-end\">\r\n        <p class=\"link\" (click)=\"resendOTP()\">\r\n            <u>{{ resendOTPpLabel }}</u>\r\n        </p>\r\n    </div>\r\n\r\n    <div style=\"display: flex; margin-top: 20px; justify-content: flex-end\">\r\n      <p class=\"link\">\r\n        <mat-checkbox [(ngModel)]=\"alternative\" name=\"alternative\">\r\n          <span translate>{{ alternativelbl }}</span>\r\n        </mat-checkbox>\r\n      </p>\r\n    </div>\r\n</div>\r\n", styles: [".mt20{margin-top:20px}::ng-deep .mat-checkbox{font-family:Open Sans,sans-serif;font-size:16px;font-weight:300}::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03!important;background-color:#005890!important}::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#005890}\n"] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9vdHAtZGlhbG9nL290cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvb3RwLWRpYWxvZy9vdHAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBZ0IsZUFBZSxFQUErQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBT3RILE1BQU0sT0FBTyxZQUFZO0lBWXZCLFlBQ1MsV0FBdUMsRUFDYixJQUFTO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUE0QjtRQUNiLFNBQUksR0FBSixJQUFJLENBQUs7UUFINUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsTUFBTSxzQkFBc0IsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFdEUsSUFBSSxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBSSx5QkFBeUIsQ0FBQztZQUNsRCxJQUFJLENBQUMsY0FBYyxHQUFHLHdCQUF3QixDQUFDO1NBQ2hEO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFJLG9CQUFvQixDQUFDO1lBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUM7U0FDN0M7UUFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUSxLQUFLLENBQUM7SUFFUCxNQUFNO1FBRVgsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxLQUFLLENBQUMsU0FBUztRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNRLFdBQVc7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OEdBakRVLFlBQVksOERBY2IsZUFBZTtpSEFkZCxZQUFZO1FDUnpCLDhCQUF3QixZQUFBO1FBQ0YsWUFBVztRQUFBLGlCQUFLO1FBQ2xDLDRCQUE0QztRQUFBLFlBQWE7UUFBQSxpQkFBSTtRQUU3RCw4Q0FBZ0UsZUFBQTtRQUN4Qyx5SUFBd0I7UUFBNUMsaUJBQXVHLEVBQUE7UUFHM0csOEJBQTBILGFBQUEsZ0JBQUE7UUFFbEUseUZBQVMsWUFBUSxJQUFDO1FBQzlELDZCQUFNO1FBQUEsYUFBa0I7UUFBQSxpQkFBTyxFQUFBLEVBQUE7UUFJdkMsK0JBQTJFLGlCQUFBO1FBQ25ELDBGQUFTLGlCQUFhLElBQUM7UUFDdkMsNkJBQU07UUFBQyxxQkFBRztRQUFBLGlCQUFPLEVBQUEsRUFBQSxFQUFBO1FBSzdCLGdDQUF3RSxhQUFBO1FBQ3BELHFGQUFTLGVBQVcsSUFBQztRQUNqQywwQkFBRztRQUFBLGFBQXFCO1FBQUEsaUJBQUksRUFBQSxFQUFBO1FBSXBDLGdDQUF3RSxhQUFBLHdCQUFBO1FBRXRELGtKQUF5QjtRQUNyQyxpQ0FBZ0I7UUFBQSxhQUFvQjtRQUFBLGlCQUFPLEVBQUEsRUFBQSxFQUFBLEVBQUE7O1FBOUIvQixlQUFXO1FBQVgsK0JBQVc7UUFDZSxlQUFhO1FBQWIsaUNBQWE7UUFFcEMsZUFBb0I7UUFBcEIsc0NBQW9CO1FBQ2pCLGVBQXdCO1FBQXhCLHdDQUF3QjtRQU05QixlQUFrQjtRQUFsQixzQ0FBa0I7UUFhekIsZUFBcUI7UUFBckIseUNBQXFCO1FBTWQsZUFBeUI7UUFBekIseUNBQXlCO1FBQ3JCLGVBQW9CO1FBQXBCLHdDQUFvQjs7dUZEdkJqQyxZQUFZO2NBTnhCLFNBQVM7MkJBQ0UsWUFBWTs7c0JBbUJuQixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ290cC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vdHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL290cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPdHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgYWNjbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgcHVibGljIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBwdWJsaWMgYnV0dG9uQ2FuY2VsOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlc2VuZE9UUHBMYWJlbDogc3RyaW5nO1xyXG4gICAgcHVibGljIGFsdGVybmF0aXZlOiBib29sZWFuO1xyXG4gIHB1YmxpYyBhbHRlcm5hdGl2ZWxibDogc3RyaW5nO1xyXG4gIHJlc2VuZFJlcXVlc3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE90cENvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSBkYXRhLlRpdGxlO1xyXG4gICAgdGhpcy5hY2NuYW1lID0gZGF0YS5BY2NvdW50TmFtZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkYXRhLlBsYWNlSG9sZGVyO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YS5UZXh0VmFsdWU7XHJcbiAgICBjb25zdCBjdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xyXG4gICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdBbm51bGxhJztcclxuICAgICAgdGhpcy5yZXNlbmRPVFBwTGFiZWwgID0gJ0ludmlhbWkgdW4gbnVvdm8gY29kaWNlJztcclxuICAgICAgdGhpcy5hbHRlcm5hdGl2ZWxibCA9ICdVc2EgbWV0b2RvIGFsdGVybmF0aXZvJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gJ0NhbmNlbCc7XHJcbiAgICAgIHRoaXMucmVzZW5kT1RQcExhYmVsICA9ICdTZW5kIG1lIGEgbmV3IGNvZGUnO1xyXG4gICAgICB0aGlzLmFsdGVybmF0aXZlbGJsID0gJ1VzZSBhbHRlcm5hdGl2ZSB3YXknO1xyXG4gICAgfVxyXG4gICAgICB0aGlzLmFsdGVybmF0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBwdWJsaWMgY2FuY2VsKCkge1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gICBwdWJsaWMgYXN5bmMgcmVzZW5kT1RQKCkge1xyXG4gICAgICAgdGhpcy5yZXNlbmRSZXF1ZXN0ZWQuZW1pdCh0aGlzLmFsdGVybmF0aXZlKTtcclxuICB9XHJcbiAgICBwdWJsaWMgY2xvc2VEaWFsb2coKSB7XHJcbiAgdGhpcy5kYXRhLlRleHRWYWx1ZSA9IHRoaXMuaW5wdXRWYWx1ZTtcclxuICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhcHAtZGlhbG9nXCI+XHJcbiAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9oMT5cclxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIndpZHRoOiAzNTBweFwiPnt7IG1lc3NhZ2UgfX08L3A+XHJcblxyXG4gICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgW3RleHRdPVwicGxhY2VIb2xkZXJcIiBjbGFzcz1cImJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICA8aW5wdXQga2VuZG9UZXh0Qm94IFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIG5hbWU9XCJhY2NvdW50TmFtZVwiIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwibm9ybWFsLXN0YXRlXCIgLz5cclxuICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cclxuXHJcbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDAgMXB4OyBtYXJnaW4tdG9wOiAzMHB4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBiYWNrLWJ1dHRvblwiIChjbGljayk9XCJjYW5jZWwoKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgYnV0dG9uQ2FuY2VsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIChjbGljayk9XCJjbG9zZURpYWxvZygpXCIgY2xhc3M9XCJidXR0b25zIG9rLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+IE9LIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgbWFyZ2luLXRvcDogNDBweDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwibGlua1wiIChjbGljayk9XCJyZXNlbmRPVFAoKVwiPlxyXG4gICAgICAgICAgICA8dT57eyByZXNlbmRPVFBwTGFiZWwgfX08L3U+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDIwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgPHAgY2xhc3M9XCJsaW5rXCI+XHJcbiAgICAgICAgPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImFsdGVybmF0aXZlXCIgbmFtZT1cImFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICA8c3BhbiB0cmFuc2xhdGU+e3sgYWx0ZXJuYXRpdmVsYmwgfX08L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19