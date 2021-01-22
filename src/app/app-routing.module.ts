import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSongComponent } from '../app/components/add-song/add-song.component';
import { EditSongComponent } from '../app/components/edit-song/edit-song.component';
import { SongsComponent } from '../app/components/songs/songs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/songs',
    pathMatch: 'full'
  },
  {
    path: 'add-song',
    component: AddSongComponent,
    data: { title: 'Add Song' }
  },
  {
    path: 'edit-song/:id',
    component: EditSongComponent,
    data: { title: 'Edit Song' }
  },
  {
    path: 'songs',
    component: SongsComponent,
    data: { title: 'Songs' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
