import { Routes } from '@angular/router';
import { AppComponent } from './app';
import { Consulta } from './components/consulta/consulta';
import { Cadastro } from './components/cadastro/cadastro';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'Inicio', component: AppComponent },
    { path: 'Consulta', component: Consulta},
    { path: 'Cadastro', component: Cadastro}
];

