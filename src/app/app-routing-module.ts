import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu-component/menu-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { ApiFilesComponent } from './components/api-files-component/api-files-component';

const routes: Routes = [
  
  { path: '', component: ApiFilesComponent },
  { path: 'informes', component: InformesPdfComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
