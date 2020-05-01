import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  safeURL: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer) {
    const link = 'RRNYkMa3sQU';
    const videoUrl = `https://www.youtube.com/embed/${link}`;
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  ngOnInit() {
  }

}
