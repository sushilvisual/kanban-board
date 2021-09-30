import { Component, Input, OnInit } from '@angular/core';
import { Stages } from 'src/app/model/stage';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss']
})
export class StagesComponent implements OnInit {
  @Input() stage: Stages|null;
  constructor() { }

  ngOnInit(): void {
  }

}
