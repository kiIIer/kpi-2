import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationsCoreComponent } from './navigations-core.component';
import { Store, StoreModule } from '@ngrx/store';

describe('NavigationsCoreComponent', () => {
  let component: NavigationsCoreComponent;
  let fixture: ComponentFixture<NavigationsCoreComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ NavigationsCoreComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationsCoreComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
