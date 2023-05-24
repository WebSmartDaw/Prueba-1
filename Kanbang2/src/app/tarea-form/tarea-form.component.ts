import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../models/tarea-model';
import { k_PENDIENTES_LISTA } from '../app.component';
import { k_PROGRESO_LISTA } from '../app.component';
import { k_FINALIZADAS_LISTA } from '../app.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario-model';


@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent {
  @Input() tarea?: Tarea;
  @Input() tareas?: Tarea[];


  @Output() devuelvetareas: EventEmitter<Tarea> = new EventEmitter<Tarea>();
  @Output() cancelar: EventEmitter<Tarea> = new EventEmitter<Tarea>();

  k_PENDIENTES_LISTA1: string = k_PENDIENTES_LISTA;
  k_PROGRESO_LISTA1: string = k_PROGRESO_LISTA;
  k_FINALIZADAS_LISTA1: string = k_FINALIZADAS_LISTA;

  loginForm: FormGroup | undefined;
  usua: Usuario[] = [];

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: [-1],
      titulo: ['', [Validators.required]],
      lista: ['', [Validators.required]],
      fechaFin: [''],
      img: [''],
      usuarios: [this.usua]


    }

    );
    // this.loadApi();
  }
  /*loadApi():any{
    const response={
      titulo: 'asds',
      lista: 'tareapasada.lista',
      fechaFin: 12/12/2003,
      img: 'tareapasada.img',
      usuarios: 'tareapasada.usuarios'
    };

      this.loginForm?.patchValue(response);


  }*/

  visible: boolean = true
  onclick() {

    this.cancelar.emit();
  }
  guardar() {

    this.devuelvetareas.emit(this.loginForm?.value);

  }

  mas() {
    if (this.usua.length <= 1) {
      var jsonTexto = '{"email": "sjdahg@ilerna.com", "img":"https://picsum.photos/300/300", "nick": "Pau", "alt":"Usuario"}';
      var usu = JSON.parse(jsonTexto);
      this.usua.push(usu);
      for (let index = 0; index < this.usua.length; index++) {

      }
    } else {

    }

  }

  deleteusuario() {
    this.usua.pop();
  }




}
