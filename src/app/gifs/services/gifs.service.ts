import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagHistory: string[] = []

  constructor() { }

get tagHistory(){
  return[...this._tagHistory];
}

private organizeHistory(tag: string){
  //Conviertte a minusculas los valores ingresados
  tag = tag.toLowerCase();

  //Revisa si el arreglo ya incluye el valor agregado
  if(this._tagHistory.includes(tag)){
    this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag)
  }
  //agrega el nuevo elemento al inicio del arreglo
  this._tagHistory.unshift(tag);

  //limita a que el arreglo solo tenga 10 valores
  this._tagHistory = this._tagHistory.splice(0,10);
}

searchTag(tag: string): void{
  if(tag.length === 0)return;
  this.organizeHistory(tag);



}

}
