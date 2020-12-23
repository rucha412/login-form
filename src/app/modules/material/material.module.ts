import { NgModule } from  '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from  '@angular/material/datepicker';
import { MatRadioModule } from  '@angular/material/radio';
import { MatSelectModule } from  '@angular/material/select';
import { MatSliderModule } from  '@angular/material/slider';
import { MatDividerModule } from  '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
imports: [MatTabsModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatIconModule,MatDialogModule,MatButtonModule,MatSortModule,MatTableModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule,MatGridListModule],
exports: [MatTabsModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatIconModule,MatDialogModule,MatButtonModule,MatSortModule, MatCheckboxModule, MatToolbarModule, MatCardModule,MatTableModule,MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule,MatGridListModule]

})

export  class  MaterialModule { }