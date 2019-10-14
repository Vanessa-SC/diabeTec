import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPesoPage } from './add-peso.page';

describe('AddPesoPage', () => {
  let component: AddPesoPage;
  let fixture: ComponentFixture<AddPesoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPesoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
