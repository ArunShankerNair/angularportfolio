import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  name:string="ARUN SHANKER"   //string interpolation (one way databinding technique)
  ProfileTitle:string="FullStack Developer"
  ProfilePicture="../../assets/images/ARUN2023.png"
}
