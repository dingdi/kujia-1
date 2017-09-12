/**
 * Created by C5-0 on 2017/9/12.
 */
// 路由
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginRegisterComponent } from './login-register/login-register.component';
import { SoliciationComponent } from './soliciation/soliciation.component';
import { FoundComponent } from './found/found.component';
import { TupianComponent } from './tupian/tupian.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// 配置路由表
const routes: Routes = [
  {
    path: 'login-register',
    component: LoginRegisterComponent
  },
  {
    path: 'found',
    component: FoundComponent
  },
  {
    path: 'soliciation',
    component: SoliciationComponent
  },
  {
    path: 'tupian',
    component: TupianComponent
  },
  {
    path: 'personal-center',
    component: PersonalCenterComponent
  },
  {
    path: '',
    redirectTo: '/login-register',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  export class AppRoutingModule { }
