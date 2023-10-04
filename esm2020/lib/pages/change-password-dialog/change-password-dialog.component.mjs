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
        args: [{ selector: 'app-change-password-dialog', template: "<div style=\" max-width:450px;\">\n    <h1 class=\"title\">{{ title }}</h1>\n    <p class=\"description\" >{{ message }}</p>\n\n    <kendo-floatinglabel [text]=\"placeHolder_1\" class=\"border-bottom\">\n        <input kendoTextBox [(ngModel)]=\"newpwd\" name=\"newpwd\" type=\"password\" class=\"normal-state\" />\n    </kendo-floatinglabel>\n\n    <kendo-floatinglabel [text]=\"placeHolder_2\" [ngClass]=\"showError ? 'border-bottom-error ' : 'border-bottom'\">\n        <input kendoTextBox [(ngModel)]=\"newpwd2\" name=\"newpwd2\" type=\"password\"\n            [ngClass]=\"showError ? 'error-status' : 'normal-state'\" />\n    </kendo-floatinglabel>\n\n\n    <div class=\"login-infos\">\n        <div class=\"login-error panel flex-center margin-bottom-5\" *ngIf=\"showError\">\n            <p class=\"no-margin\"> {{ error }} </p>\n        </div>\n    </div>\n\n\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 0 1px;\nmargin-top: 30px;\">\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n            <button kendoButton class=\"buttons ok-button\" (click)=\"confirm()\"\n                [disabled]=\"newpwd && newpwd2 ? false : true\">\n                <span>{{ changeButton}}</span>\n            </button>\n        </div>\n        <div class=\"login-footer\">\n            <button kendoButton class=\"buttons back-button\" (click)=\"cancel()\">\n                <span>{{ buttonCancel }}</span>\n            </button>\n        </div>\n    </div>\n\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQStDLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7O0lDYzlHLCtCQUE2RSxZQUFBO0lBQ25ELFlBQVk7SUFBQSxpQkFBSSxFQUFBOzs7SUFBaEIsZUFBWTtJQUFaLDZDQUFZOztBRFI5QyxNQUFNLE9BQU8sNkJBQTZCO0lBYXhDLFlBRVMsV0FBd0QsRUFDOUIsSUFBUztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBNkM7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUxyQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBT3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWhDLE1BQU0sc0JBQXNCLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXRFLElBQUksc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsK0JBQStCLENBQUM7U0FDOUM7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsUUFBUSxLQUFLLENBQUM7SUFDUCxNQUFNO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Z0pBckRVLDZCQUE2Qiw4REFnQjlCLGVBQWU7a0lBaEJkLDZCQUE2QjtRQ1IxQyw4QkFBK0IsWUFBQTtRQUNULFlBQVc7UUFBQSxpQkFBSztRQUNsQyw0QkFBd0I7UUFBQSxZQUFhO1FBQUEsaUJBQUk7UUFFekMsOENBQWtFLGVBQUE7UUFDMUMsc0pBQW9CO1FBQXhDLGlCQUE4RixFQUFBO1FBR2xHLDhDQUE2RyxlQUFBO1FBQ3JGLHVKQUFxQjtRQUF6QyxpQkFDOEQsRUFBQTtRQUlsRSw4QkFBeUI7UUFDckIsZ0ZBRU07UUFDVixpQkFBTTtRQUdOLCtCQUNlLGVBQUEsa0JBQUE7UUFFdUMsMkdBQVMsYUFBUyxJQUFDO1FBRTdELDZCQUFNO1FBQUEsYUFBaUI7UUFBQSxpQkFBTyxFQUFBLEVBQUE7UUFHdEMsZ0NBQTBCLGtCQUFBO1FBQzBCLDJHQUFTLFlBQVEsSUFBQztRQUM5RCw2QkFBTTtRQUFBLGFBQWtCO1FBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUE5QnpCLGVBQVc7UUFBWCwrQkFBVztRQUNMLGVBQWE7UUFBYixpQ0FBYTtRQUVoQixlQUFzQjtRQUF0Qix3Q0FBc0I7UUFDbkIsZUFBb0I7UUFBcEIsb0NBQW9CO1FBR3ZCLGVBQXNCO1FBQXRCLHdDQUFzQixxRUFBQTtRQUNuQixlQUFxQjtRQUFyQixxQ0FBcUIsNERBQUE7UUFNbUIsZUFBZTtRQUFmLG9DQUFlO1FBVW5FLGVBQTZDO1FBQTdDLG1FQUE2QztRQUN2QyxlQUFpQjtRQUFqQixzQ0FBaUI7UUFLakIsZUFBa0I7UUFBbEIsc0NBQWtCOzt1RkR2QjNCLDZCQUE2QjtjQUx6QyxTQUFTOzJCQUNFLDRCQUE0Qjs7c0JBb0JuQyxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nTW9kdWxlLCBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICBwdWJsaWMgZXJyb3I6IHN0cmluZztcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgcHVibGljIHBsYWNlSG9sZGVyXzE6IHN0cmluZztcbiAgcHVibGljIHBsYWNlSG9sZGVyXzI6IHN0cmluZztcbiAgcHVibGljIG5ld3B3ZDogc3RyaW5nO1xuICBwdWJsaWMgbmV3cHdkMjogc3RyaW5nO1xuICBwdWJsaWMgYnV0dG9uQ2FuY2VsOiBzdHJpbmc7XG4gIHB1YmxpYyBjaGFuZ2VCdXR0b246IHN0cmluZztcbiAgcHVibGljIHNob3dFcnJvciA9IGZhbHNlO1xuICBcbiAgY29uc3RydWN0b3IoXG5cbiAgICBwdWJsaWMgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55XG4gICkge1xuICAgIHRoaXMuZXJyb3IgPSAnJztcbiAgICB0aGlzLnRpdGxlID0gZGF0YS5UaXRsZTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLk1lc3NhZ2U7XG4gICAgdGhpcy5wbGFjZUhvbGRlcl8xID0gZGF0YS5QbGFjZUhvbGRlcl8xO1xuICAgIHRoaXMucGxhY2VIb2xkZXJfMiA9IGRhdGEuUGxhY2VIb2xkZXJfMjtcbiAgICB0aGlzLm5ld3B3ZCA9IHRoaXMubmV3cHdkMiA9ICcnO1xuXG4gICAgY29uc3QgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKGN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaXQnKSkge1xuICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQU5OVUxMQSc7XG4gICAgICB0aGlzLmNoYW5nZUJ1dHRvbiA9IFwiQ0FNQklBXCI7XG4gICAgICB0aGlzLmVycm9yID0gJ0xlIHBhc3N3b3JkIGRldm9ubyBjb2luY2lkZXJlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQ0FOQ0VMJztcbiAgICAgIHRoaXMuY2hhbmdlQnV0dG9uID0gXCJDSEFOR0VcIjtcbiAgICAgIHRoaXMuZXJyb3IgPSAnUGFzc3dvcmRzIG11c3QgbWF0Y2gnO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG4gIHB1YmxpYyBjYW5jZWwoKSB7XG4gICAgdGhpcy5zaG93RXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xuICB9XG5cbiAgcHVibGljIGNvbmZpcm0oKSB7XG4gICAgdGhpcy5zaG93RXJyb3IgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5uZXdwd2QgPT09IHRoaXMubmV3cHdkMiAmJiB0aGlzLm5ld3B3ZDIgIT09ICcnICYmIHRoaXMubmV3cHdkMiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRhdGEuTmV3UHdkID0gdGhpcy5uZXdwd2Q7XG4gICAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgc3R5bGU9XCIgbWF4LXdpZHRoOjQ1MHB4O1wiPlxuICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2gxPlxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiA+e3sgbWVzc2FnZSB9fTwvcD5cblxuICAgIDxrZW5kby1mbG9hdGluZ2xhYmVsIFt0ZXh0XT1cInBsYWNlSG9sZGVyXzFcIiBjbGFzcz1cImJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgPGlucHV0IGtlbmRvVGV4dEJveCBbKG5nTW9kZWwpXT1cIm5ld3B3ZFwiIG5hbWU9XCJuZXdwd2RcIiB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cIm5vcm1hbC1zdGF0ZVwiIC8+XG4gICAgPC9rZW5kby1mbG9hdGluZ2xhYmVsPlxuXG4gICAgPGtlbmRvLWZsb2F0aW5nbGFiZWwgW3RleHRdPVwicGxhY2VIb2xkZXJfMlwiIFtuZ0NsYXNzXT1cInNob3dFcnJvciA/ICdib3JkZXItYm90dG9tLWVycm9yICcgOiAnYm9yZGVyLWJvdHRvbSdcIj5cbiAgICAgICAgPGlucHV0IGtlbmRvVGV4dEJveCBbKG5nTW9kZWwpXT1cIm5ld3B3ZDJcIiBuYW1lPVwibmV3cHdkMlwiIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJzaG93RXJyb3IgPyAnZXJyb3Itc3RhdHVzJyA6ICdub3JtYWwtc3RhdGUnXCIgLz5cbiAgICA8L2tlbmRvLWZsb2F0aW5nbGFiZWw+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1pbmZvc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZXJyb3IgcGFuZWwgZmxleC1jZW50ZXIgbWFyZ2luLWJvdHRvbS01XCIgKm5nSWY9XCJzaG93RXJyb3JcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luXCI+IHt7IGVycm9yIH19IDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtwYWRkaW5nOiAwIDFweDtcbm1hcmdpbi10b3A6IDMwcHg7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cbiAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gY2xhc3M9XCJidXR0b25zIG9rLWJ1dHRvblwiIChjbGljayk9XCJjb25maXJtKClcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJuZXdwd2QgJiYgbmV3cHdkMiA/IGZhbHNlIDogdHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGNoYW5nZUJ1dHRvbn19PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBiYWNrLWJ1dHRvblwiIChjbGljayk9XCJjYW5jZWwoKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGJ1dHRvbkNhbmNlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG4iXX0=