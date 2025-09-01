import { Component } from '@angular/core';
import {Content} from "../content/content";
import {Footer} from "../../layout/footer/footer";
import {Header} from "../../layout/header/header";

@Component({
  selector: 'app-home',
    imports: [
        Content,
        Footer,
        Header
    ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
