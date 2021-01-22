import { Component, OnInit } from '@angular/core';
import { SongService } from '../../shared/song.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})

export class AddSongComponent implements OnInit {
  songForm!: FormGroup;
  songAdded: boolean = false;
  title: string = 'Add Song - Angular Universal CRUD App';

  constructor(
    private songService: SongService,
    public fb: FormBuilder,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    this.form()
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Add song template' }
    );
  }

  form() {
    this.songForm = this.fb.group({
      name: [''],
      artist: ['']
    })
  }

  submit() {
    if (!this.songForm.valid) {
      return;
    } else {
      this.songService.addSong(this.songForm.value)
        .subscribe((res) => {
          this.songAdded = true;
          setTimeout(() => { 
            this.songAdded = false;
            this.songForm.reset();
            this.router.navigateByUrl('/songs');
          }, 3 * 1000);
        })
    }
  }
}