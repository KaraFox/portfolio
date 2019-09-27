import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DevComponent } from './views/dev/dev.component';
import { ProductComponent } from './views/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'development', component: DevComponent },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
