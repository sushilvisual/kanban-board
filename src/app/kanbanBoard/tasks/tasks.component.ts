import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stages } from 'src/app/model/stage';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  @Input() task: Task | null;
  @Input() stageId: number | null;
  display = 'none';
  @Output() delete = new EventEmitter<{ taskId: number, stageId: number }>();
  @Output() edit = new EventEmitter<{ taskId: number, stageId: number }>();;
  
   
}
