import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {SharedModule} from '../../_sharedUI/shared.module';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [

        CommonModule,
        DashboardRoutingModule,
        SharedModule,

    ],
    exports: [DashboardComponent]
})
export class DashboardModule{

}
