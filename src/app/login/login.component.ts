import { Component, DestroyRef, Inject, inject, OnInit } from '@angular/core';
import { AuthdbService } from '../authdb.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

let inicialEmail:string = ''
const savedEmail = window.localStorage.getItem('saved-longin-email')
if(savedEmail){
  const loadEmail = JSON.parse(savedEmail)
  inicialEmail = loadEmail.email
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(inicialEmail, {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  private destroyRef = inject(DestroyRef);
  
  constructor(private auth : AuthdbService, private router: Router,private auth0:AuthService){
    this.auth0.isAuthenticated$.subscribe(isAuthenticade =>{
      if(isAuthenticade){
       this.receiveAuthToket()
      }
    })
  }

  
  get invalidEmail (){
    return (
     this.form.controls.email.touched && 
     this.form.controls.email.dirty && 
     this.form.controls.email.invalid)
   }
 
   get invalidPassword (){
     return (
      this.form.controls.password.touched && 
      this.form.controls.password.dirty && 
      this.form.controls.password.invalid)
    }

  ngOnInit(): void {
    const subscribe = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => {
        const email = value.email || ''; 
        window.localStorage.setItem('saved-longin-email', JSON.stringify({ email }));
      },
    });

    this.destroyRef.onDestroy(() => subscribe.unsubscribe());
  }



  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const email = this.form.get('email')?.value || '';
    const password = this.form.get('password')?.value || '';

    if (!email || !password) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    this.auth.login(email, password).subscribe((success) => {
      if (success) {
        alert('Você está logado');
        this.router.navigate([''])
       
      } else {
        alert('Credenciais inválidas');
      }
    });
  }

  LoginSocial(){
    this.auth0.loginWithRedirect()
  }

  private receiveAuthToket(){
    this.auth0.getAccessTokenSilently().subscribe({
      next: (token) => {
        console.log('token recebido',token);
        window.localStorage.setItem('auth-token',token);
        this.router.navigate(['']);
      },
      error:(err) => {
        console.error("erro no token", err)
      }
    })
  }
  sair(){
    this.auth0.logout()
  }
}
