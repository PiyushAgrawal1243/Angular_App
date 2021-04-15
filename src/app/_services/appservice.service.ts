import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {User} from '../_interfaces/user';
import {UserData} from '../_userData/UserData';
import {ItemList} from '../_userData/item';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Users} from '../_interfaces/Users';
import {AuthService} from './Auth.service';

@Injectable({
    providedIn: 'root'
})
export class AppserviceService {

    serverdataUrl = 'https://angularproject-b4aba-default-rtdb.firebaseio.com/posts.json';

    constructor(private http: HttpClient) {
    }

    getUserData(): User[] {
        return UserData;
    }

    addUserData(user: { Email: string; gender: string; Name: string; Phone_No: string; Password: string }): void {
        UserData.push(user);
    }


    // tslint:disable-next-line:typedef
    updateUserEmail(name: string) {
        const user = this.getUserData().find(data => data.Name === name);
        return user;

    }

    // tslint:disable-next-line:typedef
    updateUserName(email: string) {
        const user = this.getUserData().find(data => data.Email === email);
        return user;
    }


    getItem(): string[] {
        return ItemList;
    }


    addItem(item: string): void {
        ItemList.push(item);
    }


    removeItem(item: string): void {
        // @ts-ignore
        const index = ItemList.indexOf(item);
        ItemList.splice(index, 1);
    }


    // tslint:disable-next-line:typedef
    getUser(name: string): Observable<User | undefined> {
        return of(UserData.find(user => user.Name === name));
    }

    getDataFromServer(): Observable<Users[]> {
        return this.http.get(this.serverdataUrl)
            .pipe(map(responseData => {
                    const postArray = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            // @ts-ignore
                            postArray.push({...responseData[key], id: key});
                        }
                    }
                    return postArray;
                }));

            }

    }
