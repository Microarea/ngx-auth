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
    var ctx_r35 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r35.imagePath, i0.ɵɵsanitizeUrl)("alt", ctx_r35.imageAlt);
} }
var AlertDialogComponent = /** @class */ (function () {
    function AlertDialogComponent(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
        this.title = '';
        this.message = '';
        this.dontshow = '';
        this.imagePath = '';
        this.imageAlt = '';
        this.dontshowanymore = false;
    }
    AlertDialogComponent.prototype.ngOnInit = function () {
        this.title = this.data.Title;
        this.message = this.data.Message;
        this.dontshow = this.data.DontShow;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50LnRzIiwibGliL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztJQ0FyRSx5QkFDQTs7O0lBRHlELHlEQUFlLHlCQUFBOztBREc1RTtJQWFFLDhCQUVVLElBTVAsRUFDTyxXQUErQztRQVAvQyxTQUFJLEdBQUosSUFBSSxDQU1YO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQW9DO1FBRXZELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFHSCwwQ0FBVyxHQUFYLFVBQVksS0FBdUI7UUFFL0IsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUN0QixjQUFjLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFFNUQsY0FBYyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBRSxDQUFDO0lBQ3ZELENBQUM7SUFDUSwwQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs0RkE3Q1Usb0JBQW9CLHVCQVNyQixlQUFlOzZEQVRkLG9CQUFvQjtZQ1ZqQyw4QkFDSTtZQUFBLDBCQUFJO1lBQUEsWUFBVztZQUFBLGlCQUFLO1lBQ3BCLHFFQUNBO1lBQUEsNEJBQWdCO1lBQUEsWUFBYTtZQUFBLGlCQUFJO1lBRWpDLDJCQUNJO1lBQUEsdUNBQTJGO1lBQTdFLDZKQUE2QixrR0FBMkIsdUJBQW1CLElBQTlDO1lBQWdELCtCQUFnQjtZQUFBLFlBQWM7WUFBQSxpQkFBTztZQUNoSSxpQkFBZTtZQUNuQixpQkFBTTtZQUNOLGtDQUE4RDtZQUF0RCxrR0FBUyxpQkFBYSxJQUFDO1lBQStCLG1CQUFFO1lBQUEsaUJBQVM7WUFDN0UsaUJBQU07O1lBVEUsZUFBVztZQUFYLCtCQUFXO1lBQ1YsZUFBbUQ7WUFBbkQsMEVBQW1EO1lBQ3hDLGVBQWE7WUFBYixpQ0FBYTtZQUdYLGVBQTZCO1lBQTdCLDZDQUE2QjtZQUFnRSxlQUFjO1lBQWQsa0NBQWM7OytCRE5qSTtDQXdEQyxBQW5ERCxJQW1EQztTQTlDWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7O3NCQVVJLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hbGVydC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgZG9udHNob3c6IHN0cmluZztcclxuICBwdWJsaWMgaW1hZ2VQYXRoOiBzdHJpbmc7XHJcbiAgcHVibGljIGltYWdlQWx0OiBzdHJpbmc7XHJcbiAgZG9udHNob3dhbnltb3JlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKVxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7XHJcbiAgICAgIE1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgVGl0bGU6IHN0cmluZztcclxuICAgICAgRG9udFNob3c6IHN0cmluZztcclxuICAgICAgSW1hZ2VQYXRoOiBzdHJpbmc7XHJcbiAgICAgIEltYWdlQWx0OiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgcHJpdmF0ZSBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0RGlhbG9nQ29tcG9uZW50PlxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9ICcnO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gJyc7XHJcbiAgICB0aGlzLmRvbnRzaG93ID0gJyc7XHJcbiAgICB0aGlzLmltYWdlUGF0aCA9ICcnO1xyXG4gICAgdGhpcy5pbWFnZUFsdCA9ICcnO1xyXG4gICAgdGhpcy5kb250c2hvd2FueW1vcmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0YS5UaXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZGF0YS5NZXNzYWdlO1xyXG4gICAgdGhpcy5kb250c2hvdyA9IHRoaXMuZGF0YS5Eb250U2hvdztcclxuICAgIHRoaXMuaW1hZ2VQYXRoID0gdGhpcy5kYXRhLkltYWdlUGF0aDtcclxuICAgIHRoaXMuaW1hZ2VBbHQgPSB0aGlzLmRhdGEuSW1hZ2VBbHQ7XHJcbiAgfVxyXG4gIFxyXG5cclxuc2hvd09wdGlvbnMoZXZlbnQ6TWF0Q2hlY2tib3hDaGFuZ2UpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy5kb250c2hvd2FueW1vcmUpXHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ0RPTlRTSE9XVVBEQVRFV0FSTicgLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ0RPTlRTSE9XVVBEQVRFV0FSTicgKTtcclxufVxyXG4gIHB1YmxpYyBjbG9zZURpYWxvZygpIHtcclxuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFwcC1kaWFsb2dcIj5cclxuICAgIDxoMj57eyB0aXRsZSB9fTwvaDI+XHJcbiAgICA8aW1nICpuZ0lmPVwiaW1hZ2VQYXRoICE9PSAnJyAmJiBpbWFnZVBhdGggIT09IHVuZGVmaW5lZFwiIFtzcmNdPWltYWdlUGF0aCBbYWx0XT1pbWFnZUFsdD5cclxuICAgIDxwIGNsYXNzPVwibXQyMFwiPnt7IG1lc3NhZ2UgfX08L3A+XHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZG9udHNob3dhbnltb3JlXCIgbmFtZT1cImRvbnRzaG93XCIgKGNoYW5nZSk9XCJzaG93T3B0aW9ucygkZXZlbnQpXCI+PHNwYW4gdHJhbnNsYXRlPnt7IGRvbnRzaG93IH19PC9zcGFuPlxyXG4gICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjbG9zZURpYWxvZygpXCIgY2xhc3M9XCJyaWdodCBtdDMwXCIgbWF0LWJ1dHRvbj5PSzwvYnV0dG9uPlxyXG48L2Rpdj4iXX0=