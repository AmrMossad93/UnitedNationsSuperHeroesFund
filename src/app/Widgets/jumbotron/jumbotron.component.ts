import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() description: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
