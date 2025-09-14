import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { ButtonModule } from "primeng/button";

import { ClienteService } from '../../Services/Clientes.service'; 
import { Cliente } from '../Interfaces/Cliente';

@Component({
  standalone: true,
  selector: 'app-cadastro',
  imports: [
    InputTextModule,
    DividerModule,
    ButtonModule,
    FormsModule,
    CardModule,
  ],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class Cadastro {
  nome = '';
  codigo = '';

  constructor(private clienteService: ClienteService) {}

  registrar() {
    const novoCliente: Cliente = {
      code: this.codigo,
      name: this.nome,
      category: 'Default',
      quantity: 1
    };

    this.clienteService.adicionar(novoCliente);

    this.nome = '';
    this.codigo = '';
  }
}
