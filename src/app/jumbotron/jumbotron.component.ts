import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

/* @Input() questa annotazione per queste variabili si usa quando quando il
valore delle variabili viene passato da un'altro controllo , (un controllo padre
utilizza il controllo figlio) in questo caso il component jumbotron per passargli questi elementi accedi_tit e registrati_sottot,
utilizzo quindi la notazione @Input() questo elemento non passerà per app.component ma nel Login
che sarà il suo controllo padre e jumbotron il figlio (vedi il component Login.html)
*/
  @Input() accedi_tit: any
  @Input() registrati_sottot: any
  @Input() ShowButton: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
