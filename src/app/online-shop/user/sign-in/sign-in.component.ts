import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  hide = true;
  userName = new FormControl('', [Validators.required,]);
  password = new FormControl('', [Validators.required]);

  constructor() {}

  getErrorMessage() {
    if (this.userName.hasError('required')) {
      return 'You must enter your name';
    }

    return this.userName.hasError('name') ? 'Not a valid name' : '';
  }
  getErrorPassword(){
    if (this.password.hasError('required')) {
      return 'You must enter your password';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';

  }

}
