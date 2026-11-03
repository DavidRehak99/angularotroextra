import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu-component/menu-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { ApiFilesComponent } from './components/api-files-component/api-files-component';
import { FilesService } from './services/service.archivo';
import { errorInterceptor } from './interceptors/error-interceptor';
import { provideToastService } from 'ngx-yet-another-toast-library';

@NgModule({
  declarations: [App, MenuComponent, InformesPdfComponent,ApiFilesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(withInterceptors([errorInterceptor])), FilesService, provideToastService()],
  bootstrap: [App],
})
export class AppModule {}
