import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersInfoPage } from './view-users-info.page';

describe('ViewUsersInfoPage', () => {
  let component: ViewUsersInfoPage;
  let fixture: ComponentFixture<ViewUsersInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsersInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsersInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
