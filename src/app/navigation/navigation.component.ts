import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';

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

    if (window.innerWidth <= 720) {
      this.navInner.nativeElement.style.display = 'none';
      this.isBars = true;
    }
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

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    if (window.innerWidth > 720) {
      this.navInner.nativeElement.style.display = 'flex';
      this.isBars = true;

    } else {
      this.navInner.nativeElement.style.display = 'none';
    }



  }
}
