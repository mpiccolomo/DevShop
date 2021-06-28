import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from '../services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  saluti = 'Benvenuti in Delivery Shop!';
  titolo2 = 'Seleziona gli articoli da acquistare';

  utente = '';
  messaggio = '';

  constructor(private route:ActivatedRoute, private salutiSrv: SalutiDataService ) { }

  ngOnInit(): void {

    this.utente = this.route.snapshot.params['userid'];

  }

  getSaluti() {
    //console.log(this.salutiSrv.getSaluti());

    this.salutiSrv.getSaluti(this.utente).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }
  handleError(error: { error: { message: string; }; }) {
    this.messaggio = error.error.message;
  }

  handleResponse(response: Object) {
    this.messaggio = response.toString();
    console.log(this.messaggio);
  }

}
