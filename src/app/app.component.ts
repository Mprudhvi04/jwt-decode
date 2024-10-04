

import { Component } from '@angular/core';
import { JwtDecoderService } from './jwt-decoder.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Note the plural 'styleUrls'
})
export class AppComponent {
  title = 'jwt-decode';
  decodedToken: any;

  constructor(private jwtDecodeService: JwtDecoderService) {
    this.decodedToken = jwtDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1BUklTRVRUSSBQUlVESFZJIiwiYWdlIjoyNSwiaWF0IjoxNTE2MjM5MDIyMiwiY2l0eSI6Iktha2luYWRhIn0._z-pveZCNeNhIyHIBEWFZd0fcqcIjeHh_k7PdOw1T0I');
  }
}
