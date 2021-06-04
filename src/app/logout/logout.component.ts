import { Component, OnInit } from '@angular/core';
import { AutenticazioneAppService } from '../services/autenticazione-app.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private SimpleLogout : AutenticazioneAppService) { }

  ngOnInit(): void {
    this.SimpleLogout.clearAll()

  }

}
