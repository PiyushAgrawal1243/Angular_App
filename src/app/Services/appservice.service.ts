import { Injectable , EventEmitter} from '@angular/core';
import {Observable, of , Subject} from 'rxjs';
import { User } from '../user';
import {UserData} from '../UserData';
import {ItemList} from '../item';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor() { }

  activatedEmmiter = new Subject<boolean>();

  getUserData(): User[]{
    return UserData;
  }

  addUserData(user: { Email: string; gender: string; Name: string; Phone_No: string; Password: string }): void{
    UserData.push(user);
  }
  getItem(): string[] {
    return ItemList;
  }
  addItem( item: string): void{
    ItemList.push(item);
  }
  removeItem(item: string): void{
    // @ts-ignore
    const index = ItemList.indexOf(item);
    ItemList.splice(index, 1);
  }
  // tslint:disable-next-line:typedef
  getUser(name: string): Observable<User | undefined>{
    return  of(UserData.find(user => user.Name === name));
  }
}
