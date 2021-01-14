import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserState } from 'src/app/_reducers/user.reducer';
import * as userLogins from 'src/app/_action/userAction';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  homeConfig = null;
  validateForm!: FormGroup;

  constructor(){
  }
  ngOnInit(): void {

  }
}
