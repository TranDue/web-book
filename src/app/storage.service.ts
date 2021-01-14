import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  postCarosel: BehaviorSubject<any>;
  homeConfig: BehaviorSubject<any>;;
  postTable: BehaviorSubject<any>;
  staticConfig: BehaviorSubject<any>;
  contactConfig: BehaviorSubject<any>;
  postCaroselm;
  homeConfigm;
  constructor() {
    this.postCarosel = new BehaviorSubject<any>([]);
    this.homeConfig = new BehaviorSubject<any>({});
    this.postTable = new BehaviorSubject<any>([]);
    this.staticConfig = new BehaviorSubject<any>(null);
    this.contactConfig = new BehaviorSubject<any>(null);
    this.updateDataFromFirebase();
  }

  updateDataFromFirebase(): void {

  }

  convertDataToGroupThree(data) {
    let i = 0;
    return data.reduce((result, data, index) => {
      if (index % 3 === 0 && index !== 0) {
        i++;
        if (result[i]) {
          result[i].push(data);
          return result;
        } else {
          result[i] = [];
          result[i].push(data);
          return result;
        }
      }
      if (result[i] && index !== 0) {
        result[i].push(data);
        return result;
      } else {
        result[i] = [];
        result[i].push(data);
        return result;
      }

    }, [])
  }

  convertListDataFromFireBase(data) {
    return data.map((item) => {
      return { id: item.payload.doc.id, ...item?.payload?.doc?.data() };
    })
  }

}
