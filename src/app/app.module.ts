
// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


// components
import { AppComponent } from './app.component';
//interceptor
import { TokenAuthInterceptor } from './_middleware/token-auth.interceptor';
import { HttpErrorInterceptor } from './_middleware/http-error.interceptor';
 

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    OrderModule,

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenAuthInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
