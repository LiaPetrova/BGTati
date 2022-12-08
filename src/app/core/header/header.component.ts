import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logoutHandler() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

}
