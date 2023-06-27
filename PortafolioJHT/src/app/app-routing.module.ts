import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { MainPortafolioComponent } from './pages/main-portafolio/main-portafolio.component';
const routes: Routes = [{
  path:'',
  component: SkeletonComponent,
  pathMatch:'prefix',
  children:[
    {path:'', component:MainPortafolioComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
