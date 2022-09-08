import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {MapComponent} from './map/map.component';
import {FormComponent} from './form/form.component';
import {VideoComponent} from './video/video.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'map', component: MapComponent},
  {path: 'form', component: FormComponent},
  {path: 'vid', component: VideoComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule
{
}
