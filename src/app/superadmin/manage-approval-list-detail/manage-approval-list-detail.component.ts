import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-approval-list-detail',
  templateUrl: './manage-approval-list-detail.component.html',
  styleUrls: ['./manage-approval-list-detail.component.css']
})
export class ManageApprovalListDetailComponent implements OnInit {

  fileName: any;
  file: any;

  constructor() { }

  ngOnInit(): void {
  }

    trigger() {
    let element = document.getElementById('upload_file') as HTMLInputElement;
    element.click();
  }

  onChange(file:any) {
    this.file = file.files[0];
    this.fileName = file.files[0].name;
  }

  removeFile() {
    this.file = null;
    this.fileName = '';
  }

}
