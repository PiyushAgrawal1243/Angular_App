import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { User } from './user';
import {UserData} from './UserData';
import {ItemList} from './item';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor() { }

  getUserData(): User[]{
    return UserData;
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
  getUser(id: number): Observable<User | undefined>{
    console.log(UserData.map(user => user.id === id));
    return  of(UserData.find(user => user.id === id));
  }
}
