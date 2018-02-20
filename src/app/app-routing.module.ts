import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeGeneratorComponent } from './episode-generator/episode-generator.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/randomizer', pathMatch: 'full' },
  { path: 'randomizer', component: EpisodeGeneratorComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
