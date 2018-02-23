import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private actionSheetCtrl: ActionSheetController) {

  }

  romaneios: any = [
    { id: 1, desc: "o Jhon" },
    { id: 2, desc: "o Jhon Mora no meu coração" },
    { id: 3, desc: "o Jhon, eu quero churrasco, churrasco de romaneio" },
    { id: 4, desc: "Hoje é o Dia da Pesagem, nem vou tomar o café que eu tomo que são 6 paõzinhos franceses." },
    { id: 5, desc: "o Jhon, eu não consigo programar nem homologar, pq não tem romaneio" },
    { id: 6, desc: "Eu amo o Jhon, ele é o meu PO" },
    { id: 7, desc: "Queria avisar todo mundo, que eu to fazendo uma rifa" },
    { id: 8, desc: "React é muito melhor que PWA" },
    { id: 9, desc: "Eu não gosto de Ionic Nativo" },
    { id: 10, desc: "Agora milkshake não mais do Bobs, ou do mc donalds, só herbalife do cassio" },
  ];

  playRomaneio(id: string): void {
    let audio = new Audio(`assets/sounds/${id}.ogg`);
    audio.play();
  }

  presentActionSheet(id: string) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Ações',
      buttons: [
        {
          text: 'Fazer Download',
          role: 'destructive',
          handler: () => {
            window.open(`assets/sounds/${id}.ogg`, `_blank`)
          }
        }, {
          text: 'Cancelar',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }
}