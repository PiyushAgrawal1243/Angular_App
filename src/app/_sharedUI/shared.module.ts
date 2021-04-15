import {NgModule} from '@angular/core';
import {SpinnerComponent} from './spinner/spinner.component';
import {NavComponent} from './nav/nav.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        SpinnerComponent,
        NavComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        SpinnerComponent,
        NavComponent,
    ],
})
export class SharedModule {

}
