import { Component, OnInit } from '@angular/core';
import { SongService } from '../../shared/song.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})

export class EditSongComponent implements OnInit {
  updateSongForm!: FormGroup;
  songUpdated: boolean = false;

  constructor(
    private songService: SongService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.updateSongForm = this.fb.group({
      name: [''],
      artist: ['']
    })
    this.showSong(id)
  }

  showSong(id) {
    this.songService.getSong(id).subscribe((res) => {
      this.updateSongForm.setValue({
        name: res['name'],
        artist: res['artist']
      })
    })
  }

  updateSong() {
    if (!this.updateSongForm.valid) {
      return;
    } else {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.songService.updateSong(id, this.updateSongForm.value)
        .subscribe((res) => {
          this.songUpdated = true;
          setTimeout(() => { 
            this.songUpdated = false;
            this.router.navigateByUrl('/songs');
          }, 3 * 1000);
        })
    }
  }
}