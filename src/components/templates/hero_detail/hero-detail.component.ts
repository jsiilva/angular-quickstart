import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { HeroService } from '../../../services/hero.service';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'my-hero-detail-template',
  template: '<my-hero-detail [heroId]="heroId"></my-hero-detail>'
})
export class HeroDetailComponentTemplate implements OnInit {
  heroId: number;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.heroId  = +params['id'];
    });
  }
}
