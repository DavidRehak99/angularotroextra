import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment,development';
@Injectable()


export class FilesService {


  constructor(private http: HttpClient) {}

  postfile(file: File): Observable<any> {
    let json = JSON.stringify(file);
    
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let request ="api/testingfiles";
    let url= environment.ApiEmpleados + request;
    return this.http.post(url, json, { headers: headers });

}
}