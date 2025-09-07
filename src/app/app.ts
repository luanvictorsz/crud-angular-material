import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { Navbar } from "./components/navbar/navbar";
import { User } from "./view/user/user";
@
Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatToolbarModule,
    Navbar,
    User
],

  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('Cadastro de clientes')
}
