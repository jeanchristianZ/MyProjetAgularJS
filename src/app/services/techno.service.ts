import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnoService {
private technos = [];

  constructor() { }

createTechno(techno: any) {
  const Techno = {id: Number(), ...techno};
  [this.technos] = [Techno, ...this.technos];
  console.log(this.technos);
}

getTechnos(){
  return this.technos;
}
}