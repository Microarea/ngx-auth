import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@progress/kendo-angular-label";
import * as i3 from "@progress/kendo-angular-inputs";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
function ChangePasswordDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "p", 15);
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
/** @nocollapse */ /** @nocollapse */ ChangePasswordDialogComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ChangePasswordDialogComponent, selectors: [["app-change-password-dialog"]], decls: 20, vars: 12, consts: [[2, "max-width", "450px"], [1, "title"], [1, "description"], [1, "border-bottom", 3, "text"], ["kendoTextBox", "", "name", "newpwd", "type", "password", 1, "normal-state", 3, "ngModel", "ngModelChange"], [3, "text", "ngClass"], ["kendoTextBox", "", "name", "newpwd2", "type", "password", 3, "ngModel", "ngClass", "ngModelChange"], [1, "login-infos"], ["class", "login-error panel flex-center margin-bottom-5", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "disabled", "click"], [1, "login-footer"], ["kendoButton", "", 1, "buttons", "back-button", 3, "click"], [1, "login-error", "panel", "flex-center", "margin-bottom-5"], [1, "no-margin"]], template: function ChangePasswordDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", 2);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "kendo-floatinglabel", 3)(6, "input", 4);
        i0.ɵɵlistener("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.newpwd = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "kendo-floatinglabel", 5)(8, "input", 6);
        i0.ɵɵlistener("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_8_listener($event) { return ctx.newpwd2 = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵtemplate(10, ChangePasswordDialogComponent_div_10_Template, 3, 1, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 9)(12, "div", 10)(13, "button", 11);
        i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_13_listener() { return ctx.confirm(); });
        i0.ɵɵelementStart(14, "span");
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(16, "div", 12)(17, "button", 13);
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
        args: [{ selector: 'app-change-password-dialog', template: "<div style=\" max-width:450px;\">\r\n    <h1 class=\"title\">{{ title }}</h1>\r\n    <p class=\"description\" >{{ message }}</p>\r\n\r\n    <kendo-floatinglabel [text]=\"placeHolder_1\" class=\"border-bottom\">\r\n        <input kendoTextBox [(ngModel)]=\"newpwd\" name=\"newpwd\" type=\"password\" class=\"normal-state\" />\r\n    </kendo-floatinglabel>\r\n\r\n    <kendo-floatinglabel [text]=\"placeHolder_2\" [ngClass]=\"showError ? 'border-bottom-error ' : 'border-bottom'\">\r\n        <input kendoTextBox [(ngModel)]=\"newpwd2\" name=\"newpwd2\" type=\"password\"\r\n            [ngClass]=\"showError ? 'error-status' : 'normal-state'\" />\r\n    </kendo-floatinglabel>\r\n\r\n\r\n    <div class=\"login-infos\">\r\n        <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"showError\">\r\n            <p class=\"no-margin\"> {{ error }} </p>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 0 1px;\r\nmargin-top: 30px;\">\r\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n            <button kendoButton class=\"buttons ok-button\" (click)=\"confirm()\"\r\n                [disabled]=\"newpwd && newpwd2 ? false : true\">\r\n                <span>{{ changeButton}}</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"login-footer\">\r\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\r\n                <span>{{ buttonCancel }}</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n", styles: [""] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQStDLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7O0lDYzlHLCtCQUE2RSxZQUFBO0lBQ25ELFlBQVk7SUFBQSxpQkFBSSxFQUFBOzs7SUFBaEIsZUFBWTtJQUFaLDZDQUFZOztBRFI5QyxNQUFNLE9BQU8sNkJBQTZCO0lBYXhDLFlBRVMsV0FBd0QsRUFDOUIsSUFBUztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBNkM7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUxyQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBT3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWhDLE1BQU0sc0JBQXNCLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXRFLElBQUksc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsK0JBQStCLENBQUM7U0FDOUM7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsUUFBUSxLQUFLLENBQUM7SUFDUCxNQUFNO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Z0pBckRVLDZCQUE2Qiw4REFnQjlCLGVBQWU7a0lBaEJkLDZCQUE2QjtRQ1IxQyw4QkFBK0IsWUFBQTtRQUNULFlBQVc7UUFBQSxpQkFBSztRQUNsQyw0QkFBd0I7UUFBQSxZQUFhO1FBQUEsaUJBQUk7UUFFekMsOENBQWtFLGVBQUE7UUFDMUMsc0pBQW9CO1FBQXhDLGlCQUE4RixFQUFBO1FBR2xHLDhDQUE2RyxlQUFBO1FBQ3JGLHVKQUFxQjtRQUF6QyxpQkFDOEQsRUFBQTtRQUlsRSw4QkFBeUI7UUFDckIsZ0ZBRU07UUFDVixpQkFBTTtRQUdOLCtCQUNlLGVBQUEsa0JBQUE7UUFFdUMsMkdBQVMsYUFBUyxJQUFDO1FBRTdELDZCQUFNO1FBQUEsYUFBaUI7UUFBQSxpQkFBTyxFQUFBLEVBQUE7UUFHdEMsZ0NBQTBCLGtCQUFBO1FBQzBCLDJHQUFTLFlBQVEsSUFBQztRQUM5RCw2QkFBTTtRQUFBLGFBQWtCO1FBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUE5QnpCLGVBQVc7UUFBWCwrQkFBVztRQUNMLGVBQWE7UUFBYixpQ0FBYTtRQUVoQixlQUFzQjtRQUF0Qix3Q0FBc0I7UUFDbkIsZUFBb0I7UUFBcEIsb0NBQW9CO1FBR3ZCLGVBQXNCO1FBQXRCLHdDQUFzQixxRUFBQTtRQUNuQixlQUFxQjtRQUFyQixxQ0FBcUIsNERBQUE7UUFNbUIsZUFBZTtRQUFmLG9DQUFlO1FBVW5FLGVBQTZDO1FBQTdDLG1FQUE2QztRQUN2QyxlQUFpQjtRQUFqQixzQ0FBaUI7UUFLakIsZUFBa0I7UUFBbEIsc0NBQWtCOzt1RkR2QjNCLDZCQUE2QjtjQUx6QyxTQUFTOzJCQUNFLDRCQUE0Qjs7c0JBb0JuQyxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dNb2R1bGUsIE1BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNoYW5nZS1wYXNzd29yZC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHVibGljIGVycm9yOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgcGxhY2VIb2xkZXJfMTogc3RyaW5nO1xyXG4gIHB1YmxpYyBwbGFjZUhvbGRlcl8yOiBzdHJpbmc7XHJcbiAgcHVibGljIG5ld3B3ZDogc3RyaW5nO1xyXG4gIHB1YmxpYyBuZXdwd2QyOiBzdHJpbmc7XHJcbiAgcHVibGljIGJ1dHRvbkNhbmNlbDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjaGFuZ2VCdXR0b246IHN0cmluZztcclxuICBwdWJsaWMgc2hvd0Vycm9yID0gZmFsc2U7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoXHJcblxyXG4gICAgcHVibGljIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmVycm9yID0gJyc7XHJcbiAgICB0aGlzLnRpdGxlID0gZGF0YS5UaXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXJfMSA9IGRhdGEuUGxhY2VIb2xkZXJfMTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXJfMiA9IGRhdGEuUGxhY2VIb2xkZXJfMjtcclxuICAgIHRoaXMubmV3cHdkID0gdGhpcy5uZXdwd2QyID0gJyc7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpIHtcclxuICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQU5OVUxMQSc7XHJcbiAgICAgIHRoaXMuY2hhbmdlQnV0dG9uID0gXCJDQU1CSUFcIjtcclxuICAgICAgdGhpcy5lcnJvciA9ICdMZSBwYXNzd29yZCBkZXZvbm8gY29pbmNpZGVyZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdDQU5DRUwnO1xyXG4gICAgICB0aGlzLmNoYW5nZUJ1dHRvbiA9IFwiQ0hBTkdFXCI7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSAnUGFzc3dvcmRzIG11c3QgbWF0Y2gnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuICBwdWJsaWMgY2FuY2VsKCkge1xyXG4gICAgdGhpcy5zaG93RXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25maXJtKCkge1xyXG4gICAgdGhpcy5zaG93RXJyb3IgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm5ld3B3ZCA9PT0gdGhpcy5uZXdwd2QyICYmIHRoaXMubmV3cHdkMiAhPT0gJycgJiYgdGhpcy5uZXdwd2QyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5kYXRhLk5ld1B3ZCA9IHRoaXMubmV3cHdkO1xyXG4gICAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3dFcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgc3R5bGU9XCIgbWF4LXdpZHRoOjQ1MHB4O1wiPlxyXG4gICAgPGgxIGNsYXNzPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvaDE+XHJcbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgPnt7IG1lc3NhZ2UgfX08L3A+XHJcblxyXG4gICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgW3RleHRdPVwicGxhY2VIb2xkZXJfMVwiIGNsYXNzPVwiYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgIDxpbnB1dCBrZW5kb1RleHRCb3ggWyhuZ01vZGVsKV09XCJuZXdwd2RcIiBuYW1lPVwibmV3cHdkXCIgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJub3JtYWwtc3RhdGVcIiAvPlxyXG4gICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsIFt0ZXh0XT1cInBsYWNlSG9sZGVyXzJcIiBbbmdDbGFzc109XCJzaG93RXJyb3IgPyAnYm9yZGVyLWJvdHRvbS1lcnJvciAnIDogJ2JvcmRlci1ib3R0b20nXCI+XHJcbiAgICAgICAgPGlucHV0IGtlbmRvVGV4dEJveCBbKG5nTW9kZWwpXT1cIm5ld3B3ZDJcIiBuYW1lPVwibmV3cHdkMlwiIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInNob3dFcnJvciA/ICdlcnJvci1zdGF0dXMnIDogJ25vcm1hbC1zdGF0ZSdcIiAvPlxyXG4gICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibG9naW4taW5mb3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZXJyb3IgcGFuZWwgZmxleC1jZW50ZXIgbWFyZ2luLWJvdHRvbS01XCIgKm5nSWY9XCJzaG93RXJyb3JcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1tYXJnaW5cIj4ge3sgZXJyb3IgfX0gPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtwYWRkaW5nOiAwIDFweDtcclxubWFyZ2luLXRvcDogMzBweDtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gY2xhc3M9XCJidXR0b25zIG9rLWJ1dHRvblwiIChjbGljayk9XCJjb25maXJtKClcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIm5ld3B3ZCAmJiBuZXdwd2QyID8gZmFsc2UgOiB0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBjaGFuZ2VCdXR0b259fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBiYWNrLWJ1dHRvblwiIChjbGljayk9XCJjYW5jZWwoKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgYnV0dG9uQ2FuY2VsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbiJdfQ==