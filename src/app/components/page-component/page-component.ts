import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  standalone: true,
  selector: 'app-page-component',
  imports: [ MatButtonModule, MatToolbarModule],
  templateUrl: './page-component.html',
  styleUrl: './page-component.css'
})
export class PageComponent {

}
