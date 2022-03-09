import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "@angular/forms";
import * as i5 from "@progress/kendo-angular-buttons";
function AlertDialogComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 10);
} if (rf & 2) {
    var ctx_r38 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("src", ctx_r38.imagePath, i0.ɵɵsanitizeUrl);
} }
var AlertDialogComponent = /** @class */ (function () {
    function AlertDialogComponent(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
        this.title = '';
        this.message = '';
        this.dontshow = '';
        this.subkey = '';
        this.imagePath = '';
        this.imageAlt = '';
        this.dontshowanymore = false;
    }
    AlertDialogComponent.prototype.ngOnInit = function () {
        this.title = this.data.Title;
        this.message = this.data.Message;
        this.dontshow = this.data.DontShow;
        this.subkey = this.data.SubKey;
        this.imagePath = this.data.ImagePath;
        this.imageAlt = this.data.ImageAlt;
    };
    AlertDialogComponent.prototype.showOptions = function (event) {
        if (this.dontshowanymore)
            // document.cookie =
            localStorage.setItem('DONTSHOWUPDATEWARN', this.message);
        else
            localStorage.removeItem('DONTSHOWUPDATEWARN');
    };
    AlertDialogComponent.prototype.closeDialog = function () {
        this.mdDialogRef.close();
    };
    /** @nocollapse */ AlertDialogComponent.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
    /** @nocollapse */ AlertDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertDialogComponent, selectors: [["app-alert-dialog"]], decls: 17, vars: 5, consts: [[2, "max-width", "400px"], [2, "padding", "20px 0px"], ["mat-card-image", "", "style", "width:50%", 3, "src", 4, "ngIf"], [2, "padding", "15px 0px"], [2, "padding", "10px 0px"], ["name", "dontshow", 3, "ngModel", "ngModelChange", "change"], ["translate", ""], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "10px 0px 0px 30px"], ["kendoButton", "", 2, "background", "#e77b2d", "padding", "4px 12px 4px 12px", "background", "#e77b2d", "color", "#fff", "font-size", "14px", "border-radius", "0px", "border-color", "rgba(0, 0, 0, 0)", 3, "click"], [2, "letter-spacing", "3px", "text-transform", "uppercase"], ["mat-card-image", "", 2, "width", "50%", 3, "src"]], template: function AlertDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, AlertDialogComponent_img_2_Template, 1, 1, "img", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "h2");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 3);
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 4);
            i0.ɵɵelementStart(10, "mat-checkbox", 5);
            i0.ɵɵlistener("ngModelChange", function AlertDialogComponent_Template_mat_checkbox_ngModelChange_10_listener($event) { return ctx.dontshowanymore = $event; })("change", function AlertDialogComponent_Template_mat_checkbox_change_10_listener($event) { return ctx.showOptions($event); });
            i0.ɵɵelementStart(11, "span", 6);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 7);
            i0.ɵɵelementStart(14, "button", 8);
            i0.ɵɵlistener("click", function AlertDialogComponent_Template_button_click_14_listener() { return ctx.closeDialog(); });
            i0.ɵɵelementStart(15, "span", 9);
            i0.ɵɵtext(16, "OK");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.imagePath !== "" && ctx.imagePath !== undefined);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.dontshowanymore);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.dontshow);
        } }, directives: [i2.NgIf, i3.MatCheckbox, i4.NgControlStatus, i4.NgModel, i5.Button], styles: [""] });
    return AlertDialogComponent;
}());
export { AlertDialogComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertDialogComponent, [{
        type: Component,
        args: [{
                selector: 'app-alert-dialog',
                templateUrl: './alert-dialog.component.html',
                styleUrls: ['./alert-dialog.component.css'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50LnRzIiwibGliL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7SUNDakUsMEJBQ0o7OztJQUQ4RixvRUFBcUI7O0FEQ3ZIO0lBY0UsOEJBRVUsSUFRUCxFQUNPLFdBQStDO1FBVC9DLFNBQUksR0FBSixJQUFJLENBUVg7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0M7UUFFdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBR0gsMENBQVcsR0FBWCxVQUFZLEtBQXdCO1FBRWhDLElBQUksSUFBSSxDQUFDLGVBQWU7WUFDeEIsb0JBQW9CO1lBQ2xCLFlBQVksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUUxRCxZQUFZLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFFLENBQUM7SUFDckQsQ0FBQztJQUNRLDBDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUUzQixDQUFDOzRGQXBEVSxvQkFBb0IsdUJBVXJCLGVBQWU7NkRBVmQsb0JBQW9CO1lDVGpDLDhCQUVJO1lBQUEsOEJBQ0k7WUFBQSxxRUFDSjtZQUFBLGlCQUFNO1lBQ04sOEJBQ0k7WUFBQSwwQkFBSTtZQUFBLFlBQVc7WUFBQSxpQkFBSztZQUNwQiw4QkFDSTtZQUFBLHlCQUFHO1lBQUEsWUFBYTtZQUFBLGlCQUFJO1lBQ3hCLGlCQUFNO1lBQ1YsaUJBQU07WUFDTiw4QkFDSTtZQUFBLHdDQUNJO1lBRFUsOEpBQTZCLG1HQUEyQix1QkFBbUIsSUFBOUM7WUFDdkMsZ0NBQWdCO1lBQUEsYUFBYztZQUFBLGlCQUFPO1lBQ3pDLGlCQUFlO1lBQ25CLGlCQUFNO1lBRU4sK0JBQ0k7WUFBQSxrQ0FPSTtZQVBnQixrR0FBUyxpQkFBYSxJQUFDO1lBT3ZDLGdDQUE2RDtZQUFBLG1CQUFFO1lBQUEsaUJBQU87WUFDMUUsaUJBQVM7WUFHYixpQkFBTTtZQUNWLGlCQUFNOztZQTNCTyxlQUFtRDtZQUFuRCwwRUFBbUQ7WUFHcEQsZUFBVztZQUFYLCtCQUFXO1lBRVIsZUFBYTtZQUFiLGlDQUFhO1lBSU4sZUFBNkI7WUFBN0IsNkNBQTZCO1lBQ3ZCLGVBQWM7WUFBZCxrQ0FBYzs7K0JEYjFDO0NBOERDLEFBMURELElBMERDO1NBckRZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7c0JBV0ksTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYWxlcnQtZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC1kaWFsb2cuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIGRvbnRzaG93OiBzdHJpbmc7XHJcbiAgcHVibGljIHN1YmtleTogc3RyaW5nO1xyXG4gIHB1YmxpYyBpbWFnZVBhdGg6IHN0cmluZztcclxuICBwdWJsaWMgaW1hZ2VBbHQ6IHN0cmluZztcclxuICBkb250c2hvd2FueW1vcmU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpXHJcbiAgICBwcml2YXRlIGRhdGE6IHtcclxuICAgICAgTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICBUaXRsZTogc3RyaW5nO1xyXG4gICAgICBEb250U2hvdzogc3RyaW5nO1xyXG4gICAgICBTdWJLZXk6IHN0cmluZztcclxuICAgICAgSW1hZ2VQYXRoOiBzdHJpbmc7XHJcbiAgICAgIEltYWdlQWx0OiBzdHJpbmc7XHJcblxyXG4gICAgfSxcclxuICAgIHByaXZhdGUgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydERpYWxvZ0NvbXBvbmVudD5cclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSAnJztcclxuICAgIHRoaXMubWVzc2FnZSA9ICcnO1xyXG4gICAgdGhpcy5kb250c2hvdyA9ICcnO1xyXG4gICAgdGhpcy5zdWJrZXkgPSAnJztcclxuICAgIHRoaXMuaW1hZ2VQYXRoID0gJyc7XHJcbiAgICB0aGlzLmltYWdlQWx0ID0gJyc7XHJcbiAgICB0aGlzLmRvbnRzaG93YW55bW9yZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5kYXRhLlRpdGxlO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5kYXRhLk1lc3NhZ2U7XHJcbiAgICB0aGlzLmRvbnRzaG93ID0gdGhpcy5kYXRhLkRvbnRTaG93O1xyXG4gICAgdGhpcy5zdWJrZXkgPSB0aGlzLmRhdGEuU3ViS2V5O1xyXG4gICAgdGhpcy5pbWFnZVBhdGggPSB0aGlzLmRhdGEuSW1hZ2VQYXRoO1xyXG4gICAgdGhpcy5pbWFnZUFsdCA9IHRoaXMuZGF0YS5JbWFnZUFsdDtcclxuICB9XHJcblxyXG5cclxuc2hvd09wdGlvbnMoZXZlbnQ6IE1hdENoZWNrYm94Q2hhbmdlKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMuZG9udHNob3dhbnltb3JlKVxyXG4gICAgLy8gZG9jdW1lbnQuY29va2llID1cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RPTlRTSE9XVVBEQVRFV0FSTicgLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdET05UU0hPV1VQREFURVdBUk4nICk7XHJcbn1cclxuICBwdWJsaWMgY2xvc2VEaWFsb2coKSB7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKCk7XHJcblxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IHN0eWxlPVwiei1pbmRleDogMVwiIHN0eWxlPVwiIG1heC13aWR0aDo0MDBweDtcIj5cclxuXHJcbiAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzoyMHB4IDBweCA7XCI+XHJcbiAgICAgICAgPGltZyAqbmdJZj1cImltYWdlUGF0aCAhPT0gJycgJiYgaW1hZ2VQYXRoICE9PSB1bmRlZmluZWRcIiBtYXQtY2FyZC1pbWFnZSBzdHlsZT1cIndpZHRoOjUwJVwiIHNyYz1cInt7IGltYWdlUGF0aCB9fVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nOjIwcHggMHB4IDtcIj5cclxuICAgICAgICA8aDI+e3sgdGl0bGUgfX08L2gyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nOjE1cHggMHB4IDtcIj5cclxuICAgICAgICAgICAgPHA+e3sgbWVzc2FnZSB9fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6MTBweCAwcHggO1wiPlxyXG4gICAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJkb250c2hvd2FueW1vcmVcIiBuYW1lPVwiZG9udHNob3dcIiAoY2hhbmdlKT1cInNob3dPcHRpb25zKCRldmVudClcIj5cclxuICAgICAgICAgICAgPHNwYW4gdHJhbnNsYXRlPnt7IGRvbnRzaG93IH19PC9zcGFuPlxyXG4gICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6IDEwcHggMHB4IDBweCAzMHB4O1wiPlxyXG4gICAgICAgIDxidXR0b24ga2VuZG9CdXR0b24gKGNsaWNrKT1cImNsb3NlRGlhbG9nKClcIiBzdHlsZT1cIiBiYWNrZ3JvdW5kOiAjZTc3YjJkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMnB4IDRweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNzdiMmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibGV0dGVyLXNwYWNpbmc6IDNweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVwiPk9LPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==