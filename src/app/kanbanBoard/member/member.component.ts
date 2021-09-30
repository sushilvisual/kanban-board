import { Component, Input, OnInit } from '@angular/core';
import { Memeber } from 'src/app/model/member';

@Component({
  selector: 'app-task-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @Input() member: Memeber | null;
  constructor() { }

  ngOnInit(): void {
  }

}
