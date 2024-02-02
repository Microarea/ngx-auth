import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/forms";
import * as i3 from "@progress/kendo-angular-label";
import * as i4 from "@progress/kendo-angular-inputs";
export class AlertDialogComponent {
    constructor(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
        this.title = '';
        this.message = '';
        this.dontshow = '';
        this.subkey = '';
        this.dontshowanymore = false;
    }
    ngOnInit() {
        this.title = this.data.Title;
        this.message = this.data.Message;
        this.dontshow = this.data.DontShow;
        this.subkey = this.data.SubKey;
    }
    showOptions(event) {
        if (this.dontshowanymore)
            // document.cookie =
            localStorage.setItem('DONTSHOWUPDATEWARN', this.message);
        else
            localStorage.removeItem('DONTSHOWUPDATEWARN');
    }
    closeDialog() {
        this.mdDialogRef.close();
    }
    /** @nocollapse */ static { this.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); }; }
    /** @nocollapse */ static { this.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: AlertDialogComponent, selectors: [["app-alert-dialog"]], decls: 13, vars: 4, consts: [[2, "max-width", "450px"], [1, "title"], [1, "description", 2, "width", "350px", 3, "innerHTML"], [1, "wrap"], ["type", "checkbox", "id", "binding", "data-test", "loginDontShowAnymoreButton", "kendoCheckBox", "", 3, "ngModel", "ngModelChange", "change"], ["for", "binding", 1, "k-checkbox-label"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", "data-test", "loginUpdateButton", 1, "buttons", "ok-button", 3, "click"]], template: function AlertDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "p", 2);
            i0.ɵɵelementStart(4, "div", 3)(5, "input", 4);
            i0.ɵɵlistener("ngModelChange", function AlertDialogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.dontshowanymore = $event; })("change", function AlertDialogComponent_Template_input_change_5_listener($event) { return ctx.showOptions($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "label", 5);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 6)(9, "div", 7)(10, "button", 8);
            i0.ɵɵlistener("click", function AlertDialogComponent_Template_button_click_10_listener() { return ctx.closeDialog(); });
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12, " OK ");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("innerHTML", ctx.message, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.dontshowanymore);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.dontshow, "");
        } }, dependencies: [i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.LabelDirective, i4.CheckBoxDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-alert-dialog', template: "<div style=\"max-width: 450px\">\r\n    <h1 class=\"title\">{{ title }}</h1>\r\n    <p [innerHTML]=\"message\" class=\"description\" style=\"width: 350px\"></p>\r\n\r\n    <div class=\"wrap\">\r\n        <input type=\"checkbox\" id=\"binding\" data-test=\"loginDontShowAnymoreButton\" [(ngModel)]=\"dontshowanymore\" (change)=\"showOptions($event)\" kendoCheckBox />\r\n        <label class=\"k-checkbox-label\" for=\"binding\"> {{ dontshow }}</label>\r\n    </div>\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 30px\">\r\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n            <button kendoButton data-test=\"loginUpdateButton\" class=\"buttons ok-button\" (click)=\"closeDialog()\">\r\n                <span > OK </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n" }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertDialogComponent, { className: "AlertDialogComponent", filePath: "lib\\pages\\alert-dialog\\alert-dialog.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQU96RSxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CLFlBRVUsSUFLUCxFQUNPLFdBQStDO1FBTi9DLFNBQUksR0FBSixJQUFJLENBS1g7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0M7UUFFdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFHSCxXQUFXLENBQUMsS0FBd0I7UUFFaEMsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUN4QixvQkFBb0I7WUFDbEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRTFELFlBQVksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ1EsV0FBVztRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTNCLENBQUM7d0dBM0NVLG9CQUFvQix1QkFRckIsZUFBZTttR0FSZCxvQkFBb0I7WUNUakMsOEJBQThCLFlBQUE7WUFDUixZQUFXO1lBQUEsaUJBQUs7WUFDbEMsdUJBQXNFO1lBRXRFLDhCQUFrQixlQUFBO1lBQzZELHNKQUE2QiwyRkFBVyx1QkFBbUIsSUFBOUI7WUFBeEcsaUJBQXdKO1lBQ3hKLGdDQUE4QztZQUFDLFlBQWM7WUFBQSxpQkFBUSxFQUFBO1lBR3pFLDhCQUEwSCxhQUFBLGlCQUFBO1lBRXRDLGtHQUFTLGlCQUFhLElBQUM7WUFDL0YsNkJBQU87WUFBQyxxQkFBRztZQUFBLGlCQUFPLEVBQUEsRUFBQSxFQUFBLEVBQUE7O1lBWFosZUFBVztZQUFYLCtCQUFXO1lBQzFCLGVBQXFCO1lBQXJCLDBEQUFxQjtZQUd1RCxlQUE2QjtZQUE3Qiw2Q0FBNkI7WUFDekQsZUFBYztZQUFkLDRDQUFjOzs7aUZER3hELG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNFLGtCQUFrQjs7c0JBWXpCLE1BQU07dUJBQUMsZUFBZTs7a0ZBUmQsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYWxlcnQtZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC1kaWFsb2cuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyBcclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBkb250c2hvdzogc3RyaW5nO1xyXG4gIHB1YmxpYyBzdWJrZXk6IHN0cmluZztcclxuICBkb250c2hvd2FueW1vcmU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpXHJcbiAgICBwcml2YXRlIGRhdGE6IHtcclxuICAgICAgTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICBUaXRsZTogc3RyaW5nO1xyXG4gICAgICBEb250U2hvdzogc3RyaW5nO1xyXG4gICAgICBTdWJLZXk6IHN0cmluZztcclxuICAgIH0sXHJcbiAgICBwcml2YXRlIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnREaWFsb2dDb21wb25lbnQ+XHJcbiAgKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gJyc7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSAnJztcclxuICAgIHRoaXMuZG9udHNob3cgPSAnJztcclxuICAgIHRoaXMuc3Via2V5ID0gJyc7XHJcbiAgICB0aGlzLmRvbnRzaG93YW55bW9yZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5kYXRhLlRpdGxlO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5kYXRhLk1lc3NhZ2U7XHJcbiAgICB0aGlzLmRvbnRzaG93ID0gdGhpcy5kYXRhLkRvbnRTaG93O1xyXG4gICAgdGhpcy5zdWJrZXkgPSB0aGlzLmRhdGEuU3ViS2V5O1xyXG4gIH1cclxuXHJcblxyXG5zaG93T3B0aW9ucyhldmVudDogTWF0Q2hlY2tib3hDaGFuZ2UpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy5kb250c2hvd2FueW1vcmUpXHJcbiAgICAvLyBkb2N1bWVudC5jb29raWUgPVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyAsIHRoaXMubWVzc2FnZSk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0RPTlRTSE9XVVBEQVRFV0FSTicgKTtcclxufVxyXG4gIHB1YmxpYyBjbG9zZURpYWxvZygpIHtcclxuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UoKTtcclxuXHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDQ1MHB4XCI+XHJcbiAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9oMT5cclxuICAgIDxwIFtpbm5lckhUTUxdPVwibWVzc2FnZVwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIndpZHRoOiAzNTBweFwiPjwvcD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwid3JhcFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJpbmRpbmdcIiBkYXRhLXRlc3Q9XCJsb2dpbkRvbnRTaG93QW55bW9yZUJ1dHRvblwiIFsobmdNb2RlbCldPVwiZG9udHNob3dhbnltb3JlXCIgKGNoYW5nZSk9XCJzaG93T3B0aW9ucygkZXZlbnQpXCIga2VuZG9DaGVja0JveCAvPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImstY2hlY2tib3gtbGFiZWxcIiBmb3I9XCJiaW5kaW5nXCI+IHt7IGRvbnRzaG93IH19PC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgcGFkZGluZzogMCAxcHg7IG1hcmdpbi10b3A6IDMwcHhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gZGF0YS10ZXN0PVwibG9naW5VcGRhdGVCdXR0b25cIiBjbGFzcz1cImJ1dHRvbnMgb2stYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlRGlhbG9nKClcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuID4gT0sgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19