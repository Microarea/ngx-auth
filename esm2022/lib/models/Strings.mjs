export class Strings {
    constructor() {
        /**
         *
         */
        this.currentBrowserLanguage = 'en';
        this.UpdateTitle_IT = 'Aggiornamento  in vista';
        this.UpdateTitle_EN = 'Update planned';
        this.UpdateTitle_DE = 'Aktualisierung geplant';
        this.UpdateTitle_BR = 'Atualização planejada';
        this.UpdateTitle_BG = 'Планирана актуализация';
        this.UpdateTitle_ES = 'Actualización planificada';
        this.UpdateTitle_RO = '';
        this.UpdateTitle_PL = '';
        this.UpdateDontShow_IT = 'Non mostrare più questo messaggio';
        this.UpdateDontShow_EN = 'Do not show me this message again';
        this.UpdateDontShow_DE = 'Diesen Hinweis nicht mehr zeigen';
        this.UpdateDontShow_BR = 'Não mostrar essa mensagem novamente';
        this.UpdateDontShow_BG = 'Моля, не ми показвайте това съобщение отново';
        this.UpdateDontShow_ES = 'No vuelva a mostrar este mensaje';
        this.UpdateDontShow_RO = '';
        this.UpdateDontShow_PL = '';
        this.currentBrowserLanguage = navigator.language.toLocaleLowerCase();
    }
    getUpdateTitle() {
        if (this.currentBrowserLanguage.startsWith('it'))
            return this.UpdateTitle_IT ?? this.UpdateTitle_EN;
        if (this.currentBrowserLanguage.startsWith('de'))
            return this.UpdateTitle_DE ?? this.UpdateTitle_EN;
        if (this.currentBrowserLanguage.startsWith('pt'))
            return this.UpdateTitle_BR ?? this.UpdateTitle_EN;
        if (this.currentBrowserLanguage.startsWith('bg'))
            return this.UpdateTitle_BG ?? this.UpdateTitle_EN;
        if (this.currentBrowserLanguage.startsWith('es'))
            return this.UpdateTitle_ES ?? this.UpdateTitle_EN;
        if (this.currentBrowserLanguage.startsWith('pl'))
            return this.UpdateTitle_PL ?? this.UpdateTitle_EN;
        if (this.currentBrowserLanguage.startsWith('ro'))
            return this.UpdateTitle_RO ?? this.UpdateTitle_EN;
        else
            return this.UpdateTitle_EN;
    }
    getUpdateDontShowMessage() {
        if (this.currentBrowserLanguage.startsWith('it'))
            return this.UpdateDontShow_IT ?? this.UpdateDontShow_EN;
        if (this.currentBrowserLanguage.startsWith('de'))
            return this.UpdateDontShow_DE ?? this.UpdateDontShow_EN;
        if (this.currentBrowserLanguage.startsWith('pt'))
            return this.UpdateDontShow_BR ?? this.UpdateDontShow_EN;
        if (this.currentBrowserLanguage.startsWith('bg'))
            return this.UpdateDontShow_BG ?? this.UpdateDontShow_EN;
        if (this.currentBrowserLanguage.startsWith('es'))
            return this.UpdateDontShow_ES ?? this.UpdateDontShow_EN;
        if (this.currentBrowserLanguage.startsWith('pl'))
            return this.UpdateDontShow_PL ?? this.UpdateDontShow_EN;
        if (this.currentBrowserLanguage.startsWith('ro'))
            return this.UpdateDontShow_RO ?? this.UpdateDontShow_EN;
        else
            return this.UpdateDontShow_EN;
    }
    getUpdateMessage(authService) {
        if (this.currentBrowserLanguage.startsWith('it'))
            return authService.getUpdateMessage_IT() ?? authService.getUpdateMessage_EN();
        if (this.currentBrowserLanguage.startsWith('de'))
            return authService.getUpdateMessage_DE() ?? authService.getUpdateMessage_EN();
        if (this.currentBrowserLanguage.startsWith('pt'))
            return authService.getUpdateMessage_BR() ?? authService.getUpdateMessage_EN();
        if (this.currentBrowserLanguage.startsWith('bg'))
            return authService.getUpdateMessage_BG() ?? authService.getUpdateMessage_EN();
        if (this.currentBrowserLanguage.startsWith('es'))
            return authService.getUpdateMessage_ES() ?? authService.getUpdateMessage_EN();
        if (this.currentBrowserLanguage.startsWith('pl'))
            return authService.getUpdateMessage_PL() ?? authService.getUpdateMessage_EN();
        if (this.currentBrowserLanguage.startsWith('ro'))
            return authService.getUpdateMessage_RO() ?? authService.getUpdateMessage_EN();
        else
            return authService.getUpdateMessage_EN();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RiL2F1dGgvc3JjL2xpYi9tb2RlbHMvU3RyaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sT0FBTztJQU1sQjtRQUxBOztXQUVHO1FBQ0ssMkJBQXNCLEdBQUMsSUFBSSxDQUFDO1FBTTFCLG1CQUFjLEdBQUcseUJBQXlCLENBQUM7UUFDM0MsbUJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNsQyxtQkFBYyxHQUFHLHdCQUF3QixDQUFDO1FBQzFDLG1CQUFjLEdBQUcsdUJBQXVCLENBQUM7UUFDekMsbUJBQWMsR0FBRyx3QkFBd0IsQ0FBQztRQUMxQyxtQkFBYyxHQUFHLDJCQUEyQixDQUFDO1FBQzdDLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLHNCQUFpQixHQUFHLG1DQUFtQyxDQUFDO1FBQ3hELHNCQUFpQixHQUFHLG1DQUFtQyxDQUFDO1FBQ3hELHNCQUFpQixHQUFHLGtDQUFrQyxDQUFDO1FBQ3ZELHNCQUFpQixHQUFHLHFDQUFxQyxDQUFDO1FBQzFELHNCQUFpQixHQUFHLDhDQUE4QyxDQUFDO1FBQ25FLHNCQUFpQixHQUFHLGtDQUFrQyxDQUFDO1FBQ3ZELHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFuQjlCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFFeEUsQ0FBQztJQW1CTyxjQUFjO1FBRXBCLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDOUMsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMs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VyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDL0UsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUM5QyxPQUFPLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hGLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDNUMsT0FBTyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsSUFBRyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNqRixJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQzlDLE9BQU8sV0FBVyxDQUFDLG1CQUFtQixFQUFFLElBQUcsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDL0UsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUM5QyxPQUFPLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFHLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOztZQUU3RSxPQUFPLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRiQXV0aFNlcnZpY2UsIGF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL2F1dGguc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgU3RyaW5ncyB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBjdXJyZW50QnJvd3Nlckxhbmd1YWdlPSdlbic7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgIHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gIH1cbiAgICBwdWJsaWMgIFVwZGF0ZVRpdGxlX0lUID0gJ0FnZ2lvcm5hbWVudG8gIGluIHZpc3RhJztcbiAgICBwdWJsaWMgIFVwZGF0ZVRpdGxlX0VOID0gJ1VwZGF0ZSBwbGFubmVkJztcbiAgICBwdWJsaWMgIFVwZGF0ZVRpdGxlX0RFID0gJ0FrdHVhbGlzaWVydW5nIGdlcGxhbnQnO1xuICAgIHB1YmxpYyAgVXBkYXRlVGl0bGVfQlIgPSAnQXR1YWxpemHDp8OjbyBwbGFuZWphZGEnO1xuICAgIHB1YmxpYyAgVXBkYXRlVGl0bGVfQkcgPSAn0J/Qu9Cw0L3QuNGA0LDQvdCwINCw0LrRgtGD0LDQu9C40LfQsNGG0LjRjyc7XG4gICAgcHVibGljICBVcGRhdGVUaXRsZV9FUyA9ICdBY3R1YWxpemFjacOzbiBwbGFuaWZpY2FkYSc7XG4gICAgcHVibGljICBVcGRhdGVUaXRsZV9STyA9ICcnO1xuICAgIHB1YmxpYyAgVXBkYXRlVGl0bGVfUEwgPSAnJztcblxuICAgIHB1YmxpYyAgVXBkYXRlRG9udFNob3dfSVQgPSAnTm9uIG1vc3RyYXJlIHBpw7kgcXVlc3RvIG1lc3NhZ2dpbyc7XG4gICAgcHVibGljICBVcGRhdGVEb250U2hvd19FTiA9ICdEbyBub3Qgc2hvdyBtZSB0aGlzIG1lc3NhZ2UgYWdhaW4nO1xuICAgIHB1YmxpYyAgVXBkYXRlRG9udFNob3dfREUgPSAnRGllc2VuIEhpbndlaXMgbmljaHQgbWVociB6ZWlnZW4nO1xuICAgIHB1YmxpYyAgVXBkYXRlRG9udFNob3dfQlIgPSAnTsOjbyBtb3N0cmFyIGVzc2EgbWVuc2FnZW0gbm92YW1lbnRlJztcbiAgICBwdWJsaWMgIFVwZGF0ZURvbnRTaG93X0JHID0gJ9Cc0L7Qu9GPLCDQvdC1INC80Lgg0L/QvtC60LDQt9Cy0LDQudGC0LUg0YLQvtCy0LAg0YHRitC+0LHRidC10L3QuNC1INC+0YLQvdC+0LLQvic7XG4gICAgcHVibGljICBVcGRhdGVEb250U2hvd19FUyA9ICdObyB2dWVsdmEgYSBtb3N0cmFyIGVzdGUgbWVuc2FqZSc7XG4gICAgcHVibGljICBVcGRhdGVEb250U2hvd19STyA9ICcnO1xuICAgIHB1YmxpYyAgVXBkYXRlRG9udFNob3dfUEwgPSAnJztcblxuICAgcHVibGljIGdldFVwZGF0ZVRpdGxlKCl7XG5cbiAgICBpZiggdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpXG4gICAgICByZXR1cm4gdGhpcy5VcGRhdGVUaXRsZV9JVD8/IHRoaXMuVXBkYXRlVGl0bGVfRU47XG4gICAgaWYoIHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdkZScpKVxuICAgICAgcmV0dXJuIHRoaXMuVXBkYXRlVGl0bGVfREU/PyB0aGlzLlVwZGF0ZVRpdGxlX0VOO1xuICAgIGlmKCB0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgncHQnKSlcbiAgICAgIHJldHVybiB0aGlzLlVwZGF0ZVRpdGxlX0JSPz8gdGhpcy5VcGRhdGVUaXRsZV9FTjtcbiAgICBpZiggdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2JnJykpXG4gICAgICByZXR1cm4gdGhpcy5VcGRhdGVUaXRsZV9CRyA/PyB0aGlzLlVwZGF0ZVRpdGxlX0VOO1xuICAgIGlmKCB0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnZXMnKSlcbiAgICAgICAgcmV0dXJuIHRoaXMuVXBkYXRlVGl0bGVfRVM/PyB0aGlzLlVwZGF0ZVRpdGxlX0VOO1xuICAgIGlmKCB0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgncGwnKSlcbiAgICAgIHJldHVybiB0aGlzLlVwZGF0ZVRpdGxlX1BMPz8gdGhpcy5VcGRhdGVUaXRsZV9FTjtcbiAgICBpZiggdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ3JvJykpXG4gICAgICByZXR1cm4gdGhpcy5VcGRhdGVUaXRsZV9STz8/IHRoaXMuVXBkYXRlVGl0bGVfRU47XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIHRoaXMuVXBkYXRlVGl0bGVfRU47XG4gICAgfVxuXG4gICAgcHVibGljIGdldFVwZGF0ZURvbnRTaG93TWVzc2FnZSgpe1xuXG4gICAgaWYoIHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKVxuICAgICAgcmV0dXJuIHRoaXMuVXBkYXRlRG9udFNob3dfSVQ/PyB0aGlzLlVwZGF0ZURvbnRTaG93X0VOO1xuICAgIGlmKCB0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnZGUnKSlcbiAgICAgIHJldHVybiB0aGlzLlVwZGF0ZURvbnRTaG93X0RFPz8gdGhpcy5VcGRhdGVEb250U2hvd19FTjtcbiAgICBpZiggdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ3B0JykpXG4gICAgICByZXR1cm4gdGhpcy5VcGRhdGVEb250U2hvd19CUj8/IHRoaXMuVXBkYXRlRG9udFNob3dfRU47XG4gICAgaWYoIHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdiZycpKVxuICAgICAgcmV0dXJuIHRoaXMuVXBkYXRlRG9udFNob3dfQkcgPz8gdGhpcy5VcGRhdGVEb250U2hvd19FTjtcbiAgICBpZiggdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2VzJykpXG4gICAgICAgIHJldHVybiB0aGlzLlVwZGF0ZURvbnRTaG93X0VTPz8gdGhpcy5VcGRhdGVEb250U2hvd19FTjtcbiAgICBpZiggdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ3BsJykpXG4gICAgICByZXR1cm4gdGhpcy5VcGRhdGVEb250U2hvd19QTD8/IHRoaXMuVXBkYXRlRG9udFNob3dfRU47XG4gICAgaWYoIHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdybycpKVxuICAgICAgcmV0dXJuIHRoaXMuVXBkYXRlRG9udFNob3dfUk8/PyB0aGlzLlVwZGF0ZURvbnRTaG93X0VOO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiB0aGlzLlVwZGF0ZURvbnRTaG93X0VOO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVcGRhdGVNZXNzYWdlKCBhdXRoU2VydmljZTogVGJBdXRoU2VydmljZSkge1xuXG4gICAgaWYoIHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKVxuICAgICAgcmV0dXJuIGF1dGhTZXJ2aWNlLmdldFVwZGF0ZU1lc3NhZ2VfSVQoKT8/IGF1dGhTZXJ2aWNlLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcbiAgICBpZiggdGhpcy5jdXJyZW50QnJvd3Nlckxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2RlJykpXG4gICAgICByZXR1cm4gYXV0aFNlcnZpY2UuZ2V0VXBkYXRlTWVzc2FnZV9ERSgpPz8gYXV0aFNlcnZpY2UuZ2V0VXBkYXRlTWVzc2FnZV9FTigpO1xuICAgIGlmKCB0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgncHQnKSlcbiAgICAgIHJldHVybiBhdXRoU2VydmljZS5nZXRVcGRhdGVNZXNzYWdlX0JSKCk/PyBhdXRoU2VydmljZS5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XG4gICAgaWYoIHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdiZycpKVxuICAgICAgcmV0dXJuIGF1dGhTZXJ2aWNlLmdldFVwZGF0ZU1lc3NhZ2VfQkcoKSA/PyBhdXRoU2VydmljZS5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XG4gICAgaWYoIHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdlcycpKVxuICAgICAgICByZXR1cm4gYXV0aFNlcnZpY2UuZ2V0VXBkYXRlTWVzc2FnZV9FUygpPz8gYXV0aFNlcnZpY2UuZ2V0VXBkYXRlTWVzc2FnZV9FTigpO1xuICAgIGlmKCB0aGlzLmN1cnJlbnRCcm93c2VyTGFuZ3VhZ2Uuc3RhcnRzV2l0aCgncGwnKSlcbiAgICAgIHJldHVybiBhdXRoU2VydmljZS5nZXRVcGRhdGVNZXNzYWdlX1BMKCk/PyBhdXRoU2VydmljZS5nZXRVcGRhdGVNZXNzYWdlX0VOKCk7XG4gICAgaWYoIHRoaXMuY3VycmVudEJyb3dzZXJMYW5ndWFnZS5zdGFydHNXaXRoKCdybycpKVxuICAgICAgcmV0dXJuIGF1dGhTZXJ2aWNlLmdldFVwZGF0ZU1lc3NhZ2VfUk8oKT8/IGF1dGhTZXJ2aWNlLmdldFVwZGF0ZU1lc3NhZ2VfRU4oKTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gYXV0aFNlcnZpY2UuZ2V0VXBkYXRlTWVzc2FnZV9FTigpO1xuICB9XG59XG4iXX0=