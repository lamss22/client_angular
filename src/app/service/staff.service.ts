import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

  getStaff():Observable<any>{
    return this.http.get<any>("http://localhost:58852/api/staff");
  }

  addStaff(staff:Staff):Observable<any>{
    return this.http.post<any>("http://localhost:58852/api/staff/add", staff);
  }

  updateStaff(id: number, staff: Staff):Observable<any>{
    return this.http.put<any>("http://localhost:58852/api/staff/update/"+id, staff);
  }

  deleteStaff(id:number):Observable<any>{
    return this.http.delete<any>("http://localhost:58852/api/staff/delete/"+id);
  }
}
