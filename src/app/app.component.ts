import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string = '';
  password: string = '';
  texto: string = 'Inicia sesión para poder ver el contenido.';
  dis: boolean = true;
  contenido: string = '';

  constructor(private appService: AppService) { }

  getData() {
    this.appService.sendGetRequest().subscribe(data => {
      this.contenido = JSON.stringify(data);
      console.log(data);
    });
  }

  postData() {
    this.texto =  'Inicia sesión para poder ver el contenido.';
    this.dis = true;
    this.appService.auth(this.username, this.password).subscribe(data => {
      this.texto = 'Ya puedes ver el contenido, haz click en el botón.';
      this.dis = false;
    });
  }
}
