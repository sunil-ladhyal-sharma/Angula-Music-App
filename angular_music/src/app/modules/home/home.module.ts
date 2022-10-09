import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './components/music/music.component';



@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    MusicComponent
  ]
})
export class HomeModule { }
