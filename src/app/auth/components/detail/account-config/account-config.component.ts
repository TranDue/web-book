import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  password: string;
  gmail: string;
  sdt: number;
  addr: string;
}
interface Acclist {
  id: number,
  name: string,
  password: string,
  gmail: string,
  sdt: number,
  addr: string
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', password: (Math.random().toString(36)).slice(2, 34) , gmail: 'H', sdt: (Math.random()*10)+1, addr: ''},
  {position: 2, name: 'Helium', password: (Math.random().toString(36)).slice(2, 34), gmail: 'He', sdt: (Math.random()*10)+1, addr: ''},
  {position: 3, name: 'Lithium', password:(Math.random().toString(36)).slice(2, 34), gmail: 'Li', sdt: (Math.random()*10)+1, addr: ''},
  {position: 4, name: 'Beryllium', password: (Math.random().toString(36)).slice(2, 34), gmail: 'Be', sdt: (Math.random()*10)+1, addr: ''},
  {position: 5, name: 'Boron', password: (Math.random().toString(36)).slice(2, 34), gmail: 'B', sdt: (Math.random()*10)+1, addr: ''},
  {position: 6, name: 'Carbon', password: (Math.random().toString(36)).slice(2, 34), gmail: 'C', sdt: (Math.random()*10)+1, addr: ''},
  {position: 7, name: 'Nitrogen', password: (Math.random().toString(36)).slice(2, 34), gmail: 'N', sdt: (Math.random()*10)+1, addr: ''},
  {position: 8, name: 'Oxygen', password: (Math.random().toString(36)).slice(2, 34), gmail: 'O', sdt: (Math.random()*10)+1, addr: ''},
  {position: 9, name: 'Fluorine', password: (Math.random().toString(36)).slice(2, 34), gmail: 'F', sdt: (Math.random()*10)+1, addr: ''},
  {position: 10, name: 'Neon', password: (Math.random().toString(36)).slice(2, 34), gmail: 'Ne', sdt: (Math.random()*10)+1, addr: ''},
];

const URL = 'https://5fce45a03e19cc00167c584c.mockapi.io/Account';
@Component({
  selector: 'app-account-config',
  templateUrl: './account-config.component.html',
  styleUrls: ['./account-config.component.css']
})
export class AccountConfigComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','symbol1', 'symbol2'];
  dataSource = ELEMENT_DATA;
  accs: Acclist[] = [];
  constructor(
    private HttpClient:HttpClient) { }

  ngOnInit(): void {
    this.getAccount().subscribe((data) =>{
      this.accs = data;
    })
  }
  getAccount(): Observable<any>{
    return this.HttpClient.get(URL);
  }

}
