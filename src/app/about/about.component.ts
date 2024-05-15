import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutImageUrl:string="../../assets/images/ARUN2023.png"

  user={

    name:"Arun Shanker",

    degree:"B.Tech",

    dob:"JULY 15 1994",

    phone:"+91-9061516314",

    email:"arun.shanker@gmail.com",

    address:"Chaithanya(H),Canal Side, South Gate, Vaikom PO, Vaikom,Kotttayam,Kerala,India. PIN:686141",

    freelance:"Available",

    experience:"8 years"

  }
}
