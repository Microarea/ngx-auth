import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
function ChangePasswordDialogComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "span", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r297 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r297.error, " ");
} }
export class ChangePasswordDialogComponent {
    constructor(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.error = '';
        this.title = data.Title;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.placeHolder2 = data.PlaceHolder2;
        this.newpwd = this.newpwd2 = '';
    }
    ngOnInit() { }
    cancel() {
        this.error = '';
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    }
    confirm() {
        this.error = '';
        if (this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined) {
            this.data.NewPwd = this.newpwd;
            this.mdDialogRef.close(this.data);
        }
        else {
            this.error = 'Passwords must be equal';
        }
    }
}
/** @nocollapse */ ChangePasswordDialogComponent.ɵfac = function ChangePasswordDialogComponent_Factory(t) { return new (t || ChangePasswordDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ ChangePasswordDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChangePasswordDialogComponent, selectors: [["app-change-password-dialog"]], decls: 15, vars: 7, consts: [[1, "app-dialog"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", "type", "password", 3, "placeholder", "ngModel", "ngModelChange"], ["class", "login-error", 4, "ngIf"], [1, "mt20"], ["mat-raised-button", "", 1, "left", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "right", 3, "click"], [1, "login-error"], [1, "k-icon", "k-i-warning"]], template: function ChangePasswordDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h2");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "label");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-form-field", 1);
        i0.ɵɵelementStart(6, "input", 2);
        i0.ɵɵlistener("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.newpwd = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-form-field", 1);
        i0.ɵɵelementStart(8, "input", 2);
        i0.ɵɵlistener("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_8_listener($event) { return ctx.newpwd2 = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, ChangePasswordDialogComponent_div_9_Template, 3, 1, "div", 3);
        i0.ɵɵelementStart(10, "div", 4);
        i0.ɵɵelementStart(11, "button", 5);
        i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_11_listener() { return ctx.cancel(); });
        i0.ɵɵtext(12, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 6);
        i0.ɵɵlistener("click", function ChangePasswordDialogComponent_Template_button_click_13_listener() { return ctx.confirm(); });
        i0.ɵɵtext(14, "OK");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", ctx.placeHolder)("ngModel", ctx.newpwd);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", ctx.placeHolder2)("ngModel", ctx.newpwd2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.error);
    } }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.NgIf], styles: [".right[_ngcontent-%COMP%]{float:right}.mt40[_ngcontent-%COMP%]{margin-top:40px}.mt20[_ngcontent-%COMP%]{margin-top:20px}.ml40[_ngcontent-%COMP%]{margin-left:40px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChangePasswordDialogComponent, [{
        type: Component,
        args: [{
                selector: 'app-change-password-dialog',
                templateUrl: './change-password-dialog.component.html',
                styleUrls: ['./change-password-dialog.component.scss']
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGIvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LnRzIiwibGliL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBK0MsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7SUNVbEgsOEJBQ0k7SUFBQSwwQkFBd0M7SUFBQSxZQUM1QztJQUFBLGlCQUFNOzs7SUFEc0MsZUFDNUM7SUFENEMsOENBQzVDOztBRExKLE1BQU0sT0FBTyw2QkFBNkI7SUFVeEMsWUFFUyxXQUF3RCxFQUM5QixJQUFTO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUE2QztRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxRQUFRLEtBQUssQ0FBQztJQUNQLE1BQU07UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyx5QkFBeUIsQ0FBQztTQUN4QztJQUNILENBQUM7OzBHQXRDVSw2QkFBNkIsOERBYTlCLGVBQWU7a0VBYmQsNkJBQTZCO1FDUjFDLDhCQUNJO1FBQUEsMEJBQUk7UUFBQSxZQUFXO1FBQUEsaUJBQUs7UUFDcEIsNkJBQU87UUFBQSxZQUFhO1FBQUEsaUJBQVE7UUFFNUIseUNBQ0k7UUFBQSxnQ0FDSjtRQUR3RSxzSkFBb0I7UUFBeEYsaUJBQ0o7UUFBQSxpQkFBaUI7UUFFakIseUNBQ0k7UUFBQSxnQ0FDSjtRQUR5RSx1SkFBcUI7UUFBMUYsaUJBQ0o7UUFBQSxpQkFBaUI7UUFDakIsOEVBQ0k7UUFFSiwrQkFDSTtRQUFBLGtDQUEwRDtRQUFsRCwyR0FBUyxZQUFRLElBQUM7UUFBZ0MsdUJBQU07UUFBQSxpQkFBUztRQUV6RSxrQ0FBNEU7UUFBcEUsMkdBQVMsYUFBUyxJQUFDO1FBQWlELG1CQUFFO1FBQUEsaUJBQVM7UUFDM0YsaUJBQU07UUFDVixpQkFBTTs7UUFsQkUsZUFBVztRQUFYLCtCQUFXO1FBQ1IsZUFBYTtRQUFiLGlDQUFhO1FBR0EsZUFBMkI7UUFBM0IsNkNBQTJCLHVCQUFBO1FBSTNCLGVBQTRCO1FBQTVCLDhDQUE0Qix3QkFBQTtRQUV2QixlQUFhO1FBQWIsZ0NBQWE7O2tEREg3Qiw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2FBQ3ZEOztzQkFjSSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dNb2R1bGUsIE1BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNoYW5nZS1wYXNzd29yZC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHVibGljIGVycm9yOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgcGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBwdWJsaWMgcGxhY2VIb2xkZXIyOiBzdHJpbmc7XHJcbiAgcHVibGljIG5ld3B3ZDogc3RyaW5nO1xyXG4gIHB1YmxpYyBuZXdwd2QyOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG5cclxuICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy5lcnJvciA9ICcnO1xyXG4gICAgdGhpcy50aXRsZSA9IGRhdGEuVGl0bGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLk1lc3NhZ2U7XHJcbiAgICB0aGlzLnBsYWNlSG9sZGVyID0gZGF0YS5QbGFjZUhvbGRlcjtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIyID0gZGF0YS5QbGFjZUhvbGRlcjI7XHJcbiAgICB0aGlzLm5ld3B3ZCA9IHRoaXMubmV3cHdkMiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuICBwdWJsaWMgY2FuY2VsKCkge1xyXG4gICAgdGhpcy5lcnJvciA9ICcnO1xyXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbmZpcm0oKSB7XHJcbiAgICB0aGlzLmVycm9yID0gJyc7XHJcbiAgICBpZiAodGhpcy5uZXdwd2QgPT09IHRoaXMubmV3cHdkMiAmJiB0aGlzLm5ld3B3ZDIgIT09ICcnICYmIHRoaXMubmV3cHdkMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5OZXdQd2QgPSB0aGlzLm5ld3B3ZDtcclxuICAgICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lcnJvciA9ICdQYXNzd29yZHMgbXVzdCBiZSBlcXVhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhcHAtZGlhbG9nXCI+XHJcbiAgICA8aDI+e3sgdGl0bGUgfX08L2gyPlxyXG4gICAgPGxhYmVsPnt7IG1lc3NhZ2UgfX08L2xhYmVsPlxyXG5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBzdHlsZT1cIm1pbi13aWR0aDoxMDAlXCIgY2xhc3M9XCJtdDEwXCI+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlclwiIGFkbWluQXV0b0ZvY3VzIHZhbHVlPVwiXCIgWyhuZ01vZGVsKV09XCJuZXdwd2RcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgc3R5bGU9XCJtaW4td2lkdGg6MTAwJVwiIGNsYXNzPVwibXQxMFwiPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXIyXCIgYWRtaW5BdXRvRm9jdXMgdmFsdWU9XCJcIiBbKG5nTW9kZWwpXT1cIm5ld3B3ZDJcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1lcnJvclwiICpuZ0lmPVwiZXJyb3JcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImstaWNvbiBrLWktd2FybmluZ1wiPjwvc3Bhbj57eyBlcnJvciB9fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQyMFwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNhbmNlbCgpXCIgY2xhc3M9XCJsZWZ0XCIgbWF0LXJhaXNlZC1idXR0b24+Q2FuY2VsPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNvbmZpcm0oKVwiIGNsYXNzPVwicmlnaHRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5PSzwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==