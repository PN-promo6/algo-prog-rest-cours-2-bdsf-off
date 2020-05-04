import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // Méthoode servant à faire une requête HTTP récupérant la liste des users
  public fetchUsers(): Observable<any> {
    
    let usersObservable: Observable<any> = this.httpClient.get("http://localhost/3000/users")
    return usersObservable; 

//     this.httpClient.get("http://localhost:3000/users")
//     .subscribe(

//       res => {
//         console.log(res);
//       },
//       error => {
//         console.log(error);
//       }
//     )

  }
}
