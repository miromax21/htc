import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageEnum } from '../../shared/services/local-storage.service';
import { ProfileService } from 'app/shared/services/profile.service';
import { Utils } from 'app/shared/utils';
import { IUser } from '../../shared/interfaces/i-user.interface';
import { AuthorizationService } from '../../shared/services/authorization.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})

export class UserComponent implements OnInit {
  editObj: string;
  userInterests: Array<string>;
  user: IUser;
  showPopUp: boolean;
  edit_marital_status: boolean;
  edit_username: boolean;
  edit_location: boolean;
  edit_phoneNumber: boolean;
  edit_email: boolean;
  error_massage: number;
  public myForm: FormGroup;
  constructor(private _profileService: ProfileService) {
  }

  ngOnInit() {
    this.showPopUp = false;
    this.user = this._profileService.GetUser();
    this.userInterests = this.user.interests.split(',');
    this.edit_marital_status = false;
    this.edit_username = false;
    this.edit_location = false;
    this.edit_phoneNumber = false;
    this.edit_phoneNumber = false;
  }
  setInterests() {
    this._profileService.SetUser(this.user);
  }
  addInteres(interes: string): void {
    interes = interes.trim();
    if (Utils.Array.Contains(this.userInterests, interes)) {
      this.error_massage = 1;
      return
    }
    if (interes.split(',').length > 1) {
      this.error_massage = 2;
      return
    }
    if (interes.length > 40) {
      this.error_massage = 3
      return;
    }

    this.error_massage = null;
    this.userInterests.unshift(interes);
    this.user.interests = this.userInterests.toString();

  }
  chenge(user_options: string) {
    if (this.editObj !== this.user[user_options]) {
      this.UpdateUserInfo();
    }
    this.toogle(user_options);
  }
  edit(user_options: string) {
    this.editObj = this.user[user_options];
    this.toogle(user_options);
  }
  delete(index: string) {
    this.userInterests.splice(parseInt(index), 1);
    this.user.interests = this.userInterests.toString();
    this.UpdateUserInfo();
  }
  private toogle(option_part) {
    this["edit_" + option_part] = !this["edit_" + option_part];
  }

  private UpdateUserInfo() {
    this._profileService.SetUser(this.user);
  }
}
