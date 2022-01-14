import { Component } from '@angular/core';

@Component({
  selector:'app-contador',
  template:`


<h1>hola mmundo</h1>
<p>{{titulo}}</p>

<button (click)="acumular(+1)">+1</button>
<span>{{numero}}</span>
<button (click)="acumular(-1)">-1</button>
<br>
<br>
<button (click)="acumular(base)">{{base}}</button>
<span>{{numero}}</span>
<button (click)="acumular(-base)">{{base}}</button>
  `
})

export class ContadorComponent{
  titulo = 'contador titulo';
  numero:number=10;

base:number=5;


acumular(valor:number){
  this.numero +=valor;

}
 /* sumar(){
    this.numero +=1;
  }
  restar(){
    this.numero -=1;
  }*/
}
