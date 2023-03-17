// import { inject } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
  }));
  
  it('deve garantir que 1 - 3 = -3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(soma).toEqual(-3 );
  }));
  
  it('deve garantir que 2 * 4 = *',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(2, 4, CalculadoraService.MULTIPLICACAO);
      expect(soma).toEqual(8);
  }));

  it('deve garantir que 20 / 4 = 5',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(20, 4, CalculadoraService.DIVISAO);
    expect(soma).toEqual(5);
  })); 

  it('deve garantir que 1 % 4 = 0',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1, 4, '%');
    expect(soma).toEqual(0);
  })); 
});
