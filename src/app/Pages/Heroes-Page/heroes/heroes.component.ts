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
      data: {amr: 'amr'},
    });
    bottomSheetRef.afterDismissed().subscribe((result) => {
      console.log('Bottom sheet has been dismissed.');
      console.log(result);
    });
  }
}
