import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:  string = 'ironman';
  public age:  number = 45;
  public metodo: string = 'volar';
  public cap: string = 'Cpitalizado';

  get capitalizedName():string{
    return this.name.toUpperCase();

  }

  public getHeroDescription():string{
  return `${this.name} - ${this.age}`;

  }

  public changeName():void{
    this.name = 'Black Widow';

  }

  public changeAge():void{
   this.age = 35;

  }

  public Reset():void{
    this.name= 'ironman';
    this.age = 45;

  }

}
