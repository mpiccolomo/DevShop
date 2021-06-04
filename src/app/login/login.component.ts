import { AutenticazioneAppService } from './../services/autenticazione-app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserId = ''
  Password = ''
  autenticato = true
  //consentito = false
  errorMsg = 'Spiacente, la userid o la password sono errati!'
  //infoMsg = 'Accesso Consentito'

  constructor(private route : Router, private SimpleAut: AutenticazioneAppService) { }

  ngOnInit() {
  }

  gestAutenticazioni() {

    if(this.SimpleAut.autentica(this.UserId,this.Password)){
      this.autenticato = true;
        this.route.navigate(['welcome', this.UserId])
    }else{
         this.autenticato = false;
         }

   /* if (this.userid === 'marco' && this.password === '123ciao') {
        this.autenticato = true;
        this.route.navigate(['welcome', this.userid])
        //this.consentito = true;
    }
    else {
        this.autenticato = false;
    */
    }

  }

