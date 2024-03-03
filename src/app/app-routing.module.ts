import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { DevelopmentsComponent } from './components/developments/developments.component';

const routes: Routes = [{path:'',component:LoginComponent},{path:'home',component:HomeComponent,children:[
  {path:'skills',component:SkillsComponent},
  {path:'trainings',component:TrainingsComponent},
  {path:'developments',component:DevelopmentsComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
