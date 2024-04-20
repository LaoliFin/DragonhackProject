import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})

export class EventCardComponent {
  isFormVisible: boolean = false;
  textInputValue: string= '';

  @ViewChild('myForm') myForm!: NgForm;

  showForm() {
    var x: any = document.getElementById("addText");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

  saveForm() {
    this.isFormVisible = false;
  }
}
