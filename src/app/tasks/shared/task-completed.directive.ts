import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[taskCompleted]'
})
export class TaskCompletedDirective implements OnInit {

  @Input()
  taskCompleted: boolean;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    if (this.taskCompleted) {
      this.element.nativeElement.style.textDecoration = "line-through";
    }
  }

}
