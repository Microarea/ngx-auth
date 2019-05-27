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
var routes = [
    { path: 'login', component: TbLoginComponent },
    { path: 'logoff', component: TbLogoffComponent, canActivate: [TbAuthGuard], pathMatch: 'full' }
];
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
            providers: [TbAuthService]
        };
    };
    TbAuthModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TbLoginComponent, TbLogoffComponent],
                    imports: [CommonModule, FormsModule, InputsModule, ButtonsModule, RouterModule.forRoot(routes)],
                    exports: [TbLoginComponent, TbLogoffComponent, RouterModule]
                },] }
    ];
    return TbAuthModule;
}());
export { TbAuthModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGIvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7SUFFckMsTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7SUFDOUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0NBQ2xHO0FBRUQ7SUFBQTtJQVlBLENBQUM7Ozs7SUFOVSxvQkFBTzs7O0lBQWQ7UUFDSSxPQUFPO1lBQ0gsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQzdCLENBQUM7SUFDTixDQUFDOztnQkFYSixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7b0JBQ25ELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMvRixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLENBQUM7aUJBQy9EOztJQVFELG1CQUFDO0NBQUEsQUFaRCxJQVlDO1NBUFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElucHV0c01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWlucHV0cyc7XG5pbXBvcnQgeyBCdXR0b25zTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItYnV0dG9ucyc7XG5cbmltcG9ydCB7IFRiTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYkxvZ29mZkNvbXBvbmVudCB9IGZyb20gJy4vbG9nb2ZmLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFRiQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbmltcG9ydCB7IFRiQXV0aEd1YXJkIH0gZnJvbSAnLi9hdXRoLmd1YXJkJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IFRiTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdsb2dvZmYnLCBjb21wb25lbnQ6IFRiTG9nb2ZmQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW1RiQXV0aEd1YXJkXSwgcGF0aE1hdGNoOiAnZnVsbCcgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtUYkxvZ2luQ29tcG9uZW50LCBUYkxvZ29mZkNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIElucHV0c01vZHVsZSwgQnV0dG9uc01vZHVsZSwgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW1RiTG9naW5Db21wb25lbnQsIFRiTG9nb2ZmQ29tcG9uZW50LCBSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFRiQXV0aE1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogVGJBdXRoTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbVGJBdXRoU2VydmljZV1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=