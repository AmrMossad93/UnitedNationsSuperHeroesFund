import {Component, OnInit, ViewChild} from '@angular/core';
import {HeroesService} from '../../../Services/heroes.service';
import {IHero} from '../../../Models/hero';
import {Table} from 'primeng/table';
import {PrimeNGConfig} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {FilterHeroesComponent} from './filter-heroes/filter-heroes.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroesList: IHero[] = [];
  heroesFilteredList: IHero[] = [];
  selectedHero = {} as IHero;
  loading: boolean = true;
  @ViewChild('dt') table!: Table;

  constructor(private route: ActivatedRoute, private bottomSheet: MatBottomSheet) {
  }

  ngOnInit(): void {
    this.getHeroList();
  }

  getHeroList(): void {
    this.loading = true;
    this.route.data.subscribe((res) => {
      this.heroesList = res.list;
      this.heroesFilteredList = res.list;
      this.loading = false;
    });
  }

  onDateSelect(value: string): void {
    this.table.filter(this.formatDate(value), 'date', 'equals');
  }

  formatDate(date: any): string {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

  openFilterBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(FilterHeroesComponent, {
      data: {},
    });
    bottomSheetRef.afterDismissed().subscribe((result) => {
      if (result) {
        console.log(result);
        const filterResult = {
          company: result.company,
          date: result.date,
          email: result.email,
          name: result.name,
          phoneNumber: result.phoneNumber,
          country: result.selectedCountry?.Name,
        };
        this.getItems(filterResult);
      }
    });
  }

  getItems(ev: any): any {
    console.log(ev);
    this.heroesFilteredList = this.heroesList;
    console.log(this.heroesFilteredList.filter(c => c.phoneNumber === ev));
    this.heroesFilteredList = this.heroesFilteredList.filter((c) =>
      c.name.toString().toLowerCase().indexOf(ev.name?.toLowerCase()) > -1 ||
      c.date.toString().toLowerCase().indexOf(ev.date?.toLowerCase()) > -1 ||
      c.email.toString().toLowerCase().indexOf(ev.email?.toLowerCase()) > -1 ||
      c.company.toString().toLowerCase().indexOf(ev.company?.toLowerCase()) > -1 ||
      c.phoneNumber.toString().toLowerCase().indexOf(ev.phoneNumber?.toLowerCase()) > -1 ||
      c.country.Name.toString().toLowerCase().indexOf(ev.country?.toLowerCase()) > -1
    );
    console.log(this.heroesFilteredList);
  }
}
