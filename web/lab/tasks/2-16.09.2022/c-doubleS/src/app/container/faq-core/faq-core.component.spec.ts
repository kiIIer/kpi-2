import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqCoreComponent } from './faq-core.component';
import { Store, StoreModule } from '@ngrx/store';

describe('FaqCoreComponent', () => {
  let component: FaqCoreComponent;
  let fixture: ComponentFixture<FaqCoreComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ FaqCoreComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqCoreComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
