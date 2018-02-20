import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule, MatIconModule, MatTooltipModule} from '@angular/material';

import { AppComponent } from './app.component';
import { EpisodeGeneratorComponent } from './episode-generator/episode-generator.component';
import { EpisodeService } from './episode.service';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    EpisodeGeneratorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    AppRoutingModule,
    MatTooltipModule
  ],
  providers: [EpisodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
