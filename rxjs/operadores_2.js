const { XMLHttpRequest } = require('xmlhttprequest')
const { ajax } = require('rxjs/ajax')
const { catchError } = require('rxjs')

const { map, concatAll } = require('rxjs/operators')

ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/cod3rcursos/repos'
})
    .pipe(
        map(res => JSON.parse(res.xhr.responseText)),
        concatAll(),
        map(res => res.full_name)
    )
    .subscribe(console.log)