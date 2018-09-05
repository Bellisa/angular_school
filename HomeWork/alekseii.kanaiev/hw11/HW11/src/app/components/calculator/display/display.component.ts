import { Component, Input, OnInit } from '@angular/core';
import store from '../../../store/store';

@Component({
    selector: 'app-display-comp',
    template: `
       <input type="text" [value]="value" disabled>
    `,
    styles: [`
        input{
            display: block;
            margin: auto;
        }
    `]
})
export class DisplayComponent implements OnInit {
    public value = '0';

    ngOnInit() {
        store.subscribe(
            () => {
                this.value = store.getState().value;
            }
        );
    }
}
