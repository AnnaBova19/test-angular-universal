export class Song {
  name: string;
  artist: string;

  constructor(song) {
    {
      this.name = song.name || '';
      this.artist = song.artist || '';
    }
  }
}