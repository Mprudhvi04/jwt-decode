

import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtDecoderService {
  constructor() { }

  public decoderToken(token: string) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

      // Add padding if necessary
      const padding = '='.repeat((4 - base64.length % 4) % 4);
      const fullBase64 = base64 + padding;

      const jsonPayload = decodeURIComponent(
        atob(fullBase64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );

      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Failed to decode JWT:", error);
      throw new Error("Invalid JWT token");
    }
  }
}
