import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  isUploadDisabled: boolean = false;

  @ViewChild('uploadEl') uploadElRef: ElementRef

  constructor(private loaderService: LoaderService) {
    var api = `${environment.api}api/stat/import`;
    this.uploader = new FileUploader({ url: api, queueLimit: 1, autoUpload: true })
  }

  ngOnInit() {
    this.uploader.onCompleteAll = () => {
      this.isUploadDisabled = false;
      this.loaderService.hide();
      this.uploader.clearQueue();
    }
    this.uploader.onBeforeUploadItem = () => {
      this.isUploadDisabled = true;
      this.loaderService.show();
    }
  }

  ngAfterViewInit() {
    this.uploader.onAfterAddingFile = () => {
      this.uploadElRef.nativeElement.value = ''
    };
  }

  fileOverDropZone(e: any): void {
    this.hasFileOverDropZone = e;
  }

}
