import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {MainNavComponent} from './pres/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './pres/home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import * as fromAppState from './store';
import * as fromView from './store/reducers/view/view.reducer';
import {reducer} from './store/reducers/view/view.reducer';
import {HomeCoreComponent} from './cont/home-core/home-core.component';
import {NavCoreComponent} from './cont/nav-core/nav-core.component';
import * as fromLink from './store/reducers/link/link.reducer';
import {RouterModule, Routes} from '@angular/router';
import {LoadingComponent} from './pres/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RoutingEffects} from './store/effects/routing/routing.effects';

const routes: Routes = [
  {path: 'home', component: HomeCoreComponent},
  {path: 'loading', component: LoadingComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    MainNavComponent,
    HomeComponent,
    HomeCoreComponent,
    NavCoreComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    StoreModule.forFeature(fromView.viewFeatureKey, fromView.reducer),
    EffectsModule.forFeature([RoutingEffects]),
    StoreModule.forFeature(fromLink.linkFeatureKey, fromLink.reducer),
    RouterModule.forRoot(routes),
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
