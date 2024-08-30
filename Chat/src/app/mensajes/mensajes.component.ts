import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserMessage } from '../models/userMessage';


@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent {

  @Output() mensajeUser1 = new EventEmitter<UserMessage>();
  @Output() mensajeUser2 = new EventEmitter<UserMessage>();

  userName1 = "Pepe"
  userName2 = "Maria"

  mensajePepe = ""
  mensajeMaria = ""

  
  public enviarUser1(): void {

    const mensajePepe: UserMessage = {
      user :  this.userName1,
      mensaje: this.mensajePepe
    }

    this.mensajeUser1.emit(mensajePepe);
  }

  public enviarUser2(){
    
    const mensajeMaria : UserMessage ={
      user : this.userName2,
      mensaje : this.mensajeMaria
    }

    this.mensajeUser2.emit(mensajeMaria)
  }

}
