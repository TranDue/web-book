import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/detail/detail.component';
import { ProductConfigComponent } from './components/product-config/product-config.component';
import { HomeConfigComponent } from './components/detail/home-config/home-config.component';
import { LienheConfigComponent } from './components/detail/lienhe-config/lienhe-config.component';
import { PhanhoiConfigComponent } from './components/detail/phanhoi-config/phanhoi-config.component';
import { SanphamConfigComponent } from './components/detail/sanpham-config/sanpham-config.component';
import { ThongkeConfigComponent } from './components/detail/thongke-config/thongke-config.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path:'detail', component:DetailComponent},
  // { path:'products-config', component:ProductConfigComponent},
  // { path: 'home-config', component: HomeConfigComponent },
  // { path: 'lienhe-config', component: LienheConfigComponent },
  // { path: 'phanhoi-config', component: PhanhoiConfigComponent },
  // { path: 'sanpham-config', component: SanphamConfigComponent },
  // { path: 'thongke-config', component: ThongkeConfigComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
