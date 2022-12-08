import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
// import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   multi: true,
    //   useClass: AuthInterceptor
    // }
  ]
})
export class CoreModule { }
