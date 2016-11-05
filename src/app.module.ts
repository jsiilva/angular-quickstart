import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroDetailComponentMolecule } from './components/molecules/hero_detail/hero-detail.component';

import { HeroesComponentOrganism }     from './components/organisms/heroes/heroes.component';
import { HeroDetailComponentOrganism } from './components/organisms/hero_detail/hero-detail.component';
import { DashboardComponentOrganism }  from './components/organisms/dashboard/dashboard.component';


import { HeroesComponentTemplate }     from './components/templates/heroes/heroes.component';
import { HeroDetailComponentTemplate } from './components/templates/hero_detail/hero-detail.component';
import { DashboardComponentTemplate }  from './components/templates/dashboard/dashboard.component';

import { AppComponent } from './components/pages/app/app.component';

import { HeroService } from './services/hero.service';

// Atoms only have pure html
// Molecules only have Atoms and pure html
// Organisms only have molecules atoms and pure htmls
// Templates deals with routes and services
// Pages wraps what all template have (menus, etc...)

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    HeroDetailComponentMolecule,

    HeroesComponentOrganism,
    HeroDetailComponentOrganism,
    DashboardComponentOrganism,

    HeroesComponentTemplate,
    HeroDetailComponentTemplate,
    DashboardComponentTemplate,

    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }
