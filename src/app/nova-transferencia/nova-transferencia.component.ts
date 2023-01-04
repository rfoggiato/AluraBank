import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class novaTransferenciaComponent {
  valor : number = 100;
  destino : string = 'conta';

  transferir(){
    console.log('valor: ', this.valor)
    console.log('destino: ', this.destino)
  }
}
