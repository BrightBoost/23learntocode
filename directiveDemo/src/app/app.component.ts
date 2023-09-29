import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directiveDemo';
  classes: any = {};
  showText: boolean = false;

  processNr(strNr: string): void {
    let nr = Number(strNr);
    this.classes['red'] = nr > 100 ? true : false;
    this.classes['big'] = nr % 2 == 0 ? true : false;
    this.showText = nr > 10;
  //   if(nr > 100) {
  //     this.classes['red'] = true;
  //   } else {
  //     this.classes['red'] = false;
  //   }

  //   if(nr % 2 == 0) {
  //     this.classes['big'] = true;
  //   } else {
  //     this.classes['big'] = false;
  //   }
  }
}
