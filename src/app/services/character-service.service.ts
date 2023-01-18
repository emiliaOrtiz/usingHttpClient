import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  private urlEndPoint:string='https://swapi.dev/api/people';
  private httpHeaders=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient,
    private router:Router) { }

  getCharacters():Observable<Character[]>{
    return this.http.get<Character[]>(this.urlEndPoint).pipe(
      map(response =>{
        let characters=response as Character[];
        return characters.map(character=>{
          character.name=character.name.toUpperCase();
          return character;
        });
      }
      )
    );
  }


 /* getCliente(id: number):Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
    catchError(e=>{
      this.router.navigate(['/clientes']);
      console.error(e.error.mensaje);
      Swal.fire(e.error.mensaje,e.error.error,'error');
      return throwError( () => e );

    })
    );
  }*/

  delete(id:number):Observable<Character>{
    return this.http.delete<Character>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        //Swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError( () => e );
      })
      );

  }

}
