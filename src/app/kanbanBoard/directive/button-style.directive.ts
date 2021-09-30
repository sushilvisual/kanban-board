import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { Priority } from 'src/app/model/priority';
@Directive({
    selector: '[button-color]',
    exportAs:'buttonColor'
})
export class ButtonStyleDirective implements OnInit{
    
    constructor(private el: ElementRef<HTMLButtonElement>, private render: Renderer2) {
        
    }

    @Input('button-color')
    taskPriority: Priority;
    @HostBinding('style.background-color') get color() {
        switch (this.taskPriority) {
            case Priority.CRITICAL:
                return 'red';
            case Priority.HIGH:
                return 'lightpink';
            case Priority.LOW:
                return 'darkgrey';
            case Priority.MEDIUM:
                return 'darkgoldenrod'
            default:
                return 'black'
       } 
     
    }
    ngOnInit() {

    }

}