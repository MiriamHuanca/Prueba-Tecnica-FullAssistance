import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';

@Component({
  templateUrl: './pages.component.html'
})
export class PagesComponent{

  constructor(private authService: AuthService) {
  }

  onLogout() {
    this.authService.logout();
  }
}
