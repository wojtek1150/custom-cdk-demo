import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCdkComponent } from './my-cdk.component';

describe('MyCdkComponent', () => {
  let component: MyCdkComponent;
  let fixture: ComponentFixture<MyCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
