import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'ngx-yet-another-toast-library';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService : ToastService = inject(ToastService); 
  const _router: Router= inject(Router);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error en la solicitud HTTP:', error.status);
      toastService.error(error.message);
      _router.navigate(['/error']);
      return throwError(() => new Error('Ocurrió un error en la solicitud HTTP.')); // Puedes personalizar el mensaje de error según tus necesidades
    })
  );
};
