import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomsPage } from './add-rooms.page';

describe('AddRoomsPage', () => {
  let component: AddRoomsPage;
  let fixture: ComponentFixture<AddRoomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoomsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
