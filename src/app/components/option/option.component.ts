import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() value: string;
  click$: Observable<string>;
  constructor(private host: ElementRef) { }

  get element() { 
    return this.host.nativeElement; 
  }

  ngOnInit() {
    this.click$ = fromEvent(this.element, 'click').pipe(mapTo(this.value));
  }

}
