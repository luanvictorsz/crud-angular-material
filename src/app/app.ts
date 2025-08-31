import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterOutlet, RouterLink } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
@
Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatToolbarModule,
    Navbar
],

  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class AppComponent {
  protected readonly title = signal('Cadastro de clientes')
}