import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToppersComponent } from './components/toppers/toppers.component';
import { UsersComponent } from './components/users/users.component';
import { WinnersComponent } from './components/winners/winners.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'winners', component: WinnersComponent},
  {path: 'toppers', component: ToppersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
