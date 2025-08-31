import { Routes } from '@angular/router';
import { AppComponent } from './app';
import { Navbar } from './components/navbar/navbar';
import { Consulta } from './components/consulta/consulta';
import { Cadastro } from './components/cadastro/cadastro';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'inicio', component: Navbar },
    { path: 'Consulta', component: Consulta},
    { path: 'Cadastro', component: Cadastro}
];

