import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdBannerComponent} from './ad-banner/ad-banner.component';
import {HighlightDirective} from './highlight.directive';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
import {ModuloPipe} from './modulo.pipe';
import {ScrollDirective} from './Scroll.directive';
import {BetterDirectiveDirective} from './better-directive.directive';
import {DropDownDirective} from './directives/dropDown.directive';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {HomeChildComponent} from './home/home-child/home-child.component';
import {SubjectComponent} from './home/subject/subject.component';
import {RegisterLoginComponent} from './register-login/register-login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GameControlComponent } from './dashboard/game-control/game-control.component';
import { OddComponent } from './dashboard/odd/odd.component';
import { EvenComponent } from './dashboard/even/even.component';



@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        AboutComponent,
        HomeComponent,
        DashboardComponent,
        AdBannerComponent,
        HighlightDirective,
        ExponentialStrengthPipe,
        ModuloPipe,
        ScrollDirective,
        BetterDirectiveDirective,
        DropDownDirective,
        UserDetailComponent,
        NotFoundPageComponent,
        HomeChildComponent,
        SubjectComponent,
        RegisterLoginComponent,
        ReactiveFormComponent,
        GameControlComponent,
        OddComponent,
        EvenComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {

}
