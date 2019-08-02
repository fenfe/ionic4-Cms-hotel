import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomInfoPage } from './room-info.page';

describe('RoomInfoPage', () => {
  let component: RoomInfoPage;
  let fixture: ComponentFixture<RoomInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
