import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
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
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
