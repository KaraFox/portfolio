import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DevComponent } from './views/dev/dev.component';
import { ProductComponent } from './views/product/product.component';
import { HeaderComponent } from './views/global/header/header.component';
import { FooterComponent } from './views/global/footer/footer.component';
import { TabsModule } from 'ng-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
