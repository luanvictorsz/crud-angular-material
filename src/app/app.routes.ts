import { Routes } from '@angular/router';
import { app } from './app';
import { Consulta } from './components/consulta/consulta';
import { Cadastro } from './components/cadastro/cadastro';

export const routes: Routes = [
    { path: '', component: app },
    { path: 'Consulta', component: Consulta},
    { path: 'Cadastro', component: Cadastro}
];

