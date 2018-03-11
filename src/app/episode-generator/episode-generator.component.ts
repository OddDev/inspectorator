import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode';
import { EpisodeService } from '../episode.service';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-episode-generator',
  templateUrl: './episode-generator.component.html',
  styleUrls: ['./episode-generator.component.css']
})
export class EpisodeGeneratorComponent implements OnInit {

  episode: Episode;
  isMobile = this._determineMobile();

  constructor(private episodeService: EpisodeService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.randomize();
  }

  randomize() {
    this.episode = null;
    this.episodeService.getRandomEpisode().subscribe(randomEpisode => this.episode = randomEpisode);
  }

  doCopySuccess() {
    this.snackBar.open('Episode title copied to clipboard', null, {
      duration: 2000,
    });
  }

  onResize(event) {
    this.isMobile = this._determineMobile();
  }

  private _determineMobile(): boolean {
    return window.innerWidth <= 760;
  }

}
