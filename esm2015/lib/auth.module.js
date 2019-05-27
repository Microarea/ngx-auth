/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TbLoginComponent } from './pages/login.component';
import { TbLogoffComponent } from './logoff.component';
import { TbAuthService } from './auth.service';
import { TbAuthGuard } from './auth.guard';
/** @type {?} */
const routes = [
    { path: 'login', component: TbLoginComponent },
    { path: 'logoff', component: TbLogoffComponent, canActivate: [TbAuthGuard], pathMatch: 'full' }
];
export class TbAuthModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TbAuthModule,
            providers: [TbAuthService]
        };
    }
}
TbAuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TbLoginComponent, TbLogoffComponent],
                imports: [CommonModule, FormsModule, InputsModule, ButtonsModule, RouterModule.forRoot(routes)],
                exports: [TbLoginComponent, TbLogoffComponent, RouterModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGIvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7TUFFckMsTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7SUFDOUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0NBQ2xHO0FBT0QsTUFBTSxPQUFPLFlBQVk7Ozs7SUFDckIsTUFBTSxDQUFDLE9BQU87UUFDVixPQUFPO1lBQ0gsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQzdCLENBQUM7SUFDTixDQUFDOzs7WUFYSixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ25ELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvRixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLENBQUM7YUFDL0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJbnB1dHNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1pbnB1dHMnO1xuaW1wb3J0IHsgQnV0dG9uc01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWJ1dHRvbnMnO1xuXG5pbXBvcnQgeyBUYkxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGJMb2dvZmZDb21wb25lbnQgfSBmcm9tICcuL2xvZ29mZi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBUYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBUYkF1dGhHdWFyZCB9IGZyb20gJy4vYXV0aC5ndWFyZCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBUYkxvZ2luQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnbG9nb2ZmJywgY29tcG9uZW50OiBUYkxvZ29mZkNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtUYkF1dGhHdWFyZF0sIHBhdGhNYXRjaDogJ2Z1bGwnIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbVGJMb2dpbkNvbXBvbmVudCwgVGJMb2dvZmZDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBJbnB1dHNNb2R1bGUsIEJ1dHRvbnNNb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtUYkxvZ2luQ29tcG9uZW50LCBUYkxvZ29mZkNvbXBvbmVudCwgUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBUYkF1dGhNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFRiQXV0aE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1RiQXV0aFNlcnZpY2VdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19