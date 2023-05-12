import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminforumresponseComponent } from './adminforumresponse.component';

describe('AdminforumresponseComponent', () => {
  let component: AdminforumresponseComponent;
  let fixture: ComponentFixture<AdminforumresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminforumresponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminforumresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
