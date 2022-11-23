import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FloatingLabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
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
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{ path: 'logoff', component: TbLogoffComponent, canActivate: [TbAuthGuard], pathMatch: 'full' }];
export class TbAuthModule {
    static forRoot() {
        return {
            ngModule: TbAuthModule,
            providers: [
                TbAuthService
            ]
        };
    }
}
/** @nocollapse */ /** @nocollapse */ TbAuthModule.ɵfac = function TbAuthModule_Factory(t) { return new (t || TbAuthModule)(); };
/** @nocollapse */ /** @nocollapse */ TbAuthModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: TbAuthModule });
/** @nocollapse */ /** @nocollapse */ TbAuthModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            DropDownsModule,
            LabelModule,
            InputsModule,
            FloatingLabelModule,
            BrowserModule,
            BrowserAnimationsModule,
            AppMaterialModule,
            MatDialogModule,
            MatInputModule,
            MatFormFieldModule,
            RouterModule.forRoot(routes)
        ], RouterModule, AppMaterialModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    TbLoginComponent,
                    TbLogoffComponent,
                    ForgotPasswordComponent,
                    ChangePasswordDialogComponent,
                    AlertDialogComponent,
                    OtpComponent
                ],
                entryComponents: [
                    ForgotPasswordComponent,
                    ChangePasswordDialogComponent,
                    AlertDialogComponent,
                    OtpComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    DropDownsModule,
                    LabelModule,
                    InputsModule,
                    FloatingLabelModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    AppMaterialModule,
                    MatDialogModule,
                    MatInputModule,
                    MatFormFieldModule,
                    RouterModule.forRoot(routes)
                ],
                exports: [TbLoginComponent, TbLogoffComponent, RouterModule, AppMaterialModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TbAuthModule, { declarations: [TbLoginComponent,
        TbLogoffComponent,
        ForgotPasswordComponent,
        ChangePasswordDialogComponent,
        AlertDialogComponent,
        OtpComponent], imports: [CommonModule,
        FormsModule,
        DropDownsModule,
        LabelModule,
        InputsModule,
        FloatingLabelModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule, i1.RouterModule], exports: [TbLoginComponent, TbLogoffComponent, RouterModule, AppMaterialModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFFekQsTUFBTSxNQUFNLEdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBb0N6SCxNQUFNLE9BQU8sWUFBWTtJQUN2QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1QsYUFBYTthQUNkO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzhHQVJVLFlBQVk7Z0hBQVosWUFBWTtvSEFuQmQ7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLGVBQWU7WUFDZixXQUFXO1lBQ1gsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUMzQixFQUU0QyxZQUFZLEVBQUUsaUJBQWlCO3VGQUduRSxZQUFZO2NBbEN4QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLDZCQUE2QjtvQkFDN0Isb0JBQW9CO29CQUNwQixZQUFZO2lCQUNiO2dCQUNELGVBQWUsRUFBRTtvQkFDZix1QkFBdUI7b0JBQ3ZCLDZCQUE2QjtvQkFDN0Isb0JBQW9CO29CQUNwQixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixXQUFXO29CQUNYLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDM0I7Z0JBRUgsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDO2FBRWhGOzt3RkFDWSxZQUFZLG1CQWhDckIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLG9CQUFvQjtRQUNwQixZQUFZLGFBU1osWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGNBQWM7UUFDZCxrQkFBa0IsOEJBSVYsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZsb2F0aW5nTGFiZWxNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1sYWJlbCc7XHJcbmltcG9ydCB7IERyb3BEb3duc01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRyb3Bkb3ducyc7XHJcbmltcG9ydCB7IExhYmVsTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbGFiZWwnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgSW5wdXRzTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzJztcclxuXHJcbmltcG9ydCB7IFRiTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRiTG9nb2ZmQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dvZmYuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgVGJBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFRiQXV0aEd1YXJkIH0gZnJvbSAnLi9hdXRoLmd1YXJkJztcclxuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC1kaWFsb2cvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3RwQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9vdHAtZGlhbG9nL290cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vYXBwLW1hdGVyaWFsLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3sgcGF0aDogJ2xvZ29mZicsIGNvbXBvbmVudDogVGJMb2dvZmZDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbVGJBdXRoR3VhcmRdLCBwYXRoTWF0Y2g6ICdmdWxsJyB9XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBUYkxvZ2luQ29tcG9uZW50LCBcclxuICAgIFRiTG9nb2ZmQ29tcG9uZW50LFxyXG4gICAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCwgXHJcbiAgICBBbGVydERpYWxvZ0NvbXBvbmVudCwgXHJcbiAgICBPdHBDb21wb25lbnRcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQsIFxyXG4gICAgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQsIFxyXG4gICAgQWxlcnREaWFsb2dDb21wb25lbnQsIFxyXG4gICAgT3RwQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsIFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBEcm9wRG93bnNNb2R1bGUsXHJcbiAgICBMYWJlbE1vZHVsZSxcclxuICAgIElucHV0c01vZHVsZSxcclxuICAgIEZsb2F0aW5nTGFiZWxNb2R1bGUsXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBBcHBNYXRlcmlhbE1vZHVsZSwgXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsIFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsIFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLCBcclxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcclxuICAgIF0sXHJcbiAgICAgXHJcbiAgZXhwb3J0czogW1RiTG9naW5Db21wb25lbnQsIFRiTG9nb2ZmQ29tcG9uZW50LCBSb3V0ZXJNb2R1bGUsIEFwcE1hdGVyaWFsTW9kdWxlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFRiQXV0aE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUYkF1dGhNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUYkF1dGhNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFRiQXV0aFNlcnZpY2VcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19