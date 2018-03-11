import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule, MatIconModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EpisodeGeneratorComponent } from './episode-generator/episode-generator.component';
import { EpisodeService } from './episode.service';
import { TvdbAuthentificatorService } from './tvdb-authentificator.service';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    MatTooltipModule,
    HttpClientModule,
    MatSnackBarModule,
    ClipboardModule,
    BrowserAnimationsModule
  ],
  providers: [
    EpisodeService,
    TvdbAuthentificatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
