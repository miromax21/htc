import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageEnum } from '../../shared/services/local-storage.service';
import { FriendsService } from 'app/shared/services/frends.service';
import { Utils } from 'app/shared/utils';
import { IUserFrends } from '../../shared/interfaces/i-user.interface';
import { AuthorizationService } from '../../shared/services/authorization.service';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.less']
})
export class FriendsComponent implements OnInit {
    frends: IUserFrends[];
    constructor(private _friendsService: FriendsService) {

    }
    ngOnInit() {
        this.frends = this._friendsService.GetUser();
    }
}