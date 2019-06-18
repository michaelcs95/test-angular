import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false;
  outputArray = [];

  onDisplay() {
    this.display = !this.display;
    if (this.outputArray.length == 0)
      {this.outputArray.push(1);}
    else 
      {this.outputArray.push(this.outputArray[this.outputArray.length -1]+1);}
  }
}
