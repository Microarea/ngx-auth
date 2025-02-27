import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FloatingLabelModule, LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
            providers: [TbAuthService],
        };
    }
    /** @nocollapse */ static { this.ɵfac = function TbAuthModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TbAuthModule)(); }; }
    /** @nocollapse */ static { this.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: TbAuthModule }); }
    /** @nocollapse */ static { this.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
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
            RouterModule.forRoot(routes), RouterModule, AppMaterialModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbAuthModule, [{
        type: NgModule,
        args: [{
                declarations: [TbLoginComponent, TbLogoffComponent, ForgotPasswordComponent, ChangePasswordDialogComponent, AlertDialogComponent],
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
                    RouterModule.forRoot(routes),
                ],
                exports: [TbLoginComponent, TbLogoffComponent, RouterModule, AppMaterialModule],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TbAuthModule, { declarations: [TbLoginComponent, TbLogoffComponent, ForgotPasswordComponent, ChangePasswordDialogComponent, AlertDialogComponent], imports: [CommonModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90Yi9hdXRoL3NyYy9saWIvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUV6RCxNQUFNLE1BQU0sR0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFxQnpILE1BQU0sT0FBTyxZQUFZO0lBQ3JCLE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM3QixDQUFDO0lBQ04sQ0FBQztnSUFOUSxZQUFZO2tHQUFaLFlBQVk7c0dBaEJqQixZQUFZO1lBQ1osV0FBVztZQUNYLGVBQWU7WUFDZixXQUFXO1lBQ1gsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUVlLFlBQVksRUFBRSxpQkFBaUI7O2lGQUVyRSxZQUFZO2NBbkJ4QixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsb0JBQW9CLENBQUM7Z0JBQ2pJLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixXQUFXO29CQUNYLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDL0I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDO2FBQ2xGOzt3RkFDWSxZQUFZLG1CQWxCTixnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSw2QkFBNkIsRUFBRSxvQkFBb0IsYUFFNUgsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGNBQWM7UUFDZCxrQkFBa0IsOEJBR1osZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGbG9hdGluZ0xhYmVsTW9kdWxlLCBMYWJlbE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxhYmVsJztcbmltcG9ydCB7IERyb3BEb3duc01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRyb3Bkb3ducyc7XG5pbXBvcnQgeyBJbnB1dHNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1pbnB1dHMnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBUYkxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGJMb2dvZmZDb21wb25lbnQgfSBmcm9tICcuL2xvZ29mZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbmltcG9ydCB7IFRiQXV0aEd1YXJkIH0gZnJvbSAnLi9hdXRoLmd1YXJkJztcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQtZGlhbG9nL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWxlcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9hcHAtbWF0ZXJpYWwubW9kdWxlJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3sgcGF0aDogJ2xvZ29mZicsIGNvbXBvbmVudDogVGJMb2dvZmZDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbVGJBdXRoR3VhcmRdLCBwYXRoTWF0Y2g6ICdmdWxsJyB9XTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtUYkxvZ2luQ29tcG9uZW50LCBUYkxvZ29mZkNvbXBvbmVudCwgRm9yZ290UGFzc3dvcmRDb21wb25lbnQsIENoYW5nZVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LCBBbGVydERpYWxvZ0NvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBEcm9wRG93bnNNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBJbnB1dHNNb2R1bGUsXG4gICAgICAgIEZsb2F0aW5nTGFiZWxNb2R1bGUsXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBBcHBNYXRlcmlhbE1vZHVsZSxcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICAgIF0sXG4gICAgZXhwb3J0czogW1RiTG9naW5Db21wb25lbnQsIFRiTG9nb2ZmQ29tcG9uZW50LCBSb3V0ZXJNb2R1bGUsIEFwcE1hdGVyaWFsTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGJBdXRoTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRiQXV0aE1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFRiQXV0aE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1RiQXV0aFNlcnZpY2VdLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==