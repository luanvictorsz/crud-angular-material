import { Routes } from '@angular/router';
import { Page } from '././components/page/page';
import { App } from './app';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'page', component: Page },
];

