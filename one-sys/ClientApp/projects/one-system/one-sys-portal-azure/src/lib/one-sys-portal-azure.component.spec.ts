import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSysPortalAzureComponent } from './one-sys-portal-azure.component';

describe('OneSysPortalAzureComponent', () => {
  let component: OneSysPortalAzureComponent;
  let fixture: ComponentFixture<OneSysPortalAzureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OneSysPortalAzureComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSysPortalAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
