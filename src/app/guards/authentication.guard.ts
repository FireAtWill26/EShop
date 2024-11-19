import { CanActivateChildFn } from '@angular/router';

export const authenticationGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
