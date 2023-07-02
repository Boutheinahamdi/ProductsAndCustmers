import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustmersComponent} from "./custmers/custmers.component";
const routes: Routes = [
  {path: "products",component: ProductsComponent},
  {path: "custmers",component: CustmersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
