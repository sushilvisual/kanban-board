
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//Angular Router Module
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DragulaDirective, DragulaModule, DragulaService } from 'ng2-dragula';
import { ContainerComponent } from './kanbanBoard/container/container.component';
import { StagesComponent } from './kanbanBoard/stages/stages.component';
import { TasksComponent } from './kanbanBoard/tasks/tasks.component';
import { ButtonStyleDirective } from './kanbanBoard/directive/button-style.directive';
import { MemberComponent } from './kanbanBoard/member/member.component';

import { TaskDialogComponent } from './kanbanBoard/dialog/task-dialog/task-dialog.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ContextMenuCtrlComponent } from './kanbanBoard/context-menu-ctrl/context-menu-ctrl.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    StagesComponent,
    TasksComponent,
    ButtonStyleDirective,
    MemberComponent,
    TaskDialogComponent,
    ContextMenuComponent,
    ContextMenuCtrlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterTestingModule,
    DragulaModule,
    ReactiveFormsModule
     
     ],
  entryComponents:[TaskDialogComponent],
  exports: [
    RouterModule
  ],
  providers: [DragulaService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
