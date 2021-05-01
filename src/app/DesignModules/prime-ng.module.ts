import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ContextMenuModule} from 'primeng/contextmenu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    MultiSelectModule,
    CalendarModule,
    InputTextModule,
    ContextMenuModule
  ],
  exports: [
    TableModule,
    MultiSelectModule,
    CalendarModule,
    InputTextModule,
    ContextMenuModule
  ]
})
export class PrimeNgModule {
}
