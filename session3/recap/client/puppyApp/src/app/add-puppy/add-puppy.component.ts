import { Component } from '@angular/core';
import { Puppy } from '../models/puppy.model';
import { PuppyService } from '../providers/puppy.service';

@Component({
  selector: 'app-add-puppy',
  templateUrl: './add-puppy.component.html',
  styleUrls: ['./add-puppy.component.css']
})
export class AddPuppyComponent {
  puppy: Puppy = new Puppy("", 0, "", "", "");
  constructor(private puppyService: PuppyService) { }
  onSubmitPuppy() {
    this.puppyService.addNewPuppy(this.puppy).subscribe(data => {});
  }
}
