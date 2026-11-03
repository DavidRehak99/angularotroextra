import { ChangeDetectorRef } from "@angular/core";
import { FileModel } from "../../models/filemodel";
import { FilesService } from "../../services/service.archivo";

export class ApiFilesComponent {    
    public fileModel: FileModel = new FileModel('', '');
    public fileContent: string = '';
    public mensaje: string = '';

    constructor(
        private _cdr: ChangeDetectorRef,
        private _service: FilesService
    ){}

    uploadFile(): void{
        let file = this.cajafile.nativeElement.files[0];
        let miPath = this.cajafile.nativeElement.value.split('\\');

        let fileName = miPath[2];
        let reader = new FileReader();
        reader.onloadend = () => {
            let buffer : ArrayBuffer;
            buffer = reader.result as ArrayBuffer;
            let base64: string;
            base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
            this.fileModel = new FileModel(fileName, base64);
            this._service.postfile(file).subscribe(
                (response) => {
                   this.mensaje = 'Archivo subido correctamente.';
                   this.urlFile = response.url;
                   this._cdr.detectChanges(); 
                },
                (error) => {
                    console.error('Error al subir el archivo:', error);
                }
            );
            
        }
        
        reader.readAsArrayBuffer(file);
    }
}