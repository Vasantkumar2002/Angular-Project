import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminforumpageComponent } from './adminforumpage.component';

describe('AdminforumpageComponent', () => {
  let component: AdminforumpageComponent;
  let fixture: ComponentFixture<AdminforumpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminforumpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminforumpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
