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
        args: [{ selector: 'app-change-password-dialog', template: "<div>\r\n    <h1 class=\"title\">{{ title }}</h1>\r\n    <p class=\"description\" style=\"width: 350px;\">{{ message }}</p>\r\n\r\n    <kendo-floatinglabel [text]=\"placeHolder_1\" class=\"border-bottom\">\r\n        <input kendoTextBox [(ngModel)]=\"newpwd\" name=\"newpwd\" type=\"password\" class=\"normal-state\" />\r\n    </kendo-floatinglabel>\r\n\r\n    <kendo-floatinglabel [text]=\"placeHolder_2\" [ngClass]=\"showError ? 'border-bottom-error ' : 'border-bottom'\">\r\n        <input kendoTextBox [(ngModel)]=\"newpwd2\" name=\"newpwd2\" type=\"password\"\r\n            [ngClass]=\"showError ? 'error-status' : 'normal-state'\" />\r\n    </kendo-floatinglabel>\r\n\r\n\r\n    <div class=\"login-infos\">\r\n        <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"showError\">\r\n            <p class=\"no-margin\"> {{ error }} </p>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 0 1px;\r\nmargin-top: 30px;\">\r\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n            <button kendoButton class=\"buttons ok-button\" (click)=\"confirm()\"\r\n                [disabled]=\"newpwd && newpwd2 ? false : true\">\r\n                <span>{{ changeButton}}</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\r\n                <span>{{ buttonCancel }}</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n</div>", styles: [""] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQStDLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7O0lDYzlHLCtCQUE2RSxZQUFBO0lBQ25ELFlBQVk7SUFBQSxpQkFBSSxFQUFBOzs7SUFBaEIsZUFBWTtJQUFaLDZDQUFZOztBRFI5QyxNQUFNLE9BQU8sNkJBQTZCO0lBYXhDLFlBRVMsV0FBd0QsRUFDOUIsSUFBUztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBNkM7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUxyQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBT3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWhDLE1BQU0sc0JBQXNCLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXRFLElBQUksc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsK0JBQStCLENBQUM7U0FDOUM7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsUUFBUSxLQUFLLENBQUM7SUFDUCxNQUFNO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Z0pBckRVLDZCQUE2Qiw4REFnQjlCLGVBQWU7a0lBaEJkLDZCQUE2QjtRQ1IxQywyQkFBSyxZQUFBO1FBQ2lCLFlBQVc7UUFBQSxpQkFBSztRQUNsQyw0QkFBNkM7UUFBQSxZQUFhO1FBQUEsaUJBQUk7UUFFOUQsOENBQWtFLGVBQUE7UUFDMUMsc0pBQW9CO1FBQXhDLGlCQUE4RixFQUFBO1FBR2xHLDhDQUE2RyxlQUFBO1FBQ3JGLHVKQUFxQjtRQUF6QyxpQkFDOEQsRUFBQTtRQUlsRSw4QkFBeUI7UUFDckIsZ0ZBRU07UUFDVixpQkFBTTtRQUdOLCtCQUNlLGNBQUEsa0JBQUE7UUFFdUMsMkdBQVMsYUFBUyxJQUFDO1FBRTdELDZCQUFNO1FBQUEsYUFBaUI7UUFBQSxpQkFBTyxFQUFBLEVBQUE7UUFHdEMsZ0NBQTBCLGtCQUFBO1FBQzBCLDJHQUFTLFlBQVEsSUFBQztRQUM5RCw2QkFBTTtRQUFBLGFBQWtCO1FBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUE5QnpCLGVBQVc7UUFBWCwrQkFBVztRQUNnQixlQUFhO1FBQWIsaUNBQWE7UUFFckMsZUFBc0I7UUFBdEIsd0NBQXNCO1FBQ25CLGVBQW9CO1FBQXBCLG9DQUFvQjtRQUd2QixlQUFzQjtRQUF0Qix3Q0FBc0IscUVBQUE7UUFDbkIsZUFBcUI7UUFBckIscUNBQXFCLDREQUFBO1FBTW1CLGVBQWU7UUFBZixvQ0FBZTtRQVVuRSxlQUE2QztRQUE3QyxtRUFBNkM7UUFDdkMsZUFBaUI7UUFBakIsc0NBQWlCO1FBS2pCLGVBQWtCO1FBQWxCLHNDQUFrQjs7dUZEdkIzQiw2QkFBNkI7Y0FMekMsU0FBUzsyQkFDRSw0QkFBNEI7O3NCQW9CbkMsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nTW9kdWxlLCBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYWNlSG9sZGVyXzE6IHN0cmluZztcclxuICBwdWJsaWMgcGxhY2VIb2xkZXJfMjogc3RyaW5nO1xyXG4gIHB1YmxpYyBuZXdwd2Q6IHN0cmluZztcclxuICBwdWJsaWMgbmV3cHdkMjogc3RyaW5nO1xyXG4gIHB1YmxpYyBidXR0b25DYW5jZWw6IHN0cmluZztcclxuICBwdWJsaWMgY2hhbmdlQnV0dG9uOiBzdHJpbmc7XHJcbiAgcHVibGljIHNob3dFcnJvciA9IGZhbHNlO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKFxyXG5cclxuICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy5lcnJvciA9ICcnO1xyXG4gICAgdGhpcy50aXRsZSA9IGRhdGEuVGl0bGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLk1lc3NhZ2U7XHJcbiAgICB0aGlzLnBsYWNlSG9sZGVyXzEgPSBkYXRhLlBsYWNlSG9sZGVyXzE7XHJcbiAgICB0aGlzLnBsYWNlSG9sZGVyXzIgPSBkYXRhLlBsYWNlSG9sZGVyXzI7XHJcbiAgICB0aGlzLm5ld3B3ZCA9IHRoaXMubmV3cHdkMiA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuXHJcbiAgICBpZiAoY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gJ0FOTlVMTEEnO1xyXG4gICAgICB0aGlzLmNoYW5nZUJ1dHRvbiA9IFwiQ0FNQklBXCI7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSAnTGUgcGFzc3dvcmQgZGV2b25vIGNvaW5jaWRlcmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQ0FOQ0VMJztcclxuICAgICAgdGhpcy5jaGFuZ2VCdXR0b24gPSBcIkNIQU5HRVwiO1xyXG4gICAgICB0aGlzLmVycm9yID0gJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcbiAgcHVibGljIGNhbmNlbCgpIHtcclxuICAgIHRoaXMuc2hvd0Vycm9yID0gZmFsc2U7XHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uZmlybSgpIHtcclxuICAgIHRoaXMuc2hvd0Vycm9yID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5uZXdwd2QgPT09IHRoaXMubmV3cHdkMiAmJiB0aGlzLm5ld3B3ZDIgIT09ICcnICYmIHRoaXMubmV3cHdkMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5OZXdQd2QgPSB0aGlzLm5ld3B3ZDtcclxuICAgICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93RXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2PlxyXG4gICAgPGgxIGNsYXNzPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvaDE+XHJcbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgc3R5bGU9XCJ3aWR0aDogMzUwcHg7XCI+e3sgbWVzc2FnZSB9fTwvcD5cclxuXHJcbiAgICA8a2VuZG8tZmxvYXRpbmdsYWJlbCBbdGV4dF09XCJwbGFjZUhvbGRlcl8xXCIgY2xhc3M9XCJib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgPGlucHV0IGtlbmRvVGV4dEJveCBbKG5nTW9kZWwpXT1cIm5ld3B3ZFwiIG5hbWU9XCJuZXdwd2RcIiB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cIm5vcm1hbC1zdGF0ZVwiIC8+XHJcbiAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcblxyXG4gICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgW3RleHRdPVwicGxhY2VIb2xkZXJfMlwiIFtuZ0NsYXNzXT1cInNob3dFcnJvciA/ICdib3JkZXItYm90dG9tLWVycm9yICcgOiAnYm9yZGVyLWJvdHRvbSdcIj5cclxuICAgICAgICA8aW5wdXQga2VuZG9UZXh0Qm94IFsobmdNb2RlbCldPVwibmV3cHdkMlwiIG5hbWU9XCJuZXdwd2QyXCIgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwic2hvd0Vycm9yID8gJ2Vycm9yLXN0YXR1cycgOiAnbm9ybWFsLXN0YXRlJ1wiIC8+XHJcbiAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1pbmZvc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1lcnJvciBwYW5lbCBmbGV4LWNlbnRlciBtYXJnaW4tYm90dG9tLTVcIiAqbmdJZj1cInNob3dFcnJvclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW1hcmdpblwiPiB7eyBlcnJvciB9fSA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6IDAgMXB4O1xyXG5tYXJnaW4tdG9wOiAzMHB4O1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBjbGFzcz1cImJ1dHRvbnMgb2stYnV0dG9uXCIgKGNsaWNrKT1cImNvbmZpcm0oKVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwibmV3cHdkICYmIG5ld3B3ZDIgPyBmYWxzZSA6IHRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGNoYW5nZUJ1dHRvbn19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gY2xhc3M9XCJidXR0b25zIGJhY2stYnV0dG9uXCIgKGNsaWNrKT1cImNhbmNlbCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBidXR0b25DYW5jZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG48L2Rpdj4iXX0=