import { ArtistModel } from './Artist.model';

export interface TrackModel {
  name: string;
  album: string;
  cover: string;
  url: string;
  _id: number | string;
  artist?: ArtistModel;
}
