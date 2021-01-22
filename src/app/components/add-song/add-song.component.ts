import { Component, OnInit } from '@angular/core';
import { SongService } from '../../shared/song.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import {  Router } from "@angular/router";

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})

export class AddSongComponent implements OnInit {
  songForm!: FormGroup;
  songAdded: boolean = false;

  constructor(
    private songService: SongService,
    public fb: FormBuilder,
    private router: Router
  ) {
    this.form()
  }

  ngOnInit() { }

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