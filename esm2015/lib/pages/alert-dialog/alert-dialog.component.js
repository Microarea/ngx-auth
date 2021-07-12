import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "@angular/forms";
function AlertDialogComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r1.imagePath, i0.ɵɵsanitizeUrl)("alt", ctx_r1.imageAlt);
} }
export class AlertDialogComponent {
    constructor(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
        this.title = '';
        this.message = '';
        this.dontshow = '';
        this.imagePath = '';
        this.imageAlt = '';
        this.dontshowanymore = false;
    }
    ngOnInit() {
        this.title = this.data.Title;
        this.message = this.data.Message;
        this.dontshow = this.data.DontShow;
        this.imagePath = this.data.ImagePath;
        this.imageAlt = this.data.ImageAlt;
    }
    showOptions(event) {
        if (this.dontshowanymore)
            sessionStorage.setItem('DONTSHOWUPDATEWARN', this.message);
        else
            sessionStorage.removeItem('DONTSHOWUPDATEWARN');
    }
    closeDialog() {
        this.mdDialogRef.close();
    }
}
/** @nocollapse */ AlertDialogComponent.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
/** @nocollapse */ AlertDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertDialogComponent, selectors: [["app-alert-dialog"]], decls: 12, vars: 5, consts: [[1, "app-dialog"], [3, "src", "alt", 4, "ngIf"], [1, "mt20"], ["name", "dontshow", 3, "ngModel", "ngModelChange", "change"], ["translate", ""], ["mat-button", "", 1, "right", "mt30", 3, "click"], [3, "src", "alt"]], template: function AlertDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h2");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, AlertDialogComponent_img_3_Template, 1, 2, "img", 1);
        i0.ɵɵelementStart(4, "p", 2);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div");
        i0.ɵɵelementStart(7, "mat-checkbox", 3);
        i0.ɵɵlistener("ngModelChange", function AlertDialogComponent_Template_mat_checkbox_ngModelChange_7_listener($event) { return ctx.dontshowanymore = $event; })("change", function AlertDialogComponent_Template_mat_checkbox_change_7_listener($event) { return ctx.showOptions($event); });
        i0.ɵɵelementStart(8, "span", 4);
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 5);
        i0.ɵɵlistener("click", function AlertDialogComponent_Template_button_click_10_listener() { return ctx.closeDialog(); });
        i0.ɵɵtext(11, "OK");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.imagePath !== "" && ctx.imagePath !== undefined);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.dontshowanymore);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.dontshow);
    } }, directives: [i2.NgIf, i3.MatCheckbox, i4.NgControlStatus, i4.NgModel], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50LnRzIiwibGliL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztJQ0FyRSx5QkFDQTs7O0lBRHlELHdEQUFlLHdCQUFBOztBRFE1RSxNQUFNLE9BQU8sb0JBQW9CO0lBUS9CLFlBRVUsSUFNUCxFQUNPLFdBQStDO1FBUC9DLFNBQUksR0FBSixJQUFJLENBTVg7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0M7UUFFdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUdILFdBQVcsQ0FBQyxLQUF1QjtRQUUvQixJQUFJLElBQUksQ0FBQyxlQUFlO1lBQ3RCLGNBQWMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUU1RCxjQUFjLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFFLENBQUM7SUFDdkQsQ0FBQztJQUNRLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDOzt3RkE3Q1Usb0JBQW9CLHVCQVNyQixlQUFlO3lEQVRkLG9CQUFvQjtRQ1ZqQyw4QkFDSTtRQUFBLDBCQUFJO1FBQUEsWUFBVztRQUFBLGlCQUFLO1FBQ3BCLHFFQUNBO1FBQUEsNEJBQWdCO1FBQUEsWUFBYTtRQUFBLGlCQUFJO1FBRWpDLDJCQUNJO1FBQUEsdUNBQTJGO1FBQTdFLDZKQUE2QixrR0FBMkIsdUJBQW1CLElBQTlDO1FBQWdELCtCQUFnQjtRQUFBLFlBQWM7UUFBQSxpQkFBTztRQUNoSSxpQkFBZTtRQUNuQixpQkFBTTtRQUNOLGtDQUE4RDtRQUF0RCxrR0FBUyxpQkFBYSxJQUFDO1FBQStCLG1CQUFFO1FBQUEsaUJBQVM7UUFDN0UsaUJBQU07O1FBVEUsZUFBVztRQUFYLCtCQUFXO1FBQ1YsZUFBbUQ7UUFBbkQsMEVBQW1EO1FBQ3hDLGVBQWE7UUFBYixpQ0FBYTtRQUdYLGVBQTZCO1FBQTdCLDZDQUE2QjtRQUFnRSxlQUFjO1FBQWQsa0NBQWM7O2tERElwSCxvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOztzQkFVSSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94Q2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYWxlcnQtZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC1kaWFsb2cuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIGRvbnRzaG93OiBzdHJpbmc7XHJcbiAgcHVibGljIGltYWdlUGF0aDogc3RyaW5nO1xyXG4gIHB1YmxpYyBpbWFnZUFsdDogc3RyaW5nO1xyXG4gIGRvbnRzaG93YW55bW9yZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSlcclxuICAgIHByaXZhdGUgZGF0YToge1xyXG4gICAgICBNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgIFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgIERvbnRTaG93OiBzdHJpbmc7XHJcbiAgICAgIEltYWdlUGF0aDogc3RyaW5nO1xyXG4gICAgICBJbWFnZUFsdDogc3RyaW5nO1xyXG4gICAgfSxcclxuICAgIHByaXZhdGUgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydERpYWxvZ0NvbXBvbmVudD5cclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSAnJztcclxuICAgIHRoaXMubWVzc2FnZSA9ICcnO1xyXG4gICAgdGhpcy5kb250c2hvdyA9ICcnO1xyXG4gICAgdGhpcy5pbWFnZVBhdGggPSAnJztcclxuICAgIHRoaXMuaW1hZ2VBbHQgPSAnJztcclxuICAgIHRoaXMuZG9udHNob3dhbnltb3JlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEuVGl0bGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMuZG9udHNob3cgPSB0aGlzLmRhdGEuRG9udFNob3c7XHJcbiAgICB0aGlzLmltYWdlUGF0aCA9IHRoaXMuZGF0YS5JbWFnZVBhdGg7XHJcbiAgICB0aGlzLmltYWdlQWx0ID0gdGhpcy5kYXRhLkltYWdlQWx0O1xyXG4gIH1cclxuICBcclxuXHJcbnNob3dPcHRpb25zKGV2ZW50Ok1hdENoZWNrYm94Q2hhbmdlKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMuZG9udHNob3dhbnltb3JlKVxyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdET05UU0hPV1VQREFURVdBUk4nICwgdGhpcy5tZXNzYWdlKTtcclxuICAgICAgZWxzZVxyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdET05UU0hPV1VQREFURVdBUk4nICk7XHJcbn1cclxuICBwdWJsaWMgY2xvc2VEaWFsb2coKSB7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhcHAtZGlhbG9nXCI+XHJcbiAgICA8aDI+e3sgdGl0bGUgfX08L2gyPlxyXG4gICAgPGltZyAqbmdJZj1cImltYWdlUGF0aCAhPT0gJycgJiYgaW1hZ2VQYXRoICE9PSB1bmRlZmluZWRcIiBbc3JjXT1pbWFnZVBhdGggW2FsdF09aW1hZ2VBbHQ+XHJcbiAgICA8cCBjbGFzcz1cIm10MjBcIj57eyBtZXNzYWdlIH19PC9wPlxyXG5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImRvbnRzaG93YW55bW9yZVwiIG5hbWU9XCJkb250c2hvd1wiIChjaGFuZ2UpPVwic2hvd09wdGlvbnMoJGV2ZW50KVwiPjxzcGFuIHRyYW5zbGF0ZT57eyBkb250c2hvdyB9fTwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiY2xvc2VEaWFsb2coKVwiIGNsYXNzPVwicmlnaHQgbXQzMFwiIG1hdC1idXR0b24+T0s8L2J1dHRvbj5cclxuPC9kaXY+Il19