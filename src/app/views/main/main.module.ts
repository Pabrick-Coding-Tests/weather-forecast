import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { WeekNavigationModule } from 'src/app/components/week-navigation/week-navigation.module';

@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MainComponent
            }
        ]),
        WeekNavigationModule
    ],
    exports: [ MainComponent ]
})
export class MainModule { }