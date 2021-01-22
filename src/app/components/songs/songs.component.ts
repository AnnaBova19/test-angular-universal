import { Component, OnInit } from '@angular/core';
import { SongService } from '../../shared/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})

export class SongsComponent implements OnInit {
  Songs: any = [];

  constructor(private songService: SongService) {
    this.songService.getSongs().subscribe((item) => {
      this.Songs = item;
    });
  }

  ngOnInit() { }

  removeSong(song, i) {
    if (window.confirm('Are you sure?')) {
      this.songService.deleteSong(song._id)
        .subscribe((res) => {
          this.Songs.splice(i, 1);
        })
    }
  }
}