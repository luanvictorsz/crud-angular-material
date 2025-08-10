import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  standalone: true,
  selector: 'app-page-component',
  imports: [AvatarModule, AvatarGroupModule],
  templateUrl: './page-component.html',
  styleUrl: './page-component.css'
})
export class PageComponent {

}
