import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {Router} from "@angular/router";

@Component({
    selector: 'app-menubar-template-demo',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    items: MenuItem[];

    constructor(
        private router: Router) {
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Продукти',
                icon: 'pi pi-fw pi-file',
                command: event => {
                    this.router.navigate(['./product'])
                }
            },
            {
                label: 'Редагування',
                icon: 'pi pi-fw pi-pencil',
                command: event => {
                    this.router.navigate(['./edit'])
                }
            },
            {
                label: 'Помилки',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-user-plus',
                        command: event => {
                            this.router.navigate(['./404'])
                        }
                    }
                ]
            }
        ];
    }
}