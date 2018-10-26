import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSysCoreComponent } from './one-sys-core.component';

describe('OneSysCoreComponent', () => {
  let component: OneSysCoreComponent;
  let fixture: ComponentFixture<OneSysCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OneSysCoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSysCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
