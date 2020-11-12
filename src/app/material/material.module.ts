import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

const MaterialComponents = [ 
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatGridListModule,
  MatListModule
 ]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
