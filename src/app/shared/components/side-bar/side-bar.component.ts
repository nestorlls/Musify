import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  mainMenu: {
    defaultOptions: any[];
    accessLink: any[];
  } = {
    defaultOptions: [],
    accessLink: [],
  };

  customOptions: any[] = [];

  ngOnInit() {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/'],
      },
      {
        name: 'Search',
        icon: 'uil uil-search',
        router: ['/search'],
      },
      {
        name: 'Your Library',
        icon: 'uil uil-music',
        router: ['/library'],
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Create Playlist',
        icon: 'uil uil-plus',
      },
      {
        name: 'Favorites',
        icon: 'uil uil-heart',
      },
    ];

    this.customOptions = [
      {
        name: 'My 1° song',
        router: ['/'],
      },
      {
        name: 'My 2° song',
        router: ['/'],
      },
      {
        name: 'My 3° song',
        router: ['/'],
      },
    ];
  }
}
