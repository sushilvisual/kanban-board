import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-context-menu-ctrl',
  templateUrl: './context-menu-ctrl.component.html',
  styleUrls: ['./context-menu-ctrl.component.scss']
})
export class ContextMenuCtrlComponent implements OnInit {
  @Input() display: string = 'none';
  @Input() taskId = 0;
  @Input() stageId = 0;
  @Output() hide = new EventEmitter();
  @Output() delete = new EventEmitter<{ taskId: number, stageId: number }>();
  @Output() edit = new EventEmitter<{ taskId: number, stageId: number }>();;
  constructor() { }

  ngOnInit(): void {
  }
 
}
