import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { SoliciationComponent } from './soliciation/soliciation.component';
import { FoundComponent } from './found/found.component';
import { TupianComponent } from './tupian/tupian.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// 导入路由模块
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { RoastingComponent } from './roasting/roasting.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    SoliciationComponent,
    FoundComponent,
    TupianComponent,
    PersonalCenterComponent,
    PageNotFoundComponent,
    NavComponent,
    RoastingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
