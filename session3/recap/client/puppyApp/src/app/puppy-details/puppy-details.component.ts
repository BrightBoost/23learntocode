import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-puppy-details',
  templateUrl: './puppy-details.component.html',
  styleUrls: ['./puppy-details.component.css']
})
export class PuppyDetailsComponent {
  puppy: any;
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
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data => {
      let name = data["name"];
      this.puppy = this.puppies.find(pup => name == pup.name);
    })
  }
}
