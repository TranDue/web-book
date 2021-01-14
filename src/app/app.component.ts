import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
      public location: Location,
      private route: ActivatedRoute,
      private router: Router) { }
    ngOnInit() {
      console.log('start listen');

      this.router.events.subscribe(console.log)
    }
    removeFooter() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'login' || titlee === 'home-config' || titlee === 'details') {
            return false;
        }
        else {
            return true;
        }
    }
}
