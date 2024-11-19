import { HttpInterceptorFn } from '@angular/common/http';

export const jwtAdderInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
