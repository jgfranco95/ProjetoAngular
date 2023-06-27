import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports:[CommonModule, IonicModule],

})
export class HomePage {
  
  valor = '';

  // ele acumula o valor do botao para realizar o calculo
  acumularValor(valor_botao : string){
    this.valor += valor_botao;
  }

  // ele limpa os numeros na tela
  limparValor(){
    this.valor = '';
  }

  // realiza os calculos basicos, aonde o eval foi usado para  retornar um resultado string
  calcularValor(){
    const resultado = eval(this.valor)
    this.valor = resultado.toString()
  }
// o simbolo +/- ele inverte as operaçoes
  inverterValor(){
    const valorInvertido = String(eval(this.valor) * (-1))
    this.valor = valorInvertido
  }

  // realiza o calculo de porcentagem
  calcularPorcentagem(){
    const valorPorcentagem = eval(this.valor) / 100
    this.valor = valorPorcentagem.toString()
    this.valor += '*'
  }

}
