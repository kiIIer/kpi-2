import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCoreComponent } from './content-core.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ContentCoreComponent', () => {
  let component: ContentCoreComponent;
  let fixture: ComponentFixture<ContentCoreComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ContentCoreComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCoreComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
