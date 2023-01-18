import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterServiceService } from 'src/app/services/character-service.service';
import Swal from 'sweetalert2';

const CHARACTER_DATA: Character[] = [
  {name: 'dark vader', birth_year: '1977', gender:'male'},
  {name: 'dark vader1', birth_year: '1974', gender:'female'},
  {name: 'dark vader2', birth_year: '1967', gender:'male'},
  {name: 'dark vader3', birth_year: '1997', gender:'famele'},
  {name: 'dark vader4', birth_year: '1377', gender:'male'},
];

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})


export class ListadoComponent implements OnInit{

  title='Characters of Star Wars Movies';
  characters:Character[]=[];
  //clienteSeleccionado: Cliente = new Cliente;
  displayedColumns: string[] = ['nombre', 'birth', 'gender'];
  //dataSource = CHARACTER_DATA;
  dataSourse=this

 

  constructor(private service:CharacterServiceService){
   


  /*delete(character:Character):void{
    Swal.fire({
      title: `¿Estás seguro que deseas eliminar al personaje: ${cliente.nombre} ${cliente.apellido}?`,
      text: "¡No se podrá revertir la acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(cliente.id).subscribe(
          response=>{
            this.clientes=this.clientes.filter(
              cli=>cli!==cliente
            )
            Swal.fire(
              'Eliminado!',
              `cliente: ${cliente.nombre} eliminado con exito`,
              'success'
            )
          }
        )
      
      }
    })*/
  }

  ngOnInit(){
    this.service.getCharacters().subscribe(
      c=>this.characters=c
    );
  }
 
  
}