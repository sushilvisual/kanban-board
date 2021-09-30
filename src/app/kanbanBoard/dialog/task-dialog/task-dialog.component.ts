import { Component, ComponentRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Task } from 'src/app/model/task';


@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent {

  @Input() display = 'none';
  @Input() stageId = 0;
  @Output() hide = new EventEmitter();
  @Output() addTask = new EventEmitter<{name:string , date:string , priority:string ,members:string[],stageId:number}>();
  readonly taskNameCtrl: FormControl = new FormControl('', Validators.required);
  readonly startDate: FormControl = new FormControl(null, Validators.required);
  readonly priority: FormControl = new FormControl('Low', Validators.required);
  readonly members: FormControl = new FormControl('', Validators.required);
   
  ngOnInit(): void {
  }
  clear() {
    this.priority.setValue('Low');
    this.members.setValue('');
    this.taskNameCtrl.setValue('');
    this.startDate.setValue('');
  }
}
