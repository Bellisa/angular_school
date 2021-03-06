import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'calculator';
    public indicator: string = '';
    public memory: number = 0;
    private _operation: string = '';
    public needClear: boolean = false;

    onClick($event) {
        let operator: string = $event.target.innerText;
        console.dir($event);
        if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(operator)) {
            if (this.needClear) {
                this.indicator = '';
                this.needClear = false;
            }
            this.indicator += operator;
        }

        if (['+', '-', '*', '/'].includes(operator)) {
            this._operation = operator;
            this.memory = parseInt(this.indicator);
            this.needClear = true;
        }
        if (['='].includes(operator)) {
            switch (this._operation) {
                case '+':
                    this.indicator = (this.memory + parseInt(this.indicator)).toString();
                    break;
                case '-':
                    this.indicator = (this.memory - parseInt(this.indicator)).toString();
                    break;
                case '*':
                    this.indicator = (this.memory * parseInt(this.indicator)).toString();
                    break;
                case '/':
                    this.indicator = (this.memory / parseInt(this.indicator)).toString();
                    break;
                default:
                   throw new Error('Unknown operator');
            }
            this.needClear = true;
        }
    }
}
