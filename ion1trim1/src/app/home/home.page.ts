import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login = '';
  senha = '';
  mensagem = '';

  constructor() {}

  validar(): void{
    if(this.login === 'admin' && this.senha === '1234'){
      this.mensagem = 'Usuário logado!';
    } else{
      this.mensagem = 'Falha de autenticação';
    }
  }

}
