import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  // Define as operacoes
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }

  // metodo calcular executa a acao da calculadora
  calcular(n1: number, n2: number, op: string): number {
    let result: number;

    switch(op) {
      case CalculadoraService.SOMA:
        result = n1 + n2;
        break;
      case CalculadoraService.SUBTRACAO:
        result = n1 - n2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        result = n1 * n2;
        break;
      case CalculadoraService.DIVISAO:
        result = n1 / n2;
        break;
      default:
        result = 0;
    }
    return result;
  }
}
