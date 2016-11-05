import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponentMolecule {
  @Input()
  hero: Hero;

  @Output()
  saved = new EventEmitter();

  save(): void {
    this.saved.emit('saved');
  }
}
