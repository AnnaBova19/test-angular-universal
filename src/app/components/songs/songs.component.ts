import { Component, OnInit } from '@angular/core';
import { SongService } from '../../shared/song.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})

export class SongsComponent implements OnInit {
  Songs: any = [];
  title: string = 'Songs list - Angular Universal CRUD App';

  constructor(
    private songService: SongService,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    this.songService.getSongs().subscribe((item) => {
      this.Songs = item;
    });
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Songs list template' }
    );
  }

  removeSong(song, i) {
    if (window.confirm('Are you sure?')) {
      this.songService.deleteSong(song._id)
        .subscribe((res) => {
          this.Songs.splice(i, 1);
        })
    }
  }
}