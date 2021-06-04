import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AutenticazioneAppService } from './autenticazione-app.service';

@Injectable({
  providedIn: 'root'
})

/*questo servizio serve a controllare il route della navigazione del sito in base alle autenticazioni
implementare l'interfaccia canActivate che riguarda Angular router!!! */
export class RouteGuardService implements CanActivate {

/* verifica se l'utente è loggato verifica per accedere a determinate rotte (pagine) vado ad implementera
il servizio in app-routing.module nel path welcome e per tutti i path che voglio proteggere/controllare
 inserisco li il controllo --->
 canActivate : [RouteGuardService]} <-- in questo modo  */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(!this.SimpleAut.isLogged())
    {
     this.route.navigate(['login']);
          return false ;
    }
    else
    {
    return true ;
    }
  }

/*ignetto il service AutenticazioneAppService in questo service */
  constructor( private SimpleAut : AutenticazioneAppService, private route : Router) { }


}
