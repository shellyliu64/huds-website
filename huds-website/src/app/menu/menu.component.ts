import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {MatTabsModule, MatTabsConfig} from '@angular/material/tabs';
import {ItemsComponent} from './items/items.component'
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(NutritionDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  now = new Date();
  monthNum = this.now.getMonth();
  year = this.now.getFullYear();
  day = this.now.getDate();
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  month = this.months[this.monthNum];



}

@Component({
  selector: 'nutrition-dialog',
  templateUrl: './nutrition-dialog.html',
})
export class NutritionDialog {}
