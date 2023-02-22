import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from "@angular/forms";
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StartComponent } from './start/start.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StartComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductListComponent},
      {path: 'welcome', component: WelcomeComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
