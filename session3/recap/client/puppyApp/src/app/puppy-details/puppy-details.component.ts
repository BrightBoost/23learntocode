import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Puppy } from '../models/puppy.model';
import { PuppyService } from '../providers/puppy.service';
@Component({
  selector: 'app-puppy-details',
  templateUrl: './puppy-details.component.html',
  styleUrls: ['./puppy-details.component.css']
})
export class PuppyDetailsComponent {
  puppy!: Puppy;
  
  constructor(private activatedRoute: ActivatedRoute, private puppyService: PuppyService) {
    this.activatedRoute.queryParams.subscribe(data => {
      let name = data["name"];

      this.puppyService.getPuppyByName(name).subscribe(data => {
        this.puppy = data;
      });
    })
  }
}
