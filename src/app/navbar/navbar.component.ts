import { Component, OnInit } from '@angular/core';
import { AutenticazioneAppService } from '../services/autenticazione-app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public SimpleAut : AutenticazioneAppService) { }

  ngOnInit(): void {
  }

}
