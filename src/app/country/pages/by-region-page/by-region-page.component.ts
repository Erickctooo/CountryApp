import { Component } from '@angular/core';
import { List } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-region-page',
  imports: [List],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent { }
