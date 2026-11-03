import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FileModel } from "../models/filemodel";
import { firstValueFrom, Observable } from "rxjs";
import { environment } from "../environments/environment,development";
import { Equipo } from "../models/equipo";

@Injectable()
export class ServiceEquipos {
    constructor(private _http: HttpClient){}

    async getEquipos(): Promise<Equipo[]> {
        let request = "api/equipos";
        let url = environment.ApiEquipos + request;
        return firstValueFrom(this._http.get<Equipo[]>(url));
    }

    
}