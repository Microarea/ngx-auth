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
                    AlertDialogComponent
                ],
                entryComponents: [
                    ForgotPasswordComponent,
                    ChangePasswordDialogComponent,
                    AlertDialogComponent
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
        AlertDialogComponent], imports: [CommonModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUV6RCxNQUFNLE1BQU0sR0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFrQ3pILE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxhQUFhO2FBQ2Q7U0FDRixDQUFDO0lBQ0osQ0FBQzs7OEdBUlUsWUFBWTtnSEFBWixZQUFZO29IQW5CZDtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtZQUNmLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQzNCLEVBRTRDLFlBQVksRUFBRSxpQkFBaUI7dUZBR25FLFlBQVk7Y0FoQ3hCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIsNkJBQTZCO29CQUM3QixvQkFBb0I7aUJBQ3JCO2dCQUNELGVBQWUsRUFBRTtvQkFDZix1QkFBdUI7b0JBQ3ZCLDZCQUE2QjtvQkFDN0Isb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsV0FBVztvQkFDWCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYix1QkFBdUI7b0JBQ3ZCLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQzNCO2dCQUVILE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsQ0FBQzthQUVoRjs7d0ZBQ1ksWUFBWSxtQkE5QnJCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLDZCQUE2QjtRQUM3QixvQkFBb0IsYUFRcEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGNBQWM7UUFDZCxrQkFBa0IsOEJBSVYsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGbG9hdGluZ0xhYmVsTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbGFiZWwnO1xuaW1wb3J0IHsgRHJvcERvd25zTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZHJvcGRvd25zJztcbmltcG9ydCB7IExhYmVsTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbGFiZWwnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSW5wdXRzTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzJztcblxuaW1wb3J0IHsgVGJMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFRiTG9nb2ZmQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dvZmYuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBUYkF1dGhHdWFyZCB9IGZyb20gJy4vYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLWRpYWxvZy9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vYXBwLW1hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7IHBhdGg6ICdsb2dvZmYnLCBjb21wb25lbnQ6IFRiTG9nb2ZmQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW1RiQXV0aEd1YXJkXSwgcGF0aE1hdGNoOiAnZnVsbCcgfV07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRiTG9naW5Db21wb25lbnQsXG4gICAgVGJMb2dvZmZDb21wb25lbnQsXG4gICAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQsXG4gICAgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQsXG4gICAgQWxlcnREaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQsXG4gICAgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQsXG4gICAgQWxlcnREaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEcm9wRG93bnNNb2R1bGUsXG4gICAgTGFiZWxNb2R1bGUsXG4gICAgSW5wdXRzTW9kdWxlLFxuICAgIEZsb2F0aW5nTGFiZWxNb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBBcHBNYXRlcmlhbE1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgICBdLFxuXG4gIGV4cG9ydHM6IFtUYkxvZ2luQ29tcG9uZW50LCBUYkxvZ29mZkNvbXBvbmVudCwgUm91dGVyTW9kdWxlLCBBcHBNYXRlcmlhbE1vZHVsZV1cblxufSlcbmV4cG9ydCBjbGFzcyBUYkF1dGhNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRiQXV0aE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGJBdXRoTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRiQXV0aFNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=