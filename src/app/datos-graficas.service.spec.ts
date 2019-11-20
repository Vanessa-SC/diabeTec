import { TestBed } from '@angular/core/testing';

import { DatosGraficasService } from './datos-graficas.service';

describe('DatosGraficasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosGraficasService = TestBed.get(DatosGraficasService);
    expect(service).toBeTruthy();
  });
});
