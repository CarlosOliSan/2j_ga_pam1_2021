import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1 = null;
  num2 = null;
  resposta = '';


  constructor() {}

  somar(): void{
    this.resposta = this.num1 + this.num2;
  }

  subtrair(): void{
    let r = this.num1 - this.num2;
    this.resposta = r.toString();
  }

  multiplicar(): void{
    let r = this.num1 * this.num2;
    this.resposta = r.toString();
  }

  dividir(): void{
    if(this.num2 == 0){
      this.resposta = "Erro! o segundo número não pode ser igual a 0"
    } else{
      let r = this.num1 / this.num2;
      this.resposta = r.toString();
      ;
    }
  }

}
