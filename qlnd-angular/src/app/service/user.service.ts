import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}  from '@angular/common/http'
import { Observable } from 'rxjs';
import { RegisterDTO } from '../dtos/register.dto';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:8080/api/v1/users/register";
  constructor(private Http: HttpClient) { }
  register(registerDTO:RegisterDTO):Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.Http.post(this.apiUrl,registerDTO,{headers});
  };
}
