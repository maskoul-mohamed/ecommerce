import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { ShopLiftPageComponent } from './component/shop-lift-page/shop-lift-page.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'shope', component: ShopLiftPageComponent},
  {path:'**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
