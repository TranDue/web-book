import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetailssService } from './../shared_/product-detailss.service';
import { Component, OnInit } from '@angular/core';
import { each } from 'highcharts';

interface Booklist {
  maSach: number,
  tenSach: string,
  noidung: string,
  ngayxuatban: Date,
  matacgia: number,
  manhasanxuat: number,
  maloaisach: number,
  sotrang: number,
  gia: number,
  anhSach: string
}
const URL = "https://localhost:5001/api/sach";
@Component({
  selector: 'app-sanpham-config',
  templateUrl: './sanpham-config.component.html',
  styleUrls: ['./sanpham-config.component.css']
})
export class SanphamConfigComponent implements OnInit {
  books: Booklist[] = [];

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {

    this. getThongtinsach().subscribe((data) => {
      this.books = data;
    })
  }
  getThongtinsach(): Observable<any> {
    return this.HttpClient.get(URL);
  }
  clearCart(): Observable<any>{
    return this.HttpClient.delete(URL);
  }
}
