import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Puppy } from '../models/puppy.model';
import { PuppyService } from '../providers/puppy.service';

@Component({
  selector: 'app-puppy-list',
  templateUrl: './puppy-list.component.html',
  styleUrls: ['./puppy-list.component.css']
})
export class PuppyListComponent implements OnInit {
  puppies: Puppy[] = [];
    
  constructor(private router: Router, private puppyService: PuppyService) {}
  ngOnInit(): void {
    this.puppyService.getPuppies().subscribe(data => {
      this.puppies = data;
    });
  }
  // workaround for getting the props of an object
  // here's how to use in component.html
  // <p *ngFor="let prop of getKeys(puppy)">{{prop}}</p>

  getKeys(puppy: any) {
    return Object.keys(puppy);
  }

  showDetailsPage(puppy: Puppy) {
    this.router.navigate(["puppyDetails"], {
      queryParams: {
        name: puppy.name
      }
    });
  }
}
