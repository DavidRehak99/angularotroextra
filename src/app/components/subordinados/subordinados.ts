import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subordinados',
  standalone: false,
  styleUrl: './subordinados.css',
  templateUrl: './subordinados.html',
})
export class SubordinadosComponent implements OnInit {
  public empleados!: Array<Empleado>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados,
    private _router: Router
  ){}

  async ngOnInit(): Promise<void> {
    this.empleados = await this._service.getSubordinadosAsync();
    this._cdr.detectChanges();
    // if (sessionStorage.getItem("TOKEN") == null){
    //   this._router.navigate(["/login"])
    // }else{
    //   this.empleados = await this._service.getSubordinadosAsync();
    //   this._cdr.detectChanges();
    // }
  }
}