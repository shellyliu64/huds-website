import { Component, OnInit, ViewChild } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css', '../../styles.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
