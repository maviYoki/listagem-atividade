import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaComponent } from './lista/lista.component';
import { MatTableModule } from '@angular/material/table';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ListaComponent],
  imports: [BrowserModule, AppRoutingModule, MatTableModule],
  providers: [provideAnimationsAsync(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
