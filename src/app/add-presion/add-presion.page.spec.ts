import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPresionPage } from './add-presion.page';

describe('AddPresionPage', () => {
  let component: AddPresionPage;
  let fixture: ComponentFixture<AddPresionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPresionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPresionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
