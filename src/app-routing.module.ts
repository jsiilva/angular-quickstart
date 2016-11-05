import { NgModule }                    from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';

import { HeroesComponentTemplate }     from './components/templates/heroes/heroes.component';
import { HeroDetailComponentTemplate } from './components/templates/hero_detail/hero-detail.component';
import { DashboardComponentTemplate }  from './components/templates/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponentTemplate
  },
  {
    path: 'dashboard',
    component: DashboardComponentTemplate
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponentTemplate
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
