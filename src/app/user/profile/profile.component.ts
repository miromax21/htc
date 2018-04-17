import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ProfileService } from '../../shared/services/profile.service';
import { IUser } from '../../shared/interfaces/i-user.interface';
import { Utils } from '../../shared/utils';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})

export class ProfileComponent implements OnInit {
  public user: IUser;
  public userInterests: string[];

  @Input() set data(user: IUser) {
    if (!Utils.IsNullOrUndefined(user)) {
      this.user = user;
    }
  }
  ngOnInit() {
    this.user = this.user;
    this.userInterests = this.user.interests.split(",");
  }
  SetProfileInfo() {

  }
  DeleteRestriction(id: any) {
    alert(id);
  }
}
