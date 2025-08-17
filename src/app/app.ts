import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterOutlet, RouterLink } from '@angular/router';
@
Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    MatButtonModule, 
    MatToolbarModule, 
    RouterOutlet, 
    RouterLink
  
  ],

  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class AppComponent {}
