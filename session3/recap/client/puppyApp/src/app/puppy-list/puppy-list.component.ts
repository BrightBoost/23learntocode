import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puppy-list',
  templateUrl: './puppy-list.component.html',
  styleUrls: ['./puppy-list.component.css']
})
export class PuppyListComponent {
  puppies: any[] = [
    {
      "name": "Buddy",
      "breed": "Golden Retriever",
      "age": 3,
      "color": "Golden",
      "favoriteToy": "Squeaky Ball"
    },
    {
      "name": "Bella",
      "breed": "Labrador Retriever",
      "age": 2,
      "color": "Black",
      "favoriteToy": "Chew Rope"
    },
    {
      "name": "Charlie",
      "breed": "Beagle",
      "age": 1,
      "color": "Tri-color",
      "favoriteToy": "Stuffed Animal"
    },
    {
      "name": "Lucy",
      "breed": "Poodle",
      "age": 4,
      "color": "White",
      "favoriteToy": "Rubber Bone"
    },
    {
      "name": "Max",
      "breed": "German Shepherd",
      "age": 3,
      "color": "Black and Tan",
      "favoriteToy": "Tug Rope"
    },
    {
      "name": "Daisy",
      "breed": "Bulldog",
      "age": 2,
      "color": "Brindle",
      "favoriteToy": "Squeaky Toy"
    },
    {
      "name": "Rocky",
      "breed": "Boxer",
      "age": 3,
      "color": "Fawn",
      "favoriteToy": "Tennis Ball"
    },
    {
      "name": "Lola",
      "breed": "Shih Tzu",
      "age": 1,
      "color": "Brown and White",
      "favoriteToy": "Plush Duck"
    },
    {
      "name": "Oliver",
      "breed": "Dachshund",
      "age": 2,
      "color": "Red",
      "favoriteToy": "Squeaky Squirrel"
    },
    {
      "name": "Sadie",
      "breed": "Rottweiler",
      "age": 4,
      "color": "Black and Tan",
      "favoriteToy": "Rubber Ball"
    }
  ]

  constructor(private router: Router) {}
  // workaround for getting the props of an object
  // here's how to use in component.html
  // <p *ngFor="let prop of getKeys(puppy)">{{prop}}</p>

  getKeys(puppy: any) {
    return Object.keys(puppy);
  }

  showDetailsPage(puppy: any) {
    this.router.navigate(["puppyDetails"], {
      queryParams: {
        name: puppy.name
      }
    });
  }
}
