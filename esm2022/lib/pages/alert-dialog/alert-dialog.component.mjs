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
    /** @nocollapse */ static { this.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); }; }
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
        args: [{ selector: 'app-alert-dialog', template: "<div style=\"max-width: 450px\">\n    <h1 class=\"title\">{{ title }}</h1>\n    <p [innerHTML]=\"message\" class=\"description\" style=\"width: 350px\"></p>\n\n    <div class=\"wrap\">\n        <input type=\"checkbox\" id=\"binding\" data-test=\"loginDontShowAnymoreButton\" [(ngModel)]=\"dontshowanymore\" (change)=\"showOptions($event)\" kendoCheckBox />\n        <label class=\"k-checkbox-label\" for=\"binding\"> {{ dontshow }}</label>\n    </div>\n\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between; padding: 0 1px; margin-top: 30px\">\n        <div class=\"login-footer\" style=\"display: flex; justify-content: flex-end\">\n            <button kendoButton data-test=\"loginUpdateButton\" class=\"buttons ok-button\" (click)=\"closeDialog()\">\n                <span > OK </span>\n            </button>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertDialogComponent, { className: "AlertDialogComponent", filePath: "lib\\pages\\alert-dialog\\alert-dialog.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQU96RSxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CLFlBRVUsSUFLUCxFQUNPLFdBQStDO1FBTi9DLFNBQUksR0FBSixJQUFJLENBS1g7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0M7UUFFdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFHSCxXQUFXLENBQUMsS0FBd0I7UUFFaEMsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUN4QixvQkFBb0I7WUFDbEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRTFELFlBQVksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ1EsV0FBVztRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTNCLENBQUM7d0dBM0NVLG9CQUFvQix1QkFRckIsZUFBZTttR0FSZCxvQkFBb0I7WUNSN0IsQUFESiw4QkFBOEIsWUFDUjtZQUFBLFlBQVc7WUFBQSxpQkFBSztZQUNsQyx1QkFBc0U7WUFHbEUsQUFESiw4QkFBa0IsZUFDMEk7WUFBN0UsNE5BQTZCO1lBQUMsd0dBQVUsdUJBQW1CLElBQUM7WUFBdkksaUJBQXdKO1lBQ3hKLGdDQUE4QztZQUFDLFlBQWM7WUFDakUsQUFEaUUsaUJBQVEsRUFDbkU7WUFJRSxBQURKLEFBREosOEJBQTBILGFBQzNDLGlCQUM2QjtZQUF4QixrR0FBUyxpQkFBYSxJQUFDO1lBQy9GLDZCQUFPO1lBQUMscUJBQUc7WUFJM0IsQUFESSxBQURJLEFBREksQUFEZSxpQkFBTyxFQUNiLEVBQ1AsRUFDSixFQUNKOztZQWZnQixlQUFXO1lBQVgsK0JBQVc7WUFDMUIsY0FBcUI7WUFBckIsMERBQXFCO1lBR3VELGVBQTZCO1lBQTdCLG1EQUE2QjtZQUN6RCxlQUFjO1lBQWQsNENBQWM7OztpRkRHeEQsb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0Usa0JBQWtCOztzQkFZekIsTUFBTTt1QkFBQyxlQUFlOztrRkFSZCxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94Q2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hbGVydC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7IFxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIGRvbnRzaG93OiBzdHJpbmc7XHJcbiAgcHVibGljIHN1YmtleTogc3RyaW5nO1xyXG4gIGRvbnRzaG93YW55bW9yZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSlcclxuICAgIHByaXZhdGUgZGF0YToge1xyXG4gICAgICBNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgIFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgIERvbnRTaG93OiBzdHJpbmc7XHJcbiAgICAgIFN1YktleTogc3RyaW5nO1xyXG4gICAgfSxcclxuICAgIHByaXZhdGUgbWREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydERpYWxvZ0NvbXBvbmVudD5cclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSAnJztcclxuICAgIHRoaXMubWVzc2FnZSA9ICcnO1xyXG4gICAgdGhpcy5kb250c2hvdyA9ICcnO1xyXG4gICAgdGhpcy5zdWJrZXkgPSAnJztcclxuICAgIHRoaXMuZG9udHNob3dhbnltb3JlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEuVGl0bGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmRhdGEuTWVzc2FnZTtcclxuICAgIHRoaXMuZG9udHNob3cgPSB0aGlzLmRhdGEuRG9udFNob3c7XHJcbiAgICB0aGlzLnN1YmtleSA9IHRoaXMuZGF0YS5TdWJLZXk7XHJcbiAgfVxyXG5cclxuXHJcbnNob3dPcHRpb25zKGV2ZW50OiBNYXRDaGVja2JveENoYW5nZSk6IHZvaWQge1xyXG5cclxuICAgIGlmICh0aGlzLmRvbnRzaG93YW55bW9yZSlcclxuICAgIC8vIGRvY3VtZW50LmNvb2tpZSA9XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdET05UU0hPV1VQREFURVdBUk4nICwgdGhpcy5tZXNzYWdlKTtcclxuICAgICAgZWxzZVxyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyApO1xyXG59XHJcbiAgcHVibGljIGNsb3NlRGlhbG9nKCkge1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSgpO1xyXG5cclxuICB9XHJcbn1cclxuIiwiPGRpdiBzdHlsZT1cIm1heC13aWR0aDogNDUwcHhcIj5cbiAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9oMT5cbiAgICA8cCBbaW5uZXJIVE1MXT1cIm1lc3NhZ2VcIiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgc3R5bGU9XCJ3aWR0aDogMzUwcHhcIj48L3A+XG5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJiaW5kaW5nXCIgZGF0YS10ZXN0PVwibG9naW5Eb250U2hvd0FueW1vcmVCdXR0b25cIiBbKG5nTW9kZWwpXT1cImRvbnRzaG93YW55bW9yZVwiIChjaGFuZ2UpPVwic2hvd09wdGlvbnMoJGV2ZW50KVwiIGtlbmRvQ2hlY2tCb3ggLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiay1jaGVja2JveC1sYWJlbFwiIGZvcj1cImJpbmRpbmdcIj4ge3sgZG9udHNob3cgfX08L2xhYmVsPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwYWRkaW5nOiAwIDFweDsgbWFyZ2luLXRvcDogMzBweFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9vdGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIGRhdGEtdGVzdD1cImxvZ2luVXBkYXRlQnV0dG9uXCIgY2xhc3M9XCJidXR0b25zIG9rLWJ1dHRvblwiIChjbGljayk9XCJjbG9zZURpYWxvZygpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gPiBPSyA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==