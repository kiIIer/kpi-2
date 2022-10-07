import {Component, Input, OnInit} from '@angular/core';
import {Story} from '../../store/stories';

@Component({
  selector: 'mova-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent implements OnInit {
  @Input() stories: Story[] | null | undefined;
  @Input() isHandset: boolean | null = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  test() {
    console.log(this.stories);
  }
}
