import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Episode } from "./episode";
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EpisodeService {

  private _lastRandom: number;

  constructor(private http: HttpClient) { }

  getRandomEpisode(): Observable<Episode> {
    return this.http.get<Episode>('episodes/random');
  }

}
