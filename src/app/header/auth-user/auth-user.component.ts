import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {
  [x: string]: any;

  constructor(public service: UserService, private toasrt: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }
  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toasrt.success('Tai Khoan moi da duoc tao', 'Registration successful');
          this.router.navigate(['/loggin'])
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DupticateUserName':
                this.toasrt.error('Tai Khoan da ton tai', 'Registration failed');
                break;

              default:
                this.toasrt.error(element.description, 'Registration failed');
                break;
            }
          })
        }
      },
      err => {
        console.log(err);
      }
    )
  }
}
