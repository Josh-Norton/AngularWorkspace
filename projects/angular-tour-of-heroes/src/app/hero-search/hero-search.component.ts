import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';

import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      // Wait 300mms after each keystroke
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

  ngOnDestroy() {
    this.searchTerms.unsubscribe();
  }

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
