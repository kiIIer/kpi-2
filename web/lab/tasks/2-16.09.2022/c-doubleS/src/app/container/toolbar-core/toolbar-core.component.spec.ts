import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarCoreComponent } from './toolbar-core.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ToolbarCoreComponent', () => {
  let component: ToolbarCoreComponent;
  let fixture: ComponentFixture<ToolbarCoreComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ToolbarCoreComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarCoreComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
