import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { IUser } from '../interfaces/i-user.interface';
import { ProfileService } from './profile.service'
import { LocalStorageService, LocalStorageEnum } from './local-storage.service';

const AUTH_URL: string = environment.api + '/authentication';

@Injectable()
export class AuthorizationService {

  constructor(
    private _http: HttpClient,
    private _accountService: LocalStorageService,
  ) { }

  SignIn() {
  }
  SignOut() {
  }
  FakeSignIn() {
    let user: IUser = {
      "id": 1,
      "username": "Виталя Гора",
      "location": "г. Нижние Шахты",
      "marital_status": "холост",
      "phoneNumber": "+7 (440) 554-32-12",
      "email": "vitalya@gora.ru",
      "interests": 'музыка, компьютеры, радио'
    };
    this._accountService.Set(LocalStorageEnum.userProfile, user);
  }



}
