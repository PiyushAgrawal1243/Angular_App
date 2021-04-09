import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavComponent} from './Components/nav/nav.component';
import {AboutComponent} from './Components/about/about.component';
import {HighlightDirective} from './Components/directives/highlight.directive';
import {ExponentialStrengthPipe} from './pipes/exponential-strength.pipe';
import {ModuloPipe} from './pipes/modulo.pipe';
import {BetterDirectiveDirective} from './Components/directives/better-directive.directive';
import {DropDownDirective} from './Components/directives/dropDown.directive';
import {NotFoundPageComponent} from './Components/not-found-page/not-found-page.component';
import {ReactiveFormComponent} from './Components/reactive-form/reactive-form.component';
import {AuthGuard} from './Services/authGuard.service';
import {CanDectivate_guardService} from './Services/canDectivate_guard.service';
import {AppHomePageComponent} from './Components/app-home-page/app-home-page.component';
import {LoginService} from './Services/login.service';
import {AuthInterceptorService} from './Services/auth-interceptor.service';
import {SharedModule} from './SharedUI/shared.module';
import {AuthService} from './Services/Auth.service';
import * as fromApp from '../app/Reducer/app.reducer';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        AppHomePageComponent,
        NavComponent,
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
        SharedModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),

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
