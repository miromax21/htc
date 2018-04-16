import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { LocalStorageEnum } from '../shared/services/local-storage.service';
// import { ProfileService } from 'app/shared/services/profile.service';
// import { Utils } from 'app/shared/utils';
// import { IUser } from '../shared/interfaces/i-user.interface';
// import { AuthorizationService } from '../shared/services/authorization.service';
@Component({
  selector: 'app-article',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})

export class UserComponent implements OnInit {
  interests: string[];

  showPopUp: boolean;
  constructor() {

  }

  ngOnInit() {
    this.showPopUp = false;
  }
}

