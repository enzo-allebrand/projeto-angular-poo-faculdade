import { Routes } from '@angular/router';
import { Conta } from './conta/conta';
import { Pagina1 } from './pagina1/pagina1';

export const routes: Routes = [
  { path: 'pagina1', component: Pagina1 },
  { path: 'conta', component: Conta },
];
