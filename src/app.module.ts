import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './task/tasks.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest'), TasksModule],
})
export class AppModule { }
