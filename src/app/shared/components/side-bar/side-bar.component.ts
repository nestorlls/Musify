import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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
        router: ['/', 'history'],
      },
      {
        name: 'Your Library',
        icon: 'uil uil-music',
        router: ['/', 'tracks'],
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
        router: ['/', 'favorites'],
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

  goTo($event: any) {
    $event.preventDefault();
    this.router.navigate(['/', 'favorites']);
  }
}
