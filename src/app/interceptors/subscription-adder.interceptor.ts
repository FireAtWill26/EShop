import { HttpInterceptorFn } from '@angular/common/http';

export const subscriptionAdderInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
