import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre:string;
  subtitulo: string;
  descripcion:string;

  constructor() {

    this.nombre="Bruno Almiron"
    this.subtitulo="Full Stack Developer Jr";
    this.descripcion="Estudiante de ingenieria en sistemas y Full Stack Developer Jr.Apasionado por la ciberseguridad. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaa a a  a a a a";

   }

  ngOnInit(): void {
  }

}
