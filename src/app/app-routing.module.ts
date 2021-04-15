import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './_components/about/about.component';
import {NotFoundPageComponent} from './_components/not-found-page/not-found-page.component';
import {AuthGuard} from './_services/authGuard.service';
import {CanDectivate_guardService} from './_services/canDectivate_guard.service';
import {ReactiveFormComponent} from './_components/reactive-form/reactive-form.component';
import {AppHomePageComponent} from './_components/app-home-page/app-home-page.component';

const routes: Routes = [
    {path: '' , redirectTo: 'Angular.io' , pathMatch: 'full' },

    {path: 'Angular.io', component: AppHomePageComponent},

    {path: 'RegitserLogin', component: ReactiveFormComponent, canDeactivate: [CanDectivate_guardService] },

    { path: 'dashboard', loadChildren: () => import('./_components/dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path: 'Home', loadChildren: () => import('./_components/home/Home.module').then(m => m.HomeModule) },
    {path: 'About', component: AboutComponent, canActivate: [AuthGuard]},
    {path: 'notFound', component: NotFoundPageComponent,
        data: {message: 'Page not found! please click on these specific button for go to back'}
    },
    {path: '**', redirectTo: '/notFound' , }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
