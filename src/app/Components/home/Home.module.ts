import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeChildComponent} from './home-child/home-child.component';
import {SubjectComponent} from './subject/subject.component';
import {FormsModule} from '@angular/forms';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        HomeChildComponent,
        SubjectComponent,
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        FormsModule],
    exports: [
        HomeComponent,
        HomeChildComponent,
        SubjectComponent,
    ]
})
export class HomeModule {

}
