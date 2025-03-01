import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintestComponent } from './admintest.component';

describe('AdmintestComponent', () => {
  let component: AdmintestComponent;
  let fixture: ComponentFixture<AdmintestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmintestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
