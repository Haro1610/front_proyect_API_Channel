import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostsService} from 'src/app/shared/services/posts.service';

interface PostParams{
  user: String;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  userId: string = '';

  constructor(private activatedRoute:ActivatedRoute) { }

  //ngOnInit(): void {
    //  this.postsService.getUserPost().subscribe(response =>{
    //    console.log('Response: ',response);
    //    this.user = response;
    //  })
 // }

   ngOnInit(): void {
     this.activatedRoute.params.subscribe(params=>{
       console.log(params);
       //if(this.userId == params['user']) return;
       console.log('El usuario es :' + params['user']);
       this.userId = params['user'];
       this.getPosts();
     });
   }

  getPosts(){

  }

}
