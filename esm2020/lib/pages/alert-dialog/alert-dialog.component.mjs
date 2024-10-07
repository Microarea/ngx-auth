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
/** @nocollapse */ AlertDialogComponent.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
/** @nocollapse */ AlertDialogComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: AlertDialogComponent, selectors: [["app-alert-dialog"]], decls: 13, vars: 4, consts: [[2, "max-width", "450px"], [1, "title"], [1, "description", 2, "width", "350px", 3, "innerHTML"], [1, "wrap"], ["type", "checkbox", "id", "binding", "data-test", "loginDontShowAnymoreButton", "kendoCheckBox", "", 3, "ngModel", "ngModelChange", "change"], ["for", "binding", 1, "k-checkbox-label"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", "data-test", "loginUpdateButton", 1, "buttons", "ok-button", 3, "click"]], template: function AlertDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i2.CheckboxControlValueAccessor, i3.CheckBoxDirective, i2.NgControlStatus, i2.NgModel, i4.LabelDirective], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-alert-dialog', template: "<div style=\"max-width: 450px\">\n    <h1 class=\"title\">{{ title }}</h1>\n    <p [innerHTML]=\"message\" class=\"description\" style=\"width: 350px\"></p>\n\n    <div class=\"wrap\">\n        <input type=\"checkbox\" id=\"binding\" data-test=\"loginDontShowAnymoreButton\" [(ngModel)]=\"dontshowanymore\" (change)=\"showOptions($event)\" kendoCheckBox />\n        <label class=\"k-checkbox-label\" for=\"binding\"> {{ dontshow }}</label>\n    </div>\n\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 30px\">\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n            <button kendoButton data-test=\"loginUpdateButton\" class=\"buttons ok-button\" (click)=\"closeDialog()\">\n                <span > OK </span>\n            </button>\n        </div>\n    </div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQU96RSxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CLFlBRVUsSUFLUCxFQUNPLFdBQStDO1FBTi9DLFNBQUksR0FBSixJQUFJLENBS1g7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0M7UUFFdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFHSCxXQUFXLENBQUMsS0FBd0I7UUFFaEMsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUN4QixvQkFBb0I7WUFDbEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRTFELFlBQVksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ1EsV0FBVztRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTNCLENBQUM7OzJHQTNDVSxvQkFBb0IsdUJBUXJCLGVBQWU7c0dBUmQsb0JBQW9CO1FDVGpDLDhCQUE4QixZQUFBO1FBQ1IsWUFBVztRQUFBLGlCQUFLO1FBQ2xDLHVCQUFzRTtRQUV0RSw4QkFBa0IsZUFBQTtRQUM2RCxzSkFBNkIsMkZBQVcsdUJBQW1CLElBQTlCO1FBQXhHLGlCQUF3SjtRQUN4SixnQ0FBOEM7UUFBQyxZQUFjO1FBQUEsaUJBQVEsRUFBQTtRQUd6RSw4QkFBMEgsYUFBQSxpQkFBQTtRQUV0QyxrR0FBUyxpQkFBYSxJQUFDO1FBQy9GLDZCQUFPO1FBQUMscUJBQUc7UUFBQSxpQkFBTyxFQUFBLEVBQUEsRUFBQSxFQUFBOztRQVhaLGVBQVc7UUFBWCwrQkFBVztRQUMxQixlQUFxQjtRQUFyQiwwREFBcUI7UUFHdUQsZUFBNkI7UUFBN0IsNkNBQTZCO1FBQ3pELGVBQWM7UUFBZCw0Q0FBYzs7dUZER3hELG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNFLGtCQUFrQjs7c0JBWXpCLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFsZXJ0LWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgXHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgZG9udHNob3c6IHN0cmluZztcclxuICBwdWJsaWMgc3Via2V5OiBzdHJpbmc7XHJcbiAgZG9udHNob3dhbnltb3JlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKVxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7XHJcbiAgICAgIE1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgVGl0bGU6IHN0cmluZztcclxuICAgICAgRG9udFNob3c6IHN0cmluZztcclxuICAgICAgU3ViS2V5OiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgcHJpdmF0ZSBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0RGlhbG9nQ29tcG9uZW50PlxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9ICcnO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gJyc7XHJcbiAgICB0aGlzLmRvbnRzaG93ID0gJyc7XHJcbiAgICB0aGlzLnN1YmtleSA9ICcnO1xyXG4gICAgdGhpcy5kb250c2hvd2FueW1vcmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0YS5UaXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZGF0YS5NZXNzYWdlO1xyXG4gICAgdGhpcy5kb250c2hvdyA9IHRoaXMuZGF0YS5Eb250U2hvdztcclxuICAgIHRoaXMuc3Via2V5ID0gdGhpcy5kYXRhLlN1YktleTtcclxuICB9XHJcblxyXG5cclxuc2hvd09wdGlvbnMoZXZlbnQ6IE1hdENoZWNrYm94Q2hhbmdlKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMuZG9udHNob3dhbnltb3JlKVxyXG4gICAgLy8gZG9jdW1lbnQuY29va2llID1cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RPTlRTSE9XVVBEQVRFV0FSTicgLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdET05UU0hPV1VQREFURVdBUk4nICk7XHJcbn1cclxuICBwdWJsaWMgY2xvc2VEaWFsb2coKSB7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKCk7XHJcblxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA0NTBweFwiPlxuICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2gxPlxuICAgIDxwIFtpbm5lckhUTUxdPVwibWVzc2FnZVwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBzdHlsZT1cIndpZHRoOiAzNTBweFwiPjwvcD5cblxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJpbmRpbmdcIiBkYXRhLXRlc3Q9XCJsb2dpbkRvbnRTaG93QW55bW9yZUJ1dHRvblwiIFsobmdNb2RlbCldPVwiZG9udHNob3dhbnltb3JlXCIgKGNoYW5nZSk9XCJzaG93T3B0aW9ucygkZXZlbnQpXCIga2VuZG9DaGVja0JveCAvPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJrLWNoZWNrYm94LWxhYmVsXCIgZm9yPVwiYmluZGluZ1wiPiB7eyBkb250c2hvdyB9fTwvbGFiZWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDAgMXB4OyBtYXJnaW4tdG9wOiAzMHB4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cbiAgICAgICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gZGF0YS10ZXN0PVwibG9naW5VcGRhdGVCdXR0b25cIiBjbGFzcz1cImJ1dHRvbnMgb2stYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlRGlhbG9nKClcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiA+IE9LIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19