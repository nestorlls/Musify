import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover: '',
    album: '',
    name: 'artist name',
    url: '',
    _id: '',
  };
}
