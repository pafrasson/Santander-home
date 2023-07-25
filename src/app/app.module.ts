import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';
import { LogoWhiteComponent } from '../assets/svgs/logo-white/logo-white.component';
import { SearchLogoComponent } from '../assets/svgs/search-logo/search-logo.component'
import { UserIconComponent } from '../assets/svgs/user-icon/user-icon.component'
import { HttpClientModule } from '@angular/common/http';
import { MoneyIconComponent } from '../assets/svgs/money-icon/money-icon.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardBoxComponent,
    CarouselItemsComponent,
    AmountBoxComponent,
    LogoWhiteComponent,
    SearchLogoComponent,
    UserIconComponent,
    MoneyIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
