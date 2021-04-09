import {Component, OnInit} from '@angular/core';
import {User} from '../../../_interfaces/user';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
    user: User | undefined;

    constructor( ) {
    }

    ngOnInit(): void {

    }

}
