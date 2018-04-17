import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

import { IUser } from '../interfaces/i-user.interface';
import { LocalStorageService, LocalStorageEnum } from './local-storage.service';
import { Utils } from '../utils';

@Injectable()
export class ProfileService {

	private _returnUrl: string;

	constructor(
		private _localStorageService: LocalStorageService,
	) { }

	GetUser(): IUser {
		return this._localStorageService.Get(LocalStorageEnum.userProfile);
	}

	SetUser(user: IUser): void {
		this._localStorageService.Set(LocalStorageEnum.userProfile, user);
	}

	Reset(): void {
		this._localStorageService.Reset(LocalStorageEnum.userProfile);
	}

	IsAuthenticated(): boolean {
		return Utils.IsNullOrUndefined(this.GetUser()) == true ? false : true;
	}

}
