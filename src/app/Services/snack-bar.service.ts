import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) {
  }

  addAlert(message: string, title: string, horizontalPosition: any): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['alert-success'];
    config.duration = 2000;
    config.horizontalPosition = horizontalPosition;
    config.verticalPosition = 'top';
    this.snackBar.open(message, title, config);
  }

  updateAlert(message: string, title: string, horizontalPosition: any): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['alert-info'];
    config.duration = 2000;
    config.horizontalPosition = horizontalPosition;
    config.verticalPosition = 'top';
    this.snackBar.open(message, title, config);
  }

  deleteAlert(message: string, title: string, horizontalPosition: any): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['alert-danger'];
    config.duration = 2000;
    config.horizontalPosition = horizontalPosition;
    config.verticalPosition = 'top';
    this.snackBar.open(message, title, config);
  }

  errorAlert(message: string, title: string): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['error-message'];
    config.duration = 2000;
    config.horizontalPosition = 'center';
    config.verticalPosition = 'top';
    this.snackBar.open(message, title, config);
  }
}
