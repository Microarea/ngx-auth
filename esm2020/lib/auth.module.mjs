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
import { TbIconsModule } from '@tb/icons';
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
            TbIconsModule,
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
                    TbIconsModule,
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
        MatFormFieldModule,
        TbIconsModule, i1.RouterModule], exports: [TbLoginComponent, TbLogoffComponent, RouterModule, AppMaterialModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQUUxQyxNQUFNLE1BQU0sR0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFxQ3pILE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxhQUFhO2FBQ2Q7U0FDRixDQUFDO0lBQ0osQ0FBQzs7OEdBUlUsWUFBWTtnSEFBWixZQUFZO29IQXBCZDtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtZQUNmLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUMzQixFQUU0QyxZQUFZLEVBQUUsaUJBQWlCO3VGQUduRSxZQUFZO2NBbkN4QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLDZCQUE2QjtvQkFDN0Isb0JBQW9CO29CQUNwQixZQUFZO2lCQUNiO2dCQUNELGVBQWUsRUFBRTtvQkFDZix1QkFBdUI7b0JBQ3ZCLDZCQUE2QjtvQkFDN0Isb0JBQW9CO29CQUNwQixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixXQUFXO29CQUNYLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2lCQUMzQjtnQkFFSCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUM7YUFFaEY7O3dGQUNZLFlBQVksbUJBakNyQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2Qiw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBQ3BCLFlBQVksYUFTWixZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixhQUFhLDhCQUlMLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGbG9hdGluZ0xhYmVsTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbGFiZWwnO1xyXG5pbXBvcnQgeyBEcm9wRG93bnNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kcm9wZG93bnMnO1xyXG5pbXBvcnQgeyBMYWJlbE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxhYmVsJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IElucHV0c01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWlucHV0cyc7XHJcblxyXG5pbXBvcnQgeyBUYkxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYkxvZ29mZkNvbXBvbmVudCB9IGZyb20gJy4vbG9nb2ZmLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBUYkF1dGhHdWFyZCB9IGZyb20gJy4vYXV0aC5ndWFyZCc7XHJcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQtZGlhbG9nL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE90cENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvb3RwLWRpYWxvZy9vdHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL2FwcC1tYXRlcmlhbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IFRiSWNvbnNNb2R1bGUgfSBmcm9tICdAdGIvaWNvbnMnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbeyBwYXRoOiAnbG9nb2ZmJywgY29tcG9uZW50OiBUYkxvZ29mZkNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtUYkF1dGhHdWFyZF0sIHBhdGhNYXRjaDogJ2Z1bGwnIH1dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFRiTG9naW5Db21wb25lbnQsIFxyXG4gICAgVGJMb2dvZmZDb21wb25lbnQsXHJcbiAgICBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCxcclxuICAgIENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LCBcclxuICAgIEFsZXJ0RGlhbG9nQ29tcG9uZW50LCBcclxuICAgIE90cENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCwgXHJcbiAgICBDaGFuZ2VQYXNzd29yZERpYWxvZ0NvbXBvbmVudCwgXHJcbiAgICBBbGVydERpYWxvZ0NvbXBvbmVudCwgXHJcbiAgICBPdHBDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSwgXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIERyb3BEb3duc01vZHVsZSxcclxuICAgIExhYmVsTW9kdWxlLFxyXG4gICAgSW5wdXRzTW9kdWxlLFxyXG4gICAgRmxvYXRpbmdMYWJlbE1vZHVsZSxcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIEFwcE1hdGVyaWFsTW9kdWxlLCBcclxuICAgIE1hdERpYWxvZ01vZHVsZSwgXHJcbiAgICBNYXRJbnB1dE1vZHVsZSwgXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsIFxyXG4gICAgVGJJY29uc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcclxuICAgIF0sXHJcbiAgICAgXHJcbiAgZXhwb3J0czogW1RiTG9naW5Db21wb25lbnQsIFRiTG9nb2ZmQ29tcG9uZW50LCBSb3V0ZXJNb2R1bGUsIEFwcE1hdGVyaWFsTW9kdWxlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFRiQXV0aE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUYkF1dGhNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUYkF1dGhNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFRiQXV0aFNlcnZpY2VcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19