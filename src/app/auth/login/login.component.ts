import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
// import { MessageBusService, MessageType } from 'src/app/core/message-bus.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  showErrorInControl(controlName: string, sourceGroup: FormGroup = this.loginFormGroup) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // private messageBus: MessageBusService
    ) { }

  ngOnInit(): void {
  }


  handleLogin(): void {
    const { email, password } = this.loginFormGroup.value;
    this.authService.login$(email, password).subscribe({
      next: user => {
        // console.log(user);
        if(this.activatedRoute.snapshot.queryParams['redirect-to']) {
          this.router.navigateByUrl(this.activatedRoute.snapshot.queryParams['redirect-to']);
        } else {
          this.router.navigate(['/home']);
        }

        // this.messageBus.notifyForMessage({ text: 'User successfully logged in', type: MessageType.Success})
      },
      complete: () => {
        // console.log('login completed');
      },
      error: (err)=> {
        this.errorMessage = err.message
        console.log(this.errorMessage);
        
      }
    });
  }



}
