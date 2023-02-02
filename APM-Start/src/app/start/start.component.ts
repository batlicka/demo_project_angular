import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pm-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, OnChanges {
  // Explanation:
  // @Input decorator for defining property in nested components
  // any time the container data chnages, the onChange lifecycles event is generated
  @Input() rating: number =0;
  cropWidth: number =75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5
  }

  onClick() {
  this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
  }
}
