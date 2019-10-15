import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecordatorioPage } from './add-recordatorio.page';

describe('AddRecordatorioPage', () => {
  let component: AddRecordatorioPage;
  let fixture: ComponentFixture<AddRecordatorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecordatorioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecordatorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
