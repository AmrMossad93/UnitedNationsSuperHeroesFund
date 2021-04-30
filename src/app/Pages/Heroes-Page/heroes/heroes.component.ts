import {Component, OnInit, ViewChild} from '@angular/core';
import {HeroesService} from '../../../Services/heroes.service';
import {IHero} from '../../../Models/hero';
import {Table} from 'primeng/table';
import {PrimeNGConfig} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getHeroList();
  }

  getHeroList(): void {
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
}
