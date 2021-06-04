import { Injectable } from '@angular/core';

/**questo service sovraintende all'autenticazioni notare la notazione @Injectable ci dice che
 * questo elemento è ignettabile in altri componenti in questo caso sarà fatto per la login.component.ts
 * creo un metodo che sarà ignettato nel constructor() del metodo scritto in login.component.ts
 * creo una variabile private che chiamerò col nome del servizio--> "SimpleAut: AutenticazioneAppService"
 *  e la dichiaro appunto nel constructor()
 * I SERVICES SI BASANO SUL "COD IJECTION"(nel costruttore posso aggiungere altri metodi o servizi
 * da richiamare se devono essere utilizzati)
 */


@Injectable({
  providedIn: 'root'
})
export class AutenticazioneAppService {

  constructor() { }

  autentica(UserId: string, Password: string){
    if (UserId === 'Marco' && Password === '123ciao') {
      /*sessionStorage.setItem---> in questo modo se la psw e utente sono corretti
      salviamo l'utente loggato  e metteremo in piedi una session tramite una chiave e valore il questo caso proprio "UserId"
      tutto questo fino a quando non verrà effettuato il logout (in questo caso) per la verifica in modalità sviluppo
      andare ne gruppo application ci saranno la chiave ed il valore memorizzati nello station storage */
      sessionStorage.setItem("Utente",UserId)
      return true;
      }else {
      return false;
    }
  }
  /* l'injection per questi metodi di questo AutenticazioneAppService l'ho fatta in navBar.component.ts ed il resto dell'implementezione
  è nel cod di navBar.component.html perchè il navigation Bar viene riavviato tutte le volte
  che si avvia l'applicazione ma da una pagina a l'altra usando il rute non si esegue il refresh
  quindi lo stato della navigation bar non cambierebbe e voglio ci sia il nome dell'utente loggato
  quindi richiamo questi metodi nel codice html ma faccio injection del service come ho scritto prima*/

  /* questo metodo restituisce il nome utente memorizzato nel sessionStorage  */
  loggedUser(){
    /* dichiaro 1 variabile con let all'interno di un metodo come "var" */
    let utente = sessionStorage.getItem("Utente");
    /* operatore ternario se il nome Utente è !null restituisce il valore nella mia variabile Utente oppure stringa vuota */
    return (sessionStorage.getItem("Utente") != null) ? utente : "";
  }
     /* questo meto boolean con operatorev ternario determina se utente è presente e quindi il suo stato sarà loggato */
     isLogged(){
       return (sessionStorage.getItem("Utente") != null) ? true : false ;
     }
     /* metodo per cancellare le iformazione che abbiamo salvato nello sessionStorage
     in questo caso l'Utente loggato quindi userò "removeItem" per un singolo elemento per tutti gli elementi
     si può usare clear (farò poi l'injection di AutenticazioneAppService nel costruttore di logout.component.ts  passondogli
      questo metodo clearAll() nel metodo ---> ngOnInit(): void {...} */
     clearAll() {
      sessionStorage.removeItem("Utente");
      /* il metodo clearAll()  metodo può essere scritto anche con un arrow function
      clearAll =() => sessionStorage.removeItem("Utente");  anche isLoged() se sono metodi mono riga
      tolgo le parentesi graffe mentr  per loggedUser = () => {..} sarà così
      */
    }
}
