import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { LoaderService } from '../shared/loader/loader.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  uploader: FileUploader;
  hasFileOverDropZone: boolean = false;

  constructor(private loaderService: LoaderService) {
    var api = `${environment.api}api/stat/import`;
    this.uploader = new FileUploader({ url: api })
  }

  

  ngOnInit() {
    this.uploader.onCompleteAll = () => {
      this.loaderService.hide();
    }
  }

  fileOverDropZone(e: any): void {
    this.hasFileOverDropZone = e;
  }

  uploadButtonDisabled() {
    var q = this.uploader.queue;
    return !q.length
      || q[0].isReady
      || q[0].isUploading
      || q[0].isSuccess;
  }

  upload() {
    var q = this.uploader.queue;
    this.loaderService.show();
    return q.length ? q[0].upload() : (noop) => noop;
  }

}
