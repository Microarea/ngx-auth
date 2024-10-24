import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/forms";
import * as i3 from "@progress/kendo-angular-label";
import * as i4 from "@progress/kendo-angular-inputs";
export class AlertDialogComponent {
    constructor(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
        this.title = '';
        this.message = '';
        this.dontshow = '';
        this.subkey = '';
        this.dontshowanymore = false;
    }
    ngOnInit() {
        this.title = this.data.Title;
        this.message = this.data.Message;
        this.dontshow = this.data.DontShow;
        this.subkey = this.data.SubKey;
    }
    showOptions(event) {
        if (this.dontshowanymore)
            // document.cookie =
            localStorage.setItem('DONTSHOWUPDATEWARN', this.message);
        else
            localStorage.removeItem('DONTSHOWUPDATEWARN');
    }
    closeDialog() {
        this.mdDialogRef.close();
    }
    /** @nocollapse */ static { this.ɵfac = function AlertDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); }; }
    /** @nocollapse */ static { this.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: AlertDialogComponent, selectors: [["app-alert-dialog"]], decls: 13, vars: 4, consts: [[2, "max-width", "450px"], [1, "title"], [1, "description", 2, "width", "350px", 3, "innerHTML"], [1, "wrap"], ["type", "checkbox", "id", "binding", "data-test", "loginDontShowAnymoreButton", "kendoCheckBox", "", 3, "ngModelChange", "change", "ngModel"], ["for", "binding", 1, "k-checkbox-label"], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "0 1px", "margin-top", "30px"], [1, "login-footer", 2, "display", "flex", "justify-content", "flex-end"], ["kendoButton", "", "data-test", "loginUpdateButton", 1, "buttons", "ok-button", 3, "click"]], template: function AlertDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "p", 2);
            i0.ɵɵelementStart(4, "div", 3)(5, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function AlertDialogComponent_Template_input_ngModelChange_5_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.dontshowanymore, $event) || (ctx.dontshowanymore = $event); return $event; });
            i0.ɵɵlistener("change", function AlertDialogComponent_Template_input_change_5_listener($event) { return ctx.showOptions($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "label", 5);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 6)(9, "div", 7)(10, "button", 8);
            i0.ɵɵlistener("click", function AlertDialogComponent_Template_button_click_10_listener() { return ctx.closeDialog(); });
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12, " OK ");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("innerHTML", ctx.message, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.dontshowanymore);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.dontshow, "");
        } }, dependencies: [i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.LabelDirective, i4.CheckBoxDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-alert-dialog', template: "<div style=\"max-width: 450px\">\r\n    <h1 class=\"title\">{{ title }}</h1>\r\n    <p [innerHTML]=\"message\" class=\"description\" style=\"width: 350px\"></p>\r\n\r\n    <div class=\"wrap\">\r\n        <input type=\"checkbox\" id=\"binding\" data-test=\"loginDontShowAnymoreButton\" [(ngModel)]=\"dontshowanymore\" (change)=\"showOptions($event)\" kendoCheckBox />\r\n        <label class=\"k-checkbox-label\" for=\"binding\"> {{ dontshow }}</label>\r\n    </div>\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 30px\">\r\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\r\n            <button kendoButton data-test=\"loginUpdateButton\" class=\"buttons ok-button\" (click)=\"closeDialog()\">\r\n                <span > OK </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n" }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertDialogComponent, { className: "AlertDialogComponent", filePath: "lib\\pages\\alert-dialog\\alert-dialog.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQU96RSxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CLFlBRVUsSUFLUCxFQUNPLFdBQStDO1FBTi9DLFNBQUksR0FBSixJQUFJLENBS1g7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0M7UUFFdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFHSCxXQUFXLENBQUMsS0FBd0I7UUFFaEMsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUN4QixvQkFBb0I7WUFDbEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRTFELFlBQVksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ1EsV0FBVztRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTNCLENBQUM7d0lBM0NVLG9CQUFvQix1QkFRckIsZUFBZTttR0FSZCxvQkFBb0I7WUNSN0IsQUFESiw4QkFBOEIsWUFDUjtZQUFBLFlBQVc7WUFBQSxpQkFBSztZQUNsQyx1QkFBc0U7WUFHbEUsQUFESiw4QkFBa0IsZUFDMEk7WUFBN0UsNE5BQTZCO1lBQUMsd0dBQVUsdUJBQW1CLElBQUM7WUFBdkksaUJBQXdKO1lBQ3hKLGdDQUE4QztZQUFDLFlBQWM7WUFDakUsQUFEaUUsaUJBQVEsRUFDbkU7WUFJRSxBQURKLEFBREosOEJBQTBILGFBQzNDLGlCQUM2QjtZQUF4QixrR0FBUyxpQkFBYSxJQUFDO1lBQy9GLDZCQUFPO1lBQUMscUJBQUc7WUFJM0IsQUFESSxBQURJLEFBREksQUFEZSxpQkFBTyxFQUNiLEVBQ1AsRUFDSixFQUNKOztZQWZnQixlQUFXO1lBQVgsK0JBQVc7WUFDMUIsY0FBcUI7WUFBckIsMERBQXFCO1lBR3VELGVBQTZCO1lBQTdCLG1EQUE2QjtZQUN6RCxlQUFjO1lBQWQsNENBQWM7OztpRkRHeEQsb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0Usa0JBQWtCOztzQkFZekIsTUFBTTt1QkFBQyxlQUFlOztrRkFSZCxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94Q2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hbGVydC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7IFxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIGRvbnRzaG93OiBzdHJpbmc7XHJcbiAgcHVibGljIHN1YmtleTogc3RyaW5nO1xyXG4gIGRvbnRzaG93YW55bW9yZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSlcclxuICAgIHByaXZhdGUgZGF0YToge1xyXG4gICAgICBNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgIFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgIERvbnRTaG93OiBzdHJpbmc7XHJcbiAgICAgIFN1YktleTogc3RyaW5nO1xyXG4gICAgfSxcclxuICAgIHByaXZhdGUgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydERpYWxvZ0NvbXBvbmVudD5cclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSAnJztcclxuICAgIHRoaXMubWVzc2FnZSA9ICcnO1xyXG4gICAgdGhpcy5kb250c2hvdyA9ICcnO1xyXG4gICAgdGhpcy5zdWJrZXkgPSAnJztcclxuICAgIHRoaXMuZG9udHNob3dhbnltb3JlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEuVGl0bGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMuZG9udHNob3cgPSB0aGlzLmRhdGEuRG9udFNob3c7XHJcbiAgICB0aGlzLnN1YmtleSA9IHRoaXMuZGF0YS5TdWJLZXk7XHJcbiAgfVxyXG5cclxuXHJcbnNob3dPcHRpb25zKGV2ZW50OiBNYXRDaGVja2JveENoYW5nZSk6IHZvaWQge1xyXG5cclxuICAgIGlmICh0aGlzLmRvbnRzaG93YW55bW9yZSlcclxuICAgIC8vIGRvY3VtZW50LmNvb2tpZSA9XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdET05UU0hPV1VQREFURVdBUk4nICwgdGhpcy5tZXNzYWdlKTtcclxuICAgICAgZWxzZVxyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyApO1xyXG59XHJcbiAgcHVibGljIGNsb3NlRGlhbG9nKCkge1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSgpO1xyXG5cclxuICB9XHJcbn1cclxuIiwiPGRpdiBzdHlsZT1cIm1heC13aWR0aDogNDUwcHhcIj5cclxuICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2gxPlxyXG4gICAgPHAgW2lubmVySFRNTF09XCJtZXNzYWdlXCIgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHN0eWxlPVwid2lkdGg6IDM1MHB4XCI+PC9wPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmluZGluZ1wiIGRhdGEtdGVzdD1cImxvZ2luRG9udFNob3dBbnltb3JlQnV0dG9uXCIgWyhuZ01vZGVsKV09XCJkb250c2hvd2FueW1vcmVcIiAoY2hhbmdlKT1cInNob3dPcHRpb25zKCRldmVudClcIiBrZW5kb0NoZWNrQm94IC8+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiay1jaGVja2JveC1sYWJlbFwiIGZvcj1cImJpbmRpbmdcIj4ge3sgZG9udHNob3cgfX08L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwYWRkaW5nOiAwIDFweDsgbWFyZ2luLXRvcDogMzBweFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb290ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZW5kb0J1dHRvbiBkYXRhLXRlc3Q9XCJsb2dpblVwZGF0ZUJ1dHRvblwiIGNsYXNzPVwiYnV0dG9ucyBvay1idXR0b25cIiAoY2xpY2spPVwiY2xvc2VEaWFsb2coKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gPiBPSyA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=