import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}

  signupEndpointUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB37xwkUHz_azDKJGMvtj3jSidrZjTiwSk"

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.signupEndpointUrl,
      {
        email: email,
        password: password,
        returnSecureToken: true
    })
  }
}
