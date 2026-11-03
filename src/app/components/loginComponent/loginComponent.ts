import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Login } from '../../models/login';



@Component({
  selector: 'app-login',
  standalone: false,
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class LoginComponent implements OnInit {
  
  @ViewChild("cajauser") cajaUser!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;
  public mensaje!: string;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados
  ){}

  async logInEmpleado(): Promise<void>{
    console.log("LoginComponent.logInEmpleado()");
    let userName = this.cajaUser.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    sessionStorage.setItem("username", userName);
    sessionStorage.setItem("password", password);

    this.mensaje = "Ya estas dentro, a jugar";
    let usuario = new Login(userName, password);
    console.log(usuario);
    let respuesta = await this._service.logInEmpleadoAsync(usuario);
    console.log(respuesta);
    sessionStorage.setItem("TOKEN", respuesta.response);
    console.log("TOKEN: " + sessionStorage.getItem("TOKEN"));
    this._cdr.detectChanges();
  }

  logInEmpleadoObservable(): void {
    let userName = this.cajaUser.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    
    
  }

  ngOnInit(): void {
    
  }
}