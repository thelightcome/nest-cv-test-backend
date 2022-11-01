import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.update({ _id: id, ...createTaskDto });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Task> {
    return this.tasksService.delete(id);
  }
}