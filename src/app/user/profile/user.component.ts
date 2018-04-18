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
    this.userInterests.unshift(interes);
    this.user.interests = this.userInterests.toString();
    this.setInterests();
    let a = this.user['username'];
    debugger

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

  private toogle(option_part) {
    this["edit_" + option_part] = !this["edit_" + option_part];
  }

  private UpdateUserInfo() {
    this._profileService.SetUser(this.user);
  }
}
