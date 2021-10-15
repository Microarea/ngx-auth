import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.title = data.Title;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.inputValue = data.TextValue;
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
            this.buttonCancel = "Annulla";
        }
        else {
            this.buttonCancel = "Cancel";
        }
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () { };
    ForgotPasswordComponent.prototype.cancel = function () {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    };
    ForgotPasswordComponent.prototype.confirm = function () {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    };
    /** @nocollapse */ ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    /** @nocollapse */ ForgotPasswordComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ForgotPasswordComponent, selectors: [["forgot-password-dialog"]], decls: 12, vars: 5, consts: [[1, "app-dialog"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", 3, "placeholder", "ngModel", "ngModelChange"], [1, "mt20"], ["mat-raised-button", "", 1, "left", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "right", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field", 1);
            i0.ɵɵelementStart(6, "input", 2);
            i0.ɵɵlistener("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputValue = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵlistener("click", function ForgotPasswordComponent_Template_button_click_8_listener() { return ctx.cancel(); });
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 5);
            i0.ɵɵlistener("click", function ForgotPasswordComponent_Template_button_click_10_listener() { return ctx.confirm(); });
            i0.ɵɵtext(11, "OK");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("placeholder", ctx.placeHolder)("ngModel", ctx.inputValue);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.buttonCancel);
        } }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [".right[_ngcontent-%COMP%]{float:right}.mt40[_ngcontent-%COMP%]{margin-top:40px}.mt20[_ngcontent-%COMP%]{margin-top:20px}.ml40[_ngcontent-%COMP%]{margin-left:40px}"] });
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ForgotPasswordComponent, [{
        type: Component,
        args: [{
                selector: 'forgot-password-dialog',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.css']
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC1kaWFsb2cvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsImxpYi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQtZGlhbG9nL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBK0MsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0FBRXRIO0lBZUUsaUNBQ1MsV0FBa0QsRUFDeEIsSUFBUztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBdUM7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUUxQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLE9BQU8sSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtZQUNuRyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsMENBQVEsR0FBUixjQUFhLENBQUM7SUFHUCx3Q0FBTSxHQUFiO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSx5Q0FBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztrR0FsQ1UsdUJBQXVCLDhEQVV4QixlQUFlO2dFQVZkLHVCQUF1QjtZQ1ZwQyw4QkFDSTtZQUFBLDBCQUFJO1lBQUEsWUFBVztZQUFBLGlCQUFLO1lBQ3BCLDZCQUFPO1lBQUEsWUFBYTtZQUFBLGlCQUFRO1lBRTVCLHlDQUNJO1lBQUEsZ0NBQ0o7WUFEd0Usb0pBQXdCO1lBQTVGLGlCQUNKO1lBQUEsaUJBQWlCO1lBRWpCLDhCQUNJO1lBQUEsaUNBQTBEO1lBQWxELG9HQUFTLFlBQVEsSUFBQztZQUFnQyxZQUFrQjtZQUFBLGlCQUFTO1lBRXJGLGtDQUE0RTtZQUFwRSxxR0FBUyxhQUFTLElBQUM7WUFBaUQsbUJBQUU7WUFBQSxpQkFBUztZQUMzRixpQkFBTTtZQUVWLGlCQUFNOztZQWJFLGVBQVc7WUFBWCwrQkFBVztZQUNSLGVBQWE7WUFBYixpQ0FBYTtZQUdBLGVBQTJCO1lBQTNCLDZDQUEyQiwyQkFBQTtZQUllLGVBQWtCO1lBQWxCLHNDQUFrQjs7a0NEVHBGO0NBNkNDLEFBMUNELElBMENDO1NBbkNZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBUG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQzs7c0JBYUksTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nTW9kdWxlLCBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZvcmdvdC1wYXNzd29yZC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBwbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgcHVibGljIGJ1dHRvbkNhbmNlbDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9IGRhdGEuVGl0bGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLk1lc3NhZ2U7XHJcbiAgICB0aGlzLnBsYWNlSG9sZGVyID0gZGF0YS5QbGFjZUhvbGRlcjtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGRhdGEuVGV4dFZhbHVlO1xyXG4gICAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0JyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1JVCcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQtQ0gnKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsID0gXCJBbm51bGxhXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9IFwiQ2FuY2VsXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuXHJcbiAgcHVibGljIGNhbmNlbCgpIHtcclxuXHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBjb25maXJtKCkge1xyXG4gICAgdGhpcy5kYXRhLlRleHRWYWx1ZSA9IHRoaXMuaW5wdXRWYWx1ZTtcclxuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcclxuICB9XHJcbn0iLCI8ZGl2IGNsYXNzPVwiYXBwLWRpYWxvZ1wiPlxyXG4gICAgPGgyPnt7IHRpdGxlIH19PC9oMj5cclxuICAgIDxsYWJlbD57eyBtZXNzYWdlIH19PC9sYWJlbD5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgc3R5bGU9XCJtaW4td2lkdGg6MTAwJVwiIGNsYXNzPVwibXQxMFwiPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXJcIiBhZG1pbkF1dG9Gb2N1cyB2YWx1ZT1cIlwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJtdDIwXCI+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2FuY2VsKClcIiBjbGFzcz1cImxlZnRcIiBtYXQtcmFpc2VkLWJ1dHRvbj57eyBidXR0b25DYW5jZWwgfX08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY29uZmlybSgpXCIgY2xhc3M9XCJyaWdodFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPk9LPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvZGl2PiJdfQ==