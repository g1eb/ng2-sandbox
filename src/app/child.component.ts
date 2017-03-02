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
  `,
})

export class ChildComponent  {
  @Input() someObject: any;
  @Input() someString: string;
  @Input() someNumber: number;
}
