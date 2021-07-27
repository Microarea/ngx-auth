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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50LnRzIiwibGliL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztJQ0FyRSx5QkFDQTs7O0lBRHlELHlEQUFlLHlCQUFBOztBREc1RTtJQWNFLDhCQUVVLElBUVAsRUFDTyxXQUErQztRQVQvQyxTQUFJLEdBQUosSUFBSSxDQVFYO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQW9DO1FBRXZELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUdILDBDQUFXLEdBQVgsVUFBWSxLQUF1QjtRQUUvQixJQUFJLElBQUksQ0FBQyxlQUFlO1lBQ3RCLGNBQWMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUU1RCxjQUFjLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFFLENBQUM7SUFDdkQsQ0FBQztJQUNRLDBDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUUzQixDQUFDOzRGQW5EVSxvQkFBb0IsdUJBVXJCLGVBQWU7NkRBVmQsb0JBQW9CO1lDVmpDLDhCQUNJO1lBQUEsMEJBQUk7WUFBQSxZQUFXO1lBQUEsaUJBQUs7WUFDcEIscUVBQ0E7WUFBQSw0QkFBZ0I7WUFBQSxZQUFhO1lBQUEsaUJBQUk7WUFFakMsMkJBQ0k7WUFBQSx1Q0FBMkY7WUFBN0UsNkpBQTZCLGtHQUEyQix1QkFBbUIsSUFBOUM7WUFBZ0QsK0JBQWdCO1lBQUEsWUFBYztZQUFBLGlCQUFPO1lBQ2hJLGlCQUFlO1lBQ25CLGlCQUFNO1lBQ04sa0NBQThEO1lBQXRELGtHQUFTLGlCQUFhLElBQUM7WUFBK0IsbUJBQUU7WUFBQSxpQkFBUztZQUM3RSxpQkFBTTs7WUFURSxlQUFXO1lBQVgsK0JBQVc7WUFDVixlQUFtRDtZQUFuRCwwRUFBbUQ7WUFDeEMsZUFBYTtZQUFiLGlDQUFhO1lBR1gsZUFBNkI7WUFBN0IsNkNBQTZCO1lBQWdFLGVBQWM7WUFBZCxrQ0FBYzs7K0JETmpJO0NBOERDLEFBekRELElBeURDO1NBcERZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7c0JBV0ksTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFsZXJ0LWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBkb250c2hvdzogc3RyaW5nO1xyXG4gIHB1YmxpYyBzdWJrZXk6IHN0cmluZztcclxuICBwdWJsaWMgaW1hZ2VQYXRoOiBzdHJpbmc7XHJcbiAgcHVibGljIGltYWdlQWx0OiBzdHJpbmc7XHJcbiAgZG9udHNob3dhbnltb3JlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKVxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7XHJcbiAgICAgIE1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgVGl0bGU6IHN0cmluZztcclxuICAgICAgRG9udFNob3c6IHN0cmluZztcclxuICAgICAgU3ViS2V5OiBzdHJpbmc7XHJcbiAgICAgIEltYWdlUGF0aDogc3RyaW5nO1xyXG4gICAgICBJbWFnZUFsdDogc3RyaW5nO1xyXG5cclxuICAgIH0sXHJcbiAgICBwcml2YXRlIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnREaWFsb2dDb21wb25lbnQ+XHJcbiAgKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gJyc7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSAnJztcclxuICAgIHRoaXMuZG9udHNob3cgPSAnJztcclxuICAgIHRoaXMuc3Via2V5ID0gJyc7XHJcbiAgICB0aGlzLmltYWdlUGF0aCA9ICcnO1xyXG4gICAgdGhpcy5pbWFnZUFsdCA9ICcnO1xyXG4gICAgdGhpcy5kb250c2hvd2FueW1vcmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0YS5UaXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZGF0YS5NZXNzYWdlO1xyXG4gICAgdGhpcy5kb250c2hvdyA9IHRoaXMuZGF0YS5Eb250U2hvdztcclxuICAgIHRoaXMuc3Via2V5ID0gdGhpcy5kYXRhLlN1YktleTtcclxuICAgIHRoaXMuaW1hZ2VQYXRoID0gdGhpcy5kYXRhLkltYWdlUGF0aDtcclxuICAgIHRoaXMuaW1hZ2VBbHQgPSB0aGlzLmRhdGEuSW1hZ2VBbHQ7XHJcbiAgfVxyXG5cclxuXHJcbnNob3dPcHRpb25zKGV2ZW50Ok1hdENoZWNrYm94Q2hhbmdlKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMuZG9udHNob3dhbnltb3JlKVxyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdET05UU0hPV1VQREFURVdBUk4nICwgdGhpcy5tZXNzYWdlKTtcclxuICAgICAgZWxzZVxyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdET05UU0hPV1VQREFURVdBUk4nICk7XHJcbn1cclxuICBwdWJsaWMgY2xvc2VEaWFsb2coKSB7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKCk7XHJcblxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYXBwLWRpYWxvZ1wiPlxyXG4gICAgPGgyPnt7IHRpdGxlIH19PC9oMj5cclxuICAgIDxpbWcgKm5nSWY9XCJpbWFnZVBhdGggIT09ICcnICYmIGltYWdlUGF0aCAhPT0gdW5kZWZpbmVkXCIgW3NyY109aW1hZ2VQYXRoIFthbHRdPWltYWdlQWx0PlxyXG4gICAgPHAgY2xhc3M9XCJtdDIwXCI+e3sgbWVzc2FnZSB9fTwvcD5cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJkb250c2hvd2FueW1vcmVcIiBuYW1lPVwiZG9udHNob3dcIiAoY2hhbmdlKT1cInNob3dPcHRpb25zKCRldmVudClcIj48c3BhbiB0cmFuc2xhdGU+e3sgZG9udHNob3cgfX08L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImNsb3NlRGlhbG9nKClcIiBjbGFzcz1cInJpZ2h0IG10MzBcIiBtYXQtYnV0dG9uPk9LPC9idXR0b24+XHJcbjwvZGl2PiJdfQ==