import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ClienteService } from '../../Services/Clientes.service';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-consulta',
  imports: [TableModule, AsyncPipe],
  templateUrl: './consulta.html',
  styleUrl: './consulta.css'
})
export class Consulta {
  constructor(private clienteService: ClienteService) {}

  get clientes$() {
    return this.clienteService.clientes$;
  }
}
