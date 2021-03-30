import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

    // @ts-ignore
    signUpForm: FormGroup;
    // @ts-ignore
    showValidationMessage: boolean;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.signUpForm = this.fb.group({
            projectName: [null, [Validators.required, this.invalidProjectName.bind(this)], this.asyncInvalidProject.bind(this)],
            username: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            password: [null],
            gender: ['Male'],
            selectValue: ['Stable'],
            hobbies: new FormArray([])
        });
    }

    // tslint:disable-next-line:typedef
    get signUpControls() {
        return this.signUpForm.controls;
    }

    onSubmit(): void {
        console.log(this.signUpForm);
    }

    // tslint:disable-next-line:typedef
    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        // @ts-ignore
        (this.signUpForm.get('hobbies') as FormArray).push(control);

    }

    // tslint:disable-next-line:typedef
    getControls() {
        return (<FormArray> this.signUpForm.get('hobbies')).controls;
    }

    invalidProjectName(control: FormControl): { [p: string]: boolean } | null {
        if (control.value === 'Test') {
            return {invalidProjectName: true};
        }
        return null;
    }

    asyncInvalidProject(control: FormControl): Promise<any> | Observable<any> {
        const promeis = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (control.value === 'Test') {
                        resolve({projectName: true});
                    } else {
                        resolve(null);
                    }
                }, 1500);
            }
        );
        return promeis;
    }


}
