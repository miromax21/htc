import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

import { IUserFrends } from '../interfaces/i-user.interface';
import { LocalStorageService, LocalStorageEnum } from './local-storage.service';
import { Utils } from '../utils';

@Injectable()
export class FriendsService {
    constructor(private _localStorageService: LocalStorageService) { }

    GetUser(): IUserFrends[] {
        return [
            { 'username': 'Лев Бронштеин', 'location': 'г. Ханты-Мансийск', 'status': 'online', 'img': 'assets/images/friends/Leo Bronshtein.png' },
            { 'username': 'Находка капитал', 'location': 'г. Усть-Бельск', 'status': '', 'img': 'assets/images/friends/Nahodka Kapital.png' },
            { 'username': 'Яндекс Петренко', 'location': 'г. Пермь', 'status': '', 'img': 'assets/images/friends/Yandex Petrenko.png' },
            { 'username': 'Успех Возможностей', 'location': 'г. Радонеж', 'status': '', 'img': 'assets/images/friends/Uspeh Vosmozhnostey.png' },
            { 'username': 'Инна Нашлась', 'location': 'г. Омск', 'status': 'online', 'img': 'assets/images/friends/Inna nahlas.png' },
            { 'username': 'Алла Подольская', 'location': 'г. Петропавловск-Камчатский', 'status': 'online', 'img': 'assets/images/friends/Alla Podolskaya.png' },
            { 'username': 'Лев Бронштеин', 'location': 'г. Ханты-Мансийск', 'status': 'online', 'img': 'assets/images/friends/Leo Bronshtein.png' },
            { 'username': 'Находка капитал', 'location': 'г. Усть-Бельск', 'status': '', 'img': 'assets/images/friends/Nahodka Kapital.png' },
            { 'username': 'Яндекс Петренко', 'location': 'г. Пермь', 'status': '', 'img': 'assets/images/friends/Yandex Petrenko.png' },
            { 'username': 'Успех Возможностей', 'location': 'г. Радонеж', 'status': '', 'img': 'assets/images/friends/Uspeh Vosmozhnostey.png' },
            { 'username': 'Инна Нашлась', 'location': 'г. Омск', 'status': 'online', 'img': 'assets/images/friends/Inna nahlas.png' },
            { 'username': 'Алла Подольская', 'location': 'г. Петропавловск-Камчатский', 'status': 'online', 'img': 'assets/images/friends/Alla Podolskaya.png' },
        ];
    }
}