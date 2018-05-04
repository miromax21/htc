import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthorizationService } from './services/authorization.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthGuard } from './auth.guard';
import { FocusDirective } from './components/FocusDirective';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        FormsModule
    ],
    declarations: [],
    exports: []
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                LocalStorageService,
                AuthorizationService,
                AuthGuard
            ]
        };
    }

}
