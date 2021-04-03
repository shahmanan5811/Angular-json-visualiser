import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  obj;
  fileLoaded: boolean = false;
  fileLoadError: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  async onFileSelected(event) {
    await this.onFileSelectedSub(event);
    if (!this.fileLoadError) {
      this.fileLoaded = true;      
    }
  }
  async onFileSelectedSub(event: any) {
    var that = this;
    var reader = new FileReader(); // File reader to read the file 
    // This event listener will happen when the reader has read the file
    reader.addEventListener('load', function () {
      try {
        that.fileLoadError = false;
        that.fileLoaded = true;
        var result = JSON.parse(reader.result as string); // Parse the result into an object 
        that.obj = result;
      } catch (error) {
        that.fileLoadError = true;
        that.fileLoaded = false;
      }
    });

    reader.readAsText(event.target.files[0]); // Read the uploaded file
  }


}