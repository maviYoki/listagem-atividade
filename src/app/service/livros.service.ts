import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivrosInterface } from '../model/livros';

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  listar(): Observable<LivrosInterface[]> {
    return this.http.get<LivrosInterface[]>('livros.json');
  }
  constructor(private http: HttpClient) {}
}
