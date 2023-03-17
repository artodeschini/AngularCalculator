import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent { // implements OnInit {

  private n1: string;
  private n2: string;
  private result: number;
  private op: string;

  constructor(private service: CalculadoraService) {
    
    this.n1 = '0';
    this.n2 = '';
    this.result = 0;
    this.op = '';
  }

  // ngOnInit() {
  //   this.clear();
  // }

  clear(): void {
    this.n1 = '0';
    this.n2 = '';
    this.result = 0;
    this.op = '';
  }

  adicionarNumero(num: string): void {
    if (this.op === '') {
      this.n1 = this.concatenatNumber(this.n1, num);
    } else {
      this.n2 = this.concatenatNumber(this.n2, num);
    }
  }

  concatenatNumber(atual: string, stringConcat: string): string {
    if (atual === '0' || atual === '0') {
      atual = '';
    }

    if (stringConcat === '.' && atual === '') {
      return '0.';
    }

    if (stringConcat === '.' && atual.indexOf('.') > -1) {
      return atual;
    }

    return atual + stringConcat;
  }

  definirOperacao(operacao: string): void {
    if (this.op === '') {
      this.op = operacao;
      return;
    }

    this.calcular();
  }

  calcular(): void {
    if (this.n2 !== '') {
      this.result = this.service.calcular(
        parseFloat(this.n1),
        parseFloat(this.n2),
        this.op);
      
        // this.op = operacao;
        this.n1 = this.result.toString();
        this.n2 = '';
        this.result = 0;
    }
  }

  get display(): string {
    if (this.result !== 0) {
      return this.result.toString();
    }

    if (this.n2 !== '') {
      return this.n2;
    }

    return this.n1;
  }
}
