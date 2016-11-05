import { Component, Input } from '@angular/core';
import { Hero } from '../../../models/hero';
import { Router } from '@angular/router';
import { HeroService } from '../../../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponentOrganism {
  selectedHero: Hero;

  heroes: Hero[];

  constructor(private router: Router,
              private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
