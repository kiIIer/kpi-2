import {Component} from '@angular/core';
import {Meta} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
{
  title = 'html-practice';

  constructor(private meta: Meta)
  {
    this.meta.addTags([
      {name: 'description', content: 'This is first laboratory assignment'},
      {name: 'author', content: 'Mike Molchanov'},
      {name: 'keywords', content: 'Angular Material KPI Laboratory Assignment One First'},
    ]);
  }
}
