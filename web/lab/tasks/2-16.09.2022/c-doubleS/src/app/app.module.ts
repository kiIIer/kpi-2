import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {NavigationEffects} from './store/effects/navigation.effects';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToolbarCoreComponent} from './container/toolbar-core/toolbar-core.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import * as fromUI from './store/reducers/ui.reducer';
import {ToolbarComponent} from './presentation/toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {effects} from './store/effects';
import {FooterCoreComponent} from './container/footer-core/footer-core.component';
import {ContentCoreComponent} from './container/content-core/content-core.component';
import {FooterComponent} from './presentation/footer/footer.component';
import {ContentComponent} from './presentation/content/content.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NavigationsCoreComponent} from './container/navigations-core/navigations-core.component';
import {NavigationsComponent} from './presentation/navigations/navigations.component';
import {MatListModule} from '@angular/material/list';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {HomeComponent} from './presentation/home/home.component';
import {HomeCoreComponent} from './container/home-core/home-core.component';
import {MatCardModule} from '@angular/material/card';
import {FaqCoreComponent} from './container/faq-core/faq-core.component';
import {FaqComponent} from './presentation/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarCoreComponent,
    ToolbarComponent,
    FooterCoreComponent,
    ContentCoreComponent,
    FooterComponent,
    ContentComponent,
    NavigationsCoreComponent,
    NavigationsComponent,
    HomeComponent,
    HomeCoreComponent,
    FaqCoreComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forFeature([NavigationEffects]),
    EffectsModule.forRoot(effects),
    MatToolbarModule,
    AppRoutingModule,
    StoreModule.forFeature(fromUI.uIFeatureKey, fromUI.uiReducer),
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    StoreRouterConnectingModule.forRoot(),
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule
{
}
