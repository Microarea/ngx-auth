import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
export class ForgotPasswordComponent {
    constructor(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.title = data.Title;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.inputValue = data.TextValue;
        const currentBrowserLanguage = navigator.language.toLocaleLowerCase();
        if (currentBrowserLanguage.startsWith('it')) {
            this.buttonCancel = 'Annulla';
        }
        else {
            this.buttonCancel = 'Cancel';
        }
    }
    ngOnInit() { }
    cancel() {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    }
    confirm() {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    }
}
/** @nocollapse */ /** @nocollapse */ ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ /** @nocollapse */ ForgotPasswordComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: ForgotPasswordComponent, selectors: [["forgot-password-dialog"]], decls: 12, vars: 5, consts: [[1, "app-dialog"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", 3, "placeholder", "ngModel", "ngModelChange"], [1, "mt20"], ["mat-raised-button", "", 1, "left", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "right", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotPasswordComponent, [{
        type: Component,
        args: [{ selector: 'forgot-password-dialog', template: "<div class=\"app-dialog\">\r\n    <h2>{{ title }}</h2>\r\n    <label>{{ message }}</label>\r\n\r\n    <mat-form-field style=\"min-width:100%\" class=\"mt10\">\r\n        <input matInput [placeholder]=\"placeHolder\" adminAutoFocus value=\"\" [(ngModel)]=\"inputValue\" />\r\n    </mat-form-field>\r\n\r\n    <div class=\"mt20\">\r\n        <button (click)=\"cancel()\" class=\"left\" mat-raised-button>{{ buttonCancel }}</button>\r\n\r\n        <button (click)=\"confirm()\" class=\"right\" mat-raised-button color=\"primary\">OK</button>\r\n    </div>\r\n\r\n</div>", styles: [".right{float:right}.mt40{margin-top:40px}.mt20{margin-top:20px}.ml40{margin-left:40px}\n"] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQtZGlhbG9nL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvcGFnZXMvZm9yZ290LXBhc3N3b3JkLWRpYWxvZy9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQStDLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQVN0SCxNQUFNLE9BQU8sdUJBQXVCO0lBUWxDLFlBQ1MsV0FBa0QsRUFDeEIsSUFBUztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBdUM7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUUxQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsTUFBTSxzQkFBc0IsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFdEUsSUFBSSxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELFFBQVEsS0FBSyxDQUFDO0lBR1AsTUFBTTtRQUVYLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ00sT0FBTztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O29JQXBDVSx1QkFBdUIsOERBVXhCLGVBQWU7NEhBVmQsdUJBQXVCO1FDVnBDLDhCQUF3QjtRQUNwQiwwQkFBSTtRQUFBLFlBQVc7UUFBQSxpQkFBSztRQUNwQiw2QkFBTztRQUFBLFlBQWE7UUFBQSxpQkFBUTtRQUU1Qix5Q0FBb0Q7UUFDaEQsZ0NBQStGO1FBQTNCLG9KQUF3QjtRQUE1RixpQkFBK0Y7UUFDbkcsaUJBQWlCO1FBRWpCLDhCQUFrQjtRQUNkLGlDQUEwRDtRQUFsRCxvR0FBUyxZQUFRLElBQUM7UUFBZ0MsWUFBa0I7UUFBQSxpQkFBUztRQUVyRixrQ0FBNEU7UUFBcEUscUdBQVMsYUFBUyxJQUFDO1FBQWlELG1CQUFFO1FBQUEsaUJBQVM7UUFDM0YsaUJBQU07UUFFVixpQkFBTTs7UUFiRSxlQUFXO1FBQVgsK0JBQVc7UUFDUixlQUFhO1FBQWIsaUNBQWE7UUFHQSxlQUEyQjtRQUEzQiw2Q0FBMkIsMkJBQUE7UUFJZSxlQUFrQjtRQUFsQixzQ0FBa0I7O3VGREN2RSx1QkFBdUI7Y0FQbkMsU0FBUzsyQkFDRSx3QkFBd0I7O3NCQWdCL0IsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nTW9kdWxlLCBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZvcmdvdC1wYXNzd29yZC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBwbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgcHVibGljIGJ1dHRvbkNhbmNlbDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9IGRhdGEuVGl0bGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLk1lc3NhZ2U7XHJcbiAgICB0aGlzLnBsYWNlSG9sZGVyID0gZGF0YS5QbGFjZUhvbGRlcjtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGRhdGEuVGV4dFZhbHVlO1xyXG4gICAgY29uc3QgY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGlmIChjdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpIHtcclxuICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQW5udWxsYSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdDYW5jZWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcblxyXG4gIHB1YmxpYyBjYW5jZWwoKSB7XHJcblxyXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxuICBwdWJsaWMgY29uZmlybSgpIHtcclxuICAgIHRoaXMuZGF0YS5UZXh0VmFsdWUgPSB0aGlzLmlucHV0VmFsdWU7XHJcbiAgICB0aGlzLm1kRGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhcHAtZGlhbG9nXCI+XHJcbiAgICA8aDI+e3sgdGl0bGUgfX08L2gyPlxyXG4gICAgPGxhYmVsPnt7IG1lc3NhZ2UgfX08L2xhYmVsPlxyXG5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBzdHlsZT1cIm1pbi13aWR0aDoxMDAlXCIgY2xhc3M9XCJtdDEwXCI+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlclwiIGFkbWluQXV0b0ZvY3VzIHZhbHVlPVwiXCIgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCIgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm10MjBcIj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjYW5jZWwoKVwiIGNsYXNzPVwibGVmdFwiIG1hdC1yYWlzZWQtYnV0dG9uPnt7IGJ1dHRvbkNhbmNlbCB9fTwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjb25maXJtKClcIiBjbGFzcz1cInJpZ2h0XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+T0s8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+Il19