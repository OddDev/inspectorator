import { Component, OnInit } from '@angular/core';
import { TvdbAuthentificatorService } from './tvdb-authentificator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private tvdbAuthentificationService: TvdbAuthentificatorService) {
  }

  ngOnInit() {
    console.log(this.tvdbAuthentificationService.jwt);
  }

}
