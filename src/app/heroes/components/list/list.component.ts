import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

public heroNames:string[] = ['ironman','black widow','thor','hulk','captain america'];
public deletedHero?:string;

public deleteHeroes():void{
  this.deletedHero = this.heroNames.pop();
}

}
