import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-along1';
  example = 'Hi all';

  sayHello(name: string): void {
    console.log("Hello " + name);
  }
}
