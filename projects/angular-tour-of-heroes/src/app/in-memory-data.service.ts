import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Captain Warp', altName: 'Fredrick Flash', power: 'Teleportation'},
      { id: 1, name: 'Nova Master', altName: 'Henry Hot', power: 'Fire'},
      { id: 2, name: 'Rush', altName: 'Samantha Speedy', power: 'Speed'},
      { id: 3, name: 'Croco Joe', altName: 'Joe Johnson', power: 'Crocodile Form'},
      { id: 4, name: 'Ultra Dude', altName: 'Max Manly', power: 'Strength'},
      { id: 5, name: 'Mr Chops', altName: 'Barry Blade', power: 'Swords'},
      { id: 6, name: 'Power Lady', altName: 'Penny Power', power: 'Energy Beams'},
      { id: 7, name: 'Dr Destructor', altName: 'Betty Boom', power: 'Explosions'},
      { id: 8, name: 'The Zapper', altName: 'Vicky Volt', power: 'Electrity'},
      { id: 9, name: 'Meat Shield', altName: 'Terry Tough', power: 'Invincibility'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (0).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 0;
  }
}