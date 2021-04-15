import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AuthGuard} from '../../_services/authGuard.service';


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
