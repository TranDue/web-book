import { DetailProductComponent } from './header/menu-top/product/detail-product/detail-product.component';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CartComponent } from './header/cart/cart.component';
import { WithlistComponent } from './header/withlist/withlist.component';
import { CompareComponent } from './header/compare/compare.component';
import { ProductComponent } from './header/menu-top/product/product.component';
import { RankComponent } from './header/menu-top/rank/rank.component';
import { AboutUsComponent } from './header/menu-top/about-us/about-us.component';
import { BlogComponent } from './header/menu-top/blog/blog.component';
import { ErrorComponent } from './header/menu-top/error/error.component';
import { EnglishbookComponent } from './body/menu-body/englishbook/englishbook.component';
import { SachTiengVietComponent } from './body/menu-body/sach-tieng-viet/sach-tieng-viet.component';
import { QuaLuuNiemComponent } from './body/menu-body/qua-luu-niem/qua-luu-niem.component';
import { VanPhongPhamComponent } from './body/menu-body/van-phong-pham/van-phong-pham.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { ContactComponent } from './header/menu-top/contact/contact.component';
import { CheckoutComponent } from './header/cart/checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import de from '@angular/common/locales/de';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from "@ngrx/store";
import { reducers } from './_reducers';
import { AuthUserComponent } from './header/auth-user/auth-user.component';
import { LoginUserComponent } from './header/auth-user/login-user/login-user.component';
import { DetailUserComponent } from './header/auth-user/detail-user/detail-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZoroAntDesignModule } from './ng-zoro-ant-design/ng-zoro-ant-design.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { NgxPayPalModule } from 'ngx-paypal';
import { ToastrModule } from 'ngx-toastr';
import { PaymoneyComponent } from './header/cart/paymoney/paymoney.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ShippingComponent } from './header/cart/shipping/shipping.component';
import "firebase/analytics";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import "firebase/auth";
import "firebase/firestore";
// import { AngularFireModule } from '@angular/fire/firebase.app.module';
registerLocaleData(de);

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BannerComponent,
    AuthUserComponent,
    CartComponent,
    WithlistComponent,
    CompareComponent,
    ProductComponent,
    RankComponent,
    AboutUsComponent,
    BlogComponent,
    ErrorComponent,
    EnglishbookComponent,
    SachTiengVietComponent,
    QuaLuuNiemComponent,
    VanPhongPhamComponent,
    SearchproductComponent,
    ContactComponent,
    CheckoutComponent,
    LoginUserComponent,
    DetailUserComponent,
    PaymoneyComponent,
    ShippingComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    AuthRoutingModule,
    AuthModule,
    StoreModule.forRoot(reducers),
    ReactiveFormsModule,
    NgZoroAntDesignModule,
    MatTabsModule,
    MatStepperModule,
    MatRadioModule,
    MatSliderModule,
    NgxPayPalModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: BodyComponent},
      { path: '', component: ProductComponent},
      { path: 'product/:productId', component: DetailProductComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
    AngularFireModule.initializeApp(environment.firebase, 'book-project-15a8c')
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
