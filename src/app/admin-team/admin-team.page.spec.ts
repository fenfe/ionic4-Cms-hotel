import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeamPage } from './admin-team.page';

describe('AdminTeamPage', () => {
  let component: AdminTeamPage;
  let fixture: ComponentFixture<AdminTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
