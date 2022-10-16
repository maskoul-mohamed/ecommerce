import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ShopLiftPageComponent } from './component/shop-lift-page/shop-lift-page.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'shope', component: ShopLiftPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
