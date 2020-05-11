import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() isChosen: string;
  @Input() isLoggedIn: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isChosen = localStorage.getItem('path');
  }

  chosen(path) {
    localStorage.setItem('path', path);
    this.isChosen = path;
  }
}
