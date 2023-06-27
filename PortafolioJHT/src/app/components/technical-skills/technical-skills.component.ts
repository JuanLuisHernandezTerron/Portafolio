import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent implements OnInit {
  arrayFront:String [] = ['Angular','Ionic','Angular Material', 'Bootstrap','SASS'];
  arrayIMGFront:String [] = ['assets/img/angular_whiteTransparent.png','assets/img/bootstrap-5-1.svg'];
  arrayBack:String [] = ['NodeJS','ExpressJS','Mongoose','Django'];
  arrayIMGBack:String [] = ['assets/img/640px-Node.js_logo.svg.png','assets/img/Django-Logo.png'];
  arrayBBDD:String [] = ['MongoDB','MySQL','MariaDB', 'PSQL','SQL','SQLite'];
  arrayIMGBD:String [] = ['assets/img/Mongodb-PNG-Image-HD.png','assets/img/58481057cef1014c0b5e4951.png','assets/img/Postgresql_elephant.svg.png'];
  arrayLenguajes:String [] = ['JavaScript','Java','Python', 'TypeScript'];
  arrayIMGLenguajes:String [] = ['assets/img/JavaScript-Symbol.png','assets/img/Java-logo.png','assets/img/9bb722f0e85ddbc1ce0f064534fd2311-icono-del-lenguaje-de-programacion-python.png'];
  arrayIMGControlVersion:String [] = ['assets/img/github_logo_icon_147285.png','assets/img/5847f997cef1014c0b5e48c1.png'];
  arrayControlVersion:String [] = ['GitHub','GitLab'];
  constructor(){ }

  ngOnInit(): void {

  }
}
