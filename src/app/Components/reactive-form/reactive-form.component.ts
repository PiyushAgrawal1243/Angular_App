import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

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

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.fetchData();
        this.signUpForm = this.fb.group({
            projectName: [null, [Validators.required, this.invalidProjectName.bind(this)], this.asyncInvalidProject.bind(this)],
            username: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
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
        this.http.post(
            'https://angularproject-b4aba-default-rtdb.firebaseio.com/posts.json',
            this.signUpForm.value).subscribe(responseData => {
            console.log(responseData);
        });

    }

    fetchData(): void {
        this.http.get(' https://app.ismartrecruit.com/jobDescription?x=E7pa25vbGR1cy5jb21fNDVfV19lbg==Q9e&view=grid')
            .pipe(map(responseData =>{
                const postArray = [];
                for (const key in responseData)
                {
                   if (responseData.hasOwnProperty(key)) {
                       // @ts-ignore
                       postArray.push({...responseData[key], id: key});
                   }
                }
                return postArray;
            }))
            .subscribe(post => { console.log(post); });


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
