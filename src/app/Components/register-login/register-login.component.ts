import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppserviceService} from '../../Services/appservice.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register-login',
    templateUrl: './register-login.component.html',
    styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

    @ViewChild('form') signupForm: NgForm | undefined;

    user = {
        Name: '',
        Email: '',
        Phone_No: '',
        Password: '',
        gender: ''
    };

    constructor(private  appService: AppserviceService, private route: Router) {
    }


    ngOnInit(): void {
    }


    onSubmit(): void {
        // console.log(Form);
        this.user.Name = this.signupForm?.value.userName;
        this.user.Email = this.signupForm?.value.useremail;
        this.user.Password = this.signupForm?.value.userpassword;
        this.user.Phone_No = this.signupForm?.value.phonenumber;
        this.user.gender = this.signupForm?.value.gender;
        console.log(this.user);
        console.log(this.signupForm?.value);
        this.appService.addUserData(this.user);
    }

    signIN(): void {
        this.route.navigate(['/dashboard']);
    }



}
