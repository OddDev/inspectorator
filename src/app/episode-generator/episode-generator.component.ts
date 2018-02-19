import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode';
import { EpisodeService } from '../episode.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-episode-generator',
  templateUrl: './episode-generator.component.html',
  styleUrls: ['./episode-generator.component.css']
})
export class EpisodeGeneratorComponent implements OnInit {

  episode: Episode;

  constructor(private episodeService: EpisodeService) { }

  ngOnInit() {
    this.randomize();
  }

  randomize() {
    this.episodeService.getRandomEpisode().subscribe(randomEpisode => this.episode = randomEpisode);
  }

}
