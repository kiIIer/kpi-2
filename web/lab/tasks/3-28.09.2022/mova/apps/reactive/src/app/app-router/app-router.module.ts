import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {HomeComponent} from '../pres/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot(),
  ],
})
export class AppRouterModule
{
}
