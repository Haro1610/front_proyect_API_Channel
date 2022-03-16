import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front_proyect_API_Channel';
  //persona = nomre{'pepe'}
  flag:boolean = true;

  movies: string[] = [
    'Los tres Huastecos',
    'Alien',
    'Batman',
    'Una pelicula de huevos',
    'Pineapple express'

  ];
  
  name = 'Aaron'
  constructor(){
    setTimeout(() =>{
      this.name = 'Jose';
      this.movies.push('Los 3 García');
    },2000);
  }

  doOnclick(){
    console.log('Me pushearon!');
    this.flag = !this.flag
  }
}
