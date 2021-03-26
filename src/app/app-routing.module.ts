import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {HomeChildComponent} from './home/home-child/home-child.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'Home', component: HomeComponent , children: [
      { path: '' , component: AboutComponent},
      {path: 'HomeChild/:id/:name' , component: HomeChildComponent}
    ]},
  {path: 'About', component: AboutComponent},
  {path: 'UserDetail/:id/:name', component: UserDetailComponent},
  {
    path: 'notFound',
    component: NotFoundPageComponent,
    data: {message: 'Page not found! please click on these specific button for go to back'}
  },
  {path: '**', redirectTo: '/notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
