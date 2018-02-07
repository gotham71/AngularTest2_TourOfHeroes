import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes-filtered',
  templateUrl: './heroes-filtered.component.html'
})
export class HeroesFilteredComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

}
