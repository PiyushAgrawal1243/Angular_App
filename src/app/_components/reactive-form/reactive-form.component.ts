import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CanComponentDectivate} from '../../_services/canDectivate_guard.service';
import {Router} from '@angular/router';
import {LoginService} from '../../_services/login.service';
import {AuthService} from '../../_services/Auth.service';
import {Store} from '@ngrx/store';
import * as fromAuth from '../../_store/Reducer/app.reducer';
import * as AuthAction from '../../_store/Actions/Auth.action'

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit, CanComponentDectivate {

    // @ts-ignore
    signUpForm: FormGroup;
    // @ts-ignore
    loginForm: FormGroup;
    // @ts-ignore
    showValidationMessage: boolean;
    userFilledForm = true;
    checkFrom: boolean | undefined;
    spinner = false;

    constructor(private form: FormBuilder, private http: HttpClient, private authService: AuthService,
                private router: Router,
                private loginService: LoginService, private registerService: AuthService ,
                ) {
        localStorage.setItem('router', 'RegitserLogin');

    }

    ngOnInit(): void {
        this.signUpForm = this.form.group({
            username: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
        });

        this.loginForm = this.form.group({
            loginEmail: ['', [Validators.required, Validators.email]],
            loginPassword: ['', Validators.required]
        });


    }

    // tslint:disable-next-line:typedef
    get signUpControls() {
        return this.signUpForm.controls;
    }

    checkFormData(): boolean {
        if (this.signUpForm.invalid) {
            this.loginService.modalData('Form', 'Please fill this form and then submit this Form');
            // @ts-ignore
            document.getElementById('modalButton').click();
            this.checkFrom = false;
            return false;
        } else {
            this.checkFrom = true;
            return true;
        }
    }

    // @ts-ignore
    canDeactive(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.signUpForm.controls.username.value != null ||
            this.signUpForm.controls.email.value != null ||
            this.signUpForm.controls.password.value != null) {
            console.log(this.signUpForm.value);
            this.loginService.modalData('Angular.io', 'You are on our Registratin page if you not register you will not get our survice');
            // @ts-ignore
            document.getElementById('modalButton').click();

        } else {
            return true;
        }
    }

    onReset(): void {
        this.signUpForm.reset();
    }

    onSubmit(): void {
        if (this.checkFormData()) {
            console.log(this.signUpForm);
            this.spinner = true;
            const email = this.signUpForm.controls.email.value;
            const password = this.signUpForm.controls.password.value;

            // this.registerService.signUp(email, password)
            //     .subscribe(resData => {
            //             this.router.navigate(['dashboard']);
            //             this.signUpForm.reset();
            //         },
            //         errorMessage => {
            //             this.spinner = false;
            //             this.loginService.modalData('Error', errorMessage);
            //             // @ts-ignore
            //             document.getElementById('modalButton').click();
            //
            //         });


        }
    }

    onLogin(): void {
        if (!this.loginForm.invalid) {
            this.spinner = true;
            const email = this.loginForm.controls.loginEmail.value;
            const password = this.loginForm.controls.loginPassword.value;

            this.registerService.login(email, password).subscribe(resData => {
                console.log(resData);
                this.spinner = true;
                localStorage.setItem('router', 'dashboard');
                this.router.navigate([localStorage.getItem('router')]);
            }, errorMessage => {
                this.spinner = false;
                this.loginService.modalData('Error', errorMessage);
                // @ts-ignore
                document.getElementById('modalButton').click();
            });
        } else {
            console.log(this.loginForm.value),
                this.loginService.modalData('Login', 'Please enter valid email address and password');
            // @ts-ignore
            document.getElementById('modalButton').click();
        }
    }




}
