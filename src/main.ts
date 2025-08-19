import { bootstrapApplication } from '@angular/platform-browser';
import { app } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(app, config);

export default bootstrap;