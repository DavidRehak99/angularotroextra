import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { FilesService } from '../../services/service.archivo';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-subir-component',
  standalone: false,
  styleUrl: './subir-component.css',
  templateUrl: './subir-component.html',
})
export class UploadComponent {
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  
  isUploading: boolean = false;
  uploadSuccess: boolean = false;
  uploadedFileInfo: any = null;
  errorMessage: string = '';

  constructor(private _filesService: FilesService) {}

  // Captura el archivo seleccionado e ingresa una vista previa local
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.uploadSuccess = false;
      this.errorMessage = '';

      // Generar vista previa
      const reader = new FileReader();
      reader.onload = () => (this.previewUrl = reader.result);
      reader.readAsDataURL(file);
    }
  }

  // Sube el archivo a la API
  async upload(): Promise<void> {
    if (!this.selectedFile) return;

    this.isUploading = true;
    this.uploadSuccess = false;
    this.errorMessage = '';

    try {
      // Enviamos la petición a la API
      const response = await lastValueFrom(this._filesService.postfile(this.selectedFile));
      
      this.uploadSuccess = true;
      this.uploadedFileInfo = response; // Guardamos la respuesta devuelta por la API
    } catch (error: any) {
      this.errorMessage = 'Ocurrió un error al subir la imagen a la API.';
      console.error(error);
    } finally {
      this.isUploading = false;
    }
  }
}