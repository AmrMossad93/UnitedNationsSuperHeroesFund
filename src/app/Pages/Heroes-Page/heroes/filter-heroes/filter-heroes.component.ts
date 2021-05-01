import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {CountryService} from '../../../../Services/country.service';
import {ICountry} from '../../../../Models/country';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-filter-heroes',
  templateUrl: './filter-heroes.component.html',
  styleUrls: ['./filter-heroes.component.scss']
})
export class FilterHeroesComponent implements OnInit {
  countryList: ICountry[] = [];

  constructor(private bottomSheetRef: MatBottomSheetRef<FilterHeroesComponent>,
              private countryService: CountryService,
              public datePipe: DatePipe,
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
    if (this.data.date) {
      this.data.date = this.datePipe.transform(this.data.date, 'yyyy-MM-dd');
    }
    this.bottomSheetRef.dismiss(this.data);
    event.preventDefault();
  }
}
