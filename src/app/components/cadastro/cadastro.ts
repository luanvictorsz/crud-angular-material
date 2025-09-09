import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Navbar } from "../navbar/navbar";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import {  ButtonModule } from "primeng/button"

@Component({
  standalone: true,
  selector: 'app-cadastro',
  imports: [
    InputTextModule,
    DividerModule,
    ButtonModule,
    FormsModule,
    CardModule,
    Navbar
  ],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class Cadastro {}
