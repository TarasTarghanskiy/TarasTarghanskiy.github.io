import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {MenuComponent} from "./menu.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RippleModule} from "primeng/ripple";
import {MenubarModule} from "primeng/menubar";
import {ProductTable} from "./products/product-table";
import {DataViewModule} from "primeng/dataview";
import {TagModule} from "primeng/tag";

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        ProductTable,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ToolbarModule,
        ConfirmDialogModule,
        RatingModule,
        InputNumberModule,
        InputTextareaModule,
        RadioButtonModule,
        DropdownModule,
        ButtonModule,
        RouterModule.forRoot([
            {path: '', pathMatch: 'full', redirectTo: '/edit'},
            {path: 'edit', component: AppComponent},
            {path: 'product', component: ProductTable},
            {path: '404', component: NotFoundComponent},
            {path: '**', redirectTo: '/404'}
        ]),
        RippleModule,
        MenubarModule,
        DataViewModule,
        TagModule,
    ],
    providers: [ConfirmationService],
    bootstrap: [MenuComponent]
})
export class AppModule { }
