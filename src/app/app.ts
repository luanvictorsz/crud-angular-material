import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from "@angular/router"; 

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',  
  styleUrls: ['./app.css'],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    Navbar,
    RouterOutlet
]
})
export class AppComponent {}
