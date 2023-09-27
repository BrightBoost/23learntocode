import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = "";
  title = 'lists';
  items = [
    { id: 1, name: 'Item 1', price: 10.99 },
    { id: 2, name: 'Item 2', price: 19.99 },
    { id: 3, name: 'Item 3', price: 4.99 },
    { id: 4, name: 'Item 4', price: 8.99 }
  ];
  sortOrder: string = "asc";
  sortField: string = "id";
  filterText: string = "";

  onClickChangeSortOrder() {
    if(this.sortOrder == "asc") {
      this.sortOrder = "desc";
    } else {
      this.sortOrder = "asc";
    }
  }

  onClickChangeSortField(sortField: string) {
    this.sortField = sortField;
  }

  changeBackgroundColor($event: any) {
    console.log("app component: " + $event);
    this.color = $event;
  }

}
