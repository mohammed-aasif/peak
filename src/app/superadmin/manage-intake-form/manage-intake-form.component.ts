import { Component, OnInit } from '@angular/core';
import { IDayCalendarConfig, DatePickerComponent } from "ng2-date-picker";

@Component({
  selector: 'app-manage-intake-form',
  templateUrl: './manage-intake-form.component.html',
  styleUrls: ['./manage-intake-form.component.css']
})
export class ManageIntakeFormComponent implements OnInit {
  datePickerConfig = {
    format: 'DD-MM-YYYY'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
