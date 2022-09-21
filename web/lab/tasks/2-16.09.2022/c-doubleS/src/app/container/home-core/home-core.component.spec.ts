import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoreComponent } from './home-core.component';
import { Store, StoreModule } from '@ngrx/store';

describe('HomeCoreComponent', () => {
  let component: HomeCoreComponent;
  let fixture: ComponentFixture<HomeCoreComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ HomeCoreComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoreComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
