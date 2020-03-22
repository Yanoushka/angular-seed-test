import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../../../../../../__modules-swagger-codegen/app-petshop-api';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-petshop-page',
    templateUrl: './petshop-page.component.html',
    styleUrls: ['./petshop-page.component.scss']
})
export class PetshopPageComponent<T> implements OnInit {
    itemsList$: Observable<T[]>;

    constructor(private readonly route: ActivatedRoute) {}

    ngOnInit(): void {
        this.itemsList$ = this.route.data.pipe(map(data => data.itemsList));
    }
}
