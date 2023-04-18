import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Idata } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
dataUrl = `${environment.baseurl}`
  constructor(private http :HttpClient) { }

  getAlldata(){
    return this.http.get<Idata[]>(this.dataUrl)
  }
  
  getsingledata(id : number){
    let singleUrl = `${this.dataUrl}/${id}`
    return this.http.get<Idata>(singleUrl)
  }
  
  postdata(book : Idata){
    return this.http.post<Idata>(this.dataUrl,book)
  }
  
  deletedata(id : number){
    let deleteUrl = `${this.dataUrl}/${id}`
    return this.http.delete<Idata>(deleteUrl)
  }
  
  updatedata(book : Idata,id :number){
    let patchUrl = `${this.dataUrl}/${id}`
    return this.http.patch<Idata>(patchUrl,book)
  }
}
