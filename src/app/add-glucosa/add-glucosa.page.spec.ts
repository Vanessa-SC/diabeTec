import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGlucosaPage } from './add-glucosa.page';

describe('AddGlucosaPage', () => {
  let component: AddGlucosaPage;
  let fixture: ComponentFixture<AddGlucosaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGlucosaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGlucosaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
