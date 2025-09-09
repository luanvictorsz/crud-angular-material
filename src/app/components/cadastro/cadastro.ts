import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms'
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-cadastro',
  standalone: true,   
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    Navbar
  ],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'] 
})
export class Cadastro {}
