import { Component, OnInit, ViewChild } from '@angular/core';
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
  interes_error_massage: number;
  @ViewChild('interesInput') interesInput;
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
    this.interes_error_massage = -1;
  }
  setInterests() {
    this._profileService.SetUser(this.user);
  }

  setError(target, err: number) {
    this[target] = err || -1;
  }
  addInteres(): void {
    let interes = this.interesInput.nativeElement.value.trim();
    this.setError('interes_error_massage', -1);
    var _this = this;
    var timer = setTimeout(function () { _this.setError('interes_error_massage', null); timer = null }, 2500);
    if (interes.length == 0) {
      return
    }
    if (Utils.Array.Contains(this.userInterests, interes)) {
      this.setError('interes_error_massage', 1);
      return
    }


    this.userInterests.unshift(interes);
    this.user.interests = this.userInterests.toString();
    this.UpdateUserInfo();
    this.interesInput.nativeElement.value = "";

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
