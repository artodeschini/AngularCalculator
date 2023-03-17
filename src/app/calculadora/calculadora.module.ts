import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculadoraService } from './services';



@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  // adicionado manualmente
  exports: [
    CalculadoraComponent
  ],
  // adicionado manualmente
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
