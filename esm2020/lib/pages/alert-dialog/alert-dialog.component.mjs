import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/forms";
import * as i3 from "@progress/kendo-angular-inputs";
import * as i4 from "@progress/kendo-angular-label";
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
}
/** @nocollapse */ /** @nocollapse */ AlertDialogComponent.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
/** @nocollapse */ /** @nocollapse */ AlertDialogComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: AlertDialogComponent, selectors: [["app-alert-dialog"]], decls: 14, vars: 4, consts: [[2, "max-width", "450px"], [1, "title"], [1, "description", 2, "width", "350px", "text-align", "justify"], [3, "innerHTML"], [1, "wrap", 2, "margin-top", "30px"], ["type", "checkbox", "id", "binding", "kendoCheckBox", "", 3, "ngModel", "ngModelChange", "change"], ["for", "binding", 1, "k-checkbox-label"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", 1, "buttons", "ok-button", 3, "click"]], template: function AlertDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "p", 2)(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4)(6, "input", 5);
        i0.ɵɵlistener("ngModelChange", function AlertDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.dontshowanymore = $event; })("change", function AlertDialogComponent_Template_input_change_6_listener($event) { return ctx.showOptions($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "label", 6);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "div", 7)(10, "div", 8)(11, "button", 9);
        i0.ɵɵlistener("click", function AlertDialogComponent_Template_button_click_11_listener() { return ctx.closeDialog(); });
        i0.ɵɵelementStart(12, "span");
        i0.ɵɵtext(13, " OK ");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("innerHTML", ctx.message, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.dontshowanymore);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.dontshow, "");
    } }, directives: [i2.CheckboxControlValueAccessor, i3.CheckBoxDirective, i2.NgControlStatus, i2.NgModel, i4.LabelDirective], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-alert-dialog', template: "<div style=\" max-width:450px;\">\n    <h1 class=\"title\">{{ title }}</h1>\n    <p class=\"description\" style=\"width: 350px;text-align:justify\">\n      <div [innerHTML]=message></div>\n\n\n    <div class=\"wrap\" style=\"margin-top: 30px;\">\n        <input type=\"checkbox\" id=\"binding\" [(ngModel)]=\"dontshowanymore\" (change)=\"showOptions($event)\" kendoCheckBox />\n        <label class=\"k-checkbox-label\" for=\"binding\"> {{ dontshow }}</label>\n    </div>\n\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 0 1px;\n    margin-top: 30px;\">\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n            <button kendoButton class=\"buttons ok-button\" (click)=\"closeDialog()\">\n                <span> OK </span>\n            </button>\n        </div>\n    </div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQU96RSxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CLFlBRVUsSUFLUCxFQUNPLFdBQStDO1FBTi9DLFNBQUksR0FBSixJQUFJLENBS1g7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0M7UUFFdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFHSCxXQUFXLENBQUMsS0FBd0I7UUFFaEMsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUN4QixvQkFBb0I7WUFDbEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRTFELFlBQVksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ1EsV0FBVztRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTNCLENBQUM7OzhIQTNDVSxvQkFBb0IsdUJBUXJCLGVBQWU7eUhBUmQsb0JBQW9CO1FDVGpDLDhCQUErQixZQUFBO1FBQ1QsWUFBVztRQUFBLGlCQUFLO1FBQ2xDLHVCQUErRCxhQUFBO1FBSS9ELDhCQUE0QyxlQUFBO1FBQ0osc0pBQTZCLDJGQUFXLHVCQUFtQixJQUE5QjtRQUFqRSxpQkFBaUg7UUFDakgsZ0NBQThDO1FBQUMsWUFBYztRQUFBLGlCQUFRLEVBQUE7UUFHekUsOEJBQ21CLGNBQUEsaUJBQUE7UUFFbUMsa0dBQVMsaUJBQWEsSUFBQztRQUNqRSw2QkFBTTtRQUFDLHFCQUFHO1FBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUFkWCxlQUFXO1FBQVgsK0JBQVc7UUFFdEIsZUFBbUI7UUFBbkIsMERBQW1CO1FBSWMsZUFBNkI7UUFBN0IsNkNBQTZCO1FBQ2xCLGVBQWM7UUFBZCw0Q0FBYzs7dUZEQ3hELG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNFLGtCQUFrQjs7c0JBWXpCLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFsZXJ0LWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgXHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgZG9udHNob3c6IHN0cmluZztcclxuICBwdWJsaWMgc3Via2V5OiBzdHJpbmc7XHJcbiAgZG9udHNob3dhbnltb3JlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKVxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7XHJcbiAgICAgIE1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgVGl0bGU6IHN0cmluZztcclxuICAgICAgRG9udFNob3c6IHN0cmluZztcclxuICAgICAgU3ViS2V5OiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgcHJpdmF0ZSBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0RGlhbG9nQ29tcG9uZW50PlxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9ICcnO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gJyc7XHJcbiAgICB0aGlzLmRvbnRzaG93ID0gJyc7XHJcbiAgICB0aGlzLnN1YmtleSA9ICcnO1xyXG4gICAgdGhpcy5kb250c2hvd2FueW1vcmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0YS5UaXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZGF0YS5NZXNzYWdlO1xyXG4gICAgdGhpcy5kb250c2hvdyA9IHRoaXMuZGF0YS5Eb250U2hvdztcclxuICAgIHRoaXMuc3Via2V5ID0gdGhpcy5kYXRhLlN1YktleTtcclxuICB9XHJcblxyXG5cclxuc2hvd09wdGlvbnMoZXZlbnQ6IE1hdENoZWNrYm94Q2hhbmdlKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMuZG9udHNob3dhbnltb3JlKVxyXG4gICAgLy8gZG9jdW1lbnQuY29va2llID1cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RPTlRTSE9XVVBEQVRFV0FSTicgLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdET05UU0hPV1VQREFURVdBUk4nICk7XHJcbn1cclxuICBwdWJsaWMgY2xvc2VEaWFsb2coKSB7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKCk7XHJcblxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IHN0eWxlPVwiIG1heC13aWR0aDo0NTBweDtcIj5cbiAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9oMT5cbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgc3R5bGU9XCJ3aWR0aDogMzUwcHg7dGV4dC1hbGlnbjpqdXN0aWZ5XCI+XG4gICAgICA8ZGl2IFtpbm5lckhUTUxdPW1lc3NhZ2U+PC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAzMHB4O1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJiaW5kaW5nXCIgWyhuZ01vZGVsKV09XCJkb250c2hvd2FueW1vcmVcIiAoY2hhbmdlKT1cInNob3dPcHRpb25zKCRldmVudClcIiBrZW5kb0NoZWNrQm94IC8+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImstY2hlY2tib3gtbGFiZWxcIiBmb3I9XCJiaW5kaW5nXCI+IHt7IGRvbnRzaG93IH19PC9sYWJlbD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtwYWRkaW5nOiAwIDFweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGNsYXNzPVwiYnV0dG9ucyBvay1idXR0b25cIiAoY2xpY2spPVwiY2xvc2VEaWFsb2coKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiBPSyA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==