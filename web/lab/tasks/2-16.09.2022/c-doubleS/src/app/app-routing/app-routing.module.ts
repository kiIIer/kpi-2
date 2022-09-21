import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {HomeCoreComponent} from '../container/home-core/home-core.component';
import {FaqCoreComponent} from '../container/faq-core/faq-core.component';

const routes: Routes = [
  {path: 'home', component: HomeCoreComponent},
  {path: 'faq', component: FaqCoreComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot(),

  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule
{
}
