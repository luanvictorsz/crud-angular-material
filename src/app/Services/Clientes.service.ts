import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from '../components/Interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientesSubject = new BehaviorSubject<Cliente[]>([]);
  clientes$ = this.clientesSubject.asObservable();

  get clientes() {
    return this.clientesSubject.value;
  }

  adicionar(cliente: Cliente) {
    this.clientesSubject.next([...this.clientes, cliente]);
  }
}
