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
    var ctx_r322 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r322.error, " ");
} }
var ChangePasswordDialogComponent = /** @class */ (function () {
    function ChangePasswordDialogComponent(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.error = '';
        this.title = data.Title;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.placeHolder2 = data.PlaceHolder2;
        this.newpwd = this.newpwd2 = '';
    }
    ChangePasswordDialogComponent.prototype.ngOnInit = function () { };
    ChangePasswordDialogComponent.prototype.cancel = function () {
        this.error = '';
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    };
    ChangePasswordDialogComponent.prototype.confirm = function () {
        this.error = '';
        if (this.newpwd === this.newpwd2 && this.newpwd2 !== '' && this.newpwd2 !== undefined) {
            this.data.NewPwd = this.newpwd;
            this.mdDialogRef.close(this.data);
        }
        else {
            this.error = 'Passwords must be equal';
        }
    };
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
    return ChangePasswordDialogComponent;
}());
export { ChangePasswordDialogComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGIvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LnRzIiwibGliL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBK0MsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7SUNVbEgsOEJBQ0k7SUFBQSwwQkFBd0M7SUFBQSxZQUM1QztJQUFBLGlCQUFNOzs7SUFEc0MsZUFDNUM7SUFENEMsOENBQzVDOztBRFZKO0lBZUUsdUNBRVMsV0FBd0QsRUFDOUIsSUFBUztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBNkM7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUUxQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0RBQVEsR0FBUixjQUFhLENBQUM7SUFDUCw4Q0FBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSwrQ0FBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcseUJBQXlCLENBQUM7U0FDeEM7SUFDSCxDQUFDOzhHQXRDVSw2QkFBNkIsOERBYTlCLGVBQWU7c0VBYmQsNkJBQTZCO1lDUjFDLDhCQUNJO1lBQUEsMEJBQUk7WUFBQSxZQUFXO1lBQUEsaUJBQUs7WUFDcEIsNkJBQU87WUFBQSxZQUFhO1lBQUEsaUJBQVE7WUFFNUIseUNBQ0k7WUFBQSxnQ0FDSjtZQUR3RSxzSkFBb0I7WUFBeEYsaUJBQ0o7WUFBQSxpQkFBaUI7WUFFakIseUNBQ0k7WUFBQSxnQ0FDSjtZQUR5RSx1SkFBcUI7WUFBMUYsaUJBQ0o7WUFBQSxpQkFBaUI7WUFDakIsOEVBQ0k7WUFFSiwrQkFDSTtZQUFBLGtDQUEwRDtZQUFsRCwyR0FBUyxZQUFRLElBQUM7WUFBZ0MsdUJBQU07WUFBQSxpQkFBUztZQUV6RSxrQ0FBNEU7WUFBcEUsMkdBQVMsYUFBUyxJQUFDO1lBQWlELG1CQUFFO1lBQUEsaUJBQVM7WUFDM0YsaUJBQU07WUFDVixpQkFBTTs7WUFsQkUsZUFBVztZQUFYLCtCQUFXO1lBQ1IsZUFBYTtZQUFiLGlDQUFhO1lBR0EsZUFBMkI7WUFBM0IsNkNBQTJCLHVCQUFBO1lBSTNCLGVBQTRCO1lBQTVCLDhDQUE0Qix3QkFBQTtZQUV2QixlQUFhO1lBQWIsZ0NBQWE7O3dDRFgxQztDQStDQyxBQTVDRCxJQTRDQztTQXZDWSw2QkFBNkI7a0RBQTdCLDZCQUE2QjtjQUx6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLHlDQUF5QztnQkFDdEQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7YUFDdkQ7O3NCQWNJLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2hhbmdlLXBhc3N3b3JkLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgZXJyb3I6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBwbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBwbGFjZUhvbGRlcjI6IHN0cmluZztcclxuICBwdWJsaWMgbmV3cHdkOiBzdHJpbmc7XHJcbiAgcHVibGljIG5ld3B3ZDI6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcblxyXG4gICAgcHVibGljIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmVycm9yID0gJyc7XHJcbiAgICB0aGlzLnRpdGxlID0gZGF0YS5UaXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkYXRhLlBsYWNlSG9sZGVyO1xyXG4gICAgdGhpcy5wbGFjZUhvbGRlcjIgPSBkYXRhLlBsYWNlSG9sZGVyMjtcclxuICAgIHRoaXMubmV3cHdkID0gdGhpcy5uZXdwd2QyID0gJyc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG4gIHB1YmxpYyBjYW5jZWwoKSB7XHJcbiAgICB0aGlzLmVycm9yID0gJyc7XHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uZmlybSgpIHtcclxuICAgIHRoaXMuZXJyb3IgPSAnJztcclxuICAgIGlmICh0aGlzLm5ld3B3ZCA9PT0gdGhpcy5uZXdwd2QyICYmIHRoaXMubmV3cHdkMiAhPT0gJycgJiYgdGhpcy5uZXdwd2QyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5kYXRhLk5ld1B3ZCA9IHRoaXMubmV3cHdkO1xyXG4gICAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVycm9yID0gJ1Bhc3N3b3JkcyBtdXN0IGJlIGVxdWFsJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFwcC1kaWFsb2dcIj5cclxuICAgIDxoMj57eyB0aXRsZSB9fTwvaDI+XHJcbiAgICA8bGFiZWw+e3sgbWVzc2FnZSB9fTwvbGFiZWw+XHJcblxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIHN0eWxlPVwibWluLXdpZHRoOjEwMCVcIiBjbGFzcz1cIm10MTBcIj5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCIgYWRtaW5BdXRvRm9jdXMgdmFsdWU9XCJcIiBbKG5nTW9kZWwpXT1cIm5ld3B3ZFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBzdHlsZT1cIm1pbi13aWR0aDoxMDAlXCIgY2xhc3M9XCJtdDEwXCI+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlcjJcIiBhZG1pbkF1dG9Gb2N1cyB2YWx1ZT1cIlwiIFsobmdNb2RlbCldPVwibmV3cHdkMlwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPGRpdiBjbGFzcz1cImxvZ2luLWVycm9yXCIgKm5nSWY9XCJlcnJvclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiay1pY29uIGstaS13YXJuaW5nXCI+PC9zcGFuPnt7IGVycm9yIH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtdDIwXCI+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2FuY2VsKClcIiBjbGFzcz1cImxlZnRcIiBtYXQtcmFpc2VkLWJ1dHRvbj5DYW5jZWw8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY29uZmlybSgpXCIgY2xhc3M9XCJyaWdodFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPk9LPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+Il19