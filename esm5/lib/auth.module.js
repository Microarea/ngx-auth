/**
 * @fileoverview added by tsickle
 * Generated from: lib/auth.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TbLoginComponent } from './pages/login.component';
import { TbLogoffComponent } from './logoff.component';
import { TbAuthService } from './auth.service';
import { TbAuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './pages/forgot-password.component';
import { ChangePasswordDialogComponent } from './pages/change-password-dialog/change-password-dialog.component';
import { AppMaterialModule } from './app-material.module';
/** @type {?} */
var routes = [{ path: 'logoff', component: TbLogoffComponent, canActivate: [TbAuthGuard], pathMatch: 'full' }];
var TbAuthModule = /** @class */ (function () {
    function TbAuthModule() {
    }
    /**
     * @return {?}
     */
    TbAuthModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TbAuthModule,
            providers: [
                TbAuthService
            ]
        };
    };
    TbAuthModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TbLoginComponent, TbLogoffComponent, ForgotPasswordComponent, ChangePasswordDialogComponent],
                    entryComponents: [ForgotPasswordComponent, ChangePasswordDialogComponent],
                    imports: [CommonModule, FormsModule, InputsModule, ButtonsModule, DropDownsModule, RouterModule.forRoot(routes), AppMaterialModule],
                    exports: [TbLoginComponent, TbLogoffComponent, RouterModule, AppMaterialModule]
                },] }
    ];
    return TbAuthModule;
}());
export { TbAuthModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGIvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQUVwRCxNQUFNLEdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUV4SDtJQUFBO0lBZ0JBLENBQUM7Ozs7SUFSUSxvQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULGFBQWE7YUFDZDtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFmRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsNkJBQTZCLENBQUM7b0JBQzNHLGVBQWUsRUFBRSxDQUFDLHVCQUF1QixFQUFFLDZCQUE2QixDQUFDO29CQUN6RSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsaUJBQWlCLENBQUM7b0JBQ25JLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsQ0FBQztpQkFFaEY7O0lBVUQsbUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVRZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRzTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzJztcclxuaW1wb3J0IHsgQnV0dG9uc01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBEcm9wRG93bnNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kcm9wZG93bnMnO1xyXG5cclxuaW1wb3J0IHsgVGJMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGJMb2dvZmZDb21wb25lbnQgfSBmcm9tICcuL2xvZ29mZi5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFRiQXV0aEd1YXJkIH0gZnJvbSAnLi9hdXRoLmd1YXJkJztcclxuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9hcHAtbWF0ZXJpYWwubW9kdWxlJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3sgcGF0aDogJ2xvZ29mZicsIGNvbXBvbmVudDogVGJMb2dvZmZDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbVGJBdXRoR3VhcmRdLCBwYXRoTWF0Y2g6ICdmdWxsJyB9XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVGJMb2dpbkNvbXBvbmVudCwgVGJMb2dvZmZDb21wb25lbnQsIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LCBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbRm9yZ290UGFzc3dvcmRDb21wb25lbnQsIENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgSW5wdXRzTW9kdWxlLCBCdXR0b25zTW9kdWxlLCBEcm9wRG93bnNNb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksIEFwcE1hdGVyaWFsTW9kdWxlXSxcclxuICBleHBvcnRzOiBbVGJMb2dpbkNvbXBvbmVudCwgVGJMb2dvZmZDb21wb25lbnQsIFJvdXRlck1vZHVsZSwgQXBwTWF0ZXJpYWxNb2R1bGVdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJBdXRoTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUYkF1dGhNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFRiQXV0aFNlcnZpY2VcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19