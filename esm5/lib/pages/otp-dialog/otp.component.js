import { __awaiter, __generator } from "tslib";
import { Component, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@progress/kendo-angular-buttons";
var OtpComponent = /** @class */ (function () {
    function OtpComponent(mdDialogRef, data) {
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        this.resendRequested = new EventEmitter();
        this.title = data.Title;
        this.accname = data.AccountName;
        this.message = data.Message;
        this.placeHolder = data.PlaceHolder;
        this.inputValue = data.TextValue;
        if (navigator.language === 'it' || navigator.language === 'it-IT' || navigator.language === 'it-CH') {
            this.buttonCancel = 'Annulla';
            this.resendOTPpLabel = 'Inviami un nuovo codice';
        }
        else {
            this.buttonCancel = 'Cancel';
            this.resendOTPpLabel = 'Send me a new code';
        }
    }
    OtpComponent.prototype.ngOnInit = function () { };
    OtpComponent.prototype.cancel = function () {
        this.data = undefined;
        this.mdDialogRef.close(this.data);
    };
    OtpComponent.prototype.resendOTP = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.resendRequested.emit();
                return [2 /*return*/];
            });
        });
    };
    OtpComponent.prototype.closeDialog = function () {
        this.data.TextValue = this.inputValue;
        this.mdDialogRef.close(this.data);
    };
    /** @nocollapse */ OtpComponent.ɵfac = function OtpComponent_Factory(t) { return new (t || OtpComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    /** @nocollapse */ OtpComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OtpComponent, selectors: [["otp-dialog"]], decls: 19, vars: 6, consts: [[1, "app-dialog"], [1, "mt10", 2, "min-width", "100%"], ["matInput", "", "adminAutoFocus", "", "value", "", "type", "password", 3, "placeholder", "ngModel", "ngModelChange"], [1, "mt20"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "10px 0px 0px 30px"], ["kendoButton", "", 2, "background", "#e77b2d", "padding", "4px 12px 4px 12px", "background", "#e77b2d", "color", "#fff", "font-size", "14px", "border-radius", "0px", "border-color", "rgba(0, 0, 0, 0)", 3, "click"], [2, "letter-spacing", "3px"], [2, "letter-spacing", "3px", "text-transform", "uppercase"], [2, "display", "flex", "margin-top", "40px", "justify-content", "flex-end"], [1, "link", 3, "click"]], template: function OtpComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field", 1);
            i0.ɵɵelementStart(6, "input", 2);
            i0.ɵɵlistener("ngModelChange", function OtpComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputValue = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵelementStart(9, "button", 5);
            i0.ɵɵlistener("click", function OtpComponent_Template_button_click_9_listener() { return ctx.cancel(); });
            i0.ɵɵelementStart(10, "span", 6);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 5);
            i0.ɵɵlistener("click", function OtpComponent_Template_button_click_12_listener() { return ctx.closeDialog(); });
            i0.ɵɵelementStart(13, "span", 7);
            i0.ɵɵtext(14, " OK ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 8);
            i0.ɵɵelementStart(16, "p", 9);
            i0.ɵɵlistener("click", function OtpComponent_Template_p_click_16_listener() { return ctx.resendOTP(); });
            i0.ɵɵelementStart(17, "u");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
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
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.buttonCancel);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.resendOTPpLabel);
        } }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.Button], styles: [".right[_ngcontent-%COMP%]{float:right}.mt40[_ngcontent-%COMP%]{margin-top:40px}.mt20[_ngcontent-%COMP%]{margin-top:20px}.ml40[_ngcontent-%COMP%]{margin-left:40px}.link[_ngcontent-%COMP%]{font-size:16px;font-weight:300;margin:0;color:#005890;text-align:right;cursor:pointer}"] });
    return OtpComponent;
}());
export { OtpComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OtpComponent, [{
        type: Component,
        args: [{
                selector: 'otp-dialog',
                templateUrl: './otp.component.html',
                styleUrls: ['./otp.component.css']
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0Yi9hdXRoLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL290cC1kaWFsb2cvb3RwLmNvbXBvbmVudC50cyIsImxpYi9wYWdlcy9vdHAtZGlhbG9nL290cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUErQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBQ3RIO0lBZ0JFLHNCQUNTLFdBQXVDLEVBQ2IsSUFBUztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBNEI7UUFDYixTQUFJLEdBQUosSUFBSSxDQUFLO1FBSDVDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUtuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxPQUFPLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7WUFDbkcsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBSSx5QkFBeUIsQ0FBQztTQUNuRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBSSxvQkFBb0IsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRCwrQkFBUSxHQUFSLGNBQWEsQ0FBQztJQUVQLDZCQUFNLEdBQWI7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVhLGdDQUFTLEdBQXRCOzs7Z0JBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztLQUM5QjtJQUNRLGtDQUFXLEdBQWxCO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs0RUExQ1UsWUFBWSw4REFZYixlQUFlO3FEQVpkLFlBQVk7WUNSekIsOEJBQ0k7WUFBQSwwQkFBSTtZQUFBLFlBQVc7WUFBQSxpQkFBSztZQUNwQiw2QkFBTztZQUFBLFlBQWE7WUFBQSxpQkFBUTtZQUU1Qix5Q0FDSTtZQUFBLGdDQUNKO1lBRHdFLHlJQUF3QjtZQUE1RixpQkFDSjtZQUFBLGlCQUFpQjtZQUVqQiw4QkFDSTtZQUFBLDhCQUNJO1lBQUEsaUNBT0E7WUFQb0IseUZBQVMsWUFBUSxJQUFDO1lBT3RDLGdDQUFvQztZQUFBLGFBQWtCO1lBQUEsaUJBQU87WUFDN0QsaUJBQVM7WUFDVCxrQ0FPQTtZQVBvQiwwRkFBUyxpQkFBYSxJQUFDO1lBTzNDLGdDQUE4RDtZQUFBLHFCQUFHO1lBQUEsaUJBQU87WUFDNUUsaUJBQVM7WUFDVCxpQkFBTTtZQUNWLGlCQUFNO1lBQ04sK0JBQ0k7WUFBQSw2QkFDSTtZQURZLHFGQUFTLGVBQVcsSUFBQztZQUNqQywwQkFBRztZQUFBLGFBQXFCO1lBQUEsaUJBQUk7WUFDaEMsaUJBQUk7WUFDUixpQkFBTTtZQUNWLGlCQUFNOztZQWxDRSxlQUFXO1lBQVgsK0JBQVc7WUFDUixlQUFhO1lBQWIsaUNBQWE7WUFHQSxlQUEyQjtZQUEzQiw2Q0FBMkIsMkJBQUE7WUFZSCxlQUFrQjtZQUFsQixzQ0FBa0I7WUFlbkQsZUFBcUI7WUFBckIseUNBQXFCOzt1QkRoQ3BDO0NBbURDLEFBakRELElBaURDO1NBM0NZLFlBQVk7a0RBQVosWUFBWTtjQU54QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ25DOztzQkFjSSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ290cC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vdHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL290cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPdHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgYWNjbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgcHVibGljIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBwdWJsaWMgYnV0dG9uQ2FuY2VsOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlc2VuZE9UUHBMYWJlbDogc3RyaW5nO1xyXG4gIHJlc2VuZFJlcXVlc3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE90cENvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSBkYXRhLlRpdGxlO1xyXG4gICAgdGhpcy5hY2NuYW1lID0gZGF0YS5BY2NvdW50TmFtZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkYXRhLlBsYWNlSG9sZGVyO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YS5UZXh0VmFsdWU7XHJcbiAgICBpZiAobmF2aWdhdG9yLmxhbmd1YWdlID09PSAnaXQnIHx8IG5hdmlnYXRvci5sYW5ndWFnZSA9PT0gJ2l0LUlUJyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UgPT09ICdpdC1DSCcpIHtcclxuICAgICAgdGhpcy5idXR0b25DYW5jZWwgPSAnQW5udWxsYSc7XHJcbiAgICAgIHRoaXMucmVzZW5kT1RQcExhYmVsICA9ICdJbnZpYW1pIHVuIG51b3ZvIGNvZGljZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJ1dHRvbkNhbmNlbCA9ICdDYW5jZWwnO1xyXG4gICAgICB0aGlzLnJlc2VuZE9UUHBMYWJlbCAgPSAnU2VuZCBtZSBhIG5ldyBjb2RlJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIHB1YmxpYyBjYW5jZWwoKSB7XHJcblxyXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgIHB1YmxpYyBhc3luYyByZXNlbmRPVFAoKSB7XHJcbiAgICAgdGhpcy5yZXNlbmRSZXF1ZXN0ZWQuZW1pdCgpO1xyXG4gIH1cclxuICAgIHB1YmxpYyBjbG9zZURpYWxvZygpIHtcclxuICB0aGlzLmRhdGEuVGV4dFZhbHVlID0gdGhpcy5pbnB1dFZhbHVlO1xyXG4gIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodGhpcy5kYXRhKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFwcC1kaWFsb2dcIj5cclxuICAgIDxoMj57eyB0aXRsZSB9fTwvaDI+XHJcbiAgICA8bGFiZWw+e3sgbWVzc2FnZSB9fTwvbGFiZWw+XHJcblxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIHN0eWxlPVwibWluLXdpZHRoOjEwMCVcIiBjbGFzcz1cIm10MTBcIj5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCIgYWRtaW5BdXRvRm9jdXMgdmFsdWU9XCJcIiBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibXQyMFwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtwYWRkaW5nOiAxMHB4IDBweCAwcHggMzBweDtcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiAoY2xpY2spPVwiY2FuY2VsKClcIiBzdHlsZT1cIiBiYWNrZ3JvdW5kOiAjZTc3YjJkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMnB4IDRweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNzdiMmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibGV0dGVyLXNwYWNpbmc6IDNweDsgXCI+e3sgYnV0dG9uQ2FuY2VsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiAoY2xpY2spPVwiY2xvc2VEaWFsb2coKVwiIHN0eWxlPVwiIGJhY2tncm91bmQ6ICNlNzdiMmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHggNHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U3N2IyZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJsZXR0ZXItc3BhY2luZzogM3B4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXCI+IE9LIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbi10b3A6IDQwcHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImxpbmtcIiAoY2xpY2spPVwicmVzZW5kT1RQKClcIj5cclxuICAgICAgICAgICAgPHU+e3sgcmVzZW5kT1RQcExhYmVsIH19PC91PlxyXG4gICAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iXX0=