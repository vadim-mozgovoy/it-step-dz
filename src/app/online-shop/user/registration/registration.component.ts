import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [AuthService]
})
export class RegistrationComponent implements OnInit {
  myForm: FormGroup;

  hide = true;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
        userFirstName: new FormControl('', [Validators.required,]),
        userLastName: new FormControl('', [Validators.required,]),
        userTelefone: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/),
          Validators.minLength(7), Validators.maxLength(7)]),
        userPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
        userEmail: new FormControl('', [Validators.required,
          Validators.pattern(/[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/)]),
      })
  }

  getErrorFirstName() {
    if (this.myForm.controls['userFirstName'].hasError('required')) {
      return 'You must enter your first name';
    }
    return this.myForm.controls['userFirstName'].hasError('first name') ? 'Not a valid name' : '';
  }

  getErrorLastName() {
    if (this.myForm.controls["userLastName"].hasError('required')) {
      return 'You must enter your last name';
    }
    return this.myForm.controls["userLastName"].hasError('last name') ? 'Not a valid name' : '';
  }

  getErrorPassword() {
    if (this.myForm.controls["userPassword"].hasError('required')) {
      return 'You must enter your password minLength 8 symbol';
    }
    return this.myForm.controls["userPassword"].hasError('password') ? 'Not a valid password' : '';
  }

  getErrorTelefone() {
    if (this.myForm.controls["userTelefone"].hasError('required')) {
      return 'You must enter your telefone +380...';
    }
    return this.myForm.controls["userTelefone"].hasError('telefone') ? 'Not a valid telefone' : '';
  }

  getErrorEmail() {
    if (this.myForm.controls['userEmail'].hasError('required')) {
      return 'You must enter your email';
    }
    return this.myForm.controls['userEmail'].hasError('email') ? 'Not a valid email' : '';
  }

  registerNewUser() {
    const user = {
      firstName: this.myForm.controls['userFirstName'].value,
      lastName: this.myForm.controls['userLastName'].value,
      email: this.myForm.controls['userEmail'].value,
      password: this.myForm.controls['userPassword'].value,
      telefone: this.myForm.controls['userTelefone'].value
    }
    this.authService.registerNewUser(user).subscribe(user=>{this.myForm.reset()},err=>console.error(err))
  }

}
