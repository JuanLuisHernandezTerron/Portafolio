import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent implements OnInit {
  constructor(){ }
  arrayInfoProject:any [] = [];
  ngOnInit(): void {
    this.arrayInfoProject = [
      {
        nombre:'Hernandez Truck Store',
        imgsrc:'assets/img/imagennweb.png',
        descripcion:'Este proyecto se ha realizado, ya que los pequeños autónomos o PYMES del sector del transporte,la gran mayoría no pueden adquirir cabezas tractoras y/o remolques nuevos, para resolver el problema mencionado anteriormente, voy a proponer con esta aplicación que tanto empresas con gran renombre en nuestro país y también autónomos, quieran subir en nuestra aplicación sus vehículos(cabezas tractoras y remolques), donde podrán alquilar o vender.',
        tecnologias:['NodeJS','ExpressJS','Mongoose','AngularJS','TypeScript','MongoDB'],      
        urlGithub:'https://github.com/JuanLuisHernandezTerron/PFC-HernandezTruckStore'
      }
    ]
  }
}
