import {Component, OnInit, ViewChild} from '@angular/core';
import {IHero} from '../../../Models/hero';
import {Table} from 'primeng/table';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {FilterHeroesComponent} from './filter-heroes/filter-heroes.component';
import {MatDialog} from '@angular/material/dialog';
import {AddEditHeroComponent} from './add-edit-hero/add-edit-hero.component';
import {DatePipe} from '@angular/common';
import {v4 as uuidv4} from 'uuid';
import {SnackBarService} from '../../../Services/snack-bar.service';
import {DeleteHeroComponent} from './delete-hero/delete-hero.component';
import {Title} from "@angular/platform-browser";


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
  items: MenuItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private bottomSheet: MatBottomSheet,
    private snackBarService: SnackBarService,
    public dialog: MatDialog,
    private titleService: Title,
    public datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('U.N.I.S.H.F - Heroes Page');

    this.items = [
      {
        label: 'Edit Hero', icon: 'pi pi-pencil', command: () => {
          this.onEditHero(this.selectedHero);
        }
      },
      {
        label: 'Delete Hero', icon: 'pi pi-fw pi-times', command: () => {
          this.onDeleteHero(this.selectedHero);
        }
      }
    ];
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
    this.heroesFilteredList = this.heroesList;
    this.heroesFilteredList = this.heroesFilteredList.filter((c) =>
      c.name.toString().toLowerCase().indexOf(ev.name?.toLowerCase()) > -1 ||
      c.date.toString().toLowerCase().indexOf(ev.date?.toLowerCase()) > -1 ||
      c.email.toString().toLowerCase().indexOf(ev.email?.toLowerCase()) > -1 ||
      c.company.toString().toLowerCase().indexOf(ev.company?.toLowerCase()) > -1 ||
      c.phoneNumber.toString().toLowerCase().indexOf(ev.phoneNumber?.toLowerCase()) > -1 ||
      c.country.Name.toString().toLowerCase().indexOf(ev.country?.toLowerCase()) > -1
    );
  }

  onAddHero(): void {
    const dialogRef = this.dialog.open(AddEditHeroComponent, {
      data: {},
      minWidth: '50vw',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const heroOBJ = {
          id: uuidv4(),
          name: result.name,
          phoneNumber: result.phoneNumber,
          email: result.email,
          date: this.datePipe.transform(result.date, 'yyyy-MM-dd'),
          company: result.company,
          country: {
            Flag: result.selectedCountry.Flag,
            Name: result.selectedCountry.Name,
            Alpha3Code: result.selectedCountry.Alpha3Code,
            NativeName: result.selectedCountry.NativeName,
          }
        } as IHero;
        this.heroesList.push(heroOBJ);
        this.snackBarService.addAlert(
          'Added Successfully',
          `${heroOBJ.name} Has Been Added As A Hero`,
          'end');
      }
    });
  }

  onEditHero(hero: IHero): void {
    const dialogRef = this.dialog.open(AddEditHeroComponent, {
      data: {
        id: hero.id,
        name: hero.name,
        phoneNumber: hero.phoneNumber,
        email: hero.email,
        date: hero.date,
        company: hero.company,
        selectedCountry: hero.country
      },
      minWidth: '50vw',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.heroesList.findIndex(x => x.id === result.id);
        this.heroesList.splice(index, 1);
        const heroOBJ = {
          id: result.id,
          name: result.name,
          phoneNumber: result.phoneNumber,
          email: result.email,
          date: this.datePipe.transform(result.date, 'yyyy-MM-dd'),
          company: result.company,
          country: {
            Flag: result.selectedCountry.Flag,
            Name: result.selectedCountry.Name,
            Alpha3Code: result.selectedCountry.Alpha3Code,
            NativeName: result.selectedCountry.NativeName,
          }
        } as IHero;
        this.heroesList.push(heroOBJ);
        this.snackBarService.addAlert(
          'Updated Successfully',
          `${heroOBJ.name} Has Been Updated`,
          'end');
      }
    });
  }

  onDeleteHero(hero: IHero): void {
    const dialogRef = this.dialog.open(DeleteHeroComponent, {
      data: {hero},
      minWidth: '50vw',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBarService.deleteAlert(
          'Deleted Successfully',
          `${result.hero.name} Has Been Deleted`,
          'end');
        const index = this.heroesList.findIndex(x => x.id === result.id);
        this.heroesList.splice(index, 1);
      }
    });
  }
}
