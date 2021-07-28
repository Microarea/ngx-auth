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
    var ctx_r35 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("src", ctx_r35.imagePath, i0.ɵɵsanitizeUrl);
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
            sessionStorage.setItem('DONTSHOWUPDATEWARN', this.message);
        else
            sessionStorage.removeItem('DONTSHOWUPDATEWARN');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50LnRzIiwibGliL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7SUNDakUsMEJBQ0o7OztJQUQ4RixvRUFBcUI7O0FERXZIO0lBY0UsOEJBRVUsSUFRUCxFQUNPLFdBQStDO1FBVC9DLFNBQUksR0FBSixJQUFJLENBUVg7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0M7UUFFdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBR0gsMENBQVcsR0FBWCxVQUFZLEtBQXVCO1FBRS9CLElBQUksSUFBSSxDQUFDLGVBQWU7WUFDdEIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRTVELGNBQWMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUUsQ0FBQztJQUN2RCxDQUFDO0lBQ1EsMENBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTNCLENBQUM7NEZBbkRVLG9CQUFvQix1QkFVckIsZUFBZTs2REFWZCxvQkFBb0I7WUNWakMsOEJBRUk7WUFBQSw4QkFDSTtZQUFBLHFFQUNKO1lBQUEsaUJBQU07WUFDTiw4QkFDSTtZQUFBLDBCQUFJO1lBQUEsWUFBVztZQUFBLGlCQUFLO1lBQ3BCLDhCQUNJO1lBQUEseUJBQUc7WUFBQSxZQUFhO1lBQUEsaUJBQUk7WUFDeEIsaUJBQU07WUFDVixpQkFBTTtZQUNOLDhCQUNJO1lBQUEsd0NBQ0k7WUFEVSw4SkFBNkIsbUdBQTJCLHVCQUFtQixJQUE5QztZQUN2QyxnQ0FBZ0I7WUFBQSxhQUFjO1lBQUEsaUJBQU87WUFDekMsaUJBQWU7WUFDbkIsaUJBQU07WUFFTiwrQkFDSTtZQUFBLGtDQU9JO1lBUGdCLGtHQUFTLGlCQUFhLElBQUM7WUFPdkMsZ0NBQTZEO1lBQUEsbUJBQUU7WUFBQSxpQkFBTztZQUMxRSxpQkFBUztZQUdiLGlCQUFNO1lBQ1YsaUJBQU07O1lBM0JPLGVBQW1EO1lBQW5ELDBFQUFtRDtZQUdwRCxlQUFXO1lBQVgsK0JBQVc7WUFFUixlQUFhO1lBQWIsaUNBQWE7WUFJTixlQUE2QjtZQUE3Qiw2Q0FBNkI7WUFDdkIsZUFBYztZQUFkLGtDQUFjOzsrQkRiMUM7Q0E4REMsQUF6REQsSUF5REM7U0FwRFksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOztzQkFXSSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94Q2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYWxlcnQtZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC1kaWFsb2cuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIGRvbnRzaG93OiBzdHJpbmc7XHJcbiAgcHVibGljIHN1YmtleTogc3RyaW5nO1xyXG4gIHB1YmxpYyBpbWFnZVBhdGg6IHN0cmluZztcclxuICBwdWJsaWMgaW1hZ2VBbHQ6IHN0cmluZztcclxuICBkb250c2hvd2FueW1vcmU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpXHJcbiAgICBwcml2YXRlIGRhdGE6IHtcclxuICAgICAgTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICBUaXRsZTogc3RyaW5nO1xyXG4gICAgICBEb250U2hvdzogc3RyaW5nO1xyXG4gICAgICBTdWJLZXk6IHN0cmluZztcclxuICAgICAgSW1hZ2VQYXRoOiBzdHJpbmc7XHJcbiAgICAgIEltYWdlQWx0OiBzdHJpbmc7XHJcblxyXG4gICAgfSxcclxuICAgIHByaXZhdGUgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydERpYWxvZ0NvbXBvbmVudD5cclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSAnJztcclxuICAgIHRoaXMubWVzc2FnZSA9ICcnO1xyXG4gICAgdGhpcy5kb250c2hvdyA9ICcnO1xyXG4gICAgdGhpcy5zdWJrZXkgPSAnJztcclxuICAgIHRoaXMuaW1hZ2VQYXRoID0gJyc7XHJcbiAgICB0aGlzLmltYWdlQWx0ID0gJyc7XHJcbiAgICB0aGlzLmRvbnRzaG93YW55bW9yZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5kYXRhLlRpdGxlO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5kYXRhLk1lc3NhZ2U7XHJcbiAgICB0aGlzLmRvbnRzaG93ID0gdGhpcy5kYXRhLkRvbnRTaG93O1xyXG4gICAgdGhpcy5zdWJrZXkgPSB0aGlzLmRhdGEuU3ViS2V5O1xyXG4gICAgdGhpcy5pbWFnZVBhdGggPSB0aGlzLmRhdGEuSW1hZ2VQYXRoO1xyXG4gICAgdGhpcy5pbWFnZUFsdCA9IHRoaXMuZGF0YS5JbWFnZUFsdDtcclxuICB9XHJcblxyXG5cclxuc2hvd09wdGlvbnMoZXZlbnQ6TWF0Q2hlY2tib3hDaGFuZ2UpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy5kb250c2hvd2FueW1vcmUpXHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ0RPTlRTSE9XVVBEQVRFV0FSTicgLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ0RPTlRTSE9XVVBEQVRFV0FSTicgKTtcclxufVxyXG4gIHB1YmxpYyBjbG9zZURpYWxvZygpIHtcclxuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UoKTtcclxuXHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgc3R5bGU9XCJ6LWluZGV4OiAxXCIgc3R5bGU9XCIgbWF4LXdpZHRoOjQwMHB4O1wiPlxyXG5cclxuICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nOjIwcHggMHB4IDtcIj5cclxuICAgICAgICA8aW1nICpuZ0lmPVwiaW1hZ2VQYXRoICE9PSAnJyAmJiBpbWFnZVBhdGggIT09IHVuZGVmaW5lZFwiIG1hdC1jYXJkLWltYWdlIHN0eWxlPVwid2lkdGg6NTAlXCIgc3JjPVwie3sgaW1hZ2VQYXRoIH19XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6MjBweCAwcHggO1wiPlxyXG4gICAgICAgIDxoMj57eyB0aXRsZSB9fTwvaDI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6MTVweCAwcHggO1wiPlxyXG4gICAgICAgICAgICA8cD57eyBtZXNzYWdlIH19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzoxMHB4IDBweCA7XCI+XHJcbiAgICAgICAgPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImRvbnRzaG93YW55bW9yZVwiIG5hbWU9XCJkb250c2hvd1wiIChjaGFuZ2UpPVwic2hvd09wdGlvbnMoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8c3BhbiB0cmFuc2xhdGU+e3sgZG9udHNob3cgfX08L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47cGFkZGluZzogMTBweCAwcHggMHB4IDMwcHg7XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiAoY2xpY2spPVwiY2xvc2VEaWFsb2coKVwiIHN0eWxlPVwiIGJhY2tncm91bmQ6ICNlNzdiMmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHggNHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U3N2IyZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJsZXR0ZXItc3BhY2luZzogM3B4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXCI+T0s8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19