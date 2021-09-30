import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Memeber } from 'src/app/model/member';
import { Priority } from 'src/app/model/priority';
import { Stages } from 'src/app/model/stage';
import { Task } from 'src/app/model/task';
import { TaskDialogComponent } from '../dialog/task-dialog/task-dialog.component';
import { TasksComponent } from '../tasks/tasks.component';



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  displayCard = 'none';
  stageId = 0;
  stages: Stages[] = [
    {
      id: 1, name: 'New', tasks: [{
        id: 1, name: 'Task-1',
        members: [new Memeber("1", 'sushil', 'pandey', 'S', "/assets/gates.jpg"),
        new Memeber("1", 'ANUJ', 'pandey', 'A')],
        startDate: new Date(),
        endDate: new Date(),  
        priority: Priority.CRITICAL
      }, {
        id: 2, name: 'Task-2',
        members: [new Memeber("1", 'sushil', 'pandey', 'S', ""),
        new Memeber("1", 'ANUJ', 'pandey', 'A')],
        startDate: new Date(),
        endDate: new Date(),
        priority: Priority.HIGH
      }],

    },
    {
      id: 2, name: 'DIP', tasks: [{
        id: 1, name: 'Task-DIP',
        members: [new Memeber("1", 'sushil', 'pandey', 'S', ""),
        new Memeber("1", 'ANUJ', 'pandey', 'A')],
        startDate: new Date(),
        endDate: new Date(),
        priority: Priority.LOW
      }, {
        id: 2, name: 'Task-DIP',
        members: [new Memeber("1", 'sushil', 'pandey', 'S', ""),
        new Memeber("1", 'ANUJ', 'pandey', 'A')],
        startDate: new Date(),
        endDate: new Date(),
        priority: Priority.MEDIUM
      }],

    },
  
    {
      id: 3, name: 'CODE REVIEW', tasks: [{
        id: 1, name: 'Task-CODE REVIEW',
        members: [new Memeber("1", 'sushil', 'pandey', 'S', ""),
        new Memeber("1", 'ANUJ', 'pandey', 'A')],
        startDate: new Date(),
        endDate: new Date(),
        priority: Priority.CRITICAL
      }, {
        id: 4, name: 'Task-CODE REVIEW',
        members: [new Memeber("1", 'sushil', 'pandey', 'S', ""),
        new Memeber("1", 'ANUJ', 'pandey', 'A')],
        startDate: new Date(),
        endDate: new Date(),
        priority: Priority.HIGH
      }],

    },
    {
      id: 4, name: 'QIP', tasks: [{
        id: 1, name: 'Task-QIP',
        members: [new Memeber("1", 'sushil', 'pandey', 'S', ""),
        new Memeber("1", 'ANUJ', 'pandey', 'A')],
        startDate: new Date(),
        endDate: new Date(), priority: Priority.HIGH
      }, {
        id: 2, name: 'Task-QIP',
        members: [new Memeber("1", 'sushil', 'pandey', 'S', ""),
        new Memeber("1", 'ANUJ', 'pandey', 'A')],
        startDate: new Date(),
        endDate: new Date(), priority: Priority.LOW
      }],

    }

  ];
  
  constructor( private viewRef: ViewContainerRef, private service: DragulaService) {
    
  }
  ngOnInit(): void {
    let selectedStage: Stages = null;
    this.service.drag().subscribe((p) => {
      let k = p as unknown | TasksComponent;;
      var statgeId = k['el']['data-stage-id']
      var taskID = ['el']['data-task-id'];
      selectedStage = this.stages.filter(p => p.id == statgeId && p.tasks.filter(k => k.id === taskID))[0];
     

    });
  
    this.service.createGroup('s', {
      accepts: (el, target, source, sibling) => {
  return target.id !== 'source';
},copy: (el, source) => {
  return source.id === 'source';
      },
      copyItem: (item) => {
  return item;
}
    })



    this.service.drop().subscribe((p) => {

      //Here we will get stage id 
      //after drop we need to update data source, else funcionality will not work
      let k = p['target']['children'][0]['data-stage-id'];
      console.log(k);
      console.log(p);
      
    });
  }
  addCard(stageId: number) {
    this.displayCard = 'block';
    this.stageId = stageId;
  }
  addTask(task: { name: string, date: string, priority: string, members: string[] ,stageId:number}) {
    let stage: Stages = this.stages.find(p => p.id == task.stageId);
    stage.tasks.push({
      name: task.name, priority: Priority[task.priority], id: stage.tasks.length + 1,
      startDate: task.date, members:getMember(task.members)})
  }
  editTask(edit: { taskId: number, stageId: number }) {
    console.log(edit);
  }
  deleteTask(deleteTask: { taskId: number, stageId: number }) {
    let stage: Stages = this.stages.find(p => p.id === deleteTask.stageId);
    let taskIndex = stage.tasks.findIndex(p => p.id === deleteTask.taskId);
    stage.tasks.splice(taskIndex, 1);
  }
}

function getMember(members: string[]): Memeber[] {
  let member: Array<Memeber> = [];
  members.forEach(k => {
    member.push(new Memeber(String(member.length + 1), k, k, k.substring(0,1)));
  });
  return member;
}
