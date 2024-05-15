import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  skills=[
    {name:"html",level:95},
    {name:"CSS",level:90},
    {name:"MySQL",level:85},
    {name:"JavaScript",level:85},
    {name:"Angular",level:90},
    {name:"Python-Django",level:95}
  ]

}
