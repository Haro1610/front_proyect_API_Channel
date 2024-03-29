import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/posts?userId=1';
    return this.httpClient.get(url);
    
  }
}
