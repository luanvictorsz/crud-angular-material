import { Routes } from '@angular/router';
import { Consulta } from './components/consulta/consulta';
import { Cadastro } from './components/cadastro/cadastro';
import { Inicio } from './view/user/inicio/inicio';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'Inicio', component: Inicio },
    { path: 'Consulta', component: Consulta},
    { path: 'Cadastro', component: Cadastro}
]