import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() isChosen: string;
  @Input() isLoggedIn: boolean;
  @ViewChild('navInner', {static: false}) navInner: ElementRef;
  isBars: boolean;

  constructor() {
    this.isBars = true;
  }

  ngOnInit() {
    this.isChosen = sessionStorage.getItem('path');
  }

  chosen(path) {
    sessionStorage.setItem('path', path);
    this.isChosen = path;
  }

  toggleNav() {
    if (this.isBars) {
      this.navInner.nativeElement.style.display = 'block';
      this.isBars = false;
    } else {
      this.navInner.nativeElement.style.display = 'none';
      this.isBars = true;
    }
  }
}
