import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) { }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async update(task: { _id: string, text: string }): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(task._id, task);
  }

  async delete(_id: string): Promise<Task> {
    return await this.taskModel.findByIdAndDelete(_id);
  }
}
