import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesysPortalAzureComponent } from './onesys-portal-azure.component';

describe('OnesysPortalAzureComponent', () => {
  let component: OnesysPortalAzureComponent;
  let fixture: ComponentFixture<OnesysPortalAzureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnesysPortalAzureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesysPortalAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
