import { Routes } from '@angular/router';
import { PageComponent } from './components/page-component/page-component';
import { App } from './app';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'page', component: PageComponent },
];

