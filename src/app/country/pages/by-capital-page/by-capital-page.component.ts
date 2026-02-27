import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { List } from "../../components/country-list/country-list.component";


@Component({
  selector: 'app-by-capital',
  imports: [SearchInputComponent, List],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  onSearch(value: string){
    console.log({value})
  }


 }
