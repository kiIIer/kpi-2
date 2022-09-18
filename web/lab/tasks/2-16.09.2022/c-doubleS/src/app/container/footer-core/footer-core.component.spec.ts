import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCoreComponent } from './footer-core.component';
import { Store, StoreModule } from '@ngrx/store';

describe('FooterCoreComponent', () => {
  let component: FooterCoreComponent;
  let fixture: ComponentFixture<FooterCoreComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ FooterCoreComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCoreComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
