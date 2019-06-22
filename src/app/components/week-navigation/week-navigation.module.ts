import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekNavigationComponent } from './week-navigation.component';
import { DayButtonModule } from '../day-button/day-button.module';

@NgModule({
    declarations: [ WeekNavigationComponent ],
    imports: [
        CommonModule,
        DayButtonModule
    ],
    exports: [ WeekNavigationComponent ]
})
export class WeekNavigationModule { }
