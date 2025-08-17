import { Routes } from '@angular/router';
import { PageComponent } from './components/page-component/page-component';
import { Consulta } from './components/consulta/consulta';
import { Cadastro } from './components/cadastro/cadastro';

export const routes: Routes = [
    { path: '', component: PageComponent },
    { path: 'page', component: PageComponent },
    { path: 'consulta', component: Consulta},
    { path: 'cadastro', component: Cadastro}
];

