import { Component, OnInit } from '@angular/core';
import { SignupForm } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: SignupForm = {
    name: '',
    surname: '',
    email: '',
    password: '',
    repeatedPassword: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  submit() {
    this.authService.register(this.form);;
  }

  isLoading(){
    return this.authService.isLoading;
  }
}
