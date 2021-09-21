import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Quotation} from "../models/quotation";
import {QuotationEvent} from "../models/quotationEvent";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  quotes: Quotation[] = [];
  @Output() vote = new EventEmitter<QuotationEvent>();

  addVote(quotation: Quotation, value: number) {
    this.vote.emit({quotation, value})
  }

}
