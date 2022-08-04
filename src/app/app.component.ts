import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadService } from './upload.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  file: any = null;
  datasource: any;
  dataNumberSource: any;
  showTable: boolean = false;

  constructor(private uploadService: UploadService,
    public dialog: MatDialog) {
  }

  displayedColumns: string[] = ['taskId', 'showNumber'];
  displayedColumnsForTaskId: string[] = ['taskId', 'phoneNumber', 'uploadedDate'];

  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }

  upload(): void {
    if (this.file) {
      this.uploadService.uploadfile(this.file).subscribe((resp: any) => {
        alert("Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }
  fetch(event: any): void {

    if (event.tab.textLabel == "Select") {
      this.uploadService.getAllData().subscribe((resp: any) => {
        this.datasource = resp;
      });
    }
    else {
      this.showTable = false;
    }

  }
  showNumbers(event: any): void {
    this.showTable = false;
    this.uploadService.getTaskIdNumbers(event).subscribe((resp: any) => {
      this.dataNumberSource = resp;
      this.showTable = true;
    })
  }

  deleteNumbers(event: any): void {
    this.uploadService.deleteTaskById(event).subscribe((resp: any) => {
      alert("Successful");
    })
  }
}


