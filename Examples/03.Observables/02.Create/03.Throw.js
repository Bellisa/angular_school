const { Observable } = require('rxjs');

const publisher = Observable.throw('Throw an error');

const subscriber = publisher.subscribe(
    () => {},
    (err) => {
        console.log(`Error: ${err}`);
    },
    () => {
        console.log('Finalized');
    }
);