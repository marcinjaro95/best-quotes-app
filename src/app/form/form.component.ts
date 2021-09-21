import {Component, Output, EventEmitter} from '@angular/core';
import {Quotation} from "../models/quotation";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() newQuotation = new EventEmitter<Quotation>();
  quotation: Quotation = { author: '', sentence : '', votes : 0}

  showForm: boolean = false;

  onSwitchForm() {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: this.quotation.author, sentence: this.quotation.sentence, votes : 0 };
  }

}
