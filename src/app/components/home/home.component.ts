import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  key: any;

  personeroTab: boolean = true;
  contralorTab: boolean = true;
  finalTab: boolean = true;

  estadisticas: boolean = false;

  acceso = true;
  reporte = false;
  clave = false;

  //closeResult: string;

  personero1 = 1;
  personero2 = 2;
  personero3 = 3;
  blancoPersonero = 4;

  contralor1 = 1;
  contralor2 = 2;
  contralor3 = 3;
  contralor4 = 4;
  blancoContralor = 5;

  votoPersonero1 = 0;
  votoPersonero2 = 0;
  votoPersonero3 = 0;
  votoBlancoPersonero = 0;

  votoContralor1 = 0;
  votoContralor2 = 0;
  votoContralor3 = 0;
  votoContralor4 = 0;
  votoBlancoContralor = 0;
  votosTotales = 0;

  constructor(public tokenService: TokenService) {
    this.tokenService.token.subscribe((token) => {
      this.estadisticas = token;
    });
  }
  votoPersonero(candidato: any) {
    switch (candidato) {
      case 1: {
        this.votoPersonero1 = this.votoPersonero1 + 1;
        Swal.fire({
          /*  buttons: ['Elegir contralor'],
          title: '¡Gracias por tu voto!',
          text: 'Tu participación es muy importante.',
          icon: 'success', */
          icon: 'success',
          title: '¡Gracias por tu voto!',
          text: 'Tu participación es muy importante.',
          confirmButtonText: 'Elegir contralor',
          confirmButtonColor: '#008000',
        });
        break;
      }
      case 2: {
        this.votoPersonero2 = this.votoPersonero2 + 1;
        Swal.fire({
          icon: 'success',
          title: '¡Gracias por tu voto!',
          text: 'Tu participación es muy importante.',
          confirmButtonText: 'Elegir contralor',
          confirmButtonColor: '#008000',
        });
        break;
      }
      case 3: {
        this.votoPersonero3 = this.votoPersonero3 + 1;
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión ',
          text: 'Código de verificación correcto.',
          confirmButtonText: 'Listo',
          confirmButtonColor: '#8f141b',
        });
        break;
      }
      case 4: {
        this.votoBlancoPersonero = this.votoBlancoPersonero + 1;
        Swal.fire({
          icon: 'success',
          title: '¡Gracias por tu voto!',
          text: 'Tu participación es muy importante.',
          confirmButtonText: 'Elegir contralor',
          confirmButtonColor: '#008000',
        });
        break;
      }
    }
  }
  votoContralor(candidato: any) {
    switch (candidato) {
      case 1: {
        this.votoContralor1 = this.votoContralor1 + 1;
        this.votosTotales = this.votosTotales + 1;
        Swal.fire({
          icon: 'success',
          title: '¡Gracias por tu voto!',
          text: 'Tu participación es muy importante.',
          timer: 1500,
          showConfirmButton: false,
        });
        break;
      }
      case 2: {
        this.votoContralor2 = this.votoContralor2 + 1;
        this.votosTotales = this.votosTotales + 1;
        Swal.fire({
          icon: 'success',
          title: '¡Gracias por tu voto!',
          text: 'Tu participación es muy importante.',
          timer: 1500,
          showConfirmButton: false,
        });
        break;
      }
      case 3: {
        this.votoContralor3 = this.votoContralor3 + 1;
        this.votosTotales = this.votosTotales + 1;
        Swal.fire({
          /*  buttons: ['Elegir contralor'],
          title: '¡Gracias por tu voto!',
          text: 'Tu participación es muy importante.',
          icon: 'success', */
        });
        break;
      }
      case 4: {
        this.votoContralor4 = this.votoContralor4 + 1;
        this.votosTotales = this.votosTotales + 1;
        Swal.fire({
          /*  buttons: ['Elegir contralor'],
          title: '¡Gracias por tu voto!',
          text: 'Tu participación es muy importante.',
          icon: 'success', */
        });
        break;
      }
      case 5: {
        this.votoBlancoContralor = this.votoBlancoContralor + 1;
        this.votosTotales = this.votosTotales + 1;
        Swal.fire({
          icon: 'success',
          title: '¡Gracias por tu voto!',
          text: 'Tu participación es muy importante.',
          timer: 1500,
          showConfirmButton: false,
        });
        break;
      }
    }
  }

  accesoReporte() {
    this.clave = true;
    this.acceso = false;
  }

  pass(key: any) {
    if (key === '1234') {
      this.reporte = true;
      this.clave = false;
    }
  }

  ngOnInit() {}

  openLg(content: any) {
    //this.modalService.open(content, { size: 'lg', centered: true });
  }
}
