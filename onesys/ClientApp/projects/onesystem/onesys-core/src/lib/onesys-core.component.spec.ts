import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesysCoreComponent } from './onesys-core.component';

describe('OnesysCoreComponent', () => {
  let component: OnesysCoreComponent;
  let fixture: ComponentFixture<OnesysCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnesysCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesysCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
