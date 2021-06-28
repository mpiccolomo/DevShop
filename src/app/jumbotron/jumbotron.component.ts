import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  @Input() Titolo: any
  @Input() SottoTitolo: any
  @Input() Show: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
