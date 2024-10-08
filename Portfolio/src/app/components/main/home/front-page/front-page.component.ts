import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements AfterViewInit {

  @ViewChild('typedOutput') typedOutput!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
      const options = {
        strings: ['front-End', 'back-end', 'web', 'desktop', 'full-stack'],
        typeSpeed: 150,
        startDelay: 300,
        backSpeed: 150,
        shuffle: false,
        smartBackspace: true,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html'
      };

      const typed = new Typed(this.typedOutput.nativeElement, options);
  }
}
