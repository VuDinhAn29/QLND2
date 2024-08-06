import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from '../service/user.service'
import { RegisterDTO } from '../dtos/register.dto';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild(`registerForm`) registerForm!:NgForm;
  phone: string;
  password: string;
  retypePassword: string;
  fullName: string;
  dateOfBirth: Date;
  address: string;
  isAccepted: boolean;


  constructor( private router: Router, private UserService: UserService){
    this.phone = '';
    this.password = '';
    this.retypePassword = '';
    this.fullName = 'nguyen  A';
    this.dateOfBirth = new Date();
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear() - 18);
    this.address = '';
    this.isAccepted = false;
  }
  onPhoneChange(){
    console.log("sss");
    
  }
  register(){
    const message = `phone: ${this.phone}` + `password: ${this.password}`+ `retypePassword: ${this.retypePassword}`+ `fullName: ${this.fullName}`+ `address: ${this.address}`+ `isAccepted: ${this.isAccepted}`+ `dateOfBirth: ${this.dateOfBirth}`;
    alert(message);

    
    const registerDTO:RegisterDTO = {
      "fullname": this.fullName,
      "phone_number": this.phone,
      "address": this.address,
      "password": this.password,
      "retype_password": this.retypePassword,
      "date_of_birth": this.dateOfBirth,
      "facebook_account_id": 0,
      "google_account_id": 0,
      "role_id": 1
    }
    this.UserService.register(registerDTO).subscribe( {
      next: (response: any) => {
       
          this.router.navigate(['/login'])
     
      },
      complete: () => {
        // debugger
      },
      error: (error: any) => {
        console.log("Đăng ký không thành công",error);
        
      }
    })
    // this.Http.post(apiUrl,registerData,{headers})
    // .subscribe(
      
    // );
  }

  checkPasswordsMatch() {
    if (this.password !== this.retypePassword) {
      this.registerForm.form.controls['retypePassword']
        .setErrors({'passwordMismatch': true})
    } else {
      this.registerForm.form.controls['retypePassword'].setErrors(null)
    }
  }
}
