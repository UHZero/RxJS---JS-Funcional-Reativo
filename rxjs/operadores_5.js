const { of, Observable } = require('rxjs')

function filtraSobrenome(texto) {
    const regex = new RegExp(texto, 'gi')
    return function (source) {
        return Observable.create(subscriber => {
            let sobrenome
            source.subscribe({
                next(value){
                    if(typeof value === 'string' || Array.isArray(value)){
                        if (Array.isArray(value)){
                            subscriber.next(value.filter(el => el.endsWith(texto)))
                        } else if (value.match(regex)){
                            sobrenome = value
                            subscriber.next(sobrenome)
                        }
                    }
                },
                error(e){
                    subscriber.error(e)
                },
                complete(){
                    subscriber.complete()
                }
            })
        })
    }
}

of(['Ana Silva', 'Giuliana Silva', 'Fabio Reich'])
    .pipe(filtraSobrenome('Silva'))
    .subscribe(console.log)