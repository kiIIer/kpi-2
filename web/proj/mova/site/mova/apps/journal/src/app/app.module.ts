import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {MainNavComponent} from './presentation/main-nav/main-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {reducers, metaReducers} from './store/app/reducers';
import {RouterModule, Routes} from '@angular/router';
import {NavContainerComponent} from './container/nav-container/nav-container.component';
import {StoriesContainerComponent} from './container/stories-container/stories-container.component';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {RouterEffects} from './store/router/effects/router.effects';
import {effects} from './store/app/effects';
import {StoriesComponent} from './presentation/stories/stories.component';
import {MatCardModule} from '@angular/material/card';
import {FaqContainerComponent} from './container/faq-container/faq-container.component';
import {FaqComponent} from './presentation/faq/faq.component';
import {ContactsComponent} from './presentation/contacts/contacts.component';
import {ContactsContainerComponent} from './container/contacts-container/contacts-container.component';
import {MatTreeModule} from '@angular/material/tree';
import {StudentsComponent} from './presentation/students/students.component';
import {StudentsContainerComponent} from './container/students-container/students-container.component';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  {path: 'stories', component: StoriesContainerComponent},
  {path: 'faq', component: FaqContainerComponent},
  {path: 'contacts', component: ContactsContainerComponent},
  {path: 'students', component: StudentsContainerComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    MainNavComponent,
    NavContainerComponent,
    StoriesContainerComponent,
    StoriesComponent,
    FaqContainerComponent,
    FaqComponent,
    ContactsComponent,
    ContactsContainerComponent,
    StudentsComponent,
    StudentsContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forRoot(reducers, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forFeature(effects),
    MatCardModule,
    MatTreeModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
