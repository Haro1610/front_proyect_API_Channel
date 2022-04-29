import { Component, OnInit,Input,Output, EventEmitter,OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnChanges {

  @Output() onUserCleared: EventEmitter<User> = new EventEmitter();

  @Input('item') user: User ={
    id: '',
    name: '',
    email: ''
  };

  @Input()name: string ="Juan";

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hubo cambios',changes);
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.name = 'Pepe';
    },2000)
  }
  
  onChanges(changes:SimpleChanges): void{
    console.log('No hubo cambios: ', changes);

  }

  clearUser(){
    this.onUserCleared.emit(this.user);
    //this.user = {id:'',name:'',email:''};

  }

}
