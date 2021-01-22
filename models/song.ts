// models/song.ts

import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

let SongSchema: Schema = new Schema({
    name: {
      type: String
    },
    artist: {
      type: String
    }
}, {
    collection: 'songs'
})

export default mongoose.model('Song', SongSchema);