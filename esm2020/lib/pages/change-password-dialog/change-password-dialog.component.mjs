import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@progress/kendo-angular-label";
import * as i3 from "@progress/kendo-angular-inputs";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
function ChangePasswordDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "p", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.error, " ");
} }
export class ChangePasswordDialogComponent {
    constructor(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.showError = false;
        this.error = '';
        this.title = data.Title;
        this.message = data.Message;
        this.placeHolder_1 = data.PlaceHolder_1;
        this.placeHolder_2 = data.PlaceHolder_2;
        this.newpwd = this.newpwd2 = '';
        const currentBrowserLanguage = navigator.language.toLocaleLowerCase();
        if (currentBrowserLanguage.startsWith('it')) {
            this.buttonCancel = 'ANNULLA';
            this.changeButton = "CAMBIA";
            this.error = 'Le password devono coincidere';
        }
        else {
            this.buttonCancel = 'CANCEL';
            this.changeButton = "CHANGE";
            this.error = 'Passwords must match';
        }
    }
    ngOnInit() { }
    cancel() {
        this.showError = false;
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    }
    confirm() {
        this.showError = false;
        if (this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined) {
            this.data.NewPwd = this.newpwd;
            this.mdDialogRef.close(this.data);
        }
        else {
            this.showError = true;
        }
    }
}
/** @nocollapse */ /** @nocollapse */ ChangePasswordDialogComponent.ɵfac = function ChangePasswordDialogComponent_Factory(t) { return new (t || ChangePasswordDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ /** @nocollapse */ ChangePasswordDialogComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ChangePasswordDialogComponent, selectors: [["app-change-password-dialog"]], decls: 20, vars: 12, consts: [[1, "title"], [1, "description", 2, "width", "350px"], [1, "border-bottom", 3, "text"], ["kendoTextBox", "", "name", "newpwd", "type", "password", 1, "normal-state", 3, "ngModel", "ngModelChange"], [3, "text", "ngClass"], ["kendoTextBox", "", "name", "newpwd2", "type", "password", 3, "ngModel", "ngClass", "ngModelChange"], [1, "login-infos"], ["class", "login-error panel flex-center margin-bottom-5", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "disabled", "click"], [1, "login-footer"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"], [1, "login-error", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"]], template: function ChangePasswordDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "h1", 0);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", 1);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "kendo-floatinglabel", 2)(6, "input", 3);
        i0.ɵɵlistener("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.newpwd = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "kendo-floatinglabel", 4)(8, "input", 5);
        i0.ɵɵlistener("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_8_listener($event) { return ctx.newpwd2 = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵtemplate(10, ChangePasswordDialogComponent_div_10_Template, 3, 1, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 8)(12, "div", 9)(13, "button", 10);
        i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_13_listener() { return ctx.confirm(); });
        i0.ɵɵelementStart(14, "span");
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(16, "div", 11)(17, "button", 12);
        i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_17_listener() { return ctx.cancel(); });
        i0.ɵɵelementStart(18, "span");
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("text", ctx.placeHolder_1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.newpwd);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("text", ctx.placeHolder_2)("ngClass", ctx.showError ? "border-bottom-error " : "border-bottom");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.newpwd2)("ngClass", ctx.showError ? "error-status" : "normal-state");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showError);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx.newpwd && ctx.newpwd2 ? false : true);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.changeButton);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.buttonCancel);
    } }, directives: [i2.FloatingLabelComponent, i3.TextBoxDirective, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.NgClass, i5.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-change-password-dialog', template: "<div>\n    <h1 class=\"title\">{{ title }}</h1>\n    <p class=\"description\" style=\"width: 350px;\">{{ message }}</p>\n\n    <kendo-floatinglabel [text]=\"placeHolder_1\" class=\"border-bottom\">\n        <input kendoTextBox [(ngModel)]=\"newpwd\" name=\"newpwd\" type=\"password\" class=\"normal-state\" />\n    </kendo-floatinglabel>\n\n    <kendo-floatinglabel [text]=\"placeHolder_2\" [ngClass]=\"showError ? 'border-bottom-error ' : 'border-bottom'\">\n        <input kendoTextBox [(ngModel)]=\"newpwd2\" name=\"newpwd2\" type=\"password\"\n            [ngClass]=\"showError ? 'error-status' : 'normal-state'\" />\n    </kendo-floatinglabel>\n\n\n    <div class=\"login-infos\">\n        <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"showError\">\n            <p class=\"no-margin\"> {{ error }} </p>\n        </div>\n    </div>\n\n\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 0 1px;\nmargin-top: 30px;\">\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n            <button kendoButton class=\"buttons ok-button\" (click)=\"confirm()\"\n                [disabled]=\"newpwd && newpwd2 ? false : true\">\n                <span>{{ changeButton}}</span>\n            </button>\n        </div>\n        <div class=\"login-footer\">\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\n                <span>{{ buttonCancel }}</span>\n            </button>\n        </div>\n    </div>\n\n</div>", styles: [""] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQStDLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7O0lDYzlHLCtCQUE2RSxZQUFBO0lBQ25ELFlBQVk7SUFBQSxpQkFBSSxFQUFBOzs7SUFBaEIsZUFBWTtJQUFaLDZDQUFZOztBRFI5QyxNQUFNLE9BQU8sNkJBQTZCO0lBYXhDLFlBRVMsV0FBd0QsRUFDOUIsSUFBUztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBNkM7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUxyQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBT3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWhDLE1BQU0sc0JBQXNCLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXRFLElBQUksc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsK0JBQStCLENBQUM7U0FDOUM7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsUUFBUSxLQUFLLENBQUM7SUFDUCxNQUFNO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Z0pBckRVLDZCQUE2Qiw4REFnQjlCLGVBQWU7a0lBaEJkLDZCQUE2QjtRQ1IxQywyQkFBSyxZQUFBO1FBQ2lCLFlBQVc7UUFBQSxpQkFBSztRQUNsQyw0QkFBNkM7UUFBQSxZQUFhO1FBQUEsaUJBQUk7UUFFOUQsOENBQWtFLGVBQUE7UUFDMUMsc0pBQW9CO1FBQXhDLGlCQUE4RixFQUFBO1FBR2xHLDhDQUE2RyxlQUFBO1FBQ3JGLHVKQUFxQjtRQUF6QyxpQkFDOEQsRUFBQTtRQUlsRSw4QkFBeUI7UUFDckIsZ0ZBRU07UUFDVixpQkFBTTtRQUdOLCtCQUNlLGNBQUEsa0JBQUE7UUFFdUMsMkdBQVMsYUFBUyxJQUFDO1FBRTdELDZCQUFNO1FBQUEsYUFBaUI7UUFBQSxpQkFBTyxFQUFBLEVBQUE7UUFHdEMsZ0NBQTBCLGtCQUFBO1FBQzBCLDJHQUFTLFlBQVEsSUFBQztRQUM5RCw2QkFBTTtRQUFBLGFBQWtCO1FBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUE5QnpCLGVBQVc7UUFBWCwrQkFBVztRQUNnQixlQUFhO1FBQWIsaUNBQWE7UUFFckMsZUFBc0I7UUFBdEIsd0NBQXNCO1FBQ25CLGVBQW9CO1FBQXBCLG9DQUFvQjtRQUd2QixlQUFzQjtRQUF0Qix3Q0FBc0IscUVBQUE7UUFDbkIsZUFBcUI7UUFBckIscUNBQXFCLDREQUFBO1FBTW1CLGVBQWU7UUFBZixvQ0FBZTtRQVVuRSxlQUE2QztRQUE3QyxtRUFBNkM7UUFDdkMsZUFBaUI7UUFBakIsc0NBQWlCO1FBS2pCLGVBQWtCO1FBQWxCLHNDQUFrQjs7dUZEdkIzQiw2QkFBNkI7Y0FMekMsU0FBUzsyQkFDRSw0QkFBNEI7O3NCQW9CbkMsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2hhbmdlLXBhc3N3b3JkLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgcHVibGljIGVycm9yOiBzdHJpbmc7XG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBwbGFjZUhvbGRlcl8xOiBzdHJpbmc7XG4gIHB1YmxpYyBwbGFjZUhvbGRlcl8yOiBzdHJpbmc7XG4gIHB1YmxpYyBuZXdwd2Q6IHN0cmluZztcbiAgcHVibGljIG5ld3B3ZDI6IHN0cmluZztcbiAgcHVibGljIGJ1dHRvbkNhbmNlbDogc3RyaW5nO1xuICBwdWJsaWMgY2hhbmdlQnV0dG9uOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93RXJyb3IgPSBmYWxzZTtcbiAgXG4gIGNvbnN0cnVjdG9yKFxuXG4gICAgcHVibGljIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueVxuICApIHtcbiAgICB0aGlzLmVycm9yID0gJyc7XG4gICAgdGhpcy50aXRsZSA9IGRhdGEuVGl0bGU7XG4gICAgdGhpcy5tZXNzYWdlID0gZGF0YS5NZXNzYWdlO1xuICAgIHRoaXMucGxhY2VIb2xkZXJfMSA9IGRhdGEuUGxhY2VIb2xkZXJfMTtcbiAgICB0aGlzLnBsYWNlSG9sZGVyXzIgPSBkYXRhLlBsYWNlSG9sZGVyXzI7XG4gICAgdGhpcy5uZXdwd2QgPSB0aGlzLm5ld3B3ZDIgPSAnJztcblxuICAgIGNvbnN0IGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpIHtcbiAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gJ0FOTlVMTEEnO1xuICAgICAgdGhpcy5jaGFuZ2VCdXR0b24gPSBcIkNBTUJJQVwiO1xuICAgICAgdGhpcy5lcnJvciA9ICdMZSBwYXNzd29yZCBkZXZvbm8gY29pbmNpZGVyZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gJ0NBTkNFTCc7XG4gICAgICB0aGlzLmNoYW5nZUJ1dHRvbiA9IFwiQ0hBTkdFXCI7XG4gICAgICB0aGlzLmVycm9yID0gJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoJztcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuICBwdWJsaWMgY2FuY2VsKCkge1xuICAgIHRoaXMuc2hvd0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25maXJtKCkge1xuICAgIHRoaXMuc2hvd0Vycm9yID0gZmFsc2U7XG4gICAgaWYgKHRoaXMubmV3cHdkID09PSB0aGlzLm5ld3B3ZDIgJiYgdGhpcy5uZXdwd2QyICE9PSAnJyAmJiB0aGlzLm5ld3B3ZDIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kYXRhLk5ld1B3ZCA9IHRoaXMubmV3cHdkO1xuICAgICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dFcnJvciA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2PlxuICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2gxPlxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIndpZHRoOiAzNTBweDtcIj57eyBtZXNzYWdlIH19PC9wPlxuXG4gICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgW3RleHRdPVwicGxhY2VIb2xkZXJfMVwiIGNsYXNzPVwiYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICA8aW5wdXQga2VuZG9UZXh0Qm94IFsobmdNb2RlbCldPVwibmV3cHdkXCIgbmFtZT1cIm5ld3B3ZFwiIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwibm9ybWFsLXN0YXRlXCIgLz5cbiAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XG5cbiAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbCBbdGV4dF09XCJwbGFjZUhvbGRlcl8yXCIgW25nQ2xhc3NdPVwic2hvd0Vycm9yID8gJ2JvcmRlci1ib3R0b20tZXJyb3IgJyA6ICdib3JkZXItYm90dG9tJ1wiPlxuICAgICAgICA8aW5wdXQga2VuZG9UZXh0Qm94IFsobmdNb2RlbCldPVwibmV3cHdkMlwiIG5hbWU9XCJuZXdwd2QyXCIgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInNob3dFcnJvciA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIiAvPlxuICAgIDwva2VuZG8tZmxvYXRpbmdsYWJlbD5cblxuXG4gICAgPGRpdiBjbGFzcz1cImxvZ2luLWluZm9zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1lcnJvciBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIiAqbmdJZj1cInNob3dFcnJvclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj4ge3sgZXJyb3IgfX0gPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6IDAgMXB4O1xubWFyZ2luLXRvcDogMzBweDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBjbGFzcz1cImJ1dHRvbnMgb2stYnV0dG9uXCIgKGNsaWNrKT1cImNvbmZpcm0oKVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIm5ld3B3ZCAmJiBuZXdwd2QyID8gZmFsc2UgOiB0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgY2hhbmdlQnV0dG9ufX08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gY2xhc3M9XCJidXR0b25zIGJhY2stYnV0dG9uXCIgKGNsaWNrKT1cImNhbmNlbCgpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgYnV0dG9uQ2FuY2VsIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L2Rpdj4iXX0=