import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "@angular/forms";
function AlertDialogComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 10);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("src", ctx_r0.imagePath, i0.ɵɵsanitizeUrl);
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
            // document.cookie =
            localStorage.setItem('DONTSHOWUPDATEWARN', this.message);
        else
            localStorage.removeItem('DONTSHOWUPDATEWARN');
    }
    closeDialog() {
        this.mdDialogRef.close();
    }
}
/** @nocollapse */ /** @nocollapse */ AlertDialogComponent.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
/** @nocollapse */ /** @nocollapse */ AlertDialogComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: AlertDialogComponent, selectors: [["app-alert-dialog"]], decls: 17, vars: 5, consts: [[2, "max-width", "400px"], [2, "padding", "20px 0px"], ["mat-card-image", "", "style", "width:50%", 3, "src", 4, "ngIf"], [2, "padding", "15px 0px"], [2, "padding", "10px 0px"], ["name", "dontshow", 3, "ngModel", "ngModelChange", "change"], ["translate", ""], [2, "display", "flex", "flex-direction", "row-reverse", "justify-content", "space-between", "padding", "10px 0px 0px 30px"], ["kendoButton", "", 2, "background", "#e77b2d", "padding", "4px 12px 4px 12px", "background", "#e77b2d", "color", "#fff", "font-size", "14px", "border-radius", "0px", "border-color", "rgba(0, 0, 0, 0)", 3, "click"], [2, "letter-spacing", "3px", "text-transform", "uppercase"], ["mat-card-image", "", 2, "width", "50%", 3, "src"]], template: function AlertDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, AlertDialogComponent_img_2_Template, 1, 1, "img", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "h2");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵelementStart(7, "p");
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 4);
        i0.ɵɵelementStart(10, "mat-checkbox", 5);
        i0.ɵɵlistener("ngModelChange", function AlertDialogComponent_Template_mat_checkbox_ngModelChange_10_listener($event) { return ctx.dontshowanymore = $event; })("change", function AlertDialogComponent_Template_mat_checkbox_change_10_listener($event) { return ctx.showOptions($event); });
        i0.ɵɵelementStart(11, "span", 6);
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 7);
        i0.ɵɵelementStart(14, "button", 8);
        i0.ɵɵlistener("click", function AlertDialogComponent_Template_button_click_14_listener() { return ctx.closeDialog(); });
        i0.ɵɵelementStart(15, "span", 9);
        i0.ɵɵtext(16, "OK");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.imagePath !== "" && ctx.imagePath !== undefined);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.dontshowanymore);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.dontshow);
    } }, directives: [i2.NgIf, i3.MatCheckbox, i4.NgControlStatus, i4.NgModel], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-alert-dialog', template: "<div style=\"z-index: 1\" style=\" max-width:400px;\">\r\n\r\n    <div style=\"padding:20px 0px ;\">\r\n        <img *ngIf=\"imagePath !== '' && imagePath !== undefined\" mat-card-image style=\"width:50%\" src=\"{{ imagePath }}\" />\r\n    </div>\r\n    <div style=\"padding:20px 0px ;\">\r\n        <h2>{{ title }}</h2>\r\n        <div style=\"padding:15px 0px ;\">\r\n            <p>{{ message }}</p>\r\n        </div>\r\n    </div>\r\n    <div style=\"padding:10px 0px ;\">\r\n        <mat-checkbox [(ngModel)]=\"dontshowanymore\" name=\"dontshow\" (change)=\"showOptions($event)\">\r\n            <span translate>{{ dontshow }}</span>\r\n        </mat-checkbox>\r\n    </div>\r\n\r\n    <div style=\"display: flex; flex-direction: row-reverse; justify-content: space-between;padding: 10px 0px 0px 30px;\">\r\n        <button kendoButton (click)=\"closeDialog()\" style=\" background: #e77b2d;\r\n                    padding: 4px 12px 4px 12px;\r\n                    background: #e77b2d;\r\n                    color: #fff;\r\n                    font-size: 14px;\r\n                    border-radius: 0px;\r\n                    border-color: rgba(0, 0, 0, 0);\">\r\n            <span style=\"letter-spacing: 3px; text-transform: uppercase\">OK</span>\r\n        </button>\r\n\r\n\r\n    </div>\r\n</div>\r\n", styles: [""] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7SUNDakUsMEJBQWtIOzs7SUFBeEIsbUVBQXFCOztBRE12SCxNQUFNLE9BQU8sb0JBQW9CO0lBUy9CLFlBRVUsSUFRUCxFQUNPLFdBQStDO1FBVC9DLFNBQUksR0FBSixJQUFJLENBUVg7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0M7UUFFdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBR0gsV0FBVyxDQUFDLEtBQXdCO1FBRWhDLElBQUksSUFBSSxDQUFDLGVBQWU7WUFDeEIsb0JBQW9CO1lBQ2xCLFlBQVksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUUxRCxZQUFZLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFFLENBQUM7SUFDckQsQ0FBQztJQUNRLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUUzQixDQUFDOzs4SEFwRFUsb0JBQW9CLHVCQVVyQixlQUFlO3lIQVZkLG9CQUFvQjtRQ1RqQyw4QkFBa0Q7UUFFOUMsOEJBQWdDO1FBQzVCLHFFQUFrSDtRQUN0SCxpQkFBTTtRQUNOLDhCQUFnQztRQUM1QiwwQkFBSTtRQUFBLFlBQVc7UUFBQSxpQkFBSztRQUNwQiw4QkFBZ0M7UUFDNUIseUJBQUc7UUFBQSxZQUFhO1FBQUEsaUJBQUk7UUFDeEIsaUJBQU07UUFDVixpQkFBTTtRQUNOLDhCQUFnQztRQUM1Qix3Q0FBMkY7UUFBN0UsOEpBQTZCLG1HQUEyQix1QkFBbUIsSUFBOUM7UUFDdkMsZ0NBQWdCO1FBQUEsYUFBYztRQUFBLGlCQUFPO1FBQ3pDLGlCQUFlO1FBQ25CLGlCQUFNO1FBRU4sK0JBQW9IO1FBQ2hILGtDQU02QztRQU56QixrR0FBUyxpQkFBYSxJQUFDO1FBT3ZDLGdDQUE2RDtRQUFBLG1CQUFFO1FBQUEsaUJBQU87UUFDMUUsaUJBQVM7UUFHYixpQkFBTTtRQUNWLGlCQUFNOztRQTNCUSxlQUFpRDtRQUFqRCwwRUFBaUQ7UUFHbkQsZUFBVztRQUFYLCtCQUFXO1FBRVIsZUFBYTtRQUFiLGlDQUFhO1FBSU4sZUFBNkI7UUFBN0IsNkNBQTZCO1FBQ3ZCLGVBQWM7UUFBZCxrQ0FBYzs7dUZESjdCLG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNFLGtCQUFrQjs7c0JBY3pCLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFsZXJ0LWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBkb250c2hvdzogc3RyaW5nO1xyXG4gIHB1YmxpYyBzdWJrZXk6IHN0cmluZztcclxuICBwdWJsaWMgaW1hZ2VQYXRoOiBzdHJpbmc7XHJcbiAgcHVibGljIGltYWdlQWx0OiBzdHJpbmc7XHJcbiAgZG9udHNob3dhbnltb3JlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKVxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7XHJcbiAgICAgIE1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgVGl0bGU6IHN0cmluZztcclxuICAgICAgRG9udFNob3c6IHN0cmluZztcclxuICAgICAgU3ViS2V5OiBzdHJpbmc7XHJcbiAgICAgIEltYWdlUGF0aDogc3RyaW5nO1xyXG4gICAgICBJbWFnZUFsdDogc3RyaW5nO1xyXG5cclxuICAgIH0sXHJcbiAgICBwcml2YXRlIG1kRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnREaWFsb2dDb21wb25lbnQ+XHJcbiAgKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gJyc7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSAnJztcclxuICAgIHRoaXMuZG9udHNob3cgPSAnJztcclxuICAgIHRoaXMuc3Via2V5ID0gJyc7XHJcbiAgICB0aGlzLmltYWdlUGF0aCA9ICcnO1xyXG4gICAgdGhpcy5pbWFnZUFsdCA9ICcnO1xyXG4gICAgdGhpcy5kb250c2hvd2FueW1vcmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0YS5UaXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZGF0YS5NZXNzYWdlO1xyXG4gICAgdGhpcy5kb250c2hvdyA9IHRoaXMuZGF0YS5Eb250U2hvdztcclxuICAgIHRoaXMuc3Via2V5ID0gdGhpcy5kYXRhLlN1YktleTtcclxuICAgIHRoaXMuaW1hZ2VQYXRoID0gdGhpcy5kYXRhLkltYWdlUGF0aDtcclxuICAgIHRoaXMuaW1hZ2VBbHQgPSB0aGlzLmRhdGEuSW1hZ2VBbHQ7XHJcbiAgfVxyXG5cclxuXHJcbnNob3dPcHRpb25zKGV2ZW50OiBNYXRDaGVja2JveENoYW5nZSk6IHZvaWQge1xyXG5cclxuICAgIGlmICh0aGlzLmRvbnRzaG93YW55bW9yZSlcclxuICAgIC8vIGRvY3VtZW50LmNvb2tpZSA9XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdET05UU0hPV1VQREFURVdBUk4nICwgdGhpcy5tZXNzYWdlKTtcclxuICAgICAgZWxzZVxyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnRE9OVFNIT1dVUERBVEVXQVJOJyApO1xyXG59XHJcbiAgcHVibGljIGNsb3NlRGlhbG9nKCkge1xyXG4gICAgdGhpcy5tZERpYWxvZ1JlZi5jbG9zZSgpO1xyXG5cclxuICB9XHJcbn1cclxuIiwiPGRpdiBzdHlsZT1cInotaW5kZXg6IDFcIiBzdHlsZT1cIiBtYXgtd2lkdGg6NDAwcHg7XCI+XHJcblxyXG4gICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6MjBweCAwcHggO1wiPlxyXG4gICAgICAgIDxpbWcgKm5nSWY9XCJpbWFnZVBhdGggIT09ICcnICYmIGltYWdlUGF0aCAhPT0gdW5kZWZpbmVkXCIgbWF0LWNhcmQtaW1hZ2Ugc3R5bGU9XCJ3aWR0aDo1MCVcIiBzcmM9XCJ7eyBpbWFnZVBhdGggfX1cIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzoyMHB4IDBweCA7XCI+XHJcbiAgICAgICAgPGgyPnt7IHRpdGxlIH19PC9oMj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzoxNXB4IDBweCA7XCI+XHJcbiAgICAgICAgICAgIDxwPnt7IG1lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nOjEwcHggMHB4IDtcIj5cclxuICAgICAgICA8bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZG9udHNob3dhbnltb3JlXCIgbmFtZT1cImRvbnRzaG93XCIgKGNoYW5nZSk9XCJzaG93T3B0aW9ucygkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHRyYW5zbGF0ZT57eyBkb250c2hvdyB9fTwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtwYWRkaW5nOiAxMHB4IDBweCAwcHggMzBweDtcIj5cclxuICAgICAgICA8YnV0dG9uIGtlbmRvQnV0dG9uIChjbGljayk9XCJjbG9zZURpYWxvZygpXCIgc3R5bGU9XCIgYmFja2dyb3VuZDogI2U3N2IyZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweCA0cHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTc3YjJkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImxldHRlci1zcGFjaW5nOiAzcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcIj5PSzwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=