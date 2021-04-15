import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../_services/authGuard.service';
import {HomeComponent} from './home.component';
import {SubjectComponent} from './subject/subject.component';
import {HomeChildComponent} from './home-child/home-child.component';
import {CanDectivate_guardService} from '../../_services/canDectivate_guard.service';

const routes: Routes = [
    { path: '', canActivate: [AuthGuard], component: HomeComponent,
        children: [
            {path: 'subject', component: SubjectComponent},
            {path: 'HomeChild/:name', component: HomeChildComponent, canDeactivate: [CanDectivate_guardService]}
    ]
    }];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class HomeRoutingModule {

}
