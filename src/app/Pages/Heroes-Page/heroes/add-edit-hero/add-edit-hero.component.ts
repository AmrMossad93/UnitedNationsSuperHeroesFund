import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ICountry} from '../../../../Models/country';
import {CountryService} from '../../../../Services/country.service';
import {SnackBarService} from '../../../../Services/snack-bar.service';

@Component({
  selector: 'app-add-edit-hero',
  templateUrl: './add-edit-hero.component.html',
  styleUrls: ['./add-edit-hero.component.scss']
})
export class AddEditHeroComponent implements OnInit {
  countryList: ICountry[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddEditHeroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBarService: SnackBarService,
    private countryService: CountryService,
  ) {
  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountryList().subscribe((res) => {
      this.countryList = res;
    }, error => {
      if (error) {
        this.snackBarService.errorAlert('Error Happened', 'Error');
      }
    }, () => {
      if (this.data.id) {
        this.data.selectedCountry = this.countryList.find(country => country.Alpha3Code === this.data.selectedCountry.Alpha3Code);
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
