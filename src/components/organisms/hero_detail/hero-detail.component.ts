import { Component, Input, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';
import { Hero } from '../../../models/hero';
import { HeroService } from '../../../services/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponentOrganism implements OnInit  {
  @Input()
  heroId: number;

  hero:Hero;

  constructor(
    private location: Location,
    private heroService: HeroService,
  ) {}

  goBack(): void {
    this.location.back();
  }

  save(event:any): void {
    this.heroService.update(this.hero)
        .then(() => this.goBack());
  }

  ngOnInit(): void {
    this.heroService.getHero(this.heroId).then(hero => this.hero = hero);
  }
}
