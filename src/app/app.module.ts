import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavComponent} from './_sharedUI/nav/nav.component';
import {AboutComponent} from './_components/about/about.component';
import {HighlightDirective} from './_directives/highlight.directive';
import {ExponentialStrengthPipe} from './_pipes/exponential-strength.pipe';
import {ModuloPipe} from './_pipes/modulo.pipe';
import {BetterDirectiveDirective} from './_directives/better-directive.directive';
import {DropDownDirective} from './_directives/dropDown.directive';
import {NotFoundPageComponent} from './_components/not-found-page/not-found-page.component';
import {ReactiveFormComponent} from './_components/reactive-form/reactive-form.component';
import {AuthGuard} from './_services/authGuard.service';
import {CanDectivate_guardService} from './_services/canDectivate_guard.service';
import {AppHomePageComponent} from './_components/app-home-page/app-home-page.component';
import {LoginService} from './_services/login.service';
import {AuthInterceptorService} from './_services/auth-interceptor.service';
import {SharedModule} from './_sharedUI/shared.module';
import {AuthService} from './_services/Auth.service';
import * as fromApp from './_store/Reducer/app.reducer';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffect} from './_store/Effects/auth.effects';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
    declarations: [
        AppComponent,
        AppHomePageComponent,
        AboutComponent,
        HighlightDirective,
        ExponentialStrengthPipe,
        ModuloPipe,
        BetterDirectiveDirective,
        DropDownDirective,
        NotFoundPageComponent,
        ReactiveFormComponent,


    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot(fromApp.appReducer),
       // EffectsModule.forRoot([AuthEffect]),
        SharedModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        ScullyLibModule,

    ],
    providers: [AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        AuthGuard,
        CanDectivate_guardService,
        LoginService ],
    bootstrap: [AppComponent]
})

export class AppModule {

}
