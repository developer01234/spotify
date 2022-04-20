import { CreateTrackDto } from './dto/create-track.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentDocument } from './shemas/comment.schema';
import { Track, TrackDocument } from './shemas/track.schema';
import { Model } from 'mongoose';

@Injectable()
export default class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name)
    private commentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreateTrackDto): Promise<Track> {
    const track = await this.trackModel.create({ ...dto, listens: 0 });
    return track;
  }

  async getAll(): Promise<void> {}

  async getOne(): Promise<void> {}

  async delete(): Promise<void> {}
}
