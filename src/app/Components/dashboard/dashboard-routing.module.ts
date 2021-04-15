import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormComponent} from '../reactive-form/reactive-form.component';
import {CanDectivate_guardService} from '../../Services/canDectivate_guard.service';
import {DashboardComponent} from './dashboard.component';
import {AuthGuard} from '../../Services/authGuard.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
        ])
    ],
    exports: [RouterModule]
})
export  class DashboardRoutingModule{

}
