import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Story} from '../../store/stories';
import {selectStories} from '../../store/stories/selectors/stories.selectors';
import {selectIsHandset} from '../../store/view/selectors/view.selectors';

@Component({
  selector: 'mova-stories-container',
  templateUrl: './stories-container.component.html',
  styleUrls: ['./stories-container.component.css'],
})
export class StoriesContainerComponent implements OnInit {
  stories$: Observable<Story[]>;
  isHandset$: Observable<boolean | null>;

  constructor(private store: Store) {
    this.stories$ = store.select(selectStories);
    this.isHandset$ = store.select(selectIsHandset);
  }

  ngOnInit(): void {
  }
}
