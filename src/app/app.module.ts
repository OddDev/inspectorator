import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule, MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { EpisodeGeneratorComponent } from './episode-generator/episode-generator.component';
import { EpisodeService } from './episode.service';


@NgModule({
  declarations: [
    AppComponent,
    EpisodeGeneratorComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [EpisodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
