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
        this.subkey = '';
        this.imagePath = '';
        this.imageAlt = '';
        this.dontshowanymore = false;
    }
    ngOnInit() {
        this.title = this.data.Title;
        this.message = this.data.Message;
        this.dontshow = this.data.DontShow;
        this.subkey = this.data.SubKey;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50LnRzIiwibGliL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztJQ0FyRSx5QkFDQTs7O0lBRHlELHdEQUFlLHdCQUFBOztBRFE1RSxNQUFNLE9BQU8sb0JBQW9CO0lBUy9CLFlBRVUsSUFRUCxFQUNPLFdBQStDO1FBVC9DLFNBQUksR0FBSixJQUFJLENBUVg7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0M7UUFFdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBR0gsV0FBVyxDQUFDLEtBQXVCO1FBRS9CLElBQUksSUFBSSxDQUFDLGVBQWU7WUFDdEIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRTVELGNBQWMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUUsQ0FBQztJQUN2RCxDQUFDO0lBQ1EsV0FBVztRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTNCLENBQUM7O3dGQW5EVSxvQkFBb0IsdUJBVXJCLGVBQWU7eURBVmQsb0JBQW9CO1FDVmpDLDhCQUNJO1FBQUEsMEJBQUk7UUFBQSxZQUFXO1FBQUEsaUJBQUs7UUFDcEIscUVBQ0E7UUFBQSw0QkFBZ0I7UUFBQSxZQUFhO1FBQUEsaUJBQUk7UUFFakMsMkJBQ0k7UUFBQSx1Q0FBMkY7UUFBN0UsNkpBQTZCLGtHQUEyQix1QkFBbUIsSUFBOUM7UUFBZ0QsK0JBQWdCO1FBQUEsWUFBYztRQUFBLGlCQUFPO1FBQ2hJLGlCQUFlO1FBQ25CLGlCQUFNO1FBQ04sa0NBQThEO1FBQXRELGtHQUFTLGlCQUFhLElBQUM7UUFBK0IsbUJBQUU7UUFBQSxpQkFBUztRQUM3RSxpQkFBTTs7UUFURSxlQUFXO1FBQVgsK0JBQVc7UUFDVixlQUFtRDtRQUFuRCwwRUFBbUQ7UUFDeEMsZUFBYTtRQUFiLGlDQUFhO1FBR1gsZUFBNkI7UUFBN0IsNkNBQTZCO1FBQWdFLGVBQWM7UUFBZCxrQ0FBYzs7a0RESXBILG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7O3NCQVdJLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hbGVydC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgZG9udHNob3c6IHN0cmluZztcclxuICBwdWJsaWMgc3Via2V5OiBzdHJpbmc7XHJcbiAgcHVibGljIGltYWdlUGF0aDogc3RyaW5nO1xyXG4gIHB1YmxpYyBpbWFnZUFsdDogc3RyaW5nO1xyXG4gIGRvbnRzaG93YW55bW9yZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSlcclxuICAgIHByaXZhdGUgZGF0YToge1xyXG4gICAgICBNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgIFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgIERvbnRTaG93OiBzdHJpbmc7XHJcbiAgICAgIFN1YktleTogc3RyaW5nO1xyXG4gICAgICBJbWFnZVBhdGg6IHN0cmluZztcclxuICAgICAgSW1hZ2VBbHQ6IHN0cmluZztcclxuXHJcbiAgICB9LFxyXG4gICAgcHJpdmF0ZSBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0RGlhbG9nQ29tcG9uZW50PlxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9ICcnO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gJyc7XHJcbiAgICB0aGlzLmRvbnRzaG93ID0gJyc7XHJcbiAgICB0aGlzLnN1YmtleSA9ICcnO1xyXG4gICAgdGhpcy5pbWFnZVBhdGggPSAnJztcclxuICAgIHRoaXMuaW1hZ2VBbHQgPSAnJztcclxuICAgIHRoaXMuZG9udHNob3dhbnltb3JlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEuVGl0bGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMuZG9udHNob3cgPSB0aGlzLmRhdGEuRG9udFNob3c7XHJcbiAgICB0aGlzLnN1YmtleSA9IHRoaXMuZGF0YS5TdWJLZXk7XHJcbiAgICB0aGlzLmltYWdlUGF0aCA9IHRoaXMuZGF0YS5JbWFnZVBhdGg7XHJcbiAgICB0aGlzLmltYWdlQWx0ID0gdGhpcy5kYXRhLkltYWdlQWx0O1xyXG4gIH1cclxuXHJcblxyXG5zaG93T3B0aW9ucyhldmVudDpNYXRDaGVja2JveENoYW5nZSk6IHZvaWQge1xyXG5cclxuICAgIGlmICh0aGlzLmRvbnRzaG93YW55bW9yZSlcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyAsIHRoaXMubWVzc2FnZSk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyApO1xyXG59XHJcbiAgcHVibGljIGNsb3NlRGlhbG9nKCkge1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSgpO1xyXG5cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFwcC1kaWFsb2dcIj5cclxuICAgIDxoMj57eyB0aXRsZSB9fTwvaDI+XHJcbiAgICA8aW1nICpuZ0lmPVwiaW1hZ2VQYXRoICE9PSAnJyAmJiBpbWFnZVBhdGggIT09IHVuZGVmaW5lZFwiIFtzcmNdPWltYWdlUGF0aCBbYWx0XT1pbWFnZUFsdD5cclxuICAgIDxwIGNsYXNzPVwibXQyMFwiPnt7IG1lc3NhZ2UgfX08L3A+XHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZG9udHNob3dhbnltb3JlXCIgbmFtZT1cImRvbnRzaG93XCIgKGNoYW5nZSk9XCJzaG93T3B0aW9ucygkZXZlbnQpXCI+PHNwYW4gdHJhbnNsYXRlPnt7IGRvbnRzaG93IH19PC9zcGFuPlxyXG4gICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjbG9zZURpYWxvZygpXCIgY2xhc3M9XCJyaWdodCBtdDMwXCIgbWF0LWJ1dHRvbj5PSzwvYnV0dG9uPlxyXG48L2Rpdj4iXX0=