import { HttpInterceptorFn } from '@angular/common/http';

export const nombreInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
