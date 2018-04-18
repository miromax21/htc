import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from '../app/user/profile/user.component';
import { FriendsComponent } from '../app/user/friends/friends.component'
import { ProfileService } from './shared/services/profile.service';
import { FriendsService } from './shared/services/frends.service';
import { HomeComponent } from './home.component';
import {
      SharedModule,
      LocalStorageService,
      LocalStorageEnum,
      FocusDirective
      // userStateReducer,
      // currentAdvertReducer,
      // currentCampaignReducer,
      // currentCampaignInfoReducer
} from './shared';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
      declarations: [
            AppComponent,
            PageNotFoundComponent,
            UserComponent,
            FriendsComponent,
            HomeComponent,
            FocusDirective
      ],
      imports: [
            BrowserModule,
            SharedModule.forRoot(),
            AppRoutingModule,
            HttpModule,
            ReactiveFormsModule,
            FormsModule
      ],
      providers: [
            ProfileService,
            FriendsService,
            LocalStorageService
      ],
      bootstrap: [
            AppComponent
      ]
})
export class AppModule {
      constructor() {
      }
}
