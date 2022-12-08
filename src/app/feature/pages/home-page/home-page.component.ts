import { Component, OnInit } from '@angular/core';
import { Observable, pipe, tap } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IUser } from 'src/app/core/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  currentuser$ = this.authService.currentUser$;

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
