import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-print-button',
  templateUrl: './print-button.component.html',
  styleUrls: ['./print-button.component.css']
})
export class PrintButtonComponent implements OnInit {
  @Input() text :string | undefined;
  @Input() color :string | undefined;
  @Output() btnClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
   this,this.btnClick.emit();
  }

}
