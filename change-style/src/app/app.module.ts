import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextoformatterComponent } from './textoformatter/textoformatter.component';
import { FormsModule } from '@angular/forms'; // Sin esto no me funcionaban el tema de los input

@NgModule({
  declarations: [
    AppComponent,
    TextoformatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
