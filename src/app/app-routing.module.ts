import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SingupComponent } from './pages/singup/singup.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path: '',redirectTo:'login', pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'singup',component:SingupComponent},
  {path: 'users', component: UsersComponent,canActivate: [AuthGuard]},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'users/:userId/posts', component: PostsComponent},
  {path: '**',component:NotFoundComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
