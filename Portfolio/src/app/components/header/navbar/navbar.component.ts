import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    let link: string = '';
    if (window.location.href.includes('projects')) {
      link = 'projects';
    } else if (window.location.href.includes('about')) {
      link = 'about';
    } else if (window.location.href.includes('services')) {
      link = 'services';
    } else if (window.location.href.includes('companies')) {
      link = 'companies';
    }

    const navLink = document.getElementById(`${link}-link`);
    const navMenuLink = document.getElementById(`${link}-menu-link`);
    navLink.classList.add('active');
    navMenuLink.classList.add('active');
  }

  SelectActiveLink(ListId: string, target: EventTarget | null): void {
    if (target instanceof HTMLElement) {
      let anchor = target as HTMLAnchorElement;
      var ul = document.getElementById(ListId);
      var links = ul?.getElementsByTagName('a');

      if (links) {
        for (let i = 0; i < links.length; i++) {
          let element = links[i];
          element.classList.remove('active');
        }
      }

      anchor.classList.add('active');
      if (window.innerWidth < 930) {
        this.ToggleMenu();
      }
    }
  }

  ToggleMenu(): void {
      let imgElement = document.getElementById('burger-icon') as HTMLImageElement;
      let menuContainer = document.getElementById('menu-container');
      if (menuContainer?.classList.contains('hidden')) {
        menuContainer.classList.remove('hidden');
        imgElement.src = '../../../../assets/img/icon/white-x.png';
      } else {
        menuContainer?.classList.add('hidden');
        imgElement.src = '../../../../assets/img/icon/burger-white.png';
      }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let menuContainer = document.getElementById('menu-container');
    let imgElement = document.getElementById('burger-icon') as HTMLImageElement;
    if (window.innerWidth > 930 && imgElement) {
      menuContainer?.classList.add('hidden');
      imgElement.src = '../../../../assets/img/icon/burger-white.png';
    }
  }
}
