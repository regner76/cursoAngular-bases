import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>hola Counter</h1>
    <h3>Counter: {{counter}}</h3>


    <button (click)="increaseby(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseby(-1)">-1</button>

  `

})

export class CounterComponent  {

  constructor(){  }
  public title: string  = 'hola Mundo';
  public counter: number = 10;

  public increaseby(value:number):void {
    this.counter +=value;
  }

  public reset():void{
    this.counter = 10;
  }
}
