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

  searchValue: string = '';

  searchTimeOut: any;
  

  movies: string[] = [
    'Los tres Huastecos',
    'Alien',
    'Batman',
    'Una pelicula de huevos',
    'Pineapple express'

  ];

  filteredMovies: string[] = [];
  
  name = 'Aaron'
  constructor(){
    setTimeout(() =>{
      this.name = 'Jose';
      this.movies.push('Los 3 García');
    },2000);
    this.filteredMovies = this.movies;
  }

  doOnclick(e:any){
    console.log('Me pushearon!');
    e.preventDefault();
    
    //this.flag = !this.flag
    
    this.movies.push(this.searchValue);
    this.searchValue = '';


  }
  doSearch(){
    if(this.searchTimeOut){
      clearTimeout(this.searchTimeOut);
    }
    this.searchTimeOut = setTimeout(()=>{
      const searchValue = this.searchValue.toLowerCase();
      console.log('Se hace la busqueda');
    this.filteredMovies = this.movies.filter(item =>{
      return item.toLowerCase().includes(searchValue);
    });
    },200)

  }
  /*setSearchValue(e:any){
    console.log('Event'+ e.target.value)
    this.searchValue = e.target.value;
    
  }*/
}
