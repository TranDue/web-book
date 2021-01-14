import { CartService } from 'src/app/shared/cart.service';
import { Observable } from 'rxjs/internal/observable';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface Booklist {
  id: number,
  name: string,
  tacgia: string,
  ncc: string,
  nxb: string,
  avatar: string,
  price: number
}
interface Book {
  id: number,
  name: string,
  src: string,
  tacgia: string,
  ncc: string,
  nxb: string,
  price: string
}
const URL = 'https://5fce45a03e19cc00167c584c.mockapi.io/Book';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  items = this.cartService.getItems();
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  books: Booklist[] = [];
  inforbook: Book =
  {
  id:1,
  name : 'Con Chim Xanh Biếc Bay Về - Tặng Kèm 6 Postcard',
  src: "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/i/biamem.jpg",
  tacgia: 'Nguyễn Nhật Ánh',
  ncc: 'NXB Trẻ',
  nxb: 'NXB Trẻ',
  price: '120.000 đồng'
  };
  inforbook1: Book =
  {
  id:1,
  name : 'Cổ Tích Mới - Chiếc Áo Tàng Hình',
  src: "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_61144.jpg",
  tacgia: 'Nguyên Hương',
  ncc: 'NXB Trẻ',
  nxb: 'NXB Trẻ',
  price: '23.800 đ'
  };
  inforbook2: Book =
  {
  id:1,
  name : 'Viên Ngọc Bùa Mê',
  src: "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_60982.jpg",
  tacgia: 'Nguyễn Nhật Ánh',
  ncc: 'NXB Trẻ',
  nxb: 'NXB Trẻ',
  price: '23.800 đ'
  };
  inforbook3: Book =
  {
  id:1,
  name : 'Con Chim Xanh Biếc Bay Về ',
  src: "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/9/8934974137139.jpg",
  tacgia: 'Nguyễn Nhật Ánh',
  ncc: 'NXB Trẻ',
  nxb: 'NXB Trẻ',
  price: '120.000 đồng'
  };
  inforbook4: Book =
  {
  id:1,
  name : 'Con Chim Xanh Biếc Bay Về - Tặng Kèm 6 Postcard',
  src: "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/i/biamem.jpg",
  tacgia: 'Nguyễn Nhật Ánh',
  ncc: 'NXB Trẻ',
  nxb: 'NXB Trẻ',
  price: '120.000 đồng'
  };
  inforbook5: Book =
  {
  id:1,
  name : 'Con Chim Xanh Biếc Bay Về - Tặng Kèm 6 Postcard',
  src: "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/i/biamem.jpg",
  tacgia: 'Nguyễn Nhật Ánh',
  ncc: 'NXB Trẻ',
  nxb: 'NXB Trẻ',
  price: '120.000 đồng'
  };
  constructor(
    private HttpClient: HttpClient,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getThongtinsach().subscribe((data) => {
      this.books = data;
    })
  }
  getThongtinsach(): Observable<any>{
    return this.HttpClient.get(URL);
  }
  addCart(books): void {
    this.cartService.addToCart(books);
    window.alert('Bạn đã thêm thành công vào giỏ hàng!');
  }
}
