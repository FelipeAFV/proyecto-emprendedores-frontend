import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreManagerProfileComponent } from './store-manager-profile.component';

describe('StoreManagerProfileComponent', () => {
  let component: StoreManagerProfileComponent;
  let fixture: ComponentFixture<StoreManagerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreManagerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreManagerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
