import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TbLoginComponent } from './pages/login.component';
import { TbLogoffComponent } from './logoff.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TbAuthService } from './auth.service';
import { TbAuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './pages/forgot-password-dialog/forgot-password.component';
import { ChangePasswordDialogComponent } from './pages/change-password-dialog/change-password-dialog.component';
import { AlertDialogComponent } from './pages/alert-dialog/alert-dialog.component';
import { OtpComponent } from './pages/otp-dialog/otp.component';
import { AppMaterialModule } from './app-material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TbIconsModule } from '@tb/icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var routes = [{ path: 'logoff', component: TbLogoffComponent, canActivate: [TbAuthGuard], pathMatch: 'full' }];
var TbAuthModule = /** @class */ (function () {
    function TbAuthModule() {
    }
    TbAuthModule.forRoot = function () {
        return {
            ngModule: TbAuthModule,
            providers: [
                TbAuthService
            ]
        };
    };
    /** @nocollapse */ TbAuthModule.ɵmod = i0.ɵɵdefineNgModule({ type: TbAuthModule });
    /** @nocollapse */ TbAuthModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TbAuthModule_Factory(t) { return new (t || TbAuthModule)(); }, imports: [[CommonModule, FormsModule, InputsModule, ButtonsModule, DropDownsModule, RouterModule.forRoot(routes), AppMaterialModule, MatDialogModule, MatInputModule, MatFormFieldModule, TbIconsModule],
            RouterModule, AppMaterialModule] });
    return TbAuthModule;
}());
export { TbAuthModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TbAuthModule, { declarations: [TbLoginComponent, TbLogoffComponent, ForgotPasswordComponent, ChangePasswordDialogComponent, AlertDialogComponent, OtpComponent], imports: [CommonModule, FormsModule, InputsModule, ButtonsModule, DropDownsModule, i1.RouterModule, AppMaterialModule, MatDialogModule, MatInputModule, MatFormFieldModule, TbIconsModule], exports: [TbLoginComponent, TbLogoffComponent, RouterModule, AppMaterialModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TbAuthModule, [{
        type: NgModule,
        args: [{
                declarations: [TbLoginComponent, TbLogoffComponent, ForgotPasswordComponent, ChangePasswordDialogComponent, AlertDialogComponent, OtpComponent],
                entryComponents: [ForgotPasswordComponent, ChangePasswordDialogComponent, AlertDialogComponent, OtpComponent],
                imports: [CommonModule, FormsModule, InputsModule, ButtonsModule, DropDownsModule, RouterModule.forRoot(routes), AppMaterialModule, MatDialogModule, MatInputModule, MatFormFieldModule, TbIconsModule],
                exports: [TbLoginComponent, TbLogoffComponent, RouterModule, AppMaterialModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGIvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbkcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFFMUMsSUFBTSxNQUFNLEdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBRXpIO0lBQUE7S0FnQkM7SUFSUSxvQkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxhQUFhO2FBQ2Q7U0FDRixDQUFDO0lBQ0osQ0FBQztvREFSVSxZQUFZOzJHQUFaLFlBQVksa0JBSmQsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLENBQUM7WUFDeEosWUFBWSxFQUFFLGlCQUFpQjt1QkFqQ2hGO0NBNkNDLEFBaEJELElBZ0JDO1NBVFksWUFBWTt3RkFBWixZQUFZLG1CQU5SLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLDZCQUE2QixFQUFFLG9CQUFvQixFQUFDLFlBQVksYUFFbkksWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsbUJBQWdDLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxhQUM1TCxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsaUJBQWlCO2tEQUduRSxZQUFZO2NBUHhCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSw2QkFBNkIsRUFBRSxvQkFBb0IsRUFBQyxZQUFZLENBQUM7Z0JBQzlJLGVBQWUsRUFBRSxDQUFDLHVCQUF1QixFQUFFLDZCQUE2QixFQUFFLG9CQUFvQixFQUFDLFlBQVksQ0FBQztnQkFDNUcsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO2dCQUN2TSxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUM7YUFFaEYiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRzTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzJztcclxuaW1wb3J0IHsgQnV0dG9uc01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBEcm9wRG93bnNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kcm9wZG93bnMnO1xyXG5cclxuaW1wb3J0IHsgVGJMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGJMb2dvZmZDb21wb25lbnQgfSBmcm9tICcuL2xvZ29mZi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoR3VhcmQgfSBmcm9tICcuL2F1dGguZ3VhcmQnO1xyXG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLWRpYWxvZy9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGVydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPdHBDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL290cC1kaWFsb2cvb3RwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9hcHAtbWF0ZXJpYWwubW9kdWxlJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBUYkljb25zTW9kdWxlIH0gZnJvbSAnQHRiL2ljb25zJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3sgcGF0aDogJ2xvZ29mZicsIGNvbXBvbmVudDogVGJMb2dvZmZDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbVGJBdXRoR3VhcmRdLCBwYXRoTWF0Y2g6ICdmdWxsJyB9XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVGJMb2dpbkNvbXBvbmVudCwgVGJMb2dvZmZDb21wb25lbnQsIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LCBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCwgQWxlcnREaWFsb2dDb21wb25lbnQsT3RwQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtGb3Jnb3RQYXNzd29yZENvbXBvbmVudCwgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQsIEFsZXJ0RGlhbG9nQ29tcG9uZW50LE90cENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIElucHV0c01vZHVsZSwgQnV0dG9uc01vZHVsZSwgRHJvcERvd25zTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLCBBcHBNYXRlcmlhbE1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBUYkljb25zTW9kdWxlXSxcclxuICBleHBvcnRzOiBbVGJMb2dpbkNvbXBvbmVudCwgVGJMb2dvZmZDb21wb25lbnQsIFJvdXRlck1vZHVsZSwgQXBwTWF0ZXJpYWxNb2R1bGVdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUYkF1dGhNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFRiQXV0aFNlcnZpY2VcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19