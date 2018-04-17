import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[inputAutofocus]'
})
export class FocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }
  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }

}