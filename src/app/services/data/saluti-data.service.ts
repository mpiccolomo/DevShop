import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

  constructor(private httpClient : HttpClient) { }

  getSaluti(nome: string) {
    //console.log("Saluti");

    return this.httpClient.get(`http://localhost:8050//api/saluti/${nome}`); //ALT + 0096 | ALT GR + '
  }
}
