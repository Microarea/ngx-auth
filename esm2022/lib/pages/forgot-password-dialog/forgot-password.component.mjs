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
    /** @nocollapse */ static { this.ɵfac = function ForgotPasswordComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForgotPasswordComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); }; }
    /** @nocollapse */ static { this.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ForgotPasswordComponent, selectors: [["forgot-password-dialog"]], decls: 16, vars: 7, consts: [[1, "title"], [1, "description", 2, "width", "350px"], [1, "border-bottom", 3, "text"], ["kendoTextBox", "", "name", "accountName", "type", "text", 1, "normal-state", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "click", "disabled"], [1, "login-footer"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'forgot-password-dialog', template: "<div>\n    <h1 class=\"title\">{{ title }}</h1>\n    <p class=\"description\" style=\"width: 350px;\">{{ message }}</p>\n\n    <kendo-floatinglabel [text]=\"placeHolder\" class=\"border-bottom\">\n        <input kendoTextBox [(ngModel)]=\"inputValue\" name=\"accountName\" type=\"text\" class=\"normal-state\" />\n    </kendo-floatinglabel>\n\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 0 1px;\nmargin-top: 30px;\">\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n            <button kendoButton class=\"buttons ok-button\" (click)=\"confirm()\" [disabled]=\"inputValue ? false : true\">\n                <span>{{ sendButton }}</span>\n            </button>\n        </div>\n        <div class=\"login-footer\">\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\n                <span>{{ cancelButton }}</span>\n            </button>\n        </div>\n    </div>\n    \n</div>" }]
    }], () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "lib\\pages\\forgot-password-dialog\\forgot-password.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQtZGlhbG9nL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvZm9yZ290LXBhc3N3b3JkLWRpYWxvZy9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0FBU3pFLE1BQU0sT0FBTyx1QkFBdUI7SUFTbEMsWUFDUyxXQUFrRCxFQUN4QixJQUFTO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUF1QztRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsTUFBTSxzQkFBc0IsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdEUsSUFBSSxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQzNCLENBQUM7SUFFSCxDQUFDO0lBRUQsUUFBUSxLQUFLLENBQUM7SUFFUCxNQUFNO1FBQ1gsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzsySUF2Q1UsdUJBQXVCLDhEQVd4QixlQUFlO21HQVhkLHVCQUF1QjtZQ1RoQyxBQURKLDJCQUFLLFlBQ2lCO1lBQUEsWUFBVztZQUFBLGlCQUFLO1lBQ2xDLDRCQUE2QztZQUFBLFlBQWE7WUFBQSxpQkFBSTtZQUcxRCxBQURKLDhDQUFnRSxlQUN1QztZQUEvRSxxTkFBd0I7WUFDaEQsQUFESSxpQkFBbUcsRUFDakY7WUFLZCxBQURKLEFBRkosOEJBQ2UsYUFDZ0UsZ0JBQ2tDO1lBQTNELG9HQUFTLGFBQVMsSUFBQztZQUM3RCw2QkFBTTtZQUFBLGFBQWdCO1lBRTlCLEFBREksQUFEMEIsaUJBQU8sRUFDeEIsRUFDUDtZQUVGLEFBREosK0JBQTBCLGlCQUM2QztZQUFuQixxR0FBUyxZQUFRLElBQUM7WUFDOUQsNkJBQU07WUFBQSxhQUFrQjtZQUt4QyxBQUZJLEFBREksQUFESSxBQUQ0QixpQkFBTyxFQUMxQixFQUNQLEVBQ0osRUFFSjs7WUFyQmdCLGVBQVc7WUFBWCwrQkFBVztZQUNnQixlQUFhO1lBQWIsaUNBQWE7WUFFckMsY0FBb0I7WUFBcEIsc0NBQW9CO1lBQ2pCLGNBQXdCO1lBQXhCLDhDQUF3QjtZQU0wQixlQUFzQztZQUF0Qyx3REFBc0M7WUFDOUYsZUFBZ0I7WUFBaEIsb0NBQWdCO1lBS2hCLGVBQWtCO1lBQWxCLHNDQUFrQjs7O2lGRFAzQix1QkFBdUI7Y0FQbkMsU0FBUzsyQkFDRSx3QkFBd0I7O3NCQWlCL0IsTUFBTTt1QkFBQyxlQUFlOztrRkFYZCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZvcmdvdC1wYXNzd29yZC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyBcblxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgcHVibGljIHBsYWNlSG9sZGVyOiBzdHJpbmc7XG4gIHB1YmxpYyBpbnB1dFZhbHVlOiBzdHJpbmc7XG4gIHB1YmxpYyBjYW5jZWxCdXR0b246IHN0cmluZztcbiAgcHVibGljIHNlbmRCdXR0b246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxGb3Jnb3RQYXNzd29yZENvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55XG4gICkge1xuICAgIHRoaXMudGl0bGUgPSBkYXRhLlRpdGxlO1xuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLk1lc3NhZ2U7XG4gICAgdGhpcy5wbGFjZUhvbGRlciA9IGRhdGEuUGxhY2VIb2xkZXI7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YS5UZXh0VmFsdWU7XG4gICAgY29uc3QgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpIHtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gJ0FOTlVMTEEnO1xuICAgICAgdGhpcy5zZW5kQnV0dG9uID0gXCJJTlZJQVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9ICdDQU5DRUwnO1xuICAgICAgdGhpcy5zZW5kQnV0dG9uID0gXCJTRU5EXCI7XG4gICAgfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIHB1YmxpYyBjYW5jZWwoKSB7XG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25maXJtKCkge1xuICAgIHRoaXMuZGF0YS5UZXh0VmFsdWUgPSB0aGlzLmlucHV0VmFsdWU7XG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xuICB9XG59XG4iLCI8ZGl2PlxuICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2gxPlxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIndpZHRoOiAzNTBweDtcIj57eyBtZXNzYWdlIH19PC9wPlxuXG4gICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgW3RleHRdPVwicGxhY2VIb2xkZXJcIiBjbGFzcz1cImJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgPGlucHV0IGtlbmRvVGV4dEJveCBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIiBuYW1lPVwiYWNjb3VudE5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwibm9ybWFsLXN0YXRlXCIgLz5cbiAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XG5cbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47cGFkZGluZzogMCAxcHg7XG5tYXJnaW4tdG9wOiAzMHB4O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBvay1idXR0b25cIiAoY2xpY2spPVwiY29uZmlybSgpXCIgW2Rpc2FibGVkXT1cImlucHV0VmFsdWUgPyBmYWxzZSA6IHRydWVcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBzZW5kQnV0dG9uIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBiYWNrLWJ1dHRvblwiIChjbGljayk9XCJjYW5jZWwoKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGNhbmNlbEJ1dHRvbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbjwvZGl2PiJdfQ==