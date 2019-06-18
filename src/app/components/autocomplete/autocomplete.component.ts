import { Component, OnInit, ViewChild, TemplateRef, ContentChildren, ContentChild, QueryList } from '@angular/core';
import { switchMap, merge } from 'rxjs/operators';
import { OptionComponent } from 'src/app/components/option/option.component';
import { AutocompleteContentDirective } from 'src/app/directives/autocomplete-content.directive';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  exportAs: 'appAutocomplete',
})
export class AutocompleteComponent {

  @ViewChild('root', {static: true}) rootTemplate: TemplateRef<any>;

  @ContentChild(AutocompleteContentDirective, {static: true}) content: AutocompleteContentDirective;

  @ContentChildren(OptionComponent) options: QueryList<OptionComponent>;

  optionsClick() {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map(option => option.click$);
        return merge(...clicks$);
      })
    );
  }

}
