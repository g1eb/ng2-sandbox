import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  styles: [`
    :host {
      color: red;
    }
  `],
  template: `
    <h1>Object: {{ someObject | json }}</h1>
    <h1>String: {{ someString }}</h1>
    <h1>Number: {{ someNumber }}</h1>
    <button (click)="callOnChange()">Click me</button>
  `,
})

export class ChildComponent  {
  @Input() someObject: any;
  @Input() someString: string;
  @Input() someNumber: number;

  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  callOnChange () {
    this.onChange.emit(this.someObject);
  }
}
