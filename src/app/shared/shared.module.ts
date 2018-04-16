import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import { StatisticService } from './services/statistic.service';
// import { CampaignService } from './services/campaign.service';
// import { CountryService } from './services/country.service';

//import { AuthorizationService } from './services/authorization.service';
//import { LocalStorageService } from './services/local-storage.service';

//import { AuthGuard } from './auth.guard';
// import { AdvertService } from './services/advert.service';
// import { HttpCacheService } from './services/http-cache.service';
// import { AdvertGuard } from './advert.guard';
// import { AuthInterceptor } from './interceptors/auth.interceptor';
// import { CacheInterceptor } from './interceptors/cache.interceptor';
// import { UrlInterceptor } from './interceptors/url.interceptor';


import { PopupComponent } from './components/popup/popup.component';
// import { DatePickerComponent } from './components/datePicker/date-picker.component';
// import { MyNumberPipe } from './pipes/my-number.pipe';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        FormsModule
    ],
    declarations: [PopupComponent],
    exports: [PopupComponent]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                //   LocalStorageService,
                //  AuthorizationService//,
                //  AuthGuard
                //     AccountService,
                //     StatisticService,
                //     CampaignService,
                //     CountryService,
                //

                //    LocalStorageService
                //     AdvertService,
                //     HttpCacheService,
                //     AuthGuard,
                //     AdvertGuard,
                //     {
                //         provide: HTTP_INTERCEPTORS,
                //         useClass: UrlInterceptor,
                //         multi: true
                //     },
                //     {
                //         provide: HTTP_INTERCEPTORS,
                //         useClass: CacheInterceptor,
                //         multi: true
                //     },
                //  {
                //      provide: HTTP_INTERCEPTORS,
                ///      useClass: AuthInterceptor,
                //      multi: true
                //  }
            ]
        };
    }

}
