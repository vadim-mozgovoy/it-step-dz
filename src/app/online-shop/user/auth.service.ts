import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {first, map} from "rxjs/operators";
// import {auth} from "firebase/app";
import {AngularFireAuth} from "@angular/fire/auth";
import firebase from "firebase";
// import User = firebase.User;
import {Observable, pipe} from "rxjs";
// import {User} from "firebase";


export interface User{
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  telefone:number,
  id?:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static url = 'https://online-shoping-a2ec0-default-rtdb.firebaseio.com/user'

  constructor(private http: HttpClient, public afAuth: AngularFireAuth) {
  }

   registerNewUser(user:User):Observable<User> {
    return this.http.post<any>(`${AuthService.url}`,user)
      .pipe(map(res => {
        console.log(res)
       return res
      }))


    // let headers = new HttpHeaders();
    // console.log(headers)
    // headers.append('Content-Type', "application/json");
    // return this.http.post('https://#####', user,)
    //   .pipe(map((response: any) => response.json()))
    // const result = console.log(user)
    // return result

  }

  // async login(email: string, password: string) {
  //   try {
  //     const result = await this.afAuth.signInWithEmailAndPassword(email, password);
  //     return result;
  //   } catch (error) {
  //     console.log(error)
  //   }
  //
  // }
  //
  // getCurrentUser() {
  //   return this.afAuth.authState.pipe(first()).toPromise();
  // }
}
