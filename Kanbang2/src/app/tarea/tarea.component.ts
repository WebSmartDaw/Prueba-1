import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea-model';
import { DatePipe } from '@angular/common';
import { k_PENDIENTES_LISTA } from '../app.component';
import { k_PROGRESO_LISTA } from '../app.component';
import { k_FINALIZADAS_LISTA } from '../app.component';


const k_PENDIENTES_LISTA1 = k_PENDIENTES_LISTA;
const k_PROGRESO_LISTA1 = k_PROGRESO_LISTA;
const k_FINALIZADAS_LISTA1 = k_FINALIZADAS_LISTA;


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
  providers: [DatePipe]
})
export class TareaComponent implements OnInit {

  @Input() tarea?: Tarea;

  constructor() {


  }

  ngOnInit(): void {
  }

  visible: boolean = true
  onclick() {
    if (this.visible == true) {
      this.visible = false;
    } else {
      this.visible = true;
    }

  }

  compuruebafecha(str: Date, titulo: string): string | undefined {
    const caducado = "caducado"
    const envigor = "envigor"
    const rapido = "rapido"
    const demas = "demas"

    const datenow = new Date();
    const datejson = new Date(str);

    const diahoy = Number(datenow.getDay);
    const diacad = Number(datejson.getDay);
    let total = 0;

    total = diacad - diahoy;

    if (total == 1) {
      return rapido;
    } else if (datenow > datejson && titulo == k_FINALIZADAS_LISTA1) {
      return envigor;
    } else if (datenow > datejson && titulo != k_FINALIZADAS_LISTA1) {
      return caducado;
    } else {
      return demas;
    }
  }


}
