import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  standalone: false,
  
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

public name : string = "ironman";
public age : number = 45;


get capitalizedName() : string {
  return this.name.toUpperCase();
}


getHeroesDescripcion() : string {
  return `${this.name} - ${this.age}`;
} 

changeName() : void {
  this.name = 'spiderman';
}

changeAge() : void {
  this.age = 50;
}

resetForm() : void{
  this.name = 'spiderman';
  this.age = 45;
}

}
