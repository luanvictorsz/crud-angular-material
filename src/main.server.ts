import { bootstrapApplication } from '@angular/platform-browser';
import { app } from './app/app';
import { appConfig } from './app/app.config';

const bootstrap = () => bootstrapApplication(app, appConfig);

export default bootstrap;
