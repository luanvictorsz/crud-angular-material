import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from '../components/Interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientesSubject = new BehaviorSubject<Cliente[]>([
    { code: 'C001', name: 'João Silva', category: 'Premium', quantity: 3 },
    { code: 'C002', name: 'Maria Oliveira', category: 'Básico', quantity: 1 },
    { code: 'C003', name: 'Carlos Souza', category: 'Gold', quantity: 2 },
    { code: 'C004', name: 'Ana Santos', category: 'Platinum', quantity: 5 }
  ]);

  clientes$ = this.clientesSubject.asObservable();

  get clientes() {
    return this.clientesSubject.value;
  }

  adicionar(cliente: Cliente) {
    this.clientesSubject.next([...this.clientes, cliente]);
  }
}
