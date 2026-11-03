import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FilesService } from '../../services/service.archivo';
import { FileModel } from '../../models/filemodel';

@Component({
  selector: 'app-api-files-component',
  standalone: false,
  styleUrl: './api-files-component.css',
  templateUrl: './api-files-component.html',
})
export class ApiFilesComponent {
  public urlFile!: string;
  public mensaje!: string;
  @ViewChild("cajafile") cajafile!: ElementRef;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: FilesService
  ){}

  uploadFile(): void {
    const file: File = this.cajafile.nativeElement.files[0];
    if (!file) return;

    // Obtenemos el nombre directamente del objeto File nativo
    const fileName = file.name;
    const reader = new FileReader();

    reader.onloadend = () => {
      const buffer = reader.result as ArrayBuffer;
      const base64 = btoa(
        new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );

      const fileModel = new FileModel(fileName, base64);

      this._service.postFile(fileModel).subscribe({
        next: (response) => {
          this.mensaje = "Fichero subido correctamente";
          console.log(response);
          this.urlFile = response.urlFile;
          this._cdr.detectChanges();
        },
        error: (err) => console.error(err)
      });
    };

    reader.readAsArrayBuffer(file);
  }
}