import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../../../_interfaces/user';
import {AppserviceService} from '../../../_services/appservice.service';
import {Observable} from 'rxjs';
import {CanComponentDectivate} from '../../../_services/canDectivate_guard.service';

@Component({
    selector: 'app-home-child',
    templateUrl: './home-child.component.html',
    styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit, CanComponentDectivate {
    user: User | undefined;
    allowEdit = false;
    // @ts-ignore
    userName: string;
    // @ts-ignore
    userEmail: string;
    changesSaved: boolean | undefined;

    constructor(private route: ActivatedRoute,
                private  appService: AppserviceService,
                private  router: Router,
                private location: Location
    ) {
        const name = this.route.snapshot.params.name;
        this.appService.getUser(name).subscribe(user => this.user = user);

        // params subscribing that are change in url
        this.route.params.subscribe((params: Params) => {
            this.appService.getUser(params.name).subscribe(user => {
                this.user = user;
                // @ts-ignore
                this.userName = this.user.Name;
                // @ts-ignore
                this.userEmail = this.user.Email;
            });
        });
        this.route.queryParams.subscribe((params: Params) => {
            this.allowEdit = params.allowEdit === 'Piyush' ? true : false;
        });


    }


    ngOnInit(): void {

    }

    onUpdateUser(): void {
        // @ts-ignore
        if (this.userEmail !== this.user.Email) {
            // @ts-ignore
            const UserData = this.appService.updateUserEmail(this.user.Name);
            if (this.userEmail != null && this.userEmail.trim() !== '') {
                // @ts-ignore
                UserData.Email = this.userEmail;
            } else {
                alert('Email field should not be empty');
            }
        }
        if (this.userName !== this.user?.Name) {
            // @ts-ignore
            const UserData = this.appService.updateUserName(this.user.Email);
            if (this.userEmail != null && this.userName.trim() !== '') {
                // @ts-ignore
                UserData.Name = this.userName;
            } else {
                alert('Name field should not be empty');
            }
        }
        if (this.userName.trim() !== '' && this.userEmail.trim() !== '') {
            this.changesSaved = true;
        }
        this.router.navigate(['/Home'], {relativeTo: this.route});

    }

    // @ts-ignore
    canDeactive(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.allowEdit) {
            return true;
        }
        // @ts-ignore
        if ((this.userName !== this.user.Name || this.userEmail !== this.user.Email) && !this.changesSaved) {
            return confirm('Do you want to descard Changes ?');
        } else {
            this.changesSaved = false;
            return true;
        }
    }

    goBack(): void {
        // @ts-ignore
        this.location.back();
    }


}
