import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public navigateMenu(route: string): void {
    switch (route) {
      case 'register':
        this.router.navigate(['/register']);
        break;
      case 'consult':
        this.router.navigate(['/consult']);
        break;
      default:
        this.router.navigate(['/register']);
        break;
    }
  }

}
