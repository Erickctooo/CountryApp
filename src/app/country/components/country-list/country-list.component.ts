import { Country } from '../../interfaces/country.interface';
import { RESTCountry } from './../../interfaces/rest-countries.interface';
import { Component, input } from '@angular/core';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {

  countries = input.required<Country[]>()

 }
