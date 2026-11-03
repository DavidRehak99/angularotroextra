import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu-component/menu-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { ApiFilesComponent } from './components/api-files-component/api-files-component';
import { UploadComponent } from './components/subir-component/subir-component';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';

const routes: Routes = [
  
  { path: '', component: ApiFilesComponent },
  { path: 'informes', component: InformesPdfComponent },
  { path: 'cosa', component: UploadComponent },
  { path: 'equipos', component: EquipoComponent },
  { path: 'error', component: ErrorComponent },
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
