import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  alunos=[
    {nome: 'marcio', telefone:"123", ausente: true}, 
    {nome: 'luis', telefone:"143", ausente: false},
    {nome: 'luisa', telefone:"153", ausente: false},
    {nome: 'lucas', telefone:"163", ausente: true}
  ];

  
 


}
