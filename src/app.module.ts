import { TrackModule } from './track/track.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Admin:2QSzuBNNITtgvAWX@cluster0.jtggo.mongodb.net/spotify?retryWrites=true&w=majority',
    ),
    TrackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
