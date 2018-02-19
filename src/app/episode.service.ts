import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Episode } from "./episode";
import { EPISODES } from "./episodes-data";
import { of } from 'rxjs/observable/of';

@Injectable()
export class EpisodeService {

  private _lastRandom: number;

  constructor() { }

  getRandomEpisode(): Observable<Episode> {
    return of(EPISODES[this._generateRandom()]);
  }

  getEpisodeCountOfSeason(season: number): Observable<number> {
    return of(EPISODES.filter(episode => episode.season === season).length);
  }

  private _generateRandom(): number {
    const random = Math.floor(Math.random() * EPISODES.length);
    this._lastRandom = random === this._lastRandom ? this._generateRandom() : random;
    return random;
  }

}
