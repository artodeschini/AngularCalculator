import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services';
import { By } from '@angular/platform-browser';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      // adicionado
      providers: [
        CalculadoraService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // adicionado test simulando acao do usuario

  it('deve garantir que 3 + 2 = 5 ', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnSum = fixture.debugElement.query(By.css('#btnSoma'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalc = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSum.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalc.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    expect(display.nativeElement.value).toEqual('5');
  });
});
