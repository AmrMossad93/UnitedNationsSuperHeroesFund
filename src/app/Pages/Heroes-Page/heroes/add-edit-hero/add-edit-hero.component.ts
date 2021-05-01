import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-hero',
  templateUrl: './add-edit-hero.component.html',
  styleUrls: ['./add-edit-hero.component.scss']
})
export class AddEditHeroComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddEditHeroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
