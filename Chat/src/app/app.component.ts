import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajesComponent } from "./mensajes/mensajes.component";
import { UserMessage } from './models/userMessage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MensajesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chat';

  mensajes : UserMessage[] = [];


  public obtenerMensajesPepe(mensaje1 : UserMessage){
    this.mensajes.push(mensaje1);
  
  }

  public obtenerMensajesMaria(mensaje2 : UserMessage){
    this.mensajes.push(mensaje2);
  
  }

}
