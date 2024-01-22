import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'home', redirectTo:"/", pathMatch:"full" },
  { path: '**', component: NotFoundPageComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundPageComponent,
    HomePageComponent,
    ProductComponent,
    ProductListComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
