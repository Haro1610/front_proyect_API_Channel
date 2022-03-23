import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SingupComponent } from './pages/singup/singup.component';

const routes: Routes = [
  {path: '',redirectTo:'login', pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'singup',component:SingupComponent},
  {path: '**',component:NotFoundComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
