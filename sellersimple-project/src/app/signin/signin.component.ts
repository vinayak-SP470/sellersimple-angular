import { Component, OnInit } from '@angular/core';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit{

  authUrl: string = '';
  constructor(private signinService: SigninService,private router: Router) {}

  ngOnInit(): void {
    this.getAmazonAuthUrl();
  }

  getAmazonAuthUrl(): void {
    this.signinService.login().subscribe(
      (response) => {
        this.authUrl = response.auth_url;
      },
      (error) => {
        console.error('Error fetching Amazon auth URL:', error);
      }
    );
  }
}