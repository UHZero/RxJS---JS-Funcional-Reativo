const { from } = require('rxjs')

// Operadores encadeaveis (Pipeable Op.)
const { last, map } = require('rxjs/operators')

from([1, 2, false, 'último'])
    .pipe(
        last(),
        map(e => e[0])
    )
    .subscribe(console.log)