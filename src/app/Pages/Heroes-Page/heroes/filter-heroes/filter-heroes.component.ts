import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {CountryService} from '../../../../Services/country.service';
import {ICountry} from '../../../../Models/country';

@Component({
  selector: 'app-filter-heroes',
  templateUrl: './filter-heroes.component.html',
  styleUrls: ['./filter-heroes.component.scss']
})
export class FilterHeroesComponent implements OnInit {
  countryList: ICountry[] = [];

  constructor(private bottomSheetRef: MatBottomSheetRef<FilterHeroesComponent>,
              private countryService: CountryService,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountryList().subscribe((res) => {
      this.countryList = res;
    });
  }

  onClose(event: MouseEvent): void {
    this.bottomSheetRef.dismiss(this.data);
    event.preventDefault();
  }
}
