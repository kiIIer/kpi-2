import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {NavigationEffects} from './effects/navigation.effects';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToolbarCoreComponent} from './toolbar-core/toolbar-core.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import * as fromUI from './reducers/ui.reducer';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {effects} from './effects';
import { FooterCoreComponent } from './footer-core/footer-core.component';
import { ContentCoreComponent } from './content-core/content-core.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarCoreComponent,
    ToolbarComponent,
    FooterCoreComponent,
    ContentCoreComponent,
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
    StoreModule.forFeature(fromUI.uIFeatureKey, fromUI.reducer),
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule
{
}
