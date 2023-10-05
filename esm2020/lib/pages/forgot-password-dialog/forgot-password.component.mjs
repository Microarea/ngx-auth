import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@progress/kendo-angular-label";
import * as i3 from "@progress/kendo-angular-inputs";
import * as i4 from "@angular/forms";
export class ForgotPasswordComponent {
    constructor(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.title = data.Title;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.inputValue = data.TextValue;
        const currentBrowserLanguage = navigator.language.toLocaleLowerCase();
        if (currentBrowserLanguage.startsWith('it')) {
            this.cancelButton = 'ANNULLA';
            this.sendButton = "INVIA";
        }
        else {
            this.cancelButton = 'CANCEL';
            this.sendButton = "SEND";
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
/** @nocollapse */ /** @nocollapse */ ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ /** @nocollapse */ ForgotPasswordComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ForgotPasswordComponent, selectors: [["forgot-password-dialog"]], decls: 16, vars: 7, consts: [[1, "title"], [1, "description", 2, "width", "350px"], [1, "border-bottom", 3, "text"], ["kendoTextBox", "", "name", "accountName", "type", "text", 1, "normal-state", 3, "ngModel", "ngModelChange"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "disabled", "click"], [1, "login-footer"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "h1", 0);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", 1);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "kendo-floatinglabel", 2)(6, "input", 3);
        i0.ɵɵlistener("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputValue = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "div", 4)(8, "div", 5)(9, "button", 6);
        i0.ɵɵlistener("click", function ForgotPasswordComponent_Template_button_click_9_listener() { return ctx.confirm(); });
        i0.ɵɵelementStart(10, "span");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(12, "div", 7)(13, "button", 8);
        i0.ɵɵlistener("click", function ForgotPasswordComponent_Template_button_click_13_listener() { return ctx.cancel(); });
        i0.ɵɵelementStart(14, "span");
        i0.ɵɵtext(15);
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
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx.inputValue ? false : true);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.sendButton);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.cancelButton);
    } }, directives: [i2.FloatingLabelComponent, i3.TextBoxDirective, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotPasswordComponent, [{
        type: Component,
        args: [{ selector: 'forgot-password-dialog', template: "<div>\r\n    <h1 class=\"title\">{{ title }}</h1>\r\n    <p class=\"description\" style=\"width: 350px;\">{{ message }}</p>\r\n\r\n    <kendo-floatinglabel [text]=\"placeHolder\" class=\"border-bottom\">\r\n        <input kendoTextBox [(ngModel)]=\"inputValue\" name=\"accountName\" type=\"text\" class=\"normal-state\" />\r\n    </kendo-floatinglabel>\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 0 1px;\r\nmargin-top: 30px;\">\r\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n            <button kendoButton class=\"buttons ok-button\" (click)=\"confirm()\" [disabled]=\"inputValue ? false : true\">\r\n                <span>{{ sendButton }}</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\r\n                <span>{{ cancelButton }}</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n</div>", styles: [""] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQtZGlhbG9nL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvZm9yZ290LXBhc3N3b3JkLWRpYWxvZy9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0FBU3pFLE1BQU0sT0FBTyx1QkFBdUI7SUFTbEMsWUFDUyxXQUFrRCxFQUN4QixJQUFTO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUF1QztRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxNQUFNLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0RSxJQUFJLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsUUFBUSxLQUFLLENBQUM7SUFFUCxNQUFNO1FBRVgsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSxPQUFPO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7b0lBckNVLHVCQUF1Qiw4REFXeEIsZUFBZTs0SEFYZCx1QkFBdUI7UUNWcEMsMkJBQUssWUFBQTtRQUNpQixZQUFXO1FBQUEsaUJBQUs7UUFDbEMsNEJBQTZDO1FBQUEsWUFBYTtRQUFBLGlCQUFJO1FBRTlELDhDQUFnRSxlQUFBO1FBQ3hDLG9KQUF3QjtRQUE1QyxpQkFBbUcsRUFBQTtRQUd2Ryw4QkFDZSxhQUFBLGdCQUFBO1FBRXVDLG9HQUFTLGFBQVMsSUFBQztRQUM3RCw2QkFBTTtRQUFBLGFBQWdCO1FBQUEsaUJBQU8sRUFBQSxFQUFBO1FBR3JDLCtCQUEwQixpQkFBQTtRQUMwQixxR0FBUyxZQUFRLElBQUM7UUFDOUQsNkJBQU07UUFBQSxhQUFrQjtRQUFBLGlCQUFPLEVBQUEsRUFBQSxFQUFBLEVBQUE7O1FBaEJ6QixlQUFXO1FBQVgsK0JBQVc7UUFDZ0IsZUFBYTtRQUFiLGlDQUFhO1FBRXJDLGVBQW9CO1FBQXBCLHNDQUFvQjtRQUNqQixlQUF3QjtRQUF4Qix3Q0FBd0I7UUFNMEIsZUFBc0M7UUFBdEMsd0RBQXNDO1FBQzlGLGVBQWdCO1FBQWhCLG9DQUFnQjtRQUtoQixlQUFrQjtRQUFsQixzQ0FBa0I7O3VGRFAzQix1QkFBdUI7Y0FQbkMsU0FBUzsyQkFDRSx3QkFBd0I7O3NCQWlCL0IsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZvcmdvdC1wYXNzd29yZC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBwbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgcHVibGljIGNhbmNlbEJ1dHRvbjogc3RyaW5nO1xyXG4gIHB1YmxpYyBzZW5kQnV0dG9uOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Rm9yZ290UGFzc3dvcmRDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gZGF0YS5UaXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkYXRhLlBsYWNlSG9sZGVyO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YS5UZXh0VmFsdWU7XHJcbiAgICBjb25zdCBjdXJyZW50QnJvd3Nlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKSB7XHJcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gJ0FOTlVMTEEnO1xyXG4gICAgICB0aGlzLnNlbmRCdXR0b24gPSBcIklOVklBXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9ICdDQU5DRUwnO1xyXG4gICAgICB0aGlzLnNlbmRCdXR0b24gPSBcIlNFTkRcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIHB1YmxpYyBjYW5jZWwoKSB7XHJcblxyXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxuICBwdWJsaWMgY29uZmlybSgpIHtcclxuICAgIHRoaXMuZGF0YS5UZXh0VmFsdWUgPSB0aGlzLmlucHV0VmFsdWU7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXY+XHJcbiAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9oMT5cclxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIndpZHRoOiAzNTBweDtcIj57eyBtZXNzYWdlIH19PC9wPlxyXG5cclxuICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsIFt0ZXh0XT1cInBsYWNlSG9sZGVyXCIgY2xhc3M9XCJib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgPGlucHV0IGtlbmRvVGV4dEJveCBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIiBuYW1lPVwiYWNjb3VudE5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwibm9ybWFsLXN0YXRlXCIgLz5cclxuICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cclxuXHJcbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47cGFkZGluZzogMCAxcHg7XHJcbm1hcmdpbi10b3A6IDMwcHg7XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBvay1idXR0b25cIiAoY2xpY2spPVwiY29uZmlybSgpXCIgW2Rpc2FibGVkXT1cImlucHV0VmFsdWUgPyBmYWxzZSA6IHRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IHNlbmRCdXR0b24gfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBjbGFzcz1cImJ1dHRvbnMgYmFjay1idXR0b25cIiAoY2xpY2spPVwiY2FuY2VsKClcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGNhbmNlbEJ1dHRvbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvZGl2PiJdfQ==