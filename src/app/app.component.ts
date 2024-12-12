import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bases';
  public counter : number = 10;

  increaseBy(value : number) : void{

    this.counter += value ;
  }

  decreaseBy(value : number) : void{
    this.counter -=value;
  }

  reset() : void {
    this.counter = 10;
  }

}
