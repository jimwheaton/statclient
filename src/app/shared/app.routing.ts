import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component'; 
import { HomeResolver } from "./home-resolver.service";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent, resolve: { lookups: HomeResolver} },
            { path: '**', component: ErrorComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}