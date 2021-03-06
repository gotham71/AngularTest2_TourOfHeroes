import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _router: Router, private _heroesService: HeroesService) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

  }

  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }

}
