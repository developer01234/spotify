import { TrackModule } from './track/track.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Admin:2QSzuBNNITtgvAWX@cluster0.jtggo.mongodb.net/spotify?retryWrites=true&w=majority',
    ),
    TrackModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
