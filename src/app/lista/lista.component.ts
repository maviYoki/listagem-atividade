import { Component, OnInit } from '@angular/core';
import { LivrosInterface } from '../model/livros';
import { LivrosService } from '../service/livros.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent implements OnInit {
  listaLivros: Observable<LivrosInterface[]>;

  displayedColumns = ['titulo', 'autor'];

  constructor(private livrosService: LivrosService) {
    this.listaLivros = this.livrosService.listar();
  }

  ngOnInit(): void {}
}
