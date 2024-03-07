import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/forms";
import * as i3 from "@progress/kendo-angular-label";
import * as i4 from "@progress/kendo-angular-inputs";
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
    /** @nocollapse */ static { this.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); }; }
    /** @nocollapse */ static { this.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ForgotPasswordComponent, selectors: [["forgot-password-dialog"]], decls: 16, vars: 7, consts: [[1, "title"], [1, "description", 2, "width", "350px"], [1, "border-bottom", 3, "text"], ["kendoTextBox", "", "name", "accountName", "type", "text", 1, "normal-state", 3, "ngModel", "ngModelChange"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "disabled", "click"], [1, "login-footer"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "h1", 0);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p", 1);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "kendo-floatinglabel", 2)(6, "input", 3);
            i0.ɵɵtwoWayListener("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_6_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.inputValue, $event) || (ctx.inputValue = $event); return $event; });
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
            i0.ɵɵadvance();
            i0.ɵɵproperty("text", ctx.placeHolder);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.inputValue);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.inputValue ? false : true);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.sendButton);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.cancelButton);
        } }, dependencies: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.FloatingLabelComponent, i4.TextBoxDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotPasswordComponent, [{
        type: Component,
        args: [{ selector: 'forgot-password-dialog', template: "<div>\r\n    <h1 class=\"title\">{{ title }}</h1>\r\n    <p class=\"description\" style=\"width: 350px;\">{{ message }}</p>\r\n\r\n    <kendo-floatinglabel [text]=\"placeHolder\" class=\"border-bottom\">\r\n        <input kendoTextBox [(ngModel)]=\"inputValue\" name=\"accountName\" type=\"text\" class=\"normal-state\" />\r\n    </kendo-floatinglabel>\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 0 1px;\r\nmargin-top: 30px;\">\r\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n            <button kendoButton class=\"buttons ok-button\" (click)=\"confirm()\" [disabled]=\"inputValue ? false : true\">\r\n                <span>{{ sendButton }}</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\r\n                <span>{{ cancelButton }}</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n</div>" }]
    }], () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "lib\\pages\\forgot-password-dialog\\forgot-password.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQtZGlhbG9nL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvZm9yZ290LXBhc3N3b3JkLWRpYWxvZy9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0FBU3pFLE1BQU0sT0FBTyx1QkFBdUI7SUFTbEMsWUFDUyxXQUFrRCxFQUN4QixJQUFTO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUF1QztRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxNQUFNLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0RSxJQUFJLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsUUFBUSxLQUFLLENBQUM7SUFFUCxNQUFNO1FBRVgsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSxPQUFPO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzsyR0FyQ1UsdUJBQXVCLDhEQVd4QixlQUFlO21HQVhkLHVCQUF1QjtZQ1ZwQywyQkFBSyxZQUFBO1lBQ2lCLFlBQVc7WUFBQSxpQkFBSztZQUNsQyw0QkFBNkM7WUFBQSxZQUFhO1lBQUEsaUJBQUk7WUFFOUQsOENBQWdFLGVBQUE7WUFDeEMscU5BQXdCO1lBQTVDLGlCQUFtRyxFQUFBO1lBR3ZHLDhCQUNlLGFBQUEsZ0JBQUE7WUFFdUMsb0dBQVMsYUFBUyxJQUFDO1lBQzdELDZCQUFNO1lBQUEsYUFBZ0I7WUFBQSxpQkFBTyxFQUFBLEVBQUE7WUFHckMsK0JBQTBCLGlCQUFBO1lBQzBCLHFHQUFTLFlBQVEsSUFBQztZQUM5RCw2QkFBTTtZQUFBLGFBQWtCO1lBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUEsRUFBQTs7WUFoQnpCLGVBQVc7WUFBWCwrQkFBVztZQUNnQixlQUFhO1lBQWIsaUNBQWE7WUFFckMsY0FBb0I7WUFBcEIsc0NBQW9CO1lBQ2pCLGNBQXdCO1lBQXhCLDhDQUF3QjtZQU0wQixlQUFzQztZQUF0Qyx3REFBc0M7WUFDOUYsZUFBZ0I7WUFBaEIsb0NBQWdCO1lBS2hCLGVBQWtCO1lBQWxCLHNDQUFrQjs7O2lGRFAzQix1QkFBdUI7Y0FQbkMsU0FBUzsyQkFDRSx3QkFBd0I7O3NCQWlCL0IsTUFBTTt1QkFBQyxlQUFlOztrRkFYZCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9yZ290LXBhc3N3b3JkLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgcHVibGljIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBwdWJsaWMgY2FuY2VsQnV0dG9uOiBzdHJpbmc7XHJcbiAgcHVibGljIHNlbmRCdXR0b246IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxGb3Jnb3RQYXNzd29yZENvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSBkYXRhLlRpdGxlO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gZGF0YS5NZXNzYWdlO1xyXG4gICAgdGhpcy5wbGFjZUhvbGRlciA9IGRhdGEuUGxhY2VIb2xkZXI7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSBkYXRhLlRleHRWYWx1ZTtcclxuICAgIGNvbnN0IGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpIHtcclxuICAgICAgdGhpcy5jYW5jZWxCdXR0b24gPSAnQU5OVUxMQSc7XHJcbiAgICAgIHRoaXMuc2VuZEJ1dHRvbiA9IFwiSU5WSUFcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gJ0NBTkNFTCc7XHJcbiAgICAgIHRoaXMuc2VuZEJ1dHRvbiA9IFwiU0VORFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgcHVibGljIGNhbmNlbCgpIHtcclxuXHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBjb25maXJtKCkge1xyXG4gICAgdGhpcy5kYXRhLlRleHRWYWx1ZSA9IHRoaXMuaW5wdXRWYWx1ZTtcclxuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdj5cclxuICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2gxPlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHN0eWxlPVwid2lkdGg6IDM1MHB4O1wiPnt7IG1lc3NhZ2UgfX08L3A+XHJcblxyXG4gICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgW3RleHRdPVwicGxhY2VIb2xkZXJcIiBjbGFzcz1cImJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICA8aW5wdXQga2VuZG9UZXh0Qm94IFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIG5hbWU9XCJhY2NvdW50TmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJub3JtYWwtc3RhdGVcIiAvPlxyXG4gICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtwYWRkaW5nOiAwIDFweDtcclxubWFyZ2luLXRvcDogMzBweDtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gY2xhc3M9XCJidXR0b25zIG9rLWJ1dHRvblwiIChjbGljayk9XCJjb25maXJtKClcIiBbZGlzYWJsZWRdPVwiaW5wdXRWYWx1ZSA/IGZhbHNlIDogdHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgc2VuZEJ1dHRvbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBiYWNrLWJ1dHRvblwiIChjbGljayk9XCJjYW5jZWwoKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgY2FuY2VsQnV0dG9uIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+Il19