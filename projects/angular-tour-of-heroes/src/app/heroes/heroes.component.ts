import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  heroSub: Subscription;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  ngOnDestroy() {
    this.heroSub.unsubscribe();
  }

  getHeroes(): void {
    this.heroSub = this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, altName: string, power: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name, altName, power } as Hero)
      //TODO Unsubscribe
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }

}
