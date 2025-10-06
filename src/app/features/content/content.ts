import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Profile} from '../profile/profile';
import {Experience} from '../experience/experience';
import {Projects} from '../projects/projects';
import {Testimonials} from '../testimonials/testimonials';
import {Education} from '../education/education';
import {Articles} from '../articles/articles';
import {Subscribe} from '../subscribe/subscribe';
import {Skills} from '../skills/skills';

@Component({
  selector: 'app-content',
  imports: [
    Profile,
    Experience,
    Projects,
    Education,
    Skills
  ],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {

}
