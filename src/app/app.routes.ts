import { Routes } from '@angular/router';
import { AppComponent } from './app';
import { Consulta } from './components/consulta/consulta';
import { Cadastro } from './components/cadastro/cadastro';
import { Inicio } from './view/user/inicio/inicio';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'Inicio', component: Inicio },
    { path: 'Consulta', component: Consulta},
    { path: 'Cadastro', component: Cadastro}
];

