import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenuCtrlComponent } from './context-menu-ctrl.component';

describe('ContextMenuCtrlComponent', () => {
  let component: ContextMenuCtrlComponent;
  let fixture: ComponentFixture<ContextMenuCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextMenuCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextMenuCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
