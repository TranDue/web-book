import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchshow = false;
  constructor() { window.addEventListener("click", () => {
    this.searchshow == true;
  }); }

  ngOnInit(): void {
  }
  showSearchBox(): void {
    console.log(this.searchshow);
  this.searchshow = !this.searchshow;

}
onClick(event: Event): void {
  event.stopPropagation();
  this.searchshow = !this.searchshow;
}
}
