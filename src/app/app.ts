import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterOutlet } from '@angular/router';

@
Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatToolbarModule,
    RouterOutlet
],

  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('Cadastro de clientes')
}
